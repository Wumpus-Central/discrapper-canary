(n.d(t, {
    F: () => u,
    W: () => c
}),
    n(642613),
    n(388685));
var i,
    r = n(73800),
    s = n(442837),
    a = n(695346),
    l = n(430824),
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
        u = (0, s.e7)([l.Z], () => l.Z.getGuilds()),
        m = c.map((e) => u[e]),
        p = a.CW.useSetting(),
        [g, h] = (0, r.useState)(p),
        f = async (e) => {
            h(e);
            try {
                await a.CW.updateSetting(e);
            } catch (e) {
                h(p);
            }
        },
        b = 0 !== g.length,
        [x, _] = (0, r.useState)(() => d[n](m, p)),
        j = x.map((e) => u[e.id]).filter(Boolean);
    return {
        guilds: '' === e ? j : j.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
        sortOrder: n,
        searchQuery: e,
        setSortOrder: (e) => {
            (_(d[e](m, p)), i(e));
        },
        setSearchQuery: t,
        onToggleActivityRestrictedGuild: (e) => {
            let { checked: t, guildId: n } = e,
                i = new Set(g);
            (t ? i.delete(n) : i.add(n), f([...i]));
        },
        isActivityRestricted: (e) => g.includes(e),
        hasActivityRestrictedGuilds: b,
        onToggleAllActivityRestrictedGuilds: () => {
            b ? f([]) : f(c);
        },
        numTotalGuilds: c.length,
        numActivityRestrictedGuilds: g.length
    };
}
