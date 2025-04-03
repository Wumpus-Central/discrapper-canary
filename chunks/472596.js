n.d(t, {
    RE: () => _,
    RN: () => A,
    po: () => N,
    vN: () => d,
    xb: () => I,
    zq: () => T
});
var r,
    l = n(192379),
    a = n(399606),
    s = n(906732),
    i = n(171368),
    o = n(430824),
    E = n(594174),
    c = n(91047),
    u = n(981631);
let _ = (e, t) => {
    let { guildId: n, userId: r, colorRoleId: l } = e;
    (0, i.openUserProfileModal)({
        userId: r,
        guildId: n,
        sourceAnalyticsLocations: t,
        roleId: l,
        analyticsLocation: {
            section: u.jXE.MEMBER_SAFETY_PAGE,
            object: u.qAy.ACTIONED_BY_USER
        }
    });
};
function d(e, t, n, r) {
    let { analyticsLocations: a } = (0, s.ZP)();
    return l.useCallback(
        (l) => {
            if (null == e) return;
            let s = E.default.getUser(e.userId);
            null != s &&
                (l.stopPropagation(),
                (0, c.nm)(l, {
                    user: s,
                    guildId: e.guildId,
                    analyticsLocations: null != n ? [n] : a,
                    onCloseContextMenu: r,
                    isViewOnly: t
                }));
        },
        [e, a, r, n, t]
    );
}
function A(e, t, n) {
    let { analyticsLocations: r } = (0, s.ZP)();
    return l.useCallback(
        (l) => {
            if (null == e) return;
            let a = E.default.getUser(e.userId);
            null != a &&
                (l.stopPropagation(),
                (0, c._j)(l, {
                    user: a,
                    guildId: e.guildId,
                    analyticsLocations: null != t ? [t] : r,
                    onCloseContextMenu: n,
                    showTransferOwnershipItem: !0
                }));
        },
        [e, n, r, t]
    );
}
function T(e) {
    return (0, a.e7)(
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
var N = (((r = {})[(r.LOADING = 0)] = 'LOADING'), (r[(r.SUCCESS_STILL_INDEXING = 1)] = 'SUCCESS_STILL_INDEXING'), (r[(r.SUCCESS_EMPTY = 2)] = 'SUCCESS_EMPTY'), (r[(r.SUCCESS_FULL = 3)] = 'SUCCESS_FULL'), r);
function I(e, t, n) {
    return t ? 0 : e ? 1 : n <= 0 ? 2 : 3;
}
