var s = n(477900),
    l = n(582128);
let a = l.createContext(null);
n.d(
    t,
    {},
    {
        H: function () {
            let e = l.useContext(a);
            if (null == e)
                throw Error("useQuestBarExpansionContext requires a QuestBarExpansionContextProvider ancestor");
            return e;
        },
        R: function (e) {
            let {
                    children: t,
                    isExpanded: n,
                    isExpansionAnimationComplete: r,
                    collapsedHeight: i,
                    onCtxMenuClose: o,
                    onCtxMenuOpen: u,
                    onCtxMenuSelect: c,
                    onGameSheetOpen: d,
                    onGameSheetClose: m,
                } = e,
                p = l.useMemo(
                    () => ({
                        isExpanded: n,
                        isExpansionAnimationComplete: r,
                        collapsedHeight: i,
                        onCtxMenuClose: o,
                        onCtxMenuOpen: u,
                        onCtxMenuSelect: c,
                        onGameSheetOpen: d,
                        onGameSheetClose: m,
                    }),
                    [n, r, i, o, u, c, d, m],
                );
            return (0, s.jsx)(a.Provider, { value: p, children: t });
        },
    },
);
