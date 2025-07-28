(e.d(n, { T: () => s }), e(388685));
var i = e(601964),
    l = e(345162),
    r = e(973542),
    a = e(790285),
    d = e(981631);
function s(t, n, e) {
    let s = new Set();
    for (let t of Object.keys(e.permissionOverwrites)) {
        let i = n[t],
            l = e.permissionOverwrites[t];
        (0, r.Z)(i) && (0, a.TG)(e, l) && s.add(i);
    }
    let _ = n[(0, i.lV)(t)],
        o = !(0, l.Fs)(_, d.Plq.VIEW_CHANNEL),
        p = (0, a.wB)(e, e.permissionOverwrites[t.id]);
    if (o && !p) for (let t of Object.values(n)) (0, r.Z)(t) && (0, a.yt)(t) && s.add(t);
    return [...s];
}
