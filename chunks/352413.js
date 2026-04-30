t.d(a, { A: () => u });
var n = t(64700),
    r = t(702841),
    l = t(727170),
    i = t(919395),
    o = t(207803),
    s = t(84540),
    _ = t(836602);
function u(e) {
    let { isTryItOut: a, analyticsLocations: t, guildId: u } = e,
        A = (0, l.A)(t),
        {
            pendingAvatar: c,
            pendingAvatarDecoration: E,
            pendingErrors: p,
        } = (0, r.cf)([_.A], () => {
            if (a) {
                let e = _.A.getTryItOutChanges();
                return {
                    pendingAvatar: e.tryItOutAvatar,
                    pendingAvatarDecoration: e.tryItOutAvatarDecoration,
                    pendingErrors: _.A.getErrors(u).avatarDecoration,
                };
            }
            let e = _.A.getPendingChanges(u);
            return {
                pendingAvatar: e.pendingAvatar,
                pendingAvatarDecoration: e.pendingAvatarDecoration,
                pendingErrors: _.A.getErrors(u).avatarDecoration,
            };
        }),
        R = (0, n.useCallback)(
            (e) => {
                (0, s.p)({ guildId: u, avatar: e }), (0, i.WU)(null == e ? "remove" : "set");
            },
            [u],
        ),
        d = (0, n.useCallback)(
            (e) => {
                (0, s.p)({ guildId: u, avatarDecoration: e }), null != e && A(e);
            },
            [A, u],
        );
    return {
        pendingAvatar: c,
        pendingAvatarDecoration: E,
        pendingErrors: p,
        setPendingAvatar: a ? o.e$ : R,
        setPendingAvatarDecoration: a ? o.Go : d,
    };
}
