n.d(t, { A: () => r }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(945777),
    a = n(837198);
let r = l.memo(function (e) {
    let { channel: t, participants: n, maxTiles: l } = e;
    if (0 === n.length) return null;
    let r = [];
    for (let e = 0; e < l; e++)
        if (e < n.length) {
            let l = n[e];
            r.push((0, i.jsx)(s.A, { channel: t, participant: l }, l.id));
        } else r.push((0, i.jsx)(s.S, {}, e));
    return (0, i.jsx)("div", { className: a.l, children: r });
});
