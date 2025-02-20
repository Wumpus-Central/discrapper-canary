t.d(n, { Z: () => m }), t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    s = t.n(r),
    a = t(481060),
    o = t(493773),
    c = t(958707),
    u = t(382840),
    d = t(26633);
function m(e) {
    let { title: n, scrollerClassName: t, scrollerInnerClassName: r, children: m } = e,
        g = i.useRef(null),
        [h, x] = i.useState(!1),
        [v, f] = i.useState(!1),
        j = i.useCallback(() => {
            let { current: e } = g;
            null != e && (x(!e.isScrolledToTop()), f(!e.isScrolledToBottom()));
        }, []);
    return (
        (0, o.Ng)(() => j()),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: s()(d.title, d.scrollWrapper),
                    children: [
                        (0, l.jsx)(a.vwX, {
                            className: u.formItemTitle,
                            children: n
                        }),
                        (0, l.jsx)(c.Z, { separator: h })
                    ]
                }),
                (0, l.jsx)('div', {
                    className: t,
                    children: (0, l.jsx)(a.Den, {
                        ref: g,
                        className: s()(d.scrollerInner, r, { [d.bottomSeparator]: v }),
                        onScroll: j,
                        children: m
                    })
                })
            ]
        })
    );
}
