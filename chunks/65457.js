"use strict";
let r;
n.d(t, { A: () => _ });
var i = n(205693),
    a = n(827343),
    s = n(439372),
    o = n(430452),
    l = n(723702),
    u = n(855454),
    c = n(652215);
class d extends s.A {
    handlePostConnectionOpen = () => {
        r?.(),
            (0, l.isWeb)() ||
                (r = u.C.subscribe({ location: "KrispExperimentManager handlePostConnectionOpen" }, (e) => {
                    let { enableStats: t } = e;
                    a.A.setNoiseCancellationEnableStats?.(t);
                }));
    };
    handleRtcConnectionState = (e) => {
        let { state: t, context: n } = e;
        (0, l.isWeb)() ||
            (n === i.x.DEFAULT &&
                t !== c.S7L.DISCONNECTED &&
                t === c.S7L.RTC_CONNECTED &&
                o.Ay.getKrispEnableStats() &&
                o.Ay.getNoiseCancellation() &&
                (a.A.setNoiseCancellation(!1), a.A.setNoiseCancellation(!0)));
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        RTC_CONNECTION_STATE: this.handleRtcConnectionState,
    };
}
let _ = new d();
