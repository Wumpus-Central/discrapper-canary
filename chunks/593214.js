n.d(t, {
    Mt: () => p,
    li: () => f,
    s4: () => _,
    up: () => m,
    zv: () => E
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
var u = n(853856),
    c = n(362658),
    s = n(434065),
    d = n(981631);
function f(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, c.z)('useCanFavoriteChannel'),
        r = (0, a.e7)([u.Z], () => u.Z.isFavorite(e.id)),
        i = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !r && (!i || n);
}
function _(e) {
    return (0, a.e7)([u.Z], () => u.Z.getFavorite(e));
}
function E() {
    return (0, a.e7)([l.ZP], () => l.ZP.getChannels(d.I_8))[i.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function p() {
    return (0, a.e7)([o.Z], () => o.Z.getGuildId()) === d.I_8;
}
function m() {
    let { isFavoritesPerk: e } = (0, c.z)('useFavoriteAdded'),
        t = (0, s.r)(),
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
