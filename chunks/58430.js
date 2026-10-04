(n.d(t, { T: () => x, _: () => p }), n(321073));
var l = n(582128),
    a = n(17928),
    i = n(945810),
    r = n(71393),
    s = n(576705),
    u = n(793480),
    d = n(485163),
    o = n(26278),
    c = n(11696),
    m = n(870440);
function f(e, t) {
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
function h(e, t) {
    return e.length === t.length && e.every((e, n) => e === t[n]);
}
function x(e) {
    let [t, n] = l.useState(0),
        { entries: s, nextExpiry: m } = (0, a.bG)(
            [o.Ay, d.Ay, r.A, i.Bt],
            () =>
                (function (e) {
                    let t = Date.now(),
                        n = new Map();
                    function l(t) {
                        let l = n.get(t);
                        if (null != l) return l;
                        let a = (0, u.ix)({ guildId: t, location: e });
                        return (n.set(t, a), a);
                    }
                    let a = new Set(),
                        i = [],
                        s = null;
                    function m(e) {
                        if (a.has(e.id)) return;
                        let n = (0, c.HC)(e);
                        if (null != n && !l(n)) return;
                        a.add(e.id);
                        let u = d.Ay.isThinking(e.id),
                            o = d.Ay.getFinishedAt(e.id),
                            m = (0, c.rs)({ thinking: u, finishedAt: o, now: t });
                        if ("done" === m && null != o) {
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
                            activity: m,
                            sortTime: (function (e, t) {
                                if (null != t) return t;
                                if (null == e.updated_at) return 0;
                                let n = Date.parse(e.updated_at);
                                return Number.isNaN(n) ? 0 : n;
                            })(e, o),
                        });
                    }
                    for (let e of o.Ay.getOwnedProjects()) m(e);
                    for (let e of Object.values(r.A.getGuilds()))
                        if (o.Ay.hasFetchedGuildProjects(e.id) && l(e.id))
                            for (let t of o.Ay.getSharedProjects(e.id)) m(t);
                    return { entries: (0, c.io)(i), nextExpiry: s };
                })(e),
            [e, t],
            f,
        );
    return (
        l.useEffect(() => {
            if (null == m) return;
            let e = setTimeout(() => n((e) => e + 1), Math.max(0, m - Date.now()));
            return () => clearTimeout(e);
        }, [m, n]),
        s
    );
}
function p(e) {
    return (0, a.bG)(
        [r.A, i.Bt, s.A],
        () =>
            Object.values(r.A.getGuilds())
                .filter((t) => (0, m.pG)(t, e))
                .sort((e, t) => e.name.localeCompare(t.name)),
        [e],
        h,
    );
}
