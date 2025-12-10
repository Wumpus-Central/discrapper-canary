n.d(t, {
    Q2: () => H,
    pe: () => V,
}),
    n(388685),
    n(539854),
    n(35282),
    n(472816),
    n(794429);
var r = n(473749),
    i = n(392711),
    a = n.n(i),
    o = n(373793),
    s = n(288385),
    l = n(442837),
    c = n(911969),
    u = n(127255),
    d = n(654455),
    f = n(213459),
    p = n(807169),
    _ = n(104793),
    m = n(822245),
    h = n(471518),
    g = n(177653),
    E = n(631827),
    b = n(827498),
    y = n(783097),
    O = n(689079),
    v = n(761652);
function S(e) {
    let {
            context: t,
            onlyWithCommands: n,
            includeBuiltIn: i,
            allowFetch: a = !0,
            includeEmbeddedApps: o,
            includeNonEmbeddedApps: s,
        } = e,
        l = "channel" === t.type ? t.channel : void 0,
        u = (0, p.Hs)(l, [c.yU.CHAT]).hasBaseAccessPermissions,
        d = (0, f.em)(t, u, a),
        _ = (0, f.PL)(u, a),
        m = r.useCallback(
            (e) => {
                let t = e.descriptor.application;
                return (
                    null != t &&
                    (!!(o && (0, y.ye)(t)) ||
                        (null != t && s && !(0, y.ye)(t) && (!n || Object.keys(e.commands).length > 0)))
                );
            },
            [o, s, n],
        ),
        h = [],
        g = new Set();
    if (null != d.result)
        for (let e of Object.values(d.result.sections)) {
            let t = e.descriptor.application;
            null != t && m(e) && (h.push(t), g.add(t.id));
        }
    if (null != _.result)
        for (let e of Object.values(_.result.sections)) {
            let t = e.descriptor.application;
            null != t && !g.has(t.id) && m(e) && h.push(t);
        }
    return (
        s && i && h.push(y.Wx),
        {
            apps: h,
            loading:
                (null == d ? void 0 : d.fetchState.fetching) === !0 ||
                (null == _ ? void 0 : _.fetchState.fetching) === !0,
        }
    );
}
function I(e) {
    var t, n;
    let { context: i, includeBuiltIn: a = !0, allowFetch: o = !0 } = e,
        s = (0, f.em)(i, !0, o),
        l = (0, f.PL)(!0, o);
    return r.useMemo(() => {
        var e, t, n, r, o;
        let c = null != (n = null == (e = s.result) ? void 0 : e.sections) ? n : {},
            u = null != (r = null == (t = l.result) ? void 0 : t.sections) ? r : {},
            d = [...Object.keys(c), ...Object.keys(u).filter((e) => !(e in c))];
        a && d.push(O.bi.BUILT_IN);
        let p = [],
            _ = {};
        for (let e of d) {
            let t = (0, f.If)(i, e),
                n = null != (o = t.sectionCommands) ? o : [];
            p.push(...n),
                n.forEach((e) => {
                    null != t.descriptor && (_[e.id] = t.descriptor);
                });
        }
        return {
            commands: p,
            commandSectionMap: _,
            loading: !0 === s.fetchState.fetching || !0 === l.fetchState.fetching,
        };
    }, [
        i,
        a,
        s.fetchState.fetching,
        null == (t = s.result) ? void 0 : t.sections,
        l.fetchState.fetching,
        null == (n = l.result) ? void 0 : n.sections,
    ]);
}
function T(e) {
    let t = (0, p.k)("channel" === e.type ? e.channel : void 0, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
    return (n) => {
        let { context: r, userId: i, roleIds: a, isImpersonating: o } = t,
            { descriptor: s, sectionCommands: l, isGuildInstalled: c, isUserInstalled: u } = (0, f.If)(e, n.id),
            d =
                (null == r ? void 0 : r.guild_id) != null
                    ? _.ML(null == s ? void 0 : s.permissions, r.guild_id, i, a, o)
                    : null,
            p =
                (null == r ? void 0 : r.guild_id) != null
                    ? _.ZJ(null == s ? void 0 : s.permissions, r, r.guild_id)
                    : null;
        return (
            null == l ||
            !(l.length > 0) ||
            l.some(
                (e) =>
                    _.Ft(e, t, {
                        applicationAllowedForUser: d,
                        applicationAllowedForChannel: p,
                        commandBotId: null == s ? void 0 : s.botId,
                        isGuildInstalled: c,
                        isUserInstalled: u,
                    }) === _.mF.ALLOWED,
            )
        );
    };
}
function C(e) {
    return [A(e), N(e), P(e), R(e)];
}
function A(e) {
    return (t) => (0, y.$d)(t).toLocaleLowerCase().startsWith(e.toLocaleLowerCase());
}
function N(e) {
    return (t) => (0, y.$d)(t).toLocaleLowerCase().includes(e.toLocaleLowerCase());
}
function P(e) {
    return (t) => {
        var n, r;
        let i = null == (n = (0, y.jD)(t)) ? void 0 : n.toLocaleLowerCase();
        return null != (r = null == i ? void 0 : i.startsWith(e.toLocaleLowerCase())) && r;
    };
}
function R(e) {
    return (t) => {
        var n, r;
        let i = null == (n = (0, y.jD)(t)) ? void 0 : n.toLocaleLowerCase();
        return null != (r = null == i ? void 0 : i.includes(e.toLocaleLowerCase())) && r;
    };
}
function D(e, t) {
    let n = m.Z.getScoreWithoutLoadingLatest(e.id);
    return m.Z.getScoreWithoutLoadingLatest(t.id) - n;
}
function w(e, t) {
    let n = (0, y.$d)(e),
        r = (0, y.$d)(t);
    return (0, f.un)(n, r);
}
function x(e) {
    let t = (0, p.k)("channel" === e.type ? e.channel : void 0, [c.yU.CHAT]),
        n = {};
    return (r) => {
        let { context: i, userId: a, roleIds: o, isImpersonating: s } = t;
        if (!(r.applicationId in n)) {
            let { descriptor: t, isGuildInstalled: l, isUserInstalled: c } = (0, f.If)(e, r.applicationId),
                u =
                    (null == i ? void 0 : i.guild_id) != null
                        ? _.ML(null == t ? void 0 : t.permissions, i.guild_id, a, o, s)
                        : null,
                d =
                    (null == i ? void 0 : i.guild_id) != null
                        ? _.ZJ(null == t ? void 0 : t.permissions, i, i.guild_id)
                        : null;
            n[r.applicationId] = {
                descriptor: t,
                applicationAllowedForUser: u,
                applicationAllowedForChannel: d,
                isGuildInstalled: l,
                isUserInstalled: c,
            };
        }
        let {
            descriptor: l,
            applicationAllowedForChannel: c,
            applicationAllowedForUser: u,
            isGuildInstalled: d,
            isUserInstalled: p,
        } = n[r.applicationId];
        return (
            _.Ft(r, t, {
                applicationAllowedForUser: u,
                applicationAllowedForChannel: c,
                commandBotId: null == l ? void 0 : l.botId,
                isGuildInstalled: d,
                isUserInstalled: p,
            }) === _.mF.ALLOWED
        );
    };
}
function L(e) {
    return [j(e), M(e), k(e), U(e), G(e)];
}
function j(e) {
    return (t) => {
        let n = t.untranslatedName,
            r = t.displayName;
        return n.startsWith(e) || r.startsWith(e);
    };
}
function M(e) {
    let t = null == e ? void 0 : e.split(" "),
        n = t[0],
        r = t.slice(1).join(" ");
    return (e) => {
        let t = e.untranslatedName,
            i = e.displayName;
        return (
            !!(
                (t.startsWith(n) && t.split(" ").slice(1).join(" ").startsWith(r)) ||
                (i.startsWith(n) && i.split(" ").slice(1).join(" ").startsWith(r))
            ) || !1
        );
    };
}
function k(e) {
    return (t) => {
        let n = t.untranslatedName,
            r = t.displayName;
        return n.includes(e) || r.includes(e);
    };
}
function U(e) {
    return (t) => {
        var n;
        for (let { name: r, serverLocalizedName: i } of null != (n = t.options) ? n : [])
            if (
                r.startsWith(e) ||
                "".concat(t.untranslatedName, " ").concat(r).startsWith(e) ||
                (null != t.displayName && "".concat(t.displayName, " ").concat(r).startsWith(e)) ||
                (null != i &&
                    (i.startsWith(e) ||
                        "".concat(t.untranslatedName, " ").concat(i).startsWith(e) ||
                        (null != t.displayName && "".concat(t.displayName, " ").concat(i).startsWith(e))))
            )
                return !0;
        return !1;
    };
}
function G(e) {
    return (t) => {
        var n;
        for (let { name: r, serverLocalizedName: i } of null != (n = t.options) ? n : [])
            if (r.includes(e) || (null == i ? void 0 : i.includes(e))) return !0;
        return !1;
    };
}
function Z(e) {
    return [B(e), F];
}
function B(e) {
    return (t, n) => {
        let r = d.ZP.getScoreWithoutLoadingLatest(e, t);
        return d.ZP.getScoreWithoutLoadingLatest(e, n) - r;
    };
}
function F(e, t) {
    return (0, f.un)(e.displayName, t.displayName);
}
function V(e) {
    let {
        context: t,
        query: n,
        commandLimit: i,
        applicationLimit: o,
        searchesCommands: s = !0,
        searchesBots: l = !0,
        searchesActivities: c = !0,
    } = e;
    n.startsWith("".concat(v.GI)) && (n = n.substring(1));
    let {
            commands: d,
            commandSectionMap: f,
            loading: p,
        } = I({
            context: t,
            includeBuiltIn: !0,
        }),
        { apps: _ } = S({
            context: t,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: c,
            includeNonEmbeddedApps: l,
        }),
        m = (0, u.Z)({ guildId: "channel" === t.type ? t.channel.guild_id : null }),
        h = r.useMemo(
            () =>
                s
                    ? (0, E.N)(d, {
                          limit: i,
                          filterPredicates: [x(t)],
                          bucketPredicates: L(n),
                          sortComparers: Z({ channel: "channel" === t.type ? t.channel : void 0 }),
                      })
                    : [],
            [s, d, i, t, n],
        ),
        g = r.useMemo(() => {
            if (0 === h.length) return [];
            let e = new Map(_.map((e) => [e.id, e]));
            return a().compact(
                h.map((t) => {
                    var n;
                    let r = e.get(t.applicationId);
                    if (null == r) return null;
                    let i = null != (n = f[t.id]) ? n : null;
                    return {
                        command: t,
                        application: r,
                        section: i,
                    };
                }),
            );
        }, [_, h, f]),
        b = r.useMemo(() => {
            let e = [];
            if (c) {
                let t = new Set(
                    _.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
                e.push(..._),
                    e.push(
                        ...m
                            .filter((e) => {
                                let {
                                    application: { id: n },
                                } = e;
                                return !t.has(n);
                            })
                            .map((e) => {
                                let { application: t } = e;
                                return t;
                            }),
                    );
            } else l && (e = _);
            return (0, E.N)(e, {
                limit: o,
                filterPredicates: [T(t)],
                bucketPredicates: C(n),
                sortComparers: [D, w],
            });
        }, [l, c, o, t, n, _, m]),
        y = g.length > 0,
        O = b.length > 0,
        A = !y && !O;
    return {
        commandResults: g,
        hasCommandResults: y,
        applicationResults: b,
        hasApplicationResults: O,
        isEmptyState: A,
        loading: p && s,
    };
}
function H(e) {
    let { context: t, query: n, fetches: i = !0, pageLimit: a = 1 / 0, entrypoint: c } = e;
    n.startsWith("".concat(v.GI)) && (n = n.substring(1));
    let u = c === b._b.VOICE,
        d = "channel" === t.type ? t.channel.guild_id : void 0,
        [f, p] = r.useState(1),
        _ = r.useRef(f);
    _.current = f;
    let { fetchState: m, totalPages: E } = (0, l.cj)([g.Z], () => {
            var e, t;
            return {
                fetchState: g.Z.getFetchState({
                    query: n,
                    guildId: d,
                    page: f,
                    integrationType: o.Y.USER_INSTALL,
                    minUserInstallCommandCount: 1,
                    excludeAppsWithCustomInstallUrl: !0,
                    excludeNonEmbeddedApps: u,
                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                    source: s.F.APP_LAUNCHER,
                }),
                totalPages:
                    null !=
                    (t =
                        null ==
                        (e = g.Z.getSearchResults({
                            query: n,
                            guildId: d,
                            page: f,
                            integrationType: o.Y.USER_INSTALL,
                            minUserInstallCommandCount: 1,
                            excludeAppsWithCustomInstallUrl: !0,
                            excludeNonEmbeddedApps: u,
                            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                            source: s.F.APP_LAUNCHER,
                        }))
                            ? void 0
                            : e.totalPages)
                        ? t
                        : 0,
            };
        }, [n, d, f, u]),
        y = r.useMemo(
            () =>
                Array.from({ length: m === g.M.FETCHED || m === g.M.ERROR ? f : f - 1 }, (e, t) => {
                    var r, i;
                    return null !=
                        (i =
                            null ==
                            (r = g.Z.getSearchResults({
                                query: n,
                                guildId: d,
                                page: t + 1,
                                integrationType: o.Y.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: u,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: s.F.APP_LAUNCHER,
                            }))
                                ? void 0
                                : r.results)
                        ? i
                        : [];
                }),
            [m, d, n, f, u],
        ),
        O = r.useCallback(() => {
            let e = y.length;
            m === g.M.FETCHED &&
                e === _.current &&
                e > 0 &&
                e < E &&
                e < a &&
                y[e - 1].length > 0 &&
                (_.current++, p((e) => e + 1));
        }, [m, a, y, E]),
        S = r.useCallback(
            (e) => {
                let { query: t, page: n, guildId: r } = e;
                h.yC({
                    query: t,
                    guildId: r,
                    options: {
                        page: n,
                        integrationType: o.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: u,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: s.F.APP_LAUNCHER,
                    },
                });
            },
            [u],
        );
    return (
        r.useEffect(() => {
            i &&
                S({
                    query: n,
                    page: f,
                    guildId: d,
                });
        }, [n, d, S, f, i]),
        r.useEffect(() => {
            p(1);
        }, [d, n]),
        {
            fetchState: m,
            applicationResults: y.flat(),
            fetchNextPage: O,
        }
    );
}
