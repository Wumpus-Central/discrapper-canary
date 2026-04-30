"use strict";
n.d(t, { op: () => r, uG: () => a, v$: () => o });
var l = n(562153),
    i = n(583846),
    s = n(985018);
let a = (e, t) => s.intl.formatToPlainString(s.t.tAwI1k, { username: t.username, activity: e.extra.game_name }),
    r = (e, t, n) => {
        let a,
            r = ((a = (0, i.JM)(e)), (0, i.Rf)(e) ? (a ? s.t.MHO1AV : s.t.i7AOzw) : a ? s.t["lLPKY+"] : s.t["bES+y2"]),
            o = l.Ay.getName(t?.guild_id, t?.id, n),
            c = e.extra.game_name;
        return s.intl.formatToMarkdownString(r, { gameName: c, userName: o }).replaceAll("*", "");
    },
    o = (e) => {
        let { entry: t, channel: n, users: a, countOthers: r } = e,
            o = (0, i.JM)(t) ? s.t.QaUWPd : s.t["7j/5mg"];
        return s.intl
            .formatToMarkdownString(o, {
                gameName: t.extra.game_name,
                user1: l.Ay.getName(n?.guild_id, n?.id, a[0]),
                user2: l.Ay.getName(n?.guild_id, n?.id, a[1]),
                countOthers: r,
            })
            .replaceAll("*", "");
    };
