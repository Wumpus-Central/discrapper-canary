n.d(t, { T: () => l }), n(47120);
var i = n(149765),
    d = n(973542),
    r = n(790285),
    a = n(981631);
function l(e, t, n) {
    let l = new Set();
    for (let e of Object.keys(n.permissionOverwrites)) {
        let i = t[e],
            a = n.permissionOverwrites[e];
        (0, d.Z)(i) && (0, r.TG)(n, a) && l.add(i);
    }
    let s = t[e.getEveryoneRoleId()],
        _ = null != s && !i.e$(s.permissions, a.Plq.VIEW_CHANNEL),
        p = (0, r.wB)(n, n.permissionOverwrites[e.id]);
    if (_ && !p) for (let e of Object.values(t)) (0, d.Z)(e) && (0, r.MT)(e) && l.add(e);
    return [...l];
}
