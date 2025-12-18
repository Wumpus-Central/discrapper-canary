n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(681715),
    l = n(481060),
    c = n(602733),
    u = n(785717),
    d = n(120209),
    f = n(669155);
let p = i.forwardRef(function (e, t) {
    var n, i, a;
    let {
            onCardClick: p,
            tooltipConfig: _,
            shouldScalePreview: m = !0,
            renderPreview: h,
            moreCount: g,
            isSingleCard: E = !1,
            wishlistId: b,
            wishlistItem: y,
            cardSize: O = d.H.MEDIUM,
            itemSource: v,
        } = e,
        { skuId: S, skuProductLine: I } = y,
        { trackUserProfileWishlistAction: T } = (0, u.KZ)(),
        C = m ? f.cardPreview : f.cardPreviewNoScale,
        A = E ? f.cardSingle : f.card,
        N = null != g && g > 0,
        P = (0, r.jsxs)(l.P3F, {
            onClick: () => {
                p(),
                    T({
                        action: N ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        skuId: N ? null : S,
                        wishlistId: b,
                        productLines: new Set([I]),
                    });
            },
            className: o()(A, { [f.cardSmall]: O === d.H.SMALL }),
            "aria-label": null != (i = _.title) ? i : "",
            innerRef: t,
            children: [
                (0, r.jsx)("div", {
                    className: C,
                    children: h(),
                }),
                N &&
                    (0, r.jsx)("div", {
                        className: f.moreOverlay,
                        children: (0, r.jsxs)(l.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", g],
                        }),
                    }),
            ],
        }),
        R = !N && null != v;
    return (0, r.jsxs)("div", {
        className: o()({ [f.wrapperContainer]: R }),
        children: [
            R &&
                (0, r.jsx)("div", {
                    className: f.contextContainer,
                    children:
                        v === c.lr.POPULAR
                            ? (0, r.jsx)(l.YqE, {
                                  className: o()(f.contextIcon, f.fireIcon),
                                  size: "xxs",
                                  color: "currentColor",
                              })
                            : (0, r.jsx)(l.h_8, {
                                  className: o()(f.contextIcon, f.heartIcon),
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                }),
            (0, r.jsx)(s.i_, {
                asContainer: !0,
                asset: null == (n = _.renderIcon) ? void 0 : n.call(_, y),
                assetSize: c.EU,
                title: _.title,
                body: null != (a = _.body) ? a : "",
                children: P,
            }),
        ],
    });
});
