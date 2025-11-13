n.d(t, { Z: () => c });
var r = n(951288),
    i = n(647438),
    l = n(681715),
    a = n(481060),
    s = n(221292),
    o = n(239990);
let c = i.forwardRef(function (e, t) {
    let {
            onCardClick: n,
            tooltipText: i,
            shouldScalePreview: c = !0,
            renderPreview: d,
            moreCount: u,
            isSingleCard: p = !1,
            skuId: h,
            analyticsLocations: f,
            wishlistId: g,
        } = e,
        m = c ? o.cardPreview : o.cardPreviewNoScale,
        b = p ? o.cardSingle : o.card,
        _ = null != u && u > 0;
    return (0, r.jsx)(l.u, {
        text: i,
        position: "top",
        children: (0, r.jsxs)(a.P3F, {
            onClick: () => {
                n(),
                    (0, s.Er)({
                        action: _ ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        analyticsLocations: f,
                        skuId: _ ? null : h,
                        wishlistId: g,
                    });
            },
            className: b,
            "aria-label": i,
            innerRef: t,
            children: [
                (0, r.jsx)("div", {
                    className: m,
                    children: d(),
                }),
                _ &&
                    (0, r.jsx)("div", {
                        className: o.moreOverlay,
                        children: (0, r.jsxs)(a.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", u],
                        }),
                    }),
            ],
        }),
    });
});
