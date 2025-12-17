n.d(t, {
    RE: () => d,
    RN: () => A,
    po: () => I,
    vN: () => _,
    xb: () => m,
    zq: () => T,
});
var r,
    l = n(473749),
    i = n(399606),
    a = n(906732),
    s = n(892001),
    o = n(485386),
    u = n(430824),
    c = n(594174),
    E = n(91047);
let d = (e, t) => {
    let { guildId: n, userId: r, colorRoleId: l } = e;
    (0, s.openUserProfileModal)({
        userId: r,
        guildId: n,
        sourceAnalyticsLocations: t,
        roleId: l,
    });
};
function _(e, t, n, r) {
    let { analyticsLocations: i } = (0, a.ZP)();
    return l.useCallback(
        (l) => {
            if (null == e) return;
            let a = c.default.getUser(e.userId);
            null != a &&
                (l.stopPropagation(),
                (0, E.nm)(l, {
                    user: a,
                    guildId: e.guildId,
                    analyticsLocations: null != n ? [n] : i,
                    onCloseContextMenu: r,
                    isViewOnly: t,
                }));
        },
        [e, i, r, n, t],
    );
}
function A(e, t, n) {
    let { analyticsLocations: r } = (0, a.ZP)();
    return l.useCallback(
        (l) => {
            if (null == e) return;
            let i = c.default.getUser(e.userId);
            null != i &&
                (l.stopPropagation(),
                (0, E._j)(l, {
                    user: i,
                    guildId: e.guildId,
                    analyticsLocations: null != t ? [t] : r,
                    onCloseContextMenu: n,
                    showTransferOwnershipItem: !0,
                }));
        },
        [e, n, r, t],
    );
}
function T(e) {
    return (0, i.e7)([u.Z, o.Z], () => {
        var t;
        if (null == e) return null;
        let n = u.Z.getGuild(e.guildId);
        return null == n || null == e.highestRoleId
            ? null
            : null != (t = o.Z.getRole(n.id, e.highestRoleId))
              ? t
              : null;
    }, [e]);
}
var I =
    (((r = {})[(r.LOADING = 0)] = "LOADING"),
    (r[(r.SUCCESS_STILL_INDEXING = 1)] = "SUCCESS_STILL_INDEXING"),
    (r[(r.SUCCESS_EMPTY = 2)] = "SUCCESS_EMPTY"),
    (r[(r.SUCCESS_FULL = 3)] = "SUCCESS_FULL"),
    r);
function m(e, t, n) {
    return t ? 0 : e ? 1 : n <= 0 ? 2 : 3;
}
