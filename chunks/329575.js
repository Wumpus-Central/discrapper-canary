"use strict";
n.d(t, { op: () => a, uG: () => r, v$: () => o });
var i = n(562153),
    l = n(583846),
    s = n(985018);
let r = (e, t) => s.intl.formatToPlainString(s.t.tAwI1k, { username: t.username, activity: e.extra.game_name }),
    a = (e, t, n) => {
        let r,
            a = ((r = (0, l.JM)(e)), (0, l.Rf)(e) ? (r ? s.t.MHO1AV : s.t.i7AOzw) : r ? s.t["lLPKY+"] : s.t["bES+y2"]),
            o = i.Ay.getName(t?.guild_id, t?.id, n),
            c = e.extra.game_name;
        return s.intl.formatToMarkdownString(a, { gameName: c, userName: o }).replaceAll("*", "");
    },
    o = (e) => {
        let { entry: t, channel: n, users: r, countOthers: a } = e,
            o = (0, l.JM)(t) ? s.t.QaUWPd : s.t["7j/5mg"];
        return s.intl
            .formatToMarkdownString(o, {
                gameName: t.extra.game_name,
                user1: i.Ay.getName(n?.guild_id, n?.id, r[0]),
                user2: i.Ay.getName(n?.guild_id, n?.id, r[1]),
                countOthers: a,
            })
            .replaceAll("*", "");
    };
