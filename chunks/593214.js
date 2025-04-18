t.d(n, {
    Mt: () => p,
    li: () => f,
    s4: () => h,
    up: () => y,
    zv: () => v
}),
    t(388685),
    t(539854);
var r = t(192379),
    i = t(106351),
    a = t(442837);
t(592125);
var o = t(984933),
    l = t(914010);
t(709054);
var d = t(853856),
    c = t(362658),
    s = t(434065),
    u = t(981631);
function f(e) {
    let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, c.z)('useCanFavoriteChannel'),
        r = (0, a.e7)([d.Z], () => d.Z.isFavorite(e.id)),
        i = e.isDM() || e.isThread();
    return n && !__OVERLAY__ && !r && (!i || t);
}
function h(e) {
    return (0, a.e7)([d.Z], () => d.Z.getFavorite(e));
}
function v() {
    return (0, a.e7)([o.ZP], () => o.ZP.getChannels(u.I_8))[i.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function p() {
    return (0, a.e7)([l.Z], () => l.Z.getGuildId()) === u.I_8;
}
function y() {
    let { isFavoritesPerk: e } = (0, c.z)('useFavoriteAdded'),
        n = (0, s.r)(),
        t = r.useCallback(() => {
            e && n.notifyFavoriteAdded();
        }, [n, e]),
        i = r.useCallback(() => {
            e && n.clearFavoriteAdded();
        }, [n, e]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: i
    };
}
