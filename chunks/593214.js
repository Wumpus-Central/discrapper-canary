t.d(e, {
    Mt: () => p,
    li: () => f,
    s4: () => h,
    up: () => g,
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
var s = t(853856),
    d = t(362658),
    u = t(434065),
    c = t(981631);
function f(n) {
    let { favoritesEnabled: e, hasStaffPrivileges: t } = (0, d.z)('useCanFavoriteChannel'),
        i = (0, a.e7)([s.Z], () => s.Z.isFavorite(n.id)),
        r = n.isDM() || n.isThread();
    return e && !__OVERLAY__ && !i && (!r || t);
}
function h(n) {
    return (0, a.e7)([s.Z], () => s.Z.getFavorite(n));
}
function v() {
    return (0, a.e7)([l.ZP], () => l.ZP.getChannels(c.I_8))[r.d.GUILD_CATEGORY].map((n) => ({
        id: 'null' === n.channel.id ? null : n.channel.id,
        name: n.channel.name
    }));
}
function p() {
    return (0, a.e7)([o.Z], () => o.Z.getGuildId()) === c.I_8;
}
function g() {
    let { isFavoritesPerk: n } = (0, d.z)('useFavoriteAdded'),
        e = (0, u.r)(),
        t = i.useCallback(() => {
            n && e.notifyFavoriteAdded();
        }, [e, n]),
        r = i.useCallback(() => {
            n && e.clearFavoriteAdded();
        }, [e, n]);
    return {
        favoriteAdded: e.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: r
    };
}
