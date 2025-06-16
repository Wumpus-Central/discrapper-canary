n.d(t, {
    Ft: () => _,
    R$: () => f
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(686546),
    l = n(451478),
    c = n(768581),
    u = n(624138),
    d = n(702791);
function f(e) {
    let { guildName: t, iconSize: n, className: i } = e,
        o = (0, u.Zg)(t);
    return (0, r.jsx)(s.ZP, {
        mask: s.ZP.Masks.CLAN_ICON,
        width: n,
        height: n,
        className: i,
        children: (0, r.jsx)('div', {
            className: a()(d.guildIconImage, d.acronym),
            children: o
        })
    });
}
function _(e) {
    let { guildId: t, guildName: n, guildIcon: i, iconSize: f, className: _, acronymClassName: p, animate: h } = e,
        m = (0, o.e7)([l.Z], () => l.Z.isFocused()),
        g = (0, c.pU)(i)
            ? i
            : c.ZP.getGuildIconURL({
                  id: t,
                  icon: i,
                  size: f,
                  canAnimate: h && m
              });
    if (null == g) {
        let e = (0, u.Zg)(n);
        return (0, r.jsx)(s.ZP, {
            mask: s.ZP.Masks.CLAN_ICON,
            width: f,
            height: f,
            className: _,
            children: (0, r.jsx)('div', {
                className: a()(d.guildIconImage, d.acronym, p),
                children: e
            })
        });
    }
    return (0, r.jsx)(s.ZP, {
        mask: s.ZP.Masks.CLAN_ICON,
        width: f,
        height: f,
        className: _,
        children: (0, r.jsx)('img', {
            src: g,
            alt: n,
            className: d.guildIconImage
        })
    });
}
