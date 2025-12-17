t.d(n, {
    Mt: () => C,
    li: () => f,
    s4: () => h,
    up: () => p,
    zv: () => v,
}),
    t(388685),
    t(539854);
var a = t(473749),
    i = t(106351),
    l = t(442837);
t(592125);
var r = t(984933),
    o = t(914010);
t(709054);
var d = t(853856),
    c = t(362658),
    s = t(434065),
    u = t(981631);
function f(e) {
    let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, c.z)("useCanFavoriteChannel"),
        a = (0, l.e7)([d.Z], () => d.Z.isFavorite(e.id)),
        i = e.isDM() || e.isThread();
    return n && !__OVERLAY__ && !a && (!i || t);
}
function h(e) {
    return (0, l.e7)([d.Z], () => d.Z.getFavorite(e));
}
function v() {
    return (0, l.e7)([r.ZP], () => r.ZP.getChannels(u.I_8))[i.d.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function C() {
    return (0, l.e7)([o.Z], () => o.Z.getGuildId()) === u.I_8;
}
function p() {
    let { isFavoritesPerk: e } = (0, c.z)("useFavoriteAdded"),
        n = (0, s.r)(),
        t = a.useCallback(() => {
            e && n.notifyFavoriteAdded();
        }, [n, e]),
        i = a.useCallback(() => {
            e && n.clearFavoriteAdded();
        }, [n, e]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: i,
    };
}
