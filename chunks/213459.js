n.d(t, {
    FN: () => X,
    If: () => eM,
    JK: () => eE,
    LD: () => e_,
    PL: () => ep,
    ZP: () => ed,
    em: () => ef,
    un: () => ew,
    v1: () => ey
}),
    n(47120),
    n(653041),
    n(390547),
    n(789020);
var i,
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(259443),
    l = n(442837),
    u = n(570140),
    c = n(749210),
    d = n(911969),
    f = n(822245),
    _ = n(399860),
    p = n(706454),
    h = n(675478),
    m = n(314897),
    g = n(592125),
    E = n(430824),
    v = n(594174),
    y = n(626135),
    I = n(254711),
    T = n(700089),
    b = n(654455),
    S = n(963456),
    A = n(367790),
    N = n(895924),
    C = n(581364),
    R = n(807169),
    O = n(104793),
    D = n(689079),
    x = n(981631);
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
let P = new o.Yd('ApplicationCommandIndexStore'),
    w = Symbol('currentUser'),
    M = Symbol('stale'),
    k = Symbol('current'),
    U = Object.freeze({
        descriptors: [],
        commands: [],
        sectionedCommands: [],
        loading: !0
    }),
    G = Object.freeze({
        serverVersion: k,
        fetchState: { fetching: !1 },
        result: {
            sections: {},
            sectionIdsByBotId: {},
            version: k
        }
    }),
    B = Object.freeze({
        serverVersion: M,
        fetchState: { fetching: !1 }
    }),
    Z = 5000,
    F = {
        sensitivity: 'accent',
        numeric: !0
    },
    V = !1,
    j = [];
function H(e) {
    switch (e.type) {
        case 'guild':
            return e.guildId;
        case 'channel':
            return e.channelId;
        case 'user':
            return w;
        case 'application':
            return e.applicationId;
    }
}
function Y(e, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = H(e),
        a = ec.indices[r];
    return (
        null != a
            ? ('fetchState' in t && a.fetchState.fetching && a.fetchState.abort.abort(),
              (n = {
                  ...a,
                  ...t
              }))
            : i &&
              (n = {
                  serverVersion: M,
                  fetchState: { fetching: !1 },
                  ...t
              }),
        void 0 !== n && ((ec.indices[r] = n), 'application' === e.type && (ec.applicationIndices.set(r, n), (ec.applicationIndicesVersion = ec.applicationIndicesVersion + 1))),
        a
    );
}
function W(e) {
    let t = H(e),
        n = ec.indices[t];
    (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete ec.indices[t];
}
function K() {
    for (let e of Object.values(ec.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    ec.indices = {};
}
function z() {
    for (let e of j) $(e);
    j = [];
}
function q() {
    for (let e of Object.values(ec.indices)) e.serverVersion = M;
    z(), (V = !0);
}
function Q(e) {
    var t;
    let { target: n } = e,
        i = H(n);
    eS(null !== (t = ec.indices[i]) && void 0 !== t ? t : B) && J(n);
}
async function X(e) {
    var t, n;
    let i = H(e),
        r = null !== (t = ec.indices[i]) && void 0 !== t ? t : B;
    return eS(r) ? (await J(e), null !== (n = ec.indices[i]) && void 0 !== n ? n : B) : r;
}
async function J(e) {
    let t = new AbortController();
    Y(
        e,
        {
            fetchState: {
                fetching: !0,
                abort: t
            }
        },
        !0
    ),
        await (0, S.a)(e, t);
}
function $(e) {
    var t, n;
    let { target: i, index: r } = e,
        a = null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == a) return V || j.push(e), !1;
    let s = {},
        o = {},
        l = new Set();
    for (let e of r.applications) {
        if (null == e.bot && null != e.bot_id) {
            o[e.bot_id] = e.id;
            let t = v.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : l.add(e.bot_id);
        } else null != e.bot && (o[e.bot.id] = e.id);
        let t = {
            descriptor: {
                ...(0, C.X0)(eN(e)),
                permissions: null != e.permissions ? (0, _.tk)(eD(e.permissions, a)) : void 0,
                botId: e.bot_id
            },
            commands: {}
        };
        s[e.id] = t;
    }
    for (let e of ('guild' === i.type && l.size > 0 && c.Z.requestMembersById(i.guildId, [...l]),
    (0, C.nG)(
        r.application_commands.map((e) => eC(e, a)),
        !0
    ))) {
        let t = s[e.applicationId];
        if (null == t) {
            P.error('Command has no matching application');
            continue;
        }
        t.commands[e.id] = e;
    }
    let u = null !== (n = r.version) && void 0 !== n ? n : k;
    Y(i, {
        serverVersion: u,
        result: {
            sections: s,
            sectionIdsByBotId: o,
            version: u
        },
        fetchState: { fetching: !1 }
    });
}
function ee(e) {
    let { target: t } = e;
    Y(t, {
        fetchState: {
            fetching: !1,
            retryAfter: Date.now() + Z
        }
    });
}
function et(e) {
    var t;
    let { guildId: n, version: i } = e,
        r = Y(
            {
                type: 'guild',
                guildId: n
            },
            { serverVersion: null != i ? i : M }
        ),
        a = null == r ? void 0 : null === (t = r.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
    if (null != a)
        for (let e in a) {
            let t = g.Z.getDMFromUserId(e);
            null != t &&
                Y(
                    {
                        type: 'channel',
                        channelId: t
                    },
                    { serverVersion: M }
                );
        }
}
function en(e, t) {
    var n;
    let i = H({
            type: 'guild',
            guildId: e
        }),
        r = null === (n = ec.indices[i]) || void 0 === n ? void 0 : n.result;
    if (null == r) return !1;
    let a = !1;
    return (
        t.forEach((e) => {
            let { user: t } = e;
            if (!t.bot) return;
            let n = r.sectionIdsByBotId[t.id];
            if (null == n) return;
            let i = r.sections[n];
            s()(null != i, 'Bot has no matching index section'), s()(null != i.descriptor.application, "Bot's index section has no application info");
            let o = (0, C.X0)({
                ...i.descriptor.application,
                bot: t
            });
            (i.descriptor = {
                ...i.descriptor,
                ...o
            }),
                (a = !0);
        }),
        a
    );
}
function ei(e) {
    let { applicationId: t, channelId: n, guildId: i } = e;
    ec.hasContextStateApplication(t, n, i) &&
        Y(
            null != i
                ? {
                      type: 'guild',
                      guildId: i
                  }
                : {
                      type: 'channel',
                      channelId: n
                  },
            { serverVersion: M }
        ),
        ec.hasUserStateApplication(t) && Y({ type: 'user' }, { serverVersion: M }),
        ec.hasApplicationState(t) &&
            Y(
                {
                    type: 'application',
                    applicationId: t
                },
                { serverVersion: M }
            );
}
function er(e) {
    let { channel: t } = e;
    W({
        type: 'channel',
        channelId: t.id
    });
}
function ea(e) {
    let { guild: t } = e;
    W({
        type: 'guild',
        guildId: t.id
    });
}
function es() {
    Y({ type: 'user' }, { serverVersion: M });
}
function eo(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = en(e.guildId, e.members) || n;
    return n;
}
function el() {
    let e = p.default.locale;
    return (
        e !== ec.oldLocale &&
        (K(),
        (ec.collator = new Intl.Collator(e, {
            sensitivity: 'accent',
            numeric: !0
        })),
        (ec.oldLocale = e),
        !0)
    );
}
class eu extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(p.default),
            this.waitFor(m.default),
            this.syncWith([p.default], () => {
                el();
            });
    }
    getContextState(e) {
        var t, n;
        return 'contextless' !== e.type && eb(e.channel) ? (null !== (n = this.indices[null !== (t = e.channel.guild_id) && void 0 !== t ? t : e.channel.id]) && void 0 !== n ? n : B) : G;
    }
    hasContextStateApplication(e, t, n) {
        var i, r;
        let a = this.indices[null != n ? n : t];
        return e in (null !== (r = null == a ? void 0 : null === (i = a.result) || void 0 === i ? void 0 : i.sections) && void 0 !== r ? r : {});
    }
    getGuildState(e) {
        var t;
        return null == e ? G : null !== (t = this.indices[e]) && void 0 !== t ? t : B;
    }
    getUserState() {
        var e;
        return null !== (e = this.indices[w]) && void 0 !== e ? e : B;
    }
    hasUserStateApplication(e) {
        var t, n;
        let i = this.indices[w];
        return e in (null !== (n = null == i ? void 0 : null === (t = i.result) || void 0 === t ? void 0 : t.sections) && void 0 !== n ? n : {});
    }
    getApplicationState(e) {
        var t;
        return null == e ? G : null !== (t = this.indices[e]) && void 0 !== t ? t : B;
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == v.default.getCurrentUser()) return U;
        let i = 'channel' === e.type ? e.channel : void 0,
            r = this.getContextState(e),
            a = this.getUserState(),
            s = this.getApplicationState(n.applicationId),
            o = this.getApplicationStates(),
            l = (0, R.k)(i, t.commandTypes),
            u = null == i || (null == l ? void 0 : l.hasBaseAccessPermissions) === !0,
            c = !1 !== t.applicationCommands,
            d = !1;
        n.allowFetch &&
            (c &&
                u &&
                null != i &&
                eb(i) &&
                (y.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == r.result,
                    size: Object.keys(ec.indices).length
                }),
                eS(r) &&
                    null != i &&
                    (null != i.guild_id
                        ? (0, S.j)({
                              type: 'guild',
                              guildId: i.guild_id
                          })
                        : (0, S.j)({
                              type: 'channel',
                              channelId: i.id
                          }),
                    (d = !0))),
            eS(a) && ((0, S.j)({ type: 'user' }), (d = !0)),
            eS(s) &&
                null != n.applicationId &&
                ((0, S.j)({
                    type: 'application',
                    applicationId: n.applicationId
                }),
                (d = !0)));
        let f = eI({
            permissionContext: l,
            text: t.text,
            allowApplicationCommands: c,
            builtIns: t.builtIns,
            scoreMethod: n.scoreMethod,
            allowEmptySections: n.allowEmptySections,
            contextState: r,
            userState: a,
            applicationStates: n.allowApplicationState ? o : new Map(),
            sortOptions: n.sortOptions,
            singleApplicationId: n.applicationId,
            installOnDemand: n.installOnDemand
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
        super(...e), L(this, 'indices', {}), L(this, 'applicationIndices', new Map()), L(this, 'applicationIndicesVersion', 0), L(this, 'oldLocale', p.default.locale), L(this, 'collator', new Intl.Collator(p.default.locale, F));
    }
}
L(eu, 'displayName', 'ApplicationCommandIndexStore');
let ec = new eu(u.Z, {
        LOGOUT: K,
        CONNECTION_OPEN: q,
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: Q,
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: $,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: ee,
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: ei,
        CHANNEL_DELETE: er,
        GUILD_DELETE: ea,
        USER_APPLICATION_UPDATE: es,
        USER_APPLICATION_REMOVE: es,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: et,
        GUILD_MEMBERS_CHUNK_BATCH: eo
    }),
    ed = ec;
function ef(e, t, n) {
    let [i, a] = r.useState(!0),
        s = (0, l.cj)([ec], () => ('channel' === e.type ? ec.getContextState(e) : ec.getUserState()));
    return (
        r.useEffect(() => {
            if (i) {
                if ('contextless' === e.type) {
                    n && eS(s) && (0, S.j)({ type: 'user' });
                    return;
                }
                n &&
                    t &&
                    eb(e.channel) &&
                    (y.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(ec.indices).length
                    }),
                    eS(s) &&
                        (null != e.channel.guild_id
                            ? (0, S.j)({
                                  type: 'guild',
                                  guildId: e.channel.guild_id
                              })
                            : (0, S.j)({
                                  type: 'channel',
                                  channelId: e.channel.id
                              }))),
                    a(!1);
            }
        }, [s, n, e, t, i]),
        s
    );
}
function e_(e, t) {
    let [n, i] = r.useState(!0),
        a = (0, l.cj)([ec], () => {
            var t;
            return null !== (t = ec.indices[e]) && void 0 !== t ? t : B;
        });
    return (
        r.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (y.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(ec.indices).length
                    }),
                    eS(a) &&
                        (0, S.j)({
                            type: 'guild',
                            guildId: e
                        })),
                i(!1));
        }, [a, t, e, n]),
        a
    );
}
function ep(e, t) {
    let [n, i] = r.useState(!0),
        a = (0, l.cj)([ec], () => ec.getUserState());
    return (
        r.useEffect(() => {
            n && (t && eS(a) && e && (0, S.j)({ type: 'user' }), i(!1));
        }, [a, t, e, n]),
        a
    );
}
function eh(e, t) {
    let [n, i] = r.useState(!0),
        a = (0, l.e7)([ec], () => ec.getApplicationState(e));
    r.useEffect(() => {
        n &&
            (t &&
                eS(a) &&
                null != e &&
                (0, S.j)({
                    type: 'application',
                    applicationId: e
                }),
            i(!1));
    }, [t, e, a, n]);
}
function em() {
    return (0, l.e7)([ec], () => ec.getApplicationStates());
}
function eg() {
    return (0, l.e7)([ec], () => ec.applicationIndicesVersion);
}
function eE(e, t, n, i) {
    let { descriptors: a, commands: s, sectionedCommands: o, loading: l } = ey(e, n, i),
        u = r.useMemo(
            () =>
                'channel' === e.type
                    ? {
                          channel: e.channel,
                          guild: t
                      }
                    : void 0,
            [e, t]
        ),
        c = (0, T.R)(u);
    return r.useMemo(() => {
        if (!i.includeFrecency || 0 === c.length)
            return {
                descriptors: a,
                commands: s,
                sectionedCommands: o,
                loading: l
            };
        let e = s
            .filter((e) => c.includes(e.id))
            .sort((e, t) => {
                let n = b.ZP.getScoreWithoutLoadingLatest(u, e);
                return b.ZP.getScoreWithoutLoadingLatest(u, t) - n;
            })
            .splice(0, D.hz);
        return 0 === e.length
            ? {
                  descriptors: a,
                  commands: s,
                  sectionedCommands: o,
                  loading: l
              }
            : {
                  descriptors: [I.Tm[D.bi.FRECENCY], ...a],
                  commands: e.concat(s),
                  sectionedCommands: [
                      {
                          section: I.Tm[D.bi.FRECENCY],
                          data: e
                      },
                      ...o
                  ],
                  loading: l
              };
    }, [l, i.includeFrecency, c, s, a, o, u]);
}
let ev = Object.freeze({
    applications: {
        useFrecency: !1,
        useScore: !1
    },
    commands: {
        useFrecency: !0,
        useScore: !0
    }
});
function ey(e, t, n) {
    let i = 'channel' === e.type ? e.channel : void 0,
        a = (0, R.Hs)(i, t.commandTypes),
        s = !1 !== t.applicationCommands,
        o = ef(e, s, n.allowFetch),
        l = ep(s, n.allowFetch),
        u = em(),
        c = eg();
    return (
        eh(n.applicationId, n.allowFetch),
        r.useMemo(
            () =>
                eI({
                    permissionContext: a,
                    text: t.text,
                    allowApplicationCommands: s,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: o,
                    userState: l,
                    applicationStates: n.allowApplicationState ? u : new Map(),
                    sortOptions: n.sortOptions,
                    singleApplicationId: n.applicationId,
                    installOnDemand: n.installOnDemand
                }),
            [a, t.text, t.builtIns, s, n.scoreMethod, n.allowEmptySections, n.sortOptions, n.allowApplicationState, n.applicationId, n.installOnDemand, o, l, u, c]
        )
    );
}
function eI(e) {
    var t, n, i, r, a, o, l;
    let { permissionContext: u, contextState: c, userState: d, applicationStates: _, text: p, builtIns: m = A.D.ALLOW, allowApplicationCommands: g = !0, singleApplicationId: v, allowEmptySections: y = !1, scoreMethod: T = A.p.NONE, sortOptions: S = ev, installOnDemand: N = !1 } = e,
        { commandTypes: C } = u,
        R = null == p ? void 0 : p.toLowerCase(),
        O = null == R ? void 0 : R.split(' '),
        x = m === A.D.ONLY_TEXT,
        L = m !== A.D.DENY ? (0, I.Kh)(C, !0, x) : [],
        P = [],
        w = {
            permissionContext: u,
            query: R,
            splitQuery: O,
            allowEmptySections: y,
            scoreMethod: T,
            installOnDemand: N
        },
        M = null !== (r = null === (t = c.result) || void 0 === t ? void 0 : t.sections) && void 0 !== r ? r : {},
        k = null !== (a = null === (n = d.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {},
        U = new Set();
    if (g) {
        if (u.hasBaseAccessPermissions)
            for (let e in M) {
                let t = M[e];
                (null == v || t.descriptor.id === v) && U.add(e);
            }
        for (let e in k) {
            let t = k[e];
            (null == v || t.descriptor.id === v) && U.add(e);
        }
    }
    let G = new Map();
    for (let [e, t] of _)
        if (null == v || e === v) {
            let e = null === (o = t.result) || void 0 === o ? void 0 : o.sections;
            if (null != e) for (let t of Object.keys(e)) U.add(t), G.set(t, e[t]);
        }
    for (let e of Array.from(U)) {
        let t, n;
        let i = M[e],
            r = k[e],
            a = G.get(e),
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
        } else null != i ? ((t = i.descriptor), (n = Object.values(i.commands))) : null != r ? ((t = r.descriptor), (n = Object.values(r.commands))) : null != a && ((t = a.descriptor), (n = Object.values(a.commands)));
        s()(null != t, 'Failed to select application descriptor'), s()(null != n, 'Failed to select list of application commands');
        let u = eT(t, n, o, l, w);
        null != u && P.push(u);
    }
    if (
        (S.applications.useFrecency && h.DZ.loadIfNecessary(),
        P.sort((e, t) => {
            if (S.applications.useScore && T === A.p.APPLICATION_ONLY) {
                var n, i, r, a;
                let s = null !== (r = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== r ? r : Number.MAX_VALUE,
                    o = null !== (a = null === (i = t.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== a ? a : Number.MAX_VALUE;
                if (s !== o) return s - o;
            }
            if (S.applications.useFrecency) {
                let n = f.Z.getScoreWithoutLoadingLatest(e.section.id),
                    i = f.Z.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== i) return i - n;
            }
            return eP(e.section.name, t.section.name);
        }),
        L.length > 0 || !0 === y)
    ) {
        let e = eT(I.Tm[D.bi.BUILT_IN], L, !0, !0, w);
        null != e && P.push(e);
    }
    let B = P.flatMap((e) =>
        e.data.map((t) => ({
            ...t,
            section: e.section
        }))
    );
    if (T === A.p.COMMAND_ONLY || T === A.p.COMMAND_OR_APPLICATION) {
        let e = u.context,
            t = E.Z.getGuild(null == u ? void 0 : null === (l = u.context) || void 0 === l ? void 0 : l.guild_id);
        S.commands.useFrecency && h.DZ.loadIfNecessary();
        let n =
            null != e
                ? {
                      channel: e,
                      guild: t
                  }
                : void 0;
        B.sort((e, t) => {
            if (S.commands.useScore) {
                var i, r;
                let n = null !== (i = e.score) && void 0 !== i ? i : 0,
                    a = null !== (r = t.score) && void 0 !== r ? r : 0;
                if (n !== a) return n - a;
            }
            if (S.commands.useFrecency) {
                let i = b.ZP.getScoreWithoutLoadingLatest(n, e),
                    r = b.ZP.getScoreWithoutLoadingLatest(n, t);
                if (i !== r) return r - i;
            }
            return eP(e.displayName, t.displayName);
        });
    }
    return {
        commands: B,
        descriptors: P.map((e) => e.section),
        sectionedCommands: P,
        loading: (null == c ? void 0 : c.fetchState.fetching) === !0 || (null == d ? void 0 : d.fetchState.fetching) === !0 || (null != v && (null === (i = _.get(v)) || void 0 === i ? void 0 : i.fetchState.fetching) === !0)
    };
}
function eT(e, t, n, i, r) {
    let a,
        { query: s, splitQuery: o, allowEmptySections: l, scoreMethod: u, permissionContext: c, installOnDemand: d } = r,
        { context: f, userId: _, roleIds: p, isImpersonating: h } = c,
        m = (null == f ? void 0 : f.guild_id) != null ? O.ML(e.permissions, f.guild_id, _, p, h) : null,
        g = (null == f ? void 0 : f.guild_id) != null ? O.ZJ(e.permissions, f, f.guild_id) : null,
        E = [];
    for (let r of t)
        O.Ft(r, c, {
            applicationAllowedForUser: m,
            applicationAllowedForChannel: g,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: i || d
        }) === O.mF.ALLOWED && E.push(r);
    return 0 !== (a = u !== A.p.NONE && null != s && null != o ? ex(s, o, E, e, u) : E).length || l
        ? ((u === A.p.NONE || u === A.p.APPLICATION_ONLY) && a.sort((e, t) => eP(e.displayName, t.displayName)),
          {
              section: e,
              data: a
          })
        : null;
}
function eb(e) {
    var t;
    return (null == e ? void 0 : e.guild_id) != null || (e.type === x.d4z.DM && (null === (t = v.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0);
}
function eS(e) {
    return !!eA(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter);
}
function eA(e) {
    var t;
    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion;
}
function eN(e) {
    return {
        description: e.description,
        icon: e.icon,
        id: e.id,
        name: e.name,
        bot: e.bot,
        flags: e.flags
    };
}
function eC(e, t) {
    var n, i, r, a, s;
    let o = {
        ...e,
        description: null !== (r = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== r ? r : '',
        dm_permission: e.dm_permission,
        name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
        options: null !== (s = null === (n = e.options) || void 0 === n ? void 0 : n.map(eR)) && void 0 !== s ? s : [],
        permissions: null != e.permissions ? eD(e.permissions, t) : void 0
    };
    return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o;
}
function eR(e) {
    var t, n, i, r;
    let a = {
        ...e,
        choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(eO),
        description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
        name: null !== (r = e.name_default) && void 0 !== r ? r : e.name,
        options: null === (n = e.options) || void 0 === n ? void 0 : n.map(eR)
    };
    return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a;
}
function eO(e) {
    var t;
    let n = {
        ...e,
        name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
    };
    return e.name !== e.name_default && (n.name_localized = e.name), n;
}
function eD(e, t) {
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
        for (let [t, i] of Object.entries(e.channels))
            n.push({
                type: N.Kw.CHANNEL,
                id: t,
                permission: i
            });
    if (null != e.roles)
        for (let [t, i] of Object.entries(e.roles))
            n.push({
                type: N.Kw.ROLE,
                id: t,
                permission: i
            });
    return n;
}
function ex(e, t, n, i, r) {
    let a;
    let s = [];
    if (r === A.p.APPLICATION_ONLY || r === A.p.COMMAND_OR_APPLICATION) {
        let t = i.name.toLocaleLowerCase();
        if (t.startsWith(e)) a = 5;
        else if (t.includes(e)) a = 6;
        else {
            var o, l;
            let t = null === (l = i.application) || void 0 === l ? void 0 : null === (o = l.description) || void 0 === o ? void 0 : o.toLocaleLowerCase();
            (null == t ? void 0 : t.includes(e)) && (a = 8);
        }
    }
    let u = t[0],
        c = t.slice(1).join(' ');
    for (let t of n) {
        let n;
        (r === A.p.COMMAND_ONLY || r === A.p.COMMAND_OR_APPLICATION) && (n = eL(t, e, u, c)),
            (void 0 === n || (void 0 !== a && a < n)) && (n = a),
            void 0 !== n &&
                s.push({
                    ...t,
                    score: n
                });
    }
    return s;
}
function eL(e, t, n, i) {
    var r;
    let a = e.untranslatedName,
        s = e.displayName;
    if (a.startsWith(t) || s.startsWith(t)) return 0;
    if ((a.startsWith(n) && a.split(' ').slice(1).join(' ').startsWith(i)) || (s.startsWith(n) && s.split(' ').slice(1).join(' ').startsWith(i))) return 1;
    if (a.includes(t) || (null == s ? void 0 : s.includes(t))) return 2;
    let o = !1;
    for (let { name: n, serverLocalizedName: i } of null !== (r = e.options) && void 0 !== r ? r : []) {
        if (n.startsWith(t) || ''.concat(a, ' ').concat(n).startsWith(t) || (null != s && ''.concat(s, ' ').concat(n).startsWith(t)) || (null != i && (i.startsWith(t) || ''.concat(a, ' ').concat(i).startsWith(t) || (null != s && ''.concat(s, ' ').concat(i).startsWith(t))))) return 3;
        (n.includes(t) || (null == i ? void 0 : i.includes(t))) && (o = !0);
    }
    if (o) return 4;
    let l = e.untranslatedDescription.toLocaleLowerCase(),
        u = e.displayDescription.toLocaleLowerCase();
    if (l.includes(t) || u.includes(t)) return 7;
}
function eP(e, t) {
    return ec.collator.compare(e, t);
}
function ew(e, t) {
    return eP(e, t);
}
function eM(e, t) {
    var n, i, r, a, s, o;
    let l, u;
    if (t === D.bi.BUILT_IN)
        return {
            descriptor: I.Tm[D.bi.BUILT_IN],
            sectionCommands: (0, I.Kh)([d.yU.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0
        };
    let c = ec.getContextState(e),
        f = ec.getUserState(),
        _ = null !== (s = null === (n = c.result) || void 0 === n ? void 0 : n.sections) && void 0 !== s ? s : {},
        p = null !== (o = null === (i = f.result) || void 0 === i ? void 0 : i.sections) && void 0 !== o ? o : {},
        h = _[t],
        m = p[t],
        g = null === (a = ec.getApplicationState(t).result) || void 0 === a ? void 0 : null === (r = a.sections) || void 0 === r ? void 0 : r[t];
    if (null != h && null != m) {
        for (let e in ((l = m.descriptor), (u = []), m.commands)) {
            let t = m.commands[e];
            u.push(t);
        }
        for (let e in h.commands)
            if (!(e in m.commands)) {
                let t = h.commands[e];
                u.push(t);
            }
    } else null != h ? ((l = h.descriptor), (u = Object.values(h.commands))) : null != m ? ((l = m.descriptor), (u = Object.values(m.commands))) : null != g && ((l = g.descriptor), (u = Object.values(g.commands)));
    return {
        descriptor: l,
        sectionCommands: u,
        isGuildInstalled: null != h,
        isUserInstalled: null != m
    };
}
