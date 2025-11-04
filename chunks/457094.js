n.r(t), n.d(t, { default: () => tf }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(593473),
    a = n(843611),
    o = n(442837),
    s = n(481060),
    c = n(893776),
    u = n(943094),
    d = n(533307),
    p = n(749210),
    f = n(287734),
    h = n(401430),
    g = n(773244),
    m = n(951752),
    _ = n(607070),
    b = n(627845),
    E = n(185666),
    O = n(503737),
    y = n(513202),
    v = n(318891),
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
    er = n(315964),
    ei = n(495784),
    el = n(883311),
    ea = n(975533),
    eo = n(377400),
    es = n(285865),
    ec = n(659971),
    eu = n(929809),
    ed = n(122333),
    ep = n(960275),
    ef = n(818765),
    eh = n(678492),
    eg = n(269089),
    em = n(380570),
    e_ = n(837689),
    eb = n(930114),
    eE = n(367207),
    eO = n(489977),
    ey = n(329557),
    ev = n(304445),
    eI = n(893607),
    eC = n(703656),
    eS = n(298969),
    eT = n(719256),
    eN = n(6025),
    ej = n(897473),
    eP = n(377368),
    ex = n(262702),
    eA = n(639033),
    eZ = n(479313),
    ew = n(911560),
    eL = n(703016),
    eR = n(892001),
    eD = n(497805),
    eM = n(332754),
    ek = n(313789),
    eU = n(507468),
    eG = n(722589),
    eB = n(518596),
    eH = n(282506),
    eV = n(444961),
    eF = n(314897),
    ez = n(433355),
    eY = n(592125),
    eW = n(896797),
    eq = n(430824),
    eK = n(819640),
    eQ = n(283595),
    eJ = n(944486),
    eX = n(914010),
    e$ = n(695103),
    e0 = n(241890),
    e1 = n(417363),
    e8 = n(900974),
    e4 = n(358085),
    e3 = n(998502),
    e5 = n(346329),
    e2 = n(981631),
    e6 = n(176505),
    e7 = n(701476),
    e9 = n(186901);
function te(e, t, n) {
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
function tt(e) {
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
                te(e, t, n[t]);
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
let tn = !1;
(0, S.DL)(),
    o.ZP.initialize(),
    eS.Z.loadServer(),
    e4.isPlatformEmbedded &&
        (e3.ZP.on("USER_SETTINGS_OPEN", (e, t) => {
            eK.Z.getLayers().includes(e2.S9g.USER_SETTINGS) || (0, eB.openUserSettings)();
        }),
        e3.ZP.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eQ.Z.getActiveLibraryApplication(t);
            e5.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e2.ZY5.DIRECT,
                        object: e2.qAy.WEB_URL,
                    },
                },
            });
        }));
let tr = (0, m.l)((e) => {
        let { location: t } = e,
            n = (0, eG.default)(t.pathname);
        return (
            null != n &&
                (0, Q.h)(() => {
                    (0, eB.openUserSettingsFromParsedUrl)({
                        match: n,
                        urlOrigin: "deeplink",
                    });
                }),
            (0, r.jsx)(g.Z, {
                deepLinkType: e9.jE.USER_SETTINGS,
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
                children: (0, r.jsx)(a.l_, { to: eW.Z.defaultRoute }),
            })
        );
    }),
    ti = o.ZP.connectStores([K.Z, eW.Z, eF.default], () => ({
        isConnected: K.Z.isConnected(),
        defaultRoute: eW.Z.defaultRoute,
        defaultRouteFallback: eW.Z.fallbackRoute,
        token: eF.default.getToken(),
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, X.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: e2.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tu(t);
                    return null == e ||
                        ((e.params.guildId === e2.ME || null != eq.Z.getGuild(e.params.guildId)) &&
                            null != eY.Z.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.l_, { to: t })
                        : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        },
    ),
    tl = (0, m.l)((0, N.e)(P.Z, null, { passProps: !1 })),
    ta = (0, N.e)(J.default, null, { passProps: !1 }),
    to = [
        e2.Z5c.GUILD_BOOSTING_MARKETING(eI.Hw.guildId()),
        ...Array.from(e6.Vg).map((e) => e2.Z5c.CHANNEL(eI.Hw.guildId(), e)),
    ];
function ts(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : e2.ME,
        channelId: n,
        messageId: r,
        threadId: i,
    };
}
let tc = [
    {
        path: [e2.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(ti, { match: t });
        },
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, Q.h)(() => {
                    (0, d.b)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, eb.V)({ processedCode: t.code });
                    });
                }),
                (0, r.jsx)(a.l_, { to: eW.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.APP],
        render: () => (0, r.jsx)(ti, {}),
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, Q.h)(() =>
                    (0, eR.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [T.Z.URI_SCHEME],
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eW.Z.defaultRoute })
            );
        },
    },
    {
        path: [e2.Z5c.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                e1.Z.whenInitialized(() => {
                    eQ.Z.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = eQ.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e5.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: e2.ZY5.DIRECT,
                                            object: e2.qAy.WEB_URL,
                                        },
                                    },
                                });
                                break;
                            }
                            case "test-mode":
                                e$.Z.whenInitialized(() => h.Wt(n));
                                break;
                            case "uninstall": {
                                let e = eQ.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, e2.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.l_, { to: e2.Z5c.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [e2.Z5c.GUILD_CREATE],
        render: function () {
            return (
                (0, Q.h)(() => D.Z.openCreateGuildModal({ location: "External link" })),
                (0, r.jsx)(a.l_, { to: eW.Z.defaultRoute })
            );
        },
    },
    {
        path: [e2.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, Q.h)(() =>
                    en.v({
                        section: (0, et.Z)(e2.pNK, n),
                        subsection: (0, et.Z)(e2.KsC, i),
                        feature: o,
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eW.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.SETTINGS(":section", ":subsection?")],
        render: tr,
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(eI.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, Q.h)(() => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("15076"), n.e("38203")]).then(n.bind(n, 907941));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = tt({}, t)),
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
                (0, r.jsx)(a.l_, { to: e2.Z5c.CHANNEL(i) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, Q.h)(() => (0, eB.openUserSettings)(ek.n.GIFT_PANEL, { section: e2.oAB.INVENTORY })),
                (0, r.jsx)(a.l_, { to: eW.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.WELCOME(eI.Hw.guildId({ optional: !0 }), eI.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, eu.c)(e7.M5.MARKETING_UNCLAIMED);
            let l = e2.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.GUILD_EVENT_DETAILS(eI.Hw.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, Q.h)(() => {
                    (0, $.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e2.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.GUILD_SETTINGS(eI.Hw.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, Q.h)(() => {
                    ee.Z.open(n, (0, et.Z)(e2.pNK, i), void 0, (0, et.Z)(e2.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e2.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [
            e2.Z5c.CHANNEL_THREAD_VIEW(eI.Hw.guildId(), eI.Hw.channelId(), ":threadId", ":messageId?"),
            e2.Z5c.CHANNEL(eI.Hw.guildId(), eI.Hw.channelId({ optional: !0 }), ":messageId?"),
            e2.Z5c.ACTIVITY,
            e2.Z5c.ACTIVITIES,
            e2.Z5c.ACTIVITIES_HAPPENING_NOW,
            e2.Z5c.ACTIVITY_DETAILS(":applicationId"),
            e2.Z5c.APPLICATION_LIBRARY,
            e2.Z5c.APPLICATION_STORE,
            e2.Z5c.MESSAGE_REQUESTS,
            e2.Z5c.COLLECTIBLES_SHOP,
            e2.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e2.Z5c.GUILD_DISCOVERY,
            e2.Z5c.QUEST_HOME,
            e2.Z5c.QUEST_HOME_V2,
            e2.Z5c.ICYMI,
            e2.Z5c.GLOBAL_DISCOVERY,
            e2.Z5c.GUILD_MEMBER_VERIFICATION(eI.Hw.guildId()),
            e2.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(eI.Hw.guildId(), ":inviteCode?"),
            e2.Z5c.GUILD_BOOSTING_MARKETING(eI.Hw.guildId()),
            e2.Z5c.GUILD_FEATURE(":feature", eI.Hw.guildId()),
            e2.Z5c.FEATURE(":feature"),
            e2.Z5c.FAMILY_CENTER,
        ],
        render: tl,
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [e2.Z5c.APPLICATION_DIRECTORY],
        render: ta,
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.GAME_SHOP(eI.Hw.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: i, shopSlug: l } = t.params;
            return (0, r.jsx)(a.l_, { to: e2.Z5c.CHANNELS_GAME_SHOP(n, 0, i, l) });
        },
        isSessionRequired: !0,
    },
];
function tu(e) {
    for (let { path: t, isChatRoute: n } of tc) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function td(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!K.Z.isConnected()) return;
    let { location: i } = (0, eC.s1)();
    i.pathname === r && (null == eY.Z.getChannel(t) ? (0, eC.dL)(e2.Z5c.CHANNEL(n)) : (0, eC.dL)(r));
}
class tp extends i.PureComponent {
    componentDidMount() {
        e3.ZP.setZoomFactor(_.Z.zoom),
            eS.Z.init(),
            j.Z.initialize(),
            em.Z.initialize(),
            z.Z.initialize(),
            eV.Z.initialize(),
            Y.Z.initialize(),
            eE.Z.initialize(),
            k.Z.initialize(),
            ea.Z.initialize(),
            b.Z.init(),
            q.Z.init(),
            W.Z.init(),
            ed.Z.initialize(),
            I.Z.initialize(),
            B.Z.initialize(),
            eO.Z.initialize(),
            v.ZP.initialize(),
            H.ZP.initialize(),
            eH.Z.initialize(),
            eg.Z.initialize(),
            y.Z.initialize(),
            er.Z.init(),
            Z.Z.init(),
            e8.Z.init(),
            O.Z.initialize(),
            eL.Z.init(),
            e0.Z.init(),
            eM.Z.init(),
            ex.Z.initialize(),
            eA.Z.initialize(),
            eD.Z.initialize(),
            eU.Z.init(),
            G.Z.initialize(),
            E.Z.initialize(),
            eT.Z.initialize(),
            eP.Z.initialize(),
            ef.Z.initialize(),
            ep.Z.initialize(),
            eh.Z.initialize(),
            w.Z.initialize(),
            L.Z.initialize(),
            F.Z.initialize(),
            el.Z.initialize(),
            ei.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, tt({}, t));
                    }),
            }),
            eo.Z.initialize(),
            ey.Z.initialize(),
            e_.Z.initialize(),
            M.Z.initialize(),
            x.Z.initialize(),
            A.Z.initialize(),
            C.Z.initialize(),
            (this.rewriterUnlisten = ev.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = ev.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eS.Z.terminate(),
            eV.Z.terminate(),
            eE.Z.terminate(),
            em.Z.terminate(),
            j.Z.terminate(),
            v.ZP.terminate(),
            H.ZP.terminate(),
            eH.Z.terminate(),
            y.Z.terminate(),
            eO.Z.terminate(),
            eg.Z.terminate(),
            eD.Z.terminate(),
            O.Z.terminate(),
            G.Z.terminate(),
            eo.Z.terminate(),
            E.Z.terminate(),
            ey.Z.terminate(),
            eT.Z.terminate(),
            eP.Z.terminate(),
            ef.Z.terminate(),
            ep.Z.terminate(),
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
            el.Z.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e, t) {
        let { pathname: n, search: r, key: i } = e;
        !(function (e) {
            if (K.Z.isConnected() || K.Z.isTryingToConnect()) return;
            let t = eF.default.getToken();
            null != t &&
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of tc) {
                            if (!n) continue;
                            let r = (0, a.LX)(e, { path: t });
                            if (null != r) return r;
                        }
                        return null;
                    })(e) &&
                c.Z.startSession(t);
        })(n),
            (function (e, t) {
                let n = tu(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: o, threadId: s } = ts(n),
                    c = (0, eI.Ss)(r),
                    u = (0, eI.cq)(i),
                    d = (0, eI.cq)(s),
                    h = eX.Z.getGuildId(),
                    g = h !== r;
                if ((c && g && p.Z.selectGuild(r), c && u)) {
                    let n = eJ.Z.getChannelId(h),
                        a = n !== i,
                        c = null != ez.ZP.getGuildSidebarState(r);
                    if (!tn || g || a || null != o) {
                        (tn = !0),
                            f.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eZ.ZP.setSelectedSummary(i, e);
                    }
                    if (
                        (c &&
                            a &&
                            null != i &&
                            null != ez.ZP.getCurrentSidebarChannelId(i) &&
                            eN.Z.closeChannelSidebar(i),
                        null != s && d)
                    ) {
                        let e = ez.ZP.getCurrentSidebarChannelId(n),
                            t = e !== s;
                        if (null != i && null != s && t)
                            if (c) (0, eC.dL)(e2.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: ej.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    eN.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                        else c && null != e && null != i && eN.Z.closeChannelSidebar(i);
                    } else null == i || a || eN.Z.closeChannelSidebar(i);
                    let u = ec.Z.getIsOpen();
                    if (i === e6.oC.ROLE_SUBSCRIPTIONS) es.Z.closeSidebar();
                    else if (g && u) {
                        let t = null == h && r === e2.ME,
                            n = e === e2.Z5c.GUILD_DISCOVERY;
                        t || n ? es.Z.closeSidebar() : es.Z.openSidebar();
                    } else ((a && u) || (!g && !a)) && es.Z.closeSidebar();
                } else
                    to.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, eC.dL)(eW.Z.fallbackRoute);
            })(n, r),
            (0, U.pN)(n, i, "REPLACE" === t);
    }
    ensureChannelMatchesGuild(e) {
        if (!K.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = tu(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = ts(n),
            a = (0, eI.Ss)(r) && r !== e2.ME && r !== e2.I_8;
        if (null != i && (0, eI.cq)(i) && !(0, e6.AB)(i) && a) {
            let n = eY.Z.getChannel(i);
            if (null == n)
                ew.Z.loadThread(i).then(() =>
                    td({
                        channelId: i,
                        guildId: r,
                        pathname: t,
                    }),
                );
            else if (n.guild_id !== r && r !== e2.STv)
                return {
                    path: e2.Z5c.CHANNEL(r),
                    state: e.state,
                };
            if (null != l) {
                if (!((0, eI.cq)(l) && !(0, e6.AB)(i))) return null;
                let n = eY.Z.getChannel(l);
                if (null == n)
                    ew.Z.loadThread(l).then(() =>
                        td({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eN.Z.closeChannelSidebar(i),
                        {
                            path: e2.Z5c.CHANNEL(r, i),
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
                        tc.map((e) => {
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
        super(...e), te(this, "historyUnlisten", () => {}), te(this, "rewriterUnlisten", () => {});
    }
}
let tf = tp;
