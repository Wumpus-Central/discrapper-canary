n.d(e, { T: () => d }), n(388685);
var i = n(149765),
    r = n(973542),
    l = n(790285),
    a = n(981631);
function d(t, e, n) {
    let d = new Set();
    for (let t of Object.keys(n.permissionOverwrites)) {
        let i = e[t],
            a = n.permissionOverwrites[t];
        (0, r.Z)(i) && (0, l.TG)(n, a) && d.add(i);
    }
    let s = e[t.getEveryoneRoleId()],
        o = null != s && !i.e$(s.permissions, a.Plq.VIEW_CHANNEL),
        c = (0, l.wB)(n, n.permissionOverwrites[t.id]);
    if (o && !c) for (let t of Object.values(e)) (0, r.Z)(t) && (0, l.MT)(t) && d.add(t);
    return [...d];
}
