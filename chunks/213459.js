r.d(n, {
    FN: function () {
        return er;
    },
    If: function () {
        return eZ;
    },
    JK: function () {
        return ey;
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
    s = r(47120);
var o = r(653041);
var l = r(390547);
var u = r(789020);
var c = r(192379),
    d = r(512722),
    f = r.n(d),
    _ = r(259443),
    h = r(442837),
    p = r(570140),
    m = r(749210),
    g = r(911969),
    E = r(822245),
    v = r(399860),
    I = r(706454),
    T = r(675478),
    b = r(314897),
    y = r(592125),
    S = r(430824),
    A = r(594174),
    N = r(626135),
    C = r(254711),
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
let G = new _.Yd('ApplicationCommandIndexStore'),
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
        s = em.indices[a];
    return (
        null != s
            ? ('fetchState' in n && s.fetchState.fetching && s.fetchState.abort.abort(),
              (r = {
                  ...s,
                  ...n
              }))
            : i &&
              (r = {
                  serverVersion: F,
                  fetchState: { fetching: !1 },
                  ...n
              }),
        void 0 !== r && ((em.indices[a] = r), 'application' === e.type && (em.applicationIndices.set(a, r), (em.applicationIndicesVersion = em.applicationIndicesVersion + 1))),
        s
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
        s = null === (n = A.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == s) return !z && q.push(e), !1;
    let o = {},
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
                permissions: null != e.permissions ? (0, v.tk)(eM(e.permissions, s)) : void 0,
                botId: e.bot_id
            },
            commands: {}
        };
        o[e.id] = n;
    }
    for (let e of ('guild' === i.type && u.size > 0 && m.Z.requestMembersById(i.guildId, [...u]),
    (0, w.nG)(
        a.application_commands.map((e) => ex(e, s)),
        !0
    ))) {
        let n = o[e.applicationId];
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
            sections: o,
            sectionIdsByBotId: l,
            version: c
        },
        fetchState: { fetching: !1 }
    });
}
function es(e) {
    let { target: n } = e;
    X(n, {
        fetchState: {
            fetching: !1,
            retryAfter: Date.now() + W
        }
    });
}
function eo(e) {
    var n;
    let { guildId: r, version: i } = e,
        a = X(
            {
                type: 'guild',
                guildId: r
            },
            { serverVersion: null != i ? i : F }
        ),
        s = null == a ? void 0 : null === (n = a.result) || void 0 === n ? void 0 : n.sectionIdsByBotId;
    if (null != s)
        for (let e in s) {
            let n = y.Z.getDMFromUserId(e);
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
    let s = !1;
    return (
        n.forEach((e) => {
            let { user: n } = e;
            if (!n.bot) return;
            let r = a.sectionIdsByBotId[n.id];
            if (null == r) return;
            let i = a.sections[r];
            f()(null != i, 'Bot has no matching index section'), f()(null != i.descriptor.application, "Bot's index section has no application info");
            let o = (0, w.X0)({
                ...i.descriptor.application,
                bot: n
            });
            (i.descriptor = {
                ...i.descriptor,
                ...o
            }),
                (s = !0);
        }),
        s
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
function e_(e) {
    let { chunks: n } = e,
        r = !1;
    for (let e of n) r = el(e.guildId, e.members) || r;
    return r;
}
function eh() {
    let e = I.default.locale;
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
class ep extends (i = h.ZP.Store) {
    initialize() {
        this.waitFor(I.default),
            this.waitFor(b.default),
            this.syncWith([I.default], () => {
                eh();
            });
    }
    getContextState(e) {
        var n, r;
        return null != e && eR(e) ? (null !== (r = this.indices[null !== (n = e.guild_id) && void 0 !== n ? n : e.id]) && void 0 !== r ? r : Y) : H;
    }
    hasContextStateApplication(e, n, r) {
        var i, a;
        let s = this.indices[null != r ? r : n];
        return e in (null !== (a = null == s ? void 0 : null === (i = s.result) || void 0 === i ? void 0 : i.sections) && void 0 !== a ? a : {});
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
        let i = this.getContextState(e),
            a = this.getUserState(),
            s = this.getApplicationState(r.applicationId),
            o = this.getApplicationStates(),
            l = (0, P.k)(e, n.commandTypes),
            u = null == e || (null == l ? void 0 : l.hasBaseAccessPermissions) === !0,
            c = !1 !== n.applicationCommands,
            d = !1;
        r.allowFetch &&
            (c &&
                u &&
                null != e &&
                eR(e) &&
                (N.default.track(U.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == i.result,
                    size: Object.keys(em.indices).length
                }),
                eO(i) &&
                    null != e &&
                    (null != e.guild_id
                        ? (0, D.j)({
                              type: 'guild',
                              guildId: e.guild_id
                          })
                        : (0, D.j)({
                              type: 'channel',
                              channelId: e.id
                          }),
                    (d = !0))),
            eO(a) && ((0, D.j)({ type: 'user' }), (d = !0)),
            eO(s) &&
                null != r.applicationId &&
                ((0, D.j)({
                    type: 'application',
                    applicationId: r.applicationId
                }),
                (d = !0)));
        let f = eN({
            permissionContext: l,
            text: n.text,
            allowApplicationCommands: c,
            builtIns: n.builtIns,
            scoreMethod: r.scoreMethod,
            allowEmptySections: r.allowEmptySections,
            contextState: i,
            userState: a,
            applicationStates: r.allowApplicationState ? o : new Map(),
            sortOptions: r.sortOptions,
            singleApplicationId: r.applicationId,
            installOnDemand: r.installOnDemand
        });
        return (f.loading = f.loading || d), f;
    }
    queryInstallOnDemandApp(e, n) {
        let r = y.Z.getChannel(n);
        null != r &&
            this.query(
                r,
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
        super(...e), B(this, 'indices', {}), B(this, 'applicationIndices', new Map()), B(this, 'applicationIndicesVersion', 0), B(this, 'oldLocale', I.default.locale), B(this, 'collator', new Intl.Collator(I.default.locale, K));
    }
}
B(ep, 'displayName', 'ApplicationCommandIndexStore');
let em = new ep(p.Z, {
    LOGOUT: $,
    CONNECTION_OPEN: et,
    APPLICATION_COMMAND_INDEX_FETCH_REQUEST: en,
    APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: ea,
    APPLICATION_COMMAND_INDEX_FETCH_FAILURE: es,
    APPLICATION_COMMAND_EXECUTE_BAD_VERSION: eu,
    CHANNEL_DELETE: ec,
    GUILD_DELETE: ed,
    USER_APPLICATION_UPDATE: ef,
    USER_APPLICATION_REMOVE: ef,
    GUILD_APPLICATION_COMMAND_INDEX_UPDATE: eo,
    GUILD_MEMBERS_CHUNK_BATCH: e_
});
function eg(e, n, r) {
    let [i, a] = c.useState(!0),
        s = (0, h.cj)([em], () => (null != e ? em.getContextState(e) : em.getUserState()));
    return (
        c.useEffect(() => {
            if (i) {
                if (null == e) {
                    r && eO(s) && (0, D.j)({ type: 'user' });
                    return;
                }
                r &&
                    n &&
                    eR(e) &&
                    (N.default.track(U.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(em.indices).length
                    }),
                    eO(s) &&
                        (null != e.guild_id
                            ? (0, D.j)({
                                  type: 'guild',
                                  guildId: e.guild_id
                              })
                            : (0, D.j)({
                                  type: 'channel',
                                  channelId: e.id
                              }))),
                    a(!1);
            }
        }, [s, r, e, n, i]),
        s
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
                    (N.default.track(U.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
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
function eI(e, n) {
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
function eT() {
    return (0, h.e7)([em], () => em.getApplicationStates());
}
function eb() {
    return (0, h.e7)([em], () => em.applicationIndicesVersion);
}
function ey(e, n, r, i) {
    let { descriptors: a, commands: s, sectionedCommands: o, loading: l } = eA(e, r, i),
        u = c.useMemo(
            () =>
                null != e
                    ? {
                          channel: e,
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
                commands: s,
                sectionedCommands: o,
                loading: l
            };
        let e = s
            .filter((e) => d.includes(e.id))
            .sort((e, n) => {
                let r = O.ZP.getScoreWithoutLoadingLatest(u, e);
                return O.ZP.getScoreWithoutLoadingLatest(u, n) - r;
            })
            .splice(0, k.hz);
        return 0 === e.length
            ? {
                  descriptors: a,
                  commands: s,
                  sectionedCommands: o,
                  loading: l
              }
            : {
                  descriptors: [C.Tm[k.bi.FRECENCY], ...a],
                  commands: e.concat(s),
                  sectionedCommands: [
                      {
                          section: C.Tm[k.bi.FRECENCY],
                          data: e
                      },
                      ...o
                  ],
                  loading: l
              };
    }, [l, i.includeFrecency, d, s, a, o, u]);
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
    let i = (0, P.Hs)(e, n.commandTypes),
        a = !1 !== n.applicationCommands,
        s = eg(e, a, r.allowFetch),
        o = ev(a, r.allowFetch),
        l = eT(),
        u = eb();
    return (
        eI(r.applicationId, r.allowFetch),
        c.useMemo(
            () =>
                eN({
                    permissionContext: i,
                    text: n.text,
                    allowApplicationCommands: a,
                    builtIns: n.builtIns,
                    scoreMethod: r.scoreMethod,
                    allowEmptySections: r.allowEmptySections,
                    contextState: s,
                    userState: o,
                    applicationStates: r.allowApplicationState ? l : new Map(),
                    sortOptions: r.sortOptions,
                    singleApplicationId: r.applicationId,
                    installOnDemand: r.installOnDemand
                }),
            [i, n.text, n.builtIns, a, r.scoreMethod, r.allowEmptySections, r.sortOptions, r.allowApplicationState, r.applicationId, r.installOnDemand, s, o, l, u]
        )
    );
}
function eN(e) {
    var n, r, i, a, s, o, l;
    let { permissionContext: u, contextState: c, userState: d, applicationStates: _, text: h, builtIns: p = L.D.ALLOW, allowApplicationCommands: m = !0, singleApplicationId: g, allowEmptySections: v = !1, scoreMethod: I = L.p.NONE, sortOptions: b = eS, installOnDemand: y = !1 } = e,
        { commandTypes: A } = u,
        N = null == h ? void 0 : h.toLowerCase(),
        R = null == N ? void 0 : N.split(' '),
        D = p === L.D.ONLY_TEXT,
        x = p !== L.D.DENY ? (0, C.Kh)(A, !0, D) : [],
        w = [],
        P = {
            permissionContext: u,
            query: N,
            splitQuery: R,
            allowEmptySections: v,
            scoreMethod: I,
            installOnDemand: y
        },
        M = null !== (a = null === (n = c.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {},
        U = null !== (s = null === (r = d.result) || void 0 === r ? void 0 : r.sections) && void 0 !== s ? s : {},
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
    for (let [e, n] of _)
        if (null == g || e === g) {
            let e = null === (o = n.result) || void 0 === o ? void 0 : o.sections;
            if (null != e) for (let n of Object.keys(e)) B.add(n), G.set(n, e[n]);
        }
    for (let e of Array.from(B)) {
        let n, r;
        let i = M[e],
            a = U[e],
            s = G.get(e),
            o = null != i,
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
        } else null != i ? ((n = i.descriptor), (r = Object.values(i.commands))) : null != a ? ((n = a.descriptor), (r = Object.values(a.commands))) : null != s && ((n = s.descriptor), (r = Object.values(s.commands)));
        f()(null != n, 'Failed to select application descriptor'), f()(null != r, 'Failed to select list of application commands');
        let u = eC(n, r, o, l, P);
        null != u && w.push(u);
    }
    if (
        (b.applications.useFrecency && T.DZ.loadIfNecessary(),
        w.sort((e, n) => {
            if (b.applications.useScore && I === L.p.APPLICATION_ONLY) {
                var r, i, a, s;
                let o = null !== (a = null === (r = e.data[0]) || void 0 === r ? void 0 : r.score) && void 0 !== a ? a : Number.MAX_VALUE,
                    l = null !== (s = null === (i = n.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== s ? s : Number.MAX_VALUE;
                if (o !== l) return o - l;
            }
            if (b.applications.useFrecency) {
                let r = E.Z.getScoreWithoutLoadingLatest(e.section.id),
                    i = E.Z.getScoreWithoutLoadingLatest(n.section.id);
                if (r !== i) return i - r;
            }
            return eB(e.section.name, n.section.name);
        }),
        x.length > 0 || !0 === v)
    ) {
        let e = eC(C.Tm[k.bi.BUILT_IN], x, !0, !0, P);
        null != e && w.push(e);
    }
    let Z = w.flatMap((e) =>
        e.data.map((n) => ({
            ...n,
            section: e.section
        }))
    );
    if (I === L.p.COMMAND_ONLY || I === L.p.COMMAND_OR_APPLICATION) {
        let e = u.context,
            n = S.Z.getGuild(null == u ? void 0 : null === (l = u.context) || void 0 === l ? void 0 : l.guild_id);
        b.commands.useFrecency && T.DZ.loadIfNecessary();
        let r =
            null != e
                ? {
                      channel: e,
                      guild: n
                  }
                : void 0;
        Z.sort((e, n) => {
            if (b.commands.useScore) {
                var i, a;
                let r = null !== (i = e.score) && void 0 !== i ? i : 0,
                    s = null !== (a = n.score) && void 0 !== a ? a : 0;
                if (r !== s) return r - s;
            }
            if (b.commands.useFrecency) {
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
        loading: (null == c ? void 0 : c.fetchState.fetching) === !0 || (null == d ? void 0 : d.fetchState.fetching) === !0 || (null != g && (null === (i = _.get(g)) || void 0 === i ? void 0 : i.fetchState.fetching) === !0)
    };
}
function eC(e, n, r, i, a) {
    let s,
        { query: o, splitQuery: l, allowEmptySections: u, scoreMethod: c, permissionContext: d, installOnDemand: f } = a,
        { context: _, userId: h, roleIds: p, isImpersonating: m } = d,
        g = (null == _ ? void 0 : _.guild_id) != null ? M.ML(e.permissions, _.guild_id, h, p, m) : null,
        E = (null == _ ? void 0 : _.guild_id) != null ? M.ZJ(e.permissions, _, _.guild_id) : null,
        v = [];
    for (let a of n)
        M.Ft(a, d, {
            applicationAllowedForUser: g,
            applicationAllowedForChannel: E,
            commandBotId: e.botId,
            isGuildInstalled: r,
            isUserInstalled: i || f
        }) === M.mF.ALLOWED && v.push(a);
    return 0 !== (s = c !== L.p.NONE && null != o && null != l ? ek(o, l, v, e, c) : v).length || u
        ? ((c === L.p.NONE || c === L.p.APPLICATION_ONLY) && s.sort((e, n) => eB(e.displayName, n.displayName)),
          {
              section: e,
              data: s
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
    var r, i, a, s, o;
    let l = {
        ...e,
        description: null !== (a = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== a ? a : '',
        dm_permission: e.dm_permission,
        name: null !== (s = e.name_default) && void 0 !== s ? s : e.name,
        options: null !== (o = null === (r = e.options) || void 0 === r ? void 0 : r.map(ew)) && void 0 !== o ? o : [],
        permissions: null != e.permissions ? eM(e.permissions, n) : void 0
    };
    return e.description !== e.description_default && (l.description_localized = e.description), e.name !== e.name_default && (l.name_localized = e.name), l;
}
function ew(e) {
    var n, r, i, a;
    let s = {
        ...e,
        choices: null === (n = e.choices) || void 0 === n ? void 0 : n.map(eP),
        description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
        name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
        options: null === (r = e.options) || void 0 === r ? void 0 : r.map(ew)
    };
    return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s;
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
    let s;
    let o = [];
    if (a === L.p.APPLICATION_ONLY || a === L.p.COMMAND_OR_APPLICATION) {
        let n = i.name.toLocaleLowerCase();
        if (n.startsWith(e)) s = 5;
        else if (n.includes(e)) s = 6;
        else {
            var l, u;
            let n = null === (u = i.application) || void 0 === u ? void 0 : null === (l = u.description) || void 0 === l ? void 0 : l.toLocaleLowerCase();
            (null == n ? void 0 : n.includes(e)) && (s = 8);
        }
    }
    let c = n[0],
        d = n.slice(1).join(' ');
    for (let n of r) {
        let r;
        (a === L.p.COMMAND_ONLY || a === L.p.COMMAND_OR_APPLICATION) && (r = eU(n, e, c, d)),
            (void 0 === r || (void 0 !== s && s < r)) && (r = s),
            void 0 !== r &&
                o.push({
                    ...n,
                    score: r
                });
    }
    return o;
}
function eU(e, n, r, i) {
    var a;
    let s = e.untranslatedName,
        o = e.displayName;
    if (s.startsWith(n) || o.startsWith(n)) return 0;
    if ((s.startsWith(r) && s.split(' ').slice(1).join(' ').startsWith(i)) || (o.startsWith(r) && o.split(' ').slice(1).join(' ').startsWith(i))) return 1;
    if (s.includes(n) || (null == o ? void 0 : o.includes(n))) return 2;
    let l = !1;
    for (let { name: r, serverLocalizedName: i } of null !== (a = e.options) && void 0 !== a ? a : []) {
        if (r.startsWith(n) || ''.concat(s, ' ').concat(r).startsWith(n) || (null != o && ''.concat(o, ' ').concat(r).startsWith(n)) || (null != i && (i.startsWith(n) || ''.concat(s, ' ').concat(i).startsWith(n) || (null != o && ''.concat(o, ' ').concat(i).startsWith(n))))) return 3;
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
function eZ(e, n) {
    var r, i, a, s, o, l;
    let u, c;
    if (n === k.bi.BUILT_IN)
        return {
            descriptor: C.Tm[k.bi.BUILT_IN],
            sectionCommands: (0, C.Kh)([g.yU.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0
        };
    let d = em.getContextState(e),
        f = em.getUserState(),
        _ = null !== (o = null === (r = d.result) || void 0 === r ? void 0 : r.sections) && void 0 !== o ? o : {},
        h = null !== (l = null === (i = f.result) || void 0 === i ? void 0 : i.sections) && void 0 !== l ? l : {},
        p = _[n],
        m = h[n],
        E = null === (s = em.getApplicationState(n).result) || void 0 === s ? void 0 : null === (a = s.sections) || void 0 === a ? void 0 : a[n];
    if (null != p && null != m) {
        for (let e in ((u = m.descriptor), (c = []), m.commands)) {
            let n = m.commands[e];
            c.push(n);
        }
        for (let e in p.commands)
            if (!(e in m.commands)) {
                let n = p.commands[e];
                c.push(n);
            }
    } else null != p ? ((u = p.descriptor), (c = Object.values(p.commands))) : null != m ? ((u = m.descriptor), (c = Object.values(m.commands))) : null != E && ((u = E.descriptor), (c = Object.values(E.commands)));
    return {
        descriptor: u,
        sectionCommands: c,
        isGuildInstalled: null != p,
        isUserInstalled: null != m
    };
}
!(function (e) {
    (e[(e.COMMAND_NAME_STARTS_WITH = 0)] = 'COMMAND_NAME_STARTS_WITH'), (e[(e.STARTS_WITH_COMMAND_NAME = 1)] = 'STARTS_WITH_COMMAND_NAME'), (e[(e.COMMAND_NAME_CONTAINS = 2)] = 'COMMAND_NAME_CONTAINS'), (e[(e.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3)] = 'STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME'), (e[(e.OPTION_NAME_CONTAINS = 4)] = 'OPTION_NAME_CONTAINS'), (e[(e.SECTION_NAME_STARTS_WITH = 5)] = 'SECTION_NAME_STARTS_WITH'), (e[(e.SECTION_NAME_CONTAINS = 6)] = 'SECTION_NAME_CONTAINS'), (e[(e.COMMAND_DESCRIPTION_CONTAINS = 7)] = 'COMMAND_DESCRIPTION_CONTAINS'), (e[(e.SECTION_DESCRIPTION_CONTAINS = 8)] = 'SECTION_DESCRIPTION_CONTAINS');
})(a || (a = {}));
