t.d(n, { Z: () => m }), t(388685);
var l = t(951288),
    r = t(647438),
    i = t(120356),
    s = t.n(i),
    a = t(481060),
    c = t(493773),
    o = t(958707),
    u = t(542257),
    d = t(308300);
function m(e) {
    let { title: n, scrollerClassName: t, scrollerInnerClassName: i, children: m } = e,
        x = r.useRef(null),
        [g, h] = r.useState(!1),
        [j, p] = r.useState(!1),
        v = r.useCallback(() => {
            let { current: e } = x;
            null != e && (h(!e.isScrolledToTop()), p(!e.isScrolledToBottom()));
        }, []);
    return (
        (0, c.Ng)(() => v()),
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
                        (0, l.jsx)(o.Z, { separator: g }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: t,
                    children: (0, l.jsx)(a.Den, {
                        ref: x,
                        className: s()(d.scrollerInner, i, { [d.bottomSeparator]: j }),
                        onScroll: v,
                        children: m,
                    }),
                }),
            ],
        })
    );
}
