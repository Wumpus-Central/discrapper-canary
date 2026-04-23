n.d(t, { A: () => r }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(945777),
    s = n(444830);
let r = l.memo(function (e) {
    let { channel: t, participants: n, maxTiles: l } = e;
    if (0 === n.length) return null;
    let r = [];
    for (let e = 0; e < l; e++)
        if (e < n.length) {
            let l = n[e];
            r.push((0, i.jsx)(a.A, { channel: t, participant: l }, l.id));
        } else r.push((0, i.jsx)(a.S, {}, e));
    return (0, i.jsx)("div", { className: s.l, children: r });
});
