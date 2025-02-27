n.d(t, {
    FN: () => et,
    If: () => eG,
    JK: () => eO,
    LD: () => em,
    PL: () => eE,
    ZP: () => eh,
    em: () => eg,
    un: () => eU,
    v1: () => eI
}),
    n(266796),
    n(47120),
    n(653041),
    n(230036),
    n(301563),
    n(13667),
    n(390547),
    n(789020);
var r,
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(259443),
    l = n(442837),
    c = n(570140),
    u = n(749210),
    d = n(911969),
    f = n(822245),
    _ = n(399860),
    p = n(706454),
    h = n(675478),
    g = n(314897),
    m = n(592125),
    E = n(430824),
    v = n(594174),
    b = n(626135),
    y = n(226351),
    O = n(254711),
    S = n(700089),
    I = n(654455),
    T = n(963456),
    N = n(367790),
    A = n(895924),
    C = n(581364),
    R = n(807169),
    P = n(104793),
    D = n(689079),
    w = n(981631);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
    W = {
        sensitivity: 'accent',
        numeric: !0
    },
    Y = !1,
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
        o = ep.indices[i];
    return (
        null != o
            ? ('fetchState' in t && o.fetchState.fetching && o.fetchState.abort.abort(), (n = x({}, o, t)))
            : r &&
              (n = x(
                  {
                      serverVersion: G,
                      fetchState: { fetching: !1 }
                  },
                  t
              )),
        void 0 !== n && ((ep.indices[i] = n), 'application' === e.type && (ep.applicationIndices.set(i, n), (ep.applicationIndicesVersion = ep.applicationIndicesVersion + 1))),
        o
    );
}
function Q(e) {
    let t = z(e),
        n = ep.indices[t];
    (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete ep.indices[t];
}
function X() {
    for (let e of Object.values(ep.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    ep.indices = {};
}
function J() {
    for (let e of K) er(e);
    K = [];
}
function $() {
    for (let e of Object.values(ep.indices)) e.serverVersion = G;
    J(), (Y = !0);
}
function ee(e) {
    var t;
    let { target: n } = e,
        r = z(n);
    eC(null !== (t = ep.indices[r]) && void 0 !== t ? t : Z) && en(n);
}
async function et(e) {
    var t, n, r;
    let i = z(e),
        o = null !== (t = ep.indices[i]) && void 0 !== t ? t : Z;
    if (!eC(o)) {
        if (o.fetchState.fetching) {
            let e = o.fetchState.promise;
            return await e, null !== (n = ep.indices[i]) && void 0 !== n ? n : Z;
        }
        return o;
    }
    return await en(e), null !== (r = ep.indices[i]) && void 0 !== r ? r : Z;
}
async function en(e) {
    let t = new AbortController(),
        n = new y.o();
    q(
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
        await (0, T.a)(e, t).then(n.resolve).catch(n.reject);
}
function er(e) {
    var t, n;
    let { target: r, index: i } = e,
        o = null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == o) return Y || K.push(e), !1;
    let a = {},
        s = {},
        l = new Set();
    for (let e of i.applications) {
        if (null == e.bot && null != e.bot_id) {
            s[e.bot_id] = e.id;
            let t = v.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : l.add(e.bot_id);
        } else null != e.bot && (s[e.bot.id] = e.id);
        let t = {
            descriptor: k(x({}, (0, C.X0)(eP(e))), {
                permissions: null != e.permissions ? (0, _.tk)(ex(e.permissions, o)) : void 0,
                botId: e.bot_id
            }),
            commands: {}
        };
        a[e.id] = t;
    }
    for (let e of ('guild' === r.type && l.size > 0 && u.Z.requestMembersById(r.guildId, [...l]),
    (0, C.nG)(
        i.application_commands.map((e) => eD(e, o)),
        !0
    ))) {
        let t = a[e.applicationId];
        if (null == t) {
            j.error('Command has no matching application');
            continue;
        }
        t.commands[e.id] = e;
    }
    let c = null !== (n = i.version) && void 0 !== n ? n : B;
    q(r, {
        serverVersion: c,
        result: {
            sections: a,
            sectionIdsByBotId: s,
            version: c
        },
        fetchState: { fetching: !1 }
    });
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
function eo(e) {
    var t;
    let { guildId: n, version: r } = e,
        i = q(
            {
                type: 'guild',
                guildId: n
            },
            { serverVersion: null != r ? r : G }
        ),
        o = null == i ? void 0 : null === (t = i.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
    if (null != o)
        for (let e in o) {
            let t = m.Z.getDMFromUserId(e);
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
function ea(e, t) {
    var n;
    let r = z({
            type: 'guild',
            guildId: e
        }),
        i = null === (n = ep.indices[r]) || void 0 === n ? void 0 : n.result;
    if (null == i) return !1;
    let o = !1;
    return (
        t.forEach((e) => {
            let { user: t } = e;
            if (!t.bot) return;
            let n = i.sectionIdsByBotId[t.id];
            if (null == n) return;
            let r = i.sections[n];
            a()(null != r, 'Bot has no matching index section'), a()(null != r.descriptor.application, "Bot's index section has no application info");
            let s = (0, C.X0)(k(x({}, r.descriptor.application), { bot: t }));
            (r.descriptor = x({}, r.descriptor, s)), (o = !0);
        }),
        o
    );
}
function es(e) {
    let { applicationId: t, channelId: n, guildId: r } = e;
    ep.hasContextStateApplication(t, n, r) &&
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
            );
}
function el(e) {
    let { channel: t } = e;
    Q({
        type: 'channel',
        channelId: t.id
    });
}
function ec(e) {
    let { guild: t } = e;
    Q({
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
    for (let e of t) n = ea(e.guildId, e.members) || n;
    return n;
}
function ef() {
    let e = p.default.locale;
    return (
        e !== ep.oldLocale &&
        (X(),
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
        this.waitFor(p.default),
            this.waitFor(g.default),
            this.syncWith([p.default], () => {
                ef();
            });
    }
    getContextState(e) {
        var t, n;
        return 'contextless' !== e.type && eA(e.channel) ? (null !== (n = this.indices[null !== (t = e.channel.guild_id) && void 0 !== t ? t : e.channel.id]) && void 0 !== n ? n : Z) : F;
    }
    hasContextStateApplication(e, t, n) {
        var r, i;
        let o = this.indices[null != n ? n : t];
        return e in (null !== (i = null == o ? void 0 : null === (r = o.result) || void 0 === r ? void 0 : r.sections) && void 0 !== i ? i : {});
    }
    getGuildState(e) {
        var t;
        return null == e ? F : null !== (t = this.indices[e]) && void 0 !== t ? t : Z;
    }
    getUserState() {
        var e;
        return null !== (e = this.indices[U]) && void 0 !== e ? e : Z;
    }
    hasUserStateApplication(e) {
        var t, n;
        let r = this.indices[U];
        return e in (null !== (n = null == r ? void 0 : null === (t = r.result) || void 0 === t ? void 0 : t.sections) && void 0 !== n ? n : {});
    }
    getApplicationState(e) {
        var t;
        return null == e ? F : null !== (t = this.indices[e]) && void 0 !== t ? t : Z;
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == v.default.getCurrentUser()) return V;
        let r = 'channel' === e.type ? e.channel : void 0,
            i = this.getContextState(e),
            o = this.getUserState(),
            a = this.getApplicationState(n.applicationId),
            s = this.getApplicationStates(),
            l = (0, R.k)(r, t.commandTypes),
            c = null == r || (null == l ? void 0 : l.hasBaseAccessPermissions) === !0,
            u = !1 !== t.applicationCommands,
            d = !1;
        n.allowFetch &&
            (u &&
                c &&
                null != r &&
                eA(r) &&
                (b.default.track(w.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == i.result,
                    size: Object.keys(ep.indices).length
                }),
                eC(i) &&
                    null != r &&
                    (null != r.guild_id
                        ? (0, T.j)({
                              type: 'guild',
                              guildId: r.guild_id
                          })
                        : (0, T.j)({
                              type: 'channel',
                              channelId: r.id
                          }),
                    (d = !0))),
            eC(o) && ((0, T.j)({ type: 'user' }), (d = !0)),
            eC(a) &&
                null != n.applicationId &&
                ((0, T.j)({
                    type: 'application',
                    applicationId: n.applicationId
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
            userState: o,
            applicationStates: n.allowApplicationState ? s : new Map(),
            sortOptions: n.sortOptions,
            singleApplicationId: n.applicationId,
            installOnDemand: n.installOnDemand
        });
        return (f.loading = f.loading || d), f;
    }
    queryInstallOnDemandApp(e, t) {
        let n = m.Z.getChannel(t);
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
                    scoreMethod: N.p.COMMAND_ONLY,
                    applicationId: e,
                    allowFetch: !0
                }
            );
    }
    constructor(...e) {
        super(...e), L(this, 'indices', {}), L(this, 'applicationIndices', new Map()), L(this, 'applicationIndicesVersion', 0), L(this, 'oldLocale', p.default.locale), L(this, 'collator', new Intl.Collator(p.default.locale, W));
    }
}
L(e_, 'displayName', 'ApplicationCommandIndexStore');
let ep = new e_(c.Z, {
        LOGOUT: X,
        CONNECTION_OPEN: $,
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: ee,
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: er,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: ei,
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: es,
        CHANNEL_DELETE: el,
        GUILD_DELETE: ec,
        USER_APPLICATION_UPDATE: eu,
        USER_APPLICATION_REMOVE: eu,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: eo,
        GUILD_MEMBERS_CHUNK_BATCH: ed
    }),
    eh = ep;
function eg(e, t, n) {
    let [r, o] = i.useState(!0),
        a = (0, l.cj)([ep], () => ('channel' === e.type ? ep.getContextState(e) : ep.getUserState()));
    return (
        i.useEffect(() => {
            if (r) {
                if ('contextless' === e.type) {
                    n && eC(a) && (0, T.j)({ type: 'user' });
                    return;
                }
                n &&
                    t &&
                    eA(e.channel) &&
                    (b.default.track(w.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(ep.indices).length
                    }),
                    eC(a) &&
                        (null != e.channel.guild_id
                            ? (0, T.j)({
                                  type: 'guild',
                                  guildId: e.channel.guild_id
                              })
                            : (0, T.j)({
                                  type: 'channel',
                                  channelId: e.channel.id
                              }))),
                    o(!1);
            }
        }, [a, n, e, t, r]),
        a
    );
}
function em(e, t) {
    let [n, r] = i.useState(!0),
        o = (0, l.cj)([ep], () => {
            var t;
            return null !== (t = ep.indices[e]) && void 0 !== t ? t : Z;
        });
    return (
        i.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (b.default.track(w.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == o.result,
                        size: Object.keys(ep.indices).length
                    }),
                    eC(o) &&
                        (0, T.j)({
                            type: 'guild',
                            guildId: e
                        })),
                r(!1));
        }, [o, t, e, n]),
        o
    );
}
function eE(e, t) {
    let [n, r] = i.useState(!0),
        o = (0, l.cj)([ep], () => ep.getUserState());
    return (
        i.useEffect(() => {
            n && (t && eC(o) && e && (0, T.j)({ type: 'user' }), r(!1));
        }, [o, t, e, n]),
        o
    );
}
function ev(e, t) {
    let [n, r] = i.useState(!0),
        o = (0, l.e7)([ep], () => ep.getApplicationState(e));
    i.useEffect(() => {
        n &&
            (t &&
                eC(o) &&
                null != e &&
                (0, T.j)({
                    type: 'application',
                    applicationId: e
                }),
            r(!1));
    }, [t, e, o, n]);
}
function eb() {
    return (0, l.e7)([ep], () => ep.getApplicationStates());
}
function ey() {
    return (0, l.e7)([ep], () => ep.applicationIndicesVersion);
}
function eO(e, t, n, r) {
    let { descriptors: o, commands: a, sectionedCommands: s, loading: l } = eI(e, n, r),
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
        u = (0, S.R)(c);
    return i.useMemo(() => {
        if (!r.includeFrecency || 0 === u.length)
            return {
                descriptors: o,
                commands: a,
                sectionedCommands: s,
                loading: l
            };
        let e = a
            .filter((e) => u.includes(e.id))
            .sort((e, t) => {
                let n = I.ZP.getScoreWithoutLoadingLatest(c, e);
                return I.ZP.getScoreWithoutLoadingLatest(c, t) - n;
            })
            .splice(0, D.hz);
        return 0 === e.length
            ? {
                  descriptors: o,
                  commands: a,
                  sectionedCommands: s,
                  loading: l
              }
            : {
                  descriptors: [O.Tm[D.bi.FRECENCY], ...o],
                  commands: e.concat(a),
                  sectionedCommands: [
                      {
                          section: O.Tm[D.bi.FRECENCY],
                          data: e
                      },
                      ...s
                  ],
                  loading: l
              };
    }, [l, r.includeFrecency, u, a, o, s, c]);
}
let eS = Object.freeze({
    applications: {
        useFrecency: !1,
        useScore: !1
    },
    commands: {
        useFrecency: !0,
        useScore: !0
    }
});
function eI(e, t, n) {
    let r = 'channel' === e.type ? e.channel : void 0,
        o = (0, R.Hs)(r, t.commandTypes),
        a = !1 !== t.applicationCommands,
        s = eg(e, a, n.allowFetch),
        l = eE(a, n.allowFetch),
        c = eb(),
        u = ey();
    return (
        ev(n.applicationId, n.allowFetch),
        i.useMemo(
            () =>
                eT({
                    permissionContext: o,
                    text: t.text,
                    allowApplicationCommands: a,
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
            [o, t.text, t.builtIns, a, n.scoreMethod, n.allowEmptySections, n.sortOptions, n.allowApplicationState, n.applicationId, n.installOnDemand, s, l, c, u]
        )
    );
}
function eT(e) {
    var t, n, r, i, o, s, l;
    let { permissionContext: c, contextState: u, userState: d, applicationStates: _, text: p, builtIns: g = N.D.ALLOW, allowApplicationCommands: m = !0, singleApplicationId: v, allowEmptySections: b = !1, scoreMethod: y = N.p.NONE, sortOptions: S = eS, installOnDemand: T = !1 } = e,
        { commandTypes: A } = c,
        C = null == p ? void 0 : p.toLowerCase(),
        R = null == C ? void 0 : C.split(' '),
        P = g === N.D.ONLY_TEXT,
        w = g !== N.D.DENY ? (0, O.Kh)(A, !0, P) : [],
        L = [],
        M = {
            permissionContext: c,
            query: C,
            splitQuery: R,
            allowEmptySections: b,
            scoreMethod: y,
            installOnDemand: T
        },
        j = null !== (i = null === (t = u.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {},
        U = null !== (o = null === (n = d.result) || void 0 === n ? void 0 : n.sections) && void 0 !== o ? o : {},
        G = new Set();
    if (m) {
        if (c.hasBaseAccessPermissions)
            for (let e in j) {
                let t = j[e];
                (null == v || t.descriptor.id === v) && G.add(e);
            }
        for (let e in U) {
            let t = U[e];
            (null == v || t.descriptor.id === v) && G.add(e);
        }
    }
    let B = new Map();
    for (let [e, t] of _)
        if (null == v || e === v) {
            let e = null === (s = t.result) || void 0 === s ? void 0 : s.sections;
            if (null != e) for (let t of Object.keys(e)) G.add(t), B.set(t, e[t]);
        }
    for (let e of Array.from(G)) {
        let t, n;
        let r = j[e],
            i = U[e],
            o = B.get(e),
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
        } else null != r ? ((t = r.descriptor), (n = Object.values(r.commands))) : null != i ? ((t = i.descriptor), (n = Object.values(i.commands))) : null != o && ((t = o.descriptor), (n = Object.values(o.commands)));
        a()(null != t, 'Failed to select application descriptor'), a()(null != n, 'Failed to select list of application commands');
        let c = eN(t, n, s, l, M);
        null != c && L.push(c);
    }
    if (
        (S.applications.useFrecency && h.DZ.loadIfNecessary(),
        L.sort((e, t) => {
            if (S.applications.useScore && y === N.p.APPLICATION_ONLY) {
                var n, r, i, o;
                let a = null !== (i = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== i ? i : Number.MAX_VALUE,
                    s = null !== (o = null === (r = t.data[0]) || void 0 === r ? void 0 : r.score) && void 0 !== o ? o : Number.MAX_VALUE;
                if (a !== s) return a - s;
            }
            if (S.applications.useFrecency) {
                let n = f.Z.getScoreWithoutLoadingLatest(e.section.id),
                    r = f.Z.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return ej(e.section.name, t.section.name);
        }),
        w.length > 0 || !0 === b)
    ) {
        let e = eN(O.Tm[D.bi.BUILT_IN], w, !0, !0, M);
        null != e && L.push(e);
    }
    let V = L.flatMap((e) => e.data.map((t) => k(x({}, t), { section: e.section })));
    if (y === N.p.COMMAND_ONLY || y === N.p.COMMAND_OR_APPLICATION) {
        let e = c.context,
            t = E.Z.getGuild(null == c ? void 0 : null === (l = c.context) || void 0 === l ? void 0 : l.guild_id);
        S.commands.useFrecency && h.DZ.loadIfNecessary();
        let n =
            null != e
                ? {
                      channel: e,
                      guild: t
                  }
                : void 0;
        V.sort((e, t) => {
            if (S.commands.useScore) {
                var r, i;
                let n = null !== (r = e.score) && void 0 !== r ? r : 0,
                    o = null !== (i = t.score) && void 0 !== i ? i : 0;
                if (n !== o) return n - o;
            }
            if (S.commands.useFrecency) {
                let r = I.ZP.getScoreWithoutLoadingLatest(n, e),
                    i = I.ZP.getScoreWithoutLoadingLatest(n, t);
                if (r !== i) return i - r;
            }
            return ej(e.displayName, t.displayName);
        });
    }
    return {
        commands: V,
        descriptors: L.map((e) => e.section),
        sectionedCommands: L,
        loading: (null == u ? void 0 : u.fetchState.fetching) === !0 || (null == d ? void 0 : d.fetchState.fetching) === !0 || (null != v && (null === (r = _.get(v)) || void 0 === r ? void 0 : r.fetchState.fetching) === !0)
    };
}
function eN(e, t, n, r, i) {
    let o,
        { query: a, splitQuery: s, allowEmptySections: l, scoreMethod: c, permissionContext: u, installOnDemand: d } = i,
        { context: f, userId: _, roleIds: p, isImpersonating: h } = u,
        g = (null == f ? void 0 : f.guild_id) != null ? P.ML(e.permissions, f.guild_id, _, p, h) : null,
        m = (null == f ? void 0 : f.guild_id) != null ? P.ZJ(e.permissions, f, f.guild_id) : null,
        E = [];
    for (let i of t)
        P.Ft(i, u, {
            applicationAllowedForUser: g,
            applicationAllowedForChannel: m,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: r || d
        }) === P.mF.ALLOWED && E.push(i);
    return 0 !== (o = c !== N.p.NONE && null != a && null != s ? eM(a, s, E, e, c) : E).length || l
        ? ((c === N.p.NONE || c === N.p.APPLICATION_ONLY) && o.sort((e, t) => ej(e.displayName, t.displayName)),
          {
              section: e,
              data: o
          })
        : null;
}
function eA(e) {
    var t;
    return (null == e ? void 0 : e.guild_id) != null || (e.type === w.d4z.DM && (null === (t = v.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0);
}
function eC(e) {
    return !!eR(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter);
}
function eR(e) {
    var t;
    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion;
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
function eD(e, t) {
    var n, r, i, o, a;
    let s = k(x({}, e), {
        description: null !== (i = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== i ? i : '',
        dm_permission: e.dm_permission,
        name: null !== (o = e.name_default) && void 0 !== o ? o : e.name,
        options: null !== (a = null === (n = e.options) || void 0 === n ? void 0 : n.map(ew)) && void 0 !== a ? a : [],
        permissions: null != e.permissions ? ex(e.permissions, t) : void 0
    });
    return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s;
}
function ew(e) {
    var t, n, r, i;
    let o = k(x({}, e), {
        choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(eL),
        description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
        name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
        options: null === (n = e.options) || void 0 === n ? void 0 : n.map(ew)
    });
    return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o;
}
function eL(e) {
    var t;
    let n = k(x({}, e), { name: null !== (t = e.name_default) && void 0 !== t ? t : e.name });
    return e.name !== e.name_default && (n.name_localized = e.name), n;
}
function ex(e, t) {
    let n = [];
    if (
        (null != e.user &&
            n.push({
                type: A.Kw.USER,
                id: t,
                permission: e.user
            }),
        null != e.channels)
    )
        for (let [t, r] of Object.entries(e.channels))
            n.push({
                type: A.Kw.CHANNEL,
                id: t,
                permission: r
            });
    if (null != e.roles)
        for (let [t, r] of Object.entries(e.roles))
            n.push({
                type: A.Kw.ROLE,
                id: t,
                permission: r
            });
    return n;
}
function eM(e, t, n, r, i) {
    let o;
    let a = [];
    if (i === N.p.APPLICATION_ONLY || i === N.p.COMMAND_OR_APPLICATION) {
        let t = r.name.toLocaleLowerCase();
        if (t.startsWith(e)) o = 5;
        else if (t.includes(e)) o = 6;
        else {
            var s, l;
            let t = null === (l = r.application) || void 0 === l ? void 0 : null === (s = l.description) || void 0 === s ? void 0 : s.toLocaleLowerCase();
            (null == t ? void 0 : t.includes(e)) && (o = 8);
        }
    }
    let c = t[0],
        u = t.slice(1).join(' ');
    for (let t of n) {
        let n;
        (i === N.p.COMMAND_ONLY || i === N.p.COMMAND_OR_APPLICATION) && (n = ek(t, e, c, u)), (void 0 === n || (void 0 !== o && o < n)) && (n = o), void 0 !== n && a.push(k(x({}, t), { score: n }));
    }
    return a;
}
function ek(e, t, n, r) {
    var i;
    let o = e.untranslatedName,
        a = e.displayName;
    if (o.startsWith(t) || a.startsWith(t)) return 0;
    if ((o.startsWith(n) && o.split(' ').slice(1).join(' ').startsWith(r)) || (a.startsWith(n) && a.split(' ').slice(1).join(' ').startsWith(r))) return 1;
    if (o.includes(t) || (null == a ? void 0 : a.includes(t))) return 2;
    let s = !1;
    for (let { name: n, serverLocalizedName: r } of null !== (i = e.options) && void 0 !== i ? i : []) {
        if (n.startsWith(t) || ''.concat(o, ' ').concat(n).startsWith(t) || (null != a && ''.concat(a, ' ').concat(n).startsWith(t)) || (null != r && (r.startsWith(t) || ''.concat(o, ' ').concat(r).startsWith(t) || (null != a && ''.concat(a, ' ').concat(r).startsWith(t))))) return 3;
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
    var n, r, i, o, a, s;
    let l, c;
    if (t === D.bi.BUILT_IN)
        return {
            descriptor: O.Tm[D.bi.BUILT_IN],
            sectionCommands: (0, O.Kh)([d.yU.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0
        };
    let u = ep.getContextState(e),
        f = ep.getUserState(),
        _ = null !== (a = null === (n = u.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {},
        p = null !== (s = null === (r = f.result) || void 0 === r ? void 0 : r.sections) && void 0 !== s ? s : {},
        h = _[t],
        g = p[t],
        m = null === (o = ep.getApplicationState(t).result) || void 0 === o ? void 0 : null === (i = o.sections) || void 0 === i ? void 0 : i[t];
    if (null != h && null != g) {
        for (let e in ((l = g.descriptor), (c = []), g.commands)) {
            let t = g.commands[e];
            c.push(t);
        }
        for (let e in h.commands)
            if (!(e in g.commands)) {
                let t = h.commands[e];
                c.push(t);
            }
    } else null != h ? ((l = h.descriptor), (c = Object.values(h.commands))) : null != g ? ((l = g.descriptor), (c = Object.values(g.commands))) : null != m && ((l = m.descriptor), (c = Object.values(m.commands)));
    return {
        descriptor: l,
        sectionCommands: c,
        isGuildInstalled: null != h,
        isUserInstalled: null != g
    };
}
