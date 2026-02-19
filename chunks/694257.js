"use strict";
n.d(t, { A: () => a }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(945777),
    r = n(58249);
let a = s.memo(function (e) {
    let { channel: t, participants: n, maxTiles: s } = e;
    if (0 === n.length) return null;
    let a = [];
    for (let e = 0; e < s; e++)
        if (e < n.length) {
            let s = n[e];
            a.push((0, i.jsx)(l.A, { channel: t, participant: s }, s.id));
        } else a.push((0, i.jsx)(l.S, {}, e));
    return (0, i.jsx)("div", { className: r.l, children: a });
});
