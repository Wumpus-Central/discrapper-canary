"use strict";
r.d(t, { Ay: () => f, D3: () => u, Ls: () => d, yS: () => _ });
var i = r(627968);
r(64700);
var n = r(503698),
    a = r.n(n),
    s = r(939249),
    l = r(77964),
    c = r(788868),
    o = r(995512);
function u(e) {
    let {
        onClick: t,
        isGift: r,
        priceOptions: n,
        showPromotionalGiftBanner: c,
        narrowLayout: u,
        wumpusPosition: d,
        className: _,
    } = e;
    return (0, i.jsx)(s.D, {
        onClick: t,
        style: { cursor: "pointer" },
        children: (0, i.jsx)(l.oK, {
            ctaButton: null,
            showPromotionalGiftBanner: c,
            showYearlyPrice: !0,
            isGift: r,
            isModal: !0,
            priceOptions: n,
            className: a()(_, { [o.gH]: u }),
            showWumpus: !u,
            showPill: !u,
            wumpusPosition: d,
        }),
    });
}
function d(e) {
    let { onClick: t, isGift: r, priceOptions: n, removeTopMargin: c, narrowLayout: u, className: d } = e;
    return (0, i.jsx)(s.D, {
        onClick: t,
        style: { cursor: "pointer" },
        children: (0, i.jsx)(l.MR, {
            className: a()(d, { [o.ym]: !c, [o.gH]: u }),
            ctaButton: null,
            showYearlyPrice: !0,
            isGift: r,
            priceOptions: n,
            useShortTitle: u,
        }),
    });
}
function _(e) {
    let { onSelectSku: t, onSelectPremiumGroup: r, priceOptions: n, showPromotionalGiftBanner: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d, {
                onClick: () => t(c.pe.TIER_0),
                isGift: !1,
                priceOptions: n,
                narrowLayout: !0,
                removeTopMargin: !0,
            }),
            (0, i.jsx)(u, {
                onClick: () => t(c.pe.TIER_2),
                isGift: !1,
                priceOptions: n,
                showPromotionalGiftBanner: a,
                narrowLayout: !0,
            }),
            (0, i.jsx)(s.D, {
                onClick: r,
                style: { cursor: "pointer" },
                children: (0, i.jsx)(l.r6, { priceOptions: n, className: o.gH }),
            }),
        ],
    });
}
let f = function (e) {
    let { onSelectSku: t, isGift: r, priceOptions: n, showPromotionalGiftBanner: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u, { onClick: () => t(c.pe.TIER_2), isGift: r, priceOptions: n, showPromotionalGiftBanner: a }),
            (0, i.jsx)(d, { onClick: () => t(c.pe.TIER_0), isGift: r, priceOptions: n }),
        ],
    });
};
