n.d(t, { M: () => c, c: () => d });
var i,
    s = n(64700),
    l = n(311907),
    a = n(253932),
    r = n(71393),
    o = n(711014),
    d =
        (((i = {}).SERVER_ORDER = "server-order"),
        (i.RECENTLY_JOINED = "recently-joined"),
        (i.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (i.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        i);
let u = {
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
function c() {
    let [e, t] = (0, s.useState)(""),
        [n, i] = (0, s.useState)("server-order"),
        d = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        c = (0, l.bG)([r.A], () => r.A.getGuilds()),
        g = d.map((e) => c[e]),
        m = a.Pw.useSetting(),
        [_, A] = (0, s.useState)(m);
    (0, s.useEffect)(() => {
        A(m);
    }, [m]);
    let h = async (e) => {
            A(e);
            try {
                await a.Pw.updateSetting(e);
            } catch (e) {
                A(m);
            }
        },
        p = 0 !== _.length,
        [x, E] = (0, s.useState)(() => u[n](g, m)),
        T = x.map((e) => c[e.id]).filter(Boolean);
    return {
        guilds: "" === e ? T : T.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
        sortOrder: n,
        searchQuery: e,
        setSortOrder: (e) => {
            E(u[e](g, m)), i(e);
        },
        setSearchQuery: t,
        onToggleActivityRestrictedGuild: (e) => {
            let { checked: t, guildId: n } = e,
                i = new Set(_);
            t ? i.delete(n) : i.add(n), h([...i]);
        },
        isActivityRestricted: (e) => _.includes(e),
        hasActivityRestrictedGuilds: p,
        onToggleAllActivityRestrictedGuilds: () => {
            p ? h([]) : h(d);
        },
        numTotalGuilds: d.length,
        numActivityRestrictedGuilds: _.length,
    };
}
