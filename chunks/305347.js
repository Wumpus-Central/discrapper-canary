n.d(t, {
    Ft: () => _,
    R$: () => p,
    ZP: () => m,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(686546),
    c = n(451478),
    u = n(768581),
    d = n(624138),
    f = n(272714);
function p(e) {
    let { guildName: t, iconSize: n, className: i } = e,
        a = (0, d.Zg)(t);
    return (0, r.jsx)(l.ZP, {
        mask: l.ZP.Masks.CLAN_ICON,
        width: n,
        height: n,
        className: i,
        children: (0, r.jsx)("div", {
            className: o()(f.guildIconImage, f.acronym),
            children: a,
        }),
    });
}
function _(e) {
    let { guildId: t, guildName: n, guildIcon: i, iconSize: a, className: p, acronymClassName: _, animate: m } = e,
        h = (0, s.e7)([c.Z], () => c.Z.isFocused()),
        g = (0, u.pU)(i)
            ? i
            : u.ZP.getGuildIconURL({
                  id: t,
                  icon: i,
                  size: a,
                  canAnimate: m && h,
              });
    if (null == g) {
        let e = (0, d.Zg)(n);
        return (0, r.jsx)(l.ZP, {
            mask: l.ZP.Masks.CLAN_ICON,
            width: a,
            height: a,
            className: p,
            children: (0, r.jsx)("div", {
                className: o()(f.guildIconImage, f.acronym, _),
                children: e,
            }),
        });
    }
    return (0, r.jsx)(l.ZP, {
        mask: l.ZP.Masks.CLAN_ICON,
        width: a,
        height: a,
        className: p,
        children: (0, r.jsx)("img", {
            src: g,
            alt: n,
            className: f.guildIconImage,
        }),
    });
}
let m = i.memo(function (e) {
    let { guild: t, iconSize: n, className: i, animate: a } = e;
    return (0, r.jsx)(_, {
        guildName: t.name,
        guildId: t.id,
        guildIcon: t.icon,
        iconSize: n,
        className: i,
        animate: a,
    });
});
