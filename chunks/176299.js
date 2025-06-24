n.d(t, { Z: () => e0 }), n(35282), n(388685);
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
    Z = n(724383),
    x = n(135864),
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
    X = n(664608),
    Q = n(270759),
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
    em = n(256638),
    eb = n(663701),
    e_ = n(697309),
    eE = n(425369),
    eO = n(715702),
    ey = n(981631),
    eI = n(176505),
    ev = n(215023),
    eC = n(290511),
    eS = n(186901),
    eN = n(128654);
function eT(e) {
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
let eP = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    ej = () =>
        (0, r.jsx)('div', {
            className: eN.loader,
            children: (0, r.jsx)(f.$jN, {})
        }),
    eA = (0, u.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: ej
    }),
    eZ = (0, u.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: ej
    }),
    ex = (0, u.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: ej
    }),
    ew = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: ej
    }),
    eL = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: ej
    }),
    eR = (0, u.Un)({
        createPromise: () => Promise.all([n.e('55616'), n.e('44799')]).then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: ej
    }),
    eD = (e) => {
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
        if (null != l && null != a && (0, eI.AB)(a))
            switch (a) {
                case eI.oC.ROLE_SUBSCRIPTIONS:
                    return f
                        ? (0, r.jsx)(eA, {
                              guildId: l,
                              initialTab: j.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, r.jsx)(k.Z, { guildId: l });
                case eI.oC.GUILD_SHOP:
                    return (0, r.jsx)(eA, {
                        guildId: l,
                        productId: o,
                        initialTab: h
                    });
                case eI.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: ey.Z5c.CHANNEL(l, eI.oC.MEMBER_SAFETY) });
                case eI.oC.GUILD_HOME:
                    return (0, r.jsx)(eZ, { guildId: l });
                case eI.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(ew, {
                        guildId: l,
                        selectedSection: eC.l7.BROWSE
                    });
                case eI.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eL, { guildId: l });
                case eI.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(ew, {
                        guildId: l,
                        selectedSection: eC.l7.CUSTOMIZE
                    });
                case eI.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(ex, { guildId: l });
                case eI.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(eR, {
                        guildId: l,
                        powerupSkuId: n.get('powerupSkuId')
                    });
                case eI.oC.REPORT_TO_MOD:
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
    ek = i.memo(function () {
        let { guildId: e, channelId: t } = (0, ee.Z)(),
            { notificationCenterVariant: n } = Y.Lk.useExperiment({ location: 'Sidebar' }),
            i = (0, p.e7)([ec.Z], () => (null != t ? t : ec.Z.getChannelId(e)));
        return window.location.pathname.startsWith(ey.Z5c.NOTIFICATIONS_INBOX())
            ? ('sidebar' !== n && (0, er.dL)(ea.Z.defaultRoute), (0, r.jsx)(q.Z, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(ey.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(ey.Z5c.GUILD_DISCOVERY) || (0, J.OG)()
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
                : (0, r.jsx)(eb.Z, {});
    }),
    eM = (e) => (0, r.jsx)(eD, eT({}, e)),
    eU = () => (0, r.jsx)(Z.Z, {}),
    eG = (e) => (null != e.match.params.channelId ? eM(e) : (0, r.jsx)(K.Z, {})),
    eB = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(L.Z, { guildId: t.params.guildId }) : null;
    },
    eV = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(G.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eH = () => (0, r.jsx)(eE.Z, {}),
    eF = () => (0, r.jsx)(eO.Z, {}),
    ez = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, o.parse)(t.location.search);
            return Object.values(ev.AW).includes(n)
                ? (0, r.jsx)(
                      N.Z,
                      eT(
                          {
                              isFullScreen: e,
                              tab: n
                          },
                          t
                      )
                  )
                : (0, r.jsx)(N.Z, eT({ isFullScreen: e }, t));
        };
    },
    eW = (e) => (0, r.jsx)(y.Z, eT({}, e)),
    eY = () => (0, r.jsx)(Q.Z, {}),
    eK = () => (0, r.jsx)(F.Z, {}),
    eq = () => (0, r.jsx)(X.Z, {}),
    eX = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, r.jsx)(Q.Z, { initialSection: ey.pJs.ONLINE });
            case 'addFriends':
                return (0, r.jsx)(Q.Z, { initialSection: ey.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, r.jsx)(Q.Z, { initialSection: ey.pJs.PENDING });
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
            case 'boost-settings':
                return (0, r.jsx)(s.l_, { to: ey.Z5c.SETTINGS('guild-boosting') });
            default:
                return (0, r.jsx)(s.l_, { to: ey.Z5c.ME });
        }
    },
    eQ = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(g.Z, {
            deepLinkType: eS.jE.FEATURES,
            path: t,
            children: eX(e)
        });
    };
function eJ(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function e$(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: o, isSidebarOpen: s, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, b.t)(!0);
    let u = 'app view user trigger debugging';
    m.R6.useExperiment({ location: u }, { autoTrackExposure: !1 }), m.R6.trackExposure({ location: u });
    let g = (0, p.e7)([v.Z], () => v.Z.isFullscreenInContext()),
        E = (0, A.T)('ChannelSidebar'),
        O = (0, T.useAppSidebarState)((e) => !e.isOpen) && E;
    i.useLayoutEffect(() => {
        if (E) {
            var e;
            let t = parseInt(null != (e = h.K.get(e_.nT)) ? e : '');
            Number.isNaN(t) && (t = e_.qO), (t = Math.min(Math.max(t, e_.li), e_.zx)), !E && t <= e_.p8 && (t = e_.qO), eJ(t);
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
            if (O) eJ(e_.p8);
            else {
                var e;
                let t = parseInt(null != (e = h.K.get(e_.nT)) ? e : '');
                Number.isNaN(t) && (t = e_.qO), eJ(t);
            }
        }, [O]);
    let y = i.useRef(null),
        I = i.useCallback(
            (e, t) => {
                var n;
                eJ(e);
                let r = t < e_.li / 3;
                t <= e_.li ? document.body.classList.add(eN.draggingMin) : document.body.classList.remove(eN.draggingMin), t >= e_.zx ? document.body.classList.add(eN.draggingMax) : document.body.classList.remove(eN.draggingMax);
                let i = t - e;
                null == (n = y.current) || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / e_.p8), 0.25))), E && (T.useAppSidebarState.setState({ isOpen: !r }), r && eJ(e_.p8));
            },
            [E]
        ),
        C = i.useCallback(() => {
            document.body.classList.add(eN.dragging);
        }, []),
        S = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eN.dragging), document.body.classList.remove(eN.draggingMin), document.body.classList.remove(eN.draggingMax), document.body.classList.remove(eN.collapsing), null == (t = y.current) || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(e_.nT, e), ed.default.track(ey.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        N = (0, _.Z)({
            minDimension: e_.li,
            maxDimension: e_.zx,
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
            O && eJ(e_.p8);
        }, [O]),
        l)
    )
        return null;
    let j = { className: a()(eN.sidebarList, { [eN.sidebarListRounded]: !t }) };
    return (0, r.jsx)(f.f6W, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)('div', {
                ref: y,
                'data-collapsed': O,
                className: a()(eN.sidebar, e, {
                    [eN.fullWidth]: d.tq,
                    [eN.hidden]: g,
                    [eN.channelListHidden]: o
                }),
                children: [
                    s &&
                        !c &&
                        (0, r.jsx)(U.Z, {
                            className: eN.guilds,
                            themeOverride: n
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    'div',
                                    ((t = eT({}, j)),
                                    (i = i = { children: (0, r.jsx)(ek, {}) }),
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
                                    className: eN.sidebarResizeHandle,
                                    onMouseDown: N
                                }),
                                (0, r.jsx)(ef.b, {})
                            ]
                        })
                ]
            });
        }
    });
}
function e0() {
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
        { notificationCenterVariant: f } = Y.Lk.useExperiment({ location: 'Sidebar' }),
        g = (0, s.$B)([ey.Z5c.CHANNEL(ey.ME, en.Hw.channelId()), ey.Z5c.CHANNEL(en.Hw.guildId(), en.Hw.channelId({ optional: !0 }), ':messageId?')]),
        m = (null == g || null == (e = g.params) ? void 0 : e.channelId) === eI.oC.GUILD_ONBOARDING,
        b = l || a || o || u || m,
        _ = i.useCallback(() => z.Z.openSidebar(), []),
        E = (0, A.T)('AppView'),
        y = (0, T.useAppSidebarState)((e) => !e.isOpen),
        C = (0, p.e7)([v.Z], () => v.Z.isFullscreenInContext());
    return (0, r.jsx)('div', {
        className: eN.container,
        children: (0, r.jsx)(w.Z.Provider, {
            value: (null == g ? void 0 : g.params.guildId) === ey.ME || null == g ? void 0 : g.params.guildId,
            children: (0, r.jsxs)('div', {
                className: eN.base,
                'data-fullscreen': C,
                children: [
                    !C && (0, r.jsx)(eP, {}),
                    d.tq ? null : (0, r.jsx)(em.Z, {}),
                    (0, r.jsxs)('div', {
                        className: eN.content,
                        children: [
                            (0, r.jsx)(S.Z, {}),
                            (0, r.jsx)(e$, {
                                isOnFullScreenCollectiblesShopRoute: u,
                                isSidebarOpen: h,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: b,
                                hideSidebar: !h || u
                            }),
                            (0, r.jsx)('div', {
                                className: eN.page,
                                'data-collapsed': !!E && y,
                                children: (0, r.jsx)(O.Z.Provider, {
                                    value: _,
                                    children: (0, r.jsxs)(s.rs, {
                                        children: [
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.ACTIVITY,
                                                disableTrack: !0,
                                                children: (0, r.jsx)(s.l_, { to: ey.Z5c.ME })
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                render: eW,
                                                impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                impressionProperties: (e) => {
                                                    let { computedMatch: t } = e;
                                                    return { application_id: t.params.applicationId };
                                                }
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.APPLICATION_LIBRARY,
                                                render: eH,
                                                impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.APPLICATION_STORE,
                                                render: eF,
                                                impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                render: ez(!0),
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                render: ez(!1),
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.COLLECTIBLES_SHOP,
                                                render: ez(!1),
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                render: ez(!1),
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.MESSAGE_REQUESTS,
                                                render: eK,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.FAMILY_CENTER,
                                                render: eq,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.ME,
                                                exact: !0,
                                                render: eY,
                                                impressionName: c.ImpressionNames.FRIENDS,
                                                disableTrack: !0
                                            }),
                                            f === Y.jP.SIDEBAR &&
                                                (0, r.jsx)(I.Z, {
                                                    path: ey.Z5c.NOTIFICATIONS_INBOX(en.Hw.channelId({ optional: !0 }), ':messageId?'),
                                                    render: eG,
                                                    disableTrack: !0
                                                }),
                                            (0, r.jsx)(I.Z, {
                                                path: [ey.Z5c.CHANNEL_THREAD_VIEW(en.Hw.guildId(), en.Hw.channelId(), ':threadId', ':messageId?'), ey.Z5c.CHANNEL(ey.ME, en.Hw.channelId()), ey.Z5c.CHANNEL(en.Hw.guildId(), en.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                render: eM,
                                                impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.GLOBAL_DISCOVERY,
                                                render: eU,
                                                impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                disableTrack: !0,
                                                exact: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                render: eU,
                                                impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.GLOBAL_DISCOVERY_APPS,
                                                render: eU,
                                                impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.QUEST_HOME,
                                                render: eU,
                                                impressionName: c.ImpressionNames.QUEST_HOME,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.GUILD_DISCOVERY,
                                                render: eU,
                                                impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.GUILD_MEMBER_VERIFICATION(en.Hw.guildId()),
                                                render: eB,
                                                impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(en.Hw.guildId(), ':inviteCode?'),
                                                render: eV,
                                                impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                impressionProperties: (e) => {
                                                    let { computedMatch: t } = e;
                                                    return { has_invite: void 0 !== t.params.inviteCode };
                                                }
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.GUILD_FEATURE(':feature', en.Hw.guildId()),
                                                exact: !0,
                                                render: eQ,
                                                disableTrack: !0
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                path: ey.Z5c.FEATURE(':feature'),
                                                exact: !0,
                                                render: eQ,
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
