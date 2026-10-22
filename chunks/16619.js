(n.d(t, { qh: () => v, rX: () => _, z9: () => b }), n(321073));
var l = n(582128),
    a = n(17928),
    r = n(587895),
    i = n(945810),
    s = n(321191),
    u = n(808728),
    d = n(71393),
    o = n(576705),
    c = n(967198),
    m = n(245179),
    f = n(793480),
    h = n(246338),
    g = n(434279),
    x = n(260498),
    p = n(426035);
function j(e, t) {
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
                e.project.updated_at === l.project.updated_at &&
                e.guildId === l.guildId &&
                e.guildName === l.guildName &&
                e.notInServer === l.notInServer &&
                e.owned === l.owned &&
                e.guild === l.guild
            );
        })
    );
}
function k(e, t) {
    return e.length === t.length && e.every((e, n) => e === t[n]);
}
function v(e) {
    let [t, n] = l.useState(0),
        { entries: o, nextExpiry: c } = (0, a.bG)(
            [x.Ay, m.A, d.A, u.Ay, s.A, r.A, i.Bt],
            () =>
                (function (e) {
                    let t = Date.now(),
                        n = new Map();
                    function l(t) {
                        let l = n.get(t);
                        if (null != l) return l;
                        let a = (0, f.L0)({ guildId: t, location: e });
                        return (n.set(t, a), a);
                    }
                    let a = new Set(),
                        r = [],
                        i = null;
                    function s(e, n) {
                        if (a.has(e.id)) return;
                        let s = (0, g.wu)(e);
                        if (null != s && !l(s)) return;
                        a.add(e.id);
                        let u = m.A.isThinking(e.id),
                            o = m.A.getFinishedAt(e.id),
                            c = (0, g.Uk)({ thinking: u, finishedAt: o, now: t });
                        if ("done" === c && null != o) {
                            let e = o + 6e4;
                            i = null == i ? e : Math.min(i, e);
                        }
                        let f = (null == s ? null : d.A.getGuild(s)) ?? null;
                        r.push({
                            project: e,
                            projectId: e.id,
                            name: e.name,
                            guildId: s,
                            guild: f,
                            guildName: f?.name ?? null,
                            notInServer: "not_in_server" === (0, p.kF)(e),
                            owned: n,
                            activity: c,
                            sortTime: (function (e, t) {
                                if (null != t) return t;
                                if (null == e.updated_at) return 0;
                                let n = Date.parse(e.updated_at);
                                return Number.isNaN(n) ? 0 : n;
                            })(e, o),
                        });
                    }
                    for (let e of x.Ay.getOwnedProjects()) s(e, !0);
                    for (let e of Object.values(d.A.getGuilds()))
                        if (x.Ay.hasFetchedGuildProjects(e.id) && l(e.id))
                            for (let t of x.Ay.getSharedProjects(e.id)) s(t, !1);
                    return { entries: (0, g.Ng)(r), nextExpiry: i };
                })(e),
            [e, t],
            j,
        );
    return (
        l.useEffect(() => {
            if (null == c) return;
            let e = setTimeout(() => n((e) => e + 1), Math.max(0, c - Date.now()));
            return () => clearTimeout(e);
        }, [c, n]),
        o
    );
}
function b(e) {
    return (0, a.bG)(
        [d.A, i.Bt, o.A],
        () =>
            Object.values(d.A.getGuilds())
                .filter((t) => (0, h.sM)(t, e))
                .sort((e, t) => e.name.localeCompare(t.name)),
        [e],
        k,
    );
}
function _(e) {
    return (0, a.bG)(
        [d.A, c.A, i.Bt],
        () => {
            let t = d.A.getGuild(c.A.getGuildId());
            return null != t && (0, h.N)(t, e)
                ? t.id
                : (Object.values(d.A.getGuilds())
                      .sort((e, t) => e.name.localeCompare(t.name))
                      .find((t) => (0, h.N)(t, e))?.id ?? null);
        },
        [e],
    );
}
(n(248675), n(105292));
