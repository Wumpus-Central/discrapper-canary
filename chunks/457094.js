n.r(t), n.d(t, { default: () => ts }), n(35282), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(593473),
    a = n(114858),
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
    x = n(403763),
    w = n(314533),
    L = n(9029),
    R = n(935347),
    D = n(560067),
    k = n(823169),
    M = n(845767),
    U = n(620360),
    G = n(96051),
    B = n(750995),
    V = n(696287),
    H = n(657030),
    F = n(408026),
    z = n(763916),
    W = n(306721),
    Y = n(531551),
    K = n(38618),
    q = n(972830),
    X = n(684572),
    Q = n(584233),
    J = n(15274),
    $ = n(434404),
    ee = n(543842),
    et = n(879064),
    en = n(315964),
    er = n(495784),
    ei = n(975533),
    el = n(377400),
    ea = n(285865),
    eo = n(659971),
    es = n(929809),
    ec = n(122333),
    eu = n(960275),
    ed = n(818765),
    ep = n(678492),
    eh = n(269089),
    ef = n(380570),
    eg = n(837689),
    em = n(367207),
    eb = n(489977),
    e_ = n(329557),
    eE = n(304445),
    eO = n(893607),
    ey = n(703656),
    eI = n(298969),
    ev = n(719256),
    eC = n(6025),
    eS = n(897473),
    eN = n(377368),
    eT = n(262702),
    eP = n(639033),
    ej = n(479313),
    eA = n(911560),
    eZ = n(703016),
    ex = n(892001),
    ew = n(497805),
    eL = n(332754),
    eR = n(507468),
    eD = n(722589),
    ek = n(282506),
    eM = n(444961),
    eU = n(314897),
    eG = n(433355),
    eB = n(592125),
    eV = n(896797),
    eH = n(430824),
    eF = n(819640),
    ez = n(283595),
    eW = n(944486),
    eY = n(914010),
    eK = n(695103),
    eq = n(241890),
    eX = n(417363),
    eQ = n(900974),
    eJ = n(358085),
    e$ = n(998502),
    e0 = n(346329),
    e1 = n(981631),
    e3 = n(176505),
    e8 = n(701476),
    e5 = n(186901);
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
function e2(e) {
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
n(117240), n(801077), n(967368), n(272053), n(974180), n(574254), n(551428), n(55563), n(882029), n(959457), n(653255), n(663389), n(25990), n(778825), n(999382), n(388610), n(533947), n(277053), n(371398), n(141233), n(471073), n(606206);
let e7 = !1;
(0, S.DL)(),
    o.ZP.initialize(),
    eI.Z.loadServer(),
    eJ.isPlatformEmbedded &&
        (e$.ZP.on('USER_SETTINGS_OPEN', (e, t) => {
            eF.Z.getLayers().includes(e1.S9g.USER_SETTINGS) || f.Z.open(null != t ? t : e1.oAB.ACCOUNT);
        }),
        e$.ZP.on('LAUNCH_APPLICATION', (e, t) => {
            let n = ez.Z.getActiveLibraryApplication(t);
            e0.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e1.ZY5.DIRECT,
                        object: e1.qAy.WEB_URL
                    }
                }
            });
        }));
let e6 = (0, m.l)((e) => {
        let { location: t } = e,
            n = (0, eD.default)(t.pathname);
        return (
            null != n &&
                (0, q.h)(() =>
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
    e9 = o.ZP.connectStores([K.Z, eV.Z, eU.default], () => ({
        isConnected: K.Z.isConnected(),
        defaultRoute: eV.Z.defaultRoute,
        defaultRouteFallback: eV.Z.fallbackRoute,
        token: eU.default.getToken()
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
                    return null == e || ((e.params.guildId === e1.ME || null != eH.Z.getGuild(e.params.guildId)) && null != eB.Z.getChannel(e.params.channelId)) ? (0, r.jsx)(a.l_, { to: t }) : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        }
    ),
    te = (0, m.l)((0, T.e)(j.Z, null, { passProps: !1 })),
    tt = (0, T.e)(X.default, null, { passProps: !1 }),
    tn = [e1.Z5c.GUILD_BOOSTING_MARKETING(eO.Hw.guildId()), ...Array.from(e3.Vg).map((e) => e1.Z5c.CHANNEL(eO.Hw.guildId(), e))];
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
            return (0, r.jsx)(e9, { match: t });
        },
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.APP],
        render: () => (0, r.jsx)(e9, {}),
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.USERS(':id')],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, q.h)(() =>
                    (0, ex.openUserProfileModal)({
                        userId: n,
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
                eX.Z.whenInitialized(() => {
                    ez.Z.whenInitialized(() => {
                        switch (i) {
                            case 'launch': {
                                let e = ez.Z.getActiveLibraryApplication(n);
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
                                eK.Z.whenInitialized(() => h.Wt(n));
                                break;
                            case 'uninstall': {
                                let e = ez.Z.getActiveLibraryApplication(n);
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
            return (0, q.h)(() => D.Z.openCreateGuildModal({ location: 'External link' })), (0, r.jsx)(a.l_, { to: eV.Z.defaultRoute });
        }
    },
    {
        path: [e1.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, q.h)(() =>
                    et.v({
                        section: (0, ee.Z)(e1.pNK, n),
                        subsection: (0, ee.Z)(e1.KsC, i),
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
        render: e6,
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(eO.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, q.h)(() => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = e2({}, t)),
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
            return (0, q.h)(() => f.Z.open(e1.oAB.INVENTORY)), (0, r.jsx)(a.l_, { to: eV.Z.defaultRoute });
        },
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.WELCOME(eO.Hw.guildId({ optional: !0 }), eO.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, es.c)(e8.M5.MARKETING_UNCLAIMED);
            let l = e1.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.GUILD_EVENT_DETAILS(eO.Hw.guildId({ optional: !0 }), ':guildEventId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, q.h)(() => {
                    (0, J.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e1.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [e1.Z5c.GUILD_SETTINGS(eO.Hw.guildId(), ':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, q.h)(() => {
                    $.Z.open(n, (0, ee.Z)(e1.pNK, i), void 0, (0, ee.Z)(e1.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e1.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [e1.Z5c.CHANNEL_THREAD_VIEW(eO.Hw.guildId(), eO.Hw.channelId(), ':threadId', ':messageId?'), e1.Z5c.CHANNEL(eO.Hw.guildId(), eO.Hw.channelId({ optional: !0 }), ':messageId?'), e1.Z5c.ACTIVITY, e1.Z5c.ACTIVITIES, e1.Z5c.ACTIVITIES_HAPPENING_NOW, e1.Z5c.ACTIVITY_DETAILS(':applicationId'), e1.Z5c.APPLICATION_LIBRARY, e1.Z5c.APPLICATION_STORE, e1.Z5c.MESSAGE_REQUESTS, e1.Z5c.COLLECTIBLES_SHOP, e1.Z5c.COLLECTIBLES_SHOP_FULLSCREEN, e1.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'), e1.Z5c.GUILD_DISCOVERY, e1.Z5c.QUEST_HOME, e1.Z5c.GLOBAL_DISCOVERY, e1.Z5c.GUILD_MEMBER_VERIFICATION(eO.Hw.guildId()), e1.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(eO.Hw.guildId(), ':inviteCode?'), e1.Z5c.GUILD_BOOSTING_MARKETING(eO.Hw.guildId()), e1.Z5c.GUILD_FEATURE(':feature', eO.Hw.guildId()), e1.Z5c.FEATURE(':feature'), e1.Z5c.FAMILY_CENTER, e1.Z5c.NOTIFICATIONS_INBOX(eO.Hw.channelId({ optional: !0 }), ':messageId?')],
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
    if (!K.Z.isConnected()) return;
    let { location: i } = (0, ey.s1)();
    i.pathname === r && (null == eB.Z.getChannel(t) ? (0, ey.dL)(e1.Z5c.CHANNEL(n)) : (0, ey.dL)(r));
}
class to extends i.PureComponent {
    componentDidMount() {
        e$.ZP.setZoomFactor(b.Z.zoom),
            eI.Z.init(),
            P.Z.initialize(),
            ef.Z.initialize(),
            F.Z.initialize(),
            eM.Z.initialize(),
            z.Z.initialize(),
            em.Z.initialize(),
            M.Z.initialize(),
            ei.Z.initialize(),
            _.Z.init(),
            Y.Z.init(),
            W.Z.init(),
            ec.Z.initialize(),
            v.Z.initialize(),
            B.Z.initialize(),
            eb.Z.initialize(),
            I.ZP.initialize(),
            ek.Z.initialize(),
            eh.Z.initialize(),
            y.Z.initialize(),
            en.Z.init(),
            x.Z.init(),
            eQ.Z.init(),
            O.Z.initialize(),
            eZ.Z.init(),
            eq.Z.init(),
            eL.Z.init(),
            eT.Z.initialize(),
            eP.Z.initialize(),
            ew.Z.initialize(),
            eR.Z.init(),
            G.Z.initialize(),
            E.Z.initialize(),
            ev.Z.initialize(),
            eN.Z.initialize(),
            ed.Z.initialize(),
            eu.Z.initialize(),
            ep.Z.initialize(),
            w.Z.initialize(),
            L.Z.initialize(),
            H.Z.initialize(),
            er.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, e2({}, t));
                    })
            }),
            U.Z.init(),
            el.Z.initialize(),
            e_.Z.initialize(),
            eg.Z.initialize(),
            k.Z.initialize(),
            A.Z.initialize(),
            Z.Z.initialize(),
            C.Z.initialize(),
            (this.rewriterUnlisten = eE.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eE.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eI.Z.terminate(), eM.Z.terminate(), em.Z.terminate(), ef.Z.terminate(), P.Z.terminate(), I.ZP.terminate(), ek.Z.terminate(), y.Z.terminate(), eb.Z.terminate(), eh.Z.terminate(), ew.Z.terminate(), O.Z.terminate(), G.Z.terminate(), el.Z.terminate(), E.Z.terminate(), e_.Z.terminate(), ev.Z.terminate(), eN.Z.terminate(), ed.Z.terminate(), eu.Z.terminate(), ep.Z.terminate(), w.Z.terminate(), L.Z.terminate(), eg.Z.terminate(), k.Z.terminate(), V.Z.terminate(), A.Z.terminate(), Z.Z.terminate(), C.Z.terminate(), H.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (K.Z.isConnected() || K.Z.isTryingToConnect()) return;
            let t = eU.default.getToken();
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
                    c = (0, eO.Ss)(r),
                    u = (0, eO.cq)(i),
                    h = (0, eO.cq)(s),
                    f = eY.Z.getGuildId(),
                    g = f !== r;
                if ((c && g && d.Z.selectGuild(r), c && u)) {
                    let n = eW.Z.getChannelId(f),
                        a = n !== i;
                    if (!e7 || g || a || null != o) {
                        (e7 = !0),
                            p.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && ej.ZP.setSelectedSummary(i, e);
                    }
                    if (null != s && h) {
                        let e = eG.ZP.getCurrentSidebarChannelId(n) !== s,
                            t = null != eG.ZP.getGuildSidebarState(r);
                        if (null != i && null != s && e)
                            if (t) (0, ey.dL)(e1.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eS.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    eC.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e
                                    });
                            }
                    } else null == i || a || eC.Z.closeChannelSidebar(i);
                    let c = eo.Z.getIsOpen();
                    if (i === e3.oC.ROLE_SUBSCRIPTIONS) ea.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == f && r === e1.ME,
                            n = e === e1.Z5c.GUILD_DISCOVERY;
                        t || n ? ea.Z.closeSidebar() : ea.Z.openSidebar();
                    } else ((a && c) || (!g && !a)) && ea.Z.closeSidebar();
                } else
                    tn.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, ey.dL)(eV.Z.fallbackRoute);
            })(t, n);
    }
    ensureChannelMatchesGuild(e) {
        if (!K.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = tl(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = tr(n),
            a = (0, eO.Ss)(r) && r !== e1.ME && r !== e1.I_8;
        if (null != i && (0, eO.cq)(i) && !(0, e3.AB)(i) && a) {
            let n = eB.Z.getChannel(i);
            if (null == n)
                eA.Z.loadThread(i).then(() =>
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
                if (!((0, eO.cq)(l) && !(0, e3.AB)(i))) return null;
                let n = eB.Z.getChannel(l);
                if (null == n)
                    eA.Z.loadThread(l).then(() =>
                        ta({
                            channelId: l,
                            guildId: r,
                            pathname: t
                        })
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eC.Z.closeChannelSidebar(i),
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
                (0, r.jsx)(R.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e), e4(this, 'historyUnlisten', () => {}), e4(this, 'rewriterUnlisten', () => {});
    }
}
let ts = to;
