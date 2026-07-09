n.d(t, { Ay: () => h, D3: () => d, Ls: () => p, yS: () => m });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(939249),
    s = n(331322),
    o = n(735668),
    u = n(202541),
    c = n(52984);
function d(e) {
    let {
        onClick: t,
        isGift: n,
        priceOptions: i,
        showPromotionalGiftBanner: s,
        narrowLayout: u,
        wumpusPosition: d,
        className: p,
    } = e;
    return (0, l.jsx)(a.D, {
        onClick: t,
        className: r()(c.f_, { [c.QD]: u }),
        children: (0, l.jsx)(o.oK, {
            ctaButton: null,
            showPromotionalGiftBanner: s,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: i,
            className: r()(p, { [c.gH]: u }),
            showWumpus: !u,
            showPill: !u,
            wumpusPosition: d,
            narrowLayout: u,
        }),
    });
}
function p(e) {
    let { onClick: t, isGift: n, priceOptions: i, narrowLayout: s, className: u } = e;
    return (0, l.jsx)(a.D, {
        onClick: t,
        className: r()(c.f_, { [c.QD]: s }),
        children: (0, l.jsx)(o.MR, {
            className: r()(u, { [c.gH]: s }),
            ctaButton: null,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: i,
            useShortTitle: s,
        }),
    });
}
function m(e) {
    let { onSelectSku: t, onSelectPremiumGroup: n, priceOptions: i, showPromotionalGiftBanner: m } = e;
    return (0, l.jsxs)(s.B, {
        direction: "horizontal",
        gap: 12,
        children: [
            (0, l.jsx)(p, { onClick: () => t(u.pe.TIER_0), isGift: !1, priceOptions: i, narrowLayout: !0 }),
            (0, l.jsx)(d, {
                onClick: () => t(u.pe.TIER_2),
                isGift: !1,
                priceOptions: i,
                showPromotionalGiftBanner: m,
                narrowLayout: !0,
            }),
            (0, l.jsx)(a.D, {
                onClick: n,
                className: r()(c.f_, c.QD),
                children: (0, l.jsx)(o.r6, { priceOptions: i, className: c.gH }),
            }),
        ],
    });
}
let h = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r } = e;
    return (0, l.jsxs)(s.B, {
        direction: "vertical",
        gap: 12,
        children: [
            (0, l.jsx)(d, { onClick: () => t(u.pe.TIER_2), isGift: n, priceOptions: i, showPromotionalGiftBanner: r }),
            (0, l.jsx)(p, { onClick: () => t(u.pe.TIER_0), isGift: n, priceOptions: i }),
        ],
    });
};
