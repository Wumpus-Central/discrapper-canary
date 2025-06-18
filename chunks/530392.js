n.d(e, {
    h: () => u,
    m: () => p
}),
    n(388685);
var i = n(255367),
    r = n(73800),
    l = n(120356),
    a = n.n(l),
    d = n(392711),
    s = n(793030),
    o = n(147479),
    c = n(946598);
function u(t) {
    let { controls: e, children: n } = t,
        [l, u] = r.useState(!1),
        [p, _] = r.useState(!1),
        g = r.useRef(null),
        m = r.useRef(null),
        h = (0, d.throttle)(() => {
            var t;
            (null == g ? void 0 : g.current) != null && null != e && u((null == (t = g.current) ? void 0 : t.getDistanceFromTop()) > 12);
        }, 200);
    return (r.useLayoutEffect(() => {
        var t, e;
        let n = new ResizeObserver(() => {
                var t, e;
                let n = null != (e = null == g || null == (t = g.current) ? void 0 : t.getScrollerNode()) ? e : null;
                if (null == n || (null == m ? void 0 : m.current) == null) return;
                let i = n.getBoundingClientRect();
                _(m.current.getBoundingClientRect().height > i.height);
            }),
            i = null != (e = null == g || null == (t = g.current) ? void 0 : t.getScrollerNode()) ? e : null;
        return null != i && n.observe(i), (null == m ? void 0 : m.current) != null && n.observe(m.current), () => n.disconnect();
    }, []),
    null == n && null == e)
        ? null
        : (0, i.jsxs)(s.y5, {
              children: [
                  (0, i.jsx)('div', { className: a()(c.contentSpacerTop, { [c.contentSpacerTopBorder]: p && null == e }) }),
                  null != e &&
                      (0, i.jsx)('header', {
                          className: a()(c.contentControls, { [c.contentControlsWithFade]: l }),
                          children: e
                      }),
                  (0, i.jsx)(o.yW, {
                      ref: g,
                      className: c.content,
                      onScroll: h,
                      children: (0, i.jsx)('main', {
                          ref: m,
                          className: a()(c.contentInner, { [c.contentInnerShouldScroll]: p }),
                          children: n
                      })
                  }),
                  (0, i.jsx)('div', { className: a()(c.contentSpacerBottom, { [c.contentSpacerBottomBorder]: p }) })
              ]
          });
}
function p(t) {
    let { children: e } = t;
    return null == e
        ? null
        : (0, i.jsx)('footer', {
              className: a()(c.footer, c.section),
              children: e
          });
}
