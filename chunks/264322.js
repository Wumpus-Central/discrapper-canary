"use strict";
n.d(t, {
    A4: () => er,
    Ay: () => et,
    ON: () => ei,
    RF: () => eI,
    SD: () => en,
    Sx: () => ef,
    XC: () => ea,
    ZA: () => el,
    Zn: () => Z,
}),
    n(321073),
    n(938796);
var i = n(582128),
    r = n(91871),
    a = n.n(r),
    s = n(284009),
    l = n.n(s),
    o = n(683588),
    d = n(17928),
    c = n(228366),
    u = n(66834),
    _ = n(155718),
    E = n(630248),
    A = n(626584),
    h = n(200662),
    I = n(773669),
    f = n(594061),
    p = n(280450),
    T = n(734057),
    m = n(696451),
    g = n(71393),
    S = n(287809),
    N = n(174459),
    C = n(917012),
    R = n(56494),
    O = n(26909),
    L = n(577700),
    y = n(210978),
    D = n(392054),
    v = n(168186),
    b = n(240591),
    M = n(46477),
    P = n(73510),
    U = n(652215);
let w = new A.A("ApplicationCommandIndexStore"),
    G = Symbol("currentUser"),
    x = Symbol("stale"),
    k = Symbol("current"),
    F = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: !0 }),
    V = Object.freeze({
        serverVersion: k,
        fetchState: { fetching: !1 },
        result: { sections: {}, sectionIdsByBotId: {}, version: k },
    }),
    B = Object.freeze({ serverVersion: x, fetchState: { fetching: !1 } }),
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
        a = ee.indices[r];
    return (
        null != a
            ? ("fetchState" in t && a.fetchState.fetching && a.fetchState.abort.abort(), (n = { ...a, ...t }))
            : i && (n = { serverVersion: x, fetchState: { fetching: !1 }, ...t }),
        void 0 !== n &&
            ((ee.indices[r] = n),
            "application" === e.type &&
                (ee.applicationIndices.set(r, n), (ee.applicationIndicesVersion = ee.applicationIndicesVersion + 1))),
        a
    );
}
function $(e) {
    let t = Y(e),
        n = ee.indices[t];
    n?.fetchState.fetching && n.fetchState.abort.abort(), delete ee.indices[t];
}
function z() {
    for (let e of Object.values(ee.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    ee.indices = {};
}
async function Z(e) {
    let t = Y(e),
        n = ee.indices[t] ?? B;
    if (!eu(n)) {
        if (n.fetchState.fetching) {
            let e = n.fetchState.promise;
            return await e, ee.indices[t] ?? B;
        }
        return n;
    }
    return await q(e), ee.indices[t] ?? B;
}
async function q(e) {
    let t = new AbortController(),
        n = new o.K();
    K(e, { fetchState: { fetching: !0, abort: t, promise: n.promise } }, !0),
        await (0, L.E)(e, t).then(n.resolve).catch(n.reject);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: n, index: i } = e,
        r = S.default.getCurrentUser()?.id;
    if (null == r) return j || W.push(e), !1;
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
                ...(0, v.bq)(
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
                permissions: null != e.permissions ? (0, h.UZ)(eA(e.permissions, r)) : void 0,
                botId: e.bot_id,
            },
            commands: {},
        };
        a[e.id] = t;
    }
    for (let e of ("guild" === n.type && l.size > 0 && u.A.requestMembersById(n.guildId, [...l]),
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
                    permissions: null != t.permissions ? eA(t.permissions, n) : void 0,
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
function Q() {
    K({ type: "user" }, { serverVersion: x });
}
class J extends d.Ay.Store {
    static displayName = "ApplicationCommandIndexStore";
    indices = {};
    applicationIndices = new Map();
    applicationIndicesVersion = 0;
    oldLocale = I.default.locale;
    collator = new Intl.Collator(I.default.locale, H);
    initialize() {
        this.waitFor(I.default),
            this.waitFor(O.Ay, E.A, p.default, T.A, m.Ay, g.A, S.default),
            this.syncWith([I.default], () => {
                let e;
                (e = I.default.locale) !== ee.oldLocale &&
                    (z(),
                    (ee.collator = new Intl.Collator(e, { sensitivity: "accent", numeric: !0 })),
                    (ee.oldLocale = e));
            });
    }
    getContextState(e) {
        return "contextless" !== e.type && ec(e.channel) ? (this.indices[e.channel.guild_id ?? e.channel.id] ?? B) : V;
    }
    hasContextStateApplication(e) {
        let { applicationId: t, channelId: n, guildId: i } = e,
            r = this.indices[i ?? n];
        return null != (r?.result?.sections ?? {})[t];
    }
    getGuildState(e) {
        return null == e ? V : (this.indices[e] ?? B);
    }
    getUserState() {
        return this.indices[G] ?? B;
    }
    hasUserStateApplication(e) {
        let t = this.indices[G];
        return null != (t?.result?.sections ?? {})[e];
    }
    getApplicationState(e) {
        return null == e ? V : (this.indices[e] ?? B);
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
            o = (0, b.Bh)(i, t.commandTypes),
            d = null == i || o?.hasBaseAccessPermissions === !0,
            c = !1 !== t.applicationCommands,
            u = !1;
        n.allowFetch &&
            (c &&
                d &&
                null != i &&
                ec(i) &&
                (N.default.track(U.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == r.result,
                    size: Object.keys(ee.indices).length,
                }),
                eu(r) &&
                    null != i &&
                    (null != i.guild_id
                        ? (0, L.$)({ type: "guild", guildId: i.guild_id })
                        : (0, L.$)({ type: "channel", channelId: i.id }),
                    (u = !0))),
            eu(a) && ((0, L.$)({ type: "user" }), (u = !0)),
            eu(s) &&
                null != n.applicationId &&
                ((0, L.$)({ type: "application", applicationId: n.applicationId }), (u = !0)));
        let _ = eo({
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
        let n = T.A.getChannel(t);
        null != n &&
            this.query(
                null != n ? { channel: n, type: "channel" } : { type: "contextless" },
                { commandTypes: [_.kc.CHAT] },
                { placeholderCount: 5, scoreMethod: y.M.COMMAND_ONLY, applicationId: e, allowFetch: !0 },
            );
    }
}
let ee = new J(c.h, {
        LOGOUT: z,
        CONNECTION_OPEN: function () {
            for (let e of Object.values(ee.indices)) e.serverVersion = x;
            for (let e of W) X(e);
            (W = []), (j = !0);
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function (e) {
            let { target: t } = e,
                n = Y(t);
            eu(ee.indices[n] ?? B) && q(t);
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: X,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function (e) {
            let { target: t } = e;
            K(t, { fetchState: { fetching: !1, retryAfter: Date.now() + 5e3 } });
        },
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function (e) {
            let { applicationId: t, channelId: n, guildId: i } = e;
            ee.hasContextStateApplication({ applicationId: t, channelId: n, guildId: i }) &&
                K(null != i ? { type: "guild", guildId: i } : { type: "channel", channelId: n }, { serverVersion: x }),
                ee.hasUserStateApplication(t) && K({ type: "user" }, { serverVersion: x }),
                ee.hasApplicationState(t) && K({ type: "application", applicationId: t }, { serverVersion: x });
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            $({ type: "channel", channelId: t.id });
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            $({ type: "guild", guildId: t.id });
        },
        USER_APPLICATION_UPDATE: Q,
        USER_APPLICATION_REMOVE: Q,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function (e) {
            let { guildId: t, version: n } = e,
                i = K({ type: "guild", guildId: t }, { serverVersion: n ?? x }),
                r = i?.result?.sectionIdsByBotId;
            if (null != r)
                for (let e in r) {
                    let t = T.A.getDMFromUserId(e);
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
                            i = ee.indices[n]?.result;
                        if (null == i) return !1;
                        let r = !1;
                        return (
                            t.forEach((e) => {
                                let { user: t, nick: n } = e;
                                if (!t.bot) return;
                                let a = i.sectionIdsByBotId[t.id];
                                if (null == a) return;
                                let s = i.sections[a];
                                l()(null != s, "Bot has no matching index section"),
                                    l()(
                                        null != s.descriptor.application,
                                        "Bot's index section has no application info",
                                    );
                                let o = (0, v.bq)({ ...s.descriptor.application, bot: t }, !1, n);
                                (s.descriptor = { ...s.descriptor, ...o }), (r = !0);
                            }),
                            r
                        );
                    })(e.guildId, e.members) || n;
            return n;
        },
    }),
    et = ee;
function en(e, t, n) {
    let [r, a] = i.useState(!0),
        s = (0, d.cf)([ee], () => ("channel" === e.type ? ee.getContextState(e) : ee.getUserState()));
    return (
        i.useEffect(() => {
            if (r) {
                if ("contextless" === e.type) {
                    n && eu(s) && (0, L.$)({ type: "user" });
                    return;
                }
                n &&
                    t &&
                    ec(e.channel) &&
                    (N.default.track(U.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(ee.indices).length,
                    }),
                    eu(s) &&
                        (null != e.channel.guild_id
                            ? (0, L.$)({ type: "guild", guildId: e.channel.guild_id })
                            : (0, L.$)({ type: "channel", channelId: e.channel.id }))),
                    a(!1);
            }
        }, [s, n, e, t, r]),
        s
    );
}
function ei(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, d.cf)([ee], () => ee.indices[e] ?? B);
    return (
        i.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (N.default.track(U.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(ee.indices).length,
                    }),
                    eu(a) && (0, L.$)({ type: "guild", guildId: e })),
                r(!1));
        }, [a, t, e, n]),
        a
    );
}
function er(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, d.cf)([ee], () => ee.getUserState());
    return (
        i.useEffect(() => {
            n && (t && eu(a) && e && (0, L.$)({ type: "user" }), r(!1));
        }, [a, t, e, n]),
        a
    );
}
function ea(e, t, n, r) {
    let { descriptors: a, commands: s, sectionedCommands: l, loading: o } = el(e, n, r),
        d = i.useMemo(() => ("channel" === e.type ? { channel: e.channel, guild: t } : void 0), [e, t]),
        c = (0, R.F)(d);
    return i.useMemo(() => {
        if (!r.includeFrecency || 0 === c.length)
            return { descriptors: a, commands: s, sectionedCommands: l, loading: o };
        let e = s
            .filter((e) => c.includes(e.id))
            .sort((e, t) => {
                let n = O.Ay.getScoreWithoutLoadingLatest(d, e);
                return O.Ay.getScoreWithoutLoadingLatest(d, t) - n;
            })
            .splice(0, P.Ob);
        return 0 === e.length
            ? { descriptors: a, commands: s, sectionedCommands: l, loading: o }
            : {
                  descriptors: [C.gZ[P.Ik.FRECENCY], ...a],
                  commands: e.concat(s),
                  sectionedCommands: [{ section: C.gZ[P.Ik.FRECENCY], data: e }, ...l],
                  loading: o,
              };
    }, [o, r.includeFrecency, c, s, a, l, d]);
}
let es = Object.freeze({
    applications: { useFrecency: !1, useScore: !1 },
    commands: { useFrecency: !0, useScore: !0 },
});
function el(e, t, n) {
    let r = "channel" === e.type ? e.channel : void 0,
        a = (0, b.MW)(r, t.commandTypes),
        s = !1 !== t.applicationCommands,
        l = en(e, s, n.allowFetch),
        o = er(s, n.allowFetch),
        c = (0, d.bG)([ee], () => ee.getApplicationStates()),
        u = (0, d.bG)([ee], () => ee.applicationIndicesVersion);
    return (
        !(function (e, t) {
            let [n, r] = i.useState(!0),
                a = (0, d.bG)([ee], () => ee.getApplicationState(e));
            i.useEffect(() => {
                n && (t && eu(a) && null != e && (0, L.$)({ type: "application", applicationId: e }), r(!1));
            }, [t, e, a, n]);
        })(n.applicationId, n.allowFetch),
        i.useMemo(
            () =>
                eo({
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
function eo(e) {
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
            sortOptions: _ = es,
            installOnDemand: A = !1,
        } = e,
        { commandTypes: h } = t,
        I = a?.toLowerCase(),
        p = I?.split(" "),
        T = s === y.n.ONLY_TEXT,
        m = s !== y.n.DENY ? (0, C.Ez)(h, !0, T) : [],
        S = [],
        N = {
            permissionContext: t,
            query: I,
            splitQuery: p,
            allowEmptySections: c,
            scoreMethod: u,
            installOnDemand: A,
        },
        R = n.result?.sections ?? {},
        L = i.result?.sections ?? {},
        D = new Set();
    if (o) {
        if (t.hasBaseAccessPermissions)
            for (let e in R) {
                let t = R[e];
                (null == d || t.descriptor.id === d) && D.add(e);
            }
        for (let e in L) {
            let t = L[e];
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
            i = R[e],
            r = L[e],
            a = v.get(e),
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
        l()(null != t, "Failed to select application descriptor"),
            l()(null != n, "Failed to select list of application commands");
        let d = ed(t, n, s, o, N);
        null != d && S.push(d);
    }
    if (
        (_.applications.useFrecency && f.bW.loadIfNecessary(),
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
            return eh(e.section.name, t.section.name);
        }),
        m.length > 0 || !0 === c)
    ) {
        let e = ed(C.gZ[P.Ik.BUILT_IN], m, !0, !0, N);
        null != e && S.push(e);
    }
    let b = S.flatMap((e) => e.data.map((t) => ({ ...t, section: e.section })));
    if (u === y.M.COMMAND_ONLY || u === y.M.COMMAND_OR_APPLICATION) {
        let e = t.context,
            n = g.A.getGuild(t?.context?.guild_id);
        _.commands.useFrecency && f.bW.loadIfNecessary();
        let i = null != e ? { channel: e, guild: n } : void 0;
        b.sort((e, t) => {
            if (_.commands.useScore) {
                let n = e.score ?? 0,
                    i = t.score ?? 0;
                if (n !== i) return n - i;
            }
            if (_.commands.useFrecency) {
                let n = O.Ay.getScoreWithoutLoadingLatest(i, e),
                    r = O.Ay.getScoreWithoutLoadingLatest(i, t);
                if (n !== r) return r - n;
            }
            return eh(e.displayName, t.displayName);
        });
    }
    return {
        commands: b,
        descriptors: S.map((e) => e.section),
        sectionedCommands: S,
        loading:
            n?.fetchState.fetching === !0 ||
            i?.fetchState.fetching === !0 ||
            (null != d && r.get(d)?.fetchState.fetching === !0),
    };
}
function ed(e, t, n, i, r) {
    let s,
        {
            query: l,
            splitQuery: o,
            allowEmptySections: d,
            scoreMethod: c,
            permissionContext: u,
            installOnDemand: _,
        } = r,
        { context: E, userId: A, roleIds: h, isImpersonating: I } = u,
        f = E?.guild_id != null ? M.we(e.permissions, E.guild_id, A, h, I) : null,
        p = E?.guild_id != null ? M._W(e.permissions, E, E.guild_id) : null,
        T = [];
    for (let r of t)
        M.zl(r, u, {
            applicationAllowedForUser: f,
            applicationAllowedForChannel: p,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: i || _,
        }) === M.CA.ALLOWED && T.push(r);
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
                          (r === y.M.COMMAND_ONLY || r === y.M.COMMAND_OR_APPLICATION) &&
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
                              void 0 !== n && l.push({ ...t, score: n });
                      }
                      return l;
                  })(l, o, T, e, c)
                : T).length || d
        ? ((c === y.M.NONE || c === y.M.APPLICATION_ONLY) && s.sort((e, t) => eh(e.displayName, t.displayName)),
          { section: e, data: s })
        : null;
}
function ec(e) {
    return e?.guild_id != null || (e?.type === U.rbe.DM && S.default.getUser(e.getRecipientId())?.bot === !0);
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
function e_(e) {
    let t = {
        ...e,
        choices: e.choices?.map(eE),
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
function eE(e) {
    let t = { ...e, name: e.name_default ?? e.name };
    return e.name !== e.name_default && (t.name_localized = e.name), t;
}
function eA(e, t) {
    let n = [];
    if ((null != e.user && n.push({ type: D.RA.USER, id: t, permission: e.user }), null != e.channels))
        for (let [t, i] of Object.entries(e.channels)) n.push({ type: D.RA.CHANNEL, id: t, permission: i });
    if (null != e.roles) for (let [t, i] of Object.entries(e.roles)) n.push({ type: D.RA.ROLE, id: t, permission: i });
    return n;
}
function eh(e, t) {
    return ee.collator.compare(e, t);
}
function eI(e, t) {
    return eh(e, t);
}
function ef(e, t) {
    let n, i;
    if (t === P.Ik.BUILT_IN)
        return {
            descriptor: C.gZ[P.Ik.BUILT_IN],
            sectionCommands: (0, C.Ez)([_.kc.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0,
        };
    let r = ee.getContextState(e),
        a = ee.getUserState(),
        s = r.result?.sections ?? {},
        l = a.result?.sections ?? {},
        o = s[t],
        d = l[t],
        c = ee.getApplicationState(t).result?.sections?.[t];
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
}
