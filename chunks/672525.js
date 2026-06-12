n.d(t, { Ay: () => h, D3: () => d, Ls: () => p, yS: () => m });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(939249),
    s = n(331322),
    o = n(226830),
    u = n(788868),
    c = n(995512);
function d(e) {
    let {
        onClick: t,
        isGift: n,
        priceOptions: r,
        showPromotionalGiftBanner: s,
        narrowLayout: u,
        wumpusPosition: d,
        className: p,
    } = e;
    return (0, l.jsx)(a.D, {
        onClick: t,
        className: i()(c.f_, { [c.QD]: u }),
        children: (0, l.jsx)(o.oK, {
            ctaButton: null,
            showPromotionalGiftBanner: s,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: r,
            className: i()(p, { [c.gH]: u }),
            showWumpus: !u,
            showPill: !u,
            wumpusPosition: d,
            narrowLayout: u,
        }),
    });
}
function p(e) {
    let { onClick: t, isGift: n, priceOptions: r, narrowLayout: s, className: u } = e;
    return (0, l.jsx)(a.D, {
        onClick: t,
        className: i()(c.f_, { [c.QD]: s }),
        children: (0, l.jsx)(o.MR, {
            className: i()(u, { [c.gH]: s }),
            ctaButton: null,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: r,
            useShortTitle: s,
        }),
    });
}
function m(e) {
    let { onSelectSku: t, onSelectPremiumGroup: n, priceOptions: r, showPromotionalGiftBanner: m } = e;
    return (0, l.jsxs)(s.B, {
        direction: "horizontal",
        gap: 12,
        children: [
            (0, l.jsx)(p, { onClick: () => t(u.pe.TIER_0), isGift: !1, priceOptions: r, narrowLayout: !0 }),
            (0, l.jsx)(d, {
                onClick: () => t(u.pe.TIER_2),
                isGift: !1,
                priceOptions: r,
                showPromotionalGiftBanner: m,
                narrowLayout: !0,
            }),
            (0, l.jsx)(a.D, {
                onClick: n,
                className: i()(c.f_, c.QD),
                children: (0, l.jsx)(o.r6, { priceOptions: r, className: c.gH }),
            }),
        ],
    });
}
let h = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: r, showPromotionalGiftBanner: i } = e;
    return (0, l.jsxs)(s.B, {
        direction: "vertical",
        gap: 12,
        children: [
            (0, l.jsx)(d, { onClick: () => t(u.pe.TIER_2), isGift: n, priceOptions: r, showPromotionalGiftBanner: i }),
            (0, l.jsx)(p, { onClick: () => t(u.pe.TIER_0), isGift: n, priceOptions: r }),
        ],
    });
};
