(n.d(t, { Z: () => e1 }), n(35282), n(388685));
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
    O = n(169382),
    E = n(290297),
    y = n(244317),
    I = n(765717),
    v = n(358221),
    C = n(823748),
    S = n(626421),
    N = n(118379),
    T = n(267161),
    P = n(652515),
    j = n(544978),
    A = n(540059),
    Z = n(724383),
    x = n(135864),
    L = n(372900),
    w = n(6039),
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
    X = n(664608),
    Q = n(270759),
    J = n(918701),
    $ = n(982168),
    ee = n(893908),
    et = n(905423),
    en = n(304445),
    er = n(893607),
    ei = n(703656),
    el = n(210887),
    ea = n(592125),
    eo = n(896797),
    es = n(271383),
    ec = n(430824),
    eu = n(944486),
    ed = n(933429),
    ep = n(626135),
    eh = n(823379),
    ef = n(709054),
    eg = n(374005),
    em = n(409292),
    eb = n(256638),
    e_ = n(663701),
    eO = n(697309),
    eE = n(425369),
    ey = n(715702),
    eI = n(981631),
    ev = n(176505),
    eC = n(215023),
    eS = n(290511),
    eN = n(186901),
    eT = n(128654);
function eP(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let ej = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    eA = () =>
        (0, r.jsx)('div', {
            className: eT.loader,
            children: (0, r.jsx)(f.$jN, {})
        }),
    eZ = (0, u.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eA
    }),
    ex = (0, u.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eA
    }),
    eL = (0, u.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eA
    }),
    ew = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eA
    }),
    eR = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eA
    }),
    eD = (0, u.Un)({
        createPromise: () => Promise.all([n.e('55616'), n.e('44799')]).then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: eA
    }),
    ek = (e) => {
        let { match: t } = e,
            n = (0, O.l)(),
            i = (0, p.e7)([ea.Z, eu.Z], () => {
                let e = eu.Z.getChannelId();
                return ea.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o, threadId: c } = t.params,
            u = (0, p.e7)([ec.Z], () => ec.Z.getGuild(l)),
            d = (0, p.e7)([es.ZP], () => (null == l ? null : es.ZP.getSelfMember(l))),
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
        ((0, $.WF)(a) && (0, $.WF)(c)) || (null != u && (0, ei.uL)(eI.Z5c.CHANNEL(u.id, (0, ee.Z)(u))), (0, H.V)());
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
                    return (0, r.jsx)(s.l_, { to: eI.Z5c.CHANNEL(l, ev.oC.MEMBER_SAFETY) });
                case ev.oC.GUILD_HOME:
                    return (0, r.jsx)(ex, { guildId: l });
                case ev.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(ew, {
                        guildId: l,
                        selectedSection: eS.l7.BROWSE
                    });
                case ev.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eR, { guildId: l });
                case ev.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(ew, {
                        guildId: l,
                        selectedSection: eS.l7.CUSTOMIZE
                    });
                case ev.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eL, { guildId: l });
                case ev.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(eD, {
                        guildId: l,
                        powerupSkuId: n.get('powerupSkuId')
                    });
                case ev.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(C.Z, {});
                default:
                    (0, eh.vE)(a);
            }
        if ((0, R.p3)(u, d))
            return (0, r.jsx)(D.Z, {
                guildId: l,
                channelId: a
            });
        if ((null == i ? void 0 : i.type) === eI.d4z.GUILD_STORE) {
            let e = ef.default.cast(t.params.messageId);
            return (0, r.jsx)(
                em.Z,
                {
                    channel: i,
                    inputSkuId: e
                },
                i.id
            );
        }
        return (0, r.jsx)(C.Z, {});
    },
    eM = i.memo(function () {
        let { guildId: e, channelId: t } = (0, et.Z)(),
            { notificationCenterVariant: n } = Y.Lk.useExperiment({ location: 'Sidebar' }),
            i = (0, p.e7)([eu.Z], () => (null != t ? t : eu.Z.getChannelId(e)));
        return window.location.pathname.startsWith(eI.Z5c.NOTIFICATIONS_INBOX())
            ? ('sidebar' !== n && (0, ei.dL)(eo.Z.defaultRoute), (0, r.jsx)(q.Z, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eI.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(eI.Z5c.GUILD_DISCOVERY) || (0, J.OG)()
              ? (0, r.jsx)(x.Z, {})
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
    eU = (e) => (0, r.jsx)(ek, eP({}, e)),
    eG = () => (0, r.jsx)(Z.Z, {}),
    eB = (e) => (null != e.match.params.channelId ? eU(e) : (0, r.jsx)(K.Z, {})),
    eV = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(w.Z, { guildId: t.params.guildId }) : null;
    },
    eH = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(G.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eF = () => (0, r.jsx)(eE.Z, {}),
    ez = () => (0, r.jsx)(ey.Z, {}),
    eW = function () {
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
    eY = (e) => (0, r.jsx)(y.Z, eP({}, e)),
    eK = () => (0, r.jsx)(Q.Z, {}),
    eq = () => (0, r.jsx)(F.Z, {}),
    eX = () => (0, r.jsx)(X.Z, {}),
    eQ = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, r.jsx)(Q.Z, { initialSection: eI.pJs.ONLINE });
            case 'addFriends':
                return (0, r.jsx)(Q.Z, { initialSection: eI.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, r.jsx)(Q.Z, { initialSection: eI.pJs.PENDING });
            case 'sessionManagement':
                return (0, r.jsx)(s.l_, { to: eI.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, r.jsx)(s.l_, {
                    to: {
                        pathname: eI.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, r.jsx)(s.l_, { to: eI.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, r.jsx)(s.l_, { to: eI.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, r.jsx)(s.l_, { to: eI.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, r.jsx)(s.l_, { to: eI.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, r.jsx)(s.l_, { to: { pathname: eI.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, r.jsx)(s.l_, { to: { pathname: eI.Z5c.NITRO_HOME } });
            case 'connected-games':
                return (0, r.jsx)(s.l_, { to: eI.Z5c.SETTINGS('content-and-social', 'connected-games') });
            case 'boost':
                let n = t.params.guildId;
                return (0, r.jsx)(s.l_, { to: eI.Z5c.POWERUP_STORE(n) });
            case 'boost-settings':
                return (0, r.jsx)(s.l_, { to: eI.Z5c.SETTINGS('guild-boosting') });
            default:
                return (0, r.jsx)(s.l_, { to: eI.Z5c.ME });
        }
    },
    eJ = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(g.Z, {
            deepLinkType: eN.jE.FEATURES,
            path: t,
            children: eQ(e)
        });
    };
function e$(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function e0(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: o, isSidebarOpen: s, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, b.t)(!0);
    let u = 'app view user trigger debugging';
    (m.R6.useExperiment({ location: u }, { autoTrackExposure: !1 }), m.R6.trackExposure({ location: u }));
    let g = (0, p.e7)([v.Z], () => v.Z.isFullscreenInContext()),
        O = (0, A.T)('ChannelSidebar'),
        E = (0, T.useAppSidebarState)((e) => !e.isOpen) && O;
    (i.useLayoutEffect(() => {
        if (O) {
            var e;
            let t = parseInt(null != (e = h.K.get(eO.nT)) ? e : '');
            (Number.isNaN(t) && (t = eO.qO), (t = Math.min(Math.max(t, eO.li), eO.zx)), !O && t <= eO.p8 && (t = eO.qO), e$(t));
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
    }, [O]),
        i.useLayoutEffect(() => {
            if (E) e$(eO.p8);
            else {
                var e;
                let t = parseInt(null != (e = h.K.get(eO.nT)) ? e : '');
                (Number.isNaN(t) && (t = eO.qO), e$(t));
            }
        }, [E]));
    let y = i.useRef(null),
        I = i.useCallback(
            (e, t) => {
                var n;
                e$(e);
                let r = t < eO.li / 3;
                (t <= eO.li ? document.body.classList.add(eT.draggingMin) : document.body.classList.remove(eT.draggingMin), t >= eO.zx ? document.body.classList.add(eT.draggingMax) : document.body.classList.remove(eT.draggingMax));
                let i = t - e;
                (null == (n = y.current) || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / eO.p8), 0.25))), O && (T.useAppSidebarState.setState({ isOpen: !r }), r && e$(eO.p8)));
            },
            [O]
        ),
        C = i.useCallback(() => {
            document.body.classList.add(eT.dragging);
        }, []),
        S = i.useCallback((e) => {
            var t;
            (document.body.classList.remove(eT.dragging), document.body.classList.remove(eT.draggingMin), document.body.classList.remove(eT.draggingMax), document.body.classList.remove(eT.collapsing), null == (t = y.current) || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(eO.nT, e), ep.default.track(eI.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e }));
        }, []),
        N = (0, _.Z)({
            minDimension: eO.li,
            maxDimension: eO.zx,
            resizableDomNodeRef: y,
            onElementResize: I,
            onElementResizeStart: C,
            onElementResizeEnd: S,
            orientation: _.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        P = i.useCallback(() => {
            T.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            E && e$(eO.p8);
        }, [E]),
        l)
    )
        return null;
    let j = { className: a()(eT.sidebarList, { [eT.sidebarListRounded]: !t }) };
    return (0, r.jsx)(f.f6W, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)('div', {
                ref: y,
                'data-collapsed': E,
                className: a()(eT.sidebar, e, {
                    [eT.fullWidth]: d.tq,
                    [eT.hidden]: g,
                    [eT.channelListHidden]: o
                }),
                children: [
                    s &&
                        !c &&
                        (0, r.jsx)(U.Z, {
                            className: eT.guilds,
                            themeOverride: n
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    'div',
                                    ((t = eP({}, j)),
                                    (i = i = { children: (0, r.jsx)(eM, {}) }),
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
                                    t)
                                ),
                                (0, r.jsx)(f.P3F, {
                                    onClick: P,
                                    'aria-label': 'Resize Sidebar',
                                    className: eT.sidebarResizeHandle,
                                    onMouseDown: N
                                }),
                                (0, r.jsx)(eg.b, {})
                            ]
                        })
                ]
            });
        }
    });
}
function e1() {
    var e;
    let t = (0, p.e7)([ed.ZP], () => ed.ZP.hasNotice()),
        n = (0, p.e7)([el.Z], () => (el.Z.darkSidebar ? eI.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eI.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                i.useEffect(
                    () =>
                        en.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eI.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eI.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                i.useEffect(
                    () =>
                        en.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eI.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        o = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, eI.Z5c.GUILD_BOOSTING_MARKETING(er.Hw.guildId()))) ? void 0 : e.isExact) === !0;
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, eI.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) ? void 0 : e.isExact) === !0;
        })(),
        h = (0, p.e7)([W.Z], () => W.Z.getIsOpen()),
        { notificationCenterVariant: f } = Y.Lk.useExperiment({ location: 'Sidebar' }),
        g = (0, s.$B)([eI.Z5c.CHANNEL(eI.ME, er.Hw.channelId()), eI.Z5c.CHANNEL(er.Hw.guildId(), er.Hw.channelId({ optional: !0 }), ':messageId?')]),
        m = (null == g || null == (e = g.params) ? void 0 : e.channelId) === ev.oC.GUILD_ONBOARDING,
        b = l || a || o || u || m,
        _ = i.useCallback(() => z.Z.openSidebar(), []),
        O = (0, A.T)('AppView'),
        y = (0, T.useAppSidebarState)((e) => !e.isOpen),
        C = (0, p.e7)([v.Z], () => v.Z.isFullscreenInContext());
    return (0, r.jsx)('div', {
        className: eT.container,
        children: (0, r.jsx)(L.Z.Provider, {
            value: (null == g ? void 0 : g.params.guildId) === eI.ME || null == g ? void 0 : g.params.guildId,
            children: (0, r.jsxs)('div', {
                className: eT.base,
                'data-fullscreen': C,
                children: [
                    !C && (0, r.jsx)(ej, {}),
                    d.tq ? null : (0, r.jsx)(eb.Z, {}),
                    (0, r.jsxs)('div', {
                        className: eT.content,
                        children: [
                            (0, r.jsx)(S.Z, {}),
                            (0, r.jsx)(e0, {
                                isOnFullScreenCollectiblesShopRoute: u,
                                isSidebarOpen: h,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: b,
                                hideSidebar: !h || u
                            }),
                            (0, r.jsx)('div', {
                                className: eT.page,
                                'data-collapsed': !!O && y,
                                children: (0, r.jsx)(E.Z.Provider, {
                                    value: _,
                                    children: (0, r.jsxs)(s.rs, {
                                        children: [
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.ACTIVITY,
                                                disableTrack: !0,
                                                children: (0, r.jsx)(s.l_, { to: eI.Z5c.ME })
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                render: eY,
                                                impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                impressionProperties: (e) => {
                                                    let { computedMatch: t } = e;
                                                    return { application_id: t.params.applicationId };
                                                }
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.APPLICATION_LIBRARY,
                                                render: eF,
                                                impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.APPLICATION_STORE,
                                                render: ez,
                                                impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                render: eW(!0),
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                render: eW(!1),
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.COLLECTIBLES_SHOP,
                                                render: eW(!1),
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                render: eW(!1),
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.MESSAGE_REQUESTS,
                                                render: eq,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.FAMILY_CENTER,
                                                render: eX,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.ME,
                                                exact: !0,
                                                render: eK,
                                                impressionName: c.ImpressionNames.FRIENDS,
                                                disableTrack: !0
                                            }),
                                            f === Y.jP.SIDEBAR &&
                                                (0, r.jsx)(I.Z, {
                                                    path: eI.Z5c.NOTIFICATIONS_INBOX(er.Hw.channelId({ optional: !0 }), ':messageId?'),
                                                    render: eB,
                                                    disableTrack: !0
                                                }),
                                            (0, r.jsx)(I.Z, {
                                                path: [eI.Z5c.CHANNEL_THREAD_VIEW(er.Hw.guildId(), er.Hw.channelId(), ':threadId', ':messageId?'), eI.Z5c.CHANNEL(eI.ME, er.Hw.channelId()), eI.Z5c.CHANNEL(er.Hw.guildId(), er.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                render: eU,
                                                impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.GLOBAL_DISCOVERY,
                                                render: eG,
                                                impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                disableTrack: !0,
                                                exact: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                render: eG,
                                                impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.GLOBAL_DISCOVERY_APPS,
                                                render: eG,
                                                impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.QUEST_HOME,
                                                render: eG,
                                                impressionName: c.ImpressionNames.QUEST_HOME,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.GUILD_DISCOVERY,
                                                render: eG,
                                                impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.GUILD_MEMBER_VERIFICATION(er.Hw.guildId()),
                                                render: eV,
                                                impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(er.Hw.guildId(), ':inviteCode?'),
                                                render: eH,
                                                impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                impressionProperties: (e) => {
                                                    let { computedMatch: t } = e;
                                                    return { has_invite: void 0 !== t.params.inviteCode };
                                                }
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.GUILD_FEATURE(':feature', er.Hw.guildId()),
                                                exact: !0,
                                                render: eJ,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: eI.Z5c.FEATURE(':feature'),
                                                exact: !0,
                                                render: eJ,
                                                disableTrack: !0
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
