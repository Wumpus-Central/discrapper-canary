"use strict";
n.d(t, { d: () => h });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(717421),
    u = n(834730),
    c = n(465794),
    d = n(788868),
    _ = n(650583),
    f = n(379378);
function h(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: s,
            button: h,
            buttonAnalyticsObject: p,
            className: E,
            onSubscribeModalClose: m,
            position: g = "floating",
            useUpdatedStyling: A = !1,
            subscribeButtonVariantOverride: I,
            leadingAction: T,
        } = e,
        [S, N] = r.useState(t);
    t && !S && N(!0);
    let y = (0, l.z)({
        transform: t ? "translateY(0%)" : "translateY(120%)",
        opacity: +!!t,
        config: { tension: 120, friction: 14 },
        onRest: () => {
            t || N(!1);
        },
    });
    return (0, i.jsxs)(o.animated.div, {
        style: { ...y, visibility: S ? "visible" : "hidden" },
        onKeyDown: (e) => {
            (e.key === _.dh.ENTER || e.key === _.dh.SPACE) && e.stopPropagation();
        },
        className: a()(f.Zj, A && f.ww, { [f.tO]: "floating" === g, [f.Kx]: "inline" === g }, E),
        children: [
            (0, i.jsx)(u.E, { variant: s ?? "text-sm/medium", color: "text-strong", className: f.tD, children: n }),
            null != T && (0, i.jsx)("div", { className: f.Zv, children: T }),
            "string" == typeof h
                ? (0, i.jsx)(c.A, {
                      size: "sm",
                      subscriptionTier: d.pe.TIER_2,
                      buttonTextOverride: h,
                      premiumModalAnalyticsLocation: p,
                      tabIndex: t ? 0 : -1,
                      onSubscribeModalClose: m,
                      variantOverride: I,
                  })
                : h,
        ],
    });
}
