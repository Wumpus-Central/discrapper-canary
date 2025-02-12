n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(923726),
    c = n(388032),
    d = n(642657);
function u(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, i.jsxs)('div', {
        className: r()(d.container, { [d.containerHide]: n }),
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
        [a, r] = l.useState(),
        [s, d] = l.useState(!1),
        [h, p] = l.useState(!1),
        { enabled: m } = (0, o.s1)(e);
    return (
        l.useEffect(() => {
            m && null != t && null != a ? d(t < a) : d(!1);
        }, [m, t, a]),
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
                return r(null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollWidth);
            },
            handleSetContainerRef: (e) => n(null == e ? void 0 : e.clientWidth)
        }
    );
}
