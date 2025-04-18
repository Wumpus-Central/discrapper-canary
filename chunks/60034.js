n.d(t, { R: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(686546),
    s = n(624138),
    l = n(702791);
function c(e) {
    let { guildName: t, iconSize: n, className: i } = e,
        c = (0, s.Zg)(t);
    return (0, r.jsx)(o.ZP, {
        mask: o.ZP.Masks.CLAN_ICON,
        width: n,
        height: n,
        className: i,
        children: (0, r.jsx)('div', {
            className: a()(l.guildIconImage, l.acronym),
            children: c
        })
    });
}
