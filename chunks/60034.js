n.d(t, { R: () => o });
var r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    s = n(686546),
    i = n(624138),
    c = n(889230);
function o(e) {
    let { guildName: t, iconSize: n, className: l } = e,
        o = (0, i.Zg)(t);
    return (0, r.jsx)(s.ZP, {
        mask: s.ZP.Masks.CLAN_ICON,
        width: n,
        height: n,
        className: l,
        children: (0, r.jsx)('div', {
            className: a()(c.guildIconImage, c.acronym),
            children: o
        })
    });
}
