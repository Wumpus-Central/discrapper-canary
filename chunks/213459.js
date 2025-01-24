r.d(n, {
    FN: function () {
        return er;
    },
    If: function () {
        return eZ;
    },
    JK: function () {
        return eT;
    },
    LD: function () {
        return eE;
    },
    PL: function () {
        return ev;
    },
    em: function () {
        return eg;
    },
    un: function () {
        return eG;
    },
    v1: function () {
        return eA;
    }
});
var i,
    a,
    o = r(47120);
var s = r(653041);
var l = r(390547);
var u = r(789020);
var c = r(192379),
    d = r(512722),
    f = r.n(d),
    p = r(259443),
    h = r(442837),
    _ = r(570140),
    m = r(749210),
    g = r(911969),
    E = r(822245),
    v = r(399860),
    y = r(706454),
    b = r(675478),
    I = r(314897),
    T = r(592125),
    S = r(430824),
    A = r(594174),
    C = r(626135),
    N = r(254711),
    R = r(700089),
    O = r(654455),
    D = r(963456),
    L = r(367790),
    x = r(895924),
    w = r(581364),
    P = r(807169),
    M = r(104793),
    k = r(689079),
    U = r(981631);
function B(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let G = new p.Yd('ApplicationCommandIndexStore'),
    Z = Symbol('currentUser'),
    F = Symbol('stale'),
    V = Symbol('current'),
    j = Object.freeze({
        descriptors: [],
        commands: [],
        sectionedCommands: [],
        loading: !0
    }),
    H = Object.freeze({
        serverVersion: V,
        fetchState: { fetching: !1 },
        result: {
            sections: {},
            sectionIdsByBotId: {},
            version: V
        }
    }),
    Y = Object.freeze({
        serverVersion: F,
        fetchState: { fetching: !1 }
    }),
    W = 5000,
    K = {
        sensitivity: 'accent',
        numeric: !0
    },
    z = !1,
    q = [];
function Q(e) {
    switch (e.type) {
        case 'guild':
            return e.guildId;
        case 'channel':
            return e.channelId;
        case 'user':
            return Z;
        case 'application':
            return e.applicationId;
    }
}
function X(e, n) {
    let r,
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = Q(e),
        o = em.indices[a];
    return (
        null != o
            ? ('fetchState' in n && o.fetchState.fetching && o.fetchState.abort.abort(),
              (r = {
                  ...o,
                  ...n
              }))
            : i &&
              (r = {
                  serverVersion: F,
                  fetchState: { fetching: !1 },
                  ...n
              }),
        void 0 !== r && ((em.indices[a] = r), 'application' === e.type && (em.applicationIndices.set(a, r), (em.applicationIndicesVersion = em.applicationIndicesVersion + 1))),
        o
    );
}
function J(e) {
    let n = Q(e),
        r = em.indices[n];
    (null == r ? void 0 : r.fetchState.fetching) && r.fetchState.abort.abort(), delete em.indices[n];
}
function $() {
    for (let e of Object.values(em.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    em.indices = {};
}
function ee() {
    for (let e of q) ea(e);
    q = [];
}
function et() {
    for (let e of Object.values(em.indices)) e.serverVersion = F;
    ee(), (z = !0);
}
function en(e) {
    var n;
    let { target: r } = e,
        i = Q(r);
    eO(null !== (n = em.indices[i]) && void 0 !== n ? n : Y) && ei(r);
}
async function er(e) {
    var n, r;
    let i = Q(e),
        a = null !== (n = em.indices[i]) && void 0 !== n ? n : Y;
    return eO(a) ? (await ei(e), null !== (r = em.indices[i]) && void 0 !== r ? r : Y) : a;
}
async function ei(e) {
    let n = new AbortController();
    X(
        e,
        {
            fetchState: {
                fetching: !0,
                abort: n
            }
        },
        !0
    ),
        await (0, D.a)(e, n);
}
function ea(e) {
    var n, r;
    let { target: i, index: a } = e,
        o = null === (n = A.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == o) return !z && q.push(e), !1;
    let s = {},
        l = {},
        u = new Set();
    for (let e of a.applications) {
        if (null == e.bot && null != e.bot_id) {
            l[e.bot_id] = e.id;
            let n = A.default.getUser(e.bot_id);
            null != n ? (e.bot = n) : u.add(e.bot_id);
        } else null != e.bot && (l[e.bot.id] = e.id);
        let n = {
            descriptor: {
                ...(0, w.X0)(eL(e)),
                permissions: null != e.permissions ? (0, v.tk)(eM(e.permissions, o)) : void 0,
                botId: e.bot_id
            },
            commands: {}
        };
        s[e.id] = n;
    }
    for (let e of ('guild' === i.type && u.size > 0 && m.Z.requestMembersById(i.guildId, [...u]),
    (0, w.nG)(
        a.application_commands.map((e) => ex(e, o)),
        !0
    ))) {
        let n = s[e.applicationId];
        if (null == n) {
            G.error('Command has no matching application');
            continue;
        }
        n.commands[e.id] = e;
    }
    let c = null !== (r = a.version) && void 0 !== r ? r : V;
    X(i, {
        serverVersion: c,
        result: {
            sections: s,
            sectionIdsByBotId: l,
            version: c
        },
        fetchState: { fetching: !1 }
    });
}
function eo(e) {
    let { target: n } = e;
    X(n, {
        fetchState: {
            fetching: !1,
            retryAfter: Date.now() + W
        }
    });
}
function es(e) {
    var n;
    let { guildId: r, version: i } = e,
        a = X(
            {
                type: 'guild',
                guildId: r
            },
            { serverVersion: null != i ? i : F }
        ),
        o = null == a ? void 0 : null === (n = a.result) || void 0 === n ? void 0 : n.sectionIdsByBotId;
    if (null != o)
        for (let e in o) {
            let n = T.Z.getDMFromUserId(e);
            null != n &&
                X(
                    {
                        type: 'channel',
                        channelId: n
                    },
                    { serverVersion: F }
                );
        }
}
function el(e, n) {
    var r;
    let i = Q({
            type: 'guild',
            guildId: e
        }),
        a = null === (r = em.indices[i]) || void 0 === r ? void 0 : r.result;
    if (null == a) return !1;
    let o = !1;
    return (
        n.forEach((e) => {
            let { user: n } = e;
            if (!n.bot) return;
            let r = a.sectionIdsByBotId[n.id];
            if (null == r) return;
            let i = a.sections[r];
            f()(null != i, 'Bot has no matching index section'), f()(null != i.descriptor.application, "Bot's index section has no application info");
            let s = (0, w.X0)({
                ...i.descriptor.application,
                bot: n
            });
            (i.descriptor = {
                ...i.descriptor,
                ...s
            }),
                (o = !0);
        }),
        o
    );
}
function eu(e) {
    let { applicationId: n, channelId: r, guildId: i } = e;
    em.hasContextStateApplication(n, r, i) &&
        X(
            null != i
                ? {
                      type: 'guild',
                      guildId: i
                  }
                : {
                      type: 'channel',
                      channelId: r
                  },
            { serverVersion: F }
        ),
        em.hasUserStateApplication(n) && X({ type: 'user' }, { serverVersion: F }),
        em.hasApplicationState(n) &&
            X(
                {
                    type: 'application',
                    applicationId: n
                },
                { serverVersion: F }
            );
}
function ec(e) {
    let { channel: n } = e;
    J({
        type: 'channel',
        channelId: n.id
    });
}
function ed(e) {
    let { guild: n } = e;
    J({
        type: 'guild',
        guildId: n.id
    });
}
function ef() {
    X({ type: 'user' }, { serverVersion: F });
}
function ep(e) {
    let { chunks: n } = e,
        r = !1;
    for (let e of n) r = el(e.guildId, e.members) || r;
    return r;
}
function eh() {
    let e = y.default.locale;
    return (
        e !== em.oldLocale &&
        ($(),
        (em.collator = new Intl.Collator(e, {
            sensitivity: 'accent',
            numeric: !0
        })),
        (em.oldLocale = e),
        !0)
    );
}
class e_ extends (i = h.ZP.Store) {
    initialize() {
        this.waitFor(y.default),
            this.waitFor(I.default),
            this.syncWith([y.default], () => {
                eh();
            });
    }
    getContextState(e) {
        var n, r;
        return 'contextless' !== e.type && eR(e.channel) ? (null !== (r = this.indices[null !== (n = e.channel.guild_id) && void 0 !== n ? n : e.channel.id]) && void 0 !== r ? r : Y) : H;
    }
    hasContextStateApplication(e, n, r) {
        var i, a;
        let o = this.indices[null != r ? r : n];
        return e in (null !== (a = null == o ? void 0 : null === (i = o.result) || void 0 === i ? void 0 : i.sections) && void 0 !== a ? a : {});
    }
    getGuildState(e) {
        var n;
        return null == e ? H : null !== (n = this.indices[e]) && void 0 !== n ? n : Y;
    }
    getUserState() {
        var e;
        return null !== (e = this.indices[Z]) && void 0 !== e ? e : Y;
    }
    hasUserStateApplication(e) {
        var n, r;
        let i = this.indices[Z];
        return e in (null !== (r = null == i ? void 0 : null === (n = i.result) || void 0 === n ? void 0 : n.sections) && void 0 !== r ? r : {});
    }
    getApplicationState(e) {
        var n;
        return null == e ? H : null !== (n = this.indices[e]) && void 0 !== n ? n : Y;
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, n, r) {
        if (null == A.default.getCurrentUser()) return j;
        let i = 'channel' === e.type ? e.channel : void 0,
            a = this.getContextState(e),
            o = this.getUserState(),
            s = this.getApplicationState(r.applicationId),
            l = this.getApplicationStates(),
            u = (0, P.k)(i, n.commandTypes),
            c = null == i || (null == u ? void 0 : u.hasBaseAccessPermissions) === !0,
            d = !1 !== n.applicationCommands,
            f = !1;
        r.allowFetch &&
            (d &&
                c &&
                null != i &&
                eR(i) &&
                (C.default.track(U.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == a.result,
                    size: Object.keys(em.indices).length
                }),
                eO(a) &&
                    null != i &&
                    (null != i.guild_id
                        ? (0, D.j)({
                              type: 'guild',
                              guildId: i.guild_id
                          })
                        : (0, D.j)({
                              type: 'channel',
                              channelId: i.id
                          }),
                    (f = !0))),
            eO(o) && ((0, D.j)({ type: 'user' }), (f = !0)),
            eO(s) &&
                null != r.applicationId &&
                ((0, D.j)({
                    type: 'application',
                    applicationId: r.applicationId
                }),
                (f = !0)));
        let p = eC({
            permissionContext: u,
            text: n.text,
            allowApplicationCommands: d,
            builtIns: n.builtIns,
            scoreMethod: r.scoreMethod,
            allowEmptySections: r.allowEmptySections,
            contextState: a,
            userState: o,
            applicationStates: r.allowApplicationState ? l : new Map(),
            sortOptions: r.sortOptions,
            singleApplicationId: r.applicationId,
            installOnDemand: r.installOnDemand
        });
        return (p.loading = p.loading || f), p;
    }
    queryInstallOnDemandApp(e, n) {
        let r = T.Z.getChannel(n);
        null != r &&
            this.query(
                null != r
                    ? {
                          channel: r,
                          type: 'channel'
                      }
                    : { type: 'contextless' },
                { commandTypes: [g.yU.CHAT] },
                {
                    placeholderCount: 5,
                    scoreMethod: L.p.COMMAND_ONLY,
                    applicationId: e,
                    allowFetch: !0
                }
            );
    }
    constructor(...e) {
        super(...e), B(this, 'indices', {}), B(this, 'applicationIndices', new Map()), B(this, 'applicationIndicesVersion', 0), B(this, 'oldLocale', y.default.locale), B(this, 'collator', new Intl.Collator(y.default.locale, K));
    }
}
B(e_, 'displayName', 'ApplicationCommandIndexStore');
let em = new e_(_.Z, {
    LOGOUT: $,
    CONNECTION_OPEN: et,
    APPLICATION_COMMAND_INDEX_FETCH_REQUEST: en,
    APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: ea,
    APPLICATION_COMMAND_INDEX_FETCH_FAILURE: eo,
    APPLICATION_COMMAND_EXECUTE_BAD_VERSION: eu,
    CHANNEL_DELETE: ec,
    GUILD_DELETE: ed,
    USER_APPLICATION_UPDATE: ef,
    USER_APPLICATION_REMOVE: ef,
    GUILD_APPLICATION_COMMAND_INDEX_UPDATE: es,
    GUILD_MEMBERS_CHUNK_BATCH: ep
});
function eg(e, n, r) {
    let [i, a] = c.useState(!0),
        o = (0, h.cj)([em], () => ('channel' === e.type ? em.getContextState(e) : em.getUserState()));
    return (
        c.useEffect(() => {
            if (i) {
                if ('contextless' === e.type) {
                    r && eO(o) && (0, D.j)({ type: 'user' });
                    return;
                }
                r &&
                    n &&
                    eR(e.channel) &&
                    (C.default.track(U.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == o.result,
                        size: Object.keys(em.indices).length
                    }),
                    eO(o) &&
                        (null != e.channel.guild_id
                            ? (0, D.j)({
                                  type: 'guild',
                                  guildId: e.channel.guild_id
                              })
                            : (0, D.j)({
                                  type: 'channel',
                                  channelId: e.channel.id
                              }))),
                    a(!1);
            }
        }, [o, r, e, n, i]),
        o
    );
}
function eE(e, n) {
    let [r, i] = c.useState(!0),
        a = (0, h.cj)([em], () => {
            var n;
            return null !== (n = em.indices[e]) && void 0 !== n ? n : Y;
        });
    return (
        c.useEffect(() => {
            r &&
                null != e &&
                (n &&
                    (C.default.track(U.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(em.indices).length
                    }),
                    eO(a) &&
                        (0, D.j)({
                            type: 'guild',
                            guildId: e
                        })),
                i(!1));
        }, [a, n, e, r]),
        a
    );
}
function ev(e, n) {
    let [r, i] = c.useState(!0),
        a = (0, h.cj)([em], () => em.getUserState());
    return (
        c.useEffect(() => {
            r && (n && eO(a) && e && (0, D.j)({ type: 'user' }), i(!1));
        }, [a, n, e, r]),
        a
    );
}
function ey(e, n) {
    let [r, i] = c.useState(!0),
        a = (0, h.e7)([em], () => em.getApplicationState(e));
    c.useEffect(() => {
        r &&
            (n &&
                eO(a) &&
                null != e &&
                (0, D.j)({
                    type: 'application',
                    applicationId: e
                }),
            i(!1));
    }, [n, e, a, r]);
}
function eb() {
    return (0, h.e7)([em], () => em.getApplicationStates());
}
function eI() {
    return (0, h.e7)([em], () => em.applicationIndicesVersion);
}
function eT(e, n, r, i) {
    let { descriptors: a, commands: o, sectionedCommands: s, loading: l } = eA(e, r, i),
        u = c.useMemo(
            () =>
                'channel' === e.type
                    ? {
                          channel: e.channel,
                          guild: n
                      }
                    : void 0,
            [e, n]
        ),
        d = (0, R.R)(u);
    return c.useMemo(() => {
        if (!i.includeFrecency || 0 === d.length)
            return {
                descriptors: a,
                commands: o,
                sectionedCommands: s,
                loading: l
            };
        let e = o
            .filter((e) => d.includes(e.id))
            .sort((e, n) => {
                let r = O.ZP.getScoreWithoutLoadingLatest(u, e);
                return O.ZP.getScoreWithoutLoadingLatest(u, n) - r;
            })
            .splice(0, k.hz);
        return 0 === e.length
            ? {
                  descriptors: a,
                  commands: o,
                  sectionedCommands: s,
                  loading: l
              }
            : {
                  descriptors: [N.Tm[k.bi.FRECENCY], ...a],
                  commands: e.concat(o),
                  sectionedCommands: [
                      {
                          section: N.Tm[k.bi.FRECENCY],
                          data: e
                      },
                      ...s
                  ],
                  loading: l
              };
    }, [l, i.includeFrecency, d, o, a, s, u]);
}
n.ZP = em;
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
function eA(e, n, r) {
    let i = 'channel' === e.type ? e.channel : void 0,
        a = (0, P.Hs)(i, n.commandTypes),
        o = !1 !== n.applicationCommands,
        s = eg(e, o, r.allowFetch),
        l = ev(o, r.allowFetch),
        u = eb(),
        d = eI();
    return (
        ey(r.applicationId, r.allowFetch),
        c.useMemo(
            () =>
                eC({
                    permissionContext: a,
                    text: n.text,
                    allowApplicationCommands: o,
                    builtIns: n.builtIns,
                    scoreMethod: r.scoreMethod,
                    allowEmptySections: r.allowEmptySections,
                    contextState: s,
                    userState: l,
                    applicationStates: r.allowApplicationState ? u : new Map(),
                    sortOptions: r.sortOptions,
                    singleApplicationId: r.applicationId,
                    installOnDemand: r.installOnDemand
                }),
            [a, n.text, n.builtIns, o, r.scoreMethod, r.allowEmptySections, r.sortOptions, r.allowApplicationState, r.applicationId, r.installOnDemand, s, l, u, d]
        )
    );
}
function eC(e) {
    var n, r, i, a, o, s, l;
    let { permissionContext: u, contextState: c, userState: d, applicationStates: p, text: h, builtIns: _ = L.D.ALLOW, allowApplicationCommands: m = !0, singleApplicationId: g, allowEmptySections: v = !1, scoreMethod: y = L.p.NONE, sortOptions: I = eS, installOnDemand: T = !1 } = e,
        { commandTypes: A } = u,
        C = null == h ? void 0 : h.toLowerCase(),
        R = null == C ? void 0 : C.split(' '),
        D = _ === L.D.ONLY_TEXT,
        x = _ !== L.D.DENY ? (0, N.Kh)(A, !0, D) : [],
        w = [],
        P = {
            permissionContext: u,
            query: C,
            splitQuery: R,
            allowEmptySections: v,
            scoreMethod: y,
            installOnDemand: T
        },
        M = null !== (a = null === (n = c.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {},
        U = null !== (o = null === (r = d.result) || void 0 === r ? void 0 : r.sections) && void 0 !== o ? o : {},
        B = new Set();
    if (m) {
        if (u.hasBaseAccessPermissions)
            for (let e in M) {
                let n = M[e];
                (null == g || n.descriptor.id === g) && B.add(e);
            }
        for (let e in U) {
            let n = U[e];
            (null == g || n.descriptor.id === g) && B.add(e);
        }
    }
    let G = new Map();
    for (let [e, n] of p)
        if (null == g || e === g) {
            let e = null === (s = n.result) || void 0 === s ? void 0 : s.sections;
            if (null != e) for (let n of Object.keys(e)) B.add(n), G.set(n, e[n]);
        }
    for (let e of Array.from(B)) {
        let n, r;
        let i = M[e],
            a = U[e],
            o = G.get(e),
            s = null != i,
            l = null != a;
        if (null != i && null != a) {
            for (let e in ((n = a.descriptor), (r = []), a.commands)) {
                let n = a.commands[e];
                r.push(n);
            }
            for (let e in i.commands)
                if (!(e in a.commands)) {
                    let n = i.commands[e];
                    r.push(n);
                }
        } else null != i ? ((n = i.descriptor), (r = Object.values(i.commands))) : null != a ? ((n = a.descriptor), (r = Object.values(a.commands))) : null != o && ((n = o.descriptor), (r = Object.values(o.commands)));
        f()(null != n, 'Failed to select application descriptor'), f()(null != r, 'Failed to select list of application commands');
        let u = eN(n, r, s, l, P);
        null != u && w.push(u);
    }
    if (
        (I.applications.useFrecency && b.DZ.loadIfNecessary(),
        w.sort((e, n) => {
            if (I.applications.useScore && y === L.p.APPLICATION_ONLY) {
                var r, i, a, o;
                let s = null !== (a = null === (r = e.data[0]) || void 0 === r ? void 0 : r.score) && void 0 !== a ? a : Number.MAX_VALUE,
                    l = null !== (o = null === (i = n.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== o ? o : Number.MAX_VALUE;
                if (s !== l) return s - l;
            }
            if (I.applications.useFrecency) {
                let r = E.Z.getScoreWithoutLoadingLatest(e.section.id),
                    i = E.Z.getScoreWithoutLoadingLatest(n.section.id);
                if (r !== i) return i - r;
            }
            return eB(e.section.name, n.section.name);
        }),
        x.length > 0 || !0 === v)
    ) {
        let e = eN(N.Tm[k.bi.BUILT_IN], x, !0, !0, P);
        null != e && w.push(e);
    }
    let Z = w.flatMap((e) =>
        e.data.map((n) => ({
            ...n,
            section: e.section
        }))
    );
    if (y === L.p.COMMAND_ONLY || y === L.p.COMMAND_OR_APPLICATION) {
        let e = u.context,
            n = S.Z.getGuild(null == u ? void 0 : null === (l = u.context) || void 0 === l ? void 0 : l.guild_id);
        I.commands.useFrecency && b.DZ.loadIfNecessary();
        let r =
            null != e
                ? {
                      channel: e,
                      guild: n
                  }
                : void 0;
        Z.sort((e, n) => {
            if (I.commands.useScore) {
                var i, a;
                let r = null !== (i = e.score) && void 0 !== i ? i : 0,
                    o = null !== (a = n.score) && void 0 !== a ? a : 0;
                if (r !== o) return r - o;
            }
            if (I.commands.useFrecency) {
                let i = O.ZP.getScoreWithoutLoadingLatest(r, e),
                    a = O.ZP.getScoreWithoutLoadingLatest(r, n);
                if (i !== a) return a - i;
            }
            return eB(e.displayName, n.displayName);
        });
    }
    return {
        commands: Z,
        descriptors: w.map((e) => e.section),
        sectionedCommands: w,
        loading: (null == c ? void 0 : c.fetchState.fetching) === !0 || (null == d ? void 0 : d.fetchState.fetching) === !0 || (null != g && (null === (i = p.get(g)) || void 0 === i ? void 0 : i.fetchState.fetching) === !0)
    };
}
function eN(e, n, r, i, a) {
    let o,
        { query: s, splitQuery: l, allowEmptySections: u, scoreMethod: c, permissionContext: d, installOnDemand: f } = a,
        { context: p, userId: h, roleIds: _, isImpersonating: m } = d,
        g = (null == p ? void 0 : p.guild_id) != null ? M.ML(e.permissions, p.guild_id, h, _, m) : null,
        E = (null == p ? void 0 : p.guild_id) != null ? M.ZJ(e.permissions, p, p.guild_id) : null,
        v = [];
    for (let a of n)
        M.Ft(a, d, {
            applicationAllowedForUser: g,
            applicationAllowedForChannel: E,
            commandBotId: e.botId,
            isGuildInstalled: r,
            isUserInstalled: i || f
        }) === M.mF.ALLOWED && v.push(a);
    return 0 !== (o = c !== L.p.NONE && null != s && null != l ? ek(s, l, v, e, c) : v).length || u
        ? ((c === L.p.NONE || c === L.p.APPLICATION_ONLY) && o.sort((e, n) => eB(e.displayName, n.displayName)),
          {
              section: e,
              data: o
          })
        : null;
}
function eR(e) {
    var n;
    return (null == e ? void 0 : e.guild_id) != null || (e.type === U.d4z.DM && (null === (n = A.default.getUser(e.getRecipientId())) || void 0 === n ? void 0 : n.bot) === !0);
}
function eO(e) {
    return !!eD(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter);
}
function eD(e) {
    var n;
    return (null === (n = e.result) || void 0 === n ? void 0 : n.version) !== e.serverVersion;
}
function eL(e) {
    return {
        description: e.description,
        icon: e.icon,
        id: e.id,
        name: e.name,
        bot: e.bot,
        flags: e.flags
    };
}
function ex(e, n) {
    var r, i, a, o, s;
    let l = {
        ...e,
        description: null !== (a = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== a ? a : '',
        dm_permission: e.dm_permission,
        name: null !== (o = e.name_default) && void 0 !== o ? o : e.name,
        options: null !== (s = null === (r = e.options) || void 0 === r ? void 0 : r.map(ew)) && void 0 !== s ? s : [],
        permissions: null != e.permissions ? eM(e.permissions, n) : void 0
    };
    return e.description !== e.description_default && (l.description_localized = e.description), e.name !== e.name_default && (l.name_localized = e.name), l;
}
function ew(e) {
    var n, r, i, a;
    let o = {
        ...e,
        choices: null === (n = e.choices) || void 0 === n ? void 0 : n.map(eP),
        description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
        name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
        options: null === (r = e.options) || void 0 === r ? void 0 : r.map(ew)
    };
    return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o;
}
function eP(e) {
    var n;
    let r = {
        ...e,
        name: null !== (n = e.name_default) && void 0 !== n ? n : e.name
    };
    return e.name !== e.name_default && (r.name_localized = e.name), r;
}
function eM(e, n) {
    let r = [];
    if (
        (null != e.user &&
            r.push({
                type: x.Kw.USER,
                id: n,
                permission: e.user
            }),
        null != e.channels)
    )
        for (let [n, i] of Object.entries(e.channels))
            r.push({
                type: x.Kw.CHANNEL,
                id: n,
                permission: i
            });
    if (null != e.roles)
        for (let [n, i] of Object.entries(e.roles))
            r.push({
                type: x.Kw.ROLE,
                id: n,
                permission: i
            });
    return r;
}
function ek(e, n, r, i, a) {
    let o;
    let s = [];
    if (a === L.p.APPLICATION_ONLY || a === L.p.COMMAND_OR_APPLICATION) {
        let n = i.name.toLocaleLowerCase();
        if (n.startsWith(e)) o = 5;
        else if (n.includes(e)) o = 6;
        else {
            var l, u;
            let n = null === (u = i.application) || void 0 === u ? void 0 : null === (l = u.description) || void 0 === l ? void 0 : l.toLocaleLowerCase();
            (null == n ? void 0 : n.includes(e)) && (o = 8);
        }
    }
    let c = n[0],
        d = n.slice(1).join(' ');
    for (let n of r) {
        let r;
        (a === L.p.COMMAND_ONLY || a === L.p.COMMAND_OR_APPLICATION) && (r = eU(n, e, c, d)),
            (void 0 === r || (void 0 !== o && o < r)) && (r = o),
            void 0 !== r &&
                s.push({
                    ...n,
                    score: r
                });
    }
    return s;
}
function eU(e, n, r, i) {
    var a;
    let o = e.untranslatedName,
        s = e.displayName;
    if (o.startsWith(n) || s.startsWith(n)) return 0;
    if ((o.startsWith(r) && o.split(' ').slice(1).join(' ').startsWith(i)) || (s.startsWith(r) && s.split(' ').slice(1).join(' ').startsWith(i))) return 1;
    if (o.includes(n) || (null == s ? void 0 : s.includes(n))) return 2;
    let l = !1;
    for (let { name: r, serverLocalizedName: i } of null !== (a = e.options) && void 0 !== a ? a : []) {
        if (r.startsWith(n) || ''.concat(o, ' ').concat(r).startsWith(n) || (null != s && ''.concat(s, ' ').concat(r).startsWith(n)) || (null != i && (i.startsWith(n) || ''.concat(o, ' ').concat(i).startsWith(n) || (null != s && ''.concat(s, ' ').concat(i).startsWith(n))))) return 3;
        (r.includes(n) || (null == i ? void 0 : i.includes(n))) && (l = !0);
    }
    if (l) return 4;
    let u = e.untranslatedDescription.toLocaleLowerCase(),
        c = e.displayDescription.toLocaleLowerCase();
    if (u.includes(n) || c.includes(n)) return 7;
}
function eB(e, n) {
    return em.collator.compare(e, n);
}
function eG(e, n) {
    return eB(e, n);
}
!(function (e) {
    (e[(e.COMMAND_NAME_STARTS_WITH = 0)] = 'COMMAND_NAME_STARTS_WITH'), (e[(e.STARTS_WITH_COMMAND_NAME = 1)] = 'STARTS_WITH_COMMAND_NAME'), (e[(e.COMMAND_NAME_CONTAINS = 2)] = 'COMMAND_NAME_CONTAINS'), (e[(e.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3)] = 'STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME'), (e[(e.OPTION_NAME_CONTAINS = 4)] = 'OPTION_NAME_CONTAINS'), (e[(e.SECTION_NAME_STARTS_WITH = 5)] = 'SECTION_NAME_STARTS_WITH'), (e[(e.SECTION_NAME_CONTAINS = 6)] = 'SECTION_NAME_CONTAINS'), (e[(e.COMMAND_DESCRIPTION_CONTAINS = 7)] = 'COMMAND_DESCRIPTION_CONTAINS'), (e[(e.SECTION_DESCRIPTION_CONTAINS = 8)] = 'SECTION_DESCRIPTION_CONTAINS');
})(a || (a = {}));
function eZ(e, n) {
    var r, i, a, o, s, l;
    let u, c;
    if (n === k.bi.BUILT_IN)
        return {
            descriptor: N.Tm[k.bi.BUILT_IN],
            sectionCommands: (0, N.Kh)([g.yU.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0
        };
    let d = em.getContextState(e),
        f = em.getUserState(),
        p = null !== (s = null === (r = d.result) || void 0 === r ? void 0 : r.sections) && void 0 !== s ? s : {},
        h = null !== (l = null === (i = f.result) || void 0 === i ? void 0 : i.sections) && void 0 !== l ? l : {},
        _ = p[n],
        m = h[n],
        E = null === (o = em.getApplicationState(n).result) || void 0 === o ? void 0 : null === (a = o.sections) || void 0 === a ? void 0 : a[n];
    if (null != _ && null != m) {
        for (let e in ((u = m.descriptor), (c = []), m.commands)) {
            let n = m.commands[e];
            c.push(n);
        }
        for (let e in _.commands)
            if (!(e in m.commands)) {
                let n = _.commands[e];
                c.push(n);
            }
    } else null != _ ? ((u = _.descriptor), (c = Object.values(_.commands))) : null != m ? ((u = m.descriptor), (c = Object.values(m.commands))) : null != E && ((u = E.descriptor), (c = Object.values(E.commands)));
    return {
        descriptor: u,
        sectionCommands: c,
        isGuildInstalled: null != _,
        isUserInstalled: null != m
    };
}
