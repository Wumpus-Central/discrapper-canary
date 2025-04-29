n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(686546),
    a = n(187105);
function c(e) {
    let { className: t, isFolder: n } = e,
        i = (0, o.dQu)(o.TVs.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(s.ZP, {
        mask: s.ZP.Masks.SQUIRCLE,
        className: l()(t, a.placeholderMask, { [a.isFolder]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)('div', { className: a.dragInner })
    });
}
