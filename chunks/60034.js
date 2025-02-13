a.d(l, { R: () => c });
var s = a(200651);
a(192379);
var n = a(120356),
    i = a.n(n),
    t = a(686546),
    r = a(624138),
    d = a(499556);
function c(e) {
    let { guildName: l, iconSize: a, className: n } = e,
        c = (0, r.Zg)(l);
    return (0, s.jsx)(t.ZP, {
        mask: t.ZP.Masks.CLAN_ICON,
        width: a,
        height: a,
        className: n,
        children: (0, s.jsx)('div', {
            className: i()(d.guildIconImage, d.acronym),
            children: c
        })
    });
}
