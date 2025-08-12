n.d(t, {
    Mt: () => p,
    li: () => c,
    s4: () => _,
    up: () => b,
    zv: () => v,
}),
    n(388685),
    n(539854);
var i = n(73800),
    a = n(106351),
    r = n(442837);
n(592125);
var l = n(984933),
    o = n(914010);
n(709054);
var d = n(853856),
    u = n(362658),
    f = n(434065),
    s = n(981631);
function c(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, u.z)("useCanFavoriteChannel"),
        i = (0, r.e7)([d.Z], () => d.Z.isFavorite(e.id)),
        a = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !i && (!a || n);
}
function _(e) {
    return (0, r.e7)([d.Z], () => d.Z.getFavorite(e));
}
function v() {
    return (0, r.e7)([l.ZP], () => l.ZP.getChannels(s.I_8))[a.d.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function p() {
    return (0, r.e7)([o.Z], () => o.Z.getGuildId()) === s.I_8;
}
function b() {
    let { isFavoritesPerk: e } = (0, u.z)("useFavoriteAdded"),
        t = (0, f.r)(),
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
