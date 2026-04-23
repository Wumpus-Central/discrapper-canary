"use strict";
n.d(t, { zC: () => p, Ch: () => A, Gt: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(187322),
    l = n(331322),
    d = n(936005),
    _ = n(536804),
    u = n(789279),
    c = n(584648),
    E = n(518898),
    h = n(751591);
function m(e, t, n) {
    let s = (0, d.A)(e);
    return r.forwardRef(function (o, d) {
        let {
                children: m,
                className: g,
                dir: p = "ltr",
                orientation: A = "vertical",
                overflow: I = "scroll",
                fade: T = !1,
                customTheme: S = !1,
                paddingFix: N = !0,
                style: C,
                gap: R,
                experimental_useStack: O,
                disableFocusRingScope: y = !1,
                ...v
            } = o,
            { scrollerRef: D, getScrollerState: L } = (0, _.A)(),
            b = (0, u.A)(D, A);
        r.useImperativeHandle(
            d,
            () => ({ getScrollerNode: () => D.current, getScrollerState: L, ...(0, c.A)(D, L, b, A) }),
            [D, L, A, b],
        );
        let w = (0, E.A)({ paddingFix: N, orientation: A, dir: p, className: g, scrollerRef: D, specs: s });
        return O
            ? (0, i.jsx)(l.B, {
                  gap: R,
                  ref: D,
                  className: a()(g, { [e]: !0, [t]: T, [n]: S }),
                  style: (0, h.Ay)(C, A, I),
                  dir: p,
                  ...v,
                  children: (0, i.jsxs)(f, { disableFocusRingScope: y, containerRef: D, children: [m, w] }),
              })
            : (0, i.jsx)("div", {
                  ref: D,
                  className: a()(g, { [e]: !0, [t]: T, [n]: S }),
                  style: (0, h.Ay)(C, A, I),
                  dir: p,
                  ...v,
                  children: (0, i.jsxs)(f, { disableFocusRingScope: y, containerRef: D, children: [m, w] }),
              });
    });
}
function f(e) {
    let { disableFocusRingScope: t, containerRef: n, children: r } = e;
    return t ? r : (0, i.jsx)(o.xp, { containerRef: n, children: r });
}
var g = n(45596);
let p = m(g.dv, g.Rv, g.D8),
    A = m(g.yL, g.Rv, g.D8),
    I = m(g.qZ, g.Rv, g.D8);
