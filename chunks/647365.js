n.d(t, { Z: () => i });
var r = n(255367);
n(73800);
var s = n(453217),
    o = n(578080),
    a = n(443648);
let i = function (e) {
    let {
        collapsedHeight: t,
        expandedContentRef: n,
        expansionSpring: i,
        isExpanded: l,
        isExpansionAnimationComplete: c,
        onCtxMenuOpened: u,
        onCtxMenuClosed: d,
        onCtxMenuSelection: p,
        quest: m,
        useReducedMotion: g,
    } = e;
    return (0, r.jsx)(o.Z, {
        expansionSpring: i,
        className: a.content,
        collapsedHeight: t,
        onCtxMenuOpen: u,
        onCtxMenuClose: d,
        onCtxMenuSelect: p,
        isExpanded: l,
        isExpansionAnimationComplete: c,
        quest: m,
        useReducedMotion: g,
        ref: n,
        children: (0, r.jsx)(s.Z, {
            className: a.content,
            expansionSpring: i,
            isExpanded: l,
            isExpansionAnimationComplete: c,
            quest: m,
            useReducedMotion: g,
        }),
    });
};
