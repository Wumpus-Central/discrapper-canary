n.d(t, { Z: () => ez }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(593473),
    o = n(512969),
    c = n(990547),
    d = n(608787),
    u = n(873546),
    h = n(442837),
    m = n(433517),
    p = n(481060),
    g = n(711237),
    _ = n(532835),
    f = n(347469),
    E = n(290297),
    I = n(289341),
    C = n(765717),
    N = n(358221),
    v = n(823748),
    T = n(626421),
    S = n(118379),
    A = n(267161),
    b = n(652515),
    Z = n(544978),
    x = n(540059),
    L = n(724383),
    y = n(135864),
    O = n(372900),
    P = n(63568),
    R = n(6039),
    j = n(637853),
    D = n(326145),
    w = n(269675),
    k = n(242601),
    M = n(416568),
    U = n(613609),
    G = n(160404),
    B = n(225675),
    V = n(745052),
    H = n(285865),
    F = n(659971),
    z = n(179742),
    W = n(270759),
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
    ei = n(933429),
    el = n(626135),
    er = n(823379),
    ea = n(709054),
    es = n(374005),
    eo = n(409292),
    ec = n(316173),
    ed = n(256638),
    eu = n(663701),
    eh = n(697309),
    em = n(425369),
    ep = n(715702),
    eg = n(981631),
    e_ = n(176505),
    ef = n(215023),
    eE = n(290511),
    eI = n(306855);
let eC = (0, d.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    eN = () =>
        (0, i.jsx)('div', {
            className: eI.loader,
            children: (0, i.jsx)(p.$jN, {})
        }),
    ev = (0, d.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eN
    }),
    eT = (0, d.Un)({
        createPromise: () => Promise.all([n.e('16114'), n.e('97811')]).then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: eN
    }),
    eS = (0, d.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eN
    }),
    eA = (0, d.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eN
    }),
    eb = (0, d.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eN
    }),
    eZ = (0, d.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eN
    }),
    ex = (0, d.Un)({
        createPromise: () => n.e('44799').then(n.bind(n, 393357)),
        webpackId: 393357,
        name: 'GuildPowerupsPage',
        renderLoader: eN
    }),
    eL = (e) => {
        let { match: t } = e,
            n = (0, h.e7)([$.Z, en.Z], () => {
                let e = en.Z.getChannelId();
                return $.Z.getChannel(e);
            }),
            { guildId: l, channelId: r, messageId: a } = t.params,
            s = (0, h.e7)([et.Z], () => et.Z.getGuild(l)),
            c = (0, h.e7)([ee.ZP], () => (null == l ? null : ee.ZP.getSelfMember(l))),
            d = (0, h.e7)([G.Z], () => {
                if (null == l) return;
                let e = G.Z.getData(l);
                if ((null == e ? void 0 : e.type) === B.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return Z.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return Z.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            u = (0, b.C4)(l, 'channel_renderer'),
            m = (0, P.jS)(l, 'ChannelRenderer'),
            p = (0, Y.Ek)(s, 'ChannelRenderer');
        if (null != l && null != r && (0, e_.AB)(r))
            switch (r) {
                case e_.oC.ROLE_SUBSCRIPTIONS:
                    return u
                        ? (0, i.jsx)(ev, {
                              guildId: l,
                              initialTab: Z.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(w.Z, { guildId: l });
                case e_.oC.GUILD_SHOP:
                    return (0, i.jsx)(ev, {
                        guildId: l,
                        productId: a,
                        initialTab: d
                    });
                case e_.oC.MEMBER_APPLICATIONS:
                    return m ? (0, i.jsx)(o.l_, { to: eg.Z5c.CHANNEL(l, e_.oC.MEMBER_SAFETY) }) : (0, i.jsx)(eT, { guildId: l });
                case e_.oC.GUILD_HOME:
                    return (0, i.jsx)(eS, { guildId: l });
                case e_.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(eb, {
                        guildId: l,
                        selectedSection: eE.l7.BROWSE
                    });
                case e_.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(eZ, { guildId: l });
                case e_.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eb, {
                        guildId: l,
                        selectedSection: eE.l7.CUSTOMIZE
                    });
                case e_.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(eA, { guildId: l });
                case e_.oC.GUILD_BOOSTS:
                    return p ? (0, i.jsx)(ex, { guildId: l }) : (0, i.jsx)(o.l_, { to: eg.Z5c.CHANNEL(l) });
                default:
                    (0, er.vE)(r);
            }
        if ((0, j.p3)(s, c))
            return (0, i.jsx)(D.Z, {
                guildId: l,
                channelId: r
            });
        if ((null == n ? void 0 : n.type) === eg.d4z.GUILD_STORE) {
            let e = ea.default.cast(t.params.messageId);
            return (0, i.jsx)(
                eo.Z,
                {
                    channel: n,
                    inputSkuId: e
                },
                n.id
            );
        }
        return (0, i.jsx)(v.Z, {});
    },
    ey = l.memo(function () {
        let { guildId: e, channelId: t } = (0, q.Z)(),
            n = (0, h.e7)([en.Z], () => (null != t ? t : en.Z.getChannelId(e)));
        return window.location.pathname.startsWith(eg.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(eg.Z5c.GUILD_DISCOVERY) || (0, K.OG)()
            ? (0, i.jsx)(y.Z, {})
            : null != e
              ? (0, i.jsx)(
                    k.Z,
                    {
                        selectedChannelId: n,
                        guildId: e
                    },
                    e
                )
              : (0, i.jsx)(eu.Z, {});
    }),
    eO = (e) => (0, i.jsx)(eL, { ...e }),
    eP = () => (0, i.jsx)(L.Z, {}),
    eR = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, i.jsx)(R.Z, { guildId: t.params.guildId }) : null;
    },
    ej = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(U.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eD = () => (0, i.jsx)(em.Z, {}),
    ew = () => (0, i.jsx)(ep.Z, {}),
    ek = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, s.parse)(t.location.search);
            return Object.values(ef.AW).includes(n)
                ? (0, i.jsx)(S.Z, {
                      isFullScreen: e,
                      tab: n,
                      ...t
                  })
                : (0, i.jsx)(S.Z, {
                      isFullScreen: e,
                      ...t
                  });
        };
    },
    eM = (e) => (0, i.jsx)(I.Z, { ...e }),
    eU = () => (0, i.jsx)(W.Z, {}),
    eG = () => (0, i.jsx)(V.Z, {}),
    eB = () => (0, i.jsx)(z.Z, {}),
    eV = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, i.jsx)(W.Z, { initialSection: eg.pJs.ONLINE });
            case 'addFriends':
                return (0, i.jsx)(W.Z, { initialSection: eg.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(W.Z, { initialSection: eg.pJs.PENDING });
            case 'sessionManagement':
                return (0, i.jsx)(o.l_, { to: eg.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, i.jsx)(o.l_, {
                    to: {
                        pathname: eg.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, i.jsx)(o.l_, { to: eg.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, i.jsx)(o.l_, { to: eg.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(o.l_, { to: eg.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(o.l_, { to: eg.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, i.jsx)(o.l_, { to: { pathname: eg.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, i.jsx)(o.l_, { to: { pathname: eg.Z5c.NITRO_HOME } });
            default:
                return (0, i.jsx)(o.l_, { to: eg.Z5c.ME });
        }
    };
function eH(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eF(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: r, hideChannelList: s, isSidebarOpen: o, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, _.t)(!0);
    let d = 'app view user trigger debugging';
    g.R6.useExperiment({ location: d }, { autoTrackExposure: !1 }), g.R6.trackExposure({ location: d });
    let E = (0, h.e7)([N.Z], () => N.Z.isFullscreenInContext()),
        I = (0, x.TH)('ChannelSidebar'),
        C = (0, x.Q3)('ChannelSidebar'),
        v = (0, A.useAppSidebarState)((e) => !e.isOpen) && I;
    l.useLayoutEffect(() => {
        if (I) {
            var e;
            let t = parseInt(null !== (e = m.K.get(eh.nT)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = eh.qO), (t = Math.min(Math.max(t, eh.li), eh.zx)), !I && t <= eh.p8 && (t = eh.qO), eH(t);
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
    }, [I]),
        l.useLayoutEffect(() => {
            if (v) eH(eh.p8);
            else {
                var e;
                let t = parseInt(null !== (e = m.K.get(eh.nT)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = eh.qO), eH(t);
            }
        }, [v]);
    let T = l.useRef(null),
        S = l.useCallback(
            (e, t) => {
                var n;
                eH(e);
                let i = t < eh.li / 3;
                t <= eh.li ? document.body.classList.add(eI.draggingMin) : document.body.classList.remove(eI.draggingMin), t >= eh.zx ? document.body.classList.add(eI.draggingMax) : document.body.classList.remove(eI.draggingMax);
                let l = t - e;
                null === (n = T.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(l / eh.p8), 0.25))), I && (A.useAppSidebarState.setState({ isOpen: !i }), i && eH(eh.p8));
            },
            [I]
        ),
        b = l.useCallback(() => {
            document.body.classList.add(eI.dragging);
        }, []),
        Z = l.useCallback((e) => {
            var t;
            document.body.classList.remove(eI.dragging), document.body.classList.remove(eI.draggingMin), document.body.classList.remove(eI.draggingMax), document.body.classList.remove(eI.collapsing), null === (t = T.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), m.K.set(eh.nT, e), el.default.track(eg.rMx.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        L = (0, f.Z)({
            minDimension: eh.li,
            maxDimension: eh.zx,
            resizableDomNodeRef: T,
            onElementResize: S,
            onElementResizeStart: b,
            onElementResizeEnd: Z,
            orientation: f.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        y = l.useCallback(() => {
            A.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (l.useLayoutEffect(() => {
            v && eH(eh.p8);
        }, [v]),
        r || (!C && s))
    )
        return null;
    let O = C ? 'div' : l.Fragment,
        P = C ? { className: a()(eI.sidebarList, { [eI.sidebarListRounded]: !t }) } : {};
    return (0, i.jsx)(p.f6W, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)('div', {
                ref: C ? T : void 0,
                'data-collapsed': v,
                className: a()(eI.sidebar, e, {
                    [eI.hasNotice]: t,
                    [eI.fullWidth]: u.tq,
                    [eI.hidden]: E,
                    [eI.channelListHidden]: s
                }),
                children: [
                    C &&
                        o &&
                        !c &&
                        (0, i.jsx)(M.Z, {
                            className: eI.guilds,
                            themeOverride: n
                        }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(O, {
                                    ...P,
                                    children: (0, i.jsx)(ey, {})
                                }),
                                C
                                    ? (0, i.jsx)(p.P3F, {
                                          onClick: y,
                                          'aria-label': 'Resize Sidebar',
                                          className: eI.sidebarResizeHandle,
                                          onMouseDown: L
                                      })
                                    : null,
                                (0, i.jsx)(es.b, {})
                            ]
                        }),
                    !C && (0, i.jsx)(ec.Z, {})
                ]
            })
    });
}
function ez() {
    var e;
    let t = (0, h.e7)([ei.ZP], () => ei.ZP.hasNotice()),
        n = (0, h.e7)([J.Z], () => (J.Z.darkSidebar ? eg.BRd.DARK : void 0)),
        r = (function () {
            let [e, t] = l.useState(() => window.location.pathname.startsWith(eg.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                l.useEffect(
                    () =>
                        X.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eg.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = l.useState(() => window.location.pathname.startsWith(eg.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                l.useEffect(
                    () =>
                        X.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eg.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        s = (function () {
            var e;
            let t = (0, o.TH)();
            return (null === (e = (0, o.LX)(t.pathname, eg.Z5c.GUILD_BOOSTING_MARKETING(Q.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        d = (function () {
            var e;
            let t = (0, o.TH)();
            return (null === (e = (0, o.LX)(t.pathname, eg.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        m = (0, h.e7)([F.Z], () => F.Z.getIsOpen()),
        p = (0, o.$B)([eg.Z5c.CHANNEL(eg.ME, Q.Hw.channelId()), eg.Z5c.CHANNEL(Q.Hw.guildId(), Q.Hw.channelId({ optional: !0 }), ':messageId?')]),
        g = (null == p ? void 0 : null === (e = p.params) || void 0 === e ? void 0 : e.channelId) === e_.oC.GUILD_ONBOARDING,
        _ = r || a || s || d || g,
        f = l.useCallback(() => H.Z.openSidebar(), []),
        I = (0, x.Q3)('AppView'),
        v = (0, x.TH)('AppView'),
        S = I ? 'div' : l.Fragment,
        b = (0, A.useAppSidebarState)((e) => !e.isOpen),
        Z = (0, h.e7)([N.Z], () => N.Z.isFullscreenInContext());
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: eI.container,
            children: [
                m &&
                    !d &&
                    !I &&
                    (0, i.jsx)(M.Z, {
                        className: eI.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(O.Z.Provider, {
                    value: (null == p ? void 0 : p.params.guildId) === eg.ME ? void 0 : null == p ? void 0 : p.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: eI.base,
                        'data-fullscreen': Z,
                        children: [
                            I && !Z && (0, i.jsx)(eC, {}),
                            u.tq ? null : (0, i.jsx)(ed.Z, {}),
                            (0, i.jsxs)('div', {
                                className: eI.content,
                                children: [
                                    (0, i.jsx)(T.Z, {}),
                                    (0, i.jsx)(eF, {
                                        isOnFullScreenCollectiblesShopRoute: d,
                                        isSidebarOpen: m,
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideChannelList: _,
                                        hideSidebar: !m || d
                                    }),
                                    (0, i.jsx)(S, {
                                        className: eI.page,
                                        'data-collapsed': !!v && b,
                                        children: (0, i.jsx)(E.Z.Provider, {
                                            value: f,
                                            children: (0, i.jsxs)(o.rs, {
                                                children: [
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, i.jsx)(o.l_, { to: eg.Z5c.ME })
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                        render: eM,
                                                        impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { application_id: t.params.applicationId };
                                                        }
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.APPLICATION_LIBRARY,
                                                        render: eD,
                                                        impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.APPLICATION_STORE,
                                                        render: ew,
                                                        impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                        render: ek(!0),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                        render: ek(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.COLLECTIBLES_SHOP,
                                                        render: ek(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                        render: ek(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.MESSAGE_REQUESTS,
                                                        render: eG,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.FAMILY_CENTER,
                                                        render: eB,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.ME,
                                                        exact: !0,
                                                        render: eU,
                                                        impressionName: c.ImpressionNames.FRIENDS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: [eg.Z5c.CHANNEL_THREAD_VIEW(Q.Hw.guildId(), Q.Hw.channelId(), ':threadId', ':messageId?'), eg.Z5c.CHANNEL(eg.ME, Q.Hw.channelId()), eg.Z5c.CHANNEL(Q.Hw.guildId(), Q.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                        render: eO,
                                                        impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.GLOBAL_DISCOVERY,
                                                        render: eP,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                        render: eP,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.GLOBAL_DISCOVERY_APPS,
                                                        render: eP,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.QUEST_HOME,
                                                        render: eP,
                                                        impressionName: c.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.GUILD_DISCOVERY,
                                                        render: eP,
                                                        impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.GUILD_MEMBER_VERIFICATION(Q.Hw.guildId()),
                                                        render: eR,
                                                        impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(Q.Hw.guildId(), ':inviteCode?'),
                                                        render: ej,
                                                        impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { has_invite: void 0 !== t.params.inviteCode };
                                                        }
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: eg.Z5c.FEATURE(':feature'),
                                                        exact: !0,
                                                        render: eV,
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
