n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var l = n(873546),
    a = n(399606),
    s = n(481060),
    i = n(100527),
    o = n(594174),
    c = n(74538),
    u = n(381585),
    d = n(994587),
    g = n(884697),
    p = n(724994),
    f = n(680942),
    C = n(786040),
    h = n(445794),
    _ = n(956472),
    m = n(215023),
    b = n(388032);
let E = (e) => {
    let { product: t, selectedVariantIndex: n, cardRef: E } = e,
        S = (0, d.Nd)(),
        v = null == S ? void 0 : S.tab,
        x = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        O = c.ZP.canUseCollectibles(x),
        T = (0, u.sp)(),
        { isPurchased: y, isPartiallyOwnedBundle: j } = (0, p.L)(t),
        L = (0, g.rN)(t),
        k = (0, g.G1)(t),
        I = (0, g.ne)({
            product: t,
            isPartiallyOwnedBundle: j,
            isPurchased: y,
        }),
        P = (0, h.Iw)(t),
        { isOrbExclusive: N } = (0, _.Ip)({
            product: t,
            isPremiumUser: O,
            tab: v,
            hasDiscountOffer: null != P,
        }),
        B = (0, C.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
    return k || l.tq || N || !I || v === m.AW.ORBS
        ? null
        : L
          ? (0, r.jsx)(s.hU, {
                variant: "primary",
                "aria-label": b.intl.string(b.t.SKNnqq),
                icon: s.tEF,
                onClick: (e) => {
                    e.stopPropagation(), B(e);
                },
            })
          : (0, r.jsx)(u.k0, {
                newValue: { pageCategory: v === m.AW.HOME || null == T ? void 0 : T.pageCategory },
                children: (0, r.jsx)(f.Z, {
                    primary: !0,
                    product: t,
                    selectedVariantIndex: n,
                    returnRef: E,
                    tooltipDelay: 250,
                }),
            });
};
