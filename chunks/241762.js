n.d(t, { H: () => a, R: () => i });
var l = n(477900),
    r = n(582128);
let s = r.createContext(null);
function a() {
    let e = r.useContext(s);
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
        p = r.useMemo(
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
    return (0, l.jsx)(s.Provider, { value: p, children: t });
}
