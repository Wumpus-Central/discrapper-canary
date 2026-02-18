n.d(t, { M: () => u, c: () => c });
var i,
    s = n(64700),
    a = n(311907),
    l = n(253932),
    r = n(71393),
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
        c = (0, a.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        u = (0, a.bG)([r.A], () => r.A.getGuilds()),
        _ = c.map((e) => u[e]),
        m = l.Pw.useSetting(),
        [A, g] = (0, s.useState)(m);
    (0, s.useEffect)(() => {
        g(m);
    }, [m]);
    let h = async (e) => {
            g(e);
            try {
                await l.Pw.updateSetting(e);
            } catch (e) {
                g(m);
            }
        },
        x = 0 !== A.length,
        [p, E] = (0, s.useState)(() => d[n](_, m)),
        C = p.map((e) => u[e.id]).filter(Boolean);
    return {
        guilds: "" === e ? C : C.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
        sortOrder: n,
        searchQuery: e,
        setSortOrder: (e) => {
            E(d[e](_, m)), i(e);
        },
        setSearchQuery: t,
        onToggleActivityRestrictedGuild: (e) => {
            let { checked: t, guildId: n } = e,
                i = new Set(A);
            t ? i.delete(n) : i.add(n), h([...i]);
        },
        isActivityRestricted: (e) => A.includes(e),
        hasActivityRestrictedGuilds: x,
        onToggleAllActivityRestrictedGuilds: () => {
            x ? h([]) : h(c);
        },
        numTotalGuilds: c.length,
        numActivityRestrictedGuilds: A.length,
    };
}
