var o = n(200651);
n(192379);
var r = n(453217),
    s = n(578080),
    a = n(633796);
t.Z = function (e) {
    let { collapsedHeight: t, expandedContentRef: n, expansionSpring: i, isExpanded: l, isExpansionAnimationComplete: c, onCtxMenuOpened: d, onCtxMenuClosed: u, onCtxMenuSelection: p, quest: m, useReducedMotion: x } = e;
    return (0, o.jsx)(s.Z, {
        expansionSpring: i,
        className: a.content,
        collapsedHeight: t,
        onCtxMenuOpen: d,
        onCtxMenuClose: u,
        onCtxMenuSelect: p,
        isExpanded: l,
        isExpansionAnimationComplete: c,
        quest: m,
        useReducedMotion: x,
        ref: n,
        children: (0, o.jsx)(r.Z, {
            className: a.content,
            expansionSpring: i,
            isExpanded: l,
            isExpansionAnimationComplete: c,
            quest: m,
            useReducedMotion: x
        })
    });
};
