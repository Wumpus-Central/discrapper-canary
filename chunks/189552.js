n.d(t, {
    Cy: () => _,
    IY: () => T,
    Ko: () => d,
    UY: () => g,
    YH: () => A,
    ii: () => f,
});
var l,
    r = n(64700),
    a = n(417597),
    i = n(688810),
    s = n(657331),
    o = n(317525),
    c = n(71393),
    u = n(287809),
    E = n(841549);
let d = (e, t) => {
    let { guildId: n, userId: l, colorRoleId: r } = e;
    (0, s.openUserProfileModal)({
        userId: l,
        guildId: n,
        sourceAnalyticsLocations: t,
        roleId: r,
    });
};

function _(e, t, n, l) {
    let { analyticsLocations: a } = (0, i.Ay)();
    return r.useCallback(
        (r) => {
            if (null == e) return;
            let i = u.default.getUser(e.userId);
            null != i &&
                (r.stopPropagation(),
                (0, E.Mg)(r, {
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

function g(e, t, n) {
    let { analyticsLocations: l } = (0, i.Ay)();
    return r.useCallback(
        (r) => {
            if (null == e) return;
            let a = u.default.getUser(e.userId);
            null != a &&
                (r.stopPropagation(),
                (0, E.B8)(r, {
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

function A(e) {
    return (0, a.bG)([c.A, o.A], () => {
        var t;
        if (null == e) return null;
        let n = c.A.getGuild(e.guildId);
        return null == n || null == e.highestRoleId
            ? null
            : null != (t = o.A.getRole(n.id, e.highestRoleId))
              ? t
              : null;
    }, [e]);
}
var T =
    (((l = {})[(l.LOADING = 0)] = "LOADING"),
    (l[(l.SUCCESS_STILL_INDEXING = 1)] = "SUCCESS_STILL_INDEXING"),
    (l[(l.SUCCESS_EMPTY = 2)] = "SUCCESS_EMPTY"),
    (l[(l.SUCCESS_FULL = 3)] = "SUCCESS_FULL"),
    l);

function f(e, t, n) {
    return t ? 0 : e ? 1 : n <= 0 ? 2 : 3;
}
