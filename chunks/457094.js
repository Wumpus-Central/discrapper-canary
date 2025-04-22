n.r(t), n.d(t, { default: () => ts }), n(35282), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(593473),
    a = n(512969),
    o = n(442837),
    s = n(481060),
    c = n(893776),
    u = n(943094),
    d = n(749210),
    p = n(287734),
    h = n(401430),
    f = n(230711),
    g = n(773244),
    m = n(951752),
    b = n(607070),
    _ = n(627845),
    E = n(185666),
    O = n(503737),
    y = n(513202),
    I = n(318891),
    v = n(687751),
    C = n(64514),
    S = n(912471),
    N = n(100527),
    T = n(77987),
    P = n(679891),
    j = n(491575),
    A = n(954709),
    Z = n(644679),
    x = n(314533),
    L = n(9029),
    w = n(935347),
    R = n(560067),
    D = n(823169),
    k = n(845767),
    M = n(620360),
    U = n(96051),
    G = n(750995),
    V = n(696287),
    B = n(657030),
    H = n(408026),
    F = n(763916),
    z = n(306721),
    W = n(531551),
    Y = n(38618),
    K = n(972830),
    q = n(684572),
    Q = n(584233),
    X = n(15274),
    J = n(434404),
    $ = n(543842),
    ee = n(879064),
    et = n(315964),
    en = n(495784),
    er = n(975533),
    ei = n(377400),
    el = n(285865),
    ea = n(659971),
    eo = n(929809),
    es = n(122333),
    ec = n(960275),
    eu = n(818765),
    ed = n(678492),
    ep = n(269089),
    eh = n(380570),
    ef = n(837689),
    eg = n(367207),
    em = n(489977),
    eb = n(329557),
    e_ = n(304445),
    eE = n(893607),
    eO = n(703656),
    ey = n(298969),
    eI = n(719256),
    ev = n(6025),
    eC = n(897473),
    eS = n(377368),
    eN = n(262702),
    eT = n(639033),
    eP = n(479313),
    ej = n(911560),
    eA = n(703016),
    eZ = n(171368),
    ex = n(429974),
    eL = n(332754),
    ew = n(507468),
    eR = n(722589),
    eD = n(282506),
    ek = n(444961),
    eM = n(314897),
    eU = n(433355),
    eG = n(592125),
    eV = n(896797),
    eB = n(430824),
    eH = n(819640),
    eF = n(283595),
    ez = n(944486),
    eW = n(914010),
    eY = n(695103),
    eK = n(241890),
    eq = n(897607),
    eQ = n(417363),
    eX = n(900974),
    eJ = n(358085),
    e$ = n(998502),
    e0 = n(346329),
    e1 = n(981631),
    e3 = n(176505),
    e2 = n(701476),
    e5 = n(186901);
function e8(e, t, n) {
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
function e4(e) {
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
                e8(e, t, n[t]);
            });
    }
    return e;
}
n(117240), n(801077), n(967368), n(272053), n(974180), n(574254), n(551428), n(55563), n(882029), n(959457), n(653255), n(663389), n(25990), n(778825), n(999382), n(388610), n(533947), n(277053), n(371398), n(141233), n(471073), n(606206);
let e6 = !1;
(0, S.D)(),
    o.ZP.initialize(),
    ey.Z.loadServer(),
    eJ.isPlatformEmbedded &&
        (e$.ZP.on('USER_SETTINGS_OPEN', (e, t) => {
            eH.Z.getLayers().includes(e1.S9g.USER_SETTINGS) || f.Z.open(null != t ? t : e1.oAB.ACCOUNT);
        }),
        e$.ZP.on('LAUNCH_APPLICATION', (e, t) => {
            let n = eF.Z.getActiveLibraryApplication(t);
            e0.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e1.ZY5.DIRECT,
                        object: e1.qAy.WEB_URL
                    }
                }
            });
        }));
let e9 = (0, m.l)((e) => {
        let { location: t } = e,
            n = (0, eR.default)(t.pathname);
        return (
            null != n &&
                (0, K.h)(() =>
                    f.Z.open(n.section, n.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: n.source
                    })
                ),
            (0, r.jsxs)(g.Z, {
                deepLinkType: e5.jE.USER_SETTINGS,
                path: t.pathname,
                paramsBuilder: function (e, t) {
                    let [, , n, r] = e.split('/');
                    return {
                        path: e,
                        section: n,
                        subsection: r,
                        fingerprint: t
                    };
                },
                children: [(0, r.jsx)(a.l_, { to: eV.Z.defaultRoute }), ';']
            })
        );
    }),
    e7 = o.ZP.connectStores([Y.Z, eV.Z, eM.default], () => ({
        isConnected: Y.Z.isConnected(),
        defaultRoute: eV.Z.defaultRoute,
        defaultRouteFallback: eV.Z.fallbackRoute,
        token: eM.default.getToken()
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, Q.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: e1.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tl(t);
                    return null == e || ((e.params.guildId === e1.ME || null != eB.Z.getGuild(e.params.guildId)) && null != eG.Z.getChannel(e.params.channelId)) ? (0, r.jsx)(a.l_, { to: t }) : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        }
    ),
    te = (0, m.l)((0, T.e)(j.Z, null, { passProps: !1 })),
    tt = (0, T.e)(q.default, null, { passProps: !1 }),
    tn = [e1.Z5c.GUILD_BOOSTING_MARKETING(eE.Hw.guildId()), ...Array.from(e3.Vg).map((e) => e1.Z5c.CHANNEL(eE.Hw.guildId(), e))];
function tr(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : e1.ME,
        channelId: n,
        messageId: r,
        threadId: i
    };
}
let ti = [
    {
        path: [e1.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(':inviteCode')],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(e7, { match: t });
        },
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.APP],
        render: () => (0, r.jsx)(e7, {}),
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.USERS(':id')],
        render: function (e) {
            let { match: t, location: n } = e,
                { friend_token: i } = (0, l.parse)(n.search),
                { id: o } = t.params;
            return (
                (0, K.h)(() =>
                    (0, eZ.openUserProfileModal)({
                        userId: o,
                        friendToken: i,
                        sourceAnalyticsLocations: [N.Z.URI_SCHEME]
                    })
                ),
                (0, r.jsx)(a.l_, { to: eV.Z.defaultRoute })
            );
        }
    },
    {
        path: [e1.Z5c.APPLICATION_LIBRARY_ACTION(':gameId', ':action')],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                eQ.Z.whenInitialized(() => {
                    eF.Z.whenInitialized(() => {
                        switch (i) {
                            case 'launch': {
                                let e = eF.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e0.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: e1.ZY5.DIRECT,
                                            object: e1.qAy.WEB_URL
                                        }
                                    }
                                });
                                break;
                            }
                            case 'test-mode':
                                eY.Z.whenInitialized(() => h.Wt(n));
                                break;
                            case 'uninstall': {
                                let e = eF.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, e1.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.l_, { to: e1.Z5c.APPLICATION_LIBRARY })
            );
        }
    },
    {
        path: [e1.Z5c.GUILD_CREATE],
        render: function () {
            return (0, K.h)(() => R.Z.openCreateGuildModal({ location: 'External link' })), (0, r.jsx)(a.l_, { to: eV.Z.defaultRoute });
        }
    },
    {
        path: [e1.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, K.h)(() =>
                    ee.v({
                        section: (0, $.Z)(e1.pNK, n),
                        subsection: (0, $.Z)(e1.KsC, i),
                        feature: o
                    })
                ),
                (0, r.jsx)(a.l_, { to: eV.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.SETTINGS(':section', ':subsection?')],
        render: e9,
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(eE.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, K.h)(() => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = e4({}, t)),
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
                (0, r.jsx)(a.l_, { to: e1.Z5c.CHANNEL(i) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (0, K.h)(() => f.Z.open(e1.oAB.INVENTORY)), (0, r.jsx)(a.l_, { to: eV.Z.defaultRoute });
        },
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.WELCOME(eE.Hw.guildId({ optional: !0 }), eE.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, eo.c)(e2.M5.MARKETING_UNCLAIMED);
            let l = e1.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.GUILD_EVENT_DETAILS(eE.Hw.guildId({ optional: !0 }), ':guildEventId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, K.h)(() => {
                    (0, X.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e1.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.GUILD_SETTINGS(eE.Hw.guildId(), ':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, K.h)(() => {
                    J.Z.open(n, (0, $.Z)(e1.pNK, i), void 0, (0, $.Z)(e1.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e1.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [e1.Z5c.CHANNEL_THREAD_VIEW(eE.Hw.guildId(), eE.Hw.channelId(), ':threadId', ':messageId?'), e1.Z5c.CHANNEL(eE.Hw.guildId(), eE.Hw.channelId({ optional: !0 }), ':messageId?'), e1.Z5c.ACTIVITY, e1.Z5c.ACTIVITIES, e1.Z5c.ACTIVITIES_HAPPENING_NOW, e1.Z5c.ACTIVITY_DETAILS(':applicationId'), e1.Z5c.APPLICATION_LIBRARY, e1.Z5c.APPLICATION_STORE, e1.Z5c.MESSAGE_REQUESTS, e1.Z5c.COLLECTIBLES_SHOP, e1.Z5c.COLLECTIBLES_SHOP_FULLSCREEN, e1.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'), e1.Z5c.GUILD_DISCOVERY, e1.Z5c.QUEST_HOME, e1.Z5c.GLOBAL_DISCOVERY, e1.Z5c.GUILD_MEMBER_VERIFICATION(eE.Hw.guildId()), e1.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(eE.Hw.guildId(), ':inviteCode?'), e1.Z5c.GUILD_BOOSTING_MARKETING(eE.Hw.guildId()), e1.Z5c.FEATURE(':feature'), e1.Z5c.FAMILY_CENTER],
        render: te,
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [e1.Z5c.APPLICATION_DIRECTORY],
        render: tt,
        isSessionRequired: !0
    }
];
function tl(e) {
    for (let { path: t, isChatRoute: n } of ti) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function ta(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!Y.Z.isConnected()) return;
    let { location: i } = (0, eO.s1)();
    i.pathname === r && (null == eG.Z.getChannel(t) ? (0, eO.dL)(e1.Z5c.CHANNEL(n)) : (0, eO.dL)(r));
}
class to extends i.PureComponent {
    componentDidMount() {
        e$.ZP.setZoomFactor(b.Z.zoom),
            ey.Z.init(),
            P.Z.initialize(),
            eh.Z.initialize(),
            H.Z.initialize(),
            ek.Z.initialize(),
            F.Z.initialize(),
            eg.Z.initialize(),
            k.Z.initialize(),
            er.Z.initialize(),
            _.Z.init(),
            W.Z.init(),
            z.Z.init(),
            es.Z.initialize(),
            v.Z.initialize(),
            G.Z.initialize(),
            em.Z.initialize(),
            I.ZP.initialize(),
            eD.Z.initialize(),
            ep.Z.initialize(),
            y.Z.initialize(),
            et.Z.init(),
            eq.Z.init(),
            eX.Z.init(),
            O.Z.initialize(),
            eA.Z.init(),
            eK.Z.init(),
            eL.Z.init(),
            eN.Z.initialize(),
            eT.Z.initialize(),
            ex.Z.initialize(),
            ew.Z.init(),
            U.Z.initialize(),
            E.Z.initialize(),
            eI.Z.initialize(),
            eS.Z.initialize(),
            eu.Z.initialize(),
            ec.Z.initialize(),
            ed.Z.initialize(),
            x.Z.initialize(),
            L.Z.initialize(),
            B.Z.initialize(),
            en.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, e4({}, t));
                    })
            }),
            M.Z.init(),
            ei.Z.initialize(),
            eb.Z.initialize(),
            ef.Z.initialize(),
            D.Z.initialize(),
            A.Z.initialize(),
            Z.Z.initialize(),
            C.Z.initialize(),
            (this.rewriterUnlisten = e_.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = e_.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        ey.Z.terminate(), ek.Z.terminate(), eg.Z.terminate(), eh.Z.terminate(), P.Z.terminate(), I.ZP.terminate(), eD.Z.terminate(), y.Z.terminate(), em.Z.terminate(), ep.Z.terminate(), ex.Z.terminate(), O.Z.terminate(), U.Z.terminate(), ei.Z.terminate(), E.Z.terminate(), eb.Z.terminate(), eI.Z.terminate(), eS.Z.terminate(), eu.Z.terminate(), ec.Z.terminate(), ed.Z.terminate(), x.Z.terminate(), L.Z.terminate(), ef.Z.terminate(), D.Z.terminate(), V.Z.terminate(), A.Z.terminate(), Z.Z.terminate(), C.Z.terminate(), B.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (Y.Z.isConnected() || Y.Z.isTryingToConnect()) return;
            let t = eM.default.getToken();
            null != t &&
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of ti) {
                            if (!n) continue;
                            let r = (0, a.LX)(e, { path: t });
                            if (null != r) return r;
                        }
                        return null;
                    })(e) &&
                c.Z.startSession(t);
        })(t),
            (function (e, t) {
                let n = tl(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: o, threadId: s } = tr(n),
                    c = (0, eE.Ss)(r),
                    u = (0, eE.cq)(i),
                    h = (0, eE.cq)(s),
                    f = eW.Z.getGuildId(),
                    g = f !== r;
                if ((c && g && d.Z.selectGuild(r), c && u)) {
                    let n = ez.Z.getChannelId(f),
                        a = n !== i;
                    if (!e6 || g || a || null != o) {
                        (e6 = !0),
                            p.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eP.ZP.setSelectedSummary(i, e);
                    }
                    if (null != s && h) {
                        let e = eU.ZP.getCurrentSidebarChannelId(n) !== s,
                            t = null != eU.ZP.getGuildSidebarState(r);
                        if (null != i && null != s && e)
                            if (t) (0, eO.dL)(e1.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eC.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    ev.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e
                                    });
                            }
                    } else null == i || a || ev.Z.closeChannelSidebar(i);
                    let c = ea.Z.getIsOpen();
                    if (i === e3.oC.ROLE_SUBSCRIPTIONS) el.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == f && r === e1.ME,
                            n = e === e1.Z5c.GUILD_DISCOVERY;
                        t || n ? el.Z.closeSidebar() : el.Z.openSidebar();
                    } else ((a && c) || (!g && !a)) && el.Z.closeSidebar();
                } else
                    tn.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, eO.dL)(eV.Z.fallbackRoute);
            })(t, n);
    }
    ensureChannelMatchesGuild(e) {
        if (!Y.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = tl(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = tr(n),
            a = (0, eE.Ss)(r) && r !== e1.ME && r !== e1.I_8;
        if (null != i && (0, eE.cq)(i) && !(0, e3.AB)(i) && a) {
            let n = eG.Z.getChannel(i);
            if (null == n)
                ej.Z.loadThread(i).then(() =>
                    ta({
                        channelId: i,
                        guildId: r,
                        pathname: t
                    })
                );
            else if (n.guild_id !== r)
                return {
                    path: e1.Z5c.CHANNEL(r),
                    state: e.state
                };
            if (null != l) {
                if (!((0, eE.cq)(l) && !(0, e3.AB)(i))) return null;
                let n = eG.Z.getChannel(l);
                if (null == n)
                    ej.Z.loadThread(l).then(() =>
                        ta({
                            channelId: l,
                            guildId: r,
                            pathname: t
                        })
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        ev.Z.closeChannelSidebar(i),
                        {
                            path: e1.Z5c.CHANNEL(r, i),
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
                (0, r.jsxs)(a.rs, {
                    children: [
                        (0, r.jsx)(a.l_, {
                            exact: !0,
                            from: '/channels',
                            to: '/'
                        }),
                        ti.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, r.jsx)(
                                a.AW,
                                {
                                    path: t,
                                    render: n
                                },
                                t[0]
                            );
                        }),
                        (0, r.jsx)(a.l_, { to: '/' })
                    ]
                }),
                (0, r.jsx)(w.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e), e8(this, 'historyUnlisten', () => {}), e8(this, 'rewriterUnlisten', () => {});
    }
}
let ts = to;
