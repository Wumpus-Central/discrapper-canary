n.d(t, { Z: () => e4 }), n(35282), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    s = n(114858),
    c = n(990547),
    u = n(608787),
    d = n(873546),
    p = n(252258),
    h = n(442837),
    f = n(433517),
    g = n(481060),
    m = n(773244),
    b = n(711237),
    _ = n(532835),
    E = n(347469),
    O = n(169382),
    I = n(290297),
    y = n(317381),
    v = n(82888),
    C = n(244317),
    S = n(765717),
    N = n(358221),
    T = n(823748),
    P = n(626421),
    j = n(118379),
    A = n(267161),
    x = n(652515),
    Z = n(544978),
    w = n(540059),
    L = n(724383),
    R = n(135864),
    D = n(372900),
    k = n(6039),
    M = n(637853),
    U = n(326145),
    G = n(269675),
    V = n(242601),
    B = n(416568),
    H = n(613609),
    F = n(160404),
    z = n(225675),
    W = n(927723),
    Y = n(745052),
    K = n(285865),
    q = n(659971),
    X = n(821020),
    Q = n(147341),
    J = n(82409),
    $ = n(664608),
    ee = n(270759),
    et = n(918701),
    en = n(982168),
    er = n(905423),
    ei = n(304445),
    el = n(893607),
    ea = n(703656),
    eo = n(210887),
    es = n(592125),
    ec = n(896797),
    eu = n(271383),
    ed = n(430824),
    ep = n(944486),
    eh = n(933429),
    ef = n(626135),
    eg = n(823379),
    em = n(709054),
    eb = n(374005),
    e_ = n(409292),
    eE = n(316173),
    eO = n(256638),
    eI = n(663701),
    ey = n(697309),
    ev = n(425369),
    eC = n(715702),
    eS = n(981631),
    eN = n(176505),
    eT = n(215023),
    eP = n(290511),
    ej = n(186901),
    eA = n(128654);
function ex(e) {
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
function eZ(e, t) {
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
let ew = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    eL = () =>
        (0, r.jsx)('div', {
            className: eA.loader,
            children: (0, r.jsx)(g.$jN, {})
        }),
    eR = (0, u.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eL
    }),
    eD = (0, u.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eL
    }),
    ek = (0, u.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eL
    }),
    eM = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eL
    }),
    eU = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eL
    }),
    eG = (0, u.Un)({
        createPromise: () => n.e('44799').then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: eL
    }),
    eV = (e) => {
        let { match: t } = e,
            n = (0, O.l)(),
            i = (0, h.e7)([es.Z, ep.Z], () => {
                let e = ep.Z.getChannelId();
                return es.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o, threadId: c } = t.params,
            u = (0, h.e7)([ed.Z], () => ed.Z.getGuild(l)),
            d = (0, h.e7)([eu.ZP], () => (null == l ? null : eu.ZP.getSelfMember(l))),
            p = (0, h.e7)([F.Z], () => {
                if (null == l) return;
                let e = F.Z.getData(l);
                if ((null == e ? void 0 : e.type) === z.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return Z.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return Z.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, en.WF)(a) && (0, en.WF)(c)) || ((0, ea.uL)(eS.Z5c.CHANNEL(null == u ? void 0 : u.id, null == u ? void 0 : u.getModeratorReportChannelId())), (0, W.V)());
        let f = (0, x.C4)(l, 'channel_renderer');
        if (null != l && null != a && (0, eN.AB)(a))
            switch (a) {
                case eN.oC.ROLE_SUBSCRIPTIONS:
                    return f
                        ? (0, r.jsx)(eR, {
                              guildId: l,
                              initialTab: Z.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, r.jsx)(G.Z, { guildId: l });
                case eN.oC.GUILD_SHOP:
                    return (0, r.jsx)(eR, {
                        guildId: l,
                        productId: o,
                        initialTab: p
                    });
                case eN.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: eS.Z5c.CHANNEL(l, eN.oC.MEMBER_SAFETY) });
                case eN.oC.GUILD_HOME:
                    return (0, r.jsx)(eD, { guildId: l });
                case eN.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eM, {
                        guildId: l,
                        selectedSection: eP.l7.BROWSE
                    });
                case eN.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eU, { guildId: l });
                case eN.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eM, {
                        guildId: l,
                        selectedSection: eP.l7.CUSTOMIZE
                    });
                case eN.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(ek, { guildId: l });
                case eN.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(eG, {
                        guildId: l,
                        powerupSkuId: n.get('powerupSkuId')
                    });
                case eN.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(T.Z, {});
                default:
                    (0, eg.vE)(a);
            }
        if ((0, M.p3)(u, d))
            return (0, r.jsx)(U.Z, {
                guildId: l,
                channelId: a
            });
        if ((null == i ? void 0 : i.type) === eS.d4z.GUILD_STORE) {
            let e = em.default.cast(t.params.messageId);
            return (0, r.jsx)(
                e_.Z,
                {
                    channel: i,
                    inputSkuId: e
                },
                i.id
            );
        }
        return (0, r.jsx)(T.Z, {});
    },
    eB = i.memo(function () {
        let { guildId: e, channelId: t } = (0, er.Z)(),
            { notificationCenterVariant: n } = X.L.useExperiment({ location: 'Sidebar' }),
            i = (0, h.e7)([ep.Z], () => (null != t ? t : ep.Z.getChannelId(e)));
        return window.location.pathname.startsWith(eS.Z5c.NOTIFICATIONS_INBOX())
            ? ('sidebar' !== n && (0, ea.dL)(ec.Z.defaultRoute), (0, r.jsx)(J.Z, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eS.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(eS.Z5c.GUILD_DISCOVERY) || (0, et.OG)()
              ? (0, r.jsx)(R.Z, {})
              : null != e
                ? (0, r.jsx)(
                      V.Z,
                      {
                          selectedChannelId: i,
                          guildId: e
                      },
                      e
                  )
                : (0, r.jsx)(eI.Z, {});
    }),
    eH = (e) => (0, r.jsx)(eV, ex({}, e)),
    eF = () => (0, r.jsx)(L.Z, {}),
    ez = (e) => (null != e.match.params.channelId ? eH(e) : (0, r.jsx)(Q.Z, {})),
    eW = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(k.Z, { guildId: t.params.guildId }) : null;
    },
    eY = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(H.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eK = () => (0, r.jsx)(ev.Z, {}),
    eq = () => (0, r.jsx)(eC.Z, {}),
    eX = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, o.parse)(t.location.search);
            return Object.values(eT.AW).includes(n)
                ? (0, r.jsx)(
                      j.Z,
                      ex(
                          {
                              isFullScreen: e,
                              tab: n
                          },
                          t
                      )
                  )
                : (0, r.jsx)(j.Z, ex({ isFullScreen: e }, t));
        };
    },
    eQ = (e) => (0, r.jsx)(C.Z, ex({}, e)),
    eJ = () => (0, r.jsx)(ee.Z, {}),
    e$ = () => (0, r.jsx)(Y.Z, {}),
    e0 = () => (0, r.jsx)($.Z, {}),
    e1 = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, r.jsx)(ee.Z, { initialSection: eS.pJs.ONLINE });
            case 'addFriends':
                return (0, r.jsx)(ee.Z, { initialSection: eS.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, r.jsx)(ee.Z, { initialSection: eS.pJs.PENDING });
            case 'sessionManagement':
                return (0, r.jsx)(s.l_, { to: eS.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, r.jsx)(s.l_, {
                    to: {
                        pathname: eS.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, r.jsx)(s.l_, { to: eS.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, r.jsx)(s.l_, { to: eS.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, r.jsx)(s.l_, { to: eS.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, r.jsx)(s.l_, { to: eS.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, r.jsx)(s.l_, { to: { pathname: eS.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, r.jsx)(s.l_, { to: { pathname: eS.Z5c.NITRO_HOME } });
            case 'connected-games':
                return (0, r.jsx)(s.l_, { to: eS.Z5c.SETTINGS('content-and-social', 'connected-games') });
            case 'boost':
                let n = t.params.guildId;
                return (0, r.jsx)(s.l_, { to: eS.Z5c.POWERUP_STORE(n) });
            default:
                return (0, r.jsx)(s.l_, { to: eS.Z5c.ME });
        }
    },
    e3 = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(m.Z, {
            deepLinkType: ej.jE.FEATURES,
            path: t,
            children: e1(e)
        });
    };
function e8(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function e5(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: o, isSidebarOpen: s, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, _.t)(!0);
    let u = 'app view user trigger debugging';
    b.R6.useExperiment({ location: u }, { autoTrackExposure: !1 }), b.R6.trackExposure({ location: u });
    let p = (0, h.e7)([N.Z], () => N.Z.isFullscreenInContext()),
        m = (0, w.TH)('ChannelSidebar'),
        O = (0, w.Q3)('ChannelSidebar'),
        I = (0, A.useAppSidebarState)((e) => !e.isOpen) && m;
    i.useLayoutEffect(() => {
        if (m) {
            var e;
            let t = parseInt(null != (e = f.K.get(ey.nT)) ? e : '');
            Number.isNaN(t) && (t = ey.qO), (t = Math.min(Math.max(t, ey.li), ey.zx)), !m && t <= ey.p8 && (t = ey.qO), e8(t);
            let n = (e) => {
                e.metaKey && 'b' === e.key && A.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
            };
            return (
                document.addEventListener('keydown', n),
                () => {
                    document.removeEventListener('keydown', n);
                }
            );
        }
    }, [m]),
        i.useLayoutEffect(() => {
            if (I) e8(ey.p8);
            else {
                var e;
                let t = parseInt(null != (e = f.K.get(ey.nT)) ? e : '');
                Number.isNaN(t) && (t = ey.qO), e8(t);
            }
        }, [I]);
    let y = i.useRef(null),
        v = i.useCallback(
            (e, t) => {
                var n;
                e8(e);
                let r = t < ey.li / 3;
                t <= ey.li ? document.body.classList.add(eA.draggingMin) : document.body.classList.remove(eA.draggingMin), t >= ey.zx ? document.body.classList.add(eA.draggingMax) : document.body.classList.remove(eA.draggingMax);
                let i = t - e;
                null == (n = y.current) || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / ey.p8), 0.25))), m && (A.useAppSidebarState.setState({ isOpen: !r }), r && e8(ey.p8));
            },
            [m]
        ),
        C = i.useCallback(() => {
            document.body.classList.add(eA.dragging);
        }, []),
        S = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eA.dragging), document.body.classList.remove(eA.draggingMin), document.body.classList.remove(eA.draggingMax), document.body.classList.remove(eA.collapsing), null == (t = y.current) || t.style.setProperty('--custom-overdrag', '0px'), f.K.set(ey.nT, e), ef.default.track(eS.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        T = (0, E.Z)({
            minDimension: ey.li,
            maxDimension: ey.zx,
            resizableDomNodeRef: y,
            onElementResize: v,
            onElementResizeStart: C,
            onElementResizeEnd: S,
            orientation: E.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        P = i.useCallback(() => {
            A.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            I && e8(ey.p8);
        }, [I]),
        l || (!O && o))
    )
        return null;
    let j = O ? 'div' : i.Fragment,
        x = O ? { className: a()(eA.sidebarList, { [eA.sidebarListRounded]: !t }) } : {};
    return (0, r.jsx)(g.f6W, {
        theme: n,
        children: (e) =>
            (0, r.jsxs)('div', {
                ref: O ? y : void 0,
                'data-collapsed': I,
                className: a()(eA.sidebar, e, {
                    [eA.fullWidth]: d.tq,
                    [eA.hidden]: p,
                    [eA.channelListHidden]: o
                }),
                children: [
                    O &&
                        s &&
                        !c &&
                        (0, r.jsx)(B.Z, {
                            className: eA.guilds,
                            themeOverride: n
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j, eZ(ex({}, x), { children: (0, r.jsx)(eB, {}) })),
                                O
                                    ? (0, r.jsx)(g.P3F, {
                                          onClick: P,
                                          'aria-label': 'Resize Sidebar',
                                          className: eA.sidebarResizeHandle,
                                          onMouseDown: T
                                      })
                                    : null,
                                (0, r.jsx)(eb.b, {})
                            ]
                        }),
                    !O && (0, r.jsx)(eE.Z, {})
                ]
            })
    });
}
function e4() {
    var e;
    let t = (0, h.e7)([eh.ZP], () => eh.ZP.hasNotice()),
        n = (0, h.e7)([eo.Z], () => (eo.Z.darkSidebar ? eS.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eS.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                i.useEffect(
                    () =>
                        ei.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eS.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eS.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                i.useEffect(
                    () =>
                        ei.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eS.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        o = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, eS.Z5c.GUILD_BOOSTING_MARKETING(el.Hw.guildId()))) ? void 0 : e.isExact) === !0;
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, eS.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) ? void 0 : e.isExact) === !0;
        })(),
        f = (0, h.e7)([q.Z], () => q.Z.getIsOpen()),
        { notificationCenterVariant: g } = X.L.useExperiment({ location: 'Sidebar' }),
        m = (0, s.$B)([eS.Z5c.CHANNEL(eS.ME, el.Hw.channelId()), eS.Z5c.CHANNEL(el.Hw.guildId(), el.Hw.channelId({ optional: !0 }), ':messageId?')]),
        b = (null == m || null == (e = m.params) ? void 0 : e.channelId) === eN.oC.GUILD_ONBOARDING,
        _ = l || a || o || u || b,
        E = i.useCallback(() => K.Z.openSidebar(), []),
        O = (0, w.Q3)('AppView'),
        C = (0, w.TH)('AppView'),
        T = O ? 'div' : i.Fragment,
        j = (0, A.useAppSidebarState)((e) => !e.isOpen),
        x = (0, h.e7)([N.Z], () => N.Z.isFullscreenInContext()),
        Z = O
            ? {
                  className: eA.page,
                  'data-collapsed': !!C && j
              }
            : {},
        L = (0, h.e7)([y.ZP], () => {
            var e;
            return (null == (e = y.ZP.getCurrentEmbeddedActivity()) ? void 0 : e.location.kind) === p.E.CONTEXTLESS;
        });
    return (0, r.jsxs)('div', {
        className: eA.container,
        children: [
            f &&
                !u &&
                !O &&
                (0, r.jsx)(B.Z, {
                    className: eA.guilds,
                    themeOverride: n
                }),
            (0, r.jsx)(D.Z.Provider, {
                value: (null == m ? void 0 : m.params.guildId) === eS.ME || null == m ? void 0 : m.params.guildId,
                children: (0, r.jsxs)('div', {
                    className: eA.base,
                    'data-fullscreen': x,
                    children: [
                        O && !x && (0, r.jsx)(ew, {}),
                        d.tq ? null : (0, r.jsx)(eO.Z, {}),
                        (0, r.jsxs)('div', {
                            className: eA.content,
                            children: [
                                (0, r.jsx)(P.Z, {}),
                                (0, r.jsx)(e5, {
                                    isOnFullScreenCollectiblesShopRoute: u,
                                    isSidebarOpen: f,
                                    hasNotice: t,
                                    sidebarTheme: n,
                                    hideChannelList: _,
                                    hideSidebar: !f || u
                                }),
                                (0, r.jsx)(
                                    T,
                                    eZ(ex({}, Z), {
                                        children: (0, r.jsxs)(I.Z.Provider, {
                                            value: E,
                                            children: [
                                                (0, r.jsxs)(s.rs, {
                                                    children: [
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.ACTIVITY,
                                                            disableTrack: !0,
                                                            children: (0, r.jsx)(s.l_, { to: eS.Z5c.ME })
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                            render: eQ,
                                                            impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                            impressionProperties: (e) => {
                                                                let { computedMatch: t } = e;
                                                                return { application_id: t.params.applicationId };
                                                            }
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.APPLICATION_LIBRARY,
                                                            render: eK,
                                                            impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.APPLICATION_STORE,
                                                            render: eq,
                                                            impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                            render: eX(!0),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                            render: eX(!1),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.COLLECTIBLES_SHOP,
                                                            render: eX(!1),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                            render: eX(!1),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.MESSAGE_REQUESTS,
                                                            render: e$,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.FAMILY_CENTER,
                                                            render: e0,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.ME,
                                                            exact: !0,
                                                            render: eJ,
                                                            impressionName: c.ImpressionNames.FRIENDS,
                                                            disableTrack: !0
                                                        }),
                                                        'sidebar' === g &&
                                                            (0, r.jsx)(S.Z, {
                                                                path: eS.Z5c.NOTIFICATIONS_INBOX(el.Hw.channelId({ optional: !0 }), ':messageId?'),
                                                                render: ez,
                                                                disableTrack: !0
                                                            }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: [eS.Z5c.CHANNEL_THREAD_VIEW(el.Hw.guildId(), el.Hw.channelId(), ':threadId', ':messageId?'), eS.Z5c.CHANNEL(eS.ME, el.Hw.channelId()), eS.Z5c.CHANNEL(el.Hw.guildId(), el.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                            render: eH,
                                                            impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.GLOBAL_DISCOVERY,
                                                            render: eF,
                                                            impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                            disableTrack: !0,
                                                            exact: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                            render: eF,
                                                            impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.GLOBAL_DISCOVERY_APPS,
                                                            render: eF,
                                                            impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.QUEST_HOME,
                                                            render: eF,
                                                            impressionName: c.ImpressionNames.QUEST_HOME,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.GUILD_DISCOVERY,
                                                            render: eF,
                                                            impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.GUILD_MEMBER_VERIFICATION(el.Hw.guildId()),
                                                            render: eW,
                                                            impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(el.Hw.guildId(), ':inviteCode?'),
                                                            render: eY,
                                                            impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                            impressionProperties: (e) => {
                                                                let { computedMatch: t } = e;
                                                                return { has_invite: void 0 !== t.params.inviteCode };
                                                            }
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.GUILD_FEATURE(':feature', el.Hw.guildId()),
                                                            exact: !0,
                                                            render: e3,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: eS.Z5c.FEATURE(':feature'),
                                                            exact: !0,
                                                            render: e3,
                                                            disableTrack: !0
                                                        })
                                                    ]
                                                }),
                                                L && (0, r.jsx)(v.Z, {})
                                            ]
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
