n.r(t), n.d(t, { default: () => th }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(593473),
    a = n(828700),
    o = n(442837),
    s = n(481060),
    c = n(893776),
    u = n(943094),
    d = n(533307),
    p = n(749210),
    f = n(287734),
    g = n(401430),
    m = n(773244),
    h = n(951752),
    b = n(607070),
    _ = n(627845),
    E = n(185666),
    O = n(503737),
    v = n(513202),
    y = n(318891),
    I = n(336250),
    C = n(687751),
    S = n(64514),
    T = n(912471),
    N = n(100527),
    j = n(77987),
    P = n(679891),
    x = n(491575),
    A = n(954709),
    Z = n(644679),
    w = n(403763),
    L = n(314533),
    R = n(9029),
    D = n(935347),
    M = n(560067),
    k = n(823169),
    U = n(845767),
    G = n(891304),
    H = n(96051),
    B = n(750995),
    V = n(610278),
    F = n(696287),
    z = n(657030),
    Y = n(408026),
    W = n(763916),
    q = n(306721),
    K = n(531551),
    Q = n(38618),
    J = n(972830),
    X = n(684572),
    $ = n(584233),
    ee = n(15274),
    et = n(434404),
    en = n(543842),
    er = n(879064),
    ei = n(230623),
    el = n(315964),
    ea = n(495784),
    eo = n(883311),
    es = n(975533),
    ec = n(377400),
    eu = n(285865),
    ed = n(659971),
    ep = n(929809),
    ef = n(122333),
    eg = n(960275),
    em = n(818765),
    eh = n(678492),
    eb = n(269089),
    e_ = n(380570),
    eE = n(837689),
    eO = n(930114),
    ev = n(367207),
    ey = n(489977),
    eI = n(329557),
    eC = n(304445),
    eS = n(893607),
    eT = n(703656),
    eN = n(298969),
    ej = n(719256),
    eP = n(6025),
    ex = n(897473),
    eA = n(377368),
    eZ = n(262702),
    ew = n(639033),
    eL = n(479313),
    eR = n(911560),
    eD = n(703016),
    eM = n(892001),
    ek = n(497805),
    eU = n(332754),
    eG = n(313789),
    eH = n(507468),
    eB = n(722589),
    eV = n(518596),
    eF = n(282506),
    ez = n(444961),
    eY = n(314897),
    eW = n(433355),
    eq = n(592125),
    eK = n(896797),
    eQ = n(430824),
    eJ = n(819640),
    eX = n(283595),
    e$ = n(944486),
    e0 = n(914010),
    e1 = n(695103),
    e4 = n(241890),
    e3 = n(417363),
    e8 = n(900974),
    e5 = n(449934),
    e2 = n(358085),
    e7 = n(998502),
    e9 = n(346329),
    e6 = n(981631),
    te = n(176505),
    tt = n(701476),
    tn = n(186901);
function tr(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ti(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                tr(e, t, n[t]);
            });
    }
    return e;
}
n(117240),
    n(801077),
    n(967368),
    n(272053),
    n(974180),
    n(574254),
    n(551428),
    n(55563),
    n(882029),
    n(959457),
    n(653255),
    n(663389),
    n(25990),
    n(778825),
    n(999382),
    n(388610),
    n(533947),
    n(277053),
    n(371398),
    n(141233),
    n(471073),
    n(606206);
let tl = !1;
(0, T.DL)(),
    o.ZP.initialize(),
    eN.Z.loadServer(),
    e2.isPlatformEmbedded &&
        (e7.ZP.on("USER_SETTINGS_OPEN", (e, t) => {
            eJ.Z.getLayers().includes(e6.S9g.USER_SETTINGS) || (0, eV.openUserSettings)();
        }),
        e7.ZP.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eX.Z.getActiveLibraryApplication(t);
            e9.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e6.ZY5.DIRECT,
                        object: e6.qAy.WEB_URL,
                    },
                },
            });
        }));
let ta = (0, h.l)((e) => {
        let { location: t } = e,
            n = (0, eB.default)(t.pathname);
        return (
            null != n &&
                (0, J.h)(() => {
                    (0, eV.openUserSettingsFromParsedUrl)({
                        match: n,
                        urlOrigin: "deeplink",
                    });
                }),
            (0, r.jsx)(m.Z, {
                deepLinkType: tn.jE.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e, t, n) {
                    let [, , r, i] = e.split("/");
                    return {
                        path: e,
                        section: r,
                        subsection: i,
                        fingerprint: t,
                        search: n,
                    };
                },
                children: (0, r.jsx)(a.l_, { to: eK.Z.defaultRoute }),
            })
        );
    }),
    to = o.ZP.connectStores([Q.Z, eK.Z, eY.default], () => ({
        isConnected: Q.Z.isConnected(),
        defaultRoute: eK.Z.defaultRoute,
        defaultRouteFallback: eK.Z.fallbackRoute,
        token: eY.default.getToken(),
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, $.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: e6.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tf(t);
                    return null == e ||
                        ((e.params.guildId === e6.ME || null != eQ.Z.getGuild(e.params.guildId)) &&
                            null != eq.Z.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.l_, { to: t })
                        : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        },
    ),
    ts = (0, h.l)((0, j.e)(x.Z, null, { passProps: !1 })),
    tc = (0, j.e)(X.default, null, { passProps: !1 }),
    tu = [
        e6.Z5c.GUILD_BOOSTING_MARKETING(eS.Hw.guildId()),
        ...Array.from(te.Vg).map((e) => e6.Z5c.CHANNEL(eS.Hw.guildId(), e)),
    ];
function td(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : e6.ME,
        channelId: n,
        messageId: r,
        threadId: i,
    };
}
let tp = [
    {
        path: [e6.Z5c.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, e5.$8)() ||
                eY.default.getLoginStatus() === e6.u34.LOGGING_IN ||
                !eY.default.allowLogoutRedirect()
                ? ts(e)
                : (0, r.jsx)(I.Z, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [e6.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(to, { match: t });
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, J.h)(() => {
                    (0, d.b)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, eO.V)({ processedCode: t.code });
                    });
                }),
                (0, r.jsx)(a.l_, { to: eK.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.APP],
        render: () => (0, r.jsx)(to, {}),
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, J.h)(() =>
                    (0, eM.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [N.Z.URI_SCHEME],
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eK.Z.defaultRoute })
            );
        },
    },
    {
        path: [e6.Z5c.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                e3.Z.whenInitialized(() => {
                    eX.Z.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = eX.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e9.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: e6.ZY5.DIRECT,
                                            object: e6.qAy.WEB_URL,
                                        },
                                    },
                                });
                                break;
                            }
                            case "test-mode":
                                e1.Z.whenInitialized(() => g.Wt(n));
                                break;
                            case "uninstall": {
                                let e = eX.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, e6.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.l_, { to: e6.Z5c.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [e6.Z5c.GUILD_CREATE],
        render: function () {
            return (
                (0, J.h)(() => M.Z.openCreateGuildModal({ location: "External link" })),
                (0, r.jsx)(a.l_, { to: eK.Z.defaultRoute })
            );
        },
    },
    {
        path: [e6.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, J.h)(() =>
                    er.v({
                        section: (0, en.Z)(e6.pNK, n),
                        subsection: (0, en.Z)(e6.KsC, i),
                        feature: o,
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eK.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.SETTINGS(":section", ":subsection?")],
        render: ta,
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(eS.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, J.h)(() => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("15076"), n.e("73791")]).then(n.bind(n, 907941));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = ti({}, t)),
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
                                n),
                            );
                        };
                    });
                }),
                (0, r.jsx)(a.l_, { to: e6.Z5c.CHANNEL(i) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, J.h)(() => (0, eV.openUserSettings)(eG.n.GIFT_PANEL, { section: e6.oAB.INVENTORY })),
                (0, r.jsx)(a.l_, { to: eK.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.WELCOME(eS.Hw.guildId({ optional: !0 }), eS.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, ep.c)(tt.M5.MARKETING_UNCLAIMED);
            let l = e6.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.GUILD_EVENT_DETAILS(eS.Hw.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, J.h)(() => {
                    (0, ee.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e6.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.GUILD_SETTINGS(eS.Hw.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, J.h)(() => {
                    et.Z.open(n, (0, en.Z)(e6.pNK, i), void 0, (0, en.Z)(e6.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e6.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [
            e6.Z5c.CHANNEL_THREAD_VIEW(eS.Hw.guildId(), eS.Hw.channelId(), ":threadId", ":messageId?"),
            e6.Z5c.CHANNEL(eS.Hw.guildId(), eS.Hw.channelId({ optional: !0 }), ":messageId?"),
            e6.Z5c.ACTIVITY,
            e6.Z5c.ACTIVITIES,
            e6.Z5c.ACTIVITIES_HAPPENING_NOW,
            e6.Z5c.APPLICATION_LIBRARY,
            e6.Z5c.APPLICATION_STORE,
            e6.Z5c.MESSAGE_REQUESTS,
            e6.Z5c.COLLECTIBLES_SHOP,
            e6.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e6.Z5c.GUILD_DISCOVERY,
            e6.Z5c.QUEST_HOME,
            e6.Z5c.QUEST_HOME_V2,
            e6.Z5c.ICYMI,
            e6.Z5c.GLOBAL_DISCOVERY,
            e6.Z5c.GUILD_MEMBER_VERIFICATION(eS.Hw.guildId()),
            e6.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(eS.Hw.guildId(), ":inviteCode?"),
            e6.Z5c.GUILD_BOOSTING_MARKETING(eS.Hw.guildId()),
            e6.Z5c.GUILD_FEATURE(":feature", eS.Hw.guildId()),
            e6.Z5c.FEATURE(":feature"),
            e6.Z5c.FAMILY_CENTER,
        ],
        render: ts,
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [e6.Z5c.APPLICATION_DIRECTORY],
        render: tc,
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.GAME_SHOP(eS.Hw.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: i, shopSlug: l } = t.params;
            return (0, r.jsx)(a.l_, { to: e6.Z5c.CHANNELS_GAME_SHOP(n, 0, i, l) });
        },
        isSessionRequired: !0,
    },
];
function tf(e) {
    for (let { path: t, isChatRoute: n } of tp) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function tg(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!Q.Z.isConnected()) return;
    let { location: i } = (0, eT.s1)();
    i.pathname === r && (null == eq.Z.getChannel(t) ? (0, eT.dL)(e6.Z5c.CHANNEL(n)) : (0, eT.dL)(r));
}
class tm extends i.PureComponent {
    componentDidMount() {
        e7.ZP.setZoomFactor(b.Z.zoom),
            eN.Z.init(),
            P.Z.initialize(),
            e_.Z.initialize(),
            Y.Z.initialize(),
            ez.Z.initialize(),
            W.Z.initialize(),
            ev.Z.initialize(),
            U.Z.initialize(),
            es.Z.initialize(),
            _.Z.init(),
            K.Z.init(),
            q.Z.init(),
            ef.Z.initialize(),
            C.Z.initialize(),
            B.Z.initialize(),
            ey.Z.initialize(),
            y.ZP.initialize(),
            V.ZP.initialize(),
            eF.Z.initialize(),
            ei.ZP.initialize(),
            eb.Z.initialize(),
            v.Z.initialize(),
            el.Z.init(),
            w.Z.init(),
            e8.Z.init(),
            O.Z.initialize(),
            eD.Z.init(),
            e4.Z.init(),
            eU.Z.init(),
            eZ.Z.initialize(),
            ew.Z.initialize(),
            ek.Z.initialize(),
            eH.Z.init(),
            H.Z.initialize(),
            E.Z.initialize(),
            ej.Z.initialize(),
            eA.Z.initialize(),
            em.Z.initialize(),
            eg.Z.initialize(),
            eh.Z.initialize(),
            L.Z.initialize(),
            R.Z.initialize(),
            z.Z.initialize(),
            eo.Z.initialize(),
            ea.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("7082"), n.e("32454")]).then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, ti({}, t));
                    }),
            }),
            ec.Z.initialize(),
            eI.Z.initialize(),
            eE.Z.initialize(),
            k.Z.initialize(),
            A.Z.initialize(),
            Z.Z.initialize(),
            S.Z.initialize(),
            (this.rewriterUnlisten = eC.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eC.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eN.Z.terminate(),
            ez.Z.terminate(),
            ev.Z.terminate(),
            e_.Z.terminate(),
            P.Z.terminate(),
            y.ZP.terminate(),
            V.ZP.terminate(),
            eF.Z.terminate(),
            v.Z.terminate(),
            ey.Z.terminate(),
            eb.Z.terminate(),
            ek.Z.terminate(),
            O.Z.terminate(),
            H.Z.terminate(),
            ec.Z.terminate(),
            E.Z.terminate(),
            eI.Z.terminate(),
            ej.Z.terminate(),
            eA.Z.terminate(),
            em.Z.terminate(),
            eg.Z.terminate(),
            eh.Z.terminate(),
            L.Z.terminate(),
            R.Z.terminate(),
            eE.Z.terminate(),
            k.Z.terminate(),
            F.Z.terminate(),
            A.Z.terminate(),
            Z.Z.terminate(),
            S.Z.terminate(),
            z.Z.terminate(),
            eo.Z.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e, t) {
        let { pathname: n, search: r, key: i } = e;
        !(function (e) {
            if (Q.Z.isConnected() || Q.Z.isTryingToConnect()) return;
            let t = eY.default.getToken();
            null != t &&
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of tp) {
                            if (!n) continue;
                            let r = (0, a.LX)(e, { path: t });
                            if (null != r) return r;
                        }
                        return null;
                    })(e) &&
                c.Z.startSession(t);
        })(n),
            (function (e, t) {
                let n = tf(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: o, threadId: s } = td(n),
                    c = (0, eS.Ss)(r),
                    u = (0, eS.cq)(i),
                    d = (0, eS.cq)(s),
                    g = e0.Z.getGuildId(),
                    m = g !== r;
                if ((c && m && p.Z.selectGuild(r), c && u)) {
                    let n = e$.Z.getChannelId(g),
                        a = n !== i,
                        c = null != eW.ZP.getGuildSidebarState(r);
                    if (!tl || m || a || null != o) {
                        (tl = !0),
                            f.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eL.ZP.setSelectedSummary(i, e);
                    }
                    if (
                        (c &&
                            a &&
                            null != i &&
                            null != eW.ZP.getCurrentSidebarChannelId(i) &&
                            eP.Z.closeChannelSidebar(i),
                        null != s && d)
                    ) {
                        let e = eW.ZP.getCurrentSidebarChannelId(n),
                            t = e !== s;
                        if (null != i && null != s && t)
                            if (c) (0, eT.dL)(e6.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: ex.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    eP.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                        else c && null != e && null != i && eP.Z.closeChannelSidebar(i);
                    } else null == i || a || eP.Z.closeChannelSidebar(i);
                    let u = ed.Z.getIsOpen();
                    if (i === te.oC.ROLE_SUBSCRIPTIONS) eu.Z.closeSidebar();
                    else if (m && u) {
                        let t = null == g && r === e6.ME,
                            n = e === e6.Z5c.GUILD_DISCOVERY;
                        t || n ? eu.Z.closeSidebar() : eu.Z.openSidebar();
                    } else ((a && u) || (!m && !a)) && eu.Z.closeSidebar();
                } else
                    tu.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, eT.dL)(eK.Z.fallbackRoute);
            })(n, r),
            (0, G.pN)(n, i, "REPLACE" === t);
    }
    ensureChannelMatchesGuild(e) {
        if (!Q.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = tf(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = td(n),
            a = (0, eS.Ss)(r) && r !== e6.ME && r !== e6.I_8;
        if (null != i && (0, eS.cq)(i) && !(0, te.AB)(i) && a) {
            let n = eq.Z.getChannel(i);
            if (null == n)
                eR.Z.loadThread(i).then(() =>
                    tg({
                        channelId: i,
                        guildId: r,
                        pathname: t,
                    }),
                );
            else if (n.guild_id !== r && r !== e6.STv)
                return {
                    path: e6.Z5c.CHANNEL(r),
                    state: e.state,
                };
            if (null != l) {
                if (!((0, eS.cq)(l) && !(0, te.AB)(i))) return null;
                let n = eq.Z.getChannel(l);
                if (null == n)
                    eR.Z.loadThread(l).then(() =>
                        tg({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eP.Z.closeChannelSidebar(i),
                        {
                            path: e6.Z5c.CHANNEL(r, i),
                            state: e.state,
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
                            from: "/channels",
                            to: "/",
                        }),
                        tp.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, r.jsx)(
                                a.AW,
                                {
                                    path: t,
                                    render: n,
                                },
                                t[0],
                            );
                        }),
                        (0, r.jsx)(a.l_, { to: "/" }),
                    ],
                }),
                (0, r.jsx)(D.Z, {}),
            ],
        });
    }
    constructor(...e) {
        super(...e), tr(this, "historyUnlisten", () => {}), tr(this, "rewriterUnlisten", () => {});
    }
}
let th = tm;
