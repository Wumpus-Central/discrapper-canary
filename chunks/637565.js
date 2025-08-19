e.d(n, { T: () => s }), e(388685);
var i = e(601964),
    l = e(345162),
    d = e(973542),
    r = e(790285),
    a = e(981631);
function s(t, n, e) {
    let s = new Set();
    for (let t of Object.keys(e.permissionOverwrites)) {
        let i = n[t],
            l = e.permissionOverwrites[t];
        (0, d.Z)(i) && (0, r.TG)(e, l) && s.add(i);
    }
    let _ = n[(0, i.lV)(t)],
        E = !(0, l.Fs)(_, a.Plq.VIEW_CHANNEL),
        o = (0, r.wB)(e, e.permissionOverwrites[t.id]);
    if (E && !o) for (let t of Object.values(n)) (0, d.Z)(t) && (0, r.yt)(t) && s.add(t);
    return [...s];
}
