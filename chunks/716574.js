"use strict";
n.d(t, { A: () => S, K: () => T });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(140735),
    o = n(237140),
    l = n(112317),
    u = n(348275),
    c = n(505679),
    d = n(521754),
    _ = n(353795),
    f = n(331322),
    h = n(508770),
    p = n(534514),
    E = n(834730),
    m = n(731454),
    g = n(750506),
    A = n(518477),
    I = n(128845);
function T(e) {
    let {
            children: t,
            title: n,
            body: r,
            variant: T = "default",
            graphic: S,
            rarity: N,
            targetElementRef: y,
            onShow: C,
            position: v = "top",
        } = e,
        {
            tooltipId: O,
            isVisible: R,
            targetElementRef: b,
            trigger: D,
        } = (0, d.D)({ children: t, targetElementRef: y, delay: A.In, onTooltipShow: C }),
        L = (0, m.V)(N),
        w = (0, i.jsxs)("div", {
            className: I.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                (0, i.jsx)("div", {
                    className: I.fA,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(_.v, { ...S, aspectRatio: S.aspectRatio ?? "16/9" }),
                }),
                (0, i.jsxs)(f.B, {
                    gap: 12,
                    align: "center",
                    className: I.i8,
                    children: [
                        null != L && (0, i.jsx)(h.E, { ...L }),
                        (0, i.jsx)(p.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: s()(I.DD, { [I.x$]: "nitro" === T }),
                            children: n,
                        }),
                    ],
                }),
                null != r &&
                    (0, i.jsx)(E.E, { variant: "text-sm/medium", color: "text-subtle", className: I.rf, children: r }),
            ],
        }),
        M = null != r ? `${n}. ${r}` : n,
        P = (0, c.j)({ shouldShow: R })((e, t) =>
            t
                ? (0, i.jsx)(l.Bc, {
                      isRichTooltip: !0,
                      children: (0, i.jsx)(o.R, {
                          isVisible: R,
                          isRendered: !0,
                          targetElementRef: b,
                          content: w,
                          position: v,
                          align: "center",
                          layerContext: g.uY,
                          animationStyle: e,
                          positionKey: (0, u.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, { children: [D, (0, i.jsx)(a.A, { id: O, children: M }), P] });
}
let S = T;
