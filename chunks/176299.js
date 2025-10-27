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
    h = n(481060),
    m = n(904245),
    g = n(773244),
    _ = n(711237),
    b = n(532835),
    E = n(347469),
    O = n(169382),
    I = n(290297),
    v = n(244317),
    y = n(765717),
    C = n(358221),
    S = n(823748),
    T = n(626421),
    N = n(118379),
    j = n(267161),
    P = n(652515),
    x = n(544978),
    A = n(540059),
    Z = n(591472),
    w = n(351051),
    L = n(724383),
    D = n(135864),
    R = n(372900),
    M = n(6039),
    k = n(637853),
    U = n(326145),
    G = n(269675),
    B = n(242601),
    H = n(416568),
    V = n(613609),
    F = n(927220),
    z = n(160404),
    Y = n(225675),
    W = n(927723),
    q = n(745052),
    K = n(285865),
    Q = n(659971),
    J = n(821020),
    X = n(147341),
    $ = n(82409),
    ee = n(179742),
    et = n(365113),
    en = n(779715),
    er = n(270759),
    ei = n(509212),
    el = n(121711),
    ea = n(982168),
    es = n(893908),
    eo = n(905423),
    ec = n(304445),
    eu = n(893607),
    ed = n(703656),
    ep = n(166484),
    ef = n(984802),
    eh = n(592125),
    em = n(896797),
    eg = n(271383),
    e_ = n(430824),
    eb = n(944486),
    eE = n(55589),
    eO = n(933429),
    eI = n(626135),
    ev = n(823379),
    ey = n(709054),
    eC = n(374005),
    eS = n(409292),
    eT = n(256638),
    eN = n(663701),
    ej = n(697309),
    eP = n(425369),
    ex = n(715702),
    eA = n(981631),
    eZ = n(176505),
    ew = n(215023),
    eL = n(290511),
    eD = n(186901),
    eR = n(981028);
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
            className: eR.loader,
            children: (0, r.jsx)(h.$jN, {}),
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
            n = (0, O.l)(),
            i = (0, p.e7)([eh.Z, eb.Z], () => {
                let e = eb.Z.getChannelId();
                return eh.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: s, threadId: c } = t.params,
            u = null != a ? a : void 0;
        null == u && null != t.params.gameShopPageIndex && (u = eZ.oC.GAME_SHOP);
        let d = (0, p.e7)([e_.Z], () => e_.Z.getGuild(l)),
            f = (0, p.e7)([eg.ZP], () => (null == l ? null : eg.ZP.getSelfMember(l))),
            h = (0, p.e7)([z.Z], () => {
                if (null == l) return;
                let e = z.Z.getData(l);
                if ((null == e ? void 0 : e.type) === Y.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return x.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return x.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, ea.WF)(u) && (0, ea.WF)(c)) || (null != d && (0, ed.uL)(eA.Z5c.CHANNEL(d.id, (0, es.Z)(d))), (0, W.V)());
        let m = (0, P.C4)(l, "channel_renderer");
        if (null != l && null != u && (0, eZ.AB)(u))
            switch (u) {
                case eZ.oC.ROLE_SUBSCRIPTIONS:
                    return m
                        ? (0, r.jsx)(eG, {
                              guildId: l,
                              initialTab: x.y.GUILD_ROLE_SUBSCRIPTIONS,
                          })
                        : (0, r.jsx)(G.Z, { guildId: l });
                case eZ.oC.SERVER_MONETIZATION_ONBOARDING:
                    return (0, r.jsx)(eH, { guildId: l });
                case eZ.oC.GAME_SHOP:
                    return (0, r.jsx)(eB, eM({}, e));
                case eZ.oC.GUILD_SHOP:
                    return (0, r.jsx)(eG, {
                        guildId: l,
                        productId: s,
                        initialTab: h,
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
                    var g;
                    return (0, r.jsx)(eW, {
                        guildId: l,
                        powerupListingId: null != (g = n.get("powerupId")) ? g : n.get("powerupSkuId"),
                    });
                case eZ.oC.GAME_SERVERS:
                    return (0, r.jsx)(eq, { guildId: l });
                case eZ.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(S.Z, {});
                default:
                    (0, ev.vE)(u);
            }
        if ((0, k.p3)(d, f))
            return (0, r.jsx)(U.Z, {
                guildId: l,
                channelId: u,
            });
        if ((null == i ? void 0 : i.type) === eA.d4z.GUILD_STORE) {
            let e = ey.default.cast(t.params.messageId);
            return (0, r.jsx)(
                eS.Z,
                {
                    channel: i,
                    inputSkuId: e,
                },
                i.id,
            );
        }
        return (0, r.jsx)(S.Z, {});
    },
    eQ = i.memo(function () {
        let { guildId: e, channelId: t } = (0, eo.Z)(),
            { notificationCenterVariant: n } = (0, J.pN)({ location: "Sidebar" }),
            i = (0, p.e7)([eb.Z], () => (null != t ? t : eb.Z.getChannelId(e)));
        if (window.location.pathname.startsWith(eA.Z5c.CHANNEL(eA.STv)))
            return "sidebar" !== n && (0, ed.dL)(em.Z.defaultRoute), (0, r.jsx)($.Z, { includePanelSpacing: !0 });
        if (window.location.pathname.startsWith(eA.Z5c.ME_DMS)) {
            var l;
            let e = eE.Z.getPrivateChannelIds()[0],
                t = null != (l = eb.Z.getChannelId(eA.ME)) ? l : e;
            return (0, ed.dL)(eA.Z5c.CHANNEL(eA.ME, t)), (0, r.jsx)(eN.Z, {});
        }
        return window.location.pathname.startsWith(eA.Z5c.GLOBAL_DISCOVERY) ||
            window.location.pathname.startsWith(eA.Z5c.GUILD_DISCOVERY) ||
            (0, ei.$V)()
            ? (0, r.jsx)(D.Z, {})
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
    eJ = (e) => (0, r.jsx)(eK, eM({}, e)),
    eX = () => (0, r.jsx)(L.Z, {}),
    e$ = (e) => (0, r.jsx)(e0, eM({}, e)),
    e0 = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (i.useEffect(() => {
            null != t &&
                null != n &&
                m.Z.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                    context: "notification_center_navigation",
                });
        }, [t, n]),
        null == t)
            ? (0, r.jsx)(X.Z, {})
            : eJ(e);
    },
    e1 = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(M.Z, { guildId: t.params.guildId }) : null;
    },
    e8 = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(V.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode,
              })
            : null;
    },
    e4 = () => (0, r.jsx)(eP.Z, {}),
    e3 = () => (0, r.jsx)(ex.Z, {}),
    e5 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(ew.AW).includes(t) ? (0, r.jsx)(N.Z, eM({ tab: t }, e)) : (0, r.jsx)(N.Z, eM({}, e));
        };
function e2() {
    return (0, r.jsx)(el.Z, { topLevelRoute: !0 });
}
let e6 = (e) => (0, r.jsx)(v.Z, eM({}, e)),
    e7 = () => (0, r.jsx)(er.Z, {}),
    e9 = () => (0, r.jsx)(en.Z, {}),
    te = () => (0, r.jsx)(F.Z, {}),
    tt = () => (0, r.jsx)(q.Z, {}),
    tn = () => (0, r.jsx)(ee.Z, {}),
    tr = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(g.Z, {
            deepLinkType: eD.jE.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, r.jsx)(er.Z, { initialSection: eA.pJs.ONLINE });
                    case "addFriends":
                        return (0, r.jsx)(er.Z, { initialSection: eA.pJs.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, r.jsx)(er.Z, { initialSection: eA.pJs.PENDING });
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
    (0, b.t)(!0);
    let c = "app view user trigger debugging";
    _.R6.useExperiment({ location: c }, { autoTrackExposure: !1 }), _.R6.trackExposure({ location: c });
    let u = (0, p.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        m = (0, A.T)("ChannelSidebar"),
        g = (0, j.useAppSidebarState)((e) => !e.isOpen) && m;
    i.useLayoutEffect(() => {
        if (m) {
            var e;
            let t = parseInt(null != (e = f.K.get(ej.nT)) ? e : "");
            Number.isNaN(t) && (t = ej.qO),
                (t = Math.min(Math.max(t, ej.li), ej.zx)),
                !m && t <= ej.p8 && (t = ej.qO),
                ti(t);
            let n = (e) => {
                e.metaKey && "b" === e.key && j.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
            };
            return (
                document.addEventListener("keydown", n),
                () => {
                    document.removeEventListener("keydown", n);
                }
            );
        }
    }, [m]),
        i.useLayoutEffect(() => {
            if (g) ti(ej.p8);
            else {
                var e;
                let t = parseInt(null != (e = f.K.get(ej.nT)) ? e : "");
                Number.isNaN(t) && (t = ej.qO), ti(t);
            }
        }, [g]);
    let O = i.useRef(null),
        I = i.useCallback(
            (e, t) => {
                var n;
                ti(e);
                let r = t < ej.li / 3;
                t <= ej.li
                    ? document.body.classList.add(eR.draggingMin)
                    : document.body.classList.remove(eR.draggingMin),
                    t >= ej.zx
                        ? document.body.classList.add(eR.draggingMax)
                        : document.body.classList.remove(eR.draggingMax);
                let i = t - e;
                null == (n = O.current) ||
                    n.style.setProperty("--custom-overdrag", "".concat(1 + Math.min(Math.abs(i / ej.p8), 0.25))),
                    m && (j.useAppSidebarState.setState({ isOpen: !r }), r && ti(ej.p8));
            },
            [m],
        ),
        v = i.useCallback(() => {
            document.body.classList.add(eR.dragging);
        }, []),
        y = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eR.dragging),
                document.body.classList.remove(eR.draggingMin),
                document.body.classList.remove(eR.draggingMax),
                document.body.classList.remove(eR.collapsing),
                null == (t = O.current) || t.style.setProperty("--custom-overdrag", "0px"),
                f.K.set(ej.nT, e),
                eI.default.track(eA.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        S = (0, E.Z)({
            minDimension: ej.li,
            maxDimension: ej.zx,
            resizableDomNodeRef: O,
            onElementResize: I,
            onElementResizeStart: v,
            onElementResizeEnd: y,
            orientation: E.y.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        T = i.useCallback(() => {
            j.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            g && ti(ej.p8);
        }, [g]),
        l)
    )
        return null;
    let N = { className: a()(eR.sidebarList, { [eR.sidebarListRounded]: !t }) };
    return (0, r.jsx)(h.f6W, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)("div", {
                ref: O,
                "data-collapsed": g,
                className: a()(eR.sidebar, e, {
                    [eR.fullWidth]: d.tq,
                    [eR.hidden]: u,
                    [eR.channelListHidden]: s,
                }),
                children: [
                    o &&
                        (0, r.jsx)(H.Z, {
                            className: eR.guilds,
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
                                (0, r.jsx)(h.P3F, {
                                    onClick: T,
                                    "aria-label": "Resize Sidebar",
                                    className: eR.sidebarResizeHandle,
                                    onMouseDown: S,
                                }),
                                (0, r.jsx)(eC.b, {}),
                            ],
                        }),
                ],
            });
        },
    });
}
function ta() {
    var e;
    let t = (0, p.e7)([eO.ZP], () => eO.ZP.hasNotice()),
        n = (0, ef.Ll)(),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eA.Z5c.GUILD_MEMBER_VERIFICATION("")));
            return (
                i.useEffect(
                    () =>
                        ec.Z.addRouteChangeListener((e) => {
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
                        ec.Z.addRouteChangeListener((e) => {
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
                (null == (e = (0, o.LX)(t.pathname, eA.Z5c.GUILD_BOOSTING_MARKETING(eu.Hw.guildId())))
                    ? void 0
                    : e.isExact) === !0
            );
        })(),
        u = (0, p.e7)([Q.Z], () => Q.Z.getIsOpen()),
        { notificationCenterVariant: f } = (0, J.pN)({ location: "Sidebar" }),
        h = et.o.useConfig({ location: "AppView" }).trackFirstPages,
        m = (0, o.TH)();
    i.useEffect(() => {
        h && ep.Z.trackPageView(m.pathname);
    }, [h, m.pathname]);
    let g = (0, o.$B)([
            eA.Z5c.CHANNEL(eA.ME, eu.Hw.channelId()),
            eA.Z5c.CHANNEL(eu.Hw.guildId(), eu.Hw.channelId({ optional: !0 }), ":messageId?"),
        ]),
        _ = (null == g || null == (e = g.params) ? void 0 : e.channelId) === eZ.oC.GUILD_ONBOARDING,
        b = i.useCallback(() => K.Z.openSidebar(), []),
        E = (0, A.T)("AppView"),
        O = (0, j.useAppSidebarState)((e) => !e.isOpen),
        v = (0, p.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        S = (0, p.e7)([Z.Z], () => Z.Z.isFrameActive());
    return (0, r.jsx)("div", {
        className: eR.container,
        children: (0, r.jsx)(R.Z.Provider, {
            value: (null == g ? void 0 : g.params.guildId) === eA.ME || null == g ? void 0 : g.params.guildId,
            children: (0, r.jsxs)("div", {
                className: eR.base,
                "data-fullscreen": v,
                children: [
                    !v && (0, r.jsx)(ek, {}),
                    d.tq ? null : (0, r.jsx)(eT.Z, {}),
                    (0, r.jsxs)("div", {
                        className: eR.content,
                        children: [
                            (0, r.jsx)(T.Z, {}),
                            (0, r.jsx)(tl, {
                                isSidebarOpen: u,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: l || a || s || _,
                                hideSidebar: !u,
                            }),
                            (0, r.jsx)("div", {
                                className: eR.page,
                                "data-collapsed": !!E && O,
                                children: (0, r.jsxs)(I.Z.Provider, {
                                    value: b,
                                    children: [
                                        (0, r.jsxs)(o.rs, {
                                            children: [
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, r.jsx)(o.l_, { to: eA.Z5c.ME }),
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e6,
                                                    impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    },
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.APPLICATION_LIBRARY,
                                                    render: e4,
                                                    impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.APPLICATION_STORE,
                                                    render: e3,
                                                    impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e5(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.COLLECTIBLES_SHOP,
                                                    render: e5(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e5(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.ICYMI,
                                                    render: te,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.MESSAGE_REQUESTS,
                                                    render: tt,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.FAMILY_CENTER,
                                                    render: tn,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.ME_ACTIVITY,
                                                    exact: !0,
                                                    render: e9,
                                                    impressionName: c.ImpressionNames.ACTIVITIES,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.ME,
                                                    exact: !0,
                                                    render: e7,
                                                    impressionName: c.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.ME_DMS,
                                                    exact: !0,
                                                    render: eJ,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                f === J.jP.SIDEBAR &&
                                                    (0, r.jsx)(y.Z, {
                                                        path: eA.Z5c.CHANNEL(
                                                            eA.STv,
                                                            eu.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: e$,
                                                        disableTrack: !0,
                                                    }),
                                                (0, r.jsx)(y.Z, {
                                                    path: [
                                                        eA.Z5c.CHANNEL_THREAD_VIEW(
                                                            eu.Hw.guildId(),
                                                            eu.Hw.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eA.Z5c.CHANNELS_GAME_SHOP(
                                                            eu.Hw.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eA.Z5c.CHANNEL(eA.ME, eu.Hw.channelId()),
                                                        eA.Z5c.CHANNEL(
                                                            eu.Hw.guildId(),
                                                            eu.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eJ,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.GLOBAL_DISCOVERY,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.QUEST_HOME,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.QUEST_HOME_V2,
                                                    render: e2,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.GUILD_DISCOVERY,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.GUILD_MEMBER_VERIFICATION(eu.Hw.guildId()),
                                                    render: e1,
                                                    impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        eu.Hw.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e8,
                                                    impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    },
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.GUILD_FEATURE(":feature", eu.Hw.guildId()),
                                                    exact: !0,
                                                    render: tr,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    path: eA.Z5c.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: tr,
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
