n.d(t, { Z: () => ti }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    s = n(843611),
    c = n(990547),
    u = n(608787),
    d = n(873546),
    p = n(442837),
    f = n(433517),
    h = n(481060),
    g = n(904245),
    m = n(773244),
    b = n(711237),
    _ = n(532835),
    E = n(347469),
    O = n(169382),
    v = n(290297),
    y = n(244317),
    I = n(765717),
    C = n(358221),
    S = n(823748),
    N = n(626421),
    T = n(118379),
    P = n(267161),
    j = n(652515),
    x = n(544978),
    A = n(540059),
    Z = n(591472),
    w = n(351051),
    L = n(724383),
    R = n(135864),
    D = n(372900),
    M = n(6039),
    k = n(637853),
    U = n(326145),
    G = n(269675),
    B = n(242601),
    H = n(416568),
    V = n(613609),
    F = n(160404),
    z = n(225675),
    W = n(927723),
    Y = n(745052),
    q = n(285865),
    K = n(659971),
    Q = n(821020),
    X = n(147341),
    J = n(82409),
    $ = n(179742),
    ee = n(365113),
    et = n(779715),
    en = n(270759),
    er = n(509212),
    ei = n(121711),
    el = n(982168),
    ea = n(893908),
    eo = n(905423),
    es = n(304445),
    ec = n(893607),
    eu = n(703656),
    ed = n(166484),
    ep = n(984802),
    ef = n(592125),
    eh = n(896797),
    eg = n(271383),
    em = n(430824),
    eb = n(944486),
    e_ = n(55589),
    eE = n(933429),
    eO = n(626135),
    ev = n(823379),
    ey = n(709054),
    eI = n(374005),
    eC = n(409292),
    eS = n(256638),
    eN = n(663701),
    eT = n(697309),
    eP = n(425369),
    ej = n(715702),
    ex = n(981631),
    eA = n(176505),
    eZ = n(215023),
    ew = n(290511),
    eL = n(186901),
    eR = n(981028);
function eD(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let eM = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161,
    }),
    ek = () =>
        (0, r.jsx)("div", {
            className: eR.loader,
            children: (0, r.jsx)(h.$jN, {}),
        }),
    eU = (0, u.Un)({
        createPromise: () => n.e("78431").then(n.bind(n, 650788)),
        webpackId: 650788,
        name: "GuildShopPage",
        renderLoader: ek,
    }),
    eG = (0, u.Un)({
        createPromise: () => n.e("77033").then(n.bind(n, 636409)),
        webpackId: 636409,
        name: "SocialLayerStorefront",
        renderLoader: ek,
    }),
    eB = (0, u.Un)({
        createPromise: () => n.e("55942").then(n.bind(n, 464760)),
        webpackId: 464760,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: ek,
    }),
    eH = (0, u.Un)({
        createPromise: () => n.e("12009").then(n.bind(n, 231588)),
        webpackId: 231588,
        name: "GuildHomePage",
        renderLoader: ek,
    }),
    eV = (0, u.Un)({
        createPromise: () => Promise.all([n.e("6850"), n.e("9924")]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: "MemberSafetyPage",
        renderLoader: ek,
    }),
    eF = (0, u.Un)({
        createPromise: () =>
            Promise.all([n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("58227"), n.e("58121")]).then(
                n.bind(n, 603072),
            ),
        webpackId: 603072,
        name: "ChannelsAndRolesPage",
        renderLoader: ek,
    }),
    ez = (0, u.Un)({
        createPromise: () =>
            Promise.all([n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("37709")]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: "GuildOnboardingPage",
        renderLoader: ek,
    }),
    eW = (0, u.Un)({
        createPromise: () => Promise.all([n.e("76692"), n.e("44799")]).then(n.bind(n, 393357)),
        webpackId: 393357,
        name: "GuildPowerupsPage",
        renderLoader: ek,
    }),
    eY = (0, u.Un)({
        createPromise: () => Promise.all([n.e("63639"), n.e("62934")]).then(n.bind(n, 109838)),
        webpackId: 109838,
        name: "GameServerPage",
        renderLoader: ek,
    }),
    eq = (e) => {
        let { match: t } = e,
            n = (0, O.l)(),
            i = (0, p.e7)([ef.Z, eb.Z], () => {
                let e = eb.Z.getChannelId();
                return ef.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o, threadId: c } = t.params,
            u = null != a ? a : void 0;
        null == u && null != t.params.gameShopPageIndex && (u = eA.oC.GAME_SHOP);
        let d = (0, p.e7)([em.Z], () => em.Z.getGuild(l)),
            f = (0, p.e7)([eg.ZP], () => (null == l ? null : eg.ZP.getSelfMember(l))),
            h = (0, p.e7)([F.Z], () => {
                if (null == l) return;
                let e = F.Z.getData(l);
                if ((null == e ? void 0 : e.type) === z.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return x.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return x.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, el.WF)(u) && (0, el.WF)(c)) || (null != d && (0, eu.uL)(ex.Z5c.CHANNEL(d.id, (0, ea.Z)(d))), (0, W.V)());
        let g = (0, j.C4)(l, "channel_renderer");
        if (null != l && null != u && (0, eA.AB)(u))
            switch (u) {
                case eA.oC.ROLE_SUBSCRIPTIONS:
                    return g
                        ? (0, r.jsx)(eU, {
                              guildId: l,
                              initialTab: x.y.GUILD_ROLE_SUBSCRIPTIONS,
                          })
                        : (0, r.jsx)(G.Z, { guildId: l });
                case eA.oC.SERVER_MONETIZATION_ONBOARDING:
                    return (0, r.jsx)(eB, { guildId: l });
                case eA.oC.GAME_SHOP:
                    return (0, r.jsx)(eG, eD({}, e));
                case eA.oC.GUILD_SHOP:
                    return (0, r.jsx)(eU, {
                        guildId: l,
                        productId: o,
                        initialTab: h,
                    });
                case eA.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: ex.Z5c.CHANNEL(l, eA.oC.MEMBER_SAFETY) });
                case eA.oC.GUILD_HOME:
                    return (0, r.jsx)(eH, { guildId: l });
                case eA.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eF, {
                        guildId: l,
                        selectedSection: ew.l7.BROWSE,
                    });
                case eA.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(ez, { guildId: l });
                case eA.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eF, {
                        guildId: l,
                        selectedSection: ew.l7.CUSTOMIZE,
                    });
                case eA.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eV, { guildId: l });
                case eA.oC.GUILD_BOOSTS:
                    var m;
                    return (0, r.jsx)(eW, {
                        guildId: l,
                        powerupListingId: null != (m = n.get("powerupId")) ? m : n.get("powerupSkuId"),
                    });
                case eA.oC.GAME_SERVERS:
                    return (0, r.jsx)(eY, { guildId: l });
                case eA.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(S.Z, {});
                default:
                    (0, ev.vE)(u);
            }
        if ((0, k.p3)(d, f))
            return (0, r.jsx)(U.Z, {
                guildId: l,
                channelId: u,
            });
        if ((null == i ? void 0 : i.type) === ex.d4z.GUILD_STORE) {
            let e = ey.default.cast(t.params.messageId);
            return (0, r.jsx)(
                eC.Z,
                {
                    channel: i,
                    inputSkuId: e,
                },
                i.id,
            );
        }
        return (0, r.jsx)(S.Z, {});
    },
    eK = i.memo(function () {
        let { guildId: e, channelId: t } = (0, eo.Z)(),
            { notificationCenterVariant: n } = (0, Q.pN)({ location: "Sidebar" }),
            i = (0, p.e7)([eb.Z], () => (null != t ? t : eb.Z.getChannelId(e)));
        if (window.location.pathname.startsWith(ex.Z5c.CHANNEL(ex.STv)))
            return "sidebar" !== n && (0, eu.dL)(eh.Z.defaultRoute), (0, r.jsx)(J.Z, { includePanelSpacing: !0 });
        if (window.location.pathname.startsWith(ex.Z5c.ME_DMS)) {
            var l;
            let e = e_.Z.getPrivateChannelIds()[0],
                t = null != (l = eb.Z.getChannelId(ex.ME)) ? l : e;
            return (0, eu.dL)(ex.Z5c.CHANNEL(ex.ME, t)), (0, r.jsx)(eN.Z, {});
        }
        return window.location.pathname.startsWith(ex.Z5c.GLOBAL_DISCOVERY) ||
            window.location.pathname.startsWith(ex.Z5c.GUILD_DISCOVERY) ||
            (0, er.$V)()
            ? (0, r.jsx)(R.Z, {})
            : null != e
              ? (0, r.jsx)(
                    B.Z,
                    {
                        selectedChannelId: i,
                        guildId: e,
                    },
                    e,
                )
              : (0, r.jsx)(eN.Z, {});
    }),
    eQ = (e) => (0, r.jsx)(eq, eD({}, e)),
    eX = () => (0, r.jsx)(L.Z, {}),
    eJ = (e) => (0, r.jsx)(e$, eD({}, e)),
    e$ = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (i.useEffect(() => {
            null != t &&
                null != n &&
                g.Z.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                    context: "notification_center_navigation",
                });
        }, [t, n]),
        null == t)
            ? (0, r.jsx)(X.Z, {})
            : eQ(e);
    },
    e0 = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(M.Z, { guildId: t.params.guildId }) : null;
    },
    e1 = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(V.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode,
              })
            : null;
    },
    e8 = () => (0, r.jsx)(eP.Z, {}),
    e4 = () => (0, r.jsx)(ej.Z, {}),
    e3 = () =>
        function (e) {
            let { tab: t } = (0, o.parse)(e.location.search);
            return Object.values(eZ.AW).includes(t) ? (0, r.jsx)(T.Z, eD({ tab: t }, e)) : (0, r.jsx)(T.Z, eD({}, e));
        };
function e5() {
    return (0, r.jsx)(ei.Z, { topLevelRoute: !0 });
}
let e2 = (e) => (0, r.jsx)(y.Z, eD({}, e)),
    e6 = () => (0, r.jsx)(en.Z, {}),
    e7 = () => (0, r.jsx)(et.Z, {}),
    e9 = () => (0, r.jsx)(Y.Z, {}),
    te = () => (0, r.jsx)($.Z, {}),
    tt = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(m.Z, {
            deepLinkType: eL.jE.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, r.jsx)(en.Z, { initialSection: ex.pJs.ONLINE });
                    case "addFriends":
                        return (0, r.jsx)(en.Z, { initialSection: ex.pJs.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, r.jsx)(en.Z, { initialSection: ex.pJs.PENDING });
                    case "sessionManagement":
                        return (0, r.jsx)(s.l_, { to: ex.Z5c.SETTINGS("sessions") });
                    case "connections":
                        return (0, r.jsx)(s.l_, {
                            to: {
                                pathname: ex.Z5c.SETTINGS("connections"),
                                search: e.location.search,
                            },
                        });
                    case "family-center":
                        return (0, r.jsx)(s.l_, { to: ex.Z5c.FAMILY_CENTER });
                    case "account-standing":
                        return (0, r.jsx)(s.l_, { to: ex.Z5c.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, r.jsx)(s.l_, { to: ex.Z5c.SETTINGS("authorized-apps") });
                    case "open-shop":
                        return (0, r.jsx)(s.l_, { to: ex.Z5c.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, r.jsx)(s.l_, { to: { pathname: ex.Z5c.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, r.jsx)(s.l_, { to: { pathname: ex.Z5c.NITRO_HOME } });
                    case "connected-games":
                        return (0, r.jsx)(s.l_, { to: ex.Z5c.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let n = t.params.guildId;
                        return (0, r.jsx)(s.l_, { to: ex.Z5c.POWERUP_STORE(n) });
                    case "boost-settings":
                        return (0, r.jsx)(s.l_, { to: ex.Z5c.SETTINGS("guild-boosting") });
                    default:
                        return (0, r.jsx)(s.l_, { to: ex.Z5c.ME });
                }
            })(e),
        });
    };
function tn(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", "".concat(e, "px"));
}
function tr(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: o, isSidebarOpen: s } = e;
    (0, _.t)(!0);
    let c = "app view user trigger debugging";
    b.R6.useExperiment({ location: c }, { autoTrackExposure: !1 }), b.R6.trackExposure({ location: c });
    let u = (0, p.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        g = (0, A.T)("ChannelSidebar"),
        m = (0, P.useAppSidebarState)((e) => !e.isOpen) && g;
    i.useLayoutEffect(() => {
        if (g) {
            var e;
            let t = parseInt(null != (e = f.K.get(eT.nT)) ? e : "");
            Number.isNaN(t) && (t = eT.qO),
                (t = Math.min(Math.max(t, eT.li), eT.zx)),
                !g && t <= eT.p8 && (t = eT.qO),
                tn(t);
            let n = (e) => {
                e.metaKey && "b" === e.key && P.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
            };
            return (
                document.addEventListener("keydown", n),
                () => {
                    document.removeEventListener("keydown", n);
                }
            );
        }
    }, [g]),
        i.useLayoutEffect(() => {
            if (m) tn(eT.p8);
            else {
                var e;
                let t = parseInt(null != (e = f.K.get(eT.nT)) ? e : "");
                Number.isNaN(t) && (t = eT.qO), tn(t);
            }
        }, [m]);
    let O = i.useRef(null),
        v = i.useCallback(
            (e, t) => {
                var n;
                tn(e);
                let r = t < eT.li / 3;
                t <= eT.li
                    ? document.body.classList.add(eR.draggingMin)
                    : document.body.classList.remove(eR.draggingMin),
                    t >= eT.zx
                        ? document.body.classList.add(eR.draggingMax)
                        : document.body.classList.remove(eR.draggingMax);
                let i = t - e;
                null == (n = O.current) ||
                    n.style.setProperty("--custom-overdrag", "".concat(1 + Math.min(Math.abs(i / eT.p8), 0.25))),
                    g && (P.useAppSidebarState.setState({ isOpen: !r }), r && tn(eT.p8));
            },
            [g],
        ),
        y = i.useCallback(() => {
            document.body.classList.add(eR.dragging);
        }, []),
        I = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eR.dragging),
                document.body.classList.remove(eR.draggingMin),
                document.body.classList.remove(eR.draggingMax),
                document.body.classList.remove(eR.collapsing),
                null == (t = O.current) || t.style.setProperty("--custom-overdrag", "0px"),
                f.K.set(eT.nT, e),
                eO.default.track(ex.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        S = (0, E.Z)({
            minDimension: eT.li,
            maxDimension: eT.zx,
            resizableDomNodeRef: O,
            onElementResize: v,
            onElementResizeStart: y,
            onElementResizeEnd: I,
            orientation: E.y.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        N = i.useCallback(() => {
            P.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            m && tn(eT.p8);
        }, [m]),
        l)
    )
        return null;
    let T = { className: a()(eR.sidebarList, { [eR.sidebarListRounded]: !t }) };
    return (0, r.jsx)(h.f6W, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)("div", {
                ref: O,
                "data-collapsed": m,
                className: a()(eR.sidebar, e, {
                    [eR.fullWidth]: d.tq,
                    [eR.hidden]: u,
                    [eR.channelListHidden]: o,
                }),
                children: [
                    s &&
                        (0, r.jsx)(H.Z, {
                            className: eR.guilds,
                            themeOverride: n,
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    "div",
                                    ((t = eD({}, T)),
                                    (i = i = { children: (0, r.jsx)(eK, {}) }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    t),
                                ),
                                (0, r.jsx)(h.P3F, {
                                    onClick: N,
                                    "aria-label": "Resize Sidebar",
                                    className: eR.sidebarResizeHandle,
                                    onMouseDown: S,
                                }),
                                (0, r.jsx)(eI.b, {}),
                            ],
                        }),
                ],
            });
        },
    });
}
function ti() {
    var e;
    let t = (0, p.e7)([eE.ZP], () => eE.ZP.hasNotice()),
        n = (0, ep.Ll)(),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(ex.Z5c.GUILD_MEMBER_VERIFICATION("")));
            return (
                i.useEffect(
                    () =>
                        es.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ex.Z5c.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = i.useState(() =>
                window.location.pathname.startsWith(ex.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")),
            );
            return (
                i.useEffect(
                    () =>
                        es.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ex.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        o = (function () {
            var e;
            let t = (0, s.TH)();
            return (
                (null == (e = (0, s.LX)(t.pathname, ex.Z5c.GUILD_BOOSTING_MARKETING(ec.Hw.guildId())))
                    ? void 0
                    : e.isExact) === !0
            );
        })(),
        u = (0, p.e7)([K.Z], () => K.Z.getIsOpen()),
        { notificationCenterVariant: f } = (0, Q.pN)({ location: "Sidebar" }),
        h = ee.o.useConfig({ location: "AppView" }).trackFirstPages,
        g = (0, s.TH)();
    i.useEffect(() => {
        h && ed.Z.trackPageView(g.pathname);
    }, [h, g.pathname]);
    let m = (0, s.$B)([
            ex.Z5c.CHANNEL(ex.ME, ec.Hw.channelId()),
            ex.Z5c.CHANNEL(ec.Hw.guildId(), ec.Hw.channelId({ optional: !0 }), ":messageId?"),
        ]),
        b = (null == m || null == (e = m.params) ? void 0 : e.channelId) === eA.oC.GUILD_ONBOARDING,
        _ = i.useCallback(() => q.Z.openSidebar(), []),
        E = (0, A.T)("AppView"),
        O = (0, P.useAppSidebarState)((e) => !e.isOpen),
        y = (0, p.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        S = (0, p.e7)([Z.Z], () => Z.Z.isFrameActive());
    return (0, r.jsx)("div", {
        className: eR.container,
        children: (0, r.jsx)(D.Z.Provider, {
            value: (null == m ? void 0 : m.params.guildId) === ex.ME || null == m ? void 0 : m.params.guildId,
            children: (0, r.jsxs)("div", {
                className: eR.base,
                "data-fullscreen": y,
                children: [
                    !y && (0, r.jsx)(eM, {}),
                    d.tq ? null : (0, r.jsx)(eS.Z, {}),
                    (0, r.jsxs)("div", {
                        className: eR.content,
                        children: [
                            (0, r.jsx)(N.Z, {}),
                            (0, r.jsx)(tr, {
                                isSidebarOpen: u,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: l || a || o || b,
                                hideSidebar: !u,
                            }),
                            (0, r.jsx)("div", {
                                className: eR.page,
                                "data-collapsed": !!E && O,
                                children: (0, r.jsxs)(v.Z.Provider, {
                                    value: _,
                                    children: [
                                        (0, r.jsxs)(s.rs, {
                                            children: [
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, r.jsx)(s.l_, { to: ex.Z5c.ME }),
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e2,
                                                    impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    },
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.APPLICATION_LIBRARY,
                                                    render: e8,
                                                    impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.APPLICATION_STORE,
                                                    render: e4,
                                                    impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e3(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.COLLECTIBLES_SHOP,
                                                    render: e3(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e3(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.MESSAGE_REQUESTS,
                                                    render: e9,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.FAMILY_CENTER,
                                                    render: te,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.ME_ACTIVITY,
                                                    exact: !0,
                                                    render: e7,
                                                    impressionName: c.ImpressionNames.ACTIVITIES,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.ME,
                                                    exact: !0,
                                                    render: e6,
                                                    impressionName: c.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.ME_DMS,
                                                    exact: !0,
                                                    render: eQ,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                f === Q.jP.SIDEBAR &&
                                                    (0, r.jsx)(I.Z, {
                                                        path: ex.Z5c.CHANNEL(
                                                            ex.STv,
                                                            ec.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: eJ,
                                                        disableTrack: !0,
                                                    }),
                                                (0, r.jsx)(I.Z, {
                                                    path: [
                                                        ex.Z5c.CHANNEL_THREAD_VIEW(
                                                            ec.Hw.guildId(),
                                                            ec.Hw.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        ex.Z5c.CHANNELS_GAME_SHOP(
                                                            ec.Hw.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        ex.Z5c.CHANNEL(ex.ME, ec.Hw.channelId()),
                                                        ex.Z5c.CHANNEL(
                                                            ec.Hw.guildId(),
                                                            ec.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eQ,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.GLOBAL_DISCOVERY,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.QUEST_HOME,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.QUEST_HOME_V2,
                                                    render: e5,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.GUILD_DISCOVERY,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.GUILD_MEMBER_VERIFICATION(ec.Hw.guildId()),
                                                    render: e0,
                                                    impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        ec.Hw.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e1,
                                                    impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    },
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.GUILD_FEATURE(":feature", ec.Hw.guildId()),
                                                    exact: !0,
                                                    render: tt,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: ex.Z5c.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: tt,
                                                    disableTrack: !0,
                                                }),
                                            ],
                                        }),
                                        S && (0, r.jsx)(w.Z, {}),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
