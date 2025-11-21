n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(681715),
    a = n(481060),
    s = n(785717),
    o = n(239990);
let c = i.forwardRef(function (e, t) {
    let {
            onCardClick: n,
            tooltipTitle: i,
            tooltipBody: c,
            shouldScalePreview: d = !0,
            renderPreview: u,
            moreCount: p,
            isSingleCard: h = !1,
            skuId: f,
            wishlistId: g,
            productLine: m,
        } = e,
        { trackUserProfileWishlistAction: b } = (0, s.KZ)(),
        _ = d ? o.cardPreview : o.cardPreviewNoScale,
        y = h ? o.cardSingle : o.card,
        O = null != p && p > 0,
        j = (0, r.jsxs)(a.P3F, {
            onClick: () => {
                n(),
                    b({
                        action: O ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        skuId: O ? null : f,
                        wishlistId: g,
                        productLines: new Set([m]),
                    });
            },
            className: y,
            "aria-label": c,
            innerRef: t,
            children: [
                (0, r.jsx)("div", {
                    className: _,
                    children: u(),
                }),
                O &&
                    (0, r.jsx)("div", {
                        className: o.moreOverlay,
                        children: (0, r.jsxs)(a.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", p],
                        }),
                    }),
            ],
        });
    return null != i
        ? (0, r.jsx)(l.i_, {
              asContainer: !0,
              title: i,
              body: c,
              children: j,
          })
        : (0, r.jsx)(l.u, {
              text: c,
              position: "top",
              children: j,
          });
});
