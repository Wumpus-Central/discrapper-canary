n.d(t, {
    Mt: () => b,
    li: () => f,
    s4: () => p,
    up: () => v,
    zv: () => h
}),
    n(388685),
    n(539854);
var r = n(73800),
    i = n(106351),
    a = n(442837);
n(592125);
var l = n(984933),
    o = n(914010);
n(709054);
var c = n(853856),
    s = n(362658),
    d = n(434065),
    u = n(981631);
function f(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, s.z)('useCanFavoriteChannel'),
        r = (0, a.e7)([c.Z], () => c.Z.isFavorite(e.id)),
        i = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !r && (!i || n);
}
function p(e) {
    return (0, a.e7)([c.Z], () => c.Z.getFavorite(e));
}
function h() {
    return (0, a.e7)([l.ZP], () => l.ZP.getChannels(u.I_8))[i.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function b() {
    return (0, a.e7)([o.Z], () => o.Z.getGuildId()) === u.I_8;
}
function v() {
    let { isFavoritesPerk: e } = (0, s.z)('useFavoriteAdded'),
        t = (0, d.r)(),
        n = r.useCallback(() => {
            e && t.notifyFavoriteAdded();
        }, [t, e]),
        i = r.useCallback(() => {
            e && t.clearFavoriteAdded();
        }, [t, e]);
    return {
        favoriteAdded: t.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: i
    };
}
