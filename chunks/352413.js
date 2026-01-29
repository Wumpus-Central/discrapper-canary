n.d(t, {
    A: () => d,
});
var r = n(64700),
    i = n(417597),
    a = n(727170),
    o = n(833336),
    s = n(919395),
    l = n(287809),
    c = n(207803),
    u = n(836602);

function d(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: d } = e,
        f = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        p = (0, a.A)(n),
        {
            pendingAvatar: _,
            pendingAvatarDecoration: h,
            pendingErrors: m,
        } = (0, i.cf)([o.A, u.A], () => {
            if (t) {
                let e = u.A.getTryItOutChanges();
                return {
                    pendingAvatar: e.tryItOutAvatar,
                    pendingAvatarDecoration: e.tryItOutAvatarDecoration,
                    pendingErrors: null != d ? o.A.getErrors().avatarDecoration : u.A.getErrors().avatarDecoration,
                };
            }
            return {
                pendingAvatar: null != d ? o.A.getPendingAvatar() : u.A.getPendingChanges().pendingAvatar,
                pendingAvatarDecoration:
                    null != d ? o.A.getPendingAvatarDecoration() : u.A.getPendingChanges().pendingAvatarDecoration,
                pendingErrors: null != d ? o.A.getErrors().avatarDecoration : u.A.getErrors().avatarDecoration,
            };
        }),
        g = (0, r.useCallback)((e) => (0, s.ru)(e, null == f ? void 0 : f.avatar), [null == f ? void 0 : f.avatar]),
        E = (0, r.useCallback)(
            (e) => {
                (0, s.Dx)(e, d), null != e && p(e);
            },
            [p, d],
        );
    return {
        pendingAvatar: _,
        pendingAvatarDecoration: h,
        pendingErrors: m,
        setPendingAvatar: t ? c.e$ : g,
        setPendingAvatarDecoration: t ? c.Go : E,
    };
}
