r.d(n, {
    b: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(686546),
    c = r(451478),
    d = r(768581),
    f = r(624138),
    _ = r(978859);
function h(e) {
    let { guildId: n, guildName: r, guildIcon: a, iconSize: s, className: h, animate: p } = e,
        m = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        g = d.ZP.getGuildIconURL({
            id: n,
            icon: a,
            size: s,
            canAnimate: p && m
        });
    if (null == g) {
        let e = (0, f.Zg)(r);
        return (0, i.jsx)(u.ZP, {
            mask: u.ZP.Masks.CLAN_ICON,
            width: s,
            height: s,
            className: h,
            children: (0, i.jsx)('div', {
                className: o()(_.guildIconImage, _.acronym),
                children: e
            })
        });
    }
    return (0, i.jsx)(u.ZP, {
        mask: u.ZP.Masks.CLAN_ICON,
        width: s,
        height: s,
        className: h,
        children: (0, i.jsx)('img', {
            src: g,
            alt: r,
            className: _.guildIconImage
        })
    });
}
n.Z = a.memo(function (e) {
    let { guild: n, iconSize: r, className: a, animate: s } = e;
    return (0, i.jsx)(h, {
        guildName: n.name,
        guildId: n.id,
        guildIcon: n.icon,
        iconSize: r,
        className: a,
        animate: s
    });
});
