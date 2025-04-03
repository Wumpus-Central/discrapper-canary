n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(923726),
    c = n(388032),
    u = n(542503);
function d(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, r.jsxs)('div', {
        className: o()(u.container, { [u.containerHide]: n }),
        children: [
            (0, r.jsx)('div', {
                className: u.notice,
                children: (0, r.jsx)(a.Text, {
                    className: u.__invalid_label,
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: t
                })
            }),
            (0, r.jsx)('div', { className: u.noticeArrow })
        ]
    });
}
function p(e) {
    let [t, n] = i.useState(),
        [l, o] = i.useState(),
        [a, u] = i.useState(!1),
        [p, h] = i.useState(!1),
        { enabled: f } = (0, s.s1)(e);
    return (
        i.useEffect(() => {
            f && null != t && null != l ? u(t < l) : u(!1);
        }, [f, t, l]),
        {
            horizontalScrollNotice: i.useMemo(
                () =>
                    a
                        ? (0, r.jsx)(d, {
                              text: c.NW.string(c.t.RfAAHx),
                              hasScrolled: p
                          })
                        : null,
                [a, p]
            ),
            handleScroll: () => h(!0),
            handleSetScrollerRef: (e) => {
                var t;
                return o(null == e || null == (t = e.getScrollerState()) ? void 0 : t.scrollWidth);
            },
            handleSetContainerRef: (e) => n(null == e ? void 0 : e.clientWidth)
        }
    );
}
