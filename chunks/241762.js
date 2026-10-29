n.d(t, { H: () => a, R: () => i });
var l = n(477900),
    s = n(582128);
let r = s.createContext(null);
function a() {
    let e = s.useContext(r);
    if (null == e) throw Error("useQuestBarExpansionContext requires a QuestBarExpansionContextProvider ancestor");
    return e;
}
function i(e) {
    let {
            children: t,
            isExpanded: n,
            isExpansionAnimationComplete: a,
            collapsedHeight: i,
            onCtxMenuClose: o,
            onCtxMenuOpen: u,
            onCtxMenuSelect: c,
            onGameSheetOpen: d,
            onGameSheetClose: m,
        } = e,
        p = s.useMemo(
            () => ({
                isExpanded: n,
                isExpansionAnimationComplete: a,
                collapsedHeight: i,
                onCtxMenuClose: o,
                onCtxMenuOpen: u,
                onCtxMenuSelect: c,
                onGameSheetOpen: d,
                onGameSheetClose: m,
            }),
            [n, a, i, o, u, c, d, m],
        );
    return (0, l.jsx)(r.Provider, { value: p, children: t });
}
