(n.d(t, { nM: () => _, qh: () => y, rX: () => S, z9: () => N }), n(321073));
var l = n(582128),
    a = n(17928),
    i = n(587895),
    r = n(945810),
    s = n(321191),
    u = n(808728),
    o = n(71393),
    d = n(576705),
    c = n(967198),
    m = n(245179),
    f = n(793480),
    h = n(246338),
    g = n(434279),
    p = n(260498),
    x = n(426035),
    k = n(261425),
    v = n(660183);
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
              serverName: v.intl.string(k.default["08PzLy"]),
              label: v.intl.formatToPlainString(k.default.pyh2pa, { name: e.name }),
          }
        : null == e.guildName
          ? {
                serverName: v.intl.string(k.default["3QFps8"]),
                label: v.intl.formatToPlainString(k.default["2sBOnp"], { name: e.name }),
            }
          : {
                serverName: e.guildName,
                label: v.intl.formatToPlainString(k.default["hd+GF1"], { name: e.name, server: e.guildName }),
            };
}
function y(e) {
    let [t, n] = l.useState(0),
        { entries: d, nextExpiry: c } = (0, a.bG)(
            [p.Ay, m.Ay, o.A, u.Ay, s.A, i.A, r.Bt],
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
                        i = [],
                        r = null;
                    function s(e) {
                        if (a.has(e.id)) return;
                        let n = (0, g.wu)(e);
                        if (null != n && !l(n)) return;
                        a.add(e.id);
                        let s = m.Ay.isThinking(e.id),
                            u = m.Ay.getFinishedAt(e.id),
                            d = (0, g.Uk)({ thinking: s, finishedAt: u, now: t });
                        if ("done" === d && null != u) {
                            let e = u + 6e4;
                            r = null == r ? e : Math.min(r, e);
                        }
                        let c = (null == n ? null : o.A.getGuild(n)) ?? null;
                        i.push({
                            project: e,
                            projectId: e.id,
                            name: e.name,
                            guildId: n,
                            guild: c,
                            guildName: c?.name ?? null,
                            notInServer: "not_in_server" === (0, x.kF)(e),
                            activity: d,
                            sortTime: (function (e, t) {
                                if (null != t) return t;
                                if (null == e.updated_at) return 0;
                                let n = Date.parse(e.updated_at);
                                return Number.isNaN(n) ? 0 : n;
                            })(e, u),
                        });
                    }
                    for (let e of p.Ay.getOwnedProjects()) s(e);
                    for (let e of Object.values(o.A.getGuilds()))
                        if (p.Ay.hasFetchedGuildProjects(e.id) && l(e.id))
                            for (let t of p.Ay.getSharedProjects(e.id)) s(t);
                    return { entries: (0, g.Ng)(i), nextExpiry: r };
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
        d
    );
}
function N(e) {
    return (0, a.bG)(
        [o.A, r.Bt, d.A],
        () =>
            Object.values(o.A.getGuilds())
                .filter((t) => (0, h.sM)(t, e))
                .sort((e, t) => e.name.localeCompare(t.name)),
        [e],
        b,
    );
}
function S(e) {
    return (0, a.bG)(
        [o.A, c.A, r.Bt],
        () => {
            let t = o.A.getGuild(c.A.getGuildId());
            return null != t && (0, h.N)(t, e)
                ? t.id
                : (Object.values(o.A.getGuilds())
                      .sort((e, t) => e.name.localeCompare(t.name))
                      .find((t) => (0, h.N)(t, e))?.id ?? null);
        },
        [e],
    );
}
