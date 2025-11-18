t.d(n, { Z: () => m }), t(388685);
var l = t(54381),
    r = t(473749),
    i = t(120356),
    s = t.n(i),
    a = t(481060),
    c = t(493773),
    o = t(958707),
    u = t(79985),
    d = t(378671);
function m(e) {
    let { title: n, scrollerClassName: t, scrollerInnerClassName: i, children: m } = e,
        g = r.useRef(null),
        [x, h] = r.useState(!1),
        [j, v] = r.useState(!1),
        p = r.useCallback(() => {
            let { current: e } = g;
            null != e && (h(!e.isScrolledToTop()), v(!e.isScrolledToBottom()));
        }, []);
    return (
        (0, c.Ng)(() => p()),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: s()(d.title, d.scrollWrapper),
                    children: [
                        (0, l.jsx)(a.Text, {
                            variant: "text-md/medium",
                            className: u.formItemTitle,
                            children: n,
                        }),
                        (0, l.jsx)(o.Z, { separator: x }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: t,
                    children: (0, l.jsx)(a.Den, {
                        ref: g,
                        className: s()(d.scrollerInner, i, { [d.bottomSeparator]: j }),
                        onScroll: p,
                        children: m,
                    }),
                }),
            ],
        })
    );
}
