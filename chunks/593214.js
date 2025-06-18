n.d(t, {
    Mt: () => h,
    li: () => f,
    s4: () => _,
    up: () => p,
    zv: () => E
}),
    n(388685),
    n(539854);
var i = n(73800),
    r = n(106351),
    l = n(442837);
n(592125);
var a = n(984933),
    o = n(914010);
n(709054);
var u = n(853856),
    d = n(362658),
    c = n(434065),
    s = n(981631);
function f(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, d.z)('useCanFavoriteChannel'),
        i = (0, l.e7)([u.Z], () => u.Z.isFavorite(e.id)),
        r = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !i && (!r || n);
}
function _(e) {
    return (0, l.e7)([u.Z], () => u.Z.getFavorite(e));
}
function E() {
    return (0, l.e7)([a.ZP], () => a.ZP.getChannels(s.I_8))[r.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function h() {
    return (0, l.e7)([o.Z], () => o.Z.getGuildId()) === s.I_8;
}
function p() {
    let { isFavoritesPerk: e } = (0, d.z)('useFavoriteAdded'),
        t = (0, c.r)(),
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
