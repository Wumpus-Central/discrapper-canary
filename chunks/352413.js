a.d(t, { A: () => u });
var r = a(64700),
    n = a(702841),
    l = a(727170),
    o = a(919395),
    i = a(207803),
    s = a(84540),
    c = a(836602);
function u(e) {
    let { isTryItOut: t, analyticsLocations: a, guildId: u } = e,
        _ = (0, l.A)(a),
        {
            pendingAvatar: A,
            pendingAvatarDecoration: p,
            pendingErrors: E,
        } = (0, n.cf)([c.A], () => {
            if (t) {
                let e = c.A.getTryItOutChanges();
                return {
                    pendingAvatar: e.tryItOutAvatar,
                    pendingAvatarDecoration: e.tryItOutAvatarDecoration,
                    pendingErrors: c.A.getErrors(u).avatarDecoration,
                };
            }
            let e = c.A.getPendingChanges(u);
            return {
                pendingAvatar: e.pendingAvatar,
                pendingAvatarDecoration: e.pendingAvatarDecoration,
                pendingErrors: c.A.getErrors(u).avatarDecoration,
            };
        }),
        d = (0, r.useCallback)(
            (e) => {
                (0, s.p)({ guildId: u, avatar: e }), (0, o.WU)(null == e ? "remove" : "set");
            },
            [u],
        ),
        v = (0, r.useCallback)(
            (e) => {
                (0, s.p)({ guildId: u, avatarDecoration: e }), null != e && _(e);
            },
            [_, u],
        );
    return {
        pendingAvatar: A,
        pendingAvatarDecoration: p,
        pendingErrors: E,
        setPendingAvatar: t ? i.e$ : d,
        setPendingAvatarDecoration: t ? i.Go : v,
    };
}
