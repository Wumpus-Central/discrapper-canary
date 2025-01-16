n(653041);
var i = n(200651),
    l = n(192379),
    r = n(965288),
    a = n(595743);
t.Z = l.memo(function (e) {
    let { channel: t, participants: n, maxTiles: l } = e;
    if (0 === n.length) return null;
    let s = [];
    for (let e = 0; e < l; e++)
        if (e < n.length) {
            let l = n[e];
            s.push(
                (0, i.jsx)(
                    r.Z,
                    {
                        channel: t,
                        participant: l
                    },
                    l.id
                )
            );
        } else s.push((0, i.jsx)(r.y, {}, e));
    return (0, i.jsx)('div', {
        className: a.participants,
        children: s
    });
});
