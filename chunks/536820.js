(n.d(t, { T: () => g, _: () => h }), n(321073));
var i = n(582128),
    r = n(17928),
    l = n(945810),
    u = n(71393),
    d = n(576705),
    o = n(906786),
    a = n(637708),
    s = n(683180),
    c = n(783791),
    f = n(972786);
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
        { entries: d, nextExpiry: s } = (0, r.bG)(
            [f.Ay, c.Ay, u.A, l.Bt],
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
                    function s(e) {
                        if (r.has(e.id)) return;
                        let n = (0, a.HC)(e);
                        if (null != n && !i(n)) return;
                        r.add(e.id);
                        let o = c.Ay.isThinking(e.id),
                            s = c.Ay.getFinishedAt(e.id),
                            f = (0, a.rs)({ thinking: o, finishedAt: s, now: t });
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
                    for (let e of f.Ay.getOwnedProjects()) s(e);
                    for (let e of Object.values(u.A.getGuilds()))
                        if (f.Ay.hasFetchedGuildProjects(e.id) && i(e.id))
                            for (let t of f.Ay.getSharedProjects(e.id)) s(t);
                    return { entries: (0, a.io)(l), nextExpiry: d };
                })(e),
            [e, t],
            m,
        );
    return (
        i.useEffect(() => {
            if (null == s) return;
            let e = setTimeout(() => n((e) => e + 1), Math.max(0, s - Date.now()));
            return () => clearTimeout(e);
        }, [s, n]),
        d
    );
}
function h(e) {
    return (0, r.bG)(
        [u.A, l.Bt, d.A],
        () =>
            Object.values(u.A.getGuilds())
                .filter((t) => (0, s.pG)(t, e))
                .sort((e, t) => e.name.localeCompare(t.name)),
        [e],
        p,
    );
}
