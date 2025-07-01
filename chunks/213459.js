(n.d(t, {
    FN: () => et,
    If: () => eG,
    JK: () => ev,
    LD: () => eg,
    PL: () => eE,
    ZP: () => eh,
    em: () => em,
    un: () => eU,
    v1: () => eT
}),
    n(953529),
    n(388685),
    n(539854),
    n(642613),
    n(35282),
    n(361932),
    n(187205),
    n(997841));
var r,
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(259443),
    l = n(442837),
    c = n(570140),
    u = n(749210),
    d = n(911969),
    f = n(822245),
    _ = n(399860),
    p = n(706454),
    h = n(675478),
    m = n(314897),
    g = n(592125),
    E = n(430824),
    b = n(594174),
    y = n(626135),
    O = n(226351),
    v = n(254711),
    I = n(700089),
    T = n(654455),
    S = n(963456),
    A = n(367790),
    N = n(895924),
    C = n(581364),
    R = n(807169),
    P = n(104793),
    w = n(689079),
    D = n(981631);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            }));
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = new s.Yd('ApplicationCommandIndexStore'),
    U = Symbol('currentUser'),
    G = Symbol('stale'),
    B = Symbol('current'),
    V = Object.freeze({
        descriptors: [],
        commands: [],
        sectionedCommands: [],
        loading: !0
    }),
    F = Object.freeze({
        serverVersion: B,
        fetchState: { fetching: !1 },
        result: {
            sections: {},
            sectionIdsByBotId: {},
            version: B
        }
    }),
    Z = Object.freeze({
        serverVersion: G,
        fetchState: { fetching: !1 }
    }),
    H = 5000,
    Y = {
        sensitivity: 'accent',
        numeric: !0
    },
    W = !1,
    K = [];
function z(e) {
    switch (e.type) {
        case 'guild':
            return e.guildId;
        case 'channel':
            return e.channelId;
        case 'user':
            return U;
        case 'application':
            return e.applicationId;
    }
}
function q(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = z(e),
        a = ep.indices[i];
    return (
        null != a
            ? ('fetchState' in t && a.fetchState.fetching && a.fetchState.abort.abort(), (n = x({}, a, t)))
            : r &&
              (n = x(
                  {
                      serverVersion: G,
                      fetchState: { fetching: !1 }
                  },
                  t
              )),
        void 0 !== n && ((ep.indices[i] = n), 'application' === e.type && (ep.applicationIndices.set(i, n), (ep.applicationIndicesVersion = ep.applicationIndicesVersion + 1))),
        a
    );
}
function X(e) {
    let t = z(e),
        n = ep.indices[t];
    ((null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete ep.indices[t]);
}
function Q() {
    for (let e of Object.values(ep.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    ep.indices = {};
}
function J() {
    for (let e of K) er(e);
    K = [];
}
function $() {
    for (let e of Object.values(ep.indices)) e.serverVersion = G;
    (J(), (W = !0));
}
function ee(e) {
    var t;
    let { target: n } = e,
        r = z(n);
    eC(null != (t = ep.indices[r]) ? t : Z) && en(n);
}
async function et(e) {
    var t, n, r;
    let i = z(e),
        a = null != (t = ep.indices[i]) ? t : Z;
    if (!eC(a)) {
        if (a.fetchState.fetching) {
            let e = a.fetchState.promise;
            return (await e, null != (n = ep.indices[i]) ? n : Z);
        }
        return a;
    }
    return (await en(e), null != (r = ep.indices[i]) ? r : Z);
}
async function en(e) {
    let t = new AbortController(),
        n = new O.o();
    (q(
        e,
        {
            fetchState: {
                fetching: !0,
                abort: t,
                promise: n.promise
            }
        },
        !0
    ),
        await (0, S.a)(e, t).then(n.resolve).catch(n.reject));
}
function er(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: i, index: a } = e,
        o = null == (t = b.default.getCurrentUser()) ? void 0 : t.id;
    if (null == o) return (W || K.push(e), !1);
    let s = {},
        l = {},
        c = new Set();
    for (let e of a.applications) {
        if (null == e.bot && null != e.bot_id) {
            l[e.bot_id] = e.id;
            let t = b.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : c.add(e.bot_id);
        } else null != e.bot && (l[e.bot.id] = e.id);
        let t = {
            descriptor: M(x({}, (0, C.X0)(eP(e))), {
                permissions: null != e.permissions ? (0, _.tk)(ex(e.permissions, o)) : void 0,
                botId: e.bot_id
            }),
            commands: {}
        };
        s[e.id] = t;
    }
    for (let e of ('guild' === i.type && c.size > 0 && u.Z.requestMembersById(i.guildId, [...c]),
    (0, C.nG)(
        a.application_commands.map((e) => ew(e, o)),
        !0
    ))) {
        let t = s[e.applicationId];
        if (null == t) {
            j.error('Command has no matching application');
            continue;
        }
        t.commands[e.id] = e;
    }
    let d = null != (n = a.version) ? n : B;
    q(
        i,
        {
            serverVersion: d,
            result: {
                sections: s,
                sectionIdsByBotId: l,
                version: d
            },
            fetchState: { fetching: !1 }
        },
        r
    );
}
function ei(e) {
    let { target: t } = e;
    q(t, {
        fetchState: {
            fetching: !1,
            retryAfter: Date.now() + H
        }
    });
}
function ea(e) {
    var t;
    let { guildId: n, version: r } = e,
        i = q(
            {
                type: 'guild',
                guildId: n
            },
            { serverVersion: null != r ? r : G }
        ),
        a = null == i || null == (t = i.result) ? void 0 : t.sectionIdsByBotId;
    if (null != a)
        for (let e in a) {
            let t = g.Z.getDMFromUserId(e);
            null != t &&
                q(
                    {
                        type: 'channel',
                        channelId: t
                    },
                    { serverVersion: G }
                );
        }
}
function eo(e, t) {
    var n;
    let r = z({
            type: 'guild',
            guildId: e
        }),
        i = null == (n = ep.indices[r]) ? void 0 : n.result;
    if (null == i) return !1;
    let a = !1;
    return (
        t.forEach((e) => {
            let { user: t } = e;
            if (!t.bot) return;
            let n = i.sectionIdsByBotId[t.id];
            if (null == n) return;
            let r = i.sections[n];
            (o()(null != r, 'Bot has no matching index section'), o()(null != r.descriptor.application, "Bot's index section has no application info"));
            let s = (0, C.X0)(M(x({}, r.descriptor.application), { bot: t }));
            ((r.descriptor = x({}, r.descriptor, s)), (a = !0));
        }),
        a
    );
}
function es(e) {
    let { applicationId: t, channelId: n, guildId: r } = e;
    (ep.hasContextStateApplication({
        applicationId: t,
        channelId: n,
        guildId: r
    }) &&
        q(
            null != r
                ? {
                      type: 'guild',
                      guildId: r
                  }
                : {
                      type: 'channel',
                      channelId: n
                  },
            { serverVersion: G }
        ),
        ep.hasUserStateApplication(t) && q({ type: 'user' }, { serverVersion: G }),
        ep.hasApplicationState(t) &&
            q(
                {
                    type: 'application',
                    applicationId: t
                },
                { serverVersion: G }
            ));
}
function el(e) {
    let { channel: t } = e;
    X({
        type: 'channel',
        channelId: t.id
    });
}
function ec(e) {
    let { guild: t } = e;
    X({
        type: 'guild',
        guildId: t.id
    });
}
function eu() {
    q({ type: 'user' }, { serverVersion: G });
}
function ed(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = eo(e.guildId, e.members) || n;
    return n;
}
function ef() {
    let e = p.default.locale;
    return (
        e !== ep.oldLocale &&
        (Q(),
        (ep.collator = new Intl.Collator(e, {
            sensitivity: 'accent',
            numeric: !0
        })),
        (ep.oldLocale = e),
        !0)
    );
}
class e_ extends (r = l.ZP.Store) {
    initialize() {
        (this.waitFor(p.default),
            this.waitFor(m.default),
            this.syncWith([p.default], () => {
                ef();
            }));
    }
    getContextState(e) {
        var t, n;
        return 'contextless' !== e.type && eN(e.channel) ? (null != (n = this.indices[null != (t = e.channel.guild_id) ? t : e.channel.id]) ? n : Z) : F;
    }
    hasContextStateApplication(e) {
        var t, n;
        let { applicationId: r, channelId: i, guildId: a } = e,
            o = this.indices[null != a ? a : i];
        return null != (null != (n = null == o || null == (t = o.result) ? void 0 : t.sections) ? n : {})[r];
    }
    getGuildState(e) {
        var t;
        return null == e ? F : null != (t = this.indices[e]) ? t : Z;
    }
    getUserState() {
        var e;
        return null != (e = this.indices[U]) ? e : Z;
    }
    hasUserStateApplication(e) {
        var t, n;
        let r = this.indices[U];
        return null != (null != (n = null == r || null == (t = r.result) ? void 0 : t.sections) ? n : {})[e];
    }
    getApplicationState(e) {
        var t;
        return null == e ? F : null != (t = this.indices[e]) ? t : Z;
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == b.default.getCurrentUser()) return V;
        let r = 'channel' === e.type ? e.channel : void 0,
            i = this.getContextState(e),
            a = this.getUserState(),
            o = this.getApplicationState(n.applicationId),
            s = this.getApplicationStates(),
            l = (0, R.k)(r, t.commandTypes),
            c = null == r || (null == l ? void 0 : l.hasBaseAccessPermissions) === !0,
            u = !1 !== t.applicationCommands,
            d = !1;
        n.allowFetch &&
            (u &&
                c &&
                null != r &&
                eN(r) &&
                (y.default.track(D.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == i.result,
                    size: Object.keys(ep.indices).length
                }),
                eC(i) &&
                    null != r &&
                    (null != r.guild_id
                        ? (0, S.j)({
                              type: 'guild',
                              guildId: r.guild_id
                          })
                        : (0, S.j)({
                              type: 'channel',
                              channelId: r.id
                          }),
                    (d = !0))),
            eC(a) && ((0, S.j)({ type: 'user' }), (d = !0)),
            eC(o) &&
                null != n.applicationId &&
                ((0, S.j)({
                    type: 'application',
                    applicationId: n.applicationId
                }),
                (d = !0)));
        let f = eS({
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
            installOnDemand: n.installOnDemand
        });
        return ((f.loading = f.loading || d), f);
    }
    queryInstallOnDemandApp(e, t) {
        let n = g.Z.getChannel(t);
        null != n &&
            this.query(
                null != n
                    ? {
                          channel: n,
                          type: 'channel'
                      }
                    : { type: 'contextless' },
                { commandTypes: [d.yU.CHAT] },
                {
                    placeholderCount: 5,
                    scoreMethod: A.p.COMMAND_ONLY,
                    applicationId: e,
                    allowFetch: !0
                }
            );
    }
    constructor(...e) {
        (super(...e), L(this, 'indices', {}), L(this, 'applicationIndices', new Map()), L(this, 'applicationIndicesVersion', 0), L(this, 'oldLocale', p.default.locale), L(this, 'collator', new Intl.Collator(p.default.locale, Y)));
    }
}
L(e_, 'displayName', 'ApplicationCommandIndexStore');
let ep = new e_(c.Z, {
        LOGOUT: Q,
        CONNECTION_OPEN: $,
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: ee,
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: er,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: ei,
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: es,
        CHANNEL_DELETE: el,
        GUILD_DELETE: ec,
        USER_APPLICATION_UPDATE: eu,
        USER_APPLICATION_REMOVE: eu,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: ea,
        GUILD_MEMBERS_CHUNK_BATCH: ed
    }),
    eh = ep;
function em(e, t, n) {
    let [r, a] = i.useState(!0),
        o = (0, l.cj)([ep], () => ('channel' === e.type ? ep.getContextState(e) : ep.getUserState()));
    return (
        i.useEffect(() => {
            if (r) {
                if ('contextless' === e.type) {
                    n && eC(o) && (0, S.j)({ type: 'user' });
                    return;
                }
                (n &&
                    t &&
                    eN(e.channel) &&
                    (y.default.track(D.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == o.result,
                        size: Object.keys(ep.indices).length
                    }),
                    eC(o) &&
                        (null != e.channel.guild_id
                            ? (0, S.j)({
                                  type: 'guild',
                                  guildId: e.channel.guild_id
                              })
                            : (0, S.j)({
                                  type: 'channel',
                                  channelId: e.channel.id
                              }))),
                    a(!1));
            }
        }, [o, n, e, t, r]),
        o
    );
}
function eg(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, l.cj)([ep], () => {
            var t;
            return null != (t = ep.indices[e]) ? t : Z;
        });
    return (
        i.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (y.default.track(D.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(ep.indices).length
                    }),
                    eC(a) &&
                        (0, S.j)({
                            type: 'guild',
                            guildId: e
                        })),
                r(!1));
        }, [a, t, e, n]),
        a
    );
}
function eE(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, l.cj)([ep], () => ep.getUserState());
    return (
        i.useEffect(() => {
            n && (t && eC(a) && e && (0, S.j)({ type: 'user' }), r(!1));
        }, [a, t, e, n]),
        a
    );
}
function eb(e, t) {
    let [n, r] = i.useState(!0),
        a = (0, l.e7)([ep], () => ep.getApplicationState(e));
    i.useEffect(() => {
        n &&
            (t &&
                eC(a) &&
                null != e &&
                (0, S.j)({
                    type: 'application',
                    applicationId: e
                }),
            r(!1));
    }, [t, e, a, n]);
}
function ey() {
    return (0, l.e7)([ep], () => ep.getApplicationStates());
}
function eO() {
    return (0, l.e7)([ep], () => ep.applicationIndicesVersion);
}
function ev(e, t, n, r) {
    let { descriptors: a, commands: o, sectionedCommands: s, loading: l } = eT(e, n, r),
        c = i.useMemo(
            () =>
                'channel' === e.type
                    ? {
                          channel: e.channel,
                          guild: t
                      }
                    : void 0,
            [e, t]
        ),
        u = (0, I.R)(c);
    return i.useMemo(() => {
        if (!r.includeFrecency || 0 === u.length)
            return {
                descriptors: a,
                commands: o,
                sectionedCommands: s,
                loading: l
            };
        let e = o
            .filter((e) => u.includes(e.id))
            .sort((e, t) => {
                let n = T.ZP.getScoreWithoutLoadingLatest(c, e);
                return T.ZP.getScoreWithoutLoadingLatest(c, t) - n;
            })
            .splice(0, w.hz);
        return 0 === e.length
            ? {
                  descriptors: a,
                  commands: o,
                  sectionedCommands: s,
                  loading: l
              }
            : {
                  descriptors: [v.Tm[w.bi.FRECENCY], ...a],
                  commands: e.concat(o),
                  sectionedCommands: [
                      {
                          section: v.Tm[w.bi.FRECENCY],
                          data: e
                      },
                      ...s
                  ],
                  loading: l
              };
    }, [l, r.includeFrecency, u, o, a, s, c]);
}
let eI = Object.freeze({
    applications: {
        useFrecency: !1,
        useScore: !1
    },
    commands: {
        useFrecency: !0,
        useScore: !0
    }
});
function eT(e, t, n) {
    let r = 'channel' === e.type ? e.channel : void 0,
        a = (0, R.Hs)(r, t.commandTypes),
        o = !1 !== t.applicationCommands,
        s = em(e, o, n.allowFetch),
        l = eE(o, n.allowFetch),
        c = ey(),
        u = eO();
    return (
        eb(n.applicationId, n.allowFetch),
        i.useMemo(
            () =>
                eS({
                    permissionContext: a,
                    text: t.text,
                    allowApplicationCommands: o,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: s,
                    userState: l,
                    applicationStates: n.allowApplicationState ? c : new Map(),
                    sortOptions: n.sortOptions,
                    singleApplicationId: n.applicationId,
                    installOnDemand: n.installOnDemand
                }),
            [a, t.text, t.builtIns, o, n.scoreMethod, n.allowEmptySections, n.sortOptions, n.allowApplicationState, n.applicationId, n.installOnDemand, s, l, c, u]
        )
    );
}
function eS(e) {
    var t, n, r, i, a, s, l;
    let { permissionContext: c, contextState: u, userState: d, applicationStates: _, text: p, builtIns: m = A.D.ALLOW, allowApplicationCommands: g = !0, singleApplicationId: b, allowEmptySections: y = !1, scoreMethod: O = A.p.NONE, sortOptions: I = eI, installOnDemand: S = !1 } = e,
        { commandTypes: N } = c,
        C = null == p ? void 0 : p.toLowerCase(),
        R = null == C ? void 0 : C.split(' '),
        P = m === A.D.ONLY_TEXT,
        D = m !== A.D.DENY ? (0, v.Kh)(N, !0, P) : [],
        L = [],
        k = {
            permissionContext: c,
            query: C,
            splitQuery: R,
            allowEmptySections: y,
            scoreMethod: O,
            installOnDemand: S
        },
        j = null != (i = null == (t = u.result) ? void 0 : t.sections) ? i : {},
        U = null != (a = null == (n = d.result) ? void 0 : n.sections) ? a : {},
        G = new Set();
    if (g) {
        if (c.hasBaseAccessPermissions)
            for (let e in j) {
                let t = j[e];
                (null == b || t.descriptor.id === b) && G.add(e);
            }
        for (let e in U) {
            let t = U[e];
            (null == b || t.descriptor.id === b) && G.add(e);
        }
    }
    let B = new Map();
    for (let [e, t] of _)
        if (null == b || e === b) {
            let e = null == (s = t.result) ? void 0 : s.sections;
            if (null != e) for (let t of Object.keys(e)) (G.add(t), B.set(t, e[t]));
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
        } else null != r ? ((t = r.descriptor), (n = Object.values(r.commands))) : null != i ? ((t = i.descriptor), (n = Object.values(i.commands))) : null != a && ((t = a.descriptor), (n = Object.values(a.commands)));
        (o()(null != t, 'Failed to select application descriptor'), o()(null != n, 'Failed to select list of application commands'));
        let c = eA(t, n, s, l, k);
        null != c && L.push(c);
    }
    if (
        (I.applications.useFrecency && h.DZ.loadIfNecessary(),
        L.sort((e, t) => {
            if (I.applications.useScore && O === A.p.APPLICATION_ONLY) {
                var n, r, i, a;
                let o = null != (i = null == (n = e.data[0]) ? void 0 : n.score) ? i : Number.MAX_VALUE,
                    s = null != (a = null == (r = t.data[0]) ? void 0 : r.score) ? a : Number.MAX_VALUE;
                if (o !== s) return o - s;
            }
            if (I.applications.useFrecency) {
                let n = f.Z.getScoreWithoutLoadingLatest(e.section.id),
                    r = f.Z.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return ej(e.section.name, t.section.name);
        }),
        D.length > 0 || !0 === y)
    ) {
        let e = eA(v.Tm[w.bi.BUILT_IN], D, !0, !0, k);
        null != e && L.push(e);
    }
    let V = L.flatMap((e) => e.data.map((t) => M(x({}, t), { section: e.section })));
    if (O === A.p.COMMAND_ONLY || O === A.p.COMMAND_OR_APPLICATION) {
        let e = c.context,
            t = E.Z.getGuild(null == c || null == (l = c.context) ? void 0 : l.guild_id);
        I.commands.useFrecency && h.DZ.loadIfNecessary();
        let n =
            null != e
                ? {
                      channel: e,
                      guild: t
                  }
                : void 0;
        V.sort((e, t) => {
            if (I.commands.useScore) {
                var r, i;
                let n = null != (r = e.score) ? r : 0,
                    a = null != (i = t.score) ? i : 0;
                if (n !== a) return n - a;
            }
            if (I.commands.useFrecency) {
                let r = T.ZP.getScoreWithoutLoadingLatest(n, e),
                    i = T.ZP.getScoreWithoutLoadingLatest(n, t);
                if (r !== i) return i - r;
            }
            return ej(e.displayName, t.displayName);
        });
    }
    return {
        commands: V,
        descriptors: L.map((e) => e.section),
        sectionedCommands: L,
        loading: (null == u ? void 0 : u.fetchState.fetching) === !0 || (null == d ? void 0 : d.fetchState.fetching) === !0 || (null != b && (null == (r = _.get(b)) ? void 0 : r.fetchState.fetching) === !0)
    };
}
function eA(e, t, n, r, i) {
    let a,
        { query: o, splitQuery: s, allowEmptySections: l, scoreMethod: c, permissionContext: u, installOnDemand: d } = i,
        { context: f, userId: _, roleIds: p, isImpersonating: h } = u,
        m = (null == f ? void 0 : f.guild_id) != null ? P.ML(e.permissions, f.guild_id, _, p, h) : null,
        g = (null == f ? void 0 : f.guild_id) != null ? P.ZJ(e.permissions, f, f.guild_id) : null,
        E = [];
    for (let i of t)
        P.Ft(i, u, {
            applicationAllowedForUser: m,
            applicationAllowedForChannel: g,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: r || d
        }) === P.mF.ALLOWED && E.push(i);
    return 0 !== (a = c !== A.p.NONE && null != o && null != s ? ek(o, s, E, e, c) : E).length || l
        ? ((c === A.p.NONE || c === A.p.APPLICATION_ONLY) && a.sort((e, t) => ej(e.displayName, t.displayName)),
          {
              section: e,
              data: a
          })
        : null;
}
function eN(e) {
    var t;
    return (null == e ? void 0 : e.guild_id) != null || (e.type === D.d4z.DM && (null == (t = b.default.getUser(e.getRecipientId())) ? void 0 : t.bot) === !0);
}
function eC(e) {
    return !!eR(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter);
}
function eR(e) {
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
        flags: e.flags
    };
}
function ew(e, t) {
    var n, r, i, a, o;
    let s = M(x({}, e), {
        description: null != (i = null != (r = e.description_default) ? r : e.description) ? i : '',
        dm_permission: e.dm_permission,
        name: null != (a = e.name_default) ? a : e.name,
        options: null != (o = null == (n = e.options) ? void 0 : n.map(eD)) ? o : [],
        permissions: null != e.permissions ? ex(e.permissions, t) : void 0
    });
    return (e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s);
}
function eD(e) {
    var t, n, r, i;
    let a = M(x({}, e), {
        choices: null == (t = e.choices) ? void 0 : t.map(eL),
        description: null != (r = e.description_default) ? r : e.description,
        name: null != (i = e.name_default) ? i : e.name,
        options: null == (n = e.options) ? void 0 : n.map(eD)
    });
    return (e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a);
}
function eL(e) {
    var t;
    let n = M(x({}, e), { name: null != (t = e.name_default) ? t : e.name });
    return (e.name !== e.name_default && (n.name_localized = e.name), n);
}
function ex(e, t) {
    let n = [];
    if (
        (null != e.user &&
            n.push({
                type: N.Kw.USER,
                id: t,
                permission: e.user
            }),
        null != e.channels)
    )
        for (let [t, r] of Object.entries(e.channels))
            n.push({
                type: N.Kw.CHANNEL,
                id: t,
                permission: r
            });
    if (null != e.roles)
        for (let [t, r] of Object.entries(e.roles))
            n.push({
                type: N.Kw.ROLE,
                id: t,
                permission: r
            });
    return n;
}
function ek(e, t, n, r, i) {
    let a,
        o = [];
    if (i === A.p.APPLICATION_ONLY || i === A.p.COMMAND_OR_APPLICATION) {
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
        u = t.slice(1).join(' ');
    for (let t of n) {
        let n;
        ((i === A.p.COMMAND_ONLY || i === A.p.COMMAND_OR_APPLICATION) && (n = eM(t, e, c, u)), (void 0 === n || (void 0 !== a && a < n)) && (n = a), void 0 !== n && o.push(M(x({}, t), { score: n })));
    }
    return o;
}
function eM(e, t, n, r) {
    var i;
    let a = e.untranslatedName,
        o = e.displayName;
    if (a.startsWith(t) || o.startsWith(t)) return 0;
    if ((a.startsWith(n) && a.split(' ').slice(1).join(' ').startsWith(r)) || (o.startsWith(n) && o.split(' ').slice(1).join(' ').startsWith(r))) return 1;
    if (a.includes(t) || (null == o ? void 0 : o.includes(t))) return 2;
    let s = !1;
    for (let { name: n, serverLocalizedName: r } of null != (i = e.options) ? i : []) {
        if (n.startsWith(t) || ''.concat(a, ' ').concat(n).startsWith(t) || (null != o && ''.concat(o, ' ').concat(n).startsWith(t)) || (null != r && (r.startsWith(t) || ''.concat(a, ' ').concat(r).startsWith(t) || (null != o && ''.concat(o, ' ').concat(r).startsWith(t))))) return 3;
        (n.includes(t) || (null == r ? void 0 : r.includes(t))) && (s = !0);
    }
    if (s) return 4;
    let l = e.untranslatedDescription.toLocaleLowerCase(),
        c = e.displayDescription.toLocaleLowerCase();
    if (l.includes(t) || c.includes(t)) return 7;
}
function ej(e, t) {
    return ep.collator.compare(e, t);
}
function eU(e, t) {
    return ej(e, t);
}
function eG(e, t) {
    var n, r, i, a, o, s;
    let l, c;
    if (t === w.bi.BUILT_IN)
        return {
            descriptor: v.Tm[w.bi.BUILT_IN],
            sectionCommands: (0, v.Kh)([d.yU.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0
        };
    let u = ep.getContextState(e),
        f = ep.getUserState(),
        _ = null != (o = null == (n = u.result) ? void 0 : n.sections) ? o : {},
        p = null != (s = null == (r = f.result) ? void 0 : r.sections) ? s : {},
        h = _[t],
        m = p[t],
        g = null == (a = ep.getApplicationState(t).result) || null == (i = a.sections) ? void 0 : i[t];
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
    } else null != h ? ((l = h.descriptor), (c = Object.values(h.commands))) : null != m ? ((l = m.descriptor), (c = Object.values(m.commands))) : null != g && ((l = g.descriptor), (c = Object.values(g.commands)));
    return {
        descriptor: l,
        sectionCommands: c,
        isGuildInstalled: null != h,
        isUserInstalled: null != m
    };
}
