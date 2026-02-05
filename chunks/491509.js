"use strict";
n.d(t, { A: () => a });
var r = n(587895),
    i = n(652215);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = r.A.getApplication(e.applicationId),
        s = e.getPrice(),
        o = e.getPrice(null, !1),
        l = {
            sku_id: e.id,
            sku_type: e.type,
            application_id: e.applicationId,
            application_name: null != a ? a.name : null,
            store_title: e.name,
            distribution_type: e.premium ? "premium" : "distribution",
        },
        u = null;
    n &&
        (u = {
            price: null != s ? s.amount : null,
            regular_price: null != o ? o.amount : null,
            currency: null != s ? s.currency : null,
        });
    let c = null;
    return (
        t &&
            (c = {
                has_single_player: e.hasFeature(i.x0t.SINGLE_PLAYER),
                has_online_multiplayer: e.hasFeature(i.x0t.ONLINE_MULTIPLAYER),
                has_local_multiplayer: e.hasFeature(i.x0t.LOCAL_MULTIPLAYER),
                has_pvp_features: e.hasFeature(i.x0t.PVP),
                has_local_coop: e.hasFeature(i.x0t.LOCAL_COOP),
                has_online_coop: e.hasFeature(i.x0t.ONLINE_COOP),
                has_cross_platform: e.hasFeature(i.x0t.CROSS_PLATFORM),
                has_rich_presence: e.hasFeature(i.x0t.RICH_PRESENCE),
                has_game_invites: e.hasFeature(i.x0t.DISCORD_GAME_INVITES),
                has_spectator_mode: e.hasFeature(i.x0t.SPECTATOR_MODE),
                has_controller_support: e.hasFeature(i.x0t.CONTROLLER_SUPPORT),
                has_cloud_saves: e.hasFeature(i.x0t.CLOUD_SAVES),
                has_secure_networking: e.hasFeature(i.x0t.SECURE_NETWORKING),
            }),
        { ...l, ...u, ...c }
    );
}
