n.d(t, {
    Y: () => c,
    Z: () => u
}),
    n(388685);
var r = n(544891),
    i = n(147913),
    a = n(25733),
    o = n(981631);
function s(e, t, n) {
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
class l extends i.Z {
    handleDmSettingsUpsellShow(e) {
        a.Z.openDmSettingsUpsellModal(e.guildId);
    }
    constructor(...e) {
        super(...e), s(this, 'actions', { DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow });
    }
}
function c(e) {
    return r.tn.post({
        url: o.ANM.DM_SETTINGS_UPSELL_ACK(e),
        rejectWithError: !1
    });
}
let u = new l();
