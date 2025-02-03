s.d(l, { R: () => d });
var a = s(200651);
s(192379);
var n = s(120356),
    i = s.n(n),
    t = s(686546),
    r = s(624138),
    c = s(404677);
function d(e) {
    let { guildName: l, iconSize: s, className: n } = e,
        d = (0, r.Zg)(l);
    return (0, a.jsx)(t.ZP, {
        mask: t.ZP.Masks.CLAN_ICON,
        width: s,
        height: s,
        className: n,
        children: (0, a.jsx)('div', {
            className: i()(c.guildIconImage, c.acronym),
            children: d
        })
    });
}
