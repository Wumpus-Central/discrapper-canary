n.d(t, {
    Mt: () => _,
    li: () => c,
    s4: () => v,
    up: () => C,
    zv: () => h,
}),
    n(388685),
    n(539854);
var i = n(647438),
    a = n(106351),
    l = n(442837);
n(592125);
var r = n(984933),
    d = n(914010);
n(709054);
var o = n(853856),
    u = n(362658),
    s = n(434065),
    f = n(981631);
function c(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, u.z)("useCanFavoriteChannel"),
        i = (0, l.e7)([o.Z], () => o.Z.isFavorite(e.id)),
        a = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !i && (!a || n);
}
function v(e) {
    return (0, l.e7)([o.Z], () => o.Z.getFavorite(e));
}
function h() {
    return (0, l.e7)([r.ZP], () => r.ZP.getChannels(f.I_8))[a.d.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function _() {
    return (0, l.e7)([d.Z], () => d.Z.getGuildId()) === f.I_8;
}
function C() {
    let { isFavoritesPerk: e } = (0, u.z)("useFavoriteAdded"),
        t = (0, s.r)(),
        n = i.useCallback(() => {
            e && t.notifyFavoriteAdded();
        }, [t, e]),
        a = i.useCallback(() => {
            e && t.clearFavoriteAdded();
        }, [t, e]);
    return {
        favoriteAdded: t.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: a,
    };
}
