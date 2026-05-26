"use strict";
n.d(t, { zC: () => g, Ch: () => A, Gt: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(187322),
    l = n(331322),
    u = n(936005),
    c = n(536804),
    d = n(789279),
    _ = n(584648),
    f = n(518898),
    h = n(751591);
function p(e, t, n) {
    let s = (0, u.A)(e);
    return r.forwardRef(function (o, u) {
        let {
                children: p,
                className: m,
                dir: g = "ltr",
                orientation: A = "vertical",
                overflow: I = "scroll",
                fade: T = !1,
                customTheme: S = !1,
                paddingFix: N = !0,
                style: y,
                gap: C,
                experimental_useStack: v,
                disableFocusRingScope: O = !1,
                ...R
            } = o,
            { scrollerRef: b, getScrollerState: D } = (0, c.A)(),
            L = (0, d.A)(b, A);
        r.useImperativeHandle(
            u,
            () => ({ getScrollerNode: () => b.current, getScrollerState: D, ...(0, _.A)(b, D, L, A) }),
            [b, D, A, L],
        );
        let w = (0, f.A)({ paddingFix: N, orientation: A, dir: g, className: m, scrollerRef: b, specs: s });
        return v
            ? (0, i.jsx)(l.B, {
                  gap: C,
                  ref: b,
                  className: a()(m, { [e]: !0, [t]: T, [n]: S }),
                  style: (0, h.Ay)(y, A, I),
                  dir: g,
                  ...R,
                  children: (0, i.jsxs)(E, { disableFocusRingScope: O, containerRef: b, children: [p, w] }),
              })
            : (0, i.jsx)("div", {
                  ref: b,
                  className: a()(m, { [e]: !0, [t]: T, [n]: S }),
                  style: (0, h.Ay)(y, A, I),
                  dir: g,
                  ...R,
                  children: (0, i.jsxs)(E, { disableFocusRingScope: O, containerRef: b, children: [p, w] }),
              });
    });
}
function E(e) {
    let { disableFocusRingScope: t, containerRef: n, children: r } = e;
    return t ? r : (0, i.jsx)(o.xp, { containerRef: n, children: r });
}
var m = n(45596);
let g = p(m.dv, m.Rv, m.D8),
    A = p(m.yL, m.Rv, m.D8),
    I = p(m.qZ, m.Rv, m.D8);
