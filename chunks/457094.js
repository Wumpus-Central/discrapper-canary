n.r(t), n.d(t, { default: () => tn }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(593473),
    a = n(512969),
    s = n(442837),
    o = n(481060),
    c = n(893776),
    d = n(943094),
    u = n(749210),
    h = n(287734),
    m = n(401430),
    p = n(230711),
    g = n(607070),
    _ = n(627845),
    f = n(185666),
    E = n(503737),
    I = n(513202),
    C = n(318891),
    v = n(687751),
    N = n(912471),
    T = n(100527),
    S = n(838134),
    Z = n(77987),
    A = n(679891),
    x = n(491575),
    b = n(954709),
    L = n(644679),
    y = n(314533),
    P = n(9029),
    O = n(935347),
    R = n(560067),
    j = n(823169),
    D = n(845767),
    w = n(620360),
    M = n(96051),
    k = n(750995),
    U = n(696287),
    G = n(408026),
    B = n(763916),
    V = n(306721),
    H = n(531551),
    F = n(38618),
    z = n(972830),
    W = n(981283),
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
    ei = n(659971),
    el = n(929809),
    er = n(122333),
    ea = n(960275),
    es = n(818765),
    eo = n(678492),
    ec = n(269089),
    ed = n(380570),
    eu = n(837689),
    eh = n(367207),
    em = n(489977),
    ep = n(329557),
    eg = n(304445),
    e_ = n(893607),
    ef = n(703656),
    eE = n(298969),
    eI = n(719256),
    eC = n(6025),
    ev = n(897473),
    eN = n(377368),
    eT = n(262702),
    eS = n(639033),
    eZ = n(479313),
    eA = n(911560),
    ex = n(703016),
    eb = n(171368),
    eL = n(429974),
    ey = n(332754),
    eP = n(507468),
    eO = n(357269),
    eR = n(282506),
    ej = n(444961),
    eD = n(314897),
    ew = n(433355),
    eM = n(592125),
    ek = n(896797),
    eU = n(430824),
    eG = n(819640),
    eB = n(283595),
    eV = n(944486),
    eH = n(914010),
    eF = n(695103),
    ez = n(241890),
    eW = n(897607),
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
n(117240), n(801077), n(967368), n(272053), n(974180), n(574254), n(551428), n(55563), n(882029), n(959457), n(653255), n(663389), n(25990), n(778825), n(999382), n(388610), n(533947), n(277053), n(371398), n(141233), n(471073);
let e4 = !1;
(0, N.D)(),
    s.ZP.initialize(),
    eE.Z.loadServer(),
    eq.isPlatformEmbedded &&
        (eX.ZP.on('USER_SETTINGS_OPEN', (e, t) => {
            eG.Z.getLayers().includes(eJ.S9g.USER_SETTINGS) || p.Z.open(null != t ? t : eJ.oAB.ACCOUNT);
        }),
        eX.ZP.on('LAUNCH_APPLICATION', (e, t) => {
            let n = eB.Z.getActiveLibraryApplication(t);
            eQ.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: eJ.ZY5.DIRECT,
                        object: eJ.qAy.WEB_URL
                    }
                }
            });
        }));
let e2 = s.ZP.connectStores([F.Z, ek.Z, eD.default], () => ({
        isConnected: F.Z.isConnected(),
        defaultRoute: ek.Z.defaultRoute,
        defaultRouteFallback: ek.Z.fallbackRoute,
        token: eD.default.getToken()
    }))(
        class extends l.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, Y.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: l } = this.props;
                if (null == n) return (0, i.jsx)(a.l_, { to: eJ.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = e8(t);
                    return null == e || ((e.params.guildId === eJ.ME || null != eU.Z.getGuild(e.params.guildId)) && null != eM.Z.getChannel(e.params.channelId)) ? (0, i.jsx)(a.l_, { to: t }) : (0, i.jsx)(a.l_, { to: l });
                }
                return null;
            }
        }
    ),
    e3 = (0, Z.e)(x.Z, null, { passProps: !1 }),
    e7 = (0, Z.e)(S.default, null, { passProps: !1 }),
    e9 = [eJ.Z5c.GUILD_BOOSTING_MARKETING(e_.Hw.guildId()), ...Array.from(e$.Vg).map((e) => eJ.Z5c.CHANNEL(e_.Hw.guildId(), e))];
function e5(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: l = null } = e.params;
    return {
        guildId: null != t ? t : eJ.ME,
        channelId: n,
        messageId: i,
        threadId: l
    };
}
let e6 = [
    {
        path: [eJ.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(':inviteCode')],
        render(e) {
            let { match: t } = e;
            return (0, i.jsx)(e2, { match: t });
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.APP],
        render: () => (0, i.jsx)(e2, {}),
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.USERS(':id')],
        render: function (e) {
            let { match: t, location: n } = e,
                { friend_token: l } = (0, r.parse)(n.search),
                { id: s } = t.params;
            return (
                (0, z.h)(() =>
                    (0, eb.openUserProfileModal)({
                        userId: s,
                        friendToken: l,
                        sourceAnalyticsLocations: [T.Z.URI_SCHEME],
                        analyticsLocation: { section: eJ.jXE.DIRECT_ROUTE_ACCESS }
                    })
                ),
                (0, i.jsx)(a.l_, { to: ek.Z.defaultRoute })
            );
        }
    },
    {
        path: [eJ.Z5c.APPLICATION_LIBRARY_ACTION(':gameId', ':action')],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: l } = t.params;
            return (
                eY.Z.whenInitialized(() => {
                    eB.Z.whenInitialized(() => {
                        switch (l) {
                            case 'launch': {
                                let e = eB.Z.getActiveLibraryApplication(n);
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
                                eF.Z.whenInitialized(() => m.Wt(n));
                                break;
                            case 'uninstall': {
                                let e = eB.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, d.W)(e.id, e.branchId, eJ.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, i.jsx)(a.l_, { to: eJ.Z5c.APPLICATION_LIBRARY })
            );
        }
    },
    {
        path: [eJ.Z5c.GUILD_CREATE],
        render: function () {
            return (0, z.h)(() => R.Z.openCreateGuildModal({ location: 'External link' })), (0, i.jsx)(a.l_, { to: ek.Z.defaultRoute });
        }
    },
    {
        path: [eJ.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: l } = t.params,
                s = (0, r.parse)(location.search).feature;
            return (
                (0, z.h)(() =>
                    Q.v({
                        section: (0, X.Z)(eJ.pNK, n),
                        subsection: (0, X.Z)(eJ.KsC, l),
                        feature: s
                    })
                ),
                (0, i.jsx)(a.l_, { to: ek.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.SETTINGS(':section', ':subsection?')],
        render: function (e) {
            let { location: t } = e,
                n = (0, eO.default)(t.pathname);
            return (
                null != n &&
                    (0, z.h)(() =>
                        p.Z.open(n.section, n.subsection, {
                            openWithoutBackstack: !1,
                            impressionSource: n.source
                        })
                    ),
                (0, i.jsx)(a.l_, { to: ek.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(e_.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: l } = t.params;
            return (
                (0, z.h)(() => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('5863'), n.e('58984')]).then(n.bind(n, 751212));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: l
                            });
                    });
                }),
                (0, i.jsx)(a.l_, { to: eJ.Z5c.CHANNEL(l) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (0, z.h)(() => p.Z.open(eJ.oAB.INVENTORY)), (0, i.jsx)(a.l_, { to: ek.Z.defaultRoute });
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.WELCOME(e_.Hw.guildId({ optional: !0 }), e_.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: l } = t.params;
            (0, el.c)(e0.M5.MARKETING_UNCLAIMED);
            let r = eJ.Z5c.CHANNEL(n, l);
            return (0, i.jsx)(a.l_, { to: r });
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.GUILD_EVENT_DETAILS(e_.Hw.guildId({ optional: !0 }), ':guildEventId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: l } = t.params;
            return (
                (0, z.h)(() => {
                    (0, K.bO)({ eventId: l });
                }),
                (0, i.jsx)(a.l_, { to: eJ.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.GUILD_SETTINGS(e_.Hw.guildId(), ':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: l, subsection: r } = t.params;
            return (
                (0, z.h)(() => {
                    q.Z.open(n, (0, X.Z)(eJ.pNK, l), void 0, (0, X.Z)(eJ.KsC, r));
                }),
                (0, i.jsx)(a.l_, { to: eJ.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eJ.Z5c.CHANNEL_THREAD_VIEW(e_.Hw.guildId(), e_.Hw.channelId(), ':threadId', ':messageId?'), eJ.Z5c.CHANNEL(e_.Hw.guildId(), e_.Hw.channelId({ optional: !0 }), ':messageId?'), eJ.Z5c.ACTIVITY, eJ.Z5c.ACTIVITIES, eJ.Z5c.ACTIVITIES_HAPPENING_NOW, eJ.Z5c.ACTIVITY_DETAILS(':applicationId'), eJ.Z5c.APPLICATION_LIBRARY, eJ.Z5c.APPLICATION_STORE, eJ.Z5c.MESSAGE_REQUESTS, eJ.Z5c.COLLECTIBLES_SHOP, eJ.Z5c.COLLECTIBLES_SHOP_FULLSCREEN, eJ.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'), eJ.Z5c.GUILD_DISCOVERY, eJ.Z5c.QUEST_HOME, eJ.Z5c.GLOBAL_DISCOVERY, eJ.Z5c.GUILD_MEMBER_VERIFICATION(e_.Hw.guildId()), eJ.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(e_.Hw.guildId(), ':inviteCode?'), eJ.Z5c.GUILD_BOOSTING_MARKETING(e_.Hw.guildId()), eJ.Z5c.FEATURE(':feature'), eJ.Z5c.FAMILY_CENTER],
        render: e3,
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eJ.Z5c.APPLICATION_DIRECTORY],
        render: e7,
        isSessionRequired: !0
    }
];
function e8(e) {
    for (let { path: t, isChatRoute: n } of e6) {
        if (!n) continue;
        let i = (0, a.LX)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function te(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!F.Z.isConnected()) return;
    let { location: l } = (0, ef.s1)();
    l.pathname === i && (null == eM.Z.getChannel(t) ? (0, ef.dL)(eJ.Z5c.CHANNEL(n)) : (0, ef.dL)(i));
}
class tt extends l.PureComponent {
    componentDidMount() {
        eX.ZP.setZoomFactor(g.Z.zoom),
            eE.Z.init(),
            A.Z.initialize(),
            ed.Z.initialize(),
            G.Z.initialize(),
            ej.Z.initialize(),
            B.Z.initialize(),
            eh.Z.initialize(),
            D.Z.initialize(),
            ee.Z.initialize(),
            _.Z.init(),
            H.Z.init(),
            V.Z.init(),
            er.Z.initialize(),
            v.Z.initialize(),
            k.Z.initialize(),
            em.Z.initialize(),
            C.ZP.initialize(),
            eR.Z.initialize(),
            ec.Z.initialize(),
            I.Z.initialize(),
            W.Z.init(),
            J.Z.init(),
            eW.Z.init(),
            eK.Z.init(),
            E.Z.initialize(),
            ex.Z.init(),
            ez.Z.init(),
            ey.Z.init(),
            eT.Z.initialize(),
            eS.Z.initialize(),
            eL.Z.initialize(),
            eP.Z.init(),
            M.Z.initialize(),
            f.Z.initialize(),
            eI.Z.initialize(),
            eN.Z.initialize(),
            es.Z.initialize(),
            ea.Z.initialize(),
            eo.Z.initialize(),
            y.Z.initialize(),
            P.Z.initialize(),
            $.Z.init({
                hasModalOpen: o.$sL,
                openModal: () =>
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, i.jsx)(e, { ...t });
                    })
            }),
            w.Z.init(),
            et.Z.initialize(),
            ep.Z.initialize(),
            eu.Z.initialize(),
            j.Z.initialize(),
            b.Z.initialize(),
            L.Z.initialize(),
            (this.rewriterUnlisten = eg.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eg.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eE.Z.terminate(), ej.Z.terminate(), eh.Z.terminate(), ed.Z.terminate(), A.Z.terminate(), C.ZP.terminate(), eR.Z.terminate(), I.Z.terminate(), em.Z.terminate(), ec.Z.terminate(), eL.Z.terminate(), E.Z.terminate(), M.Z.terminate(), et.Z.terminate(), f.Z.terminate(), ep.Z.terminate(), eI.Z.terminate(), eN.Z.terminate(), es.Z.terminate(), ea.Z.terminate(), eo.Z.terminate(), y.Z.terminate(), P.Z.terminate(), eu.Z.terminate(), j.Z.terminate(), U.Z.terminate(), b.Z.terminate(), L.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (F.Z.isConnected() || F.Z.isTryingToConnect()) return;
            let t = eD.default.getToken();
            null != t &&
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of e6) {
                            if (!n) continue;
                            let i = (0, a.LX)(e, { path: t });
                            if (null != i) return i;
                        }
                        return null;
                    })(e) &&
                c.Z.startSession(t);
        })(t),
            (function (e, t) {
                let n = e8(e);
                if (null == n) return;
                let { guildId: i, channelId: l, messageId: s, threadId: o } = e5(n),
                    c = (0, e_.Ss)(i),
                    d = (0, e_.cq)(l),
                    m = (0, e_.cq)(o),
                    p = eH.Z.getGuildId(),
                    g = p !== i;
                if ((c && g && u.Z.selectGuild(i), c && d)) {
                    let n = eV.Z.getChannelId(p),
                        a = n !== l;
                    if (!e4 || g || a || null != s) {
                        (e4 = !0),
                            h.default.selectChannel({
                                guildId: i,
                                channelId: l,
                                messageId: s
                            });
                        let { summaryId: e } = (0, r.parse)(t);
                        null != e && eZ.ZP.setSelectedSummary(l, e);
                    }
                    if (null != o && m) {
                        let e = ew.ZP.getCurrentSidebarChannelId(n) !== o,
                            t = null != ew.ZP.getGuildSidebarState(i);
                        if (null != l && null != o && e) {
                            if (t) (0, ef.dL)(eJ.Z5c.CHANNEL(i, o, s));
                            else {
                                let e = { type: ev.Ff.THREAD };
                                null != s && (e.initialMessageId = s),
                                    eC.Z.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: l,
                                        channelId: o,
                                        details: e
                                    });
                            }
                        }
                    } else null == l || a || eC.Z.closeChannelSidebar(l);
                    let c = ei.Z.getIsOpen();
                    if (l === e$.oC.ROLE_SUBSCRIPTIONS) en.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == p && i === eJ.ME,
                            n = e === eJ.Z5c.GUILD_DISCOVERY;
                        t || n ? en.Z.closeSidebar() : en.Z.openSidebar();
                    } else ((a && c) || (!g && !a)) && en.Z.closeSidebar();
                } else
                    !e9.some((t) => {
                        var n;
                        return (null === (n = (0, a.LX)(e, t)) || void 0 === n ? void 0 : n.isExact) === !0;
                    }) && (0, ef.dL)(ek.Z.fallbackRoute);
            })(t, n);
    }
    ensureChannelMatchesGuild(e) {
        if (!F.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = e8(t);
        if (null == n) return null;
        let { guildId: i, channelId: l, threadId: r } = e5(n),
            a = (0, e_.Ss)(i) && i !== eJ.ME && i !== eJ.I_8;
        if (null != l && (0, e_.cq)(l) && !(0, e$.AB)(l) && a) {
            let n = eM.Z.getChannel(l);
            if (null == n)
                eA.Z.loadThread(l).then(() =>
                    te({
                        channelId: l,
                        guildId: i,
                        pathname: t
                    })
                );
            else if (n.guild_id !== i)
                return {
                    path: eJ.Z5c.CHANNEL(i),
                    state: e.state
                };
            if (null != r) {
                if (!((0, e_.cq)(r) && !(0, e$.AB)(l))) return null;
                let n = eM.Z.getChannel(r);
                if (null == n)
                    eA.Z.loadThread(r).then(() =>
                        te({
                            channelId: r,
                            guildId: i,
                            pathname: t
                        })
                    );
                else if ((null == n ? void 0 : n.parent_id) !== l)
                    return (
                        eC.Z.closeChannelSidebar(l),
                        {
                            path: eJ.Z5c.CHANNEL(i, l),
                            state: e.state
                        }
                    );
            }
        }
        return null;
    }
    render() {
        return (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsxs)(a.rs, {
                    children: [
                        (0, i.jsx)(a.l_, {
                            exact: !0,
                            from: '/channels',
                            to: '/'
                        }),
                        e6.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, i.jsx)(
                                a.AW,
                                {
                                    path: t,
                                    render: n
                                },
                                t[0]
                            );
                        }),
                        (0, i.jsx)(a.l_, { to: '/' })
                    ]
                }),
                (0, i.jsx)(O.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e), e1(this, 'historyUnlisten', () => {}), e1(this, 'rewriterUnlisten', () => {});
    }
}
let tn = tt;
