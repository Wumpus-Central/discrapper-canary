n.d(t, { B: () => U });
var r = n(627968),
    i = n(834730),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(993408),
    c = n(140735),
    u = n(580630),
    d = n(375708),
    m = n(252955);
let R = (e) => {
    let {
            price: { amount: t, currency: n },
            className: l,
            variant: a = "heading-md/semibold",
        } = e,
        o = (0, u.RS)(t, n);
    return (0, r.jsxs)(i.E, {
        variant: a,
        className: s()(m.v, l),
        children: [
            (0, r.jsx)(c.A, { children: d.intl.format(d.t["2CEGln"], { price: o }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: o }),
        ],
    });
};
var N = n(219103),
    h = n(469215);
function _(e) {
    let {
            product: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: l,
            className: a,
            discountOfferAmount: c,
            hideStrikethroughPrice: u = !1,
            discountIconDisplayMode: d,
            discountIconSize: m = "md",
        } = e,
        _ = (0, o.WD)(t, { hasShopDiscount: n, discount: l });
    if (null == _) return null;
    let { defaultPrice: A, showDefaultPriceOnly: g } = _;
    if (g)
        return (0, r.jsx)("div", {
            className: s()(h.kG, a),
            children: (0, r.jsx)(N.x, { priceAmount: A.amount, priceCurrency: A.currency }),
        });
    let { showDiscountPrice: E, originalPrice: v, finalPrice: p } = _;
    return (0, r.jsxs)("div", {
        className: s()(h.kG, a),
        children: [
            u ? null : (0, r.jsx)(R, { price: v, className: h.q9 }),
            (0, r.jsx)(N.x, {
                priceAmount: p.amount,
                priceCurrency: p.currency,
                discount: l,
                className: s()({ [h.q9]: null == c }),
                discountIconConfig: E && null != d ? { displayMode: d, source: i ?? o.D0.NITRO, size: m } : void 0,
                discountOfferAmount: c,
            }),
        ],
    });
}
var A = n(990078),
    g = n(403581),
    E = n(939249),
    v = n(688810),
    p = n(532794),
    x = n(758836),
    T = n(788868),
    f = n(447806);
let b = (e) => {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, v.Ay)(),
        a = l.useRef(null);
    return (0, r.jsx)(E.D, {
        className: f.F,
        innerRef: a,
        onClick: () => {
            n?.(x.sH.SUBSCRIBE_NOW), (0, p.A)({ subscriptionTier: T.pe.TIER_2, analyticsLocations: i, returnRef: a });
        },
        children: t,
    });
};
var C = n(652215),
    O = n(805961);
function B(e) {
    let { product: t, onTrackClick: n } = e,
        l = (0, o.yt)(t, C.lid.PREMIUM_TIER_2);
    if (null == l) return null;
    let a = (0, u.RS)(l.amount, l.currency);
    return (0, r.jsxs)("div", {
        className: O.k,
        children: [
            (0, r.jsx)(A.m, {
                text: d.intl.string(d.t.MPFyJ5),
                "aria-label": d.intl.string(d.t.X3Ekj8),
                children: (0, r.jsx)(g.t, { size: "md", color: "currentColor", className: O.o }),
            }),
            (0, r.jsx)(i.E, {
                variant: "text-xs/medium",
                children: d.intl.format(d.t.Sv8iic, {
                    price: a,
                    subscribeNowHook: (e) => (0, r.jsx)(b, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var j = n(818348),
    k = n(752274);
function S(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: l } = e,
        a = n ? d.intl.string(d.t.wu4gyV) : d.intl.string(d.t.eFNRzU),
        s = n || !l;
    return (0, r.jsxs)("div", {
        className: k.eg,
        children: [
            (0, r.jsx)("div", {
                className: k.zR,
                children: (0, r.jsx)(i.E, { variant: "text-xs/normal", className: s ? k.r9 : void 0, children: a }),
            }),
            (0, r.jsx)(N.x, { priceAmount: t.amount, priceCurrency: t.currency, className: s ? k.r9 : void 0 }),
        ],
    });
}
function U(e) {
    let {
            prices: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: l,
            product: a,
            hasSufficientOrbs: s,
            onTrackClick: o,
            isProductDisabled: c,
            discountOfferAmount: u,
        } = e,
        d = null != u;
    return 0 === t.length
        ? null
        : t[0].currency === j.Yr.DISCORD_ORB
          ? (0, r.jsx)(S, { orbPrice: t[0], isProductDisabled: c, hasSufficientOrbs: s })
          : (0, r.jsxs)("div", {
                className: k.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: k.pw,
                        children: [
                            (0, r.jsx)(_, {
                                product: a,
                                discount: l,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n || d,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: u,
                            }),
                            n || d ? null : (0, r.jsx)(B, { product: a, onTrackClick: o }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === j.Yr.DISCORD_ORB &&
                        (0, r.jsx)(N.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: c || !s ? k.r9 : void 0,
                        }),
                ],
            });
}
