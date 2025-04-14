n.d(t, {
    F: () => l,
    i: () => a
}),
    n(539854),
    n(388685);
var r = n(149765),
    i = n(233608),
    s = n(981631);
function l(e) {
    return r.Db(e.permissions, s.TC2);
}
function a(e, t) {
    let n = [],
        l = i.Z.getGuildPermissionSpecMap(e);
    for (let e of s.yYS) r.e$(t.permissions, e) && n.push(l[e.toString()].title);
    return n;
}
