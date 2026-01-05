n.r(t), n.d(t, { default: () => tg }), n(35282), n(388685);
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
    I = n(687751),
    C = n(64514),
    S = n(912471),
    T = n(100527),
    N = n(77987),
    j = n(679891),
    P = n(491575),
    x = n(954709),
    A = n(644679),
    Z = n(403763),
    w = n(314533),
    L = n(9029),
    R = n(935347),
    D = n(560067),
    M = n(823169),
    k = n(845767),
    U = n(891304),
    G = n(96051),
    B = n(750995),
    H = n(610278),
    V = n(696287),
    F = n(657030),
    z = n(408026),
    Y = n(763916),
    W = n(306721),
    q = n(531551),
    K = n(38618),
    Q = n(972830),
    J = n(684572),
    X = n(584233),
    $ = n(15274),
    ee = n(434404),
    et = n(543842),
    en = n(879064),
    er = n(230623),
    ei = n(315964),
    el = n(495784),
    ea = n(883311),
    eo = n(975533),
    es = n(377400),
    ec = n(285865),
    eu = n(659971),
    ed = n(929809),
    ep = n(122333),
    ef = n(960275),
    eg = n(818765),
    eh = n(678492),
    em = n(269089),
    eb = n(380570),
    e_ = n(837689),
    eE = n(930114),
    eO = n(367207),
    ev = n(489977),
    ey = n(329557),
    eI = n(304445),
    eC = n(893607),
    eS = n(703656),
    eT = n(298969),
    eN = n(719256),
    ej = n(6025),
    eP = n(897473),
    ex = n(377368),
    eA = n(262702),
    eZ = n(639033),
    ew = n(479313),
    eL = n(911560),
    eR = n(703016),
    eD = n(892001),
    eM = n(497805),
    ek = n(332754),
    eU = n(313789),
    eG = n(507468),
    eB = n(722589),
    eH = n(518596),
    eV = n(282506),
    eF = n(444961),
    ez = n(314897),
    eY = n(433355),
    eW = n(592125),
    eq = n(896797),
    eK = n(430824),
    eQ = n(819640),
    eJ = n(283595),
    eX = n(944486),
    e$ = n(914010),
    e0 = n(695103),
    e1 = n(241890),
    e4 = n(417363),
    e3 = n(900974),
    e8 = n(358085),
    e5 = n(998502),
    e2 = n(346329),
    e9 = n(981631),
    e7 = n(176505),
    e6 = n(701476),
    te = n(186901);
function tt(e, t, n) {
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
function tn(e) {
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
                tt(e, t, n[t]);
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
let tr = !1;
(0, S.DL)(),
    o.ZP.initialize(),
    eT.Z.loadServer(),
    e8.isPlatformEmbedded &&
        (e5.ZP.on("USER_SETTINGS_OPEN", (e, t) => {
            eQ.Z.getLayers().includes(e9.S9g.USER_SETTINGS) || (0, eH.openUserSettings)();
        }),
        e5.ZP.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eJ.Z.getActiveLibraryApplication(t);
            e2.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e9.ZY5.DIRECT,
                        object: e9.qAy.WEB_URL,
                    },
                },
            });
        }));
let ti = (0, m.l)((e) => {
        let { location: t } = e,
            n = (0, eB.default)(t.pathname);
        return (
            null != n &&
                (0, Q.h)(() => {
                    (0, eH.openUserSettingsFromParsedUrl)({
                        match: n,
                        urlOrigin: "deeplink",
                    });
                }),
            (0, r.jsx)(h.Z, {
                deepLinkType: te.jE.USER_SETTINGS,
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
                children: (0, r.jsx)(a.l_, { to: eq.Z.defaultRoute }),
            })
        );
    }),
    tl = o.ZP.connectStores([K.Z, eq.Z, ez.default], () => ({
        isConnected: K.Z.isConnected(),
        defaultRoute: eq.Z.defaultRoute,
        defaultRouteFallback: eq.Z.fallbackRoute,
        token: ez.default.getToken(),
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, X.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: e9.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = td(t);
                    return null == e ||
                        ((e.params.guildId === e9.ME || null != eK.Z.getGuild(e.params.guildId)) &&
                            null != eW.Z.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.l_, { to: t })
                        : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        },
    ),
    ta = (0, m.l)((0, N.e)(P.Z, null, { passProps: !1 })),
    to = (0, N.e)(J.default, null, { passProps: !1 }),
    ts = [
        e9.Z5c.GUILD_BOOSTING_MARKETING(eC.Hw.guildId()),
        ...Array.from(e7.Vg).map((e) => e9.Z5c.CHANNEL(eC.Hw.guildId(), e)),
    ];
function tc(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : e9.ME,
        channelId: n,
        messageId: r,
        threadId: i,
    };
}
let tu = [
    {
        path: [e9.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(tl, { match: t });
        },
        isSessionRequired: !0,
    },
    {
        path: [e9.Z5c.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, Q.h)(() => {
                    (0, d.b)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, eE.V)({ processedCode: t.code });
                    });
                }),
                (0, r.jsx)(a.l_, { to: eq.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e9.Z5c.APP],
        render: () => (0, r.jsx)(tl, {}),
        isSessionRequired: !0,
    },
    {
        path: [e9.Z5c.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, Q.h)(() =>
                    (0, eD.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [T.Z.URI_SCHEME],
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eq.Z.defaultRoute })
            );
        },
    },
    {
        path: [e9.Z5c.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                e4.Z.whenInitialized(() => {
                    eJ.Z.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = eJ.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e2.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: e9.ZY5.DIRECT,
                                            object: e9.qAy.WEB_URL,
                                        },
                                    },
                                });
                                break;
                            }
                            case "test-mode":
                                e0.Z.whenInitialized(() => g.Wt(n));
                                break;
                            case "uninstall": {
                                let e = eJ.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, e9.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.l_, { to: e9.Z5c.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [e9.Z5c.GUILD_CREATE],
        render: function () {
            return (
                (0, Q.h)(() => D.Z.openCreateGuildModal({ location: "External link" })),
                (0, r.jsx)(a.l_, { to: eq.Z.defaultRoute })
            );
        },
    },
    {
        path: [e9.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, Q.h)(() =>
                    en.v({
                        section: (0, et.Z)(e9.pNK, n),
                        subsection: (0, et.Z)(e9.KsC, i),
                        feature: o,
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eq.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e9.Z5c.SETTINGS(":section", ":subsection?")],
        render: ti,
        isSessionRequired: !0,
    },
    {
        path: [e9.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(eC.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, Q.h)(() => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("15076"), n.e("73791")]).then(n.bind(n, 907941));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = tn({}, t)),
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
                (0, r.jsx)(a.l_, { to: e9.Z5c.CHANNEL(i) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e9.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, Q.h)(() => (0, eH.openUserSettings)(eU.n.GIFT_PANEL, { section: e9.oAB.INVENTORY })),
                (0, r.jsx)(a.l_, { to: eq.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e9.Z5c.WELCOME(eC.Hw.guildId({ optional: !0 }), eC.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, ed.c)(e6.M5.MARKETING_UNCLAIMED);
            let l = e9.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0,
    },
    {
        path: [e9.Z5c.GUILD_EVENT_DETAILS(eC.Hw.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, Q.h)(() => {
                    (0, $.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e9.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e9.Z5c.GUILD_SETTINGS(eC.Hw.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, Q.h)(() => {
                    ee.Z.open(n, (0, et.Z)(e9.pNK, i), void 0, (0, et.Z)(e9.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e9.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [
            e9.Z5c.CHANNEL_THREAD_VIEW(eC.Hw.guildId(), eC.Hw.channelId(), ":threadId", ":messageId?"),
            e9.Z5c.CHANNEL(eC.Hw.guildId(), eC.Hw.channelId({ optional: !0 }), ":messageId?"),
            e9.Z5c.ACTIVITY,
            e9.Z5c.ACTIVITIES,
            e9.Z5c.ACTIVITIES_HAPPENING_NOW,
            e9.Z5c.ACTIVITY_DETAILS(":applicationId"),
            e9.Z5c.APPLICATION_LIBRARY,
            e9.Z5c.APPLICATION_STORE,
            e9.Z5c.MESSAGE_REQUESTS,
            e9.Z5c.COLLECTIBLES_SHOP,
            e9.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e9.Z5c.GUILD_DISCOVERY,
            e9.Z5c.QUEST_HOME,
            e9.Z5c.QUEST_HOME_V2,
            e9.Z5c.ICYMI,
            e9.Z5c.GLOBAL_DISCOVERY,
            e9.Z5c.GUILD_MEMBER_VERIFICATION(eC.Hw.guildId()),
            e9.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(eC.Hw.guildId(), ":inviteCode?"),
            e9.Z5c.GUILD_BOOSTING_MARKETING(eC.Hw.guildId()),
            e9.Z5c.GUILD_FEATURE(":feature", eC.Hw.guildId()),
            e9.Z5c.FEATURE(":feature"),
            e9.Z5c.FAMILY_CENTER,
        ],
        render: ta,
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [e9.Z5c.APPLICATION_DIRECTORY],
        render: to,
        isSessionRequired: !0,
    },
    {
        path: [e9.Z5c.GAME_SHOP(eC.Hw.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: i, shopSlug: l } = t.params;
            return (0, r.jsx)(a.l_, { to: e9.Z5c.CHANNELS_GAME_SHOP(n, 0, i, l) });
        },
        isSessionRequired: !0,
    },
];
function td(e) {
    for (let { path: t, isChatRoute: n } of tu) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function tp(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!K.Z.isConnected()) return;
    let { location: i } = (0, eS.s1)();
    i.pathname === r && (null == eW.Z.getChannel(t) ? (0, eS.dL)(e9.Z5c.CHANNEL(n)) : (0, eS.dL)(r));
}
class tf extends i.PureComponent {
    componentDidMount() {
        e5.ZP.setZoomFactor(b.Z.zoom),
            eT.Z.init(),
            j.Z.initialize(),
            eb.Z.initialize(),
            z.Z.initialize(),
            eF.Z.initialize(),
            Y.Z.initialize(),
            eO.Z.initialize(),
            k.Z.initialize(),
            eo.Z.initialize(),
            _.Z.init(),
            q.Z.init(),
            W.Z.init(),
            ep.Z.initialize(),
            I.Z.initialize(),
            B.Z.initialize(),
            ev.Z.initialize(),
            y.ZP.initialize(),
            H.ZP.initialize(),
            eV.Z.initialize(),
            er.ZP.initialize(),
            em.Z.initialize(),
            v.Z.initialize(),
            ei.Z.init(),
            Z.Z.init(),
            e3.Z.init(),
            O.Z.initialize(),
            eR.Z.init(),
            e1.Z.init(),
            ek.Z.init(),
            eA.Z.initialize(),
            eZ.Z.initialize(),
            eM.Z.initialize(),
            eG.Z.init(),
            G.Z.initialize(),
            E.Z.initialize(),
            eN.Z.initialize(),
            ex.Z.initialize(),
            eg.Z.initialize(),
            ef.Z.initialize(),
            eh.Z.initialize(),
            w.Z.initialize(),
            L.Z.initialize(),
            F.Z.initialize(),
            ea.Z.initialize(),
            el.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("7082"), n.e("32454")]).then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, tn({}, t));
                    }),
            }),
            es.Z.initialize(),
            ey.Z.initialize(),
            e_.Z.initialize(),
            M.Z.initialize(),
            x.Z.initialize(),
            A.Z.initialize(),
            C.Z.initialize(),
            (this.rewriterUnlisten = eI.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eI.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eT.Z.terminate(),
            eF.Z.terminate(),
            eO.Z.terminate(),
            eb.Z.terminate(),
            j.Z.terminate(),
            y.ZP.terminate(),
            H.ZP.terminate(),
            eV.Z.terminate(),
            v.Z.terminate(),
            ev.Z.terminate(),
            em.Z.terminate(),
            eM.Z.terminate(),
            O.Z.terminate(),
            G.Z.terminate(),
            es.Z.terminate(),
            E.Z.terminate(),
            ey.Z.terminate(),
            eN.Z.terminate(),
            ex.Z.terminate(),
            eg.Z.terminate(),
            ef.Z.terminate(),
            eh.Z.terminate(),
            w.Z.terminate(),
            L.Z.terminate(),
            e_.Z.terminate(),
            M.Z.terminate(),
            V.Z.terminate(),
            x.Z.terminate(),
            A.Z.terminate(),
            C.Z.terminate(),
            F.Z.terminate(),
            ea.Z.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e, t) {
        let { pathname: n, search: r, key: i } = e;
        !(function (e) {
            if (K.Z.isConnected() || K.Z.isTryingToConnect()) return;
            let t = ez.default.getToken();
            null != t &&
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of tu) {
                            if (!n) continue;
                            let r = (0, a.LX)(e, { path: t });
                            if (null != r) return r;
                        }
                        return null;
                    })(e) &&
                c.Z.startSession(t);
        })(n),
            (function (e, t) {
                let n = td(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: o, threadId: s } = tc(n),
                    c = (0, eC.Ss)(r),
                    u = (0, eC.cq)(i),
                    d = (0, eC.cq)(s),
                    g = e$.Z.getGuildId(),
                    h = g !== r;
                if ((c && h && p.Z.selectGuild(r), c && u)) {
                    let n = eX.Z.getChannelId(g),
                        a = n !== i,
                        c = null != eY.ZP.getGuildSidebarState(r);
                    if (!tr || h || a || null != o) {
                        (tr = !0),
                            f.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && ew.ZP.setSelectedSummary(i, e);
                    }
                    if (
                        (c &&
                            a &&
                            null != i &&
                            null != eY.ZP.getCurrentSidebarChannelId(i) &&
                            ej.Z.closeChannelSidebar(i),
                        null != s && d)
                    ) {
                        let e = eY.ZP.getCurrentSidebarChannelId(n),
                            t = e !== s;
                        if (null != i && null != s && t)
                            if (c) (0, eS.dL)(e9.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eP.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    ej.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                        else c && null != e && null != i && ej.Z.closeChannelSidebar(i);
                    } else null == i || a || ej.Z.closeChannelSidebar(i);
                    let u = eu.Z.getIsOpen();
                    if (i === e7.oC.ROLE_SUBSCRIPTIONS) ec.Z.closeSidebar();
                    else if (h && u) {
                        let t = null == g && r === e9.ME,
                            n = e === e9.Z5c.GUILD_DISCOVERY;
                        t || n ? ec.Z.closeSidebar() : ec.Z.openSidebar();
                    } else ((a && u) || (!h && !a)) && ec.Z.closeSidebar();
                } else
                    ts.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, eS.dL)(eq.Z.fallbackRoute);
            })(n, r),
            (0, U.pN)(n, i, "REPLACE" === t);
    }
    ensureChannelMatchesGuild(e) {
        if (!K.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = td(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = tc(n),
            a = (0, eC.Ss)(r) && r !== e9.ME && r !== e9.I_8;
        if (null != i && (0, eC.cq)(i) && !(0, e7.AB)(i) && a) {
            let n = eW.Z.getChannel(i);
            if (null == n)
                eL.Z.loadThread(i).then(() =>
                    tp({
                        channelId: i,
                        guildId: r,
                        pathname: t,
                    }),
                );
            else if (n.guild_id !== r && r !== e9.STv)
                return {
                    path: e9.Z5c.CHANNEL(r),
                    state: e.state,
                };
            if (null != l) {
                if (!((0, eC.cq)(l) && !(0, e7.AB)(i))) return null;
                let n = eW.Z.getChannel(l);
                if (null == n)
                    eL.Z.loadThread(l).then(() =>
                        tp({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        ej.Z.closeChannelSidebar(i),
                        {
                            path: e9.Z5c.CHANNEL(r, i),
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
                        tu.map((e) => {
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
                (0, r.jsx)(R.Z, {}),
            ],
        });
    }
    constructor(...e) {
        super(...e), tt(this, "historyUnlisten", () => {}), tt(this, "rewriterUnlisten", () => {});
    }
}
let tg = tf;
