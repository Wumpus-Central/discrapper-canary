l.d(n, {
    Mt: () => m,
    li: () => h,
    s4: () => v,
    up: () => x,
    zv: () => f
}),
    l(388685),
    l(539854);
var t = l(73800),
    i = l(106351),
    a = l(442837);
l(592125);
var d = l(984933),
    o = l(914010);
l(709054);
var r = l(853856),
    c = l(362658),
    s = l(434065),
    u = l(981631);
function h(e) {
    let { favoritesEnabled: n, hasStaffPrivileges: l } = (0, c.z)('useCanFavoriteChannel'),
        t = (0, a.e7)([r.Z], () => r.Z.isFavorite(e.id)),
        i = e.isDM() || e.isThread();
    return n && !__OVERLAY__ && !t && (!i || l);
}
function v(e) {
    return (0, a.e7)([r.Z], () => r.Z.getFavorite(e));
}
function f() {
    return (0, a.e7)([d.ZP], () => d.ZP.getChannels(u.I_8))[i.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function m() {
    return (0, a.e7)([o.Z], () => o.Z.getGuildId()) === u.I_8;
}
function x() {
    let { isFavoritesPerk: e } = (0, c.z)('useFavoriteAdded'),
        n = (0, s.r)(),
        l = t.useCallback(() => {
            e && n.notifyFavoriteAdded();
        }, [n, e]),
        i = t.useCallback(() => {
            e && n.clearFavoriteAdded();
        }, [n, e]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: l,
        clearFavoriteAdded: i
    };
}
