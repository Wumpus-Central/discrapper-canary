var l = n(477900),
    s = n(582128);
let a = s.createContext(null);
n.d(
    t,
    {},
    {
        H: function () {
            let e = s.useContext(a);
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
                p = s.useMemo(
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
            return (0, l.jsx)(a.Provider, { value: p, children: t });
        },
    },
);
