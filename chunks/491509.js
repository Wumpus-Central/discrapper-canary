n.d(t, { A: () => o });
var r = n(587895),
    i = n(652215);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = r.A.getApplication(e.applicationId),
        o = e.getPrice(),
        l = e.getPrice(null, !1),
        c = {
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
            price: null != o ? o.amount : null,
            regular_price: null != l ? l.amount : null,
            currency: null != o ? o.currency : null,
        });
    let d = null;
    return (
        t &&
            (d = {
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
        s({}, c, u, d)
    );
}
