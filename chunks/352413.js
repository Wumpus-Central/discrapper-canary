"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(417597),
    s = n(727170),
    a = n(919395),
    o = n(207803),
    l = n(84540),
    u = n(836602);
function c(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: c } = e,
        d = (0, s.A)(n),
        {
            pendingAvatar: _,
            pendingAvatarDecoration: f,
            pendingErrors: p,
        } = (0, i.cf)([u.A], () => {
            if (t) {
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
        h = (0, r.useCallback)(
            (e) => {
                (0, l.p)({ guildId: c, avatar: e }), (0, a.WU)(null == e ? "remove" : "set");
            },
            [c],
        ),
        m = (0, r.useCallback)(
            (e) => {
                (0, l.p)({ guildId: c, avatarDecoration: e }), null != e && d(e);
            },
            [d, c],
        );
    return {
        pendingAvatar: _,
        pendingAvatarDecoration: f,
        pendingErrors: p,
        setPendingAvatar: t ? o.e$ : h,
        setPendingAvatarDecoration: t ? o.Go : m,
    };
}
