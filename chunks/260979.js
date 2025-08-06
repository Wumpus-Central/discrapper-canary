n.d(t, { Z: () => s }), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(965288),
    a = n(983834);
let s = i.memo(function (e) {
    let { channel: t, participants: n, maxTiles: i } = e;
    if (0 === n.length) return null;
    let s = [];
    for (let e = 0; e < i; e++)
        if (e < n.length) {
            let i = n[e];
            s.push(
                (0, r.jsx)(
                    l.Z,
                    {
                        channel: t,
                        participant: i,
                    },
                    i.id,
                ),
            );
        } else s.push((0, r.jsx)(l.y, {}, e));
    return (0, r.jsx)("div", {
        className: a.participants,
        children: s,
    });
});
