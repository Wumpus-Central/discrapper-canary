t.d(a, { A: () => _ });
var n = t(64700),
    r = t(702841),
    l = t(727170),
    i = t(919395),
    o = t(207803),
    s = t(84540),
    u = t(836602);
function _(e) {
    let { isTryItOut: a, analyticsLocations: t, guildId: _ } = e,
        c = (0, l.A)(t),
        {
            pendingAvatar: p,
            pendingAvatarDecoration: d,
            pendingErrors: g,
        } = (0, r.cf)([u.A], () => {
            if (a) {
                let e = u.A.getTryItOutChanges();
                return {
                    pendingAvatar: e.tryItOutAvatar,
                    pendingAvatarDecoration: e.tryItOutAvatarDecoration,
                    pendingErrors: u.A.getErrors(_).avatarDecoration,
                };
            }
            let e = u.A.getPendingChanges(_);
            return {
                pendingAvatar: e.pendingAvatar,
                pendingAvatarDecoration: e.pendingAvatarDecoration,
                pendingErrors: u.A.getErrors(_).avatarDecoration,
            };
        }),
        A = (0, n.useCallback)(
            (e) => {
                (0, s.p)({ guildId: _, avatar: e }), (0, i.WU)(null == e ? "remove" : "set");
            },
            [_],
        ),
        f = (0, n.useCallback)(
            (e) => {
                (0, s.p)({ guildId: _, avatarDecoration: e }), null != e && c(e);
            },
            [c, _],
        );
    return {
        pendingAvatar: p,
        pendingAvatarDecoration: d,
        pendingErrors: g,
        setPendingAvatar: a ? o.e$ : A,
        setPendingAvatarDecoration: a ? o.Go : f,
    };
}
