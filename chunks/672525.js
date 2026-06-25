"use strict";
n.d(t, { Ay: () => f, D3: () => d, Ls: () => _, yS: () => h });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(939249),
    o = n(331322),
    l = n(810604),
    u = n(788868),
    c = n(52984);
function d(e) {
    let {
        onClick: t,
        isGift: n,
        priceOptions: r,
        showPromotionalGiftBanner: o,
        narrowLayout: u,
        wumpusPosition: d,
        className: _,
    } = e;
    return (0, i.jsx)(a.D, {
        onClick: t,
        className: s()(c.f_, { [c.QD]: u }),
        children: (0, i.jsx)(l.oK, {
            ctaButton: null,
            showPromotionalGiftBanner: o,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: r,
            className: s()(_, { [c.gH]: u }),
            showWumpus: !u,
            showPill: !u,
            wumpusPosition: d,
            narrowLayout: u,
        }),
    });
}
function _(e) {
    let { onClick: t, isGift: n, priceOptions: r, narrowLayout: o, className: u } = e;
    return (0, i.jsx)(a.D, {
        onClick: t,
        className: s()(c.f_, { [c.QD]: o }),
        children: (0, i.jsx)(l.MR, {
            className: s()(u, { [c.gH]: o }),
            ctaButton: null,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: r,
            useShortTitle: o,
        }),
    });
}
function h(e) {
    let { onSelectSku: t, onSelectPremiumGroup: n, priceOptions: r, showPromotionalGiftBanner: h } = e;
    return (0, i.jsxs)(o.B, {
        direction: "horizontal",
        gap: 12,
        children: [
            (0, i.jsx)(_, { onClick: () => t(u.pe.TIER_0), isGift: !1, priceOptions: r, narrowLayout: !0 }),
            (0, i.jsx)(d, {
                onClick: () => t(u.pe.TIER_2),
                isGift: !1,
                priceOptions: r,
                showPromotionalGiftBanner: h,
                narrowLayout: !0,
            }),
            (0, i.jsx)(a.D, {
                onClick: n,
                className: s()(c.f_, c.QD),
                children: (0, i.jsx)(l.r6, { priceOptions: r, className: c.gH }),
            }),
        ],
    });
}
let f = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: r, showPromotionalGiftBanner: s } = e;
    return (0, i.jsxs)(o.B, {
        direction: "vertical",
        gap: 12,
        children: [
            (0, i.jsx)(d, { onClick: () => t(u.pe.TIER_2), isGift: n, priceOptions: r, showPromotionalGiftBanner: s }),
            (0, i.jsx)(_, { onClick: () => t(u.pe.TIER_0), isGift: n, priceOptions: r }),
        ],
    });
};
