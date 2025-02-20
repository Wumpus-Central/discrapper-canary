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
    l = n(392711),
    r = n.n(l),
    o = n(373793),
    a = n(288385),
    s = n(442837),
    c = n(911969),
    u = n(127255),
    d = n(654455),
    m = n(213459),
    p = n(807169),
    h = n(104793),
    f = n(674588),
    v = n(809547),
    N = n(822245),
    x = n(631827),
    y = n(827498),
    b = n(783097),
    E = n(689079),
    C = n(665692);
function j(e, t) {
    let n = N.Z.getScoreWithoutLoadingLatest(e.id);
    return N.Z.getScoreWithoutLoadingLatest(t.id) - n;
}
function g(e, t) {
    let n = (0, b.$d)(e),
        i = (0, b.$d)(t);
    return (0, m.un)(n, i);
}
function P(e, t) {
    return (0, m.un)(e.displayName, t.displayName);
}
function A(e) {
    let { context: t, query: n, commandLimit: l, applicationLimit: o, searchesCommands: a = !0, searchesBots: s = !0, searchesActivities: f = !0 } = e;
    n.startsWith(''.concat(C.GI)) && (n = n.substring(1));
    let {
            commands: v,
            commandSectionMap: N,
            loading: y
        } = (function (e) {
            var t, n;
            let { context: l, includeBuiltIn: r = !0, allowFetch: o = !0 } = e,
                a = (0, m.em)(l, !0, o),
                s = (0, m.PL)(!0, o);
            return i.useMemo(() => {
                var e, t, n, i, o;
                let c = null !== (n = null === (e = a.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {},
                    u = null !== (i = null === (t = s.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {},
                    d = [...Object.keys(c), ...Object.keys(u).filter((e) => !(e in c))];
                r && d.push(E.bi.BUILT_IN);
                let p = [],
                    h = {};
                for (let e of d) {
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
                    loading: !0 === a.fetchState.fetching || !0 === s.fetchState.fetching
                };
            }, [l, r, a.fetchState.fetching, null === (t = a.result) || void 0 === t ? void 0 : t.sections, s.fetchState.fetching, null === (n = s.result) || void 0 === n ? void 0 : n.sections]);
        })({
            context: t,
            includeBuiltIn: !0
        }),
        { apps: A } = (function (e) {
            let { context: t, onlyWithCommands: n, includeBuiltIn: l, allowFetch: r = !0, includeEmbeddedApps: o, includeNonEmbeddedApps: a } = e,
                s = 'channel' === t.type ? t.channel : void 0,
                u = (0, p.Hs)(s, [c.yU.CHAT]).hasBaseAccessPermissions,
                d = (0, m.em)(t, u, r),
                h = (0, m.PL)(u, r),
                f = i.useCallback(
                    (e) => {
                        let t = e.descriptor.application;
                        return null != t && (!!(o && (0, b.ye)(t)) || (null != t && a && !(0, b.ye)(t) && (!n || Object.keys(e.commands).length > 0)));
                    },
                    [o, a, n]
                ),
                v = [],
                N = new Set();
            if (null != d.result)
                for (let e of Object.values(d.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && f(e) && (v.push(t), N.add(t.id));
                }
            if (null != h.result)
                for (let e of Object.values(h.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && !N.has(t.id) && f(e) && v.push(t);
                }
            return (
                a && l && v.push(b.Wx),
                {
                    apps: v,
                    loading: (null == d ? void 0 : d.fetchState.fetching) === !0 || (null == h ? void 0 : h.fetchState.fetching) === !0
                }
            );
        })({
            context: t,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: f,
            includeNonEmbeddedApps: s
        }),
        O = (0, u.Z)({ guildId: 'channel' === t.type ? t.channel.guild_id : null }),
        I = i.useMemo(() => {
            var e, i, r, o, s, u;
            if (!a) return [];
            return (0, x.N)(v, {
                limit: l,
                filterPredicates: [
                    (function (e) {
                        let t = (0, p.k)('channel' === e.type ? e.channel : void 0, [c.yU.CHAT]),
                            n = {};
                        return (i) => {
                            let { context: l, userId: r, roleIds: o, isImpersonating: a } = t;
                            if (!(i.applicationId in n)) {
                                let { descriptor: t, isGuildInstalled: s, isUserInstalled: c } = (0, m.If)(e, i.applicationId),
                                    u = (null == l ? void 0 : l.guild_id) != null ? h.ML(null == t ? void 0 : t.permissions, l.guild_id, r, o, a) : null,
                                    d = (null == l ? void 0 : l.guild_id) != null ? h.ZJ(null == t ? void 0 : t.permissions, l, l.guild_id) : null;
                                n[i.applicationId] = {
                                    descriptor: t,
                                    applicationAllowedForUser: u,
                                    applicationAllowedForChannel: d,
                                    isGuildInstalled: s,
                                    isUserInstalled: c
                                };
                            }
                            let { descriptor: s, applicationAllowedForChannel: c, applicationAllowedForUser: u, isGuildInstalled: d, isUserInstalled: p } = n[i.applicationId];
                            return (
                                h.Ft(i, t, {
                                    applicationAllowedForUser: u,
                                    applicationAllowedForChannel: c,
                                    commandBotId: null == s ? void 0 : s.botId,
                                    isGuildInstalled: d,
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
                    ((r = e),
                    (e) => {
                        let t = e.untranslatedName,
                            n = e.displayName;
                        return t.includes(r) || n.includes(r);
                    }),
                    ((o = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: i } of null !== (t = e.options) && void 0 !== t ? t : []) if (n.startsWith(o) || ''.concat(e.untranslatedName, ' ').concat(n).startsWith(o) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(n).startsWith(o)) || (null != i && (i.startsWith(o) || ''.concat(e.untranslatedName, ' ').concat(i).startsWith(o) || (null != e.displayName && ''.concat(e.displayName, ' ').concat(i).startsWith(o))))) return !0;
                        return !1;
                    }),
                    ((s = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: i } of null !== (t = e.options) && void 0 !== t ? t : []) if (n.includes(s) || (null == i ? void 0 : i.includes(s))) return !0;
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
        }, [a, v, l, t, n]),
        _ = i.useMemo(() => {
            if (0 === I.length) return [];
            let e = new Map(A.map((e) => [e.id, e]));
            return r().compact(
                I.map((t) => {
                    var n;
                    let i = e.get(t.applicationId);
                    if (null == i) return null;
                    let l = null !== (n = N[t.id]) && void 0 !== n ? n : null;
                    return {
                        command: t,
                        application: i,
                        section: l
                    };
                })
            );
        }, [A, I, N]),
        S = i.useMemo(() => {
            var e, i, l, r, a;
            let u = [];
            if (f) {
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
            } else s && (u = A);
            return (0, x.N)(u, {
                limit: o,
                filterPredicates: [
                    (function (e) {
                        let t = (0, p.k)('channel' === e.type ? e.channel : void 0, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
                        return (n) => {
                            let { context: i, userId: l, roleIds: r, isImpersonating: o } = t,
                                { descriptor: a, sectionCommands: s, isGuildInstalled: c, isUserInstalled: u } = (0, m.If)(e, n.id),
                                d = (null == i ? void 0 : i.guild_id) != null ? h.ML(null == a ? void 0 : a.permissions, i.guild_id, l, r, o) : null,
                                p = (null == i ? void 0 : i.guild_id) != null ? h.ZJ(null == a ? void 0 : a.permissions, i, i.guild_id) : null;
                            return (
                                null == s ||
                                !(s.length > 0) ||
                                s.some(
                                    (e) =>
                                        h.Ft(e, t, {
                                            applicationAllowedForUser: d,
                                            applicationAllowedForChannel: p,
                                            commandBotId: null == a ? void 0 : a.botId,
                                            isGuildInstalled: c,
                                            isUserInstalled: u
                                        }) === h.mF.ALLOWED
                                )
                            );
                        };
                    })(t)
                ],
                bucketPredicates: [
                    ((i = e = n), (e) => (0, b.$d)(e).toLocaleLowerCase().startsWith(i.toLocaleLowerCase())),
                    ((l = e), (e) => (0, b.$d)(e).toLocaleLowerCase().includes(l.toLocaleLowerCase())),
                    ((r = e),
                    (e) => {
                        var t, n;
                        let i = null === (t = (0, b.jD)(e)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
                        return null !== (n = null == i ? void 0 : i.startsWith(r.toLocaleLowerCase())) && void 0 !== n && n;
                    }),
                    ((a = e),
                    (e) => {
                        var t, n;
                        let i = null === (t = (0, b.jD)(e)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
                        return null !== (n = null == i ? void 0 : i.includes(a.toLocaleLowerCase())) && void 0 !== n && n;
                    })
                ],
                sortComparers: [j, g]
            });
        }, [s, f, o, t, n, A, O]),
        T = _.length > 0,
        L = S.length > 0;
    return {
        commandResults: _,
        hasCommandResults: T,
        applicationResults: S,
        hasApplicationResults: L,
        isEmptyState: !T && !L,
        loading: y && a
    };
}
function O(e) {
    let { context: t, query: n, fetches: l = !0, pageLimit: r = 1 / 0, entrypoint: c } = e;
    n.startsWith(''.concat(C.GI)) && (n = n.substring(1));
    let u = c === y._b.VOICE,
        d = 'channel' === t.type ? t.channel.guild_id : void 0,
        [m, p] = i.useState(1),
        h = i.useRef(m);
    h.current = m;
    let { fetchState: N, totalPages: x } = (0, s.cj)(
            [v.Z],
            () => {
                var e, t;
                return {
                    fetchState: v.Z.getFetchState({
                        query: n,
                        guildId: d,
                        page: m,
                        integrationType: o.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: u,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: a.F.APP_LAUNCHER
                    }),
                    totalPages:
                        null !==
                            (t =
                                null ===
                                    (e = v.Z.getSearchResults({
                                        query: n,
                                        guildId: d,
                                        page: m,
                                        integrationType: o.Y.USER_INSTALL,
                                        minUserInstallCommandCount: 1,
                                        excludeAppsWithCustomInstallUrl: !0,
                                        excludeNonEmbeddedApps: u,
                                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                        source: a.F.APP_LAUNCHER
                                    })) || void 0 === e
                                    ? void 0
                                    : e.totalPages) && void 0 !== t
                            ? t
                            : 0
                };
            },
            [n, d, m, u]
        ),
        b = i.useMemo(
            () =>
                Array.from({ length: N === v.M.FETCHED || N === v.M.ERROR ? m : m - 1 }, (e, t) => {
                    var i, l;
                    return null !==
                        (l =
                            null ===
                                (i = v.Z.getSearchResults({
                                    query: n,
                                    guildId: d,
                                    page: t + 1,
                                    integrationType: o.Y.USER_INSTALL,
                                    minUserInstallCommandCount: 1,
                                    excludeAppsWithCustomInstallUrl: !0,
                                    excludeNonEmbeddedApps: u,
                                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                    source: a.F.APP_LAUNCHER
                                })) || void 0 === i
                                ? void 0
                                : i.results) && void 0 !== l
                        ? l
                        : [];
                }),
            [N, d, n, m, u]
        ),
        E = i.useCallback(() => {
            let e = b.length;
            N === v.M.FETCHED && e === h.current && e > 0 && e < x && e < r && b[e - 1].length > 0 && (h.current++, p((e) => e + 1));
        }, [N, r, b, x]),
        j = i.useCallback(
            (e) => {
                let { query: t, page: n, guildId: i } = e;
                f.yC({
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
            l &&
                j({
                    query: n,
                    page: m,
                    guildId: d
                });
        }, [n, d, j, m, l]),
        i.useEffect(() => {
            p(1);
        }, [d, n]),
        {
            fetchState: N,
            applicationResults: b.flat(),
            fetchNextPage: E
        }
    );
}
