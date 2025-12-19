n.d(t, {
    A: () => i,
    g: () => l,
});
var a = n(54381),
    r = n(473749);
let i = r.createContext({
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
    l = (e) => {
        let {
                children: t,
                isExpanded: n,
                isExpansionAnimationComplete: l,
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
                    isExpansionAnimationComplete: l,
                    onCtxMenuClose: s,
                    onCtxMenuOpen: o,
                    onCtxMenuSelect: c,
                    onGameSheetOpen: d,
                    onGameSheetClose: u,
                    collapsedHeight: m,
                    quest: p,
                    taskDetails: h,
                }),
                [n, l, s, o, c, d, u, m, p, h],
            );
        return (0, a.jsx)(i.Provider, {
            value: f,
            children: t,
        });
    };
