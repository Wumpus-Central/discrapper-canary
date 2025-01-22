r.d(n, {
    Y: function () {
        return d;
    }
});
var i = r(47120);
var a = r(544891),
    o = r(147913),
    s = r(25733),
    l = r(981631);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class c extends o.Z {
    handleDmSettingsUpsellShow(e) {
        s.Z.openDmSettingsUpsellModal(e.guildId);
    }
    constructor(...e) {
        super(...e), u(this, 'actions', { DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow });
    }
}
function d(e) {
    return a.tn.post({
        url: l.ANM.DM_SETTINGS_UPSELL_ACK(e),
        rejectWithError: !1
    });
}
n.Z = new c();
