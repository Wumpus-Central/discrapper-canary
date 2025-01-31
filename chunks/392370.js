n.d(t, {
    Q2: () => y,
    pe: () => j
}),
    n(47120),
    n(653041),
    n(536091);
var i = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(373793),
    s = n(288385),
    r = n(442837),
    c = n(911969),
    d = n(127255),
    u = n(654455),
    m = n(213459),
    p = n(807169),
    h = n(104793),
    v = n(674588),
    x = n(809547),
    f = n(822245),
    N = n(631827),
    C = n(827498),
    E = n(783097),
    A = n(689079),
    I = n(665692);
function g(e, t) {
    let n = f.Z.getScoreWithoutLoadingLatest(e.id);
    return f.Z.getScoreWithoutLoadingLatest(t.id) - n;
}
function _(e, t) {
    let n = (0, E.$d)(e),
        i = (0, E.$d)(t);
    return (0, m.un)(n, i);
}
function P(e, t) {
    return (0, m.un)(e.displayName, t.displayName);
}
function j(e) {
    let { context: t, query: n, commandLimit: l, applicationLimit: o, searchesCommands: s = !0, searchesBots: r = !0, searchesActivities: v = !0 } = e;
    n.startsWith(''.concat(I.GI)) && (n = n.substring(1));
    let {
            commands: x,
            commandSectionMap: f,
            loading: C
        } = (function (e) {
            var t, n;
            let { context: l, includeBuiltIn: a = !0, allowFetch: o = !0 } = e,
                s = (0, m.em)(l, !0, o),
                r = (0, m.PL)(!0, o);
            return i.useMemo(() => {
                var e, t, n, i, o;
                let c = null !== (n = null === (e = s.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {},
                    d = null !== (i = null === (t = r.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {},
                    u = [...Object.keys(c), ...Object.keys(d).filter((e) => !(e in c))];
                a && u.push(A.bi.BUILT_IN);
                let p = [],
                    h = {};
                for (let e of u) {
                    let t = (0, m.If)(l, e),
                        n = null !== (o = t.sectionCommands) && void 0 !== o ? o : [];
                    p.push(...n),
                        n.forEach((e) => {
                            null != t.descriptor && (h[e.id] = t.descriptor);
                        });
                }
                return {
                    commands: p,
                    commandSectionMap: h,
                    loading: !0 === s.fetchState.fetching || !0 === r.fetchState.fetching
                };
            }, [l, a, s.fetchState.fetching, null === (t = s.result) || void 0 === t ? void 0 : t.sections, r.fetchState.fetching, null === (n = r.result) || void 0 === n ? void 0 : n.sections]);
        })({
            context: t,
            includeBuiltIn: !0
        }),
        { apps: j } = (function (e) {
            let { context: t, onlyWithCommands: n, includeBuiltIn: l, allowFetch: a = !0, includeEmbeddedApps: o, includeNonEmbeddedApps: s } = e,
                r = 'channel' === t.type ? t.channel : void 0,
                d = (0, p.Hs)(r, [c.yU.CHAT]).hasBaseAccessPermissions,
                u = (0, m.em)(t, d, a),
                h = (0, m.PL)(d, a),
                v = i.useCallback(
                    (e) => {
                        let t = e.descriptor.application;
                        return null != t && (!!(o && (0, E.ye)(t)) || (null != t && s && !(0, E.ye)(t) && (!n || Object.keys(e.commands).length > 0)));
                    },
                    [o, s, n]
                ),
                x = [],
                f = new Set();
            if (null != u.result)
                for (let e of Object.values(u.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && v(e) && (x.push(t), f.add(t.id));
                }
            if (null != h.result)
                for (let e of Object.values(h.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && !f.has(t.id) && v(e) && x.push(t);
                }
            return (
                s && l && x.push(E.Wx),
                {
                    apps: x,
                    loading: (null == u ? void 0 : u.fetchState.fetching) === !0 || (null == h ? void 0 : h.fetchState.fetching) === !0
                }
            );
        })({
            context: t,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: v,
            includeNonEmbeddedApps: r
        }),
        y = (0, d.Z)({ guildId: 'channel' === t.type ? t.channel.guild_id : null }),
        T = i.useMemo(() => {
            var e, i, a, o, r, d;
            if (!s) return [];
            return (0, N.N)(x, {
                limit: l,
                filterPredicates: [
                    (function (e) {
                        let t = (0, p.k)('channel' === e.type ? e.channel : void 0, [c.yU.CHAT]),
                            n = {};
                        return (i) => {
                            let { context: l, userId: a, roleIds: o, isImpersonating: s } = t;
                            if (!(i.applicationId in n)) {
                                let { descriptor: t, isGuildInstalled: r, isUserInstalled: c } = (0, m.If)(e, i.applicationId),
                                    d = (null == l ? void 0 : l.guild_id) != null ? h.ML(null == t ? void 0 : t.permissions, l.guild_id, a, o, s) : null,
                                    u = (null == l ? void 0 : l.guild_id) != null ? h.ZJ(null == t ? void 0 : t.permissions, l, l.guild_id) : null;
                                n[i.applicationId] = {
                                    descriptor: t,
                                    applicationAllowedForUser: d,
                                    applicationAllowedForChannel: u,
                                    isGuildInstalled: r,
                                    isUserInstalled: c
                                };
                            }
                            let { descriptor: r, applicationAllowedForChannel: c, applicationAllowedForUser: d, isGuildInstalled: u, isUserInstalled: p } = n[i.applicationId];
                            return (
                                h.Ft(i, t, {
                                    applicationAllowedForUser: d,
                                    applicationAllowedForChannel: c,
                                    commandBotId: null == r ? void 0 : r.botId,
                                    isGuildInstalled: u,
                                    isUserInstalled: p
                                }) === h.mF.ALLOWED
                            );
                        };
                    })(t)
                ],
                bucketPredicates: [
                    ((i = e = n),
                    (e) => {
                        let t = e.untranslatedName,
                            n = e.displayName;
                        return t.startsWith(i) || n.startsWith(i);
                    }),
                    (function (e) {
                        let t = null == e ? void 0 : e.split(' '),
                            n = t[0],
                            i = t.slice(1).join(' ');
                        return (e) => {
                            let t = e.untranslatedName,
                                l = e.displayName;
                            return !!((t.startsWith(n) && t.split(' ').slice(1).join(' ').startsWith(i)) || (l.startsWith(n) && l.split(' ').slice(1).join(' ').startsWith(i)));
                        };
                    })(e),
                    ((a = e),
                    (e) => {
                        let t = e.untranslatedName,
                            n = e.displayName;
                        return t.includes(a) || n.includes(a);
                    }),
                    ((o = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: i } of null !== (t = e.options) && void 0 !== t ? t : []) if (n.startsWith(o) || ''.concat(e.untranslatedName, ' ').concat(n).startsWith(o) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(n).startsWith(o)) || (null != i && (i.startsWith(o) || ''.concat(e.untranslatedName, ' ').concat(i).startsWith(o) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(i).startsWith(o))))) return !0;
                        return !1;
                    }),
                    ((r = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: i } of null !== (t = e.options) && void 0 !== t ? t : []) if (n.includes(r) || (null == i ? void 0 : i.includes(r))) return !0;
                        return !1;
                    })
                ],
                sortComparers: [
                    ((d = { channel: 'channel' === t.type ? t.channel : void 0 }),
                    (e, t) => {
                        let n = u.ZP.getScoreWithoutLoadingLatest(d, e);
                        return u.ZP.getScoreWithoutLoadingLatest(d, t) - n;
                    }),
                    P
                ]
            });
        }, [s, x, l, t, n]),
        S = i.useMemo(() => {
            if (0 === T.length) return [];
            let e = new Map(j.map((e) => [e.id, e]));
            return a().compact(
                T.map((t) => {
                    var n;
                    let i = e.get(t.applicationId);
                    if (null == i) return null;
                    let l = null !== (n = f[t.id]) && void 0 !== n ? n : null;
                    return {
                        command: t,
                        application: i,
                        section: l
                    };
                })
            );
        }, [j, T, f]),
        b = i.useMemo(() => {
            var e, i, l, a, s;
            let d = [];
            if (v) {
                let e = new Set(
                    j.map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                );
                d.push(...j),
                    d.push(
                        ...y
                            .filter((t) => {
                                let {
                                    application: { id: n }
                                } = t;
                                return !e.has(n);
                            })
                            .map((e) => {
                                let { application: t } = e;
                                return t;
                            })
                    );
            } else r && (d = j);
            return (0, N.N)(d, {
                limit: o,
                filterPredicates: [
                    (function (e) {
                        let t = (0, p.k)('channel' === e.type ? e.channel : void 0, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
                        return (n) => {
                            let { context: i, userId: l, roleIds: a, isImpersonating: o } = t,
                                { descriptor: s, sectionCommands: r, isGuildInstalled: c, isUserInstalled: d } = (0, m.If)(e, n.id),
                                u = (null == i ? void 0 : i.guild_id) != null ? h.ML(null == s ? void 0 : s.permissions, i.guild_id, l, a, o) : null,
                                p = (null == i ? void 0 : i.guild_id) != null ? h.ZJ(null == s ? void 0 : s.permissions, i, i.guild_id) : null;
                            return (
                                null == r ||
                                !(r.length > 0) ||
                                r.some(
                                    (e) =>
                                        h.Ft(e, t, {
                                            applicationAllowedForUser: u,
                                            applicationAllowedForChannel: p,
                                            commandBotId: null == s ? void 0 : s.botId,
                                            isGuildInstalled: c,
                                            isUserInstalled: d
                                        }) === h.mF.ALLOWED
                                )
                            );
                        };
                    })(t)
                ],
                bucketPredicates: [
                    ((i = e = n), (e) => (0, E.$d)(e).toLocaleLowerCase().startsWith(i.toLocaleLowerCase())),
                    ((l = e), (e) => (0, E.$d)(e).toLocaleLowerCase().includes(l.toLocaleLowerCase())),
                    ((a = e),
                    (e) => {
                        var t, n;
                        let i = null === (t = (0, E.jD)(e)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
                        return null !== (n = null == i ? void 0 : i.startsWith(a.toLocaleLowerCase())) && void 0 !== n && n;
                    }),
                    ((s = e),
                    (e) => {
                        var t, n;
                        let i = null === (t = (0, E.jD)(e)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
                        return null !== (n = null == i ? void 0 : i.includes(s.toLocaleLowerCase())) && void 0 !== n && n;
                    })
                ],
                sortComparers: [g, _]
            });
        }, [r, v, o, t, n, j, y]),
        L = S.length > 0,
        R = b.length > 0;
    return {
        commandResults: S,
        hasCommandResults: L,
        applicationResults: b,
        hasApplicationResults: R,
        isEmptyState: !L && !R,
        loading: C && s
    };
}
function y(e) {
    let { context: t, query: n, fetches: l = !0, pageLimit: a = 1 / 0, entrypoint: c } = e;
    n.startsWith(''.concat(I.GI)) && (n = n.substring(1));
    let d = c === C._b.VOICE,
        u = 'channel' === t.type ? t.channel.guild_id : void 0,
        [m, p] = i.useState(1),
        h = i.useRef(m);
    h.current = m;
    let { fetchState: f, totalPages: N } = (0, r.cj)(
            [x.Z],
            () => {
                var e, t;
                return {
                    fetchState: x.Z.getFetchState({
                        query: n,
                        guildId: u,
                        page: m,
                        integrationType: o.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: d,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: s.F.APP_LAUNCHER
                    }),
                    totalPages:
                        null !==
                            (t =
                                null ===
                                    (e = x.Z.getSearchResults({
                                        query: n,
                                        guildId: u,
                                        page: m,
                                        integrationType: o.Y.USER_INSTALL,
                                        minUserInstallCommandCount: 1,
                                        excludeAppsWithCustomInstallUrl: !0,
                                        excludeNonEmbeddedApps: d,
                                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                        source: s.F.APP_LAUNCHER
                                    })) || void 0 === e
                                    ? void 0
                                    : e.totalPages) && void 0 !== t
                            ? t
                            : 0
                };
            },
            [n, u, m, d]
        ),
        E = i.useMemo(
            () =>
                Array.from({ length: f === x.M.FETCHED || f === x.M.ERROR ? m : m - 1 }, (e, t) => {
                    var i, l;
                    return null !==
                        (l =
                            null ===
                                (i = x.Z.getSearchResults({
                                    query: n,
                                    guildId: u,
                                    page: t + 1,
                                    integrationType: o.Y.USER_INSTALL,
                                    minUserInstallCommandCount: 1,
                                    excludeAppsWithCustomInstallUrl: !0,
                                    excludeNonEmbeddedApps: d,
                                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                    source: s.F.APP_LAUNCHER
                                })) || void 0 === i
                                ? void 0
                                : i.results) && void 0 !== l
                        ? l
                        : [];
                }),
            [f, u, n, m, d]
        ),
        A = i.useCallback(() => {
            let e = E.length;
            f === x.M.FETCHED && e === h.current && e > 0 && e < N && e < a && E[e - 1].length > 0 && (h.current++, p((e) => e + 1));
        }, [f, a, E, N]),
        g = i.useCallback(
            (e) => {
                let { query: t, page: n, guildId: i } = e;
                v.yC({
                    query: t,
                    guildId: i,
                    options: {
                        page: n,
                        integrationType: o.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: d,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: s.F.APP_LAUNCHER
                    }
                });
            },
            [d]
        );
    return (
        i.useEffect(() => {
            l &&
                g({
                    query: n,
                    page: m,
                    guildId: u
                });
        }, [n, u, g, m, l]),
        i.useEffect(() => {
            p(1);
        }, [u, n]),
        {
            fetchState: f,
            applicationResults: E.flat(),
            fetchNextPage: A
        }
    );
}
