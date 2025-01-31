n.d(e, { T: () => a }), n(47120);
var i = n(149765),
    l = n(973542),
    d = n(790285),
    r = n(981631);
function a(t, e, n) {
    let a = new Set();
    for (let t of Object.keys(n.permissionOverwrites)) {
        let i = e[t],
            r = n.permissionOverwrites[t];
        (0, l.Z)(i) && (0, d.TG)(n, r) && a.add(i);
    }
    let s = e[t.getEveryoneRoleId()],
        u = null != s && !i.e$(s.permissions, r.Plq.VIEW_CHANNEL),
        _ = (0, d.wB)(n, n.permissionOverwrites[t.id]);
    if (u && !_) for (let t of Object.values(e)) (0, l.Z)(t) && (0, d.MT)(t) && a.add(t);
    return [...a];
}
