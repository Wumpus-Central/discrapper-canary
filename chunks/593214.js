n.d(e, {
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
    l = n(442837);
n(592125);
var a = n(984933),
    u = n(914010);
n(709054);
var o = n(853856),
    c = n(362658),
    d = n(434065),
    s = n(981631);
function f(t) {
    let { favoritesEnabled: e, hasStaffPrivileges: n } = (0, c.z)('useCanFavoriteChannel'),
        r = (0, l.e7)([o.Z], () => o.Z.isFavorite(t.id)),
        i = t.isDM() || t.isThread();
    return e && !__OVERLAY__ && !r && (!i || n);
}
function _(t) {
    return (0, l.e7)([o.Z], () => o.Z.getFavorite(t));
}
function E() {
    return (0, l.e7)([a.ZP], () => a.ZP.getChannels(s.I_8))[i.d.GUILD_CATEGORY].map((t) => ({
        id: 'null' === t.channel.id ? null : t.channel.id,
        name: t.channel.name
    }));
}
function p() {
    return (0, l.e7)([u.Z], () => u.Z.getGuildId()) === s.I_8;
}
function m() {
    let { isFavoritesPerk: t } = (0, c.z)('useFavoriteAdded'),
        e = (0, d.r)(),
        n = r.useCallback(() => {
            t && e.notifyFavoriteAdded();
        }, [e, t]),
        i = r.useCallback(() => {
            t && e.clearFavoriteAdded();
        }, [e, t]);
    return {
        favoriteAdded: e.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: i
    };
}
