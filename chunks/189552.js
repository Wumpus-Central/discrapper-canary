n.d(t, { Cy: () => A, IY: () => g, Ko: () => o, UY: () => d, YH: () => T, ii: () => I });
var l,
    r = n(64700),
    a = n(702841),
    i = n(688810),
    s = n(975732),
    E = n(317525),
    u = n(71393),
    _ = n(287809),
    c = n(841549);
let o = (e, t) => {
    let { guildId: n, userId: l, colorRoleId: r } = e;
    (0, s.openUserProfileModal)({ userId: l, guildId: n, sourceAnalyticsLocations: t, roleId: r });
};
function A(e, t, n, l) {
    let { analyticsLocations: a } = (0, i.Ay)();
    return r.useCallback(
        (r) => {
            if (null == e) return;
            let i = _.default.getUser(e.userId);
            null != i &&
                (r.stopPropagation(),
                (0, c.Mg)(r, {
                    user: i,
                    guildId: e.guildId,
                    analyticsLocations: null != n ? [n] : a,
                    onCloseContextMenu: l,
                    isViewOnly: t,
                }));
        },
        [e, a, l, n, t],
    );
}
function d(e, t, n) {
    let { analyticsLocations: l } = (0, i.Ay)();
    return r.useCallback(
        (r) => {
            if (null == e) return;
            let a = _.default.getUser(e.userId);
            null != a &&
                (r.stopPropagation(),
                (0, c.B8)(r, {
                    user: a,
                    guildId: e.guildId,
                    analyticsLocations: null != t ? [t] : l,
                    onCloseContextMenu: n,
                    showTransferOwnershipItem: !0,
                }));
        },
        [e, n, l, t],
    );
}
function T(e) {
    return (0, a.bG)([u.A, E.A], () => {
        if (null == e) return null;
        let t = u.A.getGuild(e.guildId);
        return null == t || null == e.highestRoleId ? null : (E.A.getRole(t.id, e.highestRoleId) ?? null);
    }, [e]);
}
var g =
    (((l = {})[(l.LOADING = 0)] = "LOADING"),
    (l[(l.SUCCESS_STILL_INDEXING = 1)] = "SUCCESS_STILL_INDEXING"),
    (l[(l.SUCCESS_EMPTY = 2)] = "SUCCESS_EMPTY"),
    (l[(l.SUCCESS_FULL = 3)] = "SUCCESS_FULL"),
    l);
function I(e, t, n) {
    return t ? 0 : e ? 1 : n <= 0 ? 2 : 3;
}
