n.d(t, { Z: () => i });
var r = n(255367);
n(73800);
var s = n(453217),
    o = n(578080),
    a = n(665600);
let i = function (e) {
    let { collapsedHeight: t, expandedContentRef: n, expansionSpring: i, isExpanded: l, isExpansionAnimationComplete: c, onCtxMenuOpened: d, onCtxMenuClosed: u, onCtxMenuSelection: p, quest: m, useReducedMotion: f } = e;
    return (0, r.jsx)(o.Z, {
        expansionSpring: i,
        className: a.content,
        collapsedHeight: t,
        onCtxMenuOpen: d,
        onCtxMenuClose: u,
        onCtxMenuSelect: p,
        isExpanded: l,
        isExpansionAnimationComplete: c,
        quest: m,
        useReducedMotion: f,
        ref: n,
        children: (0, r.jsx)(s.Z, {
            className: a.content,
            expansionSpring: i,
            isExpanded: l,
            isExpansionAnimationComplete: c,
            quest: m,
            useReducedMotion: f
        })
    });
};
