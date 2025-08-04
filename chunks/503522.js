(n.d(t, { Z: () => _ }), n(388685));
var r = n(147913),
    i = n(579806),
    a = n(710845),
    o = n(199902),
    s = n(41534),
    l = n(837268),
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
let d = new a.Z('OverlayContentProtectionManagerV3');
class f extends r.Z {
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
                    (null === i.Z || void 0 === i.Z || null == (e = (t = i.Z.window).setWindowContentProtection) || e.call(t, c.$J, this.shouldEnable), (this.enabled = this.shouldEnable));
                } catch (e) {
                    (d.error('Error setting content protection:', e), (0, s.D1)(e, l.gl.OutOfProcess));
                }
            }),
            u(this, 'actions', {
                STREAM_START: (e) => {
                    let { pid: t, sourceId: n } = e,
                        r = null != t || (null != n && n.startsWith('window'));
                    this.setContentProtection(r);
                },
                STREAM_STOP: () => {
                    null == o.Z.getCurrentUserActiveStream() && this.setContentProtection(!1);
                }
            }));
    }
}
let _ = new f();
