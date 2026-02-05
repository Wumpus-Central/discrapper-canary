"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(417597),
    a = n(727170),
    s = n(919395),
    o = n(287809),
    l = n(207803),
    u = n(836602);
function c(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: c } = e,
        d = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        _ = (0, a.A)(n),
        {
            pendingAvatar: f,
            pendingAvatarDecoration: p,
            pendingErrors: h,
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
        m = (0, r.useCallback)((e) => (0, s.ru)(e, d?.avatar), [d?.avatar]),
        g = (0, r.useCallback)(
            (e) => {
                (0, s.Dx)(e, c), null != e && _(e);
            },
            [_, c],
        );
    return {
        pendingAvatar: f,
        pendingAvatarDecoration: p,
        pendingErrors: h,
        setPendingAvatar: t ? l.e$ : m,
        setPendingAvatarDecoration: t ? l.Go : g,
    };
}
