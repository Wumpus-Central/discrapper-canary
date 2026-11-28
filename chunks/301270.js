n.d(t, { U3: () => C, CG: () => R, KJ: () => O });
var i = n(554146),
    r = n(385345),
    a = n(945810);
let s = (0, a.mj)({
        name: "2026-11-game-exit-promo-bloons",
        kind: "user",
        defaultConfig: { enabled: !0 },
        variations: { 0: { enabled: !0 }, 1: { enabled: !1 } },
    }),
    l = (0, a.mj)({
        name: "2026-10-game-exit-promo-rust",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var o = n(437614),
    d = n(69236),
    c = n(56485),
    u = n(792996);
function _() {
    let e = (0, d.W8)();
    return { body: u.intl.string(e ? c.default.zi2Lmo : c.default.gt4IWi), decideVisibility: () => "show" };
}
var E = n(288106),
    A = n(871123),
    f = n(832163),
    h = n(429635),
    I = n(741899),
    p = n(188275),
    m = n(804280);
let g = "GameExitPromoPanel",
    T = "1288512934112264234",
    S = Date.parse("2026-12-01T07:59:59Z") + 1;
function N(e) {
    return u.intl.formatToPlainString(m.default["8OFeFD"], { applicationName: e });
}
let C = {
    [o.Xb.BLOONS_2026_BF]: {
        id: o.Xb.BLOONS_2026_BF,
        applicationId: p.S3,
        dismissibleContent: i.M.SLAYER_STOREFRONT_GAME_EXIT_PROMO_BLOONS_2026_BF,
        experiment: r.V,
        startsAtMs: Date.parse("2026-11-23T17:00:00Z"),
        endsAtMs: S,
        imageUrl:
            "https://cdn.discordapp.com/assets/content/9c32fab6e6ac81716af1eaadd751d954d2e0cd861425f3ffd0e1f837abb465c1.png",
        logoUrl:
            "https://cdn.discordapp.com/assets/content/2ccd35aea50dbd88b553b318570d223240e302ffff06437a31c87e2b8fa69ebe.png",
        useContent: _,
        getCtaText: N,
    },
    [o.Xb.RUST_2026_BF]: {
        id: o.Xb.RUST_2026_BF,
        applicationId: T,
        dismissibleContent: i.M.SLAYER_STOREFRONT_GAME_EXIT_PROMO_RUST_2026_BF,
        experiment: r.A,
        startsAtMs: Date.parse("2026-11-23T17:00:00Z"),
        endsAtMs: S,
        imageUrl:
            "https://cdn.discordapp.com/assets/content/eea8d5ed8ebe549494951480f5542d03c35cd4400045ef1cdecdc7a981965fad.png",
        logoUrl:
            "https://cdn.discordapp.com/assets/content/3b0df70ef04cdd2e6a7b06d880ddb89d93c136e76edf5dcdc312fd7f3eeefff8.png",
        useContent: _,
    },
    [o.Xb.RUST_2026_10]: {
        id: o.Xb.RUST_2026_10,
        applicationId: T,
        dismissibleContent: i.M.SLAYER_STOREFRONT_GAME_EXIT_PROMO_RUST,
        experiment: l,
        startsAtMs: Date.parse("2026-10-22T00:00:00-07:00"),
        endsAtMs: Date.parse("2026-11-05T18:00:00Z"),
        imageUrl:
            "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
        useContent: function () {
            return { body: u.intl.string(m.default["93iWsv"]), decideVisibility: () => "show" };
        },
    },
    [o.Xb.BLOONS_2026_11]: {
        id: o.Xb.BLOONS_2026_11,
        applicationId: p.S3,
        dismissibleContent: i.M.SLAYER_STOREFRONT_GAME_EXIT_PROMO_BLOONS,
        experiment: s,
        startsAtMs: Date.parse("2026-11-09T19:00:00Z"),
        endsAtMs: Date.parse("2026-11-20T19:00:00Z"),
        imageUrl:
            "https://cdn.discordapp.com/assets/content/0fc80968a5a6bcc494140841f89dfc51b53aa66639800fef2d52b135c3ac0895.png",
        useContent: function (e) {
            let { isPanelAvailable: t, isDevPreview: n } = e,
                i = (0, I.N)(g, !1);
            (0, h.A)({ applicationId: t && !n && null != i ? p.S3 : null });
            let r = i?.discountPercent ?? (n ? 10 : null);
            return {
                body: null == r ? "" : u.intl.formatToPlainString(m.default.anpjzy, { discountPercent: r }),
                decideVisibility: () => {
                    if (null == i) return ((0, I.s)(g), "hide");
                    let e = f.A.getStorefrontDataForApplicationId(p.S3);
                    if (null == e || "loading" === e.state) return "loading";
                    if ("error" === e.state) return "hide";
                    (0, I.s)(g);
                    let t = Object.values(e.storefront?.promotions ?? {}).find((e) =>
                        e.rewardRequirements.some((e) => (0, A.Ww)(e) && e.skuIds.includes(i.offerSkuId)),
                    );
                    return null != t && t.rewardStatus !== E.GM.EARNED && t.rewardStatus !== E.GM.CONSUMED
                        ? "show"
                        : "hide";
                },
            };
        },
        getCtaText: N,
    },
};
function O(e) {
    return C[e];
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return Object.values(C).find((n) => n.applicationId === e && t >= n.startsAtMs && t < n.endsAtMs) ?? null;
}
