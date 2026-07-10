"use strict";
n.d(t, { zC: () => p, Ch: () => T, Gt: () => m });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(187322),
    o = n(331322),
    d = n(936005),
    c = n(536804),
    u = n(789279),
    _ = n(584648),
    E = n(518898),
    A = n(751591);
function h(e, t, n) {
    let a = (0, d.A)(e);
    return r.forwardRef(function (l, d) {
        let {
                children: h,
                className: f,
                dir: p = "ltr",
                orientation: T = "vertical",
                overflow: m = "scroll",
                fade: g = !1,
                customTheme: S = !1,
                paddingFix: N = !0,
                style: C,
                gap: R,
                experimental_useStack: O,
                disableFocusRingScope: L = !1,
                ...D
            } = l,
            { scrollerRef: y, getScrollerState: v } = (0, c.A)(),
            b = (0, u.A)(y, T);
        r.useImperativeHandle(
            d,
            () => ({ getScrollerNode: () => y.current, getScrollerState: v, ...(0, _.A)(y, v, b, T) }),
            [y, v, T, b],
        );
        let M = (0, E.A)({ paddingFix: N, orientation: T, dir: p, className: f, scrollerRef: y, specs: a });
        return O
            ? (0, i.jsx)(o.B, {
                  gap: R,
                  ref: y,
                  className: s()(f, { [e]: !0, [t]: g, [n]: S }),
                  style: (0, A.Ay)(C, T, m),
                  dir: p,
                  ...D,
                  children: (0, i.jsxs)(I, { disableFocusRingScope: L, containerRef: y, children: [h, M] }),
              })
            : (0, i.jsx)("div", {
                  ref: y,
                  className: s()(f, { [e]: !0, [t]: g, [n]: S }),
                  style: (0, A.Ay)(C, T, m),
                  dir: p,
                  ...D,
                  children: (0, i.jsxs)(I, { disableFocusRingScope: L, containerRef: y, children: [h, M] }),
              });
    });
}
function I(e) {
    let { disableFocusRingScope: t, containerRef: n, children: r } = e;
    return t ? r : (0, i.jsx)(l.xp, { containerRef: n, children: r });
}
var f = n(45596);
let p = h(f.dv, f.Rv, f.D8),
    T = h(f.yL, f.Rv, f.D8),
    m = h(f.qZ, f.Rv, f.D8);
