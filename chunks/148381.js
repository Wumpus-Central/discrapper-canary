l.d(n, { Z: () => m }), l(47120);
var t = l(200651),
    i = l(192379),
    s = l(120356),
    a = l.n(s),
    r = l(481060),
    o = l(493773),
    u = l(958707),
    c = l(456963),
    d = l(864073);
function m(e) {
    let { title: n, scrollerClassName: l, scrollerInnerClassName: s, children: m } = e,
        x = i.useRef(null),
        [g, h] = i.useState(!1),
        [Z, v] = i.useState(!1),
        S = i.useCallback(() => {
            let { current: e } = x;
            null != e && (h(!e.isScrolledToTop()), v(!e.isScrolledToBottom()));
        }, []);
    return (
        (0, o.Ng)(() => S()),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)('div', {
                    className: a()(d.title, d.scrollWrapper),
                    children: [
                        (0, t.jsx)(r.vwX, {
                            className: c.formItemTitle,
                            children: n
                        }),
                        (0, t.jsx)(u.Z, { separator: g })
                    ]
                }),
                (0, t.jsx)('div', {
                    className: l,
                    children: (0, t.jsx)(r.Den, {
                        ref: x,
                        className: a()(d.scrollerInner, s, { [d.bottomSeparator]: Z }),
                        onScroll: S,
                        children: m
                    })
                })
            ]
        })
    );
}
