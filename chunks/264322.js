"use strict";
n.d(t, {
    A4: () => en,
    Ay: () => J,
    ON: () => et,
    RF: () => ep,
    SD: () => ee,
    Sx: () => eh,
    XC: () => er,
    ZA: () => es,
    Zn: () => $,
}),
    n(321073),
    n(938796);
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(683588),
    o = n(311907),
    l = n(73153),
    u = n(686956),
    c = n(155718),
    d = n(630248),
    _ = n(626584),
    f = n(200662),
    p = n(773669),
    h = n(594061),
    E = n(961350),
    m = n(734057),
    g = n(696451),
    A = n(71393),
    I = n(287809),
    T = n(954571),
    S = n(827785),
    y = n(56494),
    N = n(26909),
    v = n(577700),
    C = n(210978),
    O = n(392054),
    R = n(168186),
    b = n(240591),
    D = n(46477),
    L = n(73510),
    w = n(652215);
let M = new _.A("ApplicationCommandIndexStore"),
    P = Symbol("currentUser"),
    x = Symbol("stale"),
    k = Symbol("current"),
    U = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: !0 }),
    G = Object.freeze({
        serverVersion: k,
        fetchState: { fetching: !1 },
        result: { sections: {}, sectionIdsByBotId: {}, version: k },
    }),
    F = Object.freeze({ serverVersion: x, fetchState: { fetching: !1 } }),
    V = { sensitivity: "accent", numeric: !0 },
    B = !1,
    H = [];
function j(e) {
    switch (e.type) {
        case "guild":
            return e.guildId;
        case "channel":
            return e.channelId;
        case "user":
            return P;
        case "application":
            return e.applicationId;
    }
}
function Y(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = j(e),
        s = Z.indices[i];
    return (
        null != s
            ? ("fetchState" in t && s.fetchState.fetching && s.fetchState.abort.abort(), (n = { ...s, ...t }))
            : r && (n = { serverVersion: x, fetchState: { fetching: !1 }, ...t }),
        void 0 !== n &&
            ((Z.indices[i] = n),
            "application" === e.type &&
                (Z.applicationIndices.set(i, n), (Z.applicationIndicesVersion = Z.applicationIndicesVersion + 1))),
        s
    );
}
function W(e) {
    let t = j(e),
        n = Z.indices[t];
    n?.fetchState.fetching && n.fetchState.abort.abort(), delete Z.indices[t];
}
function K() {
    for (let e of Object.values(Z.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    Z.indices = {};
}
async function $(e) {
    let t = j(e),
        n = Z.indices[t] ?? F;
    if (!eu(n)) {
        if (n.fetchState.fetching) {
            let e = n.fetchState.promise;
            return await e, Z.indices[t] ?? F;
        }
        return n;
    }
    return await z(e), Z.indices[t] ?? F;
}
async function z(e) {
    let t = new AbortController(),
        n = new a.K();
    Y(e, { fetchState: { fetching: !0, abort: t, promise: n.promise } }, !0),
        await (0, v.E)(e, t).then(n.resolve).catch(n.reject);
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: n, index: r } = e,
        i = I.default.getCurrentUser()?.id;
    if (null == i) return B || H.push(e), !1;
    let s = {},
        a = {},
        o = new Set();
    for (let e of r.applications) {
        var l;
        if (null == e.bot && null != e.bot_id) {
            a[e.bot_id] = e.id;
            let t = I.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : o.add(e.bot_id);
        } else null != e.bot && (a[e.bot.id] = e.id);
        let t = {
            descriptor: {
                ...(0, R.bq)(
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
                permissions: null != e.permissions ? (0, f.UZ)(e_(e.permissions, i)) : void 0,
                botId: e.bot_id,
            },
            commands: {},
        };
        s[e.id] = t;
    }
    for (let e of ("guild" === n.type && o.size > 0 && u.A.requestMembersById(n.guildId, [...o]),
    (0, R.Lz)(
        r.application_commands.map((e) => {
            var t, n;
            let r;
            return (
                (t = e),
                (n = i),
                (r = {
                    ...t,
                    description: t.description_default ?? t.description ?? "",
                    dm_permission: t.dm_permission,
                    name: t.name_default ?? t.name,
                    options: t.options?.map(ec) ?? [],
                    permissions: null != t.permissions ? e_(t.permissions, n) : void 0,
                }),
                t.description !== t.description_default && (r.description_localized = t.description),
                t.name !== t.name_default && (r.name_localized = t.name),
                r
            );
        }),
        !0,
    ))) {
        let t = s[e.applicationId];
        if (null == t) {
            M.error("Command has no matching application");
            continue;
        }
        t.commands[e.id] = e;
    }
    let c = r.version ?? k;
    Y(
        n,
        { serverVersion: c, result: { sections: s, sectionIdsByBotId: a, version: c }, fetchState: { fetching: !1 } },
        t,
    );
}
function X() {
    Y({ type: "user" }, { serverVersion: x });
}
class Q extends o.Ay.Store {
    static displayName = "ApplicationCommandIndexStore";
    indices = {};
    applicationIndices = new Map();
    applicationIndicesVersion = 0;
    oldLocale = p.default.locale;
    collator = new Intl.Collator(p.default.locale, V);
    initialize() {
        this.waitFor(p.default),
            this.waitFor(N.Ay, d.A, E.default, m.A, g.Ay, A.A, I.default),
            this.syncWith([p.default], () => {
                let e;
                (e = p.default.locale) !== Z.oldLocale &&
                    (K(),
                    (Z.collator = new Intl.Collator(e, { sensitivity: "accent", numeric: !0 })),
                    (Z.oldLocale = e));
            });
    }
    getContextState(e) {
        return "contextless" !== e.type && el(e.channel) ? (this.indices[e.channel.guild_id ?? e.channel.id] ?? F) : G;
    }
    hasContextStateApplication(e) {
        let { applicationId: t, channelId: n, guildId: r } = e,
            i = this.indices[r ?? n];
        return null != (i?.result?.sections ?? {})[t];
    }
    getGuildState(e) {
        return null == e ? G : (this.indices[e] ?? F);
    }
    getUserState() {
        return this.indices[P] ?? F;
    }
    hasUserStateApplication(e) {
        let t = this.indices[P];
        return null != (t?.result?.sections ?? {})[e];
    }
    getApplicationState(e) {
        return null == e ? G : (this.indices[e] ?? F);
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == I.default.getCurrentUser()) return U;
        let r = "channel" === e.type ? e.channel : void 0,
            i = this.getContextState(e),
            s = this.getUserState(),
            a = this.getApplicationState(n.applicationId),
            o = this.getApplicationStates(),
            l = (0, b.Bh)(r, t.commandTypes),
            u = null == r || l?.hasBaseAccessPermissions === !0,
            c = !1 !== t.applicationCommands,
            d = !1;
        n.allowFetch &&
            (c &&
                u &&
                null != r &&
                el(r) &&
                (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == i.result,
                    size: Object.keys(Z.indices).length,
                }),
                eu(i) &&
                    null != r &&
                    (null != r.guild_id
                        ? (0, v.$)({ type: "guild", guildId: r.guild_id })
                        : (0, v.$)({ type: "channel", channelId: r.id }),
                    (d = !0))),
            eu(s) && ((0, v.$)({ type: "user" }), (d = !0)),
            eu(a) &&
                null != n.applicationId &&
                ((0, v.$)({ type: "application", applicationId: n.applicationId }), (d = !0)));
        let _ = ea({
            permissionContext: l,
            text: t.text,
            allowApplicationCommands: c,
            builtIns: t.builtIns,
            scoreMethod: n.scoreMethod,
            allowEmptySections: n.allowEmptySections,
            contextState: i,
            userState: s,
            applicationStates: n.allowApplicationState ? o : new Map(),
            sortOptions: n.sortOptions,
            singleApplicationId: n.applicationId,
            installOnDemand: n.installOnDemand,
        });
        return (_.loading = _.loading || d), _;
    }
    queryInstallOnDemandApp(e, t) {
        let n = m.A.getChannel(t);
        null != n &&
            this.query(
                null != n ? { channel: n, type: "channel" } : { type: "contextless" },
                { commandTypes: [c.kc.CHAT] },
                { placeholderCount: 5, scoreMethod: C.M.COMMAND_ONLY, applicationId: e, allowFetch: !0 },
            );
    }
}
let Z = new Q(l.h, {
        LOGOUT: K,
        CONNECTION_OPEN: function () {
            for (let e of Object.values(Z.indices)) e.serverVersion = x;
            for (let e of H) q(e);
            (H = []), (B = !0);
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function (e) {
            let { target: t } = e,
                n = j(t);
            eu(Z.indices[n] ?? F) && z(t);
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: q,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function (e) {
            let { target: t } = e;
            Y(t, { fetchState: { fetching: !1, retryAfter: Date.now() + 5e3 } });
        },
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function (e) {
            let { applicationId: t, channelId: n, guildId: r } = e;
            Z.hasContextStateApplication({ applicationId: t, channelId: n, guildId: r }) &&
                Y(null != r ? { type: "guild", guildId: r } : { type: "channel", channelId: n }, { serverVersion: x }),
                Z.hasUserStateApplication(t) && Y({ type: "user" }, { serverVersion: x }),
                Z.hasApplicationState(t) && Y({ type: "application", applicationId: t }, { serverVersion: x });
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            W({ type: "channel", channelId: t.id });
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            W({ type: "guild", guildId: t.id });
        },
        USER_APPLICATION_UPDATE: X,
        USER_APPLICATION_REMOVE: X,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function (e) {
            let { guildId: t, version: n } = e,
                r = Y({ type: "guild", guildId: t }, { serverVersion: n ?? x }),
                i = r?.result?.sectionIdsByBotId;
            if (null != i)
                for (let e in i) {
                    let t = m.A.getDMFromUserId(e);
                    null != t && Y({ type: "channel", channelId: t }, { serverVersion: x });
                }
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e,
                n = !1;
            for (let e of t)
                n =
                    (function (e, t) {
                        let n = j({ type: "guild", guildId: e }),
                            r = Z.indices[n]?.result;
                        if (null == r) return !1;
                        let i = !1;
                        return (
                            t.forEach((e) => {
                                let { user: t, nick: n } = e;
                                if (!t.bot) return;
                                let a = r.sectionIdsByBotId[t.id];
                                if (null == a) return;
                                let o = r.sections[a];
                                s()(null != o, "Bot has no matching index section"),
                                    s()(
                                        null != o.descriptor.application,
                                        "Bot's index section has no application info",
                                    );
                                let l = (0, R.bq)({ ...o.descriptor.application, bot: t }, !1, n);
                                (o.descriptor = { ...o.descriptor, ...l }), (i = !0);
                            }),
                            i
                        );
                    })(e.guildId, e.members) || n;
            return n;
        },
    }),
    J = Z;
function ee(e, t, n) {
    let [i, s] = r.useState(!0),
        a = (0, o.cf)([Z], () => ("channel" === e.type ? Z.getContextState(e) : Z.getUserState()));
    return (
        r.useEffect(() => {
            if (i) {
                if ("contextless" === e.type) {
                    n && eu(a) && (0, v.$)({ type: "user" });
                    return;
                }
                n &&
                    t &&
                    el(e.channel) &&
                    (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(Z.indices).length,
                    }),
                    eu(a) &&
                        (null != e.channel.guild_id
                            ? (0, v.$)({ type: "guild", guildId: e.channel.guild_id })
                            : (0, v.$)({ type: "channel", channelId: e.channel.id }))),
                    s(!1);
            }
        }, [a, n, e, t, i]),
        a
    );
}
function et(e, t) {
    let [n, i] = r.useState(!0),
        s = (0, o.cf)([Z], () => Z.indices[e] ?? F);
    return (
        r.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(Z.indices).length,
                    }),
                    eu(s) && (0, v.$)({ type: "guild", guildId: e })),
                i(!1));
        }, [s, t, e, n]),
        s
    );
}
function en(e, t) {
    let [n, i] = r.useState(!0),
        s = (0, o.cf)([Z], () => Z.getUserState());
    return (
        r.useEffect(() => {
            n && (t && eu(s) && e && (0, v.$)({ type: "user" }), i(!1));
        }, [s, t, e, n]),
        s
    );
}
function er(e, t, n, i) {
    let { descriptors: s, commands: a, sectionedCommands: o, loading: l } = es(e, n, i),
        u = r.useMemo(() => ("channel" === e.type ? { channel: e.channel, guild: t } : void 0), [e, t]),
        c = (0, y.F)(u);
    return r.useMemo(() => {
        if (!i.includeFrecency || 0 === c.length)
            return { descriptors: s, commands: a, sectionedCommands: o, loading: l };
        let e = a
            .filter((e) => c.includes(e.id))
            .sort((e, t) => {
                let n = N.Ay.getScoreWithoutLoadingLatest(u, e);
                return N.Ay.getScoreWithoutLoadingLatest(u, t) - n;
            })
            .splice(0, L.Ob);
        return 0 === e.length
            ? { descriptors: s, commands: a, sectionedCommands: o, loading: l }
            : {
                  descriptors: [S.gZ[L.Ik.FRECENCY], ...s],
                  commands: e.concat(a),
                  sectionedCommands: [{ section: S.gZ[L.Ik.FRECENCY], data: e }, ...o],
                  loading: l,
              };
    }, [l, i.includeFrecency, c, a, s, o, u]);
}
let ei = Object.freeze({
    applications: { useFrecency: !1, useScore: !1 },
    commands: { useFrecency: !0, useScore: !0 },
});
function es(e, t, n) {
    let i = "channel" === e.type ? e.channel : void 0,
        s = (0, b.MW)(i, t.commandTypes),
        a = !1 !== t.applicationCommands,
        l = ee(e, a, n.allowFetch),
        u = en(a, n.allowFetch),
        c = (0, o.bG)([Z], () => Z.getApplicationStates()),
        d = (0, o.bG)([Z], () => Z.applicationIndicesVersion);
    return (
        !(function (e, t) {
            let [n, i] = r.useState(!0),
                s = (0, o.bG)([Z], () => Z.getApplicationState(e));
            r.useEffect(() => {
                n && (t && eu(s) && null != e && (0, v.$)({ type: "application", applicationId: e }), i(!1));
            }, [t, e, s, n]);
        })(n.applicationId, n.allowFetch),
        r.useMemo(
            () =>
                ea({
                    permissionContext: s,
                    text: t.text,
                    allowApplicationCommands: a,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: l,
                    userState: u,
                    launcherContext: e,
                    applicationStates: n.allowApplicationState ? c : new Map(),
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
                u,
                e,
                c,
                d,
            ],
        )
    );
}
function ea(e) {
    let {
            permissionContext: t,
            contextState: n,
            userState: r,
            applicationStates: i,
            text: a,
            builtIns: o = C.n.ALLOW,
            allowApplicationCommands: l = !0,
            singleApplicationId: u,
            allowEmptySections: c = !1,
            scoreMethod: _ = C.M.NONE,
            sortOptions: f = ei,
            installOnDemand: p = !1,
        } = e,
        { commandTypes: E } = t,
        m = a?.toLowerCase(),
        g = m?.split(" "),
        I = o === C.n.ONLY_TEXT,
        T = o !== C.n.DENY ? (0, S.Ez)(E, !0, I) : [],
        y = [],
        v = {
            permissionContext: t,
            query: m,
            splitQuery: g,
            allowEmptySections: c,
            scoreMethod: _,
            installOnDemand: p,
        },
        O = n.result?.sections ?? {},
        R = r.result?.sections ?? {},
        b = new Set();
    if (l) {
        if (t.hasBaseAccessPermissions)
            for (let e in O) {
                let t = O[e];
                (null == u || t.descriptor.id === u) && b.add(e);
            }
        for (let e in R) {
            let t = R[e];
            (null == u || t.descriptor.id === u) && b.add(e);
        }
    }
    let D = new Map();
    for (let [e, t] of i)
        if (null == u || e === u) {
            let e = t.result?.sections;
            if (null != e) for (let t of Object.keys(e)) b.add(t), D.set(t, e[t]);
        }
    for (let e of Array.from(b)) {
        let t,
            n,
            r = O[e],
            i = R[e],
            a = D.get(e),
            o = null != r,
            l = null != i;
        if (null != r && null != i) {
            for (let e in ((t = i.descriptor), (n = []), i.commands)) {
                let t = i.commands[e];
                n.push(t);
            }
            for (let e in r.commands)
                if (!(e in i.commands)) {
                    let t = r.commands[e];
                    n.push(t);
                }
        } else
            null != r
                ? ((t = r.descriptor), (n = Object.values(r.commands)))
                : null != i
                  ? ((t = i.descriptor), (n = Object.values(i.commands)))
                  : null != a && ((t = a.descriptor), (n = Object.values(a.commands)));
        s()(null != t, "Failed to select application descriptor"),
            s()(null != n, "Failed to select list of application commands");
        let u = eo(t, n, o, l, v);
        null != u && y.push(u);
    }
    if (
        (f.applications.useFrecency && h.bW.loadIfNecessary(),
        y.sort((e, t) => {
            if (f.applications.useScore && _ === C.M.APPLICATION_ONLY) {
                let n = e.data[0]?.score ?? Number.MAX_VALUE,
                    r = t.data[0]?.score ?? Number.MAX_VALUE;
                if (n !== r) return n - r;
            }
            if (f.applications.useFrecency) {
                let n = d.A.getScoreWithoutLoadingLatest(e.section.id),
                    r = d.A.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return ef(e.section.name, t.section.name);
        }),
        T.length > 0 || !0 === c)
    ) {
        let e = eo(S.gZ[L.Ik.BUILT_IN], T, !0, !0, v);
        null != e && y.push(e);
    }
    let w = y.flatMap((e) => e.data.map((t) => ({ ...t, section: e.section })));
    if (_ === C.M.COMMAND_ONLY || _ === C.M.COMMAND_OR_APPLICATION) {
        let e = t.context,
            n = A.A.getGuild(t?.context?.guild_id);
        f.commands.useFrecency && h.bW.loadIfNecessary();
        let r = null != e ? { channel: e, guild: n } : void 0;
        w.sort((e, t) => {
            if (f.commands.useScore) {
                let n = e.score ?? 0,
                    r = t.score ?? 0;
                if (n !== r) return n - r;
            }
            if (f.commands.useFrecency) {
                let n = N.Ay.getScoreWithoutLoadingLatest(r, e),
                    i = N.Ay.getScoreWithoutLoadingLatest(r, t);
                if (n !== i) return i - n;
            }
            return ef(e.displayName, t.displayName);
        });
    }
    return {
        commands: w,
        descriptors: y.map((e) => e.section),
        sectionedCommands: y,
        loading:
            n?.fetchState.fetching === !0 ||
            r?.fetchState.fetching === !0 ||
            (null != u && i.get(u)?.fetchState.fetching === !0),
    };
}
function eo(e, t, n, r, i) {
    let s,
        {
            query: a,
            splitQuery: o,
            allowEmptySections: l,
            scoreMethod: u,
            permissionContext: c,
            installOnDemand: d,
        } = i,
        { context: _, userId: f, roleIds: p, isImpersonating: h } = c,
        E = _?.guild_id != null ? D.we(e.permissions, _.guild_id, f, p, h) : null,
        m = _?.guild_id != null ? D._W(e.permissions, _, _.guild_id) : null,
        g = [];
    for (let i of t)
        D.zl(i, c, {
            applicationAllowedForUser: E,
            applicationAllowedForChannel: m,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: r || d,
        }) === D.CA.ALLOWED && g.push(i);
    return 0 !==
        (s =
            u !== C.M.NONE && null != a && null != o
                ? (function (e, t, n, r, i) {
                      let s,
                          a = [];
                      if (i === C.M.APPLICATION_ONLY || i === C.M.COMMAND_OR_APPLICATION) {
                          let t = r.name.toLocaleLowerCase();
                          if (t.startsWith(e)) s = 5;
                          else if (t.includes(e)) s = 6;
                          else {
                              let t = r.application?.description?.toLocaleLowerCase();
                              t?.includes(e) && (s = 8);
                          }
                      }
                      let o = t[0],
                          l = t.slice(1).join(" ");
                      for (let t of n) {
                          let n;
                          (i === C.M.COMMAND_ONLY || i === C.M.COMMAND_OR_APPLICATION) &&
                              (n = (function (e, t, n, r) {
                                  let i = e.untranslatedName.toLocaleLowerCase(),
                                      s = e.displayName.toLocaleLowerCase();
                                  if (i.startsWith(t) || s.startsWith(t)) return 0;
                                  if (
                                      (i.startsWith(n) && i.split(" ").slice(1).join(" ").startsWith(r)) ||
                                      (s.startsWith(n) && s.split(" ").slice(1).join(" ").startsWith(r))
                                  )
                                      return 1;
                                  if (i.includes(t) || s?.includes(t)) return 2;
                                  let a = !1;
                                  for (let { name: n, serverLocalizedName: r } of e.options ?? []) {
                                      if (
                                          n.startsWith(t) ||
                                          `${i} ${n}`.startsWith(t) ||
                                          (null != s && `${s} ${n}`.startsWith(t)) ||
                                          (null != r &&
                                              (r.startsWith(t) ||
                                                  `${i} ${r}`.startsWith(t) ||
                                                  (null != s && `${s} ${r}`.startsWith(t))))
                                      )
                                          return 3;
                                      (n.includes(t) || r?.includes(t)) && (a = !0);
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
                  })(a, o, g, e, u)
                : g).length || l
        ? ((u === C.M.NONE || u === C.M.APPLICATION_ONLY) && s.sort((e, t) => ef(e.displayName, t.displayName)),
          { section: e, data: s })
        : null;
}
function el(e) {
    return e?.guild_id != null || (e.type === w.rbe.DM && I.default.getUser(e.getRecipientId())?.bot === !0);
}
function eu(e) {
    var t;
    return (
        (t = e),
        t.result?.version !== t.serverVersion &&
            !e.fetchState.fetching &&
            (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    );
}
function ec(e) {
    let t = {
        ...e,
        choices: e.choices?.map(ed),
        description: e.description_default ?? e.description,
        name: e.name_default ?? e.name,
        options: e.options?.map(ec),
    };
    return (
        e.description !== e.description_default && (t.description_localized = e.description),
        e.name !== e.name_default && (t.name_localized = e.name),
        t
    );
}
function ed(e) {
    let t = { ...e, name: e.name_default ?? e.name };
    return e.name !== e.name_default && (t.name_localized = e.name), t;
}
function e_(e, t) {
    let n = [];
    if ((null != e.user && n.push({ type: O.RA.USER, id: t, permission: e.user }), null != e.channels))
        for (let [t, r] of Object.entries(e.channels)) n.push({ type: O.RA.CHANNEL, id: t, permission: r });
    if (null != e.roles) for (let [t, r] of Object.entries(e.roles)) n.push({ type: O.RA.ROLE, id: t, permission: r });
    return n;
}
function ef(e, t) {
    return Z.collator.compare(e, t);
}
function ep(e, t) {
    return ef(e, t);
}
function eh(e, t) {
    let n, r;
    if (t === L.Ik.BUILT_IN)
        return {
            descriptor: S.gZ[L.Ik.BUILT_IN],
            sectionCommands: (0, S.Ez)([c.kc.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0,
        };
    let i = Z.getContextState(e),
        s = Z.getUserState(),
        a = i.result?.sections ?? {},
        o = s.result?.sections ?? {},
        l = a[t],
        u = o[t],
        d = Z.getApplicationState(t).result?.sections?.[t];
    if (null != l && null != u) {
        for (let e in ((n = u.descriptor), (r = []), u.commands)) {
            let t = u.commands[e];
            r.push(t);
        }
        for (let e in l.commands)
            if (!(e in u.commands)) {
                let t = l.commands[e];
                r.push(t);
            }
    } else
        null != l
            ? ((n = l.descriptor), (r = Object.values(l.commands)))
            : null != u
              ? ((n = u.descriptor), (r = Object.values(u.commands)))
              : null != d && ((n = d.descriptor), (r = Object.values(d.commands)));
    return { descriptor: n, sectionCommands: r, isGuildInstalled: null != l, isUserInstalled: null != u };
}
