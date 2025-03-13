n.d(t, { Z: () => eq }), n(301563), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(593473),
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
    N = n(289341),
    v = n(765717),
    y = n(358221),
    I = n(823748),
    C = n(626421),
    S = n(118379),
    T = n(267161),
    P = n(652515),
    j = n(544978),
    A = n(540059),
    Z = n(724383),
    x = n(135864),
    L = n(372900),
    w = n(63568),
    R = n(6039),
    D = n(637853),
    k = n(326145),
    M = n(269675),
    U = n(242601),
    G = n(416568),
    W = n(613609),
    V = n(160404),
    B = n(225675),
    H = n(745052),
    F = n(285865),
    z = n(659971),
    Y = n(179742),
    K = n(270759),
    q = n(918701),
    Q = n(905423),
    X = n(304445),
    J = n(893607),
    $ = n(210887),
    ee = n(592125),
    et = n(271383),
    en = n(430824),
    er = n(944486),
    ei = n(933429),
    el = n(626135),
    eo = n(823379),
    ea = n(709054),
    es = n(374005),
    ec = n(409292),
    eu = n(316173),
    ed = n(256638),
    ep = n(663701),
    eh = n(697309),
    ef = n(425369),
    eg = n(715702),
    em = n(981631),
    eb = n(176505),
    e_ = n(215023),
    eE = n(290511),
    eO = n(186901),
    eN = n(379645);
function ev(e) {
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
let ey = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    eI = () =>
        (0, r.jsx)('div', {
            className: eN.loader,
            children: (0, r.jsx)(f.$jN, {})
        }),
    eC = (0, u.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eI
    }),
    eS = (0, u.Un)({
        createPromise: () => Promise.all([n.e('16114'), n.e('97811')]).then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: eI
    }),
    eT = (0, u.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eI
    }),
    eP = (0, u.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eI
    }),
    ej = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eI
    }),
    eA = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eI
    }),
    eZ = (0, u.Un)({
        createPromise: () => n.e('44799').then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: eI
    }),
    ex = (e) => {
        let { match: t } = e,
            n = (0, E.l)(),
            i = (0, p.e7)([ee.Z, er.Z], () => {
                let e = er.Z.getChannelId();
                return ee.Z.getChannel(e);
            }),
            { guildId: l, channelId: o, messageId: a } = t.params,
            c = (0, p.e7)([en.Z], () => en.Z.getGuild(l)),
            u = (0, p.e7)([et.ZP], () => (null == l ? null : et.ZP.getSelfMember(l))),
            d = (0, p.e7)([V.Z], () => {
                if (null == l) return;
                let e = V.Z.getData(l);
                if ((null == e ? void 0 : e.type) === B.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return j.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return j.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            h = (0, P.C4)(l, 'channel_renderer'),
            f = (0, w.jS)(l, 'ChannelRenderer');
        if (null != l && null != o && (0, eb.AB)(o))
            switch (o) {
                case eb.oC.ROLE_SUBSCRIPTIONS:
                    return h
                        ? (0, r.jsx)(eC, {
                              guildId: l,
                              initialTab: j.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, r.jsx)(M.Z, { guildId: l });
                case eb.oC.GUILD_SHOP:
                    return (0, r.jsx)(eC, {
                        guildId: l,
                        productId: a,
                        initialTab: d
                    });
                case eb.oC.MEMBER_APPLICATIONS:
                    return f ? (0, r.jsx)(s.l_, { to: em.Z5c.CHANNEL(l, eb.oC.MEMBER_SAFETY) }) : (0, r.jsx)(eS, { guildId: l });
                case eb.oC.GUILD_HOME:
                    return (0, r.jsx)(eT, { guildId: l });
                case eb.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(ej, {
                        guildId: l,
                        selectedSection: eE.l7.BROWSE
                    });
                case eb.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eA, { guildId: l });
                case eb.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(ej, {
                        guildId: l,
                        selectedSection: eE.l7.CUSTOMIZE
                    });
                case eb.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eP, { guildId: l });
                case eb.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(eZ, {
                        guildId: l,
                        powerupSkuId: n.get('powerupSkuId')
                    });
                default:
                    (0, eo.vE)(o);
            }
        if ((0, D.p3)(c, u))
            return (0, r.jsx)(k.Z, {
                guildId: l,
                channelId: o
            });
        if ((null == i ? void 0 : i.type) === em.d4z.GUILD_STORE) {
            let e = ea.default.cast(t.params.messageId);
            return (0, r.jsx)(
                ec.Z,
                {
                    channel: i,
                    inputSkuId: e
                },
                i.id
            );
        }
        return (0, r.jsx)(I.Z, {});
    },
    eL = i.memo(function () {
        let { guildId: e, channelId: t } = (0, Q.Z)(),
            n = (0, p.e7)([er.Z], () => (null != t ? t : er.Z.getChannelId(e)));
        return window.location.pathname.startsWith(em.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(em.Z5c.GUILD_DISCOVERY) || (0, q.OG)()
            ? (0, r.jsx)(x.Z, {})
            : null != e
              ? (0, r.jsx)(
                    U.Z,
                    {
                        selectedChannelId: n,
                        guildId: e
                    },
                    e
                )
              : (0, r.jsx)(ep.Z, {});
    }),
    ew = (e) => (0, r.jsx)(ex, ev({}, e)),
    eR = (e) => {
        let { location: t } = e;
        return (0, r.jsx)(g.Z, {
            deepLinkType: eO.jE.FEATURES,
            path: t.pathname,
            children: (0, r.jsx)(Z.Z, {})
        });
    },
    eD = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(R.Z, { guildId: t.params.guildId }) : null;
    },
    ek = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(W.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eM = () => (0, r.jsx)(ef.Z, {}),
    eU = () =>
        (0, r.jsx)(g.Z, {
            deepLinkType: eO.jE.STORE_HOME,
            path: em.Z5c.APPLICATION_STORE,
            children: (0, r.jsx)(eg.Z, {})
        }),
    eG = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, a.parse)(t.location.search);
            return Object.values(e_.AW).includes(n)
                ? (0, r.jsx)(g.Z, {
                      deepLinkType: eO.jE.SHOP,
                      path: t.location.pathname,
                      children: (0, r.jsx)(
                          S.Z,
                          ev(
                              {
                                  isFullScreen: e,
                                  tab: n
                              },
                              t
                          )
                      )
                  })
                : (0, r.jsxs)(g.Z, {
                      deepLinkType: eO.jE.SHOP,
                      path: t.location.pathname,
                      children: [(0, r.jsx)(S.Z, ev({ isFullScreen: e }, t)), ';']
                  });
        };
    },
    eW = (e) => (0, r.jsx)(N.Z, ev({}, e)),
    eV = () => (0, r.jsx)(K.Z, {}),
    eB = () => (0, r.jsx)(H.Z, {}),
    eH = () => (0, r.jsx)(Y.Z, {}),
    eF = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, r.jsx)(K.Z, { initialSection: em.pJs.ONLINE });
            case 'addFriends':
                return (0, r.jsx)(K.Z, { initialSection: em.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, r.jsx)(K.Z, { initialSection: em.pJs.PENDING });
            case 'sessionManagement':
                return (0, r.jsx)(s.l_, { to: em.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, r.jsx)(s.l_, {
                    to: {
                        pathname: em.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, r.jsx)(s.l_, { to: em.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, r.jsx)(s.l_, { to: em.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, r.jsx)(s.l_, { to: em.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, r.jsx)(s.l_, { to: em.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, r.jsx)(s.l_, { to: { pathname: em.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, r.jsx)(s.l_, { to: { pathname: em.Z5c.NITRO_HOME } });
            default:
                return (0, r.jsx)(s.l_, { to: em.Z5c.ME });
        }
    },
    ez = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(g.Z, {
            deepLinkType: eO.jE.FEATURES,
            path: t,
            children: eF(e)
        });
    };
function eY(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eK(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: a, isSidebarOpen: s, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, b.t)(!0);
    let u = 'app view user trigger debugging';
    m.R6.useExperiment({ location: u }, { autoTrackExposure: !1 }), m.R6.trackExposure({ location: u });
    let g = (0, p.e7)([y.Z], () => y.Z.isFullscreenInContext()),
        E = (0, A.TH)('ChannelSidebar'),
        O = (0, A.Q3)('ChannelSidebar'),
        N = (0, T.useAppSidebarState)((e) => !e.isOpen) && E;
    i.useLayoutEffect(() => {
        if (E) {
            var e;
            let t = parseInt(null !== (e = h.K.get(eh.nT)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = eh.qO), (t = Math.min(Math.max(t, eh.li), eh.zx)), !E && t <= eh.p8 && (t = eh.qO), eY(t);
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
            if (N) eY(eh.p8);
            else {
                var e;
                let t = parseInt(null !== (e = h.K.get(eh.nT)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = eh.qO), eY(t);
            }
        }, [N]);
    let v = i.useRef(null),
        I = i.useCallback(
            (e, t) => {
                var n;
                eY(e);
                let r = t < eh.li / 3;
                t <= eh.li ? document.body.classList.add(eN.draggingMin) : document.body.classList.remove(eN.draggingMin), t >= eh.zx ? document.body.classList.add(eN.draggingMax) : document.body.classList.remove(eN.draggingMax);
                let i = t - e;
                null === (n = v.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / eh.p8), 0.25))), E && (T.useAppSidebarState.setState({ isOpen: !r }), r && eY(eh.p8));
            },
            [E]
        ),
        C = i.useCallback(() => {
            document.body.classList.add(eN.dragging);
        }, []),
        S = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eN.dragging), document.body.classList.remove(eN.draggingMin), document.body.classList.remove(eN.draggingMax), document.body.classList.remove(eN.collapsing), null === (t = v.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(eh.nT, e), el.default.track(em.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        P = (0, _.Z)({
            minDimension: eh.li,
            maxDimension: eh.zx,
            resizableDomNodeRef: v,
            onElementResize: I,
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
            N && eY(eh.p8);
        }, [N]),
        l || (!O && a))
    )
        return null;
    let Z = O ? 'div' : i.Fragment,
        x = O ? { className: o()(eN.sidebarList, { [eN.sidebarListRounded]: !t }) } : {};
    return (0, r.jsx)(f.f6W, {
        theme: n,
        children: (e) => {
            var i, l;
            return (0, r.jsxs)('div', {
                ref: O ? v : void 0,
                'data-collapsed': N,
                className: o()(eN.sidebar, e, {
                    [eN.hasNotice]: t,
                    [eN.fullWidth]: d.tq,
                    [eN.hidden]: g,
                    [eN.channelListHidden]: a
                }),
                children: [
                    O &&
                        s &&
                        !c &&
                        (0, r.jsx)(G.Z, {
                            className: eN.guilds,
                            themeOverride: n
                        }),
                    !a &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    Z,
                                    ((i = ev({}, x)),
                                    (l = l = { children: (0, r.jsx)(eL, {}) }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                          }),
                                    i)
                                ),
                                O
                                    ? (0, r.jsx)(f.P3F, {
                                          onClick: j,
                                          'aria-label': 'Resize Sidebar',
                                          className: eN.sidebarResizeHandle,
                                          onMouseDown: P
                                      })
                                    : null,
                                (0, r.jsx)(es.b, {})
                            ]
                        }),
                    !O && (0, r.jsx)(eu.Z, {})
                ]
            });
        }
    });
}
function eq() {
    var e;
    let t = (0, p.e7)([ei.ZP], () => ei.ZP.hasNotice()),
        n = (0, p.e7)([$.Z], () => ($.Z.darkSidebar ? em.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                i.useEffect(
                    () =>
                        X.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        o = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                i.useEffect(
                    () =>
                        X.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            var e;
            let t = (0, s.TH)();
            return (null === (e = (0, s.LX)(t.pathname, em.Z5c.GUILD_BOOSTING_MARKETING(J.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (null === (e = (0, s.LX)(t.pathname, em.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        h = (0, p.e7)([z.Z], () => z.Z.getIsOpen()),
        f = (0, s.$B)([em.Z5c.CHANNEL(em.ME, J.Hw.channelId()), em.Z5c.CHANNEL(J.Hw.guildId(), J.Hw.channelId({ optional: !0 }), ':messageId?')]),
        g = (null == f ? void 0 : null === (e = f.params) || void 0 === e ? void 0 : e.channelId) === eb.oC.GUILD_ONBOARDING,
        m = l || o || a || u || g,
        b = i.useCallback(() => F.Z.openSidebar(), []),
        _ = (0, A.Q3)('AppView'),
        E = (0, A.TH)('AppView'),
        N = _ ? 'div' : i.Fragment,
        I = (0, T.useAppSidebarState)((e) => !e.isOpen),
        S = (0, p.e7)([y.Z], () => y.Z.isFullscreenInContext());
    return (0, r.jsxs)('div', {
        className: eN.container,
        children: [
            h &&
                !u &&
                !_ &&
                (0, r.jsx)(G.Z, {
                    className: eN.guilds,
                    themeOverride: n
                }),
            (0, r.jsx)(L.Z.Provider, {
                value: (null == f ? void 0 : f.params.guildId) === em.ME ? void 0 : null == f ? void 0 : f.params.guildId,
                children: (0, r.jsxs)('div', {
                    className: eN.base,
                    'data-fullscreen': S,
                    children: [
                        _ && !S && (0, r.jsx)(ey, {}),
                        d.tq ? null : (0, r.jsx)(ed.Z, {}),
                        (0, r.jsxs)('div', {
                            className: eN.content,
                            children: [
                                (0, r.jsx)(C.Z, {}),
                                (0, r.jsx)(eK, {
                                    isOnFullScreenCollectiblesShopRoute: u,
                                    isSidebarOpen: h,
                                    hasNotice: t,
                                    sidebarTheme: n,
                                    hideChannelList: m,
                                    hideSidebar: !h || u
                                }),
                                (0, r.jsx)(N, {
                                    className: eN.page,
                                    'data-collapsed': !!E && I,
                                    children: (0, r.jsx)(O.Z.Provider, {
                                        value: b,
                                        children: (0, r.jsxs)(s.rs, {
                                            children: [
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, r.jsx)(s.l_, { to: em.Z5c.ME })
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                    render: eW,
                                                    impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    }
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.APPLICATION_LIBRARY,
                                                    render: eM,
                                                    impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.APPLICATION_STORE,
                                                    render: eU,
                                                    impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                    render: eG(!0),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                    render: eG(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.COLLECTIBLES_SHOP,
                                                    render: eG(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                    render: eG(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.MESSAGE_REQUESTS,
                                                    render: eB,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.FAMILY_CENTER,
                                                    render: eH,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.ME,
                                                    exact: !0,
                                                    render: eV,
                                                    impressionName: c.ImpressionNames.FRIENDS,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: [em.Z5c.CHANNEL_THREAD_VIEW(J.Hw.guildId(), J.Hw.channelId(), ':threadId', ':messageId?'), em.Z5c.CHANNEL(em.ME, J.Hw.channelId()), em.Z5c.CHANNEL(J.Hw.guildId(), J.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                    render: ew,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.GLOBAL_DISCOVERY,
                                                    render: eR,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eR,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: eR,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.QUEST_HOME,
                                                    render: eR,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.GUILD_DISCOVERY,
                                                    render: eR,
                                                    impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.GUILD_MEMBER_VERIFICATION(J.Hw.guildId()),
                                                    render: eD,
                                                    impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(J.Hw.guildId(), ':inviteCode?'),
                                                    render: ek,
                                                    impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    }
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    path: em.Z5c.FEATURE(':feature'),
                                                    exact: !0,
                                                    render: ez,
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
        ]
    });
}
