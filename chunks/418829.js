"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(942381),
    s = n(964486),
    l = n(250703),
    o = n(877260),
    c = n(823092),
    u = n(199966),
    d = n(669550),
    _ = n(894858),
    g = n(500425);
function m(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: m,
            onClose: b,
            sidebarFooter: f,
            onPanelChange: p,
            emptyState: h,
            searchQuery: y,
            onSearchChange: x,
        } = e,
        A = _.A.useField("currentPanelKey"),
        { node: C, visibleDirectory: S, accessibleDirectory: v } = (0, d.Ay)(t, y ?? ""),
        T = null != n && S.entry(n)?.parentPanelKey != null ? n : m,
        k = i.useMemo(() => {
            let e = v.entry(A ?? T)?.parentPanelKey;
            if (null != e) return v.getPanelOrThrow(e);
        }, [A, v, T]),
        { navigateWithValidation: j } = (0, c.L_)();
    (0, s.Ay)(() => {
        let e = S.entry(T).parentPanelKey,
            t = S.entry(T)?.parentTabKey,
            r = S.entry(T)?.parentCategoryKey,
            i = S.entry(T)?.parentAccordionKey;
        return (
            _.A.setState({
                currentPanelKey: e,
                currentTabKeys: null != t ? new Map([[e, t]]) : new Map(),
                currentCategoryKey: r,
                navTransition: { targetKey: T, targetAccordionKey: i, animateScroll: !1 },
                showNavigationMobile: null == n,
            }),
            () => _.A.resetState()
        );
    }),
        i.useEffect(
            () =>
                _.A.subscribe(
                    (e) => ({ requestedTargetKey: e.requestedTargetKey, currentPanelKey: e.currentPanelKey }),
                    (e) => {
                        let { requestedTargetKey: t, currentPanelKey: n } = e;
                        if (null == t) return;
                        let r = S.entry(t);
                        if (null == r) return void x?.("");
                        let i = r.parentPanelKey;
                        if (null == i) return void _.A.setState({ requestedTargetKey: void 0 });
                        let a = _.A.getField("currentTabKeys"),
                            s = null != r.parentTabKey ? new Map(a).set(i, r.parentTabKey) : a,
                            l = r.parentPanelKey === n && (null == r.parentTabKey || r.parentTabKey === a.get(i)),
                            o = () => {
                                _.A.setState({
                                    requestedTargetKey: void 0,
                                    currentPanelKey: r.parentPanelKey,
                                    currentTabKeys: s,
                                    currentCategoryKey: r.parentCategoryKey,
                                    navTransition: {
                                        targetKey: t,
                                        targetAccordionKey: r.parentAccordionKey,
                                        animateScroll: l,
                                    },
                                });
                            };
                        r.parentPanelKey !== n
                            ? j(() => {
                                  o(), p?.(i);
                              })
                            : o();
                    },
                    { equalityFn: a.x },
                ),
            [S, j, p, x],
        );
    let I = i.useMemo(() => ({ visibleDirectory: S, accessibleDirectory: v }), [S, v]),
        N = i.useMemo(() => () => j(b), [j, b]),
        E = null != A ? S.get(A) : void 0;
    return (0, r.jsx)(u.x.Provider, {
        value: I,
        children: (0, r.jsxs)("div", {
            className: g.k,
            children: [
                (0, r.jsx)(o.L, { root: C, footer: f, onClose: N, emptyState: h, searchQuery: y, onSearchChange: x }),
                (0, r.jsx)(l.A, { onClose: N, setting: E ?? k }),
            ],
        }),
    });
}
function b(e) {
    return (0, r.jsx)(c.ms, { children: (0, r.jsx)(m, { ...e }) });
}
