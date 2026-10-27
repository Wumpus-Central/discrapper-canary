n.d(t, { H: () => o, R: () => s });
var l = n(477900),
    r = n(582128);
let a = r.createContext(null);
function o() {
    let e = r.useContext(a);
    if (null == e) throw Error("useQuestBarExpansionContext requires a QuestBarExpansionContextProvider ancestor");
    return e;
}
function s(e) {
    let {
            children: t,
            isExpanded: n,
            isExpansionAnimationComplete: o,
            collapsedHeight: s,
            onCtxMenuClose: i,
            onCtxMenuOpen: u,
            onCtxMenuSelect: c,
            onGameSheetOpen: d,
            onGameSheetClose: p,
        } = e,
        m = r.useMemo(
            () => ({
                isExpanded: n,
                isExpansionAnimationComplete: o,
                collapsedHeight: s,
                onCtxMenuClose: i,
                onCtxMenuOpen: u,
                onCtxMenuSelect: c,
                onGameSheetOpen: d,
                onGameSheetClose: p,
            }),
            [n, o, s, i, u, c, d, p],
        );
    return (0, l.jsx)(a.Provider, { value: m, children: t });
}
