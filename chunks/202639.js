var s = e(477900),
    n = e(582128),
    a = e(503698),
    o = e.n(a),
    r = e(120692),
    l = e(717421),
    d = e(834730),
    c = e(465794),
    p = e(682901),
    u = e(650583),
    h = e(544365);
e.d(
    t,
    {},
    {
        d: function (i) {
            let {
                    showUpsell: t,
                    text: e,
                    textVariant: a,
                    button: m,
                    buttonAnalyticsObject: b,
                    className: y,
                    onSubscribeModalClose: v,
                    position: x = "floating",
                    useUpdatedStyling: f = !1,
                    leadingAction: g,
                } = i,
                [k, j] = n.useState(t);
            t && !k && j(!0);
            let w = (0, l.z)({
                transform: t ? "translateY(0%)" : "translateY(120%)",
                opacity: +!!t,
                config: { tension: 120, friction: 14 },
                onRest: () => {
                    t || j(!1);
                },
            });
            return (0, s.jsxs)(r.animated.div, {
                style: { ...w, visibility: k ? "visible" : "hidden" },
                onKeyDown: (i) => {
                    (i.key === u.dh.ENTER || i.key === u.dh.SPACE) && i.stopPropagation();
                },
                className: o()(h.Zj, f && h.ww, { [h.tO]: "floating" === x, [h.Kx]: "inline" === x }, y),
                children: [
                    (0, s.jsx)(d.E, {
                        variant: a ?? "body-sm/medium",
                        color: "text-strong",
                        className: h.tD,
                        children: e,
                    }),
                    null != g && (0, s.jsx)("div", { className: h.Zv, children: g }),
                    "string" == typeof m
                        ? (0, s.jsx)(c.A, {
                              size: "sm",
                              subscriptionTier: p.pe.TIER_2,
                              buttonTextOverride: m,
                              premiumModalAnalyticsLocation: b,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: v,
                          })
                        : m,
                ],
            });
        },
    },
);
