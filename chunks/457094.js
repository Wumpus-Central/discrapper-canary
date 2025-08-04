(n.r(t), n.d(t, { default: () => tc }), n(35282), n(388685));
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
    O = n(185666),
    E = n(503737),
    y = n(513202),
    v = n(318891),
    I = n(687751),
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
    V = n(750995),
    H = n(610278),
    B = n(696287),
    F = n(657030),
    z = n(408026),
    W = n(763916),
    Y = n(306721),
    K = n(531551),
    q = n(38618),
    Q = n(972830),
    X = n(684572),
    J = n(584233),
    $ = n(15274),
    ee = n(434404),
    et = n(543842),
    en = n(879064),
    er = n(315964),
    ei = n(495784),
    el = n(975533),
    ea = n(377400),
    eo = n(285865),
    es = n(659971),
    ec = n(929809),
    eu = n(122333),
    ed = n(960275),
    ep = n(818765),
    eh = n(678492),
    ef = n(269089),
    eg = n(380570),
    em = n(837689),
    eb = n(367207),
    e_ = n(489977),
    eO = n(329557),
    eE = n(304445),
    ey = n(893607),
    ev = n(703656),
    eI = n(298969),
    eC = n(719256),
    eS = n(6025),
    eN = n(897473),
    eT = n(377368),
    eP = n(262702),
    ej = n(639033),
    eA = n(479313),
    eZ = n(911560),
    ex = n(703016),
    ew = n(892001),
    eL = n(497805),
    eR = n(332754),
    eD = n(507468),
    ek = n(722589),
    eM = n(282506),
    eU = n(444961),
    eG = n(314897),
    eV = n(433355),
    eH = n(592125),
    eB = n(896797),
    eF = n(430824),
    ez = n(819640),
    eW = n(283595),
    eY = n(944486),
    eK = n(914010),
    eq = n(695103),
    eQ = n(241890),
    eX = n(417363),
    eJ = n(900974),
    e$ = n(358085),
    e0 = n(998502),
    e1 = n(346329),
    e3 = n(981631),
    e8 = n(176505),
    e5 = n(701476),
    e4 = n(186901);
function e7(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                e7(e, t, n[t]);
            }));
    }
    return e;
}
(n(117240), n(801077), n(967368), n(272053), n(974180), n(574254), n(551428), n(55563), n(882029), n(959457), n(653255), n(663389), n(25990), n(778825), n(999382), n(388610), n(533947), n(277053), n(371398), n(141233), n(471073), n(606206));
let e6 = !1;
((0, S.DL)(),
    o.ZP.initialize(),
    eI.Z.loadServer(),
    e$.isPlatformEmbedded &&
        (e0.ZP.on('USER_SETTINGS_OPEN', (e, t) => {
            ez.Z.getLayers().includes(e3.S9g.USER_SETTINGS) || f.Z.open(null != t ? t : e3.oAB.ACCOUNT);
        }),
        e0.ZP.on('LAUNCH_APPLICATION', (e, t) => {
            let n = eW.Z.getActiveLibraryApplication(t);
            e1.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e3.ZY5.DIRECT,
                        object: e3.qAy.WEB_URL
                    }
                }
            });
        })));
let e9 = (0, m.l)((e) => {
        let { location: t } = e,
            n = (0, ek.default)(t.pathname);
        return (
            null != n &&
                (0, Q.h)(() =>
                    f.Z.open(n.section, n.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: n.source
                    })
                ),
            (0, r.jsx)(g.Z, {
                deepLinkType: e4.jE.USER_SETTINGS,
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
                children: (0, r.jsx)(a.l_, { to: eB.Z.defaultRoute })
            })
        );
    }),
    te = o.ZP.connectStores([q.Z, eB.Z, eG.default], () => ({
        isConnected: q.Z.isConnected(),
        defaultRoute: eB.Z.defaultRoute,
        defaultRouteFallback: eB.Z.fallbackRoute,
        token: eG.default.getToken()
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, J.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: e3.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = ta(t);
                    return null == e || ((e.params.guildId === e3.ME || null != eF.Z.getGuild(e.params.guildId)) && null != eH.Z.getChannel(e.params.channelId)) ? (0, r.jsx)(a.l_, { to: t }) : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        }
    ),
    tt = (0, m.l)((0, T.e)(j.Z, null, { passProps: !1 })),
    tn = (0, T.e)(X.default, null, { passProps: !1 }),
    tr = [e3.Z5c.GUILD_BOOSTING_MARKETING(ey.Hw.guildId()), ...Array.from(e8.Vg).map((e) => e3.Z5c.CHANNEL(ey.Hw.guildId(), e))];
function ti(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : e3.ME,
        channelId: n,
        messageId: r,
        threadId: i
    };
}
let tl = [
    {
        path: [e3.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(':inviteCode')],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(te, { match: t });
        },
        isSessionRequired: !0
    },
    {
        path: [e3.Z5c.APP],
        render: () => (0, r.jsx)(te, {}),
        isSessionRequired: !0
    },
    {
        path: [e3.Z5c.USERS(':id')],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, Q.h)(() =>
                    (0, ew.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [N.Z.URI_SCHEME]
                    })
                ),
                (0, r.jsx)(a.l_, { to: eB.Z.defaultRoute })
            );
        }
    },
    {
        path: [e3.Z5c.APPLICATION_LIBRARY_ACTION(':gameId', ':action')],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                eX.Z.whenInitialized(() => {
                    eW.Z.whenInitialized(() => {
                        switch (i) {
                            case 'launch': {
                                let e = eW.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e1.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: e3.ZY5.DIRECT,
                                            object: e3.qAy.WEB_URL
                                        }
                                    }
                                });
                                break;
                            }
                            case 'test-mode':
                                eq.Z.whenInitialized(() => h.Wt(n));
                                break;
                            case 'uninstall': {
                                let e = eW.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, e3.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.l_, { to: e3.Z5c.APPLICATION_LIBRARY })
            );
        }
    },
    {
        path: [e3.Z5c.GUILD_CREATE],
        render: function () {
            return ((0, Q.h)(() => D.Z.openCreateGuildModal({ location: 'External link' })), (0, r.jsx)(a.l_, { to: eB.Z.defaultRoute }));
        }
    },
    {
        path: [e3.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, Q.h)(() =>
                    en.v({
                        section: (0, et.Z)(e3.pNK, n),
                        subsection: (0, et.Z)(e3.KsC, i),
                        feature: o
                    })
                ),
                (0, r.jsx)(a.l_, { to: eB.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [e3.Z5c.SETTINGS(':section', ':subsection?')],
        render: e9,
        isSessionRequired: !0
    },
    {
        path: [e3.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(ey.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, Q.h)(() => {
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
                (0, r.jsx)(a.l_, { to: e3.Z5c.CHANNEL(i) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [e3.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return ((0, Q.h)(() => f.Z.open(e3.oAB.INVENTORY)), (0, r.jsx)(a.l_, { to: eB.Z.defaultRoute }));
        },
        isSessionRequired: !0
    },
    {
        path: [e3.Z5c.WELCOME(ey.Hw.guildId({ optional: !0 }), ey.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, ec.c)(e5.M5.MARKETING_UNCLAIMED);
            let l = e3.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0
    },
    {
        path: [e3.Z5c.GUILD_EVENT_DETAILS(ey.Hw.guildId({ optional: !0 }), ':guildEventId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, Q.h)(() => {
                    (0, $.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e3.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [e3.Z5c.GUILD_SETTINGS(ey.Hw.guildId(), ':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, Q.h)(() => {
                    ee.Z.open(n, (0, et.Z)(e3.pNK, i), void 0, (0, et.Z)(e3.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e3.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [e3.Z5c.CHANNEL_THREAD_VIEW(ey.Hw.guildId(), ey.Hw.channelId(), ':threadId', ':messageId?'), e3.Z5c.CHANNEL(ey.Hw.guildId(), ey.Hw.channelId({ optional: !0 }), ':messageId?'), e3.Z5c.ACTIVITY, e3.Z5c.ACTIVITIES, e3.Z5c.ACTIVITIES_HAPPENING_NOW, e3.Z5c.ACTIVITY_DETAILS(':applicationId'), e3.Z5c.APPLICATION_LIBRARY, e3.Z5c.APPLICATION_STORE, e3.Z5c.MESSAGE_REQUESTS, e3.Z5c.COLLECTIBLES_SHOP, e3.Z5c.COLLECTIBLES_SHOP_FULLSCREEN, e3.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'), e3.Z5c.GUILD_DISCOVERY, e3.Z5c.QUEST_HOME, e3.Z5c.GLOBAL_DISCOVERY, e3.Z5c.GUILD_MEMBER_VERIFICATION(ey.Hw.guildId()), e3.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(ey.Hw.guildId(), ':inviteCode?'), e3.Z5c.GUILD_BOOSTING_MARKETING(ey.Hw.guildId()), e3.Z5c.GUILD_FEATURE(':feature', ey.Hw.guildId()), e3.Z5c.FEATURE(':feature'), e3.Z5c.FAMILY_CENTER],
        render: tt,
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [e3.Z5c.APPLICATION_DIRECTORY],
        render: tn,
        isSessionRequired: !0
    }
];
function ta(e) {
    for (let { path: t, isChatRoute: n } of tl) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function to(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!q.Z.isConnected()) return;
    let { location: i } = (0, ev.s1)();
    i.pathname === r && (null == eH.Z.getChannel(t) ? (0, ev.dL)(e3.Z5c.CHANNEL(n)) : (0, ev.dL)(r));
}
class ts extends i.PureComponent {
    componentDidMount() {
        (e0.ZP.setZoomFactor(b.Z.zoom),
            eI.Z.init(),
            P.Z.initialize(),
            eg.Z.initialize(),
            z.Z.initialize(),
            eU.Z.initialize(),
            W.Z.initialize(),
            eb.Z.initialize(),
            M.Z.initialize(),
            el.Z.initialize(),
            _.Z.init(),
            K.Z.init(),
            Y.Z.init(),
            eu.Z.initialize(),
            I.Z.initialize(),
            V.Z.initialize(),
            e_.Z.initialize(),
            v.ZP.initialize(),
            H.ZP.initialize(),
            eM.Z.initialize(),
            ef.Z.initialize(),
            y.Z.initialize(),
            er.Z.init(),
            x.Z.init(),
            eJ.Z.init(),
            E.Z.initialize(),
            ex.Z.init(),
            eQ.Z.init(),
            eR.Z.init(),
            eP.Z.initialize(),
            ej.Z.initialize(),
            eL.Z.initialize(),
            eD.Z.init(),
            G.Z.initialize(),
            O.Z.initialize(),
            eC.Z.initialize(),
            eT.Z.initialize(),
            ep.Z.initialize(),
            ed.Z.initialize(),
            eh.Z.initialize(),
            w.Z.initialize(),
            L.Z.initialize(),
            F.Z.initialize(),
            ei.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, e2({}, t));
                    })
            }),
            U.Z.init(),
            ea.Z.initialize(),
            eO.Z.initialize(),
            em.Z.initialize(),
            k.Z.initialize(),
            A.Z.initialize(),
            Z.Z.initialize(),
            C.Z.initialize(),
            (this.rewriterUnlisten = eE.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eE.Z.addRouteChangeListener(this.handleHistoryChange)));
    }
    componentWillUnmount() {
        (eI.Z.terminate(), eU.Z.terminate(), eb.Z.terminate(), eg.Z.terminate(), P.Z.terminate(), v.ZP.terminate(), H.ZP.terminate(), eM.Z.terminate(), y.Z.terminate(), e_.Z.terminate(), ef.Z.terminate(), eL.Z.terminate(), E.Z.terminate(), G.Z.terminate(), ea.Z.terminate(), O.Z.terminate(), eO.Z.terminate(), eC.Z.terminate(), eT.Z.terminate(), ep.Z.terminate(), ed.Z.terminate(), eh.Z.terminate(), w.Z.terminate(), L.Z.terminate(), em.Z.terminate(), k.Z.terminate(), B.Z.terminate(), A.Z.terminate(), Z.Z.terminate(), C.Z.terminate(), F.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten());
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        (!(function (e) {
            if (q.Z.isConnected() || q.Z.isTryingToConnect()) return;
            let t = eG.default.getToken();
            null != t &&
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of tl) {
                            if (!n) continue;
                            let r = (0, a.LX)(e, { path: t });
                            if (null != r) return r;
                        }
                        return null;
                    })(e) &&
                c.Z.startSession(t);
        })(t),
            (function (e, t) {
                let n = ta(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: o, threadId: s } = ti(n),
                    c = (0, ey.Ss)(r),
                    u = (0, ey.cq)(i),
                    h = (0, ey.cq)(s),
                    f = eK.Z.getGuildId(),
                    g = f !== r;
                if ((c && g && d.Z.selectGuild(r), c && u)) {
                    let n = eY.Z.getChannelId(f),
                        a = n !== i;
                    if (!e6 || g || a || null != o) {
                        ((e6 = !0),
                            p.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o
                            }));
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eA.ZP.setSelectedSummary(i, e);
                    }
                    if (null != s && h) {
                        let e = eV.ZP.getCurrentSidebarChannelId(n) !== s,
                            t = null != eV.ZP.getGuildSidebarState(r);
                        if (null != i && null != s && e)
                            if (t) (0, ev.dL)(e3.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eN.Ff.THREAD };
                                (null != o && (e.initialMessageId = o),
                                    eS.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e
                                    }));
                            }
                    } else null == i || a || eS.Z.closeChannelSidebar(i);
                    let c = es.Z.getIsOpen();
                    if (i === e8.oC.ROLE_SUBSCRIPTIONS) eo.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == f && r === e3.ME,
                            n = e === e3.Z5c.GUILD_DISCOVERY;
                        t || n ? eo.Z.closeSidebar() : eo.Z.openSidebar();
                    } else ((a && c) || (!g && !a)) && eo.Z.closeSidebar();
                } else
                    tr.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, ev.dL)(eB.Z.fallbackRoute);
            })(t, n));
    }
    ensureChannelMatchesGuild(e) {
        if (!q.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = ta(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = ti(n),
            a = (0, ey.Ss)(r) && r !== e3.ME && r !== e3.I_8;
        if (null != i && (0, ey.cq)(i) && !(0, e8.AB)(i) && a) {
            let n = eH.Z.getChannel(i);
            if (null == n)
                eZ.Z.loadThread(i).then(() =>
                    to({
                        channelId: i,
                        guildId: r,
                        pathname: t
                    })
                );
            else if (n.guild_id !== r && r !== e3.STv)
                return {
                    path: e3.Z5c.CHANNEL(r),
                    state: e.state
                };
            if (null != l) {
                if (!((0, ey.cq)(l) && !(0, e8.AB)(i))) return null;
                let n = eH.Z.getChannel(l);
                if (null == n)
                    eZ.Z.loadThread(l).then(() =>
                        to({
                            channelId: l,
                            guildId: r,
                            pathname: t
                        })
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eS.Z.closeChannelSidebar(i),
                        {
                            path: e3.Z5c.CHANNEL(r, i),
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
                        tl.map((e) => {
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
        (super(...e), e7(this, 'historyUnlisten', () => {}), e7(this, 'rewriterUnlisten', () => {}));
    }
}
let tc = ts;
