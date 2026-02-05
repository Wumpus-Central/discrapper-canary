n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(172218),
    o = n(775602),
    c = n(963935),
    d = n(894858),
    u = n(397274),
    _ = n(270952);
function m(e) {
    let { node: t, children: n } = e,
        r = s.useRef(!1),
        [m, A] = s.useState(!1),
        g = (0, l.K)((e) => {
            (r.current = e), e && A(!1);
        }, 0.5),
        E = s.useCallback(
            async (e) => {
                null == g.current ||
                    null == e ||
                    e.targetKey !== t.key ||
                    null != e.targetAccordionKey ||
                    ((e.animateScroll && !o.A.useReducedMotion) || t.type === c.Z6.CATEGORY || A(!0),
                    r.current && A(!1),
                    d.A.setState({ disableSidebarCategoryAutoSelect: !0 }),
                    u.A.clearInitialScrollListener(),
                    await u.A.scrollIntoView(g.current, { animate: e.animateScroll, block: e.scrollBlock }),
                    u.A.setInitialScrollListener(() => {
                        d.A.setState({ disableSidebarCategoryAutoSelect: !1 });
                    }),
                    d.A.setState({ navTransition: void 0 }));
            },
            [t.key, t.type, g],
        );
    return (
        s.useEffect(() => {
            let e = d.A.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                E,
                { equalityFn: (e, t) => e === t, fireImmediately: !0 },
            );
            return () => {
                e(), u.A.clearInitialScrollListener();
            };
        }, [E]),
        (0, i.jsx)("div", { ref: g, "data-debug-key": t.key, className: a()(_.k, m && _.j), children: n })
    );
}
