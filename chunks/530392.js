n.d(t, {
    h: () => u,
    m: () => m
}),
    n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n(793030),
    c = n(147479),
    d = n(946598);
function u(e) {
    let { controls: t, children: n } = e,
        [s, u] = r.useState(!1),
        [m, g] = r.useState(!1),
        p = r.useRef(null),
        h = r.useRef(null),
        f = (0, a.throttle)(() => {
            var e;
            (null == p ? void 0 : p.current) != null && null != t && u((null == (e = p.current) ? void 0 : e.getDistanceFromTop()) > 12);
        }, 200);
    return (r.useLayoutEffect(() => {
        var e, t;
        let n = new ResizeObserver(() => {
                var e, t;
                let n = null != (t = null == p || null == (e = p.current) ? void 0 : e.getScrollerNode()) ? t : null;
                if (null == n || (null == h ? void 0 : h.current) == null) return;
                let i = n.getBoundingClientRect();
                g(h.current.getBoundingClientRect().height > i.height);
            }),
            i = null != (t = null == p || null == (e = p.current) ? void 0 : e.getScrollerNode()) ? t : null;
        return null != i && n.observe(i), (null == h ? void 0 : h.current) != null && n.observe(h.current), () => n.disconnect();
    }, []),
    null == n && null == t)
        ? null
        : (0, i.jsxs)(o.y5, {
              children: [
                  (0, i.jsx)('div', { className: l()(d.contentSpacerTop, { [d.contentSpacerTopBorder]: m && null == t }) }),
                  null != t &&
                      (0, i.jsx)('header', {
                          className: l()(d.contentControls, { [d.contentControlsWithFade]: s }),
                          children: t
                      }),
                  (0, i.jsx)(c.yW, {
                      ref: p,
                      className: d.content,
                      onScroll: f,
                      children: (0, i.jsx)('main', {
                          ref: h,
                          className: l()(d.contentInner, { [d.contentInnerShouldScroll]: m }),
                          children: n
                      })
                  }),
                  (0, i.jsx)('div', { className: l()(d.contentSpacerBottom, { [d.contentSpacerBottomBorder]: m }) })
              ]
          });
}
function m(e) {
    let { children: t } = e;
    return null == t
        ? null
        : (0, i.jsx)('footer', {
              className: l()(d.footer, d.section),
              children: t
          });
}
