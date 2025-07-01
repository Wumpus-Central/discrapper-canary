(n.d(t, {
    h: () => d,
    m: () => f
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(793030),
    c = n(147479),
    u = n(946598);
function d(e) {
    let { controls: t, children: n } = e,
        [a, d] = i.useState(!1),
        [f, _] = i.useState(!1),
        p = i.useRef(null),
        h = i.useRef(null),
        m = (0, s.throttle)(() => {
            var e;
            (null == p ? void 0 : p.current) != null && null != t && d((null == (e = p.current) ? void 0 : e.getDistanceFromTop()) > 12);
        }, 200);
    return (i.useLayoutEffect(() => {
        var e, t;
        let n = new ResizeObserver(() => {
                var e, t;
                let n = null != (t = null == p || null == (e = p.current) ? void 0 : e.getScrollerNode()) ? t : null;
                if (null == n || (null == h ? void 0 : h.current) == null) return;
                let r = n.getBoundingClientRect();
                _(h.current.getBoundingClientRect().height > r.height);
            }),
            r = null != (t = null == p || null == (e = p.current) ? void 0 : e.getScrollerNode()) ? t : null;
        return (null != r && n.observe(r), (null == h ? void 0 : h.current) != null && n.observe(h.current), () => n.disconnect());
    }, []),
    null == n && null == t)
        ? null
        : (0, r.jsxs)(l.y5, {
              children: [
                  (0, r.jsx)('div', { className: o()(u.contentSpacerTop, { [u.contentSpacerTopBorder]: f && null == t }) }),
                  null != t &&
                      (0, r.jsx)('header', {
                          className: o()(u.contentControls, { [u.contentControlsWithFade]: a }),
                          children: t
                      }),
                  (0, r.jsx)(c.yW, {
                      ref: p,
                      className: u.content,
                      onScroll: m,
                      children: (0, r.jsx)('main', {
                          ref: h,
                          className: o()(u.contentInner, { [u.contentInnerShouldScroll]: f }),
                          children: n
                      })
                  }),
                  (0, r.jsx)('div', { className: o()(u.contentSpacerBottom, { [u.contentSpacerBottomBorder]: f }) })
              ]
          });
}
function f(e) {
    let { children: t } = e;
    return null == t
        ? null
        : (0, r.jsx)('footer', {
              className: o()(u.footer, u.section),
              children: t
          });
}
