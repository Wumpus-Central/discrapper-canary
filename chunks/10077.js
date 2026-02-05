n.d(t, { M: () => u, c: () => c });
var i,
    s = n(64700),
    r = n(311907),
    a = n(253932),
    l = n(71393),
    o = n(711014),
    c =
        (((i = {}).SERVER_ORDER = "server-order"),
        (i.RECENTLY_JOINED = "recently-joined"),
        (i.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (i.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        i);
let d = {
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
            let i = t.includes(e.id),
                s = t.includes(n.id);
            return !i && s ? -1 : i && !s ? 1 : 0;
        }),
    "activity-sharing-off": (e, t) =>
        e.concat().sort((e, n) => {
            let i = t.includes(e.id),
                s = t.includes(n.id);
            return i && !s ? -1 : !i && s ? 1 : 0;
        }),
    "server-order": (e) => e,
};
function u() {
    let [e, t] = (0, s.useState)(""),
        [n, i] = (0, s.useState)("server-order"),
        c = (0, r.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        u = (0, r.bG)([l.A], () => l.A.getGuilds()),
        _ = c.map((e) => u[e]),
        m = a.Pw.useSetting(),
        [A, g] = (0, s.useState)(m),
        E = async (e) => {
            g(e);
            try {
                await a.Pw.updateSetting(e);
            } catch (e) {
                g(m);
            }
        },
        h = 0 !== A.length,
        [p, C] = (0, s.useState)(() => d[n](_, m)),
        x = p.map((e) => u[e.id]).filter(Boolean);
    return {
        guilds: "" === e ? x : x.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
        sortOrder: n,
        searchQuery: e,
        setSortOrder: (e) => {
            C(d[e](_, m)), i(e);
        },
        setSearchQuery: t,
        onToggleActivityRestrictedGuild: (e) => {
            let { checked: t, guildId: n } = e,
                i = new Set(A);
            t ? i.delete(n) : i.add(n), E([...i]);
        },
        isActivityRestricted: (e) => A.includes(e),
        hasActivityRestrictedGuilds: h,
        onToggleAllActivityRestrictedGuilds: () => {
            h ? E([]) : E(c);
        },
        numTotalGuilds: c.length,
        numActivityRestrictedGuilds: A.length,
    };
}
