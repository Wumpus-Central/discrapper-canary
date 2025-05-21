t.d(n, {
    Mt: () => g,
    li: () => f,
    s4: () => h,
    up: () => p,
    zv: () => v
}),
    t(388685),
    t(539854);
var i = t(73800),
    r = t(106351),
    a = t(442837);
t(592125);
var l = t(984933),
    o = t(914010);
t(709054);
var d = t(853856),
    u = t(362658),
    s = t(434065),
    c = t(981631);
function f(e) {
    let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, u.z)('useCanFavoriteChannel'),
        i = (0, a.e7)([d.Z], () => d.Z.isFavorite(e.id)),
        r = e.isDM() || e.isThread();
    return n && !__OVERLAY__ && !i && (!r || t);
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
function g() {
    return (0, a.e7)([o.Z], () => o.Z.getGuildId()) === c.I_8;
}
function p() {
    let { isFavoritesPerk: e } = (0, u.z)('useFavoriteAdded'),
        n = (0, s.r)(),
        t = i.useCallback(() => {
            e && n.notifyFavoriteAdded();
        }, [n, e]),
        r = i.useCallback(() => {
            e && n.clearFavoriteAdded();
        }, [n, e]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: r
    };
}
