n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(607399),
    o = n(689175),
    d = n(834730),
    c = n(985018),
    u = n(883154);
function h(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, i.jsxs)("div", {
        className: r()(u.kL, { [u.sz]: n }),
        children: [
            (0, i.jsx)("div", {
                className: u.lm,
                children: (0, i.jsx)(d.E, {
                    className: u.__invalid_label,
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", { className: u._p }),
        ],
    });
}
var A = n(760967);
function _(e) {
    let { children: t, className: n } = e,
        {
            horizontalScrollNotice: s,
            handleScroll: d,
            handleSetScrollerRef: u,
            handleSetContainerRef: _,
        } = (function () {
            let [e, t] = l.useState(),
                [n, s] = l.useState(),
                [r, a] = l.useState(!1),
                [o, d] = l.useState(!1);
            return (
                l.useEffect(() => {
                    null == e || null == n ? a(!1) : a(e < n);
                }, [e, n]),
                {
                    horizontalScrollNotice: l.useMemo(
                        () => (r ? (0, i.jsx)(h, { text: c.intl.string(c.t.RfAAH9), hasScrolled: o }) : null),
                        [r, o],
                    ),
                    handleScroll: () => d(!0),
                    handleSetScrollerRef: (e) => s(e?.getScrollerState()?.scrollWidth),
                    handleSetContainerRef: (e) => t(e?.clientWidth),
                }
            );
        })(),
        g = (0, i.jsx)("div", {
            className: A.vi,
            children: (0, i.jsx)("div", { className: r()(A._s, n), children: t }),
        });
    return (
        a.Fr ||
            (g = (0, i.jsxs)(i.Fragment, {
                children: [
                    s,
                    (0, i.jsx)(o.Ch, { className: A.XG, orientation: "horizontal", ref: u, onScroll: d, children: g }),
                ],
            })),
        (0, i.jsx)("div", { className: A.Rc, ref: _, children: g })
    );
}
