n.d(t, { b: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(686546),
    l = n(451478),
    c = n(768581),
    u = n(624138),
    d = n(215398);
function f(e) {
    let { guildId: t, guildName: n, guildIcon: i, iconSize: f, className: _, animate: p } = e,
        h = (0, a.e7)([l.Z], () => l.Z.isFocused()),
        m = (0, c.pU)(i)
            ? i
            : c.ZP.getGuildIconURL({
                  id: t,
                  icon: i,
                  size: f,
                  canAnimate: p && h
              });
    if (null == m) {
        let e = (0, u.Zg)(n);
        return (0, r.jsx)(s.ZP, {
            mask: s.ZP.Masks.CLAN_ICON,
            width: f,
            height: f,
            className: _,
            children: (0, r.jsx)('div', {
                className: o()(d.guildIconImage, d.acronym),
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
            src: m,
            alt: n,
            className: d.guildIconImage
        })
    });
}
