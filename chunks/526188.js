n.d(t, {
    A: () => l,
    g: () => i,
});
var a = n(54381),
    r = n(473749);
let l = r.createContext({
        onCtxMenuClose: () => {},
        onCtxMenuOpen: () => {},
        onCtxMenuSelect: () => {},
        onGameSheetOpen: () => {},
        onGameSheetClose: () => {},
        collapsedHeight: 0,
        isExpanded: !1,
        isExpansionAnimationComplete: !1,
        quest: null,
        taskDetails: null,
    }),
    i = (e) => {
        let {
                children: t,
                isExpanded: n,
                isExpansionAnimationComplete: i,
                onCtxMenuClose: s,
                onCtxMenuOpen: o,
                onCtxMenuSelect: c,
                onGameSheetOpen: d,
                onGameSheetClose: u,
                collapsedHeight: m,
                quest: p,
                taskDetails: h,
            } = e,
            f = r.useMemo(
                () => ({
                    isExpanded: n,
                    isExpansionAnimationComplete: i,
                    onCtxMenuClose: s,
                    onCtxMenuOpen: o,
                    onCtxMenuSelect: c,
                    onGameSheetOpen: d,
                    onGameSheetClose: u,
                    collapsedHeight: m,
                    quest: p,
                    taskDetails: h,
                }),
                [n, i, s, o, c, d, u, m, p, h],
            );
        return (0, a.jsx)(l.Provider, {
            value: f,
            children: t,
        });
    };
