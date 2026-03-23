"use strict";
n.d(t, { A: () => r }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(945777),
    a = n(58249);
let r = s.memo(function (e) {
    let { channel: t, participants: n, maxTiles: s } = e;
    if (0 === n.length) return null;
    let r = [];
    for (let e = 0; e < s; e++)
        if (e < n.length) {
            let s = n[e];
            r.push((0, i.jsx)(l.A, { channel: t, participant: s }, s.id));
        } else r.push((0, i.jsx)(l.S, {}, e));
    return (0, i.jsx)("div", { className: a.l, children: r });
});
