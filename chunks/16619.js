(n.d(t, { qh: () => y, rX: () => G, z9: () => w }), n(321073));
var l = n(582128),
    u = n(17928),
    i = n(587895),
    r = n(945810),
    d = n(321191),
    a = n(808728),
    o = n(71393),
    s = n(576705),
    c = n(967198),
    f = n(245179),
    g = n(97005),
    p = n(246338),
    A = n(434279),
    m = n(260498);
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
                e.project.updated_at === l.project.updated_at &&
                e.guildId === l.guildId &&
                e.guildName === l.guildName &&
                e.owned === l.owned &&
                e.guild === l.guild
            );
        })
    );
}
function j(e, t) {
    return e.length === t.length && e.every((e, n) => e === t[n]);
}
function y(e) {
    let [t, n] = l.useState(0),
        { entries: s, nextExpiry: c } = (0, u.bG)(
            [m.Ay, f.A, o.A, a.Ay, d.A, i.A, r.Bt],
            () =>
                (function (e) {
                    let t = Date.now(),
                        n = new Map();
                    function l(t) {
                        let l = n.get(t);
                        if (null != l) return l;
                        let u = (0, g.L0)({ guildId: t, location: e });
                        return (n.set(t, u), u);
                    }
                    let u = new Set(),
                        i = [],
                        r = null;
                    function d(e, n) {
                        if (u.has(e.id)) return;
                        let d = (0, A.wu)(e);
                        if (null != d && !l(d)) return;
                        u.add(e.id);
                        let a = f.A.isThinking(e.id),
                            s = f.A.getFinishedAt(e.id),
                            c = (0, A.Uk)({ thinking: a, finishedAt: s, now: t });
                        if ("done" === c && null != s) {
                            let e = s + 6e4;
                            r = null == r ? e : Math.min(r, e);
                        }
                        let g = (null == d ? null : o.A.getGuild(d)) ?? null;
                        i.push({
                            project: e,
                            projectId: e.id,
                            name: e.name,
                            guildId: d,
                            guild: g,
                            guildName: g?.name ?? null,
                            owned: n,
                            activity: c,
                            sortTime: (function (e, t) {
                                if (null != t) return t;
                                if (null == e.updated_at) return 0;
                                let n = Date.parse(e.updated_at);
                                return Number.isNaN(n) ? 0 : n;
                            })(e, s),
                        });
                    }
                    for (let e of m.Ay.getOwnedProjects()) d(e, !0);
                    for (let e of Object.values(o.A.getGuilds()))
                        if (m.Ay.hasFetchedGuildProjects(e.id) && l(e.id))
                            for (let t of m.Ay.getSharedProjects(e.id)) d(t, !1);
                    return { entries: (0, A.Ng)(i), nextExpiry: r };
                })(e),
            [e, t],
            h,
        );
    return (
        l.useEffect(() => {
            if (null == c) return;
            let e = setTimeout(() => n((e) => e + 1), Math.max(0, c - Date.now()));
            return () => clearTimeout(e);
        }, [c, n]),
        s
    );
}
function w(e) {
    return (0, u.bG)(
        [o.A, r.Bt, s.A],
        () =>
            Object.values(o.A.getGuilds())
                .filter((t) => (0, p.sM)(t, e))
                .sort((e, t) => e.name.localeCompare(t.name)),
        [e],
        j,
    );
}
function G(e) {
    return (0, u.bG)(
        [o.A, c.A, r.Bt],
        () => {
            let t = o.A.getGuild(c.A.getGuildId());
            return null != t && (0, p.N)(t, e)
                ? t.id
                : (Object.values(o.A.getGuilds())
                      .sort((e, t) => e.name.localeCompare(t.name))
                      .find((t) => (0, p.N)(t, e))?.id ?? null);
        },
        [e],
    );
}
