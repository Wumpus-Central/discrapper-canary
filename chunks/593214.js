t.d(n, {
    Mt: () => v,
    li: () => f,
    s4: () => g,
    up: () => _,
    zv: () => h,
}),
    t(388685),
    t(539854);
var i = t(647438),
    l = t(106351),
    r = t(442837);
t(592125);
var a = t(984933),
    o = t(914010);
t(709054);
var u = t(853856),
    s = t(362658),
    d = t(434065),
    c = t(981631);
function f(e) {
    let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, s.z)("useCanFavoriteChannel"),
        i = (0, r.e7)([u.Z], () => u.Z.isFavorite(e.id)),
        l = e.isDM() || e.isThread();
    return n && !__OVERLAY__ && !i && (!l || t);
}
function g(e) {
    return (0, r.e7)([u.Z], () => u.Z.getFavorite(e));
}
function h() {
    return (0, r.e7)([a.ZP], () => a.ZP.getChannels(c.I_8))[l.d.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function v() {
    return (0, r.e7)([o.Z], () => o.Z.getGuildId()) === c.I_8;
}
function _() {
    let { isFavoritesPerk: e } = (0, s.z)("useFavoriteAdded"),
        n = (0, d.r)(),
        t = i.useCallback(() => {
            e && n.notifyFavoriteAdded();
        }, [n, e]),
        l = i.useCallback(() => {
            e && n.clearFavoriteAdded();
        }, [n, e]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: l,
    };
}
