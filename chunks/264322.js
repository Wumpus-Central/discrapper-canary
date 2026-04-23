"use strict";
n.d(t, {
    A4: () => en,
    Ay: () => J,
    ON: () => et,
    RF: () => eh,
    SD: () => ee,
    Sx: () => em,
    XC: () => ei,
    ZA: () => es,
    Zn: () => z,
}),
    n(321073),
    n(938796);
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(683588),
    o = n(17928),
    l = n(228366),
    d = n(686956),
    _ = n(155718),
    u = n(630248),
    c = n(626584),
    E = n(200662),
    h = n(773669),
    m = n(594061),
    f = n(495544),
    g = n(734057),
    p = n(696451),
    A = n(71393),
    I = n(287809),
    T = n(954571),
    S = n(827785),
    N = n(56494),
    C = n(26909),
    R = n(577700),
    O = n(210978),
    y = n(392054),
    v = n(168186),
    D = n(240591),
    L = n(46477),
    b = n(73510),
    w = n(652215);
let P = new c.A("ApplicationCommandIndexStore"),
    k = Symbol("currentUser"),
    M = Symbol("stale"),
    U = Symbol("current"),
    x = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: !0 }),
    G = Object.freeze({
        serverVersion: U,
        fetchState: { fetching: !1 },
        result: { sections: {}, sectionIdsByBotId: {}, version: U },
    }),
    V = Object.freeze({ serverVersion: M, fetchState: { fetching: !1 } }),
    F = { sensitivity: "accent", numeric: !0 },
    B = !1,
    H = [];
function j(e) {
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
        r = j(e),
        s = Q.indices[r];
    return (
        null != s
            ? ("fetchState" in t && s.fetchState.fetching && s.fetchState.abort.abort(), (n = { ...s, ...t }))
            : i && (n = { serverVersion: M, fetchState: { fetching: !1 }, ...t }),
        void 0 !== n &&
            ((Q.indices[r] = n),
            "application" === e.type &&
                (Q.applicationIndices.set(r, n), (Q.applicationIndicesVersion = Q.applicationIndicesVersion + 1))),
        s
    );
}
function Y(e) {
    let t = j(e),
        n = Q.indices[t];
    n?.fetchState.fetching && n.fetchState.abort.abort(), delete Q.indices[t];
}
function K() {
    for (let e of Object.values(Q.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    Q.indices = {};
}
async function z(e) {
    let t = j(e),
        n = Q.indices[t] ?? V;
    if (!ed(n)) {
        if (n.fetchState.fetching) {
            let e = n.fetchState.promise;
            return await e, Q.indices[t] ?? V;
        }
        return n;
    }
    return await $(e), Q.indices[t] ?? V;
}
async function $(e) {
    let t = new AbortController(),
        n = new a.K();
    W(e, { fetchState: { fetching: !0, abort: t, promise: n.promise } }, !0),
        await (0, R.E)(e, t).then(n.resolve).catch(n.reject);
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: n, index: i } = e,
        r = I.default.getCurrentUser()?.id;
    if (null == r) return B || H.push(e), !1;
    let s = {},
        a = {},
        o = new Set();
    for (let e of i.applications) {
        var l;
        if (null == e.bot && null != e.bot_id) {
            a[e.bot_id] = e.id;
            let t = I.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : o.add(e.bot_id);
        } else null != e.bot && (a[e.bot.id] = e.id);
        let t = {
            descriptor: {
                ...(0, v.bq)(
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
    for (let e of ("guild" === n.type && o.size > 0 && d.A.requestMembersById(n.guildId, [...o]),
    (0, v.Lz)(
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
                    options: t.options?.map(e_) ?? [],
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
            P.error("Command has no matching application");
            continue;
        }
        t.commands[e.id] = e;
    }
    let _ = i.version ?? U;
    W(
        n,
        { serverVersion: _, result: { sections: s, sectionIdsByBotId: a, version: _ }, fetchState: { fetching: !1 } },
        t,
    );
}
function X() {
    W({ type: "user" }, { serverVersion: M });
}
class Z extends o.Ay.Store {
    static displayName = "ApplicationCommandIndexStore";
    indices = {};
    applicationIndices = new Map();
    applicationIndicesVersion = 0;
    oldLocale = h.default.locale;
    collator = new Intl.Collator(h.default.locale, F);
    initialize() {
        this.waitFor(h.default),
            this.waitFor(C.Ay, u.A, f.default, g.A, p.Ay, A.A, I.default),
            this.syncWith([h.default], () => {
                let e;
                (e = h.default.locale) !== Q.oldLocale &&
                    (K(),
                    (Q.collator = new Intl.Collator(e, { sensitivity: "accent", numeric: !0 })),
                    (Q.oldLocale = e));
            });
    }
    getContextState(e) {
        return "contextless" !== e.type && el(e.channel) ? (this.indices[e.channel.guild_id ?? e.channel.id] ?? V) : G;
    }
    hasContextStateApplication(e) {
        let { applicationId: t, channelId: n, guildId: i } = e,
            r = this.indices[i ?? n];
        return null != (r?.result?.sections ?? {})[t];
    }
    getGuildState(e) {
        return null == e ? G : (this.indices[e] ?? V);
    }
    getUserState() {
        return this.indices[k] ?? V;
    }
    hasUserStateApplication(e) {
        let t = this.indices[k];
        return null != (t?.result?.sections ?? {})[e];
    }
    getApplicationState(e) {
        return null == e ? G : (this.indices[e] ?? V);
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == I.default.getCurrentUser()) return x;
        let i = "channel" === e.type ? e.channel : void 0,
            r = this.getContextState(e),
            s = this.getUserState(),
            a = this.getApplicationState(n.applicationId),
            o = this.getApplicationStates(),
            l = (0, D.Bh)(i, t.commandTypes),
            d = null == i || l?.hasBaseAccessPermissions === !0,
            _ = !1 !== t.applicationCommands,
            u = !1;
        n.allowFetch &&
            (_ &&
                d &&
                null != i &&
                el(i) &&
                (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == r.result,
                    size: Object.keys(Q.indices).length,
                }),
                ed(r) &&
                    null != i &&
                    (null != i.guild_id
                        ? (0, R.$)({ type: "guild", guildId: i.guild_id })
                        : (0, R.$)({ type: "channel", channelId: i.id }),
                    (u = !0))),
            ed(s) && ((0, R.$)({ type: "user" }), (u = !0)),
            ed(a) &&
                null != n.applicationId &&
                ((0, R.$)({ type: "application", applicationId: n.applicationId }), (u = !0)));
        let c = ea({
            permissionContext: l,
            text: t.text,
            allowApplicationCommands: _,
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
                { commandTypes: [_.kc.CHAT] },
                { placeholderCount: 5, scoreMethod: O.M.COMMAND_ONLY, applicationId: e, allowFetch: !0 },
            );
    }
}
let Q = new Z(l.h, {
        LOGOUT: K,
        CONNECTION_OPEN: function () {
            for (let e of Object.values(Q.indices)) e.serverVersion = M;
            for (let e of H) q(e);
            (H = []), (B = !0);
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function (e) {
            let { target: t } = e,
                n = j(t);
            ed(Q.indices[n] ?? V) && $(t);
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: q,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function (e) {
            let { target: t } = e;
            W(t, { fetchState: { fetching: !1, retryAfter: Date.now() + 5e3 } });
        },
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function (e) {
            let { applicationId: t, channelId: n, guildId: i } = e;
            Q.hasContextStateApplication({ applicationId: t, channelId: n, guildId: i }) &&
                W(null != i ? { type: "guild", guildId: i } : { type: "channel", channelId: n }, { serverVersion: M }),
                Q.hasUserStateApplication(t) && W({ type: "user" }, { serverVersion: M }),
                Q.hasApplicationState(t) && W({ type: "application", applicationId: t }, { serverVersion: M });
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            Y({ type: "channel", channelId: t.id });
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            Y({ type: "guild", guildId: t.id });
        },
        USER_APPLICATION_UPDATE: X,
        USER_APPLICATION_REMOVE: X,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function (e) {
            let { guildId: t, version: n } = e,
                i = W({ type: "guild", guildId: t }, { serverVersion: n ?? M }),
                r = i?.result?.sectionIdsByBotId;
            if (null != r)
                for (let e in r) {
                    let t = g.A.getDMFromUserId(e);
                    null != t && W({ type: "channel", channelId: t }, { serverVersion: M });
                }
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e,
                n = !1;
            for (let e of t)
                n =
                    (function (e, t) {
                        let n = j({ type: "guild", guildId: e }),
                            i = Q.indices[n]?.result;
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
                                let l = (0, v.bq)({ ...o.descriptor.application, bot: t }, !1, n);
                                (o.descriptor = { ...o.descriptor, ...l }), (r = !0);
                            }),
                            r
                        );
                    })(e.guildId, e.members) || n;
            return n;
        },
    }),
    J = Q;
function ee(e, t, n) {
    let [r, s] = i.useState(!0),
        a = (0, o.cf)([Q], () => ("channel" === e.type ? Q.getContextState(e) : Q.getUserState()));
    return (
        i.useEffect(() => {
            if (r) {
                if ("contextless" === e.type) {
                    n && ed(a) && (0, R.$)({ type: "user" });
                    return;
                }
                n &&
                    t &&
                    el(e.channel) &&
                    (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(Q.indices).length,
                    }),
                    ed(a) &&
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
        s = (0, o.cf)([Q], () => Q.indices[e] ?? V);
    return (
        i.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(Q.indices).length,
                    }),
                    ed(s) && (0, R.$)({ type: "guild", guildId: e })),
                r(!1));
        }, [s, t, e, n]),
        s
    );
}
function en(e, t) {
    let [n, r] = i.useState(!0),
        s = (0, o.cf)([Q], () => Q.getUserState());
    return (
        i.useEffect(() => {
            n && (t && ed(s) && e && (0, R.$)({ type: "user" }), r(!1));
        }, [s, t, e, n]),
        s
    );
}
function ei(e, t, n, r) {
    let { descriptors: s, commands: a, sectionedCommands: o, loading: l } = es(e, n, r),
        d = i.useMemo(() => ("channel" === e.type ? { channel: e.channel, guild: t } : void 0), [e, t]),
        _ = (0, N.F)(d);
    return i.useMemo(() => {
        if (!r.includeFrecency || 0 === _.length)
            return { descriptors: s, commands: a, sectionedCommands: o, loading: l };
        let e = a
            .filter((e) => _.includes(e.id))
            .sort((e, t) => {
                let n = C.Ay.getScoreWithoutLoadingLatest(d, e);
                return C.Ay.getScoreWithoutLoadingLatest(d, t) - n;
            })
            .splice(0, b.Ob);
        return 0 === e.length
            ? { descriptors: s, commands: a, sectionedCommands: o, loading: l }
            : {
                  descriptors: [S.gZ[b.Ik.FRECENCY], ...s],
                  commands: e.concat(a),
                  sectionedCommands: [{ section: S.gZ[b.Ik.FRECENCY], data: e }, ...o],
                  loading: l,
              };
    }, [l, r.includeFrecency, _, a, s, o, d]);
}
let er = Object.freeze({
    applications: { useFrecency: !1, useScore: !1 },
    commands: { useFrecency: !0, useScore: !0 },
});
function es(e, t, n) {
    let r = "channel" === e.type ? e.channel : void 0,
        s = (0, D.MW)(r, t.commandTypes),
        a = !1 !== t.applicationCommands,
        l = ee(e, a, n.allowFetch),
        d = en(a, n.allowFetch),
        _ = (0, o.bG)([Q], () => Q.getApplicationStates()),
        u = (0, o.bG)([Q], () => Q.applicationIndicesVersion);
    return (
        !(function (e, t) {
            let [n, r] = i.useState(!0),
                s = (0, o.bG)([Q], () => Q.getApplicationState(e));
            i.useEffect(() => {
                n && (t && ed(s) && null != e && (0, R.$)({ type: "application", applicationId: e }), r(!1));
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
                    userState: d,
                    launcherContext: e,
                    applicationStates: n.allowApplicationState ? _ : new Map(),
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
                d,
                e,
                _,
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
            builtIns: o = O.n.ALLOW,
            allowApplicationCommands: l = !0,
            singleApplicationId: d,
            allowEmptySections: _ = !1,
            scoreMethod: c = O.M.NONE,
            sortOptions: E = er,
            installOnDemand: h = !1,
        } = e,
        { commandTypes: f } = t,
        g = a?.toLowerCase(),
        p = g?.split(" "),
        I = o === O.n.ONLY_TEXT,
        T = o !== O.n.DENY ? (0, S.Ez)(f, !0, I) : [],
        N = [],
        R = {
            permissionContext: t,
            query: g,
            splitQuery: p,
            allowEmptySections: _,
            scoreMethod: c,
            installOnDemand: h,
        },
        y = n.result?.sections ?? {},
        v = i.result?.sections ?? {},
        D = new Set();
    if (l) {
        if (t.hasBaseAccessPermissions)
            for (let e in y) {
                let t = y[e];
                (null == d || t.descriptor.id === d) && D.add(e);
            }
        for (let e in v) {
            let t = v[e];
            (null == d || t.descriptor.id === d) && D.add(e);
        }
    }
    let L = new Map();
    for (let [e, t] of r)
        if (null == d || e === d) {
            let e = t.result?.sections;
            if (null != e) for (let t of Object.keys(e)) D.add(t), L.set(t, e[t]);
        }
    for (let e of Array.from(D)) {
        let t,
            n,
            i = y[e],
            r = v[e],
            a = L.get(e),
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
        let d = eo(t, n, o, l, R);
        null != d && N.push(d);
    }
    if (
        (E.applications.useFrecency && m.bW.loadIfNecessary(),
        N.sort((e, t) => {
            if (E.applications.useScore && c === O.M.APPLICATION_ONLY) {
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
        T.length > 0 || !0 === _)
    ) {
        let e = eo(S.gZ[b.Ik.BUILT_IN], T, !0, !0, R);
        null != e && N.push(e);
    }
    let w = N.flatMap((e) => e.data.map((t) => ({ ...t, section: e.section })));
    if (c === O.M.COMMAND_ONLY || c === O.M.COMMAND_OR_APPLICATION) {
        let e = t.context,
            n = A.A.getGuild(t?.context?.guild_id);
        E.commands.useFrecency && m.bW.loadIfNecessary();
        let i = null != e ? { channel: e, guild: n } : void 0;
        w.sort((e, t) => {
            if (E.commands.useScore) {
                let n = e.score ?? 0,
                    i = t.score ?? 0;
                if (n !== i) return n - i;
            }
            if (E.commands.useFrecency) {
                let n = C.Ay.getScoreWithoutLoadingLatest(i, e),
                    r = C.Ay.getScoreWithoutLoadingLatest(i, t);
                if (n !== r) return r - n;
            }
            return eE(e.displayName, t.displayName);
        });
    }
    return {
        commands: w,
        descriptors: N.map((e) => e.section),
        sectionedCommands: N,
        loading:
            n?.fetchState.fetching === !0 ||
            i?.fetchState.fetching === !0 ||
            (null != d && r.get(d)?.fetchState.fetching === !0),
    };
}
function eo(e, t, n, i, r) {
    let s,
        {
            query: a,
            splitQuery: o,
            allowEmptySections: l,
            scoreMethod: d,
            permissionContext: _,
            installOnDemand: u,
        } = r,
        { context: c, userId: E, roleIds: h, isImpersonating: m } = _,
        f = c?.guild_id != null ? L.we(e.permissions, c.guild_id, E, h, m) : null,
        g = c?.guild_id != null ? L._W(e.permissions, c, c.guild_id) : null,
        p = [];
    for (let r of t)
        L.zl(r, _, {
            applicationAllowedForUser: f,
            applicationAllowedForChannel: g,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: i || u,
        }) === L.CA.ALLOWED && p.push(r);
    return 0 !==
        (s =
            d !== O.M.NONE && null != a && null != o
                ? (function (e, t, n, i, r) {
                      let s,
                          a = [];
                      if (r === O.M.APPLICATION_ONLY || r === O.M.COMMAND_OR_APPLICATION) {
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
                          (r === O.M.COMMAND_ONLY || r === O.M.COMMAND_OR_APPLICATION) &&
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
                  })(a, o, p, e, d)
                : p).length || l
        ? ((d === O.M.NONE || d === O.M.APPLICATION_ONLY) && s.sort((e, t) => eE(e.displayName, t.displayName)),
          { section: e, data: s })
        : null;
}
function el(e) {
    return e?.guild_id != null || (e.type === w.rbe.DM && I.default.getUser(e.getRecipientId())?.bot === !0);
}
function ed(e) {
    var t;
    return (
        (t = e),
        t.result?.version !== t.serverVersion &&
            !e.fetchState.fetching &&
            (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    );
}
function e_(e) {
    let t = {
        ...e,
        choices: e.choices?.map(eu),
        description: e.description_default ?? e.description,
        name: e.name_default ?? e.name,
        options: e.options?.map(e_),
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
    return Q.collator.compare(e, t);
}
function eh(e, t) {
    return eE(e, t);
}
function em(e, t) {
    let n, i;
    if (t === b.Ik.BUILT_IN)
        return {
            descriptor: S.gZ[b.Ik.BUILT_IN],
            sectionCommands: (0, S.Ez)([_.kc.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0,
        };
    let r = Q.getContextState(e),
        s = Q.getUserState(),
        a = r.result?.sections ?? {},
        o = s.result?.sections ?? {},
        l = a[t],
        d = o[t],
        u = Q.getApplicationState(t).result?.sections?.[t];
    if (null != l && null != d) {
        for (let e in ((n = d.descriptor), (i = []), d.commands)) {
            let t = d.commands[e];
            i.push(t);
        }
        for (let e in l.commands)
            if (!(e in d.commands)) {
                let t = l.commands[e];
                i.push(t);
            }
    } else
        null != l
            ? ((n = l.descriptor), (i = Object.values(l.commands)))
            : null != d
              ? ((n = d.descriptor), (i = Object.values(d.commands)))
              : null != u && ((n = u.descriptor), (i = Object.values(u.commands)));
    return { descriptor: n, sectionCommands: i, isGuildInstalled: null != l, isUserInstalled: null != d };
}
