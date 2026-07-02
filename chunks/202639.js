"use strict";
n.d(t, { d: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(717421),
    u = n(834730),
    d = n(465794),
    c = n(202541),
    _ = n(650583),
    h = n(379378);
function f(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: s,
            button: f,
            buttonAnalyticsObject: E,
            className: p,
            onSubscribeModalClose: m,
            position: g = "floating",
            useUpdatedStyling: A = !1,
            subscribeButtonVariantOverride: I,
            leadingAction: T,
        } = e,
        [S, N] = r.useState(t);
    t && !S && N(!0);
    let C = (0, l.z)({
        transform: t ? "translateY(0%)" : "translateY(120%)",
        opacity: +!!t,
        config: { tension: 120, friction: 14 },
        onRest: () => {
            t || N(!1);
        },
    });
    return (0, i.jsxs)(o.animated.div, {
        style: { ...C, visibility: S ? "visible" : "hidden" },
        onKeyDown: (e) => {
            (e.key === _.dh.ENTER || e.key === _.dh.SPACE) && e.stopPropagation();
        },
        className: a()(h.Zj, A && h.ww, { [h.tO]: "floating" === g, [h.Kx]: "inline" === g }, p),
        children: [
            (0, i.jsx)(u.E, { variant: s ?? "text-sm/medium", color: "text-strong", className: h.tD, children: n }),
            null != T && (0, i.jsx)("div", { className: h.Zv, children: T }),
            "string" == typeof f
                ? (0, i.jsx)(d.A, {
                      size: "sm",
                      subscriptionTier: c.pe.TIER_2,
                      buttonTextOverride: f,
                      premiumModalAnalyticsLocation: E,
                      tabIndex: t ? 0 : -1,
                      onSubscribeModalClose: m,
                      variantOverride: I,
                  })
                : f,
        ],
    });
}
