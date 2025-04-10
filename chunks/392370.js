n.d(t, {
    Q2: () => I,
    pe: () => A
}),
    n(388685),
    n(539854),
    n(35282),
    n(472816),
    n(794429);
var i = n(192379),
    r = n(392711),
    l = n.n(r),
    a = n(373793),
    o = n(288385),
    s = n(442837),
    c = n(911969),
    d = n(127255),
    u = n(654455),
    p = n(213459),
    m = n(807169),
    f = n(104793),
    h = n(822245),
    b = n(471518),
    x = n(177653),
    C = n(631827),
    _ = n(424602),
    v = n(827498),
    y = n(783097),
    N = n(689079),
    g = n(761652);
function j(e, t) {
    let n = h.Z.getScoreWithoutLoadingLatest(e.id);
    return h.Z.getScoreWithoutLoadingLatest(t.id) - n;
}
function P(e, t) {
    let n = (0, y.$d)(e),
        i = (0, y.$d)(t);
    return (0, p.un)(n, i);
}
function E(e, t) {
    return (0, p.un)(e.displayName, t.displayName);
}
function A(e) {
    let { context: t, query: n, commandLimit: r, applicationLimit: a, searchesCommands: o = !0, searchesBots: s = !0, searchesActivities: h = !0 } = e;
    n.startsWith(''.concat(g.GI)) && (n = n.substring(1));
    let {
            commands: b,
            commandSectionMap: x,
            loading: v
        } = (function (e) {
            var t, n;
            let { context: r, includeBuiltIn: l = !0, allowFetch: a = !0 } = e,
                o = (0, p.em)(r, !0, a),
                s = (0, p.PL)(!0, a);
            return i.useMemo(() => {
                var e, t, n, i, a;
                let c = null != (n = null == (e = o.result) ? void 0 : e.sections) ? n : {},
                    d = null != (i = null == (t = s.result) ? void 0 : t.sections) ? i : {},
                    u = [...Object.keys(c), ...Object.keys(d).filter((e) => !(e in c))];
                l && u.push(N.bi.BUILT_IN);
                let m = 'channel' in r && (0, _.aZ)(r.channel, 'AppLauncherSearchUtils.useApplicationCommandsInContext()'),
                    f = [],
                    h = {};
                for (let e of u) {
                    let t = (0, p.If)(r, e),
                        n = null != (a = t.sectionCommands) ? a : [];
                    f.push(...n),
                        n.forEach((e) => {
                            null != t.descriptor && (h[e.id] = t.descriptor);
                        });
                }
                return {
                    commands: f.filter((e) => !m || e.applicationId !== _.gu),
                    commandSectionMap: h,
                    loading: !0 === o.fetchState.fetching || !0 === s.fetchState.fetching
                };
            }, [r, l, o.fetchState.fetching, null == (t = o.result) ? void 0 : t.sections, s.fetchState.fetching, null == (n = s.result) ? void 0 : n.sections]);
        })({
            context: t,
            includeBuiltIn: !0
        }),
        { apps: A } = (function (e) {
            let { context: t, onlyWithCommands: n, includeBuiltIn: r, allowFetch: l = !0, includeEmbeddedApps: a, includeNonEmbeddedApps: o } = e,
                s = 'channel' === t.type ? t.channel : void 0,
                d = (0, m.Hs)(s, [c.yU.CHAT]).hasBaseAccessPermissions,
                u = (0, p.em)(t, d, l),
                f = (0, p.PL)(d, l),
                h = i.useCallback(
                    (e) => {
                        let t = e.descriptor.application;
                        return null != t && (!!(a && (0, y.ye)(t)) || (null != t && o && !(0, y.ye)(t) && (!n || Object.keys(e.commands).length > 0)));
                    },
                    [a, o, n]
                ),
                b = [],
                x = new Set();
            if (null != u.result)
                for (let e of Object.values(u.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && h(e) && (b.push(t), x.add(t.id));
                }
            if (null != f.result)
                for (let e of Object.values(f.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && !x.has(t.id) && h(e) && b.push(t);
                }
            o && r && b.push(y.Wx);
            let C = 'channel' in t && (0, _.aZ)(t.channel, 'AppLauncherSearchUtils.useApplicationsInContext()');
            return {
                apps: b.filter((e) => !C || e.id !== _.gu),
                loading: (null == u ? void 0 : u.fetchState.fetching) === !0 || (null == f ? void 0 : f.fetchState.fetching) === !0
            };
        })({
            context: t,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: h,
            includeNonEmbeddedApps: s
        }),
        I = (0, d.Z)({
            guildId: 'channel' === t.type ? t.channel.guild_id : null,
            context: t
        }),
        O = i.useMemo(() => {
            var e, i, l, a, s, d;
            if (!o) return [];
            return (0, C.N)(b, {
                limit: r,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)('channel' === e.type ? e.channel : void 0, [c.yU.CHAT]),
                            n = {};
                        return (i) => {
                            let { context: r, userId: l, roleIds: a, isImpersonating: o } = t;
                            if (!(i.applicationId in n)) {
                                let { descriptor: t, isGuildInstalled: s, isUserInstalled: c } = (0, p.If)(e, i.applicationId),
                                    d = (null == r ? void 0 : r.guild_id) != null ? f.ML(null == t ? void 0 : t.permissions, r.guild_id, l, a, o) : null,
                                    u = (null == r ? void 0 : r.guild_id) != null ? f.ZJ(null == t ? void 0 : t.permissions, r, r.guild_id) : null;
                                n[i.applicationId] = {
                                    descriptor: t,
                                    applicationAllowedForUser: d,
                                    applicationAllowedForChannel: u,
                                    isGuildInstalled: s,
                                    isUserInstalled: c
                                };
                            }
                            let { descriptor: s, applicationAllowedForChannel: c, applicationAllowedForUser: d, isGuildInstalled: u, isUserInstalled: m } = n[i.applicationId];
                            return (
                                f.Ft(i, t, {
                                    applicationAllowedForUser: d,
                                    applicationAllowedForChannel: c,
                                    commandBotId: null == s ? void 0 : s.botId,
                                    isGuildInstalled: u,
                                    isUserInstalled: m
                                }) === f.mF.ALLOWED
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
                                r = e.displayName;
                            return !!((t.startsWith(n) && t.split(' ').slice(1).join(' ').startsWith(i)) || (r.startsWith(n) && r.split(' ').slice(1).join(' ').startsWith(i))) || !1;
                        };
                    })(e),
                    ((l = e),
                    (e) => {
                        let t = e.untranslatedName,
                            n = e.displayName;
                        return t.includes(l) || n.includes(l);
                    }),
                    ((a = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: i } of null != (t = e.options) ? t : []) if (n.startsWith(a) || ''.concat(e.untranslatedName, ' ').concat(n).startsWith(a) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(n).startsWith(a)) || (null != i && (i.startsWith(a) || ''.concat(e.untranslatedName, ' ').concat(i).startsWith(a) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(i).startsWith(a))))) return !0;
                        return !1;
                    }),
                    ((s = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: i } of null != (t = e.options) ? t : []) if (n.includes(s) || (null == i ? void 0 : i.includes(s))) return !0;
                        return !1;
                    })
                ],
                sortComparers: [
                    ((d = { channel: 'channel' === t.type ? t.channel : void 0 }),
                    (e, t) => {
                        let n = u.ZP.getScoreWithoutLoadingLatest(d, e);
                        return u.ZP.getScoreWithoutLoadingLatest(d, t) - n;
                    }),
                    E
                ]
            });
        }, [o, b, r, t, n]),
        S = i.useMemo(() => {
            if (0 === O.length) return [];
            let e = new Map(A.map((e) => [e.id, e]));
            return l().compact(
                O.map((t) => {
                    var n;
                    let i = e.get(t.applicationId);
                    if (null == i) return null;
                    let r = null != (n = x[t.id]) ? n : null;
                    return {
                        command: t,
                        application: i,
                        section: r
                    };
                })
            );
        }, [A, O, x]),
        T = i.useMemo(() => {
            var e, i, r, l, o;
            let d = [];
            if (h) {
                let e = new Set(
                    A.map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                );
                d.push(...A),
                    d.push(
                        ...I.filter((t) => {
                            let {
                                application: { id: n }
                            } = t;
                            return !e.has(n);
                        }).map((e) => {
                            let { application: t } = e;
                            return t;
                        })
                    );
            } else s && (d = A);
            return (0, C.N)(d, {
                limit: a,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)('channel' === e.type ? e.channel : void 0, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
                        return (n) => {
                            let { context: i, userId: r, roleIds: l, isImpersonating: a } = t,
                                { descriptor: o, sectionCommands: s, isGuildInstalled: c, isUserInstalled: d } = (0, p.If)(e, n.id),
                                u = (null == i ? void 0 : i.guild_id) != null ? f.ML(null == o ? void 0 : o.permissions, i.guild_id, r, l, a) : null,
                                m = (null == i ? void 0 : i.guild_id) != null ? f.ZJ(null == o ? void 0 : o.permissions, i, i.guild_id) : null;
                            return (
                                null == s ||
                                !(s.length > 0) ||
                                s.some(
                                    (e) =>
                                        f.Ft(e, t, {
                                            applicationAllowedForUser: u,
                                            applicationAllowedForChannel: m,
                                            commandBotId: null == o ? void 0 : o.botId,
                                            isGuildInstalled: c,
                                            isUserInstalled: d
                                        }) === f.mF.ALLOWED
                                )
                            );
                        };
                    })(t)
                ],
                bucketPredicates: [
                    ((i = e = n), (e) => (0, y.$d)(e).toLocaleLowerCase().startsWith(i.toLocaleLowerCase())),
                    ((r = e), (e) => (0, y.$d)(e).toLocaleLowerCase().includes(r.toLocaleLowerCase())),
                    ((l = e),
                    (e) => {
                        var t, n;
                        let i = null == (t = (0, y.jD)(e)) ? void 0 : t.toLocaleLowerCase();
                        return null != (n = null == i ? void 0 : i.startsWith(l.toLocaleLowerCase())) && n;
                    }),
                    ((o = e),
                    (e) => {
                        var t, n;
                        let i = null == (t = (0, y.jD)(e)) ? void 0 : t.toLocaleLowerCase();
                        return null != (n = null == i ? void 0 : i.includes(o.toLocaleLowerCase())) && n;
                    })
                ],
                sortComparers: [j, P]
            });
        }, [s, h, a, t, n, A, I]),
        L = S.length > 0,
        w = T.length > 0;
    return {
        commandResults: S,
        hasCommandResults: L,
        applicationResults: T,
        hasApplicationResults: w,
        isEmptyState: !L && !w,
        loading: v && o
    };
}
function I(e) {
    let { context: t, query: n, fetches: r = !0, pageLimit: l = 1 / 0, entrypoint: c } = e;
    n.startsWith(''.concat(g.GI)) && (n = n.substring(1));
    let d = c === v._b.VOICE,
        u = 'channel' === t.type ? t.channel.guild_id : void 0,
        [p, m] = i.useState(1),
        f = i.useRef(p);
    f.current = p;
    let { fetchState: h, totalPages: C } = (0, s.cj)(
            [x.Z],
            () => {
                var e, t;
                return {
                    fetchState: x.Z.getFetchState({
                        query: n,
                        guildId: u,
                        page: p,
                        integrationType: a.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: d,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: o.F.APP_LAUNCHER
                    }),
                    totalPages:
                        null !=
                        (t =
                            null ==
                            (e = x.Z.getSearchResults({
                                query: n,
                                guildId: u,
                                page: p,
                                integrationType: a.Y.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: d,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: o.F.APP_LAUNCHER
                            }))
                                ? void 0
                                : e.totalPages)
                            ? t
                            : 0
                };
            },
            [n, u, p, d]
        ),
        _ = i.useMemo(
            () =>
                Array.from({ length: h === x.M.FETCHED || h === x.M.ERROR ? p : p - 1 }, (e, t) => {
                    var i, r;
                    return null !=
                        (r =
                            null ==
                            (i = x.Z.getSearchResults({
                                query: n,
                                guildId: u,
                                page: t + 1,
                                integrationType: a.Y.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: d,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: o.F.APP_LAUNCHER
                            }))
                                ? void 0
                                : i.results)
                        ? r
                        : [];
                }),
            [h, u, n, p, d]
        ),
        y = i.useCallback(() => {
            let e = _.length;
            h === x.M.FETCHED && e === f.current && e > 0 && e < C && e < l && _[e - 1].length > 0 && (f.current++, m((e) => e + 1));
        }, [h, l, _, C]),
        N = i.useCallback(
            (e) => {
                let { query: t, page: n, guildId: i } = e;
                b.yC({
                    query: t,
                    guildId: i,
                    options: {
                        page: n,
                        integrationType: a.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: d,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: o.F.APP_LAUNCHER
                    }
                });
            },
            [d]
        );
    return (
        i.useEffect(() => {
            r &&
                N({
                    query: n,
                    page: p,
                    guildId: u
                });
        }, [n, u, N, p, r]),
        i.useEffect(() => {
            m(1);
        }, [u, n]),
        {
            fetchState: h,
            applicationResults: _.flat(),
            fetchNextPage: y
        }
    );
}
