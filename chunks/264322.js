n.d(t, {
    A4: () => eb,
    Ay: () => em,
    ON: () => eE,
    RF: () => eG,
    SD: () => eg,
    Sx: () => eV,
    XC: () => ev,
    ZA: () => eI,
    Zn: () => en,
}),
    n(228524),
    n(896048),
    n(321073),
    n(638769),
    n(747238),
    n(114821),
    n(339614),
    n(938796);
var r,
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(683588),
    l = n(311907),
    c = n(73153),
    u = n(686956),
    d = n(155718),
    f = n(630248),
    p = n(626584),
    _ = n(200662),
    h = n(773669),
    m = n(594061),
    g = n(961350),
    E = n(734057),
    b = n(696451),
    y = n(71393),
    O = n(287809),
    A = n(954571),
    v = n(827785),
    S = n(56494),
    I = n(26909),
    T = n(577700),
    C = n(210978),
    N = n(392054),
    R = n(168186),
    w = n(240591),
    P = n(46477),
    D = n(73510),
    x = n(652215);

function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}

function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = new p.A("ApplicationCommandIndexStore"),
    G = Symbol("currentUser"),
    V = Symbol("stale"),
    F = Symbol("current"),
    B = Object.freeze({
        descriptors: [],
        commands: [],
        sectionedCommands: [],
        loading: !0,
    }),
    H = Object.freeze({
        serverVersion: F,
        fetchState: {
            fetching: !1,
        },
        result: {
            sections: {},
            sectionIdsByBotId: {},
            version: F,
        },
    }),
    Y = Object.freeze({
        serverVersion: V,
        fetchState: {
            fetching: !1,
        },
    }),
    W = 5e3,
    K = {
        sensitivity: "accent",
        numeric: !0,
    },
    z = !1,
    q = [];

function X(e) {
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

function Z(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = X(e),
        a = eh.indices[i];
    return (
        null != a
            ? ("fetchState" in t && a.fetchState.fetching && a.fetchState.abort.abort(), (n = j({}, a, t)))
            : r &&
              (n = j(
                  {
                      serverVersion: V,
                      fetchState: {
                          fetching: !1,
                      },
                  },
                  t,
              )),
        void 0 !== n &&
            ((eh.indices[i] = n),
            "application" === e.type &&
                (eh.applicationIndices.set(i, n), (eh.applicationIndicesVersion = eh.applicationIndicesVersion + 1))),
        a
    );
}

function Q(e) {
    let t = X(e),
        n = eh.indices[t];
    (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete eh.indices[t];
}

function $() {
    for (let e of Object.values(eh.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    eh.indices = {};
}

function J() {
    for (let e of q) ei(e);
    q = [];
}

function ee() {
    for (let e of Object.values(eh.indices)) e.serverVersion = V;
    J(), (z = !0);
}

function et(e) {
    var t;
    let { target: n } = e,
        r = X(n);
    eR(null != (t = eh.indices[r]) ? t : Y) && er(n);
}
async function en(e) {
    var t, n, r;
    let i = X(e),
        a = null != (t = eh.indices[i]) ? t : Y;
    if (!eR(a)) {
        if (a.fetchState.fetching) {
            let e = a.fetchState.promise;
            return await e, null != (r = eh.indices[i]) ? r : Y;
        }
        return a;
    }
    return await er(e), null != (n = eh.indices[i]) ? n : Y;
}
async function er(e) {
    let t = new AbortController(),
        n = new o.K();
    Z(
        e,
        {
            fetchState: {
                fetching: !0,
                abort: t,
                promise: n.promise,
            },
        },
        !0,
    ),
        await (0, T.E)(e, t).then(n.resolve).catch(n.reject);
}

function ei(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: i, index: a } = e,
        s = null == (n = O.default.getCurrentUser()) ? void 0 : n.id;
    if (null == s) return z || q.push(e), !1;
    let o = {},
        l = {},
        c = new Set();
    for (let e of a.applications) {
        if (null == e.bot && null != e.bot_id) {
            l[e.bot_id] = e.id;
            let t = O.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : c.add(e.bot_id);
        } else null != e.bot && (l[e.bot.id] = e.id);
        let t = {
            descriptor: k(j({}, (0, R.bq)(eP(e), !1)), {
                permissions: null != e.permissions ? (0, _.UZ)(ej(e.permissions, s)) : void 0,
                botId: e.bot_id,
            }),
            commands: {},
        };
        o[e.id] = t;
    }
    for (let e of ("guild" === i.type && c.size > 0 && u.A.requestMembersById(i.guildId, [...c]),
    (0, R.Lz)(
        a.application_commands.map((e) => eD(e, s)),
        !0,
    ))) {
        let t = o[e.applicationId];
        if (null == t) {
            U.error("Command has no matching application");
            continue;
        }
        t.commands[e.id] = e;
    }
    let d = null != (t = a.version) ? t : F;
    Z(
        i,
        {
            serverVersion: d,
            result: {
                sections: o,
                sectionIdsByBotId: l,
                version: d,
            },
            fetchState: {
                fetching: !1,
            },
        },
        r,
    );
}

function ea(e) {
    let { target: t } = e;
    Z(t, {
        fetchState: {
            fetching: !1,
            retryAfter: Date.now() + W,
        },
    });
}

function es(e) {
    var t;
    let { guildId: n, version: r } = e,
        i = Z(
            {
                type: "guild",
                guildId: n,
            },
            {
                serverVersion: null != r ? r : V,
            },
        ),
        a = null == i || null == (t = i.result) ? void 0 : t.sectionIdsByBotId;
    if (null != a)
        for (let e in a) {
            let t = E.A.getDMFromUserId(e);
            null != t &&
                Z(
                    {
                        type: "channel",
                        channelId: t,
                    },
                    {
                        serverVersion: V,
                    },
                );
        }
}

function eo(e, t) {
    var n;
    let r = X({
            type: "guild",
            guildId: e,
        }),
        i = null == (n = eh.indices[r]) ? void 0 : n.result;
    if (null == i) return !1;
    let a = !1;
    return (
        t.forEach((e) => {
            let { user: t, nick: n } = e;
            if (!t.bot) return;
            let r = i.sectionIdsByBotId[t.id];
            if (null == r) return;
            let o = i.sections[r];
            s()(null != o, "Bot has no matching index section"),
                s()(null != o.descriptor.application, "Bot's index section has no application info");
            let l = (0, R.bq)(
                k(j({}, o.descriptor.application), {
                    bot: t,
                }),
                !1,
                n,
            );
            (o.descriptor = j({}, o.descriptor, l)), (a = !0);
        }),
        a
    );
}

function el(e) {
    let { applicationId: t, channelId: n, guildId: r } = e;
    eh.hasContextStateApplication({
        applicationId: t,
        channelId: n,
        guildId: r,
    }) &&
        Z(
            null != r
                ? {
                      type: "guild",
                      guildId: r,
                  }
                : {
                      type: "channel",
                      channelId: n,
                  },
            {
                serverVersion: V,
            },
        ),
        eh.hasUserStateApplication(t) &&
            Z(
                {
                    type: "user",
                },
                {
                    serverVersion: V,
                },
            ),
        eh.hasApplicationState(t) &&
            Z(
                {
                    type: "application",
                    applicationId: t,
                },
                {
                    serverVersion: V,
                },
            );
}

function ec(e) {
    let { channel: t } = e;
    Q({
        type: "channel",
        channelId: t.id,
    });
}

function eu(e) {
    let { guild: t } = e;
    Q({
        type: "guild",
        guildId: t.id,
    });
}

function ed() {
    Z(
        {
            type: "user",
        },
        {
            serverVersion: V,
        },
    );
}

function ef(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = eo(e.guildId, e.members) || n;
    return n;
}

function ep() {
    let e = h.default.locale;
    return (
        e !== eh.oldLocale &&
        ($(),
        (eh.collator = new Intl.Collator(e, {
            sensitivity: "accent",
            numeric: !0,
        })),
        (eh.oldLocale = e),
        !0)
    );
}
class e_ extends (r = l.Ay.Store) {
    initialize() {
        this.waitFor(h.default),
            this.waitFor(I.Ay, f.A, g.default, E.A, b.Ay, y.A, O.default),
            this.syncWith([h.default], () => {
                ep();
            });
    }
    getContextState(e) {
        var t, n;
        return "contextless" !== e.type && eN(e.channel)
            ? null != (t = this.indices[null != (n = e.channel.guild_id) ? n : e.channel.id])
                ? t
                : Y
            : H;
    }
    hasContextStateApplication(e) {
        var t, n;
        let { applicationId: r, channelId: i, guildId: a } = e,
            s = this.indices[null != a ? a : i];
        return null != (null != (t = null == s || null == (n = s.result) ? void 0 : n.sections) ? t : {})[r];
    }
    getGuildState(e) {
        var t;
        return null == e ? H : null != (t = this.indices[e]) ? t : Y;
    }
    getUserState() {
        var e;
        return null != (e = this.indices[G]) ? e : Y;
    }
    hasUserStateApplication(e) {
        var t, n;
        let r = this.indices[G];
        return null != (null != (t = null == r || null == (n = r.result) ? void 0 : n.sections) ? t : {})[e];
    }
    getApplicationState(e) {
        var t;
        return null == e ? H : null != (t = this.indices[e]) ? t : Y;
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == O.default.getCurrentUser()) return B;
        let r = "channel" === e.type ? e.channel : void 0,
            i = this.getContextState(e),
            a = this.getUserState(),
            s = this.getApplicationState(n.applicationId),
            o = this.getApplicationStates(),
            l = (0, w.Bh)(r, t.commandTypes),
            c = null == r || (null == l ? void 0 : l.hasBaseAccessPermissions) === !0,
            u = !1 !== t.applicationCommands,
            d = !1;
        n.allowFetch &&
            (u &&
                c &&
                null != r &&
                eN(r) &&
                (A.default.track(x.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == i.result,
                    size: Object.keys(eh.indices).length,
                }),
                eR(i) &&
                    null != r &&
                    (null != r.guild_id
                        ? (0, T.$)({
                              type: "guild",
                              guildId: r.guild_id,
                          })
                        : (0, T.$)({
                              type: "channel",
                              channelId: r.id,
                          }),
                    (d = !0))),
            eR(a) &&
                ((0, T.$)({
                    type: "user",
                }),
                (d = !0)),
            eR(s) &&
                null != n.applicationId &&
                ((0, T.$)({
                    type: "application",
                    applicationId: n.applicationId,
                }),
                (d = !0)));
        let f = eT({
            permissionContext: l,
            text: t.text,
            allowApplicationCommands: u,
            builtIns: t.builtIns,
            scoreMethod: n.scoreMethod,
            allowEmptySections: n.allowEmptySections,
            contextState: i,
            userState: a,
            applicationStates: n.allowApplicationState ? o : new Map(),
            sortOptions: n.sortOptions,
            singleApplicationId: n.applicationId,
            installOnDemand: n.installOnDemand,
        });
        return (f.loading = f.loading || d), f;
    }
    queryInstallOnDemandApp(e, t) {
        let n = E.A.getChannel(t);
        null != n &&
            this.query(
                null != n
                    ? {
                          channel: n,
                          type: "channel",
                      }
                    : {
                          type: "contextless",
                      },
                {
                    commandTypes: [d.kc.CHAT],
                },
                {
                    placeholderCount: 5,
                    scoreMethod: C.M.COMMAND_ONLY,
                    applicationId: e,
                    allowFetch: !0,
                },
            );
    }
    constructor(...e) {
        super(...e),
            L(this, "indices", {}),
            L(this, "applicationIndices", new Map()),
            L(this, "applicationIndicesVersion", 0),
            L(this, "oldLocale", h.default.locale),
            L(this, "collator", new Intl.Collator(h.default.locale, K));
    }
}
L(e_, "displayName", "ApplicationCommandIndexStore");
let eh = new e_(c.h, {
        LOGOUT: $,
        CONNECTION_OPEN: ee,
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: et,
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: ei,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: ea,
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: el,
        CHANNEL_DELETE: ec,
        GUILD_DELETE: eu,
        USER_APPLICATION_UPDATE: ed,
        USER_APPLICATION_REMOVE: ed,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: es,
        GUILD_MEMBERS_CHUNK_BATCH: ef,
    }),
    em = eh;

function eg(e, t, n) {
    let [r, a] = i.useState(!0),
        s = (0, l.cf)([eh], () => ("channel" === e.type ? eh.getContextState(e) : eh.getUserState()));
    return (
        i.useEffect(() => {
            if (r) {
                if ("contextless" === e.type) {
                    n &&
                        eR(s) &&
                        (0, T.$)({
                            type: "user",
                        });
                    return;
                }
                n &&
                    t &&
                    eN(e.channel) &&
                    (A.default.track(x.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(eh.indices).length,
                    }),
                    eR(s) &&
                        (null != e.channel.guild_id
                            ? (0, T.$)({
                                  type: "guild",
                                  guildId: e.channel.guild_id,
                              })
                            : (0, T.$)({
                                  type: "channel",
                                  channelId: e.channel.id,
                              }))),
                    a(!1);
            }
        }, [s, n, e, t, r]),
        s
    );
}

function eE(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, l.cf)([eh], () => {
            var t;
            return null != (t = eh.indices[e]) ? t : Y;
        });
    return (
        i.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (A.default.track(x.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(eh.indices).length,
                    }),
                    eR(a) &&
                        (0, T.$)({
                            type: "guild",
                            guildId: e,
                        })),
                r(!1));
        }, [a, t, e, n]),
        a
    );
}

function eb(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, l.cf)([eh], () => eh.getUserState());
    return (
        i.useEffect(() => {
            n &&
                (t &&
                    eR(a) &&
                    e &&
                    (0, T.$)({
                        type: "user",
                    }),
                r(!1));
        }, [a, t, e, n]),
        a
    );
}

function ey(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, l.bG)([eh], () => eh.getApplicationState(e));
    i.useEffect(() => {
        n &&
            (t &&
                eR(a) &&
                null != e &&
                (0, T.$)({
                    type: "application",
                    applicationId: e,
                }),
            r(!1));
    }, [t, e, a, n]);
}

function eO() {
    return (0, l.bG)([eh], () => eh.getApplicationStates());
}

function eA() {
    return (0, l.bG)([eh], () => eh.applicationIndicesVersion);
}

function ev(e, t, n, r) {
    let { descriptors: a, commands: s, sectionedCommands: o, loading: l } = eI(e, n, r),
        c = i.useMemo(
            () =>
                "channel" === e.type
                    ? {
                          channel: e.channel,
                          guild: t,
                      }
                    : void 0,
            [e, t],
        ),
        u = (0, S.F)(c);
    return i.useMemo(() => {
        if (!r.includeFrecency || 0 === u.length)
            return {
                descriptors: a,
                commands: s,
                sectionedCommands: o,
                loading: l,
            };
        let e = s
            .filter((e) => u.includes(e.id))
            .sort((e, t) => {
                let n = I.Ay.getScoreWithoutLoadingLatest(c, e);
                return I.Ay.getScoreWithoutLoadingLatest(c, t) - n;
            })
            .splice(0, D.Ob);
        return 0 === e.length
            ? {
                  descriptors: a,
                  commands: s,
                  sectionedCommands: o,
                  loading: l,
              }
            : {
                  descriptors: [v.gZ[D.Ik.FRECENCY], ...a],
                  commands: e.concat(s),
                  sectionedCommands: [
                      {
                          section: v.gZ[D.Ik.FRECENCY],
                          data: e,
                      },
                      ...o,
                  ],
                  loading: l,
              };
    }, [l, r.includeFrecency, u, s, a, o, c]);
}
let eS = Object.freeze({
    applications: {
        useFrecency: !1,
        useScore: !1,
    },
    commands: {
        useFrecency: !0,
        useScore: !0,
    },
});

function eI(e, t, n) {
    let r = "channel" === e.type ? e.channel : void 0,
        a = (0, w.MW)(r, t.commandTypes),
        s = !1 !== t.applicationCommands,
        o = eg(e, s, n.allowFetch),
        l = eb(s, n.allowFetch),
        c = eO(),
        u = eA();
    return (
        ey(n.applicationId, n.allowFetch),
        i.useMemo(
            () =>
                eT({
                    permissionContext: a,
                    text: t.text,
                    allowApplicationCommands: s,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: o,
                    userState: l,
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
                l,
                e,
                c,
                u,
            ],
        )
    );
}

function eT(e) {
    var t, n, r, i, a, o, l;
    let {
            permissionContext: c,
            contextState: u,
            userState: d,
            applicationStates: p,
            text: _,
            builtIns: h = C.n.ALLOW,
            allowApplicationCommands: g = !0,
            singleApplicationId: E,
            allowEmptySections: b = !1,
            scoreMethod: O = C.M.NONE,
            sortOptions: A = eS,
            installOnDemand: S = !1,
        } = e,
        { commandTypes: T } = c,
        N = null == _ ? void 0 : _.toLowerCase(),
        R = null == N ? void 0 : N.split(" "),
        w = h === C.n.ONLY_TEXT,
        P = h !== C.n.DENY ? (0, v.Ez)(T, !0, w) : [],
        x = [],
        L = {
            permissionContext: c,
            query: N,
            splitQuery: R,
            allowEmptySections: b,
            scoreMethod: O,
            installOnDemand: S,
        },
        M = null != (t = null == (r = u.result) ? void 0 : r.sections) ? t : {},
        U = null != (n = null == (i = d.result) ? void 0 : i.sections) ? n : {},
        G = new Set();
    if (g) {
        if (c.hasBaseAccessPermissions)
            for (let e in M) {
                let t = M[e];
                (null == E || t.descriptor.id === E) && G.add(e);
            }
        for (let e in U) {
            let t = U[e];
            (null == E || t.descriptor.id === E) && G.add(e);
        }
    }
    let V = new Map();
    for (let [e, t] of p)
        if (null == E || e === E) {
            let e = null == (o = t.result) ? void 0 : o.sections;
            if (null != e) for (let t of Object.keys(e)) G.add(t), V.set(t, e[t]);
        }
    for (let e of Array.from(G)) {
        let t,
            n,
            r = M[e],
            i = U[e],
            a = V.get(e),
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
        let c = eC(t, n, o, l, L);
        null != c && x.push(c);
    }
    if (
        (A.applications.useFrecency && m.bW.loadIfNecessary(),
        x.sort((e, t) => {
            if (A.applications.useScore && O === C.M.APPLICATION_ONLY) {
                var n, r, i, a;
                let s = null != (n = null == (i = e.data[0]) ? void 0 : i.score) ? n : Number.MAX_VALUE,
                    o = null != (r = null == (a = t.data[0]) ? void 0 : a.score) ? r : Number.MAX_VALUE;
                if (s !== o) return s - o;
            }
            if (A.applications.useFrecency) {
                let n = f.A.getScoreWithoutLoadingLatest(e.section.id),
                    r = f.A.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return eU(e.section.name, t.section.name);
        }),
        P.length > 0 || !0 === b)
    ) {
        let e = eC(v.gZ[D.Ik.BUILT_IN], P, !0, !0, L);
        null != e && x.push(e);
    }
    let F = x.flatMap((e) =>
        e.data.map((t) =>
            k(j({}, t), {
                section: e.section,
            }),
        ),
    );
    if (O === C.M.COMMAND_ONLY || O === C.M.COMMAND_OR_APPLICATION) {
        let e = c.context,
            t = y.A.getGuild(null == c || null == (l = c.context) ? void 0 : l.guild_id);
        A.commands.useFrecency && m.bW.loadIfNecessary();
        let n =
            null != e
                ? {
                      channel: e,
                      guild: t,
                  }
                : void 0;
        F.sort((e, t) => {
            if (A.commands.useScore) {
                var r, i;
                let n = null != (r = e.score) ? r : 0,
                    a = null != (i = t.score) ? i : 0;
                if (n !== a) return n - a;
            }
            if (A.commands.useFrecency) {
                let r = I.Ay.getScoreWithoutLoadingLatest(n, e),
                    i = I.Ay.getScoreWithoutLoadingLatest(n, t);
                if (r !== i) return i - r;
            }
            return eU(e.displayName, t.displayName);
        });
    }
    return {
        commands: F,
        descriptors: x.map((e) => e.section),
        sectionedCommands: x,
        loading:
            (null == u ? void 0 : u.fetchState.fetching) === !0 ||
            (null == d ? void 0 : d.fetchState.fetching) === !0 ||
            (null != E && (null == (a = p.get(E)) ? void 0 : a.fetchState.fetching) === !0),
    };
}

function eC(e, t, n, r, i) {
    let a,
        {
            query: s,
            splitQuery: o,
            allowEmptySections: l,
            scoreMethod: c,
            permissionContext: u,
            installOnDemand: d,
        } = i,
        { context: f, userId: p, roleIds: _, isImpersonating: h } = u,
        m = (null == f ? void 0 : f.guild_id) != null ? P.we(e.permissions, f.guild_id, p, _, h) : null,
        g = (null == f ? void 0 : f.guild_id) != null ? P._W(e.permissions, f, f.guild_id) : null,
        E = [];
    for (let i of t)
        P.zl(i, u, {
            applicationAllowedForUser: m,
            applicationAllowedForChannel: g,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: r || d,
        }) === P.CA.ALLOWED && E.push(i);
    return 0 !== (a = c !== C.M.NONE && null != s && null != o ? eM(s, o, E, e, c) : E).length || l
        ? ((c === C.M.NONE || c === C.M.APPLICATION_ONLY) && a.sort((e, t) => eU(e.displayName, t.displayName)),
          {
              section: e,
              data: a,
          })
        : null;
}

function eN(e) {
    var t;
    return (
        (null == e ? void 0 : e.guild_id) != null ||
        (e.type === x.rbe.DM && (null == (t = O.default.getUser(e.getRecipientId())) ? void 0 : t.bot) === !0)
    );
}

function eR(e) {
    return (
        !!ew(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    );
}

function ew(e) {
    var t;
    return (null == (t = e.result) ? void 0 : t.version) !== e.serverVersion;
}

function eP(e) {
    return {
        description: e.description,
        icon: e.icon,
        id: e.id,
        name: e.name,
        bot: e.bot,
        flags: e.flags,
    };
}

function eD(e, t) {
    var n, r, i, a, s;
    let o = k(j({}, e), {
        description: null != (n = null != (r = e.description_default) ? r : e.description) ? n : "",
        dm_permission: e.dm_permission,
        name: null != (i = e.name_default) ? i : e.name,
        options: null != (a = null == (s = e.options) ? void 0 : s.map(ex)) ? a : [],
        permissions: null != e.permissions ? ej(e.permissions, t) : void 0,
    });
    return (
        e.description !== e.description_default && (o.description_localized = e.description),
        e.name !== e.name_default && (o.name_localized = e.name),
        o
    );
}

function ex(e) {
    var t, n, r, i;
    let a = k(j({}, e), {
        choices: null == (r = e.choices) ? void 0 : r.map(eL),
        description: null != (t = e.description_default) ? t : e.description,
        name: null != (n = e.name_default) ? n : e.name,
        options: null == (i = e.options) ? void 0 : i.map(ex),
    });
    return (
        e.description !== e.description_default && (a.description_localized = e.description),
        e.name !== e.name_default && (a.name_localized = e.name),
        a
    );
}

function eL(e) {
    var t;
    let n = k(j({}, e), {
        name: null != (t = e.name_default) ? t : e.name,
    });
    return e.name !== e.name_default && (n.name_localized = e.name), n;
}

function ej(e, t) {
    let n = [];
    if (
        (null != e.user &&
            n.push({
                type: N.RA.USER,
                id: t,
                permission: e.user,
            }),
        null != e.channels)
    )
        for (let [t, r] of Object.entries(e.channels))
            n.push({
                type: N.RA.CHANNEL,
                id: t,
                permission: r,
            });
    if (null != e.roles)
        for (let [t, r] of Object.entries(e.roles))
            n.push({
                type: N.RA.ROLE,
                id: t,
                permission: r,
            });
    return n;
}

function eM(e, t, n, r, i) {
    let a,
        s = [];
    if (i === C.M.APPLICATION_ONLY || i === C.M.COMMAND_OR_APPLICATION) {
        let t = r.name.toLocaleLowerCase();
        if (t.startsWith(e)) a = 5;
        else if (t.includes(e)) a = 6;
        else {
            var o, l;
            let t = null == (l = r.application) || null == (o = l.description) ? void 0 : o.toLocaleLowerCase();
            (null == t ? void 0 : t.includes(e)) && (a = 8);
        }
    }
    let c = t[0],
        u = t.slice(1).join(" ");
    for (let t of n) {
        let n;
        (i === C.M.COMMAND_ONLY || i === C.M.COMMAND_OR_APPLICATION) && (n = ek(t, e, c, u)),
            (void 0 === n || (void 0 !== a && a < n)) && (n = a),
            void 0 !== n &&
                s.push(
                    k(j({}, t), {
                        score: n,
                    }),
                );
    }
    return s;
}

function ek(e, t, n, r) {
    var i;
    let a = e.untranslatedName.toLocaleLowerCase(),
        s = e.displayName.toLocaleLowerCase();
    if (a.startsWith(t) || s.startsWith(t)) return 0;
    if (
        (a.startsWith(n) && a.split(" ").slice(1).join(" ").startsWith(r)) ||
        (s.startsWith(n) && s.split(" ").slice(1).join(" ").startsWith(r))
    )
        return 1;
    if (a.includes(t) || (null == s ? void 0 : s.includes(t))) return 2;
    let o = !1;
    for (let { name: n, serverLocalizedName: r } of null != (i = e.options) ? i : []) {
        if (
            n.startsWith(t) ||
            "".concat(a, " ").concat(n).startsWith(t) ||
            (null != s && "".concat(s, " ").concat(n).startsWith(t)) ||
            (null != r &&
                (r.startsWith(t) ||
                    "".concat(a, " ").concat(r).startsWith(t) ||
                    (null != s && "".concat(s, " ").concat(r).startsWith(t))))
        )
            return 3;
        (n.includes(t) || (null == r ? void 0 : r.includes(t))) && (o = !0);
    }
    if (o) return 4;
    let l = e.untranslatedDescription.toLocaleLowerCase(),
        c = e.displayDescription.toLocaleLowerCase();
    if (l.includes(t) || c.includes(t)) return 7;
}

function eU(e, t) {
    return eh.collator.compare(e, t);
}

function eG(e, t) {
    return eU(e, t);
}

function eV(e, t) {
    var n, r, i, a, s, o;
    let l, c;
    if (t === D.Ik.BUILT_IN)
        return {
            descriptor: v.gZ[D.Ik.BUILT_IN],
            sectionCommands: (0, v.Ez)([d.kc.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0,
        };
    let u = eh.getContextState(e),
        f = eh.getUserState(),
        p = null != (n = null == (i = u.result) ? void 0 : i.sections) ? n : {},
        _ = null != (r = null == (a = f.result) ? void 0 : a.sections) ? r : {},
        h = p[t],
        m = _[t],
        g = null == (o = eh.getApplicationState(t).result) || null == (s = o.sections) ? void 0 : s[t];
    if (null != h && null != m) {
        for (let e in ((l = m.descriptor), (c = []), m.commands)) {
            let t = m.commands[e];
            c.push(t);
        }
        for (let e in h.commands)
            if (!(e in m.commands)) {
                let t = h.commands[e];
                c.push(t);
            }
    } else
        null != h
            ? ((l = h.descriptor), (c = Object.values(h.commands)))
            : null != m
              ? ((l = m.descriptor), (c = Object.values(m.commands)))
              : null != g && ((l = g.descriptor), (c = Object.values(g.commands)));
    return {
        descriptor: l,
        sectionCommands: c,
        isGuildInstalled: null != h,
        isUserInstalled: null != m,
    };
}
