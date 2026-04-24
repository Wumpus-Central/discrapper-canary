i.d(e, { Wb: () => r, uh: () => o });
var l = i(993408),
    n = i(442759);
function a(t) {
    var e;
    let i;
    return (
        (e = t.items),
        {
            firstProfileEffect: (i = new n.Ym(e)).firstProfileEffect,
            firstAvatarDecoration: i.firstAvatarDecoration,
            firstNameplate: i.firstNameplate,
        }
    );
}
function o(t) {
    return (function (t) {
        let { firstAvatarDecoration: e, firstProfileEffect: i, firstNameplate: l } = t;
        return (null != e && null != i && null == l) || (null != e && null != i && null != l);
    })(a(t));
}
function r(t) {
    if (!(0, l.aw)(t)) return !1;
    let { firstNameplate: e } = a(t);
    return null != e;
}
