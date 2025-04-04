n.d(t, { Z: () => d }), n(47120);
var r = n(147913),
    i = n(579806),
    o = n(710845),
    a = n(199902),
    s = n(501787);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = new o.Z('OverlayContentProtectionManagerV3');
class u extends r.Z {
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            l(this, 'shouldEnable', !1),
            l(this, 'enabled', !1),
            l(this, 'setContentProtection', (e) => {
                (this.shouldEnable = e), this.flushContentProtection();
            }),
            l(this, 'resetWindowState', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                (t.enabled = !1), e && t.flushContentProtection();
            }),
            l(this, 'flushContentProtection', () => {
                try {
                    var e, t;
                    if (this.enabled === this.shouldEnable) return;
                    null == (e = (t = i.Z.window).setWindowContentProtection) || e.call(t, s.$J, this.shouldEnable), (this.enabled = this.shouldEnable);
                } catch (e) {
                    c.error('Error setting content protection:', e);
                }
            }),
            l(this, 'actions', {
                STREAM_START: (e) => {
                    let { pid: t, sourceId: n } = e,
                        r = null != t || (null != n && n.startsWith('window'));
                    this.setContentProtection(r);
                },
                STREAM_STOP: () => {
                    null == a.Z.getCurrentUserActiveStream() && this.setContentProtection(!1);
                }
            });
    }
}
let d = new u();
