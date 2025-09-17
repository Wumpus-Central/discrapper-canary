n.r(t), n.d(t, { default: () => tf }), n(35282), n(388685);
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
    y = n(513202),
    v = n(318891),
    I = n(687751),
    C = n(64514),
    S = n(912471),
    T = n(100527),
    N = n(77987),
    P = n(679891),
    j = n(491575),
    x = n(954709),
    A = n(644679),
    Z = n(403763),
    w = n(314533),
    L = n(9029),
    R = n(935347),
    D = n(560067),
    k = n(823169),
    M = n(845767),
    U = n(620360),
    G = n(891304),
    B = n(96051),
    V = n(750995),
    H = n(610278),
    F = n(696287),
    z = n(657030),
    W = n(408026),
    Y = n(763916),
    K = n(306721),
    q = n(531551),
    Q = n(38618),
    X = n(972830),
    J = n(684572),
    $ = n(584233),
    ee = n(15274),
    et = n(434404),
    en = n(543842),
    er = n(879064),
    ei = n(315964),
    el = n(495784),
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
    eb = n(837689),
    e_ = n(367207),
    eO = n(489977),
    eE = n(329557),
    ey = n(304445),
    ev = n(893607),
    eI = n(703656),
    eC = n(298969),
    eS = n(719256),
    eT = n(6025),
    eN = n(897473),
    eP = n(377368),
    ej = n(262702),
    ex = n(639033),
    eA = n(479313),
    eZ = n(911560),
    ew = n(703016),
    eL = n(892001),
    eR = n(497805),
    eD = n(332754),
    ek = n(313789),
    eM = n(507468),
    eU = n(722589),
    eG = n(518596),
    eB = n(282506),
    eV = n(444961),
    eH = n(314897),
    eF = n(433355),
    ez = n(592125),
    eW = n(896797),
    eY = n(430824),
    eK = n(819640),
    eq = n(283595),
    eQ = n(944486),
    eX = n(914010),
    eJ = n(695103),
    e$ = n(241890),
    e0 = n(974042),
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
    eC.Z.loadServer(),
    e4.isPlatformEmbedded &&
        (e3.ZP.on("USER_SETTINGS_OPEN", (e, t) => {
            eK.Z.getLayers().includes(e2.S9g.USER_SETTINGS) || (0, eG.openUserSettings)();
        }),
        e3.ZP.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eq.Z.getActiveLibraryApplication(t);
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
            n = (0, eU.default)(t.pathname);
        return (
            null != n &&
                (0, X.h)(() => {
                    (0, eG.openUserSettingsFromParsedUrl)({
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
    ti = o.ZP.connectStores([Q.Z, eW.Z, eH.default], () => ({
        isConnected: Q.Z.isConnected(),
        defaultRoute: eW.Z.defaultRoute,
        defaultRouteFallback: eW.Z.fallbackRoute,
        token: eH.default.getToken(),
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, $.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: e2.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tu(t);
                    return null == e ||
                        ((e.params.guildId === e2.ME || null != eY.Z.getGuild(e.params.guildId)) &&
                            null != ez.Z.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.l_, { to: t })
                        : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        },
    ),
    tl = (0, m.l)((0, N.e)(j.Z, null, { passProps: !1 })),
    ta = (0, N.e)(J.default, null, { passProps: !1 }),
    to = [
        e2.Z5c.GUILD_BOOSTING_MARKETING(ev.Hw.guildId()),
        ...Array.from(e6.Vg).map((e) => e2.Z5c.CHANNEL(ev.Hw.guildId(), e)),
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
                (0, X.h)(() =>
                    (0, eL.openUserProfileModal)({
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
                    eq.Z.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = eq.Z.getActiveLibraryApplication(n);
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
                                eJ.Z.whenInitialized(() => h.Wt(n));
                                break;
                            case "uninstall": {
                                let e = eq.Z.getActiveLibraryApplication(n);
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
                (0, X.h)(() => D.Z.openCreateGuildModal({ location: "External link" })),
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
                (0, X.h)(() =>
                    er.v({
                        section: (0, en.Z)(e2.pNK, n),
                        subsection: (0, en.Z)(e2.KsC, i),
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
        path: [e2.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(ev.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, X.h)(() => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("15076"), n.e("79692")]).then(n.bind(n, 907941));
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
                (0, X.h)(() => (0, eG.openUserSettings)(ek.n.GIFT_PANEL, { section: e2.oAB.INVENTORY })),
                (0, r.jsx)(a.l_, { to: eW.Z.defaultRoute })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.WELCOME(ev.Hw.guildId({ optional: !0 }), ev.Hw.channelId({ optional: !0 }))],
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
        path: [e2.Z5c.GUILD_EVENT_DETAILS(ev.Hw.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, X.h)(() => {
                    (0, ee.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e2.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e2.Z5c.GUILD_SETTINGS(ev.Hw.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, X.h)(() => {
                    et.Z.open(n, (0, en.Z)(e2.pNK, i), void 0, (0, en.Z)(e2.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e2.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [
            e2.Z5c.CHANNEL_THREAD_VIEW(ev.Hw.guildId(), ev.Hw.channelId(), ":threadId", ":messageId?"),
            e2.Z5c.CHANNEL(ev.Hw.guildId(), ev.Hw.channelId({ optional: !0 }), ":messageId?"),
            e2.Z5c.ACTIVITY,
            e2.Z5c.ACTIVITIES,
            e2.Z5c.ACTIVITIES_HAPPENING_NOW,
            e2.Z5c.ACTIVITY_DETAILS(":applicationId"),
            e2.Z5c.APPLICATION_LIBRARY,
            e2.Z5c.APPLICATION_STORE,
            e2.Z5c.MESSAGE_REQUESTS,
            e2.Z5c.COLLECTIBLES_SHOP,
            e2.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
            e2.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e2.Z5c.GUILD_DISCOVERY,
            e2.Z5c.QUEST_HOME,
            e2.Z5c.QUEST_HOME_V2,
            e2.Z5c.GLOBAL_DISCOVERY,
            e2.Z5c.GUILD_MEMBER_VERIFICATION(ev.Hw.guildId()),
            e2.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(ev.Hw.guildId(), ":inviteCode?"),
            e2.Z5c.GUILD_BOOSTING_MARKETING(ev.Hw.guildId()),
            e2.Z5c.GUILD_FEATURE(":feature", ev.Hw.guildId()),
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
    if (!Q.Z.isConnected()) return;
    let { location: i } = (0, eI.s1)();
    i.pathname === r && (null == ez.Z.getChannel(t) ? (0, eI.dL)(e2.Z5c.CHANNEL(n)) : (0, eI.dL)(r));
}
class tp extends i.PureComponent {
    componentDidMount() {
        e3.ZP.setZoomFactor(b.Z.zoom),
            eC.Z.init(),
            P.Z.initialize(),
            em.Z.initialize(),
            W.Z.initialize(),
            eV.Z.initialize(),
            Y.Z.initialize(),
            e_.Z.initialize(),
            M.Z.initialize(),
            ea.Z.initialize(),
            _.Z.init(),
            q.Z.init(),
            K.Z.init(),
            ed.Z.initialize(),
            I.Z.initialize(),
            V.Z.initialize(),
            eO.Z.initialize(),
            v.ZP.initialize(),
            H.ZP.initialize(),
            eB.Z.initialize(),
            eg.Z.initialize(),
            y.Z.initialize(),
            ei.Z.init(),
            Z.Z.init(),
            e8.Z.init(),
            E.Z.initialize(),
            ew.Z.init(),
            e$.Z.init(),
            eD.Z.init(),
            ej.Z.initialize(),
            ex.Z.initialize(),
            eR.Z.initialize(),
            eM.Z.init(),
            B.Z.initialize(),
            O.Z.initialize(),
            eS.Z.initialize(),
            eP.Z.initialize(),
            ef.Z.initialize(),
            ep.Z.initialize(),
            eh.Z.initialize(),
            w.Z.initialize(),
            L.Z.initialize(),
            z.Z.initialize(),
            el.Z.init({
                hasModalOpen: s.$sL,
                openModal: () =>
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, r.jsx)(e, tt({}, t));
                    }),
            }),
            U.Z.init(),
            eo.Z.initialize(),
            eE.Z.initialize(),
            eb.Z.initialize(),
            k.Z.initialize(),
            x.Z.initialize(),
            A.Z.initialize(),
            C.Z.initialize(),
            (this.rewriterUnlisten = ey.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = ey.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eC.Z.terminate(),
            eV.Z.terminate(),
            e_.Z.terminate(),
            em.Z.terminate(),
            P.Z.terminate(),
            v.ZP.terminate(),
            H.ZP.terminate(),
            eB.Z.terminate(),
            y.Z.terminate(),
            eO.Z.terminate(),
            eg.Z.terminate(),
            eR.Z.terminate(),
            E.Z.terminate(),
            B.Z.terminate(),
            eo.Z.terminate(),
            O.Z.terminate(),
            eE.Z.terminate(),
            eS.Z.terminate(),
            eP.Z.terminate(),
            ef.Z.terminate(),
            ep.Z.terminate(),
            eh.Z.terminate(),
            w.Z.terminate(),
            L.Z.terminate(),
            eb.Z.terminate(),
            k.Z.terminate(),
            F.Z.terminate(),
            x.Z.terminate(),
            A.Z.terminate(),
            C.Z.terminate(),
            z.Z.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e, t) {
        let { pathname: n, search: r, key: i } = e,
            o = "REPLACE" === t;
        !(function (e) {
            if (Q.Z.isConnected() || Q.Z.isTryingToConnect()) return;
            let t = eH.default.getToken();
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
                    c = (0, ev.Ss)(r),
                    u = (0, ev.cq)(i),
                    d = (0, ev.cq)(s),
                    h = eX.Z.getGuildId(),
                    g = h !== r;
                if ((c && g && p.Z.selectGuild(r), c && u)) {
                    let n = eQ.Z.getChannelId(h),
                        a = n !== i;
                    if (!tn || g || a || null != o) {
                        (tn = !0),
                            f.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eA.ZP.setSelectedSummary(i, e);
                    }
                    if (null != s && d) {
                        let e = eF.ZP.getCurrentSidebarChannelId(n) !== s,
                            t = null != eF.ZP.getGuildSidebarState(r);
                        if (null != i && null != s && e)
                            if (t) (0, eI.dL)(e2.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eN.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    eT.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                    } else null == i || a || eT.Z.closeChannelSidebar(i);
                    let c = ec.Z.getIsOpen();
                    if (i === e6.oC.ROLE_SUBSCRIPTIONS) es.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == h && r === e2.ME,
                            n = e === e2.Z5c.GUILD_DISCOVERY;
                        t || n ? es.Z.closeSidebar() : es.Z.openSidebar();
                    } else ((a && c) || (!g && !a)) && es.Z.closeSidebar();
                } else
                    to.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, eI.dL)(eW.Z.fallbackRoute);
            })(n, r),
            (0, G.pN)(n, i, o),
            n !== e2.Z5c.ME || o || e0.ZP.getState().section !== e2.pJs.YOU || d.Z.setSection(e2.pJs.ONLINE);
    }
    ensureChannelMatchesGuild(e) {
        if (!Q.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = tu(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = ts(n),
            a = (0, ev.Ss)(r) && r !== e2.ME && r !== e2.I_8;
        if (null != i && (0, ev.cq)(i) && !(0, e6.AB)(i) && a) {
            let n = ez.Z.getChannel(i);
            if (null == n)
                eZ.Z.loadThread(i).then(() =>
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
                if (!((0, ev.cq)(l) && !(0, e6.AB)(i))) return null;
                let n = ez.Z.getChannel(l);
                if (null == n)
                    eZ.Z.loadThread(l).then(() =>
                        td({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eT.Z.closeChannelSidebar(i),
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
