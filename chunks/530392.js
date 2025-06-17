n.d(t, {
    h: () => u,
    m: () => h
}),
    n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(392711),
    c = n(793030),
    s = n(147479),
    d = n(946598);
function u(e) {
    let { controls: t, children: n } = e,
        [i, u] = l.useState(!1),
        [h, x] = l.useState(!1),
        m = l.useRef(null),
        b = l.useRef(null),
        p = (0, o.throttle)(() => {
            var e;
            (null == m ? void 0 : m.current) != null && null != t && u((null == (e = m.current) ? void 0 : e.getDistanceFromTop()) > 12);
        }, 200);
    return (l.useLayoutEffect(() => {
        var e, t;
        let n = new ResizeObserver(() => {
                var e, t;
                let n = null != (t = null == m || null == (e = m.current) ? void 0 : e.getScrollerNode()) ? t : null;
                if (null == n || (null == b ? void 0 : b.current) == null) return;
                let r = n.getBoundingClientRect();
                x(b.current.getBoundingClientRect().height > r.height);
            }),
            r = null != (t = null == m || null == (e = m.current) ? void 0 : e.getScrollerNode()) ? t : null;
        return null != r && n.observe(r), (null == b ? void 0 : b.current) != null && n.observe(b.current), () => n.disconnect();
    }, []),
    null == n && null == t)
        ? null
        : (0, r.jsxs)(c.y5, {
              children: [
                  (0, r.jsx)('div', { className: a()(d.contentSpacerTop, { [d.contentSpacerTopBorder]: h && null == t }) }),
                  null != t &&
                      (0, r.jsx)('header', {
                          className: a()(d.contentControls, { [d.contentControlsWithFade]: i }),
                          children: t
                      }),
                  (0, r.jsx)(s.yW, {
                      ref: m,
                      className: d.content,
                      onScroll: p,
                      children: (0, r.jsx)('main', {
                          ref: b,
                          className: a()(d.contentInner, { [d.contentInnerShouldScroll]: h }),
                          children: n
                      })
                  }),
                  (0, r.jsx)('div', { className: a()(d.contentSpacerBottom, { [d.contentSpacerBottomBorder]: h }) })
              ]
          });
}
function h(e) {
    let { children: t } = e;
    return null == t
        ? null
        : (0, r.jsx)('footer', {
              className: a()(d.footer, d.section),
              children: t
          });
}
