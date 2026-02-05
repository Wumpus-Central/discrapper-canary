"use strict";
n.d(t, { A: () => u, Q: () => l });
var r = n(562465),
    i = n(439372),
    a = n(869290),
    s = n(652215);
class o extends i.A {
    actions = { DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow };
    handleDmSettingsUpsellShow(e) {
        a.A.openDmSettingsUpsellModal(e.guildId);
    }
}
function l(e) {
    return r.Bo.post({ url: s.Rsh.DM_SETTINGS_UPSELL_ACK(e), rejectWithError: !1 });
}
let u = new o();
