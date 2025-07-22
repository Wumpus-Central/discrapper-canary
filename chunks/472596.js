t.d(e, {
    RE: () => f,
    RN: () => h,
    po: () => E,
    vN: () => c,
    xb: () => d,
    zq: () => u
});
var n,
    r = t(73800),
    l = t(399606),
    i = t(906732),
    s = t(892001),
    a = t(485386),
    o = t(430824),
    g = t(594174),
    v = t(91047);
let f = (A, e) => {
    let { guildId: t, userId: n, colorRoleId: r } = A;
    (0, s.openUserProfileModal)({
        userId: n,
        guildId: t,
        sourceAnalyticsLocations: e,
        roleId: r
    });
};
function c(A, e, t, n) {
    let { analyticsLocations: l } = (0, i.ZP)();
    return r.useCallback(
        (r) => {
            if (null == A) return;
            let i = g.default.getUser(A.userId);
            null != i &&
                (r.stopPropagation(),
                (0, v.nm)(r, {
                    user: i,
                    guildId: A.guildId,
                    analyticsLocations: null != t ? [t] : l,
                    onCloseContextMenu: n,
                    isViewOnly: e
                }));
        },
        [A, l, n, t, e]
    );
}
function h(A, e, t) {
    let { analyticsLocations: n } = (0, i.ZP)();
    return r.useCallback(
        (r) => {
            if (null == A) return;
            let l = g.default.getUser(A.userId);
            null != l &&
                (r.stopPropagation(),
                (0, v._j)(r, {
                    user: l,
                    guildId: A.guildId,
                    analyticsLocations: null != e ? [e] : n,
                    onCloseContextMenu: t,
                    showTransferOwnershipItem: !0
                }));
        },
        [A, t, n, e]
    );
}
function u(A) {
    return (0, l.e7)(
        [o.Z, a.Z],
        () => {
            var e;
            if (null == A) return null;
            let t = o.Z.getGuild(A.guildId);
            return null == t || null == A.highestRoleId ? null : null != (e = a.Z.getRole(t.id, A.highestRoleId)) ? e : null;
        },
        [A]
    );
}
var E = (((n = {})[(n.LOADING = 0)] = 'LOADING'), (n[(n.SUCCESS_STILL_INDEXING = 1)] = 'SUCCESS_STILL_INDEXING'), (n[(n.SUCCESS_EMPTY = 2)] = 'SUCCESS_EMPTY'), (n[(n.SUCCESS_FULL = 3)] = 'SUCCESS_FULL'), n);
function d(A, e, t) {
    return e ? 0 : A ? 1 : t <= 0 ? 2 : 3;
}
