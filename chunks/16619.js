(n.d(t, { nM: () => y, qh: () => w, rX: () => N, z9: () => _ }), n(321073));
var l = n(582128),
    a = n(17928),
    i = n(587895),
    r = n(945810),
    s = n(321191),
    o = n(808728),
    u = n(71393),
    d = n(576705),
    c = n(967198),
    f = n(245179),
    m = n(793480),
    h = n(246338),
    g = n(434279),
    p = n(260498),
    x = n(426035),
    k = n(261425),
    b = n(105292);
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
function j(e, t) {
    return e.length === t.length && e.every((e, n) => e === t[n]);
}
function y(e) {
    return e.notInServer
        ? {
              serverName: b.intl.string(k.default["08PzLy"]),
              label: b.intl.formatToPlainString(k.default.pyh2pa, { name: e.name }),
          }
        : null == e.guildName
          ? {
                serverName: b.intl.string(k.default["3QFps8"]),
                label: b.intl.formatToPlainString(k.default["2sBOnp"], { name: e.name }),
            }
          : {
                serverName: e.guildName,
                label: b.intl.formatToPlainString(k.default["hd+GF1"], { name: e.name, server: e.guildName }),
            };
}
function w(e) {
    let [t, n] = l.useState(0),
        { entries: d, nextExpiry: c } = (0, a.bG)(
            [p.Ay, f.A, u.A, o.Ay, s.A, i.A, r.Bt],
            () =>
                (function (e) {
                    let t = Date.now(),
                        n = new Map();
                    function l(t) {
                        let l = n.get(t);
                        if (null != l) return l;
                        let a = (0, m.L0)({ guildId: t, location: e });
                        return (n.set(t, a), a);
                    }
                    let a = new Set(),
                        i = [],
                        r = null;
                    function s(e, n) {
                        if (a.has(e.id)) return;
                        let s = (0, g.wu)(e);
                        if (null != s && !l(s)) return;
                        a.add(e.id);
                        let o = f.A.isThinking(e.id),
                            d = f.A.getFinishedAt(e.id),
                            c = (0, g.Uk)({ thinking: o, finishedAt: d, now: t });
                        if ("done" === c && null != d) {
                            let e = d + 6e4;
                            r = null == r ? e : Math.min(r, e);
                        }
                        let m = (null == s ? null : u.A.getGuild(s)) ?? null;
                        i.push({
                            project: e,
                            projectId: e.id,
                            name: e.name,
                            guildId: s,
                            guild: m,
                            guildName: m?.name ?? null,
                            notInServer: "not_in_server" === (0, x.kF)(e),
                            owned: n,
                            activity: c,
                            sortTime: (function (e, t) {
                                if (null != t) return t;
                                if (null == e.updated_at) return 0;
                                let n = Date.parse(e.updated_at);
                                return Number.isNaN(n) ? 0 : n;
                            })(e, d),
                        });
                    }
                    for (let e of p.Ay.getOwnedProjects()) s(e, !0);
                    for (let e of Object.values(u.A.getGuilds()))
                        if (p.Ay.hasFetchedGuildProjects(e.id) && l(e.id))
                            for (let t of p.Ay.getSharedProjects(e.id)) s(t, !1);
                    return { entries: (0, g.Ng)(i), nextExpiry: r };
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
        d
    );
}
function _(e) {
    return (0, a.bG)(
        [u.A, r.Bt, d.A],
        () =>
            Object.values(u.A.getGuilds())
                .filter((t) => (0, h.sM)(t, e))
                .sort((e, t) => e.name.localeCompare(t.name)),
        [e],
        j,
    );
}
function N(e) {
    return (0, a.bG)(
        [u.A, c.A, r.Bt],
        () => {
            let t = u.A.getGuild(c.A.getGuildId());
            return null != t && (0, h.N)(t, e)
                ? t.id
                : (Object.values(u.A.getGuilds())
                      .sort((e, t) => e.name.localeCompare(t.name))
                      .find((t) => (0, h.N)(t, e))?.id ?? null);
        },
        [e],
    );
}
