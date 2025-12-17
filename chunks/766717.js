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
        } = e,
        { skuId: v, skuProductLine: S } = y,
        { trackUserProfileWishlistAction: I } = (0, u.KZ)(),
        T = m ? f.cardPreview : f.cardPreviewNoScale,
        C = E ? f.cardSingle : f.card,
        A = null != g && g > 0,
        N = (0, r.jsxs)(l.P3F, {
            onClick: () => {
                p(),
                    I({
                        action: A ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        skuId: A ? null : v,
                        wishlistId: b,
                        productLines: new Set([S]),
                    });
            },
            className: o()(C, { [f.cardSmall]: O === d.H.SMALL }),
            "aria-label": null != (i = _.title) ? i : "",
            innerRef: t,
            children: [
                (0, r.jsx)("div", {
                    className: T,
                    children: h(),
                }),
                A &&
                    (0, r.jsx)("div", {
                        className: f.moreOverlay,
                        children: (0, r.jsxs)(l.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", g],
                        }),
                    }),
            ],
        });
    return null != _.title && null == _.body && null == _.renderIcon
        ? (0, r.jsx)(s.u, {
              text: _.title,
              position: "top",
              children: N,
          })
        : (0, r.jsx)(s.i_, {
              asContainer: !0,
              asset: null == (n = _.renderIcon) ? void 0 : n.call(_, y),
              assetSize: c.EU,
              title: _.title,
              body: null != (a = _.body) ? a : "",
              children: N,
          });
});
