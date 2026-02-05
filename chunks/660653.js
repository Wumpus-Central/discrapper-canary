"use strict";
s.d(t, { Wb: () => i, uh: () => a });
var n = s(993408),
    r = s(442759);
function l(e) {
    var t;
    let s;
    return (
        (t = e.items),
        {
            firstProfileEffect: (s = new r.Ym(t)).firstProfileEffect,
            firstAvatarDecoration: s.firstAvatarDecoration,
            firstNameplate: s.firstNameplate,
        }
    );
}
function a(e) {
    return (function (e) {
        let { firstAvatarDecoration: t, firstProfileEffect: s, firstNameplate: n } = e;
        return (null != t && null != s && null == n) || (null != t && null != s && null != n);
    })(l(e));
}
function i(e) {
    if (!(0, n.aw)(e)) return !1;
    let { firstNameplate: t } = l(e);
    return null != t;
}
