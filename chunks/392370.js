t.d(n, {
    Q2: function () {
        return j;
    },
    pe: function () {
        return P;
    }
}),
    t(47120),
    t(653041),
    t(536091);
var i = t(192379),
    l = t(392711),
    a = t.n(l),
    o = t(373793),
    r = t(288385),
    s = t(442837),
    c = t(911969),
    d = t(127255),
    u = t(654455),
    m = t(213459),
    p = t(807169),
    h = t(104793),
    f = t(674588),
    C = t(809547),
    v = t(822245),
    x = t(631827),
    _ = t(827498),
    N = t(783097),
    g = t(689079),
    A = t(665692);
function E(e, n) {
    let t = v.Z.getScoreWithoutLoadingLatest(e.id);
    return v.Z.getScoreWithoutLoadingLatest(n.id) - t;
}
function b(e, n) {
    let t = (0, N.$d)(e),
        i = (0, N.$d)(n);
    return (0, m.un)(t, i);
}
function I(e, n) {
    return (0, m.un)(e.displayName, n.displayName);
}
function P(e) {
    let { channel: n, query: t, commandLimit: l, applicationLimit: o, searchesCommands: r = !0, searchesBots: s = !0, searchesActivities: f = !0 } = e;
    t.startsWith(''.concat(A.GI)) && (t = t.substring(1));
    let {
            commands: C,
            commandSectionMap: v,
            loading: _
        } = (function (e) {
            var n, t;
            let { channel: l, includeBuiltIn: a = !0, allowFetch: o = !0 } = e,
                r = (0, m.em)(l, !0, o),
                s = (0, m.PL)(!0, o);
            return i.useMemo(() => {
                var e, n, t, i, o;
                let c = null !== (t = null === (e = r.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {},
                    d = null !== (i = null === (n = s.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {},
                    u = [...Object.keys(c), ...Object.keys(d).filter((e) => !(e in c))];
                a && u.push(g.bi.BUILT_IN);
                let p = [],
                    h = {};
                for (let e of u) {
                    let n = (0, m.If)(l, e),
                        t = null !== (o = n.sectionCommands) && void 0 !== o ? o : [];
                    p.push(...t),
                        t.forEach((e) => {
                            null != n.descriptor && (h[e.id] = n.descriptor);
                        });
                }
                return {
                    commands: p,
                    commandSectionMap: h,
                    loading: !0 === r.fetchState.fetching || !0 === s.fetchState.fetching
                };
            }, [l, a, r.fetchState.fetching, null === (n = r.result) || void 0 === n ? void 0 : n.sections, s.fetchState.fetching, null === (t = s.result) || void 0 === t ? void 0 : t.sections]);
        })({
            channel: n,
            includeBuiltIn: !0
        }),
        { apps: P } = (function (e) {
            let { channel: n, onlyWithCommands: t, includeBuiltIn: l, allowFetch: a = !0, includeEmbeddedApps: o, includeNonEmbeddedApps: r } = e,
                s = (0, p.Hs)(n, [c.yU.CHAT]).hasBaseAccessPermissions,
                d = (0, m.em)(n, s, a),
                u = (0, m.PL)(s, a),
                h = i.useCallback(
                    (e) => {
                        let n = e.descriptor.application;
                        return null != n && (!!(o && (0, N.ye)(n)) || (null != n && r && !(0, N.ye)(n) && (!t || Object.keys(e.commands).length > 0)));
                    },
                    [o, r, t]
                ),
                f = [],
                C = new Set();
            if (null != d.result)
                for (let e of Object.values(d.result.sections)) {
                    let n = e.descriptor.application;
                    null != n && h(e) && (f.push(n), C.add(n.id));
                }
            if (null != u.result)
                for (let e of Object.values(u.result.sections)) {
                    let n = e.descriptor.application;
                    null != n && !C.has(n.id) && h(e) && f.push(n);
                }
            return (
                r && l && f.push(N.Wx),
                {
                    apps: f,
                    loading: (null == d ? void 0 : d.fetchState.fetching) === !0 || (null == u ? void 0 : u.fetchState.fetching) === !0
                }
            );
        })({
            channel: n,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: f,
            includeNonEmbeddedApps: s
        }),
        j = (0, d.Z)({ guildId: n.getGuildId() }),
        y = i.useMemo(() => {
            var e;
            if (!r) return [];
            return (0, x.N)(C, {
                limit: l,
                filterPredicates: [
                    (function (e) {
                        let n = (0, p.k)(e, [c.yU.CHAT]),
                            t = {};
                        return (i) => {
                            let { context: l, userId: a, roleIds: o, isImpersonating: r } = n;
                            if (!(i.applicationId in t)) {
                                let { descriptor: n, isGuildInstalled: s, isUserInstalled: c } = (0, m.If)(e, i.applicationId),
                                    d = (null == l ? void 0 : l.guild_id) != null ? h.ML(null == n ? void 0 : n.permissions, l.guild_id, a, o, r) : null,
                                    u = (null == l ? void 0 : l.guild_id) != null ? h.ZJ(null == n ? void 0 : n.permissions, l, l.guild_id) : null;
                                t[i.applicationId] = {
                                    descriptor: n,
                                    applicationAllowedForUser: d,
                                    applicationAllowedForChannel: u,
                                    isGuildInstalled: s,
                                    isUserInstalled: c
                                };
                            }
                            let { descriptor: s, applicationAllowedForChannel: c, applicationAllowedForUser: d, isGuildInstalled: u, isUserInstalled: p } = t[i.applicationId];
                            return (
                                h.Ft(i, n, {
                                    applicationAllowedForUser: d,
                                    applicationAllowedForChannel: c,
                                    commandBotId: null == s ? void 0 : s.botId,
                                    isGuildInstalled: u,
                                    isUserInstalled: p
                                }) === h.mF.ALLOWED
                            );
                        };
                    })(n)
                ],
                bucketPredicates: [
                    (function (e) {
                        return (n) => {
                            let t = n.untranslatedName,
                                i = n.displayName;
                            return t.startsWith(e) || i.startsWith(e);
                        };
                    })((e = t)),
                    (function (e) {
                        let n = null == e ? void 0 : e.split(' '),
                            t = n[0],
                            i = n.slice(1).join(' ');
                        return (e) => {
                            let n = e.untranslatedName,
                                l = e.displayName;
                            return !!((n.startsWith(t) && n.split(' ').slice(1).join(' ').startsWith(i)) || (l.startsWith(t) && l.split(' ').slice(1).join(' ').startsWith(i))) || !1;
                        };
                    })(e),
                    (function (e) {
                        return (n) => {
                            let t = n.untranslatedName,
                                i = n.displayName;
                            return t.includes(e) || i.includes(e);
                        };
                    })(e),
                    (function (e) {
                        return (n) => {
                            var t;
                            for (let { name: i, serverLocalizedName: l } of null !== (t = n.options) && void 0 !== t ? t : []) if (i.startsWith(e) || ''.concat(n.untranslatedName, ' ').concat(i).startsWith(e) || (null != n.displayName && ''.concat(n.displayName, ' ').concat(i).startsWith(e)) || (null != l && (l.startsWith(e) || ''.concat(n.untranslatedName, ' ').concat(l).startsWith(e) || (null != n.displayName && ''.concat(n.displayName, ' ').concat(l).startsWith(e))))) return !0;
                            return !1;
                        };
                    })(e),
                    (function (e) {
                        return (n) => {
                            var t;
                            for (let { name: i, serverLocalizedName: l } of null !== (t = n.options) && void 0 !== t ? t : []) if (i.includes(e) || (null == l ? void 0 : l.includes(e))) return !0;
                            return !1;
                        };
                    })(e)
                ],
                sortComparers: [
                    (function (e) {
                        return (n, t) => {
                            let i = u.ZP.getScoreWithoutLoadingLatest(e, n);
                            return u.ZP.getScoreWithoutLoadingLatest(e, t) - i;
                        };
                    })({ channel: n }),
                    I
                ]
            });
        }, [r, C, l, n, t]),
        S = i.useMemo(() => {
            if (0 === y.length) return [];
            let e = new Map(P.map((e) => [e.id, e]));
            return a().compact(
                y.map((n) => {
                    var t;
                    let i = e.get(n.applicationId);
                    if (null == i) return null;
                    let l = null !== (t = v[n.id]) && void 0 !== t ? t : null;
                    return {
                        command: n,
                        application: i,
                        section: l
                    };
                })
            );
        }, [P, y, v]),
        T = i.useMemo(() => {
            var e;
            let i = [];
            if (f) {
                let e = new Set(
                    P.map((e) => {
                        let { id: n } = e;
                        return n;
                    })
                );
                i.push(...P),
                    i.push(
                        ...j
                            .filter((n) => {
                                let {
                                    application: { id: t }
                                } = n;
                                return !e.has(t);
                            })
                            .map((e) => {
                                let { application: n } = e;
                                return n;
                            })
                    );
            } else s && (i = P);
            return (0, x.N)(i, {
                limit: o,
                filterPredicates: [
                    (function (e) {
                        let n = (0, p.k)(e, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
                        return (t) => {
                            let { context: i, userId: l, roleIds: a, isImpersonating: o } = n,
                                { descriptor: r, sectionCommands: s, isGuildInstalled: c, isUserInstalled: d } = (0, m.If)(e, t.id),
                                u = (null == i ? void 0 : i.guild_id) != null ? h.ML(null == r ? void 0 : r.permissions, i.guild_id, l, a, o) : null,
                                p = (null == i ? void 0 : i.guild_id) != null ? h.ZJ(null == r ? void 0 : r.permissions, i, i.guild_id) : null;
                            return (
                                null == s ||
                                !(s.length > 0) ||
                                s.some(
                                    (e) =>
                                        h.Ft(e, n, {
                                            applicationAllowedForUser: u,
                                            applicationAllowedForChannel: p,
                                            commandBotId: null == r ? void 0 : r.botId,
                                            isGuildInstalled: c,
                                            isUserInstalled: d
                                        }) === h.mF.ALLOWED
                                )
                            );
                        };
                    })(n)
                ],
                bucketPredicates: [
                    (function (e) {
                        return (n) => (0, N.$d)(n).toLocaleLowerCase().startsWith(e.toLocaleLowerCase());
                    })((e = t)),
                    (function (e) {
                        return (n) => (0, N.$d)(n).toLocaleLowerCase().includes(e.toLocaleLowerCase());
                    })(e),
                    (function (e) {
                        return (n) => {
                            var t, i;
                            let l = null === (t = (0, N.jD)(n)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
                            return null !== (i = null == l ? void 0 : l.startsWith(e.toLocaleLowerCase())) && void 0 !== i && i;
                        };
                    })(e),
                    (function (e) {
                        return (n) => {
                            var t, i;
                            let l = null === (t = (0, N.jD)(n)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
                            return null !== (i = null == l ? void 0 : l.includes(e.toLocaleLowerCase())) && void 0 !== i && i;
                        };
                    })(e)
                ],
                sortComparers: [E, b]
            });
        }, [s, f, o, n, t, P, j]),
        L = S.length > 0,
        R = T.length > 0;
    return {
        commandResults: S,
        hasCommandResults: L,
        applicationResults: T,
        hasApplicationResults: R,
        isEmptyState: !L && !R,
        loading: _ && r
    };
}
function j(e) {
    let { channel: n, query: t, fetches: l = !0, pageLimit: a = 1 / 0, entrypoint: c } = e;
    t.startsWith(''.concat(A.GI)) && (t = t.substring(1));
    let d = c === _._b.VOICE,
        [u, m] = i.useState(1),
        p = i.useRef(u);
    p.current = u;
    let { fetchState: h, totalPages: v } = (0, s.cj)(
            [C.Z],
            () => {
                var e, i;
                return {
                    fetchState: C.Z.getFetchState({
                        query: t,
                        guildId: n.guild_id,
                        page: u,
                        integrationType: o.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: d,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: r.F.APP_LAUNCHER
                    }),
                    totalPages:
                        null !==
                            (i =
                                null ===
                                    (e = C.Z.getSearchResults({
                                        query: t,
                                        guildId: n.guild_id,
                                        page: u,
                                        integrationType: o.Y.USER_INSTALL,
                                        minUserInstallCommandCount: 1,
                                        excludeAppsWithCustomInstallUrl: !0,
                                        excludeNonEmbeddedApps: d,
                                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                        source: r.F.APP_LAUNCHER
                                    })) || void 0 === e
                                    ? void 0
                                    : e.totalPages) && void 0 !== i
                            ? i
                            : 0
                };
            },
            [n.guild_id, u, t, d]
        ),
        x = i.useMemo(
            () =>
                Array.from({ length: h === C.M.FETCHED || h === C.M.ERROR ? u : u - 1 }, (e, i) => {
                    var l, a;
                    return null !==
                        (a =
                            null ===
                                (l = C.Z.getSearchResults({
                                    query: t,
                                    guildId: n.guild_id,
                                    page: i + 1,
                                    integrationType: o.Y.USER_INSTALL,
                                    minUserInstallCommandCount: 1,
                                    excludeAppsWithCustomInstallUrl: !0,
                                    excludeNonEmbeddedApps: d,
                                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                    source: r.F.APP_LAUNCHER
                                })) || void 0 === l
                                ? void 0
                                : l.results) && void 0 !== a
                        ? a
                        : [];
                }),
            [h, n.guild_id, t, u, d]
        ),
        N = i.useCallback(() => {
            let e = x.length;
            h === C.M.FETCHED && e === p.current && e > 0 && e < v && e < a && x[e - 1].length > 0 && (p.current++, m((e) => e + 1));
        }, [h, a, x, v]),
        g = i.useCallback(
            (e) => {
                let { query: n, page: t, guildId: i } = e;
                f.yC({
                    query: n,
                    guildId: i,
                    options: {
                        page: t,
                        integrationType: o.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: d,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: r.F.APP_LAUNCHER
                    }
                });
            },
            [d]
        );
    return (
        i.useEffect(() => {
            if (!!l)
                g({
                    query: t,
                    page: u,
                    guildId: n.guild_id
                });
        }, [t, n.guild_id, g, u, l]),
        i.useEffect(() => {
            m(1);
        }, [n.guild_id, t]),
        {
            fetchState: h,
            applicationResults: x.flat(),
            fetchNextPage: N
        }
    );
}
