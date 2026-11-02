n.d(t, { H: () => r, R: () => i });
var l = n(477900),
    s = n(582128);
let a = s.createContext(null);
function r() {
    let e = s.useContext(a);
    if (null == e) throw Error("useQuestBarExpansionContext requires a QuestBarExpansionContextProvider ancestor");
    return e;
}
function i(e) {
    let {
            children: t,
            isExpanded: n,
            isExpansionAnimationComplete: r,
            collapsedHeight: i,
            onCtxMenuClose: o,
            onCtxMenuOpen: u,
            onCtxMenuSelect: c,
            onGameSheetOpen: d,
            onGameSheetClose: p,
        } = e,
        m = s.useMemo(
            () => ({
                isExpanded: n,
                isExpansionAnimationComplete: r,
                collapsedHeight: i,
                onCtxMenuClose: o,
                onCtxMenuOpen: u,
                onCtxMenuSelect: c,
                onGameSheetOpen: d,
                onGameSheetClose: p,
            }),
            [n, r, i, o, u, c, d, p],
        );
    return (0, l.jsx)(a.Provider, { value: m, children: t });
}
