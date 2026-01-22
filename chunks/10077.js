n.d(t, {
    M: () => u,
    c: () => l,
}),
    n(638769),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(253932),
    s = n(71393),
    o = n(711014),
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
        u = (0, i.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        d = (0, i.bG)([s.A], () => s.A.getGuilds()),
        f = u.map((e) => d[e]),
        p = a.Pw.useSetting(),
        [_, h] = (0, r.useState)(p),
        m = async (e) => {
            h(e);
            try {
                await a.Pw.updateSetting(e);
            } catch (e) {
                h(p);
            }
        },
        g = (e) => {
            let { checked: t, guildId: n } = e,
                r = new Set(_);
            t ? r.delete(n) : r.add(n), m([...r]);
        },
        E = (e) => _.includes(e),
        b = 0 !== _.length,
        y = () => {
            b ? m([]) : m(u);
        },
        [O, A] = (0, r.useState)(() => c[n](f, p)),
        v = O.map((e) => d[e.id]).filter(Boolean);
    return {
        guilds: "" === e ? v : v.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
        sortOrder: n,
        searchQuery: e,
        setSortOrder: (e) => {
            A(c[e](f, p)), l(e);
        },
        setSearchQuery: t,
        onToggleActivityRestrictedGuild: g,
        isActivityRestricted: E,
        hasActivityRestrictedGuilds: b,
        onToggleAllActivityRestrictedGuilds: y,
        numTotalGuilds: u.length,
        numActivityRestrictedGuilds: _.length,
    };
}
