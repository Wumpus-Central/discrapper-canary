n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    a = n(493773),
    c = n(958707),
    d = n(542257),
    u = n(308300);
function f(e) {
    let { title: t, scrollerClassName: n, scrollerInnerClassName: l, children: f } = e,
        h = i.useRef(null),
        [m, p] = i.useState(!1),
        [g, x] = i.useState(!1),
        _ = i.useCallback(() => {
            let { current: e } = h;
            null != e && (p(!e.isScrolledToTop()), x(!e.isScrolledToBottom()));
        }, []);
    return (
        (0, a.Ng)(() => _()),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: s()(u.title, u.scrollWrapper),
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            className: d.formItemTitle,
                            children: t,
                        }),
                        (0, r.jsx)(c.Z, { separator: m }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: n,
                    children: (0, r.jsx)(o.Den, {
                        ref: h,
                        className: s()(u.scrollerInner, l, { [u.bottomSeparator]: g }),
                        onScroll: _,
                        children: f,
                    }),
                }),
            ],
        })
    );
}
