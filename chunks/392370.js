n.d(t, {
    Q2: () => O,
    pe: () => A
}),
    n(47120),
    n(653041),
    n(301563),
    n(86693),
    n(536091);
var i = n(192379),
    r = n(392711),
    l = n.n(r),
    a = n(373793),
    o = n(288385),
    c = n(442837),
    s = n(911969),
    u = n(127255),
    d = n(654455),
    p = n(213459),
    m = n(807169),
    f = n(104793),
    h = n(822245),
    b = n(471518),
    C = n(177653),
    _ = n(631827),
    x = n(424602),
    v = n(827498),
    y = n(783097),
    N = n(689079),
    g = n(665692);
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
    let { context: t, query: n, commandLimit: r, applicationLimit: a, searchesCommands: o = !0, searchesBots: c = !0, searchesActivities: h = !0 } = e;
    n.startsWith(''.concat(g.GI)) && (n = n.substring(1));
    let {
            commands: b,
            commandSectionMap: C,
            loading: v
        } = (function (e) {
            var t, n;
            let { context: r, includeBuiltIn: l = !0, allowFetch: a = !0 } = e,
                o = (0, p.em)(r, !0, a),
                c = (0, p.PL)(!0, a);
            return i.useMemo(() => {
                var e, t, n, i, a;
                let s = null != (n = null == (e = o.result) ? void 0 : e.sections) ? n : {},
                    u = null != (i = null == (t = c.result) ? void 0 : t.sections) ? i : {},
                    d = [...Object.keys(s), ...Object.keys(u).filter((e) => !(e in s))];
                l && d.push(N.bi.BUILT_IN);
                let m = 'channel' in r && (0, x.aZ)(r.channel, 'AppLauncherSearchUtils.useApplicationCommandsInContext()'),
                    f = [],
                    h = {};
                for (let e of d) {
                    let t = (0, p.If)(r, e),
                        n = null != (a = t.sectionCommands) ? a : [];
                    f.push(...n),
                        n.forEach((e) => {
                            null != t.descriptor && (h[e.id] = t.descriptor);
                        });
                }
                return {
                    commands: f.filter((e) => !m || e.applicationId !== x.gu),
                    commandSectionMap: h,
                    loading: !0 === o.fetchState.fetching || !0 === c.fetchState.fetching
                };
            }, [r, l, o.fetchState.fetching, null == (t = o.result) ? void 0 : t.sections, c.fetchState.fetching, null == (n = c.result) ? void 0 : n.sections]);
        })({
            context: t,
            includeBuiltIn: !0
        }),
        { apps: A } = (function (e) {
            let { context: t, onlyWithCommands: n, includeBuiltIn: r, allowFetch: l = !0, includeEmbeddedApps: a, includeNonEmbeddedApps: o } = e,
                c = 'channel' === t.type ? t.channel : void 0,
                u = (0, m.Hs)(c, [s.yU.CHAT]).hasBaseAccessPermissions,
                d = (0, p.em)(t, u, l),
                f = (0, p.PL)(u, l),
                h = i.useCallback(
                    (e) => {
                        let t = e.descriptor.application;
                        return null != t && (!!(a && (0, y.ye)(t)) || (null != t && o && !(0, y.ye)(t) && (!n || Object.keys(e.commands).length > 0)));
                    },
                    [a, o, n]
                ),
                b = [],
                C = new Set();
            if (null != d.result)
                for (let e of Object.values(d.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && h(e) && (b.push(t), C.add(t.id));
                }
            if (null != f.result)
                for (let e of Object.values(f.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && !C.has(t.id) && h(e) && b.push(t);
                }
            o && r && b.push(y.Wx);
            let _ = 'channel' in t && (0, x.aZ)(t.channel, 'AppLauncherSearchUtils.useApplicationsInContext()');
            return {
                apps: b.filter((e) => !_ || e.id !== x.gu),
                loading: (null == d ? void 0 : d.fetchState.fetching) === !0 || (null == f ? void 0 : f.fetchState.fetching) === !0
            };
        })({
            context: t,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: h,
            includeNonEmbeddedApps: c
        }),
        O = (0, u.Z)({
            guildId: 'channel' === t.type ? t.channel.guild_id : null,
            context: t
        }),
        I = i.useMemo(() => {
            var e, i, l, a, c, u;
            if (!o) return [];
            return (0, _.N)(b, {
                limit: r,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)('channel' === e.type ? e.channel : void 0, [s.yU.CHAT]),
                            n = {};
                        return (i) => {
                            let { context: r, userId: l, roleIds: a, isImpersonating: o } = t;
                            if (!(i.applicationId in n)) {
                                let { descriptor: t, isGuildInstalled: c, isUserInstalled: s } = (0, p.If)(e, i.applicationId),
                                    u = (null == r ? void 0 : r.guild_id) != null ? f.ML(null == t ? void 0 : t.permissions, r.guild_id, l, a, o) : null,
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
                    ((a = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: i } of null != (t = e.options) ? t : []) if (n.startsWith(a) || ''.concat(e.untranslatedName, ' ').concat(n).startsWith(a) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(n).startsWith(a)) || (null != i && (i.startsWith(a) || ''.concat(e.untranslatedName, ' ').concat(i).startsWith(a) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(i).startsWith(a))))) return !0;
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
                    E
                ]
            });
        }, [o, b, r, t, n]),
        S = i.useMemo(() => {
            if (0 === I.length) return [];
            let e = new Map(A.map((e) => [e.id, e]));
            return l().compact(
                I.map((t) => {
                    var n;
                    let i = e.get(t.applicationId);
                    if (null == i) return null;
                    let r = null != (n = C[t.id]) ? n : null;
                    return {
                        command: t,
                        application: i,
                        section: r
                    };
                })
            );
        }, [A, I, C]),
        T = i.useMemo(() => {
            var e, i, r, l, o;
            let u = [];
            if (h) {
                let e = new Set(
                    A.map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                );
                u.push(...A),
                    u.push(
                        ...O.filter((t) => {
                            let {
                                application: { id: n }
                            } = t;
                            return !e.has(n);
                        }).map((e) => {
                            let { application: t } = e;
                            return t;
                        })
                    );
            } else c && (u = A);
            return (0, _.N)(u, {
                limit: a,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)('channel' === e.type ? e.channel : void 0, [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT]);
                        return (n) => {
                            let { context: i, userId: r, roleIds: l, isImpersonating: a } = t,
                                { descriptor: o, sectionCommands: c, isGuildInstalled: s, isUserInstalled: u } = (0, p.If)(e, n.id),
                                d = (null == i ? void 0 : i.guild_id) != null ? f.ML(null == o ? void 0 : o.permissions, i.guild_id, r, l, a) : null,
                                m = (null == i ? void 0 : i.guild_id) != null ? f.ZJ(null == o ? void 0 : o.permissions, i, i.guild_id) : null;
                            return (
                                null == c ||
                                !(c.length > 0) ||
                                c.some(
                                    (e) =>
                                        f.Ft(e, t, {
                                            applicationAllowedForUser: d,
                                            applicationAllowedForChannel: m,
                                            commandBotId: null == o ? void 0 : o.botId,
                                            isGuildInstalled: s,
                                            isUserInstalled: u
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
        }, [c, h, a, t, n, A, O]),
        L = S.length > 0,
        R = T.length > 0;
    return {
        commandResults: S,
        hasCommandResults: L,
        applicationResults: T,
        hasApplicationResults: R,
        isEmptyState: !L && !R,
        loading: v && o
    };
}
function O(e) {
    let { context: t, query: n, fetches: r = !0, pageLimit: l = 1 / 0, entrypoint: s } = e;
    n.startsWith(''.concat(g.GI)) && (n = n.substring(1));
    let u = s === v._b.VOICE,
        d = 'channel' === t.type ? t.channel.guild_id : void 0,
        [p, m] = i.useState(1),
        f = i.useRef(p);
    f.current = p;
    let { fetchState: h, totalPages: _ } = (0, c.cj)(
            [C.Z],
            () => {
                var e, t;
                return {
                    fetchState: C.Z.getFetchState({
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
                            (e = C.Z.getSearchResults({
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
        x = i.useMemo(
            () =>
                Array.from({ length: h === C.M.FETCHED || h === C.M.ERROR ? p : p - 1 }, (e, t) => {
                    var i, r;
                    return null !=
                        (r =
                            null ==
                            (i = C.Z.getSearchResults({
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
                                : i.results)
                        ? r
                        : [];
                }),
            [h, d, n, p, u]
        ),
        y = i.useCallback(() => {
            let e = x.length;
            h === C.M.FETCHED && e === f.current && e > 0 && e < _ && e < l && x[e - 1].length > 0 && (f.current++, m((e) => e + 1));
        }, [h, l, x, _]),
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
                        excludeNonEmbeddedApps: u,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: o.F.APP_LAUNCHER
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
