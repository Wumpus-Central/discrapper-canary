t.d(n, {
    Mt: function () {
        return m;
    },
    li: function () {
        return h;
    },
    s4: function () {
        return f;
    },
    up: function () {
        return g;
    },
    zv: function () {
        return v;
    }
}),
    t(47120),
    t(653041);
var l = t(192379),
    o = t(106351),
    i = t(442837);
t(592125);
var r = t(984933),
    a = t(914010);
t(709054);
var d = t(853856),
    c = t(362658),
    u = t(434065),
    s = t(981631);
function h(e) {
    let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, c.z)('useCanFavoriteChannel'),
        l = (0, i.e7)([d.Z], () => d.Z.isFavorite(e.id)),
        o = e.isDM() || e.isThread();
    return n && !__OVERLAY__ && !l && (!o || t);
}
function f(e) {
    return (0, i.e7)([d.Z], () => d.Z.getFavorite(e));
}
function v() {
    return (0, i.e7)([r.ZP], () => r.ZP.getChannels(s.I_8))[o.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function m() {
    return (0, i.e7)([a.Z], () => a.Z.getGuildId()) === s.I_8;
}
function g() {
    let { isFavoritesPerk: e } = (0, c.z)('useFavoriteAdded'),
        n = (0, u.r)(),
        t = l.useCallback(() => {
            e && n.notifyFavoriteAdded();
        }, [n, e]),
        o = l.useCallback(() => {
            e && n.clearFavoriteAdded();
        }, [n, e]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: o
    };
}
