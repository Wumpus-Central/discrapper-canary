n.d(t, { A: () => g });
var r = n(627968),
    a = n(64700),
    o = n(942381),
    i = n(964486),
    l = n(250703),
    s = n(877260),
    c = n(823092),
    _ = n(199966),
    u = n(669550),
    d = n(894858),
    b = n(500425);
function m(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: m,
            onClose: g,
            sidebarFooter: p,
            onPanelChange: f,
            emptyState: x,
            searchQuery: h,
            onSearchChange: y,
        } = e,
        C = d.A.useField("currentPanelKey"),
        { node: S, visibleDirectory: v, accessibleDirectory: j } = (0, u.Ay)(t, h ?? ""),
        A = null != n && v.entry(n)?.parentPanelKey != null ? n : m,
        T = a.useMemo(() => {
            let e = j.entry(C ?? A)?.parentPanelKey;
            if (null != e) return j.getPanelOrThrow(e);
        }, [C, j, A]),
        { navigateWithValidation: k } = (0, c.L_)();
    (0, i.Ay)(() => {
        let e = v.entry(A).parentPanelKey,
            t = v.entry(A)?.parentTabKey,
            r = v.entry(A)?.parentCategoryKey,
            a = v.entry(A)?.parentAccordionKey;
        return (
            d.A.setState({
                currentPanelKey: e,
                currentTabKeys: null != t ? new Map([[e, t]]) : new Map(),
                currentCategoryKey: r,
                navTransition: { targetKey: A, targetAccordionKey: a, animateScroll: !1 },
                showNavigationMobile: null == n,
            }),
            () => d.A.resetState()
        );
    }),
        a.useEffect(
            () =>
                d.A.subscribe(
                    (e) => ({ requestedTargetKey: e.requestedTargetKey, currentPanelKey: e.currentPanelKey }),
                    (e) => {
                        let { requestedTargetKey: t, currentPanelKey: n } = e;
                        if (null == t) return;
                        let r = v.entry(t);
                        if (null == r) return void y?.("");
                        let a = r.parentPanelKey;
                        if (null == a) return void d.A.setState({ requestedTargetKey: void 0 });
                        let o = d.A.getField("currentTabKeys"),
                            i = null != r.parentTabKey ? new Map(o).set(a, r.parentTabKey) : o,
                            l = r.parentPanelKey === n && (null == r.parentTabKey || r.parentTabKey === o.get(a)),
                            s = () => {
                                d.A.setState({
                                    requestedTargetKey: void 0,
                                    currentPanelKey: r.parentPanelKey,
                                    currentTabKeys: i,
                                    currentCategoryKey: r.parentCategoryKey,
                                    navTransition: {
                                        targetKey: t,
                                        targetAccordionKey: r.parentAccordionKey,
                                        animateScroll: l,
                                    },
                                });
                            };
                        r.parentPanelKey !== n
                            ? k(() => {
                                  s(), f?.(a);
                              })
                            : s();
                    },
                    { equalityFn: o.x },
                ),
            [v, k, f, y],
        );
    let N = a.useMemo(() => ({ visibleDirectory: v, accessibleDirectory: j }), [v, j]),
        E = a.useMemo(() => () => k(g), [k, g]),
        I = null != C ? v.get(C) : void 0;
    return (0, r.jsx)(_.x.Provider, {
        value: N,
        children: (0, r.jsxs)("div", {
            className: b.k,
            children: [
                (0, r.jsx)(s.L, { root: S, footer: p, onClose: E, emptyState: x, searchQuery: h, onSearchChange: y }),
                (0, r.jsx)(l.A, { onClose: E, setting: I ?? T }),
            ],
        }),
    });
}
function g(e) {
    return (0, r.jsx)(c.ms, { children: (0, r.jsx)(m, { ...e }) });
}
