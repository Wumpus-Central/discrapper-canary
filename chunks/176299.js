n.d(t, { Z: () => eQ }), n(301563), n(47120);
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
    Y = n(664608),
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
    ea = n(823379),
    eo = n(709054),
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
    eN = n(128654);
function ey(e) {
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
function eI(e, t) {
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
let ev = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    eC = () =>
        (0, r.jsx)('div', {
            className: eN.loader,
            children: (0, r.jsx)(f.$jN, {})
        }),
    eS = (0, u.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eC
    }),
    eT = (0, u.Un)({
        createPromise: () => Promise.all([n.e('16114'), n.e('97811')]).then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: eC
    }),
    eP = (0, u.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eC
    }),
    ej = (0, u.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eC
    }),
    eA = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eC
    }),
    eZ = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eC
    }),
    ex = (0, u.Un)({
        createPromise: () => n.e('44799').then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: eC
    }),
    eL = (e) => {
        let { match: t } = e,
            n = (0, E.l)(),
            i = (0, p.e7)([ee.Z, er.Z], () => {
                let e = er.Z.getChannelId();
                return ee.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o } = t.params,
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
        if (null != l && null != a && (0, eb.AB)(a))
            switch (a) {
                case eb.oC.ROLE_SUBSCRIPTIONS:
                    return h
                        ? (0, r.jsx)(eS, {
                              guildId: l,
                              initialTab: j.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, r.jsx)(M.Z, { guildId: l });
                case eb.oC.GUILD_SHOP:
                    return (0, r.jsx)(eS, {
                        guildId: l,
                        productId: o,
                        initialTab: d
                    });
                case eb.oC.MEMBER_APPLICATIONS:
                    return f ? (0, r.jsx)(s.l_, { to: em.Z5c.CHANNEL(l, eb.oC.MEMBER_SAFETY) }) : (0, r.jsx)(eT, { guildId: l });
                case eb.oC.GUILD_HOME:
                    return (0, r.jsx)(eP, { guildId: l });
                case eb.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eA, {
                        guildId: l,
                        selectedSection: eE.l7.BROWSE
                    });
                case eb.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eZ, { guildId: l });
                case eb.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eA, {
                        guildId: l,
                        selectedSection: eE.l7.CUSTOMIZE
                    });
                case eb.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(ej, { guildId: l });
                case eb.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(ex, {
                        guildId: l,
                        powerupSkuId: n.get('powerupSkuId')
                    });
                default:
                    (0, ea.vE)(a);
            }
        if ((0, D.p3)(c, u))
            return (0, r.jsx)(k.Z, {
                guildId: l,
                channelId: a
            });
        if ((null == i ? void 0 : i.type) === em.d4z.GUILD_STORE) {
            let e = eo.default.cast(t.params.messageId);
            return (0, r.jsx)(
                ec.Z,
                {
                    channel: i,
                    inputSkuId: e
                },
                i.id
            );
        }
        return (0, r.jsx)(v.Z, {});
    },
    ew = i.memo(function () {
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
    eR = (e) => (0, r.jsx)(eL, ey({}, e)),
    eD = (e) => {
        let { location: t } = e;
        return (0, r.jsx)(g.Z, {
            deepLinkType: eO.jE.FEATURES,
            path: t.pathname,
            children: (0, r.jsx)(Z.Z, {})
        });
    },
    ek = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(R.Z, { guildId: t.params.guildId }) : null;
    },
    eM = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(W.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eU = () => (0, r.jsx)(ef.Z, {}),
    eG = () =>
        (0, r.jsx)(g.Z, {
            deepLinkType: eO.jE.STORE_HOME,
            path: em.Z5c.APPLICATION_STORE,
            children: (0, r.jsx)(eg.Z, {})
        }),
    eW = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, o.parse)(t.location.search);
            return Object.values(e_.AW).includes(n)
                ? (0, r.jsx)(g.Z, {
                      deepLinkType: eO.jE.SHOP,
                      path: t.location.pathname,
                      search: t.location.search,
                      children: (0, r.jsx)(
                          S.Z,
                          ey(
                              {
                                  isFullScreen: e,
                                  tab: n
                              },
                              t
                          )
                      )
                  })
                : (0, r.jsx)(g.Z, {
                      deepLinkType: eO.jE.SHOP,
                      path: t.location.pathname,
                      children: (0, r.jsx)(S.Z, ey({ isFullScreen: e }, t))
                  });
        };
    },
    eV = (e) => (0, r.jsx)(N.Z, ey({}, e)),
    eB = () => (0, r.jsx)(K.Z, {}),
    eH = () => (0, r.jsx)(H.Z, {}),
    eF = () => (0, r.jsx)(Y.Z, {}),
    ez = (e) => {
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
    eY = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(g.Z, {
            deepLinkType: eO.jE.FEATURES,
            path: t,
            children: ez(e)
        });
    };
function eK(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eq(e) {
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
            let t = parseInt(null != (e = h.K.get(eh.nT)) ? e : '');
            Number.isNaN(t) && (t = eh.qO), (t = Math.min(Math.max(t, eh.li), eh.zx)), !E && t <= eh.p8 && (t = eh.qO), eK(t);
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
            if (N) eK(eh.p8);
            else {
                var e;
                let t = parseInt(null != (e = h.K.get(eh.nT)) ? e : '');
                Number.isNaN(t) && (t = eh.qO), eK(t);
            }
        }, [N]);
    let y = i.useRef(null),
        v = i.useCallback(
            (e, t) => {
                var n;
                eK(e);
                let r = t < eh.li / 3;
                t <= eh.li ? document.body.classList.add(eN.draggingMin) : document.body.classList.remove(eN.draggingMin), t >= eh.zx ? document.body.classList.add(eN.draggingMax) : document.body.classList.remove(eN.draggingMax);
                let i = t - e;
                null == (n = y.current) || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / eh.p8), 0.25))), E && (T.useAppSidebarState.setState({ isOpen: !r }), r && eK(eh.p8));
            },
            [E]
        ),
        C = i.useCallback(() => {
            document.body.classList.add(eN.dragging);
        }, []),
        S = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eN.dragging), document.body.classList.remove(eN.draggingMin), document.body.classList.remove(eN.draggingMax), document.body.classList.remove(eN.collapsing), null == (t = y.current) || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(eh.nT, e), el.default.track(em.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        P = (0, _.Z)({
            minDimension: eh.li,
            maxDimension: eh.zx,
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
            N && eK(eh.p8);
        }, [N]),
        l || (!O && o))
    )
        return null;
    let Z = O ? 'div' : i.Fragment,
        x = O ? { className: a()(eN.sidebarList, { [eN.sidebarListRounded]: !t }) } : {};
    return (0, r.jsx)(f.f6W, {
        theme: n,
        children: (e) =>
            (0, r.jsxs)('div', {
                ref: O ? y : void 0,
                'data-collapsed': N,
                className: a()(eN.sidebar, e, {
                    [eN.hasNotice]: t,
                    [eN.fullWidth]: d.tq,
                    [eN.hidden]: g,
                    [eN.channelListHidden]: o
                }),
                children: [
                    O &&
                        s &&
                        !c &&
                        (0, r.jsx)(G.Z, {
                            className: eN.guilds,
                            themeOverride: n
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(Z, eI(ey({}, x), { children: (0, r.jsx)(ew, {}) })),
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
            })
    });
}
function eQ() {
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
        a = (function () {
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
        o = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, em.Z5c.GUILD_BOOSTING_MARKETING(J.Hw.guildId()))) ? void 0 : e.isExact) === !0;
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, em.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) ? void 0 : e.isExact) === !0;
        })(),
        h = (0, p.e7)([z.Z], () => z.Z.getIsOpen()),
        f = (0, s.$B)([em.Z5c.CHANNEL(em.ME, J.Hw.channelId()), em.Z5c.CHANNEL(J.Hw.guildId(), J.Hw.channelId({ optional: !0 }), ':messageId?')]),
        g = (null == f || null == (e = f.params) ? void 0 : e.channelId) === eb.oC.GUILD_ONBOARDING,
        m = l || a || o || u || g,
        b = i.useCallback(() => F.Z.openSidebar(), []),
        _ = (0, A.Q3)('AppView'),
        E = (0, A.TH)('AppView'),
        N = _ ? 'div' : i.Fragment,
        v = _ ? { className: eN.page } : {},
        S = (0, T.useAppSidebarState)((e) => !e.isOpen),
        P = (0, p.e7)([I.Z], () => I.Z.isFullscreenInContext());
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
                value: (null == f ? void 0 : f.params.guildId) === em.ME || null == f ? void 0 : f.params.guildId,
                children: (0, r.jsxs)('div', {
                    className: eN.base,
                    'data-fullscreen': P,
                    children: [
                        _ && !P && (0, r.jsx)(ev, {}),
                        d.tq ? null : (0, r.jsx)(ed.Z, {}),
                        (0, r.jsxs)('div', {
                            className: eN.content,
                            children: [
                                (0, r.jsx)(C.Z, {}),
                                (0, r.jsx)(eq, {
                                    isOnFullScreenCollectiblesShopRoute: u,
                                    isSidebarOpen: h,
                                    hasNotice: t,
                                    sidebarTheme: n,
                                    hideChannelList: m,
                                    hideSidebar: !h || u
                                }),
                                (0, r.jsx)(
                                    N,
                                    eI(ey({}, v), {
                                        'data-collapsed': !!E && S,
                                        children: (0, r.jsx)(O.Z.Provider, {
                                            value: b,
                                            children: (0, r.jsxs)(s.rs, {
                                                children: [
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, r.jsx)(s.l_, { to: em.Z5c.ME })
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                        render: eV,
                                                        impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { application_id: t.params.applicationId };
                                                        }
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.APPLICATION_LIBRARY,
                                                        render: eU,
                                                        impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.APPLICATION_STORE,
                                                        render: eG,
                                                        impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                        render: eW(!0),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                        render: eW(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.COLLECTIBLES_SHOP,
                                                        render: eW(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                        render: eW(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.MESSAGE_REQUESTS,
                                                        render: eH,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.FAMILY_CENTER,
                                                        render: eF,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.ME,
                                                        exact: !0,
                                                        render: eB,
                                                        impressionName: c.ImpressionNames.FRIENDS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: [em.Z5c.CHANNEL_THREAD_VIEW(J.Hw.guildId(), J.Hw.channelId(), ':threadId', ':messageId?'), em.Z5c.CHANNEL(em.ME, J.Hw.channelId()), em.Z5c.CHANNEL(J.Hw.guildId(), J.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                        render: eR,
                                                        impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.GLOBAL_DISCOVERY,
                                                        render: eD,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                        render: eD,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.GLOBAL_DISCOVERY_APPS,
                                                        render: eD,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.QUEST_HOME,
                                                        render: eD,
                                                        impressionName: c.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.GUILD_DISCOVERY,
                                                        render: eD,
                                                        impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.GUILD_MEMBER_VERIFICATION(J.Hw.guildId()),
                                                        render: ek,
                                                        impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(J.Hw.guildId(), ':inviteCode?'),
                                                        render: eM,
                                                        impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { has_invite: void 0 !== t.params.inviteCode };
                                                        }
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        path: em.Z5c.FEATURE(':feature'),
                                                        exact: !0,
                                                        render: eY,
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
