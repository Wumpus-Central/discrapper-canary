n.r(t), n.d(t, { default: () => tu }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(593473),
    a = n(843611),
    o = n(442837),
    s = n(481060),
    c = n(893776),
    u = n(943094),
    d = n(749210),
    p = n(287734),
    f = n(401430),
    h = n(773244),
    g = n(951752),
    m = n(607070),
    b = n(627845),
    _ = n(185666),
    E = n(503737),
    O = n(513202),
    v = n(318891),
    y = n(687751),
    I = n(64514),
    C = n(912471),
    S = n(100527),
    N = n(77987),
    T = n(679891),
    P = n(491575),
    j = n(954709),
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
    W = n(306721),
    Y = n(531551),
    q = n(38618),
    K = n(972830),
    Q = n(684572),
    X = n(584233),
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
    ef = n(269089),
    eh = n(380570),
    eg = n(837689),
    em = n(367207),
    eb = n(489977),
    e_ = n(329557),
    eE = n(304445),
    eO = n(893607),
    ev = n(703656),
    ey = n(298969),
    eI = n(719256),
    eC = n(6025),
    eS = n(897473),
    eN = n(377368),
    eT = n(262702),
    eP = n(639033),
    ej = n(479313),
    ex = n(911560),
    eA = n(703016),
    eZ = n(892001),
    ew = n(497805),
    eL = n(332754),
    eR = n(313789),
    eD = n(507468),
    eM = n(722589),
    ek = n(518596),
    eU = n(282506),
    eG = n(444961),
    eB = n(314897),
    eH = n(433355),
    eV = n(592125),
    eF = n(896797),
    ez = n(430824),
    eW = n(819640),
    eY = n(283595),
    eq = n(944486),
    eK = n(914010),
    eQ = n(695103),
    eX = n(241890),
    eJ = n(417363),
    e$ = n(900974),
    e0 = n(358085),
    e1 = n(998502),
    e8 = n(346329),
    e4 = n(981631),
    e3 = n(176505),
    e5 = n(701476),
    e2 = n(186901);
function e6(e, t, n) {
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
function e7(e) {
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
                e6(e, t, n[t]);
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
let e9 = !1;
(0, C.DL)(),
    o.ZP.initialize(),
    ey.Z.loadServer(),
    e0.isPlatformEmbedded &&
        (e1.ZP.on("USER_SETTINGS_OPEN", (e, t) => {
            eW.Z.getLayers().includes(e4.S9g.USER_SETTINGS) || (0, ek.openUserSettings)();
        }),
        e1.ZP.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eY.Z.getActiveLibraryApplication(t);
            e8.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e4.ZY5.DIRECT,
                        object: e4.qAy.WEB_URL,
                    },
                },
            });
        }));
let te = (0, g.l)((e) => {
        let { location: t } = e,
            n = (0, eM.default)(t.pathname);
        return (
            null != n &&
                (0, K.h)(() => {
                    (0, ek.openUserSettingsFromParsedUrl)({
                        match: n,
                        urlOrigin: "deeplink",
                    });
                }),
            (0, r.jsx)(h.Z, {
                deepLinkType: e2.jE.USER_SETTINGS,
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
                children: (0, r.jsx)(a.l_, { to: eF.Z.defaultRoute }),
            })
        );
    }),
    tt = o.ZP.connectStores([q.Z, eF.Z, eB.default], () => ({
        isConnected: q.Z.isConnected(),
        defaultRoute: eF.Z.defaultRoute,
        defaultRouteFallback: eF.Z.fallbackRoute,
        token: eB.default.getToken(),
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, X.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: e4.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = to(t);
                    return null == e ||
                        ((e.params.guildId === e4.ME || null != ez.Z.getGuild(e.params.guildId)) &&
                            null != eV.Z.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.l_, { to: t })
                        : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        },
    ),
    tn = (0, g.l)((0, N.e)(P.Z, null, { passProps: !1 })),
    tr = (0, N.e)(Q.default, null, { passProps: !1 }),
    ti = [
        e4.Z5c.GUILD_BOOSTING_MARKETING(eO.Hw.guildId()),
        ...Array.from(e3.Vg).map((e) => e4.Z5c.CHANNEL(eO.Hw.guildId(), e)),
    ];
function tl(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : e4.ME,
        channelId: n,
        messageId: r,
        threadId: i,
    };
}
let ta = [
    {
        path: [e4.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(tt, { match: t });
        },
        isSessionRequired: !0,
    },
    {
        path: [e4.Z5c.APP],
        render: () => (0, r.jsx)(tt, {}),
        isSessionRequired: !0,
    },
    {
        path: [e4.Z5c.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, K.h)(() =>
                    (0, eZ.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [S.Z.URI_SCHEME],
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eF.Z.defaultRoute })
            );
        },
    },
    {
        path: [e4.Z5c.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                eJ.Z.whenInitialized(() => {
                    eY.Z.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = eY.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e8.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: e4.ZY5.DIRECT,
                                            object: e4.qAy.WEB_URL,
                                        },
                                    },
                                });
                                break;
                            }
                            case "test-mode":
                                eQ.Z.whenInitialized(() => f.Wt(n));
                                break;
                            case "uninstall": {
                                let e = eY.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, e4.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.l_, { to: e4.Z5c.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [e4.Z5c.GUILD_CREATE],
        render: function () {
            return (
                (0, K.h)(() => R.Z.openCreateGuildModal({ location: "External link" })),
                (0, r.jsx)(a.l_, { to: eF.Z.defaultRoute })
            );
        },
    },
    {
        path: [e4.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, K.h)(() =>
                    et.v({
                        section: (0, ee.Z)(e4.pNK, n),
                        subsection: (0, ee.Z)(e4.KsC, i),
                        feature: o,
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eF.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e4.Z5c.SETTINGS(":section", ":subsection?")],
        render: te,
        isSessionRequired: !0,
    },
    {
        path: [e4.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(eO.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, K.h)(() => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("15076"), n.e("38203")]).then(n.bind(n, 907941));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = e7({}, t)),
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
                (0, r.jsx)(a.l_, { to: e4.Z5c.CHANNEL(i) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e4.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, K.h)(() => (0, ek.openUserSettings)(eR.n.GIFT_PANEL, { section: e4.oAB.INVENTORY })),
                (0, r.jsx)(a.l_, { to: eF.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e4.Z5c.WELCOME(eO.Hw.guildId({ optional: !0 }), eO.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, es.c)(e5.M5.MARKETING_UNCLAIMED);
            let l = e4.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0,
    },
    {
        path: [e4.Z5c.GUILD_EVENT_DETAILS(eO.Hw.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, K.h)(() => {
                    (0, J.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e4.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e4.Z5c.GUILD_SETTINGS(eO.Hw.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, K.h)(() => {
                    $.Z.open(n, (0, ee.Z)(e4.pNK, i), void 0, (0, ee.Z)(e4.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e4.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [
            e4.Z5c.CHANNEL_THREAD_VIEW(eO.Hw.guildId(), eO.Hw.channelId(), ":threadId", ":messageId?"),
            e4.Z5c.CHANNEL(eO.Hw.guildId(), eO.Hw.channelId({ optional: !0 }), ":messageId?"),
            e4.Z5c.ACTIVITY,
            e4.Z5c.ACTIVITIES,
            e4.Z5c.ACTIVITIES_HAPPENING_NOW,
            e4.Z5c.ACTIVITY_DETAILS(":applicationId"),
            e4.Z5c.APPLICATION_LIBRARY,
            e4.Z5c.APPLICATION_STORE,
            e4.Z5c.MESSAGE_REQUESTS,
            e4.Z5c.COLLECTIBLES_SHOP,
            e4.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e4.Z5c.GUILD_DISCOVERY,
            e4.Z5c.QUEST_HOME,
            e4.Z5c.QUEST_HOME_V2,
            e4.Z5c.GLOBAL_DISCOVERY,
            e4.Z5c.GUILD_MEMBER_VERIFICATION(eO.Hw.guildId()),
            e4.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(eO.Hw.guildId(), ":inviteCode?"),
            e4.Z5c.GUILD_BOOSTING_MARKETING(eO.Hw.guildId()),
            e4.Z5c.GUILD_FEATURE(":feature", eO.Hw.guildId()),
            e4.Z5c.FEATURE(":feature"),
            e4.Z5c.FAMILY_CENTER,
        ],
        render: tn,
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [e4.Z5c.APPLICATION_DIRECTORY],
        render: tr,
        isSessionRequired: !0,
    },
    {
        path: [e4.Z5c.GAME_SHOP(eO.Hw.guildId(), ":shopPageIndex?", ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopPageIndex: i, shopSkuId: l, shopSlug: o } = t.params,
                s = parseInt(i, 10);
            return (s = isNaN(s) ? 0 : s), (0, r.jsx)(a.l_, { to: e4.Z5c.CHANNELS_GAME_SHOP(n, s, l, o) });
        },
        isSessionRequired: !0,
    },
];
function to(e) {
    for (let { path: t, isChatRoute: n } of ta) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function ts(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!q.Z.isConnected()) return;
    let { location: i } = (0, ev.s1)();
    i.pathname === r && (null == eV.Z.getChannel(t) ? (0, ev.dL)(e4.Z5c.CHANNEL(n)) : (0, ev.dL)(r));
}
class tc extends i.PureComponent {
    componentDidMount() {
        e1.ZP.setZoomFactor(m.Z.zoom),
            ey.Z.init(),
            T.Z.initialize(),
            eh.Z.initialize(),
            F.Z.initialize(),
            eG.Z.initialize(),
            z.Z.initialize(),
            em.Z.initialize(),
            M.Z.initialize(),
            ei.Z.initialize(),
            b.Z.init(),
            Y.Z.init(),
            W.Z.init(),
            ec.Z.initialize(),
            y.Z.initialize(),
            G.Z.initialize(),
            eb.Z.initialize(),
            v.ZP.initialize(),
            B.ZP.initialize(),
            eU.Z.initialize(),
            ef.Z.initialize(),
            O.Z.initialize(),
            en.Z.init(),
            A.Z.init(),
            e$.Z.init(),
            E.Z.initialize(),
            eA.Z.init(),
            eX.Z.init(),
            eL.Z.init(),
            eT.Z.initialize(),
            eP.Z.initialize(),
            ew.Z.initialize(),
            eD.Z.init(),
            U.Z.initialize(),
            _.Z.initialize(),
            eI.Z.initialize(),
            eN.Z.initialize(),
            ed.Z.initialize(),
            eu.Z.initialize(),
            ep.Z.initialize(),
            Z.Z.initialize(),
            w.Z.initialize(),
            V.Z.initialize(),
            er.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, e7({}, t));
                    }),
            }),
            el.Z.initialize(),
            e_.Z.initialize(),
            eg.Z.initialize(),
            D.Z.initialize(),
            j.Z.initialize(),
            x.Z.initialize(),
            I.Z.initialize(),
            (this.rewriterUnlisten = eE.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eE.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        ey.Z.terminate(),
            eG.Z.terminate(),
            em.Z.terminate(),
            eh.Z.terminate(),
            T.Z.terminate(),
            v.ZP.terminate(),
            B.ZP.terminate(),
            eU.Z.terminate(),
            O.Z.terminate(),
            eb.Z.terminate(),
            ef.Z.terminate(),
            ew.Z.terminate(),
            E.Z.terminate(),
            U.Z.terminate(),
            el.Z.terminate(),
            _.Z.terminate(),
            e_.Z.terminate(),
            eI.Z.terminate(),
            eN.Z.terminate(),
            ed.Z.terminate(),
            eu.Z.terminate(),
            ep.Z.terminate(),
            Z.Z.terminate(),
            w.Z.terminate(),
            eg.Z.terminate(),
            D.Z.terminate(),
            H.Z.terminate(),
            j.Z.terminate(),
            x.Z.terminate(),
            I.Z.terminate(),
            V.Z.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e, t) {
        let { pathname: n, search: r, key: i } = e;
        !(function (e) {
            if (q.Z.isConnected() || q.Z.isTryingToConnect()) return;
            let t = eB.default.getToken();
            null != t &&
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of ta) {
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
                let { guildId: r, channelId: i, messageId: o, threadId: s } = tl(n),
                    c = (0, eO.Ss)(r),
                    u = (0, eO.cq)(i),
                    f = (0, eO.cq)(s),
                    h = eK.Z.getGuildId(),
                    g = h !== r;
                if ((c && g && d.Z.selectGuild(r), c && u)) {
                    let n = eq.Z.getChannelId(h),
                        a = n !== i;
                    if (!e9 || g || a || null != o) {
                        (e9 = !0),
                            p.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && ej.ZP.setSelectedSummary(i, e);
                    }
                    if (null != s && f) {
                        let e = eH.ZP.getCurrentSidebarChannelId(n) !== s,
                            t = null != eH.ZP.getGuildSidebarState(r);
                        if (null != i && null != s && e)
                            if (t) (0, ev.dL)(e4.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eS.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    eC.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                    } else null == i || a || eC.Z.closeChannelSidebar(i);
                    let c = eo.Z.getIsOpen();
                    if (i === e3.oC.ROLE_SUBSCRIPTIONS) ea.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == h && r === e4.ME,
                            n = e === e4.Z5c.GUILD_DISCOVERY;
                        t || n ? ea.Z.closeSidebar() : ea.Z.openSidebar();
                    } else ((a && c) || (!g && !a)) && ea.Z.closeSidebar();
                } else
                    ti.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, ev.dL)(eF.Z.fallbackRoute);
            })(n, r),
            (0, k.pN)(n, i, "REPLACE" === t);
    }
    ensureChannelMatchesGuild(e) {
        if (!q.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = to(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = tl(n),
            a = (0, eO.Ss)(r) && r !== e4.ME && r !== e4.I_8;
        if (null != i && (0, eO.cq)(i) && !(0, e3.AB)(i) && a) {
            let n = eV.Z.getChannel(i);
            if (null == n)
                ex.Z.loadThread(i).then(() =>
                    ts({
                        channelId: i,
                        guildId: r,
                        pathname: t,
                    }),
                );
            else if (n.guild_id !== r && r !== e4.STv)
                return {
                    path: e4.Z5c.CHANNEL(r),
                    state: e.state,
                };
            if (null != l) {
                if (!((0, eO.cq)(l) && !(0, e3.AB)(i))) return null;
                let n = eV.Z.getChannel(l);
                if (null == n)
                    ex.Z.loadThread(l).then(() =>
                        ts({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eC.Z.closeChannelSidebar(i),
                        {
                            path: e4.Z5c.CHANNEL(r, i),
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
                        ta.map((e) => {
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
        super(...e), e6(this, "historyUnlisten", () => {}), e6(this, "rewriterUnlisten", () => {});
    }
}
let tu = tc;
