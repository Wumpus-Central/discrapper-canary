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
    s = n(442837),
    c = n(911969),
    u = n(127255),
    d = n(654455),
    p = n(213459),
    m = n(807169),
    f = n(104793),
    h = n(822245),
    b = n(471518),
    _ = n(177653),
    y = n(631827),
    v = n(424602),
    x = n(827498),
    C = n(783097),
    g = n(689079),
    j = n(761652);
function P(e, t) {
    let n = h.Z.getScoreWithoutLoadingLatest(e.id);
    return h.Z.getScoreWithoutLoadingLatest(t.id) - n;
}
function N(e, t) {
    let n = (0, C.$d)(e),
        i = (0, C.$d)(t);
    return (0, p.un)(n, i);
}
function O(e, t) {
    return (0, p.un)(e.displayName, t.displayName);
}
function E(e) {
    let { context: t, query: n, commandLimit: r, applicationLimit: o, searchesCommands: a = !0, searchesBots: s = !0, searchesActivities: h = !0 } = e;
    n.startsWith(''.concat(j.GI)) && (n = n.substring(1));
    let {
            commands: b,
            commandSectionMap: _,
            loading: x
        } = (function (e) {
            var t, n;
            let { context: r, includeBuiltIn: l = !0, allowFetch: o = !0 } = e,
                a = (0, p.em)(r, !0, o),
                s = (0, p.PL)(!0, o);
            return i.useMemo(() => {
                var e, t, n, i, o;
                let c = null != (n = null == (e = a.result) ? void 0 : e.sections) ? n : {},
                    u = null != (i = null == (t = s.result) ? void 0 : t.sections) ? i : {},
                    d = [...Object.keys(c), ...Object.keys(u).filter((e) => !(e in c))];
                l && d.push(g.bi.BUILT_IN);
                let m = 'channel' in r && (0, v.aZ)(r.channel, 'AppLauncherSearchUtils.useApplicationCommandsInContext()'),
                    f = [],
                    h = {};
                for (let e of d) {
                    let t = (0, p.If)(r, e),
                        n = null != (o = t.sectionCommands) ? o : [];
                    f.push(...n),
                        n.forEach((e) => {
                            null != t.descriptor && (h[e.id] = t.descriptor);
                        });
                }
                return {
                    commands: f.filter((e) => !m || e.applicationId !== v.gu),
                    commandSectionMap: h,
                    loading: !0 === a.fetchState.fetching || !0 === s.fetchState.fetching
                };
            }, [r, l, a.fetchState.fetching, null == (t = a.result) ? void 0 : t.sections, s.fetchState.fetching, null == (n = s.result) ? void 0 : n.sections]);
        })({
            context: t,
            includeBuiltIn: !0
        }),
        { apps: E } = (function (e) {
            let { context: t, onlyWithCommands: n, includeBuiltIn: r, allowFetch: l = !0, includeEmbeddedApps: o, includeNonEmbeddedApps: a } = e,
                s = 'channel' === t.type ? t.channel : void 0,
                u = (0, m.Hs)(s, [c.yU.CHAT]).hasBaseAccessPermissions,
                d = (0, p.em)(t, u, l),
                f = (0, p.PL)(u, l),
                h = i.useCallback(
                    (e) => {
                        let t = e.descriptor.application;
                        return null != t && (!!(o && (0, C.ye)(t)) || (null != t && a && !(0, C.ye)(t) && (!n || Object.keys(e.commands).length > 0)));
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
            a && r && b.push(C.Wx);
            let y = 'channel' in t && (0, v.aZ)(t.channel, 'AppLauncherSearchUtils.useApplicationsInContext()');
            return {
                apps: b.filter((e) => !y || e.id !== v.gu),
                loading: (null == d ? void 0 : d.fetchState.fetching) === !0 || (null == f ? void 0 : f.fetchState.fetching) === !0
            };
        })({
            context: t,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: h,
            includeNonEmbeddedApps: s
        }),
        A = (0, u.Z)({
            guildId: 'channel' === t.type ? t.channel.guild_id : null,
            context: t
        }),
        I = i.useMemo(() => {
            var e, i, l, o, s, u;
            if (!a) return [];
            return (0, y.N)(b, {
                limit: r,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)('channel' === e.type ? e.channel : void 0, [c.yU.CHAT]),
                            n = {};
                        return (i) => {
                            let { context: r, userId: l, roleIds: o, isImpersonating: a } = t;
                            if (!(i.applicationId in n)) {
                                let { descriptor: t, isGuildInstalled: s, isUserInstalled: c } = (0, p.If)(e, i.applicationId),
                                    u = (null == r ? void 0 : r.guild_id) != null ? f.ML(null == t ? void 0 : t.permissions, r.guild_id, l, o, a) : null,
                                    d = (null == r ? void 0 : r.guild_id) != null ? f.ZJ(null == t ? void 0 : t.permissions, r, r.guild_id) : null;
                                n[i.applicationId] = {
                                    descriptor: t,
                                    applicationAllowedForUser: u,
                                    applicationAllowedForChannel: d,
                                    isGuildInstalled: s,
                                    isUserInstalled: c
                                };
                            }
                            let { descriptor: s, applicationAllowedForChannel: c, applicationAllowedForUser: u, isGuildInstalled: d, isUserInstalled: m } = n[i.applicationId];
                            return (
                                f.Ft(i, t, {
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
                    ((s = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: i } of null != (t = e.options) ? t : []) if (n.includes(s) || (null == i ? void 0 : i.includes(s))) return !0;
                        return !1;
                    })
                ],
                sortComparers: [
                    ((u = { channel: 'channel' === t.type ? t.channel : void 0 }),
                    (e, t) => {
                        let n = d.ZP.getScoreWithoutLoadingLatest(u, e);
                        return d.ZP.getScoreWithoutLoadingLatest(u, t) - n;
                    }),
                    O
                ]
            });
        }, [a, b, r, t, n]),
        S = i.useMemo(() => {
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
        T = i.useMemo(() => {
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
            } else s && (u = E);
            return (0, y.N)(u, {
                limit: o,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)('channel' === e.type ? e.channel : void 0, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
                        return (n) => {
                            let { context: i, userId: r, roleIds: l, isImpersonating: o } = t,
                                { descriptor: a, sectionCommands: s, isGuildInstalled: c, isUserInstalled: u } = (0, p.If)(e, n.id),
                                d = (null == i ? void 0 : i.guild_id) != null ? f.ML(null == a ? void 0 : a.permissions, i.guild_id, r, l, o) : null,
                                m = (null == i ? void 0 : i.guild_id) != null ? f.ZJ(null == a ? void 0 : a.permissions, i, i.guild_id) : null;
                            return (
                                null == s ||
                                !(s.length > 0) ||
                                s.some(
                                    (e) =>
                                        f.Ft(e, t, {
                                            applicationAllowedForUser: d,
                                            applicationAllowedForChannel: m,
                                            commandBotId: null == a ? void 0 : a.botId,
                                            isGuildInstalled: c,
                                            isUserInstalled: u
                                        }) === f.mF.ALLOWED
                                )
                            );
                        };
                    })(t)
                ],
                bucketPredicates: [
                    ((i = e = n), (e) => (0, C.$d)(e).toLocaleLowerCase().startsWith(i.toLocaleLowerCase())),
                    ((r = e), (e) => (0, C.$d)(e).toLocaleLowerCase().includes(r.toLocaleLowerCase())),
                    ((l = e),
                    (e) => {
                        var t, n;
                        let i = null == (t = (0, C.jD)(e)) ? void 0 : t.toLocaleLowerCase();
                        return null != (n = null == i ? void 0 : i.startsWith(l.toLocaleLowerCase())) && n;
                    }),
                    ((a = e),
                    (e) => {
                        var t, n;
                        let i = null == (t = (0, C.jD)(e)) ? void 0 : t.toLocaleLowerCase();
                        return null != (n = null == i ? void 0 : i.includes(a.toLocaleLowerCase())) && n;
                    })
                ],
                sortComparers: [P, N]
            });
        }, [s, h, o, t, n, E, A]),
        w = S.length > 0,
        L = T.length > 0;
    return {
        commandResults: S,
        hasCommandResults: w,
        applicationResults: T,
        hasApplicationResults: L,
        isEmptyState: !w && !L,
        loading: x && a
    };
}
function A(e) {
    let { context: t, query: n, fetches: r = !0, pageLimit: l = 1 / 0, entrypoint: c } = e;
    n.startsWith(''.concat(j.GI)) && (n = n.substring(1));
    let u = c === x._b.VOICE,
        d = 'channel' === t.type ? t.channel.guild_id : void 0,
        [p, m] = i.useState(1),
        f = i.useRef(p);
    f.current = p;
    let { fetchState: h, totalPages: y } = (0, s.cj)(
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
        v = i.useMemo(
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
        C = i.useCallback(() => {
            let e = v.length;
            h === _.M.FETCHED && e === f.current && e > 0 && e < y && e < l && v[e - 1].length > 0 && (f.current++, m((e) => e + 1));
        }, [h, l, v, y]),
        g = i.useCallback(
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
                g({
                    query: n,
                    page: p,
                    guildId: d
                });
        }, [n, d, g, p, r]),
        i.useEffect(() => {
            m(1);
        }, [d, n]),
        {
            fetchState: h,
            applicationResults: v.flat(),
            fetchNextPage: C
        }
    );
}
