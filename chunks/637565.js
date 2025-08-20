n.d(t, { T: () => o }), n(388685);
var l = n(601964),
    i = n(345162),
    r = n(973542),
    u = n(790285),
    a = n(981631);
function o(e, t, n) {
    let o = new Set();
    for (let e of Object.keys(n.permissionOverwrites)) {
        let l = t[e],
            i = n.permissionOverwrites[e];
        (0, r.Z)(l) && (0, u.TG)(n, i) && o.add(l);
    }
    let s = t[(0, l.lV)(e)],
        c = !(0, i.Fs)(s, a.Plq.VIEW_CHANNEL),
        d = (0, u.wB)(n, n.permissionOverwrites[e.id]);
    if (c && !d) for (let e of Object.values(t)) (0, r.Z)(e) && (0, u.yt)(e) && o.add(e);
    return [...o];
}
