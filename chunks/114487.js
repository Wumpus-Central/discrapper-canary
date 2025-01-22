r.d(n, {
    b: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(686546),
    c = r(451478),
    d = r(768581),
    f = r(624138),
    p = r(978859);
function h(e) {
    let { guildId: n, guildName: r, guildIcon: a, iconSize: o, className: h, animate: _ } = e,
        m = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        g = d.ZP.getGuildIconURL({
            id: n,
            icon: a,
            size: o,
            canAnimate: _ && m
        });
    if (null == g) {
        let e = (0, f.Zg)(r);
        return (0, i.jsx)(u.ZP, {
            mask: u.ZP.Masks.CLAN_ICON,
            width: o,
            height: o,
            className: h,
            children: (0, i.jsx)('div', {
                className: s()(p.guildIconImage, p.acronym),
                children: e
            })
        });
    }
    return (0, i.jsx)(u.ZP, {
        mask: u.ZP.Masks.CLAN_ICON,
        width: o,
        height: o,
        className: h,
        children: (0, i.jsx)('img', {
            src: g,
            alt: r,
            className: p.guildIconImage
        })
    });
}
n.Z = a.memo(function (e) {
    let { guild: n, iconSize: r, className: a, animate: o } = e;
    return (0, i.jsx)(h, {
        guildName: n.name,
        guildId: n.id,
        guildIcon: n.icon,
        iconSize: r,
        className: a,
        animate: o
    });
});
