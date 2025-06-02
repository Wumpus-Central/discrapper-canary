n.d(t, { Z: () => f }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    a = n(493773),
    c = n(958707),
    d = n(347226),
    u = n(502154);
function f(e) {
    let { title: t, scrollerClassName: n, scrollerInnerClassName: l, children: f } = e,
        m = i.useRef(null),
        [h, p] = i.useState(!1),
        [x, g] = i.useState(!1),
        _ = i.useCallback(() => {
            let { current: e } = m;
            null != e && (p(!e.isScrolledToTop()), g(!e.isScrolledToBottom()));
        }, []);
    return (
        (0, a.Ng)(() => _()),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: s()(u.title, u.scrollWrapper),
                    children: [
                        (0, r.jsx)(o.vwX, {
                            className: d.formItemTitle,
                            children: t
                        }),
                        (0, r.jsx)(c.Z, { separator: h })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: n,
                    children: (0, r.jsx)(o.Den, {
                        ref: m,
                        className: s()(u.scrollerInner, l, { [u.bottomSeparator]: x }),
                        onScroll: _,
                        children: f
                    })
                })
            ]
        })
    );
}
