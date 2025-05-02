n.d(t, {
    Mt: () => b,
    li: () => f,
    s4: () => h,
    up: () => p,
    zv: () => v
}),
    n(388685),
    n(539854);
var i = n(192379),
    r = n(106351),
    a = n(442837);
n(592125);
var l = n(984933),
    o = n(914010);
n(709054);
var d = n(853856),
    u = n(362658),
    s = n(434065),
    c = n(981631);
function f(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, u.z)('useCanFavoriteChannel'),
        i = (0, a.e7)([d.Z], () => d.Z.isFavorite(e.id)),
        r = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !i && (!r || n);
}
function h(e) {
    return (0, a.e7)([d.Z], () => d.Z.getFavorite(e));
}
function v() {
    return (0, a.e7)([l.ZP], () => l.ZP.getChannels(c.I_8))[r.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function b() {
    return (0, a.e7)([o.Z], () => o.Z.getGuildId()) === c.I_8;
}
function p() {
    let { isFavoritesPerk: e } = (0, u.z)('useFavoriteAdded'),
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
        clearFavoriteAdded: r
    };
}
