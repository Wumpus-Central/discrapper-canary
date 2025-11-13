n.d(t, { Z: () => o });
var r = n(951288),
    i = n(681715),
    l = n(481060),
    a = n(221292),
    s = n(239990);
function o(e) {
    let {
            onCardClick: t,
            tooltipText: n,
            shouldScalePreview: o = !0,
            renderPreview: c,
            moreCount: d,
            isSingleCard: u = !1,
            skuId: p,
            analyticsLocations: h,
            wishlistId: f,
        } = e,
        g = o ? s.cardPreview : s.cardPreviewNoScale,
        m = u ? s.cardSingle : s.card,
        b = null != d && d > 0;
    return (0, r.jsx)(i.u, {
        text: n,
        position: "top",
        children: (0, r.jsxs)(l.P3F, {
            onClick: () => {
                t(),
                    (0, a.Er)({
                        action: b ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        analyticsLocations: h,
                        skuId: b ? null : p,
                        wishlistId: f,
                    });
            },
            className: m,
            "aria-label": n,
            children: [
                (0, r.jsx)("div", {
                    className: g,
                    children: c(),
                }),
                b &&
                    (0, r.jsx)("div", {
                        className: s.moreOverlay,
                        children: (0, r.jsxs)(l.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", d],
                        }),
                    }),
            ],
        }),
    });
}
