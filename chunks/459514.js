(n.d(t, { T: () => h, _: () => m }), n(321073));
var i = n(582128),
    l = n(17928),
    r = n(945810),
    u = n(71393),
    a = n(576705),
    d = n(906786),
    s = n(783791),
    o = n(972786),
    c = n(637708),
    f = n(683180);
function g(e, t) {
    return (
        e.nextExpiry === t.nextExpiry &&
        e.entries.length === t.entries.length &&
        e.entries.every((e, n) => {
            let i = t.entries[n];
            return (
                null != i &&
                e.projectId === i.projectId &&
                e.activity === i.activity &&
                e.name === i.name &&
                e.guildId === i.guildId &&
                e.guildName === i.guildName &&
                e.guild === i.guild
            );
        })
    );
}
function p(e, t) {
    return e.length === t.length && e.every((e, n) => e === t[n]);
}
function h(e) {
    let [t, n] = i.useState(0),
        { entries: a, nextExpiry: f } = (0, l.bG)(
            [o.Ay, s.Ay, u.A, r.Bt],
            () =>
                (function (e) {
                    let t = Date.now(),
                        n = new Map();
                    function i(t) {
                        let i = n.get(t);
                        if (null != i) return i;
                        let l = (0, d.ix)({ guildId: t, location: e });
                        return (n.set(t, l), l);
                    }
                    let l = new Set(),
                        r = [],
                        a = null;
                    function f(e) {
                        if (l.has(e.id)) return;
                        let n = (0, c.HC)(e);
                        if (null != n && !i(n)) return;
                        l.add(e.id);
                        let d = s.Ay.isThinking(e.id),
                            o = s.Ay.getFinishedAt(e.id),
                            f = (0, c.rs)({ thinking: d, finishedAt: o, now: t });
                        if ("done" === f && null != o) {
                            let e = o + 6e4;
                            a = null == a ? e : Math.min(a, e);
                        }
                        let g = (null == n ? null : u.A.getGuild(n)) ?? null;
                        r.push({
                            project: e,
                            projectId: e.id,
                            name: e.name,
                            guildId: n,
                            guild: g,
                            guildName: g?.name ?? null,
                            activity: f,
                            sortTime: (function (e, t) {
                                if (null != t) return t;
                                if (null == e.updated_at) return 0;
                                let n = Date.parse(e.updated_at);
                                return Number.isNaN(n) ? 0 : n;
                            })(e, o),
                        });
                    }
                    for (let e of o.Ay.getOwnedProjects()) f(e);
                    for (let e of Object.values(u.A.getGuilds()))
                        if (o.Ay.hasFetchedGuildProjects(e.id) && i(e.id))
                            for (let t of o.Ay.getSharedProjects(e.id)) f(t);
                    return { entries: (0, c.io)(r), nextExpiry: a };
                })(e),
            [e, t],
            g,
        );
    return (
        i.useEffect(() => {
            if (null == f) return;
            let e = setTimeout(() => n((e) => e + 1), Math.max(0, f - Date.now()));
            return () => clearTimeout(e);
        }, [f, n]),
        a
    );
}
function m(e) {
    return (0, l.bG)(
        [u.A, r.Bt, a.A],
        () =>
            Object.values(u.A.getGuilds())
                .filter((t) => (0, f.pG)(t, e))
                .sort((e, t) => e.name.localeCompare(t.name)),
        [e],
        p,
    );
}
