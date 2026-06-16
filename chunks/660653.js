n.d(r, { Wb: () => a, uh: () => u });
var e = n(993408),
    i = n(442759);
function l(t) {
    var r;
    let n;
    return (
        (r = t.items),
        {
            firstProfileEffect: (n = new i.Ym(r)).firstProfileEffect,
            firstAvatarDecoration: n.firstAvatarDecoration,
            firstNameplate: n.firstNameplate,
        }
    );
}
function u(t) {
    return (function (t) {
        let { firstAvatarDecoration: r, firstProfileEffect: n, firstNameplate: e } = t;
        return (null != r && null != n && null == e) || (null != r && null != n && null != e);
    })(l(t));
}
function a(t) {
    if (!(0, e.aw)(t)) return !1;
    let { firstNameplate: r } = l(t);
    return null != r;
}
