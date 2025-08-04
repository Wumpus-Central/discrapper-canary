(n.d(t, { Z: () => e4 }), n(35282), n(388685));
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
    g = n(904245),
    m = n(773244),
    b = n(711237),
    _ = n(532835),
    O = n(347469),
    E = n(169382),
    y = n(290297),
    v = n(244317),
    I = n(765717),
    C = n(358221),
    S = n(823748),
    N = n(626421),
    T = n(118379),
    P = n(267161),
    j = n(652515),
    A = n(544978),
    Z = n(540059),
    x = n(591472),
    w = n(351051),
    L = n(724383),
    R = n(135864),
    D = n(372900),
    k = n(6039),
    M = n(637853),
    U = n(326145),
    G = n(269675),
    V = n(242601),
    H = n(416568),
    B = n(613609),
    F = n(160404),
    z = n(225675),
    W = n(927723),
    Y = n(745052),
    K = n(285865),
    q = n(659971),
    Q = n(821020),
    X = n(147341),
    J = n(82409),
    $ = n(664608),
    ee = n(270759),
    et = n(509212),
    en = n(982168),
    er = n(893908),
    ei = n(905423),
    el = n(304445),
    ea = n(893607),
    eo = n(703656),
    es = n(984802),
    ec = n(592125),
    eu = n(896797),
    ed = n(271383),
    ep = n(430824),
    eh = n(944486),
    ef = n(933429),
    eg = n(626135),
    em = n(823379),
    eb = n(709054),
    e_ = n(374005),
    eO = n(409292),
    eE = n(256638),
    ey = n(663701),
    ev = n(697309),
    eI = n(425369),
    eC = n(715702),
    eS = n(981631),
    eN = n(176505),
    eT = n(215023),
    eP = n(290511),
    ej = n(186901),
    eA = n(128654);
function eZ(e) {
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
let ex = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    ew = () =>
        (0, r.jsx)('div', {
            className: eA.loader,
            children: (0, r.jsx)(f.$jN, {})
        }),
    eL = (0, u.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: ew
    }),
    eR = (0, u.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: ew
    }),
    eD = (0, u.Un)({
        createPromise: () => Promise.all([n.e('58175'), n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: ew
    }),
    ek = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: ew
    }),
    eM = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: ew
    }),
    eU = (0, u.Un)({
        createPromise: () => n.e('44799').then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: ew
    }),
    eG = (e) => {
        let { match: t } = e,
            n = (0, E.l)(),
            i = (0, p.e7)([ec.Z, eh.Z], () => {
                let e = eh.Z.getChannelId();
                return ec.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o, threadId: c } = t.params,
            u = (0, p.e7)([ep.Z], () => ep.Z.getGuild(l)),
            d = (0, p.e7)([ed.ZP], () => (null == l ? null : ed.ZP.getSelfMember(l))),
            h = (0, p.e7)([F.Z], () => {
                if (null == l) return;
                let e = F.Z.getData(l);
                if ((null == e ? void 0 : e.type) === z.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return A.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return A.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, en.WF)(a) && (0, en.WF)(c)) || (null != u && (0, eo.uL)(eS.Z5c.CHANNEL(u.id, (0, er.Z)(u))), (0, W.V)());
        let f = (0, j.C4)(l, 'channel_renderer');
        if (null != l && null != a && (0, eN.AB)(a))
            switch (a) {
                case eN.oC.ROLE_SUBSCRIPTIONS:
                    return f
                        ? (0, r.jsx)(eL, {
                              guildId: l,
                              initialTab: A.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, r.jsx)(G.Z, { guildId: l });
                case eN.oC.GUILD_SHOP:
                    return (0, r.jsx)(eL, {
                        guildId: l,
                        productId: o,
                        initialTab: h
                    });
                case eN.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: eS.Z5c.CHANNEL(l, eN.oC.MEMBER_SAFETY) });
                case eN.oC.GUILD_HOME:
                    return (0, r.jsx)(eR, { guildId: l });
                case eN.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(ek, {
                        guildId: l,
                        selectedSection: eP.l7.BROWSE
                    });
                case eN.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eM, { guildId: l });
                case eN.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(ek, {
                        guildId: l,
                        selectedSection: eP.l7.CUSTOMIZE
                    });
                case eN.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eD, { guildId: l });
                case eN.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(eU, {
                        guildId: l,
                        powerupSkuId: n.get('powerupSkuId')
                    });
                case eN.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(S.Z, {});
                default:
                    (0, em.vE)(a);
            }
        if ((0, M.p3)(u, d))
            return (0, r.jsx)(U.Z, {
                guildId: l,
                channelId: a
            });
        if ((null == i ? void 0 : i.type) === eS.d4z.GUILD_STORE) {
            let e = eb.default.cast(t.params.messageId);
            return (0, r.jsx)(
                eO.Z,
                {
                    channel: i,
                    inputSkuId: e
                },
                i.id
            );
        }
        return (0, r.jsx)(S.Z, {});
    },
    eV = i.memo(function () {
        let { guildId: e, channelId: t } = (0, ei.Z)(),
            { notificationCenterVariant: n } = Q.Lk.useExperiment({ location: 'Sidebar' }),
            i = (0, p.e7)([eh.Z], () => (null != t ? t : eh.Z.getChannelId(e)));
        return window.location.pathname.startsWith(eS.Z5c.CHANNEL(eS.STv))
            ? ('sidebar' !== n && (0, eo.dL)(eu.Z.defaultRoute), (0, r.jsx)(J.Z, { includePanelSpacing: !0 }))
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
                : (0, r.jsx)(ey.Z, {});
    }),
    eH = (e) => (0, r.jsx)(eG, eZ({}, e)),
    eB = () => (0, r.jsx)(L.Z, {}),
    eF = (e) => (0, r.jsx)(ez, eZ({}, e)),
    ez = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (i.useEffect(() => {
            null != t &&
                null != n &&
                g.Z.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                    context: 'notification_center_navigation'
                });
        }, [t, n]),
        null == t)
            ? (0, r.jsx)(X.Z, {})
            : eH(e);
    },
    eW = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(k.Z, { guildId: t.params.guildId }) : null;
    },
    eY = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(B.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eK = () => (0, r.jsx)(eI.Z, {}),
    eq = () => (0, r.jsx)(eC.Z, {}),
    eQ = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, o.parse)(t.location.search);
            return Object.values(eT.AW).includes(n)
                ? (0, r.jsx)(
                      T.Z,
                      eZ(
                          {
                              isFullScreen: e,
                              tab: n
                          },
                          t
                      )
                  )
                : (0, r.jsx)(T.Z, eZ({ isFullScreen: e }, t));
        };
    },
    eX = (e) => (0, r.jsx)(v.Z, eZ({}, e)),
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
            case 'boost-settings':
                return (0, r.jsx)(s.l_, { to: eS.Z5c.SETTINGS('guild-boosting') });
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
    (b.R6.useExperiment({ location: u }, { autoTrackExposure: !1 }), b.R6.trackExposure({ location: u }));
    let g = (0, p.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        m = (0, Z.T)('ChannelSidebar'),
        E = (0, P.useAppSidebarState)((e) => !e.isOpen) && m;
    (i.useLayoutEffect(() => {
        if (m) {
            var e;
            let t = parseInt(null != (e = h.K.get(ev.nT)) ? e : '');
            (Number.isNaN(t) && (t = ev.qO), (t = Math.min(Math.max(t, ev.li), ev.zx)), !m && t <= ev.p8 && (t = ev.qO), e8(t));
            let n = (e) => {
                e.metaKey && 'b' === e.key && P.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
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
            if (E) e8(ev.p8);
            else {
                var e;
                let t = parseInt(null != (e = h.K.get(ev.nT)) ? e : '');
                (Number.isNaN(t) && (t = ev.qO), e8(t));
            }
        }, [E]));
    let y = i.useRef(null),
        v = i.useCallback(
            (e, t) => {
                var n;
                e8(e);
                let r = t < ev.li / 3;
                (t <= ev.li ? document.body.classList.add(eA.draggingMin) : document.body.classList.remove(eA.draggingMin), t >= ev.zx ? document.body.classList.add(eA.draggingMax) : document.body.classList.remove(eA.draggingMax));
                let i = t - e;
                (null == (n = y.current) || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / ev.p8), 0.25))), m && (P.useAppSidebarState.setState({ isOpen: !r }), r && e8(ev.p8)));
            },
            [m]
        ),
        I = i.useCallback(() => {
            document.body.classList.add(eA.dragging);
        }, []),
        S = i.useCallback((e) => {
            var t;
            (document.body.classList.remove(eA.dragging), document.body.classList.remove(eA.draggingMin), document.body.classList.remove(eA.draggingMax), document.body.classList.remove(eA.collapsing), null == (t = y.current) || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(ev.nT, e), eg.default.track(eS.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e }));
        }, []),
        N = (0, O.Z)({
            minDimension: ev.li,
            maxDimension: ev.zx,
            resizableDomNodeRef: y,
            onElementResize: v,
            onElementResizeStart: I,
            onElementResizeEnd: S,
            orientation: O.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        T = i.useCallback(() => {
            P.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            E && e8(ev.p8);
        }, [E]),
        l)
    )
        return null;
    let j = { className: a()(eA.sidebarList, { [eA.sidebarListRounded]: !t }) };
    return (0, r.jsx)(f.f6W, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)('div', {
                ref: y,
                'data-collapsed': E,
                className: a()(eA.sidebar, e, {
                    [eA.fullWidth]: d.tq,
                    [eA.hidden]: g,
                    [eA.channelListHidden]: o
                }),
                children: [
                    s &&
                        !c &&
                        (0, r.jsx)(H.Z, {
                            className: eA.guilds,
                            themeOverride: n
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    'div',
                                    ((t = eZ({}, j)),
                                    (i = i = { children: (0, r.jsx)(eV, {}) }),
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
                                    onClick: T,
                                    'aria-label': 'Resize Sidebar',
                                    className: eA.sidebarResizeHandle,
                                    onMouseDown: N
                                }),
                                (0, r.jsx)(e_.b, {})
                            ]
                        })
                ]
            });
        }
    });
}
function e4() {
    var e;
    let t = (0, p.e7)([ef.ZP], () => ef.ZP.hasNotice()),
        n = (0, es.Ll)(),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eS.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                i.useEffect(
                    () =>
                        el.Z.addRouteChangeListener((e) => {
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
                        el.Z.addRouteChangeListener((e) => {
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
            return (null == (e = (0, s.LX)(t.pathname, eS.Z5c.GUILD_BOOSTING_MARKETING(ea.Hw.guildId()))) ? void 0 : e.isExact) === !0;
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, eS.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) ? void 0 : e.isExact) === !0;
        })(),
        h = (0, p.e7)([q.Z], () => q.Z.getIsOpen()),
        { notificationCenterVariant: f } = Q.Lk.useExperiment({ location: 'Sidebar' }),
        g = (0, s.$B)([eS.Z5c.CHANNEL(eS.ME, ea.Hw.channelId()), eS.Z5c.CHANNEL(ea.Hw.guildId(), ea.Hw.channelId({ optional: !0 }), ':messageId?')]),
        m = (null == g || null == (e = g.params) ? void 0 : e.channelId) === eN.oC.GUILD_ONBOARDING,
        b = l || a || o || u || m,
        _ = i.useCallback(() => K.Z.openSidebar(), []),
        O = (0, Z.T)('AppView'),
        E = (0, P.useAppSidebarState)((e) => !e.isOpen),
        v = (0, p.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        S = (0, p.e7)([x.Z], () => x.Z.isFrameActive());
    return (0, r.jsx)('div', {
        className: eA.container,
        children: (0, r.jsx)(D.Z.Provider, {
            value: (null == g ? void 0 : g.params.guildId) === eS.ME || null == g ? void 0 : g.params.guildId,
            children: (0, r.jsxs)('div', {
                className: eA.base,
                'data-fullscreen': v,
                children: [
                    !v && (0, r.jsx)(ex, {}),
                    d.tq ? null : (0, r.jsx)(eE.Z, {}),
                    (0, r.jsxs)('div', {
                        className: eA.content,
                        children: [
                            (0, r.jsx)(N.Z, {}),
                            (0, r.jsx)(e5, {
                                isOnFullScreenCollectiblesShopRoute: u,
                                isSidebarOpen: h,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: b,
                                hideSidebar: !h || u
                            }),
                            (0, r.jsx)('div', {
                                className: eA.page,
                                'data-collapsed': !!O && E,
                                children: (0, r.jsxs)(y.Z.Provider, {
                                    value: _,
                                    children: [
                                        (0, r.jsxs)(s.rs, {
                                            children: [
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, r.jsx)(s.l_, { to: eS.Z5c.ME })
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                    render: eX,
                                                    impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    }
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.APPLICATION_LIBRARY,
                                                    render: eK,
                                                    impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.APPLICATION_STORE,
                                                    render: eq,
                                                    impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                    render: eQ(!0),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                    render: eQ(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.COLLECTIBLES_SHOP,
                                                    render: eQ(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                    render: eQ(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.MESSAGE_REQUESTS,
                                                    render: e$,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.FAMILY_CENTER,
                                                    render: e0,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.ME,
                                                    exact: !0,
                                                    render: eJ,
                                                    impressionName: c.ImpressionNames.FRIENDS,
                                                    disableTrack: !0
                                                }),
                                                f === Q.jP.SIDEBAR &&
                                                    (0, r.jsx)(I.Z, {
                                                        path: eS.Z5c.CHANNEL(eS.STv, ea.Hw.channelId({ optional: !0 }), ':messageId?'),
                                                        render: eF,
                                                        disableTrack: !0
                                                    }),
                                                (0, r.jsx)(I.Z, {
                                                    path: [eS.Z5c.CHANNEL_THREAD_VIEW(ea.Hw.guildId(), ea.Hw.channelId(), ':threadId', ':messageId?'), eS.Z5c.CHANNEL(eS.ME, ea.Hw.channelId()), eS.Z5c.CHANNEL(ea.Hw.guildId(), ea.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                    render: eH,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.GLOBAL_DISCOVERY,
                                                    render: eB,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eB,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: eB,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.QUEST_HOME,
                                                    render: eB,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.GUILD_DISCOVERY,
                                                    render: eB,
                                                    impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.GUILD_MEMBER_VERIFICATION(ea.Hw.guildId()),
                                                    render: eW,
                                                    impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(ea.Hw.guildId(), ':inviteCode?'),
                                                    render: eY,
                                                    impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    }
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.GUILD_FEATURE(':feature', ea.Hw.guildId()),
                                                    exact: !0,
                                                    render: e3,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    path: eS.Z5c.FEATURE(':feature'),
                                                    exact: !0,
                                                    render: e3,
                                                    disableTrack: !0
                                                })
                                            ]
                                        }),
                                        S && (0, r.jsx)(w.Z, {})
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
