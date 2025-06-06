n.d(t, {
    F: () => u,
    W: () => c
}),
    n(642613),
    n(388685);
var i,
    r = n(73800),
    s = n(442837),
    l = n(695346),
    a = n(430824),
    o = n(771845),
    c = (((i = {}).SERVER_ORDER = 'server-order'), (i.RECENTLY_JOINED = 'recently-joined'), (i.ACTIVITY_SHARING_ON = 'activity-sharing-on'), (i.ACTIVITY_SHARING_OFF = 'activity-sharing-off'), i);
let d = {
    'recently-joined': (e) => e.concat().sort((e, t) => (null == e.joinedAt ? -1 : null == t.joinedAt ? 1 : e.joinedAt === t.joinedAt ? 0 : new Date(t.joinedAt).getTime() - new Date(e.joinedAt).getTime())),
    'activity-sharing-on': (e, t) =>
        e.concat().sort((e, n) => {
            let i = t.includes(e.id),
                r = t.includes(n.id);
            return !i && r ? -1 : i && !r ? 1 : 0;
        }),
    'activity-sharing-off': (e, t) =>
        e.concat().sort((e, n) => {
            let i = t.includes(e.id),
                r = t.includes(n.id);
            return i && !r ? -1 : !i && r ? 1 : 0;
        }),
    'server-order': (e) => e
};
function u() {
    let [e, t] = (0, r.useState)(''),
        [n, i] = (0, r.useState)('server-order'),
        c = (0, s.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds()),
        u = (0, s.e7)([a.Z], () => a.Z.getGuilds()),
        m = c.map((e) => u[e]),
        [g, p] = (0, r.useState)(!1),
        h = l.CW.useSetting(),
        [f, b] = (0, r.useState)(h),
        _ = async (e) => {
            b(e);
            try {
                await l.CW.updateSetting(e);
            } catch (e) {
                b(h);
            }
        },
        x = 0 !== f.length,
        [E, C] = (0, r.useState)(() => d[n](m, h)),
        j = E.map((e) => u[e.id]).filter(Boolean),
        O = '' === e ? j : j.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
        S = '' !== e;
    return {
        guilds: g || S ? O : O.slice(0, 10),
        sortOrder: n,
        searchQuery: e,
        setSortOrder: (e) => {
            C(d[e](m, h)), i(e);
        },
        setSearchQuery: t,
        onToggleActivityRestrictedGuild: (e) => {
            let { checked: t, guildId: n } = e,
                i = new Set(f);
            t ? i.delete(n) : i.add(n), _([...i]);
        },
        isActivityRestricted: (e) => f.includes(e),
        hasActivityRestrictedGuilds: x,
        onToggleAllActivityRestrictedGuilds: () => {
            x ? _([]) : _(c);
        },
        onToggleShowAllGuilds: () => {
            p((e) => !e);
        },
        isShowingAllGuilds: g,
        numTotalGuilds: c.length,
        numGuildsShownLimit: 10,
        isSearching: S
    };
}
