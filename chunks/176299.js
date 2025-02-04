n.d(t, { Z: () => eV }), n(47120);
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
    v = n(358221),
    N = n(823748),
    T = n(626421),
    S = n(118379),
    Z = n(267161),
    x = n(652515),
    A = n(544978),
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
    K = n(918701),
    Y = n(905423),
    q = n(304445),
    X = n(893607),
    Q = n(210887),
    J = n(592125),
    $ = n(271383),
    ee = n(430824),
    et = n(944486),
    en = n(933429),
    ei = n(823379),
    el = n(709054),
    er = n(374005),
    ea = n(409292),
    es = n(316173),
    eo = n(256638),
    ec = n(663701),
    ed = n(697309),
    eu = n(425369),
    eh = n(715702),
    em = n(981631),
    ep = n(176505),
    eg = n(215023),
    e_ = n(290511),
    ef = n(415281);
let eE = (0, d.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    eI = () =>
        (0, i.jsx)('div', {
            className: ef.loader,
            children: (0, i.jsx)(p.$jN, {})
        }),
    eC = (0, d.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eI
    }),
    ev = (0, d.Un)({
        createPromise: () => Promise.all([n.e('16114'), n.e('97811')]).then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: eI
    }),
    eN = (0, d.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eI
    }),
    eT = (0, d.Un)({
        createPromise: () => Promise.all([n.e('60696'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eI
    }),
    eS = (0, d.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eI
    }),
    eZ = (0, d.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eI
    }),
    ex = (e) => {
        let { match: t } = e,
            n = (0, h.e7)([J.Z, et.Z], () => {
                let e = et.Z.getChannelId();
                return J.Z.getChannel(e);
            }),
            { guildId: l, channelId: r, messageId: a } = t.params,
            s = (0, h.e7)([ee.Z], () => ee.Z.getGuild(l)),
            c = (0, h.e7)([$.ZP], () => (null == l ? null : $.ZP.getSelfMember(l))),
            d = (0, h.e7)([G.Z], () => {
                if (null == l) return;
                let e = G.Z.getData(l);
                if ((null == e ? void 0 : e.type) === B.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return A.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return A.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            u = (0, x.C4)(l, 'channel_renderer'),
            m = (0, O.jS)(l, 'ChannelRenderer');
        if (null != l && null != r && (0, ep.AB)(r))
            switch (r) {
                case ep.oC.ROLE_SUBSCRIPTIONS:
                    return u
                        ? (0, i.jsx)(eC, {
                              guildId: l,
                              initialTab: A.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(w.Z, { guildId: l });
                case ep.oC.GUILD_SHOP:
                    return (0, i.jsx)(eC, {
                        guildId: l,
                        productId: a,
                        initialTab: d
                    });
                case ep.oC.MEMBER_APPLICATIONS:
                    return m ? (0, i.jsx)(o.l_, { to: em.Z5c.CHANNEL(l, ep.oC.MEMBER_SAFETY) }) : (0, i.jsx)(ev, { guildId: l });
                case ep.oC.GUILD_HOME:
                    return (0, i.jsx)(eN, { guildId: l });
                case ep.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(eS, {
                        guildId: l,
                        selectedSection: e_.l7.BROWSE
                    });
                case ep.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(eZ, { guildId: l });
                case ep.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eS, {
                        guildId: l,
                        selectedSection: e_.l7.CUSTOMIZE
                    });
                case ep.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(eT, { guildId: l });
                default:
                    (0, ei.vE)(r);
            }
        if ((0, j.p3)(s, c))
            return (0, i.jsx)(D.Z, {
                guildId: l,
                channelId: r
            });
        if ((null == n ? void 0 : n.type) === em.d4z.GUILD_STORE) {
            let e = el.default.cast(t.params.messageId);
            return (0, i.jsx)(
                ea.Z,
                {
                    channel: n,
                    inputSkuId: e
                },
                n.id
            );
        }
        return (0, i.jsx)(N.Z, {});
    },
    eA = l.memo(function () {
        let { guildId: e, channelId: t } = (0, Y.Z)(),
            n = (0, h.e7)([et.Z], () => (null != t ? t : et.Z.getChannelId(e)));
        return window.location.pathname.startsWith(em.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(em.Z5c.GUILD_DISCOVERY) || (0, K.OG)()
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
              : (0, i.jsx)(ec.Z, {});
    }),
    eb = (e) => (0, i.jsx)(ex, { ...e }),
    eL = () => (0, i.jsx)(L.Z, {}),
    ey = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(R.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eP = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(U.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eO = () => (0, i.jsx)(eu.Z, {}),
    eR = () => (0, i.jsx)(eh.Z, {}),
    ej = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            let { tab: n } = (0, s.parse)(t.location.search);
            return Object.values(eg.AW).includes(n)
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
    eD = (e) => (0, i.jsx)(I.Z, { ...e }),
    ew = () => (0, i.jsx)(W.Z, {}),
    eM = () => (0, i.jsx)(V.Z, {}),
    ek = () => (0, i.jsx)(z.Z, {}),
    eU = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, i.jsx)(W.Z, { initialSection: em.pJs.ONLINE });
            case 'addFriends':
                return (0, i.jsx)(W.Z, { initialSection: em.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(W.Z, { initialSection: em.pJs.PENDING });
            case 'sessionManagement':
                return (0, i.jsx)(o.l_, { to: em.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, i.jsx)(o.l_, {
                    to: {
                        pathname: em.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, i.jsx)(o.l_, { to: em.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, i.jsx)(o.l_, { to: em.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(o.l_, { to: em.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(o.l_, { to: em.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, i.jsx)(o.l_, { to: { pathname: em.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, i.jsx)(o.l_, { to: { pathname: em.Z5c.NITRO_HOME } });
            default:
                return (0, i.jsx)(o.l_, { to: em.Z5c.ME });
        }
    };
function eG(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eB(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: r, hideChannelList: s, isSidebarOpen: o, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, _.t)(!0);
    let d = 'app view user trigger debugging';
    g.R6.useExperiment({ location: d }, { autoTrackExposure: !1 }), g.R6.trackExposure({ location: d });
    let E = (0, h.e7)([v.Z], () => v.Z.isFullscreenInContext()),
        I = (0, b.TH)('ChannelSidebar'),
        C = (0, b.Q3)('ChannelSidebar'),
        N = (0, Z.useAppSidebarState)((e) => !e.isOpen) && I;
    l.useLayoutEffect(() => {
        if (I) {
            var e;
            let t = parseInt(null !== (e = m.K.get(ed.nT)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = ed.qO), (t = Math.min(Math.max(t, ed.li), ed.zx)), !I && t <= ed.p8 && (t = ed.qO), eG(t);
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
            if (N) eG(ed.p8);
            else {
                var e;
                let t = parseInt(null !== (e = m.K.get(ed.nT)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = ed.qO), eG(t);
            }
        }, [N]);
    let T = l.useRef(null),
        S = l.useCallback(
            (e, t) => {
                var n;
                eG(e);
                let i = t < ed.li / 3;
                t <= ed.li ? document.body.classList.add(ef.draggingMin) : document.body.classList.remove(ef.draggingMin), t >= ed.zx ? document.body.classList.add(ef.draggingMax) : document.body.classList.remove(ef.draggingMax);
                let l = t - e;
                null === (n = T.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(l / ed.p8), 0.25))), I && (Z.useAppSidebarState.setState({ isOpen: !i }), i && eG(ed.p8));
            },
            [I]
        ),
        x = l.useCallback(() => {
            document.body.classList.add(ef.dragging);
        }, []),
        A = l.useCallback((e) => {
            var t;
            document.body.classList.remove(ef.dragging), document.body.classList.remove(ef.draggingMin), document.body.classList.remove(ef.draggingMax), document.body.classList.remove(ef.collapsing), null === (t = T.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), m.K.set(ed.nT, e);
        }, []),
        L = (0, f.Z)({
            minDimension: ed.li,
            maxDimension: ed.zx,
            resizableDomNodeRef: T,
            onElementResize: S,
            onElementResizeStart: x,
            onElementResizeEnd: A,
            orientation: f.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        y = l.useCallback(() => {
            Z.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (l.useLayoutEffect(() => {
            N && eG(ed.p8);
        }, [N]),
        r || (!C && s))
    )
        return null;
    let P = C ? 'div' : l.Fragment,
        O = C ? { className: a()(ef.sidebarList, { [ef.sidebarListRounded]: !t }) } : {};
    return (0, i.jsx)(p.f6W, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)('div', {
                ref: C ? T : void 0,
                'data-collapsed': N,
                className: a()(ef.sidebar, e, {
                    [ef.hasNotice]: t,
                    [ef.fullWidth]: u.tq,
                    [ef.hidden]: E,
                    [ef.channelListHidden]: s
                }),
                children: [
                    C &&
                        o &&
                        !c &&
                        (0, i.jsx)(k.Z, {
                            className: ef.guilds,
                            themeOverride: n
                        }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(P, {
                                    ...O,
                                    children: (0, i.jsx)(eA, {})
                                }),
                                C
                                    ? (0, i.jsx)(p.P3F, {
                                          onClick: y,
                                          'aria-label': 'Resize Sidebar',
                                          className: ef.sidebarResizeHandle,
                                          onMouseDown: L
                                      })
                                    : null,
                                (0, i.jsx)(er.b, {})
                            ]
                        }),
                    !C && (0, i.jsx)(es.Z, {})
                ]
            })
    });
}
function eV() {
    var e;
    let t = (0, h.e7)([en.ZP], () => en.ZP.hasNotice()),
        n = (0, h.e7)([Q.Z], () => (Q.Z.darkSidebar ? em.BRd.DARK : void 0)),
        r = (function () {
            let [e, t] = l.useState(() => window.location.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                l.useEffect(
                    () =>
                        q.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = l.useState(() => window.location.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                l.useEffect(
                    () =>
                        q.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        s = (function () {
            var e;
            let t = (0, o.TH)();
            return (null === (e = (0, o.LX)(t.pathname, em.Z5c.GUILD_BOOSTING_MARKETING(X.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        d = (function () {
            var e;
            let t = (0, o.TH)();
            return (null === (e = (0, o.LX)(t.pathname, em.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        m = (0, h.e7)([F.Z], () => F.Z.getIsOpen()),
        p = (0, o.$B)([em.Z5c.CHANNEL(em.ME, X.Hw.channelId()), em.Z5c.CHANNEL(X.Hw.guildId(), X.Hw.channelId({ optional: !0 }), ':messageId?')]),
        g = (null == p ? void 0 : null === (e = p.params) || void 0 === e ? void 0 : e.channelId) === ep.oC.GUILD_ONBOARDING,
        _ = r || a || s || d || g,
        f = l.useCallback(() => H.Z.openSidebar(), []),
        I = (0, b.Q3)('AppView'),
        N = (0, b.TH)('AppView'),
        S = I ? 'div' : l.Fragment,
        x = (0, Z.useAppSidebarState)((e) => !e.isOpen),
        A = (0, h.e7)([v.Z], () => v.Z.isFullscreenInContext());
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: ef.container,
            children: [
                m &&
                    !d &&
                    !I &&
                    (0, i.jsx)(k.Z, {
                        className: ef.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(P.Z.Provider, {
                    value: (null == p ? void 0 : p.params.guildId) === em.ME ? void 0 : null == p ? void 0 : p.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: ef.base,
                        'data-fullscreen': A,
                        children: [
                            I && !A && (0, i.jsx)(eE, {}),
                            u.tq ? null : (0, i.jsx)(eo.Z, {}),
                            (0, i.jsxs)('div', {
                                className: ef.content,
                                children: [
                                    (0, i.jsx)(T.Z, {}),
                                    (0, i.jsx)(eB, {
                                        isOnFullScreenCollectiblesShopRoute: d,
                                        isSidebarOpen: m,
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideChannelList: _,
                                        hideSidebar: !m || d
                                    }),
                                    (0, i.jsx)(S, {
                                        className: ef.page,
                                        'data-collapsed': !!N && x,
                                        children: (0, i.jsx)(E.Z.Provider, {
                                            value: f,
                                            children: (0, i.jsxs)(o.rs, {
                                                children: [
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, i.jsx)(o.l_, { to: em.Z5c.ME })
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                        render: eD,
                                                        impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { application_id: t.params.applicationId };
                                                        }
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.APPLICATION_LIBRARY,
                                                        render: eO,
                                                        impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.APPLICATION_STORE,
                                                        render: eR,
                                                        impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                        render: ej(!0),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.COLLECTIBLES_SHOP_WITH_TAB(':tab'),
                                                        render: ej(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.COLLECTIBLES_SHOP,
                                                        render: ej(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                        render: ej(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.MESSAGE_REQUESTS,
                                                        render: eM,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.FAMILY_CENTER,
                                                        render: ek,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.ME,
                                                        exact: !0,
                                                        render: ew,
                                                        impressionName: c.ImpressionNames.FRIENDS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: [em.Z5c.CHANNEL_THREAD_VIEW(X.Hw.guildId(), X.Hw.channelId(), ':threadId', ':messageId?'), em.Z5c.CHANNEL(em.ME, X.Hw.channelId()), em.Z5c.CHANNEL(X.Hw.guildId(), X.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                        render: eb,
                                                        impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.GLOBAL_DISCOVERY,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.GLOBAL_DISCOVERY_APPS,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.QUEST_HOME,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.GUILD_DISCOVERY,
                                                        render: eL,
                                                        impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.GUILD_MEMBER_VERIFICATION(X.Hw.guildId(), ':inviteCode?'),
                                                        render: ey,
                                                        impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(X.Hw.guildId(), ':inviteCode?'),
                                                        render: eP,
                                                        impressionName: c.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { has_invite: void 0 !== t.params.inviteCode };
                                                        }
                                                    }),
                                                    (0, i.jsx)(C.Z, {
                                                        path: em.Z5c.FEATURE(':feature'),
                                                        exact: !0,
                                                        render: eU,
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
