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
                    isExpansionAnimationComplete: i,
                    collapsedHeight: r,
                    onCtxMenuClose: o,
                    onCtxMenuOpen: u,
                    onCtxMenuSelect: c,
                    onGameSheetOpen: d,
                    onGameSheetClose: p,
                } = e,
                m = s.useMemo(
                    () => ({
                        isExpanded: n,
                        isExpansionAnimationComplete: i,
                        collapsedHeight: r,
                        onCtxMenuClose: o,
                        onCtxMenuOpen: u,
                        onCtxMenuSelect: c,
                        onGameSheetOpen: d,
                        onGameSheetClose: p,
                    }),
                    [n, i, r, o, u, c, d, p],
                );
            return (0, l.jsx)(a.Provider, { value: m, children: t });
        },
    },
);
