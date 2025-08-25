n.r(t), n.d(t, { default: () => td }), n(35282), n(388685);
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
    h = n(230711),
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
    N = n(100527),
    T = n(77987),
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
    eN = n(6025),
    eT = n(897473),
    eP = n(377368),
    ej = n(262702),
    ex = n(639033),
    eA = n(479313),
    eZ = n(911560),
    ew = n(703016),
    eL = n(892001),
    eR = n(497805),
    eD = n(332754),
    ek = n(507468),
    eM = n(722589),
    eU = n(518596),
    eG = n(282506),
    eB = n(444961),
    eV = n(314897),
    eH = n(433355),
    eF = n(592125),
    ez = n(896797),
    eW = n(430824),
    eY = n(819640),
    eK = n(283595),
    eq = n(944486),
    eQ = n(914010),
    eX = n(695103),
    eJ = n(241890),
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
(0, S.DL)(),
    o.ZP.initialize(),
    eC.Z.loadServer(),
    e1.isPlatformEmbedded &&
        (e8.ZP.on("USER_SETTINGS_OPEN", (e, t) => {
            eY.Z.getLayers().includes(e3.S9g.USER_SETTINGS) ||
                (0, eU.Z)(void 0, { section: null != t ? t : e3.oAB.ACCOUNT });
        }),
        e8.ZP.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eK.Z.getActiveLibraryApplication(t);
            e4.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: e3.ZY5.DIRECT,
                        object: e3.qAy.WEB_URL,
                    },
                },
            });
        }));
let tt = (0, m.l)((e) => {
        let { location: t } = e,
            n = (0, eM.default)(t.pathname);
        return (
            null != n &&
                (0, X.h)(() =>
                    h.Z.open(n.section, n.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: n.source,
                    }),
                ),
            (0, r.jsx)(g.Z, {
                deepLinkType: e6.jE.USER_SETTINGS,
                path: t.pathname,
                paramsBuilder: function (e, t) {
                    let [, , n, r] = e.split("/");
                    return {
                        path: e,
                        section: n,
                        subsection: r,
                        fingerprint: t,
                    };
                },
                children: (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute }),
            })
        );
    }),
    tn = o.ZP.connectStores([Q.Z, ez.Z, eV.default], () => ({
        isConnected: Q.Z.isConnected(),
        defaultRoute: ez.Z.defaultRoute,
        defaultRouteFallback: ez.Z.fallbackRoute,
        token: eV.default.getToken(),
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, $.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, r.jsx)(a.l_, { to: e3.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = ts(t);
                    return null == e ||
                        ((e.params.guildId === e3.ME || null != eW.Z.getGuild(e.params.guildId)) &&
                            null != eF.Z.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.l_, { to: t })
                        : (0, r.jsx)(a.l_, { to: i });
                }
                return null;
            }
        },
    ),
    tr = (0, m.l)((0, T.e)(j.Z, null, { passProps: !1 })),
    ti = (0, T.e)(J.default, null, { passProps: !1 }),
    tl = [
        e3.Z5c.GUILD_BOOSTING_MARKETING(ev.Hw.guildId()),
        ...Array.from(e5.Vg).map((e) => e3.Z5c.CHANNEL(ev.Hw.guildId(), e)),
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
let to = [
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
                (0, X.h)(() =>
                    (0, eL.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [N.Z.URI_SCHEME],
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
                    eK.Z.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = eK.Z.getActiveLibraryApplication(n);
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
                                eX.Z.whenInitialized(() => f.Wt(n));
                                break;
                            case "uninstall": {
                                let e = eK.Z.getActiveLibraryApplication(n);
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
                (0, X.h)(() => D.Z.openCreateGuildModal({ location: "External link" })),
                (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute })
            );
        },
    },
    {
        path: [e3.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                o = (0, l.parse)(location.search).feature;
            return (
                (0, X.h)(() =>
                    er.v({
                        section: (0, en.Z)(e3.pNK, n),
                        subsection: (0, en.Z)(e3.KsC, i),
                        feature: o,
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
        path: [e3.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(ev.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, X.h)(() => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("15076"), n.e("39672")]).then(n.bind(n, 907941));
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
            return (0, X.h)(() => h.Z.open(e3.oAB.INVENTORY)), (0, r.jsx)(a.l_, { to: ez.Z.defaultRoute });
        },
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.WELCOME(ev.Hw.guildId({ optional: !0 }), ev.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, eu.c)(e2.M5.MARKETING_UNCLAIMED);
            let l = e3.Z5c.CHANNEL(n, i);
            return (0, r.jsx)(a.l_, { to: l });
        },
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.GUILD_EVENT_DETAILS(ev.Hw.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, X.h)(() => {
                    (0, ee.bO)({ eventId: i });
                }),
                (0, r.jsx)(a.l_, { to: e3.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
    },
    {
        path: [e3.Z5c.GUILD_SETTINGS(ev.Hw.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, X.h)(() => {
                    et.Z.open(n, (0, en.Z)(e3.pNK, i), void 0, (0, en.Z)(e3.KsC, l));
                }),
                (0, r.jsx)(a.l_, { to: e3.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0,
    },
    {
        path: [
            e3.Z5c.CHANNEL_THREAD_VIEW(ev.Hw.guildId(), ev.Hw.channelId(), ":threadId", ":messageId?"),
            e3.Z5c.CHANNEL(ev.Hw.guildId(), ev.Hw.channelId({ optional: !0 }), ":messageId?"),
            e3.Z5c.ACTIVITY,
            e3.Z5c.ACTIVITIES,
            e3.Z5c.ACTIVITIES_HAPPENING_NOW,
            e3.Z5c.ACTIVITY_DETAILS(":applicationId"),
            e3.Z5c.APPLICATION_LIBRARY,
            e3.Z5c.APPLICATION_STORE,
            e3.Z5c.MESSAGE_REQUESTS,
            e3.Z5c.COLLECTIBLES_SHOP,
            e3.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
            e3.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e3.Z5c.GUILD_DISCOVERY,
            e3.Z5c.QUEST_HOME,
            e3.Z5c.GLOBAL_DISCOVERY,
            e3.Z5c.GUILD_MEMBER_VERIFICATION(ev.Hw.guildId()),
            e3.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(ev.Hw.guildId(), ":inviteCode?"),
            e3.Z5c.GUILD_BOOSTING_MARKETING(ev.Hw.guildId()),
            e3.Z5c.GUILD_FEATURE(":feature", ev.Hw.guildId()),
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
];
function ts(e) {
    for (let { path: t, isChatRoute: n } of to) {
        if (!n) continue;
        let r = (0, a.LX)(e, { path: t });
        if (null != r) return r;
    }
    return null;
}
function tc(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!Q.Z.isConnected()) return;
    let { location: i } = (0, eI.s1)();
    i.pathname === r && (null == eF.Z.getChannel(t) ? (0, eI.dL)(e3.Z5c.CHANNEL(n)) : (0, eI.dL)(r));
}
class tu extends i.PureComponent {
    componentDidMount() {
        e8.ZP.setZoomFactor(b.Z.zoom),
            eC.Z.init(),
            P.Z.initialize(),
            em.Z.initialize(),
            W.Z.initialize(),
            eB.Z.initialize(),
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
            eG.Z.initialize(),
            eg.Z.initialize(),
            y.Z.initialize(),
            ei.Z.init(),
            Z.Z.init(),
            e0.Z.init(),
            E.Z.initialize(),
            ew.Z.init(),
            eJ.Z.init(),
            eD.Z.init(),
            ej.Z.initialize(),
            ex.Z.initialize(),
            eR.Z.initialize(),
            ek.Z.init(),
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
                        return (t) => (0, r.jsx)(e, e9({}, t));
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
            eB.Z.terminate(),
            e_.Z.terminate(),
            em.Z.terminate(),
            P.Z.terminate(),
            v.ZP.terminate(),
            H.ZP.terminate(),
            eG.Z.terminate(),
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
        let { pathname: n, search: r, key: i } = e;
        !(function (e) {
            if (Q.Z.isConnected() || Q.Z.isTryingToConnect()) return;
            let t = eV.default.getToken();
            null != t &&
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of to) {
                            if (!n) continue;
                            let r = (0, a.LX)(e, { path: t });
                            if (null != r) return r;
                        }
                        return null;
                    })(e) &&
                c.Z.startSession(t);
        })(n),
            (function (e, t) {
                let n = ts(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: o, threadId: s } = ta(n),
                    c = (0, ev.Ss)(r),
                    u = (0, ev.cq)(i),
                    f = (0, ev.cq)(s),
                    h = eQ.Z.getGuildId(),
                    g = h !== r;
                if ((c && g && d.Z.selectGuild(r), c && u)) {
                    let n = eq.Z.getChannelId(h),
                        a = n !== i;
                    if (!te || g || a || null != o) {
                        (te = !0),
                            p.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: o,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eA.ZP.setSelectedSummary(i, e);
                    }
                    if (null != s && f) {
                        let e = eH.ZP.getCurrentSidebarChannelId(n) !== s,
                            t = null != eH.ZP.getGuildSidebarState(r);
                        if (null != i && null != s && e)
                            if (t) (0, eI.dL)(e3.Z5c.CHANNEL(r, s, o));
                            else {
                                let e = { type: eT.Ff.THREAD };
                                null != o && (e.initialMessageId = o),
                                    eN.Z.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                    } else null == i || a || eN.Z.closeChannelSidebar(i);
                    let c = ec.Z.getIsOpen();
                    if (i === e5.oC.ROLE_SUBSCRIPTIONS) es.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == h && r === e3.ME,
                            n = e === e3.Z5c.GUILD_DISCOVERY;
                        t || n ? es.Z.closeSidebar() : es.Z.openSidebar();
                    } else ((a && c) || (!g && !a)) && es.Z.closeSidebar();
                } else
                    tl.some((t) => {
                        var n;
                        return (null == (n = (0, a.LX)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, eI.dL)(ez.Z.fallbackRoute);
            })(n, r),
            (0, G.pN)(n, i, "REPLACE" === t);
    }
    ensureChannelMatchesGuild(e) {
        if (!Q.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = ts(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = ta(n),
            a = (0, ev.Ss)(r) && r !== e3.ME && r !== e3.I_8;
        if (null != i && (0, ev.cq)(i) && !(0, e5.AB)(i) && a) {
            let n = eF.Z.getChannel(i);
            if (null == n)
                eZ.Z.loadThread(i).then(() =>
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
                if (!((0, ev.cq)(l) && !(0, e5.AB)(i))) return null;
                let n = eF.Z.getChannel(l);
                if (null == n)
                    eZ.Z.loadThread(l).then(() =>
                        tc({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        eN.Z.closeChannelSidebar(i),
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
                        to.map((e) => {
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
        super(...e), e7(this, "historyUnlisten", () => {}), e7(this, "rewriterUnlisten", () => {});
    }
}
let td = tu;
