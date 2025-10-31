n.d(t, {
    Q2: () => _,
    pe: () => A,
}),
    n(388685),
    n(539854),
    n(35282),
    n(472816),
    n(794429);
var i = n(647438),
    l = n(392711),
    r = n.n(l),
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
    g = n(631827),
    x = n(827498),
    b = n(783097),
    N = n(689079),
    j = n(761652);
function C(e, t) {
    let n = h.Z.getScoreWithoutLoadingLatest(e.id);
    return h.Z.getScoreWithoutLoadingLatest(t.id) - n;
}
function E(e, t) {
    let n = (0, b.$d)(e),
        i = (0, b.$d)(t);
    return (0, p.un)(n, i);
}
function P(e, t) {
    return (0, p.un)(e.displayName, t.displayName);
}
function A(e) {
    let {
        context: t,
        query: n,
        commandLimit: l,
        applicationLimit: a,
        searchesCommands: o = !0,
        searchesBots: s = !0,
        searchesActivities: h = !0,
    } = e;
    n.startsWith("".concat(j.GI)) && (n = n.substring(1));
    let {
            commands: v,
            commandSectionMap: y,
            loading: x,
        } = (function (e) {
            var t, n;
            let { context: l, includeBuiltIn: r = !0, allowFetch: a = !0 } = e,
                o = (0, p.em)(l, !0, a),
                s = (0, p.PL)(!0, a);
            return i.useMemo(() => {
                var e, t, n, i, a;
                let c = null != (n = null == (e = o.result) ? void 0 : e.sections) ? n : {},
                    u = null != (i = null == (t = s.result) ? void 0 : t.sections) ? i : {},
                    d = [...Object.keys(c), ...Object.keys(u).filter((e) => !(e in c))];
                r && d.push(N.bi.BUILT_IN);
                let m = [],
                    f = {};
                for (let e of d) {
                    let t = (0, p.If)(l, e),
                        n = null != (a = t.sectionCommands) ? a : [];
                    m.push(...n),
                        n.forEach((e) => {
                            null != t.descriptor && (f[e.id] = t.descriptor);
                        });
                }
                return {
                    commands: m,
                    commandSectionMap: f,
                    loading: !0 === o.fetchState.fetching || !0 === s.fetchState.fetching,
                };
            }, [
                l,
                r,
                o.fetchState.fetching,
                null == (t = o.result) ? void 0 : t.sections,
                s.fetchState.fetching,
                null == (n = s.result) ? void 0 : n.sections,
            ]);
        })({
            context: t,
            includeBuiltIn: !0,
        }),
        { apps: A } = (function (e) {
            let {
                    context: t,
                    onlyWithCommands: n,
                    includeBuiltIn: l,
                    allowFetch: r = !0,
                    includeEmbeddedApps: a,
                    includeNonEmbeddedApps: o,
                } = e,
                s = "channel" === t.type ? t.channel : void 0,
                u = (0, m.Hs)(s, [c.yU.CHAT]).hasBaseAccessPermissions,
                d = (0, p.em)(t, u, r),
                f = (0, p.PL)(u, r),
                h = i.useCallback(
                    (e) => {
                        let t = e.descriptor.application;
                        return (
                            null != t &&
                            (!!(a && (0, b.ye)(t)) ||
                                (null != t && o && !(0, b.ye)(t) && (!n || Object.keys(e.commands).length > 0)))
                        );
                    },
                    [a, o, n],
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
                o && l && v.push(b.Wx),
                {
                    apps: v,
                    loading:
                        (null == d ? void 0 : d.fetchState.fetching) === !0 ||
                        (null == f ? void 0 : f.fetchState.fetching) === !0,
                }
            );
        })({
            context: t,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: h,
            includeNonEmbeddedApps: s,
        }),
        _ = (0, u.Z)({ guildId: "channel" === t.type ? t.channel.guild_id : null }),
        O = i.useMemo(() => {
            var e, i, r, a, s, u;
            if (!o) return [];
            return (0, g.N)(v, {
                limit: l,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)("channel" === e.type ? e.channel : void 0, [c.yU.CHAT]),
                            n = {};
                        return (i) => {
                            let { context: l, userId: r, roleIds: a, isImpersonating: o } = t;
                            if (!(i.applicationId in n)) {
                                let {
                                        descriptor: t,
                                        isGuildInstalled: s,
                                        isUserInstalled: c,
                                    } = (0, p.If)(e, i.applicationId),
                                    u =
                                        (null == l ? void 0 : l.guild_id) != null
                                            ? f.ML(null == t ? void 0 : t.permissions, l.guild_id, r, a, o)
                                            : null,
                                    d =
                                        (null == l ? void 0 : l.guild_id) != null
                                            ? f.ZJ(null == t ? void 0 : t.permissions, l, l.guild_id)
                                            : null;
                                n[i.applicationId] = {
                                    descriptor: t,
                                    applicationAllowedForUser: u,
                                    applicationAllowedForChannel: d,
                                    isGuildInstalled: s,
                                    isUserInstalled: c,
                                };
                            }
                            let {
                                descriptor: s,
                                applicationAllowedForChannel: c,
                                applicationAllowedForUser: u,
                                isGuildInstalled: d,
                                isUserInstalled: m,
                            } = n[i.applicationId];
                            return (
                                f.Ft(i, t, {
                                    applicationAllowedForUser: u,
                                    applicationAllowedForChannel: c,
                                    commandBotId: null == s ? void 0 : s.botId,
                                    isGuildInstalled: d,
                                    isUserInstalled: m,
                                }) === f.mF.ALLOWED
                            );
                        };
                    })(t),
                ],
                bucketPredicates: [
                    ((i = e = n),
                    (e) => {
                        let t = e.untranslatedName,
                            n = e.displayName;
                        return t.startsWith(i) || n.startsWith(i);
                    }),
                    (function (e) {
                        let t = null == e ? void 0 : e.split(" "),
                            n = t[0],
                            i = t.slice(1).join(" ");
                        return (e) => {
                            let t = e.untranslatedName,
                                l = e.displayName;
                            return (
                                !!(
                                    (t.startsWith(n) && t.split(" ").slice(1).join(" ").startsWith(i)) ||
                                    (l.startsWith(n) && l.split(" ").slice(1).join(" ").startsWith(i))
                                ) || !1
                            );
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
                        for (let { name: n, serverLocalizedName: i } of null != (t = e.options) ? t : [])
                            if (
                                n.startsWith(a) ||
                                "".concat(e.untranslatedName, " ").concat(n).startsWith(a) ||
                                (null != e.displayName && "".concat(e.displayName, " ").concat(n).startsWith(a)) ||
                                (null != i &&
                                    (i.startsWith(a) ||
                                        "".concat(e.untranslatedName, " ").concat(i).startsWith(a) ||
                                        (null != e.displayName &&
                                            "".concat(e.displayName, " ").concat(i).startsWith(a))))
                            )
                                return !0;
                        return !1;
                    }),
                    ((s = e),
                    (e) => {
                        var t;
                        for (let { name: n, serverLocalizedName: i } of null != (t = e.options) ? t : [])
                            if (n.includes(s) || (null == i ? void 0 : i.includes(s))) return !0;
                        return !1;
                    }),
                ],
                sortComparers: [
                    ((u = { channel: "channel" === t.type ? t.channel : void 0 }),
                    (e, t) => {
                        let n = d.ZP.getScoreWithoutLoadingLatest(u, e);
                        return d.ZP.getScoreWithoutLoadingLatest(u, t) - n;
                    }),
                    P,
                ],
            });
        }, [o, v, l, t, n]),
        I = i.useMemo(() => {
            if (0 === O.length) return [];
            let e = new Map(A.map((e) => [e.id, e]));
            return r().compact(
                O.map((t) => {
                    var n;
                    let i = e.get(t.applicationId);
                    if (null == i) return null;
                    let l = null != (n = y[t.id]) ? n : null;
                    return {
                        command: t,
                        application: i,
                        section: l,
                    };
                }),
            );
        }, [A, O, y]),
        S = i.useMemo(() => {
            var e, i, l, r, o;
            let u = [];
            if (h) {
                let e = new Set(
                    A.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
                u.push(...A),
                    u.push(
                        ..._.filter((t) => {
                            let {
                                application: { id: n },
                            } = t;
                            return !e.has(n);
                        }).map((e) => {
                            let { application: t } = e;
                            return t;
                        }),
                    );
            } else s && (u = A);
            return (0, g.N)(u, {
                limit: a,
                filterPredicates: [
                    (function (e) {
                        let t = (0, m.k)("channel" === e.type ? e.channel : void 0, [
                            c.yU.CHAT,
                            c.yU.PRIMARY_ENTRY_POINT,
                        ]);
                        return (n) => {
                            let { context: i, userId: l, roleIds: r, isImpersonating: a } = t,
                                {
                                    descriptor: o,
                                    sectionCommands: s,
                                    isGuildInstalled: c,
                                    isUserInstalled: u,
                                } = (0, p.If)(e, n.id),
                                d =
                                    (null == i ? void 0 : i.guild_id) != null
                                        ? f.ML(null == o ? void 0 : o.permissions, i.guild_id, l, r, a)
                                        : null,
                                m =
                                    (null == i ? void 0 : i.guild_id) != null
                                        ? f.ZJ(null == o ? void 0 : o.permissions, i, i.guild_id)
                                        : null;
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
                                            isUserInstalled: u,
                                        }) === f.mF.ALLOWED,
                                )
                            );
                        };
                    })(t),
                ],
                bucketPredicates: [
                    ((i = e = n), (e) => (0, b.$d)(e).toLocaleLowerCase().startsWith(i.toLocaleLowerCase())),
                    ((l = e), (e) => (0, b.$d)(e).toLocaleLowerCase().includes(l.toLocaleLowerCase())),
                    ((r = e),
                    (e) => {
                        var t, n;
                        let i = null == (t = (0, b.jD)(e)) ? void 0 : t.toLocaleLowerCase();
                        return null != (n = null == i ? void 0 : i.startsWith(r.toLocaleLowerCase())) && n;
                    }),
                    ((o = e),
                    (e) => {
                        var t, n;
                        let i = null == (t = (0, b.jD)(e)) ? void 0 : t.toLocaleLowerCase();
                        return null != (n = null == i ? void 0 : i.includes(o.toLocaleLowerCase())) && n;
                    }),
                ],
                sortComparers: [C, E],
            });
        }, [s, h, a, t, n, A, _]),
        T = I.length > 0,
        L = S.length > 0;
    return {
        commandResults: I,
        hasCommandResults: T,
        applicationResults: S,
        hasApplicationResults: L,
        isEmptyState: !T && !L,
        loading: x && o,
    };
}
function _(e) {
    let { context: t, query: n, fetches: l = !0, pageLimit: r = 1 / 0, entrypoint: c } = e;
    n.startsWith("".concat(j.GI)) && (n = n.substring(1));
    let u = c === x._b.VOICE,
        d = "channel" === t.type ? t.channel.guild_id : void 0,
        [p, m] = i.useState(1),
        f = i.useRef(p);
    f.current = p;
    let { fetchState: h, totalPages: g } = (0, s.cj)([y.Z], () => {
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
                    source: o.F.APP_LAUNCHER,
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
                            source: o.F.APP_LAUNCHER,
                        }))
                            ? void 0
                            : e.totalPages)
                        ? t
                        : 0,
            };
        }, [n, d, p, u]),
        b = i.useMemo(
            () =>
                Array.from({ length: h === y.M.FETCHED || h === y.M.ERROR ? p : p - 1 }, (e, t) => {
                    var i, l;
                    return null !=
                        (l =
                            null ==
                            (i = y.Z.getSearchResults({
                                query: n,
                                guildId: d,
                                page: t + 1,
                                integrationType: a.Y.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: u,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: o.F.APP_LAUNCHER,
                            }))
                                ? void 0
                                : i.results)
                        ? l
                        : [];
                }),
            [h, d, n, p, u],
        ),
        N = i.useCallback(() => {
            let e = b.length;
            h === y.M.FETCHED &&
                e === f.current &&
                e > 0 &&
                e < g &&
                e < r &&
                b[e - 1].length > 0 &&
                (f.current++, m((e) => e + 1));
        }, [h, r, b, g]),
        C = i.useCallback(
            (e) => {
                let { query: t, page: n, guildId: i } = e;
                v.yC({
                    query: t,
                    guildId: i,
                    options: {
                        page: n,
                        integrationType: a.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: u,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: o.F.APP_LAUNCHER,
                    },
                });
            },
            [u],
        );
    return (
        i.useEffect(() => {
            l &&
                C({
                    query: n,
                    page: p,
                    guildId: d,
                });
        }, [n, d, C, p, l]),
        i.useEffect(() => {
            m(1);
        }, [d, n]),
        {
            fetchState: h,
            applicationResults: b.flat(),
            fetchNextPage: N,
        }
    );
}
