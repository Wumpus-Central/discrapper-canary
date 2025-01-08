n.d(t, {
    Z: function () {
        return eB;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512969),
    o = n(990547),
    c = n(608787),
    d = n(873546),
    u = n(442837),
    h = n(433517),
    m = n(481060),
    p = n(711237),
    g = n(532835),
    f = n(347469),
    _ = n(290297),
    E = n(289341),
    I = n(765717),
    C = n(358221),
    N = n(823748),
    v = n(626421),
    S = n(118379),
    T = n(267161),
    b = n(652515),
    A = n(544978),
    Z = n(540059),
    x = n(724383),
    L = n(135864),
    P = n(372900),
    O = n(63568),
    y = n(6039),
    R = n(637853),
    j = n(326145),
    D = n(269675),
    M = n(242601),
    w = n(416568),
    k = n(613609),
    U = n(160404),
    G = n(225675),
    B = n(745052),
    V = n(285865),
    H = n(659971),
    F = n(179742),
    z = n(270759),
    W = n(918701),
    Y = n(905423),
    K = n(304445),
    q = n(893607),
    X = n(187819),
    Q = n(210887),
    J = n(592125),
    $ = n(271383),
    ee = n(430824),
    et = n(944486),
    en = n(933429),
    ei = n(823379),
    er = n(709054),
    el = n(374005),
    ea = n(409292),
    es = n(316173),
    eo = n(256638),
    ec = n(663701),
    ed = n(697309),
    eu = n(425369),
    eh = n(715702),
    em = n(981631),
    ep = n(176505),
    eg = n(290511),
    ef = n(415281);
let e_ = (0, c.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    eE = () =>
        (0, i.jsx)('div', {
            className: ef.loader,
            children: (0, i.jsx)(m.Spinner, {})
        }),
    eI = (0, c.Un)({
        createPromise: () => n.e('68614').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eE
    }),
    eC = (0, c.Un)({
        createPromise: () => Promise.all([n.e('16114'), n.e('57279')]).then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: eE
    }),
    eN = (0, c.Un)({
        createPromise: () => n.e('60493').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eE
    }),
    ev = (0, c.Un)({
        createPromise: () => Promise.all([n.e('60696'), n.e('44400')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eE
    }),
    eS = (0, c.Un)({
        createPromise: () => Promise.all([n.e('63288'), n.e('98479'), n.e('58227'), n.e('38359'), n.e('35566')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eE
    }),
    eT = (0, c.Un)({
        createPromise: () => Promise.all([n.e('63288'), n.e('98479'), n.e('19878'), n.e('38359'), n.e('41456')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eE
    }),
    eb = (e) => {
        let { match: t } = e,
            n = (0, u.e7)([J.Z, et.Z], () => {
                let e = et.Z.getChannelId();
                return J.Z.getChannel(e);
            }),
            { guildId: r, channelId: l, messageId: a } = t.params,
            o = (0, u.e7)([ee.Z], () => ee.Z.getGuild(r)),
            c = (0, u.e7)([$.ZP], () => (null == r ? null : $.ZP.getSelfMember(r))),
            d = (0, u.e7)([U.Z], () => {
                if (null == r) return;
                let e = U.Z.getData(r);
                if ((null == e ? void 0 : e.type) === G.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return A.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return A.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            h = (0, b.C4)(r, 'channel_renderer'),
            m = (0, O.jS)(r, 'ChannelRenderer');
        if (null != r && null != l && (0, ep.AB)(l))
            switch (l) {
                case ep.oC.ROLE_SUBSCRIPTIONS:
                    return h
                        ? (0, i.jsx)(eI, {
                              guildId: r,
                              initialTab: A.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(D.Z, { guildId: r });
                case ep.oC.GUILD_SHOP:
                    return (0, i.jsx)(eI, {
                        guildId: r,
                        productId: a,
                        initialTab: d
                    });
                case ep.oC.MEMBER_APPLICATIONS:
                    return m ? (0, i.jsx)(s.l_, { to: em.Z5c.CHANNEL(r, ep.oC.MEMBER_SAFETY) }) : (0, i.jsx)(eC, { guildId: r });
                case ep.oC.GUILD_HOME:
                    return (0, i.jsx)(eN, { guildId: r });
                case ep.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(eS, {
                        guildId: r,
                        selectedSection: eg.l7.BROWSE
                    });
                case ep.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(eT, { guildId: r });
                case ep.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eS, {
                        guildId: r,
                        selectedSection: eg.l7.CUSTOMIZE
                    });
                case ep.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(ev, { guildId: r });
                default:
                    (0, ei.vE)(l);
            }
        if ((0, R.p3)(o, c))
            return (0, i.jsx)(j.Z, {
                guildId: r,
                channelId: l
            });
        if ((null == n ? void 0 : n.type) === em.d4z.GUILD_STORE) {
            let e = er.default.cast(t.params.messageId);
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
    eA = r.memo(function () {
        let { guildId: e, channelId: t } = (0, Y.Z)(),
            n = (0, u.e7)([et.Z], () => (null != t ? t : et.Z.getChannelId(e)));
        return (function () {
            return window.location.pathname.startsWith(em.Z5c.GLOBAL_DISCOVERY);
        })() ||
            (function () {
                return window.location.pathname.startsWith(em.Z5c.GUILD_DISCOVERY) || (0, W.OG)();
            })()
            ? (0, i.jsx)(L.Z, {})
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
    eZ = (e) => (0, i.jsx)(eb, { ...e }),
    ex = () => (0, i.jsx)(x.Z, {}),
    eL = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(y.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eP = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(k.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eO = () => (0, i.jsx)(eu.Z, {}),
    ey = () => (0, i.jsx)(eh.Z, {}),
    eR = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            return (0, i.jsx)(S.Z, {
                isFullScreen: e,
                ...t
            });
        };
    },
    ej = (e) => (0, i.jsx)(E.Z, { ...e }),
    eD = () => (0, i.jsx)(z.Z, {}),
    eM = () => (0, i.jsx)(B.Z, {}),
    ew = () => (0, i.jsx)(F.Z, {}),
    ek = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, i.jsx)(z.Z, { initialSection: em.pJs.ONLINE });
            case 'addFriends':
                return (0, i.jsx)(z.Z, { initialSection: em.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(z.Z, { initialSection: em.pJs.PENDING });
            case 'sessionManagement':
                return (0, i.jsx)(s.l_, { to: em.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, i.jsx)(s.l_, {
                    to: {
                        pathname: em.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, i.jsx)(s.l_, { to: em.Z5c.FAMILY_CENTER });
            case 'account-standing':
                if ((0, X.sp)({ location: 'app view user trigger debugging' })) return (0, i.jsx)(s.l_, { to: em.Z5c.SETTINGS('account', 'account-standing') });
                return (0, i.jsx)(s.l_, { to: em.Z5c.SETTINGS('privacy-and-safety', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(s.l_, { to: em.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(s.l_, { to: em.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, i.jsx)(s.l_, { to: { pathname: em.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, i.jsx)(s.l_, { to: { pathname: em.Z5c.NITRO_HOME } });
            default:
                return (0, i.jsx)(s.l_, { to: em.Z5c.ME });
        }
    };
function eU(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eG(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: s, isSidebarOpen: o, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, g.t)(!0);
    let _ = 'app view user trigger debugging';
    p.R6.useExperiment({ location: _ }, { autoTrackExposure: !1 }), p.R6.trackExposure({ location: _ });
    let E = (0, u.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        I = (0, Z.TH)('ChannelSidebar'),
        N = (0, Z.Q3)('ChannelSidebar'),
        v = (0, T.useAppSidebarState)((e) => !e.isOpen) && I;
    r.useLayoutEffect(() => {
        if (I) {
            var e;
            let t = parseInt(null !== (e = h.K.get(ed.nT)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = ed.qO), (t = Math.min(Math.max(t, ed.li), ed.zx)), !I && t <= ed.p8 && (t = ed.qO), eU(t);
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
    }, [I]),
        r.useLayoutEffect(() => {
            if (v) eU(ed.p8);
            else {
                var e;
                let t = parseInt(null !== (e = h.K.get(ed.nT)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = ed.qO), eU(t);
            }
        }, [v]);
    let S = r.useRef(null),
        b = r.useCallback(
            (e, t) => {
                var n;
                eU(e);
                let i = t < ed.li / 3;
                t <= ed.li ? document.body.classList.add(ef.draggingMin) : document.body.classList.remove(ef.draggingMin), t >= ed.zx ? document.body.classList.add(ef.draggingMax) : document.body.classList.remove(ef.draggingMax);
                let r = t - e;
                null === (n = S.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(r / ed.p8), 0.25))), I && (T.useAppSidebarState.setState({ isOpen: !i }), i && eU(ed.p8));
            },
            [I]
        ),
        A = r.useCallback(() => {
            document.body.classList.add(ef.dragging);
        }, []),
        x = r.useCallback((e) => {
            var t;
            document.body.classList.remove(ef.dragging), document.body.classList.remove(ef.draggingMin), document.body.classList.remove(ef.draggingMax), document.body.classList.remove(ef.collapsing), null === (t = S.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(ed.nT, e);
        }, []),
        L = (0, f.Z)({
            minDimension: ed.li,
            maxDimension: ed.zx,
            resizableDomNodeRef: S,
            onElementResize: b,
            onElementResizeStart: A,
            onElementResizeEnd: x,
            orientation: f.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        P = r.useCallback(() => {
            T.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (r.useLayoutEffect(() => {
            v && eU(ed.p8);
        }, [v]),
        l || (!N && s))
    )
        return null;
    let O = N ? 'div' : r.Fragment,
        y = N ? { className: a()(ef.sidebarList, { [ef.sidebarListRounded]: !t }) } : {};
    return (0, i.jsx)(m.ThemeProvider, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)('div', {
                ref: N ? S : void 0,
                'data-collapsed': v,
                className: a()(ef.sidebar, e, {
                    [ef.hasNotice]: t,
                    [ef.fullWidth]: d.tq,
                    [ef.hidden]: E
                }),
                children: [
                    N &&
                        o &&
                        !c &&
                        (0, i.jsx)(w.Z, {
                            className: ef.guilds,
                            themeOverride: n
                        }),
                    !s &&
                        (0, i.jsx)(O, {
                            ...y,
                            children: (0, i.jsx)(eA, {})
                        }),
                    N
                        ? (0, i.jsx)(m.Clickable, {
                              onClick: P,
                              'aria-label': 'Resize Sidebar',
                              className: ef.sidebarResizeHandle,
                              onMouseDown: L
                          })
                        : null,
                    (0, i.jsx)(el.b, {}),
                    !N && (0, i.jsx)(es.Z, {})
                ]
            })
    });
}
function eB() {
    var e;
    let t = (0, u.e7)([en.ZP], () => en.ZP.hasNotice()),
        n = (0, u.e7)([Q.Z], () => (Q.Z.darkSidebar ? em.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = r.useState(() => window.location.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                r.useEffect(
                    () =>
                        K.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = r.useState(() => window.location.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                r.useEffect(
                    () =>
                        K.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(em.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        c = (function () {
            var e;
            let t = (0, s.TH)();
            return (null === (e = (0, s.LX)(t.pathname, em.Z5c.GUILD_BOOSTING_MARKETING(q.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        h = (function () {
            var e;
            let t = (0, s.TH)();
            return (null === (e = (0, s.LX)(t.pathname, em.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        m = (0, u.e7)([H.Z], () => H.Z.getIsOpen()),
        p = (0, s.$B)([em.Z5c.CHANNEL(em.ME, q.Hw.channelId()), em.Z5c.CHANNEL(q.Hw.guildId(), q.Hw.channelId({ optional: !0 }), ':messageId?')]),
        g = (null == p ? void 0 : null === (e = p.params) || void 0 === e ? void 0 : e.channelId) === ep.oC.GUILD_ONBOARDING,
        f = l || a || c || h || g,
        E = r.useCallback(() => V.Z.openSidebar(), []),
        C = (0, Z.Q3)('AppView'),
        N = (0, Z.TH)('AppView'),
        S = C ? 'div' : r.Fragment,
        b = (0, T.useAppSidebarState)((e) => !e.isOpen);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: ef.container,
            children: [
                m &&
                    !h &&
                    !C &&
                    (0, i.jsx)(w.Z, {
                        className: ef.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(P.Z.Provider, {
                    value: (null == p ? void 0 : p.params.guildId) === em.ME ? void 0 : null == p ? void 0 : p.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: ef.base,
                        children: [
                            C && (0, i.jsx)(e_, {}),
                            d.tq ? null : (0, i.jsx)(eo.Z, {}),
                            (0, i.jsxs)('div', {
                                className: ef.content,
                                children: [
                                    (0, i.jsx)(v.Z, {}),
                                    (0, i.jsx)(eG, {
                                        isOnFullScreenCollectiblesShopRoute: h,
                                        isSidebarOpen: m,
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideChannelList: f,
                                        hideSidebar: !m || h
                                    }),
                                    (0, i.jsx)(S, {
                                        className: ef.page,
                                        'data-collapsed': !!N && b,
                                        children: (0, i.jsx)(_.Z.Provider, {
                                            value: E,
                                            children: (0, i.jsxs)(s.rs, {
                                                children: [
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, i.jsx)(s.l_, { to: em.Z5c.ME })
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                        render: ej,
                                                        impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { application_id: t.params.applicationId };
                                                        }
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.APPLICATION_LIBRARY,
                                                        render: eO,
                                                        impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.APPLICATION_STORE,
                                                        render: ey,
                                                        impressionName: o.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                        render: eR(!0),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.COLLECTIBLES_SHOP,
                                                        render: eR(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                        render: eR(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.MESSAGE_REQUESTS,
                                                        render: eM,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.FAMILY_CENTER,
                                                        render: ew,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.ME,
                                                        exact: !0,
                                                        render: eD,
                                                        impressionName: o.ImpressionNames.FRIENDS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: [em.Z5c.CHANNEL_THREAD_VIEW(q.Hw.guildId(), q.Hw.channelId(), ':threadId', ':messageId?'), em.Z5c.CHANNEL(em.ME, q.Hw.channelId()), em.Z5c.CHANNEL(q.Hw.guildId(), q.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                        render: eZ,
                                                        impressionName: o.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.GLOBAL_DISCOVERY,
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.GLOBAL_DISCOVERY_APPS,
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.QUEST_HOME,
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.GUILD_DISCOVERY,
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.GUILD_MEMBER_VERIFICATION(q.Hw.guildId(), ':inviteCode?'),
                                                        render: eL,
                                                        impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(q.Hw.guildId(), ':inviteCode?'),
                                                        render: eP,
                                                        impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { has_invite: void 0 !== t.params.inviteCode };
                                                        }
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: em.Z5c.FEATURE(':feature'),
                                                        exact: !0,
                                                        render: ek,
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
