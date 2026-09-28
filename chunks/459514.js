(n.d(t, { T: () => g, _: () => h }), n(321073));
var i = n(582128),
    r = n(17928),
    l = n(945810),
    u = n(71393),
    d = n(576705),
    o = n(906786),
    a = n(783791),
    s = n(972786),
    c = n(637708),
    f = n(683180);
function m(e, t) {
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
function g(e) {
    let [t, n] = i.useState(0),
        { entries: d, nextExpiry: f } = (0, r.bG)(
            [s.Ay, a.Ay, u.A, l.Bt],
            () =>
                (function (e) {
                    let t = Date.now(),
                        n = new Map();
                    function i(t) {
                        let i = n.get(t);
                        if (null != i) return i;
                        let r = (0, o.ix)({ guildId: t, location: e });
                        return (n.set(t, r), r);
                    }
                    let r = new Set(),
                        l = [],
                        d = null;
                    function f(e) {
                        if (r.has(e.id)) return;
                        let n = (0, c.HC)(e);
                        if (null != n && !i(n)) return;
                        r.add(e.id);
                        let o = a.Ay.isThinking(e.id),
                            s = a.Ay.getFinishedAt(e.id),
                            f = (0, c.rs)({ thinking: o, finishedAt: s, now: t });
                        if ("done" === f && null != s) {
                            let e = s + 6e4;
                            d = null == d ? e : Math.min(d, e);
                        }
                        let m = (null == n ? null : u.A.getGuild(n)) ?? null;
                        l.push({
                            project: e,
                            projectId: e.id,
                            name: e.name,
                            guildId: n,
                            guild: m,
                            guildName: m?.name ?? null,
                            activity: f,
                            sortTime: (function (e, t) {
                                if (null != t) return t;
                                if (null == e.updated_at) return 0;
                                let n = Date.parse(e.updated_at);
                                return Number.isNaN(n) ? 0 : n;
                            })(e, s),
                        });
                    }
                    for (let e of s.Ay.getOwnedProjects()) f(e);
                    for (let e of Object.values(u.A.getGuilds()))
                        if (s.Ay.hasFetchedGuildProjects(e.id) && i(e.id))
                            for (let t of s.Ay.getSharedProjects(e.id)) f(t);
                    return { entries: (0, c.io)(l), nextExpiry: d };
                })(e),
            [e, t],
            m,
        );
    return (
        i.useEffect(() => {
            if (null == f) return;
            let e = setTimeout(() => n((e) => e + 1), Math.max(0, f - Date.now()));
            return () => clearTimeout(e);
        }, [f, n]),
        d
    );
}
function h(e) {
    return (0, r.bG)(
        [u.A, l.Bt, d.A],
        () =>
            Object.values(u.A.getGuilds())
                .filter((t) => (0, f.pG)(t, e))
                .sort((e, t) => e.name.localeCompare(t.name)),
        [e],
        p,
    );
}
