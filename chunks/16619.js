(n.d(t, { qh: () => x, rX: () => k, z9: () => p }), n(321073));
var l = n(582128),
    a = n(17928),
    i = n(945810),
    r = n(71393),
    s = n(576705),
    u = n(967198),
    d = n(245179),
    o = n(793480),
    c = n(246338),
    m = n(434279),
    f = n(260498);
function h(e, t) {
    return (
        e.nextExpiry === t.nextExpiry &&
        e.entries.length === t.entries.length &&
        e.entries.every((e, n) => {
            let l = t.entries[n];
            return (
                null != l &&
                e.projectId === l.projectId &&
                e.activity === l.activity &&
                e.name === l.name &&
                e.guildId === l.guildId &&
                e.guildName === l.guildName &&
                e.guild === l.guild
            );
        })
    );
}
function g(e, t) {
    return e.length === t.length && e.every((e, n) => e === t[n]);
}
function x(e) {
    let [t, n] = l.useState(0),
        { entries: s, nextExpiry: u } = (0, a.bG)(
            [f.Ay, d.Ay, r.A, i.Bt],
            () =>
                (function (e) {
                    let t = Date.now(),
                        n = new Map();
                    function l(t) {
                        let l = n.get(t);
                        if (null != l) return l;
                        let a = (0, o.L0)({ guildId: t, location: e });
                        return (n.set(t, a), a);
                    }
                    let a = new Set(),
                        i = [],
                        s = null;
                    function u(e) {
                        if (a.has(e.id)) return;
                        let n = (0, m.wu)(e);
                        if (null != n && !l(n)) return;
                        a.add(e.id);
                        let u = d.Ay.isThinking(e.id),
                            o = d.Ay.getFinishedAt(e.id),
                            c = (0, m.Uk)({ thinking: u, finishedAt: o, now: t });
                        if ("done" === c && null != o) {
                            let e = o + 6e4;
                            s = null == s ? e : Math.min(s, e);
                        }
                        let f = (null == n ? null : r.A.getGuild(n)) ?? null;
                        i.push({
                            project: e,
                            projectId: e.id,
                            name: e.name,
                            guildId: n,
                            guild: f,
                            guildName: f?.name ?? null,
                            activity: c,
                            sortTime: (function (e, t) {
                                if (null != t) return t;
                                if (null == e.updated_at) return 0;
                                let n = Date.parse(e.updated_at);
                                return Number.isNaN(n) ? 0 : n;
                            })(e, o),
                        });
                    }
                    for (let e of f.Ay.getOwnedProjects()) u(e);
                    for (let e of Object.values(r.A.getGuilds()))
                        if (f.Ay.hasFetchedGuildProjects(e.id) && l(e.id))
                            for (let t of f.Ay.getSharedProjects(e.id)) u(t);
                    return { entries: (0, m.Ng)(i), nextExpiry: s };
                })(e),
            [e, t],
            h,
        );
    return (
        l.useEffect(() => {
            if (null == u) return;
            let e = setTimeout(() => n((e) => e + 1), Math.max(0, u - Date.now()));
            return () => clearTimeout(e);
        }, [u, n]),
        s
    );
}
function p(e) {
    return (0, a.bG)(
        [r.A, i.Bt, s.A],
        () =>
            Object.values(r.A.getGuilds())
                .filter((t) => (0, c.sM)(t, e))
                .sort((e, t) => e.name.localeCompare(t.name)),
        [e],
        g,
    );
}
function k(e) {
    return (0, a.bG)(
        [r.A, u.A, i.Bt],
        () => {
            let t = r.A.getGuild(u.A.getGuildId());
            return null != t && (0, c.N)(t, e)
                ? t.id
                : (Object.values(r.A.getGuilds())
                      .sort((e, t) => e.name.localeCompare(t.name))
                      .find((t) => (0, c.N)(t, e))?.id ?? null);
        },
        [e],
    );
}
