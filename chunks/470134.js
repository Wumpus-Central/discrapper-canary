(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(923726),
    c = n(388032),
    u = n(542503);
function d(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, r.jsxs)('div', {
        className: a()(u.container, { [u.containerHide]: n }),
        children: [
            (0, r.jsx)('div', {
                className: u.notice,
                children: (0, r.jsx)(o.Text, {
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
        [l, a] = i.useState(),
        [o, u] = i.useState(!1),
        [p, h] = i.useState(!1),
        { enabled: f } = (0, s.s1)(e);
    return (
        i.useEffect(() => {
            f && null != t && null != l ? u(t < l) : u(!1);
        }, [f, t, l]),
        {
            horizontalScrollNotice: i.useMemo(
                () =>
                    o
                        ? (0, r.jsx)(d, {
                              text: c.intl.string(c.t.RfAAHx),
                              hasScrolled: p
                          })
                        : null,
                [o, p]
            ),
            handleScroll: () => h(!0),
            handleSetScrollerRef: (e) => {
                var t;
                return a(null == e || null == (t = e.getScrollerState()) ? void 0 : t.scrollWidth);
            },
            handleSetContainerRef: (e) => n(null == e ? void 0 : e.clientWidth)
        }
    );
}
