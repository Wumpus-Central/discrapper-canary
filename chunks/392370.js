n.d(t, {
    Q2: () => A,
    pe: () => O
}),
    n(388685),
    n(539854),
    n(35282),
    n(472816),
    n(794429);
var l = n(73800),
    i = n(392711),
    r = n.n(i),
    a = n(373793),
    o = n(288385),
    s = n(442837),
    c = n(911969),
    u = n(127255),
    d = n(654455),
    p = n(213459),
    m = n(807169),
    f = n(104793),
    h = n(822245),
    v = n(471518),
    y = n(177653),
    x = n(631827),
    b = n(827498),
    g = n(783097),
    j = n(689079),
    N = n(761652);
function C(e, t) {
    let n = h.Z.getScoreWithoutLoadingLatest(e.id);
    return h.Z.getScoreWithoutLoadingLatest(t.id) - n;
}
function E(e, t) {
    let n = (0, g.$d)(e),
        l = (0, g.$d)(t);
    return (0, p.un)(n, l);
}
function P(e, t) {
    return (0, p.un)(e.displayName, t.displayName);
}
function O(e) {
    let { context: t, query: n, commandLimit: i, applicationLimit: a, searchesCommands: o = !0, searchesBots: s = !0, searchesActivities: h = !0 } = e;
    n.startsWith(''.concat(N.GI)) && (n = n.substring(1));
    let {
            commands: v,
            commandSectionMap: y,
            loading: b
        } = (function (e) {
            var t, n;
            let { context: i, includeBuiltIn: r = !0, allowFetch: a = !0 } = e,
                o = (0, p.em)(i, !0, a),
                s = (0, p.PL)(!0, a);
            return l.useMemo(() => {
                var e, t, n, l, a;
                let c = null != (n = null == (e = o.result) ? void 0 : e.sections) ? n : {},
                    u = null != (l = null == (t = s.result) ? void 0 : t.sections) ? l : {},
                    d = [...Object.keys(c), ...Object.keys(u).filter((e) => !(e in c))];
                r && d.push(j.bi.BUILT_IN);
                let m = [],
                    f = {};
                for (let e of d) {
                    let t = (0, p.If)(i, e),
                        n = null != (a = t.sectionCommands) ? a : [];
                    m.push(...n),
                        n.forEach((e) => {
                            null != t.descriptor && (f[e.id] = t.descriptor);
                        });
                }
                return {
                    commands: m,
                    commandSectionMap: f,
                    loading: !0 === o.fetchState.fetching || !0 === s.fetchState.fetching
                };
            }, [i, r, o.fetchState.fetching, null == (t = o.result) ? void 0 : t.sections, s.fetchState.fetching, null == (n = s.result) ? void 0 : n.sections]);
        })({
            context: t,
            includeBuiltIn: !0
        }),
        { apps: O } = (function (e) {
            let { context: t, onlyWithCommands: n, includeBuiltIn: i, allowFetch: r = !0, includeEmbeddedApps: a, includeNonEmbeddedApps: o } = e,
                s = 'channel' === t.type ? t.channel : void 0,
                u = (0, m.Hs)(s, [c.yU.CHAT]).hasBaseAccessPermissions,
                d = (0, p.em)(t, u, r),
                f = (0, p.PL)(u, r),
                h = l.useCallback(
                    (e) => {
                        let t = e.descriptor.application;
                        return null != t && (!!(a && (0, g.ye)(t)) || (null != t && o && !(0, g.ye)(t) && (!n || Object.keys(e.commands).length > 0)));
                    },
                    [a, o, n]
                ),
                v = [],
                y = new Set();
            if (null != d.result)
                for (let e of Object.values(d.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && h(e) && (v.push(t), y.add(t.id));
                }
            if (null != f.result)
                for (let e of Object.values(f.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && !y.has(t.id) && h(e) && v.push(t);
                }
            return (
                o && i && v.push(g.Wx),
                {
                    apps: v,
                    loading: (null == d ? void 0 : d.fetchState.fetching) === !0 || (null == f ? void 0 : f.fetchState.fetching) === !0
                }
            );
        })({
            context: t,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: h,
            includeNonEmbeddedApps: s
        }),
        A = (0, u.Z)({ guildId: 'channel' === t.type ? t.channel.guild_id : null }),
        I = l.useMemo(() => {
            var e, l, r, a, s, u;
            if (!o) return [];
            return (0, x.N)(v, {
                limit: i,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)('channel' === e.type ? e.channel : void 0, [c.yU.CHAT]),
                            n = {};
                        return (l) => {
                            let { context: i, userId: r, roleIds: a, isImpersonating: o } = t;
                            if (!(l.applicationId in n)) {
                                let { descriptor: t, isGuildInstalled: s, isUserInstalled: c } = (0, p.If)(e, l.applicationId),
                                    u = (null == i ? void 0 : i.guild_id) != null ? f.ML(null == t ? void 0 : t.permissions, i.guild_id, r, a, o) : null,
                                    d = (null == i ? void 0 : i.guild_id) != null ? f.ZJ(null == t ? void 0 : t.permissions, i, i.guild_id) : null;
                                n[l.applicationId] = {
                                    descriptor: t,
                                    applicationAllowedForUser: u,
                                    applicationAllowedForChannel: d,
                                    isGuildInstalled: s,
                                    isUserInstalled: c
                                };
                            }
                            let { descriptor: s, applicationAllowedForChannel: c, applicationAllowedForUser: u, isGuildInstalled: d, isUserInstalled: m } = n[l.applicationId];
                            return (
                                f.Ft(l, t, {
                                    applicationAllowedForUser: u,
                                    applicationAllowedForChannel: c,
                                    commandBotId: null == s ? void 0 : s.botId,
                                    isGuildInstalled: d,
                                    isUserInstalled: m
                                }) === f.mF.ALLOWED
                            );
                        };
                    })(t)
                ],
                bucketPredicates: [
                    ((l = e = n),
                    (e) => {
                        let t = e.untranslatedName,
                            n = e.displayName;
                        return t.startsWith(l) || n.startsWith(l);
                    }),
                    (function (e) {
                        let t = null == e ? void 0 : e.split(' '),
                            n = t[0],
                            l = t.slice(1).join(' ');
                        return (e) => {
                            let t = e.untranslatedName,
                                i = e.displayName;
                            return !!((t.startsWith(n) && t.split(' ').slice(1).join(' ').startsWith(l)) || (i.startsWith(n) && i.split(' ').slice(1).join(' ').startsWith(l))) || !1;
                        };
                    })(e),
                    ((r = e),
                    (e) => {
                        let t = e.untranslatedName,
                            n = e.displayName;
                        return t.includes(r) || n.includes(r);
                    }),
                    ((a = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: l } of null != (t = e.options) ? t : []) if (n.startsWith(a) || ''.concat(e.untranslatedName, ' ').concat(n).startsWith(a) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(n).startsWith(a)) || (null != l && (l.startsWith(a) || ''.concat(e.untranslatedName, ' ').concat(l).startsWith(a) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(l).startsWith(a))))) return !0;
                        return !1;
                    }),
                    ((s = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: l } of null != (t = e.options) ? t : []) if (n.includes(s) || (null == l ? void 0 : l.includes(s))) return !0;
                        return !1;
                    })
                ],
                sortComparers: [
                    ((u = { channel: 'channel' === t.type ? t.channel : void 0 }),
                    (e, t) => {
                        let n = d.ZP.getScoreWithoutLoadingLatest(u, e);
                        return d.ZP.getScoreWithoutLoadingLatest(u, t) - n;
                    }),
                    P
                ]
            });
        }, [o, v, i, t, n]),
        _ = l.useMemo(() => {
            if (0 === I.length) return [];
            let e = new Map(O.map((e) => [e.id, e]));
            return r().compact(
                I.map((t) => {
                    var n;
                    let l = e.get(t.applicationId);
                    if (null == l) return null;
                    let i = null != (n = y[t.id]) ? n : null;
                    return {
                        command: t,
                        application: l,
                        section: i
                    };
                })
            );
        }, [O, I, y]),
        S = l.useMemo(() => {
            var e, l, i, r, o;
            let u = [];
            if (h) {
                let e = new Set(
                    O.map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                );
                u.push(...O),
                    u.push(
                        ...A.filter((t) => {
                            let {
                                application: { id: n }
                            } = t;
                            return !e.has(n);
                        }).map((e) => {
                            let { application: t } = e;
                            return t;
                        })
                    );
            } else s && (u = O);
            return (0, x.N)(u, {
                limit: a,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)('channel' === e.type ? e.channel : void 0, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
                        return (n) => {
                            let { context: l, userId: i, roleIds: r, isImpersonating: a } = t,
                                { descriptor: o, sectionCommands: s, isGuildInstalled: c, isUserInstalled: u } = (0, p.If)(e, n.id),
                                d = (null == l ? void 0 : l.guild_id) != null ? f.ML(null == o ? void 0 : o.permissions, l.guild_id, i, r, a) : null,
                                m = (null == l ? void 0 : l.guild_id) != null ? f.ZJ(null == o ? void 0 : o.permissions, l, l.guild_id) : null;
                            return (
                                null == s ||
                                !(s.length > 0) ||
                                s.some(
                                    (e) =>
                                        f.Ft(e, t, {
                                            applicationAllowedForUser: d,
                                            applicationAllowedForChannel: m,
                                            commandBotId: null == o ? void 0 : o.botId,
                                            isGuildInstalled: c,
                                            isUserInstalled: u
                                        }) === f.mF.ALLOWED
                                )
                            );
                        };
                    })(t)
                ],
                bucketPredicates: [
                    ((l = e = n), (e) => (0, g.$d)(e).toLocaleLowerCase().startsWith(l.toLocaleLowerCase())),
                    ((i = e), (e) => (0, g.$d)(e).toLocaleLowerCase().includes(i.toLocaleLowerCase())),
                    ((r = e),
                    (e) => {
                        var t, n;
                        let l = null == (t = (0, g.jD)(e)) ? void 0 : t.toLocaleLowerCase();
                        return null != (n = null == l ? void 0 : l.startsWith(r.toLocaleLowerCase())) && n;
                    }),
                    ((o = e),
                    (e) => {
                        var t, n;
                        let l = null == (t = (0, g.jD)(e)) ? void 0 : t.toLocaleLowerCase();
                        return null != (n = null == l ? void 0 : l.includes(o.toLocaleLowerCase())) && n;
                    })
                ],
                sortComparers: [C, E]
            });
        }, [s, h, a, t, n, O, A]),
        T = _.length > 0,
        L = S.length > 0;
    return {
        commandResults: _,
        hasCommandResults: T,
        applicationResults: S,
        hasApplicationResults: L,
        isEmptyState: !T && !L,
        loading: b && o
    };
}
function A(e) {
    let { context: t, query: n, fetches: i = !0, pageLimit: r = 1 / 0, entrypoint: c } = e;
    n.startsWith(''.concat(N.GI)) && (n = n.substring(1));
    let u = c === b._b.VOICE,
        d = 'channel' === t.type ? t.channel.guild_id : void 0,
        [p, m] = l.useState(1),
        f = l.useRef(p);
    f.current = p;
    let { fetchState: h, totalPages: x } = (0, s.cj)(
            [y.Z],
            () => {
                var e, t;
                return {
                    fetchState: y.Z.getFetchState({
                        query: n,
                        guildId: d,
                        page: p,
                        integrationType: a.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: u,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: o.F.APP_LAUNCHER
                    }),
                    totalPages:
                        null !=
                        (t =
                            null ==
                            (e = y.Z.getSearchResults({
                                query: n,
                                guildId: d,
                                page: p,
                                integrationType: a.Y.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: u,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: o.F.APP_LAUNCHER
                            }))
                                ? void 0
                                : e.totalPages)
                            ? t
                            : 0
                };
            },
            [n, d, p, u]
        ),
        g = l.useMemo(
            () =>
                Array.from({ length: h === y.M.FETCHED || h === y.M.ERROR ? p : p - 1 }, (e, t) => {
                    var l, i;
                    return null !=
                        (i =
                            null ==
                            (l = y.Z.getSearchResults({
                                query: n,
                                guildId: d,
                                page: t + 1,
                                integrationType: a.Y.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: u,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: o.F.APP_LAUNCHER
                            }))
                                ? void 0
                                : l.results)
                        ? i
                        : [];
                }),
            [h, d, n, p, u]
        ),
        j = l.useCallback(() => {
            let e = g.length;
            h === y.M.FETCHED && e === f.current && e > 0 && e < x && e < r && g[e - 1].length > 0 && (f.current++, m((e) => e + 1));
        }, [h, r, g, x]),
        C = l.useCallback(
            (e) => {
                let { query: t, page: n, guildId: l } = e;
                v.yC({
                    query: t,
                    guildId: l,
                    options: {
                        page: n,
                        integrationType: a.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: u,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: o.F.APP_LAUNCHER
                    }
                });
            },
            [u]
        );
    return (
        l.useEffect(() => {
            i &&
                C({
                    query: n,
                    page: p,
                    guildId: d
                });
        }, [n, d, C, p, i]),
        l.useEffect(() => {
            m(1);
        }, [d, n]),
        {
            fetchState: h,
            applicationResults: g.flat(),
            fetchNextPage: j
        }
    );
}
