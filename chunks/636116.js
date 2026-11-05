n.d(t, { U3: () => I, CG: () => m, KJ: () => p });
var i = n(554146),
    r = n(945810);
let a = (0, r.mj)({
        name: "2026-11-game-exit-promo-bloons",
        kind: "user",
        defaultConfig: { enabled: !0 },
        variations: { 0: { enabled: !0 }, 1: { enabled: !1 } },
    }),
    s = (0, r.mj)({
        name: "2026-10-game-exit-promo-rust",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var l = n(437614),
    o = n(288106),
    d = n(871123),
    c = n(832163),
    u = n(429635),
    _ = n(741899),
    E = n(188275),
    A = n(25082),
    f = n(792996);
let h = "GameExitPromoPanel",
    I = {
        [l.Xb.RUST_2026_10]: {
            id: l.Xb.RUST_2026_10,
            applicationId: "1288512934112264234",
            dismissibleContent: i.M.SLAYER_STOREFRONT_GAME_EXIT_PROMO_RUST,
            experiment: s,
            startsAtMs: Date.parse("2026-10-22T00:00:00-07:00"),
            endsAtMs: Date.parse("2026-11-05T18:00:00Z"),
            imageUrl:
                "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
            useContent: function () {
                return { body: f.intl.string(A.default["93iWsv"]), decideVisibility: () => "show" };
            },
        },
        [l.Xb.BLOONS_2026_11]: {
            id: l.Xb.BLOONS_2026_11,
            applicationId: E.S3,
            dismissibleContent: i.M.SLAYER_STOREFRONT_GAME_EXIT_PROMO_BLOONS,
            experiment: a,
            startsAtMs: Date.parse("2026-11-09T19:00:00Z"),
            endsAtMs: Date.parse("2026-11-20T19:00:00Z"),
            imageUrl:
                "https://cdn.discordapp.com/assets/content/0fc80968a5a6bcc494140841f89dfc51b53aa66639800fef2d52b135c3ac0895.png",
            useContent: function (e) {
                let { isPanelAvailable: t, isDevPreview: n } = e,
                    i = (0, _.N)(h, !1);
                (0, u.A)({ applicationId: t && !n && null != i ? E.S3 : null });
                let r = i?.discountPercent ?? (n ? 10 : null);
                return {
                    body: null == r ? "" : f.intl.formatToPlainString(A.default.anpjzy, { discountPercent: r }),
                    decideVisibility: () => {
                        if (null == i) return ((0, _.s)(h), "hide");
                        let e = c.A.getStorefrontDataForApplicationId(E.S3);
                        if (null == e || "loading" === e.state) return "loading";
                        if ("error" === e.state) return "hide";
                        (0, _.s)(h);
                        let t = Object.values(e.storefront?.promotions ?? {}).find((e) =>
                            e.rewardRequirements.some((e) => (0, d.Ww)(e) && e.skuIds.includes(i.offerSkuId)),
                        );
                        return null != t && t.rewardStatus !== o.GM.EARNED && t.rewardStatus !== o.GM.CONSUMED
                            ? "show"
                            : "hide";
                    },
                };
            },
            getCtaText: (e) => f.intl.formatToPlainString(A.default["8OFeFD"], { applicationName: e }),
        },
    };
function p(e) {
    return I[e];
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return Object.values(I).find((n) => n.applicationId === e && t >= n.startsAtMs && t < n.endsAtMs) ?? null;
}
