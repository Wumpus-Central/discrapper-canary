n.d(t, {
    Wb: () => i,
    uh: () => a,
});
var r = n(993408),
    l = n(442759);

function s(e) {
    var t;
    let n;
    return (
        (t = e.items),
        {
            firstProfileEffect: (n = new l.Ym(t)).firstProfileEffect,
            firstAvatarDecoration: n.firstAvatarDecoration,
            firstNameplate: n.firstNameplate,
        }
    );
}

function a(e) {
    return (function (e) {
        let { firstAvatarDecoration: t, firstProfileEffect: n, firstNameplate: r } = e;
        return (null != t && null != n && null == r) || (null != t && null != n && null != r);
    })(s(e));
}

function i(e) {
    if (!(0, r.aw)(e)) return !1;
    let { firstNameplate: t } = s(e);
    return null != t;
}
