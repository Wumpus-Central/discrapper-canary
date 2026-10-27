n.d(t, { H: () => a, R: () => o });
var l = n(477900),
    r = n(582128);
let u = r.createContext(null);
function a() {
    let e = r.useContext(u);
    if (null == e) throw Error("useQuestBarExpansionContext requires a QuestBarExpansionContextProvider ancestor");
    return e;
}
function o(e) {
    let {
            children: t,
            isExpanded: n,
            isExpansionAnimationComplete: a,
            collapsedHeight: o,
            onCtxMenuClose: i,
            onCtxMenuOpen: s,
            onCtxMenuSelect: c,
            onGameSheetOpen: d,
            onGameSheetClose: p,
        } = e,
        f = r.useMemo(
            () => ({
                isExpanded: n,
                isExpansionAnimationComplete: a,
                collapsedHeight: o,
                onCtxMenuClose: i,
                onCtxMenuOpen: s,
                onCtxMenuSelect: c,
                onGameSheetOpen: d,
                onGameSheetClose: p,
            }),
            [n, a, o, i, s, c, d, p],
        );
    return (0, l.jsx)(u.Provider, { value: f, children: t });
}
