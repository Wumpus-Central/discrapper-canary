r.d(t, {
    L: () => o,
    N: () => a,
});
var n = r(884697),
    l = r(328456);
function i(e) {
    let t = new l.bB(e.items);
    return {
        firstProfileEffect: t.firstProfileEffect,
        firstAvatarDecoration: t.firstAvatarDecoration,
        firstNameplate: t.firstNameplate,
    };
}
function a(e) {
    let { firstAvatarDecoration: t, firstProfileEffect: r, firstNameplate: n } = i(e);
    return (null != t && null != r && null == n) || (null != t && null != r && null != n);
}
function o(e) {
    if (!(0, n.x6)(e)) return !1;
    let { firstNameplate: t } = i(e);
    return null != t;
}
