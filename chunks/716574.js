"use strict";
n.d(t, { A: () => A, K: () => g });
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
    f = n(534514),
    h = n(834730),
    p = n(750506),
    E = n(518477),
    m = n(128845);
function g(e) {
    let {
            children: t,
            title: n,
            body: r,
            variant: g = "default",
            graphic: A,
            targetElementRef: I,
            onShow: T,
            position: S = "top",
        } = e,
        {
            tooltipId: N,
            isVisible: y,
            targetElementRef: C,
            trigger: v,
        } = (0, d.D)({ children: t, targetElementRef: I, delay: E.In, onTooltipShow: T }),
        O = (0, i.jsxs)("div", {
            className: m.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                (0, i.jsx)("div", {
                    className: m.fA,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(_.v, { ...A, aspectRatio: A.aspectRatio ?? "16/9" }),
                }),
                (0, i.jsx)(f.D, {
                    variant: "display-sm",
                    color: "text-strong",
                    className: s()(m.DD, { [m.x$]: "nitro" === g }),
                    children: n,
                }),
                null != r &&
                    (0, i.jsx)(h.E, { variant: "text-sm/medium", color: "text-subtle", className: m.rf, children: r }),
            ],
        }),
        R = null != r ? `${n}. ${r}` : n,
        b = (0, c.j)({ shouldShow: y })((e, t) =>
            t
                ? (0, i.jsx)(l.Bc, {
                      isRichTooltip: !0,
                      children: (0, i.jsx)(o.R, {
                          isVisible: y,
                          isRendered: !0,
                          targetElementRef: C,
                          content: O,
                          position: S,
                          align: "center",
                          layerContext: p.uY,
                          animationStyle: e,
                          positionKey: (0, u.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, { children: [v, (0, i.jsx)(a.A, { id: N, children: R }), b] });
}
let A = g;
