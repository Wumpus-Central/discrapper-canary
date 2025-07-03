n.d(t, {
    RE: () => E,
    RN: () => A,
    po: () => f,
    vN: () => _,
    xb: () => T,
    zq: () => m
});
var r,
    l = n(73800),
    i = n(399606),
    s = n(906732),
    a = n(892001),
    o = n(485386),
    u = n(430824),
    c = n(594174),
    d = n(91047);
let E = (e, t) => {
    let { guildId: n, userId: r, colorRoleId: l } = e;
    (0, a.openUserProfileModal)({
        userId: r,
        guildId: n,
        sourceAnalyticsLocations: t,
        roleId: l
    });
};
function _(e, t, n, r) {
    let { analyticsLocations: i } = (0, s.ZP)();
    return l.useCallback(
        (l) => {
            if (null == e) return;
            let s = c.default.getUser(e.userId);
            null != s &&
                (l.stopPropagation(),
                (0, d.nm)(l, {
                    user: s,
                    guildId: e.guildId,
                    analyticsLocations: null != n ? [n] : i,
                    onCloseContextMenu: r,
                    isViewOnly: t
                }));
        },
        [e, i, r, n, t]
    );
}
function A(e, t, n) {
    let { analyticsLocations: r } = (0, s.ZP)();
    return l.useCallback(
        (l) => {
            if (null == e) return;
            let i = c.default.getUser(e.userId);
            null != i &&
                (l.stopPropagation(),
                (0, d._j)(l, {
                    user: i,
                    guildId: e.guildId,
                    analyticsLocations: null != t ? [t] : r,
                    onCloseContextMenu: n,
                    showTransferOwnershipItem: !0
                }));
        },
        [e, n, r, t]
    );
}
function m(e) {
    return (0, i.e7)(
        [u.Z, o.Z],
        () => {
            var t;
            if (null == e) return null;
            let n = u.Z.getGuild(e.guildId);
            return null == n || null == e.highestRoleId ? null : null != (t = o.Z.getRole(n.id, e.highestRoleId)) ? t : null;
        },
        [e]
    );
}
var f = (((r = {})[(r.LOADING = 0)] = 'LOADING'), (r[(r.SUCCESS_STILL_INDEXING = 1)] = 'SUCCESS_STILL_INDEXING'), (r[(r.SUCCESS_EMPTY = 2)] = 'SUCCESS_EMPTY'), (r[(r.SUCCESS_FULL = 3)] = 'SUCCESS_FULL'), r);
function T(e, t, n) {
    return t ? 0 : e ? 1 : n <= 0 ? 2 : 3;
}
