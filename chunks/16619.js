(n.d(t, { nM: () => _, qh: () => y, rX: () => S, z9: () => N }), n(321073));
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
    p = n(42766),
    x = n(426035),
    k = n(248675),
    j = n(660183);
function v(e, t) {
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
                e.notInServer === l.notInServer &&
                e.guild === l.guild
            );
        })
    );
}
function b(e, t) {
    return e.length === t.length && e.every((e, n) => e === t[n]);
}
function _(e) {
    return e.notInServer
        ? {
              serverName: j.intl.string(k.default["08PzLy"]),
              label: j.intl.formatToPlainString(k.default.pyh2pa, { name: e.name }),
          }
        : null == e.guildName
          ? {
                serverName: j.intl.string(k.default["3QFps8"]),
                label: j.intl.formatToPlainString(k.default["2sBOnp"], { name: e.name }),
            }
          : {
                serverName: e.guildName,
                label: j.intl.formatToPlainString(k.default["hd+GF1"], { name: e.name, server: e.guildName }),
            };
}
function y(e) {
    let [t, n] = l.useState(0),
        { entries: o, nextExpiry: c } = (0, a.bG)(
            [p.Ay, m.Ay, d.A, u.Ay, s.A, r.A, i.Bt],
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
                    function s(e) {
                        if (a.has(e.id)) return;
                        let n = (0, g.wu)(e);
                        if (null != n && !l(n)) return;
                        a.add(e.id);
                        let s = m.Ay.isThinking(e.id),
                            u = m.Ay.getFinishedAt(e.id),
                            o = (0, g.Uk)({ thinking: s, finishedAt: u, now: t });
                        if ("done" === o && null != u) {
                            let e = u + 6e4;
                            i = null == i ? e : Math.min(i, e);
                        }
                        let c = (null == n ? null : d.A.getGuild(n)) ?? null;
                        r.push({
                            project: e,
                            projectId: e.id,
                            name: e.name,
                            guildId: n,
                            guild: c,
                            guildName: c?.name ?? null,
                            notInServer: "not_in_server" === (0, x.kF)(e),
                            activity: o,
                            sortTime: (function (e, t) {
                                if (null != t) return t;
                                if (null == e.updated_at) return 0;
                                let n = Date.parse(e.updated_at);
                                return Number.isNaN(n) ? 0 : n;
                            })(e, u),
                        });
                    }
                    for (let e of p.Ay.getOwnedProjects()) s(e);
                    for (let e of Object.values(d.A.getGuilds()))
                        if (p.Ay.hasFetchedGuildProjects(e.id) && l(e.id))
                            for (let t of p.Ay.getSharedProjects(e.id)) s(t);
                    return { entries: (0, g.Ng)(r), nextExpiry: i };
                })(e),
            [e, t],
            v,
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
function N(e) {
    return (0, a.bG)(
        [d.A, i.Bt, o.A],
        () =>
            Object.values(d.A.getGuilds())
                .filter((t) => (0, h.sM)(t, e))
                .sort((e, t) => e.name.localeCompare(t.name)),
        [e],
        b,
    );
}
function S(e) {
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
