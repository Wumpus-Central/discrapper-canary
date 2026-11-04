n.d(t, { Gt: () => p, zC: () => f, Ch: () => I });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(331322),
    o = n(330573),
    d = n(536804),
    c = n(354730),
    u = n(584648),
    _ = n(518898),
    E = n(751591),
    A = n(6095);
function h(e, t, n) {
    return function (a) {
        let {
                children: h,
                className: f,
                dir: I = "ltr",
                orientation: p = "vertical",
                overflow: m = "scroll",
                fade: T = !1,
                customTheme: g = !1,
                scrollbarGutter: S = "stable",
                style: N,
                gap: C,
                experimental_useStack: O,
                disableFocusRingScope: R = !1,
                ref: L,
                ...y
            } = a,
            { scrollerRef: D, getScrollerState: b } = (0, d.A)(),
            v = (0, c.A)(D, p);
        r.useImperativeHandle(
            L,
            () => ({ getScrollerNode: () => D.current, getScrollerState: b, ...(0, u.A)(D, b, v, p) }),
            [D, b, p, v],
        );
        let P = (0, _.A)({ scrollbarGutter: S, orientation: p, className: f, scrollerRef: D }),
            M = !1 === S || "vertical" !== p ? void 0 : "stable" === S ? A.x2 : A.GV;
        return O
            ? (0, i.jsx)(l.B, {
                  gap: C,
                  ref: D,
                  className: s()(f, M, { [e]: !0, [t]: T, [n]: g }),
                  style: (0, E.Ay)(N, p, m),
                  dir: I,
                  ...y,
                  children: (0, i.jsxs)(o.t, { disableFocusRingScope: R, containerRef: D, children: [h, P] }),
              })
            : (0, i.jsx)("div", {
                  ref: D,
                  className: s()(f, M, { [e]: !0, [t]: T, [n]: g }),
                  style: (0, E.Ay)(N, p, m),
                  dir: I,
                  ...y,
                  children: (0, i.jsxs)(o.t, { disableFocusRingScope: R, containerRef: D, children: [h, P] }),
              });
    };
}
let f = h(A.dv, A.Rv, A.D8),
    I = h(A.yL, A.Rv, A.D8),
    p = h(A.qZ, A.Rv, A.D8);
