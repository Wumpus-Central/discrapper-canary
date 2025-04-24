n.d(t, { Z: () => eQ }), n(35282), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    s = n(512969),
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
    y = n(290297),
    I = n(317381),
    v = n(82888),
    C = n(244317),
    S = n(765717),
    N = n(358221),
    T = n(823748),
    P = n(626421),
    j = n(118379),
    A = n(267161),
    Z = n(652515),
    x = n(544978),
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
    W = n(745052),
    Y = n(285865),
    K = n(659971),
    q = n(664608),
    X = n(270759),
    Q = n(918701),
    J = n(905423),
    $ = n(304445),
    ee = n(893607),
    et = n(210887),
    en = n(592125),
    er = n(271383),
    ei = n(430824),
    el = n(944486),
    ea = n(933429),
    eo = n(626135),
    es = n(823379),
    ec = n(709054),
    eu = n(374005),
    ed = n(409292),
    ep = n(316173),
    eh = n(256638),
    ef = n(663701),
    eg = n(697309),
    em = n(425369),
    eb = n(715702),
    e_ = n(981631),
    eE = n(176505),
    eO = n(215023),
    ey = n(290511),
    eI = n(186901),
    ev = n(128654);
function eC(e) {
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
function eS(e, t) {
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
let eN = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    eT = () =>
        (0, r.jsx)('div', {
            className: ev.loader,
            children: (0, r.jsx)(g.$jN, {})
        }),
    eP = (0, u.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eT
    }),
    ej = (0, u.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eT
    }),
    eA = (0, u.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eT
    }),
    eZ = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eT
    }),
    ex = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eT
    }),
    ew = (0, u.Un)({
        createPromise: () => n.e('44799').then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: eT
    }),
    eL = (e) => {
        let { match: t } = e,
            n = (0, O.l)(),
            i = (0, h.e7)([en.Z, el.Z], () => {
                let e = el.Z.getChannelId();
                return en.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o } = t.params,
            c = (0, h.e7)([ei.Z], () => ei.Z.getGuild(l)),
            u = (0, h.e7)([er.ZP], () => (null == l ? null : er.ZP.getSelfMember(l))),
            d = (0, h.e7)([F.Z], () => {
                if (null == l) return;
                let e = F.Z.getData(l);
                if ((null == e ? void 0 : e.type) === z.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return x.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return x.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            p = (0, Z.C4)(l, 'channel_renderer');
        if (null != l && null != a && (0, eE.AB)(a))
            switch (a) {
                case eE.oC.ROLE_SUBSCRIPTIONS:
                    return p
                        ? (0, r.jsx)(eP, {
                              guildId: l,
                              initialTab: x.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, r.jsx)(G.Z, { guildId: l });
                case eE.oC.GUILD_SHOP:
                    return (0, r.jsx)(eP, {
                        guildId: l,
                        productId: o,
                        initialTab: d
                    });
                case eE.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: e_.Z5c.CHANNEL(l, eE.oC.MEMBER_SAFETY) });
                case eE.oC.GUILD_HOME:
                    return (0, r.jsx)(ej, { guildId: l });
                case eE.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eZ, {
                        guildId: l,
                        selectedSection: ey.l7.BROWSE
                    });
                case eE.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(ex, { guildId: l });
                case eE.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eZ, {
                        guildId: l,
                        selectedSection: ey.l7.CUSTOMIZE
                    });
                case eE.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eA, { guildId: l });
                case eE.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(ew, {
                        guildId: l,
                        powerupSkuId: n.get('powerupSkuId')
                    });
                default:
                    (0, es.vE)(a);
            }
        if ((0, M.p3)(c, u))
            return (0, r.jsx)(U.Z, {
                guildId: l,
                channelId: a
            });
        if ((null == i ? void 0 : i.type) === e_.d4z.GUILD_STORE) {
            let e = ec.default.cast(t.params.messageId);
            return (0, r.jsx)(
                ed.Z,
                {
                    channel: i,
                    inputSkuId: e
                },
                i.id
            );
        }
        return (0, r.jsx)(T.Z, {});
    },
    eR = i.memo(function () {
        let { guildId: e, channelId: t } = (0, J.Z)(),
            n = (0, h.e7)([el.Z], () => (null != t ? t : el.Z.getChannelId(e)));
        return window.location.pathname.startsWith(e_.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(e_.Z5c.GUILD_DISCOVERY) || (0, Q.OG)()
            ? (0, r.jsx)(R.Z, {})
            : null != e
              ? (0, r.jsx)(
                    V.Z,
                    {
                        selectedChannelId: n,
                        guildId: e
                    },
                    e
                )
              : (0, r.jsx)(ef.Z, {});
    }),
    eD = (e) => (0, r.jsx)(eL, eC({}, e)),
    ek = () => (0, r.jsx)(L.Z, {}),
    eM = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(k.Z, { guildId: t.params.guildId }) : null;
    },
    eU = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(H.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eG = () => (0, r.jsx)(em.Z, {}),
    eV = () => (0, r.jsx)(eb.Z, {}),
    eB = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, o.parse)(t.location.search);
            return Object.values(eO.AW).includes(n)
                ? (0, r.jsx)(
                      j.Z,
                      eC(
                          {
                              isFullScreen: e,
                              tab: n
                          },
                          t
                      )
                  )
                : (0, r.jsx)(j.Z, eC({ isFullScreen: e }, t));
        };
    },
    eH = (e) => (0, r.jsx)(C.Z, eC({}, e)),
    eF = () => (0, r.jsx)(X.Z, {}),
    ez = () => (0, r.jsx)(W.Z, {}),
    eW = () => (0, r.jsx)(q.Z, {}),
    eY = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, r.jsx)(X.Z, { initialSection: e_.pJs.ONLINE });
            case 'addFriends':
                return (0, r.jsx)(X.Z, { initialSection: e_.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, r.jsx)(X.Z, { initialSection: e_.pJs.PENDING });
            case 'sessionManagement':
                return (0, r.jsx)(s.l_, { to: e_.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, r.jsx)(s.l_, {
                    to: {
                        pathname: e_.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, r.jsx)(s.l_, { to: e_.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, r.jsx)(s.l_, { to: e_.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, r.jsx)(s.l_, { to: e_.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, r.jsx)(s.l_, { to: e_.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, r.jsx)(s.l_, { to: { pathname: e_.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, r.jsx)(s.l_, { to: { pathname: e_.Z5c.NITRO_HOME } });
            case 'connected-games':
                return (0, r.jsx)(s.l_, { to: e_.Z5c.SETTINGS('content-and-social', 'connected-games') });
            default:
                return (0, r.jsx)(s.l_, { to: e_.Z5c.ME });
        }
    },
    eK = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(m.Z, {
            deepLinkType: eI.jE.FEATURES,
            path: t,
            children: eY(e)
        });
    };
function eq(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eX(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: o, isSidebarOpen: s, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, _.t)(!0);
    let u = 'app view user trigger debugging';
    b.R6.useExperiment({ location: u }, { autoTrackExposure: !1 }), b.R6.trackExposure({ location: u });
    let p = (0, h.e7)([N.Z], () => N.Z.isFullscreenInContext()),
        m = (0, w.TH)('ChannelSidebar'),
        O = (0, w.Q3)('ChannelSidebar'),
        y = (0, A.useAppSidebarState)((e) => !e.isOpen) && m;
    i.useLayoutEffect(() => {
        if (m) {
            var e;
            let t = parseInt(null != (e = f.K.get(eg.nT)) ? e : '');
            Number.isNaN(t) && (t = eg.qO), (t = Math.min(Math.max(t, eg.li), eg.zx)), !m && t <= eg.p8 && (t = eg.qO), eq(t);
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
            if (y) eq(eg.p8);
            else {
                var e;
                let t = parseInt(null != (e = f.K.get(eg.nT)) ? e : '');
                Number.isNaN(t) && (t = eg.qO), eq(t);
            }
        }, [y]);
    let I = i.useRef(null),
        v = i.useCallback(
            (e, t) => {
                var n;
                eq(e);
                let r = t < eg.li / 3;
                t <= eg.li ? document.body.classList.add(ev.draggingMin) : document.body.classList.remove(ev.draggingMin), t >= eg.zx ? document.body.classList.add(ev.draggingMax) : document.body.classList.remove(ev.draggingMax);
                let i = t - e;
                null == (n = I.current) || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / eg.p8), 0.25))), m && (A.useAppSidebarState.setState({ isOpen: !r }), r && eq(eg.p8));
            },
            [m]
        ),
        C = i.useCallback(() => {
            document.body.classList.add(ev.dragging);
        }, []),
        S = i.useCallback((e) => {
            var t;
            document.body.classList.remove(ev.dragging), document.body.classList.remove(ev.draggingMin), document.body.classList.remove(ev.draggingMax), document.body.classList.remove(ev.collapsing), null == (t = I.current) || t.style.setProperty('--custom-overdrag', '0px'), f.K.set(eg.nT, e), eo.default.track(e_.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        T = (0, E.Z)({
            minDimension: eg.li,
            maxDimension: eg.zx,
            resizableDomNodeRef: I,
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
            y && eq(eg.p8);
        }, [y]),
        l || (!O && o))
    )
        return null;
    let j = O ? 'div' : i.Fragment,
        Z = O ? { className: a()(ev.sidebarList, { [ev.sidebarListRounded]: !t }) } : {};
    return (0, r.jsx)(g.f6W, {
        theme: n,
        children: (e) =>
            (0, r.jsxs)('div', {
                ref: O ? I : void 0,
                'data-collapsed': y,
                className: a()(ev.sidebar, e, {
                    [ev.fullWidth]: d.tq,
                    [ev.hidden]: p,
                    [ev.channelListHidden]: o
                }),
                children: [
                    O &&
                        s &&
                        !c &&
                        (0, r.jsx)(B.Z, {
                            className: ev.guilds,
                            themeOverride: n
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j, eS(eC({}, Z), { children: (0, r.jsx)(eR, {}) })),
                                O
                                    ? (0, r.jsx)(g.P3F, {
                                          onClick: P,
                                          'aria-label': 'Resize Sidebar',
                                          className: ev.sidebarResizeHandle,
                                          onMouseDown: T
                                      })
                                    : null,
                                (0, r.jsx)(eu.b, {})
                            ]
                        }),
                    !O && (0, r.jsx)(ep.Z, {})
                ]
            })
    });
}
function eQ() {
    var e;
    let t = (0, h.e7)([ea.ZP], () => ea.ZP.hasNotice()),
        n = (0, h.e7)([et.Z], () => (et.Z.darkSidebar ? e_.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(e_.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                i.useEffect(
                    () =>
                        $.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(e_.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(e_.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                i.useEffect(
                    () =>
                        $.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(e_.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        o = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, e_.Z5c.GUILD_BOOSTING_MARKETING(ee.Hw.guildId()))) ? void 0 : e.isExact) === !0;
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (null == (e = (0, s.LX)(t.pathname, e_.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) ? void 0 : e.isExact) === !0;
        })(),
        f = (0, h.e7)([K.Z], () => K.Z.getIsOpen()),
        g = (0, s.$B)([e_.Z5c.CHANNEL(e_.ME, ee.Hw.channelId()), e_.Z5c.CHANNEL(ee.Hw.guildId(), ee.Hw.channelId({ optional: !0 }), ':messageId?')]),
        m = (null == g || null == (e = g.params) ? void 0 : e.channelId) === eE.oC.GUILD_ONBOARDING,
        b = l || a || o || u || m,
        _ = i.useCallback(() => Y.Z.openSidebar(), []),
        E = (0, w.Q3)('AppView'),
        O = (0, w.TH)('AppView'),
        C = E ? 'div' : i.Fragment,
        T = (0, A.useAppSidebarState)((e) => !e.isOpen),
        j = (0, h.e7)([N.Z], () => N.Z.isFullscreenInContext()),
        Z = E
            ? {
                  className: ev.page,
                  'data-collapsed': !!O && T
              }
            : {},
        x = (0, h.e7)([I.ZP], () => {
            var e;
            return (null == (e = I.ZP.getCurrentEmbeddedActivity()) ? void 0 : e.location.kind) === p.E.CONTEXTLESS;
        });
    return (0, r.jsxs)('div', {
        className: ev.container,
        children: [
            f &&
                !u &&
                !E &&
                (0, r.jsx)(B.Z, {
                    className: ev.guilds,
                    themeOverride: n
                }),
            (0, r.jsx)(D.Z.Provider, {
                value: (null == g ? void 0 : g.params.guildId) === e_.ME || null == g ? void 0 : g.params.guildId,
                children: (0, r.jsxs)('div', {
                    className: ev.base,
                    'data-fullscreen': j,
                    children: [
                        E && !j && (0, r.jsx)(eN, {}),
                        d.tq ? null : (0, r.jsx)(eh.Z, {}),
                        (0, r.jsxs)('div', {
                            className: ev.content,
                            children: [
                                (0, r.jsx)(P.Z, {}),
                                (0, r.jsx)(eX, {
                                    isOnFullScreenCollectiblesShopRoute: u,
                                    isSidebarOpen: f,
                                    hasNotice: t,
                                    sidebarTheme: n,
                                    hideChannelList: b,
                                    hideSidebar: !f || u
                                }),
                                (0, r.jsx)(
                                    C,
                                    eS(eC({}, Z), {
                                        children: (0, r.jsxs)(y.Z.Provider, {
                                            value: _,
                                            children: [
                                                (0, r.jsxs)(s.rs, {
                                                    children: [
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.ACTIVITY,
                                                            disableTrack: !0,
                                                            children: (0, r.jsx)(s.l_, { to: e_.Z5c.ME })
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                            render: eH,
                                                            impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                            impressionProperties: (e) => {
                                                                let { computedMatch: t } = e;
                                                                return { application_id: t.params.applicationId };
                                                            }
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.APPLICATION_LIBRARY,
                                                            render: eG,
                                                            impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.APPLICATION_STORE,
                                                            render: eV,
                                                            impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                            render: eB(!0),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                            render: eB(!1),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.COLLECTIBLES_SHOP,
                                                            render: eB(!1),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                            render: eB(!1),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.MESSAGE_REQUESTS,
                                                            render: ez,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.FAMILY_CENTER,
                                                            render: eW,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.ME,
                                                            exact: !0,
                                                            render: eF,
                                                            impressionName: c.ImpressionNames.FRIENDS,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: [e_.Z5c.CHANNEL_THREAD_VIEW(ee.Hw.guildId(), ee.Hw.channelId(), ':threadId', ':messageId?'), e_.Z5c.CHANNEL(e_.ME, ee.Hw.channelId()), e_.Z5c.CHANNEL(ee.Hw.guildId(), ee.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                            render: eD,
                                                            impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.GLOBAL_DISCOVERY,
                                                            render: ek,
                                                            impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                            disableTrack: !0,
                                                            exact: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                            render: ek,
                                                            impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.GLOBAL_DISCOVERY_APPS,
                                                            render: ek,
                                                            impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.QUEST_HOME,
                                                            render: ek,
                                                            impressionName: c.ImpressionNames.QUEST_HOME,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.GUILD_DISCOVERY,
                                                            render: ek,
                                                            impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.GUILD_MEMBER_VERIFICATION(ee.Hw.guildId()),
                                                            render: eM,
                                                            impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(ee.Hw.guildId(), ':inviteCode?'),
                                                            render: eU,
                                                            impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                            impressionProperties: (e) => {
                                                                let { computedMatch: t } = e;
                                                                return { has_invite: void 0 !== t.params.inviteCode };
                                                            }
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: e_.Z5c.FEATURE(':feature'),
                                                            exact: !0,
                                                            render: eK,
                                                            disableTrack: !0
                                                        })
                                                    ]
                                                }),
                                                x && (0, r.jsx)(v.Z, {})
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
