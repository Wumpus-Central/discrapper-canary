n.d(t, { Z: () => eK }), n(35282), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    s = n(512969),
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
    N = n(244317),
    y = n(765717),
    I = n(358221),
    v = n(823748),
    C = n(626421),
    S = n(118379),
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
    W = n(160404),
    V = n(225675),
    B = n(745052),
    H = n(285865),
    F = n(659971),
    z = n(664608),
    Y = n(270759),
    K = n(918701),
    q = n(905423),
    Q = n(304445),
    X = n(893607),
    J = n(210887),
    $ = n(592125),
    ee = n(271383),
    et = n(430824),
    en = n(944486),
    er = n(933429),
    ei = n(626135),
    el = n(823379),
    ea = n(709054),
    eo = n(374005),
    es = n(409292),
    ec = n(316173),
    eu = n(256638),
    ed = n(663701),
    ep = n(697309),
    eh = n(425369),
    ef = n(715702),
    eg = n(981631),
    em = n(176505),
    eb = n(215023),
    e_ = n(290511),
    eE = n(186901),
    eO = n(128654);
function eN(e) {
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
function ey(e, t) {
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
let eI = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    ev = () =>
        (0, r.jsx)('div', {
            className: eO.loader,
            children: (0, r.jsx)(f.$jN, {})
        }),
    eC = (0, u.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: ev
    }),
    eS = (0, u.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: ev
    }),
    eT = (0, u.Un)({
        createPromise: () => Promise.all([n.e('23988'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: ev
    }),
    eP = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: ev
    }),
    ej = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: ev
    }),
    eA = (0, u.Un)({
        createPromise: () => n.e('44799').then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: ev
    }),
    eZ = (e) => {
        let { match: t } = e,
            n = (0, E.l)(),
            i = (0, p.e7)([$.Z, en.Z], () => {
                let e = en.Z.getChannelId();
                return $.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o } = t.params,
            c = (0, p.e7)([et.Z], () => et.Z.getGuild(l)),
            u = (0, p.e7)([ee.ZP], () => (null == l ? null : ee.ZP.getSelfMember(l))),
            d = (0, p.e7)([W.Z], () => {
                if (null == l) return;
                let e = W.Z.getData(l);
                if ((null == e ? void 0 : e.type) === V.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return j.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return j.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            h = (0, P.C4)(l, 'channel_renderer');
        if (null != l && null != a && (0, em.AB)(a))
            switch (a) {
                case em.oC.ROLE_SUBSCRIPTIONS:
                    return h
                        ? (0, r.jsx)(eC, {
                              guildId: l,
                              initialTab: j.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, r.jsx)(k.Z, { guildId: l });
                case em.oC.GUILD_SHOP:
                    return (0, r.jsx)(eC, {
                        guildId: l,
                        productId: o,
                        initialTab: d
                    });
                case em.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: eg.Z5c.CHANNEL(l, em.oC.MEMBER_SAFETY) });
                case em.oC.GUILD_HOME:
                    return (0, r.jsx)(eS, { guildId: l });
                case em.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eP, {
                        guildId: l,
                        selectedSection: e_.l7.BROWSE
                    });
                case em.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(ej, { guildId: l });
                case em.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eP, {
                        guildId: l,
                        selectedSection: e_.l7.CUSTOMIZE
                    });
                case em.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eT, { guildId: l });
                case em.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(eA, {
                        guildId: l,
                        powerupSkuId: n.get('powerupSkuId')
                    });
                default:
                    (0, el.vE)(a);
            }
        if ((0, R.p3)(c, u))
            return (0, r.jsx)(D.Z, {
                guildId: l,
                channelId: a
            });
        if ((null == i ? void 0 : i.type) === eg.d4z.GUILD_STORE) {
            let e = ea.default.cast(t.params.messageId);
            return (0, r.jsx)(
                es.Z,
                {
                    channel: i,
                    inputSkuId: e
                },
                i.id
            );
        }
        return (0, r.jsx)(v.Z, {});
    },
    ex = i.memo(function () {
        let { guildId: e, channelId: t } = (0, q.Z)(),
            n = (0, p.e7)([en.Z], () => (null != t ? t : en.Z.getChannelId(e)));
        return window.location.pathname.startsWith(eg.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(eg.Z5c.GUILD_DISCOVERY) || (0, K.OG)()
            ? (0, r.jsx)(x.Z, {})
            : null != e
              ? (0, r.jsx)(
                    M.Z,
                    {
                        selectedChannelId: n,
                        guildId: e
                    },
                    e
                )
              : (0, r.jsx)(ed.Z, {});
    }),
    ew = (e) => (0, r.jsx)(eZ, eN({}, e)),
    eL = () => (0, r.jsx)(Z.Z, {}),
    eR = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(L.Z, { guildId: t.params.guildId }) : null;
    },
    eD = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(G.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    ek = () => (0, r.jsx)(eh.Z, {}),
    eM = () => (0, r.jsx)(ef.Z, {}),
    eU = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, o.parse)(t.location.search);
            return Object.values(eb.AW).includes(n)
                ? (0, r.jsx)(
                      S.Z,
                      eN(
                          {
                              isFullScreen: e,
                              tab: n
                          },
                          t
                      )
                  )
                : (0, r.jsx)(S.Z, eN({ isFullScreen: e }, t));
        };
    },
    eG = (e) => (0, r.jsx)(N.Z, eN({}, e)),
    eW = () => (0, r.jsx)(Y.Z, {}),
    eV = () => (0, r.jsx)(B.Z, {}),
    eB = () => (0, r.jsx)(z.Z, {}),
    eH = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, r.jsx)(Y.Z, { initialSection: eg.pJs.ONLINE });
            case 'addFriends':
                return (0, r.jsx)(Y.Z, { initialSection: eg.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, r.jsx)(Y.Z, { initialSection: eg.pJs.PENDING });
            case 'sessionManagement':
                return (0, r.jsx)(s.l_, { to: eg.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, r.jsx)(s.l_, {
                    to: {
                        pathname: eg.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, r.jsx)(s.l_, { to: eg.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, r.jsx)(s.l_, { to: eg.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, r.jsx)(s.l_, { to: eg.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, r.jsx)(s.l_, { to: eg.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, r.jsx)(s.l_, { to: { pathname: eg.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, r.jsx)(s.l_, { to: { pathname: eg.Z5c.NITRO_HOME } });
            default:
                return (0, r.jsx)(s.l_, { to: eg.Z5c.ME });
        }
    },
    eF = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(g.Z, {
            deepLinkType: eE.jE.FEATURES,
            path: t,
            children: eH(e)
        });
    };
function ez(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eY(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: o, isSidebarOpen: s, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, b.t)(!0);
    let u = 'app view user trigger debugging';
    m.R6.useExperiment({ location: u }, { autoTrackExposure: !1 }), m.R6.trackExposure({ location: u });
    let g = (0, p.e7)([I.Z], () => I.Z.isFullscreenInContext()),
        E = (0, A.TH)('ChannelSidebar'),
        O = (0, A.Q3)('ChannelSidebar'),
        N = (0, T.useAppSidebarState)((e) => !e.isOpen) && E;
    i.useLayoutEffect(() => {
        if (E) {
            var e;
            let t = parseInt(null != (e = h.K.get(ep.nT)) ? e : '');
            Number.isNaN(t) && (t = ep.qO), (t = Math.min(Math.max(t, ep.li), ep.zx)), !E && t <= ep.p8 && (t = ep.qO), ez(t);
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
            if (N) ez(ep.p8);
            else {
                var e;
                let t = parseInt(null != (e = h.K.get(ep.nT)) ? e : '');
                Number.isNaN(t) && (t = ep.qO), ez(t);
            }
        }, [N]);
    let y = i.useRef(null),
        v = i.useCallback(
            (e, t) => {
                var n;
                ez(e);
                let r = t < ep.li / 3;
                t <= ep.li ? document.body.classList.add(eO.draggingMin) : document.body.classList.remove(eO.draggingMin), t >= ep.zx ? document.body.classList.add(eO.draggingMax) : document.body.classList.remove(eO.draggingMax);
                let i = t - e;
                null == (n = y.current) || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / ep.p8), 0.25))), E && (T.useAppSidebarState.setState({ isOpen: !r }), r && ez(ep.p8));
            },
            [E]
        ),
        C = i.useCallback(() => {
            document.body.classList.add(eO.dragging);
        }, []),
        S = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eO.dragging), document.body.classList.remove(eO.draggingMin), document.body.classList.remove(eO.draggingMax), document.body.classList.remove(eO.collapsing), null == (t = y.current) || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(ep.nT, e), ei.default.track(eg.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        P = (0, _.Z)({
            minDimension: ep.li,
            maxDimension: ep.zx,
            resizableDomNodeRef: y,
            onElementResize: v,
            onElementResizeStart: C,
            onElementResizeEnd: S,
            orientation: _.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        j = i.useCallback(() => {
            T.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            N && ez(ep.p8);
        }, [N]),
        l || (!O && o))
    )
        return null;
    let Z = O ? 'div' : i.Fragment,
        x = O ? { className: a()(eO.sidebarList, { [eO.sidebarListRounded]: !t }) } : {};
    return (0, r.jsx)(f.f6W, {
        theme: n,
        children: (e) =>
            (0, r.jsxs)('div', {
                ref: O ? y : void 0,
                'data-collapsed': N,
                className: a()(eO.sidebar, e, {
                    [eO.hasNotice]: t,
                    [eO.fullWidth]: d.tq,
                    [eO.hidden]: g,
                    [eO.channelListHidden]: o
                }),
                children: [
                    O &&
                        s &&
                        !c &&
                        (0, r.jsx)(U.Z, {
                            className: eO.guilds,
                            themeOverride: n
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(Z, ey(eN({}, x), { children: (0, r.jsx)(ex, {}) })),
                                O
                                    ? (0, r.jsx)(f.P3F, {
                                          onClick: j,
                                          'aria-label': 'Resize Sidebar',
                                          className: eO.sidebarResizeHandle,
                                          onMouseDown: P
                                      })
                                    : null,
                                (0, r.jsx)(eo.b, {})
                            ]
                        }),
                    !O && (0, r.jsx)(ec.Z, {})
                ]
            })
    });
}
function eK() {
    var e;
    let t = (0, p.e7)([er.ZP], () => er.ZP.hasNotice()),
        n = (0, p.e7)([J.Z], () => (J.Z.darkSidebar ? eg.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eg.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                i.useEffect(
                    () =>
                        Q.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eg.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eg.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                i.useEffect(
                    () =>
                        Q.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eg.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        o = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, eg.Z5c.GUILD_BOOSTING_MARKETING(X.Hw.guildId()))) ? void 0 : e.isExact) === !0;
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, eg.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) ? void 0 : e.isExact) === !0;
        })(),
        h = (0, p.e7)([F.Z], () => F.Z.getIsOpen()),
        f = (0, s.$B)([eg.Z5c.CHANNEL(eg.ME, X.Hw.channelId()), eg.Z5c.CHANNEL(X.Hw.guildId(), X.Hw.channelId({ optional: !0 }), ':messageId?')]),
        g = (null == f || null == (e = f.params) ? void 0 : e.channelId) === em.oC.GUILD_ONBOARDING,
        m = l || a || o || u || g,
        b = i.useCallback(() => H.Z.openSidebar(), []),
        _ = (0, A.Q3)('AppView'),
        E = (0, A.TH)('AppView'),
        N = _ ? 'div' : i.Fragment,
        v = _ ? { className: eO.page } : {},
        S = (0, T.useAppSidebarState)((e) => !e.isOpen),
        P = (0, p.e7)([I.Z], () => I.Z.isFullscreenInContext());
    return (0, r.jsxs)('div', {
        className: eO.container,
        children: [
            h &&
                !u &&
                !_ &&
                (0, r.jsx)(U.Z, {
                    className: eO.guilds,
                    themeOverride: n
                }),
            (0, r.jsx)(w.Z.Provider, {
                value: (null == f ? void 0 : f.params.guildId) === eg.ME || null == f ? void 0 : f.params.guildId,
                children: (0, r.jsxs)('div', {
                    className: eO.base,
                    'data-fullscreen': P,
                    children: [
                        _ && !P && (0, r.jsx)(eI, {}),
                        d.tq ? null : (0, r.jsx)(eu.Z, {}),
                        (0, r.jsxs)('div', {
                            className: eO.content,
                            children: [
                                (0, r.jsx)(C.Z, {}),
                                (0, r.jsx)(eY, {
                                    isOnFullScreenCollectiblesShopRoute: u,
                                    isSidebarOpen: h,
                                    hasNotice: t,
                                    sidebarTheme: n,
                                    hideChannelList: m,
                                    hideSidebar: !h || u
                                }),
                                (0, r.jsx)(
                                    N,
                                    ey(eN({}, v), {
                                        'data-collapsed': !!E && S,
                                        children: (0, r.jsx)(O.Z.Provider, {
                                            value: b,
                                            children: (0, r.jsxs)(s.rs, {
                                                children: [
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, r.jsx)(s.l_, { to: eg.Z5c.ME })
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                        render: eG,
                                                        impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { application_id: t.params.applicationId };
                                                        }
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.APPLICATION_LIBRARY,
                                                        render: ek,
                                                        impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.APPLICATION_STORE,
                                                        render: eM,
                                                        impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                        render: eU(!0),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                        render: eU(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.COLLECTIBLES_SHOP,
                                                        render: eU(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                        render: eU(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.MESSAGE_REQUESTS,
                                                        render: eV,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.FAMILY_CENTER,
                                                        render: eB,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.ME,
                                                        exact: !0,
                                                        render: eW,
                                                        impressionName: c.ImpressionNames.FRIENDS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: [eg.Z5c.CHANNEL_THREAD_VIEW(X.Hw.guildId(), X.Hw.channelId(), ':threadId', ':messageId?'), eg.Z5c.CHANNEL(eg.ME, X.Hw.channelId()), eg.Z5c.CHANNEL(X.Hw.guildId(), X.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                        render: ew,
                                                        impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.GLOBAL_DISCOVERY,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.GLOBAL_DISCOVERY_APPS,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.QUEST_HOME,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.GUILD_DISCOVERY,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.GUILD_MEMBER_VERIFICATION(X.Hw.guildId()),
                                                        render: eR,
                                                        impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(X.Hw.guildId(), ':inviteCode?'),
                                                        render: eD,
                                                        impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { has_invite: void 0 !== t.params.inviteCode };
                                                        }
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: eg.Z5c.FEATURE(':feature'),
                                                        exact: !0,
                                                        render: eF,
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
