n.d(t, { Z: () => o }), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(965288),
    a = n(742550);
let o = i.memo(function (e) {
    let { channel: t, participants: n, maxTiles: i } = e;
    if (0 === n.length) return null;
    let o = [];
    for (let e = 0; e < i; e++)
        if (e < n.length) {
            let i = n[e];
            o.push(
                (0, r.jsx)(
                    l.Z,
                    {
                        channel: t,
                        participant: i
                    },
                    i.id
                )
            );
        } else o.push((0, r.jsx)(l.y, {}, e));
    return (0, r.jsx)('div', {
        className: a.participants,
        children: o
    });
});
