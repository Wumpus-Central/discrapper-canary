n.d(t, { Z: () => s }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(965288),
    r = n(298225);
let s = l.memo(function (e) {
    let { channel: t, participants: n, maxTiles: l } = e;
    if (0 === n.length) return null;
    let s = [];
    for (let e = 0; e < l; e++)
        if (e < n.length) {
            let l = n[e];
            s.push(
                (0, i.jsx)(
                    a.Z,
                    {
                        channel: t,
                        participant: l
                    },
                    l.id
                )
            );
        } else s.push((0, i.jsx)(a.y, {}, e));
    return (0, i.jsx)('div', {
        className: r.participants,
        children: s
    });
});
