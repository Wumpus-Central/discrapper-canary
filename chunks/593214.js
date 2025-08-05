(e.d(n, {
    Mt: () => g,
    li: () => f,
    s4: () => h,
    up: () => Z,
    zv: () => v
}),
    e(388685),
    e(539854));
var i = e(73800),
    r = e(106351),
    l = e(442837);
e(592125);
var a = e(984933),
    o = e(914010);
e(709054);
var s = e(853856),
    d = e(362658),
    u = e(434065),
    c = e(981631);
function f(t) {
    let { favoritesEnabled: n, hasStaffPrivileges: e } = (0, d.z)('useCanFavoriteChannel'),
        i = (0, l.e7)([s.Z], () => s.Z.isFavorite(t.id)),
        r = t.isDM() || t.isThread();
    return n && !__OVERLAY__ && !i && (!r || e);
}
function h(t) {
    return (0, l.e7)([s.Z], () => s.Z.getFavorite(t));
}
function v() {
    return (0, l.e7)([a.ZP], () => a.ZP.getChannels(c.I_8))[r.d.GUILD_CATEGORY].map((t) => ({
        id: 'null' === t.channel.id ? null : t.channel.id,
        name: t.channel.name
    }));
}
function g() {
    return (0, l.e7)([o.Z], () => o.Z.getGuildId()) === c.I_8;
}
function Z() {
    let { isFavoritesPerk: t } = (0, d.z)('useFavoriteAdded'),
        n = (0, u.r)(),
        e = i.useCallback(() => {
            t && n.notifyFavoriteAdded();
        }, [n, t]),
        r = i.useCallback(() => {
            t && n.clearFavoriteAdded();
        }, [n, t]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: e,
        clearFavoriteAdded: r
    };
}
