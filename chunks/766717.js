n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    l = n(681715),
    a = n(481060),
    s = n(607550),
    o = n(221292),
    c = n(239990);
let d = i.forwardRef(function (e, t) {
    let {
            onCardClick: n,
            tooltipText: i,
            shouldScalePreview: d = !0,
            renderPreview: u,
            moreCount: p,
            isSingleCard: h = !1,
            skuId: f,
            analyticsLocations: g,
            wishlistId: m,
        } = e,
        b = d ? c.cardPreview : c.cardPreviewNoScale,
        _ = h ? c.cardSingle : c.card,
        y = null != p && p > 0;
    return (0, r.jsx)(l.u, {
        text: i,
        position: "top",
        children: (0, r.jsxs)(a.P3F, {
            onClick: () => {
                var e;
                n();
                let t = null != m ? s.Z.getWishlist(m) : null,
                    r = null != (e = null == t ? void 0 : t.hasThirdPartySku()) && e;
                (0, o.Er)({
                    action: y ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                    analyticsLocations: g,
                    skuId: y ? null : f,
                    wishlistId: m,
                    hasThirdPartySku: r,
                });
            },
            className: _,
            "aria-label": i,
            innerRef: t,
            children: [
                (0, r.jsx)("div", {
                    className: b,
                    children: u(),
                }),
                y &&
                    (0, r.jsx)("div", {
                        className: c.moreOverlay,
                        children: (0, r.jsxs)(a.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", p],
                        }),
                    }),
            ],
        }),
    });
});
