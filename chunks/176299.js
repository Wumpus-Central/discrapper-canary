n.d(t, { Z: () => e3 }), n(35282), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    s = n(114858),
    c = n(990547),
    u = n(608787),
    d = n(873546),
    p = n(442837),
    h = n(433517),
    f = n(481060),
    g = n(773244),
    m = n(711237),
    b = n(532835),
    _ = n(347469),
    E = n(169382),
    O = n(290297),
    I = n(244317),
    y = n(765717),
    v = n(358221),
    C = n(823748),
    S = n(626421),
    N = n(118379),
    T = n(267161),
    P = n(652515),
    j = n(544978),
    A = n(540059),
    x = n(724383),
    Z = n(135864),
    w = n(372900),
    L = n(6039),
    R = n(637853),
    D = n(326145),
    k = n(269675),
    M = n(242601),
    U = n(416568),
    G = n(613609),
    B = n(160404),
    V = n(225675),
    H = n(927723),
    F = n(745052),
    z = n(285865),
    W = n(659971),
    Y = n(821020),
    K = n(147341),
    q = n(82409),
    Q = n(664608),
    X = n(270759),
    J = n(918701),
    $ = n(982168),
    ee = n(905423),
    et = n(304445),
    en = n(893607),
    er = n(703656),
    ei = n(210887),
    el = n(592125),
    ea = n(896797),
    eo = n(271383),
    es = n(430824),
    ec = n(944486),
    eu = n(933429),
    ed = n(626135),
    ep = n(823379),
    eh = n(709054),
    ef = n(374005),
    eg = n(409292),
    em = n(316173),
    eb = n(256638),
    e_ = n(663701),
    eE = n(697309),
    eO = n(425369),
    eI = n(715702),
    ey = n(981631),
    ev = n(176505),
    eC = n(215023),
    eS = n(290511),
    eN = n(186901),
    eT = n(128654);
function eP(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function ej(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eA = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    ex = () =>
        (0, r.jsx)('div', {
            className: eT.loader,
            children: (0, r.jsx)(f.$jN, {})
        }),
    eZ = (0, u.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: ex
    }),
    ew = (0, u.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: ex
    }),
    eL = (0, u.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: ex
    }),
    eR = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: ex
    }),
    eD = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: ex
    }),
    ek = (0, u.Un)({
        createPromise: () => n.e('44799').then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: ex
    }),
    eM = (e) => {
        let { match: t } = e,
            n = (0, E.l)(),
            i = (0, p.e7)([el.Z, ec.Z], () => {
                let e = ec.Z.getChannelId();
                return el.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o, threadId: c } = t.params,
            u = (0, p.e7)([es.Z], () => es.Z.getGuild(l)),
            d = (0, p.e7)([eo.ZP], () => (null == l ? null : eo.ZP.getSelfMember(l))),
            h = (0, p.e7)([B.Z], () => {
                if (null == l) return;
                let e = B.Z.getData(l);
                if ((null == e ? void 0 : e.type) === V.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return j.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return j.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, $.WF)(a) && (0, $.WF)(c)) || ((0, er.uL)(ey.Z5c.CHANNEL(null == u ? void 0 : u.id, null == u ? void 0 : u.getModeratorReportChannelId())), (0, H.V)());
        let f = (0, P.C4)(l, 'channel_renderer');
        if (null != l && null != a && (0, ev.AB)(a))
            switch (a) {
                case ev.oC.ROLE_SUBSCRIPTIONS:
                    return f
                        ? (0, r.jsx)(eZ, {
                              guildId: l,
                              initialTab: j.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, r.jsx)(k.Z, { guildId: l });
                case ev.oC.GUILD_SHOP:
                    return (0, r.jsx)(eZ, {
                        guildId: l,
                        productId: o,
                        initialTab: h
                    });
                case ev.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: ey.Z5c.CHANNEL(l, ev.oC.MEMBER_SAFETY) });
                case ev.oC.GUILD_HOME:
                    return (0, r.jsx)(ew, { guildId: l });
                case ev.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eR, {
                        guildId: l,
                        selectedSection: eS.l7.BROWSE
                    });
                case ev.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eD, { guildId: l });
                case ev.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eR, {
                        guildId: l,
                        selectedSection: eS.l7.CUSTOMIZE
                    });
                case ev.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eL, { guildId: l });
                case ev.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(ek, {
                        guildId: l,
                        powerupSkuId: n.get('powerupSkuId')
                    });
                case ev.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(C.Z, {});
                default:
                    (0, ep.vE)(a);
            }
        if ((0, R.p3)(u, d))
            return (0, r.jsx)(D.Z, {
                guildId: l,
                channelId: a
            });
        if ((null == i ? void 0 : i.type) === ey.d4z.GUILD_STORE) {
            let e = eh.default.cast(t.params.messageId);
            return (0, r.jsx)(
                eg.Z,
                {
                    channel: i,
                    inputSkuId: e
                },
                i.id
            );
        }
        return (0, r.jsx)(C.Z, {});
    },
    eU = i.memo(function () {
        let { guildId: e, channelId: t } = (0, ee.Z)(),
            { notificationCenterVariant: n } = Y.L.useExperiment({ location: 'Sidebar' }),
            i = (0, p.e7)([ec.Z], () => (null != t ? t : ec.Z.getChannelId(e)));
        return window.location.pathname.startsWith(ey.Z5c.NOTIFICATIONS_INBOX())
            ? ('sidebar' !== n && (0, er.dL)(ea.Z.defaultRoute), (0, r.jsx)(q.Z, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(ey.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(ey.Z5c.GUILD_DISCOVERY) || (0, J.OG)()
              ? (0, r.jsx)(Z.Z, {})
              : null != e
                ? (0, r.jsx)(
                      M.Z,
                      {
                          selectedChannelId: i,
                          guildId: e
                      },
                      e
                  )
                : (0, r.jsx)(e_.Z, {});
    }),
    eG = (e) => (0, r.jsx)(eM, eP({}, e)),
    eB = () => (0, r.jsx)(x.Z, {}),
    eV = (e) => (null != e.match.params.channelId ? eG(e) : (0, r.jsx)(K.Z, {})),
    eH = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(L.Z, { guildId: t.params.guildId }) : null;
    },
    eF = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(G.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    ez = () => (0, r.jsx)(eO.Z, {}),
    eW = () => (0, r.jsx)(eI.Z, {}),
    eY = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, o.parse)(t.location.search);
            return Object.values(eC.AW).includes(n)
                ? (0, r.jsx)(
                      N.Z,
                      eP(
                          {
                              isFullScreen: e,
                              tab: n
                          },
                          t
                      )
                  )
                : (0, r.jsx)(N.Z, eP({ isFullScreen: e }, t));
        };
    },
    eK = (e) => (0, r.jsx)(I.Z, eP({}, e)),
    eq = () => (0, r.jsx)(X.Z, {}),
    eQ = () => (0, r.jsx)(F.Z, {}),
    eX = () => (0, r.jsx)(Q.Z, {}),
    eJ = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, r.jsx)(X.Z, { initialSection: ey.pJs.ONLINE });
            case 'addFriends':
                return (0, r.jsx)(X.Z, { initialSection: ey.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, r.jsx)(X.Z, { initialSection: ey.pJs.PENDING });
            case 'sessionManagement':
                return (0, r.jsx)(s.l_, { to: ey.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, r.jsx)(s.l_, {
                    to: {
                        pathname: ey.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, r.jsx)(s.l_, { to: ey.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, r.jsx)(s.l_, { to: ey.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, r.jsx)(s.l_, { to: ey.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, r.jsx)(s.l_, { to: ey.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, r.jsx)(s.l_, { to: { pathname: ey.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, r.jsx)(s.l_, { to: { pathname: ey.Z5c.NITRO_HOME } });
            case 'connected-games':
                return (0, r.jsx)(s.l_, { to: ey.Z5c.SETTINGS('content-and-social', 'connected-games') });
            case 'boost':
                let n = t.params.guildId;
                return (0, r.jsx)(s.l_, { to: ey.Z5c.POWERUP_STORE(n) });
            default:
                return (0, r.jsx)(s.l_, { to: ey.Z5c.ME });
        }
    },
    e$ = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(g.Z, {
            deepLinkType: eN.jE.FEATURES,
            path: t,
            children: eJ(e)
        });
    };
function e0(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function e1(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: o, isSidebarOpen: s, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, b.t)(!0);
    let u = 'app view user trigger debugging';
    m.R6.useExperiment({ location: u }, { autoTrackExposure: !1 }), m.R6.trackExposure({ location: u });
    let g = (0, p.e7)([v.Z], () => v.Z.isFullscreenInContext()),
        E = (0, A.TH)('ChannelSidebar'),
        O = (0, A.Q3)('ChannelSidebar'),
        I = (0, T.useAppSidebarState)((e) => !e.isOpen) && E;
    i.useLayoutEffect(() => {
        if (E) {
            var e;
            let t = parseInt(null != (e = h.K.get(eE.nT)) ? e : '');
            Number.isNaN(t) && (t = eE.qO), (t = Math.min(Math.max(t, eE.li), eE.zx)), !E && t <= eE.p8 && (t = eE.qO), e0(t);
            let n = (e) => {
                e.metaKey && 'b' === e.key && T.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
            };
            return (
                document.addEventListener('keydown', n),
                () => {
                    document.removeEventListener('keydown', n);
                }
            );
        }
    }, [E]),
        i.useLayoutEffect(() => {
            if (I) e0(eE.p8);
            else {
                var e;
                let t = parseInt(null != (e = h.K.get(eE.nT)) ? e : '');
                Number.isNaN(t) && (t = eE.qO), e0(t);
            }
        }, [I]);
    let y = i.useRef(null),
        C = i.useCallback(
            (e, t) => {
                var n;
                e0(e);
                let r = t < eE.li / 3;
                t <= eE.li ? document.body.classList.add(eT.draggingMin) : document.body.classList.remove(eT.draggingMin), t >= eE.zx ? document.body.classList.add(eT.draggingMax) : document.body.classList.remove(eT.draggingMax);
                let i = t - e;
                null == (n = y.current) || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / eE.p8), 0.25))), E && (T.useAppSidebarState.setState({ isOpen: !r }), r && e0(eE.p8));
            },
            [E]
        ),
        S = i.useCallback(() => {
            document.body.classList.add(eT.dragging);
        }, []),
        N = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eT.dragging), document.body.classList.remove(eT.draggingMin), document.body.classList.remove(eT.draggingMax), document.body.classList.remove(eT.collapsing), null == (t = y.current) || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(eE.nT, e), ed.default.track(ey.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        P = (0, _.Z)({
            minDimension: eE.li,
            maxDimension: eE.zx,
            resizableDomNodeRef: y,
            onElementResize: C,
            onElementResizeStart: S,
            onElementResizeEnd: N,
            orientation: _.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        j = i.useCallback(() => {
            T.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            I && e0(eE.p8);
        }, [I]),
        l || (!O && o))
    )
        return null;
    let x = O ? 'div' : i.Fragment,
        Z = O ? { className: a()(eT.sidebarList, { [eT.sidebarListRounded]: !t }) } : {};
    return (0, r.jsx)(f.f6W, {
        theme: n,
        children: (e) =>
            (0, r.jsxs)('div', {
                ref: O ? y : void 0,
                'data-collapsed': I,
                className: a()(eT.sidebar, e, {
                    [eT.fullWidth]: d.tq,
                    [eT.hidden]: g,
                    [eT.channelListHidden]: o
                }),
                children: [
                    O &&
                        s &&
                        !c &&
                        (0, r.jsx)(U.Z, {
                            className: eT.guilds,
                            themeOverride: n
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x, ej(eP({}, Z), { children: (0, r.jsx)(eU, {}) })),
                                O
                                    ? (0, r.jsx)(f.P3F, {
                                          onClick: j,
                                          'aria-label': 'Resize Sidebar',
                                          className: eT.sidebarResizeHandle,
                                          onMouseDown: P
                                      })
                                    : null,
                                (0, r.jsx)(ef.b, {})
                            ]
                        }),
                    !O && (0, r.jsx)(em.Z, {})
                ]
            })
    });
}
function e3() {
    var e;
    let t = (0, p.e7)([eu.ZP], () => eu.ZP.hasNotice()),
        n = (0, p.e7)([ei.Z], () => (ei.Z.darkSidebar ? ey.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(ey.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                i.useEffect(
                    () =>
                        et.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ey.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(ey.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                i.useEffect(
                    () =>
                        et.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ey.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        o = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, ey.Z5c.GUILD_BOOSTING_MARKETING(en.Hw.guildId()))) ? void 0 : e.isExact) === !0;
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, ey.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) ? void 0 : e.isExact) === !0;
        })(),
        h = (0, p.e7)([W.Z], () => W.Z.getIsOpen()),
        { notificationCenterVariant: f } = Y.L.useExperiment({ location: 'Sidebar' }),
        g = (0, s.$B)([ey.Z5c.CHANNEL(ey.ME, en.Hw.channelId()), ey.Z5c.CHANNEL(en.Hw.guildId(), en.Hw.channelId({ optional: !0 }), ':messageId?')]),
        m = (null == g || null == (e = g.params) ? void 0 : e.channelId) === ev.oC.GUILD_ONBOARDING,
        b = l || a || o || u || m,
        _ = i.useCallback(() => z.Z.openSidebar(), []),
        E = (0, A.Q3)('AppView'),
        I = (0, A.TH)('AppView'),
        C = E ? 'div' : i.Fragment,
        N = (0, T.useAppSidebarState)((e) => !e.isOpen),
        P = (0, p.e7)([v.Z], () => v.Z.isFullscreenInContext()),
        j = E
            ? {
                  className: eT.page,
                  'data-collapsed': !!I && N
              }
            : {};
    return (0, r.jsxs)('div', {
        className: eT.container,
        children: [
            h &&
                !u &&
                !E &&
                (0, r.jsx)(U.Z, {
                    className: eT.guilds,
                    themeOverride: n
                }),
            (0, r.jsx)(w.Z.Provider, {
                value: (null == g ? void 0 : g.params.guildId) === ey.ME || null == g ? void 0 : g.params.guildId,
                children: (0, r.jsxs)('div', {
                    className: eT.base,
                    'data-fullscreen': P,
                    children: [
                        E && !P && (0, r.jsx)(eA, {}),
                        d.tq ? null : (0, r.jsx)(eb.Z, {}),
                        (0, r.jsxs)('div', {
                            className: eT.content,
                            children: [
                                (0, r.jsx)(S.Z, {}),
                                (0, r.jsx)(e1, {
                                    isOnFullScreenCollectiblesShopRoute: u,
                                    isSidebarOpen: h,
                                    hasNotice: t,
                                    sidebarTheme: n,
                                    hideChannelList: b,
                                    hideSidebar: !h || u
                                }),
                                (0, r.jsx)(
                                    C,
                                    ej(eP({}, j), {
                                        children: (0, r.jsx)(O.Z.Provider, {
                                            value: _,
                                            children: (0, r.jsxs)(s.rs, {
                                                children: [
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, r.jsx)(s.l_, { to: ey.Z5c.ME })
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                        render: eK,
                                                        impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { application_id: t.params.applicationId };
                                                        }
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.APPLICATION_LIBRARY,
                                                        render: ez,
                                                        impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.APPLICATION_STORE,
                                                        render: eW,
                                                        impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                        render: eY(!0),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                        render: eY(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.COLLECTIBLES_SHOP,
                                                        render: eY(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                        render: eY(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.MESSAGE_REQUESTS,
                                                        render: eQ,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.FAMILY_CENTER,
                                                        render: eX,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.ME,
                                                        exact: !0,
                                                        render: eq,
                                                        impressionName: c.ImpressionNames.FRIENDS,
                                                        disableTrack: !0
                                                    }),
                                                    'sidebar' === f &&
                                                        (0, r.jsx)(y.Z, {
                                                            path: ey.Z5c.NOTIFICATIONS_INBOX(en.Hw.channelId({ optional: !0 }), ':messageId?'),
                                                            render: eV,
                                                            disableTrack: !0
                                                        }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: [ey.Z5c.CHANNEL_THREAD_VIEW(en.Hw.guildId(), en.Hw.channelId(), ':threadId', ':messageId?'), ey.Z5c.CHANNEL(ey.ME, en.Hw.channelId()), ey.Z5c.CHANNEL(en.Hw.guildId(), en.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                        render: eG,
                                                        impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.GLOBAL_DISCOVERY,
                                                        render: eB,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                        render: eB,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.GLOBAL_DISCOVERY_APPS,
                                                        render: eB,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.QUEST_HOME,
                                                        render: eB,
                                                        impressionName: c.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.GUILD_DISCOVERY,
                                                        render: eB,
                                                        impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.GUILD_MEMBER_VERIFICATION(en.Hw.guildId()),
                                                        render: eH,
                                                        impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(en.Hw.guildId(), ':inviteCode?'),
                                                        render: eF,
                                                        impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { has_invite: void 0 !== t.params.inviteCode };
                                                        }
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.GUILD_FEATURE(':feature', en.Hw.guildId()),
                                                        exact: !0,
                                                        render: e$,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: ey.Z5c.FEATURE(':feature'),
                                                        exact: !0,
                                                        render: e$,
                                                        disableTrack: !0
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                )
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
