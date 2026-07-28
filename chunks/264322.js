"use strict";
n.d(t, {
    A4: () => en,
    Ay: () => J,
    ON: () => et,
    RF: () => eA,
    SD: () => ee,
    Sx: () => eh,
    XC: () => ei,
    ZA: () => ea,
    Zn: () => $,
}),
    n(321073),
    n(938796);
var i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(683588),
    l = n(17928),
    o = n(228366),
    d = n(66834),
    c = n(155718),
    u = n(630248),
    _ = n(626584),
    E = n(200662),
    A = n(773669),
    h = n(594061),
    I = n(280450),
    f = n(734057),
    p = n(696451),
    T = n(71393),
    m = n(287809),
    g = n(174459),
    S = n(917012),
    N = n(56494),
    C = n(26909),
    O = n(577700),
    R = n(210978),
    L = n(392054),
    y = n(168186),
    D = n(240591),
    v = n(46477),
    b = n(73510),
    M = n(652215);
let P = new _.A("ApplicationCommandIndexStore"),
    U = Symbol("currentUser"),
    w = Symbol("stale"),
    G = Symbol("current"),
    x = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: !0 }),
    k = Object.freeze({
        serverVersion: G,
        fetchState: { fetching: !1 },
        result: { sections: {}, sectionIdsByBotId: {}, version: G },
    }),
    F = Object.freeze({ serverVersion: w, fetchState: { fetching: !1 } }),
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
            return U;
        case "application":
            return e.applicationId;
    }
}
function W(e, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = j(e),
        a = Q.indices[r];
    return (
        null != a
            ? ("fetchState" in t && a.fetchState.fetching && a.fetchState.abort.abort(), (n = { ...a, ...t }))
            : i && (n = { serverVersion: w, fetchState: { fetching: !1 }, ...t }),
        void 0 !== n &&
            ((Q.indices[r] = n),
            "application" === e.type &&
                (Q.applicationIndices.set(r, n), (Q.applicationIndicesVersion = Q.applicationIndicesVersion + 1))),
        a
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
async function $(e) {
    let t = j(e),
        n = Q.indices[t] ?? F;
    if (!ed(n)) {
        if (n.fetchState.fetching) {
            let e = n.fetchState.promise;
            return await e, Q.indices[t] ?? F;
        }
        return n;
    }
    return await z(e), Q.indices[t] ?? F;
}
async function z(e) {
    let t = new AbortController(),
        n = new s.K();
    W(e, { fetchState: { fetching: !0, abort: t, promise: n.promise } }, !0),
        await (0, O.E)(e, t).then(n.resolve).catch(n.reject);
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: n, index: i } = e,
        r = m.default.getCurrentUser()?.id;
    if (null == r) return B || H.push(e), !1;
    let a = {},
        s = {},
        l = new Set();
    for (let e of i.applications) {
        var o;
        if (null == e.bot && null != e.bot_id) {
            s[e.bot_id] = e.id;
            let t = m.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : l.add(e.bot_id);
        } else null != e.bot && (s[e.bot.id] = e.id);
        let t = {
            descriptor: {
                ...(0, y.bq)(
                    {
                        description: (o = e).description,
                        icon: o.icon,
                        id: o.id,
                        name: o.name,
                        bot: o.bot,
                        flags: o.flags,
                    },
                    !1,
                ),
                permissions: null != e.permissions ? (0, E.UZ)(e_(e.permissions, r)) : void 0,
                botId: e.bot_id,
            },
            commands: {},
        };
        a[e.id] = t;
    }
    for (let e of ("guild" === n.type && l.size > 0 && d.A.requestMembersById(n.guildId, [...l]),
    (0, y.Lz)(
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
                    options: t.options?.map(ec) ?? [],
                    permissions: null != t.permissions ? e_(t.permissions, n) : void 0,
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
            P.error("Command has no matching application");
            continue;
        }
        t.commands[e.id] = e;
    }
    let c = i.version ?? G;
    W(
        n,
        { serverVersion: c, result: { sections: a, sectionIdsByBotId: s, version: c }, fetchState: { fetching: !1 } },
        t,
    );
}
function Z() {
    W({ type: "user" }, { serverVersion: w });
}
class X extends l.Ay.Store {
    static displayName = "ApplicationCommandIndexStore";
    indices = {};
    applicationIndices = new Map();
    applicationIndicesVersion = 0;
    oldLocale = A.default.locale;
    collator = new Intl.Collator(A.default.locale, V);
    initialize() {
        this.waitFor(A.default),
            this.waitFor(C.Ay, u.A, I.default, f.A, p.Ay, T.A, m.default),
            this.syncWith([A.default], () => {
                let e;
                (e = A.default.locale) !== Q.oldLocale &&
                    (K(),
                    (Q.collator = new Intl.Collator(e, { sensitivity: "accent", numeric: !0 })),
                    (Q.oldLocale = e));
            });
    }
    getContextState(e) {
        return "contextless" !== e.type && eo(e.channel) ? (this.indices[e.channel.guild_id ?? e.channel.id] ?? F) : k;
    }
    hasContextStateApplication(e) {
        let { applicationId: t, channelId: n, guildId: i } = e,
            r = this.indices[i ?? n];
        return null != (r?.result?.sections ?? {})[t];
    }
    getGuildState(e) {
        return null == e ? k : (this.indices[e] ?? F);
    }
    getUserState() {
        return this.indices[U] ?? F;
    }
    hasUserStateApplication(e) {
        let t = this.indices[U];
        return null != (t?.result?.sections ?? {})[e];
    }
    getApplicationState(e) {
        return null == e ? k : (this.indices[e] ?? F);
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == m.default.getCurrentUser()) return x;
        let i = "channel" === e.type ? e.channel : void 0,
            r = this.getContextState(e),
            a = this.getUserState(),
            s = this.getApplicationState(n.applicationId),
            l = this.getApplicationStates(),
            o = (0, D.Bh)(i, t.commandTypes),
            d = null == i || o?.hasBaseAccessPermissions === !0,
            c = !1 !== t.applicationCommands,
            u = !1;
        n.allowFetch &&
            (c &&
                d &&
                null != i &&
                eo(i) &&
                (g.default.track(M.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == r.result,
                    size: Object.keys(Q.indices).length,
                }),
                ed(r) &&
                    null != i &&
                    (null != i.guild_id
                        ? (0, O.$)({ type: "guild", guildId: i.guild_id })
                        : (0, O.$)({ type: "channel", channelId: i.id }),
                    (u = !0))),
            ed(a) && ((0, O.$)({ type: "user" }), (u = !0)),
            ed(s) &&
                null != n.applicationId &&
                ((0, O.$)({ type: "application", applicationId: n.applicationId }), (u = !0)));
        let _ = es({
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
        return (_.loading = _.loading || u), _;
    }
    queryInstallOnDemandApp(e, t) {
        let n = f.A.getChannel(t);
        null != n &&
            this.query(
                null != n ? { channel: n, type: "channel" } : { type: "contextless" },
                { commandTypes: [c.kc.CHAT] },
                { placeholderCount: 5, scoreMethod: R.M.COMMAND_ONLY, applicationId: e, allowFetch: !0 },
            );
    }
}
let Q = new X(o.h, {
        LOGOUT: K,
        CONNECTION_OPEN: function () {
            for (let e of Object.values(Q.indices)) e.serverVersion = w;
            for (let e of H) q(e);
            (H = []), (B = !0);
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function (e) {
            let { target: t } = e,
                n = j(t);
            ed(Q.indices[n] ?? F) && z(t);
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: q,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function (e) {
            let { target: t } = e;
            W(t, { fetchState: { fetching: !1, retryAfter: Date.now() + 5e3 } });
        },
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function (e) {
            let { applicationId: t, channelId: n, guildId: i } = e;
            Q.hasContextStateApplication({ applicationId: t, channelId: n, guildId: i }) &&
                W(null != i ? { type: "guild", guildId: i } : { type: "channel", channelId: n }, { serverVersion: w }),
                Q.hasUserStateApplication(t) && W({ type: "user" }, { serverVersion: w }),
                Q.hasApplicationState(t) && W({ type: "application", applicationId: t }, { serverVersion: w });
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            Y({ type: "channel", channelId: t.id });
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            Y({ type: "guild", guildId: t.id });
        },
        USER_APPLICATION_UPDATE: Z,
        USER_APPLICATION_REMOVE: Z,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function (e) {
            let { guildId: t, version: n } = e,
                i = W({ type: "guild", guildId: t }, { serverVersion: n ?? w }),
                r = i?.result?.sectionIdsByBotId;
            if (null != r)
                for (let e in r) {
                    let t = f.A.getDMFromUserId(e);
                    null != t && W({ type: "channel", channelId: t }, { serverVersion: w });
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
                                let s = i.sectionIdsByBotId[t.id];
                                if (null == s) return;
                                let l = i.sections[s];
                                a()(null != l, "Bot has no matching index section"),
                                    a()(
                                        null != l.descriptor.application,
                                        "Bot's index section has no application info",
                                    );
                                let o = (0, y.bq)({ ...l.descriptor.application, bot: t }, !1, n);
                                (l.descriptor = { ...l.descriptor, ...o }), (r = !0);
                            }),
                            r
                        );
                    })(e.guildId, e.members) || n;
            return n;
        },
    }),
    J = Q;
function ee(e, t, n) {
    let [r, a] = i.useState(!0),
        s = (0, l.cf)([Q], () => ("channel" === e.type ? Q.getContextState(e) : Q.getUserState()));
    return (
        i.useEffect(() => {
            if (r) {
                if ("contextless" === e.type) {
                    n && ed(s) && (0, O.$)({ type: "user" });
                    return;
                }
                n &&
                    t &&
                    eo(e.channel) &&
                    (g.default.track(M.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(Q.indices).length,
                    }),
                    ed(s) &&
                        (null != e.channel.guild_id
                            ? (0, O.$)({ type: "guild", guildId: e.channel.guild_id })
                            : (0, O.$)({ type: "channel", channelId: e.channel.id }))),
                    a(!1);
            }
        }, [s, n, e, t, r]),
        s
    );
}
function et(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, l.cf)([Q], () => Q.indices[e] ?? F);
    return (
        i.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (g.default.track(M.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(Q.indices).length,
                    }),
                    ed(a) && (0, O.$)({ type: "guild", guildId: e })),
                r(!1));
        }, [a, t, e, n]),
        a
    );
}
function en(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, l.cf)([Q], () => Q.getUserState());
    return (
        i.useEffect(() => {
            n && (t && ed(a) && e && (0, O.$)({ type: "user" }), r(!1));
        }, [a, t, e, n]),
        a
    );
}
function ei(e, t, n, r) {
    let { descriptors: a, commands: s, sectionedCommands: l, loading: o } = ea(e, n, r),
        d = i.useMemo(() => ("channel" === e.type ? { channel: e.channel, guild: t } : void 0), [e, t]),
        c = (0, N.F)(d);
    return i.useMemo(() => {
        if (!r.includeFrecency || 0 === c.length)
            return { descriptors: a, commands: s, sectionedCommands: l, loading: o };
        let e = s
            .filter((e) => c.includes(e.id))
            .sort((e, t) => {
                let n = C.Ay.getScoreWithoutLoadingLatest(d, e);
                return C.Ay.getScoreWithoutLoadingLatest(d, t) - n;
            })
            .splice(0, b.Ob);
        return 0 === e.length
            ? { descriptors: a, commands: s, sectionedCommands: l, loading: o }
            : {
                  descriptors: [S.gZ[b.Ik.FRECENCY], ...a],
                  commands: e.concat(s),
                  sectionedCommands: [{ section: S.gZ[b.Ik.FRECENCY], data: e }, ...l],
                  loading: o,
              };
    }, [o, r.includeFrecency, c, s, a, l, d]);
}
let er = Object.freeze({
    applications: { useFrecency: !1, useScore: !1 },
    commands: { useFrecency: !0, useScore: !0 },
});
function ea(e, t, n) {
    let r = "channel" === e.type ? e.channel : void 0,
        a = (0, D.MW)(r, t.commandTypes),
        s = !1 !== t.applicationCommands,
        o = ee(e, s, n.allowFetch),
        d = en(s, n.allowFetch),
        c = (0, l.bG)([Q], () => Q.getApplicationStates()),
        u = (0, l.bG)([Q], () => Q.applicationIndicesVersion);
    return (
        !(function (e, t) {
            let [n, r] = i.useState(!0),
                a = (0, l.bG)([Q], () => Q.getApplicationState(e));
            i.useEffect(() => {
                n && (t && ed(a) && null != e && (0, O.$)({ type: "application", applicationId: e }), r(!1));
            }, [t, e, a, n]);
        })(n.applicationId, n.allowFetch),
        i.useMemo(
            () =>
                es({
                    permissionContext: a,
                    text: t.text,
                    allowApplicationCommands: s,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: o,
                    userState: d,
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
                o,
                d,
                e,
                c,
                u,
            ],
        )
    );
}
function es(e) {
    let {
            permissionContext: t,
            contextState: n,
            userState: i,
            applicationStates: r,
            text: s,
            builtIns: l = R.n.ALLOW,
            allowApplicationCommands: o = !0,
            singleApplicationId: d,
            allowEmptySections: c = !1,
            scoreMethod: _ = R.M.NONE,
            sortOptions: E = er,
            installOnDemand: A = !1,
        } = e,
        { commandTypes: I } = t,
        f = s?.toLowerCase(),
        p = f?.split(" "),
        m = l === R.n.ONLY_TEXT,
        g = l !== R.n.DENY ? (0, S.Ez)(I, !0, m) : [],
        N = [],
        O = {
            permissionContext: t,
            query: f,
            splitQuery: p,
            allowEmptySections: c,
            scoreMethod: _,
            installOnDemand: A,
        },
        L = n.result?.sections ?? {},
        y = i.result?.sections ?? {},
        D = new Set();
    if (o) {
        if (t.hasBaseAccessPermissions)
            for (let e in L) {
                let t = L[e];
                (null == d || t.descriptor.id === d) && D.add(e);
            }
        for (let e in y) {
            let t = y[e];
            (null == d || t.descriptor.id === d) && D.add(e);
        }
    }
    let v = new Map();
    for (let [e, t] of r)
        if (null == d || e === d) {
            let e = t.result?.sections;
            if (null != e) for (let t of Object.keys(e)) D.add(t), v.set(t, e[t]);
        }
    for (let e of Array.from(D)) {
        let t,
            n,
            i = L[e],
            r = y[e],
            s = v.get(e),
            l = null != i,
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
                  : null != s && ((t = s.descriptor), (n = Object.values(s.commands)));
        a()(null != t, "Failed to select application descriptor"),
            a()(null != n, "Failed to select list of application commands");
        let d = el(t, n, l, o, O);
        null != d && N.push(d);
    }
    if (
        (E.applications.useFrecency && h.bW.loadIfNecessary(),
        N.sort((e, t) => {
            if (E.applications.useScore && _ === R.M.APPLICATION_ONLY) {
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
        g.length > 0 || !0 === c)
    ) {
        let e = el(S.gZ[b.Ik.BUILT_IN], g, !0, !0, O);
        null != e && N.push(e);
    }
    let M = N.flatMap((e) => e.data.map((t) => ({ ...t, section: e.section })));
    if (_ === R.M.COMMAND_ONLY || _ === R.M.COMMAND_OR_APPLICATION) {
        let e = t.context,
            n = T.A.getGuild(t?.context?.guild_id);
        E.commands.useFrecency && h.bW.loadIfNecessary();
        let i = null != e ? { channel: e, guild: n } : void 0;
        M.sort((e, t) => {
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
        commands: M,
        descriptors: N.map((e) => e.section),
        sectionedCommands: N,
        loading:
            n?.fetchState.fetching === !0 ||
            i?.fetchState.fetching === !0 ||
            (null != d && r.get(d)?.fetchState.fetching === !0),
    };
}
function el(e, t, n, i, r) {
    let a,
        {
            query: s,
            splitQuery: l,
            allowEmptySections: o,
            scoreMethod: d,
            permissionContext: c,
            installOnDemand: u,
        } = r,
        { context: _, userId: E, roleIds: A, isImpersonating: h } = c,
        I = _?.guild_id != null ? v.we(e.permissions, _.guild_id, E, A, h) : null,
        f = _?.guild_id != null ? v._W(e.permissions, _, _.guild_id) : null,
        p = [];
    for (let r of t)
        v.zl(r, c, {
            applicationAllowedForUser: I,
            applicationAllowedForChannel: f,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: i || u,
        }) === v.CA.ALLOWED && p.push(r);
    return 0 !==
        (a =
            d !== R.M.NONE && null != s && null != l
                ? (function (e, t, n, i, r) {
                      let a,
                          s = [];
                      if (r === R.M.APPLICATION_ONLY || r === R.M.COMMAND_OR_APPLICATION) {
                          let t = i.name.toLocaleLowerCase();
                          if (t.startsWith(e)) a = 5;
                          else if (t.includes(e)) a = 6;
                          else {
                              let t = i.application?.description?.toLocaleLowerCase();
                              t?.includes(e) && (a = 8);
                          }
                      }
                      let l = t[0],
                          o = t.slice(1).join(" ");
                      for (let t of n) {
                          let n;
                          (r === R.M.COMMAND_ONLY || r === R.M.COMMAND_OR_APPLICATION) &&
                              (n = (function (e, t, n, i) {
                                  let r = e.untranslatedName.toLocaleLowerCase(),
                                      a = e.displayName.toLocaleLowerCase();
                                  if (r.startsWith(t) || a.startsWith(t)) return 0;
                                  if (
                                      (r.startsWith(n) && r.split(" ").slice(1).join(" ").startsWith(i)) ||
                                      (a.startsWith(n) && a.split(" ").slice(1).join(" ").startsWith(i))
                                  )
                                      return 1;
                                  if (r.includes(t) || a?.includes(t)) return 2;
                                  let s = !1;
                                  for (let { name: n, serverLocalizedName: i } of e.options ?? []) {
                                      if (
                                          n.startsWith(t) ||
                                          `${r} ${n}`.startsWith(t) ||
                                          (null != a && `${a} ${n}`.startsWith(t)) ||
                                          (null != i &&
                                              (i.startsWith(t) ||
                                                  `${r} ${i}`.startsWith(t) ||
                                                  (null != a && `${a} ${i}`.startsWith(t))))
                                      )
                                          return 3;
                                      (n.includes(t) || i?.includes(t)) && (s = !0);
                                  }
                                  if (s) return 4;
                                  let l = e.untranslatedDescription.toLocaleLowerCase(),
                                      o = e.displayDescription.toLocaleLowerCase();
                                  if (l.includes(t) || o.includes(t)) return 7;
                              })(t, e, l, o)),
                              (void 0 === n || (void 0 !== a && a < n)) && (n = a),
                              void 0 !== n && s.push({ ...t, score: n });
                      }
                      return s;
                  })(s, l, p, e, d)
                : p).length || o
        ? ((d === R.M.NONE || d === R.M.APPLICATION_ONLY) && a.sort((e, t) => eE(e.displayName, t.displayName)),
          { section: e, data: a })
        : null;
}
function eo(e) {
    return e?.guild_id != null || (e?.type === M.rbe.DM && m.default.getUser(e.getRecipientId())?.bot === !0);
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
function ec(e) {
    let t = {
        ...e,
        choices: e.choices?.map(eu),
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
function eu(e) {
    let t = { ...e, name: e.name_default ?? e.name };
    return e.name !== e.name_default && (t.name_localized = e.name), t;
}
function e_(e, t) {
    let n = [];
    if ((null != e.user && n.push({ type: L.RA.USER, id: t, permission: e.user }), null != e.channels))
        for (let [t, i] of Object.entries(e.channels)) n.push({ type: L.RA.CHANNEL, id: t, permission: i });
    if (null != e.roles) for (let [t, i] of Object.entries(e.roles)) n.push({ type: L.RA.ROLE, id: t, permission: i });
    return n;
}
function eE(e, t) {
    return Q.collator.compare(e, t);
}
function eA(e, t) {
    return eE(e, t);
}
function eh(e, t) {
    let n, i;
    if (t === b.Ik.BUILT_IN)
        return {
            descriptor: S.gZ[b.Ik.BUILT_IN],
            sectionCommands: (0, S.Ez)([c.kc.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0,
        };
    let r = Q.getContextState(e),
        a = Q.getUserState(),
        s = r.result?.sections ?? {},
        l = a.result?.sections ?? {},
        o = s[t],
        d = l[t],
        u = Q.getApplicationState(t).result?.sections?.[t];
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
              : null != u && ((n = u.descriptor), (i = Object.values(u.commands)));
    return { descriptor: n, sectionCommands: i, isGuildInstalled: null != o, isUserInstalled: null != d };
}
