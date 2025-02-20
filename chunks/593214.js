n.d(t, {
    Mt: () => h,
    li: () => f,
    s4: () => p,
    up: () => E,
    zv: () => v
}),
    n(47120),
    n(653041);
var r = n(192379),
    i = n(106351),
    l = n(442837);
n(592125);
var a = n(984933),
    o = n(914010);
n(709054);
var u = n(853856),
    d = n(362658),
    s = n(434065),
    c = n(981631);
function f(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, d.z)('useCanFavoriteChannel'),
        r = (0, l.e7)([u.Z], () => u.Z.isFavorite(e.id)),
        i = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !r && (!i || n);
}
function p(e) {
    return (0, l.e7)([u.Z], () => u.Z.getFavorite(e));
}
function v() {
    return (0, l.e7)([a.ZP], () => a.ZP.getChannels(c.I_8))[i.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function h() {
    return (0, l.e7)([o.Z], () => o.Z.getGuildId()) === c.I_8;
}
function E() {
    let { isFavoritesPerk: e } = (0, d.z)('useFavoriteAdded'),
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
