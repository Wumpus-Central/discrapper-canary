n.r(t), n.d(t, { default: () => t_ }), n(35282), n(388685);
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
    h = n(773244),
    m = n(951752),
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
    K = n(306721),
    q = n(531551),
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
    eg = n(857494),
    eh = n(960275),
    em = n(818765),
    eb = n(678492),
    e_ = n(269089),
    eE = n(380570),
    eO = n(837689),
    ev = n(930114),
    ey = n(367207),
    eI = n(489977),
    eC = n(329557),
    eS = n(304445),
    eT = n(893607),
    eN = n(703656),
    ej = n(267713),
    eP = n(298969),
    ex = n(719256),
    eA = n(6025),
    eZ = n(897473),
    ew = n(377368),
    eL = n(262702),
    eR = n(639033),
    eD = n(479313),
    eM = n(911560),
    ek = n(703016),
    eU = n(892001),
    eG = n(497805),
    eH = n(332754),
    eB = n(313789),
    eV = n(507468),
    eF = n(722589),
    ez = n(518596),
    eY = n(282506),
    eW = n(444961),
    eK = n(314897),
    eq = n(433355),
    eQ = n(592125),
    eJ = n(896797),
    eX = n(430824),
    e$ = n(819640),
    e0 = n(283595),
    e1 = n(944486),
    e4 = n(914010),
    e3 = n(695103),
    e8 = n(241890),
    e5 = n(417363),
    e2 = n(900974),
    e7 = n(449934),
    e9 = n(358085),
    e6 = n(998502),
    te = n(346329),
    tt = n(981631),
    tn = n(176505),
    tr = n(701476),
    ti = n(186901);
function tl(e, t, n) {
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
function ta(e) {
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
                tl(e, t, n[t]);
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
let to = !1;
(0, T.DL)(),
    o.ZP.initialize(),
    eP.Z.loadServer(),
    e9.isPlatformEmbedded &&
        (e6.ZP.on("USER_SETTINGS_OPEN", (e, t) => {
            e$.Z.getLayers().includes(tt.S9g.USER_SETTINGS) || (0, ez.openUserSettings)();
        }),
        e6.ZP.on("LAUNCH_APPLICATION", (e, t) => {
            let n = e0.Z.getActiveLibraryApplication(t);
            te.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: tt.ZY5.DIRECT,
                        object: tt.qAy.WEB_URL,
                    },
                },
            });
        }));
let ts = (0, m.l)((e) => {
        let { location: t } = e,
            n = (0, eF.default)(t.pathname);
        return (
            null != n &&
                (0, J.h)(() => {
                    (0, ez.openUserSettingsFromParsedUrl)({
                        match: n,
                        urlOrigin: "deeplink",
                    });
                }),
            (0, r.jsx)(h.Z, {
                deepLinkType: ti.jE.USER_SETTINGS,
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
                children: (0, r.jsx)(a.l_, { to: eJ.Z.defaultRoute }),
            })
        );
    }),
    tc = o.ZP.connectStores([Q.Z, eJ.Z, eK.default], () => ({
        isConnected: Q.Z.isConnected(),
        defaultRoute: eJ.Z.defaultRoute,
        defaultRouteFallback: eJ.Z.fallbackRoute,
        token: eK.default.getToken(),
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, $.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: tt.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = th(t);
                    return null == e ||
                        ((e.params.guildId === tt.ME || null != eX.Z.getGuild(e.params.guildId)) &&
                            null != eQ.Z.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.l_, { to: t })
                        : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        },
    ),
    tu = (0, m.l)((0, j.e)(x.Z, null, { passProps: !1 })),
    td = (0, j.e)(X.default, null, { passProps: !1 }),
    tp = [
        tt.Z5c.GUILD_BOOSTING_MARKETING(eT.Hw.guildId()),
        ...Array.from(tn.Vg).map((e) => tt.Z5c.CHANNEL(eT.Hw.guildId(), e)),
    ];
function tf(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : tt.ME,
        channelId: n,
        messageId: r,
        threadId: i,
    };
}
let tg = [
    {
        path: [tt.Z5c.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, e7.$8)() ||
                eK.default.getLoginStatus() === tt.u34.LOGGING_IN ||
                !eK.default.allowLogoutRedirect()
                ? tu(e)
                : (0, r.jsx)(I.Z, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [tt.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(tc, { match: t });
        },
    },
    {
        path: [tt.Z5c.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, J.h)(() => {
                    (0, d.b)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, ev.V)({ processedCode: t.code });
                    });
                }),
                (0, r.jsx)(a.l_, { to: eJ.Z.defaultRoute })
            );
        },
    },
    {
        path: [tt.Z5c.APP],
        render: () => (0, r.jsx)(tc, {}),
    },
    {
        path: [tt.Z5c.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, J.h)(() =>
                    (0, eU.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [N.Z.URI_SCHEME],
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eJ.Z.defaultRoute })
            );
        },
    },
    {
        path: [tt.Z5c.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                e5.Z.whenInitialized(() => {
                    e0.Z.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = e0.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                te.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: tt.ZY5.DIRECT,
                                            object: tt.qAy.WEB_URL,
                                        },
                                    },
                                });
                                break;
                            }
                            case "test-mode":
                                e3.Z.whenInitialized(() => g.Wt(n));
                                break;
                            case "uninstall": {
                                let e = e0.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, tt.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.l_, { to: tt.Z5c.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [tt.Z5c.GUILD_CREATE],
        render: function () {
            return (
                (0, J.h)(() => M.Z.openCreateGuildModal({ location: "External link" })),
                (0, r.jsx)(a.l_, { to: eJ.Z.defaultRoute })
            );
        },
    },
    {
        path: [tt.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, J.h)(() =>
                    er.v({
                        section: (0, en.Z)(tt.pNK, n),
                        subsection: (0, en.Z)(tt.KsC, i),
                        feature: o,
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eJ.Z.defaultRoute })
            );
        },
    },
    {
        path: [tt.Z5c.SETTINGS(":section", ":subsection?")],
        render: ts,
    },
    {
        path: [tt.Z5c.PLAYGROUND(":collection?", ":story?")],
        render: function (e) {
            let t = (0, eg.C)(e.location.pathname);
            return (
                (0, J.h)(() => {
                    let { openPlaygroundFromParsedUrl: e } = n(2419);
                    e({ match: t });
                }),
                (0, r.jsx)(a.l_, { to: eJ.Z.defaultRoute })
            );
        },
    },
    {
        path: [tt.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(eT.Hw.guildId())],
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
                                ((n = ta({}, t)),
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
                (0, r.jsx)(a.l_, { to: tt.Z5c.CHANNEL(i) })
            );
        },
    },
    {
        path: [tt.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, J.h)(() => (0, ez.openUserSettings)(eB.n.GIFT_PANEL, { section: tt.oAB.INVENTORY })),
                (0, r.jsx)(a.l_, { to: eJ.Z.defaultRoute })
            );
        },
    },
    {
        path: [tt.Z5c.WELCOME(eT.Hw.guildId({ optional: !0 }), eT.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, ep.c)(tr.M5.MARKETING_UNCLAIMED);
            let l = tt.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
    },
    {
        path: [tt.Z5c.GUILD_EVENT_DETAILS(eT.Hw.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, J.h)(() => {
                    (0, ee.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: tt.Z5c.CHANNEL(n) })
            );
        },
    },
    {
        path: [tt.Z5c.GUILD_SETTINGS(eT.Hw.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, J.h)(() => {
                    et.Z.open(n, (0, en.Z)(tt.pNK, i), void 0, (0, en.Z)(tt.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: tt.Z5c.CHANNEL(n) })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            tt.Z5c.CHANNEL_THREAD_VIEW(eT.Hw.guildId(), eT.Hw.channelId(), ":threadId", ":messageId?"),
            tt.Z5c.CHANNEL(eT.Hw.guildId(), eT.Hw.channelId({ optional: !0 }), ":messageId?"),
            tt.Z5c.ACTIVITY,
            tt.Z5c.ACTIVITIES,
            tt.Z5c.ACTIVITIES_HAPPENING_NOW,
            tt.Z5c.APPLICATION_LIBRARY,
            tt.Z5c.APPLICATION_STORE,
            tt.Z5c.MESSAGE_REQUESTS,
            tt.Z5c.COLLECTIBLES_SHOP,
            tt.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            tt.Z5c.GUILD_DISCOVERY,
            tt.Z5c.QUEST_HOME,
            tt.Z5c.QUEST_HOME_V2,
            tt.Z5c.ICYMI,
            tt.Z5c.GLOBAL_DISCOVERY,
            tt.Z5c.GUILD_MEMBER_VERIFICATION(eT.Hw.guildId()),
            tt.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(eT.Hw.guildId(), ":inviteCode?"),
            tt.Z5c.GUILD_BOOSTING_MARKETING(eT.Hw.guildId()),
            tt.Z5c.GUILD_FEATURE(":feature", eT.Hw.guildId()),
            tt.Z5c.FEATURE(":feature"),
            tt.Z5c.FAMILY_CENTER,
        ],
        render: tu,
        isChatRoute: !0,
    },
    {
        path: [tt.Z5c.APPLICATION_DIRECTORY],
        render: td,
    },
    {
        path: [tt.Z5c.GAME_SHOP(eT.Hw.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: i, shopSlug: l } = t.params;
            return (0, r.jsx)(a.l_, { to: tt.Z5c.CHANNELS_GAME_SHOP(n, 0, i, l) });
        },
    },
];
function th(e) {
    for (let { path: t, isChatRoute: n } of tg) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function tm(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!Q.Z.isConnected()) return;
    let { location: i } = (0, eN.s1)();
    i.pathname === r && (null == eQ.Z.getChannel(t) ? (0, eN.dL)(tt.Z5c.CHANNEL(n)) : (0, eN.dL)(r));
}
class tb extends i.PureComponent {
    componentDidMount() {
        e6.ZP.setZoomFactor(b.Z.zoom),
            eP.Z.init(),
            P.Z.initialize(),
            eE.Z.initialize(),
            Y.Z.initialize(),
            eW.Z.initialize(),
            W.Z.initialize(),
            ey.Z.initialize(),
            U.Z.initialize(),
            es.Z.initialize(),
            _.Z.init(),
            q.Z.init(),
            K.Z.init(),
            ef.Z.initialize(),
            C.Z.initialize(),
            B.Z.initialize(),
            eI.Z.initialize(),
            y.ZP.initialize(),
            V.ZP.initialize(),
            eY.Z.initialize(),
            ei.ZP.initialize(),
            e_.Z.initialize(),
            v.Z.initialize(),
            el.Z.init(),
            w.Z.init(),
            e2.Z.init(),
            O.Z.initialize(),
            ek.Z.init(),
            e8.Z.init(),
            eH.Z.init(),
            eL.Z.initialize(),
            eR.Z.initialize(),
            eG.Z.initialize(),
            eV.Z.init(),
            H.Z.initialize(),
            E.Z.initialize(),
            ex.Z.initialize(),
            ew.Z.initialize(),
            em.Z.initialize(),
            eh.Z.initialize(),
            eb.Z.initialize(),
            L.Z.initialize(),
            R.Z.initialize(),
            z.Z.initialize(),
            eo.Z.initialize(),
            ea.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("7082"), n.e("32454")]).then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, ta({}, t));
                    }),
            }),
            ec.Z.initialize(),
            eC.Z.initialize(),
            eO.Z.initialize(),
            k.Z.initialize(),
            A.Z.initialize(),
            Z.Z.initialize(),
            S.Z.initialize(),
            (this.rewriterUnlisten = eS.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eS.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eP.Z.terminate(),
            eW.Z.terminate(),
            ey.Z.terminate(),
            eE.Z.terminate(),
            P.Z.terminate(),
            y.ZP.terminate(),
            V.ZP.terminate(),
            eY.Z.terminate(),
            v.Z.terminate(),
            eI.Z.terminate(),
            e_.Z.terminate(),
            eG.Z.terminate(),
            O.Z.terminate(),
            H.Z.terminate(),
            ec.Z.terminate(),
            E.Z.terminate(),
            eC.Z.terminate(),
            ex.Z.terminate(),
            ew.Z.terminate(),
            em.Z.terminate(),
            eh.Z.terminate(),
            eb.Z.terminate(),
            L.Z.terminate(),
            R.Z.terminate(),
            eO.Z.terminate(),
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
            let t = eK.default.getToken();
            null != t && (0, ej.u)(e) && c.Z.startSession(t);
        })(n),
            (function (e, t) {
                let n = th(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: o, threadId: s } = tf(n),
                    c = (0, eT.Ss)(r),
                    u = (0, eT.cq)(i),
                    d = (0, eT.cq)(s),
                    g = e4.Z.getGuildId(),
                    h = g !== r;
                if ((c && h && p.Z.selectGuild(r), c && u)) {
                    let n = e1.Z.getChannelId(g),
                        a = n !== i,
                        c = null != eq.ZP.getGuildSidebarState(r);
                    if (!to || h || a || null != o) {
                        (to = !0),
                            f.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eD.ZP.setSelectedSummary(i, e);
                    }
                    if (
                        (c &&
                            a &&
                            null != i &&
                            null != eq.ZP.getCurrentSidebarChannelId(i) &&
                            eA.Z.closeChannelSidebar(i),
                        null != s && d)
                    ) {
                        let e = eq.ZP.getCurrentSidebarChannelId(n),
                            t = e !== s;
                        if (null != i && null != s && t)
                            if (c) (0, eN.dL)(tt.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eZ.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    eA.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                        else c && null != e && null != i && eA.Z.closeChannelSidebar(i);
                    } else null == i || a || eA.Z.closeChannelSidebar(i);
                    let u = ed.Z.getIsOpen();
                    if (i === tn.oC.ROLE_SUBSCRIPTIONS) eu.Z.closeSidebar();
                    else if (h && u) {
                        let t = null == g && r === tt.ME,
                            n = e === tt.Z5c.GUILD_DISCOVERY;
                        t || n ? eu.Z.closeSidebar() : eu.Z.openSidebar();
                    } else ((a && u) || (!h && !a)) && eu.Z.closeSidebar();
                } else
                    tp.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, eN.dL)(eJ.Z.fallbackRoute);
            })(n, r),
            (0, G.pN)(n, i, "REPLACE" === t);
    }
    ensureChannelMatchesGuild(e) {
        if (!Q.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = th(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = tf(n),
            a = (0, eT.Ss)(r) && r !== tt.ME && r !== tt.I_8;
        if (null != i && (0, eT.cq)(i) && !(0, tn.AB)(i) && a) {
            let n = eQ.Z.getChannel(i);
            if (null == n)
                eM.Z.loadThread(i).then(() =>
                    tm({
                        channelId: i,
                        guildId: r,
                        pathname: t,
                    }),
                );
            else if (n.guild_id !== r && r !== tt.STv)
                return {
                    path: tt.Z5c.CHANNEL(r),
                    state: e.state,
                };
            if (null != l) {
                if (!((0, eT.cq)(l) && !(0, tn.AB)(i))) return null;
                let n = eQ.Z.getChannel(l);
                if (null == n)
                    eM.Z.loadThread(l).then(() =>
                        tm({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eA.Z.closeChannelSidebar(i),
                        {
                            path: tt.Z5c.CHANNEL(r, i),
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
                        tg.map((e) => {
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
        super(...e), tl(this, "historyUnlisten", () => {}), tl(this, "rewriterUnlisten", () => {});
    }
}
let t_ = tb;
