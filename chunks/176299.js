n.d(t, {
    Z: function () {
        return eG;
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
    A = n(652515),
    b = n(544978),
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
    X = n(210887),
    Q = n(592125),
    J = n(271383),
    $ = n(430824),
    ee = n(944486),
    et = n(933429),
    en = n(823379),
    ei = n(709054),
    er = n(374005),
    el = n(409292),
    ea = n(316173),
    es = n(256638),
    eo = n(663701),
    ec = n(697309),
    ed = n(425369),
    eu = n(715702),
    eh = n(981631),
    em = n(176505),
    ep = n(290511),
    eg = n(415281);
let ef = (0, c.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    e_ = () =>
        (0, i.jsx)('div', {
            className: eg.loader,
            children: (0, i.jsx)(m.Spinner, {})
        }),
    eE = (0, c.Un)({
        createPromise: () => n.e('68614').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: e_
    }),
    eI = (0, c.Un)({
        createPromise: () => Promise.all([n.e('16114'), n.e('57279')]).then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: e_
    }),
    eC = (0, c.Un)({
        createPromise: () => n.e('60493').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: e_
    }),
    eN = (0, c.Un)({
        createPromise: () => Promise.all([n.e('60696'), n.e('12670')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: e_
    }),
    ev = (0, c.Un)({
        createPromise: () => Promise.all([n.e('63288'), n.e('98479'), n.e('58227'), n.e('38359'), n.e('35566')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: e_
    }),
    eS = (0, c.Un)({
        createPromise: () => Promise.all([n.e('63288'), n.e('98479'), n.e('19878'), n.e('38359'), n.e('41456')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: e_
    }),
    eT = (e) => {
        let { match: t } = e,
            n = (0, u.e7)([Q.Z, ee.Z], () => {
                let e = ee.Z.getChannelId();
                return Q.Z.getChannel(e);
            }),
            { guildId: r, channelId: l, messageId: a } = t.params,
            o = (0, u.e7)([$.Z], () => $.Z.getGuild(r)),
            c = (0, u.e7)([J.ZP], () => (null == r ? null : J.ZP.getSelfMember(r))),
            d = (0, u.e7)([U.Z], () => {
                if (null == r) return;
                let e = U.Z.getData(r);
                if ((null == e ? void 0 : e.type) === G.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return b.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return b.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            h = (0, A.C4)(r, 'channel_renderer'),
            m = (0, O.jS)(r, 'ChannelRenderer');
        if (null != r && null != l && (0, em.AB)(l))
            switch (l) {
                case em.oC.ROLE_SUBSCRIPTIONS:
                    return h
                        ? (0, i.jsx)(eE, {
                              guildId: r,
                              initialTab: b.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(D.Z, { guildId: r });
                case em.oC.GUILD_SHOP:
                    return (0, i.jsx)(eE, {
                        guildId: r,
                        productId: a,
                        initialTab: d
                    });
                case em.oC.MEMBER_APPLICATIONS:
                    return m ? (0, i.jsx)(s.l_, { to: eh.Z5c.CHANNEL(r, em.oC.MEMBER_SAFETY) }) : (0, i.jsx)(eI, { guildId: r });
                case em.oC.GUILD_HOME:
                    return (0, i.jsx)(eC, { guildId: r });
                case em.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(ev, {
                        guildId: r,
                        selectedSection: ep.l7.BROWSE
                    });
                case em.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(eS, { guildId: r });
                case em.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(ev, {
                        guildId: r,
                        selectedSection: ep.l7.CUSTOMIZE
                    });
                case em.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(eN, { guildId: r });
                default:
                    (0, en.vE)(l);
            }
        if ((0, R.p3)(o, c))
            return (0, i.jsx)(j.Z, {
                guildId: r,
                channelId: l
            });
        if ((null == n ? void 0 : n.type) === eh.d4z.GUILD_STORE) {
            let e = ei.default.cast(t.params.messageId);
            return (0, i.jsx)(
                el.Z,
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
            n = (0, u.e7)([ee.Z], () => (null != t ? t : ee.Z.getChannelId(e)));
        return (function () {
            return window.location.pathname.startsWith(eh.Z5c.GLOBAL_DISCOVERY);
        })() ||
            (function () {
                return window.location.pathname.startsWith(eh.Z5c.GUILD_DISCOVERY) || (0, W.OG)();
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
              : (0, i.jsx)(eo.Z, {});
    }),
    eb = (e) => (0, i.jsx)(eT, { ...e }),
    eZ = () => (0, i.jsx)(x.Z, {}),
    ex = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(y.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eL = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(k.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eP = () => (0, i.jsx)(ed.Z, {}),
    eO = () => (0, i.jsx)(eu.Z, {}),
    ey = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            return (0, i.jsx)(S.Z, {
                isFullScreen: e,
                ...t
            });
        };
    },
    eR = (e) => (0, i.jsx)(E.Z, { ...e }),
    ej = () => (0, i.jsx)(z.Z, {}),
    eD = () => (0, i.jsx)(B.Z, {}),
    eM = () => (0, i.jsx)(F.Z, {}),
    ew = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, i.jsx)(z.Z, { initialSection: eh.pJs.ONLINE });
            case 'addFriends':
                return (0, i.jsx)(z.Z, { initialSection: eh.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(z.Z, { initialSection: eh.pJs.PENDING });
            case 'sessionManagement':
                return (0, i.jsx)(s.l_, { to: eh.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, i.jsx)(s.l_, {
                    to: {
                        pathname: eh.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, i.jsx)(s.l_, { to: eh.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, i.jsx)(s.l_, { to: eh.Z5c.SETTINGS('account', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(s.l_, { to: eh.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(s.l_, { to: eh.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, i.jsx)(s.l_, { to: { pathname: eh.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, i.jsx)(s.l_, { to: { pathname: eh.Z5c.NITRO_HOME } });
            default:
                return (0, i.jsx)(s.l_, { to: eh.Z5c.ME });
        }
    };
function ek(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eU(e) {
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
            let t = parseInt(null !== (e = h.K.get(ec.nT)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = ec.qO), (t = Math.min(Math.max(t, ec.li), ec.zx)), !I && t <= ec.p8 && (t = ec.qO), ek(t);
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
            if (v) ek(ec.p8);
            else {
                var e;
                let t = parseInt(null !== (e = h.K.get(ec.nT)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = ec.qO), ek(t);
            }
        }, [v]);
    let S = r.useRef(null),
        A = r.useCallback(
            (e, t) => {
                var n;
                ek(e);
                let i = t < ec.li / 3;
                t <= ec.li ? document.body.classList.add(eg.draggingMin) : document.body.classList.remove(eg.draggingMin), t >= ec.zx ? document.body.classList.add(eg.draggingMax) : document.body.classList.remove(eg.draggingMax);
                let r = t - e;
                null === (n = S.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(r / ec.p8), 0.25))), I && (T.useAppSidebarState.setState({ isOpen: !i }), i && ek(ec.p8));
            },
            [I]
        ),
        b = r.useCallback(() => {
            document.body.classList.add(eg.dragging);
        }, []),
        x = r.useCallback((e) => {
            var t;
            document.body.classList.remove(eg.dragging), document.body.classList.remove(eg.draggingMin), document.body.classList.remove(eg.draggingMax), document.body.classList.remove(eg.collapsing), null === (t = S.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(ec.nT, e);
        }, []),
        L = (0, f.Z)({
            minDimension: ec.li,
            maxDimension: ec.zx,
            resizableDomNodeRef: S,
            onElementResize: A,
            onElementResizeStart: b,
            onElementResizeEnd: x,
            orientation: f.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        P = r.useCallback(() => {
            T.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (r.useLayoutEffect(() => {
            v && ek(ec.p8);
        }, [v]),
        l || (!N && s))
    )
        return null;
    let O = N ? 'div' : r.Fragment,
        y = N ? { className: a()(eg.sidebarList, { [eg.sidebarListRounded]: !t }) } : {};
    return (0, i.jsx)(m.ThemeProvider, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)('div', {
                ref: N ? S : void 0,
                'data-collapsed': v,
                className: a()(eg.sidebar, e, {
                    [eg.hasNotice]: t,
                    [eg.fullWidth]: d.tq,
                    [eg.hidden]: E,
                    [eg.channelListHidden]: s
                }),
                children: [
                    N &&
                        o &&
                        !c &&
                        (0, i.jsx)(w.Z, {
                            className: eg.guilds,
                            themeOverride: n
                        }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(O, {
                                    ...y,
                                    children: (0, i.jsx)(eA, {})
                                }),
                                N
                                    ? (0, i.jsx)(m.Clickable, {
                                          onClick: P,
                                          'aria-label': 'Resize Sidebar',
                                          className: eg.sidebarResizeHandle,
                                          onMouseDown: L
                                      })
                                    : null,
                                (0, i.jsx)(er.b, {})
                            ]
                        }),
                    !N && (0, i.jsx)(ea.Z, {})
                ]
            })
    });
}
function eG() {
    var e;
    let t = (0, u.e7)([et.ZP], () => et.ZP.hasNotice()),
        n = (0, u.e7)([X.Z], () => (X.Z.darkSidebar ? eh.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = r.useState(() => window.location.pathname.startsWith(eh.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                r.useEffect(
                    () =>
                        K.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eh.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = r.useState(() => window.location.pathname.startsWith(eh.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                r.useEffect(
                    () =>
                        K.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eh.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        c = (function () {
            var e;
            let t = (0, s.TH)();
            return (null === (e = (0, s.LX)(t.pathname, eh.Z5c.GUILD_BOOSTING_MARKETING(q.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        h = (function () {
            var e;
            let t = (0, s.TH)();
            return (null === (e = (0, s.LX)(t.pathname, eh.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        m = (0, u.e7)([H.Z], () => H.Z.getIsOpen()),
        p = (0, s.$B)([eh.Z5c.CHANNEL(eh.ME, q.Hw.channelId()), eh.Z5c.CHANNEL(q.Hw.guildId(), q.Hw.channelId({ optional: !0 }), ':messageId?')]),
        g = (null == p ? void 0 : null === (e = p.params) || void 0 === e ? void 0 : e.channelId) === em.oC.GUILD_ONBOARDING,
        f = l || a || c || h || g,
        E = r.useCallback(() => V.Z.openSidebar(), []),
        C = (0, Z.Q3)('AppView'),
        N = (0, Z.TH)('AppView'),
        S = C ? 'div' : r.Fragment,
        A = (0, T.useAppSidebarState)((e) => !e.isOpen);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: eg.container,
            children: [
                m &&
                    !h &&
                    !C &&
                    (0, i.jsx)(w.Z, {
                        className: eg.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(P.Z.Provider, {
                    value: (null == p ? void 0 : p.params.guildId) === eh.ME ? void 0 : null == p ? void 0 : p.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: eg.base,
                        children: [
                            C && (0, i.jsx)(ef, {}),
                            d.tq ? null : (0, i.jsx)(es.Z, {}),
                            (0, i.jsxs)('div', {
                                className: eg.content,
                                children: [
                                    (0, i.jsx)(v.Z, {}),
                                    (0, i.jsx)(eU, {
                                        isOnFullScreenCollectiblesShopRoute: h,
                                        isSidebarOpen: m,
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideChannelList: f,
                                        hideSidebar: !m || h
                                    }),
                                    (0, i.jsx)(S, {
                                        className: eg.page,
                                        'data-collapsed': !!N && A,
                                        children: (0, i.jsx)(_.Z.Provider, {
                                            value: E,
                                            children: (0, i.jsxs)(s.rs, {
                                                children: [
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, i.jsx)(s.l_, { to: eh.Z5c.ME })
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                        render: eR,
                                                        impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { application_id: t.params.applicationId };
                                                        }
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.APPLICATION_LIBRARY,
                                                        render: eP,
                                                        impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.APPLICATION_STORE,
                                                        render: eO,
                                                        impressionName: o.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                        render: ey(!0),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.COLLECTIBLES_SHOP,
                                                        render: ey(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                        render: ey(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.MESSAGE_REQUESTS,
                                                        render: eD,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.FAMILY_CENTER,
                                                        render: eM,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.ME,
                                                        exact: !0,
                                                        render: ej,
                                                        impressionName: o.ImpressionNames.FRIENDS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: [eh.Z5c.CHANNEL_THREAD_VIEW(q.Hw.guildId(), q.Hw.channelId(), ':threadId', ':messageId?'), eh.Z5c.CHANNEL(eh.ME, q.Hw.channelId()), eh.Z5c.CHANNEL(q.Hw.guildId(), q.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                        render: eb,
                                                        impressionName: o.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.GLOBAL_DISCOVERY,
                                                        render: eZ,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                        render: eZ,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.GLOBAL_DISCOVERY_APPS,
                                                        render: eZ,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.QUEST_HOME,
                                                        render: eZ,
                                                        impressionName: o.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.GUILD_DISCOVERY,
                                                        render: eZ,
                                                        impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.GUILD_MEMBER_VERIFICATION(q.Hw.guildId(), ':inviteCode?'),
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(q.Hw.guildId(), ':inviteCode?'),
                                                        render: eL,
                                                        impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { has_invite: void 0 !== t.params.inviteCode };
                                                        }
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.FEATURE(':feature'),
                                                        exact: !0,
                                                        render: ew,
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
