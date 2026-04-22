n.d(t, { A: () => u });
var a = n(64700),
    r = n(417597),
    l = n(727170),
    i = n(919395),
    o = n(207803),
    s = n(84540),
    c = n(836602);
function u(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: u } = e,
        d = (0, l.A)(n),
        {
            pendingAvatar: p,
            pendingAvatarDecoration: A,
            pendingErrors: g,
        } = (0, r.cf)([c.A], () => {
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
        _ = (0, a.useCallback)(
            (e) => {
                (0, s.p)({ guildId: u, avatar: e }), (0, i.WU)(null == e ? "remove" : "set");
            },
            [u],
        ),
        v = (0, a.useCallback)(
            (e) => {
                (0, s.p)({ guildId: u, avatarDecoration: e }), null != e && d(e);
            },
            [d, u],
        );
    return {
        pendingAvatar: p,
        pendingAvatarDecoration: A,
        pendingErrors: g,
        setPendingAvatar: t ? o.e$ : _,
        setPendingAvatarDecoration: t ? o.Go : v,
    };
}
