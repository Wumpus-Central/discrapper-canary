n.d(t, {
    L: () => o,
    N: () => s,
});
var r = n(884697),
    l = n(328456);
function i(e) {
    let t = new l.bB(e.items);
    return {
        firstProfileEffect: t.firstProfileEffect,
        firstAvatarDecoration: t.firstAvatarDecoration,
        firstNameplate: t.firstNameplate,
    };
}
function s(e) {
    let { firstAvatarDecoration: t, firstProfileEffect: n, firstNameplate: r } = i(e);
    return (null != t && null != n && null == r) || (null != t && null != n && null != r);
}
function o(e) {
    if (!(0, r.x6)(e)) return !1;
    let { firstNameplate: t } = i(e);
    return null != t;
}
