n.d(t, {
    M: () => u,
    c: () => c,
}),
    n(638769),
    n(896048);
var r,
    i = n(64700),
    l = n(311907),
    s = n(253932),
    a = n(71393),
    o = n(711014),
    c =
        (((r = {}).SERVER_ORDER = "server-order"),
        (r.RECENTLY_JOINED = "recently-joined"),
        (r.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (r.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        r);
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
    let [e, t] = (0, i.useState)(""),
        [n, r] = (0, i.useState)("server-order"),
        c = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        u = (0, l.bG)([a.A], () => a.A.getGuilds()),
        _ = c.map((e) => u[e]),
        p = s.Pw.useSetting(),
        [m, g] = (0, i.useState)(p),
        A = async (e) => {
            g(e);
            try {
                await s.Pw.updateSetting(e);
            } catch (e) {
                g(p);
            }
        },
        f = 0 !== m.length,
        [h, b] = (0, i.useState)(() => d[n](_, p)),
        E = h.map((e) => u[e.id]).filter(Boolean);
    return {
        guilds: "" === e ? E : E.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
        sortOrder: n,
        searchQuery: e,
        setSortOrder: (e) => {
            b(d[e](_, p)), r(e);
        },
        setSearchQuery: t,
        onToggleActivityRestrictedGuild: (e) => {
            let { checked: t, guildId: n } = e,
                r = new Set(m);
            t ? r.delete(n) : r.add(n), A([...r]);
        },
        isActivityRestricted: (e) => m.includes(e),
        hasActivityRestrictedGuilds: f,
        onToggleAllActivityRestrictedGuilds: () => {
            f ? A([]) : A(c);
        },
        numTotalGuilds: c.length,
        numActivityRestrictedGuilds: m.length,
    };
}
