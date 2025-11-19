e.d(n, {
    Mt: () => v,
    li: () => h,
    s4: () => f,
    up: () => Z,
    zv: () => g,
}),
    e(388685),
    e(539854);
var i = e(473749),
    a = e(106351),
    l = e(442837);
e(592125);
var r = e(984933),
    s = e(914010);
e(709054);
var o = e(853856),
    d = e(362658),
    u = e(434065),
    c = e(981631);
function h(t) {
    let { favoritesEnabled: n, hasStaffPrivileges: e } = (0, d.z)("useCanFavoriteChannel"),
        i = (0, l.e7)([o.Z], () => o.Z.isFavorite(t.id)),
        a = t.isDM() || t.isThread();
    return n && !__OVERLAY__ && !i && (!a || e);
}
function f(t) {
    return (0, l.e7)([o.Z], () => o.Z.getFavorite(t));
}
function g() {
    return (0, l.e7)([r.ZP], () => r.ZP.getChannels(c.I_8))[a.d.GUILD_CATEGORY].map((t) => ({
        id: "null" === t.channel.id ? null : t.channel.id,
        name: t.channel.name,
    }));
}
function v() {
    return (0, l.e7)([s.Z], () => s.Z.getGuildId()) === c.I_8;
}
function Z() {
    let { isFavoritesPerk: t } = (0, d.z)("useFavoriteAdded"),
        n = (0, u.r)(),
        e = i.useCallback(() => {
            t && n.notifyFavoriteAdded();
        }, [n, t]),
        a = i.useCallback(() => {
            t && n.clearFavoriteAdded();
        }, [n, t]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: e,
        clearFavoriteAdded: a,
    };
}
