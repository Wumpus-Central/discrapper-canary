"use strict";
n.d(t, {
    A4: () => en,
    Ay: () => J,
    ON: () => et,
    RF: () => ef,
    SD: () => ee,
    Sx: () => ep,
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
    u = n(66834),
    c = n(155718),
    d = n(630248),
    _ = n(626584),
    h = n(200662),
    f = n(773669),
    p = n(594061),
    E = n(495544),
    m = n(734057),
    g = n(696451),
    A = n(71393),
    I = n(287809),
    T = n(174459),
    S = n(917012),
    y = n(56494),
    C = n(26909),
    N = n(577700),
    v = n(210978),
    R = n(392054),
    O = n(168186),
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
    j = [];
function H(e) {
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
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = H(e),
        s = Q.indices[r];
    return (
        null != s
            ? ("fetchState" in t && s.fetchState.fetching && s.fetchState.abort.abort(), (n = { ...s, ...t }))
            : i && (n = { serverVersion: x, fetchState: { fetching: !1 }, ...t }),
        void 0 !== n &&
            ((Q.indices[r] = n),
            "application" === e.type &&
                (Q.applicationIndices.set(r, n), (Q.applicationIndicesVersion = Q.applicationIndicesVersion + 1))),
        s
    );
}
function W(e) {
    let t = H(e),
        n = Q.indices[t];
    n?.fetchState.fetching && n.fetchState.abort.abort(), delete Q.indices[t];
}
function K() {
    for (let e of Object.values(Q.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    Q.indices = {};
}
async function $(e) {
    let t = H(e),
        n = Q.indices[t] ?? F;
    if (!eu(n)) {
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
        n = new a.K();
    Y(e, { fetchState: { fetching: !0, abort: t, promise: n.promise } }, !0),
        await (0, N.E)(e, t).then(n.resolve).catch(n.reject);
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: n, index: i } = e,
        r = I.default.getCurrentUser()?.id;
    if (null == r) return B || j.push(e), !1;
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
                ...(0, O.bq)(
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
                permissions: null != e.permissions ? (0, h.UZ)(e_(e.permissions, r)) : void 0,
                botId: e.bot_id,
            },
            commands: {},
        };
        s[e.id] = t;
    }
    for (let e of ("guild" === n.type && o.size > 0 && u.A.requestMembersById(n.guildId, [...o]),
    (0, O.Lz)(
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
        let t = s[e.applicationId];
        if (null == t) {
            M.error("Command has no matching application");
            continue;
        }
        t.commands[e.id] = e;
    }
    let c = i.version ?? k;
    Y(
        n,
        { serverVersion: c, result: { sections: s, sectionIdsByBotId: a, version: c }, fetchState: { fetching: !1 } },
        t,
    );
}
function Z() {
    Y({ type: "user" }, { serverVersion: x });
}
class X extends o.Ay.Store {
    static displayName = "ApplicationCommandIndexStore";
    indices = {};
    applicationIndices = new Map();
    applicationIndicesVersion = 0;
    oldLocale = f.default.locale;
    collator = new Intl.Collator(f.default.locale, V);
    initialize() {
        this.waitFor(f.default),
            this.waitFor(C.Ay, d.A, E.default, m.A, g.Ay, A.A, I.default),
            this.syncWith([f.default], () => {
                let e;
                (e = f.default.locale) !== Q.oldLocale &&
                    (K(),
                    (Q.collator = new Intl.Collator(e, { sensitivity: "accent", numeric: !0 })),
                    (Q.oldLocale = e));
            });
    }
    getContextState(e) {
        return "contextless" !== e.type && el(e.channel) ? (this.indices[e.channel.guild_id ?? e.channel.id] ?? F) : G;
    }
    hasContextStateApplication(e) {
        let { applicationId: t, channelId: n, guildId: i } = e,
            r = this.indices[i ?? n];
        return null != (r?.result?.sections ?? {})[t];
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
        let i = "channel" === e.type ? e.channel : void 0,
            r = this.getContextState(e),
            s = this.getUserState(),
            a = this.getApplicationState(n.applicationId),
            o = this.getApplicationStates(),
            l = (0, b.Bh)(i, t.commandTypes),
            u = null == i || l?.hasBaseAccessPermissions === !0,
            c = !1 !== t.applicationCommands,
            d = !1;
        n.allowFetch &&
            (c &&
                u &&
                null != i &&
                el(i) &&
                (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == r.result,
                    size: Object.keys(Q.indices).length,
                }),
                eu(r) &&
                    null != i &&
                    (null != i.guild_id
                        ? (0, N.$)({ type: "guild", guildId: i.guild_id })
                        : (0, N.$)({ type: "channel", channelId: i.id }),
                    (d = !0))),
            eu(s) && ((0, N.$)({ type: "user" }), (d = !0)),
            eu(a) &&
                null != n.applicationId &&
                ((0, N.$)({ type: "application", applicationId: n.applicationId }), (d = !0)));
        let _ = ea({
            permissionContext: l,
            text: t.text,
            allowApplicationCommands: c,
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
        return (_.loading = _.loading || d), _;
    }
    queryInstallOnDemandApp(e, t) {
        let n = m.A.getChannel(t);
        null != n &&
            this.query(
                null != n ? { channel: n, type: "channel" } : { type: "contextless" },
                { commandTypes: [c.kc.CHAT] },
                { placeholderCount: 5, scoreMethod: v.M.COMMAND_ONLY, applicationId: e, allowFetch: !0 },
            );
    }
}
let Q = new X(l.h, {
        LOGOUT: K,
        CONNECTION_OPEN: function () {
            for (let e of Object.values(Q.indices)) e.serverVersion = x;
            for (let e of j) q(e);
            (j = []), (B = !0);
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function (e) {
            let { target: t } = e,
                n = H(t);
            eu(Q.indices[n] ?? F) && z(t);
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: q,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function (e) {
            let { target: t } = e;
            Y(t, { fetchState: { fetching: !1, retryAfter: Date.now() + 5e3 } });
        },
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function (e) {
            let { applicationId: t, channelId: n, guildId: i } = e;
            Q.hasContextStateApplication({ applicationId: t, channelId: n, guildId: i }) &&
                Y(null != i ? { type: "guild", guildId: i } : { type: "channel", channelId: n }, { serverVersion: x }),
                Q.hasUserStateApplication(t) && Y({ type: "user" }, { serverVersion: x }),
                Q.hasApplicationState(t) && Y({ type: "application", applicationId: t }, { serverVersion: x });
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            W({ type: "channel", channelId: t.id });
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            W({ type: "guild", guildId: t.id });
        },
        USER_APPLICATION_UPDATE: Z,
        USER_APPLICATION_REMOVE: Z,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function (e) {
            let { guildId: t, version: n } = e,
                i = Y({ type: "guild", guildId: t }, { serverVersion: n ?? x }),
                r = i?.result?.sectionIdsByBotId;
            if (null != r)
                for (let e in r) {
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
                        let n = H({ type: "guild", guildId: e }),
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
                                let l = (0, O.bq)({ ...o.descriptor.application, bot: t }, !1, n);
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
                    n && eu(a) && (0, N.$)({ type: "user" });
                    return;
                }
                n &&
                    t &&
                    el(e.channel) &&
                    (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(Q.indices).length,
                    }),
                    eu(a) &&
                        (null != e.channel.guild_id
                            ? (0, N.$)({ type: "guild", guildId: e.channel.guild_id })
                            : (0, N.$)({ type: "channel", channelId: e.channel.id }))),
                    s(!1);
            }
        }, [a, n, e, t, r]),
        a
    );
}
function et(e, t) {
    let [n, r] = i.useState(!0),
        s = (0, o.cf)([Q], () => Q.indices[e] ?? F);
    return (
        i.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(Q.indices).length,
                    }),
                    eu(s) && (0, N.$)({ type: "guild", guildId: e })),
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
            n && (t && eu(s) && e && (0, N.$)({ type: "user" }), r(!1));
        }, [s, t, e, n]),
        s
    );
}
function ei(e, t, n, r) {
    let { descriptors: s, commands: a, sectionedCommands: o, loading: l } = es(e, n, r),
        u = i.useMemo(() => ("channel" === e.type ? { channel: e.channel, guild: t } : void 0), [e, t]),
        c = (0, y.F)(u);
    return i.useMemo(() => {
        if (!r.includeFrecency || 0 === c.length)
            return { descriptors: s, commands: a, sectionedCommands: o, loading: l };
        let e = a
            .filter((e) => c.includes(e.id))
            .sort((e, t) => {
                let n = C.Ay.getScoreWithoutLoadingLatest(u, e);
                return C.Ay.getScoreWithoutLoadingLatest(u, t) - n;
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
    }, [l, r.includeFrecency, c, a, s, o, u]);
}
let er = Object.freeze({
    applications: { useFrecency: !1, useScore: !1 },
    commands: { useFrecency: !0, useScore: !0 },
});
function es(e, t, n) {
    let r = "channel" === e.type ? e.channel : void 0,
        s = (0, b.MW)(r, t.commandTypes),
        a = !1 !== t.applicationCommands,
        l = ee(e, a, n.allowFetch),
        u = en(a, n.allowFetch),
        c = (0, o.bG)([Q], () => Q.getApplicationStates()),
        d = (0, o.bG)([Q], () => Q.applicationIndicesVersion);
    return (
        !(function (e, t) {
            let [n, r] = i.useState(!0),
                s = (0, o.bG)([Q], () => Q.getApplicationState(e));
            i.useEffect(() => {
                n && (t && eu(s) && null != e && (0, N.$)({ type: "application", applicationId: e }), r(!1));
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
            userState: i,
            applicationStates: r,
            text: a,
            builtIns: o = v.n.ALLOW,
            allowApplicationCommands: l = !0,
            singleApplicationId: u,
            allowEmptySections: c = !1,
            scoreMethod: _ = v.M.NONE,
            sortOptions: h = er,
            installOnDemand: f = !1,
        } = e,
        { commandTypes: E } = t,
        m = a?.toLowerCase(),
        g = m?.split(" "),
        I = o === v.n.ONLY_TEXT,
        T = o !== v.n.DENY ? (0, S.Ez)(E, !0, I) : [],
        y = [],
        N = {
            permissionContext: t,
            query: m,
            splitQuery: g,
            allowEmptySections: c,
            scoreMethod: _,
            installOnDemand: f,
        },
        R = n.result?.sections ?? {},
        O = i.result?.sections ?? {},
        b = new Set();
    if (l) {
        if (t.hasBaseAccessPermissions)
            for (let e in R) {
                let t = R[e];
                (null == u || t.descriptor.id === u) && b.add(e);
            }
        for (let e in O) {
            let t = O[e];
            (null == u || t.descriptor.id === u) && b.add(e);
        }
    }
    let D = new Map();
    for (let [e, t] of r)
        if (null == u || e === u) {
            let e = t.result?.sections;
            if (null != e) for (let t of Object.keys(e)) b.add(t), D.set(t, e[t]);
        }
    for (let e of Array.from(b)) {
        let t,
            n,
            i = R[e],
            r = O[e],
            a = D.get(e),
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
        let u = eo(t, n, o, l, N);
        null != u && y.push(u);
    }
    if (
        (h.applications.useFrecency && p.bW.loadIfNecessary(),
        y.sort((e, t) => {
            if (h.applications.useScore && _ === v.M.APPLICATION_ONLY) {
                let n = e.data[0]?.score ?? Number.MAX_VALUE,
                    i = t.data[0]?.score ?? Number.MAX_VALUE;
                if (n !== i) return n - i;
            }
            if (h.applications.useFrecency) {
                let n = d.A.getScoreWithoutLoadingLatest(e.section.id),
                    i = d.A.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== i) return i - n;
            }
            return eh(e.section.name, t.section.name);
        }),
        T.length > 0 || !0 === c)
    ) {
        let e = eo(S.gZ[L.Ik.BUILT_IN], T, !0, !0, N);
        null != e && y.push(e);
    }
    let w = y.flatMap((e) => e.data.map((t) => ({ ...t, section: e.section })));
    if (_ === v.M.COMMAND_ONLY || _ === v.M.COMMAND_OR_APPLICATION) {
        let e = t.context,
            n = A.A.getGuild(t?.context?.guild_id);
        h.commands.useFrecency && p.bW.loadIfNecessary();
        let i = null != e ? { channel: e, guild: n } : void 0;
        w.sort((e, t) => {
            if (h.commands.useScore) {
                let n = e.score ?? 0,
                    i = t.score ?? 0;
                if (n !== i) return n - i;
            }
            if (h.commands.useFrecency) {
                let n = C.Ay.getScoreWithoutLoadingLatest(i, e),
                    r = C.Ay.getScoreWithoutLoadingLatest(i, t);
                if (n !== r) return r - n;
            }
            return eh(e.displayName, t.displayName);
        });
    }
    return {
        commands: w,
        descriptors: y.map((e) => e.section),
        sectionedCommands: y,
        loading:
            n?.fetchState.fetching === !0 ||
            i?.fetchState.fetching === !0 ||
            (null != u && r.get(u)?.fetchState.fetching === !0),
    };
}
function eo(e, t, n, i, r) {
    let s,
        {
            query: a,
            splitQuery: o,
            allowEmptySections: l,
            scoreMethod: u,
            permissionContext: c,
            installOnDemand: d,
        } = r,
        { context: _, userId: h, roleIds: f, isImpersonating: p } = c,
        E = _?.guild_id != null ? D.we(e.permissions, _.guild_id, h, f, p) : null,
        m = _?.guild_id != null ? D._W(e.permissions, _, _.guild_id) : null,
        g = [];
    for (let r of t)
        D.zl(r, c, {
            applicationAllowedForUser: E,
            applicationAllowedForChannel: m,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: i || d,
        }) === D.CA.ALLOWED && g.push(r);
    return 0 !==
        (s =
            u !== v.M.NONE && null != a && null != o
                ? (function (e, t, n, i, r) {
                      let s,
                          a = [];
                      if (r === v.M.APPLICATION_ONLY || r === v.M.COMMAND_OR_APPLICATION) {
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
                          (r === v.M.COMMAND_ONLY || r === v.M.COMMAND_OR_APPLICATION) &&
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
                  })(a, o, g, e, u)
                : g).length || l
        ? ((u === v.M.NONE || u === v.M.APPLICATION_ONLY) && s.sort((e, t) => eh(e.displayName, t.displayName)),
          { section: e, data: s })
        : null;
}
function el(e) {
    return e?.guild_id != null || (e?.type === w.rbe.DM && I.default.getUser(e.getRecipientId())?.bot === !0);
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
    if ((null != e.user && n.push({ type: R.RA.USER, id: t, permission: e.user }), null != e.channels))
        for (let [t, i] of Object.entries(e.channels)) n.push({ type: R.RA.CHANNEL, id: t, permission: i });
    if (null != e.roles) for (let [t, i] of Object.entries(e.roles)) n.push({ type: R.RA.ROLE, id: t, permission: i });
    return n;
}
function eh(e, t) {
    return Q.collator.compare(e, t);
}
function ef(e, t) {
    return eh(e, t);
}
function ep(e, t) {
    let n, i;
    if (t === L.Ik.BUILT_IN)
        return {
            descriptor: S.gZ[L.Ik.BUILT_IN],
            sectionCommands: (0, S.Ez)([c.kc.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0,
        };
    let r = Q.getContextState(e),
        s = Q.getUserState(),
        a = r.result?.sections ?? {},
        o = s.result?.sections ?? {},
        l = a[t],
        u = o[t],
        d = Q.getApplicationState(t).result?.sections?.[t];
    if (null != l && null != u) {
        for (let e in ((n = u.descriptor), (i = []), u.commands)) {
            let t = u.commands[e];
            i.push(t);
        }
        for (let e in l.commands)
            if (!(e in u.commands)) {
                let t = l.commands[e];
                i.push(t);
            }
    } else
        null != l
            ? ((n = l.descriptor), (i = Object.values(l.commands)))
            : null != u
              ? ((n = u.descriptor), (i = Object.values(u.commands)))
              : null != d && ((n = d.descriptor), (i = Object.values(d.commands)));
    return { descriptor: n, sectionCommands: i, isGuildInstalled: null != l, isUserInstalled: null != u };
}
