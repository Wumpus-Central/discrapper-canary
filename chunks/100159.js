r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(812206),
    a = r(981631);
function o(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = i.Z.getApplication(e.applicationId),
        s = e.getPrice(),
        l = e.getPrice(null, !1),
        u = {
            sku_id: e.id,
            sku_type: e.type,
            application_id: e.applicationId,
            application_name: null != o ? o.name : null,
            store_title: e.name,
            distribution_type: e.premium ? 'premium' : 'distribution'
        },
        c = null;
    r &&
        (c = {
            price: null != s ? s.amount : null,
            regular_price: null != l ? l.amount : null,
            currency: null != s ? s.currency : null
        });
    let d = null;
    return (
        n &&
            (d = {
                has_single_player: e.hasFeature(a.Qa3.SINGLE_PLAYER),
                has_online_multiplayer: e.hasFeature(a.Qa3.ONLINE_MULTIPLAYER),
                has_local_multiplayer: e.hasFeature(a.Qa3.LOCAL_MULTIPLAYER),
                has_pvp_features: e.hasFeature(a.Qa3.PVP),
                has_local_coop: e.hasFeature(a.Qa3.LOCAL_COOP),
                has_online_coop: e.hasFeature(a.Qa3.ONLINE_COOP),
                has_cross_platform: e.hasFeature(a.Qa3.CROSS_PLATFORM),
                has_rich_presence: e.hasFeature(a.Qa3.RICH_PRESENCE),
                has_game_invites: e.hasFeature(a.Qa3.DISCORD_GAME_INVITES),
                has_spectator_mode: e.hasFeature(a.Qa3.SPECTATOR_MODE),
                has_controller_support: e.hasFeature(a.Qa3.CONTROLLER_SUPPORT),
                has_cloud_saves: e.hasFeature(a.Qa3.CLOUD_SAVES),
                has_secure_networking: e.hasFeature(a.Qa3.SECURE_NETWORKING)
            }),
        {
            ...u,
            ...c,
            ...d
        }
    );
}
