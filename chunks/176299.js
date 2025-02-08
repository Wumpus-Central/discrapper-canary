n.d(t, { Z: () => eF }), n(47120);
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
    Z = n(267161),
    A = n(652515),
    x = n(544978),
    b = n(540059),
    L = n(724383),
    y = n(135864),
    P = n(372900),
    O = n(63568),
    R = n(6039),
    j = n(637853),
    D = n(326145),
    w = n(269675),
    M = n(242601),
    k = n(416568),
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
    el = n(823379),
    er = n(709054),
    ea = n(374005),
    es = n(409292),
    eo = n(316173),
    ec = n(256638),
    ed = n(663701),
    eu = n(697309),
    eh = n(425369),
    em = n(715702),
    ep = n(981631),
    eg = n(176505),
    e_ = n(215023),
    ef = n(290511),
    eE = n(415281);
let eI = (0, d.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    eC = () =>
        (0, i.jsx)('div', {
            className: eE.loader,
            children: (0, i.jsx)(p.$jN, {})
        }),
    eN = (0, d.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eC
    }),
    ev = (0, d.Un)({
        createPromise: () => Promise.all([n.e('16114'), n.e('97811')]).then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: eC
    }),
    eT = (0, d.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eC
    }),
    eS = (0, d.Un)({
        createPromise: () => Promise.all([n.e('6850'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eC
    }),
    eZ = (0, d.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eC
    }),
    eA = (0, d.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eC
    }),
    ex = (0, d.Un)({
        createPromise: () => n.e('89091').then(n.bind(n, 504392)),
        webpackId: 504392,
        name: 'GuildPowerupsOverview',
        renderLoader: eC
    }),
    eb = (e) => {
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
                            return x.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return x.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            u = (0, A.C4)(l, 'channel_renderer'),
            m = (0, O.jS)(l, 'ChannelRenderer'),
            p = (0, Y.Ek)(s, 'ChannelRenderer');
        if (null != l && null != r && (0, eg.AB)(r))
            switch (r) {
                case eg.oC.ROLE_SUBSCRIPTIONS:
                    return u
                        ? (0, i.jsx)(eN, {
                              guildId: l,
                              initialTab: x.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(w.Z, { guildId: l });
                case eg.oC.GUILD_SHOP:
                    return (0, i.jsx)(eN, {
                        guildId: l,
                        productId: a,
                        initialTab: d
                    });
                case eg.oC.MEMBER_APPLICATIONS:
                    return m ? (0, i.jsx)(o.l_, { to: ep.Z5c.CHANNEL(l, eg.oC.MEMBER_SAFETY) }) : (0, i.jsx)(ev, { guildId: l });
                case eg.oC.GUILD_HOME:
                    return (0, i.jsx)(eT, { guildId: l });
                case eg.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(eZ, {
                        guildId: l,
                        selectedSection: ef.l7.BROWSE
                    });
                case eg.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(eA, { guildId: l });
                case eg.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eZ, {
                        guildId: l,
                        selectedSection: ef.l7.CUSTOMIZE
                    });
                case eg.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(eS, { guildId: l });
                case eg.oC.GUILD_BOOSTS:
                    return p ? (0, i.jsx)(ex, { guildId: l }) : (0, i.jsx)(o.l_, { to: ep.Z5c.CHANNEL(l) });
                default:
                    (0, el.vE)(r);
            }
        if ((0, j.p3)(s, c))
            return (0, i.jsx)(D.Z, {
                guildId: l,
                channelId: r
            });
        if ((null == n ? void 0 : n.type) === ep.d4z.GUILD_STORE) {
            let e = er.default.cast(t.params.messageId);
            return (0, i.jsx)(
                es.Z,
                {
                    channel: n,
                    inputSkuId: e
                },
                n.id
            );
        }
        return (0, i.jsx)(v.Z, {});
    },
    eL = l.memo(function () {
        let { guildId: e, channelId: t } = (0, q.Z)(),
            n = (0, h.e7)([en.Z], () => (null != t ? t : en.Z.getChannelId(e)));
        return window.location.pathname.startsWith(ep.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(ep.Z5c.GUILD_DISCOVERY) || (0, K.OG)()
            ? (0, i.jsx)(y.Z, {})
            : null != e
              ? (0, i.jsx)(
                    M.Z,
                    {
                        selectedChannelId: n,
                        guildId: e
                    },
                    e
                )
              : (0, i.jsx)(ed.Z, {});
    }),
    ey = (e) => (0, i.jsx)(eb, { ...e }),
    eP = () => (0, i.jsx)(L.Z, {}),
    eO = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, i.jsx)(R.Z, { guildId: t.params.guildId }) : null;
    },
    eR = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(U.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    ej = () => (0, i.jsx)(eh.Z, {}),
    eD = () => (0, i.jsx)(em.Z, {}),
    ew = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, s.parse)(t.location.search);
            return Object.values(e_.AW).includes(n)
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
    ek = () => (0, i.jsx)(W.Z, {}),
    eU = () => (0, i.jsx)(V.Z, {}),
    eG = () => (0, i.jsx)(z.Z, {}),
    eB = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, i.jsx)(W.Z, { initialSection: ep.pJs.ONLINE });
            case 'addFriends':
                return (0, i.jsx)(W.Z, { initialSection: ep.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(W.Z, { initialSection: ep.pJs.PENDING });
            case 'sessionManagement':
                return (0, i.jsx)(o.l_, { to: ep.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, i.jsx)(o.l_, {
                    to: {
                        pathname: ep.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, i.jsx)(o.l_, { to: ep.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, i.jsx)(o.l_, { to: ep.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(o.l_, { to: ep.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(o.l_, { to: ep.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, i.jsx)(o.l_, { to: { pathname: ep.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, i.jsx)(o.l_, { to: { pathname: ep.Z5c.NITRO_HOME } });
            default:
                return (0, i.jsx)(o.l_, { to: ep.Z5c.ME });
        }
    };
function eV(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eH(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: r, hideChannelList: s, isSidebarOpen: o, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, _.t)(!0);
    let d = 'app view user trigger debugging';
    g.R6.useExperiment({ location: d }, { autoTrackExposure: !1 }), g.R6.trackExposure({ location: d });
    let E = (0, h.e7)([N.Z], () => N.Z.isFullscreenInContext()),
        I = (0, b.TH)('ChannelSidebar'),
        C = (0, b.Q3)('ChannelSidebar'),
        v = (0, Z.useAppSidebarState)((e) => !e.isOpen) && I;
    l.useLayoutEffect(() => {
        if (I) {
            var e;
            let t = parseInt(null !== (e = m.K.get(eu.nT)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = eu.qO), (t = Math.min(Math.max(t, eu.li), eu.zx)), !I && t <= eu.p8 && (t = eu.qO), eV(t);
            let n = (e) => {
                e.metaKey && 'b' === e.key && Z.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
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
            if (v) eV(eu.p8);
            else {
                var e;
                let t = parseInt(null !== (e = m.K.get(eu.nT)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = eu.qO), eV(t);
            }
        }, [v]);
    let T = l.useRef(null),
        S = l.useCallback(
            (e, t) => {
                var n;
                eV(e);
                let i = t < eu.li / 3;
                t <= eu.li ? document.body.classList.add(eE.draggingMin) : document.body.classList.remove(eE.draggingMin), t >= eu.zx ? document.body.classList.add(eE.draggingMax) : document.body.classList.remove(eE.draggingMax);
                let l = t - e;
                null === (n = T.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(l / eu.p8), 0.25))), I && (Z.useAppSidebarState.setState({ isOpen: !i }), i && eV(eu.p8));
            },
            [I]
        ),
        A = l.useCallback(() => {
            document.body.classList.add(eE.dragging);
        }, []),
        x = l.useCallback((e) => {
            var t;
            document.body.classList.remove(eE.dragging), document.body.classList.remove(eE.draggingMin), document.body.classList.remove(eE.draggingMax), document.body.classList.remove(eE.collapsing), null === (t = T.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), m.K.set(eu.nT, e);
        }, []),
        L = (0, f.Z)({
            minDimension: eu.li,
            maxDimension: eu.zx,
            resizableDomNodeRef: T,
            onElementResize: S,
            onElementResizeStart: A,
            onElementResizeEnd: x,
            orientation: f.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        y = l.useCallback(() => {
            Z.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (l.useLayoutEffect(() => {
            v && eV(eu.p8);
        }, [v]),
        r || (!C && s))
    )
        return null;
    let P = C ? 'div' : l.Fragment,
        O = C ? { className: a()(eE.sidebarList, { [eE.sidebarListRounded]: !t }) } : {};
    return (0, i.jsx)(p.f6W, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)('div', {
                ref: C ? T : void 0,
                'data-collapsed': v,
                className: a()(eE.sidebar, e, {
                    [eE.hasNotice]: t,
                    [eE.fullWidth]: u.tq,
                    [eE.hidden]: E,
                    [eE.channelListHidden]: s
                }),
                children: [
                    C &&
                        o &&
                        !c &&
                        (0, i.jsx)(k.Z, {
                            className: eE.guilds,
                            themeOverride: n
                        }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(P, {
                                    ...O,
                                    children: (0, i.jsx)(eL, {})
                                }),
                                C
                                    ? (0, i.jsx)(p.P3F, {
                                          onClick: y,
                                          'aria-label': 'Resize Sidebar',
                                          className: eE.sidebarResizeHandle,
                                          onMouseDown: L
                                      })
                                    : null,
                                (0, i.jsx)(ea.b, {})
                            ]
                        }),
                    !C && (0, i.jsx)(eo.Z, {})
                ]
            })
    });
}
function eF() {
    var e;
    let t = (0, h.e7)([ei.ZP], () => ei.ZP.hasNotice()),
        n = (0, h.e7)([J.Z], () => (J.Z.darkSidebar ? ep.BRd.DARK : void 0)),
        r = (function () {
            let [e, t] = l.useState(() => window.location.pathname.startsWith(ep.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                l.useEffect(
                    () =>
                        X.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ep.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = l.useState(() => window.location.pathname.startsWith(ep.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                l.useEffect(
                    () =>
                        X.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ep.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        s = (function () {
            var e;
            let t = (0, o.TH)();
            return (null === (e = (0, o.LX)(t.pathname, ep.Z5c.GUILD_BOOSTING_MARKETING(Q.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        d = (function () {
            var e;
            let t = (0, o.TH)();
            return (null === (e = (0, o.LX)(t.pathname, ep.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        m = (0, h.e7)([F.Z], () => F.Z.getIsOpen()),
        p = (0, o.$B)([ep.Z5c.CHANNEL(ep.ME, Q.Hw.channelId()), ep.Z5c.CHANNEL(Q.Hw.guildId(), Q.Hw.channelId({ optional: !0 }), ':messageId?')]),
        g = (null == p ? void 0 : null === (e = p.params) || void 0 === e ? void 0 : e.channelId) === eg.oC.GUILD_ONBOARDING,
        _ = r || a || s || d || g,
        f = l.useCallback(() => H.Z.openSidebar(), []),
        I = (0, b.Q3)('AppView'),
        v = (0, b.TH)('AppView'),
        S = I ? 'div' : l.Fragment,
        A = (0, Z.useAppSidebarState)((e) => !e.isOpen),
        x = (0, h.e7)([N.Z], () => N.Z.isFullscreenInContext());
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: eE.container,
            children: [
                m &&
                    !d &&
                    !I &&
                    (0, i.jsx)(k.Z, {
                        className: eE.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(P.Z.Provider, {
                    value: (null == p ? void 0 : p.params.guildId) === ep.ME ? void 0 : null == p ? void 0 : p.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: eE.base,
                        'data-fullscreen': x,
                        children: [
                            I && !x && (0, i.jsx)(eI, {}),
                            u.tq ? null : (0, i.jsx)(ec.Z, {}),
                            (0, i.jsxs)('div', {
                                className: eE.content,
                                children: [
                                    (0, i.jsx)(T.Z, {}),
                                    (0, i.jsx)(eH, {
                                        isOnFullScreenCollectiblesShopRoute: d,
                                        isSidebarOpen: m,
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideChannelList: _,
                                        hideSidebar: !m || d
                                    }),
                                    (0, i.jsx)(S, {
                                        className: eE.page,
                                        'data-collapsed': !!v && A,
                                        children: (0, i.jsx)(E.Z.Provider, {
                                            value: f,
                                            children: (0, i.jsxs)(o.rs, {
                                                children: [
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, i.jsx)(o.l_, { to: ep.Z5c.ME })
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                        render: eM,
                                                        impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { application_id: t.params.applicationId };
                                                        }
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.APPLICATION_LIBRARY,
                                                        render: ej,
                                                        impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.APPLICATION_STORE,
                                                        render: eD,
                                                        impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                        render: ew(!0),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                        render: ew(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.COLLECTIBLES_SHOP,
                                                        render: ew(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                        render: ew(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.MESSAGE_REQUESTS,
                                                        render: eU,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.FAMILY_CENTER,
                                                        render: eG,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.ME,
                                                        exact: !0,
                                                        render: ek,
                                                        impressionName: c.ImpressionNames.FRIENDS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: [ep.Z5c.CHANNEL_THREAD_VIEW(Q.Hw.guildId(), Q.Hw.channelId(), ':threadId', ':messageId?'), ep.Z5c.CHANNEL(ep.ME, Q.Hw.channelId()), ep.Z5c.CHANNEL(Q.Hw.guildId(), Q.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                        render: ey,
                                                        impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.GLOBAL_DISCOVERY,
                                                        render: eP,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                        render: eP,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.GLOBAL_DISCOVERY_APPS,
                                                        render: eP,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.QUEST_HOME,
                                                        render: eP,
                                                        impressionName: c.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.GUILD_DISCOVERY,
                                                        render: eP,
                                                        impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.GUILD_MEMBER_VERIFICATION(Q.Hw.guildId()),
                                                        render: eO,
                                                        impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(Q.Hw.guildId(), ':inviteCode?'),
                                                        render: eR,
                                                        impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { has_invite: void 0 !== t.params.inviteCode };
                                                        }
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: ep.Z5c.FEATURE(':feature'),
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
