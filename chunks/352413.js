a.d(n, { A: () => c });
var t = a(64700),
    r = a(702841),
    i = a(727170),
    l = a(919395),
    o = a(207803),
    s = a(84540),
    u = a(836602);
function c(e) {
    let { isTryItOut: n, analyticsLocations: a, guildId: c } = e,
        d = (0, i.A)(a),
        {
            pendingAvatar: p,
            pendingAvatarDecoration: _,
            pendingErrors: g,
        } = (0, r.cf)([u.A], () => {
            if (n) {
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
        A = (0, t.useCallback)(
            (e) => {
                (0, s.p)({ guildId: c, avatar: e }), (0, l.WU)(null == e ? "remove" : "set");
            },
            [c],
        ),
        m = (0, t.useCallback)(
            (e) => {
                (0, s.p)({ guildId: c, avatarDecoration: e }), null != e && d(e);
            },
            [d, c],
        );
    return {
        pendingAvatar: p,
        pendingAvatarDecoration: _,
        pendingErrors: g,
        setPendingAvatar: n ? o.e$ : A,
        setPendingAvatarDecoration: n ? o.Go : m,
    };
}
