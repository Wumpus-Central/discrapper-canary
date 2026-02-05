"use strict";
n.d(t, { Ay: () => h, B$: () => f, j: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(573435),
    u = n(531685),
    c = n(486020),
    d = n(240248),
    _ = n(265225);
function f(e) {
    let { guildName: t, iconSize: n, className: i } = e,
        a = (0, d.oN)(t);
    return (0, r.jsx)(l.Ay, {
        mask: l.Ay.Masks.CLAN_ICON,
        width: n,
        height: n,
        className: i,
        children: (0, r.jsx)("div", { className: s()(_.O, _.q), children: a }),
    });
}
function p(e) {
    let { guildId: t, guildName: n, guildIcon: i, iconSize: a, className: f, acronymClassName: p, animate: h } = e,
        m = (0, o.bG)([u.A], () => u.A.isFocused()),
        g = (0, c.V0)(i) ? i : c.Ay.getGuildIconURL({ id: t, icon: i, size: a, canAnimate: h && m });
    if (null == g) {
        let e = (0, d.oN)(n);
        return (0, r.jsx)(l.Ay, {
            mask: l.Ay.Masks.CLAN_ICON,
            width: a,
            height: a,
            className: f,
            children: (0, r.jsx)("div", { className: s()(_.O, _.q, p), children: e }),
        });
    }
    return (0, r.jsx)(l.Ay, {
        mask: l.Ay.Masks.CLAN_ICON,
        width: a,
        height: a,
        className: f,
        children: (0, r.jsx)("img", { src: g, alt: n, className: _.O }),
    });
}
let h = i.memo(function (e) {
    let { guild: t, iconSize: n, className: i, animate: a } = e;
    return (0, r.jsx)(p, {
        guildName: t.name,
        guildId: t.id,
        guildIcon: t.icon,
        iconSize: n,
        className: i,
        animate: a,
    });
});
