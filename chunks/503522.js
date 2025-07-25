(n.d(t, { Z: () => _ }), n(388685));
var r = n(615287),
    i = n(147913),
    a = n(579806),
    o = n(710845),
    s = n(199902),
    l = n(41534),
    c = n(501787);
function u(e, t, n) {
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
let d = new o.Z('OverlayContentProtectionManagerV3');
class f extends i.Z {
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            u(this, 'shouldEnable', !1),
            u(this, 'enabled', !1),
            u(this, 'setContentProtection', (e) => {
                ((this.shouldEnable = e), this.flushContentProtection());
            }),
            u(this, 'resetWindowState', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                ((t.enabled = !1), e && t.flushContentProtection());
            }),
            u(this, 'flushContentProtection', () => {
                try {
                    var e, t;
                    if (this.enabled === this.shouldEnable) return;
                    (null === a.Z || void 0 === a.Z || null == (e = (t = a.Z.window).setWindowContentProtection) || e.call(t, c.$J, this.shouldEnable), (this.enabled = this.shouldEnable));
                } catch (e) {
                    (d.error('Error setting content protection:', e), (0, l.D1)(e, r.gl.OutOfProcess));
                }
            }),
            u(this, 'actions', {
                STREAM_START: (e) => {
                    let { pid: t, sourceId: n } = e,
                        r = null != t || (null != n && n.startsWith('window'));
                    this.setContentProtection(r);
                },
                STREAM_STOP: () => {
                    null == s.Z.getCurrentUserActiveStream() && this.setContentProtection(!1);
                }
            }));
    }
}
let _ = new f();
