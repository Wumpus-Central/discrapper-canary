n.d(t, { Z: () => ts }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(593473),
    o = n(843611),
    c = n(990547),
    u = n(608787),
    d = n(873546),
    p = n(442837),
    f = n(433517),
    h = n(481060),
    g = n(904245),
    m = n(409292),
    _ = n(697309),
    b = n(425369),
    E = n(715702),
    O = n(773244),
    y = n(711237),
    v = n(532835),
    I = n(347469),
    C = n(169382),
    S = n(290297),
    T = n(244317),
    N = n(765717),
    j = n(358221),
    P = n(823748),
    x = n(626421),
    A = n(118379),
    Z = n(267161),
    w = n(652515),
    L = n(544978),
    R = n(540059),
    D = n(591472),
    M = n(351051),
    k = n(724383),
    U = n(135864),
    G = n(372900),
    B = n(6039),
    H = n(637853),
    V = n(326145),
    F = n(269675),
    z = n(242601),
    Y = n(416568),
    W = n(815016),
    q = n(927220),
    K = n(160404),
    Q = n(225675),
    J = n(927723),
    X = n(745052),
    $ = n(285865),
    ee = n(659971),
    et = n(369664),
    en = n(821020),
    er = n(147341),
    ei = n(82409),
    el = n(179742),
    ea = n(365113),
    es = n(779715),
    eo = n(270759),
    ec = n(755458),
    eu = n(791250),
    ed = n(509212),
    ep = n(121711),
    ef = n(982168),
    eh = n(893908),
    eg = n(905423),
    em = n(304445),
    e_ = n(893607),
    eb = n(703656),
    eE = n(166484),
    eO = n(984802),
    ey = n(592125),
    ev = n(896797),
    eI = n(271383),
    eC = n(430824),
    eS = n(944486),
    eT = n(55589),
    eN = n(933429),
    ej = n(626135),
    eP = n(823379),
    ex = n(709054),
    eA = n(450876),
    eZ = n(981631),
    ew = n(176505),
    eL = n(215023),
    eR = n(290511),
    eD = n(186901),
    eM = n(822338);
function ek(e) {
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
let eU = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161,
    }),
    eG = () =>
        (0, r.jsx)("div", {
            className: eM.loader,
            children: (0, r.jsx)(h.$jN, {}),
        }),
    eB = (0, u.Un)({
        createPromise: () => n.e("78431").then(n.bind(n, 650788)),
        webpackId: 650788,
        name: "GuildShopPage",
        renderLoader: eG,
    }),
    eH = (0, u.Un)({
        createPromise: () => n.e("77033").then(n.bind(n, 636409)),
        webpackId: 636409,
        name: "SocialLayerStorefront",
        renderLoader: eG,
    }),
    eV = (0, u.Un)({
        createPromise: () => n.e("55942").then(n.bind(n, 464760)),
        webpackId: 464760,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: eG,
    }),
    eF = (0, u.Un)({
        createPromise: () => n.e("12009").then(n.bind(n, 231588)),
        webpackId: 231588,
        name: "GuildHomePage",
        renderLoader: eG,
    }),
    ez = (0, u.Un)({
        createPromise: () => Promise.all([n.e("6850"), n.e("9924")]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: "MemberSafetyPage",
        renderLoader: eG,
    }),
    eY = (0, u.Un)({
        createPromise: () =>
            Promise.all([
                n.e("8271"),
                n.e("15851"),
                n.e("51453"),
                n.e("845"),
                n.e("58227"),
                n.e("26494"),
                n.e("58121"),
            ]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: "ChannelsAndRolesPage",
        renderLoader: eG,
    }),
    eW = (0, u.Un)({
        createPromise: () =>
            Promise.all([n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("26494"), n.e("37709")]).then(
                n.bind(n, 599263),
            ),
        webpackId: 599263,
        name: "GuildOnboardingPage",
        renderLoader: eG,
    }),
    eq = (0, u.Un)({
        createPromise: () => Promise.all([n.e("76692"), n.e("44799")]).then(n.bind(n, 393357)),
        webpackId: 393357,
        name: "GuildPowerupsPage",
        renderLoader: eG,
    }),
    eK = (0, u.Un)({
        createPromise: () => Promise.all([n.e("63639"), n.e("62934")]).then(n.bind(n, 109838)),
        webpackId: 109838,
        name: "GameServerPage",
        renderLoader: eG,
    }),
    eQ = (e) => {
        var t, n;
        let { match: i } = e,
            l = (0, C.l)(),
            a = (0, p.e7)([ey.Z, eS.Z], () => {
                let e = eS.Z.getChannelId();
                return ey.Z.getChannel(e);
            }),
            { guildId: s, channelId: c, messageId: u, threadId: d } = i.params,
            f = null != c ? c : void 0;
        null == f && null != i.params.gameShopPageIndex && (f = ew.oC.GAME_SHOP);
        let h = (0, p.e7)([eC.Z], () => eC.Z.getGuild(s)),
            g = (0, p.e7)([eI.ZP], () => (null == s ? null : eI.ZP.getSelfMember(s))),
            _ = (0, ec.BU)(s, "ChannelRenderer"),
            b = (null == h || null == (t = h.features) ? void 0 : t.has(eZ.GuildFeatures.GAME_SERVERS)) === !0,
            E = (0, p.e7)([K.Z], () => {
                if (null == s) return;
                let e = K.Z.getData(s);
                if ((null == e ? void 0 : e.type) === Q.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return L.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return L.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, ef.WF)(f) && (0, ef.WF)(d)) || (null != h && (0, eb.uL)(eZ.Z5c.CHANNEL(h.id, (0, eh.Z)(h))), (0, J.V)());
        let O = (0, w.C4)(s, "channel_renderer");
        if (null != s && null != f && (0, ew.AB)(f))
            switch (f) {
                case ew.oC.ROLE_SUBSCRIPTIONS:
                    return O
                        ? (0, r.jsx)(eB, {
                              guildId: s,
                              initialTab: L.y.GUILD_ROLE_SUBSCRIPTIONS,
                          })
                        : (0, r.jsx)(F.Z, { guildId: s });
                case ew.oC.SERVER_MONETIZATION_ONBOARDING:
                    return (0, r.jsx)(eV, { guildId: s });
                case ew.oC.GAME_SHOP:
                    return (0, r.jsx)(eH, ek({}, e));
                case ew.oC.GUILD_SHOP:
                    return (0, r.jsx)(eB, {
                        guildId: s,
                        productId: u,
                        initialTab: E,
                    });
                case ew.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(o.l_, { to: eZ.Z5c.CHANNEL(s, ew.oC.MEMBER_SAFETY) });
                case ew.oC.GUILD_HOME:
                    return (0, r.jsx)(eF, { guildId: s });
                case ew.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eY, {
                        guildId: s,
                        selectedSection: eR.l7.BROWSE,
                    });
                case ew.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eW, { guildId: s });
                case ew.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eY, {
                        guildId: s,
                        selectedSection: eR.l7.CUSTOMIZE,
                    });
                case ew.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(ez, { guildId: s });
                case ew.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(eq, {
                        guildId: s,
                        powerupListingId: null != (n = l.get("powerupId")) ? n : l.get("powerupSkuId"),
                    });
                case ew.oC.GAME_SERVERS:
                    if (!_ || !b) return (0, r.jsx)(o.l_, { to: eZ.Z5c.CHANNEL(s) });
                    return (0, r.jsx)(eK, { guildId: s });
                case ew.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(P.Z, {});
                default:
                    (0, eP.vE)(f);
            }
        if ((0, H.p3)(h, g))
            return (0, r.jsx)(V.Z, {
                guildId: s,
                channelId: f,
            });
        if ((null == a ? void 0 : a.type) === eZ.d4z.GUILD_STORE) {
            let e = ex.default.cast(i.params.messageId);
            return (0, r.jsx)(
                m.Z,
                {
                    channel: a,
                    inputSkuId: e,
                },
                a.id,
            );
        }
        return (0, r.jsx)(P.Z, {});
    },
    eJ = i.memo(function () {
        let { guildId: e, channelId: t } = (0, eg.Z)(),
            { notificationCenterVariant: n } = (0, en.pN)({ location: "Sidebar" }),
            i = (0, p.e7)([eS.Z], () => (null != t ? t : eS.Z.getChannelId(e)));
        if (window.location.pathname.startsWith(eZ.Z5c.CHANNEL(eZ.STv)))
            return "sidebar" !== n && (0, eb.dL)(ev.Z.defaultRoute), (0, r.jsx)(ei.Z, { includePanelSpacing: !0 });
        if (window.location.pathname.startsWith(eZ.Z5c.ME_DMS)) {
            var l;
            let e = eT.Z.getPrivateChannelIds()[0],
                t = null != (l = eS.Z.getChannelId(eZ.ME)) ? l : e;
            return (0, eb.dL)(eZ.Z5c.CHANNEL(eZ.ME, t)), (0, r.jsx)(eu.Z, {});
        }
        return window.location.pathname.startsWith(eZ.Z5c.GLOBAL_DISCOVERY) ||
            window.location.pathname.startsWith(eZ.Z5c.GUILD_DISCOVERY) ||
            (0, ed.$V)()
            ? (0, r.jsx)(U.Z, {})
            : null != e
              ? (0, r.jsx)(
                    z.Z,
                    {
                        selectedChannelId: i,
                        guildId: e,
                    },
                    e,
                )
              : (0, r.jsx)(eu.Z, {});
    }),
    eX = (e) => (0, r.jsx)(eQ, ek({}, e)),
    e$ = () => (0, r.jsx)(k.Z, {}),
    e0 = (e) => (0, r.jsx)(e1, ek({}, e)),
    e1 = (e) => {
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
            ? (0, r.jsx)(er.Z, {})
            : eX(e);
    },
    e8 = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(B.Z, { guildId: t.params.guildId }) : null;
    },
    e4 = (e) => {
        let { match: t } = e;
        return (0, eb.uL)(eZ.Z5c.ME), (0, W.Z)(t.params.inviteCode), null;
    },
    e3 = () => (0, r.jsx)(b.Z, {}),
    e5 = () => (0, r.jsx)(E.Z, {}),
    e2 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(eL.AW).includes(t) ? (0, r.jsx)(A.Z, ek({ tab: t }, e)) : (0, r.jsx)(A.Z, ek({}, e));
        };
function e6() {
    return (0, r.jsx)(ep.Z, { topLevelRoute: !0 });
}
let e7 = (e) => (0, r.jsx)(T.Z, ek({}, e)),
    e9 = () => (0, r.jsx)(eo.Z, {}),
    te = () => (0, r.jsx)(es.Z, {}),
    tt = () => (0, r.jsx)(q.Z, {}),
    tn = () => (0, r.jsx)(X.Z, {}),
    tr = () => (0, r.jsx)(el.Z, {}),
    ti = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(O.Z, {
            deepLinkType: eD.jE.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, r.jsx)(eo.Z, { initialSection: eZ.pJs.ONLINE });
                    case "addFriends":
                        return (0, r.jsx)(eo.Z, { initialSection: eZ.pJs.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, r.jsx)(eo.Z, { initialSection: eZ.pJs.PENDING });
                    case "sessionManagement":
                        return (0, r.jsx)(o.l_, { to: eZ.Z5c.SETTINGS("sessions") });
                    case "connections":
                        return (0, r.jsx)(o.l_, {
                            to: {
                                pathname: eZ.Z5c.SETTINGS("connections"),
                                search: e.location.search,
                            },
                        });
                    case "family-center":
                        return (0, r.jsx)(o.l_, { to: eZ.Z5c.FAMILY_CENTER });
                    case "account-standing":
                        return (0, r.jsx)(o.l_, { to: eZ.Z5c.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, r.jsx)(o.l_, { to: eZ.Z5c.SETTINGS("authorized-apps") });
                    case "open-shop":
                        let { tab: n } = (0, s.parse)(e.location.search);
                        if (Object.values(eL.AW).includes(n))
                            return (0, r.jsx)(o.l_, { to: eZ.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, r.jsx)(o.l_, { to: eZ.Z5c.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, r.jsx)(o.l_, { to: { pathname: eZ.Z5c.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, r.jsx)(o.l_, { to: { pathname: eZ.Z5c.NITRO_HOME } });
                    case "connected-games":
                        return (0, r.jsx)(o.l_, { to: eZ.Z5c.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let i = t.params.guildId;
                        return (0, r.jsx)(o.l_, { to: eZ.Z5c.POWERUP_STORE(i) });
                    case "boost-settings":
                        return (0, r.jsx)(o.l_, { to: eZ.Z5c.SETTINGS("guild-boosting") });
                    default:
                        return (0, r.jsx)(o.l_, { to: eZ.Z5c.ME });
                }
            })(e),
        });
    };
function tl(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", "".concat(e, "px"));
}
function ta(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: s, isSidebarOpen: o } = e;
    (0, v.t)(!0);
    let c = "app view user trigger debugging";
    y.R6.useExperiment({ location: c }, { autoTrackExposure: !1 }), y.R6.trackExposure({ location: c });
    let u = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        g = (0, R.T)("ChannelSidebar"),
        m = (0, Z.useAppSidebarState)((e) => !e.isOpen) && g;
    i.useLayoutEffect(() => {
        if (g) {
            var e;
            let t = parseInt(null != (e = f.K.get(_.nT)) ? e : "");
            Number.isNaN(t) && (t = _.qO),
                (t = Math.min(Math.max(t, _.li), _.zx)),
                !g && t <= _.p8 && (t = _.qO),
                tl(t);
            let n = (e) => {
                e.metaKey && "b" === e.key && Z.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
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
            if (m) tl(_.p8);
            else {
                var e;
                let t = parseInt(null != (e = f.K.get(_.nT)) ? e : "");
                Number.isNaN(t) && (t = _.qO), tl(t);
            }
        }, [m]);
    let b = i.useRef(null),
        E = i.useCallback(
            (e, t) => {
                var n;
                tl(e);
                let r = t < _.li / 3;
                t <= _.li
                    ? document.body.classList.add(eM.draggingMin)
                    : document.body.classList.remove(eM.draggingMin),
                    t >= _.zx
                        ? document.body.classList.add(eM.draggingMax)
                        : document.body.classList.remove(eM.draggingMax);
                let i = t - e;
                null == (n = b.current) ||
                    n.style.setProperty("--custom-overdrag", "".concat(1 + Math.min(Math.abs(i / _.p8), 0.25))),
                    g && (Z.useAppSidebarState.setState({ isOpen: !r }), r && tl(_.p8));
            },
            [g],
        ),
        O = i.useCallback(() => {
            document.body.classList.add(eM.dragging);
        }, []),
        C = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eM.dragging),
                document.body.classList.remove(eM.draggingMin),
                document.body.classList.remove(eM.draggingMax),
                document.body.classList.remove(eM.collapsing),
                null == (t = b.current) || t.style.setProperty("--custom-overdrag", "0px"),
                f.K.set(_.nT, e),
                ej.default.track(eZ.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        S = (0, I.Z)({
            minDimension: _.li,
            maxDimension: _.zx,
            resizableDomNodeRef: b,
            onElementResize: E,
            onElementResizeStart: O,
            onElementResizeEnd: C,
            orientation: I.y.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        T = i.useCallback(() => {
            Z.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            m && tl(_.p8);
        }, [m]),
        l)
    )
        return null;
    let N = { className: a()(eM.sidebarList, { [eM.sidebarListRounded]: !t }) };
    return (0, r.jsx)(h.f6W, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)("div", {
                ref: b,
                "data-collapsed": m,
                className: a()(eM.sidebar, e, {
                    [eM.fullWidth]: d.tq,
                    [eM.hidden]: u,
                    [eM.channelListHidden]: s,
                }),
                children: [
                    o &&
                        (0, r.jsx)(Y.Z, {
                            className: eM.guilds,
                            themeOverride: n,
                        }),
                    !s &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    "div",
                                    ((t = ek({}, N)),
                                    (i = i = { children: (0, r.jsx)(eJ, {}) }),
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
                                    onClick: T,
                                    "aria-label": "Resize Sidebar",
                                    className: eM.sidebarResizeHandle,
                                    onMouseDown: S,
                                }),
                                (0, r.jsx)(eA.b, {}),
                            ],
                        }),
                ],
            });
        },
    });
}
function ts() {
    var e;
    let t = (0, p.e7)([eN.ZP], () => eN.ZP.hasNotice()),
        n = (0, eO.Ll)(),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eZ.Z5c.GUILD_MEMBER_VERIFICATION("")));
            return (
                i.useEffect(
                    () =>
                        em.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eZ.Z5c.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        a = (function () {
            var e;
            let t = (0, o.TH)();
            return (
                (null == (e = (0, o.LX)(t.pathname, eZ.Z5c.GUILD_BOOSTING_MARKETING(e_.Hw.guildId())))
                    ? void 0
                    : e.isExact) === !0
            );
        })(),
        s = (0, p.e7)([ee.Z], () => ee.Z.getIsOpen()),
        { notificationCenterVariant: u } = (0, en.pN)({ location: "Sidebar" }),
        f = ea.o.useConfig({ location: "AppView" }).trackFirstPages,
        h = (0, o.TH)();
    i.useEffect(() => {
        f && eE.Z.trackPageView(h.pathname);
    }, [f, h.pathname]);
    let g = (0, o.$B)([
            eZ.Z5c.CHANNEL(eZ.ME, e_.Hw.channelId()),
            eZ.Z5c.CHANNEL(e_.Hw.guildId(), e_.Hw.channelId({ optional: !0 }), ":messageId?"),
        ]),
        m = (null == g || null == (e = g.params) ? void 0 : e.channelId) === ew.oC.GUILD_ONBOARDING,
        _ = i.useCallback(() => $.Z.openSidebar(), []),
        b = (0, R.T)("AppView"),
        E = (0, Z.useAppSidebarState)((e) => !e.isOpen),
        O = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        y = (0, p.e7)([D.Z], () => D.Z.isFrameActive());
    return (0, r.jsx)("div", {
        className: eM.container,
        children: (0, r.jsx)(G.Z.Provider, {
            value: (null == g ? void 0 : g.params.guildId) === eZ.ME || null == g ? void 0 : g.params.guildId,
            children: (0, r.jsxs)("div", {
                className: eM.base,
                "data-fullscreen": O,
                children: [
                    !O && (0, r.jsx)(eU, {}),
                    d.tq ? null : (0, r.jsx)(et.Z, {}),
                    (0, r.jsxs)("div", {
                        className: eM.content,
                        children: [
                            (0, r.jsx)(x.Z, {}),
                            (0, r.jsx)(ta, {
                                isSidebarOpen: s,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: l || a || m,
                                hideSidebar: !s,
                            }),
                            (0, r.jsx)("div", {
                                className: eM.page,
                                "data-collapsed": !!b && E,
                                children: (0, r.jsxs)(S.Z.Provider, {
                                    value: _,
                                    children: [
                                        (0, r.jsxs)(o.rs, {
                                            children: [
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, r.jsx)(o.l_, { to: eZ.Z5c.ME }),
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e7,
                                                    impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    },
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.APPLICATION_LIBRARY,
                                                    render: e3,
                                                    impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.APPLICATION_STORE,
                                                    render: e5,
                                                    impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e2(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.COLLECTIBLES_SHOP,
                                                    render: e2(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e2(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.ICYMI,
                                                    render: tt,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.MESSAGE_REQUESTS,
                                                    render: tn,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.FAMILY_CENTER,
                                                    render: tr,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.ME_ACTIVITY,
                                                    exact: !0,
                                                    render: te,
                                                    impressionName: c.ImpressionNames.ACTIVITIES,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.ME,
                                                    exact: !0,
                                                    render: e9,
                                                    impressionName: c.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.ME_DMS,
                                                    exact: !0,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                u === en.jP.SIDEBAR &&
                                                    (0, r.jsx)(N.Z, {
                                                        path: eZ.Z5c.CHANNEL(
                                                            eZ.STv,
                                                            e_.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: e0,
                                                        disableTrack: !0,
                                                    }),
                                                (0, r.jsx)(N.Z, {
                                                    path: [
                                                        eZ.Z5c.CHANNEL_THREAD_VIEW(
                                                            e_.Hw.guildId(),
                                                            e_.Hw.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eZ.Z5c.CHANNELS_GAME_SHOP(
                                                            e_.Hw.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eZ.Z5c.CHANNEL(eZ.ME, e_.Hw.channelId()),
                                                        eZ.Z5c.CHANNEL(
                                                            e_.Hw.guildId(),
                                                            e_.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.GLOBAL_DISCOVERY,
                                                    render: e$,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: e$,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: e$,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.QUEST_HOME,
                                                    render: e$,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.QUEST_HOME_V2,
                                                    render: e6,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.GUILD_DISCOVERY,
                                                    render: e$,
                                                    impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.GUILD_MEMBER_VERIFICATION(e_.Hw.guildId()),
                                                    render: e8,
                                                    impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        e_.Hw.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e4,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.GUILD_FEATURE(":feature", e_.Hw.guildId()),
                                                    exact: !0,
                                                    render: ti,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eZ.Z5c.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: ti,
                                                    disableTrack: !0,
                                                }),
                                            ],
                                        }),
                                        y && (0, r.jsx)(M.Z, {}),
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
