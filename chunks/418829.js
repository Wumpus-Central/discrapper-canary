"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    a = n(964486),
    l = n(250703),
    s = n(877260),
    o = n(823092),
    u = n(199966),
    c = n(669550),
    d = n(894858),
    h = n(272053),
    f = n(397274),
    m = n(894803);
function g(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: g,
            onClose: v,
            sidebarFooter: p,
            onPanelChange: y,
            emptyState: x,
            searchQuery: _,
            onSearchChange: b,
        } = e,
        j = d.A.useField("currentPanelKey"),
        { node: S, visibleDirectory: A, accessibleDirectory: N } = (0, c.Ay)(t, _ ?? ""),
        C = null != n && A.entry(n)?.parentPanelKey != null ? n : g,
        E = i.useMemo(() => {
            let e = N.entry(j ?? C)?.parentPanelKey;
            if (null != e) return N.getPanelOrThrow(e);
        }, [j, N, C]),
        { navigateWithValidation: k } = (0, o.L_)();
    i.useEffect(() => {
        h.A.init({
            accessibleDirectory: N,
            onPanelChange: y,
            navigateWithValidation: (e, t) => {
                null == A.entry(e) ? b?.("") : k(t);
            },
        });
    }, [N, k, y, b, A]);
    let [w, R] = i.useState(!0);
    (0, a.Ay)(
        () => (
            h.A.navigate(C, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            R(!1),
            () => {
                h.A.reset(), f.A.reset(), d.A.resetState();
            }
        ),
    );
    let T = i.useMemo(() => ({ visibleDirectory: A, accessibleDirectory: N }), [A, N]),
        P = i.useMemo(() => () => k(v), [k, v]),
        D = null != j ? A.get(j) : void 0;
    return (0, r.jsx)(u.x.Provider, {
        value: T,
        children: (0, r.jsxs)("div", {
            className: m.k,
            children: [
                (0, r.jsx)(s.L, { root: S, footer: p, onClose: P, emptyState: x, searchQuery: _, onSearchChange: b }),
                (0, r.jsx)(l.A, { onClose: P, setting: w ? void 0 : (D ?? E) }),
            ],
        }),
    });
}
function v(e) {
    return (0, r.jsx)(o.ms, { children: (0, r.jsx)(g, { ...e }) });
}
