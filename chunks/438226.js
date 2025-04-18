n.d(t, {
    HV: () => l,
    IS: () => o,
    VY: () => c
}),
    n(804061),
    n(704826),
    n(35282),
    n(201133);
var r = n(5192),
    i = n(561308),
    a = n(388032);
let o = (e, t) =>
        a.NW.formatToPlainString(a.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        }),
    s = (e) => {
        let t = (0, i.kr)(e);
        return (0, i.Ol)(e) ? (t ? a.t.MHO1AQ : a.t.i7AOz8) : t ? a.t.lLPKY2 : a.t['bES+y8'];
    },
    l = (e, t, n) => {
        let i = s(e),
            o = r.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            l = e.extra.game_name;
        return a.NW.formatToMarkdownString(i, {
            gameName: l,
            userName: o
        }).replaceAll('*', '');
    },
    c = (e) => {
        let { entry: t, channel: n, users: o, countOthers: s } = e,
            l = (0, i.kr)(t) ? a.t.QaUWPT : a.t['7j/5mp'];
        return a.NW.formatToMarkdownString(l, {
            gameName: t.extra.game_name,
            user1: r.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, o[0]),
            user2: r.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, o[1]),
            countOthers: s
        }).replaceAll('*', '');
    };
