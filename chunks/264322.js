(n(321073), n(938796));
var i = n(582128),
    r = n(91871),
    a = n.n(r),
    s = n(284009),
    l = n.n(s),
    o = n(683588),
    d = n(855986),
    c = n(73153),
    u = n(778858),
    _ = n(155718),
    E = n(630248),
    A = n(626584),
    h = n(200662),
    f = n(773669),
    I = n(594061),
    p = n(46653),
    m = n(734057),
    T = n(696451),
    g = n(71393),
    S = n(287809),
    N = n(129230),
    C = n(12115),
    O = n(56494),
    R = n(26909),
    L = n(577700),
    y = n(210978),
    D = n(392054),
    b = n(168186),
    v = n(240591),
    P = n(46477),
    M = n(73510),
    U = n(652215);
let w = new A.A("ApplicationCommandIndexStore"),
    G = Symbol("currentUser"),
    x = Symbol("stale"),
    k = Symbol("current"),
    F = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: !0 }),
    B = Object.freeze({
        serverVersion: k,
        fetchState: { fetching: !1 },
        result: { sections: {}, sectionIdsByBotId: {}, version: k },
    }),
    V = Object.freeze({ serverVersion: x, fetchState: { fetching: !1 } }),
    H = { sensitivity: "accent", numeric: !0 },
    j = !1,
    W = [];
function Y(e) {
    switch (e.type) {
        case "guild":
            return e.guildId;
        case "channel":
            return e.channelId;
        case "user":
            return G;
        case "application":
            return e.applicationId;
    }
}
function K(e, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = Y(e),
        a = J.indices[r];
    return (
        null != a
            ? ("fetchState" in t && a.fetchState.fetching && a.fetchState.abort.abort(), (n = { ...a, ...t }))
            : i && (n = { serverVersion: x, fetchState: { fetching: !1 }, ...t }),
        void 0 !== n &&
            ((J.indices[r] = n),
            "application" === e.type &&
                (J.applicationIndices.set(r, n), (J.applicationIndicesVersion = J.applicationIndicesVersion + 1))),
        a
    );
}
function $(e) {
    let t = Y(e),
        n = J.indices[t];
    (n?.fetchState.fetching && n.fetchState.abort.abort(), delete J.indices[t]);
}
function z() {
    for (let e of Object.values(J.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    J.indices = {};
}
async function X(e) {
    let t = new AbortController(),
        n = new o.K();
    K(e, { fetchState: { fetching: !0, abort: t, promise: n.promise } }, !0);
    try {
        n.resolve(await (0, L.E)(e, t));
    } catch (e) {
        n.reject(e);
    }
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: n, index: i } = e,
        r = S.default.getCurrentUser()?.id;
    if (null == r) return (j || W.push(e), !1);
    let a = {},
        s = {},
        l = new Set();
    for (let e of i.applications) {
        var o;
        if (null == e.bot && null != e.bot_id) {
            s[e.bot_id] = e.id;
            let t = S.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : l.add(e.bot_id);
        } else null != e.bot && (s[e.bot.id] = e.id);
        let t = {
            descriptor: {
                ...(0, b.bq)(
                    {
                        description: (o = e).description,
                        icon: o.icon,
                        id: o.id,
                        name: o.name,
                        bot: o.bot,
                        flags: o.flags,
                        embedded_surfaces: o.embedded_surfaces,
                    },
                    !1,
                ),
                permissions: null != e.permissions ? (0, h.UZ)(ec(e.permissions, r)) : void 0,
                botId: e.bot_id,
            },
            commands: {},
        };
        a[e.id] = t;
    }
    for (let e of ("guild" === n.type && l.size > 0 && u.A.requestMembersById(n.guildId, [...l]),
    (0, b.Lz)(
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
                    options: t.options?.map(eo) ?? [],
                    permissions: null != t.permissions ? ec(t.permissions, n) : void 0,
                }),
                t.description !== t.description_default && (i.description_localized = t.description),
                t.name !== t.name_default && (i.name_localized = t.name),
                i
            );
        }),
        !0,
    ))) {
        let t = a[e.applicationId];
        if (null == t) {
            w.error("Command has no matching application");
            continue;
        }
        t.commands[e.id] = e;
    }
    let d = i.version ?? k;
    K(
        n,
        { serverVersion: d, result: { sections: a, sectionIdsByBotId: s, version: d }, fetchState: { fetching: !1 } },
        t,
    );
}
function Z() {
    K({ type: "user" }, { serverVersion: x });
}
class Q extends d.Ay.Store {
    static displayName = "ApplicationCommandIndexStore";
    indices = {};
    applicationIndices = new Map();
    applicationIndicesVersion = 0;
    oldLocale = f.default.locale;
    collator = new Intl.Collator(f.default.locale, H);
    initialize() {
        (this.waitFor(f.default),
            this.waitFor(R.Ay, E.A, p.default, m.A, T.Ay, g.A, S.default),
            this.syncWith([f.default], () => {
                let e;
                (e = f.default.locale) !== J.oldLocale &&
                    (z(),
                    (J.collator = new Intl.Collator(e, { sensitivity: "accent", numeric: !0 })),
                    (J.oldLocale = e));
            }));
    }
    getContextState(e) {
        return "contextless" !== e.type && es(e.channel) ? (this.indices[e.channel.guild_id ?? e.channel.id] ?? V) : B;
    }
    hasContextStateApplication(e) {
        let { applicationId: t, channelId: n, guildId: i } = e,
            r = this.indices[i ?? n];
        return null != (r?.result?.sections ?? {})[t];
    }
    getGuildState(e) {
        return null == e ? B : (this.indices[e] ?? V);
    }
    getUserState() {
        return this.indices[G] ?? V;
    }
    hasUserStateApplication(e) {
        let t = this.indices[G];
        return null != (t?.result?.sections ?? {})[e];
    }
    getApplicationState(e) {
        return null == e ? B : (this.indices[e] ?? V);
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == S.default.getCurrentUser()) return F;
        let i = "channel" === e.type ? e.channel : void 0,
            r = this.getContextState(e),
            a = this.getUserState(),
            s = this.getApplicationState(n.applicationId),
            l = this.getApplicationStates(),
            o = (0, v.Bh)(i, t.commandTypes),
            d = null == i || o?.hasBaseAccessPermissions === !0,
            c = !1 !== t.applicationCommands,
            u = !1;
        n.allowFetch &&
            (c &&
                d &&
                null != i &&
                es(i) &&
                (N.default.track(U.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == r.result,
                    size: Object.keys(J.indices).length,
                }),
                el(r) &&
                    null != i &&
                    (null != i.guild_id
                        ? (0, L.$)({ type: "guild", guildId: i.guild_id })
                        : (0, L.$)({ type: "channel", channelId: i.id }),
                    (u = !0))),
            el(a) && ((0, L.$)({ type: "user" }), (u = !0)),
            el(s) &&
                null != n.applicationId &&
                ((0, L.$)({ type: "application", applicationId: n.applicationId }), (u = !0)));
        let _ = er({
            permissionContext: o,
            text: t.text,
            allowApplicationCommands: c,
            builtIns: t.builtIns,
            scoreMethod: n.scoreMethod,
            allowEmptySections: n.allowEmptySections,
            contextState: r,
            userState: a,
            applicationStates: n.allowApplicationState ? l : new Map(),
            sortOptions: n.sortOptions,
            singleApplicationId: n.applicationId,
            installOnDemand: n.installOnDemand,
        });
        return ((_.loading = _.loading || u), _);
    }
    queryInstallOnDemandApp(e, t) {
        let n = m.A.getChannel(t);
        null != n &&
            this.query(
                null != n ? { channel: n, type: "channel" } : { type: "contextless" },
                { commandTypes: [_.kc.CHAT] },
                { placeholderCount: 5, scoreMethod: y.M.COMMAND_ONLY, applicationId: e, allowFetch: !0 },
            );
    }
}
let J = new Q(c.h, {
    LOGOUT: z,
    CONNECTION_OPEN: function () {
        for (let e of Object.values(J.indices)) e.serverVersion = x;
        for (let e of W) q(e);
        ((W = []), (j = !0));
    },
    APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function (e) {
        let { target: t } = e,
            n = Y(t);
        el(J.indices[n] ?? V) && X(t);
    },
    APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: q,
    APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function (e) {
        let { target: t } = e;
        K(t, { fetchState: { fetching: !1, retryAfter: Date.now() + 5e3 } });
    },
    APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function (e) {
        let { applicationId: t, channelId: n, guildId: i } = e;
        (J.hasContextStateApplication({ applicationId: t, channelId: n, guildId: i }) &&
            K(null != i ? { type: "guild", guildId: i } : { type: "channel", channelId: n }, { serverVersion: x }),
            J.hasUserStateApplication(t) && K({ type: "user" }, { serverVersion: x }),
            J.hasApplicationState(t) && K({ type: "application", applicationId: t }, { serverVersion: x }));
    },
    APPLICATION_COMMAND_INDEX_APPLICATION_STALE: function (e) {
        let { applicationId: t } = e;
        for (let e of Reflect.ownKeys(J.indices))
            ("string" == typeof e && J.applicationIndices.has(e)) ||
                (J.indices[e] = { ...J.indices[e], serverVersion: x });
        J.hasApplicationState(t) && K({ type: "application", applicationId: t }, { serverVersion: x });
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        $({ type: "channel", channelId: t.id });
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        $({ type: "guild", guildId: t.id });
    },
    USER_APPLICATION_UPDATE: Z,
    USER_APPLICATION_REMOVE: Z,
    GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function (e) {
        let { guildId: t, version: n } = e,
            i = K({ type: "guild", guildId: t }, { serverVersion: n ?? x }),
            r = i?.result?.sectionIdsByBotId;
        if (null != r)
            for (let e in r) {
                let t = m.A.getDMFromUserId(e);
                null != t && K({ type: "channel", channelId: t }, { serverVersion: x });
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
                            let s = i.sections[a];
                            (l()(null != s, "Bot has no matching index section"),
                                l()(null != s.descriptor.application, "Bot's index section has no application info"));
                            let o = (0, b.bq)({ ...s.descriptor.application, bot: t }, !1, n);
                            ((s.descriptor = { ...s.descriptor, ...o }), (r = !0));
                        }),
                        r
                    );
                })(e.guildId, e.members) || n;
        return n;
    },
});
function ee(e, t, n) {
    let [r, a] = i.useState(!0),
        s = (0, d.cf)([J], () => ("channel" === e.type ? J.getContextState(e) : J.getUserState()));
    return (
        i.useEffect(() => {
            if (r) {
                if ("contextless" === e.type) {
                    n && el(s) && (0, L.$)({ type: "user" });
                    return;
                }
                (n &&
                    t &&
                    es(e.channel) &&
                    (N.default.track(U.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(J.indices).length,
                    }),
                    el(s) &&
                        (null != e.channel.guild_id
                            ? (0, L.$)({ type: "guild", guildId: e.channel.guild_id })
                            : (0, L.$)({ type: "channel", channelId: e.channel.id }))),
                    a(!1));
            }
        }, [s, n, e, t, r]),
        s
    );
}
function et(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, d.cf)([J], () => J.getUserState());
    return (
        i.useEffect(() => {
            n && (t && el(a) && e && (0, L.$)({ type: "user" }), r(!1));
        }, [a, t, e, n]),
        a
    );
}
let en = Object.freeze({
    applications: { useFrecency: !1, useScore: !1 },
    commands: { useFrecency: !0, useScore: !0 },
});
function ei(e, t, n) {
    let r = "channel" === e.type ? e.channel : void 0,
        a = (0, v.MW)(r, t.commandTypes),
        s = !1 !== t.applicationCommands,
        l = ee(e, s, n.allowFetch),
        o = et(s, n.allowFetch),
        c = (0, d.bG)([J], () => J.getApplicationStates()),
        u = (0, d.bG)([J], () => J.applicationIndicesVersion);
    return (
        !(function (e, t) {
            let [n, r] = i.useState(!0),
                a = (0, d.bG)([J], () => J.getApplicationState(e));
            i.useEffect(() => {
                n && (t && el(a) && null != e && (0, L.$)({ type: "application", applicationId: e }), r(!1));
            }, [t, e, a, n]);
        })(n.applicationId, n.allowFetch),
        i.useMemo(
            () =>
                er({
                    permissionContext: a,
                    text: t.text,
                    allowApplicationCommands: s,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: l,
                    userState: o,
                    launcherContext: e,
                    applicationStates: n.allowApplicationState ? c : new Map(),
                    sortOptions: n.sortOptions,
                    singleApplicationId: n.applicationId,
                    installOnDemand: n.installOnDemand,
                }),
            [
                a,
                t.text,
                t.builtIns,
                s,
                n.scoreMethod,
                n.allowEmptySections,
                n.sortOptions,
                n.allowApplicationState,
                n.applicationId,
                n.installOnDemand,
                l,
                o,
                e,
                c,
                u,
            ],
        )
    );
}
function er(e) {
    let {
            permissionContext: t,
            contextState: n,
            userState: i,
            applicationStates: r,
            text: a,
            builtIns: s = y.n.ALLOW,
            allowApplicationCommands: o = !0,
            singleApplicationId: d,
            allowEmptySections: c = !1,
            scoreMethod: u = y.M.NONE,
            sortOptions: _ = en,
            installOnDemand: A = !1,
        } = e,
        { commandTypes: h } = t,
        f = a?.toLowerCase(),
        p = f?.split(" "),
        m = s === y.n.ONLY_TEXT,
        T = s !== y.n.DENY ? (0, C.Ez)(h, !0, m) : [],
        S = [],
        N = {
            permissionContext: t,
            query: f,
            splitQuery: p,
            allowEmptySections: c,
            scoreMethod: u,
            installOnDemand: A,
        },
        O = n.result?.sections ?? {},
        L = i.result?.sections ?? {},
        D = new Set();
    if (o) {
        if (t.hasBaseAccessPermissions)
            for (let e in O) {
                let t = O[e];
                (null == d || t.descriptor.id === d) && D.add(e);
            }
        for (let e in L) {
            let t = L[e];
            (null == d || t.descriptor.id === d) && D.add(e);
        }
    }
    let b = new Map();
    for (let [e, t] of r)
        if (null == d || e === d) {
            let e = t.result?.sections;
            if (null != e) for (let t of Object.keys(e)) (D.add(t), b.set(t, e[t]));
        }
    for (let e of Array.from(D)) {
        let t,
            n,
            i = O[e],
            r = L[e],
            a = b.get(e),
            s = null != i,
            o = null != r;
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
        (l()(null != t, "Failed to select application descriptor"),
            l()(null != n, "Failed to select list of application commands"));
        let d = ea(t, n, s, o, N);
        null != d && S.push(d);
    }
    if (
        (_.applications.useFrecency && I.bW.loadIfNecessary(),
        S.sort((e, t) => {
            if (_.applications.useScore && u === y.M.APPLICATION_ONLY) {
                let n = e.data[0]?.score ?? Number.MAX_VALUE,
                    i = t.data[0]?.score ?? Number.MAX_VALUE;
                if (n !== i) return n - i;
            }
            if (_.applications.useFrecency) {
                let n = E.A.getScoreWithoutLoadingLatest(e.section.id),
                    i = E.A.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== i) return i - n;
            }
            return eu(e.section.name, t.section.name);
        }),
        T.length > 0 || !0 === c)
    ) {
        let e = ea(C.gZ[M.Ik.BUILT_IN], T, !0, !0, N);
        null != e && S.push(e);
    }
    let v = S.flatMap((e) => e.data.map((t) => ({ ...t, section: e.section })));
    if (u === y.M.COMMAND_ONLY || u === y.M.COMMAND_OR_APPLICATION) {
        let e = t.context,
            n = g.A.getGuild(t?.context?.guild_id),
            i = S.some((e) => e.section.id !== M.Ik.BUILT_IN && e.data.length > 0);
        _.commands.useFrecency && i && I.bW.loadIfNecessary();
        let r = null != e ? { channel: e, guild: n } : void 0;
        v.sort((e, t) => {
            if (_.commands.useScore) {
                let n = e.score ?? 0,
                    i = t.score ?? 0;
                if (n !== i) return n - i;
            }
            if (_.commands.useFrecency) {
                let n = R.Ay.getScoreWithoutLoadingLatest(r, e),
                    i = R.Ay.getScoreWithoutLoadingLatest(r, t);
                if (n !== i) return i - n;
            }
            return eu(e.displayName, t.displayName);
        });
    }
    return {
        commands: v,
        descriptors: S.map((e) => e.section),
        sectionedCommands: S,
        loading:
            n?.fetchState.fetching === !0 ||
            i?.fetchState.fetching === !0 ||
            (null != d && r.get(d)?.fetchState.fetching === !0),
    };
}
function ea(e, t, n, i, r) {
    let s,
        {
            query: l,
            splitQuery: o,
            allowEmptySections: d,
            scoreMethod: c,
            permissionContext: u,
            installOnDemand: _,
        } = r,
        { context: E, userId: A, roleIds: h, isImpersonating: f } = u,
        I = E?.guild_id != null ? P.we(e.permissions, E.guild_id, A, h, f) : null,
        p = E?.guild_id != null ? P._W(e.permissions, E, E.guild_id) : null,
        m = [];
    for (let r of t)
        P.zl(r, u, {
            applicationAllowedForUser: I,
            applicationAllowedForChannel: p,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: i || _,
        }) === P.CA.ALLOWED && m.push(r);
    return 0 !==
        (s =
            c !== y.M.NONE && null != l && null != o
                ? (function (e, t, n, i, r) {
                      let s,
                          l = [];
                      if (r === y.M.APPLICATION_ONLY || r === y.M.COMMAND_OR_APPLICATION) {
                          let t = i.name.toLocaleLowerCase();
                          if (t.startsWith(e)) s = 5;
                          else if (t.includes(e)) s = 6;
                          else {
                              let n = i.application?.description?.toLocaleLowerCase();
                              n?.includes(e) ? (s = 8) : a()(e, t) && (s = 11);
                          }
                      }
                      let o = t[0],
                          d = t.slice(1).join(" ");
                      for (let t of n) {
                          let n;
                          ((r === y.M.COMMAND_ONLY || r === y.M.COMMAND_OR_APPLICATION) &&
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
                                  let l = !1;
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
                                      (n.includes(t) || i?.includes(t)) && (l = !0);
                                  }
                                  if (l) return 4;
                                  let o = e.untranslatedDescription.toLocaleLowerCase(),
                                      d = e.displayDescription.toLocaleLowerCase();
                                  if (o.includes(t) || d.includes(t)) return 7;
                                  if (a()(t, r) || a()(t, s)) return 9;
                                  for (let { name: n, serverLocalizedName: i } of e.options ?? [])
                                      if (a()(t, n) || (null != i && a()(t, i))) return 10;
                                  if (a()(t, o) || a()(t, d)) return 12;
                              })(t, e, o, d)),
                              (void 0 === n || (void 0 !== s && s < n)) && (n = s),
                              void 0 !== n && l.push({ ...t, score: n }));
                      }
                      return l;
                  })(l, o, m, e, c)
                : m).length || d
        ? ((c === y.M.NONE || c === y.M.APPLICATION_ONLY) && s.sort((e, t) => eu(e.displayName, t.displayName)),
          { section: e, data: s })
        : null;
}
function es(e) {
    return e?.guild_id != null || (e?.type === U.rbe.DM && S.default.getUser(e.getRecipientId())?.bot === !0);
}
function el(e) {
    var t;
    return (
        (t = e),
        t.result?.version !== t.serverVersion &&
            !e.fetchState.fetching &&
            (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    );
}
function eo(e) {
    let t = {
        ...e,
        choices: e.choices?.map(ed),
        description: e.description_default ?? e.description,
        name: e.name_default ?? e.name,
        options: e.options?.map(eo),
    };
    return (
        e.description !== e.description_default && (t.description_localized = e.description),
        e.name !== e.name_default && (t.name_localized = e.name),
        t
    );
}
function ed(e) {
    let t = { ...e, name: e.name_default ?? e.name };
    return (e.name !== e.name_default && (t.name_localized = e.name), t);
}
function ec(e, t) {
    let n = [];
    if ((null != e.user && n.push({ type: D.RA.USER, id: t, permission: e.user }), null != e.channels))
        for (let [t, i] of Object.entries(e.channels)) n.push({ type: D.RA.CHANNEL, id: t, permission: i });
    if (null != e.roles) for (let [t, i] of Object.entries(e.roles)) n.push({ type: D.RA.ROLE, id: t, permission: i });
    return n;
}
function eu(e, t) {
    return J.collator.compare(e, t);
}
n.d(
    t,
    {},
    {
        A4: et,
        Ay: J,
        ON: function (e, t) {
            let [n, r] = i.useState(!0),
                a = (0, d.cf)([J], () => J.indices[e] ?? V);
            return (
                i.useEffect(() => {
                    n &&
                        null != e &&
                        (t &&
                            (N.default.track(U.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == a.result,
                                size: Object.keys(J.indices).length,
                            }),
                            el(a) && (0, L.$)({ type: "guild", guildId: e })),
                        r(!1));
                }, [a, t, e, n]),
                a
            );
        },
        RF: function (e, t) {
            return eu(e, t);
        },
        SD: ee,
        Sx: function (e, t) {
            let n, i;
            if (t === M.Ik.BUILT_IN)
                return {
                    descriptor: C.gZ[M.Ik.BUILT_IN],
                    sectionCommands: (0, C.Ez)([_.kc.CHAT], !0, !1),
                    isGuildInstalled: !0,
                    isUserInstalled: !0,
                };
            let r = J.getContextState(e),
                a = J.getUserState(),
                s = r.result?.sections ?? {},
                l = a.result?.sections ?? {},
                o = s[t],
                d = l[t],
                c = J.getApplicationState(t).result?.sections?.[t];
            if (null != o && null != d) {
                for (let e in ((n = d.descriptor), (i = []), d.commands)) {
                    let t = d.commands[e];
                    i.push(t);
                }
                for (let e in o.commands)
                    if (!(e in d.commands)) {
                        let t = o.commands[e];
                        i.push(t);
                    }
            } else
                null != o
                    ? ((n = o.descriptor), (i = Object.values(o.commands)))
                    : null != d
                      ? ((n = d.descriptor), (i = Object.values(d.commands)))
                      : null != c && ((n = c.descriptor), (i = Object.values(c.commands)));
            return { descriptor: n, sectionCommands: i, isGuildInstalled: null != o, isUserInstalled: null != d };
        },
        XC: function (e, t, n, r) {
            let { descriptors: a, commands: s, sectionedCommands: l, loading: o } = ei(e, n, r),
                d = i.useMemo(() => ("channel" === e.type ? { channel: e.channel, guild: t } : void 0), [e, t]),
                c = (0, O.F)(d);
            return i.useMemo(() => {
                if (!r.includeFrecency || 0 === c.length)
                    return { descriptors: a, commands: s, sectionedCommands: l, loading: o };
                let e = s
                    .filter((e) => c.includes(e.id))
                    .sort((e, t) => {
                        let n = R.Ay.getScoreWithoutLoadingLatest(d, e);
                        return R.Ay.getScoreWithoutLoadingLatest(d, t) - n;
                    })
                    .splice(0, 5);
                return 0 === e.length
                    ? { descriptors: a, commands: s, sectionedCommands: l, loading: o }
                    : {
                          descriptors: [C.gZ[M.Ik.FRECENCY], ...a],
                          commands: e.concat(s),
                          sectionedCommands: [{ section: C.gZ[M.Ik.FRECENCY], data: e }, ...l],
                          loading: o,
                      };
            }, [o, r.includeFrecency, c, s, a, l, d]);
        },
        ZA: ei,
        Zn: async function (e) {
            let t = Y(e),
                n = J.indices[t] ?? V;
            if (!el(n)) {
                if (n.fetchState.fetching) {
                    let e = n.fetchState.promise;
                    return (await e, J.indices[t] ?? V);
                }
                return n;
            }
            return (await X(e), J.indices[t] ?? V);
        },
    },
);
