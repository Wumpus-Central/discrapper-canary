n.r(t), n.d(t, { default: () => tp }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(593473),
    a = n(843611),
    o = n(442837),
    s = n(481060),
    c = n(893776),
    u = n(943094),
    d = n(529103),
    p = n(749210),
    f = n(287734),
    h = n(401430),
    g = n(773244),
    m = n(951752),
    b = n(607070),
    _ = n(627845),
    O = n(185666),
    E = n(503737),
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
    k = n(823169),
    M = n(845767),
    U = n(891304),
    G = n(96051),
    B = n(750995),
    H = n(610278),
    V = n(696287),
    F = n(657030),
    z = n(408026),
    W = n(763916),
    Y = n(306721),
    q = n(531551),
    K = n(38618),
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
    ef = n(678492),
    eh = n(269089),
    eg = n(380570),
    em = n(837689),
    eb = n(367207),
    e_ = n(489977),
    eO = n(329557),
    eE = n(304445),
    ev = n(893607),
    ey = n(703656),
    eI = n(298969),
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
    ek = n(507468),
    eM = n(722589),
    eU = n(518596),
    eG = n(282506),
    eB = n(444961),
    eH = n(314897),
    eV = n(433355),
    eF = n(592125),
    ez = n(896797),
    eW = n(430824),
    eY = n(819640),
    eq = n(283595),
    eK = n(944486),
    eQ = n(914010),
    eX = n(695103),
    eJ = n(241890),
    e$ = n(974042),
    e0 = n(417363),
    e1 = n(900974),
    e8 = n(358085),
    e4 = n(998502),
    e3 = n(346329),
    e5 = n(981631),
    e2 = n(176505),
    e6 = n(701476),
    e7 = n(186901);
function e9(e, t, n) {
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
function te(e) {
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
                e9(e, t, n[t]);
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
let tt = !1;
(0, S.DL)(),
    o.ZP.initialize(),
    eI.Z.loadServer(),
    e8.isPlatformEmbedded &&
        (e4.ZP.on("USER_SETTINGS_OPEN", (e, t) => {
            eY.Z.getLayers().includes(e5.S9g.USER_SETTINGS) || (0, eU.openUserSettings)();
        }),
        e4.ZP.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eq.Z.getActiveLibraryApplication(t);
            e3.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e5.ZY5.DIRECT,
                        object: e5.qAy.WEB_URL,
                    },
                },
            });
        }));
let tn = (0, m.l)((e) => {
        let { location: t } = e,
            n = (0, eM.default)(t.pathname);
        return (
            null != n &&
                (0, Q.h)(() => {
                    (0, eU.openUserSettingsFromParsedUrl)({
                        match: n,
                        urlOrigin: "deeplink",
                    });
                }),
            (0, r.jsx)(g.Z, {
                deepLinkType: e7.jE.USER_SETTINGS,
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
    tr = o.ZP.connectStores([K.Z, ez.Z, eH.default], () => ({
        isConnected: K.Z.isConnected(),
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
                if (null == n) return (0, r.jsx)(a.l_, { to: e5.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tc(t);
                    return null == e ||
                        ((e.params.guildId === e5.ME || null != eW.Z.getGuild(e.params.guildId)) &&
                            null != eF.Z.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.l_, { to: t })
                        : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        },
    ),
    ti = (0, m.l)((0, N.e)(P.Z, null, { passProps: !1 })),
    tl = (0, N.e)(X.default, null, { passProps: !1 }),
    ta = [
        e5.Z5c.GUILD_BOOSTING_MARKETING(ev.Hw.guildId()),
        ...Array.from(e2.Vg).map((e) => e5.Z5c.CHANNEL(ev.Hw.guildId(), e)),
    ];
function to(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : e5.ME,
        channelId: n,
        messageId: r,
        threadId: i,
    };
}
let ts = [
    {
        path: [e5.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(tr, { match: t });
        },
        isSessionRequired: !0,
    },
    {
        path: [e5.Z5c.APP],
        render: () => (0, r.jsx)(tr, {}),
        isSessionRequired: !0,
    },
    {
        path: [e5.Z5c.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, Q.h)(() =>
                    (0, ew.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [T.Z.URI_SCHEME],
                    }),
                ),
                (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute })
            );
        },
    },
    {
        path: [e5.Z5c.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                e0.Z.whenInitialized(() => {
                    eq.Z.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = eq.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e3.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: e5.ZY5.DIRECT,
                                            object: e5.qAy.WEB_URL,
                                        },
                                    },
                                });
                                break;
                            }
                            case "test-mode":
                                eX.Z.whenInitialized(() => h.Wt(n));
                                break;
                            case "uninstall": {
                                let e = eq.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, e5.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.l_, { to: e5.Z5c.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [e5.Z5c.GUILD_CREATE],
        render: function () {
            return (
                (0, Q.h)(() => D.Z.openCreateGuildModal({ location: "External link" })),
                (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute })
            );
        },
    },
    {
        path: [e5.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, Q.h)(() =>
                    en.v({
                        section: (0, et.Z)(e5.pNK, n),
                        subsection: (0, et.Z)(e5.KsC, i),
                        feature: o,
                    }),
                ),
                (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e5.Z5c.SETTINGS(":section", ":subsection?")],
        render: tn,
        isSessionRequired: !0,
    },
    {
        path: [e5.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(ev.Hw.guildId())],
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
                                ((n = te({}, t)),
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
                (0, r.jsx)(a.l_, { to: e5.Z5c.CHANNEL(i) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e5.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, Q.h)(() => (0, eU.openUserSettings)(eD.n.GIFT_PANEL, { section: e5.oAB.INVENTORY })),
                (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e5.Z5c.WELCOME(ev.Hw.guildId({ optional: !0 }), ev.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, ec.c)(e6.M5.MARKETING_UNCLAIMED);
            let l = e5.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0,
    },
    {
        path: [e5.Z5c.GUILD_EVENT_DETAILS(ev.Hw.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, Q.h)(() => {
                    (0, $.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e5.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e5.Z5c.GUILD_SETTINGS(ev.Hw.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, Q.h)(() => {
                    ee.Z.open(n, (0, et.Z)(e5.pNK, i), void 0, (0, et.Z)(e5.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e5.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [
            e5.Z5c.CHANNEL_THREAD_VIEW(ev.Hw.guildId(), ev.Hw.channelId(), ":threadId", ":messageId?"),
            e5.Z5c.CHANNEL(ev.Hw.guildId(), ev.Hw.channelId({ optional: !0 }), ":messageId?"),
            e5.Z5c.ACTIVITY,
            e5.Z5c.ACTIVITIES,
            e5.Z5c.ACTIVITIES_HAPPENING_NOW,
            e5.Z5c.ACTIVITY_DETAILS(":applicationId"),
            e5.Z5c.APPLICATION_LIBRARY,
            e5.Z5c.APPLICATION_STORE,
            e5.Z5c.MESSAGE_REQUESTS,
            e5.Z5c.COLLECTIBLES_SHOP,
            e5.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e5.Z5c.GUILD_DISCOVERY,
            e5.Z5c.QUEST_HOME,
            e5.Z5c.QUEST_HOME_V2,
            e5.Z5c.GLOBAL_DISCOVERY,
            e5.Z5c.GUILD_MEMBER_VERIFICATION(ev.Hw.guildId()),
            e5.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(ev.Hw.guildId(), ":inviteCode?"),
            e5.Z5c.GUILD_BOOSTING_MARKETING(ev.Hw.guildId()),
            e5.Z5c.GUILD_FEATURE(":feature", ev.Hw.guildId()),
            e5.Z5c.FEATURE(":feature"),
            e5.Z5c.FAMILY_CENTER,
        ],
        render: ti,
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [e5.Z5c.APPLICATION_DIRECTORY],
        render: tl,
        isSessionRequired: !0,
    },
    {
        path: [e5.Z5c.GAME_SHOP(ev.Hw.guildId(), ":shopPageIndex?", ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopPageIndex: i, shopSkuId: l, shopSlug: o } = t.params,
                s = parseInt(i, 10);
            return (s = isNaN(s) ? 0 : s), (0, r.jsx)(a.l_, { to: e5.Z5c.CHANNELS_GAME_SHOP(n, s, l, o) });
        },
        isSessionRequired: !0,
    },
];
function tc(e) {
    for (let { path: t, isChatRoute: n } of ts) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function tu(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!K.Z.isConnected()) return;
    let { location: i } = (0, ey.s1)();
    i.pathname === r && (null == eF.Z.getChannel(t) ? (0, ey.dL)(e5.Z5c.CHANNEL(n)) : (0, ey.dL)(r));
}
class td extends i.PureComponent {
    componentDidMount() {
        e4.ZP.setZoomFactor(b.Z.zoom),
            eI.Z.init(),
            j.Z.initialize(),
            eg.Z.initialize(),
            z.Z.initialize(),
            eB.Z.initialize(),
            W.Z.initialize(),
            eb.Z.initialize(),
            M.Z.initialize(),
            el.Z.initialize(),
            _.Z.init(),
            q.Z.init(),
            Y.Z.init(),
            eu.Z.initialize(),
            I.Z.initialize(),
            B.Z.initialize(),
            e_.Z.initialize(),
            y.ZP.initialize(),
            H.ZP.initialize(),
            eG.Z.initialize(),
            eh.Z.initialize(),
            v.Z.initialize(),
            er.Z.init(),
            Z.Z.init(),
            e1.Z.init(),
            E.Z.initialize(),
            eZ.Z.init(),
            eJ.Z.init(),
            eR.Z.init(),
            ej.Z.initialize(),
            eP.Z.initialize(),
            eL.Z.initialize(),
            ek.Z.init(),
            G.Z.initialize(),
            O.Z.initialize(),
            eC.Z.initialize(),
            eN.Z.initialize(),
            ep.Z.initialize(),
            ed.Z.initialize(),
            ef.Z.initialize(),
            w.Z.initialize(),
            L.Z.initialize(),
            F.Z.initialize(),
            ei.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, te({}, t));
                    }),
            }),
            ea.Z.initialize(),
            eO.Z.initialize(),
            em.Z.initialize(),
            k.Z.initialize(),
            x.Z.initialize(),
            A.Z.initialize(),
            C.Z.initialize(),
            (this.rewriterUnlisten = eE.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eE.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eI.Z.terminate(),
            eB.Z.terminate(),
            eb.Z.terminate(),
            eg.Z.terminate(),
            j.Z.terminate(),
            y.ZP.terminate(),
            H.ZP.terminate(),
            eG.Z.terminate(),
            v.Z.terminate(),
            e_.Z.terminate(),
            eh.Z.terminate(),
            eL.Z.terminate(),
            E.Z.terminate(),
            G.Z.terminate(),
            ea.Z.terminate(),
            O.Z.terminate(),
            eO.Z.terminate(),
            eC.Z.terminate(),
            eN.Z.terminate(),
            ep.Z.terminate(),
            ed.Z.terminate(),
            ef.Z.terminate(),
            w.Z.terminate(),
            L.Z.terminate(),
            em.Z.terminate(),
            k.Z.terminate(),
            V.Z.terminate(),
            x.Z.terminate(),
            A.Z.terminate(),
            C.Z.terminate(),
            F.Z.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e, t) {
        let { pathname: n, search: r, key: i } = e,
            o = "REPLACE" === t;
        !(function (e) {
            if (K.Z.isConnected() || K.Z.isTryingToConnect()) return;
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
                let n = tc(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: o, threadId: s } = to(n),
                    c = (0, ev.Ss)(r),
                    u = (0, ev.cq)(i),
                    d = (0, ev.cq)(s),
                    h = eQ.Z.getGuildId(),
                    g = h !== r;
                if ((c && g && p.Z.selectGuild(r), c && u)) {
                    let n = eK.Z.getChannelId(h),
                        a = n !== i;
                    if (!tt || g || a || null != o) {
                        (tt = !0),
                            f.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && ex.ZP.setSelectedSummary(i, e);
                    }
                    if (null != s && d) {
                        let e = eV.ZP.getCurrentSidebarChannelId(n) !== s,
                            t = null != eV.ZP.getGuildSidebarState(r);
                        if (null != i && null != s && e)
                            if (t) (0, ey.dL)(e5.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eT.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    eS.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                    } else null == i || a || eS.Z.closeChannelSidebar(i);
                    let c = es.Z.getIsOpen();
                    if (i === e2.oC.ROLE_SUBSCRIPTIONS) eo.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == h && r === e5.ME,
                            n = e === e5.Z5c.GUILD_DISCOVERY;
                        t || n ? eo.Z.closeSidebar() : eo.Z.openSidebar();
                    } else ((a && c) || (!g && !a)) && eo.Z.closeSidebar();
                } else
                    ta.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, ey.dL)(ez.Z.fallbackRoute);
            })(n, r),
            (0, U.pN)(n, i, o),
            n !== e5.Z5c.ME || o || e$.ZP.getState().section !== e5.pJs.YOU || d.Z.setSection(e5.pJs.ONLINE);
    }
    ensureChannelMatchesGuild(e) {
        if (!K.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = tc(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = to(n),
            a = (0, ev.Ss)(r) && r !== e5.ME && r !== e5.I_8;
        if (null != i && (0, ev.cq)(i) && !(0, e2.AB)(i) && a) {
            let n = eF.Z.getChannel(i);
            if (null == n)
                eA.Z.loadThread(i).then(() =>
                    tu({
                        channelId: i,
                        guildId: r,
                        pathname: t,
                    }),
                );
            else if (n.guild_id !== r && r !== e5.STv)
                return {
                    path: e5.Z5c.CHANNEL(r),
                    state: e.state,
                };
            if (null != l) {
                if (!((0, ev.cq)(l) && !(0, e2.AB)(i))) return null;
                let n = eF.Z.getChannel(l);
                if (null == n)
                    eA.Z.loadThread(l).then(() =>
                        tu({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eS.Z.closeChannelSidebar(i),
                        {
                            path: e5.Z5c.CHANNEL(r, i),
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
                (0, r.jsx)(R.Z, {}),
            ],
        });
    }
    constructor(...e) {
        super(...e), e9(this, "historyUnlisten", () => {}), e9(this, "rewriterUnlisten", () => {});
    }
}
let tp = td;
