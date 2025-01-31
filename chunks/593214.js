l.d(n, {
    Mt: () => m,
    li: () => h,
    s4: () => f,
    up: () => x,
    zv: () => v
}),
    l(47120),
    l(653041);
var t = l(192379),
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
function f(e) {
    return (0, a.e7)([r.Z], () => r.Z.getFavorite(e));
}
function v() {
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
