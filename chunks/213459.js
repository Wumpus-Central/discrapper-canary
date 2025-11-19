n.d(t, {
    FN: () => en,
    If: () => eB,
    JK: () => eI,
    LD: () => eE,
    PL: () => eb,
    ZP: () => em,
    em: () => eg,
    un: () => eG,
    v1: () => eS,
}),
    n(953529),
    n(388685),
    n(539854),
    n(642613),
    n(35282),
    n(361932),
    n(187205),
    n(997841);
var r,
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    c = n(749210),
    u = n(911969),
    d = n(822245),
    f = n(710845),
    _ = n(399860),
    p = n(706454),
    h = n(675478),
    m = n(314897),
    g = n(592125),
    E = n(271383),
    b = n(430824),
    y = n(594174),
    O = n(626135),
    v = n(226351),
    I = n(254711),
    T = n(700089),
    S = n(654455),
    A = n(963456),
    C = n(367790),
    N = n(895924),
    R = n(581364),
    P = n(807169),
    D = n(104793),
    w = n(689079),
    L = n(981631);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = new f.Z("ApplicationCommandIndexStore"),
    G = Symbol("currentUser"),
    B = Symbol("stale"),
    Z = Symbol("current"),
    F = Object.freeze({
        descriptors: [],
        commands: [],
        sectionedCommands: [],
        loading: !0,
    }),
    V = Object.freeze({
        serverVersion: Z,
        fetchState: { fetching: !1 },
        result: {
            sections: {},
            sectionIdsByBotId: {},
            version: Z,
        },
    }),
    H = Object.freeze({
        serverVersion: B,
        fetchState: { fetching: !1 },
    }),
    Y = 5000,
    W = {
        sensitivity: "accent",
        numeric: !0,
    },
    K = !1,
    z = [];
function q(e) {
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
function X(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = q(e),
        a = eh.indices[i];
    return (
        null != a
            ? ("fetchState" in t && a.fetchState.fetching && a.fetchState.abort.abort(), (n = M({}, a, t)))
            : r &&
              (n = M(
                  {
                      serverVersion: B,
                      fetchState: { fetching: !1 },
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
    let t = q(e),
        n = eh.indices[t];
    (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete eh.indices[t];
}
function J() {
    for (let e of Object.values(eh.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    eh.indices = {};
}
function $() {
    for (let e of z) ei(e);
    z = [];
}
function ee() {
    for (let e of Object.values(eh.indices)) e.serverVersion = B;
    $(), (K = !0);
}
function et(e) {
    var t;
    let { target: n } = e,
        r = q(n);
    eR(null != (t = eh.indices[r]) ? t : H) && er(n);
}
async function en(e) {
    var t, n, r;
    let i = q(e),
        a = null != (t = eh.indices[i]) ? t : H;
    if (!eR(a)) {
        if (a.fetchState.fetching) {
            let e = a.fetchState.promise;
            return await e, null != (n = eh.indices[i]) ? n : H;
        }
        return a;
    }
    return await er(e), null != (r = eh.indices[i]) ? r : H;
}
async function er(e) {
    let t = new AbortController(),
        n = new v.o();
    X(
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
        await (0, A.a)(e, t).then(n.resolve).catch(n.reject);
}
function ei(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: i, index: a } = e,
        o = null == (t = y.default.getCurrentUser()) ? void 0 : t.id;
    if (null == o) return K || z.push(e), !1;
    let s = {},
        l = {},
        u = new Set();
    for (let e of a.applications) {
        if (null == e.bot && null != e.bot_id) {
            l[e.bot_id] = e.id;
            let t = y.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : u.add(e.bot_id);
        } else null != e.bot && (l[e.bot.id] = e.id);
        let t = {
            descriptor: k(M({}, (0, R.X0)(eD(e), !1)), {
                permissions: null != e.permissions ? (0, _.tk)(eM(e.permissions, o)) : void 0,
                botId: e.bot_id,
            }),
            commands: {},
        };
        s[e.id] = t;
    }
    for (let e of ("guild" === i.type && u.size > 0 && c.Z.requestMembersById(i.guildId, [...u]),
    (0, R.nG)(
        a.application_commands.map((e) => ew(e, o)),
        !0,
    ))) {
        let t = s[e.applicationId];
        if (null == t) {
            U.error("Command has no matching application");
            continue;
        }
        t.commands[e.id] = e;
    }
    let d = null != (n = a.version) ? n : Z;
    X(
        i,
        {
            serverVersion: d,
            result: {
                sections: s,
                sectionIdsByBotId: l,
                version: d,
            },
            fetchState: { fetching: !1 },
        },
        r,
    );
}
function ea(e) {
    let { target: t } = e;
    X(t, {
        fetchState: {
            fetching: !1,
            retryAfter: Date.now() + Y,
        },
    });
}
function eo(e) {
    var t;
    let { guildId: n, version: r } = e,
        i = X(
            {
                type: "guild",
                guildId: n,
            },
            { serverVersion: null != r ? r : B },
        ),
        a = null == i || null == (t = i.result) ? void 0 : t.sectionIdsByBotId;
    if (null != a)
        for (let e in a) {
            let t = g.Z.getDMFromUserId(e);
            null != t &&
                X(
                    {
                        type: "channel",
                        channelId: t,
                    },
                    { serverVersion: B },
                );
        }
}
function es(e, t) {
    var n;
    let r = q({
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
            let s = i.sections[r];
            o()(null != s, "Bot has no matching index section"),
                o()(null != s.descriptor.application, "Bot's index section has no application info");
            let l = (0, R.X0)(k(M({}, s.descriptor.application), { bot: t }), !1, n);
            (s.descriptor = M({}, s.descriptor, l)), (a = !0);
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
        X(
            null != r
                ? {
                      type: "guild",
                      guildId: r,
                  }
                : {
                      type: "channel",
                      channelId: n,
                  },
            { serverVersion: B },
        ),
        eh.hasUserStateApplication(t) && X({ type: "user" }, { serverVersion: B }),
        eh.hasApplicationState(t) &&
            X(
                {
                    type: "application",
                    applicationId: t,
                },
                { serverVersion: B },
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
    X({ type: "user" }, { serverVersion: B });
}
function ef(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = es(e.guildId, e.members) || n;
    return n;
}
function e_() {
    let e = p.default.locale;
    return (
        e !== eh.oldLocale &&
        (J(),
        (eh.collator = new Intl.Collator(e, {
            sensitivity: "accent",
            numeric: !0,
        })),
        (eh.oldLocale = e),
        !0)
    );
}
class ep extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(p.default),
            this.waitFor(S.ZP, d.Z, m.default, g.Z, E.ZP, b.Z, y.default),
            this.syncWith([p.default], () => {
                e_();
            });
    }
    getContextState(e) {
        var t, n;
        return "contextless" !== e.type && eN(e.channel)
            ? null != (n = this.indices[null != (t = e.channel.guild_id) ? t : e.channel.id])
                ? n
                : H
            : V;
    }
    hasContextStateApplication(e) {
        var t, n;
        let { applicationId: r, channelId: i, guildId: a } = e,
            o = this.indices[null != a ? a : i];
        return null != (null != (n = null == o || null == (t = o.result) ? void 0 : t.sections) ? n : {})[r];
    }
    getGuildState(e) {
        var t;
        return null == e ? V : null != (t = this.indices[e]) ? t : H;
    }
    getUserState() {
        var e;
        return null != (e = this.indices[G]) ? e : H;
    }
    hasUserStateApplication(e) {
        var t, n;
        let r = this.indices[G];
        return null != (null != (n = null == r || null == (t = r.result) ? void 0 : t.sections) ? n : {})[e];
    }
    getApplicationState(e) {
        var t;
        return null == e ? V : null != (t = this.indices[e]) ? t : H;
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == y.default.getCurrentUser()) return F;
        let r = "channel" === e.type ? e.channel : void 0,
            i = this.getContextState(e),
            a = this.getUserState(),
            o = this.getApplicationState(n.applicationId),
            s = this.getApplicationStates(),
            l = (0, P.k)(r, t.commandTypes),
            c = null == r || (null == l ? void 0 : l.hasBaseAccessPermissions) === !0,
            u = !1 !== t.applicationCommands,
            d = !1;
        n.allowFetch &&
            (u &&
                c &&
                null != r &&
                eN(r) &&
                (O.default.track(L.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == i.result,
                    size: Object.keys(eh.indices).length,
                }),
                eR(i) &&
                    null != r &&
                    (null != r.guild_id
                        ? (0, A.j)({
                              type: "guild",
                              guildId: r.guild_id,
                          })
                        : (0, A.j)({
                              type: "channel",
                              channelId: r.id,
                          }),
                    (d = !0))),
            eR(a) && ((0, A.j)({ type: "user" }), (d = !0)),
            eR(o) &&
                null != n.applicationId &&
                ((0, A.j)({
                    type: "application",
                    applicationId: n.applicationId,
                }),
                (d = !0)));
        let f = eA({
            permissionContext: l,
            text: t.text,
            allowApplicationCommands: u,
            builtIns: t.builtIns,
            scoreMethod: n.scoreMethod,
            allowEmptySections: n.allowEmptySections,
            contextState: i,
            userState: a,
            applicationStates: n.allowApplicationState ? s : new Map(),
            sortOptions: n.sortOptions,
            singleApplicationId: n.applicationId,
            installOnDemand: n.installOnDemand,
        });
        return (f.loading = f.loading || d), f;
    }
    queryInstallOnDemandApp(e, t) {
        let n = g.Z.getChannel(t);
        null != n &&
            this.query(
                null != n
                    ? {
                          channel: n,
                          type: "channel",
                      }
                    : { type: "contextless" },
                { commandTypes: [u.yU.CHAT] },
                {
                    placeholderCount: 5,
                    scoreMethod: C.p.COMMAND_ONLY,
                    applicationId: e,
                    allowFetch: !0,
                },
            );
    }
    constructor(...e) {
        super(...e),
            x(this, "indices", {}),
            x(this, "applicationIndices", new Map()),
            x(this, "applicationIndicesVersion", 0),
            x(this, "oldLocale", p.default.locale),
            x(this, "collator", new Intl.Collator(p.default.locale, W));
    }
}
x(ep, "displayName", "ApplicationCommandIndexStore");
let eh = new ep(l.Z, {
        LOGOUT: J,
        CONNECTION_OPEN: ee,
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: et,
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: ei,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: ea,
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: el,
        CHANNEL_DELETE: ec,
        GUILD_DELETE: eu,
        USER_APPLICATION_UPDATE: ed,
        USER_APPLICATION_REMOVE: ed,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: eo,
        GUILD_MEMBERS_CHUNK_BATCH: ef,
    }),
    em = eh;
function eg(e, t, n) {
    let [r, a] = i.useState(!0),
        o = (0, s.cj)([eh], () => ("channel" === e.type ? eh.getContextState(e) : eh.getUserState()));
    return (
        i.useEffect(() => {
            if (r) {
                if ("contextless" === e.type) {
                    n && eR(o) && (0, A.j)({ type: "user" });
                    return;
                }
                n &&
                    t &&
                    eN(e.channel) &&
                    (O.default.track(L.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == o.result,
                        size: Object.keys(eh.indices).length,
                    }),
                    eR(o) &&
                        (null != e.channel.guild_id
                            ? (0, A.j)({
                                  type: "guild",
                                  guildId: e.channel.guild_id,
                              })
                            : (0, A.j)({
                                  type: "channel",
                                  channelId: e.channel.id,
                              }))),
                    a(!1);
            }
        }, [o, n, e, t, r]),
        o
    );
}
function eE(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, s.cj)([eh], () => {
            var t;
            return null != (t = eh.indices[e]) ? t : H;
        });
    return (
        i.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (O.default.track(L.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(eh.indices).length,
                    }),
                    eR(a) &&
                        (0, A.j)({
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
        a = (0, s.cj)([eh], () => eh.getUserState());
    return (
        i.useEffect(() => {
            n && (t && eR(a) && e && (0, A.j)({ type: "user" }), r(!1));
        }, [a, t, e, n]),
        a
    );
}
function ey(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, s.e7)([eh], () => eh.getApplicationState(e));
    i.useEffect(() => {
        n &&
            (t &&
                eR(a) &&
                null != e &&
                (0, A.j)({
                    type: "application",
                    applicationId: e,
                }),
            r(!1));
    }, [t, e, a, n]);
}
function eO() {
    return (0, s.e7)([eh], () => eh.getApplicationStates());
}
function ev() {
    return (0, s.e7)([eh], () => eh.applicationIndicesVersion);
}
function eI(e, t, n, r) {
    let { descriptors: a, commands: o, sectionedCommands: s, loading: l } = eS(e, n, r),
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
        u = (0, T.R)(c);
    return i.useMemo(() => {
        if (!r.includeFrecency || 0 === u.length)
            return {
                descriptors: a,
                commands: o,
                sectionedCommands: s,
                loading: l,
            };
        let e = o
            .filter((e) => u.includes(e.id))
            .sort((e, t) => {
                let n = S.ZP.getScoreWithoutLoadingLatest(c, e);
                return S.ZP.getScoreWithoutLoadingLatest(c, t) - n;
            })
            .splice(0, w.hz);
        return 0 === e.length
            ? {
                  descriptors: a,
                  commands: o,
                  sectionedCommands: s,
                  loading: l,
              }
            : {
                  descriptors: [I.Tm[w.bi.FRECENCY], ...a],
                  commands: e.concat(o),
                  sectionedCommands: [
                      {
                          section: I.Tm[w.bi.FRECENCY],
                          data: e,
                      },
                      ...s,
                  ],
                  loading: l,
              };
    }, [l, r.includeFrecency, u, o, a, s, c]);
}
let eT = Object.freeze({
    applications: {
        useFrecency: !1,
        useScore: !1,
    },
    commands: {
        useFrecency: !0,
        useScore: !0,
    },
});
function eS(e, t, n) {
    let r = "channel" === e.type ? e.channel : void 0,
        a = (0, P.Hs)(r, t.commandTypes),
        o = !1 !== t.applicationCommands,
        s = eg(e, o, n.allowFetch),
        l = eb(o, n.allowFetch),
        c = eO(),
        u = ev();
    return (
        ey(n.applicationId, n.allowFetch),
        i.useMemo(
            () =>
                eA({
                    permissionContext: a,
                    text: t.text,
                    allowApplicationCommands: o,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: s,
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
                o,
                n.scoreMethod,
                n.allowEmptySections,
                n.sortOptions,
                n.allowApplicationState,
                n.applicationId,
                n.installOnDemand,
                s,
                l,
                e,
                c,
                u,
            ],
        )
    );
}
function eA(e) {
    var t, n, r, i, a, s, l;
    let {
            permissionContext: c,
            contextState: u,
            userState: f,
            applicationStates: _,
            text: p,
            builtIns: m = C.D.ALLOW,
            allowApplicationCommands: g = !0,
            singleApplicationId: E,
            allowEmptySections: y = !1,
            scoreMethod: O = C.p.NONE,
            sortOptions: v = eT,
            installOnDemand: T = !1,
        } = e,
        { commandTypes: A } = c,
        N = null == p ? void 0 : p.toLowerCase(),
        R = null == N ? void 0 : N.split(" "),
        P = m === C.D.ONLY_TEXT,
        D = m !== C.D.DENY ? (0, I.Kh)(A, !0, P) : [],
        L = [],
        x = {
            permissionContext: c,
            query: N,
            splitQuery: R,
            allowEmptySections: y,
            scoreMethod: O,
            installOnDemand: T,
        },
        j = null != (i = null == (t = u.result) ? void 0 : t.sections) ? i : {},
        U = null != (a = null == (n = f.result) ? void 0 : n.sections) ? a : {},
        G = new Set();
    if (g) {
        if (c.hasBaseAccessPermissions)
            for (let e in j) {
                let t = j[e];
                (null == E || t.descriptor.id === E) && G.add(e);
            }
        for (let e in U) {
            let t = U[e];
            (null == E || t.descriptor.id === E) && G.add(e);
        }
    }
    let B = new Map();
    for (let [e, t] of _)
        if (null == E || e === E) {
            let e = null == (s = t.result) ? void 0 : s.sections;
            if (null != e) for (let t of Object.keys(e)) G.add(t), B.set(t, e[t]);
        }
    for (let e of Array.from(G)) {
        let t,
            n,
            r = j[e],
            i = U[e],
            a = B.get(e),
            s = null != r,
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
        o()(null != t, "Failed to select application descriptor"),
            o()(null != n, "Failed to select list of application commands");
        let c = eC(t, n, s, l, x);
        null != c && L.push(c);
    }
    if (
        (v.applications.useFrecency && h.DZ.loadIfNecessary(),
        L.sort((e, t) => {
            if (v.applications.useScore && O === C.p.APPLICATION_ONLY) {
                var n, r, i, a;
                let o = null != (i = null == (n = e.data[0]) ? void 0 : n.score) ? i : Number.MAX_VALUE,
                    s = null != (a = null == (r = t.data[0]) ? void 0 : r.score) ? a : Number.MAX_VALUE;
                if (o !== s) return o - s;
            }
            if (v.applications.useFrecency) {
                let n = d.Z.getScoreWithoutLoadingLatest(e.section.id),
                    r = d.Z.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return eU(e.section.name, t.section.name);
        }),
        D.length > 0 || !0 === y)
    ) {
        let e = eC(I.Tm[w.bi.BUILT_IN], D, !0, !0, x);
        null != e && L.push(e);
    }
    let Z = L.flatMap((e) => e.data.map((t) => k(M({}, t), { section: e.section })));
    if (O === C.p.COMMAND_ONLY || O === C.p.COMMAND_OR_APPLICATION) {
        let e = c.context,
            t = b.Z.getGuild(null == c || null == (l = c.context) ? void 0 : l.guild_id);
        v.commands.useFrecency && h.DZ.loadIfNecessary();
        let n =
            null != e
                ? {
                      channel: e,
                      guild: t,
                  }
                : void 0;
        Z.sort((e, t) => {
            if (v.commands.useScore) {
                var r, i;
                let n = null != (r = e.score) ? r : 0,
                    a = null != (i = t.score) ? i : 0;
                if (n !== a) return n - a;
            }
            if (v.commands.useFrecency) {
                let r = S.ZP.getScoreWithoutLoadingLatest(n, e),
                    i = S.ZP.getScoreWithoutLoadingLatest(n, t);
                if (r !== i) return i - r;
            }
            return eU(e.displayName, t.displayName);
        });
    }
    return {
        commands: Z,
        descriptors: L.map((e) => e.section),
        sectionedCommands: L,
        loading:
            (null == u ? void 0 : u.fetchState.fetching) === !0 ||
            (null == f ? void 0 : f.fetchState.fetching) === !0 ||
            (null != E && (null == (r = _.get(E)) ? void 0 : r.fetchState.fetching) === !0),
    };
}
function eC(e, t, n, r, i) {
    let a,
        {
            query: o,
            splitQuery: s,
            allowEmptySections: l,
            scoreMethod: c,
            permissionContext: u,
            installOnDemand: d,
        } = i,
        { context: f, userId: _, roleIds: p, isImpersonating: h } = u,
        m = (null == f ? void 0 : f.guild_id) != null ? D.ML(e.permissions, f.guild_id, _, p, h) : null,
        g = (null == f ? void 0 : f.guild_id) != null ? D.ZJ(e.permissions, f, f.guild_id) : null,
        E = [];
    for (let i of t)
        D.Ft(i, u, {
            applicationAllowedForUser: m,
            applicationAllowedForChannel: g,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: r || d,
        }) === D.mF.ALLOWED && E.push(i);
    return 0 !== (a = c !== C.p.NONE && null != o && null != s ? ej(o, s, E, e, c) : E).length || l
        ? ((c === C.p.NONE || c === C.p.APPLICATION_ONLY) && a.sort((e, t) => eU(e.displayName, t.displayName)),
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
        (e.type === L.d4z.DM && (null == (t = y.default.getUser(e.getRecipientId())) ? void 0 : t.bot) === !0)
    );
}
function eR(e) {
    return (
        !!eP(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    );
}
function eP(e) {
    var t;
    return (null == (t = e.result) ? void 0 : t.version) !== e.serverVersion;
}
function eD(e) {
    return {
        description: e.description,
        icon: e.icon,
        id: e.id,
        name: e.name,
        bot: e.bot,
        flags: e.flags,
    };
}
function ew(e, t) {
    var n, r, i, a, o;
    let s = k(M({}, e), {
        description: null != (i = null != (r = e.description_default) ? r : e.description) ? i : "",
        dm_permission: e.dm_permission,
        name: null != (a = e.name_default) ? a : e.name,
        options: null != (o = null == (n = e.options) ? void 0 : n.map(eL)) ? o : [],
        permissions: null != e.permissions ? eM(e.permissions, t) : void 0,
    });
    return (
        e.description !== e.description_default && (s.description_localized = e.description),
        e.name !== e.name_default && (s.name_localized = e.name),
        s
    );
}
function eL(e) {
    var t, n, r, i;
    let a = k(M({}, e), {
        choices: null == (t = e.choices) ? void 0 : t.map(ex),
        description: null != (r = e.description_default) ? r : e.description,
        name: null != (i = e.name_default) ? i : e.name,
        options: null == (n = e.options) ? void 0 : n.map(eL),
    });
    return (
        e.description !== e.description_default && (a.description_localized = e.description),
        e.name !== e.name_default && (a.name_localized = e.name),
        a
    );
}
function ex(e) {
    var t;
    let n = k(M({}, e), { name: null != (t = e.name_default) ? t : e.name });
    return e.name !== e.name_default && (n.name_localized = e.name), n;
}
function eM(e, t) {
    let n = [];
    if (
        (null != e.user &&
            n.push({
                type: N.Kw.USER,
                id: t,
                permission: e.user,
            }),
        null != e.channels)
    )
        for (let [t, r] of Object.entries(e.channels))
            n.push({
                type: N.Kw.CHANNEL,
                id: t,
                permission: r,
            });
    if (null != e.roles)
        for (let [t, r] of Object.entries(e.roles))
            n.push({
                type: N.Kw.ROLE,
                id: t,
                permission: r,
            });
    return n;
}
function ej(e, t, n, r, i) {
    let a,
        o = [];
    if (i === C.p.APPLICATION_ONLY || i === C.p.COMMAND_OR_APPLICATION) {
        let t = r.name.toLocaleLowerCase();
        if (t.startsWith(e)) a = 5;
        else if (t.includes(e)) a = 6;
        else {
            var s, l;
            let t = null == (l = r.application) || null == (s = l.description) ? void 0 : s.toLocaleLowerCase();
            (null == t ? void 0 : t.includes(e)) && (a = 8);
        }
    }
    let c = t[0],
        u = t.slice(1).join(" ");
    for (let t of n) {
        let n;
        (i === C.p.COMMAND_ONLY || i === C.p.COMMAND_OR_APPLICATION) && (n = ek(t, e, c, u)),
            (void 0 === n || (void 0 !== a && a < n)) && (n = a),
            void 0 !== n && o.push(k(M({}, t), { score: n }));
    }
    return o;
}
function ek(e, t, n, r) {
    var i;
    let a = e.untranslatedName.toLocaleLowerCase(),
        o = e.displayName.toLocaleLowerCase();
    if (a.startsWith(t) || o.startsWith(t)) return 0;
    if (
        (a.startsWith(n) && a.split(" ").slice(1).join(" ").startsWith(r)) ||
        (o.startsWith(n) && o.split(" ").slice(1).join(" ").startsWith(r))
    )
        return 1;
    if (a.includes(t) || (null == o ? void 0 : o.includes(t))) return 2;
    let s = !1;
    for (let { name: n, serverLocalizedName: r } of null != (i = e.options) ? i : []) {
        if (
            n.startsWith(t) ||
            "".concat(a, " ").concat(n).startsWith(t) ||
            (null != o && "".concat(o, " ").concat(n).startsWith(t)) ||
            (null != r &&
                (r.startsWith(t) ||
                    "".concat(a, " ").concat(r).startsWith(t) ||
                    (null != o && "".concat(o, " ").concat(r).startsWith(t))))
        )
            return 3;
        (n.includes(t) || (null == r ? void 0 : r.includes(t))) && (s = !0);
    }
    if (s) return 4;
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
function eB(e, t) {
    var n, r, i, a, o, s;
    let l, c;
    if (t === w.bi.BUILT_IN)
        return {
            descriptor: I.Tm[w.bi.BUILT_IN],
            sectionCommands: (0, I.Kh)([u.yU.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0,
        };
    let d = eh.getContextState(e),
        f = eh.getUserState(),
        _ = null != (o = null == (n = d.result) ? void 0 : n.sections) ? o : {},
        p = null != (s = null == (r = f.result) ? void 0 : r.sections) ? s : {},
        h = _[t],
        m = p[t],
        g = null == (a = eh.getApplicationState(t).result) || null == (i = a.sections) ? void 0 : i[t];
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
