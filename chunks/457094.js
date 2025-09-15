n.r(t), n.d(t, { default: () => th }), n(35282), n(388685);
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
    g = n(230711),
    m = n(773244),
    b = n(951752),
    _ = n(607070),
    O = n(627845),
    E = n(185666),
    y = n(503737),
    v = n(513202),
    I = n(318891),
    C = n(687751),
    S = n(64514),
    T = n(912471),
    N = n(100527),
    P = n(77987),
    j = n(679891),
    x = n(491575),
    A = n(954709),
    Z = n(644679),
    w = n(403763),
    L = n(314533),
    R = n(9029),
    D = n(935347),
    k = n(560067),
    M = n(823169),
    U = n(845767),
    G = n(620360),
    B = n(891304),
    V = n(96051),
    H = n(750995),
    F = n(610278),
    z = n(696287),
    W = n(657030),
    Y = n(408026),
    K = n(763916),
    q = n(306721),
    Q = n(531551),
    X = n(38618),
    J = n(972830),
    $ = n(684572),
    ee = n(584233),
    et = n(15274),
    en = n(434404),
    er = n(543842),
    ei = n(879064),
    el = n(315964),
    ea = n(495784),
    eo = n(975533),
    es = n(377400),
    ec = n(285865),
    eu = n(659971),
    ed = n(929809),
    ep = n(122333),
    ef = n(960275),
    eh = n(818765),
    eg = n(678492),
    em = n(269089),
    eb = n(380570),
    e_ = n(837689),
    eO = n(367207),
    eE = n(489977),
    ey = n(329557),
    ev = n(304445),
    eI = n(893607),
    eC = n(703656),
    eS = n(298969),
    eT = n(719256),
    eN = n(6025),
    eP = n(897473),
    ej = n(377368),
    ex = n(262702),
    eA = n(639033),
    eZ = n(479313),
    ew = n(911560),
    eL = n(703016),
    eR = n(892001),
    eD = n(497805),
    ek = n(332754),
    eM = n(313789),
    eU = n(507468),
    eG = n(722589),
    eB = n(518596),
    eV = n(282506),
    eH = n(444961),
    eF = n(314897),
    ez = n(433355),
    eW = n(592125),
    eY = n(896797),
    eK = n(430824),
    eq = n(819640),
    eQ = n(283595),
    eX = n(944486),
    eJ = n(914010),
    e$ = n(695103),
    e0 = n(241890),
    e1 = n(974042),
    e8 = n(417363),
    e4 = n(900974),
    e3 = n(358085),
    e5 = n(998502),
    e2 = n(346329),
    e6 = n(981631),
    e7 = n(176505),
    e9 = n(701476),
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
(0, T.DL)(),
    o.ZP.initialize(),
    eS.Z.loadServer(),
    e3.isPlatformEmbedded &&
        (e5.ZP.on("USER_SETTINGS_OPEN", (e, t) => {
            eq.Z.getLayers().includes(e6.S9g.USER_SETTINGS) || (0, eB.openUserSettings)();
        }),
        e5.ZP.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eQ.Z.getActiveLibraryApplication(t);
            e2.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e6.ZY5.DIRECT,
                        object: e6.qAy.WEB_URL,
                    },
                },
            });
        }));
let ti = (0, b.l)((e) => {
        let { location: t } = e,
            n = (0, eG.default)(t.pathname);
        return (
            null != n &&
                (0, J.h)(() =>
                    g.Z.open(n.section, n.subsection, {
                        openWithoutBackstack: !1,
                        searchParams: n.params,
                    }),
                ),
            (0, r.jsx)(m.Z, {
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
                children: (0, r.jsx)(a.l_, { to: eY.Z.defaultRoute }),
            })
        );
    }),
    tl = o.ZP.connectStores([X.Z, eY.Z, eF.default], () => ({
        isConnected: X.Z.isConnected(),
        defaultRoute: eY.Z.defaultRoute,
        defaultRouteFallback: eY.Z.fallbackRoute,
        token: eF.default.getToken(),
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, ee.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: e6.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = td(t);
                    return null == e ||
                        ((e.params.guildId === e6.ME || null != eK.Z.getGuild(e.params.guildId)) &&
                            null != eW.Z.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.l_, { to: t })
                        : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        },
    ),
    ta = (0, b.l)((0, P.e)(x.Z, null, { passProps: !1 })),
    to = (0, P.e)($.default, null, { passProps: !1 }),
    ts = [
        e6.Z5c.GUILD_BOOSTING_MARKETING(eI.Hw.guildId()),
        ...Array.from(e7.Vg).map((e) => e6.Z5c.CHANNEL(eI.Hw.guildId(), e)),
    ];
function tc(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : e6.ME,
        channelId: n,
        messageId: r,
        threadId: i,
    };
}
let tu = [
    {
        path: [e6.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(tl, { match: t });
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.APP],
        render: () => (0, r.jsx)(tl, {}),
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, J.h)(() =>
                    (0, eR.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [N.Z.URI_SCHEME],
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eY.Z.defaultRoute })
            );
        },
    },
    {
        path: [e6.Z5c.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                e8.Z.whenInitialized(() => {
                    eQ.Z.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = eQ.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e2.playApplication(e.id, e, {
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
                                e$.Z.whenInitialized(() => h.Wt(n));
                                break;
                            case "uninstall": {
                                let e = eQ.Z.getActiveLibraryApplication(n);
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
                (0, J.h)(() => k.Z.openCreateGuildModal({ location: "External link" })),
                (0, r.jsx)(a.l_, { to: eY.Z.defaultRoute })
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
                    ei.v({
                        section: (0, er.Z)(e6.pNK, n),
                        subsection: (0, er.Z)(e6.KsC, i),
                        feature: o,
                    }),
                ),
                (0, r.jsx)(a.l_, { to: eY.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.SETTINGS(":section", ":subsection?")],
        render: ti,
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(eI.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, J.h)(() => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("15076"), n.e("79692")]).then(n.bind(n, 907941));
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
                (0, r.jsx)(a.l_, { to: e6.Z5c.CHANNEL(i) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, J.h)(() => (0, eB.openUserSettings)(eM.n.GIFT_PANEL, { section: e6.oAB.INVENTORY })),
                (0, r.jsx)(a.l_, { to: eY.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.WELCOME(eI.Hw.guildId({ optional: !0 }), eI.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, ed.c)(e9.M5.MARKETING_UNCLAIMED);
            let l = e6.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.GUILD_EVENT_DETAILS(eI.Hw.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, J.h)(() => {
                    (0, et.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e6.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e6.Z5c.GUILD_SETTINGS(eI.Hw.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, J.h)(() => {
                    en.Z.open(n, (0, er.Z)(e6.pNK, i), void 0, (0, er.Z)(e6.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e6.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [
            e6.Z5c.CHANNEL_THREAD_VIEW(eI.Hw.guildId(), eI.Hw.channelId(), ":threadId", ":messageId?"),
            e6.Z5c.CHANNEL(eI.Hw.guildId(), eI.Hw.channelId({ optional: !0 }), ":messageId?"),
            e6.Z5c.ACTIVITY,
            e6.Z5c.ACTIVITIES,
            e6.Z5c.ACTIVITIES_HAPPENING_NOW,
            e6.Z5c.ACTIVITY_DETAILS(":applicationId"),
            e6.Z5c.APPLICATION_LIBRARY,
            e6.Z5c.APPLICATION_STORE,
            e6.Z5c.MESSAGE_REQUESTS,
            e6.Z5c.COLLECTIBLES_SHOP,
            e6.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
            e6.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e6.Z5c.GUILD_DISCOVERY,
            e6.Z5c.QUEST_HOME,
            e6.Z5c.QUEST_HOME_V2,
            e6.Z5c.GLOBAL_DISCOVERY,
            e6.Z5c.GUILD_MEMBER_VERIFICATION(eI.Hw.guildId()),
            e6.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(eI.Hw.guildId(), ":inviteCode?"),
            e6.Z5c.GUILD_BOOSTING_MARKETING(eI.Hw.guildId()),
            e6.Z5c.GUILD_FEATURE(":feature", eI.Hw.guildId()),
            e6.Z5c.FEATURE(":feature"),
            e6.Z5c.FAMILY_CENTER,
        ],
        render: ta,
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [e6.Z5c.APPLICATION_DIRECTORY],
        render: to,
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
    if (!X.Z.isConnected()) return;
    let { location: i } = (0, eC.s1)();
    i.pathname === r && (null == eW.Z.getChannel(t) ? (0, eC.dL)(e6.Z5c.CHANNEL(n)) : (0, eC.dL)(r));
}
class tf extends i.PureComponent {
    componentDidMount() {
        e5.ZP.setZoomFactor(_.Z.zoom),
            eS.Z.init(),
            j.Z.initialize(),
            eb.Z.initialize(),
            Y.Z.initialize(),
            eH.Z.initialize(),
            K.Z.initialize(),
            eO.Z.initialize(),
            U.Z.initialize(),
            eo.Z.initialize(),
            O.Z.init(),
            Q.Z.init(),
            q.Z.init(),
            ep.Z.initialize(),
            C.Z.initialize(),
            H.Z.initialize(),
            eE.Z.initialize(),
            I.ZP.initialize(),
            F.ZP.initialize(),
            eV.Z.initialize(),
            em.Z.initialize(),
            v.Z.initialize(),
            el.Z.init(),
            w.Z.init(),
            e4.Z.init(),
            y.Z.initialize(),
            eL.Z.init(),
            e0.Z.init(),
            ek.Z.init(),
            ex.Z.initialize(),
            eA.Z.initialize(),
            eD.Z.initialize(),
            eU.Z.init(),
            V.Z.initialize(),
            E.Z.initialize(),
            eT.Z.initialize(),
            ej.Z.initialize(),
            eh.Z.initialize(),
            ef.Z.initialize(),
            eg.Z.initialize(),
            L.Z.initialize(),
            R.Z.initialize(),
            W.Z.initialize(),
            ea.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, tn({}, t));
                    }),
            }),
            G.Z.init(),
            es.Z.initialize(),
            ey.Z.initialize(),
            e_.Z.initialize(),
            M.Z.initialize(),
            A.Z.initialize(),
            Z.Z.initialize(),
            S.Z.initialize(),
            (this.rewriterUnlisten = ev.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = ev.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eS.Z.terminate(),
            eH.Z.terminate(),
            eO.Z.terminate(),
            eb.Z.terminate(),
            j.Z.terminate(),
            I.ZP.terminate(),
            F.ZP.terminate(),
            eV.Z.terminate(),
            v.Z.terminate(),
            eE.Z.terminate(),
            em.Z.terminate(),
            eD.Z.terminate(),
            y.Z.terminate(),
            V.Z.terminate(),
            es.Z.terminate(),
            E.Z.terminate(),
            ey.Z.terminate(),
            eT.Z.terminate(),
            ej.Z.terminate(),
            eh.Z.terminate(),
            ef.Z.terminate(),
            eg.Z.terminate(),
            L.Z.terminate(),
            R.Z.terminate(),
            e_.Z.terminate(),
            M.Z.terminate(),
            z.Z.terminate(),
            A.Z.terminate(),
            Z.Z.terminate(),
            S.Z.terminate(),
            W.Z.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e, t) {
        let { pathname: n, search: r, key: i } = e,
            o = "REPLACE" === t;
        !(function (e) {
            if (X.Z.isConnected() || X.Z.isTryingToConnect()) return;
            let t = eF.default.getToken();
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
                    c = (0, eI.Ss)(r),
                    u = (0, eI.cq)(i),
                    d = (0, eI.cq)(s),
                    h = eJ.Z.getGuildId(),
                    g = h !== r;
                if ((c && g && p.Z.selectGuild(r), c && u)) {
                    let n = eX.Z.getChannelId(h),
                        a = n !== i;
                    if (!tr || g || a || null != o) {
                        (tr = !0),
                            f.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eZ.ZP.setSelectedSummary(i, e);
                    }
                    if (null != s && d) {
                        let e = ez.ZP.getCurrentSidebarChannelId(n) !== s,
                            t = null != ez.ZP.getGuildSidebarState(r);
                        if (null != i && null != s && e)
                            if (t) (0, eC.dL)(e6.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eP.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    eN.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                    } else null == i || a || eN.Z.closeChannelSidebar(i);
                    let c = eu.Z.getIsOpen();
                    if (i === e7.oC.ROLE_SUBSCRIPTIONS) ec.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == h && r === e6.ME,
                            n = e === e6.Z5c.GUILD_DISCOVERY;
                        t || n ? ec.Z.closeSidebar() : ec.Z.openSidebar();
                    } else ((a && c) || (!g && !a)) && ec.Z.closeSidebar();
                } else
                    ts.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, eC.dL)(eY.Z.fallbackRoute);
            })(n, r),
            (0, B.pN)(n, i, o),
            n !== e6.Z5c.ME || o || e1.ZP.getState().section !== e6.pJs.YOU || d.Z.setSection(e6.pJs.ONLINE);
    }
    ensureChannelMatchesGuild(e) {
        if (!X.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = td(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = tc(n),
            a = (0, eI.Ss)(r) && r !== e6.ME && r !== e6.I_8;
        if (null != i && (0, eI.cq)(i) && !(0, e7.AB)(i) && a) {
            let n = eW.Z.getChannel(i);
            if (null == n)
                ew.Z.loadThread(i).then(() =>
                    tp({
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
                if (!((0, eI.cq)(l) && !(0, e7.AB)(i))) return null;
                let n = eW.Z.getChannel(l);
                if (null == n)
                    ew.Z.loadThread(l).then(() =>
                        tp({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eN.Z.closeChannelSidebar(i),
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
                (0, r.jsx)(D.Z, {}),
            ],
        });
    }
    constructor(...e) {
        super(...e), tt(this, "historyUnlisten", () => {}), tt(this, "rewriterUnlisten", () => {});
    }
}
let th = tf;
