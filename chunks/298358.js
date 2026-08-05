"use strict";
n.d(t, { ad: () => p, m_: () => m, CJ: () => N, TW: () => f, Af: () => T, e4: () => S, DZ: () => g }), n(321073);
var i = n(17928),
    r = n(873298),
    a = n(967198),
    s = n(287809),
    l = n(474090);
n(935208);
var o = n(181079),
    d = n(379587),
    c = n(196765),
    u = n(121894);
let _ = (0, c.v)((e) => ({
    favoriteAdded: !1,
    notifyFavoriteAdded: () => (0, u.r)(() => e({ favoriteAdded: !0 })),
    clearFavoriteAdded: () => (0, u.r)(() => e({ favoriteAdded: !1 })),
}));
var E = n(5180),
    A = n(349828),
    h = n(202541);
function I(e) {
    let { isExperimentEnabled: t, hasHigherPrivileges: n, isFreemium: i, isPremiumTier2: r } = e,
        a = t && (r || i),
        s = 0;
    return (
        a && (s = r ? A.lj : 3 * !!i),
        { hasAccess: a, isExperimentEnabled: t, isFreemium: i, hasHigherPrivileges: n, favoriteLimit: s }
    );
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "useFavoritesAccess",
        { enabled: t, hasHigherPrivileges: n, isFreemium: r = !1 } = (0, d.m)({ location: e }),
        a = (0, i.bG)([s.default], () => s.default.getCurrentUser());
    return I({
        isExperimentEnabled: t,
        hasHigherPrivileges: n,
        isFreemium: r,
        isPremiumTier2: l.Ay.isPremiumExactly(a, h.PremiumTypes.TIER_2),
    });
}
function p() {
    let { enabled: e, hasHigherPrivileges: t, isFreemium: n = !1 } = (0, d.B)({ location: "getFavoritesAccess" });
    return I({
        isExperimentEnabled: e,
        hasHigherPrivileges: t,
        isFreemium: n,
        isPremiumTier2: l.Ay.isPremiumExactly(s.default.getCurrentUser(), h.PremiumTypes.TIER_2),
    });
}
function T(e) {
    return (0, i.bG)([o.A], () => o.A.getFavorite(e));
}
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A.getFavoriteChannels(),
        t = [{ id: null, name: "" }];
    for (let n in e) {
        let i = e[n];
        i.type === r.Ip.CATEGORY && t.push({ id: i.id, name: i.nickname ?? "" });
    }
    return t.sort((t, n) => (e[t.id]?.order ?? 0) - (e[n.id]?.order ?? 0)), t;
}
function g() {
    let e = (0, i.bG)([a.A], () => a.A.getGuildId());
    return (0, E.ai)(e);
}
function S(e, t) {
    let n = g(),
        { hasAccess: r } = f(t),
        a = (0, i.bG)([o.A], () => null != e && o.A.isChannelOrParentFavorited(e), [e]);
    return n && (!r || !a || e?.isCategory()) ? null : (e ?? null);
}
function N() {
    let e = _((e) => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: _((e) => e.notifyFavoriteAdded),
        clearFavoriteAdded: _((e) => e.clearFavoriteAdded),
    };
}
