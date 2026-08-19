"use strict";
n.d(t, { A: () => _ });
var i = n(439372),
    r = n(77729),
    a = n(626584),
    s = n(616356),
    l = n(777334),
    o = n(41984),
    d = n(392164);
let c = new a.A("OverlayContentProtectionManagerV3");
class u extends i.A {
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
            r.A?.window.setWindowContentProtection?.(d.f, this.shouldEnable), (this.enabled = this.shouldEnable);
        } catch (e) {
            c.error("Error setting content protection:", e), (0, l.pj)(e, o.Ue.OutOfProcess);
        }
    };
    actions = {
        STREAM_START: (e) => {
            let { pid: t, sourceId: n } = e,
                i = null != t || (null != n && n.startsWith("window"));
            this.setContentProtection(i);
        },
        STREAM_STOP: () => {
            null == s.A.getCurrentUserActiveStream() && this.setContentProtection(!1);
        },
    };
}
let _ = new u();
