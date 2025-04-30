n.d(t, { Z: () => i });
var r = n(200651);
n(192379);
var o = n(453217),
    s = n(578080),
    a = n(665600);
let i = function (e) {
    let { collapsedHeight: t, expandedContentRef: n, expansionSpring: i, isExpanded: l, isExpansionAnimationComplete: c, onCtxMenuOpened: d, onCtxMenuClosed: u, onCtxMenuSelection: p, quest: m, useReducedMotion: f } = e;
    return (0, r.jsx)(s.Z, {
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
        children: (0, r.jsx)(o.Z, {
            className: a.content,
            expansionSpring: i,
            isExpanded: l,
            isExpansionAnimationComplete: c,
            quest: m,
            useReducedMotion: f
        })
    });
};
