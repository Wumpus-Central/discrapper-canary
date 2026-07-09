"use strict";
n.d(t, { DZ: () => T, m_: () => f, CJ: () => g, TW: () => h, Af: () => I, e4: () => m, Rm: () => p }), n(321073);
var i = n(17928),
    r = n(873298),
    a = n(967198),
    s = n(287809),
    l = n(474090);
n(935208);
var o = n(181079),
    d = n(379587),
    c = n(353640),
    u = n(121894);
let _ = (0, c.v)((e) => ({
    favoriteAdded: !1,
    notifyFavoriteAdded: () => (0, u.r)(() => e({ favoriteAdded: !0 })),
    clearFavoriteAdded: () => (0, u.r)(() => e({ favoriteAdded: !1 })),
}));
var E = n(5180),
    A = n(202541);
function h(e) {
    let { enabled: t, hasHigherPrivileges: n } = (0, d.m)({ location: e }),
        r = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        a = l.Ay.isPremiumExactly(r, A.PremiumTypes.TIER_2);
    return { hasAccess: t && a, isExperimentEnabled: t, hasHigherPrivileges: n };
}
function I(e) {
    return (0, i.bG)([o.A], () => o.A.getFavorite(e));
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A.getFavoriteChannels(),
        t = [{ id: null, name: "" }];
    for (let n in e) {
        let i = e[n];
        i.type === r.Ip.CATEGORY && t.push({ id: i.id, name: i.nickname ?? "" });
    }
    return t.sort((t, n) => (e[t.id]?.order ?? 0) - (e[n.id]?.order ?? 0)), t;
}
function p() {
    return (0, i.bG)([o.A], () => f(o.A.getFavoriteChannels()));
}
function T() {
    let e = (0, i.bG)([a.A], () => a.A.getGuildId());
    return (0, E.ai)(e);
}
function m(e, t) {
    let n = T(),
        { hasAccess: r } = h(t),
        a = (0, i.bG)(
            [o.A],
            () => null != e && (o.A.isFavorite(e.id) || (e.isThread() && o.A.isFavorite(e.parent_id))),
            [e],
        );
    return n && (!r || !a || e?.isCategory()) ? null : (e ?? null);
}
function g() {
    let e = _((e) => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: _((e) => e.notifyFavoriteAdded),
        clearFavoriteAdded: _((e) => e.clearFavoriteAdded),
    };
}
