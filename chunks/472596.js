n.d(t, {
    RE: () => c,
    RN: () => d,
    po: () => T,
    vN: () => _,
    xb: () => I,
    zq: () => A
});
var r,
    l = n(73800),
    s = n(399606),
    i = n(906732),
    a = n(892001),
    o = n(430824),
    E = n(594174),
    u = n(91047);
let c = (e, t) => {
    let { guildId: n, userId: r, colorRoleId: l } = e;
    (0, a.openUserProfileModal)({
        userId: r,
        guildId: n,
        sourceAnalyticsLocations: t,
        roleId: l
    });
};
function _(e, t, n, r) {
    let { analyticsLocations: s } = (0, i.ZP)();
    return l.useCallback(
        (l) => {
            if (null == e) return;
            let i = E.default.getUser(e.userId);
            null != i &&
                (l.stopPropagation(),
                (0, u.nm)(l, {
                    user: i,
                    guildId: e.guildId,
                    analyticsLocations: null != n ? [n] : s,
                    onCloseContextMenu: r,
                    isViewOnly: t
                }));
        },
        [e, s, r, n, t]
    );
}
function d(e, t, n) {
    let { analyticsLocations: r } = (0, i.ZP)();
    return l.useCallback(
        (l) => {
            if (null == e) return;
            let s = E.default.getUser(e.userId);
            null != s &&
                (l.stopPropagation(),
                (0, u._j)(l, {
                    user: s,
                    guildId: e.guildId,
                    analyticsLocations: null != t ? [t] : r,
                    onCloseContextMenu: n,
                    showTransferOwnershipItem: !0
                }));
        },
        [e, n, r, t]
    );
}
function A(e) {
    return (0, s.e7)(
        [o.Z],
        () => {
            var t;
            if (null == e) return null;
            let n = o.Z.getGuild(e.guildId);
            return null == n || null == e.highestRoleId ? null : null != (t = o.Z.getRole(n.id, e.highestRoleId)) ? t : null;
        },
        [e]
    );
}
var T = (((r = {})[(r.LOADING = 0)] = 'LOADING'), (r[(r.SUCCESS_STILL_INDEXING = 1)] = 'SUCCESS_STILL_INDEXING'), (r[(r.SUCCESS_EMPTY = 2)] = 'SUCCESS_EMPTY'), (r[(r.SUCCESS_FULL = 3)] = 'SUCCESS_FULL'), r);
function I(e, t, n) {
    return t ? 0 : e ? 1 : n <= 0 ? 2 : 3;
}
