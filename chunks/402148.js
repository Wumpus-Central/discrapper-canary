n.d(t, {
    F: () => a,
    i: () => o,
}),
    n(539854),
    n(388685);
var r = n(149765),
    i = n(345162),
    l = n(233608),
    s = n(981631);
function a(e) {
    return r.Db(e.permissions, s.TC2);
}
function o(e, t) {
    let n = [],
        r = l.Z.getGuildPermissionSpecMap(e);
    for (let e of s.yYS) (0, i.Fs)(t, e) && n.push(r[e.toString()].title);
    return n;
}
