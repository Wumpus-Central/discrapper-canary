n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(681715),
    a = n(481060),
    s = n(607550),
    o = n(221292),
    c = n(239990);
let d = i.forwardRef(function (e, t) {
    let {
            onCardClick: n,
            tooltipTitle: i,
            tooltipBody: d,
            shouldScalePreview: u = !0,
            renderPreview: p,
            moreCount: h,
            isSingleCard: f = !1,
            skuId: g,
            analyticsLocations: m,
            wishlistId: b,
        } = e,
        _ = u ? c.cardPreview : c.cardPreviewNoScale,
        y = f ? c.cardSingle : c.card,
        O = null != h && h > 0,
        j = (0, r.jsxs)(a.P3F, {
            onClick: () => {
                var e;
                n();
                let t = null != b ? s.Z.getWishlist(b) : null,
                    r = null != (e = null == t ? void 0 : t.hasThirdPartySku()) && e;
                (0, o.Er)({
                    action: O ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                    analyticsLocations: m,
                    skuId: O ? null : g,
                    wishlistId: b,
                    hasThirdPartySku: r,
                });
            },
            className: y,
            "aria-label": d,
            innerRef: t,
            children: [
                (0, r.jsx)("div", {
                    className: _,
                    children: p(),
                }),
                O &&
                    (0, r.jsx)("div", {
                        className: c.moreOverlay,
                        children: (0, r.jsxs)(a.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", h],
                        }),
                    }),
            ],
        });
    return null != i
        ? (0, r.jsx)(l.i_, {
              asContainer: !0,
              title: i,
              body: d,
              children: j,
          })
        : (0, r.jsx)(l.u, {
              text: d,
              position: "top",
              children: j,
          });
});
