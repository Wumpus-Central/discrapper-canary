n.d(t, {
    FN: () => en,
    If: () => eB,
    JK: () => eI,
    LD: () => eE,
    PL: () => ev,
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
    f = n(822245),
    _ = n(399860),
    p = n(706454),
    h = n(675478),
    m = n(314897),
    g = n(592125),
    E = n(430824),
    v = n(594174),
    b = n(626135),
    y = n(226351),
    O = n(254711),
    I = n(700089),
    S = n(654455),
    T = n(963456),
    N = n(367790),
    A = n(895924),
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
        o = eh.indices[i];
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
        void 0 !== n && ((eh.indices[i] = n), 'application' === e.type && (eh.applicationIndices.set(i, n), (eh.applicationIndicesVersion = eh.applicationIndicesVersion + 1))),
        o
    );
}
function Q(e) {
    let t = z(e),
        n = eh.indices[t];
    (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete eh.indices[t];
}
function X() {
    for (let e of Object.values(eh.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    eh.indices = {};
}
function J() {
    for (let e of K) ei(e);
    K = [];
}
function $() {
    for (let e of Object.values(eh.indices)) e.serverVersion = G;
    J(), (Y = !0), ee();
}
function ee() {
    'en-US' === p.default.locale &&
        (ei(
            {
                type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
                target: {
                    type: 'application',
                    applicationId: '1187013846746005515'
                },
                index: {
                    applications: [
                        {
                            id: '1187013846746005515',
                            name: 'Farm Merge Valley',
                            description: 'Farm, merge, grow and expand your land!\n\nWelcome to the world of farming that gets bigger and better with each discovery. Come play this part merge, part world-building puzzle game. Farm Merge Valley offers endless possibilities and combinations!',
                            icon: '2a28c40c3f8ff09604450f4508a5ab86',
                            bot_id: '1187013846746005515',
                            flags: '16908298',
                            embedded_activity_config: {
                                supported_platforms: ['web', 'ios', 'android']
                            }
                        }
                    ],
                    application_commands: [
                        {
                            id: '1277685619740639318',
                            type: 4,
                            application_id: '1187013846746005515',
                            version: '1277685619740639319',
                            name: 'launch',
                            description: 'Launch an activity',
                            dm_permission: !0,
                            contexts: [0, 1, 2],
                            integration_types: [0, 1],
                            handler: 2
                        }
                    ]
                }
            },
            !0
        ),
        ei(
            {
                type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
                target: {
                    type: 'application',
                    applicationId: '1227546263558422601'
                },
                index: {
                    applications: [
                        {
                            id: '1227546263558422601',
                            name: 'Krunker Royale',
                            description: 'Battle Royale in the Krunkerverse. Be a part of the last squad standing in a match with up to 48 players. ',
                            icon: 'b69206cb942bce58ca937ba94aa5553d',
                            bot_id: '1227546263558422601',
                            flags: '25296906',
                            embedded_activity_config: {
                                supported_platforms: ['web', 'ios', 'android']
                            }
                        }
                    ],
                    application_commands: [
                        {
                            id: '1306668119573397614',
                            type: 4,
                            application_id: '1227546263558422601',
                            version: '1306668119573397615',
                            name: 'launch',
                            description: 'Launch Krunker Royale FRVR',
                            dm_permission: !0,
                            contexts: [0, 1, 2],
                            integration_types: [0, 1],
                            handler: 2
                        }
                    ],
                    version: '1306668119573397616'
                }
            },
            !0
        ),
        ei(
            {
                type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
                target: {
                    type: 'application',
                    applicationId: '1258330015917936700'
                },
                index: {
                    applications: [
                        {
                            id: '1258330015917936700',
                            name: 'Quiz Planet',
                            description: 'How many correct answers can you get? Team up with your friends and test your trivia skills!\n\nChallenge yourselves with a massive collection of fascinating questions spanning games, movies, sports, and many more categories. Join forces, combine your knowledge, and hit the jackpot together!\n\nReady to show off your collective smarts? Jump in and play now!',
                            icon: '006dc5ef871aacae1aadeb88e12afb6e',
                            bot_id: '1258330015917936700',
                            flags: '16908290',
                            embedded_activity_config: {
                                supported_platforms: ['web', 'ios', 'android']
                            }
                        }
                    ],
                    application_commands: [
                        {
                            id: '1258330219060658227',
                            type: 4,
                            application_id: '1258330015917936700',
                            version: '1281659137289097368',
                            name: 'launch',
                            description: 'Launch an activity',
                            dm_permission: !0,
                            contexts: [0, 1, 2],
                            integration_types: [0, 1],
                            handler: 2
                        }
                    ],
                    version: '1281659137289097369'
                }
            },
            !0
        ),
        ei(
            {
                type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
                target: {
                    type: 'application',
                    applicationId: '1276646101914615872'
                },
                index: {
                    applications: [
                        {
                            id: '1276646101914615872',
                            name: 'Mergest Kingdom',
                            description: 'Merge together hundreds of objects in a land full of challenging quests, collect and harvest resources, design your own island by making it look the way YOU want it! Find the best ways to match and merge various pieces to erect the biggest buildings and cultivate the most fruitful plants! Help rebuild the Mergest Kingdom and make it the most magical one in the Seventh Realm!',
                            icon: '33f2e8570234fae25afcf81a61769ac5',
                            bot_id: '1276646101914615872',
                            flags: '16908298',
                            embedded_activity_config: {
                                supported_platforms: ['web', 'ios', 'android']
                            }
                        }
                    ],
                    application_commands: [
                        {
                            id: '1276939507710562404',
                            type: 4,
                            application_id: '1276646101914615872',
                            version: '1276939507710562405',
                            name: 'launch',
                            description: 'Launch an activity',
                            dm_permission: !0,
                            contexts: [0, 1, 2],
                            integration_types: [0, 1],
                            handler: 2
                        }
                    ]
                }
            },
            !0
        ));
}
function et(e) {
    var t;
    let { target: n } = e,
        r = z(n);
    eR(null !== (t = eh.indices[r]) && void 0 !== t ? t : Z) && er(n);
}
async function en(e) {
    var t, n, r;
    let i = z(e),
        o = null !== (t = eh.indices[i]) && void 0 !== t ? t : Z;
    if (!eR(o)) {
        if (o.fetchState.fetching) {
            let e = o.fetchState.promise;
            return await e, null !== (n = eh.indices[i]) && void 0 !== n ? n : Z;
        }
        return o;
    }
    return await er(e), null !== (r = eh.indices[i]) && void 0 !== r ? r : Z;
}
async function er(e) {
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
function ei(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: i, index: o } = e,
        a = null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == a) return Y || K.push(e), !1;
    let s = {},
        l = {},
        c = new Set();
    for (let e of o.applications) {
        if (null == e.bot && null != e.bot_id) {
            l[e.bot_id] = e.id;
            let t = v.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : c.add(e.bot_id);
        } else null != e.bot && (l[e.bot.id] = e.id);
        let t = {
            descriptor: k(x({}, (0, C.X0)(ew(e))), {
                permissions: null != e.permissions ? (0, _.tk)(eM(e.permissions, a)) : void 0,
                botId: e.bot_id
            }),
            commands: {}
        };
        s[e.id] = t;
    }
    for (let e of ('guild' === i.type && c.size > 0 && u.Z.requestMembersById(i.guildId, [...c]),
    (0, C.nG)(
        o.application_commands.map((e) => eD(e, a)),
        !0
    ))) {
        let t = s[e.applicationId];
        if (null == t) {
            j.error('Command has no matching application');
            continue;
        }
        t.commands[e.id] = e;
    }
    let d = null !== (n = o.version) && void 0 !== n ? n : B;
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
function eo(e) {
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
        o = null == i ? void 0 : null === (t = i.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
    if (null != o)
        for (let e in o) {
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
function es(e, t) {
    var n;
    let r = z({
            type: 'guild',
            guildId: e
        }),
        i = null === (n = eh.indices[r]) || void 0 === n ? void 0 : n.result;
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
function el(e) {
    let { applicationId: t, channelId: n, guildId: r } = e;
    eh.hasContextStateApplication(t, n, r) &&
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
        eh.hasUserStateApplication(t) && q({ type: 'user' }, { serverVersion: G }),
        eh.hasApplicationState(t) &&
            q(
                {
                    type: 'application',
                    applicationId: t
                },
                { serverVersion: G }
            );
}
function ec(e) {
    let { channel: t } = e;
    Q({
        type: 'channel',
        channelId: t.id
    });
}
function eu(e) {
    let { guild: t } = e;
    Q({
        type: 'guild',
        guildId: t.id
    });
}
function ed() {
    q({ type: 'user' }, { serverVersion: G });
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
        (X(),
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
        this.waitFor(p.default),
            this.waitFor(m.default),
            this.syncWith([p.default], () => {
                e_();
            });
    }
    getContextState(e) {
        var t, n;
        return 'contextless' !== e.type && eC(e.channel) ? (null !== (n = this.indices[null !== (t = e.channel.guild_id) && void 0 !== t ? t : e.channel.id]) && void 0 !== n ? n : Z) : F;
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
                eC(r) &&
                (b.default.track(D.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == i.result,
                    size: Object.keys(eh.indices).length
                }),
                eR(i) &&
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
            eR(o) && ((0, T.j)({ type: 'user' }), (d = !0)),
            eR(a) &&
                null != n.applicationId &&
                ((0, T.j)({
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
L(ep, 'displayName', 'ApplicationCommandIndexStore');
let eh = new ep(c.Z, {
        LOGOUT: X,
        CONNECTION_OPEN: $,
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
                    n && eR(a) && (0, T.j)({ type: 'user' });
                    return;
                }
                n &&
                    t &&
                    eC(e.channel) &&
                    (b.default.track(D.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(eh.indices).length
                    }),
                    eR(a) &&
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
function eE(e, t) {
    let [n, r] = i.useState(!0),
        o = (0, l.cj)([eh], () => {
            var t;
            return null !== (t = eh.indices[e]) && void 0 !== t ? t : Z;
        });
    return (
        i.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (b.default.track(D.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == o.result,
                        size: Object.keys(eh.indices).length
                    }),
                    eR(o) &&
                        (0, T.j)({
                            type: 'guild',
                            guildId: e
                        })),
                r(!1));
        }, [o, t, e, n]),
        o
    );
}
function ev(e, t) {
    let [n, r] = i.useState(!0),
        o = (0, l.cj)([eh], () => eh.getUserState());
    return (
        i.useEffect(() => {
            n && (t && eR(o) && e && (0, T.j)({ type: 'user' }), r(!1));
        }, [o, t, e, n]),
        o
    );
}
function eb(e, t) {
    let [n, r] = i.useState(!0),
        o = (0, l.e7)([eh], () => eh.getApplicationState(e));
    i.useEffect(() => {
        n &&
            (t &&
                eR(o) &&
                null != e &&
                (0, T.j)({
                    type: 'application',
                    applicationId: e
                }),
            r(!1));
    }, [t, e, o, n]);
}
function ey() {
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
        u = (0, I.R)(c);
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
                let n = S.ZP.getScoreWithoutLoadingLatest(c, e);
                return S.ZP.getScoreWithoutLoadingLatest(c, t) - n;
            })
            .splice(0, w.hz);
        return 0 === e.length
            ? {
                  descriptors: o,
                  commands: a,
                  sectionedCommands: s,
                  loading: l
              }
            : {
                  descriptors: [O.Tm[w.bi.FRECENCY], ...o],
                  commands: e.concat(a),
                  sectionedCommands: [
                      {
                          section: O.Tm[w.bi.FRECENCY],
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
        o = (0, R.Hs)(r, t.commandTypes),
        a = !1 !== t.applicationCommands,
        s = eg(e, a, n.allowFetch),
        l = ev(a, n.allowFetch),
        c = ey(),
        u = eO();
    return (
        eb(n.applicationId, n.allowFetch),
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
    let { permissionContext: c, contextState: u, userState: d, applicationStates: _, text: p, builtIns: m = N.D.ALLOW, allowApplicationCommands: g = !0, singleApplicationId: v, allowEmptySections: b = !1, scoreMethod: y = N.p.NONE, sortOptions: I = eS, installOnDemand: T = !1 } = e,
        { commandTypes: A } = c,
        C = null == p ? void 0 : p.toLowerCase(),
        R = null == C ? void 0 : C.split(' '),
        P = m === N.D.ONLY_TEXT,
        D = m !== N.D.DENY ? (0, O.Kh)(A, !0, P) : [],
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
    if (g) {
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
        let c = eA(t, n, s, l, M);
        null != c && L.push(c);
    }
    if (
        (I.applications.useFrecency && h.DZ.loadIfNecessary(),
        L.sort((e, t) => {
            if (I.applications.useScore && y === N.p.APPLICATION_ONLY) {
                var n, r, i, o;
                let a = null !== (i = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== i ? i : Number.MAX_VALUE,
                    s = null !== (o = null === (r = t.data[0]) || void 0 === r ? void 0 : r.score) && void 0 !== o ? o : Number.MAX_VALUE;
                if (a !== s) return a - s;
            }
            if (I.applications.useFrecency) {
                let n = f.Z.getScoreWithoutLoadingLatest(e.section.id),
                    r = f.Z.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return eU(e.section.name, t.section.name);
        }),
        D.length > 0 || !0 === b)
    ) {
        let e = eA(O.Tm[w.bi.BUILT_IN], D, !0, !0, M);
        null != e && L.push(e);
    }
    let V = L.flatMap((e) => e.data.map((t) => k(x({}, t), { section: e.section })));
    if (y === N.p.COMMAND_ONLY || y === N.p.COMMAND_OR_APPLICATION) {
        let e = c.context,
            t = E.Z.getGuild(null == c ? void 0 : null === (l = c.context) || void 0 === l ? void 0 : l.guild_id);
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
                let n = null !== (r = e.score) && void 0 !== r ? r : 0,
                    o = null !== (i = t.score) && void 0 !== i ? i : 0;
                if (n !== o) return n - o;
            }
            if (I.commands.useFrecency) {
                let r = S.ZP.getScoreWithoutLoadingLatest(n, e),
                    i = S.ZP.getScoreWithoutLoadingLatest(n, t);
                if (r !== i) return i - r;
            }
            return eU(e.displayName, t.displayName);
        });
    }
    return {
        commands: V,
        descriptors: L.map((e) => e.section),
        sectionedCommands: L,
        loading: (null == u ? void 0 : u.fetchState.fetching) === !0 || (null == d ? void 0 : d.fetchState.fetching) === !0 || (null != v && (null === (r = _.get(v)) || void 0 === r ? void 0 : r.fetchState.fetching) === !0)
    };
}
function eA(e, t, n, r, i) {
    let o,
        { query: a, splitQuery: s, allowEmptySections: l, scoreMethod: c, permissionContext: u, installOnDemand: d } = i,
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
    return 0 !== (o = c !== N.p.NONE && null != a && null != s ? ek(a, s, E, e, c) : E).length || l
        ? ((c === N.p.NONE || c === N.p.APPLICATION_ONLY) && o.sort((e, t) => eU(e.displayName, t.displayName)),
          {
              section: e,
              data: o
          })
        : null;
}
function eC(e) {
    var t;
    return (null == e ? void 0 : e.guild_id) != null || (e.type === D.d4z.DM && (null === (t = v.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0);
}
function eR(e) {
    return !!eP(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter);
}
function eP(e) {
    var t;
    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion;
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
    let s = k(x({}, e), {
        description: null !== (i = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== i ? i : '',
        dm_permission: e.dm_permission,
        name: null !== (o = e.name_default) && void 0 !== o ? o : e.name,
        options: null !== (a = null === (n = e.options) || void 0 === n ? void 0 : n.map(eL)) && void 0 !== a ? a : [],
        permissions: null != e.permissions ? eM(e.permissions, t) : void 0
    });
    return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s;
}
function eL(e) {
    var t, n, r, i;
    let o = k(x({}, e), {
        choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(ex),
        description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
        name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
        options: null === (n = e.options) || void 0 === n ? void 0 : n.map(eL)
    });
    return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o;
}
function ex(e) {
    var t;
    let n = k(x({}, e), { name: null !== (t = e.name_default) && void 0 !== t ? t : e.name });
    return e.name !== e.name_default && (n.name_localized = e.name), n;
}
function eM(e, t) {
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
function ek(e, t, n, r, i) {
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
        (i === N.p.COMMAND_ONLY || i === N.p.COMMAND_OR_APPLICATION) && (n = ej(t, e, c, u)), (void 0 === n || (void 0 !== o && o < n)) && (n = o), void 0 !== n && a.push(k(x({}, t), { score: n }));
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
    for (let { name: n, serverLocalizedName: r } of null !== (i = e.options) && void 0 !== i ? i : []) {
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
    if (t === w.bi.BUILT_IN)
        return {
            descriptor: O.Tm[w.bi.BUILT_IN],
            sectionCommands: (0, O.Kh)([d.yU.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0
        };
    let u = eh.getContextState(e),
        f = eh.getUserState(),
        _ = null !== (a = null === (n = u.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {},
        p = null !== (s = null === (r = f.result) || void 0 === r ? void 0 : r.sections) && void 0 !== s ? s : {},
        h = _[t],
        m = p[t],
        g = null === (o = eh.getApplicationState(t).result) || void 0 === o ? void 0 : null === (i = o.sections) || void 0 === i ? void 0 : i[t];
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
