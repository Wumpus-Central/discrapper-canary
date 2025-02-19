n.d(t, { Z: () => ez }), n(301563), n(47120);
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
    g = n(481060),
    f = n(711237),
    m = n(532835),
    b = n(347469),
    _ = n(290297),
    E = n(289341),
    O = n(765717),
    N = n(358221),
    v = n(823748),
    y = n(626421),
    I = n(118379),
    C = n(267161),
    S = n(652515),
    T = n(544978),
    P = n(540059),
    j = n(724383),
    A = n(135864),
    Z = n(372900),
    x = n(63568),
    L = n(6039),
    w = n(637853),
    R = n(326145),
    D = n(269675),
    k = n(242601),
    M = n(416568),
    U = n(613609),
    G = n(160404),
    W = n(225675),
    V = n(745052),
    B = n(285865),
    H = n(659971),
    F = n(179742),
    z = n(270759),
    Y = n(50101),
    K = n(918701),
    q = n(905423),
    X = n(304445),
    Q = n(893607),
    J = n(210887),
    $ = n(592125),
    ee = n(271383),
    et = n(430824),
    en = n(944486),
    er = n(933429),
    ei = n(626135),
    el = n(823379),
    eo = n(709054),
    ea = n(374005),
    es = n(409292),
    ec = n(316173),
    eu = n(256638),
    ed = n(663701),
    ep = n(697309),
    eh = n(425369),
    eg = n(715702),
    ef = n(981631),
    em = n(176505),
    eb = n(215023),
    e_ = n(290511),
    eE = n(972929);
function eO(e) {
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
let eN = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    ev = () =>
        (0, r.jsx)('div', {
            className: eE.loader,
            children: (0, r.jsx)(g.$jN, {})
        }),
    ey = (0, u.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: ev
    }),
    eI = (0, u.Un)({
        createPromise: () => Promise.all([n.e('16114'), n.e('97811')]).then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: ev
    }),
    eC = (0, u.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: ev
    }),
    eS = (0, u.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: ev
    }),
    eT = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: ev
    }),
    eP = (0, u.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: ev
    }),
    ej = (0, u.Un)({
        createPromise: () => n.e('44799').then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: ev
    }),
    eA = (e) => {
        let { match: t } = e,
            n = (0, p.e7)([$.Z, en.Z], () => {
                let e = en.Z.getChannelId();
                return $.Z.getChannel(e);
            }),
            { guildId: i, channelId: l, messageId: o } = t.params,
            a = (0, p.e7)([et.Z], () => et.Z.getGuild(i)),
            c = (0, p.e7)([ee.ZP], () => (null == i ? null : ee.ZP.getSelfMember(i))),
            u = (0, p.e7)([G.Z], () => {
                if (null == i) return;
                let e = G.Z.getData(i);
                if ((null == e ? void 0 : e.type) === W.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return T.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return T.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            d = (0, S.C4)(i, 'channel_renderer'),
            h = (0, x.jS)(i, 'ChannelRenderer'),
            g = (0, Y.Ek)(a, 'ChannelRenderer');
        if (null != i && null != l && (0, em.AB)(l))
            switch (l) {
                case em.oC.ROLE_SUBSCRIPTIONS:
                    return d
                        ? (0, r.jsx)(ey, {
                              guildId: i,
                              initialTab: T.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, r.jsx)(D.Z, { guildId: i });
                case em.oC.GUILD_SHOP:
                    return (0, r.jsx)(ey, {
                        guildId: i,
                        productId: o,
                        initialTab: u
                    });
                case em.oC.MEMBER_APPLICATIONS:
                    return h ? (0, r.jsx)(s.l_, { to: ef.Z5c.CHANNEL(i, em.oC.MEMBER_SAFETY) }) : (0, r.jsx)(eI, { guildId: i });
                case em.oC.GUILD_HOME:
                    return (0, r.jsx)(eC, { guildId: i });
                case em.oC.CHANNEL_BROWSER:
                    return (0, r.jsx)(eT, {
                        guildId: i,
                        selectedSection: e_.l7.BROWSE
                    });
                case em.oC.GUILD_ONBOARDING:
                    return (0, r.jsx)(eP, { guildId: i });
                case em.oC.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eT, {
                        guildId: i,
                        selectedSection: e_.l7.CUSTOMIZE
                    });
                case em.oC.MEMBER_SAFETY:
                    return (0, r.jsx)(eS, { guildId: i });
                case em.oC.GUILD_BOOSTS:
                    return g ? (0, r.jsx)(ej, { guildId: i }) : (0, r.jsx)(s.l_, { to: ef.Z5c.CHANNEL(i) });
                default:
                    (0, el.vE)(l);
            }
        if ((0, w.p3)(a, c))
            return (0, r.jsx)(R.Z, {
                guildId: i,
                channelId: l
            });
        if ((null == n ? void 0 : n.type) === ef.d4z.GUILD_STORE) {
            let e = eo.default.cast(t.params.messageId);
            return (0, r.jsx)(
                es.Z,
                {
                    channel: n,
                    inputSkuId: e
                },
                n.id
            );
        }
        return (0, r.jsx)(v.Z, {});
    },
    eZ = i.memo(function () {
        let { guildId: e, channelId: t } = (0, q.Z)(),
            n = (0, p.e7)([en.Z], () => (null != t ? t : en.Z.getChannelId(e)));
        return window.location.pathname.startsWith(ef.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(ef.Z5c.GUILD_DISCOVERY) || (0, K.OG)()
            ? (0, r.jsx)(A.Z, {})
            : null != e
              ? (0, r.jsx)(
                    k.Z,
                    {
                        selectedChannelId: n,
                        guildId: e
                    },
                    e
                )
              : (0, r.jsx)(ed.Z, {});
    }),
    ex = (e) => (0, r.jsx)(eA, eO({}, e)),
    eL = () => (0, r.jsx)(j.Z, {}),
    ew = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(L.Z, { guildId: t.params.guildId }) : null;
    },
    eR = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, r.jsx)(U.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eD = () => (0, r.jsx)(eh.Z, {}),
    ek = () => (0, r.jsx)(eg.Z, {}),
    eM = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, a.parse)(t.location.search);
            return Object.values(eb.AW).includes(n)
                ? (0, r.jsx)(
                      I.Z,
                      eO(
                          {
                              isFullScreen: e,
                              tab: n
                          },
                          t
                      )
                  )
                : (0, r.jsx)(I.Z, eO({ isFullScreen: e }, t));
        };
    },
    eU = (e) => (0, r.jsx)(E.Z, eO({}, e)),
    eG = () => (0, r.jsx)(z.Z, {}),
    eW = () => (0, r.jsx)(V.Z, {}),
    eV = () => (0, r.jsx)(F.Z, {}),
    eB = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, r.jsx)(z.Z, { initialSection: ef.pJs.ONLINE });
            case 'addFriends':
                return (0, r.jsx)(z.Z, { initialSection: ef.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, r.jsx)(z.Z, { initialSection: ef.pJs.PENDING });
            case 'sessionManagement':
                return (0, r.jsx)(s.l_, { to: ef.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, r.jsx)(s.l_, {
                    to: {
                        pathname: ef.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, r.jsx)(s.l_, { to: ef.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, r.jsx)(s.l_, { to: ef.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, r.jsx)(s.l_, { to: ef.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, r.jsx)(s.l_, { to: ef.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, r.jsx)(s.l_, { to: { pathname: ef.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, r.jsx)(s.l_, { to: { pathname: ef.Z5c.NITRO_HOME } });
            default:
                return (0, r.jsx)(s.l_, { to: ef.Z5c.ME });
        }
    };
function eH(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eF(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: a, isSidebarOpen: s, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, m.t)(!0);
    let u = 'app view user trigger debugging';
    f.R6.useExperiment({ location: u }, { autoTrackExposure: !1 }), f.R6.trackExposure({ location: u });
    let _ = (0, p.e7)([N.Z], () => N.Z.isFullscreenInContext()),
        E = (0, P.TH)('ChannelSidebar'),
        O = (0, P.Q3)('ChannelSidebar'),
        v = (0, C.useAppSidebarState)((e) => !e.isOpen) && E;
    i.useLayoutEffect(() => {
        if (E) {
            var e;
            let t = parseInt(null !== (e = h.K.get(ep.nT)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = ep.qO), (t = Math.min(Math.max(t, ep.li), ep.zx)), !E && t <= ep.p8 && (t = ep.qO), eH(t);
            let n = (e) => {
                e.metaKey && 'b' === e.key && C.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
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
            if (v) eH(ep.p8);
            else {
                var e;
                let t = parseInt(null !== (e = h.K.get(ep.nT)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = ep.qO), eH(t);
            }
        }, [v]);
    let y = i.useRef(null),
        I = i.useCallback(
            (e, t) => {
                var n;
                eH(e);
                let r = t < ep.li / 3;
                t <= ep.li ? document.body.classList.add(eE.draggingMin) : document.body.classList.remove(eE.draggingMin), t >= ep.zx ? document.body.classList.add(eE.draggingMax) : document.body.classList.remove(eE.draggingMax);
                let i = t - e;
                null === (n = y.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(i / ep.p8), 0.25))), E && (C.useAppSidebarState.setState({ isOpen: !r }), r && eH(ep.p8));
            },
            [E]
        ),
        S = i.useCallback(() => {
            document.body.classList.add(eE.dragging);
        }, []),
        T = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eE.dragging), document.body.classList.remove(eE.draggingMin), document.body.classList.remove(eE.draggingMax), document.body.classList.remove(eE.collapsing), null === (t = y.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(ep.nT, e), ei.default.track(ef.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        j = (0, b.Z)({
            minDimension: ep.li,
            maxDimension: ep.zx,
            resizableDomNodeRef: y,
            onElementResize: I,
            onElementResizeStart: S,
            onElementResizeEnd: T,
            orientation: b.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        A = i.useCallback(() => {
            C.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            v && eH(ep.p8);
        }, [v]),
        l || (!O && a))
    )
        return null;
    let Z = O ? 'div' : i.Fragment,
        x = O ? { className: o()(eE.sidebarList, { [eE.sidebarListRounded]: !t }) } : {};
    return (0, r.jsx)(g.f6W, {
        theme: n,
        children: (e) => {
            var i, l;
            return (0, r.jsxs)('div', {
                ref: O ? y : void 0,
                'data-collapsed': v,
                className: o()(eE.sidebar, e, {
                    [eE.hasNotice]: t,
                    [eE.fullWidth]: d.tq,
                    [eE.hidden]: _,
                    [eE.channelListHidden]: a
                }),
                children: [
                    O &&
                        s &&
                        !c &&
                        (0, r.jsx)(M.Z, {
                            className: eE.guilds,
                            themeOverride: n
                        }),
                    !a &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    Z,
                                    ((i = eO({}, x)),
                                    (l = l = { children: (0, r.jsx)(eZ, {}) }),
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
                                    ? (0, r.jsx)(g.P3F, {
                                          onClick: A,
                                          'aria-label': 'Resize Sidebar',
                                          className: eE.sidebarResizeHandle,
                                          onMouseDown: j
                                      })
                                    : null,
                                (0, r.jsx)(ea.b, {})
                            ]
                        }),
                    !O && (0, r.jsx)(ec.Z, {})
                ]
            });
        }
    });
}
function ez() {
    var e;
    let t = (0, p.e7)([er.ZP], () => er.ZP.hasNotice()),
        n = (0, p.e7)([J.Z], () => (J.Z.darkSidebar ? ef.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(ef.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                i.useEffect(
                    () =>
                        X.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ef.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        o = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(ef.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                i.useEffect(
                    () =>
                        X.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ef.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            var e;
            let t = (0, s.TH)();
            return (null === (e = (0, s.LX)(t.pathname, ef.Z5c.GUILD_BOOSTING_MARKETING(Q.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        u = (function () {
            var e;
            let t = (0, s.TH)();
            return (null === (e = (0, s.LX)(t.pathname, ef.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        h = (0, p.e7)([H.Z], () => H.Z.getIsOpen()),
        g = (0, s.$B)([ef.Z5c.CHANNEL(ef.ME, Q.Hw.channelId()), ef.Z5c.CHANNEL(Q.Hw.guildId(), Q.Hw.channelId({ optional: !0 }), ':messageId?')]),
        f = (null == g ? void 0 : null === (e = g.params) || void 0 === e ? void 0 : e.channelId) === em.oC.GUILD_ONBOARDING,
        m = l || o || a || u || f,
        b = i.useCallback(() => B.Z.openSidebar(), []),
        E = (0, P.Q3)('AppView'),
        v = (0, P.TH)('AppView'),
        I = E ? 'div' : i.Fragment,
        S = (0, C.useAppSidebarState)((e) => !e.isOpen),
        T = (0, p.e7)([N.Z], () => N.Z.isFullscreenInContext());
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: eE.container,
            children: [
                h &&
                    !u &&
                    !E &&
                    (0, r.jsx)(M.Z, {
                        className: eE.guilds,
                        themeOverride: n
                    }),
                (0, r.jsx)(Z.Z.Provider, {
                    value: (null == g ? void 0 : g.params.guildId) === ef.ME ? void 0 : null == g ? void 0 : g.params.guildId,
                    children: (0, r.jsxs)('div', {
                        className: eE.base,
                        'data-fullscreen': T,
                        children: [
                            E && !T && (0, r.jsx)(eN, {}),
                            d.tq ? null : (0, r.jsx)(eu.Z, {}),
                            (0, r.jsxs)('div', {
                                className: eE.content,
                                children: [
                                    (0, r.jsx)(y.Z, {}),
                                    (0, r.jsx)(eF, {
                                        isOnFullScreenCollectiblesShopRoute: u,
                                        isSidebarOpen: h,
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideChannelList: m,
                                        hideSidebar: !h || u
                                    }),
                                    (0, r.jsx)(I, {
                                        className: eE.page,
                                        'data-collapsed': !!v && S,
                                        children: (0, r.jsx)(_.Z.Provider, {
                                            value: b,
                                            children: (0, r.jsxs)(s.rs, {
                                                children: [
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, r.jsx)(s.l_, { to: ef.Z5c.ME })
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                        render: eU,
                                                        impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { application_id: t.params.applicationId };
                                                        }
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.APPLICATION_LIBRARY,
                                                        render: eD,
                                                        impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.APPLICATION_STORE,
                                                        render: ek,
                                                        impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                        render: eM(!0),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                        render: eM(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.COLLECTIBLES_SHOP,
                                                        render: eM(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                        render: eM(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.MESSAGE_REQUESTS,
                                                        render: eW,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.FAMILY_CENTER,
                                                        render: eV,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.ME,
                                                        exact: !0,
                                                        render: eG,
                                                        impressionName: c.ImpressionNames.FRIENDS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: [ef.Z5c.CHANNEL_THREAD_VIEW(Q.Hw.guildId(), Q.Hw.channelId(), ':threadId', ':messageId?'), ef.Z5c.CHANNEL(ef.ME, Q.Hw.channelId()), ef.Z5c.CHANNEL(Q.Hw.guildId(), Q.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                        render: ex,
                                                        impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.GLOBAL_DISCOVERY,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.GLOBAL_DISCOVERY_APPS,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.QUEST_HOME,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.GUILD_DISCOVERY,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.GUILD_MEMBER_VERIFICATION(Q.Hw.guildId()),
                                                        render: ew,
                                                        impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(Q.Hw.guildId(), ':inviteCode?'),
                                                        render: eR,
                                                        impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { has_invite: void 0 !== t.params.inviteCode };
                                                        }
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        path: ef.Z5c.FEATURE(':feature'),
                                                        exact: !0,
                                                        render: eB,
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
        })
    });
}
