n.d(t, { A: () => A });
var r = n(582128),
    a = n(702841),
    l = n(727170),
    i = n(919395),
    u = n(207803),
    o = n(84540),
    s = n(836602);
function A(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: A } = e,
        d = (0, l.A)(n),
        {
            pendingAvatar: c,
            pendingAvatarDecoration: v,
            pendingErrors: E,
        } = (0, a.cf)([s.A], () => {
            if (t) {
                let e = s.A.getTryItOutChanges();
                return {
                    pendingAvatar: e.tryItOutAvatar,
                    pendingAvatarDecoration: e.tryItOutAvatarDecoration,
                    pendingErrors: s.A.getErrors(A).avatarDecoration,
                };
            }
            let e = s.A.getPendingChanges(A);
            return {
                pendingAvatar: e.pendingAvatar,
                pendingAvatarDecoration: e.pendingAvatarDecoration,
                pendingErrors: s.A.getErrors(A).avatarDecoration,
            };
        }),
        f = (0, r.useCallback)(
            (e) => {
                (0, o.p)({ guildId: A, avatar: e }), (0, i.WU)(null == e ? "remove" : "set");
            },
            [A],
        ),
        g = (0, r.useCallback)(
            (e) => {
                (0, o.p)({ guildId: A, avatarDecoration: e }), null != e && d(e);
            },
            [d, A],
        );
    return {
        pendingAvatar: c,
        pendingAvatarDecoration: v,
        pendingErrors: E,
        setPendingAvatar: t ? u.e$ : f,
        setPendingAvatarDecoration: t ? u.Go : g,
    };
}
