n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(681715),
    a = n(481060),
    s = n(602733),
    o = n(785717),
    c = n(239990);
let d = i.forwardRef(function (e, t) {
    var n, i, d;
    let {
            onCardClick: u,
            tooltipConfig: p,
            shouldScalePreview: h = !0,
            renderPreview: f,
            moreCount: g,
            isSingleCard: m = !1,
            wishlistId: b,
            wishlistItem: _,
        } = e,
        { skuId: y, skuProductLine: O } = _,
        { trackUserProfileWishlistAction: j } = (0, o.KZ)(),
        x = h ? c.cardPreview : c.cardPreviewNoScale,
        v = m ? c.cardSingle : c.card,
        C = null != g && g > 0,
        I = (0, r.jsxs)(a.P3F, {
            onClick: () => {
                u(),
                    j({
                        action: C ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        skuId: C ? null : y,
                        wishlistId: b,
                        productLines: new Set([O]),
                    });
            },
            className: v,
            "aria-label": null != (i = p.title) ? i : "",
            innerRef: t,
            children: [
                (0, r.jsx)("div", {
                    className: x,
                    children: f(),
                }),
                C &&
                    (0, r.jsx)("div", {
                        className: c.moreOverlay,
                        children: (0, r.jsxs)(a.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", g],
                        }),
                    }),
            ],
        });
    return null != p.title && null == p.body && null == p.renderIcon
        ? (0, r.jsx)(l.u, {
              text: p.title,
              position: "top",
              children: I,
          })
        : (0, r.jsx)(l.i_, {
              asContainer: !0,
              asset: null == (n = p.renderIcon) ? void 0 : n.call(p, _),
              assetSize: s.EU,
              title: p.title,
              body: null != (d = p.body) ? d : "",
              children: I,
          });
});
