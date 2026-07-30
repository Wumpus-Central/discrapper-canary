"use strict";
n.d(t, { zC: () => f, Ch: () => p, Gt: () => T });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(331322),
    o = n(330573),
    d = n(936005),
    c = n(536804),
    u = n(789279),
    _ = n(584648),
    E = n(518898),
    A = n(751591);
function h(e, t, n) {
    let a = (0, d.A)(e);
    return r.forwardRef(function (d, h) {
        let {
                children: I,
                className: f,
                dir: p = "ltr",
                orientation: T = "vertical",
                overflow: m = "scroll",
                fade: g = !1,
                customTheme: S = !1,
                paddingFix: N = !0,
                style: C,
                gap: O,
                experimental_useStack: R,
                disableFocusRingScope: L = !1,
                ...D
            } = d,
            { scrollerRef: y, getScrollerState: v } = (0, c.A)(),
            b = (0, u.A)(y, T);
        r.useImperativeHandle(
            h,
            () => ({ getScrollerNode: () => y.current, getScrollerState: v, ...(0, _.A)(y, v, b, T) }),
            [y, v, T, b],
        );
        let M = (0, E.A)({ paddingFix: N, orientation: T, dir: p, className: f, scrollerRef: y, specs: a });
        return R
            ? (0, i.jsx)(l.B, {
                  gap: O,
                  ref: y,
                  className: s()(f, { [e]: !0, [t]: g, [n]: S }),
                  style: (0, A.Ay)(C, T, m),
                  dir: p,
                  ...D,
                  children: (0, i.jsxs)(o.t, { disableFocusRingScope: L, containerRef: y, children: [I, M] }),
              })
            : (0, i.jsx)("div", {
                  ref: y,
                  className: s()(f, { [e]: !0, [t]: g, [n]: S }),
                  style: (0, A.Ay)(C, T, m),
                  dir: p,
                  ...D,
                  children: (0, i.jsxs)(o.t, { disableFocusRingScope: L, containerRef: y, children: [I, M] }),
              });
    });
}
var I = n(947876);
let f = h(I.dv, I.Rv, I.D8),
    p = h(I.yL, I.Rv, I.D8),
    T = h(I.qZ, I.Rv, I.D8);
