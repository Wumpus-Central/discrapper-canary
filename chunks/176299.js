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
    B = n(242601),
    V = n(416568),
    H = n(613609),
    F = n(160404),
    z = n(225675),
    W = n(927723),
    Y = n(745052),
    K = n(285865),
    q = n(659971),
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
    ea = n(271383),
    eo = n(430824),
    es = n(944486),
    ec = n(933429),
    eu = n(626135),
    ed = n(823379),
    ep = n(709054),
    eh = n(374005),
    ef = n(409292),
    eg = n(316173),
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
function eP(e, t) {
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
let ej = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    eA = () =>
        (0, r.jsx)('div', {
            className: eN.loader,
            children: (0, r.jsx)(g.$jN, {})
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
    ew = (0, u.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eA
    }),
    eL = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eA
    }),
    eR = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eA
    }),
    eD = (0, u.Un)({
        createPromise: () => n.e('44799').then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: eA
    }),
    ek = (e) => {
        let { match: t } = e,
            n = (0, O.l)(),
            i = (0, h.e7)([el.Z, es.Z], () => {
                let e = es.Z.getChannelId();
                return el.Z.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: o, threadId: c } = t.params,
            u = (0, h.e7)([eo.Z], () => eo.Z.getGuild(l)),
            d = (0, h.e7)([ea.ZP], () => (null == l ? null : ea.ZP.getSelfMember(l))),
            p = (0, h.e7)([F.Z], () => {
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
            });
        ((0, $.WF)(a) && (0, $.WF)(c)) || ((0, er.uL)(ey.Z5c.CHANNEL(null == u ? void 0 : u.id, null == u ? void 0 : u.getModeratorReportChannelId())), (0, W.V)());
        let f = (0, Z.C4)(l, 'channel_renderer');
        if (null != l && null != a && (0, eI.AB)(a))
            switch (a) {
                case eI.oC.ROLE_SUBSCRIPTIONS:
                    return f
                        ? (0, r.jsx)(eZ, {
                              guildId: l,
                              initialTab: x.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, r.jsx)(G.Z, { guildId: l });
                case eI.oC.GUILD_SHOP:
                    return (0, r.jsx)(eZ, {
                        guildId: l,
                        productId: o,
                        initialTab: p
                    });
                case eI.oC.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(s.l_, { to: ey.Z5c.CHANNEL(l, eI.oC.MEMBER_SAFETY) });
                case eI.oC.GUILD_HOME:
                    return (0, r.jsx)(ex, { guildId: l });
                case eI.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eL, {
                        guildId: l,
                        selectedSection: eC.l7.BROWSE
                    });
                case eI.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eR, { guildId: l });
                case eI.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eL, {
                        guildId: l,
                        selectedSection: eC.l7.CUSTOMIZE
                    });
                case eI.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(ew, { guildId: l });
                case eI.oC.GUILD_BOOSTS:
                    return (0, r.jsx)(eD, {
                        guildId: l,
                        powerupSkuId: n.get('powerupSkuId')
                    });
                case eI.oC.REPORT_TO_MOD:
                    return (0, r.jsx)(T.Z, {});
                default:
                    (0, ed.vE)(a);
            }
        if ((0, M.p3)(u, d))
            return (0, r.jsx)(U.Z, {
                guildId: l,
                channelId: a
            });
        if ((null == i ? void 0 : i.type) === ey.d4z.GUILD_STORE) {
            let e = ep.default.cast(t.params.messageId);
            return (0, r.jsx)(
                ef.Z,
                {
                    channel: i,
                    inputSkuId: e
                },
                i.id
            );
        }
        return (0, r.jsx)(T.Z, {});
    },
    eM = i.memo(function () {
        let { guildId: e, channelId: t } = (0, ee.Z)(),
            n = (0, h.e7)([es.Z], () => (null != t ? t : es.Z.getChannelId(e)));
        return window.location.pathname.startsWith(ey.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(ey.Z5c.GUILD_DISCOVERY) || (0, J.OG)()
            ? (0, r.jsx)(R.Z, {})
            : null != e
              ? (0, r.jsx)(
                    B.Z,
                    {
                        selectedChannelId: n,
                        guildId: e
                    },
                    e
                )
              : (0, r.jsx)(eb.Z, {});
    }),
    eU = (e) => (0, r.jsx)(ek, eT({}, e)),
    eG = () => (0, r.jsx)(L.Z, {}),
    eB = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(k.Z, { guildId: t.params.guildId }) : null;
    },
    eV = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(H.Z, {
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
                      j.Z,
                      eT(
                          {
                              isFullScreen: e,
                              tab: n
                          },
                          t
                      )
                  )
                : (0, r.jsx)(j.Z, eT({ isFullScreen: e }, t));
        };
    },
    eW = (e) => (0, r.jsx)(C.Z, eT({}, e)),
    eY = () => (0, r.jsx)(X.Z, {}),
    eK = () => (0, r.jsx)(Y.Z, {}),
    eq = () => (0, r.jsx)(Q.Z, {}),
    eQ = (e) => {
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
            default:
                return (0, r.jsx)(s.l_, { to: ey.Z5c.ME });
        }
    },
    eX = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(m.Z, {
            deepLinkType: eS.jE.FEATURES,
            path: t,
            children: eQ(e)
        });
    };
function eJ(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function e$(e) {
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
            let t = parseInt(null != (e = f.K.get(e_.nT)) ? e : '');
            Number.isNaN(t) && (t = e_.qO), (t = Math.min(Math.max(t, e_.li), e_.zx)), !m && t <= e_.p8 && (t = e_.qO), eJ(t);
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
            if (y) eJ(e_.p8);
            else {
                var e;
                let t = parseInt(null != (e = f.K.get(e_.nT)) ? e : '');
                Number.isNaN(t) && (t = e_.qO), eJ(t);
            }
        }, [y]);
    let I = i.useRef(null),
        v = i.useCallback(
            (e, t) => {
                var n;
                eJ(e);
                let r = t < e_.li / 3;
                t <= e_.li ? document.body.classList.add(eN.draggingMin) : document.body.classList.remove(eN.draggingMin), t >= e_.zx ? document.body.classList.add(eN.draggingMax) : document.body.classList.remove(eN.draggingMax);
                let i = t - e;
                null == (n = I.current) || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / e_.p8), 0.25))), m && (A.useAppSidebarState.setState({ isOpen: !r }), r && eJ(e_.p8));
            },
            [m]
        ),
        C = i.useCallback(() => {
            document.body.classList.add(eN.dragging);
        }, []),
        S = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eN.dragging), document.body.classList.remove(eN.draggingMin), document.body.classList.remove(eN.draggingMax), document.body.classList.remove(eN.collapsing), null == (t = I.current) || t.style.setProperty('--custom-overdrag', '0px'), f.K.set(e_.nT, e), eu.default.track(ey.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        T = (0, E.Z)({
            minDimension: e_.li,
            maxDimension: e_.zx,
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
            y && eJ(e_.p8);
        }, [y]),
        l || (!O && o))
    )
        return null;
    let j = O ? 'div' : i.Fragment,
        Z = O ? { className: a()(eN.sidebarList, { [eN.sidebarListRounded]: !t }) } : {};
    return (0, r.jsx)(g.f6W, {
        theme: n,
        children: (e) =>
            (0, r.jsxs)('div', {
                ref: O ? I : void 0,
                'data-collapsed': y,
                className: a()(eN.sidebar, e, {
                    [eN.fullWidth]: d.tq,
                    [eN.hidden]: p,
                    [eN.channelListHidden]: o
                }),
                children: [
                    O &&
                        s &&
                        !c &&
                        (0, r.jsx)(V.Z, {
                            className: eN.guilds,
                            themeOverride: n
                        }),
                    !o &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j, eP(eT({}, Z), { children: (0, r.jsx)(eM, {}) })),
                                O
                                    ? (0, r.jsx)(g.P3F, {
                                          onClick: P,
                                          'aria-label': 'Resize Sidebar',
                                          className: eN.sidebarResizeHandle,
                                          onMouseDown: T
                                      })
                                    : null,
                                (0, r.jsx)(eh.b, {})
                            ]
                        }),
                    !O && (0, r.jsx)(eg.Z, {})
                ]
            })
    });
}
function e0() {
    var e;
    let t = (0, h.e7)([ec.ZP], () => ec.ZP.hasNotice()),
        n = (0, h.e7)([ei.Z], () => (ei.Z.darkSidebar ? ey.BRd.DARK : void 0)),
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
        f = (0, h.e7)([q.Z], () => q.Z.getIsOpen()),
        g = (0, s.$B)([ey.Z5c.CHANNEL(ey.ME, en.Hw.channelId()), ey.Z5c.CHANNEL(en.Hw.guildId(), en.Hw.channelId({ optional: !0 }), ':messageId?')]),
        m = (null == g || null == (e = g.params) ? void 0 : e.channelId) === eI.oC.GUILD_ONBOARDING,
        b = l || a || o || u || m,
        _ = i.useCallback(() => K.Z.openSidebar(), []),
        E = (0, w.Q3)('AppView'),
        O = (0, w.TH)('AppView'),
        C = E ? 'div' : i.Fragment,
        T = (0, A.useAppSidebarState)((e) => !e.isOpen),
        j = (0, h.e7)([N.Z], () => N.Z.isFullscreenInContext()),
        Z = E
            ? {
                  className: eN.page,
                  'data-collapsed': !!O && T
              }
            : {},
        x = (0, h.e7)([I.ZP], () => {
            var e;
            return (null == (e = I.ZP.getCurrentEmbeddedActivity()) ? void 0 : e.location.kind) === p.E.CONTEXTLESS;
        });
    return (0, r.jsxs)('div', {
        className: eN.container,
        children: [
            f &&
                !u &&
                !E &&
                (0, r.jsx)(V.Z, {
                    className: eN.guilds,
                    themeOverride: n
                }),
            (0, r.jsx)(D.Z.Provider, {
                value: (null == g ? void 0 : g.params.guildId) === ey.ME || null == g ? void 0 : g.params.guildId,
                children: (0, r.jsxs)('div', {
                    className: eN.base,
                    'data-fullscreen': j,
                    children: [
                        E && !j && (0, r.jsx)(ej, {}),
                        d.tq ? null : (0, r.jsx)(em.Z, {}),
                        (0, r.jsxs)('div', {
                            className: eN.content,
                            children: [
                                (0, r.jsx)(P.Z, {}),
                                (0, r.jsx)(e$, {
                                    isOnFullScreenCollectiblesShopRoute: u,
                                    isSidebarOpen: f,
                                    hasNotice: t,
                                    sidebarTheme: n,
                                    hideChannelList: b,
                                    hideSidebar: !f || u
                                }),
                                (0, r.jsx)(
                                    C,
                                    eP(eT({}, Z), {
                                        children: (0, r.jsxs)(y.Z.Provider, {
                                            value: _,
                                            children: [
                                                (0, r.jsxs)(s.rs, {
                                                    children: [
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.ACTIVITY,
                                                            disableTrack: !0,
                                                            children: (0, r.jsx)(s.l_, { to: ey.Z5c.ME })
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                            render: eW,
                                                            impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                            impressionProperties: (e) => {
                                                                let { computedMatch: t } = e;
                                                                return { application_id: t.params.applicationId };
                                                            }
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.APPLICATION_LIBRARY,
                                                            render: eH,
                                                            impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.APPLICATION_STORE,
                                                            render: eF,
                                                            impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                            render: ez(!0),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                            render: ez(!1),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.COLLECTIBLES_SHOP,
                                                            render: ez(!1),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                            render: ez(!1),
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.MESSAGE_REQUESTS,
                                                            render: eK,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.FAMILY_CENTER,
                                                            render: eq,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.ME,
                                                            exact: !0,
                                                            render: eY,
                                                            impressionName: c.ImpressionNames.FRIENDS,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: [ey.Z5c.CHANNEL_THREAD_VIEW(en.Hw.guildId(), en.Hw.channelId(), ':threadId', ':messageId?'), ey.Z5c.CHANNEL(ey.ME, en.Hw.channelId()), ey.Z5c.CHANNEL(en.Hw.guildId(), en.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                            render: eU,
                                                            impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.GLOBAL_DISCOVERY,
                                                            render: eG,
                                                            impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                            disableTrack: !0,
                                                            exact: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                            render: eG,
                                                            impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.GLOBAL_DISCOVERY_APPS,
                                                            render: eG,
                                                            impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.QUEST_HOME,
                                                            render: eG,
                                                            impressionName: c.ImpressionNames.QUEST_HOME,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.GUILD_DISCOVERY,
                                                            render: eG,
                                                            impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.GUILD_MEMBER_VERIFICATION(en.Hw.guildId()),
                                                            render: eB,
                                                            impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                            disableTrack: !0
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(en.Hw.guildId(), ':inviteCode?'),
                                                            render: eV,
                                                            impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                            impressionProperties: (e) => {
                                                                let { computedMatch: t } = e;
                                                                return { has_invite: void 0 !== t.params.inviteCode };
                                                            }
                                                        }),
                                                        (0, r.jsx)(S.Z, {
                                                            path: ey.Z5c.FEATURE(':feature'),
                                                            exact: !0,
                                                            render: eX,
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
