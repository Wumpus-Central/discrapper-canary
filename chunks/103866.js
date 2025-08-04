(n.d(t, { f: () => _ }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(793030),
    c = n(147479),
    u = n(993365),
    d = n(946598);
function f(e) {
    return 'string' == typeof e
        ? (0, r.jsx)(u.x, {
              variant: 'text-md/normal',
              color: 'text-secondary',
              children: e
          })
        : e;
}
function _(e) {
    let { controls: t, children: n } = e;
    if (null == n && null == t) return null;
    let i = f(n);
    return (0, r.jsx)(p, {
        controls: t,
        children: i
    });
}
function p(e) {
    let { controls: t, children: n } = e,
        [a, u] = i.useState(!1),
        [f, _] = i.useState(!1),
        p = i.useRef(null),
        h = i.useRef(null),
        m = (0, s.throttle)(() => {
            var e;
            (null == p ? void 0 : p.current) != null && null != t && u((null == (e = p.current) ? void 0 : e.getDistanceFromTop()) > 12);
        }, 200);
    return (
        i.useLayoutEffect(() => {
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
        (0, r.jsxs)(l.y5, {
            children: [
                (0, r.jsx)('div', { className: o()(d.bodySpacerTop, { [d.bodySpacerTopBorder]: f && null == t }) }),
                null != t &&
                    (0, r.jsx)('header', {
                        className: o()(d.bodyControls, { [d.bodyControlsWithFade]: a }),
                        children: t
                    }),
                (0, r.jsx)(c.yW, {
                    ref: p,
                    className: d.body,
                    onScroll: m,
                    children: (0, r.jsx)('main', {
                        ref: h,
                        className: o()(d.bodyInner, { [d.bodyInnerShouldScroll]: f }),
                        children: n
                    })
                }),
                (0, r.jsx)('div', { className: o()(d.bodySpacerBottom, { [d.bodySpacerBottomBorder]: f }) })
            ]
        })
    );
}
