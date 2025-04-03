n.r(t), n.d(t, { default: () => to }), n(301563), n(47120);
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
    N = n(513202),
    y = n(318891),
    I = n(687751),
    v = n(64514),
    C = n(912471),
    S = n(100527),
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
    W = n(696287),
    V = n(408026),
    B = n(763916),
    H = n(306721),
    F = n(531551),
    z = n(38618),
    Y = n(972830),
    K = n(684572),
    q = n(584233),
    Q = n(15274),
    X = n(434404),
    J = n(543842),
    $ = n(879064),
    ee = n(315964),
    et = n(495784),
    en = n(975533),
    er = n(377400),
    ei = n(285865),
    el = n(659971),
    ea = n(929809),
    eo = n(122333),
    es = n(960275),
    ec = n(818765),
    eu = n(678492),
    ed = n(269089),
    ep = n(380570),
    eh = n(837689),
    ef = n(367207),
    eg = n(489977),
    em = n(329557),
    eb = n(304445),
    e_ = n(893607),
    eE = n(703656),
    eO = n(298969),
    eN = n(719256),
    ey = n(6025),
    eI = n(897473),
    ev = n(377368),
    eC = n(262702),
    eS = n(639033),
    eT = n(479313),
    eP = n(911560),
    ej = n(703016),
    eA = n(171368),
    eZ = n(429974),
    ex = n(332754),
    eL = n(507468),
    ew = n(722589),
    eR = n(282506),
    eD = n(444961),
    ek = n(314897),
    eM = n(433355),
    eU = n(592125),
    eG = n(896797),
    eW = n(430824),
    eV = n(819640),
    eB = n(283595),
    eH = n(944486),
    eF = n(914010),
    ez = n(695103),
    eY = n(241890),
    eK = n(897607),
    eq = n(417363),
    eQ = n(900974),
    eX = n(358085),
    eJ = n(998502),
    e$ = n(346329),
    e0 = n(981631),
    e1 = n(176505),
    e2 = n(701476),
    e3 = n(186901);
function e4(e, t, n) {
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
function e5(e) {
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
                e4(e, t, n[t]);
            });
    }
    return e;
}
n(117240), n(801077), n(967368), n(272053), n(974180), n(574254), n(551428), n(55563), n(882029), n(959457), n(653255), n(663389), n(25990), n(778825), n(999382), n(388610), n(533947), n(277053), n(371398), n(141233), n(471073);
let e7 = !1;
(0, C.D)(),
    o.ZP.initialize(),
    eO.Z.loadServer(),
    eX.isPlatformEmbedded &&
        (eJ.ZP.on('USER_SETTINGS_OPEN', (e, t) => {
            eV.Z.getLayers().includes(e0.S9g.USER_SETTINGS) || f.Z.open(null != t ? t : e0.oAB.ACCOUNT);
        }),
        eJ.ZP.on('LAUNCH_APPLICATION', (e, t) => {
            let n = eB.Z.getActiveLibraryApplication(t);
            e$.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e0.ZY5.DIRECT,
                        object: e0.qAy.WEB_URL
                    }
                }
            });
        }));
let e6 = (0, m.l)((e) => {
        let { location: t } = e,
            n = (0, ew.default)(t.pathname);
        return (
            null != n &&
                (0, Y.h)(() =>
                    f.Z.open(n.section, n.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: n.source
                    })
                ),
            (0, r.jsxs)(g.Z, {
                deepLinkType: e3.jE.USER_SETTINGS,
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
                children: [(0, r.jsx)(a.l_, { to: eG.Z.defaultRoute }), ';']
            })
        );
    }),
    e9 = o.ZP.connectStores([z.Z, eG.Z, ek.default], () => ({
        isConnected: z.Z.isConnected(),
        defaultRoute: eG.Z.defaultRoute,
        defaultRouteFallback: eG.Z.fallbackRoute,
        token: ek.default.getToken()
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, q.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: e0.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = ti(t);
                    return null == e || ((e.params.guildId === e0.ME || null != eW.Z.getGuild(e.params.guildId)) && null != eU.Z.getChannel(e.params.channelId)) ? (0, r.jsx)(a.l_, { to: t }) : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        }
    ),
    e8 = (0, m.l)((0, T.e)(j.Z, null, { passProps: !1 })),
    te = (0, T.e)(K.default, null, { passProps: !1 }),
    tt = [e0.Z5c.GUILD_BOOSTING_MARKETING(e_.Hw.guildId()), ...Array.from(e1.Vg).map((e) => e0.Z5c.CHANNEL(e_.Hw.guildId(), e))];
function tn(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : e0.ME,
        channelId: n,
        messageId: r,
        threadId: i
    };
}
let tr = [
    {
        path: [e0.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(':inviteCode')],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(e9, { match: t });
        },
        isSessionRequired: !0
    },
    {
        path: [e0.Z5c.APP],
        render: () => (0, r.jsx)(e9, {}),
        isSessionRequired: !0
    },
    {
        path: [e0.Z5c.USERS(':id')],
        render: function (e) {
            let { match: t, location: n } = e,
                { friend_token: i } = (0, l.parse)(n.search),
                { id: o } = t.params;
            return (
                (0, Y.h)(() =>
                    (0, eA.openUserProfileModal)({
                        userId: o,
                        friendToken: i,
                        sourceAnalyticsLocations: [S.Z.URI_SCHEME],
                        analyticsLocation: { section: e0.jXE.DIRECT_ROUTE_ACCESS }
                    })
                ),
                (0, r.jsx)(a.l_, { to: eG.Z.defaultRoute })
            );
        }
    },
    {
        path: [e0.Z5c.APPLICATION_LIBRARY_ACTION(':gameId', ':action')],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                eq.Z.whenInitialized(() => {
                    eB.Z.whenInitialized(() => {
                        switch (i) {
                            case 'launch': {
                                let e = eB.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e$.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: e0.ZY5.DIRECT,
                                            object: e0.qAy.WEB_URL
                                        }
                                    }
                                });
                                break;
                            }
                            case 'test-mode':
                                ez.Z.whenInitialized(() => h.Wt(n));
                                break;
                            case 'uninstall': {
                                let e = eB.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, e0.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.l_, { to: e0.Z5c.APPLICATION_LIBRARY })
            );
        }
    },
    {
        path: [e0.Z5c.GUILD_CREATE],
        render: function () {
            return (0, Y.h)(() => R.Z.openCreateGuildModal({ location: 'External link' })), (0, r.jsx)(a.l_, { to: eG.Z.defaultRoute });
        }
    },
    {
        path: [e0.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, Y.h)(() =>
                    $.v({
                        section: (0, J.Z)(e0.pNK, n),
                        subsection: (0, J.Z)(e0.KsC, i),
                        feature: o
                    })
                ),
                (0, r.jsx)(a.l_, { to: eG.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [e0.Z5c.SETTINGS(':section', ':subsection?')],
        render: e6,
        isSessionRequired: !0
    },
    {
        path: [e0.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(e_.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, Y.h)(() => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = e5({}, t)),
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
                (0, r.jsx)(a.l_, { to: e0.Z5c.CHANNEL(i) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [e0.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (0, Y.h)(() => f.Z.open(e0.oAB.INVENTORY)), (0, r.jsx)(a.l_, { to: eG.Z.defaultRoute });
        },
        isSessionRequired: !0
    },
    {
        path: [e0.Z5c.WELCOME(e_.Hw.guildId({ optional: !0 }), e_.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, ea.c)(e2.M5.MARKETING_UNCLAIMED);
            let l = e0.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0
    },
    {
        path: [e0.Z5c.GUILD_EVENT_DETAILS(e_.Hw.guildId({ optional: !0 }), ':guildEventId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, Y.h)(() => {
                    (0, Q.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e0.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [e0.Z5c.GUILD_SETTINGS(e_.Hw.guildId(), ':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, Y.h)(() => {
                    X.Z.open(n, (0, J.Z)(e0.pNK, i), void 0, (0, J.Z)(e0.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e0.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [e0.Z5c.CHANNEL_THREAD_VIEW(e_.Hw.guildId(), e_.Hw.channelId(), ':threadId', ':messageId?'), e0.Z5c.CHANNEL(e_.Hw.guildId(), e_.Hw.channelId({ optional: !0 }), ':messageId?'), e0.Z5c.ACTIVITY, e0.Z5c.ACTIVITIES, e0.Z5c.ACTIVITIES_HAPPENING_NOW, e0.Z5c.ACTIVITY_DETAILS(':applicationId'), e0.Z5c.APPLICATION_LIBRARY, e0.Z5c.APPLICATION_STORE, e0.Z5c.MESSAGE_REQUESTS, e0.Z5c.COLLECTIBLES_SHOP, e0.Z5c.COLLECTIBLES_SHOP_FULLSCREEN, e0.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'), e0.Z5c.GUILD_DISCOVERY, e0.Z5c.QUEST_HOME, e0.Z5c.GLOBAL_DISCOVERY, e0.Z5c.GUILD_MEMBER_VERIFICATION(e_.Hw.guildId()), e0.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(e_.Hw.guildId(), ':inviteCode?'), e0.Z5c.GUILD_BOOSTING_MARKETING(e_.Hw.guildId()), e0.Z5c.FEATURE(':feature'), e0.Z5c.FAMILY_CENTER],
        render: e8,
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [e0.Z5c.APPLICATION_DIRECTORY],
        render: te,
        isSessionRequired: !0
    }
];
function ti(e) {
    for (let { path: t, isChatRoute: n } of tr) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function tl(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!z.Z.isConnected()) return;
    let { location: i } = (0, eE.s1)();
    i.pathname === r && (null == eU.Z.getChannel(t) ? (0, eE.dL)(e0.Z5c.CHANNEL(n)) : (0, eE.dL)(r));
}
class ta extends i.PureComponent {
    componentDidMount() {
        eJ.ZP.setZoomFactor(b.Z.zoom),
            eO.Z.init(),
            P.Z.initialize(),
            ep.Z.initialize(),
            V.Z.initialize(),
            eD.Z.initialize(),
            B.Z.initialize(),
            ef.Z.initialize(),
            k.Z.initialize(),
            en.Z.initialize(),
            _.Z.init(),
            F.Z.init(),
            H.Z.init(),
            eo.Z.initialize(),
            I.Z.initialize(),
            G.Z.initialize(),
            eg.Z.initialize(),
            y.ZP.initialize(),
            eR.Z.initialize(),
            ed.Z.initialize(),
            N.Z.initialize(),
            ee.Z.init(),
            eK.Z.init(),
            eQ.Z.init(),
            O.Z.initialize(),
            ej.Z.init(),
            eY.Z.init(),
            ex.Z.init(),
            eC.Z.initialize(),
            eS.Z.initialize(),
            eZ.Z.initialize(),
            eL.Z.init(),
            U.Z.initialize(),
            E.Z.initialize(),
            eN.Z.initialize(),
            ev.Z.initialize(),
            ec.Z.initialize(),
            es.Z.initialize(),
            eu.Z.initialize(),
            x.Z.initialize(),
            L.Z.initialize(),
            et.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, e5({}, t));
                    })
            }),
            M.Z.init(),
            er.Z.initialize(),
            em.Z.initialize(),
            eh.Z.initialize(),
            D.Z.initialize(),
            A.Z.initialize(),
            Z.Z.initialize(),
            v.Z.initialize(),
            (this.rewriterUnlisten = eb.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eb.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eO.Z.terminate(), eD.Z.terminate(), ef.Z.terminate(), ep.Z.terminate(), P.Z.terminate(), y.ZP.terminate(), eR.Z.terminate(), N.Z.terminate(), eg.Z.terminate(), ed.Z.terminate(), eZ.Z.terminate(), O.Z.terminate(), U.Z.terminate(), er.Z.terminate(), E.Z.terminate(), em.Z.terminate(), eN.Z.terminate(), ev.Z.terminate(), ec.Z.terminate(), es.Z.terminate(), eu.Z.terminate(), x.Z.terminate(), L.Z.terminate(), eh.Z.terminate(), D.Z.terminate(), W.Z.terminate(), A.Z.terminate(), Z.Z.terminate(), v.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (z.Z.isConnected() || z.Z.isTryingToConnect()) return;
            let t = ek.default.getToken();
            null != t &&
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of tr) {
                            if (!n) continue;
                            let r = (0, a.LX)(e, { path: t });
                            if (null != r) return r;
                        }
                        return null;
                    })(e) &&
                c.Z.startSession(t);
        })(t),
            (function (e, t) {
                let n = ti(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: o, threadId: s } = tn(n),
                    c = (0, e_.Ss)(r),
                    u = (0, e_.cq)(i),
                    h = (0, e_.cq)(s),
                    f = eF.Z.getGuildId(),
                    g = f !== r;
                if ((c && g && d.Z.selectGuild(r), c && u)) {
                    let n = eH.Z.getChannelId(f),
                        a = n !== i;
                    if (!e7 || g || a || null != o) {
                        (e7 = !0),
                            p.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eT.ZP.setSelectedSummary(i, e);
                    }
                    if (null != s && h) {
                        let e = eM.ZP.getCurrentSidebarChannelId(n) !== s,
                            t = null != eM.ZP.getGuildSidebarState(r);
                        if (null != i && null != s && e)
                            if (t) (0, eE.dL)(e0.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eI.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    ey.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e
                                    });
                            }
                    } else null == i || a || ey.Z.closeChannelSidebar(i);
                    let c = el.Z.getIsOpen();
                    if (i === e1.oC.ROLE_SUBSCRIPTIONS) ei.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == f && r === e0.ME,
                            n = e === e0.Z5c.GUILD_DISCOVERY;
                        t || n ? ei.Z.closeSidebar() : ei.Z.openSidebar();
                    } else ((a && c) || (!g && !a)) && ei.Z.closeSidebar();
                } else
                    tt.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, eE.dL)(eG.Z.fallbackRoute);
            })(t, n);
    }
    ensureChannelMatchesGuild(e) {
        if (!z.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = ti(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = tn(n),
            a = (0, e_.Ss)(r) && r !== e0.ME && r !== e0.I_8;
        if (null != i && (0, e_.cq)(i) && !(0, e1.AB)(i) && a) {
            let n = eU.Z.getChannel(i);
            if (null == n)
                eP.Z.loadThread(i).then(() =>
                    tl({
                        channelId: i,
                        guildId: r,
                        pathname: t
                    })
                );
            else if (n.guild_id !== r)
                return {
                    path: e0.Z5c.CHANNEL(r),
                    state: e.state
                };
            if (null != l) {
                if (!((0, e_.cq)(l) && !(0, e1.AB)(i))) return null;
                let n = eU.Z.getChannel(l);
                if (null == n)
                    eP.Z.loadThread(l).then(() =>
                        tl({
                            channelId: l,
                            guildId: r,
                            pathname: t
                        })
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        ey.Z.closeChannelSidebar(i),
                        {
                            path: e0.Z5c.CHANNEL(r, i),
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
                        tr.map((e) => {
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
        super(...e), e4(this, 'historyUnlisten', () => {}), e4(this, 'rewriterUnlisten', () => {});
    }
}
let to = ta;
