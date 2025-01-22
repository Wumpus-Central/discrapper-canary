r.d(n, {
    I: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(803997),
    s = r.n(o),
    l = r(489948),
    u = r(821541),
    c = r(780900);
function d(e, n, r) {
    let o = (0, c.G6)(e);
    return a.forwardRef(function (d, f) {
        let { children: p, className: h, dir: _ = 'ltr', orientation: m = 'vertical', fade: g = !1, customTheme: E = !1, paddingFix: v = !0, style: y, gap: b, experimental_useStack: I, ...T } = d,
            { scrollerRef: S, getScrollerState: A } = (0, c.Ke)(),
            C = (0, c.t2)(S, m);
        a.useImperativeHandle(
            f,
            () => ({
                getScrollerNode: () => S.current,
                getScrollerState: A,
                ...(0, c.Ue)(S, A, C, m)
            }),
            [S, A, m, C]
        );
        let N = (0, c.tT)({
            paddingFix: v,
            orientation: m,
            dir: _,
            className: h,
            scrollerRef: S,
            specs: o
        });
        return I
            ? (0, i.jsx)(u.K, {
                  gap: b,
                  ref: S,
                  className: s()(h, {
                      [e]: !0,
                      [n]: g,
                      [r]: E
                  }),
                  style: (0, c.uT)(y, m),
                  dir: _,
                  ...T,
                  children: (0, i.jsxs)(l.Jc, {
                      containerRef: S,
                      children: [p, N]
                  })
              })
            : (0, i.jsx)('div', {
                  ref: S,
                  className: s()(h, {
                      [e]: !0,
                      [n]: g,
                      [r]: E
                  }),
                  style: (0, c.uT)(y, m),
                  dir: _,
                  ...T,
                  children: (0, i.jsxs)(l.Jc, {
                      containerRef: S,
                      children: [p, N]
                  })
              });
    });
}
