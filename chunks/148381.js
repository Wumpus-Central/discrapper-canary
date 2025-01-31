t.d(n, { Z: () => m }), t(47120);
var l = t(200651),
    i = t(192379),
    s = t(120356),
    a = t.n(s),
    r = t(481060),
    o = t(493773),
    u = t(958707),
    c = t(456963),
    d = t(864073);
function m(e) {
    let { title: n, scrollerClassName: t, scrollerInnerClassName: s, children: m } = e,
        x = i.useRef(null),
        [g, h] = i.useState(!1),
        [v, Z] = i.useState(!1),
        S = i.useCallback(() => {
            let { current: e } = x;
            null != e && (h(!e.isScrolledToTop()), Z(!e.isScrolledToBottom()));
        }, []);
    return (
        (0, o.N)(() => S()),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: a()(d.title, d.scrollWrapper),
                    children: [
                        (0, l.jsx)(r.vwX, {
                            className: c.formItemTitle,
                            children: n
                        }),
                        (0, l.jsx)(u.Z, { separator: g })
                    ]
                }),
                (0, l.jsx)('div', {
                    className: t,
                    children: (0, l.jsx)(r.Den, {
                        ref: x,
                        className: a()(d.scrollerInner, s, { [d.bottomSeparator]: v }),
                        onScroll: S,
                        children: m
                    })
                })
            ]
        })
    );
}
