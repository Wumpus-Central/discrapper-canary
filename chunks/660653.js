l.d(t, {
    W: () => i,
    u: () => a,
});
var n = l(993408),
    r = l(442759);

function s(e) {
    let t = new r.Ym(e.items);
    return {
        firstProfileEffect: t.firstProfileEffect,
        firstAvatarDecoration: t.firstAvatarDecoration,
        firstNameplate: t.firstNameplate,
    };
}

function a(e) {
    let { firstAvatarDecoration: t, firstProfileEffect: l, firstNameplate: n } = s(e);
    return (null != t && null != l && null == n) || (null != t && null != l && null != n);
}

function i(e) {
    if (!(0, n.aw)(e)) return !1;
    let { firstNameplate: t } = s(e);
    return null != t;
}
