n.d(t, { A: () => A });
var r = n(582128),
    a = n(702841),
    i = n(727170),
    l = n(919395),
    u = n(207803),
    o = n(84540),
    s = n(836602);
function A(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: A } = e,
        c = (0, i.A)(n),
        {
            pendingAvatar: d,
            pendingAvatarDecoration: g,
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
        v = (0, r.useCallback)(
            (e) => {
                (0, o.p)({ guildId: A, avatar: e }), (0, l.WU)(null == e ? "remove" : "set");
            },
            [A],
        ),
        f = (0, r.useCallback)(
            (e) => {
                (0, o.p)({ guildId: A, avatarDecoration: e }), null != e && c(e);
            },
            [c, A],
        );
    return {
        pendingAvatar: d,
        pendingAvatarDecoration: g,
        pendingErrors: E,
        setPendingAvatar: t ? u.e$ : v,
        setPendingAvatarDecoration: t ? u.Go : f,
    };
}
