"use strict";
n.d(t, { d: () => A });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(4798),
    o = n(717421),
    d = n(834730),
    c = n(465794),
    u = n(202541),
    _ = n(650583),
    E = n(402986);
function A(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: a,
            button: A,
            buttonAnalyticsObject: h,
            className: I,
            onSubscribeModalClose: f,
            position: p = "floating",
            useUpdatedStyling: T = !1,
            leadingAction: m,
        } = e,
        [g, S] = r.useState(t);
    t && !g && S(!0);
    let N = (0, o.z)({
        transform: t ? "translateY(0%)" : "translateY(120%)",
        opacity: +!!t,
        config: { tension: 120, friction: 14 },
        onRest: () => {
            t || S(!1);
        },
    });
    return (0, i.jsxs)(l.animated.div, {
        style: { ...N, visibility: g ? "visible" : "hidden" },
        onKeyDown: (e) => {
            (e.key === _.dh.ENTER || e.key === _.dh.SPACE) && e.stopPropagation();
        },
        className: s()(E.Zj, T && E.ww, { [E.tO]: "floating" === p, [E.Kx]: "inline" === p }, I),
        children: [
            (0, i.jsx)(d.E, { variant: a ?? "text-sm/medium", color: "text-strong", className: E.tD, children: n }),
            null != m && (0, i.jsx)("div", { className: E.Zv, children: m }),
            "string" == typeof A
                ? (0, i.jsx)(c.A, {
                      size: "sm",
                      subscriptionTier: u.pe.TIER_2,
                      buttonTextOverride: A,
                      premiumModalAnalyticsLocation: h,
                      tabIndex: t ? 0 : -1,
                      onSubscribeModalClose: f,
                  })
                : A,
        ],
    });
}
