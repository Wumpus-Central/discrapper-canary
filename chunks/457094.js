n.r(t), n.d(t, { default: () => tr }), n(301563), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(593473),
    o = n(512969),
    a = n(442837),
    s = n(481060),
    c = n(893776),
    u = n(943094),
    d = n(749210),
    p = n(287734),
    h = n(401430),
    g = n(230711),
    f = n(607070),
    m = n(627845),
    b = n(185666),
    _ = n(503737),
    E = n(513202),
    O = n(318891),
    N = n(687751),
    v = n(912471),
    y = n(100527),
    I = n(838134),
    C = n(77987),
    S = n(679891),
    T = n(491575),
    P = n(954709),
    j = n(644679),
    A = n(314533),
    Z = n(9029),
    x = n(935347),
    L = n(560067),
    w = n(823169),
    R = n(845767),
    D = n(620360),
    k = n(96051),
    M = n(750995),
    U = n(696287),
    G = n(408026),
    W = n(763916),
    V = n(306721),
    B = n(531551),
    H = n(38618),
    F = n(972830),
    z = n(981283),
    Y = n(584233),
    K = n(15274),
    q = n(434404),
    X = n(543842),
    Q = n(879064),
    J = n(315964),
    $ = n(495784),
    ee = n(975533),
    et = n(377400),
    en = n(285865),
    er = n(659971),
    ei = n(929809),
    el = n(122333),
    eo = n(960275),
    ea = n(818765),
    es = n(678492),
    ec = n(269089),
    eu = n(380570),
    ed = n(837689),
    ep = n(367207),
    eh = n(489977),
    eg = n(329557),
    ef = n(304445),
    em = n(893607),
    eb = n(703656),
    e_ = n(298969),
    eE = n(719256),
    eO = n(6025),
    eN = n(897473),
    ev = n(377368),
    ey = n(262702),
    eI = n(639033),
    eC = n(479313),
    eS = n(911560),
    eT = n(703016),
    eP = n(171368),
    ej = n(429974),
    eA = n(332754),
    eZ = n(507468),
    ex = n(722589),
    eL = n(282506),
    ew = n(444961),
    eR = n(314897),
    eD = n(433355),
    ek = n(592125),
    eM = n(896797),
    eU = n(430824),
    eG = n(819640),
    eW = n(283595),
    eV = n(944486),
    eB = n(914010),
    eH = n(695103),
    eF = n(241890),
    ez = n(897607),
    eY = n(417363),
    eK = n(900974),
    eq = n(358085),
    eX = n(998502),
    eQ = n(346329),
    eJ = n(981631),
    e$ = n(176505),
    e0 = n(701476);
function e1(e, t, n) {
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
function e3(e) {
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
                e1(e, t, n[t]);
            });
    }
    return e;
}
n(117240), n(801077), n(967368), n(272053), n(974180), n(574254), n(551428), n(55563), n(882029), n(959457), n(653255), n(663389), n(25990), n(778825), n(999382), n(388610), n(533947), n(277053), n(371398), n(141233), n(471073);
let e4 = !1;
(0, v.D)(),
    a.ZP.initialize(),
    e_.Z.loadServer(),
    eq.isPlatformEmbedded &&
        (eX.ZP.on('USER_SETTINGS_OPEN', (e, t) => {
            eG.Z.getLayers().includes(eJ.S9g.USER_SETTINGS) || g.Z.open(null != t ? t : eJ.oAB.ACCOUNT);
        }),
        eX.ZP.on('LAUNCH_APPLICATION', (e, t) => {
            let n = eW.Z.getActiveLibraryApplication(t);
            eQ.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: eJ.ZY5.DIRECT,
                        object: eJ.qAy.WEB_URL
                    }
                }
            });
        }));
let e2 = a.ZP.connectStores([H.Z, eM.Z, eR.default], () => ({
        isConnected: H.Z.isConnected(),
        defaultRoute: eM.Z.defaultRoute,
        defaultRouteFallback: eM.Z.fallbackRoute,
        token: eR.default.getToken()
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, Y.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(o.l_, { to: eJ.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = te(t);
                    return null == e || ((e.params.guildId === eJ.ME || null != eU.Z.getGuild(e.params.guildId)) && null != ek.Z.getChannel(e.params.channelId)) ? (0, r.jsx)(o.l_, { to: t }) : (0, r.jsx)(o.l_, { to: i });
                }
                return null;
            }
        }
    ),
    e9 = (0, C.e)(T.Z, null, { passProps: !1 }),
    e7 = (0, C.e)(I.default, null, { passProps: !1 }),
    e5 = [eJ.Z5c.GUILD_BOOSTING_MARKETING(em.Hw.guildId()), ...Array.from(e$.Vg).map((e) => eJ.Z5c.CHANNEL(em.Hw.guildId(), e))];
function e6(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : eJ.ME,
        channelId: n,
        messageId: r,
        threadId: i
    };
}
let e8 = [
    {
        path: [eJ.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(':inviteCode')],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(e2, { match: t });
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.APP],
        render: () => (0, r.jsx)(e2, {}),
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.USERS(':id')],
        render: function (e) {
            let { match: t, location: n } = e,
                { friend_token: i } = (0, l.parse)(n.search),
                { id: a } = t.params;
            return (
                (0, F.h)(() =>
                    (0, eP.openUserProfileModal)({
                        userId: a,
                        friendToken: i,
                        sourceAnalyticsLocations: [y.Z.URI_SCHEME],
                        analyticsLocation: { section: eJ.jXE.DIRECT_ROUTE_ACCESS }
                    })
                ),
                (0, r.jsx)(o.l_, { to: eM.Z.defaultRoute })
            );
        }
    },
    {
        path: [eJ.Z5c.APPLICATION_LIBRARY_ACTION(':gameId', ':action')],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                eY.Z.whenInitialized(() => {
                    eW.Z.whenInitialized(() => {
                        switch (i) {
                            case 'launch': {
                                let e = eW.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                eQ.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: eJ.ZY5.DIRECT,
                                            object: eJ.qAy.WEB_URL
                                        }
                                    }
                                });
                                break;
                            }
                            case 'test-mode':
                                eH.Z.whenInitialized(() => h.Wt(n));
                                break;
                            case 'uninstall': {
                                let e = eW.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, eJ.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(o.l_, { to: eJ.Z5c.APPLICATION_LIBRARY })
            );
        }
    },
    {
        path: [eJ.Z5c.GUILD_CREATE],
        render: function () {
            return (0, F.h)(() => L.Z.openCreateGuildModal({ location: 'External link' })), (0, r.jsx)(o.l_, { to: eM.Z.defaultRoute });
        }
    },
    {
        path: [eJ.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                a = (0, l.parse)(location.search).feature;
            return (
                (0, F.h)(() =>
                    Q.v({
                        section: (0, X.Z)(eJ.pNK, n),
                        subsection: (0, X.Z)(eJ.KsC, i),
                        feature: a
                    })
                ),
                (0, r.jsx)(o.l_, { to: eM.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.SETTINGS(':section', ':subsection?')],
        render: function (e) {
            let { location: t } = e,
                n = (0, ex.default)(t.pathname);
            return (
                null != n &&
                    (0, F.h)(() =>
                        g.Z.open(n.section, n.subsection, {
                            openWithoutBackstack: !1,
                            impressionSource: n.source
                        })
                    ),
                (0, r.jsx)(o.l_, { to: eM.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(em.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, F.h)(() => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('5863'), n.e('82049')]).then(n.bind(n, 751212));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = e3({}, t)),
                                (l = l = { guildId: i }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                n)
                            );
                        };
                    });
                }),
                (0, r.jsx)(o.l_, { to: eJ.Z5c.CHANNEL(i) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (0, F.h)(() => g.Z.open(eJ.oAB.INVENTORY)), (0, r.jsx)(o.l_, { to: eM.Z.defaultRoute });
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.WELCOME(em.Hw.guildId({ optional: !0 }), em.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, ei.c)(e0.M5.MARKETING_UNCLAIMED);
            let l = eJ.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(o.l_, { to: l });
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.GUILD_EVENT_DETAILS(em.Hw.guildId({ optional: !0 }), ':guildEventId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, F.h)(() => {
                    (0, K.bO)({ eventId: i });
                }),
                (0, r.jsx)(o.l_, { to: eJ.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.GUILD_SETTINGS(em.Hw.guildId(), ':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, F.h)(() => {
                    q.Z.open(n, (0, X.Z)(eJ.pNK, i), void 0, (0, X.Z)(eJ.KsC, l));
                }),
                (0, r.jsx)(o.l_, { to: eJ.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eJ.Z5c.CHANNEL_THREAD_VIEW(em.Hw.guildId(), em.Hw.channelId(), ':threadId', ':messageId?'), eJ.Z5c.CHANNEL(em.Hw.guildId(), em.Hw.channelId({ optional: !0 }), ':messageId?'), eJ.Z5c.ACTIVITY, eJ.Z5c.ACTIVITIES, eJ.Z5c.ACTIVITIES_HAPPENING_NOW, eJ.Z5c.ACTIVITY_DETAILS(':applicationId'), eJ.Z5c.APPLICATION_LIBRARY, eJ.Z5c.APPLICATION_STORE, eJ.Z5c.MESSAGE_REQUESTS, eJ.Z5c.COLLECTIBLES_SHOP, eJ.Z5c.COLLECTIBLES_SHOP_FULLSCREEN, eJ.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'), eJ.Z5c.GUILD_DISCOVERY, eJ.Z5c.QUEST_HOME, eJ.Z5c.GLOBAL_DISCOVERY, eJ.Z5c.GUILD_MEMBER_VERIFICATION(em.Hw.guildId()), eJ.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(em.Hw.guildId(), ':inviteCode?'), eJ.Z5c.GUILD_BOOSTING_MARKETING(em.Hw.guildId()), eJ.Z5c.FEATURE(':feature'), eJ.Z5c.FAMILY_CENTER],
        render: e9,
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eJ.Z5c.APPLICATION_DIRECTORY],
        render: e7,
        isSessionRequired: !0
    }
];
function te(e) {
    for (let { path: t, isChatRoute: n } of e8) {
        if (!n) continue;
        let r = (0, o.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function tt(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!H.Z.isConnected()) return;
    let { location: i } = (0, eb.s1)();
    i.pathname === r && (null == ek.Z.getChannel(t) ? (0, eb.dL)(eJ.Z5c.CHANNEL(n)) : (0, eb.dL)(r));
}
class tn extends i.PureComponent {
    componentDidMount() {
        eX.ZP.setZoomFactor(f.Z.zoom),
            e_.Z.init(),
            S.Z.initialize(),
            eu.Z.initialize(),
            G.Z.initialize(),
            ew.Z.initialize(),
            W.Z.initialize(),
            ep.Z.initialize(),
            R.Z.initialize(),
            ee.Z.initialize(),
            m.Z.init(),
            B.Z.init(),
            V.Z.init(),
            el.Z.initialize(),
            N.Z.initialize(),
            M.Z.initialize(),
            eh.Z.initialize(),
            O.ZP.initialize(),
            eL.Z.initialize(),
            ec.Z.initialize(),
            E.Z.initialize(),
            z.Z.init(),
            J.Z.init(),
            ez.Z.init(),
            eK.Z.init(),
            _.Z.initialize(),
            eT.Z.init(),
            eF.Z.init(),
            eA.Z.init(),
            ey.Z.initialize(),
            eI.Z.initialize(),
            ej.Z.initialize(),
            eZ.Z.init(),
            k.Z.initialize(),
            b.Z.initialize(),
            eE.Z.initialize(),
            ev.Z.initialize(),
            ea.Z.initialize(),
            eo.Z.initialize(),
            es.Z.initialize(),
            A.Z.initialize(),
            Z.Z.initialize(),
            $.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, e3({}, t));
                    })
            }),
            D.Z.init(),
            et.Z.initialize(),
            eg.Z.initialize(),
            ed.Z.initialize(),
            w.Z.initialize(),
            P.Z.initialize(),
            j.Z.initialize(),
            (this.rewriterUnlisten = ef.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = ef.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        e_.Z.terminate(), ew.Z.terminate(), ep.Z.terminate(), eu.Z.terminate(), S.Z.terminate(), O.ZP.terminate(), eL.Z.terminate(), E.Z.terminate(), eh.Z.terminate(), ec.Z.terminate(), ej.Z.terminate(), _.Z.terminate(), k.Z.terminate(), et.Z.terminate(), b.Z.terminate(), eg.Z.terminate(), eE.Z.terminate(), ev.Z.terminate(), ea.Z.terminate(), eo.Z.terminate(), es.Z.terminate(), A.Z.terminate(), Z.Z.terminate(), ed.Z.terminate(), w.Z.terminate(), U.Z.terminate(), P.Z.terminate(), j.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (H.Z.isConnected() || H.Z.isTryingToConnect()) return;
            let t = eR.default.getToken();
            null != t &&
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of e8) {
                            if (!n) continue;
                            let r = (0, o.LX)(e, { path: t });
                            if (null != r) return r;
                        }
                        return null;
                    })(e) &&
                c.Z.startSession(t);
        })(t),
            (function (e, t) {
                let n = te(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: a, threadId: s } = e6(n),
                    c = (0, em.Ss)(r),
                    u = (0, em.cq)(i),
                    h = (0, em.cq)(s),
                    g = eB.Z.getGuildId(),
                    f = g !== r;
                if ((c && f && d.Z.selectGuild(r), c && u)) {
                    let n = eV.Z.getChannelId(g),
                        o = n !== i;
                    if (!e4 || f || o || null != a) {
                        (e4 = !0),
                            p.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: a
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eC.ZP.setSelectedSummary(i, e);
                    }
                    if (null != s && h) {
                        let e = eD.ZP.getCurrentSidebarChannelId(n) !== s,
                            t = null != eD.ZP.getGuildSidebarState(r);
                        if (null != i && null != s && e) {
                            if (t) (0, eb.dL)(eJ.Z5c.CHANNEL(r, s, a));
                            else {
                                let e = { type: eN.Ff.THREAD };
                                null != a && (e.initialMessageId = a),
                                    eO.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e
                                    });
                            }
                        }
                    } else null == i || o || eO.Z.closeChannelSidebar(i);
                    let c = er.Z.getIsOpen();
                    if (i === e$.oC.ROLE_SUBSCRIPTIONS) en.Z.closeSidebar();
                    else if (f && c) {
                        let t = null == g && r === eJ.ME,
                            n = e === eJ.Z5c.GUILD_DISCOVERY;
                        t || n ? en.Z.closeSidebar() : en.Z.openSidebar();
                    } else ((o && c) || (!f && !o)) && en.Z.closeSidebar();
                } else
                    !e5.some((t) => {
                        var n;
                        return (null === (n = (0, o.LX)(e, t)) || void 0 === n ? void 0 : n.isExact) === !0;
                    }) && (0, eb.dL)(eM.Z.fallbackRoute);
            })(t, n);
    }
    ensureChannelMatchesGuild(e) {
        if (!H.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = te(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = e6(n),
            o = (0, em.Ss)(r) && r !== eJ.ME && r !== eJ.I_8;
        if (null != i && (0, em.cq)(i) && !(0, e$.AB)(i) && o) {
            let n = ek.Z.getChannel(i);
            if (null == n)
                eS.Z.loadThread(i).then(() =>
                    tt({
                        channelId: i,
                        guildId: r,
                        pathname: t
                    })
                );
            else if (n.guild_id !== r)
                return {
                    path: eJ.Z5c.CHANNEL(r),
                    state: e.state
                };
            if (null != l) {
                if (!((0, em.cq)(l) && !(0, e$.AB)(i))) return null;
                let n = ek.Z.getChannel(l);
                if (null == n)
                    eS.Z.loadThread(l).then(() =>
                        tt({
                            channelId: l,
                            guildId: r,
                            pathname: t
                        })
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eO.Z.closeChannelSidebar(i),
                        {
                            path: eJ.Z5c.CHANNEL(r, i),
                            state: e.state
                        }
                    );
            }
        }
        return null;
    }
    render() {
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsxs)(o.rs, {
                    children: [
                        (0, r.jsx)(o.l_, {
                            exact: !0,
                            from: '/channels',
                            to: '/'
                        }),
                        e8.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, r.jsx)(
                                o.AW,
                                {
                                    path: t,
                                    render: n
                                },
                                t[0]
                            );
                        }),
                        (0, r.jsx)(o.l_, { to: '/' })
                    ]
                }),
                (0, r.jsx)(x.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e), e1(this, 'historyUnlisten', () => {}), e1(this, 'rewriterUnlisten', () => {});
    }
}
let tr = tn;
