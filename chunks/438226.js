n.d(t, {
    HV: () => s,
    IS: () => r,
    VY: () => c
}),
    n(627494),
    n(757143),
    n(201133);
var a = n(5192),
    l = n(561308),
    i = n(388032);
let r = (e, t) =>
        i.NW.formatToPlainString(i.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        }),
    o = (e) => {
        let t = (0, l.kr)(e);
        return (0, l.Ol)(e) ? (t ? i.t.MHO1AQ : i.t.i7AOz8) : t ? i.t.lLPKY2 : i.t['bES+y8'];
    },
    s = (e, t, n) => {
        let l = o(e),
            r = a.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            s = e.extra.game_name;
        return i.NW.formatToMarkdownString(l, {
            gameName: s,
            userName: r
        }).replaceAll('*', '');
    },
    c = (e) => {
        let { entry: t, channel: n, users: r, countOthers: o } = e,
            s = (0, l.kr)(t) ? i.t.QaUWPT : i.t['7j/5mp'];
        return i.NW.formatToMarkdownString(s, {
            gameName: t.extra.game_name,
            user1: a.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
            user2: a.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
            countOthers: o
        }).replaceAll('*', '');
    };
