n.d(t, { A: () => s }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(945777),
    a = n(58249);
let s = l.memo(function (e) {
    let { channel: t, participants: n, maxTiles: l } = e;
    if (0 === n.length) return null;
    let s = [];
    for (let e = 0; e < l; e++)
        if (e < n.length) {
            let l = n[e];
            s.push(
                (0, r.jsx)(
                    i.A,
                    {
                        channel: t,
                        participant: l,
                    },
                    l.id,
                ),
            );
        } else s.push((0, r.jsx)(i.S, {}, e));
    return (0, r.jsx)("div", {
        className: a.l,
        children: s,
    });
});
