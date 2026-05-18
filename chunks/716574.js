"use strict";
n.d(t, { A: () => N, K: () => S });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(536001),
    o = n(140735),
    l = n(237140),
    u = n(112317),
    c = n(348275),
    d = n(505679),
    _ = n(521754),
    f = n(331322),
    h = n(508770),
    p = n(534514),
    E = n(834730),
    m = n(731454),
    g = n(750506),
    A = n(140049),
    I = n(518477),
    T = n(128845);
function S(e) {
    let {
            children: t,
            title: n,
            body: r,
            variant: S = "default",
            badgeImage: N,
            badgeName: y,
            progressCircle: C,
            rarity: v,
            targetElementRef: O,
            onShow: R,
            position: b = "top",
        } = e,
        {
            tooltipId: D,
            isVisible: L,
            targetElementRef: w,
            trigger: M,
        } = (0, _.D)({ children: t, targetElementRef: O, delay: I.In, onTooltipShow: R }),
        P = v === a.x.COMMON ? null : (0, m.V)(v),
        x = (0, i.jsxs)("div", {
            className: T.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                (0, i.jsx)("div", {
                    className: T.fA,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(A.BadgeImageWithProgressCircle, {
                        src: N,
                        alt: y,
                        progressCircleText: C?.text,
                        progressCirclePercent: C?.percent,
                        progressCircleUrgency: C?.urgency,
                        compact: !0,
                    }),
                }),
                (0, i.jsxs)(f.B, {
                    gap: 12,
                    align: "center",
                    className: T.i8,
                    children: [
                        null != P && (0, i.jsx)(h.E, { ...P }),
                        (0, i.jsx)(p.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: s()(T.DD, { [T.x$]: "nitro" === S }),
                            children: n,
                        }),
                    ],
                }),
                null != r &&
                    (0, i.jsx)(E.E, { variant: "text-sm/medium", color: "text-subtle", className: T.rf, children: r }),
            ],
        }),
        U = null != r ? `${n}. ${r}` : n,
        k = (0, d.j)({ shouldShow: L })((e, t) =>
            t
                ? (0, i.jsx)(u.Bc, {
                      isRichTooltip: !0,
                      children: (0, i.jsx)(l.R, {
                          isVisible: L,
                          isRendered: !0,
                          targetElementRef: w,
                          content: x,
                          position: b,
                          align: "center",
                          layerContext: g.uY,
                          animationStyle: e,
                          positionKey: (0, c.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, { children: [M, (0, i.jsx)(o.A, { id: D, children: U }), k] });
}
let N = S;
