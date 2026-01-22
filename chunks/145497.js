n.d(t, {
    Ay: () => h,
    B$: () => p,
    j: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(573435),
    c = n(531685),
    u = n(486020),
    d = n(240248),
    f = n(265225);
function p(e) {
    let { guildName: t, iconSize: n, className: i } = e,
        a = (0, d.oN)(t);
    return (0, r.jsx)(l.Ay, {
        mask: l.Ay.Masks.CLAN_ICON,
        width: n,
        height: n,
        className: i,
        children: (0, r.jsx)("div", {
            className: s()(f.O, f.q),
            children: a,
        }),
    });
}
function _(e) {
    let { guildId: t, guildName: n, guildIcon: i, iconSize: a, className: p, acronymClassName: _, animate: h } = e,
        m = (0, o.bG)([c.A], () => c.A.isFocused()),
        g = (0, u.V0)(i)
            ? i
            : u.Ay.getGuildIconURL({
                  id: t,
                  icon: i,
                  size: a,
                  canAnimate: h && m,
              });
    if (null == g) {
        let e = (0, d.oN)(n);
        return (0, r.jsx)(l.Ay, {
            mask: l.Ay.Masks.CLAN_ICON,
            width: a,
            height: a,
            className: p,
            children: (0, r.jsx)("div", {
                className: s()(f.O, f.q, _),
                children: e,
            }),
        });
    }
    return (0, r.jsx)(l.Ay, {
        mask: l.Ay.Masks.CLAN_ICON,
        width: a,
        height: a,
        className: p,
        children: (0, r.jsx)("img", {
            src: g,
            alt: n,
            className: f.O,
        }),
    });
}
let h = i.memo(function (e) {
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
