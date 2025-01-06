t.d(n, {
    R: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    a = t(686546),
    s = t(624138),
    c = t(404677);
function o(e) {
    let { guildName: n, iconSize: t, className: l } = e,
        o = (0, s.Zg)(n);
    return (0, i.jsx)(a.ZP, {
        mask: a.ZP.Masks.CLAN_ICON,
        width: t,
        height: t,
        className: l,
        children: (0, i.jsx)('div', {
            className: r()(c.guildIconImage, c.acronym),
            children: o
        })
    });
}
