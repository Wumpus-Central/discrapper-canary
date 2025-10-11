n.d(t, { Z: () => e9 }), n(35282), n(388685);
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
    O = n(347469),
    E = n(169382),
    v = n(290297),
    y = n(244317),
    I = n(765717),
    S = n(358221),
    C = n(823748),
    T = n(626421),
    N = n(118379),
    j = n(267161),
    P = n(652515),
    x = n(544978),
    A = n(540059),
    Z = n(591472),
    w = n(351051),
    L = n(724383),
    R = n(135864),
    D = n(372900),
    k = n(6039),
    M = n(637853),
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
    ee = n(270759),
    et = n(509212),
    en = n(121711),
    er = n(982168),
    ei = n(893908),
    el = n(905423),
    ea = n(304445),
    eo = n(893607),
    es = n(703656),
    ec = n(984802),
    eu = n(592125),
    ed = n(896797),
    ep = n(271383),
    ef = n(430824),
    eh = n(944486),
    eg = n(933429),
    em = n(626135),
    eb = n(823379),
    e_ = n(709054),
    eO = n(374005),
    eE = n(409292),
    ev = n(256638),
    ey = n(663701),
    eI = n(697309),
    eS = n(425369),
    eC = n(715702),
    eT = n(981631),
    eN = n(176505),
    ej = n(215023),
    eP = n(290511),
    ex = n(186901),
    eA = n(981028);
function eZ(e) {
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
let ew = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161,
    }),
    eL = () =>
        (0, r.jsx)("div", {
            className: eA.loader,
            children: (0, r.jsx)(h.$jN, {}),
        }),
    eR = (0, u.Un)({
        createPromise: () => n.e("78431").then(n.bind(n, 650788)),
        webpackId: 650788,
        name: "GuildShopPage",
        renderLoader: eL,
    }),
    eD = (0, u.Un)({
        createPromise: () => n.e("77033").then(n.bind(n, 636409)),
        webpackId: 636409,
        name: "SocialLayerStorefront",
        renderLoader: eL,
    }),
    ek = (0, u.Un)({
        createPromise: () => n.e("55942").then(n.bind(n, 464760)),
        webpackId: 464760,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: eL,
    }),
    eM = (0, u.Un)({
        createPromise: () => n.e("12009").then(n.bind(n, 231588)),
        webpackId: 231588,
        name: "GuildHomePage",
        renderLoader: eL,
    }),
    eU = (0, u.Un)({
        createPromise: () => Promise.all([n.e("6850"), n.e("9924")]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: "MemberSafetyPage",
        renderLoader: eL,
    }),
    eG = (0, u.Un)({
        createPromise: () =>
            Promise.all([n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("58227"), n.e("58121")]).then(
                n.bind(n, 603072),
            ),
        webpackId: 603072,
        name: "ChannelsAndRolesPage",
        renderLoader: eL,
    }),
    eB = (0, u.Un)({
        createPromise: () =>
            Promise.all([n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("37709")]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: "GuildOnboardingPage",
        renderLoader: eL,
    }),
    eH = (0, u.Un)({
        createPromise: () => Promise.all([n.e("76692"), n.e("44799")]).then(n.bind(n, 393357)),
        webpackId: 393357,
        name: "GuildPowerupsPage",
        renderLoader: eL,
    }),
    eV = (0, u.Un)({
        createPromise: () => Promise.all([n.e("63639"), n.e("62934")]).then(n.bind(n, 109838)),
        webpackId: 109838,
        name: "GameServerPage",
        renderLoader: eL,
    }),
    eF = (e) => {
        let { match: t } = e,
            n = (0, E.l)(),
            i = (0, p.e7)([eu.Z, eh.Z], () => {
                let e = eh.Z.getChannelId();
                return eu.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o, threadId: c } = t.params,
            u = null != a ? a : void 0;
        null == u && null != t.params.gameShopPageIndex && (u = eN.oC.GAME_SHOP);
        let d = (0, p.e7)([ef.Z], () => ef.Z.getGuild(l)),
            f = (0, p.e7)([ep.ZP], () => (null == l ? null : ep.ZP.getSelfMember(l))),
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
        ((0, er.WF)(u) && (0, er.WF)(c)) || (null != d && (0, es.uL)(eT.Z5c.CHANNEL(d.id, (0, ei.Z)(d))), (0, W.V)());
        let g = (0, P.C4)(l, "channel_renderer");
        if (null != l && null != u && (0, eN.AB)(u))
            switch (u) {
                case eN.oC.ROLE_SUBSCRIPTIONS:
                    return g
                        ? (0, r.jsx)(eR, {
                              guildId: l,
                              initialTab: x.y.GUILD_ROLE_SUBSCRIPTIONS,
                          })
                        : (0, r.jsx)(G.Z, { guildId: l });
                case eN.oC.SERVER_MONETIZATION_ONBOARDING:
                    return (0, r.jsx)(ek, { guildId: l });
                case eN.oC.GAME_SHOP:
                    return (0, r.jsx)(eD, eZ({}, e));
                case eN.oC.GUILD_SHOP:
                    return (0, r.jsx)(eR, {
                        guildId: l,
                        productId: o,
                        initialTab: h,
                    });
                case eN.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: eT.Z5c.CHANNEL(l, eN.oC.MEMBER_SAFETY) });
                case eN.oC.GUILD_HOME:
                    return (0, r.jsx)(eM, { guildId: l });
                case eN.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eG, {
                        guildId: l,
                        selectedSection: eP.l7.BROWSE,
                    });
                case eN.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eB, { guildId: l });
                case eN.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eG, {
                        guildId: l,
                        selectedSection: eP.l7.CUSTOMIZE,
                    });
                case eN.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eU, { guildId: l });
                case eN.oC.GUILD_BOOSTS:
                    var m;
                    return (0, r.jsx)(eH, {
                        guildId: l,
                        powerupListingId: null != (m = n.get("powerupId")) ? m : n.get("powerupSkuId"),
                    });
                case eN.oC.GAME_SERVERS:
                    return (0, r.jsx)(eV, { guildId: l });
                case eN.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(C.Z, {});
                default:
                    (0, eb.vE)(u);
            }
        if ((0, M.p3)(d, f))
            return (0, r.jsx)(U.Z, {
                guildId: l,
                channelId: u,
            });
        if ((null == i ? void 0 : i.type) === eT.d4z.GUILD_STORE) {
            let e = e_.default.cast(t.params.messageId);
            return (0, r.jsx)(
                eE.Z,
                {
                    channel: i,
                    inputSkuId: e,
                },
                i.id,
            );
        }
        return (0, r.jsx)(C.Z, {});
    },
    ez = i.memo(function () {
        let { guildId: e, channelId: t } = (0, el.Z)(),
            { notificationCenterVariant: n } = (0, Q.pN)({ location: "Sidebar" }),
            i = (0, p.e7)([eh.Z], () => (null != t ? t : eh.Z.getChannelId(e)));
        return window.location.pathname.startsWith(eT.Z5c.CHANNEL(eT.STv))
            ? ("sidebar" !== n && (0, es.dL)(ed.Z.defaultRoute), (0, r.jsx)(J.Z, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eT.Z5c.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(eT.Z5c.GUILD_DISCOVERY) ||
                (0, et.$V)()
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
                : (0, r.jsx)(ey.Z, {});
    }),
    eW = (e) => (0, r.jsx)(eF, eZ({}, e)),
    eY = () => (0, r.jsx)(L.Z, {}),
    eq = (e) => (0, r.jsx)(eK, eZ({}, e)),
    eK = (e) => {
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
            : eW(e);
    },
    eQ = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(k.Z, { guildId: t.params.guildId }) : null;
    },
    eX = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(V.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode,
              })
            : null;
    },
    eJ = () => (0, r.jsx)(eS.Z, {}),
    e$ = () => (0, r.jsx)(eC.Z, {}),
    e0 = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, o.parse)(t.location.search);
            return Object.values(ej.AW).includes(n)
                ? (0, r.jsx)(
                      N.Z,
                      eZ(
                          {
                              isFullScreen: e,
                              tab: n,
                          },
                          t,
                      ),
                  )
                : (0, r.jsx)(N.Z, eZ({ isFullScreen: e }, t));
        };
    };
function e1() {
    return (0, r.jsx)(en.Z, { withTopBorder: !0 });
}
let e8 = (e) => (0, r.jsx)(y.Z, eZ({}, e)),
    e4 = () => (0, r.jsx)(ee.Z, {}),
    e3 = () => (0, r.jsx)(Y.Z, {}),
    e5 = () => (0, r.jsx)($.Z, {}),
    e2 = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(m.Z, {
            deepLinkType: ex.jE.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, r.jsx)(ee.Z, { initialSection: eT.pJs.ONLINE });
                    case "addFriends":
                        return (0, r.jsx)(ee.Z, { initialSection: eT.pJs.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, r.jsx)(ee.Z, { initialSection: eT.pJs.PENDING });
                    case "sessionManagement":
                        return (0, r.jsx)(s.l_, { to: eT.Z5c.SETTINGS("sessions") });
                    case "connections":
                        return (0, r.jsx)(s.l_, {
                            to: {
                                pathname: eT.Z5c.SETTINGS("connections"),
                                search: e.location.search,
                            },
                        });
                    case "family-center":
                        return (0, r.jsx)(s.l_, { to: eT.Z5c.FAMILY_CENTER });
                    case "account-standing":
                        return (0, r.jsx)(s.l_, { to: eT.Z5c.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, r.jsx)(s.l_, { to: eT.Z5c.SETTINGS("authorized-apps") });
                    case "open-shop":
                        return (0, r.jsx)(s.l_, { to: eT.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
                    case "editProfile":
                        return (0, r.jsx)(s.l_, { to: { pathname: eT.Z5c.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, r.jsx)(s.l_, { to: { pathname: eT.Z5c.NITRO_HOME } });
                    case "connected-games":
                        return (0, r.jsx)(s.l_, { to: eT.Z5c.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let n = t.params.guildId;
                        return (0, r.jsx)(s.l_, { to: eT.Z5c.POWERUP_STORE(n) });
                    case "boost-settings":
                        return (0, r.jsx)(s.l_, { to: eT.Z5c.SETTINGS("guild-boosting") });
                    default:
                        return (0, r.jsx)(s.l_, { to: eT.Z5c.ME });
                }
            })(e),
        });
    };
function e6(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", "".concat(e, "px"));
}
function e7(e) {
    let {
        hasNotice: t,
        sidebarTheme: n,
        hideSidebar: l,
        hideChannelList: o,
        isSidebarOpen: s,
        isOnFullScreenCollectiblesShopRoute: c,
    } = e;
    (0, _.t)(!0);
    let u = "app view user trigger debugging";
    b.R6.useExperiment({ location: u }, { autoTrackExposure: !1 }), b.R6.trackExposure({ location: u });
    let g = (0, p.e7)([S.Z], () => S.Z.isFullscreenInContext()),
        m = (0, A.T)("ChannelSidebar"),
        E = (0, j.useAppSidebarState)((e) => !e.isOpen) && m;
    i.useLayoutEffect(() => {
        if (m) {
            var e;
            let t = parseInt(null != (e = f.K.get(eI.nT)) ? e : "");
            Number.isNaN(t) && (t = eI.qO),
                (t = Math.min(Math.max(t, eI.li), eI.zx)),
                !m && t <= eI.p8 && (t = eI.qO),
                e6(t);
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
            if (E) e6(eI.p8);
            else {
                var e;
                let t = parseInt(null != (e = f.K.get(eI.nT)) ? e : "");
                Number.isNaN(t) && (t = eI.qO), e6(t);
            }
        }, [E]);
    let v = i.useRef(null),
        y = i.useCallback(
            (e, t) => {
                var n;
                e6(e);
                let r = t < eI.li / 3;
                t <= eI.li
                    ? document.body.classList.add(eA.draggingMin)
                    : document.body.classList.remove(eA.draggingMin),
                    t >= eI.zx
                        ? document.body.classList.add(eA.draggingMax)
                        : document.body.classList.remove(eA.draggingMax);
                let i = t - e;
                null == (n = v.current) ||
                    n.style.setProperty("--custom-overdrag", "".concat(1 + Math.min(Math.abs(i / eI.p8), 0.25))),
                    m && (j.useAppSidebarState.setState({ isOpen: !r }), r && e6(eI.p8));
            },
            [m],
        ),
        I = i.useCallback(() => {
            document.body.classList.add(eA.dragging);
        }, []),
        C = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eA.dragging),
                document.body.classList.remove(eA.draggingMin),
                document.body.classList.remove(eA.draggingMax),
                document.body.classList.remove(eA.collapsing),
                null == (t = v.current) || t.style.setProperty("--custom-overdrag", "0px"),
                f.K.set(eI.nT, e),
                em.default.track(eT.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        T = (0, O.Z)({
            minDimension: eI.li,
            maxDimension: eI.zx,
            resizableDomNodeRef: v,
            onElementResize: y,
            onElementResizeStart: I,
            onElementResizeEnd: C,
            orientation: O.y.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        N = i.useCallback(() => {
            j.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            E && e6(eI.p8);
        }, [E]),
        l)
    )
        return null;
    let P = { className: a()(eA.sidebarList, { [eA.sidebarListRounded]: !t }) };
    return (0, r.jsx)(h.f6W, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)("div", {
                ref: v,
                "data-collapsed": E,
                className: a()(eA.sidebar, e, {
                    [eA.fullWidth]: d.tq,
                    [eA.hidden]: g,
                    [eA.channelListHidden]: o,
                }),
                children: [
                    s &&
                        !c &&
                        (0, r.jsx)(H.Z, {
                            className: eA.guilds,
                            themeOverride: n,
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    "div",
                                    ((t = eZ({}, P)),
                                    (i = i = { children: (0, r.jsx)(ez, {}) }),
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
                                    className: eA.sidebarResizeHandle,
                                    onMouseDown: T,
                                }),
                                (0, r.jsx)(eO.b, {}),
                            ],
                        }),
                ],
            });
        },
    });
}
function e9() {
    var e;
    let t = (0, p.e7)([eg.ZP], () => eg.ZP.hasNotice()),
        n = (0, ec.Ll)(),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eT.Z5c.GUILD_MEMBER_VERIFICATION("")));
            return (
                i.useEffect(
                    () =>
                        ea.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eT.Z5c.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = i.useState(() =>
                window.location.pathname.startsWith(eT.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")),
            );
            return (
                i.useEffect(
                    () =>
                        ea.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eT.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
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
                (null == (e = (0, s.LX)(t.pathname, eT.Z5c.GUILD_BOOSTING_MARKETING(eo.Hw.guildId())))
                    ? void 0
                    : e.isExact) === !0
            );
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (
                (null == (e = (0, s.LX)(t.pathname, eT.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) ? void 0 : e.isExact) === !0
            );
        })(),
        f = (0, p.e7)([K.Z], () => K.Z.getIsOpen()),
        { notificationCenterVariant: h } = (0, Q.pN)({ location: "Sidebar" }),
        g = (0, s.$B)([
            eT.Z5c.CHANNEL(eT.ME, eo.Hw.channelId()),
            eT.Z5c.CHANNEL(eo.Hw.guildId(), eo.Hw.channelId({ optional: !0 }), ":messageId?"),
        ]),
        m = (null == g || null == (e = g.params) ? void 0 : e.channelId) === eN.oC.GUILD_ONBOARDING,
        b = l || a || o || u || m,
        _ = i.useCallback(() => q.Z.openSidebar(), []),
        O = (0, A.T)("AppView"),
        E = (0, j.useAppSidebarState)((e) => !e.isOpen),
        y = (0, p.e7)([S.Z], () => S.Z.isFullscreenInContext()),
        C = (0, p.e7)([Z.Z], () => Z.Z.isFrameActive());
    return (0, r.jsx)("div", {
        className: eA.container,
        children: (0, r.jsx)(D.Z.Provider, {
            value: (null == g ? void 0 : g.params.guildId) === eT.ME || null == g ? void 0 : g.params.guildId,
            children: (0, r.jsxs)("div", {
                className: eA.base,
                "data-fullscreen": y,
                children: [
                    !y && (0, r.jsx)(ew, {}),
                    d.tq ? null : (0, r.jsx)(ev.Z, {}),
                    (0, r.jsxs)("div", {
                        className: eA.content,
                        children: [
                            (0, r.jsx)(T.Z, {}),
                            (0, r.jsx)(e7, {
                                isOnFullScreenCollectiblesShopRoute: u,
                                isSidebarOpen: f,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: b,
                                hideSidebar: !f || u,
                            }),
                            (0, r.jsx)("div", {
                                className: eA.page,
                                "data-collapsed": !!O && E,
                                children: (0, r.jsxs)(v.Z.Provider, {
                                    value: _,
                                    children: [
                                        (0, r.jsxs)(s.rs, {
                                            children: [
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, r.jsx)(s.l_, { to: eT.Z5c.ME }),
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e8,
                                                    impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    },
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.APPLICATION_LIBRARY,
                                                    render: eJ,
                                                    impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.APPLICATION_STORE,
                                                    render: e$,
                                                    impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                    render: e0(!0),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e0(!1),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.COLLECTIBLES_SHOP,
                                                    render: e0(!1),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e0(!1),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.MESSAGE_REQUESTS,
                                                    render: e3,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.FAMILY_CENTER,
                                                    render: e5,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.ME,
                                                    exact: !0,
                                                    render: e4,
                                                    impressionName: c.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                h === Q.jP.SIDEBAR &&
                                                    (0, r.jsx)(I.Z, {
                                                        path: eT.Z5c.CHANNEL(
                                                            eT.STv,
                                                            eo.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: eq,
                                                        disableTrack: !0,
                                                    }),
                                                (0, r.jsx)(I.Z, {
                                                    path: [
                                                        eT.Z5c.CHANNEL_THREAD_VIEW(
                                                            eo.Hw.guildId(),
                                                            eo.Hw.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eT.Z5c.CHANNELS_GAME_SHOP(
                                                            eo.Hw.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eT.Z5c.CHANNEL(eT.ME, eo.Hw.channelId()),
                                                        eT.Z5c.CHANNEL(
                                                            eo.Hw.guildId(),
                                                            eo.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eW,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.GLOBAL_DISCOVERY,
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.QUEST_HOME,
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.QUEST_HOME_V2,
                                                    render: e1,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.GUILD_DISCOVERY,
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.GUILD_MEMBER_VERIFICATION(eo.Hw.guildId()),
                                                    render: eQ,
                                                    impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        eo.Hw.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    },
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.GUILD_FEATURE(":feature", eo.Hw.guildId()),
                                                    exact: !0,
                                                    render: e2,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eT.Z5c.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: e2,
                                                    disableTrack: !0,
                                                }),
                                            ],
                                        }),
                                        C && (0, r.jsx)(w.Z, {}),
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
