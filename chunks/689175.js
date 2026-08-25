"use strict";
n.d(t, { zC: () => I, Ch: () => f, Gt: () => p });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(331322),
    o = n(330573),
    d = n(536804),
    c = n(789279),
    u = n(584648),
    _ = n(518898),
    E = n(751591),
    A = n(6095);
function h(e, t, n) {
    return r.forwardRef(function (a, h) {
        let {
                children: I,
                className: f,
                dir: p = "ltr",
                orientation: T = "vertical",
                overflow: m = "scroll",
                fade: g = !1,
                customTheme: S = !1,
                scrollbarGutter: N = "stable",
                style: C,
                gap: R,
                experimental_useStack: O,
                disableFocusRingScope: L = !1,
                ...y
            } = a,
            { scrollerRef: D, getScrollerState: v } = (0, d.A)(),
            b = (0, c.A)(D, T);
        r.useImperativeHandle(
            h,
            () => ({ getScrollerNode: () => D.current, getScrollerState: v, ...(0, u.A)(D, v, b, T) }),
            [D, v, T, b],
        );
        let M = (0, _.A)({ scrollbarGutter: N, orientation: T, className: f, scrollerRef: D }),
            P = !1 === N || "vertical" !== T ? void 0 : "stable" === N ? A.x2 : A.GV;
        return O
            ? (0, i.jsx)(l.B, {
                  gap: R,
                  ref: D,
                  className: s()(f, P, { [e]: !0, [t]: g, [n]: S }),
                  style: (0, E.Ay)(C, T, m),
                  dir: p,
                  ...y,
                  children: (0, i.jsxs)(o.t, { disableFocusRingScope: L, containerRef: D, children: [I, M] }),
              })
            : (0, i.jsx)("div", {
                  ref: D,
                  className: s()(f, P, { [e]: !0, [t]: g, [n]: S }),
                  style: (0, E.Ay)(C, T, m),
                  dir: p,
                  ...y,
                  children: (0, i.jsxs)(o.t, { disableFocusRingScope: L, containerRef: D, children: [I, M] }),
              });
    });
}
let I = h(A.dv, A.Rv, A.D8),
    f = h(A.yL, A.Rv, A.D8),
    p = h(A.qZ, A.Rv, A.D8);
