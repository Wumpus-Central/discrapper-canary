(n.d(t, { Z: () => e8 }), n(35282), n(388685));
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
    Z = n(591472),
    x = n(351051),
    w = n(724383),
    L = n(135864),
    R = n(372900),
    D = n(6039),
    k = n(637853),
    M = n(326145),
    U = n(269675),
    G = n(242601),
    B = n(416568),
    V = n(613609),
    H = n(160404),
    F = n(225675),
    z = n(927723),
    W = n(745052),
    Y = n(285865),
    K = n(659971),
    q = n(821020),
    X = n(147341),
    Q = n(82409),
    J = n(664608),
    $ = n(270759),
    ee = n(918701),
    et = n(982168),
    en = n(893908),
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
    eE = n(256638),
    eO = n(663701),
    ey = n(697309),
    eI = n(425369),
    ev = n(715702),
    eC = n(981631),
    eS = n(176505),
    eN = n(215023),
    eT = n(290511),
    eP = n(186901),
    ej = n(128654);
function eA(e) {
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
let eZ = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    ex = () =>
        (0, r.jsx)('div', {
            className: ej.loader,
            children: (0, r.jsx)(f.$jN, {})
        }),
    ew = (0, u.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: ex
    }),
    eL = (0, u.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: ex
    }),
    eR = (0, u.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: ex
    }),
    eD = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: ex
    }),
    ek = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: ex
    }),
    eM = (0, u.Un)({
        createPromise: () => Promise.all([n.e('55616'), n.e('44799')]).then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: ex
    }),
    eU = (e) => {
        let { match: t } = e,
            n = (0, E.l)(),
            i = (0, p.e7)([es.Z, ep.Z], () => {
                let e = ep.Z.getChannelId();
                return es.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o, threadId: c } = t.params,
            u = (0, p.e7)([ed.Z], () => ed.Z.getGuild(l)),
            d = (0, p.e7)([eu.ZP], () => (null == l ? null : eu.ZP.getSelfMember(l))),
            h = (0, p.e7)([H.Z], () => {
                if (null == l) return;
                let e = H.Z.getData(l);
                if ((null == e ? void 0 : e.type) === F.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return j.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return j.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, et.WF)(a) && (0, et.WF)(c)) || (null != u && (0, ea.uL)(eC.Z5c.CHANNEL(u.id, (0, en.Z)(u))), (0, z.V)());
        let f = (0, P.C4)(l, 'channel_renderer');
        if (null != l && null != a && (0, eS.AB)(a))
            switch (a) {
                case eS.oC.ROLE_SUBSCRIPTIONS:
                    return f
                        ? (0, r.jsx)(ew, {
                              guildId: l,
                              initialTab: j.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, r.jsx)(U.Z, { guildId: l });
                case eS.oC.GUILD_SHOP:
                    return (0, r.jsx)(ew, {
                        guildId: l,
                        productId: o,
                        initialTab: h
                    });
                case eS.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: eC.Z5c.CHANNEL(l, eS.oC.MEMBER_SAFETY) });
                case eS.oC.GUILD_HOME:
                    return (0, r.jsx)(eL, { guildId: l });
                case eS.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eD, {
                        guildId: l,
                        selectedSection: eT.l7.BROWSE
                    });
                case eS.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(ek, { guildId: l });
                case eS.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eD, {
                        guildId: l,
                        selectedSection: eT.l7.CUSTOMIZE
                    });
                case eS.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eR, { guildId: l });
                case eS.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(eM, {
                        guildId: l,
                        powerupSkuId: n.get('powerupSkuId')
                    });
                case eS.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(C.Z, {});
                default:
                    (0, eg.vE)(a);
            }
        if ((0, k.p3)(u, d))
            return (0, r.jsx)(M.Z, {
                guildId: l,
                channelId: a
            });
        if ((null == i ? void 0 : i.type) === eC.d4z.GUILD_STORE) {
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
        return (0, r.jsx)(C.Z, {});
    },
    eG = i.memo(function () {
        let { guildId: e, channelId: t } = (0, er.Z)(),
            { notificationCenterVariant: n } = q.Lk.useExperiment({ location: 'Sidebar' }),
            i = (0, p.e7)([ep.Z], () => (null != t ? t : ep.Z.getChannelId(e)));
        return window.location.pathname.startsWith(eC.Z5c.NOTIFICATIONS_INBOX())
            ? ('sidebar' !== n && (0, ea.dL)(ec.Z.defaultRoute), (0, r.jsx)(Q.Z, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eC.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(eC.Z5c.GUILD_DISCOVERY) || (0, ee.OG)()
              ? (0, r.jsx)(L.Z, {})
              : null != e
                ? (0, r.jsx)(
                      G.Z,
                      {
                          selectedChannelId: i,
                          guildId: e
                      },
                      e
                  )
                : (0, r.jsx)(eO.Z, {});
    }),
    eB = (e) => (0, r.jsx)(eU, eA({}, e)),
    eV = () => (0, r.jsx)(w.Z, {}),
    eH = (e) => (null != e.match.params.channelId ? eB(e) : (0, r.jsx)(X.Z, {})),
    eF = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(D.Z, { guildId: t.params.guildId }) : null;
    },
    ez = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(V.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eW = () => (0, r.jsx)(eI.Z, {}),
    eY = () => (0, r.jsx)(ev.Z, {}),
    eK = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, o.parse)(t.location.search);
            return Object.values(eN.AW).includes(n)
                ? (0, r.jsx)(
                      N.Z,
                      eA(
                          {
                              isFullScreen: e,
                              tab: n
                          },
                          t
                      )
                  )
                : (0, r.jsx)(N.Z, eA({ isFullScreen: e }, t));
        };
    },
    eq = (e) => (0, r.jsx)(y.Z, eA({}, e)),
    eX = () => (0, r.jsx)($.Z, {}),
    eQ = () => (0, r.jsx)(W.Z, {}),
    eJ = () => (0, r.jsx)(J.Z, {}),
    e$ = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, r.jsx)($.Z, { initialSection: eC.pJs.ONLINE });
            case 'addFriends':
                return (0, r.jsx)($.Z, { initialSection: eC.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, r.jsx)($.Z, { initialSection: eC.pJs.PENDING });
            case 'sessionManagement':
                return (0, r.jsx)(s.l_, { to: eC.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, r.jsx)(s.l_, {
                    to: {
                        pathname: eC.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, r.jsx)(s.l_, { to: eC.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, r.jsx)(s.l_, { to: eC.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, r.jsx)(s.l_, { to: eC.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, r.jsx)(s.l_, { to: eC.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, r.jsx)(s.l_, { to: { pathname: eC.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, r.jsx)(s.l_, { to: { pathname: eC.Z5c.NITRO_HOME } });
            case 'connected-games':
                return (0, r.jsx)(s.l_, { to: eC.Z5c.SETTINGS('content-and-social', 'connected-games') });
            case 'boost':
                let n = t.params.guildId;
                return (0, r.jsx)(s.l_, { to: eC.Z5c.POWERUP_STORE(n) });
            case 'boost-settings':
                return (0, r.jsx)(s.l_, { to: eC.Z5c.SETTINGS('guild-boosting') });
            default:
                return (0, r.jsx)(s.l_, { to: eC.Z5c.ME });
        }
    },
    e0 = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(g.Z, {
            deepLinkType: eP.jE.FEATURES,
            path: t,
            children: e$(e)
        });
    };
function e1(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function e3(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: o, isSidebarOpen: s, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, b.t)(!0);
    let u = 'app view user trigger debugging';
    (m.R6.useExperiment({ location: u }, { autoTrackExposure: !1 }), m.R6.trackExposure({ location: u }));
    let g = (0, p.e7)([v.Z], () => v.Z.isFullscreenInContext()),
        E = (0, A.T)('ChannelSidebar'),
        O = (0, T.useAppSidebarState)((e) => !e.isOpen) && E;
    (i.useLayoutEffect(() => {
        if (E) {
            var e;
            let t = parseInt(null != (e = h.K.get(ey.nT)) ? e : '');
            (Number.isNaN(t) && (t = ey.qO), (t = Math.min(Math.max(t, ey.li), ey.zx)), !E && t <= ey.p8 && (t = ey.qO), e1(t));
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
            if (O) e1(ey.p8);
            else {
                var e;
                let t = parseInt(null != (e = h.K.get(ey.nT)) ? e : '');
                (Number.isNaN(t) && (t = ey.qO), e1(t));
            }
        }, [O]));
    let y = i.useRef(null),
        I = i.useCallback(
            (e, t) => {
                var n;
                e1(e);
                let r = t < ey.li / 3;
                (t <= ey.li ? document.body.classList.add(ej.draggingMin) : document.body.classList.remove(ej.draggingMin), t >= ey.zx ? document.body.classList.add(ej.draggingMax) : document.body.classList.remove(ej.draggingMax));
                let i = t - e;
                (null == (n = y.current) || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / ey.p8), 0.25))), E && (T.useAppSidebarState.setState({ isOpen: !r }), r && e1(ey.p8)));
            },
            [E]
        ),
        C = i.useCallback(() => {
            document.body.classList.add(ej.dragging);
        }, []),
        S = i.useCallback((e) => {
            var t;
            (document.body.classList.remove(ej.dragging), document.body.classList.remove(ej.draggingMin), document.body.classList.remove(ej.draggingMax), document.body.classList.remove(ej.collapsing), null == (t = y.current) || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(ey.nT, e), ef.default.track(eC.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e }));
        }, []),
        N = (0, _.Z)({
            minDimension: ey.li,
            maxDimension: ey.zx,
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
            O && e1(ey.p8);
        }, [O]),
        l)
    )
        return null;
    let j = { className: a()(ej.sidebarList, { [ej.sidebarListRounded]: !t }) };
    return (0, r.jsx)(f.f6W, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)('div', {
                ref: y,
                'data-collapsed': O,
                className: a()(ej.sidebar, e, {
                    [ej.fullWidth]: d.tq,
                    [ej.hidden]: g,
                    [ej.channelListHidden]: o
                }),
                children: [
                    s &&
                        !c &&
                        (0, r.jsx)(B.Z, {
                            className: ej.guilds,
                            themeOverride: n
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    'div',
                                    ((t = eA({}, j)),
                                    (i = i = { children: (0, r.jsx)(eG, {}) }),
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
                                    className: ej.sidebarResizeHandle,
                                    onMouseDown: N
                                }),
                                (0, r.jsx)(eb.b, {})
                            ]
                        })
                ]
            });
        }
    });
}
function e8() {
    var e;
    let t = (0, p.e7)([eh.ZP], () => eh.ZP.hasNotice()),
        n = (0, p.e7)([eo.Z], () => (eo.Z.darkSidebar ? eC.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eC.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                i.useEffect(
                    () =>
                        ei.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eC.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eC.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                i.useEffect(
                    () =>
                        ei.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eC.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        o = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, eC.Z5c.GUILD_BOOSTING_MARKETING(el.Hw.guildId()))) ? void 0 : e.isExact) === !0;
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, eC.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) ? void 0 : e.isExact) === !0;
        })(),
        h = (0, p.e7)([K.Z], () => K.Z.getIsOpen()),
        { notificationCenterVariant: f } = q.Lk.useExperiment({ location: 'Sidebar' }),
        g = (0, s.$B)([eC.Z5c.CHANNEL(eC.ME, el.Hw.channelId()), eC.Z5c.CHANNEL(el.Hw.guildId(), el.Hw.channelId({ optional: !0 }), ':messageId?')]),
        m = (null == g || null == (e = g.params) ? void 0 : e.channelId) === eS.oC.GUILD_ONBOARDING,
        b = l || a || o || u || m,
        _ = i.useCallback(() => Y.Z.openSidebar(), []),
        E = (0, A.T)('AppView'),
        y = (0, T.useAppSidebarState)((e) => !e.isOpen),
        C = (0, p.e7)([v.Z], () => v.Z.isFullscreenInContext()),
        N = (0, p.e7)([Z.Z], () => Z.Z.isFrameActive());
    return (0, r.jsx)('div', {
        className: ej.container,
        children: (0, r.jsx)(R.Z.Provider, {
            value: (null == g ? void 0 : g.params.guildId) === eC.ME || null == g ? void 0 : g.params.guildId,
            children: (0, r.jsxs)('div', {
                className: ej.base,
                'data-fullscreen': C,
                children: [
                    !C && (0, r.jsx)(eZ, {}),
                    d.tq ? null : (0, r.jsx)(eE.Z, {}),
                    (0, r.jsxs)('div', {
                        className: ej.content,
                        children: [
                            (0, r.jsx)(S.Z, {}),
                            (0, r.jsx)(e3, {
                                isOnFullScreenCollectiblesShopRoute: u,
                                isSidebarOpen: h,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: b,
                                hideSidebar: !h || u
                            }),
                            (0, r.jsx)('div', {
                                className: ej.page,
                                'data-collapsed': !!E && y,
                                children: (0, r.jsxs)(O.Z.Provider, {
                                    value: _,
                                    children: [
                                        (0, r.jsxs)(s.rs, {
                                            children: [
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, r.jsx)(s.l_, { to: eC.Z5c.ME })
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                    render: eq,
                                                    impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    }
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.APPLICATION_LIBRARY,
                                                    render: eW,
                                                    impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.APPLICATION_STORE,
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                    render: eK(!0),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                    render: eK(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.COLLECTIBLES_SHOP,
                                                    render: eK(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                    render: eK(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.MESSAGE_REQUESTS,
                                                    render: eQ,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.FAMILY_CENTER,
                                                    render: eJ,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.ME,
                                                    exact: !0,
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.FRIENDS,
                                                    disableTrack: !0
                                                }),
                                                f === q.jP.SIDEBAR &&
                                                    (0, r.jsx)(I.Z, {
                                                        path: eC.Z5c.NOTIFICATIONS_INBOX(el.Hw.channelId({ optional: !0 }), ':messageId?'),
                                                        render: eH,
                                                        disableTrack: !0
                                                    }),
                                                (0, r.jsx)(I.Z, {
                                                    path: [eC.Z5c.CHANNEL_THREAD_VIEW(el.Hw.guildId(), el.Hw.channelId(), ':threadId', ':messageId?'), eC.Z5c.CHANNEL(eC.ME, el.Hw.channelId()), eC.Z5c.CHANNEL(el.Hw.guildId(), el.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                    render: eB,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.GLOBAL_DISCOVERY,
                                                    render: eV,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eV,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: eV,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.QUEST_HOME,
                                                    render: eV,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.GUILD_DISCOVERY,
                                                    render: eV,
                                                    impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.GUILD_MEMBER_VERIFICATION(el.Hw.guildId()),
                                                    render: eF,
                                                    impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(el.Hw.guildId(), ':inviteCode?'),
                                                    render: ez,
                                                    impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    }
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.GUILD_FEATURE(':feature', el.Hw.guildId()),
                                                    exact: !0,
                                                    render: e0,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eC.Z5c.FEATURE(':feature'),
                                                    exact: !0,
                                                    render: e0,
                                                    disableTrack: !0
                                                })
                                            ]
                                        }),
                                        N && (0, r.jsx)(x.Z, {})
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
