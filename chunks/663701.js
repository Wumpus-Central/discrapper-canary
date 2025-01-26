n.d(t, {
    Z: function () {
        return eu;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(232713),
    o = n(990547),
    c = n(91192),
    d = n(873546),
    u = n(442837),
    h = n(704215),
    m = n(952265),
    p = n(481060),
    g = n(493683),
    f = n(529103),
    _ = n(607070),
    E = n(213609),
    I = n(143757),
    C = n(463119),
    v = n(377171),
    N = n(540059),
    S = n(243778),
    T = n(125465),
    b = n(922409),
    A = n(899740),
    Z = n(28476),
    x = n(880257),
    L = n(631885),
    y = n(522558),
    P = n(795448),
    O = n(441623),
    R = n(457396),
    j = n(108989),
    D = n(51596),
    M = n(905423),
    w = n(155409),
    k = n(210887),
    U = n(695346),
    G = n(283595),
    B = n(699516),
    V = n(923834),
    H = n(55563),
    F = n(774343),
    z = n(626135),
    W = n(814225),
    Y = n(515753),
    K = n(831218),
    q = n(339149),
    X = n(981631),
    Q = n(675654),
    J = n(474936),
    $ = n(388032),
    ee = n(305482);
let et = (e) => {
        let { selected: t, ...n } = e,
            l = (0, c.JA)('friends'),
            a = (0, u.e7)([B.Z], () => B.Z.getPendingCount()),
            s = (0, u.e7)([O.Z], () => O.Z.canShowFriendsTabBadge()),
            d = (0, u.e7)([_.Z], () => _.Z.useReducedMotion),
            { enabled: h } = y.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            m = s && h;
        r.useEffect(() => {
            m &&
                (0, E.h)({
                    name: o.ImpressionNames.GIFT_INTENT_BADGE,
                    type: o.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: J.hX.FRIEND_ANNIVERSARY }
                });
        }, [m]);
        let [g, I] = r.useState(!1);
        return (0, i.jsxs)('div', {
            className: ee.friendsButtonContainer,
            children: [
                (0, i.jsx)(Y.Qj, {
                    onClick: () => {
                        m && (z.default.track(X.rMx.GIFT_INTENT_BADGE_CLICKED, { gift_intent_type: J.hX.FRIEND_ANNIVERSARY }), f.Z.setSection(X.pJs.ALL), (0, P.Gk)());
                    },
                    interactiveClassName: m ? ee.friendsBadge : void 0,
                    selected: t,
                    route: X.Z5c.FRIENDS,
                    icon: p.FriendsIcon,
                    text: $.intl.string($.t.TdEu5e),
                    onMouseEnter: () => {
                        I(!0);
                    },
                    onMouseLeave: () => {
                        I(!1);
                    },
                    ...n,
                    ...l,
                    children: a > 0 ? (0, i.jsx)(p.NumberBadge, { count: a }) : null
                }),
                m &&
                    !d &&
                    (0, i.jsx)(j.Z, {
                        className: ee.confetti,
                        wind: 0,
                        sprites: Q.CA,
                        spriteColors: Q.Br,
                        firing: g,
                        confettiConfig: {
                            opacity: {
                                type: 'static',
                                value: 1
                            },
                            dragCoefficient: {
                                type: 'static',
                                value: {
                                    x: 100,
                                    y: 100
                                }
                            }
                        }
                    })
            ]
        });
    },
    en = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...r } = e,
            l = (0, c.JA)('library');
        return (0, i.jsx)(Y.Qj, {
            selected: t,
            route: X.Z5c.APPLICATION_LIBRARY,
            icon: p.InventoryIcon,
            text: $.intl.string($.t.cw57am),
            ...r,
            ...l,
            children: (0, i.jsx)(q.Z, { className: a()(ee.downloadProgressCircle, { [ee.hideGameUpdateProgressIndicator]: n }) })
        });
    },
    ei = () => {
        let e = (0, A.q)();
        return e > 0 ? (0, i.jsx)(p.NumberBadge, { count: e }) : null;
    },
    er = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)('messageRequests'),
            { channelId: r } = (0, b._)();
        if (!(0, Z.a)()) return null;
        let l = null == r ? void 0 : () => g.Z.preload(X.ME, r);
        return (0, i.jsx)(Y.Qj, {
            selected: t,
            route: X.Z5c.MESSAGE_REQUESTS,
            icon: p.EnvelopeIcon,
            text: $.intl.string($.t.e7GWjY),
            onClick: l,
            ...n,
            children: (0, i.jsx)(ei, {})
        });
    },
    el = (e) => {
        let { selected: t } = e,
            n = $.intl.string($.t.Rkdixs),
            l = (0, c.JA)('family-center'),
            [a, s] = r.useState(!0);
        return (0, i.jsx)(Y.Qj, {
            selected: t,
            route: X.Z5c.FAMILY_CENTER,
            icon: p.GroupIcon,
            text: n,
            onMouseEnter: () => {
                s(!0);
            },
            onMouseLeave: () => {
                s(!1);
            },
            interactiveClassName: ee.familyCenterLinkButton,
            ...l,
            children: (0, i.jsx)(ea, { isParentHovered: a })
        });
    },
    ea = (e) => {
        let { isParentHovered: t } = e,
            r = (0, L.gU)();
        return t
            ? (0, i.jsx)(Y.PZ, {
                  onClick: () => {
                      (0, m.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, i.jsx)(e, { ...t });
                      });
                  },
                  'aria-label': $.intl.string($.t.cpT0Cg)
              })
            : r > 0
              ? (0, i.jsx)('div', {
                    className: ee.familyCenterPendingBadge,
                    children: (0, i.jsx)(p.NumberBadge, { count: r })
                })
              : (0, i.jsx)(S.ZP, {
                    contentTypes: [h.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === h.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, i.jsx)(p.TextBadge, {
                                  text: $.intl.string($.t.y2b7CA),
                                  color: v.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    es = () => (0, D.$Z)('DM_SEARCH');
function eo(e) {
    switch (e) {
        case X.Z5c.APPLICATION_LIBRARY:
            return X.ZY5.LIBRARY;
        case X.Z5c.FRIENDS:
            return X.ZY5.FRIENDS_LIST;
        case X.Z5c.COLLECTIBLES_SHOP:
            return X.ZY5.COLLECTIBLES_SHOP;
    }
    if (e.startsWith(X.Z5c.APPLICATION_STORE)) return e === X.Z5c.APPLICATION_STORE ? X.ZY5.STORE_DIRECTORY_HOME : e.startsWith(X.Z5c.APPLICATION_STORE) ? X.ZY5.STORE_DIRECTORY_BROWSE : X.ZY5.STORE_LISTING;
    return X.ZY5.DM_CHANNEL;
}
let ec = r.memo(function (e) {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: r, premiumTabSelected: l, isVisualRefreshEnabled: s, shouldShowNitroTab: o, shouldShowMessageRequestsRow: c, shouldShowFamilyCenterRow: u, shouldShowQuickLauncherRow: h, selectedChannelId: m, path: g, shouldMoveMessageRequests: f } = e;
    return (0, i.jsxs)('nav', {
        className: ee.privateChannels,
        'aria-label': $.intl.string($.t.ZH9aPz),
        children: [
            (0, i.jsx)(w.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: a()(ee.searchBar, { [ee.themedHeaderMobile]: d.tq }),
                    children: s
                        ? (0, i.jsx)(p.Button, {
                              grow: !0,
                              color: p.Button.Colors.PRIMARY,
                              size: p.Button.Sizes.SMALL,
                              fullWidth: !0,
                              onClick: es,
                              children: $.intl.string($.t.LzcpeX)
                          })
                        : (0, i.jsx)('button', {
                              type: 'button',
                              className: a()(ee.searchBarComponent, { [ee.themedSearchBarMobile]: d.tq }),
                              onClick: es,
                              children: $.intl.string($.t.LzcpeX)
                          })
                })
            }),
            (0, i.jsxs)(K.Z, {
                ...e,
                version: g,
                selectedChannelId: m,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)(et, { selected: null != g ? g === X.Z5c.FRIENDS : r === X.Z5c.FRIENDS }, 'friends'),
                    n && t
                        ? (0, i.jsx)(
                              en,
                              {
                                  selected: null == g ? null != r && r.startsWith(X.Z5c.APPLICATION_LIBRARY) : g.startsWith(X.Z5c.APPLICATION_LIBRARY),
                                  hideGameUpdateProgressIndicator: r === X.Z5c.APPLICATION_LIBRARY
                              },
                              'library'
                          )
                        : null,
                    c && f ? (0, i.jsx)(er, { selected: null == g ? null != r && r.startsWith(X.Z5c.MESSAGE_REQUESTS) : g === X.Z5c.MESSAGE_REQUESTS }, 'message-requests') : null,
                    o
                        ? (0, i.jsx)(
                              R.g,
                              {
                                  selected: null == g ? l : g.startsWith(X.Z5c.APPLICATION_STORE),
                                  route: X.Z5c.APPLICATION_STORE,
                                  locationState: {
                                      analyticsSource: {
                                          page: eo(r),
                                          section: X.jXE.NAVIGATION,
                                          object: X.qAy.NAVIGATION_LINK
                                      }
                                  }
                              },
                              'premium'
                          )
                        : null,
                    c && !f ? (0, i.jsx)(er, { selected: null == g ? null != r && r.startsWith(X.Z5c.MESSAGE_REQUESTS) : g === X.Z5c.MESSAGE_REQUESTS }, 'message-requests') : null,
                    (0, i.jsx)(
                        C.i,
                        {
                            selected: g === X.Z5c.COLLECTIBLES_SHOP || (null == r ? void 0 : r.startsWith(X.Z5c.COLLECTIBLES_SHOP)),
                            locationState: {
                                analyticsSource: {
                                    page: eo(r),
                                    section: X.jXE.NAVIGATION,
                                    object: X.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'discord-shop'
                    ),
                    u ? (0, i.jsx)(el, { selected: (null != r && r.startsWith(X.Z5c.FAMILY_CENTER)) || (null != g && g.startsWith(X.Z5c.FAMILY_CENTER)) }, 'family-center') : null,
                    s ? (0, i.jsx)(ed, {}, 'section-divider-top') : null,
                    h ? (0, i.jsx)(I.Z, { bottomDivider: s ? (0, i.jsx)(ed, {}) : null }, 'dm-quick-launcher') : null
                ]
            })
        ]
    });
});
function ed() {
    return (0, i.jsx)('div', { className: ee.sectionDivider });
}
function eu() {
    let e = (0, u.e7)([F.Z], () => F.Z.getHomeLink()),
        t = (0, u.e7)(
            [H.Z],
            () => {
                if (e === X.Z5c.APPLICATION_STORE) return !0;
                let t = (0, W.ZK)(e);
                if (null != t) {
                    var n, i;
                    return null !== (i = null === (n = H.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
                }
                return !1;
            },
            [e]
        ),
        n = !U.bm.useSetting(),
        { theme: r } = (0, u.cj)([k.Z], () => ({ theme: k.Z.theme })),
        l = (0, u.e7)([G.Z], () => G.Z.hasLibraryApplication()),
        a = (0, u.e7)([V.Z], () => V.Z.getCurrentPath()),
        o = (0, N.Q3)('PrivateChannels'),
        [c, d] = (0, M.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, s.X),
        h = (0, R.i)({ selected: null == d ? t : d.startsWith(X.Z5c.APPLICATION_STORE) }),
        m = (0, Z.a)(),
        p = (function () {
            let e = U.Ex.useSetting(),
                t = (0, x.Z)();
            return !0 === e && !0 === t;
        })(),
        g = (0, I.n)(),
        f = (0, T.G)({
            location: 'private_channels',
            autoTrackExposure: m
        });
    return (0, i.jsx)(ec, {
        theme: r,
        showLibrary: n,
        hasLibraryApplication: l,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        isVisualRefreshEnabled: o,
        shouldShowNitroTab: h,
        shouldShowMessageRequestsRow: m,
        shouldShowFamilyCenterRow: p,
        shouldShowQuickLauncherRow: g,
        selectedChannelId: c,
        path: d,
        shouldMoveMessageRequests: f
    });
}
