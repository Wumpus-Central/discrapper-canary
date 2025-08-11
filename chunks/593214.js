n.d(t, {
    Mt: () => b,
    li: () => f,
    s4: () => p,
    up: () => C,
    zv: () => _,
}),
    n(388685),
    n(539854);
var i = n(73800),
    a = n(106351),
    r = n(442837);
n(592125);
var o = n(984933),
    l = n(914010);
n(709054);
var u = n(853856),
    c = n(362658),
    s = n(434065),
    d = n(981631);
function f(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, c.z)("useCanFavoriteChannel"),
        i = (0, r.e7)([u.Z], () => u.Z.isFavorite(e.id)),
        a = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !i && (!a || n);
}
function p(e) {
    return (0, r.e7)([u.Z], () => u.Z.getFavorite(e));
}
function _() {
    return (0, r.e7)([o.ZP], () => o.ZP.getChannels(d.I_8))[a.d.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function b() {
    return (0, r.e7)([l.Z], () => l.Z.getGuildId()) === d.I_8;
}
function C() {
    let { isFavoritesPerk: e } = (0, c.z)("useFavoriteAdded"),
        t = (0, s.r)(),
        n = i.useCallback(() => {
            e && t.notifyFavoriteAdded();
        }, [t, e]),
        a = i.useCallback(() => {
            e && t.clearFavoriteAdded();
        }, [t, e]);
    return {
        favoriteAdded: t.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: a,
    };
}
