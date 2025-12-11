n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(923726),
    c = n(388032),
    d = n(67996);
function u(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, r.jsxs)("div", {
        className: a()(d.container, { [d.containerHide]: n }),
        children: [
            (0, r.jsx)("div", {
                className: d.notice,
                children: (0, r.jsx)(s.Text, {
                    className: d.__invalid_label,
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: t,
                }),
            }),
            (0, r.jsx)("div", { className: d.noticeArrow }),
        ],
    });
}
function p(e) {
    let [t, n] = i.useState(),
        [l, a] = i.useState(),
        [s, d] = i.useState(!1),
        [p, h] = i.useState(!1),
        { enabled: f } = (0, o.s1)(e);
    return (
        i.useEffect(() => {
            f && null != t && null != l ? d(t < l) : d(!1);
        }, [f, t, l]),
        {
            horizontalScrollNotice: i.useMemo(
                () =>
                    s
                        ? (0, r.jsx)(u, {
                              text: c.intl.string(c.t.RfAAH9),
                              hasScrolled: p,
                          })
                        : null,
                [s, p],
            ),
            handleScroll: () => h(!0),
            handleSetScrollerRef: (e) => {
                var t;
                return a(null == e || null == (t = e.getScrollerState()) ? void 0 : t.scrollWidth);
            },
            handleSetContainerRef: (e) => n(null == e ? void 0 : e.clientWidth),
        }
    );
}
