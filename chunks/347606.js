n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(172218),
    o = n(775602),
    c = n(963935),
    d = n(894858),
    u = n(397274),
    _ = n(270952);

function p(e) {
    let { node: t, children: n } = e,
        l = i.useRef(!1),
        [p, m] = i.useState(!1),
        g = (0, a.K)((e) => {
            (l.current = e), e && m(!1);
        }, 0.5),
        A = i.useCallback(
            async (e) => {
                null == g.current ||
                    null == e ||
                    e.targetKey !== t.key ||
                    null != e.targetAccordionKey ||
                    ((e.animateScroll && !o.A.useReducedMotion) || t.type === c.Z6.CATEGORY || m(!0),
                    l.current && m(!1),
                    d.A.setState({
                        disableSidebarCategoryAutoSelect: !0,
                    }),
                    u.A.clearInitialScrollListener(),
                    await u.A.scrollIntoView(g.current, {
                        animate: e.animateScroll,
                        block: e.scrollBlock,
                    }),
                    u.A.setInitialScrollListener(() => {
                        d.A.setState({
                            disableSidebarCategoryAutoSelect: !1,
                        });
                    }),
                    d.A.setState({
                        navTransition: void 0,
                    }));
            },
            [t.key, t.type, g],
        );
    return (
        i.useEffect(() => {
            let e = d.A.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                A,
                {
                    equalityFn: (e, t) => e === t,
                    fireImmediately: !0,
                },
            );
            return () => {
                e(), u.A.clearInitialScrollListener();
            };
        }, [A]),
        (0, r.jsx)("div", {
            ref: g,
            "data-debug-key": t.key,
            className: s()(_.k, p && _.j),
            children: n,
        })
    );
}
