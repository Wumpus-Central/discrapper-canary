n.d(t, {
    Y: () => c,
    Z: () => u
}),
    n(47120);
var r = n(544891),
    i = n(147913),
    o = n(25733),
    a = n(981631);
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
        o.Z.openDmSettingsUpsellModal(e.guildId);
    }
    constructor(...e) {
        super(...e), s(this, 'actions', { DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow });
    }
}
function c(e) {
    return r.tn.post({
        url: a.ANM.DM_SETTINGS_UPSELL_ACK(e),
        rejectWithError: !1
    });
}
let u = new l();
