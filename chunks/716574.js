n.d(t, { A: () => j, K: () => b });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(536001),
    s = n(140735),
    o = n(237140),
    d = n(112317),
    u = n(348275),
    c = n(505679),
    m = n(521754),
    g = n(331322),
    p = n(508770),
    f = n(534514),
    h = n(834730),
    _ = n(731454),
    E = n(750506),
    x = n(140049),
    v = n(518477),
    R = n(128845);
function b(e) {
    let {
            children: t,
            title: n,
            body: l,
            variant: b = "default",
            badgeImage: j,
            badgeName: C,
            progressCircle: A,
            rarity: y,
            targetElementRef: I,
            onShow: O,
            position: T = "top",
        } = e,
        {
            tooltipId: S,
            isVisible: N,
            targetElementRef: D,
            trigger: U,
        } = (0, m.D)({ children: t, targetElementRef: I, delay: v.In, onTooltipShow: O }),
        B = y === a.x.COMMON ? null : (0, _.V)(y),
        k = (0, r.jsxs)("div", {
            className: R.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                (0, r.jsx)("div", {
                    className: R.fA,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(x.BadgeImageWithProgressCircle, {
                        src: j,
                        alt: C,
                        progressCircleText: A?.text,
                        progressCirclePercent: A?.percent,
                        progressCircleUrgency: A?.urgency,
                        compact: !0,
                    }),
                }),
                (0, r.jsxs)(g.B, {
                    gap: 12,
                    align: "center",
                    className: R.i8,
                    children: [
                        null != B && (0, r.jsx)(p.E, { ...B }),
                        (0, r.jsx)(f.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: i()(R.DD, { [R.x$]: "nitro" === b }),
                            children: n,
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsx)(h.E, { variant: "text-sm/medium", color: "text-subtle", className: R.rf, children: l }),
            ],
        }),
        L = null != l ? `${n}. ${l}` : n,
        P = (0, c.j)({ shouldShow: N })((e, t) =>
            t
                ? (0, r.jsx)(d.Bc, {
                      isRichTooltip: !0,
                      children: (0, r.jsx)(o.R, {
                          isVisible: N,
                          isRendered: !0,
                          targetElementRef: D,
                          content: k,
                          position: T,
                          align: "center",
                          layerContext: E.uY,
                          animationStyle: e,
                          positionKey: (0, u.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, r.jsxs)(r.Fragment, { children: [U, (0, r.jsx)(s.A, { id: S, children: L }), P] });
}
let j = b;
