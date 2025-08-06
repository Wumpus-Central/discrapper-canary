n.d(t, {
    Mt: () => v,
    li: () => f,
    s4: () => p,
    up: () => _,
    zv: () => b,
}),
    n(388685),
    n(539854);
var i = n(73800),
    r = n(106351),
    a = n(442837);
n(592125);
var l = n(984933),
    o = n(914010);
n(709054);
var c = n(853856),
    d = n(362658),
    s = n(434065),
    u = n(981631);
function f(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, d.z)("useCanFavoriteChannel"),
        i = (0, a.e7)([c.Z], () => c.Z.isFavorite(e.id)),
        r = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !i && (!r || n);
}
function p(e) {
    return (0, a.e7)([c.Z], () => c.Z.getFavorite(e));
}
function b() {
    return (0, a.e7)([l.ZP], () => l.ZP.getChannels(u.I_8))[r.d.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function v() {
    return (0, a.e7)([o.Z], () => o.Z.getGuildId()) === u.I_8;
}
function _() {
    let { isFavoritesPerk: e } = (0, d.z)("useFavoriteAdded"),
        t = (0, s.r)(),
        n = i.useCallback(() => {
            e && t.notifyFavoriteAdded();
        }, [t, e]),
        r = i.useCallback(() => {
            e && t.clearFavoriteAdded();
        }, [t, e]);
    return {
        favoriteAdded: t.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: r,
    };
}
