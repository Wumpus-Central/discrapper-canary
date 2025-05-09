n.d(t, {
    Q2: () => A,
    pe: () => E
}),
    n(388685),
    n(539854),
    n(35282),
    n(472816),
    n(794429);
var i = n(73800),
    r = n(392711),
    l = n.n(r),
    o = n(373793),
    a = n(288385),
    c = n(442837),
    s = n(911969),
    u = n(127255),
    d = n(654455),
    p = n(213459),
    m = n(807169),
    f = n(104793),
    h = n(822245),
    b = n(471518),
    _ = n(177653),
    C = n(631827),
    v = n(827498),
    x = n(783097),
    y = n(689079),
    g = n(761652);
function N(e, t) {
    let n = h.Z.getScoreWithoutLoadingLatest(e.id);
    return h.Z.getScoreWithoutLoadingLatest(t.id) - n;
}
function j(e, t) {
    let n = (0, x.$d)(e),
        i = (0, x.$d)(t);
    return (0, p.un)(n, i);
}
function P(e, t) {
    return (0, p.un)(e.displayName, t.displayName);
}
function E(e) {
    let { context: t, query: n, commandLimit: r, applicationLimit: o, searchesCommands: a = !0, searchesBots: c = !0, searchesActivities: h = !0 } = e;
    n.startsWith(''.concat(g.GI)) && (n = n.substring(1));
    let {
            commands: b,
            commandSectionMap: _,
            loading: v
        } = (function (e) {
            var t, n;
            let { context: r, includeBuiltIn: l = !0, allowFetch: o = !0 } = e,
                a = (0, p.em)(r, !0, o),
                c = (0, p.PL)(!0, o);
            return i.useMemo(() => {
                var e, t, n, i, o;
                let s = null != (n = null == (e = a.result) ? void 0 : e.sections) ? n : {},
                    u = null != (i = null == (t = c.result) ? void 0 : t.sections) ? i : {},
                    d = [...Object.keys(s), ...Object.keys(u).filter((e) => !(e in s))];
                l && d.push(y.bi.BUILT_IN);
                let m = [],
                    f = {};
                for (let e of d) {
                    let t = (0, p.If)(r, e),
                        n = null != (o = t.sectionCommands) ? o : [];
                    m.push(...n),
                        n.forEach((e) => {
                            null != t.descriptor && (f[e.id] = t.descriptor);
                        });
                }
                return {
                    commands: m,
                    commandSectionMap: f,
                    loading: !0 === a.fetchState.fetching || !0 === c.fetchState.fetching
                };
            }, [r, l, a.fetchState.fetching, null == (t = a.result) ? void 0 : t.sections, c.fetchState.fetching, null == (n = c.result) ? void 0 : n.sections]);
        })({
            context: t,
            includeBuiltIn: !0
        }),
        { apps: E } = (function (e) {
            let { context: t, onlyWithCommands: n, includeBuiltIn: r, allowFetch: l = !0, includeEmbeddedApps: o, includeNonEmbeddedApps: a } = e,
                c = 'channel' === t.type ? t.channel : void 0,
                u = (0, m.Hs)(c, [s.yU.CHAT]).hasBaseAccessPermissions,
                d = (0, p.em)(t, u, l),
                f = (0, p.PL)(u, l),
                h = i.useCallback(
                    (e) => {
                        let t = e.descriptor.application;
                        return null != t && (!!(o && (0, x.ye)(t)) || (null != t && a && !(0, x.ye)(t) && (!n || Object.keys(e.commands).length > 0)));
                    },
                    [o, a, n]
                ),
                b = [],
                _ = new Set();
            if (null != d.result)
                for (let e of Object.values(d.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && h(e) && (b.push(t), _.add(t.id));
                }
            if (null != f.result)
                for (let e of Object.values(f.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && !_.has(t.id) && h(e) && b.push(t);
                }
            return (
                a && r && b.push(x.Wx),
                {
                    apps: b,
                    loading: (null == d ? void 0 : d.fetchState.fetching) === !0 || (null == f ? void 0 : f.fetchState.fetching) === !0
                }
            );
        })({
            context: t,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: h,
            includeNonEmbeddedApps: c
        }),
        A = (0, u.Z)({ guildId: 'channel' === t.type ? t.channel.guild_id : null }),
        I = i.useMemo(() => {
            var e, i, l, o, c, u;
            if (!a) return [];
            return (0, C.N)(b, {
                limit: r,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)('channel' === e.type ? e.channel : void 0, [s.yU.CHAT]),
                            n = {};
                        return (i) => {
                            let { context: r, userId: l, roleIds: o, isImpersonating: a } = t;
                            if (!(i.applicationId in n)) {
                                let { descriptor: t, isGuildInstalled: c, isUserInstalled: s } = (0, p.If)(e, i.applicationId),
                                    u = (null == r ? void 0 : r.guild_id) != null ? f.ML(null == t ? void 0 : t.permissions, r.guild_id, l, o, a) : null,
                                    d = (null == r ? void 0 : r.guild_id) != null ? f.ZJ(null == t ? void 0 : t.permissions, r, r.guild_id) : null;
                                n[i.applicationId] = {
                                    descriptor: t,
                                    applicationAllowedForUser: u,
                                    applicationAllowedForChannel: d,
                                    isGuildInstalled: c,
                                    isUserInstalled: s
                                };
                            }
                            let { descriptor: c, applicationAllowedForChannel: s, applicationAllowedForUser: u, isGuildInstalled: d, isUserInstalled: m } = n[i.applicationId];
                            return (
                                f.Ft(i, t, {
                                    applicationAllowedForUser: u,
                                    applicationAllowedForChannel: s,
                                    commandBotId: null == c ? void 0 : c.botId,
                                    isGuildInstalled: d,
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
                    ((o = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: i } of null != (t = e.options) ? t : []) if (n.startsWith(o) || ''.concat(e.untranslatedName, ' ').concat(n).startsWith(o) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(n).startsWith(o)) || (null != i && (i.startsWith(o) || ''.concat(e.untranslatedName, ' ').concat(i).startsWith(o) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(i).startsWith(o))))) return !0;
                        return !1;
                    }),
                    ((c = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: i } of null != (t = e.options) ? t : []) if (n.includes(c) || (null == i ? void 0 : i.includes(c))) return !0;
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
        }, [a, b, r, t, n]),
        O = i.useMemo(() => {
            if (0 === I.length) return [];
            let e = new Map(E.map((e) => [e.id, e]));
            return l().compact(
                I.map((t) => {
                    var n;
                    let i = e.get(t.applicationId);
                    if (null == i) return null;
                    let r = null != (n = _[t.id]) ? n : null;
                    return {
                        command: t,
                        application: i,
                        section: r
                    };
                })
            );
        }, [E, I, _]),
        S = i.useMemo(() => {
            var e, i, r, l, a;
            let u = [];
            if (h) {
                let e = new Set(
                    E.map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                );
                u.push(...E),
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
            } else c && (u = E);
            return (0, C.N)(u, {
                limit: o,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)('channel' === e.type ? e.channel : void 0, [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT]);
                        return (n) => {
                            let { context: i, userId: r, roleIds: l, isImpersonating: o } = t,
                                { descriptor: a, sectionCommands: c, isGuildInstalled: s, isUserInstalled: u } = (0, p.If)(e, n.id),
                                d = (null == i ? void 0 : i.guild_id) != null ? f.ML(null == a ? void 0 : a.permissions, i.guild_id, r, l, o) : null,
                                m = (null == i ? void 0 : i.guild_id) != null ? f.ZJ(null == a ? void 0 : a.permissions, i, i.guild_id) : null;
                            return (
                                null == c ||
                                !(c.length > 0) ||
                                c.some(
                                    (e) =>
                                        f.Ft(e, t, {
                                            applicationAllowedForUser: d,
                                            applicationAllowedForChannel: m,
                                            commandBotId: null == a ? void 0 : a.botId,
                                            isGuildInstalled: s,
                                            isUserInstalled: u
                                        }) === f.mF.ALLOWED
                                )
                            );
                        };
                    })(t)
                ],
                bucketPredicates: [
                    ((i = e = n), (e) => (0, x.$d)(e).toLocaleLowerCase().startsWith(i.toLocaleLowerCase())),
                    ((r = e), (e) => (0, x.$d)(e).toLocaleLowerCase().includes(r.toLocaleLowerCase())),
                    ((l = e),
                    (e) => {
                        var t, n;
                        let i = null == (t = (0, x.jD)(e)) ? void 0 : t.toLocaleLowerCase();
                        return null != (n = null == i ? void 0 : i.startsWith(l.toLocaleLowerCase())) && n;
                    }),
                    ((a = e),
                    (e) => {
                        var t, n;
                        let i = null == (t = (0, x.jD)(e)) ? void 0 : t.toLocaleLowerCase();
                        return null != (n = null == i ? void 0 : i.includes(a.toLocaleLowerCase())) && n;
                    })
                ],
                sortComparers: [N, j]
            });
        }, [c, h, o, t, n, E, A]),
        T = O.length > 0,
        L = S.length > 0;
    return {
        commandResults: O,
        hasCommandResults: T,
        applicationResults: S,
        hasApplicationResults: L,
        isEmptyState: !T && !L,
        loading: v && a
    };
}
function A(e) {
    let { context: t, query: n, fetches: r = !0, pageLimit: l = 1 / 0, entrypoint: s } = e;
    n.startsWith(''.concat(g.GI)) && (n = n.substring(1));
    let u = s === v._b.VOICE,
        d = 'channel' === t.type ? t.channel.guild_id : void 0,
        [p, m] = i.useState(1),
        f = i.useRef(p);
    f.current = p;
    let { fetchState: h, totalPages: C } = (0, c.cj)(
            [_.Z],
            () => {
                var e, t;
                return {
                    fetchState: _.Z.getFetchState({
                        query: n,
                        guildId: d,
                        page: p,
                        integrationType: o.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: u,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: a.F.APP_LAUNCHER
                    }),
                    totalPages:
                        null !=
                        (t =
                            null ==
                            (e = _.Z.getSearchResults({
                                query: n,
                                guildId: d,
                                page: p,
                                integrationType: o.Y.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: u,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: a.F.APP_LAUNCHER
                            }))
                                ? void 0
                                : e.totalPages)
                            ? t
                            : 0
                };
            },
            [n, d, p, u]
        ),
        x = i.useMemo(
            () =>
                Array.from({ length: h === _.M.FETCHED || h === _.M.ERROR ? p : p - 1 }, (e, t) => {
                    var i, r;
                    return null !=
                        (r =
                            null ==
                            (i = _.Z.getSearchResults({
                                query: n,
                                guildId: d,
                                page: t + 1,
                                integrationType: o.Y.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: u,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: a.F.APP_LAUNCHER
                            }))
                                ? void 0
                                : i.results)
                        ? r
                        : [];
                }),
            [h, d, n, p, u]
        ),
        y = i.useCallback(() => {
            let e = x.length;
            h === _.M.FETCHED && e === f.current && e > 0 && e < C && e < l && x[e - 1].length > 0 && (f.current++, m((e) => e + 1));
        }, [h, l, x, C]),
        N = i.useCallback(
            (e) => {
                let { query: t, page: n, guildId: i } = e;
                b.yC({
                    query: t,
                    guildId: i,
                    options: {
                        page: n,
                        integrationType: o.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: u,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: a.F.APP_LAUNCHER
                    }
                });
            },
            [u]
        );
    return (
        i.useEffect(() => {
            r &&
                N({
                    query: n,
                    page: p,
                    guildId: d
                });
        }, [n, d, N, p, r]),
        i.useEffect(() => {
            m(1);
        }, [d, n]),
        {
            fetchState: h,
            applicationResults: x.flat(),
            fetchNextPage: y
        }
    );
}
