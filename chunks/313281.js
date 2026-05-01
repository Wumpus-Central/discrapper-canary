"use strict";
n.d(t, { DZ: () => A, m_: () => m, CJ: () => T, TW: () => p, Af: () => E, e4: () => I, Rm: () => g }), n(321073);
var i = n(17928),
    r = n(873298);
n(734057);
var s = n(967198),
    a = n(287809),
    o = n(474090);
n(935208);
var l = n(181079),
    u = n(379587),
    c = n(353640),
    d = n(121894);
let _ = (0, c.v)((e) => ({
    favoriteAdded: !1,
    notifyFavoriteAdded: () => (0, d.r)(() => e({ favoriteAdded: !0 })),
    clearFavoriteAdded: () => (0, d.r)(() => e({ favoriteAdded: !1 })),
}));
var f = n(5180),
    h = n(788868);
function p(e) {
    let { enabled: t, hasHigherPrivileges: n } = (0, u.m)({ location: e }),
        r = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        s = o.Ay.isPremiumExactly(r, h.PremiumTypes.TIER_2);
    return { hasAccess: t && s, isExperimentEnabled: t, hasHigherPrivileges: n };
}
function E(e) {
    return (0, i.bG)([l.A], () => l.A.getFavorite(e));
}
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.A.getFavoriteChannels(),
        t = [{ id: null, name: "" }];
    for (let n in e) {
        let i = e[n];
        i.type === r.Ip.CATEGORY && t.push({ id: i.id, name: i.nickname ?? "" });
    }
    return t.sort((t, n) => (e[t.id]?.order ?? 0) - (e[n.id]?.order ?? 0)), t;
}
function g() {
    return (0, i.bG)([l.A], () => m(l.A.getFavoriteChannels()));
}
function A() {
    let e = (0, i.bG)([s.A], () => s.A.getGuildId());
    return (0, f.ai)(e);
}
function I(e, t) {
    let n = A(),
        { hasAccess: r } = p(t),
        s = (0, i.bG)(
            [l.A],
            () => null != e && (l.A.isFavorite(e.id) || (e.isThread() && l.A.isFavorite(e.parent_id))),
            [e],
        );
    return n && (!r || !s || e?.isCategory()) ? null : (e ?? null);
}
function T() {
    let e = _((e) => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: _((e) => e.notifyFavoriteAdded),
        clearFavoriteAdded: _((e) => e.clearFavoriteAdded),
    };
}
