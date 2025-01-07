t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    s = t(120356),
    r = t.n(s),
    a = t(481060),
    o = t(493773),
    u = t(958707),
    c = t(456963),
    d = t(864073);
function m(e) {
    let { title: n, scrollerClassName: t, scrollerInnerClassName: s, children: m } = e,
        g = i.useRef(null),
        [h, x] = i.useState(!1),
        [S, v] = i.useState(!1),
        Z = i.useCallback(() => {
            let { current: e } = g;
            null != e && (x(!e.isScrolledToTop()), v(!e.isScrolledToBottom()));
        }, []);
    return (
        (0, o.N)(() => Z()),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: r()(d.title, d.scrollWrapper),
                    children: [
                        (0, l.jsx)(a.FormTitle, {
                            className: c.formItemTitle,
                            children: n
                        }),
                        (0, l.jsx)(u.Z, { separator: h })
                    ]
                }),
                (0, l.jsx)('div', {
                    className: t,
                    children: (0, l.jsx)(a.AdvancedScroller, {
                        ref: g,
                        className: r()(d.scrollerInner, s, { [d.bottomSeparator]: S }),
                        onScroll: Z,
                        children: m
                    })
                })
            ]
        })
    );
}
