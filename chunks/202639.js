e.d(i, { d: () => m });
var s = e(627968),
    n = e(64700),
    a = e(503698),
    o = e.n(a),
    r = e(922139),
    l = e(717421),
    d = e(834730),
    c = e(465794),
    p = e(788868),
    u = e(650583),
    h = e(379378);
function m(t) {
    let {
            showUpsell: i,
            text: e,
            textVariant: a,
            button: m,
            buttonAnalyticsObject: v,
            className: b,
            onSubscribeModalClose: x,
            position: y = "floating",
            useUpdatedStyling: f = !1,
            subscribeButtonVariantOverride: g,
            leadingAction: k,
        } = t,
        [j, w] = n.useState(i);
    i && !j && w(!0);
    let E = (0, l.z)({
        transform: i ? "translateY(0%)" : "translateY(120%)",
        opacity: +!!i,
        config: { tension: 120, friction: 14 },
        onRest: () => {
            i || w(!1);
        },
    });
    return (0, s.jsxs)(r.animated.div, {
        style: { ...E, visibility: j ? "visible" : "hidden" },
        onKeyDown: (t) => {
            (t.key === u.dh.ENTER || t.key === u.dh.SPACE) && t.stopPropagation();
        },
        className: o()(h.Zj, f && h.ww, { [h.tO]: "floating" === y, [h.Kx]: "inline" === y }, b),
        children: [
            (0, s.jsx)(d.E, { variant: a ?? "text-sm/medium", color: "text-strong", className: h.tD, children: e }),
            null != k && (0, s.jsx)("div", { className: h.Zv, children: k }),
            "string" == typeof m
                ? (0, s.jsx)(c.A, {
                      size: "sm",
                      subscriptionTier: p.pe.TIER_2,
                      buttonTextOverride: m,
                      premiumModalAnalyticsLocation: v,
                      tabIndex: i ? 0 : -1,
                      onSubscribeModalClose: x,
                      variantOverride: g,
                  })
                : m,
        ],
    });
}
