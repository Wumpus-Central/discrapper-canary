n.d(t, {
    F: () => u,
    W: () => l,
}),
    n(642613),
    n(388685);
var r = n(473749),
    i = n(442837),
    a = n(695346),
    o = n(430824),
    s = n(771845),
    l = (function (e) {
        return (
            (e.SERVER_ORDER = "server-order"),
            (e.RECENTLY_JOINED = "recently-joined"),
            (e.ACTIVITY_SHARING_ON = "activity-sharing-on"),
            (e.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
            e
        );
    })({});
let c = {
    "recently-joined": (e) =>
        e
            .concat()
            .sort((e, t) =>
                null == e.joinedAt
                    ? -1
                    : null == t.joinedAt
                      ? 1
                      : e.joinedAt === t.joinedAt
                        ? 0
                        : new Date(t.joinedAt).getTime() - new Date(e.joinedAt).getTime(),
            ),
    "activity-sharing-on": (e, t) =>
        e.concat().sort((e, n) => {
            let r = t.includes(e.id),
                i = t.includes(n.id);
            return !r && i ? -1 : r && !i ? 1 : 0;
        }),
    "activity-sharing-off": (e, t) =>
        e.concat().sort((e, n) => {
            let r = t.includes(e.id),
                i = t.includes(n.id);
            return r && !i ? -1 : !r && i ? 1 : 0;
        }),
    "server-order": (e) => e,
};
function u() {
    let [e, t] = (0, r.useState)(""),
        [n, l] = (0, r.useState)("server-order"),
        u = (0, i.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()),
        d = (0, i.e7)([o.Z], () => o.Z.getGuilds()),
        f = u.map((e) => d[e]),
        _ = a.CW.useSetting(),
        [p, h] = (0, r.useState)(_),
        m = async (e) => {
            h(e);
            try {
                await a.CW.updateSetting(e);
            } catch (e) {
                h(_);
            }
        },
        g = (e) => {
            let { checked: t, guildId: n } = e,
                r = new Set(p);
            t ? r.delete(n) : r.add(n), m([...r]);
        },
        E = (e) => p.includes(e),
        b = 0 !== p.length,
        y = () => {
            b ? m([]) : m(u);
        },
        [O, v] = (0, r.useState)(() => c[n](f, _)),
        I = O.map((e) => d[e.id]).filter(Boolean);
    return {
        guilds: "" === e ? I : I.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
        sortOrder: n,
        searchQuery: e,
        setSortOrder: (e) => {
            v(c[e](f, _)), l(e);
        },
        setSearchQuery: t,
        onToggleActivityRestrictedGuild: g,
        isActivityRestricted: E,
        hasActivityRestrictedGuilds: b,
        onToggleAllActivityRestrictedGuilds: y,
        numTotalGuilds: u.length,
        numActivityRestrictedGuilds: p.length,
    };
}
