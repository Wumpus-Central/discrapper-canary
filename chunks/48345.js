"use strict";
n.d(t, { A: () => _ });
var r = n(439372),
    i = n(77729),
    a = n(626584),
    s = n(616356),
    o = n(777334),
    l = n(41984),
    u = n(392164);
let c = new a.A("OverlayContentProtectionManagerV3");
class d extends r.A {
    shouldEnable = !1;
    enabled = !1;
    setContentProtection = (e) => {
        (this.shouldEnable = e), this.flushContentProtection();
    };
    resetWindowState = (() => {
        var e = this;
        return function () {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            (e.enabled = !1), t && e.flushContentProtection();
        };
    })();
    flushContentProtection = () => {
        try {
            if (this.enabled === this.shouldEnable) return;
            i.A?.window.setWindowContentProtection?.(u.f, this.shouldEnable), (this.enabled = this.shouldEnable);
        } catch (e) {
            c.error("Error setting content protection:", e), (0, o.pj)(e, l.Ue.OutOfProcess);
        }
    };
    actions = {
        STREAM_START: (e) => {
            let { pid: t, sourceId: n } = e,
                r = null != t || (null != n && n.startsWith("window"));
            this.setContentProtection(r);
        },
        STREAM_STOP: () => {
            null == s.A.getCurrentUserActiveStream() && this.setContentProtection(!1);
        },
    };
}
let _ = new d();
