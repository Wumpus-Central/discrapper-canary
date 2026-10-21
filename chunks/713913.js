n.d(t, { U3: () => o, KJ: () => d, CG: () => c });
var i = n(554146);
let r = (0, n(945810).mj)({
    name: "2026-10-game-exit-promo-rust",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var a = n(437614),
    s = n(206285),
    l = n(105292);
let o = {
    [a.Xb.RUST_2026_10]: {
        id: a.Xb.RUST_2026_10,
        applicationId: "1288512934112264234",
        dismissibleContent: i.M.SLAYER_STOREFRONT_GAME_EXIT_PROMO_RUST,
        experiment: r,
        startsAtMs: Date.parse("2026-10-22T00:00:00-07:00"),
        endsAtMs: Date.parse("2026-11-05T18:00:00Z"),
        imageUrl:
            "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
        getBody: () => l.intl.string(s.default["93iWsv"]),
    },
};
function d(e) {
    return o[e];
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return Object.values(o).find((n) => n.applicationId === e && t >= n.startsAtMs && t < n.endsAtMs) ?? null;
}
