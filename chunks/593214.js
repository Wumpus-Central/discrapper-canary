t.d(n, {
    Mt: () => h,
    li: () => f,
    s4: () => v,
    up: () => A,
    zv: () => p
}),
    t(47120),
    t(653041);
var i = t(192379),
    l = t(106351),
    a = t(442837);
t(592125);
var r = t(984933),
    o = t(914010);
t(709054);
var u = t(853856),
    d = t(362658),
    s = t(434065),
    c = t(981631);
function f(e) {
    let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, d.z)('useCanFavoriteChannel'),
        i = (0, a.e7)([u.Z], () => u.Z.isFavorite(e.id)),
        l = e.isDM() || e.isThread();
    return n && !__OVERLAY__ && !i && (!l || t);
}
function v(e) {
    return (0, a.e7)([u.Z], () => u.Z.getFavorite(e));
}
function p() {
    return (0, a.e7)([r.ZP], () => r.ZP.getChannels(c.I_8))[l.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function h() {
    return (0, a.e7)([o.Z], () => o.Z.getGuildId()) === c.I_8;
}
function A() {
    let { isFavoritesPerk: e } = (0, d.z)('useFavoriteAdded'),
        n = (0, s.r)(),
        t = i.useCallback(() => {
            e && n.notifyFavoriteAdded();
        }, [n, e]),
        l = i.useCallback(() => {
            e && n.clearFavoriteAdded();
        }, [n, e]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: l
    };
}
