n.d(t, {
    HV: () => s,
    IS: () => i,
    VY: () => c
}),
    n(627494),
    n(757143),
    n(301563),
    n(201133);
var r = n(5192),
    a = n(561308),
    l = n(388032);
let i = (e, t) =>
        l.NW.formatToPlainString(l.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        }),
    o = (e) => {
        let t = (0, a.kr)(e);
        return (0, a.Ol)(e) ? (t ? l.t.MHO1AQ : l.t.i7AOz8) : t ? l.t.lLPKY2 : l.t['bES+y8'];
    },
    s = (e, t, n) => {
        let a = o(e),
            i = r.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            s = e.extra.game_name;
        return l.NW.formatToMarkdownString(a, {
            gameName: s,
            userName: i
        }).replaceAll('*', '');
    },
    c = (e) => {
        let { entry: t, channel: n, users: i, countOthers: o } = e,
            s = (0, a.kr)(t) ? l.t.QaUWPT : l.t['7j/5mp'];
        return l.NW.formatToMarkdownString(s, {
            gameName: t.extra.game_name,
            user1: r.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, i[0]),
            user2: r.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, i[1]),
            countOthers: o
        }).replaceAll('*', '');
    };
