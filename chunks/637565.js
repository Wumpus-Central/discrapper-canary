e.d(n, { T: () => a }), e(388685);
var i = e(149765),
    l = e(973542),
    d = e(790285),
    r = e(981631);
function a(t, n, e) {
    let a = new Set();
    for (let t of Object.keys(e.permissionOverwrites)) {
        let i = n[t],
            r = e.permissionOverwrites[t];
        (0, l.Z)(i) && (0, d.TG)(e, r) && a.add(i);
    }
    let s = n[t.getEveryoneRoleId()],
        _ = null != s && !i.e$(s.permissions, r.Plq.VIEW_CHANNEL),
        p = (0, d.wB)(e, e.permissionOverwrites[t.id]);
    if (_ && !p) for (let t of Object.values(n)) (0, l.Z)(t) && (0, d.MT)(t) && a.add(t);
    return [...a];
}
