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
    f = n(353795),
    h = n(331322),
    p = n(508770),
    E = n(534514),
    m = n(834730),
    g = n(731454),
    A = n(750506),
    I = n(518477),
    T = n(128845);
function S(e) {
    let {
            children: t,
            title: n,
            body: r,
            variant: S = "default",
            graphic: N,
            rarity: y,
            targetElementRef: C,
            onShow: v,
            position: O = "top",
        } = e,
        {
            tooltipId: R,
            isVisible: b,
            targetElementRef: D,
            trigger: L,
        } = (0, _.D)({ children: t, targetElementRef: C, delay: I.In, onTooltipShow: v }),
        w = y === a.x.COMMON ? null : (0, g.V)(y),
        M = (0, i.jsxs)("div", {
            className: T.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                (0, i.jsx)("div", {
                    className: T.fA,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(f.v, { ...N, aspectRatio: N.aspectRatio ?? "16/9" }),
                }),
                (0, i.jsxs)(h.B, {
                    gap: 12,
                    align: "center",
                    className: T.i8,
                    children: [
                        null != w && (0, i.jsx)(p.E, { ...w }),
                        (0, i.jsx)(E.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: s()(T.DD, { [T.x$]: "nitro" === S }),
                            children: n,
                        }),
                    ],
                }),
                null != r &&
                    (0, i.jsx)(m.E, { variant: "text-sm/medium", color: "text-subtle", className: T.rf, children: r }),
            ],
        }),
        P = null != r ? `${n}. ${r}` : n,
        x = (0, d.j)({ shouldShow: b })((e, t) =>
            t
                ? (0, i.jsx)(u.Bc, {
                      isRichTooltip: !0,
                      children: (0, i.jsx)(l.R, {
                          isVisible: b,
                          isRendered: !0,
                          targetElementRef: D,
                          content: M,
                          position: O,
                          align: "center",
                          layerContext: A.uY,
                          animationStyle: e,
                          positionKey: (0, c.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, { children: [L, (0, i.jsx)(o.A, { id: R, children: P }), x] });
}
let N = S;
