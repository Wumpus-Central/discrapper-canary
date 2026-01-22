n.d(t, { A: () => p }), n(896048);
var r = n(439372),
    i = n(77729),
    a = n(626584),
    s = n(616356),
    o = n(777334),
    l = n(41984),
    c = n(392164);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = new a.A("OverlayContentProtectionManagerV3");
class f extends r.A {
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            u(this, "shouldEnable", !1),
            u(this, "enabled", !1),
            u(this, "setContentProtection", (e) => {
                (this.shouldEnable = e), this.flushContentProtection();
            }),
            u(this, "resetWindowState", function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                (t.enabled = !1), e && t.flushContentProtection();
            }),
            u(this, "flushContentProtection", () => {
                try {
                    var e, t;
                    if (this.enabled === this.shouldEnable) return;
                    null === i.A ||
                        void 0 === i.A ||
                        null == (e = (t = i.A.window).setWindowContentProtection) ||
                        e.call(t, c.f, this.shouldEnable),
                        (this.enabled = this.shouldEnable);
                } catch (e) {
                    d.error("Error setting content protection:", e), (0, o.pj)(e, l.Ue.OutOfProcess);
                }
            }),
            u(this, "actions", {
                STREAM_START: (e) => {
                    let { pid: t, sourceId: n } = e,
                        r = null != t || (null != n && n.startsWith("window"));
                    this.setContentProtection(r);
                },
                STREAM_STOP: () => {
                    null == s.A.getCurrentUserActiveStream() && this.setContentProtection(!1);
                },
            });
    }
}
let p = new f();
