"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(417597),
    a = n(727170),
    s = n(833336),
    o = n(919395),
    l = n(287809),
    u = n(207803),
    c = n(836602);
function d(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: d } = e,
        _ = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        f = (0, a.A)(n),
        {
            pendingAvatar: p,
            pendingAvatarDecoration: h,
            pendingErrors: m,
        } = (0, i.cf)([s.A, c.A], () => {
            if (t) {
                let e = c.A.getTryItOutChanges();
                return {
                    pendingAvatar: e.tryItOutAvatar,
                    pendingAvatarDecoration: e.tryItOutAvatarDecoration,
                    pendingErrors: null != d ? s.A.getErrors().avatarDecoration : c.A.getErrors().avatarDecoration,
                };
            }
            return {
                pendingAvatar: null != d ? s.A.getPendingAvatar() : c.A.getPendingChanges().pendingAvatar,
                pendingAvatarDecoration:
                    null != d ? s.A.getPendingAvatarDecoration() : c.A.getPendingChanges().pendingAvatarDecoration,
                pendingErrors: null != d ? s.A.getErrors().avatarDecoration : c.A.getErrors().avatarDecoration,
            };
        }),
        g = (0, r.useCallback)((e) => (0, o.ru)(e, _?.avatar), [_?.avatar]),
        E = (0, r.useCallback)(
            (e) => {
                (0, o.Dx)(e, d), null != e && f(e);
            },
            [f, d],
        );
    return {
        pendingAvatar: p,
        pendingAvatarDecoration: h,
        pendingErrors: m,
        setPendingAvatar: t ? u.e$ : g,
        setPendingAvatarDecoration: t ? u.Go : E,
    };
}
