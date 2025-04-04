n.d(t, {
    Z: () => p,
    b: () => _
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(686546),
    c = n(451478),
    u = n(768581),
    d = n(624138),
    f = n(215398);
function _(e) {
    let { guildId: t, guildName: n, guildIcon: i, iconSize: o, className: _, animate: p } = e,
        h = (0, s.e7)([c.Z], () => c.Z.isFocused()),
        m = (0, u.pU)(i)
            ? i
            : u.ZP.getGuildIconURL({
                  id: t,
                  icon: i,
                  size: o,
                  canAnimate: p && h
              });
    if (null == m) {
        let e = (0, d.Zg)(n);
        return (0, r.jsx)(l.ZP, {
            mask: l.ZP.Masks.CLAN_ICON,
            width: o,
            height: o,
            className: _,
            children: (0, r.jsx)('div', {
                className: a()(f.guildIconImage, f.acronym),
                children: e
            })
        });
    }
    return (0, r.jsx)(l.ZP, {
        mask: l.ZP.Masks.CLAN_ICON,
        width: o,
        height: o,
        className: _,
        children: (0, r.jsx)('img', {
            src: m,
            alt: n,
            className: f.guildIconImage
        })
    });
}
let p = i.memo(function (e) {
    let { guild: t, iconSize: n, className: i, animate: o } = e;
    return (0, r.jsx)(_, {
        guildName: t.name,
        guildId: t.id,
        guildIcon: t.icon,
        iconSize: n,
        className: i,
        animate: o
    });
});
