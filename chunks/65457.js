"use strict";
n.d(t, { A: () => _ });
var r = n(205693),
    i = n(827343),
    s = n(439372),
    a = n(217222),
    o = n(430452),
    l = n(723702),
    u = n(855454),
    c = n(652215);
class d extends s.A {
    handleExperimentChange = () => {
        if ((0, l.isWeb)()) return;
        let { enableStats: e } = u.C.getConfig({ location: "KrispExperimentManager handleExperimentChange" });
        i.A.setNoiseCancellationEnableStats(e);
    };
    handleRtcConnectionState = (e) => {
        let { state: t, context: n } = e;
        (0, l.isWeb)() ||
            (n === r.x.DEFAULT &&
                t !== c.S7L.DISCONNECTED &&
                t === c.S7L.RTC_CONNECTED &&
                o.Ay.getKrispEnableStats() &&
                o.Ay.getNoiseCancellation() &&
                (i.A.setNoiseCancellation(!1), i.A.setNoiseCancellation(!0)));
    };
    stores = new Map().set(a.A, this.handleExperimentChange);
    actions = { RTC_CONNECTION_STATE: this.handleRtcConnectionState };
}
let _ = new d();
