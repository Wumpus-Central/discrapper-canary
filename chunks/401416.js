n.d(t, {
    Y: () => u,
    Z: () => c
}),
    n(47120);
var i = n(544891),
    r = n(147913),
    a = n(25733),
    s = n(981631);
function o(e, t, n) {
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
class l extends r.Z {
    handleDmSettingsUpsellShow(e) {
        a.Z.openDmSettingsUpsellModal(e.guildId);
    }
    constructor(...e) {
        super(...e), o(this, 'actions', { DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow });
    }
}
function u(e) {
    return i.tn.post({
        url: s.ANM.DM_SETTINGS_UPSELL_ACK(e),
        rejectWithError: !1
    });
}
let c = new l();
