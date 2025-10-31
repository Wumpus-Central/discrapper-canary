n.r(t), n.d(t, { default: () => td }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(593473),
    a = n(843611),
    s = n(442837),
    o = n(481060),
    c = n(893776),
    u = n(943094),
    d = n(749210),
    p = n(287734),
    f = n(401430),
    m = n(773244),
    h = n(951752),
    g = n(607070),
    _ = n(627845),
    b = n(185666),
    E = n(503737),
    O = n(513202),
    I = n(318891),
    y = n(687751),
    v = n(64514),
    C = n(912471),
    S = n(100527),
    T = n(77987),
    N = n(679891),
    j = n(491575),
    P = n(954709),
    x = n(644679),
    A = n(403763),
    Z = n(314533),
    w = n(9029),
    L = n(935347),
    R = n(560067),
    D = n(823169),
    M = n(845767),
    k = n(891304),
    U = n(96051),
    G = n(750995),
    B = n(610278),
    H = n(696287),
    V = n(657030),
    F = n(408026),
    z = n(763916),
    Y = n(306721),
    W = n(531551),
    q = n(38618),
    K = n(972830),
    Q = n(684572),
    J = n(584233),
    X = n(15274),
    $ = n(434404),
    ee = n(543842),
    et = n(879064),
    en = n(315964),
    er = n(495784),
    ei = n(883311),
    el = n(975533),
    ea = n(377400),
    es = n(285865),
    eo = n(659971),
    ec = n(929809),
    eu = n(122333),
    ed = n(960275),
    ep = n(818765),
    ef = n(678492),
    em = n(269089),
    eh = n(380570),
    eg = n(837689),
    e_ = n(367207),
    eb = n(489977),
    eE = n(329557),
    eO = n(304445),
    eI = n(893607),
    ey = n(703656),
    ev = n(298969),
    eC = n(719256),
    eS = n(6025),
    eT = n(897473),
    eN = n(377368),
    ej = n(262702),
    eP = n(639033),
    ex = n(479313),
    eA = n(911560),
    eZ = n(703016),
    ew = n(892001),
    eL = n(497805),
    eR = n(332754),
    eD = n(313789),
    eM = n(507468),
    ek = n(722589),
    eU = n(518596),
    eG = n(282506),
    eB = n(444961),
    eH = n(314897),
    eV = n(433355),
    eF = n(592125),
    ez = n(896797),
    eY = n(430824),
    eW = n(819640),
    eq = n(283595),
    eK = n(944486),
    eQ = n(914010),
    eJ = n(695103),
    eX = n(241890),
    e$ = n(417363),
    e0 = n(900974),
    e1 = n(358085),
    e8 = n(998502),
    e4 = n(346329),
    e3 = n(981631),
    e5 = n(176505),
    e2 = n(701476),
    e6 = n(186901);
function e7(e, t, n) {
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
function e9(e) {
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
                e7(e, t, n[t]);
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
let te = !1;
(0, C.DL)(),
    s.ZP.initialize(),
    ev.Z.loadServer(),
    e1.isPlatformEmbedded &&
        (e8.ZP.on("USER_SETTINGS_OPEN", (e, t) => {
            eW.Z.getLayers().includes(e3.S9g.USER_SETTINGS) || (0, eU.openUserSettings)();
        }),
        e8.ZP.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eq.Z.getActiveLibraryApplication(t);
            e4.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e3.ZY5.DIRECT,
                        object: e3.qAy.WEB_URL,
                    },
                },
            });
        }));
let tt = (0, h.l)((e) => {
        let { location: t } = e,
            n = (0, ek.default)(t.pathname);
        return (
            null != n &&
                (0, K.h)(() => {
                    (0, eU.openUserSettingsFromParsedUrl)({
                        match: n,
                        urlOrigin: "deeplink",
                    });
                }),
            (0, r.jsx)(m.Z, {
                deepLinkType: e6.jE.USER_SETTINGS,
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
                children: (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute }),
            })
        );
    }),
    tn = s.ZP.connectStores([q.Z, ez.Z, eH.default], () => ({
        isConnected: q.Z.isConnected(),
        defaultRoute: ez.Z.defaultRoute,
        defaultRouteFallback: ez.Z.fallbackRoute,
        token: eH.default.getToken(),
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
                    let e = to(t);
                    return null == e ||
                        ((e.params.guildId === e3.ME || null != eY.Z.getGuild(e.params.guildId)) &&
                            null != eF.Z.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.l_, { to: t })
                        : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        },
    ),
    tr = (0, h.l)((0, T.e)(j.Z, null, { passProps: !1 })),
    ti = (0, T.e)(Q.default, null, { passProps: !1 }),
    tl = [
        e3.Z5c.GUILD_BOOSTING_MARKETING(eI.Hw.guildId()),
        ...Array.from(e5.Vg).map((e) => e3.Z5c.CHANNEL(eI.Hw.guildId(), e)),
    ];
function ta(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : e3.ME,
        channelId: n,
        messageId: r,
        threadId: i,
    };
}
let ts = [
    {
        path: [e3.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(tn, { match: t });
        },
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.APP],
        render: () => (0, r.jsx)(tn, {}),
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, K.h)(() =>
                    (0, ew.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [S.Z.URI_SCHEME],
                    }),
                ),
                (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute })
            );
        },
    },
    {
        path: [e3.Z5c.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                e$.Z.whenInitialized(() => {
                    eq.Z.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = eq.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e4.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: e3.ZY5.DIRECT,
                                            object: e3.qAy.WEB_URL,
                                        },
                                    },
                                });
                                break;
                            }
                            case "test-mode":
                                eJ.Z.whenInitialized(() => f.Wt(n));
                                break;
                            case "uninstall": {
                                let e = eq.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, e3.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.l_, { to: e3.Z5c.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [e3.Z5c.GUILD_CREATE],
        render: function () {
            return (
                (0, K.h)(() => R.Z.openCreateGuildModal({ location: "External link" })),
                (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute })
            );
        },
    },
    {
        path: [e3.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                s = (0, l.parse)(location.search).feature;
            return (
                (0, K.h)(() =>
                    et.v({
                        section: (0, ee.Z)(e3.pNK, n),
                        subsection: (0, ee.Z)(e3.KsC, i),
                        feature: s,
                    }),
                ),
                (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.SETTINGS(":section", ":subsection?")],
        render: tt,
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(eI.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, K.h)(() => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("15076"), n.e("38203")]).then(n.bind(n, 907941));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = e9({}, t)),
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
                (0, r.jsx)(a.l_, { to: e3.Z5c.CHANNEL(i) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, K.h)(() => (0, eU.openUserSettings)(eD.n.GIFT_PANEL, { section: e3.oAB.INVENTORY })),
                (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.WELCOME(eI.Hw.guildId({ optional: !0 }), eI.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, ec.c)(e2.M5.MARKETING_UNCLAIMED);
            let l = e3.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.GUILD_EVENT_DETAILS(eI.Hw.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, K.h)(() => {
                    (0, X.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e3.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.GUILD_SETTINGS(eI.Hw.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, K.h)(() => {
                    $.Z.open(n, (0, ee.Z)(e3.pNK, i), void 0, (0, ee.Z)(e3.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e3.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [
            e3.Z5c.CHANNEL_THREAD_VIEW(eI.Hw.guildId(), eI.Hw.channelId(), ":threadId", ":messageId?"),
            e3.Z5c.CHANNEL(eI.Hw.guildId(), eI.Hw.channelId({ optional: !0 }), ":messageId?"),
            e3.Z5c.ACTIVITY,
            e3.Z5c.ACTIVITIES,
            e3.Z5c.ACTIVITIES_HAPPENING_NOW,
            e3.Z5c.ACTIVITY_DETAILS(":applicationId"),
            e3.Z5c.APPLICATION_LIBRARY,
            e3.Z5c.APPLICATION_STORE,
            e3.Z5c.MESSAGE_REQUESTS,
            e3.Z5c.COLLECTIBLES_SHOP,
            e3.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e3.Z5c.GUILD_DISCOVERY,
            e3.Z5c.QUEST_HOME,
            e3.Z5c.QUEST_HOME_V2,
            e3.Z5c.ICYMI,
            e3.Z5c.GLOBAL_DISCOVERY,
            e3.Z5c.GUILD_MEMBER_VERIFICATION(eI.Hw.guildId()),
            e3.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(eI.Hw.guildId(), ":inviteCode?"),
            e3.Z5c.GUILD_BOOSTING_MARKETING(eI.Hw.guildId()),
            e3.Z5c.GUILD_FEATURE(":feature", eI.Hw.guildId()),
            e3.Z5c.FEATURE(":feature"),
            e3.Z5c.FAMILY_CENTER,
        ],
        render: tr,
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [e3.Z5c.APPLICATION_DIRECTORY],
        render: ti,
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.GAME_SHOP(eI.Hw.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: i, shopSlug: l } = t.params;
            return (0, r.jsx)(a.l_, { to: e3.Z5c.CHANNELS_GAME_SHOP(n, 0, i, l) });
        },
        isSessionRequired: !0,
    },
];
function to(e) {
    for (let { path: t, isChatRoute: n } of ts) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function tc(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!q.Z.isConnected()) return;
    let { location: i } = (0, ey.s1)();
    i.pathname === r && (null == eF.Z.getChannel(t) ? (0, ey.dL)(e3.Z5c.CHANNEL(n)) : (0, ey.dL)(r));
}
class tu extends i.PureComponent {
    componentDidMount() {
        e8.ZP.setZoomFactor(g.Z.zoom),
            ev.Z.init(),
            N.Z.initialize(),
            eh.Z.initialize(),
            F.Z.initialize(),
            eB.Z.initialize(),
            z.Z.initialize(),
            e_.Z.initialize(),
            M.Z.initialize(),
            el.Z.initialize(),
            _.Z.init(),
            W.Z.init(),
            Y.Z.init(),
            eu.Z.initialize(),
            y.Z.initialize(),
            G.Z.initialize(),
            eb.Z.initialize(),
            I.ZP.initialize(),
            B.ZP.initialize(),
            eG.Z.initialize(),
            em.Z.initialize(),
            O.Z.initialize(),
            en.Z.init(),
            A.Z.init(),
            e0.Z.init(),
            E.Z.initialize(),
            eZ.Z.init(),
            eX.Z.init(),
            eR.Z.init(),
            ej.Z.initialize(),
            eP.Z.initialize(),
            eL.Z.initialize(),
            eM.Z.init(),
            U.Z.initialize(),
            b.Z.initialize(),
            eC.Z.initialize(),
            eN.Z.initialize(),
            ep.Z.initialize(),
            ed.Z.initialize(),
            ef.Z.initialize(),
            Z.Z.initialize(),
            w.Z.initialize(),
            V.Z.initialize(),
            ei.Z.initialize(),
            er.Z.init({
                hasModalOpen: o.$sL,
                openModal: () =>
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, e9({}, t));
                    }),
            }),
            ea.Z.initialize(),
            eE.Z.initialize(),
            eg.Z.initialize(),
            D.Z.initialize(),
            P.Z.initialize(),
            x.Z.initialize(),
            v.Z.initialize(),
            (this.rewriterUnlisten = eO.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eO.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        ev.Z.terminate(),
            eB.Z.terminate(),
            e_.Z.terminate(),
            eh.Z.terminate(),
            N.Z.terminate(),
            I.ZP.terminate(),
            B.ZP.terminate(),
            eG.Z.terminate(),
            O.Z.terminate(),
            eb.Z.terminate(),
            em.Z.terminate(),
            eL.Z.terminate(),
            E.Z.terminate(),
            U.Z.terminate(),
            ea.Z.terminate(),
            b.Z.terminate(),
            eE.Z.terminate(),
            eC.Z.terminate(),
            eN.Z.terminate(),
            ep.Z.terminate(),
            ed.Z.terminate(),
            ef.Z.terminate(),
            Z.Z.terminate(),
            w.Z.terminate(),
            eg.Z.terminate(),
            D.Z.terminate(),
            H.Z.terminate(),
            P.Z.terminate(),
            x.Z.terminate(),
            v.Z.terminate(),
            V.Z.terminate(),
            ei.Z.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e, t) {
        let { pathname: n, search: r, key: i } = e;
        !(function (e) {
            if (q.Z.isConnected() || q.Z.isTryingToConnect()) return;
            let t = eH.default.getToken();
            null != t &&
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of ts) {
                            if (!n) continue;
                            let r = (0, a.LX)(e, { path: t });
                            if (null != r) return r;
                        }
                        return null;
                    })(e) &&
                c.Z.startSession(t);
        })(n),
            (function (e, t) {
                let n = to(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: s, threadId: o } = ta(n),
                    c = (0, eI.Ss)(r),
                    u = (0, eI.cq)(i),
                    f = (0, eI.cq)(o),
                    m = eQ.Z.getGuildId(),
                    h = m !== r;
                if ((c && h && d.Z.selectGuild(r), c && u)) {
                    let n = eK.Z.getChannelId(m),
                        a = n !== i,
                        c = null != eV.ZP.getGuildSidebarState(r);
                    if (!te || h || a || null != s) {
                        (te = !0),
                            p.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: s,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && ex.ZP.setSelectedSummary(i, e);
                    }
                    if (
                        (c &&
                            a &&
                            null != i &&
                            null != eV.ZP.getCurrentSidebarChannelId(i) &&
                            eS.Z.closeChannelSidebar(i),
                        null != o && f)
                    ) {
                        let e = eV.ZP.getCurrentSidebarChannelId(n),
                            t = e !== o;
                        if (null != i && null != o && t)
                            if (c) (0, ey.dL)(e3.Z5c.CHANNEL(r, o, s));
                            else {
                                let e = { type: eT.Ff.THREAD };
                                null != s && (e.initialMessageId = s),
                                    eS.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: o,
                                        details: e,
                                    });
                            }
                        else c && null != e && null != i && eS.Z.closeChannelSidebar(i);
                    } else null == i || a || eS.Z.closeChannelSidebar(i);
                    let u = eo.Z.getIsOpen();
                    if (i === e5.oC.ROLE_SUBSCRIPTIONS) es.Z.closeSidebar();
                    else if (h && u) {
                        let t = null == m && r === e3.ME,
                            n = e === e3.Z5c.GUILD_DISCOVERY;
                        t || n ? es.Z.closeSidebar() : es.Z.openSidebar();
                    } else ((a && u) || (!h && !a)) && es.Z.closeSidebar();
                } else
                    tl.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, ey.dL)(ez.Z.fallbackRoute);
            })(n, r),
            (0, k.pN)(n, i, "REPLACE" === t);
    }
    ensureChannelMatchesGuild(e) {
        if (!q.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = to(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = ta(n),
            a = (0, eI.Ss)(r) && r !== e3.ME && r !== e3.I_8;
        if (null != i && (0, eI.cq)(i) && !(0, e5.AB)(i) && a) {
            let n = eF.Z.getChannel(i);
            if (null == n)
                eA.Z.loadThread(i).then(() =>
                    tc({
                        channelId: i,
                        guildId: r,
                        pathname: t,
                    }),
                );
            else if (n.guild_id !== r && r !== e3.STv)
                return {
                    path: e3.Z5c.CHANNEL(r),
                    state: e.state,
                };
            if (null != l) {
                if (!((0, eI.cq)(l) && !(0, e5.AB)(i))) return null;
                let n = eF.Z.getChannel(l);
                if (null == n)
                    eA.Z.loadThread(l).then(() =>
                        tc({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eS.Z.closeChannelSidebar(i),
                        {
                            path: e3.Z5c.CHANNEL(r, i),
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
                        ts.map((e) => {
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
                (0, r.jsx)(L.Z, {}),
            ],
        });
    }
    constructor(...e) {
        super(...e), e7(this, "historyUnlisten", () => {}), e7(this, "rewriterUnlisten", () => {});
    }
}
let td = tu;
