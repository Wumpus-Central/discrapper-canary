n.r(t), n.d(t, { default: () => tb }), n(35282), n(388685);
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
    eg = n(960275),
    eh = n(818765),
    em = n(678492),
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
    eN = n(267713),
    ej = n(298969),
    eP = n(719256),
    ex = n(6025),
    eA = n(897473),
    eZ = n(377368),
    ew = n(262702),
    eL = n(639033),
    eR = n(479313),
    eD = n(911560),
    eM = n(703016),
    ek = n(892001),
    eU = n(497805),
    eG = n(332754),
    eH = n(313789),
    eB = n(507468),
    eV = n(722589),
    eF = n(518596),
    ez = n(282506),
    eY = n(444961),
    eW = n(314897),
    eK = n(433355),
    eq = n(592125),
    eQ = n(896797),
    eJ = n(430824),
    eX = n(819640),
    e$ = n(283595),
    e0 = n(944486),
    e1 = n(914010),
    e4 = n(695103),
    e3 = n(241890),
    e8 = n(417363),
    e5 = n(900974),
    e2 = n(449934),
    e7 = n(358085),
    e9 = n(998502),
    e6 = n(346329),
    te = n(981631),
    tt = n(176505),
    tn = n(701476),
    tr = n(186901);
function ti(e, t, n) {
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
function tl(e) {
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
                ti(e, t, n[t]);
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
let ta = !1;
(0, T.DL)(),
    o.ZP.initialize(),
    ej.Z.loadServer(),
    e7.isPlatformEmbedded &&
        (e9.ZP.on("USER_SETTINGS_OPEN", (e, t) => {
            eX.Z.getLayers().includes(te.S9g.USER_SETTINGS) || (0, eF.openUserSettings)();
        }),
        e9.ZP.on("LAUNCH_APPLICATION", (e, t) => {
            let n = e$.Z.getActiveLibraryApplication(t);
            e6.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: te.ZY5.DIRECT,
                        object: te.qAy.WEB_URL,
                    },
                },
            });
        }));
let to = (0, m.l)((e) => {
        let { location: t } = e,
            n = (0, eV.default)(t.pathname);
        return (
            null != n &&
                (0, J.h)(() => {
                    (0, eF.openUserSettingsFromParsedUrl)({
                        match: n,
                        urlOrigin: "deeplink",
                    });
                }),
            (0, r.jsx)(h.Z, {
                deepLinkType: tr.jE.USER_SETTINGS,
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
                children: (0, r.jsx)(a.l_, { to: eQ.Z.defaultRoute }),
            })
        );
    }),
    ts = o.ZP.connectStores([Q.Z, eQ.Z, eW.default], () => ({
        isConnected: Q.Z.isConnected(),
        defaultRoute: eQ.Z.defaultRoute,
        defaultRouteFallback: eQ.Z.fallbackRoute,
        token: eW.default.getToken(),
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, $.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: te.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tg(t);
                    return null == e ||
                        ((e.params.guildId === te.ME || null != eJ.Z.getGuild(e.params.guildId)) &&
                            null != eq.Z.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.l_, { to: t })
                        : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        },
    ),
    tc = (0, m.l)((0, j.e)(x.Z, null, { passProps: !1 })),
    tu = (0, j.e)(X.default, null, { passProps: !1 }),
    td = [
        te.Z5c.GUILD_BOOSTING_MARKETING(eS.Hw.guildId()),
        ...Array.from(tt.Vg).map((e) => te.Z5c.CHANNEL(eS.Hw.guildId(), e)),
    ];
function tp(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : te.ME,
        channelId: n,
        messageId: r,
        threadId: i,
    };
}
let tf = [
    {
        path: [te.Z5c.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, e2.$8)() ||
                eW.default.getLoginStatus() === te.u34.LOGGING_IN ||
                !eW.default.allowLogoutRedirect()
                ? tc(e)
                : (0, r.jsx)(I.Z, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [te.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(ts, { match: t });
        },
    },
    {
        path: [te.Z5c.APP_WITH_GIFT_CODE(":giftCode")],
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
                (0, r.jsx)(a.l_, { to: eQ.Z.defaultRoute })
            );
        },
    },
    {
        path: [te.Z5c.APP],
        render: () => (0, r.jsx)(ts, {}),
    },
    {
        path: [te.Z5c.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, J.h)(() =>
                    (0, ek.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [N.Z.URI_SCHEME],
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eQ.Z.defaultRoute })
            );
        },
    },
    {
        path: [te.Z5c.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                e8.Z.whenInitialized(() => {
                    e$.Z.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = e$.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e6.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: te.ZY5.DIRECT,
                                            object: te.qAy.WEB_URL,
                                        },
                                    },
                                });
                                break;
                            }
                            case "test-mode":
                                e4.Z.whenInitialized(() => g.Wt(n));
                                break;
                            case "uninstall": {
                                let e = e$.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.W)(e.id, e.branchId, te.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.l_, { to: te.Z5c.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [te.Z5c.GUILD_CREATE],
        render: function () {
            return (
                (0, J.h)(() => M.Z.openCreateGuildModal({ location: "External link" })),
                (0, r.jsx)(a.l_, { to: eQ.Z.defaultRoute })
            );
        },
    },
    {
        path: [te.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, J.h)(() =>
                    er.v({
                        section: (0, en.Z)(te.pNK, n),
                        subsection: (0, en.Z)(te.KsC, i),
                        feature: o,
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eQ.Z.defaultRoute })
            );
        },
    },
    {
        path: [te.Z5c.SETTINGS(":section", ":subsection?")],
        render: to,
    },
    {
        path: [te.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(eS.Hw.guildId())],
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
                                ((n = tl({}, t)),
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
                (0, r.jsx)(a.l_, { to: te.Z5c.CHANNEL(i) })
            );
        },
    },
    {
        path: [te.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, J.h)(() => (0, eF.openUserSettings)(eH.n.GIFT_PANEL, { section: te.oAB.INVENTORY })),
                (0, r.jsx)(a.l_, { to: eQ.Z.defaultRoute })
            );
        },
    },
    {
        path: [te.Z5c.WELCOME(eS.Hw.guildId({ optional: !0 }), eS.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, ep.c)(tn.M5.MARKETING_UNCLAIMED);
            let l = te.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
    },
    {
        path: [te.Z5c.GUILD_EVENT_DETAILS(eS.Hw.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, J.h)(() => {
                    (0, ee.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: te.Z5c.CHANNEL(n) })
            );
        },
    },
    {
        path: [te.Z5c.GUILD_SETTINGS(eS.Hw.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, J.h)(() => {
                    et.Z.open(n, (0, en.Z)(te.pNK, i), void 0, (0, en.Z)(te.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: te.Z5c.CHANNEL(n) })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            te.Z5c.CHANNEL_THREAD_VIEW(eS.Hw.guildId(), eS.Hw.channelId(), ":threadId", ":messageId?"),
            te.Z5c.CHANNEL(eS.Hw.guildId(), eS.Hw.channelId({ optional: !0 }), ":messageId?"),
            te.Z5c.ACTIVITY,
            te.Z5c.ACTIVITIES,
            te.Z5c.ACTIVITIES_HAPPENING_NOW,
            te.Z5c.APPLICATION_LIBRARY,
            te.Z5c.APPLICATION_STORE,
            te.Z5c.MESSAGE_REQUESTS,
            te.Z5c.COLLECTIBLES_SHOP,
            te.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            te.Z5c.GUILD_DISCOVERY,
            te.Z5c.QUEST_HOME,
            te.Z5c.QUEST_HOME_V2,
            te.Z5c.ICYMI,
            te.Z5c.GLOBAL_DISCOVERY,
            te.Z5c.GUILD_MEMBER_VERIFICATION(eS.Hw.guildId()),
            te.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(eS.Hw.guildId(), ":inviteCode?"),
            te.Z5c.GUILD_BOOSTING_MARKETING(eS.Hw.guildId()),
            te.Z5c.GUILD_FEATURE(":feature", eS.Hw.guildId()),
            te.Z5c.FEATURE(":feature"),
            te.Z5c.FAMILY_CENTER,
        ],
        render: tc,
        isChatRoute: !0,
    },
    {
        path: [te.Z5c.APPLICATION_DIRECTORY],
        render: tu,
    },
    {
        path: [te.Z5c.GAME_SHOP(eS.Hw.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: i, shopSlug: l } = t.params;
            return (0, r.jsx)(a.l_, { to: te.Z5c.CHANNELS_GAME_SHOP(n, 0, i, l) });
        },
    },
];
function tg(e) {
    for (let { path: t, isChatRoute: n } of tf) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function th(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!Q.Z.isConnected()) return;
    let { location: i } = (0, eT.s1)();
    i.pathname === r && (null == eq.Z.getChannel(t) ? (0, eT.dL)(te.Z5c.CHANNEL(n)) : (0, eT.dL)(r));
}
class tm extends i.PureComponent {
    componentDidMount() {
        e9.ZP.setZoomFactor(b.Z.zoom),
            ej.Z.init(),
            P.Z.initialize(),
            e_.Z.initialize(),
            Y.Z.initialize(),
            eY.Z.initialize(),
            W.Z.initialize(),
            ev.Z.initialize(),
            U.Z.initialize(),
            es.Z.initialize(),
            _.Z.init(),
            q.Z.init(),
            K.Z.init(),
            ef.Z.initialize(),
            C.Z.initialize(),
            B.Z.initialize(),
            ey.Z.initialize(),
            y.ZP.initialize(),
            V.ZP.initialize(),
            ez.Z.initialize(),
            ei.ZP.initialize(),
            eb.Z.initialize(),
            v.Z.initialize(),
            el.Z.init(),
            w.Z.init(),
            e5.Z.init(),
            O.Z.initialize(),
            eM.Z.init(),
            e3.Z.init(),
            eG.Z.init(),
            ew.Z.initialize(),
            eL.Z.initialize(),
            eU.Z.initialize(),
            eB.Z.init(),
            H.Z.initialize(),
            E.Z.initialize(),
            eP.Z.initialize(),
            eZ.Z.initialize(),
            eh.Z.initialize(),
            eg.Z.initialize(),
            em.Z.initialize(),
            L.Z.initialize(),
            R.Z.initialize(),
            z.Z.initialize(),
            eo.Z.initialize(),
            ea.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("7082"), n.e("32454")]).then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, tl({}, t));
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
        ej.Z.terminate(),
            eY.Z.terminate(),
            ev.Z.terminate(),
            e_.Z.terminate(),
            P.Z.terminate(),
            y.ZP.terminate(),
            V.ZP.terminate(),
            ez.Z.terminate(),
            v.Z.terminate(),
            ey.Z.terminate(),
            eb.Z.terminate(),
            eU.Z.terminate(),
            O.Z.terminate(),
            H.Z.terminate(),
            ec.Z.terminate(),
            E.Z.terminate(),
            eI.Z.terminate(),
            eP.Z.terminate(),
            eZ.Z.terminate(),
            eh.Z.terminate(),
            eg.Z.terminate(),
            em.Z.terminate(),
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
            let t = eW.default.getToken();
            null != t && (0, eN.u)(e) && c.Z.startSession(t);
        })(n),
            (function (e, t) {
                let n = tg(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: o, threadId: s } = tp(n),
                    c = (0, eS.Ss)(r),
                    u = (0, eS.cq)(i),
                    d = (0, eS.cq)(s),
                    g = e1.Z.getGuildId(),
                    h = g !== r;
                if ((c && h && p.Z.selectGuild(r), c && u)) {
                    let n = e0.Z.getChannelId(g),
                        a = n !== i,
                        c = null != eK.ZP.getGuildSidebarState(r);
                    if (!ta || h || a || null != o) {
                        (ta = !0),
                            f.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eR.ZP.setSelectedSummary(i, e);
                    }
                    if (
                        (c &&
                            a &&
                            null != i &&
                            null != eK.ZP.getCurrentSidebarChannelId(i) &&
                            ex.Z.closeChannelSidebar(i),
                        null != s && d)
                    ) {
                        let e = eK.ZP.getCurrentSidebarChannelId(n),
                            t = e !== s;
                        if (null != i && null != s && t)
                            if (c) (0, eT.dL)(te.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eA.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    ex.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                        else c && null != e && null != i && ex.Z.closeChannelSidebar(i);
                    } else null == i || a || ex.Z.closeChannelSidebar(i);
                    let u = ed.Z.getIsOpen();
                    if (i === tt.oC.ROLE_SUBSCRIPTIONS) eu.Z.closeSidebar();
                    else if (h && u) {
                        let t = null == g && r === te.ME,
                            n = e === te.Z5c.GUILD_DISCOVERY;
                        t || n ? eu.Z.closeSidebar() : eu.Z.openSidebar();
                    } else ((a && u) || (!h && !a)) && eu.Z.closeSidebar();
                } else
                    td.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, eT.dL)(eQ.Z.fallbackRoute);
            })(n, r),
            (0, G.pN)(n, i, "REPLACE" === t);
    }
    ensureChannelMatchesGuild(e) {
        if (!Q.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = tg(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = tp(n),
            a = (0, eS.Ss)(r) && r !== te.ME && r !== te.I_8;
        if (null != i && (0, eS.cq)(i) && !(0, tt.AB)(i) && a) {
            let n = eq.Z.getChannel(i);
            if (null == n)
                eD.Z.loadThread(i).then(() =>
                    th({
                        channelId: i,
                        guildId: r,
                        pathname: t,
                    }),
                );
            else if (n.guild_id !== r && r !== te.STv)
                return {
                    path: te.Z5c.CHANNEL(r),
                    state: e.state,
                };
            if (null != l) {
                if (!((0, eS.cq)(l) && !(0, tt.AB)(i))) return null;
                let n = eq.Z.getChannel(l);
                if (null == n)
                    eD.Z.loadThread(l).then(() =>
                        th({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        ex.Z.closeChannelSidebar(i),
                        {
                            path: te.Z5c.CHANNEL(r, i),
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
                        tf.map((e) => {
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
        super(...e), ti(this, "historyUnlisten", () => {}), ti(this, "rewriterUnlisten", () => {});
    }
}
let tb = tm;
