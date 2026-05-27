t.d(r, { A: () => c });
var a = t(64700),
    n = t(702841),
    l = t(727170),
    i = t(919395),
    o = t(207803),
    s = t(84540),
    u = t(836602);
function c(e) {
    let { isTryItOut: r, analyticsLocations: t, guildId: c } = e,
        p = (0, l.A)(t),
        {
            pendingAvatar: d,
            pendingAvatarDecoration: f,
            pendingErrors: v,
        } = (0, n.cf)([u.A], () => {
            if (r) {
                let e = u.A.getTryItOutChanges();
                return {
                    pendingAvatar: e.tryItOutAvatar,
                    pendingAvatarDecoration: e.tryItOutAvatarDecoration,
                    pendingErrors: u.A.getErrors(c).avatarDecoration,
                };
            }
            let e = u.A.getPendingChanges(c);
            return {
                pendingAvatar: e.pendingAvatar,
                pendingAvatarDecoration: e.pendingAvatarDecoration,
                pendingErrors: u.A.getErrors(c).avatarDecoration,
            };
        }),
        m = (0, a.useCallback)(
            (e) => {
                (0, s.p)({ guildId: c, avatar: e }), (0, i.WU)(null == e ? "remove" : "set");
            },
            [c],
        ),
        A = (0, a.useCallback)(
            (e) => {
                (0, s.p)({ guildId: c, avatarDecoration: e }), null != e && p(e);
            },
            [p, c],
        );
    return {
        pendingAvatar: d,
        pendingAvatarDecoration: f,
        pendingErrors: v,
        setPendingAvatar: r ? o.e$ : m,
        setPendingAvatarDecoration: r ? o.Go : A,
    };
}
