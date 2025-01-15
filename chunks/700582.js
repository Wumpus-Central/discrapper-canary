var i = t(200651),
    r = t(192379),
    l = t(481060),
    a = t(372900);
e.Z = r.memo(function (n) {
    var e, t, o, d;
    let { user: u, size: s = l.AvatarSizes.SIZE_32, animate: c = !1, 'aria-hidden': f = !1, ...m } = n,
        p = r.useContext(a.Z);
    return (0, i.jsx)(l.Avatar, {
        src: ((e = u), (t = (0, l.getAvatarSize)(s)), (o = c), (d = p), e.getAvatarURL(d, t, o)),
        size: s,
        'aria-label': f ? void 0 : u.username,
        'aria-hidden': f,
        ...m
    });
});
