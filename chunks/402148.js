n.d(t, {
    F: () => s,
    i: () => a
}),
    n(539854),
    n(388685);
var r = n(149765),
    i = n(233608),
    l = n(981631);
function s(e) {
    return r.Db(e.permissions, l.TC2);
}
function a(e, t) {
    let n = [],
        s = i.Z.getGuildPermissionSpecMap(e);
    for (let e of l.yYS) r.e$(t.permissions, e) && n.push(s[e.toString()].title);
    return n;
}
