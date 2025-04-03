n.d(t, {
    F: () => a,
    i: () => l
}),
    n(653041),
    n(47120);
var r = n(149765),
    i = n(233608),
    s = n(981631);
function a(e) {
    return r.Db(e.permissions, s.TC2);
}
function l(e, t) {
    let n = [],
        a = i.Z.getGuildPermissionSpecMap(e);
    for (let e of s.yYS) r.e$(t.permissions, e) && n.push(a[e.toString()].title);
    return n;
}
