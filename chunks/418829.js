"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(964486),
    s = n(250703),
    l = n(877260),
    o = n(823092),
    c = n(199966),
    u = n(669550),
    d = n(894858),
    _ = n(272053),
    f = n(397274),
    h = n(910772);
function p(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: p,
            onClose: m,
            sidebarFooter: g,
            searchBar: b,
            onViewChange: v,
            emptyState: E,
            searchQuery: y,
            clearSearchQuery: A,
        } = e,
        x = d.A.useField("currentPanelKey"),
        { node: S, visibleDirectory: C, accessibleDirectory: N } = (0, u.Ay)(t, y ?? ""),
        I = null != n && C.entry(n)?.parentPanelKey != null ? n : p,
        T = i.useMemo(() => {
            let e = N.entry(x ?? I)?.parentPanelKey;
            if (null != e) return N.getPanelOrThrow(e);
        }, [x, N, I]),
        { navigateWithValidation: j } = (0, o.L_)(),
        R = i.useMemo(() => () => j(m), [j, m]);
    i.useEffect(() => {
        _.A.init({
            accessibleDirectory: N,
            onViewChange: v,
            navigateWithValidation: (e, t) => {
                null == C.entry(e) && A?.(), j(t);
            },
            closeWithValidation: R,
        });
    }, [N, j, v, A, C, R]);
    let [w, k] = i.useState(!0);
    (0, a.Ay)(
        () => (
            _.A.navigate(I, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            k(!1),
            () => {
                _.A.reset(), f.A.reset(), d.A.resetState();
            }
        ),
    );
    let D = i.useMemo(() => ({ visibleDirectory: C, accessibleDirectory: N }), [C, N]),
        L = null != x ? C.get(x) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: D,
        children: (0, r.jsxs)("div", {
            className: h.k,
            children: [
                (0, r.jsx)(l.L, { root: S, onClose: R, footer: g, emptyState: E, searchBar: b }),
                (0, r.jsx)(s.A, { onClose: R, setting: w ? void 0 : (L ?? T) }),
            ],
        }),
    });
}
function m(e) {
    return (0, r.jsx)(o.ms, { children: (0, r.jsx)(p, { ...e }) });
}
