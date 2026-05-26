n.d(t, { A: () => A, K: () => b });
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
    g = n(521754),
    m = n(331322),
    p = n(508770),
    f = n(534514),
    _ = n(834730),
    h = n(731454),
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
            badgeImage: A,
            badgeName: C,
            progressCircle: y,
            rarity: I,
            isAnimated: j = !1,
            targetElementRef: T,
            onShow: S,
            position: O = "top",
        } = e,
        N = j && null == y,
        {
            tooltipId: U,
            isVisible: B,
            targetElementRef: D,
            trigger: M,
        } = (0, g.D)({ children: t, targetElementRef: T, delay: v.In, onTooltipShow: S }),
        P = I === a.x.COMMON ? null : (0, h.V)(I),
        k = (0, r.jsxs)("div", {
            className: R.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                (0, r.jsx)("div", {
                    className: i()(R.fA, { [R.qJ]: N }),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(x.BadgeImageWithProgressCircle, {
                        src: A,
                        alt: C,
                        progressCircleText: y?.text,
                        progressCirclePercent: y?.percent,
                        progressCircleUrgency: y?.urgency,
                        compact: !0,
                    }),
                }),
                (0, r.jsxs)(m.B, {
                    gap: 12,
                    align: "center",
                    className: R.i8,
                    children: [
                        null != P && (0, r.jsx)(p.E, { ...P }),
                        (0, r.jsx)(f.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: i()(R.DD, { [R.x$]: "nitro" === b }),
                            children: n,
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", className: R.rf, children: l }),
            ],
        }),
        L = null != l ? `${n}. ${l}` : n,
        w = (0, c.j)({ shouldShow: B })((e, t) =>
            t
                ? (0, r.jsx)(d.Bc, {
                      isRichTooltip: !0,
                      children: (0, r.jsx)(o.R, {
                          isVisible: B,
                          isRendered: !0,
                          targetElementRef: D,
                          content: k,
                          position: O,
                          align: "center",
                          layerContext: E.uY,
                          animationStyle: e,
                          positionKey: (0, u.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, r.jsxs)(r.Fragment, { children: [M, (0, r.jsx)(s.A, { id: U, children: L }), w] });
}
let A = b;
