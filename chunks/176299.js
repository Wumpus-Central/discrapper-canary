n.d(t, { Z: () => te }), n(35282), n(388685);
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
    y = n(290297),
    v = n(244317),
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
    q = n(745052),
    Y = n(285865),
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
    eu = n(164670),
    ed = n(592125),
    ep = n(896797),
    ef = n(271383),
    eh = n(430824),
    eg = n(944486),
    em = n(933429),
    eb = n(626135),
    e_ = n(823379),
    eO = n(709054),
    eE = n(374005),
    ey = n(409292),
    ev = n(256638),
    eI = n(663701),
    eS = n(697309),
    eC = n(425369),
    eT = n(715702),
    eN = n(981631),
    ej = n(176505),
    eP = n(215023),
    ex = n(290511),
    eA = n(186901),
    eZ = n(981028);
function ew(e) {
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
let eL = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161,
    }),
    eR = () =>
        (0, r.jsx)("div", {
            className: eZ.loader,
            children: (0, r.jsx)(h.$jN, {}),
        }),
    eD = (0, u.Un)({
        createPromise: () => n.e("78431").then(n.bind(n, 650788)),
        webpackId: 650788,
        name: "GuildShopPage",
        renderLoader: eR,
    }),
    ek = (0, u.Un)({
        createPromise: () => n.e("77033").then(n.bind(n, 636409)),
        webpackId: 636409,
        name: "SocialLayerStorefront",
        renderLoader: eR,
    }),
    eM = (0, u.Un)({
        createPromise: () => n.e("55942").then(n.bind(n, 464760)),
        webpackId: 464760,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: eR,
    }),
    eU = (0, u.Un)({
        createPromise: () => n.e("12009").then(n.bind(n, 231588)),
        webpackId: 231588,
        name: "GuildHomePage",
        renderLoader: eR,
    }),
    eG = (0, u.Un)({
        createPromise: () => Promise.all([n.e("58175"), n.e("6850"), n.e("9924")]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: "MemberSafetyPage",
        renderLoader: eR,
    }),
    eB = (0, u.Un)({
        createPromise: () =>
            Promise.all([n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("58227"), n.e("58121")]).then(
                n.bind(n, 603072),
            ),
        webpackId: 603072,
        name: "ChannelsAndRolesPage",
        renderLoader: eR,
    }),
    eH = (0, u.Un)({
        createPromise: () =>
            Promise.all([n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("37709")]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: "GuildOnboardingPage",
        renderLoader: eR,
    }),
    eV = (0, u.Un)({
        createPromise: () => Promise.all([n.e("76692"), n.e("44799")]).then(n.bind(n, 393357)),
        webpackId: 393357,
        name: "GuildPowerupsPage",
        renderLoader: eR,
    }),
    eF = (0, u.Un)({
        createPromise: () => Promise.all([n.e("63639"), n.e("62934")]).then(n.bind(n, 109838)),
        webpackId: 109838,
        name: "GameServerPage",
        renderLoader: eR,
    }),
    ez = (e) => {
        let { match: t } = e,
            n = (0, E.l)(),
            i = (0, p.e7)([ed.Z, eg.Z], () => {
                let e = eg.Z.getChannelId();
                return ed.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o, threadId: c } = t.params,
            u = (0, p.e7)([eh.Z], () => eh.Z.getGuild(l)),
            d = (0, p.e7)([ef.ZP], () => (null == l ? null : ef.ZP.getSelfMember(l))),
            f = (0, p.e7)([F.Z], () => {
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
        ((0, er.WF)(a) && (0, er.WF)(c)) || (null != u && (0, es.uL)(eN.Z5c.CHANNEL(u.id, (0, ei.Z)(u))), (0, W.V)());
        let h = (0, P.C4)(l, "channel_renderer");
        if (null != l && null != a && (0, ej.AB)(a))
            switch (a) {
                case ej.oC.ROLE_SUBSCRIPTIONS:
                    return h
                        ? (0, r.jsx)(eD, {
                              guildId: l,
                              initialTab: x.y.GUILD_ROLE_SUBSCRIPTIONS,
                          })
                        : (0, r.jsx)(G.Z, { guildId: l });
                case ej.oC.SERVER_MONETIZATION_ONBOARDING:
                    return (0, r.jsx)(eM, { guildId: l });
                case ej.oC.GUILD_SHOP:
                    return (0, eu.wK)(u)
                        ? (0, r.jsx)(ek, { guildId: l })
                        : (0, r.jsx)(eD, {
                              guildId: l,
                              productId: o,
                              initialTab: f,
                          });
                case ej.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: eN.Z5c.CHANNEL(l, ej.oC.MEMBER_SAFETY) });
                case ej.oC.GUILD_HOME:
                    return (0, r.jsx)(eU, { guildId: l });
                case ej.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eB, {
                        guildId: l,
                        selectedSection: ex.l7.BROWSE,
                    });
                case ej.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eH, { guildId: l });
                case ej.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eB, {
                        guildId: l,
                        selectedSection: ex.l7.CUSTOMIZE,
                    });
                case ej.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eG, { guildId: l });
                case ej.oC.GUILD_BOOSTS:
                    var g;
                    return (0, r.jsx)(eV, {
                        guildId: l,
                        powerupListingId: null != (g = n.get("powerupId")) ? g : n.get("powerupSkuId"),
                    });
                case ej.oC.GAME_SERVERS:
                    return (0, r.jsx)(eF, { guildId: l });
                case ej.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(C.Z, {});
                default:
                    (0, e_.vE)(a);
            }
        if ((0, M.p3)(u, d))
            return (0, r.jsx)(U.Z, {
                guildId: l,
                channelId: a,
            });
        if ((null == i ? void 0 : i.type) === eN.d4z.GUILD_STORE) {
            let e = eO.default.cast(t.params.messageId);
            return (0, r.jsx)(
                ey.Z,
                {
                    channel: i,
                    inputSkuId: e,
                },
                i.id,
            );
        }
        return (0, r.jsx)(C.Z, {});
    },
    eW = i.memo(function () {
        let { guildId: e, channelId: t } = (0, el.Z)(),
            { notificationCenterVariant: n } = (0, Q.pN)({ location: "Sidebar" }),
            i = (0, p.e7)([eg.Z], () => (null != t ? t : eg.Z.getChannelId(e)));
        return window.location.pathname.startsWith(eN.Z5c.CHANNEL(eN.STv))
            ? ("sidebar" !== n && (0, es.dL)(ep.Z.defaultRoute), (0, r.jsx)(J.Z, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eN.Z5c.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(eN.Z5c.GUILD_DISCOVERY) ||
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
                : (0, r.jsx)(eI.Z, {});
    }),
    eq = (e) => (0, r.jsx)(ez, ew({}, e)),
    eY = () => (0, r.jsx)(L.Z, {}),
    eK = (e) => (0, r.jsx)(eQ, ew({}, e)),
    eQ = (e) => {
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
            : eq(e);
    },
    eX = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(k.Z, { guildId: t.params.guildId }) : null;
    },
    eJ = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(V.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode,
              })
            : null;
    },
    e$ = () => (0, r.jsx)(eC.Z, {}),
    e0 = () => (0, r.jsx)(eT.Z, {}),
    e1 = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, o.parse)(t.location.search);
            return Object.values(eP.AW).includes(n)
                ? (0, r.jsx)(
                      N.Z,
                      ew(
                          {
                              isFullScreen: e,
                              tab: n,
                          },
                          t,
                      ),
                  )
                : (0, r.jsx)(N.Z, ew({ isFullScreen: e }, t));
        };
    };
function e8() {
    return (0, r.jsx)(en.Z, { withTopBorder: !0 });
}
let e4 = (e) => (0, r.jsx)(v.Z, ew({}, e)),
    e3 = () => (0, r.jsx)(ee.Z, {}),
    e5 = () => (0, r.jsx)(q.Z, {}),
    e2 = () => (0, r.jsx)($.Z, {}),
    e6 = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(m.Z, {
            deepLinkType: eA.jE.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, r.jsx)(ee.Z, { initialSection: eN.pJs.ONLINE });
                    case "addFriends":
                        return (0, r.jsx)(ee.Z, { initialSection: eN.pJs.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, r.jsx)(ee.Z, { initialSection: eN.pJs.PENDING });
                    case "sessionManagement":
                        return (0, r.jsx)(s.l_, { to: eN.Z5c.SETTINGS("sessions") });
                    case "connections":
                        return (0, r.jsx)(s.l_, {
                            to: {
                                pathname: eN.Z5c.SETTINGS("connections"),
                                search: e.location.search,
                            },
                        });
                    case "family-center":
                        return (0, r.jsx)(s.l_, { to: eN.Z5c.FAMILY_CENTER });
                    case "account-standing":
                        return (0, r.jsx)(s.l_, { to: eN.Z5c.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, r.jsx)(s.l_, { to: eN.Z5c.SETTINGS("authorized-apps") });
                    case "open-shop":
                        return (0, r.jsx)(s.l_, { to: eN.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
                    case "editProfile":
                        return (0, r.jsx)(s.l_, { to: { pathname: eN.Z5c.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, r.jsx)(s.l_, { to: { pathname: eN.Z5c.NITRO_HOME } });
                    case "connected-games":
                        return (0, r.jsx)(s.l_, { to: eN.Z5c.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let n = t.params.guildId;
                        return (0, r.jsx)(s.l_, { to: eN.Z5c.POWERUP_STORE(n) });
                    case "boost-settings":
                        return (0, r.jsx)(s.l_, { to: eN.Z5c.SETTINGS("guild-boosting") });
                    default:
                        return (0, r.jsx)(s.l_, { to: eN.Z5c.ME });
                }
            })(e),
        });
    };
function e7(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", "".concat(e, "px"));
}
function e9(e) {
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
            let t = parseInt(null != (e = f.K.get(eS.nT)) ? e : "");
            Number.isNaN(t) && (t = eS.qO),
                (t = Math.min(Math.max(t, eS.li), eS.zx)),
                !m && t <= eS.p8 && (t = eS.qO),
                e7(t);
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
            if (E) e7(eS.p8);
            else {
                var e;
                let t = parseInt(null != (e = f.K.get(eS.nT)) ? e : "");
                Number.isNaN(t) && (t = eS.qO), e7(t);
            }
        }, [E]);
    let y = i.useRef(null),
        v = i.useCallback(
            (e, t) => {
                var n;
                e7(e);
                let r = t < eS.li / 3;
                t <= eS.li
                    ? document.body.classList.add(eZ.draggingMin)
                    : document.body.classList.remove(eZ.draggingMin),
                    t >= eS.zx
                        ? document.body.classList.add(eZ.draggingMax)
                        : document.body.classList.remove(eZ.draggingMax);
                let i = t - e;
                null == (n = y.current) ||
                    n.style.setProperty("--custom-overdrag", "".concat(1 + Math.min(Math.abs(i / eS.p8), 0.25))),
                    m && (j.useAppSidebarState.setState({ isOpen: !r }), r && e7(eS.p8));
            },
            [m],
        ),
        I = i.useCallback(() => {
            document.body.classList.add(eZ.dragging);
        }, []),
        C = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eZ.dragging),
                document.body.classList.remove(eZ.draggingMin),
                document.body.classList.remove(eZ.draggingMax),
                document.body.classList.remove(eZ.collapsing),
                null == (t = y.current) || t.style.setProperty("--custom-overdrag", "0px"),
                f.K.set(eS.nT, e),
                eb.default.track(eN.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        T = (0, O.Z)({
            minDimension: eS.li,
            maxDimension: eS.zx,
            resizableDomNodeRef: y,
            onElementResize: v,
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
            E && e7(eS.p8);
        }, [E]),
        l)
    )
        return null;
    let P = { className: a()(eZ.sidebarList, { [eZ.sidebarListRounded]: !t }) };
    return (0, r.jsx)(h.f6W, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)("div", {
                ref: y,
                "data-collapsed": E,
                className: a()(eZ.sidebar, e, {
                    [eZ.fullWidth]: d.tq,
                    [eZ.hidden]: g,
                    [eZ.channelListHidden]: o,
                }),
                children: [
                    s &&
                        !c &&
                        (0, r.jsx)(H.Z, {
                            className: eZ.guilds,
                            themeOverride: n,
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    "div",
                                    ((t = ew({}, P)),
                                    (i = i = { children: (0, r.jsx)(eW, {}) }),
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
                                    className: eZ.sidebarResizeHandle,
                                    onMouseDown: T,
                                }),
                                (0, r.jsx)(eE.b, {}),
                            ],
                        }),
                ],
            });
        },
    });
}
function te() {
    var e;
    let t = (0, p.e7)([em.ZP], () => em.ZP.hasNotice()),
        n = (0, ec.Ll)(),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eN.Z5c.GUILD_MEMBER_VERIFICATION("")));
            return (
                i.useEffect(
                    () =>
                        ea.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eN.Z5c.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = i.useState(() =>
                window.location.pathname.startsWith(eN.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")),
            );
            return (
                i.useEffect(
                    () =>
                        ea.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eN.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
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
                (null == (e = (0, s.LX)(t.pathname, eN.Z5c.GUILD_BOOSTING_MARKETING(eo.Hw.guildId())))
                    ? void 0
                    : e.isExact) === !0
            );
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (
                (null == (e = (0, s.LX)(t.pathname, eN.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) ? void 0 : e.isExact) === !0
            );
        })(),
        f = (0, p.e7)([K.Z], () => K.Z.getIsOpen()),
        { notificationCenterVariant: h } = (0, Q.pN)({ location: "Sidebar" }),
        g = (0, s.$B)([
            eN.Z5c.CHANNEL(eN.ME, eo.Hw.channelId()),
            eN.Z5c.CHANNEL(eo.Hw.guildId(), eo.Hw.channelId({ optional: !0 }), ":messageId?"),
        ]),
        m = (null == g || null == (e = g.params) ? void 0 : e.channelId) === ej.oC.GUILD_ONBOARDING,
        b = l || a || o || u || m,
        _ = i.useCallback(() => Y.Z.openSidebar(), []),
        O = (0, A.T)("AppView"),
        E = (0, j.useAppSidebarState)((e) => !e.isOpen),
        v = (0, p.e7)([S.Z], () => S.Z.isFullscreenInContext()),
        C = (0, p.e7)([Z.Z], () => Z.Z.isFrameActive());
    return (0, r.jsx)("div", {
        className: eZ.container,
        children: (0, r.jsx)(D.Z.Provider, {
            value: (null == g ? void 0 : g.params.guildId) === eN.ME || null == g ? void 0 : g.params.guildId,
            children: (0, r.jsxs)("div", {
                className: eZ.base,
                "data-fullscreen": v,
                children: [
                    !v && (0, r.jsx)(eL, {}),
                    d.tq ? null : (0, r.jsx)(ev.Z, {}),
                    (0, r.jsxs)("div", {
                        className: eZ.content,
                        children: [
                            (0, r.jsx)(T.Z, {}),
                            (0, r.jsx)(e9, {
                                isOnFullScreenCollectiblesShopRoute: u,
                                isSidebarOpen: f,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: b,
                                hideSidebar: !f || u,
                            }),
                            (0, r.jsx)("div", {
                                className: eZ.page,
                                "data-collapsed": !!O && E,
                                children: (0, r.jsxs)(y.Z.Provider, {
                                    value: _,
                                    children: [
                                        (0, r.jsxs)(s.rs, {
                                            children: [
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, r.jsx)(s.l_, { to: eN.Z5c.ME }),
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e4,
                                                    impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    },
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.APPLICATION_LIBRARY,
                                                    render: e$,
                                                    impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.APPLICATION_STORE,
                                                    render: e0,
                                                    impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                    render: e1(!0),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e1(!1),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.COLLECTIBLES_SHOP,
                                                    render: e1(!1),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e1(!1),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.MESSAGE_REQUESTS,
                                                    render: e5,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.FAMILY_CENTER,
                                                    render: e2,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.ME,
                                                    exact: !0,
                                                    render: e3,
                                                    impressionName: c.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                h === Q.jP.SIDEBAR &&
                                                    (0, r.jsx)(I.Z, {
                                                        path: eN.Z5c.CHANNEL(
                                                            eN.STv,
                                                            eo.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: eK,
                                                        disableTrack: !0,
                                                    }),
                                                (0, r.jsx)(I.Z, {
                                                    path: [
                                                        eN.Z5c.CHANNEL_THREAD_VIEW(
                                                            eo.Hw.guildId(),
                                                            eo.Hw.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eN.Z5c.CHANNEL(eN.ME, eo.Hw.channelId()),
                                                        eN.Z5c.CHANNEL(
                                                            eo.Hw.guildId(),
                                                            eo.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eq,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.GLOBAL_DISCOVERY,
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.QUEST_HOME,
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.QUEST_HOME_V2,
                                                    render: e8,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.GUILD_DISCOVERY,
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.GUILD_MEMBER_VERIFICATION(eo.Hw.guildId()),
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        eo.Hw.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: eJ,
                                                    impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    },
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.GUILD_FEATURE(":feature", eo.Hw.guildId()),
                                                    exact: !0,
                                                    render: e6,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eN.Z5c.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: e6,
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
