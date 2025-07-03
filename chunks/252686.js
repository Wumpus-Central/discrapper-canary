n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(686546),
    s = n(187105);
function c(e) {
    let { className: t, isFolder: n } = e,
        i = (0, o.dQu)(o.TVs.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(a.ZP, {
        mask: a.ZP.Masks.SQUIRCLE,
        className: l()(t, s.placeholderMask, { [s.isFolder]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)('div', { className: s.dragInner })
    });
}
