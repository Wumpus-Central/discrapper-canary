n.d(t, {
    L: () => s,
    N: () => o,
});
var r = n(884697),
    i = n(328456);
function a(e) {
    let t = new i.bB(e.items);
    return {
        firstProfileEffect: t.firstProfileEffect,
        firstAvatarDecoration: t.firstAvatarDecoration,
        firstNameplate: t.firstNameplate,
    };
}
function o(e) {
    let { firstAvatarDecoration: t, firstProfileEffect: n, firstNameplate: r } = a(e),
        i = null != t && null != n && null == r,
        o = null != t && null != n && null != r;
    return i || o;
}
function s(e) {
    if (!(0, r.x6)(e)) return !1;
    let { firstNameplate: t } = a(e);
    return null != t;
}
