n.d(e, { DZ: () => E, m_: () => b, CJ: () => O, TW: () => _, Af: () => v, e4: () => C, Rm: () => p }), n(321073);
var i = n(17928),
    a = n(873298);
n(734057);
var l = n(967198),
    r = n(287809),
    o = n(474090);
n(935208);
var d = n(181079),
    u = n(379587),
    s = n(353640),
    f = n(121894);
let c = (0, s.v)((t) => ({
    favoriteAdded: !1,
    notifyFavoriteAdded: () => (0, f.r)(() => t({ favoriteAdded: !0 })),
    clearFavoriteAdded: () => (0, f.r)(() => t({ favoriteAdded: !1 })),
}));
var h = n(5180),
    A = n(788868);
function _(t) {
    let { enabled: e, hasHigherPrivileges: n } = (0, u.m)({ location: t }),
        a = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
        l = o.Ay.isPremiumExactly(a, A.PremiumTypes.TIER_2);
    return { hasAccess: e && l, isExperimentEnabled: e, hasHigherPrivileges: n };
}
function v(t) {
    return (0, i.bG)([d.A], () => d.A.getFavorite(t));
}
function b() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.A.getFavoriteChannels(),
        e = [{ id: null, name: "" }];
    for (let n in t) {
        let i = t[n];
        i.type === a.Ip.CATEGORY && e.push({ id: i.id, name: i.nickname ?? "" });
    }
    return e.sort((e, n) => (t[e.id]?.order ?? 0) - (t[n.id]?.order ?? 0)), e;
}
function p() {
    return (0, i.bG)([d.A], () => b(d.A.getFavoriteChannels()));
}
function E() {
    let t = (0, i.bG)([l.A], () => l.A.getGuildId());
    return (0, h.ai)(t);
}
function C(t, e) {
    let n = E(),
        { hasAccess: a } = _(e),
        l = (0, i.bG)(
            [d.A],
            () => null != t && (d.A.isFavorite(t.id) || (t.isThread() && d.A.isFavorite(t.parent_id))),
            [t],
        );
    return n && (!a || !l || t?.isCategory()) ? null : (t ?? null);
}
function O() {
    let t = c((t) => t.favoriteAdded);
    return {
        favoriteAdded: t,
        notifyFavoriteAdded: c((t) => t.notifyFavoriteAdded),
        clearFavoriteAdded: c((t) => t.clearFavoriteAdded),
    };
}
