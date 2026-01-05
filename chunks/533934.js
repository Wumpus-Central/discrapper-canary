n.d(t, { Z: () => tn }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    s = n(828700),
    c = n(990547),
    u = n(608787),
    d = n(873546),
    p = n(442837),
    f = n(433517),
    g = n(481060),
    m = n(904245),
    h = n(409292),
    b = n(697309),
    _ = n(425369),
    E = n(715702),
    O = n(773244),
    v = n(711237),
    y = n(532835),
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
    ea = n(270759),
    eo = n(755458),
    es = n(791250),
    ec = n(862657),
    eu = n(121711),
    ed = n(982168),
    ep = n(893908),
    ef = n(905423),
    eg = n(304445),
    em = n(893607),
    eh = n(703656),
    eb = n(984802),
    e_ = n(592125),
    eE = n(896797),
    eO = n(271383),
    ev = n(430824),
    ey = n(944486),
    eI = n(933429),
    eC = n(626135),
    eS = n(823379),
    eT = n(709054),
    eN = n(450876),
    ej = n(981631),
    eP = n(176505),
    ex = n(215023),
    eA = n(290511),
    eZ = n(186901),
    ew = n(566888);
function eL(e) {
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
let eR = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161,
    }),
    eD = () =>
        (0, r.jsx)("div", {
            className: ew.loader,
            children: (0, r.jsx)(g.$jN, {}),
        }),
    eM = (0, u.Un)({
        createPromise: () => n.e("78431").then(n.bind(n, 650788)),
        webpackId: 650788,
        name: "GuildShopPage",
        renderLoader: eD,
    }),
    ek = (0, u.Un)({
        createPromise: () => n.e("77033").then(n.bind(n, 457489)),
        webpackId: 457489,
        name: "SocialLayerStorefront",
        renderLoader: eD,
    }),
    eU = (0, u.Un)({
        createPromise: () => n.e("55942").then(n.bind(n, 464760)),
        webpackId: 464760,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: eD,
    }),
    eG = (0, u.Un)({
        createPromise: () => n.e("12009").then(n.bind(n, 231588)),
        webpackId: 231588,
        name: "GuildHomePage",
        renderLoader: eD,
    }),
    eB = (0, u.Un)({
        createPromise: () => Promise.all([n.e("6850"), n.e("9924")]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: "MemberSafetyPage",
        renderLoader: eD,
    }),
    eH = (0, u.Un)({
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
        renderLoader: eD,
    }),
    eV = (0, u.Un)({
        createPromise: () =>
            Promise.all([n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("26494"), n.e("37709")]).then(
                n.bind(n, 599263),
            ),
        webpackId: 599263,
        name: "GuildOnboardingPage",
        renderLoader: eD,
    }),
    eF = (0, u.Un)({
        createPromise: () => Promise.all([n.e("76692"), n.e("44799")]).then(n.bind(n, 393357)),
        webpackId: 393357,
        name: "GuildPowerupsPage",
        renderLoader: eD,
    }),
    ez = (0, u.Un)({
        createPromise: () => Promise.all([n.e("67365"), n.e("62934")]).then(n.bind(n, 109838)),
        webpackId: 109838,
        name: "GameServerPage",
        renderLoader: eD,
    }),
    eY = (e) => {
        var t, n;
        let { match: i } = e,
            l = (0, C.l)(),
            a = (0, p.e7)([e_.Z, ey.Z], () => {
                let e = ey.Z.getChannelId();
                return e_.Z.getChannel(e);
            }),
            { guildId: o, channelId: c, messageId: u, threadId: d } = i.params,
            f = null != c ? c : void 0;
        null == f && null != i.params.gameShopPageIndex && (f = eP.oC.GAME_SHOP);
        let g = (0, p.e7)([ev.Z], () => ev.Z.getGuild(o)),
            m = (0, p.e7)([eO.ZP], () => (null == o ? null : eO.ZP.getSelfMember(o))),
            b = (0, eo.BU)(o, "ChannelRenderer"),
            _ = (null == g || null == (t = g.features) ? void 0 : t.has(ej.GuildFeatures.GAME_SERVERS)) === !0,
            E = (0, p.e7)([K.Z], () => {
                if (null == o) return;
                let e = K.Z.getData(o);
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
        ((0, ed.WF)(f) && (0, ed.WF)(d)) || (null != g && (0, eh.uL)(ej.Z5c.CHANNEL(g.id, (0, ep.Z)(g))), (0, J.V)());
        let O = (0, w.C4)(o, "channel_renderer");
        if (null != o && null != f && (0, eP.AB)(f))
            switch (f) {
                case eP.oC.ROLE_SUBSCRIPTIONS:
                    return O
                        ? (0, r.jsx)(eM, {
                              guildId: o,
                              initialTab: L.y.GUILD_ROLE_SUBSCRIPTIONS,
                          })
                        : (0, r.jsx)(F.Z, { guildId: o });
                case eP.oC.SERVER_MONETIZATION_ONBOARDING:
                    return (0, r.jsx)(eU, { guildId: o });
                case eP.oC.GAME_SHOP:
                    return (0, r.jsx)(ek, eL({}, e));
                case eP.oC.GUILD_SHOP:
                    return (0, r.jsx)(eM, {
                        guildId: o,
                        productId: u,
                        initialTab: E,
                    });
                case eP.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: ej.Z5c.CHANNEL(o, eP.oC.MEMBER_SAFETY) });
                case eP.oC.GUILD_HOME:
                    return (0, r.jsx)(eG, { guildId: o });
                case eP.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eH, {
                        guildId: o,
                        selectedSection: eA.l7.BROWSE,
                    });
                case eP.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eV, { guildId: o });
                case eP.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eH, {
                        guildId: o,
                        selectedSection: eA.l7.CUSTOMIZE,
                    });
                case eP.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eB, { guildId: o });
                case eP.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(eF, {
                        guildId: o,
                        powerupListingId: null != (n = l.get("powerupId")) ? n : l.get("powerupSkuId"),
                    });
                case eP.oC.GAME_SERVERS:
                    if (!b || !_) return (0, r.jsx)(s.l_, { to: ej.Z5c.CHANNEL(o) });
                    return (0, r.jsx)(ez, { guildId: o });
                case eP.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(P.Z, {});
                default:
                    (0, eS.vE)(f);
            }
        if ((0, H.p3)(g, m))
            return (0, r.jsx)(V.Z, {
                guildId: o,
                channelId: f,
            });
        if ((null == a ? void 0 : a.type) === ej.d4z.GUILD_STORE) {
            let e = eT.default.cast(i.params.messageId);
            return (0, r.jsx)(
                h.Z,
                {
                    channel: a,
                    inputSkuId: e,
                },
                a.id,
            );
        }
        return (0, r.jsx)(P.Z, {});
    },
    eW = i.memo(function () {
        let { guildId: e, channelId: t } = (0, ef.Z)(),
            { notificationCenterVariant: n } = (0, en.pN)({ location: "Sidebar" }),
            i = (0, p.e7)([ey.Z], () => (null != t ? t : ey.Z.getChannelId(e)));
        return window.location.pathname.startsWith(ej.Z5c.CHANNEL(ej.STv))
            ? ("sidebar" !== n && (0, eh.dL)(eE.Z.defaultRoute), (0, r.jsx)(ei.Z, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(ej.Z5c.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(ej.Z5c.GUILD_DISCOVERY) ||
                (0, ec.$V)()
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
                : (0, r.jsx)(es.Z, {});
    }),
    eq = (e) => (0, r.jsx)(eY, eL({}, e)),
    eK = () => (0, r.jsx)(k.Z, {}),
    eQ = (e) => (0, r.jsx)(eJ, eL({}, e)),
    eJ = (e) => {
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
            ? (0, r.jsx)(er.Z, {})
            : eq(e);
    },
    eX = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(B.Z, { guildId: t.params.guildId }) : null;
    },
    e$ = (e) => {
        let { match: t } = e;
        return (0, eh.uL)(ej.Z5c.ME), (0, W.Z)(t.params.inviteCode), null;
    },
    e0 = () => (0, r.jsx)(_.Z, {}),
    e1 = () => (0, r.jsx)(E.Z, {}),
    e4 = () =>
        function (e) {
            let { tab: t } = (0, o.parse)(e.location.search);
            return Object.values(ex.AW).includes(t) ? (0, r.jsx)(A.Z, eL({ tab: t }, e)) : (0, r.jsx)(A.Z, eL({}, e));
        };
function e3() {
    return (0, r.jsx)(eu.Z, { topLevelRoute: !0 });
}
let e8 = (e) => (0, r.jsx)(T.Z, eL({}, e)),
    e5 = () => (0, r.jsx)(ea.Z, {}),
    e2 = () => (0, r.jsx)(q.Z, {}),
    e7 = () => (0, r.jsx)(X.Z, {}),
    e9 = () => (0, r.jsx)(el.Z, {}),
    e6 = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(O.Z, {
            deepLinkType: eZ.jE.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, r.jsx)(ea.Z, { initialSection: ej.pJs.ONLINE });
                    case "addFriends":
                        return (0, r.jsx)(ea.Z, { initialSection: ej.pJs.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, r.jsx)(ea.Z, { initialSection: ej.pJs.PENDING });
                    case "sessionManagement":
                        return (0, r.jsx)(s.l_, { to: ej.Z5c.SETTINGS("sessions") });
                    case "connections":
                        return (0, r.jsx)(s.l_, {
                            to: {
                                pathname: ej.Z5c.SETTINGS("connections"),
                                search: e.location.search,
                            },
                        });
                    case "family-center":
                        return (0, r.jsx)(s.l_, { to: ej.Z5c.FAMILY_CENTER });
                    case "account-standing":
                        return (0, r.jsx)(s.l_, { to: ej.Z5c.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, r.jsx)(s.l_, { to: ej.Z5c.SETTINGS("authorized-apps") });
                    case "open-shop":
                        let { tab: n } = (0, o.parse)(e.location.search);
                        if (Object.values(ex.AW).includes(n))
                            return (0, r.jsx)(s.l_, { to: ej.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, r.jsx)(s.l_, { to: ej.Z5c.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, r.jsx)(s.l_, { to: { pathname: ej.Z5c.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, r.jsx)(s.l_, { to: { pathname: ej.Z5c.NITRO_HOME } });
                    case "connected-games":
                        return (0, r.jsx)(s.l_, { to: ej.Z5c.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let i = t.params.guildId;
                        return (0, r.jsx)(s.l_, { to: ej.Z5c.POWERUP_STORE(i) });
                    case "boost-settings":
                        return (0, r.jsx)(s.l_, { to: ej.Z5c.SETTINGS("guild-boosting") });
                    default:
                        return (0, r.jsx)(s.l_, { to: ej.Z5c.ME });
                }
            })(e),
        });
    };
function te(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", "".concat(e, "px"));
}
function tt(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: o, isSidebarOpen: s } = e;
    (0, y.t)(!0);
    let c = "app view user trigger debugging";
    v.R6.useExperiment({ location: c }, { autoTrackExposure: !1 }), v.R6.trackExposure({ location: c });
    let u = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        m = (0, R.T)("ChannelSidebar"),
        h = (0, Z.useAppSidebarState)((e) => !e.isOpen) && m;
    i.useLayoutEffect(() => {
        if (m) {
            var e;
            let t = parseInt(null != (e = f.K.get(b.nT)) ? e : "");
            Number.isNaN(t) && (t = b.qO),
                (t = Math.min(Math.max(t, b.li), b.zx)),
                !m && t <= b.p8 && (t = b.qO),
                te(t);
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
    }, [m]),
        i.useLayoutEffect(() => {
            if (h) te(b.p8);
            else {
                var e;
                let t = parseInt(null != (e = f.K.get(b.nT)) ? e : "");
                Number.isNaN(t) && (t = b.qO), te(t);
            }
        }, [h]);
    let _ = i.useRef(null),
        E = i.useCallback(
            (e, t) => {
                var n;
                te(e);
                let r = t < b.li / 3;
                t <= b.li
                    ? document.body.classList.add(ew.draggingMin)
                    : document.body.classList.remove(ew.draggingMin),
                    t >= b.zx
                        ? document.body.classList.add(ew.draggingMax)
                        : document.body.classList.remove(ew.draggingMax);
                let i = t - e;
                null == (n = _.current) ||
                    n.style.setProperty("--custom-overdrag", "".concat(1 + Math.min(Math.abs(i / b.p8), 0.25))),
                    m && (Z.useAppSidebarState.setState({ isOpen: !r }), r && te(b.p8));
            },
            [m],
        ),
        O = i.useCallback(() => {
            document.body.classList.add(ew.dragging);
        }, []),
        C = i.useCallback((e) => {
            var t;
            document.body.classList.remove(ew.dragging),
                document.body.classList.remove(ew.draggingMin),
                document.body.classList.remove(ew.draggingMax),
                document.body.classList.remove(ew.collapsing),
                null == (t = _.current) || t.style.setProperty("--custom-overdrag", "0px"),
                f.K.set(b.nT, e),
                eC.default.track(ej.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        S = (0, I.Z)({
            minDimension: b.li,
            maxDimension: b.zx,
            resizableDomNodeRef: _,
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
            h && te(b.p8);
        }, [h]),
        l)
    )
        return null;
    let N = { className: a()(ew.sidebarList, { [ew.sidebarListRounded]: !t }) };
    return (0, r.jsx)(g.f6W, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)("div", {
                ref: _,
                "data-collapsed": h,
                className: a()(ew.sidebar, e, {
                    [ew.fullWidth]: d.tq,
                    [ew.hidden]: u,
                    [ew.channelListHidden]: o,
                }),
                children: [
                    s &&
                        (0, r.jsx)(Y.Z, {
                            className: ew.guilds,
                            themeOverride: n,
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    "div",
                                    ((t = eL({}, N)),
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
                                (0, r.jsx)(g.P3F, {
                                    onClick: T,
                                    "aria-label": "Resize Sidebar",
                                    className: ew.sidebarResizeHandle,
                                    onMouseDown: S,
                                }),
                                (0, r.jsx)(eN.b, {}),
                            ],
                        }),
                ],
            });
        },
    });
}
function tn() {
    var e;
    let t = (0, p.e7)([eI.ZP], () => eI.ZP.hasNotice()),
        n = (0, eb.Ll)(),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(ej.Z5c.GUILD_MEMBER_VERIFICATION("")));
            return (
                i.useEffect(
                    () =>
                        eg.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ej.Z5c.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        a = (function () {
            var e;
            let t = (0, s.TH)();
            return (
                (null == (e = (0, s.LX)(t.pathname, ej.Z5c.GUILD_BOOSTING_MARKETING(em.Hw.guildId())))
                    ? void 0
                    : e.isExact) === !0
            );
        })(),
        o = (0, p.e7)([ee.Z], () => ee.Z.getIsOpen()),
        { notificationCenterVariant: u } = (0, en.pN)({ location: "Sidebar" }),
        f = (0, s.$B)([
            ej.Z5c.CHANNEL(ej.ME, em.Hw.channelId()),
            ej.Z5c.CHANNEL(em.Hw.guildId(), em.Hw.channelId({ optional: !0 }), ":messageId?"),
        ]),
        g = (null == f || null == (e = f.params) ? void 0 : e.channelId) === eP.oC.GUILD_ONBOARDING,
        m = i.useCallback(() => $.Z.openSidebar(), []),
        h = (0, R.T)("AppView"),
        b = (0, Z.useAppSidebarState)((e) => !e.isOpen),
        _ = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()),
        E = (0, p.e7)([D.Z], () => D.Z.isFrameActive());
    return (0, r.jsx)("div", {
        className: ew.container,
        children: (0, r.jsx)(G.Z.Provider, {
            value: (null == f ? void 0 : f.params.guildId) === ej.ME || null == f ? void 0 : f.params.guildId,
            children: (0, r.jsxs)("div", {
                className: ew.base,
                "data-fullscreen": _,
                children: [
                    !_ && (0, r.jsx)(eR, {}),
                    d.tq ? null : (0, r.jsx)(et.Z, {}),
                    (0, r.jsxs)("div", {
                        className: ew.content,
                        children: [
                            (0, r.jsx)(x.Z, {}),
                            (0, r.jsx)(tt, {
                                isSidebarOpen: o,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: l || a || g,
                                hideSidebar: !o,
                            }),
                            (0, r.jsx)("div", {
                                className: ew.page,
                                "data-collapsed": !!h && b,
                                children: (0, r.jsxs)(S.Z.Provider, {
                                    value: m,
                                    children: [
                                        (0, r.jsxs)(s.rs, {
                                            children: [
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, r.jsx)(s.l_, { to: ej.Z5c.ME }),
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e8,
                                                    impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    },
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.APPLICATION_LIBRARY,
                                                    render: e0,
                                                    impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.APPLICATION_STORE,
                                                    render: e1,
                                                    impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e4(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.COLLECTIBLES_SHOP,
                                                    render: e4(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e4(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.ICYMI,
                                                    render: e2,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.MESSAGE_REQUESTS,
                                                    render: e7,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.FAMILY_CENTER,
                                                    render: e9,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.ME,
                                                    exact: !0,
                                                    render: e5,
                                                    impressionName: c.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                u === en.jP.SIDEBAR &&
                                                    (0, r.jsx)(N.Z, {
                                                        path: ej.Z5c.CHANNEL(
                                                            ej.STv,
                                                            em.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: eQ,
                                                        disableTrack: !0,
                                                    }),
                                                (0, r.jsx)(N.Z, {
                                                    path: [
                                                        ej.Z5c.CHANNEL_THREAD_VIEW(
                                                            em.Hw.guildId(),
                                                            em.Hw.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        ej.Z5c.CHANNELS_GAME_SHOP(
                                                            em.Hw.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        ej.Z5c.CHANNEL(ej.ME, em.Hw.channelId()),
                                                        ej.Z5c.CHANNEL(
                                                            em.Hw.guildId(),
                                                            em.Hw.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eq,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.GLOBAL_DISCOVERY,
                                                    render: eK,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eK,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: eK,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.QUEST_HOME,
                                                    render: eK,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.QUEST_HOME_V2,
                                                    render: e3,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.GUILD_DISCOVERY,
                                                    render: eK,
                                                    impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.GUILD_MEMBER_VERIFICATION(em.Hw.guildId()),
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        em.Hw.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e$,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.GUILD_FEATURE(":feature", em.Hw.guildId()),
                                                    exact: !0,
                                                    render: e6,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.Z, {
                                                    path: ej.Z5c.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: e6,
                                                    disableTrack: !0,
                                                }),
                                            ],
                                        }),
                                        E && (0, r.jsx)(M.Z, {}),
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
