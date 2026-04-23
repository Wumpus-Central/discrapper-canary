"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(964486),
    l = n(250703),
    s = n(877260),
    o = n(823092),
    c = n(199966),
    u = n(669550),
    d = n(894858),
    _ = n(272053),
    h = n(397274),
    p = n(910772);
function f(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: f,
            onClose: m,
            sidebarFooter: g,
            searchBar: E,
            onViewChange: v,
            emptyState: y,
            searchQuery: A,
            clearSearchQuery: S,
        } = e,
        b = d.A.useField("currentPanelKey"),
        { node: x, visibleDirectory: N, accessibleDirectory: C } = (0, u.Ay)(t, A ?? ""),
        I = null != n && N.entry(n)?.parentPanelKey != null ? n : f,
        T = i.useMemo(() => {
            let e = C.entry(b ?? I)?.parentPanelKey;
            if (null != e) return C.getPanelOrThrow(e);
        }, [b, C, I]),
        { navigateWithValidation: j } = (0, o.L_)(),
        R = i.useMemo(() => () => j(m), [j, m]);
    i.useEffect(() => {
        _.A.init({
            accessibleDirectory: C,
            onViewChange: v,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && S?.(), j(t);
            },
            closeWithValidation: R,
        });
    }, [C, j, v, S, N, R]);
    let [w, k] = i.useState(!0);
    (0, a.Ay)(
        () => (
            _.A.navigate(I, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            k(!1),
            () => {
                _.A.reset(), h.A.reset(), d.A.resetState();
            }
        ),
    );
    let D = i.useMemo(() => ({ visibleDirectory: N, accessibleDirectory: C }), [N, C]),
        O = null != b ? N.get(b) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: D,
        children: (0, r.jsxs)("div", {
            className: p.k,
            children: [
                (0, r.jsx)(s.L, { root: x, onClose: R, footer: g, emptyState: y, searchBar: E }),
                (0, r.jsx)(l.A, { onClose: R, setting: w ? void 0 : (O ?? T) }),
            ],
        }),
    });
}
function m(e) {
    return (0, r.jsx)(o.ms, { children: (0, r.jsx)(f, { ...e }) });
}
