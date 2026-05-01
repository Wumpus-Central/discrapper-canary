"use strict";
n.d(t, {
    A4: () => en,
    Ay: () => Z,
    ON: () => et,
    RF: () => eh,
    SD: () => ee,
    Sx: () => em,
    XC: () => ei,
    ZA: () => es,
    Zn: () => $,
}),
    n(321073),
    n(938796);
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(683588),
    o = n(17928),
    l = n(228366),
    _ = n(686956),
    d = n(155718),
    u = n(630248),
    c = n(626584),
    E = n(200662),
    h = n(773669),
    m = n(594061),
    f = n(495544),
    g = n(734057),
    A = n(696451),
    I = n(71393),
    p = n(287809),
    T = n(954571),
    S = n(827785),
    N = n(56494),
    O = n(26909),
    R = n(577700),
    C = n(210978),
    y = n(392054),
    D = n(168186),
    L = n(240591),
    v = n(46477),
    w = n(73510),
    P = n(652215);
let b = new c.A("ApplicationCommandIndexStore"),
    k = Symbol("currentUser"),
    U = Symbol("stale"),
    M = Symbol("current"),
    G = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: !0 }),
    x = Object.freeze({
        serverVersion: M,
        fetchState: { fetching: !1 },
        result: { sections: {}, sectionIdsByBotId: {}, version: M },
    }),
    V = Object.freeze({ serverVersion: U, fetchState: { fetching: !1 } }),
    F = { sensitivity: "accent", numeric: !0 },
    B = !1,
    H = [];
function Y(e) {
    switch (e.type) {
        case "guild":
            return e.guildId;
        case "channel":
            return e.channelId;
        case "user":
            return k;
        case "application":
            return e.applicationId;
    }
}
function W(e, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = Y(e),
        s = J.indices[r];
    return (
        null != s
            ? ("fetchState" in t && s.fetchState.fetching && s.fetchState.abort.abort(), (n = { ...s, ...t }))
            : i && (n = { serverVersion: U, fetchState: { fetching: !1 }, ...t }),
        void 0 !== n &&
            ((J.indices[r] = n),
            "application" === e.type &&
                (J.applicationIndices.set(r, n), (J.applicationIndicesVersion = J.applicationIndicesVersion + 1))),
        s
    );
}
function K(e) {
    let t = Y(e),
        n = J.indices[t];
    n?.fetchState.fetching && n.fetchState.abort.abort(), delete J.indices[t];
}
function j() {
    for (let e of Object.values(J.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    J.indices = {};
}
async function $(e) {
    let t = Y(e),
        n = J.indices[t] ?? V;
    if (!e_(n)) {
        if (n.fetchState.fetching) {
            let e = n.fetchState.promise;
            return await e, J.indices[t] ?? V;
        }
        return n;
    }
    return await z(e), J.indices[t] ?? V;
}
async function z(e) {
    let t = new AbortController(),
        n = new a.K();
    W(e, { fetchState: { fetching: !0, abort: t, promise: n.promise } }, !0),
        await (0, R.E)(e, t).then(n.resolve).catch(n.reject);
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: n, index: i } = e,
        r = p.default.getCurrentUser()?.id;
    if (null == r) return B || H.push(e), !1;
    let s = {},
        a = {},
        o = new Set();
    for (let e of i.applications) {
        var l;
        if (null == e.bot && null != e.bot_id) {
            a[e.bot_id] = e.id;
            let t = p.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : o.add(e.bot_id);
        } else null != e.bot && (a[e.bot.id] = e.id);
        let t = {
            descriptor: {
                ...(0, D.bq)(
                    {
                        description: (l = e).description,
                        icon: l.icon,
                        id: l.id,
                        name: l.name,
                        bot: l.bot,
                        flags: l.flags,
                    },
                    !1,
                ),
                permissions: null != e.permissions ? (0, E.UZ)(ec(e.permissions, r)) : void 0,
                botId: e.bot_id,
            },
            commands: {},
        };
        s[e.id] = t;
    }
    for (let e of ("guild" === n.type && o.size > 0 && _.A.requestMembersById(n.guildId, [...o]),
    (0, D.Lz)(
        i.application_commands.map((e) => {
            var t, n;
            let i;
            return (
                (t = e),
                (n = r),
                (i = {
                    ...t,
                    description: t.description_default ?? t.description ?? "",
                    dm_permission: t.dm_permission,
                    name: t.name_default ?? t.name,
                    options: t.options?.map(ed) ?? [],
                    permissions: null != t.permissions ? ec(t.permissions, n) : void 0,
                }),
                t.description !== t.description_default && (i.description_localized = t.description),
                t.name !== t.name_default && (i.name_localized = t.name),
                i
            );
        }),
        !0,
    ))) {
        let t = s[e.applicationId];
        if (null == t) {
            b.error("Command has no matching application");
            continue;
        }
        t.commands[e.id] = e;
    }
    let d = i.version ?? M;
    W(
        n,
        { serverVersion: d, result: { sections: s, sectionIdsByBotId: a, version: d }, fetchState: { fetching: !1 } },
        t,
    );
}
function X() {
    W({ type: "user" }, { serverVersion: U });
}
class Q extends o.Ay.Store {
    static displayName = "ApplicationCommandIndexStore";
    indices = {};
    applicationIndices = new Map();
    applicationIndicesVersion = 0;
    oldLocale = h.default.locale;
    collator = new Intl.Collator(h.default.locale, F);
    initialize() {
        this.waitFor(h.default),
            this.waitFor(O.Ay, u.A, f.default, g.A, A.Ay, I.A, p.default),
            this.syncWith([h.default], () => {
                let e;
                (e = h.default.locale) !== J.oldLocale &&
                    (j(),
                    (J.collator = new Intl.Collator(e, { sensitivity: "accent", numeric: !0 })),
                    (J.oldLocale = e));
            });
    }
    getContextState(e) {
        return "contextless" !== e.type && el(e.channel) ? (this.indices[e.channel.guild_id ?? e.channel.id] ?? V) : x;
    }
    hasContextStateApplication(e) {
        let { applicationId: t, channelId: n, guildId: i } = e,
            r = this.indices[i ?? n];
        return null != (r?.result?.sections ?? {})[t];
    }
    getGuildState(e) {
        return null == e ? x : (this.indices[e] ?? V);
    }
    getUserState() {
        return this.indices[k] ?? V;
    }
    hasUserStateApplication(e) {
        let t = this.indices[k];
        return null != (t?.result?.sections ?? {})[e];
    }
    getApplicationState(e) {
        return null == e ? x : (this.indices[e] ?? V);
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == p.default.getCurrentUser()) return G;
        let i = "channel" === e.type ? e.channel : void 0,
            r = this.getContextState(e),
            s = this.getUserState(),
            a = this.getApplicationState(n.applicationId),
            o = this.getApplicationStates(),
            l = (0, L.Bh)(i, t.commandTypes),
            _ = null == i || l?.hasBaseAccessPermissions === !0,
            d = !1 !== t.applicationCommands,
            u = !1;
        n.allowFetch &&
            (d &&
                _ &&
                null != i &&
                el(i) &&
                (T.default.track(P.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == r.result,
                    size: Object.keys(J.indices).length,
                }),
                e_(r) &&
                    null != i &&
                    (null != i.guild_id
                        ? (0, R.$)({ type: "guild", guildId: i.guild_id })
                        : (0, R.$)({ type: "channel", channelId: i.id }),
                    (u = !0))),
            e_(s) && ((0, R.$)({ type: "user" }), (u = !0)),
            e_(a) &&
                null != n.applicationId &&
                ((0, R.$)({ type: "application", applicationId: n.applicationId }), (u = !0)));
        let c = ea({
            permissionContext: l,
            text: t.text,
            allowApplicationCommands: d,
            builtIns: t.builtIns,
            scoreMethod: n.scoreMethod,
            allowEmptySections: n.allowEmptySections,
            contextState: r,
            userState: s,
            applicationStates: n.allowApplicationState ? o : new Map(),
            sortOptions: n.sortOptions,
            singleApplicationId: n.applicationId,
            installOnDemand: n.installOnDemand,
        });
        return (c.loading = c.loading || u), c;
    }
    queryInstallOnDemandApp(e, t) {
        let n = g.A.getChannel(t);
        null != n &&
            this.query(
                null != n ? { channel: n, type: "channel" } : { type: "contextless" },
                { commandTypes: [d.kc.CHAT] },
                { placeholderCount: 5, scoreMethod: C.M.COMMAND_ONLY, applicationId: e, allowFetch: !0 },
            );
    }
}
let J = new Q(l.h, {
        LOGOUT: j,
        CONNECTION_OPEN: function () {
            for (let e of Object.values(J.indices)) e.serverVersion = U;
            for (let e of H) q(e);
            (H = []), (B = !0);
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function (e) {
            let { target: t } = e,
                n = Y(t);
            e_(J.indices[n] ?? V) && z(t);
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: q,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function (e) {
            let { target: t } = e;
            W(t, { fetchState: { fetching: !1, retryAfter: Date.now() + 5e3 } });
        },
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function (e) {
            let { applicationId: t, channelId: n, guildId: i } = e;
            J.hasContextStateApplication({ applicationId: t, channelId: n, guildId: i }) &&
                W(null != i ? { type: "guild", guildId: i } : { type: "channel", channelId: n }, { serverVersion: U }),
                J.hasUserStateApplication(t) && W({ type: "user" }, { serverVersion: U }),
                J.hasApplicationState(t) && W({ type: "application", applicationId: t }, { serverVersion: U });
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            K({ type: "channel", channelId: t.id });
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            K({ type: "guild", guildId: t.id });
        },
        USER_APPLICATION_UPDATE: X,
        USER_APPLICATION_REMOVE: X,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function (e) {
            let { guildId: t, version: n } = e,
                i = W({ type: "guild", guildId: t }, { serverVersion: n ?? U }),
                r = i?.result?.sectionIdsByBotId;
            if (null != r)
                for (let e in r) {
                    let t = g.A.getDMFromUserId(e);
                    null != t && W({ type: "channel", channelId: t }, { serverVersion: U });
                }
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e,
                n = !1;
            for (let e of t)
                n =
                    (function (e, t) {
                        let n = Y({ type: "guild", guildId: e }),
                            i = J.indices[n]?.result;
                        if (null == i) return !1;
                        let r = !1;
                        return (
                            t.forEach((e) => {
                                let { user: t, nick: n } = e;
                                if (!t.bot) return;
                                let a = i.sectionIdsByBotId[t.id];
                                if (null == a) return;
                                let o = i.sections[a];
                                s()(null != o, "Bot has no matching index section"),
                                    s()(
                                        null != o.descriptor.application,
                                        "Bot's index section has no application info",
                                    );
                                let l = (0, D.bq)({ ...o.descriptor.application, bot: t }, !1, n);
                                (o.descriptor = { ...o.descriptor, ...l }), (r = !0);
                            }),
                            r
                        );
                    })(e.guildId, e.members) || n;
            return n;
        },
    }),
    Z = J;
function ee(e, t, n) {
    let [r, s] = i.useState(!0),
        a = (0, o.cf)([J], () => ("channel" === e.type ? J.getContextState(e) : J.getUserState()));
    return (
        i.useEffect(() => {
            if (r) {
                if ("contextless" === e.type) {
                    n && e_(a) && (0, R.$)({ type: "user" });
                    return;
                }
                n &&
                    t &&
                    el(e.channel) &&
                    (T.default.track(P.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(J.indices).length,
                    }),
                    e_(a) &&
                        (null != e.channel.guild_id
                            ? (0, R.$)({ type: "guild", guildId: e.channel.guild_id })
                            : (0, R.$)({ type: "channel", channelId: e.channel.id }))),
                    s(!1);
            }
        }, [a, n, e, t, r]),
        a
    );
}
function et(e, t) {
    let [n, r] = i.useState(!0),
        s = (0, o.cf)([J], () => J.indices[e] ?? V);
    return (
        i.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (T.default.track(P.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(J.indices).length,
                    }),
                    e_(s) && (0, R.$)({ type: "guild", guildId: e })),
                r(!1));
        }, [s, t, e, n]),
        s
    );
}
function en(e, t) {
    let [n, r] = i.useState(!0),
        s = (0, o.cf)([J], () => J.getUserState());
    return (
        i.useEffect(() => {
            n && (t && e_(s) && e && (0, R.$)({ type: "user" }), r(!1));
        }, [s, t, e, n]),
        s
    );
}
function ei(e, t, n, r) {
    let { descriptors: s, commands: a, sectionedCommands: o, loading: l } = es(e, n, r),
        _ = i.useMemo(() => ("channel" === e.type ? { channel: e.channel, guild: t } : void 0), [e, t]),
        d = (0, N.F)(_);
    return i.useMemo(() => {
        if (!r.includeFrecency || 0 === d.length)
            return { descriptors: s, commands: a, sectionedCommands: o, loading: l };
        let e = a
            .filter((e) => d.includes(e.id))
            .sort((e, t) => {
                let n = O.Ay.getScoreWithoutLoadingLatest(_, e);
                return O.Ay.getScoreWithoutLoadingLatest(_, t) - n;
            })
            .splice(0, w.Ob);
        return 0 === e.length
            ? { descriptors: s, commands: a, sectionedCommands: o, loading: l }
            : {
                  descriptors: [S.gZ[w.Ik.FRECENCY], ...s],
                  commands: e.concat(a),
                  sectionedCommands: [{ section: S.gZ[w.Ik.FRECENCY], data: e }, ...o],
                  loading: l,
              };
    }, [l, r.includeFrecency, d, a, s, o, _]);
}
let er = Object.freeze({
    applications: { useFrecency: !1, useScore: !1 },
    commands: { useFrecency: !0, useScore: !0 },
});
function es(e, t, n) {
    let r = "channel" === e.type ? e.channel : void 0,
        s = (0, L.MW)(r, t.commandTypes),
        a = !1 !== t.applicationCommands,
        l = ee(e, a, n.allowFetch),
        _ = en(a, n.allowFetch),
        d = (0, o.bG)([J], () => J.getApplicationStates()),
        u = (0, o.bG)([J], () => J.applicationIndicesVersion);
    return (
        !(function (e, t) {
            let [n, r] = i.useState(!0),
                s = (0, o.bG)([J], () => J.getApplicationState(e));
            i.useEffect(() => {
                n && (t && e_(s) && null != e && (0, R.$)({ type: "application", applicationId: e }), r(!1));
            }, [t, e, s, n]);
        })(n.applicationId, n.allowFetch),
        i.useMemo(
            () =>
                ea({
                    permissionContext: s,
                    text: t.text,
                    allowApplicationCommands: a,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: l,
                    userState: _,
                    launcherContext: e,
                    applicationStates: n.allowApplicationState ? d : new Map(),
                    sortOptions: n.sortOptions,
                    singleApplicationId: n.applicationId,
                    installOnDemand: n.installOnDemand,
                }),
            [
                s,
                t.text,
                t.builtIns,
                a,
                n.scoreMethod,
                n.allowEmptySections,
                n.sortOptions,
                n.allowApplicationState,
                n.applicationId,
                n.installOnDemand,
                l,
                _,
                e,
                d,
                u,
            ],
        )
    );
}
function ea(e) {
    let {
            permissionContext: t,
            contextState: n,
            userState: i,
            applicationStates: r,
            text: a,
            builtIns: o = C.n.ALLOW,
            allowApplicationCommands: l = !0,
            singleApplicationId: _,
            allowEmptySections: d = !1,
            scoreMethod: c = C.M.NONE,
            sortOptions: E = er,
            installOnDemand: h = !1,
        } = e,
        { commandTypes: f } = t,
        g = a?.toLowerCase(),
        A = g?.split(" "),
        p = o === C.n.ONLY_TEXT,
        T = o !== C.n.DENY ? (0, S.Ez)(f, !0, p) : [],
        N = [],
        R = {
            permissionContext: t,
            query: g,
            splitQuery: A,
            allowEmptySections: d,
            scoreMethod: c,
            installOnDemand: h,
        },
        y = n.result?.sections ?? {},
        D = i.result?.sections ?? {},
        L = new Set();
    if (l) {
        if (t.hasBaseAccessPermissions)
            for (let e in y) {
                let t = y[e];
                (null == _ || t.descriptor.id === _) && L.add(e);
            }
        for (let e in D) {
            let t = D[e];
            (null == _ || t.descriptor.id === _) && L.add(e);
        }
    }
    let v = new Map();
    for (let [e, t] of r)
        if (null == _ || e === _) {
            let e = t.result?.sections;
            if (null != e) for (let t of Object.keys(e)) L.add(t), v.set(t, e[t]);
        }
    for (let e of Array.from(L)) {
        let t,
            n,
            i = y[e],
            r = D[e],
            a = v.get(e),
            o = null != i,
            l = null != r;
        if (null != i && null != r) {
            for (let e in ((t = r.descriptor), (n = []), r.commands)) {
                let t = r.commands[e];
                n.push(t);
            }
            for (let e in i.commands)
                if (!(e in r.commands)) {
                    let t = i.commands[e];
                    n.push(t);
                }
        } else
            null != i
                ? ((t = i.descriptor), (n = Object.values(i.commands)))
                : null != r
                  ? ((t = r.descriptor), (n = Object.values(r.commands)))
                  : null != a && ((t = a.descriptor), (n = Object.values(a.commands)));
        s()(null != t, "Failed to select application descriptor"),
            s()(null != n, "Failed to select list of application commands");
        let _ = eo(t, n, o, l, R);
        null != _ && N.push(_);
    }
    if (
        (E.applications.useFrecency && m.bW.loadIfNecessary(),
        N.sort((e, t) => {
            if (E.applications.useScore && c === C.M.APPLICATION_ONLY) {
                let n = e.data[0]?.score ?? Number.MAX_VALUE,
                    i = t.data[0]?.score ?? Number.MAX_VALUE;
                if (n !== i) return n - i;
            }
            if (E.applications.useFrecency) {
                let n = u.A.getScoreWithoutLoadingLatest(e.section.id),
                    i = u.A.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== i) return i - n;
            }
            return eE(e.section.name, t.section.name);
        }),
        T.length > 0 || !0 === d)
    ) {
        let e = eo(S.gZ[w.Ik.BUILT_IN], T, !0, !0, R);
        null != e && N.push(e);
    }
    let P = N.flatMap((e) => e.data.map((t) => ({ ...t, section: e.section })));
    if (c === C.M.COMMAND_ONLY || c === C.M.COMMAND_OR_APPLICATION) {
        let e = t.context,
            n = I.A.getGuild(t?.context?.guild_id);
        E.commands.useFrecency && m.bW.loadIfNecessary();
        let i = null != e ? { channel: e, guild: n } : void 0;
        P.sort((e, t) => {
            if (E.commands.useScore) {
                let n = e.score ?? 0,
                    i = t.score ?? 0;
                if (n !== i) return n - i;
            }
            if (E.commands.useFrecency) {
                let n = O.Ay.getScoreWithoutLoadingLatest(i, e),
                    r = O.Ay.getScoreWithoutLoadingLatest(i, t);
                if (n !== r) return r - n;
            }
            return eE(e.displayName, t.displayName);
        });
    }
    return {
        commands: P,
        descriptors: N.map((e) => e.section),
        sectionedCommands: N,
        loading:
            n?.fetchState.fetching === !0 ||
            i?.fetchState.fetching === !0 ||
            (null != _ && r.get(_)?.fetchState.fetching === !0),
    };
}
function eo(e, t, n, i, r) {
    let s,
        {
            query: a,
            splitQuery: o,
            allowEmptySections: l,
            scoreMethod: _,
            permissionContext: d,
            installOnDemand: u,
        } = r,
        { context: c, userId: E, roleIds: h, isImpersonating: m } = d,
        f = c?.guild_id != null ? v.we(e.permissions, c.guild_id, E, h, m) : null,
        g = c?.guild_id != null ? v._W(e.permissions, c, c.guild_id) : null,
        A = [];
    for (let r of t)
        v.zl(r, d, {
            applicationAllowedForUser: f,
            applicationAllowedForChannel: g,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: i || u,
        }) === v.CA.ALLOWED && A.push(r);
    return 0 !==
        (s =
            _ !== C.M.NONE && null != a && null != o
                ? (function (e, t, n, i, r) {
                      let s,
                          a = [];
                      if (r === C.M.APPLICATION_ONLY || r === C.M.COMMAND_OR_APPLICATION) {
                          let t = i.name.toLocaleLowerCase();
                          if (t.startsWith(e)) s = 5;
                          else if (t.includes(e)) s = 6;
                          else {
                              let t = i.application?.description?.toLocaleLowerCase();
                              t?.includes(e) && (s = 8);
                          }
                      }
                      let o = t[0],
                          l = t.slice(1).join(" ");
                      for (let t of n) {
                          let n;
                          (r === C.M.COMMAND_ONLY || r === C.M.COMMAND_OR_APPLICATION) &&
                              (n = (function (e, t, n, i) {
                                  let r = e.untranslatedName.toLocaleLowerCase(),
                                      s = e.displayName.toLocaleLowerCase();
                                  if (r.startsWith(t) || s.startsWith(t)) return 0;
                                  if (
                                      (r.startsWith(n) && r.split(" ").slice(1).join(" ").startsWith(i)) ||
                                      (s.startsWith(n) && s.split(" ").slice(1).join(" ").startsWith(i))
                                  )
                                      return 1;
                                  if (r.includes(t) || s?.includes(t)) return 2;
                                  let a = !1;
                                  for (let { name: n, serverLocalizedName: i } of e.options ?? []) {
                                      if (
                                          n.startsWith(t) ||
                                          `${r} ${n}`.startsWith(t) ||
                                          (null != s && `${s} ${n}`.startsWith(t)) ||
                                          (null != i &&
                                              (i.startsWith(t) ||
                                                  `${r} ${i}`.startsWith(t) ||
                                                  (null != s && `${s} ${i}`.startsWith(t))))
                                      )
                                          return 3;
                                      (n.includes(t) || i?.includes(t)) && (a = !0);
                                  }
                                  if (a) return 4;
                                  let o = e.untranslatedDescription.toLocaleLowerCase(),
                                      l = e.displayDescription.toLocaleLowerCase();
                                  if (o.includes(t) || l.includes(t)) return 7;
                              })(t, e, o, l)),
                              (void 0 === n || (void 0 !== s && s < n)) && (n = s),
                              void 0 !== n && a.push({ ...t, score: n });
                      }
                      return a;
                  })(a, o, A, e, _)
                : A).length || l
        ? ((_ === C.M.NONE || _ === C.M.APPLICATION_ONLY) && s.sort((e, t) => eE(e.displayName, t.displayName)),
          { section: e, data: s })
        : null;
}
function el(e) {
    return e?.guild_id != null || (e.type === P.rbe.DM && p.default.getUser(e.getRecipientId())?.bot === !0);
}
function e_(e) {
    var t;
    return (
        (t = e),
        t.result?.version !== t.serverVersion &&
            !e.fetchState.fetching &&
            (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    );
}
function ed(e) {
    let t = {
        ...e,
        choices: e.choices?.map(eu),
        description: e.description_default ?? e.description,
        name: e.name_default ?? e.name,
        options: e.options?.map(ed),
    };
    return (
        e.description !== e.description_default && (t.description_localized = e.description),
        e.name !== e.name_default && (t.name_localized = e.name),
        t
    );
}
function eu(e) {
    let t = { ...e, name: e.name_default ?? e.name };
    return e.name !== e.name_default && (t.name_localized = e.name), t;
}
function ec(e, t) {
    let n = [];
    if ((null != e.user && n.push({ type: y.RA.USER, id: t, permission: e.user }), null != e.channels))
        for (let [t, i] of Object.entries(e.channels)) n.push({ type: y.RA.CHANNEL, id: t, permission: i });
    if (null != e.roles) for (let [t, i] of Object.entries(e.roles)) n.push({ type: y.RA.ROLE, id: t, permission: i });
    return n;
}
function eE(e, t) {
    return J.collator.compare(e, t);
}
function eh(e, t) {
    return eE(e, t);
}
function em(e, t) {
    let n, i;
    if (t === w.Ik.BUILT_IN)
        return {
            descriptor: S.gZ[w.Ik.BUILT_IN],
            sectionCommands: (0, S.Ez)([d.kc.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0,
        };
    let r = J.getContextState(e),
        s = J.getUserState(),
        a = r.result?.sections ?? {},
        o = s.result?.sections ?? {},
        l = a[t],
        _ = o[t],
        u = J.getApplicationState(t).result?.sections?.[t];
    if (null != l && null != _) {
        for (let e in ((n = _.descriptor), (i = []), _.commands)) {
            let t = _.commands[e];
            i.push(t);
        }
        for (let e in l.commands)
            if (!(e in _.commands)) {
                let t = l.commands[e];
                i.push(t);
            }
    } else
        null != l
            ? ((n = l.descriptor), (i = Object.values(l.commands)))
            : null != _
              ? ((n = _.descriptor), (i = Object.values(_.commands)))
              : null != u && ((n = u.descriptor), (i = Object.values(u.commands)));
    return { descriptor: n, sectionCommands: i, isGuildInstalled: null != l, isUserInstalled: null != _ };
}
