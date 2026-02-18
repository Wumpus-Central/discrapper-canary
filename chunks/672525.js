"use strict";
i.d(t, { Ay: () => m, D3: () => c, Ls: () => u, yS: () => _ });
var n = i(627968);
i(64700);
var s = i(503698),
    r = i.n(s),
    l = i(397927),
    a = i(407775),
    o = i(788868),
    d = i(271057);
function c(e) {
    let { onClick: t, isGift: i, priceOptions: s, showPromotionalGiftBanner: o, narrowLayout: c } = e;
    return (0, n.jsx)(l.DUT, {
        onClick: t,
        style: { cursor: "pointer" },
        children: (0, n.jsx)(a.KV, {
            ctaButton: null,
            showPromotionalGiftBanner: o,
            showYearlyPrice: !0,
            isGift: i,
            isModal: !0,
            priceOptions: s,
            className: r()({ [d.gH]: c }),
            showWumpus: !c,
            showPill: !c,
        }),
    });
}
function u(e) {
    let { onClick: t, isGift: i, priceOptions: s, removeTopMargin: o, narrowLayout: c } = e;
    return (0, n.jsx)(l.DUT, {
        onClick: t,
        style: { cursor: "pointer" },
        children: (0, n.jsx)(a.AP, {
            className: r()({ [d.ym]: !o, [d.gH]: c }),
            ctaButton: null,
            showYearlyPrice: !0,
            isGift: i,
            priceOptions: s,
            useShortTitle: c,
        }),
    });
}
function _(e) {
    let { onSelectSku: t, onSelectPremiumGroup: i, priceOptions: s, showPromotionalGiftBanner: r } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(u, {
                onClick: () => t(o.pe.TIER_0),
                isGift: !1,
                priceOptions: s,
                narrowLayout: !0,
                removeTopMargin: !0,
            }),
            (0, n.jsx)(c, {
                onClick: () => t(o.pe.TIER_2),
                isGift: !1,
                priceOptions: s,
                showPromotionalGiftBanner: r,
                narrowLayout: !0,
            }),
            (0, n.jsx)(l.DUT, {
                onClick: i,
                style: { cursor: "pointer" },
                children: (0, n.jsx)(a.r6, { priceOptions: s, className: d.gH }),
            }),
        ],
    });
}
let m = function (e) {
    let { onSelectSku: t, isGift: i, priceOptions: s, showPromotionalGiftBanner: r } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c, { onClick: () => t(o.pe.TIER_2), isGift: i, priceOptions: s, showPromotionalGiftBanner: r }),
            (0, n.jsx)(u, { onClick: () => t(o.pe.TIER_0), isGift: i, priceOptions: s }),
        ],
    });
};
