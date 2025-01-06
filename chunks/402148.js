n.d(t, {
    F: function () {
        return a;
    },
    i: function () {
        return s;
    }
}),
    n(653041),
    n(47120);
var i = n(149765),
    r = n(233608),
    l = n(981631);
function a(e) {
    return i.Db(e.permissions, l.TC2);
}
function s(e, t) {
    let n = [],
        a = r.Z.getGuildPermissionSpecMap(e);
    for (let e of l.yYS) i.e$(t.permissions, e) && n.push(a[e.toString()].title);
    return n;
}
