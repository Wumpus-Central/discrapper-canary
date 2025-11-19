n.d(t, {
    Mt: () => O,
    li: () => f,
    s4: () => E,
    up: () => p,
    zv: () => g,
}),
    n(388685),
    n(539854);
var i = n(473749),
    r = n(106351),
    l = n(442837);
n(592125);
var u = n(984933),
    a = n(914010);
n(709054);
var o = n(853856),
    c = n(362658),
    s = n(434065),
    d = n(981631);
function f(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, c.z)("useCanFavoriteChannel"),
        i = (0, l.e7)([o.Z], () => o.Z.isFavorite(e.id)),
        r = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !i && (!r || n);
}
function E(e) {
    return (0, l.e7)([o.Z], () => o.Z.getFavorite(e));
}
function g() {
    return (0, l.e7)([u.ZP], () => u.ZP.getChannels(d.I_8))[r.d.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function O() {
    return (0, l.e7)([a.Z], () => a.Z.getGuildId()) === d.I_8;
}
function p() {
    let { isFavoritesPerk: e } = (0, c.z)("useFavoriteAdded"),
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
