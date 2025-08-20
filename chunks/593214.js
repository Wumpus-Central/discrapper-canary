i.d(n, {
    Mt: () => f,
    li: () => h,
    s4: () => Z,
    up: () => g,
    zv: () => v,
}),
    i(388685),
    i(539854);
var e = i(647438),
    l = i(106351),
    r = i(442837);
i(592125);
var a = i(984933),
    d = i(914010);
i(709054);
var o = i(853856),
    s = i(362658),
    u = i(434065),
    c = i(981631);
function h(t) {
    let { favoritesEnabled: n, hasStaffPrivileges: i } = (0, s.z)("useCanFavoriteChannel"),
        e = (0, r.e7)([o.Z], () => o.Z.isFavorite(t.id)),
        l = t.isDM() || t.isThread();
    return n && !__OVERLAY__ && !e && (!l || i);
}
function Z(t) {
    return (0, r.e7)([o.Z], () => o.Z.getFavorite(t));
}
function v() {
    return (0, r.e7)([a.ZP], () => a.ZP.getChannels(c.I_8))[l.d.GUILD_CATEGORY].map((t) => ({
        id: "null" === t.channel.id ? null : t.channel.id,
        name: t.channel.name,
    }));
}
function f() {
    return (0, r.e7)([d.Z], () => d.Z.getGuildId()) === c.I_8;
}
function g() {
    let { isFavoritesPerk: t } = (0, s.z)("useFavoriteAdded"),
        n = (0, u.r)(),
        i = e.useCallback(() => {
            t && n.notifyFavoriteAdded();
        }, [n, t]),
        l = e.useCallback(() => {
            t && n.clearFavoriteAdded();
        }, [n, t]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: i,
        clearFavoriteAdded: l,
    };
}
