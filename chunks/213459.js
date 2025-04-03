n.d(t, {
    FN: () => en,
    If: () => eB,
    JK: () => eI,
    LD: () => eE,
    PL: () => eb,
    ZP: () => em,
    em: () => eg,
    un: () => eG,
    v1: () => eT
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
    f = n(424602),
    _ = n(822245),
    p = n(399860),
    h = n(706454),
    m = n(675478),
    g = n(314897),
    E = n(592125),
    b = n(430824),
    y = n(594174),
    v = n(626135),
    O = n(226351),
    I = n(254711),
    S = n(700089),
    T = n(654455),
    N = n(963456),
    A = n(367790),
    C = n(895924),
    R = n(581364),
    P = n(807169),
    w = n(104793),
    D = n(689079),
    L = n(981631);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function j(e, t) {
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
let U = new s.Yd('ApplicationCommandIndexStore'),
    G = Symbol('currentUser'),
    B = Symbol('stale'),
    F = Symbol('current'),
    V = Object.freeze({
        descriptors: [],
        commands: [],
        sectionedCommands: [],
        loading: !0
    }),
    Z = Object.freeze({
        serverVersion: F,
        fetchState: { fetching: !1 },
        result: {
            sections: {},
            sectionIdsByBotId: {},
            version: F
        }
    }),
    H = Object.freeze({
        serverVersion: B,
        fetchState: { fetching: !1 }
    }),
    W = 5000,
    Y = {
        sensitivity: 'accent',
        numeric: !0
    },
    K = !1,
    z = [];
function q(e) {
    switch (e.type) {
        case 'guild':
            return e.guildId;
        case 'channel':
            return e.channelId;
        case 'user':
            return G;
        case 'application':
            return e.applicationId;
    }
}
function Q(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = q(e),
        o = eh.indices[i];
    return (
        null != o
            ? ('fetchState' in t && o.fetchState.fetching && o.fetchState.abort.abort(), (n = M({}, o, t)))
            : r &&
              (n = M(
                  {
                      serverVersion: B,
                      fetchState: { fetching: !1 }
                  },
                  t
              )),
        void 0 !== n && ((eh.indices[i] = n), 'application' === e.type && (eh.applicationIndices.set(i, n), (eh.applicationIndicesVersion = eh.applicationIndicesVersion + 1))),
        o
    );
}
function X(e) {
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
        o = null != (t = eh.indices[i]) ? t : H;
    if (!eR(o)) {
        if (o.fetchState.fetching) {
            let e = o.fetchState.promise;
            return await e, null != (n = eh.indices[i]) ? n : H;
        }
        return o;
    }
    return await er(e), null != (r = eh.indices[i]) ? r : H;
}
async function er(e) {
    let t = new AbortController(),
        n = new O.o();
    Q(
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
        await (0, N.a)(e, t).then(n.resolve).catch(n.reject);
}
function ei(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: i, index: o } = e,
        a = null == (t = y.default.getCurrentUser()) ? void 0 : t.id;
    if (null == a) return K || z.push(e), !1;
    let s = {},
        l = {},
        c = new Set();
    for (let e of o.applications) {
        if (null == e.bot && null != e.bot_id) {
            l[e.bot_id] = e.id;
            let t = y.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : c.add(e.bot_id);
        } else null != e.bot && (l[e.bot.id] = e.id);
        let t = {
            descriptor: j(M({}, (0, R.X0)(ew(e))), {
                permissions: null != e.permissions ? (0, p.tk)(eM(e.permissions, a)) : void 0,
                botId: e.bot_id
            }),
            commands: {}
        };
        s[e.id] = t;
    }
    for (let e of ('guild' === i.type && c.size > 0 && u.Z.requestMembersById(i.guildId, [...c]),
    (0, R.nG)(
        o.application_commands.map((e) => eD(e, a)),
        !0
    ))) {
        let t = s[e.applicationId];
        if (null == t) {
            U.error('Command has no matching application');
            continue;
        }
        t.commands[e.id] = e;
    }
    let d = null != (n = o.version) ? n : F;
    Q(
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
function eo(e) {
    let { target: t } = e;
    Q(t, {
        fetchState: {
            fetching: !1,
            retryAfter: Date.now() + W
        }
    });
}
function ea(e) {
    var t;
    let { guildId: n, version: r } = e,
        i = Q(
            {
                type: 'guild',
                guildId: n
            },
            { serverVersion: null != r ? r : B }
        ),
        o = null == i || null == (t = i.result) ? void 0 : t.sectionIdsByBotId;
    if (null != o)
        for (let e in o) {
            let t = E.Z.getDMFromUserId(e);
            null != t &&
                Q(
                    {
                        type: 'channel',
                        channelId: t
                    },
                    { serverVersion: B }
                );
        }
}
function es(e, t) {
    var n;
    let r = q({
            type: 'guild',
            guildId: e
        }),
        i = null == (n = eh.indices[r]) ? void 0 : n.result;
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
            let s = (0, R.X0)(j(M({}, r.descriptor.application), { bot: t }));
            (r.descriptor = M({}, r.descriptor, s)), (o = !0);
        }),
        o
    );
}
function el(e) {
    let { applicationId: t, channelId: n, guildId: r } = e;
    eh.hasContextStateApplication(t, n, r) &&
        Q(
            null != r
                ? {
                      type: 'guild',
                      guildId: r
                  }
                : {
                      type: 'channel',
                      channelId: n
                  },
            { serverVersion: B }
        ),
        eh.hasUserStateApplication(t) && Q({ type: 'user' }, { serverVersion: B }),
        eh.hasApplicationState(t) &&
            Q(
                {
                    type: 'application',
                    applicationId: t
                },
                { serverVersion: B }
            );
}
function ec(e) {
    let { channel: t } = e;
    X({
        type: 'channel',
        channelId: t.id
    });
}
function eu(e) {
    let { guild: t } = e;
    X({
        type: 'guild',
        guildId: t.id
    });
}
function ed() {
    Q({ type: 'user' }, { serverVersion: B });
}
function ef(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = es(e.guildId, e.members) || n;
    return n;
}
function e_() {
    let e = h.default.locale;
    return (
        e !== eh.oldLocale &&
        (J(),
        (eh.collator = new Intl.Collator(e, {
            sensitivity: 'accent',
            numeric: !0
        })),
        (eh.oldLocale = e),
        !0)
    );
}
class ep extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(h.default),
            this.waitFor(g.default),
            this.syncWith([h.default], () => {
                e_();
            });
    }
    getContextState(e) {
        var t, n;
        return 'contextless' !== e.type && eC(e.channel) ? (null != (n = this.indices[null != (t = e.channel.guild_id) ? t : e.channel.id]) ? n : H) : Z;
    }
    hasContextStateApplication(e, t, n) {
        var r, i;
        let o = this.indices[null != n ? n : t];
        return e in (null != (i = null == o || null == (r = o.result) ? void 0 : r.sections) ? i : {});
    }
    getGuildState(e) {
        var t;
        return null == e ? Z : null != (t = this.indices[e]) ? t : H;
    }
    getUserState() {
        var e;
        return null != (e = this.indices[G]) ? e : H;
    }
    hasUserStateApplication(e) {
        var t, n;
        let r = this.indices[G];
        return e in (null != (n = null == r || null == (t = r.result) ? void 0 : t.sections) ? n : {});
    }
    getApplicationState(e) {
        var t;
        return null == e ? Z : null != (t = this.indices[e]) ? t : H;
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == y.default.getCurrentUser()) return V;
        let r = 'channel' === e.type ? e.channel : void 0,
            i = this.getContextState(e),
            o = this.getUserState(),
            a = this.getApplicationState(n.applicationId),
            s = this.getApplicationStates(),
            l = (0, P.k)(r, t.commandTypes),
            c = null == r || (null == l ? void 0 : l.hasBaseAccessPermissions) === !0,
            u = !1 !== t.applicationCommands,
            d = !1;
        n.allowFetch &&
            (u &&
                c &&
                null != r &&
                eC(r) &&
                (v.default.track(L.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == i.result,
                    size: Object.keys(eh.indices).length
                }),
                eR(i) &&
                    null != r &&
                    (null != r.guild_id
                        ? (0, N.j)({
                              type: 'guild',
                              guildId: r.guild_id
                          })
                        : (0, N.j)({
                              type: 'channel',
                              channelId: r.id
                          }),
                    (d = !0))),
            eR(o) && ((0, N.j)({ type: 'user' }), (d = !0)),
            eR(a) &&
                null != n.applicationId &&
                ((0, N.j)({
                    type: 'application',
                    applicationId: n.applicationId
                }),
                (d = !0)));
        let f = eN({
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
        let n = E.Z.getChannel(t);
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
        super(...e), x(this, 'indices', {}), x(this, 'applicationIndices', new Map()), x(this, 'applicationIndicesVersion', 0), x(this, 'oldLocale', h.default.locale), x(this, 'collator', new Intl.Collator(h.default.locale, Y));
    }
}
x(ep, 'displayName', 'ApplicationCommandIndexStore');
let eh = new ep(c.Z, {
        LOGOUT: J,
        CONNECTION_OPEN: ee,
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: et,
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: ei,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: eo,
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: el,
        CHANNEL_DELETE: ec,
        GUILD_DELETE: eu,
        USER_APPLICATION_UPDATE: ed,
        USER_APPLICATION_REMOVE: ed,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: ea,
        GUILD_MEMBERS_CHUNK_BATCH: ef
    }),
    em = eh;
function eg(e, t, n) {
    let [r, o] = i.useState(!0),
        a = (0, l.cj)([eh], () => ('channel' === e.type ? eh.getContextState(e) : eh.getUserState()));
    return (
        i.useEffect(() => {
            if (r) {
                if ('contextless' === e.type) {
                    n && eR(a) && (0, N.j)({ type: 'user' });
                    return;
                }
                n &&
                    t &&
                    eC(e.channel) &&
                    (v.default.track(L.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(eh.indices).length
                    }),
                    eR(a) &&
                        (null != e.channel.guild_id
                            ? (0, N.j)({
                                  type: 'guild',
                                  guildId: e.channel.guild_id
                              })
                            : (0, N.j)({
                                  type: 'channel',
                                  channelId: e.channel.id
                              }))),
                    o(!1);
            }
        }, [a, n, e, t, r]),
        a
    );
}
function eE(e, t) {
    let [n, r] = i.useState(!0),
        o = (0, l.cj)([eh], () => {
            var t;
            return null != (t = eh.indices[e]) ? t : H;
        });
    return (
        i.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (v.default.track(L.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == o.result,
                        size: Object.keys(eh.indices).length
                    }),
                    eR(o) &&
                        (0, N.j)({
                            type: 'guild',
                            guildId: e
                        })),
                r(!1));
        }, [o, t, e, n]),
        o
    );
}
function eb(e, t) {
    let [n, r] = i.useState(!0),
        o = (0, l.cj)([eh], () => eh.getUserState());
    return (
        i.useEffect(() => {
            n && (t && eR(o) && e && (0, N.j)({ type: 'user' }), r(!1));
        }, [o, t, e, n]),
        o
    );
}
function ey(e, t) {
    let [n, r] = i.useState(!0),
        o = (0, l.e7)([eh], () => eh.getApplicationState(e));
    i.useEffect(() => {
        n &&
            (t &&
                eR(o) &&
                null != e &&
                (0, N.j)({
                    type: 'application',
                    applicationId: e
                }),
            r(!1));
    }, [t, e, o, n]);
}
function ev() {
    return (0, l.e7)([eh], () => eh.getApplicationStates());
}
function eO() {
    return (0, l.e7)([eh], () => eh.applicationIndicesVersion);
}
function eI(e, t, n, r) {
    let { descriptors: o, commands: a, sectionedCommands: s, loading: l } = eT(e, n, r),
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
                let n = T.ZP.getScoreWithoutLoadingLatest(c, e);
                return T.ZP.getScoreWithoutLoadingLatest(c, t) - n;
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
                  descriptors: [I.Tm[D.bi.FRECENCY], ...o],
                  commands: e.concat(a),
                  sectionedCommands: [
                      {
                          section: I.Tm[D.bi.FRECENCY],
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
function eT(e, t, n) {
    let r = 'channel' === e.type ? e.channel : void 0,
        o = (0, P.Hs)(r, t.commandTypes),
        a = !1 !== t.applicationCommands,
        s = eg(e, a, n.allowFetch),
        l = eb(a, n.allowFetch),
        c = ev(),
        u = eO();
    return (
        ey(n.applicationId, n.allowFetch),
        i.useMemo(
            () =>
                eN({
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
function eN(e) {
    var t, n, r, i, o, s, l;
    let { permissionContext: c, contextState: u, userState: d, applicationStates: f, text: p, builtIns: h = A.D.ALLOW, allowApplicationCommands: g = !0, singleApplicationId: E, allowEmptySections: y = !1, scoreMethod: v = A.p.NONE, sortOptions: O = eS, installOnDemand: S = !1 } = e,
        { commandTypes: N } = c,
        C = null == p ? void 0 : p.toLowerCase(),
        R = null == C ? void 0 : C.split(' '),
        P = h === A.D.ONLY_TEXT,
        w = h !== A.D.DENY ? (0, I.Kh)(N, !0, P) : [],
        L = [],
        x = {
            permissionContext: c,
            query: C,
            splitQuery: R,
            allowEmptySections: y,
            scoreMethod: v,
            installOnDemand: S
        },
        k = null != (i = null == (t = u.result) ? void 0 : t.sections) ? i : {},
        U = null != (o = null == (n = d.result) ? void 0 : n.sections) ? o : {},
        G = new Set();
    if (g) {
        if (c.hasBaseAccessPermissions)
            for (let e in k) {
                let t = k[e];
                (null == E || t.descriptor.id === E) && G.add(e);
            }
        for (let e in U) {
            let t = U[e];
            (null == E || t.descriptor.id === E) && G.add(e);
        }
    }
    let B = new Map();
    for (let [e, t] of f)
        if (null == E || e === E) {
            let e = null == (s = t.result) ? void 0 : s.sections;
            if (null != e) for (let t of Object.keys(e)) G.add(t), B.set(t, e[t]);
        }
    for (let e of Array.from(G)) {
        let t,
            n,
            r = k[e],
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
        let c = eA(t, n, s, l, x);
        null != c && L.push(c);
    }
    if (
        (O.applications.useFrecency && m.DZ.loadIfNecessary(),
        L.sort((e, t) => {
            if (O.applications.useScore && v === A.p.APPLICATION_ONLY) {
                var n, r, i, o;
                let a = null != (i = null == (n = e.data[0]) ? void 0 : n.score) ? i : Number.MAX_VALUE,
                    s = null != (o = null == (r = t.data[0]) ? void 0 : r.score) ? o : Number.MAX_VALUE;
                if (a !== s) return a - s;
            }
            if (O.applications.useFrecency) {
                let n = _.Z.getScoreWithoutLoadingLatest(e.section.id),
                    r = _.Z.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return eU(e.section.name, t.section.name);
        }),
        w.length > 0 || !0 === y)
    ) {
        let e = eA(I.Tm[D.bi.BUILT_IN], w, !0, !0, x);
        null != e && L.push(e);
    }
    let F = L.flatMap((e) => e.data.map((t) => j(M({}, t), { section: e.section })));
    if (v === A.p.COMMAND_ONLY || v === A.p.COMMAND_OR_APPLICATION) {
        let e = c.context,
            t = b.Z.getGuild(null == c || null == (l = c.context) ? void 0 : l.guild_id);
        O.commands.useFrecency && m.DZ.loadIfNecessary();
        let n =
            null != e
                ? {
                      channel: e,
                      guild: t
                  }
                : void 0;
        F.sort((e, t) => {
            if (O.commands.useScore) {
                var r, i;
                let n = null != (r = e.score) ? r : 0,
                    o = null != (i = t.score) ? i : 0;
                if (n !== o) return n - o;
            }
            if (O.commands.useFrecency) {
                let r = T.ZP.getScoreWithoutLoadingLatest(n, e),
                    i = T.ZP.getScoreWithoutLoadingLatest(n, t);
                if (r !== i) return i - r;
            }
            return eU(e.displayName, t.displayName);
        });
    }
    return {
        commands: F,
        descriptors: L.map((e) => e.section),
        sectionedCommands: L,
        loading: (null == u ? void 0 : u.fetchState.fetching) === !0 || (null == d ? void 0 : d.fetchState.fetching) === !0 || (null != E && (null == (r = f.get(E)) ? void 0 : r.fetchState.fetching) === !0)
    };
}
function eA(e, t, n, r, i) {
    let o,
        { query: a, splitQuery: s, allowEmptySections: l, scoreMethod: c, permissionContext: u, installOnDemand: d } = i,
        { context: _, userId: p, roleIds: h, isImpersonating: m } = u,
        g = (null == _ ? void 0 : _.guild_id) != null ? w.ML(e.permissions, _.guild_id, p, h, m) : null,
        E = (null == _ ? void 0 : _.guild_id) != null ? w.ZJ(e.permissions, _, _.guild_id) : null,
        b = (0, f.aZ)(u.context, 'ApplicationCommandIndexStore.queryIndexSection()'),
        y = [];
    for (let i of t)
        if (
            w.Ft(i, u, {
                applicationAllowedForUser: g,
                applicationAllowedForChannel: E,
                commandBotId: e.botId,
                isGuildInstalled: n,
                isUserInstalled: r || d
            }) === w.mF.ALLOWED
        ) {
            var v;
            if (b && i.applicationId === f.gu && (null == (v = u.context) ? void 0 : v.isGuildVoice())) continue;
            y.push(i);
        }
    return 0 !== (o = c !== A.p.NONE && null != a && null != s ? ek(a, s, y, e, c) : y).length || l
        ? ((c === A.p.NONE || c === A.p.APPLICATION_ONLY) && o.sort((e, t) => eU(e.displayName, t.displayName)),
          {
              section: e,
              data: o
          })
        : null;
}
function eC(e) {
    var t;
    return (null == e ? void 0 : e.guild_id) != null || (e.type === L.d4z.DM && (null == (t = y.default.getUser(e.getRecipientId())) ? void 0 : t.bot) === !0);
}
function eR(e) {
    return !!eP(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter);
}
function eP(e) {
    var t;
    return (null == (t = e.result) ? void 0 : t.version) !== e.serverVersion;
}
function ew(e) {
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
    let s = j(M({}, e), {
        description: null != (i = null != (r = e.description_default) ? r : e.description) ? i : '',
        dm_permission: e.dm_permission,
        name: null != (o = e.name_default) ? o : e.name,
        options: null != (a = null == (n = e.options) ? void 0 : n.map(eL)) ? a : [],
        permissions: null != e.permissions ? eM(e.permissions, t) : void 0
    });
    return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s;
}
function eL(e) {
    var t, n, r, i;
    let o = j(M({}, e), {
        choices: null == (t = e.choices) ? void 0 : t.map(ex),
        description: null != (r = e.description_default) ? r : e.description,
        name: null != (i = e.name_default) ? i : e.name,
        options: null == (n = e.options) ? void 0 : n.map(eL)
    });
    return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o;
}
function ex(e) {
    var t;
    let n = j(M({}, e), { name: null != (t = e.name_default) ? t : e.name });
    return e.name !== e.name_default && (n.name_localized = e.name), n;
}
function eM(e, t) {
    let n = [];
    if (
        (null != e.user &&
            n.push({
                type: C.Kw.USER,
                id: t,
                permission: e.user
            }),
        null != e.channels)
    )
        for (let [t, r] of Object.entries(e.channels))
            n.push({
                type: C.Kw.CHANNEL,
                id: t,
                permission: r
            });
    if (null != e.roles)
        for (let [t, r] of Object.entries(e.roles))
            n.push({
                type: C.Kw.ROLE,
                id: t,
                permission: r
            });
    return n;
}
function ek(e, t, n, r, i) {
    let o,
        a = [];
    if (i === A.p.APPLICATION_ONLY || i === A.p.COMMAND_OR_APPLICATION) {
        let t = r.name.toLocaleLowerCase();
        if (t.startsWith(e)) o = 5;
        else if (t.includes(e)) o = 6;
        else {
            var s, l;
            let t = null == (l = r.application) || null == (s = l.description) ? void 0 : s.toLocaleLowerCase();
            (null == t ? void 0 : t.includes(e)) && (o = 8);
        }
    }
    let c = t[0],
        u = t.slice(1).join(' ');
    for (let t of n) {
        let n;
        (i === A.p.COMMAND_ONLY || i === A.p.COMMAND_OR_APPLICATION) && (n = ej(t, e, c, u)), (void 0 === n || (void 0 !== o && o < n)) && (n = o), void 0 !== n && a.push(j(M({}, t), { score: n }));
    }
    return a;
}
function ej(e, t, n, r) {
    var i;
    let o = e.untranslatedName,
        a = e.displayName;
    if (o.startsWith(t) || a.startsWith(t)) return 0;
    if ((o.startsWith(n) && o.split(' ').slice(1).join(' ').startsWith(r)) || (a.startsWith(n) && a.split(' ').slice(1).join(' ').startsWith(r))) return 1;
    if (o.includes(t) || (null == a ? void 0 : a.includes(t))) return 2;
    let s = !1;
    for (let { name: n, serverLocalizedName: r } of null != (i = e.options) ? i : []) {
        if (n.startsWith(t) || ''.concat(o, ' ').concat(n).startsWith(t) || (null != a && ''.concat(a, ' ').concat(n).startsWith(t)) || (null != r && (r.startsWith(t) || ''.concat(o, ' ').concat(r).startsWith(t) || (null != a && ''.concat(a, ' ').concat(r).startsWith(t))))) return 3;
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
    var n, r, i, o, a, s;
    let l, c;
    if (t === D.bi.BUILT_IN)
        return {
            descriptor: I.Tm[D.bi.BUILT_IN],
            sectionCommands: (0, I.Kh)([d.yU.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0
        };
    let u = eh.getContextState(e),
        f = eh.getUserState(),
        _ = null != (a = null == (n = u.result) ? void 0 : n.sections) ? a : {},
        p = null != (s = null == (r = f.result) ? void 0 : r.sections) ? s : {},
        h = _[t],
        m = p[t],
        g = null == (o = eh.getApplicationState(t).result) || null == (i = o.sections) ? void 0 : i[t];
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
