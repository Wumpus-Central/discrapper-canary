n.d(t, {
    RE: function () {
        return _;
    },
    RN: function () {
        return T;
    },
    po: function () {
        return l;
    },
    vN: function () {
        return A;
    },
    xb: function () {
        return N;
    },
    zq: function () {
        return I;
    }
});
var r,
    l,
    i = n(192379),
    s = n(399606),
    a = n(906732),
    o = n(171368),
    E = n(430824),
    u = n(594174),
    c = n(91047),
    d = n(981631);
let _ = (e, t) => {
    let { guildId: n, userId: r, colorRoleId: l } = e;
    (0, o.openUserProfileModal)({
        userId: r,
        guildId: n,
        sourceAnalyticsLocations: t,
        roleId: l,
        analyticsLocation: {
            section: d.jXE.MEMBER_SAFETY_PAGE,
            object: d.qAy.ACTIONED_BY_USER
        }
    });
};
function A(e, t, n, r) {
    let { analyticsLocations: l } = (0, a.ZP)();
    return i.useCallback(
        (i) => {
            if (null == e) return;
            let s = u.default.getUser(e.userId);
            if (null != s)
                i.stopPropagation(),
                    (0, c.nm)(i, {
                        user: s,
                        guildId: e.guildId,
                        analyticsLocations: null != n ? [n] : l,
                        onCloseContextMenu: r,
                        isViewOnly: t
                    });
        },
        [e, l, r, n, t]
    );
}
function T(e, t, n) {
    let { analyticsLocations: r } = (0, a.ZP)();
    return i.useCallback(
        (l) => {
            if (null == e) return;
            let i = u.default.getUser(e.userId);
            if (null != i)
                l.stopPropagation(),
                    (0, c._j)(l, {
                        user: i,
                        guildId: e.guildId,
                        analyticsLocations: null != t ? [t] : r,
                        onCloseContextMenu: n,
                        showTransferOwnershipItem: !0
                    });
        },
        [e, n, r, t]
    );
}
function I(e) {
    return (0, s.e7)(
        [E.Z],
        () => {
            var t;
            if (null == e) return null;
            let n = E.Z.getGuild(e.guildId);
            return null == n || null == e.highestRoleId ? null : null !== (t = E.Z.getRole(n.id, e.highestRoleId)) && void 0 !== t ? t : null;
        },
        [e]
    );
}
function N(e, t, n) {
    return t ? 0 : e ? 1 : n <= 0 ? 2 : 3;
}
((r = l || (l = {}))[(r.LOADING = 0)] = 'LOADING'), (r[(r.SUCCESS_STILL_INDEXING = 1)] = 'SUCCESS_STILL_INDEXING'), (r[(r.SUCCESS_EMPTY = 2)] = 'SUCCESS_EMPTY'), (r[(r.SUCCESS_FULL = 3)] = 'SUCCESS_FULL');
