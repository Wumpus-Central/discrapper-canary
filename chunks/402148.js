n.d(t, {
    F: function () {
        return s;
    },
    i: function () {
        return a;
    }
}),
    n(653041),
    n(47120);
var i = n(149765),
    r = n(233608),
    l = n(981631);
function s(e) {
    return i.Db(e.permissions, l.TC2);
}
function a(e, t) {
    let n = [],
        s = r.Z.getGuildPermissionSpecMap(e);
    for (let e of l.yYS) i.e$(t.permissions, e) && n.push(s[e.toString()].title);
    return n;
}
