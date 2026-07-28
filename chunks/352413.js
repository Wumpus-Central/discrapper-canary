"use strict";
n.d(t, { A: () => c });
var i = n(582128),
    r = n(702841),
    a = n(727170),
    s = n(919395),
    l = n(207803),
    o = n(84540),
    d = n(836602);
function c(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: c } = e,
        u = (0, a.A)(n),
        {
            pendingAvatar: _,
            pendingAvatarDecoration: E,
            pendingErrors: A,
        } = (0, r.cf)([d.A], () => {
            if (t) {
                let e = d.A.getTryItOutChanges();
                return {
                    pendingAvatar: e.tryItOutAvatar,
                    pendingAvatarDecoration: e.tryItOutAvatarDecoration,
                    pendingErrors: d.A.getErrors(c).avatarDecoration,
                };
            }
            let e = d.A.getPendingChanges(c);
            return {
                pendingAvatar: e.pendingAvatar,
                pendingAvatarDecoration: e.pendingAvatarDecoration,
                pendingErrors: d.A.getErrors(c).avatarDecoration,
            };
        }),
        h = (0, i.useCallback)(
            (e) => {
                (0, o.p)({ guildId: c, avatar: e }), (0, s.WU)(null == e ? "remove" : "set");
            },
            [c],
        ),
        I = (0, i.useCallback)(
            (e) => {
                (0, o.p)({ guildId: c, avatarDecoration: e }), null != e && u(e);
            },
            [u, c],
        );
    return {
        pendingAvatar: _,
        pendingAvatarDecoration: E,
        pendingErrors: A,
        setPendingAvatar: t ? l.e$ : h,
        setPendingAvatarDecoration: t ? l.Go : I,
    };
}
