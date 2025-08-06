n.d(e, { T: () => o }), n(388685);
var i = n(601964),
    l = n(345162),
    r = n(973542),
    a = n(790285),
    s = n(981631);
function o(t, e, n) {
    let o = new Set();
    for (let t of Object.keys(n.permissionOverwrites)) {
        let i = e[t],
            l = n.permissionOverwrites[t];
        (0, r.Z)(i) && (0, a.TG)(n, l) && o.add(i);
    }
    let d = e[(0, i.lV)(t)],
        c = !(0, l.Fs)(d, s.Plq.VIEW_CHANNEL),
        u = (0, a.wB)(n, n.permissionOverwrites[t.id]);
    if (c && !u) for (let t of Object.values(e)) (0, r.Z)(t) && (0, a.yt)(t) && o.add(t);
    return [...o];
}
