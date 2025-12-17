n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(686546),
    s = n(355762);
function c(e) {
    let { className: t, isFolder: n } = e,
        i = (0, a.dQu)(a.TVs.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(o.ZP, {
        mask: o.ZP.Masks.SQUIRCLE,
        className: l()(t, s.placeholderMask, { [s.isFolder]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)("div", { className: s.dragInner }),
    });
}
