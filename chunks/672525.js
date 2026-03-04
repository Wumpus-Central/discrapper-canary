"use strict";
n.d(t, { Ay: () => I, D3: () => d, Ls: () => u, yS: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(397927),
    l = n(407775),
    o = n(788868),
    c = n(271057);
function d(e) {
    let {
        onClick: t,
        isGift: n,
        priceOptions: s,
        showPromotionalGiftBanner: o,
        narrowLayout: d,
        wumpusPosition: u,
        className: _,
    } = e;
    return (0, i.jsx)(a.DUT, {
        onClick: t,
        style: { cursor: "pointer" },
        children: (0, i.jsx)(l.KV, {
            ctaButton: null,
            showPromotionalGiftBanner: o,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: s,
            className: r()(_, { [c.gH]: d }),
            showWumpus: !d,
            showPill: !d,
            wumpusPosition: u,
        }),
    });
}
function u(e) {
    let { onClick: t, isGift: n, priceOptions: s, removeTopMargin: o, narrowLayout: d, className: u } = e;
    return (0, i.jsx)(a.DUT, {
        onClick: t,
        style: { cursor: "pointer" },
        children: (0, i.jsx)(l.AP, {
            className: r()(u, { [c.ym]: !o, [c.gH]: d }),
            ctaButton: null,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: s,
            useShortTitle: d,
        }),
    });
}
function _(e) {
    let { onSelectSku: t, onSelectPremiumGroup: n, priceOptions: s, showPromotionalGiftBanner: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u, {
                onClick: () => t(o.pe.TIER_0),
                isGift: !1,
                priceOptions: s,
                narrowLayout: !0,
                removeTopMargin: !0,
            }),
            (0, i.jsx)(d, {
                onClick: () => t(o.pe.TIER_2),
                isGift: !1,
                priceOptions: s,
                showPromotionalGiftBanner: r,
                narrowLayout: !0,
            }),
            (0, i.jsx)(a.DUT, {
                onClick: n,
                style: { cursor: "pointer" },
                children: (0, i.jsx)(l.r6, { priceOptions: s, className: c.gH }),
            }),
        ],
    });
}
let I = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: s, showPromotionalGiftBanner: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d, { onClick: () => t(o.pe.TIER_2), isGift: n, priceOptions: s, showPromotionalGiftBanner: r }),
            (0, i.jsx)(u, { onClick: () => t(o.pe.TIER_0), isGift: n, priceOptions: s }),
        ],
    });
};
