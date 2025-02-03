n.d(t, {
    Z: () => p,
    b: () => _
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(686546),
    u = n(451478),
    c = n(768581),
    d = n(624138),
    f = n(978859);
function _(e) {
    let { guildId: t, guildName: n, guildIcon: r, iconSize: a, className: _, animate: p } = e,
        h = (0, o.e7)([u.Z], () => u.Z.isFocused()),
        m = (0, c.pU)(r)
            ? r
            : c.ZP.getGuildIconURL({
                  id: t,
                  icon: r,
                  size: a,
                  canAnimate: p && h
              });
    if (null == m) {
        let e = (0, d.Zg)(n);
        return (0, i.jsx)(l.ZP, {
            mask: l.ZP.Masks.CLAN_ICON,
            width: a,
            height: a,
            className: _,
            children: (0, i.jsx)('div', {
                className: s()(f.guildIconImage, f.acronym),
                children: e
            })
        });
    }
    return (0, i.jsx)(l.ZP, {
        mask: l.ZP.Masks.CLAN_ICON,
        width: a,
        height: a,
        className: _,
        children: (0, i.jsx)('img', {
            src: m,
            alt: n,
            className: f.guildIconImage
        })
    });
}
let p = r.memo(function (e) {
    let { guild: t, iconSize: n, className: r, animate: a } = e;
    return (0, i.jsx)(_, {
        guildName: t.name,
        guildId: t.id,
        guildIcon: t.icon,
        iconSize: n,
        className: r,
        animate: a
    });
});
