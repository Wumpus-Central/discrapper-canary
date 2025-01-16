var i = n(200651),
    o = n(192379),
    a = n(481060),
    r = n(372900);
t.Z = o.memo(function (e) {
    var t, n, c, d;
    let { user: s, size: l = a.AvatarSizes.SIZE_32, animate: f = !1, 'aria-hidden': u = !1, ...p } = e,
        _ = o.useContext(r.Z);
    return (0, i.jsx)(a.Avatar, {
        src: ((t = s), (n = (0, a.getAvatarSize)(l)), (c = f), (d = _), t.getAvatarURL(d, n, c)),
        size: l,
        'aria-label': u ? void 0 : s.username,
        'aria-hidden': u,
        ...p
    });
});
