n.d(t, { I: () => c });
var i = n(200651),
    r = n(192379),
    a = n(803997),
    s = n.n(a),
    o = n(489948),
    l = n(821541),
    u = n(780900);
function c(e, t, n) {
    let a = (0, u.G6)(e);
    return r.forwardRef(function (c, d) {
        let { children: f, className: _, dir: p = 'ltr', orientation: h = 'vertical', fade: m = !1, customTheme: g = !1, paddingFix: E = !0, style: v, gap: y, experimental_useStack: I, ...b } = c,
            { scrollerRef: T, getScrollerState: S } = (0, u.Ke)(),
            A = (0, u.t2)(T, h);
        r.useImperativeHandle(
            d,
            () => ({
                getScrollerNode: () => T.current,
                getScrollerState: S,
                ...(0, u.Ue)(T, S, A, h)
            }),
            [T, S, h, A]
        );
        let N = (0, u.tT)({
            paddingFix: E,
            orientation: h,
            dir: p,
            className: _,
            scrollerRef: T,
            specs: a
        });
        return I
            ? (0, i.jsx)(l.K, {
                  gap: y,
                  ref: T,
                  className: s()(_, {
                      [e]: !0,
                      [t]: m,
                      [n]: g
                  }),
                  style: (0, u.uT)(v, h),
                  dir: p,
                  ...b,
                  children: (0, i.jsxs)(o.Jc, {
                      containerRef: T,
                      children: [f, N]
                  })
              })
            : (0, i.jsx)('div', {
                  ref: T,
                  className: s()(_, {
                      [e]: !0,
                      [t]: m,
                      [n]: g
                  }),
                  style: (0, u.uT)(v, h),
                  dir: p,
                  ...b,
                  children: (0, i.jsxs)(o.Jc, {
                      containerRef: T,
                      children: [f, N]
                  })
              });
    });
}
