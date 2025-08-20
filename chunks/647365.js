n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(453217),
    a = n(578080),
    o = n(443648);
let s = function (e) {
    let {
        collapsedHeight: t,
        expandedContentRef: n,
        expansionSpring: s,
        isExpanded: l,
        isExpansionAnimationComplete: c,
        onCtxMenuOpened: u,
        onCtxMenuClosed: d,
        onCtxMenuSelection: f,
        quest: _,
        useReducedMotion: p,
    } = e;
    return (0, r.jsx)(a.Z, {
        expansionSpring: s,
        className: o.content,
        collapsedHeight: t,
        onCtxMenuOpen: u,
        onCtxMenuClose: d,
        onCtxMenuSelect: f,
        isExpanded: l,
        isExpansionAnimationComplete: c,
        quest: _,
        useReducedMotion: p,
        ref: n,
        children: (0, r.jsx)(i.Z, {
            className: o.content,
            expansionSpring: s,
            isExpanded: l,
            isExpansionAnimationComplete: c,
            quest: _,
            useReducedMotion: p,
        }),
    });
};
