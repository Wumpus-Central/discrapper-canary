n.d(t, { A: () => d });
var r = n(64700),
    i = n(417597),
    a = n(727170),
    s = n(833336),
    o = n(919395),
    l = n(752319),
    c = n(287809),
    u = n(207803);
function d(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: d } = e,
        f = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        p = (0, a.A)(n),
        {
            pendingAvatar: _,
            pendingAvatarDecoration: h,
            pendingErrors: m,
        } = (0, i.cf)([l.A, s.A], () => ({
            pendingAvatar: t ? l.A.getTryItOutAvatar() : null != d ? s.A.getPendingAvatar() : l.A.getPendingAvatar(),
            pendingAvatarDecoration: t
                ? l.A.getTryItOutAvatarDecoration()
                : null != d
                  ? s.A.getPendingAvatarDecoration()
                  : l.A.getPendingAvatarDecoration(),
            pendingErrors: null != d ? s.A.getErrors().avatarDecoration : l.A.getErrors().avatarDecoration,
        })),
        g = (0, r.useCallback)((e) => (0, o.ru)(e, null == f ? void 0 : f.avatar), [null == f ? void 0 : f.avatar]),
        E = (0, r.useCallback)(
            (e) => {
                (0, o.Dx)(e, d), null != e && p(e);
            },
            [p, d],
        );
    return {
        pendingAvatar: _,
        pendingAvatarDecoration: h,
        pendingErrors: m,
        setPendingAvatar: t ? u.e$ : g,
        setPendingAvatarDecoration: t ? u.Go : E,
    };
}
