n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(567305),
    d = n(985018),
    c = n(801985);
function u(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, i.jsxs)("div", {
        className: a()(c.kL, { [c.sz]: n }),
        children: [
            (0, i.jsx)("div", {
                className: c.lm,
                children: (0, i.jsx)(r.Text, {
                    className: c.__invalid_label,
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", { className: c._p }),
        ],
    });
}
function h(e) {
    let [t, n] = l.useState(),
        [s, a] = l.useState(),
        [r, c] = l.useState(!1),
        [h, A] = l.useState(!1),
        { enabled: m } = (0, o.DN)(e);
    return (
        l.useEffect(() => {
            m && null != t && null != s ? c(t < s) : c(!1);
        }, [m, t, s]),
        {
            horizontalScrollNotice: l.useMemo(
                () => (r ? (0, i.jsx)(u, { text: d.intl.string(d.t.RfAAH9), hasScrolled: h }) : null),
                [r, h],
            ),
            handleScroll: () => A(!0),
            handleSetScrollerRef: (e) => a(e?.getScrollerState()?.scrollWidth),
            handleSetContainerRef: (e) => n(e?.clientWidth),
        }
    );
}
