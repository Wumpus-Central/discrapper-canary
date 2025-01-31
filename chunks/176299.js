n.d(t, { Z: () => eG }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512969),
    o = n(990547),
    c = n(608787),
    d = n(873546),
    u = n(442837),
    h = n(433517),
    m = n(481060),
    p = n(711237),
    g = n(532835),
    _ = n(347469),
    f = n(290297),
    E = n(289341),
    I = n(765717),
    C = n(358221),
    v = n(823748),
    N = n(626421),
    T = n(118379),
    S = n(267161),
    Z = n(652515),
    x = n(544978),
    A = n(540059),
    b = n(724383),
    L = n(135864),
    y = n(372900),
    P = n(63568),
    O = n(6039),
    R = n(637853),
    j = n(326145),
    D = n(269675),
    w = n(242601),
    M = n(416568),
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
    el = n(374005),
    er = n(409292),
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
let e_ = (0, c.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    ef = () =>
        (0, i.jsx)('div', {
            className: eg.loader,
            children: (0, i.jsx)(m.$jN, {})
        }),
    eE = (0, c.Un)({
        createPromise: () => n.e('78431').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: ef
    }),
    eI = (0, c.Un)({
        createPromise: () => Promise.all([n.e('16114'), n.e('97811')]).then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: ef
    }),
    eC = (0, c.Un)({
        createPromise: () => n.e('12009').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: ef
    }),
    ev = (0, c.Un)({
        createPromise: () => Promise.all([n.e('60696'), n.e('9924')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: ef
    }),
    eN = (0, c.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('58121')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: ef
    }),
    eT = (0, c.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('37709')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: ef
    }),
    eS = (e) => {
        let { match: t } = e,
            n = (0, u.e7)([Q.Z, ee.Z], () => {
                let e = ee.Z.getChannelId();
                return Q.Z.getChannel(e);
            }),
            { guildId: l, channelId: r, messageId: a } = t.params,
            o = (0, u.e7)([$.Z], () => $.Z.getGuild(l)),
            c = (0, u.e7)([J.ZP], () => (null == l ? null : J.ZP.getSelfMember(l))),
            d = (0, u.e7)([U.Z], () => {
                if (null == l) return;
                let e = U.Z.getData(l);
                if ((null == e ? void 0 : e.type) === G.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return x.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return x.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            h = (0, Z.C4)(l, 'channel_renderer'),
            m = (0, P.jS)(l, 'ChannelRenderer');
        if (null != l && null != r && (0, em.AB)(r))
            switch (r) {
                case em.oC.ROLE_SUBSCRIPTIONS:
                    return h
                        ? (0, i.jsx)(eE, {
                              guildId: l,
                              initialTab: x.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(D.Z, { guildId: l });
                case em.oC.GUILD_SHOP:
                    return (0, i.jsx)(eE, {
                        guildId: l,
                        productId: a,
                        initialTab: d
                    });
                case em.oC.MEMBER_APPLICATIONS:
                    return m ? (0, i.jsx)(s.l_, { to: eh.Z5c.CHANNEL(l, em.oC.MEMBER_SAFETY) }) : (0, i.jsx)(eI, { guildId: l });
                case em.oC.GUILD_HOME:
                    return (0, i.jsx)(eC, { guildId: l });
                case em.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(eN, {
                        guildId: l,
                        selectedSection: ep.l7.BROWSE
                    });
                case em.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(eT, { guildId: l });
                case em.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eN, {
                        guildId: l,
                        selectedSection: ep.l7.CUSTOMIZE
                    });
                case em.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(ev, { guildId: l });
                default:
                    (0, en.vE)(r);
            }
        if ((0, R.p3)(o, c))
            return (0, i.jsx)(j.Z, {
                guildId: l,
                channelId: r
            });
        if ((null == n ? void 0 : n.type) === eh.d4z.GUILD_STORE) {
            let e = ei.default.cast(t.params.messageId);
            return (0, i.jsx)(
                er.Z,
                {
                    channel: n,
                    inputSkuId: e
                },
                n.id
            );
        }
        return (0, i.jsx)(v.Z, {});
    },
    eZ = l.memo(function () {
        let { guildId: e, channelId: t } = (0, Y.Z)(),
            n = (0, u.e7)([ee.Z], () => (null != t ? t : ee.Z.getChannelId(e)));
        return window.location.pathname.startsWith(eh.Z5c.GLOBAL_DISCOVERY) || window.location.pathname.startsWith(eh.Z5c.GUILD_DISCOVERY) || (0, W.OG)()
            ? (0, i.jsx)(L.Z, {})
            : null != e
              ? (0, i.jsx)(
                    w.Z,
                    {
                        selectedChannelId: n,
                        guildId: e
                    },
                    e
                )
              : (0, i.jsx)(eo.Z, {});
    }),
    ex = (e) => (0, i.jsx)(eS, { ...e }),
    eA = () => (0, i.jsx)(b.Z, {}),
    eb = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(O.Z, {
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
    ey = () => (0, i.jsx)(ed.Z, {}),
    eP = () => (0, i.jsx)(eu.Z, {}),
    eO = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            return (0, i.jsx)(T.Z, {
                isFullScreen: e,
                ...t
            });
        };
    },
    eR = (e) => (0, i.jsx)(E.Z, { ...e }),
    ej = () => (0, i.jsx)(z.Z, {}),
    eD = () => (0, i.jsx)(B.Z, {}),
    ew = () => (0, i.jsx)(F.Z, {}),
    eM = (e) => {
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
    let { hasNotice: t, sidebarTheme: n, hideSidebar: r, hideChannelList: s, isSidebarOpen: o, isOnFullScreenCollectiblesShopRoute: c } = e;
    (0, g.t)(!0);
    let f = 'app view user trigger debugging';
    p.R6.useExperiment({ location: f }, { autoTrackExposure: !1 }), p.R6.trackExposure({ location: f });
    let E = (0, u.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        I = (0, A.TH)('ChannelSidebar'),
        v = (0, A.Q3)('ChannelSidebar'),
        N = (0, S.useAppSidebarState)((e) => !e.isOpen) && I;
    l.useLayoutEffect(() => {
        if (I) {
            var e;
            let t = parseInt(null !== (e = h.K.get(ec.nT)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = ec.qO), (t = Math.min(Math.max(t, ec.li), ec.zx)), !I && t <= ec.p8 && (t = ec.qO), ek(t);
            let n = (e) => {
                e.metaKey && 'b' === e.key && S.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
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
            if (N) ek(ec.p8);
            else {
                var e;
                let t = parseInt(null !== (e = h.K.get(ec.nT)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = ec.qO), ek(t);
            }
        }, [N]);
    let T = l.useRef(null),
        Z = l.useCallback(
            (e, t) => {
                var n;
                ek(e);
                let i = t < ec.li / 3;
                t <= ec.li ? document.body.classList.add(eg.draggingMin) : document.body.classList.remove(eg.draggingMin), t >= ec.zx ? document.body.classList.add(eg.draggingMax) : document.body.classList.remove(eg.draggingMax);
                let l = t - e;
                null === (n = T.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(l / ec.p8), 0.25))), I && (S.useAppSidebarState.setState({ isOpen: !i }), i && ek(ec.p8));
            },
            [I]
        ),
        x = l.useCallback(() => {
            document.body.classList.add(eg.dragging);
        }, []),
        b = l.useCallback((e) => {
            var t;
            document.body.classList.remove(eg.dragging), document.body.classList.remove(eg.draggingMin), document.body.classList.remove(eg.draggingMax), document.body.classList.remove(eg.collapsing), null === (t = T.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(ec.nT, e);
        }, []),
        L = (0, _.Z)({
            minDimension: ec.li,
            maxDimension: ec.zx,
            resizableDomNodeRef: T,
            onElementResize: Z,
            onElementResizeStart: x,
            onElementResizeEnd: b,
            orientation: _.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        y = l.useCallback(() => {
            S.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (l.useLayoutEffect(() => {
            N && ek(ec.p8);
        }, [N]),
        r || (!v && s))
    )
        return null;
    let P = v ? 'div' : l.Fragment,
        O = v ? { className: a()(eg.sidebarList, { [eg.sidebarListRounded]: !t }) } : {};
    return (0, i.jsx)(m.f6W, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)('div', {
                ref: v ? T : void 0,
                'data-collapsed': N,
                className: a()(eg.sidebar, e, {
                    [eg.hasNotice]: t,
                    [eg.fullWidth]: d.tq,
                    [eg.hidden]: E,
                    [eg.channelListHidden]: s
                }),
                children: [
                    v &&
                        o &&
                        !c &&
                        (0, i.jsx)(M.Z, {
                            className: eg.guilds,
                            themeOverride: n
                        }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(P, {
                                    ...O,
                                    children: (0, i.jsx)(eZ, {})
                                }),
                                v
                                    ? (0, i.jsx)(m.P3F, {
                                          onClick: y,
                                          'aria-label': 'Resize Sidebar',
                                          className: eg.sidebarResizeHandle,
                                          onMouseDown: L
                                      })
                                    : null,
                                (0, i.jsx)(el.b, {})
                            ]
                        }),
                    !v && (0, i.jsx)(ea.Z, {})
                ]
            })
    });
}
function eG() {
    var e;
    let t = (0, u.e7)([et.ZP], () => et.ZP.hasNotice()),
        n = (0, u.e7)([X.Z], () => (X.Z.darkSidebar ? eh.BRd.DARK : void 0)),
        r = (function () {
            let [e, t] = l.useState(() => window.location.pathname.startsWith(eh.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                l.useEffect(
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
            let [e, t] = l.useState(() => window.location.pathname.startsWith(eh.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                l.useEffect(
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
        _ = r || a || c || h || g,
        E = l.useCallback(() => V.Z.openSidebar(), []),
        v = (0, A.Q3)('AppView'),
        T = (0, A.TH)('AppView'),
        Z = v ? 'div' : l.Fragment,
        x = (0, S.useAppSidebarState)((e) => !e.isOpen),
        b = (0, u.e7)([C.Z], () => C.Z.isFullscreenInContext());
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: eg.container,
            children: [
                m &&
                    !h &&
                    !v &&
                    (0, i.jsx)(M.Z, {
                        className: eg.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(y.Z.Provider, {
                    value: (null == p ? void 0 : p.params.guildId) === eh.ME ? void 0 : null == p ? void 0 : p.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: eg.base,
                        'data-fullscreen': b,
                        children: [
                            v && !b && (0, i.jsx)(e_, {}),
                            d.tq ? null : (0, i.jsx)(es.Z, {}),
                            (0, i.jsxs)('div', {
                                className: eg.content,
                                children: [
                                    (0, i.jsx)(N.Z, {}),
                                    (0, i.jsx)(eU, {
                                        isOnFullScreenCollectiblesShopRoute: h,
                                        isSidebarOpen: m,
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideChannelList: _,
                                        hideSidebar: !m || h
                                    }),
                                    (0, i.jsx)(Z, {
                                        className: eg.page,
                                        'data-collapsed': !!T && x,
                                        children: (0, i.jsx)(f.Z.Provider, {
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
                                                        render: ey,
                                                        impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.APPLICATION_STORE,
                                                        render: eP,
                                                        impressionName: o.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                        render: eO(!0),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.COLLECTIBLES_SHOP,
                                                        render: eO(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                        render: eO(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.MESSAGE_REQUESTS,
                                                        render: eD,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.FAMILY_CENTER,
                                                        render: ew,
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
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.GLOBAL_DISCOVERY,
                                                        render: eA,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                        render: eA,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.GLOBAL_DISCOVERY_APPS,
                                                        render: eA,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.QUEST_HOME,
                                                        render: eA,
                                                        impressionName: o.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.GUILD_DISCOVERY,
                                                        render: eA,
                                                        impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eh.Z5c.GUILD_MEMBER_VERIFICATION(q.Hw.guildId(), ':inviteCode?'),
                                                        render: eb,
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
                                                        render: eM,
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
