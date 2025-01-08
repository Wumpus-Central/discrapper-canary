n.r(t), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(593473),
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
    f = n(627845),
    _ = n(185666),
    E = n(503737),
    I = n(513202),
    C = n(318891),
    N = n(687751),
    v = n(912471),
    S = n(100527),
    T = n(838134),
    b = n(77987),
    A = n(679891),
    Z = n(491575),
    x = n(954709),
    L = n(644679),
    P = n(314533),
    O = n(9029),
    y = n(935347),
    R = n(560067),
    j = n(823169),
    D = n(845767),
    M = n(620360),
    w = n(96051),
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
    er = n(929809),
    el = n(122333),
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
    ef = n(893607),
    e_ = n(703656),
    eE = n(298969),
    eI = n(719256),
    eC = n(6025),
    eN = n(897473),
    ev = n(377368),
    eS = n(262702),
    eT = n(639033),
    eb = n(479313),
    eA = n(911560),
    eZ = n(703016),
    ex = n(171368),
    eL = n(429974),
    eP = n(332754),
    eO = n(507468),
    ey = n(357269),
    eR = n(282506),
    ej = n(444961),
    eD = n(314897),
    eM = n(433355),
    ew = n(592125),
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
(0, v.D)(),
    s.ZP.initialize(),
    eE.Z.loadServer(),
    eq.isPlatformEmbedded &&
        (eX.ZP.on('USER_SETTINGS_OPEN', () => {
            !eG.Z.getLayers().includes(eJ.S9g.USER_SETTINGS) && p.Z.open(eJ.oAB.ACCOUNT);
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
        class extends r.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, Y.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: r } = this.props;
                if (null == n) return (0, i.jsx)(a.l_, { to: eJ.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = e8(t);
                    return null == e || ((e.params.guildId === eJ.ME || null != eU.Z.getGuild(e.params.guildId)) && null != ew.Z.getChannel(e.params.channelId)) ? (0, i.jsx)(a.l_, { to: t }) : (0, i.jsx)(a.l_, { to: r });
                }
                return null;
            }
        }
    ),
    e3 = (0, b.e)(Z.Z, null, { passProps: !1 }),
    e5 = (0, b.e)(T.default, null, { passProps: !1 }),
    e7 = [eJ.Z5c.GUILD_BOOSTING_MARKETING(ef.Hw.guildId()), ...Array.from(e$.Vg).map((e) => eJ.Z5c.CHANNEL(ef.Hw.guildId(), e))];
function e9(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: r = null } = e.params;
    return {
        guildId: null != t ? t : eJ.ME,
        channelId: n,
        messageId: i,
        threadId: r
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
                { friend_token: r } = (0, l.parse)(n.search),
                { id: s } = t.params;
            return (
                (0, z.h)(() =>
                    (0, ex.openUserProfileModal)({
                        userId: s,
                        friendToken: r,
                        sourceAnalyticsLocations: [S.Z.URI_SCHEME],
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
                { gameId: n, action: r } = t.params;
            return (
                eY.Z.whenInitialized(() => {
                    eB.Z.whenInitialized(() => {
                        switch (r) {
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
                { section: n, subsection: r } = t.params,
                s = (0, l.parse)(location.search).feature;
            return (
                (0, z.h)(() =>
                    Q.v({
                        section: (0, X.Z)(eJ.pNK, n),
                        subsection: (0, X.Z)(eJ.KsC, r),
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
                n = (0, ey.default)(t.pathname);
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
        path: [eJ.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(ef.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: r } = t.params;
            return (
                (0, z.h)(() => {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('5863'), n.e('97984')]).then(n.bind(n, 751212));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: r
                            });
                    });
                }),
                (0, i.jsx)(a.l_, { to: eJ.Z5c.CHANNEL(r) })
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
        path: [eJ.Z5c.WELCOME(ef.Hw.guildId({ optional: !0 }), ef.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: r } = t.params;
            (0, er.c)(e0.M5.MARKETING_UNCLAIMED);
            let l = eJ.Z5c.CHANNEL(n, r);
            return (0, i.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.GUILD_EVENT_DETAILS(ef.Hw.guildId({ optional: !0 }), ':guildEventId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: r } = t.params;
            return (
                (0, z.h)(() => {
                    (0, K.bO)({ eventId: r });
                }),
                (0, i.jsx)(a.l_, { to: eJ.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eJ.Z5c.GUILD_SETTINGS(ef.Hw.guildId(), ':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: r, subsection: l } = t.params;
            return (
                (0, z.h)(() => {
                    q.Z.open(n, (0, X.Z)(eJ.pNK, r), void 0, (0, X.Z)(eJ.KsC, l));
                }),
                (0, i.jsx)(a.l_, { to: eJ.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eJ.Z5c.CHANNEL_THREAD_VIEW(ef.Hw.guildId(), ef.Hw.channelId(), ':threadId', ':messageId?'), eJ.Z5c.CHANNEL(ef.Hw.guildId(), ef.Hw.channelId({ optional: !0 }), ':messageId?'), eJ.Z5c.ACTIVITY, eJ.Z5c.ACTIVITIES, eJ.Z5c.ACTIVITIES_HAPPENING_NOW, eJ.Z5c.ACTIVITY_DETAILS(':applicationId'), eJ.Z5c.APPLICATION_LIBRARY, eJ.Z5c.APPLICATION_STORE, eJ.Z5c.MESSAGE_REQUESTS, eJ.Z5c.COLLECTIBLES_SHOP, eJ.Z5c.COLLECTIBLES_SHOP_FULLSCREEN, eJ.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'), eJ.Z5c.GUILD_DISCOVERY, eJ.Z5c.QUEST_HOME, eJ.Z5c.GLOBAL_DISCOVERY, eJ.Z5c.GUILD_MEMBER_VERIFICATION(ef.Hw.guildId(), ':inviteCode?'), eJ.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(ef.Hw.guildId(), ':inviteCode?'), eJ.Z5c.GUILD_BOOSTING_MARKETING(ef.Hw.guildId()), eJ.Z5c.FEATURE(':feature'), eJ.Z5c.FAMILY_CENTER],
        render: e3,
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eJ.Z5c.APPLICATION_DIRECTORY],
        render: e5,
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
    let { location: r } = (0, e_.s1)();
    if (r.pathname === i) null == ew.Z.getChannel(t) ? (0, e_.dL)(eJ.Z5c.CHANNEL(n)) : (0, e_.dL)(i);
}
class tt extends r.PureComponent {
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
            f.Z.init(),
            H.Z.init(),
            V.Z.init(),
            el.Z.initialize(),
            N.Z.initialize(),
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
            eZ.Z.init(),
            ez.Z.init(),
            eP.Z.init(),
            eS.Z.initialize(),
            eT.Z.initialize(),
            eL.Z.initialize(),
            eO.Z.init(),
            w.Z.initialize(),
            _.Z.initialize(),
            eI.Z.initialize(),
            ev.Z.initialize(),
            es.Z.initialize(),
            ea.Z.initialize(),
            eo.Z.initialize(),
            P.Z.initialize(),
            O.Z.initialize(),
            $.Z.init({
                hasModalOpen: o.hasAnyModalOpen,
                openModal: () =>
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, i.jsx)(e, { ...t });
                    })
            }),
            M.Z.init(),
            et.Z.initialize(),
            ep.Z.initialize(),
            eu.Z.initialize(),
            j.Z.initialize(),
            x.Z.initialize(),
            L.Z.initialize(),
            (this.rewriterUnlisten = eg.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eg.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        ej.Z.terminate(), eh.Z.terminate(), ed.Z.terminate(), A.Z.terminate(), C.ZP.terminate(), eR.Z.terminate(), I.Z.terminate(), em.Z.terminate(), ec.Z.terminate(), eL.Z.terminate(), E.Z.terminate(), w.Z.terminate(), et.Z.terminate(), _.Z.terminate(), ep.Z.terminate(), eI.Z.terminate(), ev.Z.terminate(), es.Z.terminate(), ea.Z.terminate(), eo.Z.terminate(), P.Z.terminate(), O.Z.terminate(), eu.Z.terminate(), j.Z.terminate(), U.Z.terminate(), x.Z.terminate(), L.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (F.Z.isConnected() || F.Z.isTryingToConnect()) return;
            let t = eD.default.getToken();
            if (null != t)
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of e6) {
                            if (!n) continue;
                            let i = (0, a.LX)(e, { path: t });
                            if (null != i) return i;
                        }
                        return null;
                    })(e) && c.Z.startSession(t);
        })(t),
            !(function (e, t) {
                let n = e8(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: s, threadId: o } = e9(n),
                    c = (0, ef.Ss)(i),
                    d = (0, ef.cq)(r),
                    m = (0, ef.cq)(o),
                    p = eH.Z.getGuildId(),
                    g = p !== i;
                if ((c && g && u.Z.selectGuild(i), c && d)) {
                    let n = eV.Z.getChannelId(p),
                        a = n !== r;
                    if (!e4 || g || a || null != s) {
                        (e4 = !0),
                            h.default.selectChannel({
                                guildId: i,
                                channelId: r,
                                messageId: s
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eb.ZP.setSelectedSummary(r, e);
                    }
                    if (null != o && m) {
                        let e = eM.ZP.getCurrentSidebarChannelId(n) !== o,
                            t = null != eM.ZP.getGuildSidebarState(i);
                        if (null != r && null != o && e) {
                            if (t) (0, e_.dL)(eJ.Z5c.CHANNEL(i, o, s));
                            else {
                                let e = { type: eN.Ff.THREAD };
                                null != s && (e.initialMessageId = s),
                                    eC.Z.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: o,
                                        details: e
                                    });
                            }
                        }
                    } else null != r && !a && eC.Z.closeChannelSidebar(r);
                    let c = ei.Z.getIsOpen();
                    if (r === e$.oC.ROLE_SUBSCRIPTIONS) en.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == p && i === eJ.ME,
                            n = e === eJ.Z5c.GUILD_DISCOVERY;
                        t || n ? en.Z.closeSidebar() : en.Z.openSidebar();
                    } else ((a && c) || (!g && !a)) && en.Z.closeSidebar();
                } else {
                    var f;
                    if (
                        ((f = e),
                        !e7.some((e) => {
                            var t;
                            return (null === (t = (0, a.LX)(f, e)) || void 0 === t ? void 0 : t.isExact) === !0;
                        }))
                    )
                        (0, e_.dL)(ek.Z.fallbackRoute);
                }
            })(t, n);
    }
    ensureChannelMatchesGuild(e) {
        if (!F.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = e8(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: l } = e9(n),
            a = (0, ef.Ss)(i) && i !== eJ.ME && i !== eJ.I_8;
        if (null != r && (0, ef.cq)(r) && !(0, e$.AB)(r) && a) {
            let n = ew.Z.getChannel(r);
            if (null == n)
                eA.Z.loadThread(r).then(() =>
                    te({
                        channelId: r,
                        guildId: i,
                        pathname: t
                    })
                );
            else if (n.guild_id !== i)
                return {
                    path: eJ.Z5c.CHANNEL(i),
                    state: e.state
                };
            if (null != l) {
                if (!((0, ef.cq)(l) && !(0, e$.AB)(r))) return null;
                let n = ew.Z.getChannel(l);
                if (null == n)
                    eA.Z.loadThread(l).then(() =>
                        te({
                            channelId: l,
                            guildId: i,
                            pathname: t
                        })
                    );
                else if ((null == n ? void 0 : n.parent_id) !== r)
                    return (
                        eC.Z.closeChannelSidebar(r),
                        {
                            path: eJ.Z5c.CHANNEL(i, r),
                            state: e.state
                        }
                    );
            }
        }
        return null;
    }
    render() {
        return (0, i.jsxs)(r.Fragment, {
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
                (0, i.jsx)(y.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e), e1(this, 'historyUnlisten', () => {}), e1(this, 'rewriterUnlisten', () => {});
    }
}
t.default = tt;
