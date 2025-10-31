n.d(t, { Z: () => ta }), n(35282), n(388685);
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
    m = n(481060),
    h = n(904245),
    g = n(409292),
    _ = n(697309),
    b = n(425369),
    E = n(715702),
    O = n(773244),
    I = n(711237),
    y = n(532835),
    v = n(347469),
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
    W = n(613609),
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
    ec = n(791250),
    eu = n(509212),
    ed = n(121711),
    ep = n(982168),
    ef = n(893908),
    em = n(905423),
    eh = n(304445),
    eg = n(893607),
    e_ = n(703656),
    eb = n(166484),
    eE = n(984802),
    eO = n(592125),
    eI = n(896797),
    ey = n(271383),
    ev = n(430824),
    eC = n(944486),
    eS = n(55589),
    eT = n(933429),
    eN = n(626135),
    ej = n(823379),
    eP = n(709054),
    ex = n(450876),
    eA = n(981631),
    eZ = n(176505),
    ew = n(215023),
    eL = n(290511),
    eR = n(186901),
    eD = n(822338);
function eM(e) {
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
let ek = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161,
    }),
    eU = () =>
        (0, r.jsx)("div", {
            className: eD.loader,
            children: (0, r.jsx)(m.$jN, {}),
        }),
    eG = (0, u.Un)({
        createPromise: () => n.e("78431").then(n.bind(n, 650788)),
        webpackId: 650788,
        name: "GuildShopPage",
        renderLoader: eU,
    }),
    eB = (0, u.Un)({
        createPromise: () => n.e("77033").then(n.bind(n, 636409)),
        webpackId: 636409,
        name: "SocialLayerStorefront",
        renderLoader: eU,
    }),
    eH = (0, u.Un)({
        createPromise: () => n.e("55942").then(n.bind(n, 464760)),
        webpackId: 464760,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: eU,
    }),
    eV = (0, u.Un)({
        createPromise: () => n.e("12009").then(n.bind(n, 231588)),
        webpackId: 231588,
        name: "GuildHomePage",
        renderLoader: eU,
    }),
    eF = (0, u.Un)({
        createPromise: () => Promise.all([n.e("6850"), n.e("9924")]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: "MemberSafetyPage",
        renderLoader: eU,
    }),
    ez = (0, u.Un)({
        createPromise: () =>
            Promise.all([n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("58227"), n.e("58121")]).then(
                n.bind(n, 603072),
            ),
        webpackId: 603072,
        name: "ChannelsAndRolesPage",
        renderLoader: eU,
    }),
    eY = (0, u.Un)({
        createPromise: () =>
            Promise.all([n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("37709")]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: "GuildOnboardingPage",
        renderLoader: eU,
    }),
    eW = (0, u.Un)({
        createPromise: () => Promise.all([n.e("76692"), n.e("44799")]).then(n.bind(n, 393357)),
        webpackId: 393357,
        name: "GuildPowerupsPage",
        renderLoader: eU,
    }),
    eq = (0, u.Un)({
        createPromise: () => Promise.all([n.e("63639"), n.e("62934")]).then(n.bind(n, 109838)),
        webpackId: 109838,
        name: "GameServerPage",
        renderLoader: eU,
    }),
    eK = (e) => {
        let { match: t } = e,
            n = (0, C.l)(),
            i = (0, p.e7)([eO.Z, eC.Z], () => {
                let e = eC.Z.getChannelId();
                return eO.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: s, threadId: c } = t.params,
            u = null != a ? a : void 0;
        null == u && null != t.params.gameShopPageIndex && (u = eZ.oC.GAME_SHOP);
        let d = (0, p.e7)([ev.Z], () => ev.Z.getGuild(l)),
            f = (0, p.e7)([ey.ZP], () => (null == l ? null : ey.ZP.getSelfMember(l))),
            m = (0, p.e7)([K.Z], () => {
                if (null == l) return;
                let e = K.Z.getData(l);
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
        ((0, ep.WF)(u) && (0, ep.WF)(c)) || (null != d && (0, e_.uL)(eA.Z5c.CHANNEL(d.id, (0, ef.Z)(d))), (0, J.V)());
        let h = (0, w.C4)(l, "channel_renderer");
        if (null != l && null != u && (0, eZ.AB)(u))
            switch (u) {
                case eZ.oC.ROLE_SUBSCRIPTIONS:
                    return h
                        ? (0, r.jsx)(eG, {
                              guildId: l,
                              initialTab: L.y.GUILD_ROLE_SUBSCRIPTIONS,
                          })
                        : (0, r.jsx)(F.Z, { guildId: l });
                case eZ.oC.SERVER_MONETIZATION_ONBOARDING:
                    return (0, r.jsx)(eH, { guildId: l });
                case eZ.oC.GAME_SHOP:
                    return (0, r.jsx)(eB, eM({}, e));
                case eZ.oC.GUILD_SHOP:
                    return (0, r.jsx)(eG, {
                        guildId: l,
                        productId: s,
                        initialTab: m,
                    });
                case eZ.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(o.l_, { to: eA.Z5c.CHANNEL(l, eZ.oC.MEMBER_SAFETY) });
                case eZ.oC.GUILD_HOME:
                    return (0, r.jsx)(eV, { guildId: l });
                case eZ.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(ez, {
                        guildId: l,
                        selectedSection: eL.l7.BROWSE,
                    });
                case eZ.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eY, { guildId: l });
                case eZ.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(ez, {
                        guildId: l,
                        selectedSection: eL.l7.CUSTOMIZE,
                    });
                case eZ.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eF, { guildId: l });
                case eZ.oC.GUILD_BOOSTS:
                    var _;
                    return (0, r.jsx)(eW, {
                        guildId: l,
                        powerupListingId: null != (_ = n.get("powerupId")) ? _ : n.get("powerupSkuId"),
                    });
                case eZ.oC.GAME_SERVERS:
                    return (0, r.jsx)(eq, { guildId: l });
                case eZ.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(P.Z, {});
                default:
                    (0, ej.vE)(u);
            }
        if ((0, H.p3)(d, f))
            return (0, r.jsx)(V.Z, {
                guildId: l,
                channelId: u,
            });
        if ((null == i ? void 0 : i.type) === eA.d4z.GUILD_STORE) {
            let e = eP.default.cast(t.params.messageId);
            return (0, r.jsx)(
                g.Z,
                {
                    channel: i,
                    inputSkuId: e,
                },
                i.id,
            );
        }
        return (0, r.jsx)(P.Z, {});
    },
    eQ = i.memo(function () {
        let { guildId: e, channelId: t } = (0, em.Z)(),
            { notificationCenterVariant: n } = (0, en.pN)({ location: "Sidebar" }),
            i = (0, p.e7)([eC.Z], () => (null != t ? t : eC.Z.getChannelId(e)));
        if (window.location.pathname.startsWith(eA.Z5c.CHANNEL(eA.STv)))
            return "sidebar" !== n && (0, e_.dL)(eI.Z.defaultRoute), (0, r.jsx)(ei.Z, { includePanelSpacing: !0 });
        if (window.location.pathname.startsWith(eA.Z5c.ME_DMS)) {
            var l;
            let e = eS.Z.getPrivateChannelIds()[0],
                t = null != (l = eC.Z.getChannelId(eA.ME)) ? l : e;
            return (0, e_.dL)(eA.Z5c.CHANNEL(eA.ME, t)), (0, r.jsx)(ec.Z, {});
        }
        return window.location.pathname.startsWith(eA.Z5c.GLOBAL_DISCOVERY) ||
            window.location.pathname.startsWith(eA.Z5c.GUILD_DISCOVERY) ||
            (0, eu.$V)()
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
              : (0, r.jsx)(ec.Z, {});
    }),
    eJ = (e) => (0, r.jsx)(eK, eM({}, e)),
    eX = () => (0, r.jsx)(k.Z, {}),
    e$ = (e) => (0, r.jsx)(e0, eM({}, e)),
    e0 = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (i.useEffect(() => {
            null != t &&
                null != n &&
                h.Z.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                    context: "notification_center_navigation",
                });
        }, [t, n]),
        null == t)
            ? (0, r.jsx)(er.Z, {})
            : eJ(e);
    },
    e1 = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(B.Z, { guildId: t.params.guildId }) : null;
    },
    e8 = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(W.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode,
              })
            : null;
    },
    e4 = () => (0, r.jsx)(b.Z, {}),
    e3 = () => (0, r.jsx)(E.Z, {}),
    e5 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(ew.AW).includes(t) ? (0, r.jsx)(A.Z, eM({ tab: t }, e)) : (0, r.jsx)(A.Z, eM({}, e));
        };
function e2() {
    return (0, r.jsx)(ed.Z, { topLevelRoute: !0 });
}
let e6 = (e) => (0, r.jsx)(T.Z, eM({}, e)),
    e7 = () => (0, r.jsx)(eo.Z, {}),
    e9 = () => (0, r.jsx)(es.Z, {}),
    te = () => (0, r.jsx)(q.Z, {}),
    tt = () => (0, r.jsx)(X.Z, {}),
    tn = () => (0, r.jsx)(el.Z, {}),
    tr = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(O.Z, {
            deepLinkType: eR.jE.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, r.jsx)(eo.Z, { initialSection: eA.pJs.ONLINE });
                    case "addFriends":
                        return (0, r.jsx)(eo.Z, { initialSection: eA.pJs.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, r.jsx)(eo.Z, { initialSection: eA.pJs.PENDING });
                    case "sessionManagement":
                        return (0, r.jsx)(o.l_, { to: eA.Z5c.SETTINGS("sessions") });
                    case "connections":
                        return (0, r.jsx)(o.l_, {
                            to: {
                                pathname: eA.Z5c.SETTINGS("connections"),
                                search: e.location.search,
                            },
                        });
                    case "family-center":
                        return (0, r.jsx)(o.l_, { to: eA.Z5c.FAMILY_CENTER });
                    case "account-standing":
                        return (0, r.jsx)(o.l_, { to: eA.Z5c.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, r.jsx)(o.l_, { to: eA.Z5c.SETTINGS("authorized-apps") });
                    case "open-shop":
                        return (0, r.jsx)(o.l_, { to: eA.Z5c.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, r.jsx)(o.l_, { to: { pathname: eA.Z5c.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, r.jsx)(o.l_, { to: { pathname: eA.Z5c.NITRO_HOME } });
                    case "connected-games":
                        return (0, r.jsx)(o.l_, { to: eA.Z5c.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let n = t.params.guildId;
                        return (0, r.jsx)(o.l_, { to: eA.Z5c.POWERUP_STORE(n) });
                    case "boost-settings":
                        return (0, r.jsx)(o.l_, { to: eA.Z5c.SETTINGS("guild-boosting") });
                    default:
                        return (0, r.jsx)(o.l_, { to: eA.Z5c.ME });
                }
            })(e),
        });
    };
function ti(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", "".concat(e, "px"));
}
function tl(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: s, isSidebarOpen: o } = e;
    (0, y.t)(!0);
    let c = "app view user trigger debugging";
    I.R6.useExperiment({ location: c }, { autoTrackExposure: !1 }), I.R6.trackExposure({ location: c });
    let u = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        h = (0, R.T)("ChannelSidebar"),
        g = (0, Z.useAppSidebarState)((e) => !e.isOpen) && h;
    i.useLayoutEffect(() => {
        if (h) {
            var e;
            let t = parseInt(null != (e = f.K.get(_.nT)) ? e : "");
            Number.isNaN(t) && (t = _.qO),
                (t = Math.min(Math.max(t, _.li), _.zx)),
                !h && t <= _.p8 && (t = _.qO),
                ti(t);
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
    }, [h]),
        i.useLayoutEffect(() => {
            if (g) ti(_.p8);
            else {
                var e;
                let t = parseInt(null != (e = f.K.get(_.nT)) ? e : "");
                Number.isNaN(t) && (t = _.qO), ti(t);
            }
        }, [g]);
    let b = i.useRef(null),
        E = i.useCallback(
            (e, t) => {
                var n;
                ti(e);
                let r = t < _.li / 3;
                t <= _.li
                    ? document.body.classList.add(eD.draggingMin)
                    : document.body.classList.remove(eD.draggingMin),
                    t >= _.zx
                        ? document.body.classList.add(eD.draggingMax)
                        : document.body.classList.remove(eD.draggingMax);
                let i = t - e;
                null == (n = b.current) ||
                    n.style.setProperty("--custom-overdrag", "".concat(1 + Math.min(Math.abs(i / _.p8), 0.25))),
                    h && (Z.useAppSidebarState.setState({ isOpen: !r }), r && ti(_.p8));
            },
            [h],
        ),
        O = i.useCallback(() => {
            document.body.classList.add(eD.dragging);
        }, []),
        C = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eD.dragging),
                document.body.classList.remove(eD.draggingMin),
                document.body.classList.remove(eD.draggingMax),
                document.body.classList.remove(eD.collapsing),
                null == (t = b.current) || t.style.setProperty("--custom-overdrag", "0px"),
                f.K.set(_.nT, e),
                eN.default.track(eA.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        S = (0, v.Z)({
            minDimension: _.li,
            maxDimension: _.zx,
            resizableDomNodeRef: b,
            onElementResize: E,
            onElementResizeStart: O,
            onElementResizeEnd: C,
            orientation: v.y.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        T = i.useCallback(() => {
            Z.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            g && ti(_.p8);
        }, [g]),
        l)
    )
        return null;
    let N = { className: a()(eD.sidebarList, { [eD.sidebarListRounded]: !t }) };
    return (0, r.jsx)(m.f6W, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)("div", {
                ref: b,
                "data-collapsed": g,
                className: a()(eD.sidebar, e, {
                    [eD.fullWidth]: d.tq,
                    [eD.hidden]: u,
                    [eD.channelListHidden]: s,
                }),
                children: [
                    o &&
                        (0, r.jsx)(Y.Z, {
                            className: eD.guilds,
                            themeOverride: n,
                        }),
                    !s &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    "div",
                                    ((t = eM({}, N)),
                                    (i = i = { children: (0, r.jsx)(eQ, {}) }),
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
                                (0, r.jsx)(m.P3F, {
                                    onClick: T,
                                    "aria-label": "Resize Sidebar",
                                    className: eD.sidebarResizeHandle,
                                    onMouseDown: S,
                                }),
                                (0, r.jsx)(ex.b, {}),
                            ],
                        }),
                ],
            });
        },
    });
}
function ta() {
    var e;
    let t = (0, p.e7)([eT.ZP], () => eT.ZP.hasNotice()),
        n = (0, eE.Ll)(),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eA.Z5c.GUILD_MEMBER_VERIFICATION("")));
            return (
                i.useEffect(
                    () =>
                        eh.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eA.Z5c.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = i.useState(() =>
                window.location.pathname.startsWith(eA.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")),
            );
            return (
                i.useEffect(
                    () =>
                        eh.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eA.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        s = (function () {
            var e;
            let t = (0, o.TH)();
            return (
                (null == (e = (0, o.LX)(t.pathname, eA.Z5c.GUILD_BOOSTING_MARKETING(eg.Hw.guildId())))
                    ? void 0
                    : e.isExact) === !0
            );
        })(),
        u = (0, p.e7)([ee.Z], () => ee.Z.getIsOpen()),
        { notificationCenterVariant: f } = (0, en.pN)({ location: "Sidebar" }),
        m = ea.o.useConfig({ location: "AppView" }).trackFirstPages,
        h = (0, o.TH)();
    i.useEffect(() => {
        m && eb.Z.trackPageView(h.pathname);
    }, [m, h.pathname]);
    let g = (0, o.$B)([
            eA.Z5c.CHANNEL(eA.ME, eg.Hw.channelId()),
            eA.Z5c.CHANNEL(eg.Hw.guildId(), eg.Hw.channelId({ optional: !0 }), ":messageId?"),
        ]),
        _ = (null == g || null == (e = g.params) ? void 0 : e.channelId) === eZ.oC.GUILD_ONBOARDING,
        b = i.useCallback(() => $.Z.openSidebar(), []),
        E = (0, R.T)("AppView"),
        O = (0, Z.useAppSidebarState)((e) => !e.isOpen),
        I = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        y = (0, p.e7)([D.Z], () => D.Z.isFrameActive());
    return (0, r.jsx)("div", {
        className: eD.container,
        children: (0, r.jsx)(G.Z.Provider, {
            value: (null == g ? void 0 : g.params.guildId) === eA.ME || null == g ? void 0 : g.params.guildId,
            children: (0, r.jsxs)("div", {
                className: eD.base,
                "data-fullscreen": I,
                children: [
                    !I && (0, r.jsx)(ek, {}),
                    d.tq ? null : (0, r.jsx)(et.Z, {}),
                    (0, r.jsxs)("div", {
                        className: eD.content,
                        children: [
                            (0, r.jsx)(x.Z, {}),
                            (0, r.jsx)(tl, {
                                isSidebarOpen: u,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: l || a || s || _,
                                hideSidebar: !u,
                            }),
                            (0, r.jsx)("div", {
                                className: eD.page,
                                "data-collapsed": !!E && O,
                                children: (0, r.jsxs)(S.Z.Provider, {
                                    value: b,
                                    children: [
                                        (0, r.jsxs)(o.rs, {
                                            children: [
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, r.jsx)(o.l_, { to: eA.Z5c.ME }),
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e6,
                                                    impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    },
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.APPLICATION_LIBRARY,
                                                    render: e4,
                                                    impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.APPLICATION_STORE,
                                                    render: e3,
                                                    impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e5(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.COLLECTIBLES_SHOP,
                                                    render: e5(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e5(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.ICYMI,
                                                    render: te,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.MESSAGE_REQUESTS,
                                                    render: tt,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.FAMILY_CENTER,
                                                    render: tn,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.ME_ACTIVITY,
                                                    exact: !0,
                                                    render: e9,
                                                    impressionName: c.ImpressionNames.ACTIVITIES,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.ME,
                                                    exact: !0,
                                                    render: e7,
                                                    impressionName: c.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.ME_DMS,
                                                    exact: !0,
                                                    render: eJ,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                f === en.jP.SIDEBAR &&
                                                    (0, r.jsx)(N.Z, {
                                                        path: eA.Z5c.CHANNEL(
                                                            eA.STv,
                                                            eg.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: e$,
                                                        disableTrack: !0,
                                                    }),
                                                (0, r.jsx)(N.Z, {
                                                    path: [
                                                        eA.Z5c.CHANNEL_THREAD_VIEW(
                                                            eg.Hw.guildId(),
                                                            eg.Hw.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eA.Z5c.CHANNELS_GAME_SHOP(
                                                            eg.Hw.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eA.Z5c.CHANNEL(eA.ME, eg.Hw.channelId()),
                                                        eA.Z5c.CHANNEL(
                                                            eg.Hw.guildId(),
                                                            eg.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eJ,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.GLOBAL_DISCOVERY,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.QUEST_HOME,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.QUEST_HOME_V2,
                                                    render: e2,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.GUILD_DISCOVERY,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.GUILD_MEMBER_VERIFICATION(eg.Hw.guildId()),
                                                    render: e1,
                                                    impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        eg.Hw.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e8,
                                                    impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    },
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.GUILD_FEATURE(":feature", eg.Hw.guildId()),
                                                    exact: !0,
                                                    render: tr,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: eA.Z5c.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: tr,
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
