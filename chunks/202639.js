e.d(i, { d: () => m });
var s = e(477900),
    n = e(582128),
    a = e(503698),
    o = e.n(a),
    r = e(53466),
    l = e(717421),
    d = e(834730),
    c = e(465794),
    p = e(202541),
    u = e(650583),
    h = e(402986);
function m(t) {
    let {
            showUpsell: i,
            text: e,
            textVariant: a,
            button: m,
            buttonAnalyticsObject: b,
            className: x,
            onSubscribeModalClose: v,
            position: y = "floating",
            useUpdatedStyling: f = !1,
            leadingAction: g,
        } = t,
        [k, j] = n.useState(i);
    i && !k && j(!0);
    let w = (0, l.z)({
        transform: i ? "translateY(0%)" : "translateY(120%)",
        opacity: +!!i,
        config: { tension: 120, friction: 14 },
        onRest: () => {
            i || j(!1);
        },
    });
    return (0, s.jsxs)(r.animated.div, {
        style: { ...w, visibility: k ? "visible" : "hidden" },
        onKeyDown: (t) => {
            (t.key === u.dh.ENTER || t.key === u.dh.SPACE) && t.stopPropagation();
        },
        className: o()(h.Zj, f && h.ww, { [h.tO]: "floating" === y, [h.Kx]: "inline" === y }, x),
        children: [
            (0, s.jsx)(d.E, { variant: a ?? "text-sm/medium", color: "text-strong", className: h.tD, children: e }),
            null != g && (0, s.jsx)("div", { className: h.Zv, children: g }),
            "string" == typeof m
                ? (0, s.jsx)(c.A, {
                      size: "sm",
                      subscriptionTier: p.pe.TIER_2,
                      buttonTextOverride: m,
                      premiumModalAnalyticsLocation: b,
                      tabIndex: i ? 0 : -1,
                      onSubscribeModalClose: v,
                  })
                : m,
        ],
    });
}
