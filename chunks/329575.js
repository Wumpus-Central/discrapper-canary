n.d(t, {
    op: () => l,
    uG: () => s,
    v$: () => c,
}),
    n(747238),
    n(812715),
    n(866193);
var r = n(562153),
    i = n(583846),
    a = n(985018);
let s = (e, t) =>
        a.intl.formatToPlainString(a.t.tAwI1k, {
            username: t.username,
            activity: e.extra.game_name,
        }),
    o = (e) => {
        let t = (0, i.JM)(e);
        return (0, i.Rf)(e) ? (t ? a.t.MHO1AV : a.t.i7AOzw) : t ? a.t["lLPKY+"] : a.t["bES+y2"];
    },
    l = (e, t, n) => {
        let i = o(e),
            s = r.Ay.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            l = e.extra.game_name;
        return a.intl
            .formatToMarkdownString(i, {
                gameName: l,
                userName: s,
            })
            .replaceAll("*", "");
    },
    c = (e) => {
        let { entry: t, channel: n, users: s, countOthers: o } = e,
            l = (0, i.JM)(t) ? a.t.QaUWPd : a.t["7j/5mg"];
        return a.intl
            .formatToMarkdownString(l, {
                gameName: t.extra.game_name,
                user1: r.Ay.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, s[0]),
                user2: r.Ay.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, s[1]),
                countOthers: o,
            })
            .replaceAll("*", "");
    };
