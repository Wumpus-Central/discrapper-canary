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
        p = (0, l.A)(a),
        {
            pendingAvatar: d,
            pendingAvatarDecoration: _,
            pendingErrors: A,
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
        v = (0, r.useCallback)(
            (e) => {
                (0, s.p)({ guildId: u, avatar: e }), (0, o.WU)(null == e ? "remove" : "set");
            },
            [u],
        ),
        g = (0, r.useCallback)(
            (e) => {
                (0, s.p)({ guildId: u, avatarDecoration: e }), null != e && p(e);
            },
            [p, u],
        );
    return {
        pendingAvatar: d,
        pendingAvatarDecoration: _,
        pendingErrors: A,
        setPendingAvatar: t ? i.e$ : v,
        setPendingAvatarDecoration: t ? i.Go : g,
    };
}
