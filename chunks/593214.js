(n.d(t, {
    Mt: () => b,
    li: () => f,
    s4: () => h,
    up: () => v,
    zv: () => g
}),
    n(388685),
    n(539854));
var i = n(73800),
    r = n(106351),
    l = n(442837);
n(592125);
var a = n(984933),
    o = n(914010);
n(709054);
var s = n(853856),
    d = n(362658),
    u = n(434065),
    c = n(981631);
function f(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, d.z)('useCanFavoriteChannel'),
        i = (0, l.e7)([s.Z], () => s.Z.isFavorite(e.id)),
        r = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !i && (!r || n);
}
function h(e) {
    return (0, l.e7)([s.Z], () => s.Z.getFavorite(e));
}
function g() {
    return (0, l.e7)([a.ZP], () => a.ZP.getChannels(c.I_8))[r.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function b() {
    return (0, l.e7)([o.Z], () => o.Z.getGuildId()) === c.I_8;
}
function v() {
    let { isFavoritesPerk: e } = (0, d.z)('useFavoriteAdded'),
        t = (0, u.r)(),
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
