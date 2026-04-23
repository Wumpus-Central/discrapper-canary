n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(834730),
    o = n(985018),
    d = n(883154);
function c(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, i.jsxs)("div", {
        className: a()(d.kL, { [d.sz]: n }),
        children: [
            (0, i.jsx)("div", {
                className: d.lm,
                children: (0, i.jsx)(r.E, {
                    className: d.__invalid_label,
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", { className: d._p }),
        ],
    });
}
function u() {
    let [e, t] = l.useState(),
        [n, s] = l.useState(),
        [a, r] = l.useState(!1),
        [d, u] = l.useState(!1);
    return (
        l.useEffect(() => {
            null == e || null == n ? r(!1) : r(e < n);
        }, [e, n]),
        {
            horizontalScrollNotice: l.useMemo(
                () => (a ? (0, i.jsx)(c, { text: o.intl.string(o.t.RfAAH9), hasScrolled: d }) : null),
                [a, d],
            ),
            handleScroll: () => u(!0),
            handleSetScrollerRef: (e) => s(e?.getScrollerState()?.scrollWidth),
            handleSetContainerRef: (e) => t(e?.clientWidth),
        }
    );
}
