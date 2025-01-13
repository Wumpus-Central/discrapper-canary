n.d(t, {
    HV: function () {
        return s;
    },
    IS: function () {
        return r;
    },
    VY: function () {
        return u;
    }
}),
    n(627494),
    n(757143),
    n(201133);
var l = n(5192),
    a = n(561308),
    i = n(388032);
let r = (e, t) =>
        i.intl.formatToPlainString(i.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        }),
    o = (e) => {
        let t = (0, a.kr)(e);
        return (0, a.Ol)(e) ? (t ? i.t.MHO1AQ : i.t.i7AOz8) : t ? i.t.lLPKY2 : i.t['bES+y8'];
    },
    s = (e, t, n) => {
        let a = o(e),
            r = l.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            s = e.extra.game_name;
        return i.intl
            .formatToMarkdownString(a, {
                gameName: s,
                userName: r
            })
            .replaceAll('*', '');
    },
    u = (e) => {
        let { entry: t, channel: n, users: r, countOthers: o } = e,
            s = (0, a.kr)(t) ? i.t.QaUWPT : i.t['7j/5mp'];
        return i.intl
            .formatToMarkdownString(s, {
                gameName: t.extra.game_name,
                user1: l.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
                user2: l.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
                countOthers: o
            })
            .replaceAll('*', '');
    };
