n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(923726),
    c = n(388032),
    d = n(546973);
function u(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, i.jsxs)('div', {
        className: a()(d.container, { [d.containerHide]: n }),
        children: [
            (0, i.jsx)('div', {
                className: d.notice,
                children: (0, i.jsx)(s.Text, {
                    className: d.__invalid_label,
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: t
                })
            }),
            (0, i.jsx)('div', { className: d.noticeArrow })
        ]
    });
}
function h(e) {
    let [t, n] = l.useState(),
        [r, a] = l.useState(),
        [s, d] = l.useState(!1),
        [h, p] = l.useState(!1),
        { enabled: m } = (0, o.s1)(e);
    return (
        l.useEffect(() => {
            m && null != t && null != r ? d(t < r) : d(!1);
        }, [m, t, r]),
        {
            horizontalScrollNotice: l.useMemo(
                () =>
                    s
                        ? (0, i.jsx)(u, {
                              text: c.intl.string(c.t.RfAAHx),
                              hasScrolled: h
                          })
                        : null,
                [s, h]
            ),
            handleScroll: () => p(!0),
            handleSetScrollerRef: (e) => {
                var t;
                return a(null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollWidth);
            },
            handleSetContainerRef: (e) => n(null == e ? void 0 : e.clientWidth)
        }
    );
}
