n.d(t, { Z: () => ed }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(232713),
    o = n(990547),
    c = n(91192),
    d = n(873546),
    u = n(442837),
    h = n(704215),
    m = n(952265),
    p = n(481060),
    g = n(493683),
    _ = n(529103),
    f = n(607070),
    E = n(213609),
    I = n(143757),
    C = n(463119),
    v = n(377171),
    N = n(540059),
    T = n(243778),
    S = n(922409),
    A = n(899740),
    Z = n(28476),
    x = n(880257),
    b = n(631885),
    L = n(849862),
    y = n(522558),
    P = n(795448),
    O = n(441623),
    R = n(457396),
    j = n(108989),
    D = n(51596),
    w = n(905423),
    M = n(155409),
    k = n(210887),
    U = n(695346),
    G = n(283595),
    B = n(923834),
    V = n(55563),
    H = n(774343),
    F = n(626135),
    z = n(814225),
    W = n(515753),
    Y = n(831218),
    K = n(339149),
    q = n(981631),
    X = n(675654),
    Q = n(474936),
    J = n(388032),
    $ = n(865165);
let ee = (e) => {
        let { selected: t, ...n } = e,
            r = (0, c.JA)('friends'),
            a = (0, L.If)(),
            s = (0, u.e7)([O.Z], () => O.Z.canShowFriendsTabBadge()),
            d = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
            { enabled: h } = y.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            m = s && h;
        l.useEffect(() => {
            m &&
                (0, E.h)({
                    name: o.ImpressionNames.GIFT_INTENT_BADGE,
                    type: o.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: Q.hX.FRIEND_ANNIVERSARY }
                });
        }, [m]);
        let [g, I] = l.useState(!1);
        return (0, i.jsxs)('div', {
            className: $.friendsButtonContainer,
            children: [
                (0, i.jsx)(W.Qj, {
                    onClick: () => {
                        m && (F.default.track(q.rMx.GIFT_INTENT_BADGE_CLICKED, { gift_intent_type: Q.hX.FRIEND_ANNIVERSARY }), _.Z.setSection(q.pJs.ALL), (0, P.Gk)());
                    },
                    interactiveClassName: m ? $.friendsBadge : void 0,
                    selected: t,
                    route: q.Z5c.FRIENDS,
                    icon: p.iFz,
                    text: J.intl.string(J.t.TdEu5e),
                    onMouseEnter: () => {
                        I(!0);
                    },
                    onMouseLeave: () => {
                        I(!1);
                    },
                    ...n,
                    ...r,
                    children: a > 0 ? (0, i.jsx)(p.mAB, { count: a }) : null
                }),
                m &&
                    !d &&
                    (0, i.jsx)(j.Z, {
                        className: $.confetti,
                        wind: 0,
                        sprites: X.CA,
                        spriteColors: X.Br,
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
    et = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...l } = e,
            r = (0, c.JA)('library');
        return (0, i.jsx)(W.Qj, {
            selected: t,
            route: q.Z5c.APPLICATION_LIBRARY,
            icon: p.vqy,
            text: J.intl.string(J.t.cw57am),
            ...l,
            ...r,
            children: (0, i.jsx)(K.Z, { className: a()($.downloadProgressCircle, { [$.hideGameUpdateProgressIndicator]: n }) })
        });
    },
    en = () => {
        let e = (0, A.q)();
        return e > 0 ? (0, i.jsx)(p.mAB, { count: e }) : null;
    },
    ei = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)('messageRequests'),
            { channelId: l } = (0, S._)();
        if (!(0, Z.a)()) return null;
        let r = null == l ? void 0 : () => g.Z.preload(q.ME, l);
        return (0, i.jsx)(W.Qj, {
            selected: t,
            route: q.Z5c.MESSAGE_REQUESTS,
            icon: p._XJ,
            text: J.intl.string(J.t.e7GWjY),
            onClick: r,
            ...n,
            children: (0, i.jsx)(en, {})
        });
    },
    el = (e) => {
        let { selected: t } = e,
            n = J.intl.string(J.t.Rkdixs),
            r = (0, c.JA)('family-center'),
            [a, s] = l.useState(!0);
        return (0, i.jsx)(W.Qj, {
            selected: t,
            route: q.Z5c.FAMILY_CENTER,
            icon: p.BFJ,
            text: n,
            onMouseEnter: () => {
                s(!0);
            },
            onMouseLeave: () => {
                s(!1);
            },
            interactiveClassName: $.familyCenterLinkButton,
            ...r,
            children: (0, i.jsx)(er, { isParentHovered: a })
        });
    },
    er = (e) => {
        let { isParentHovered: t } = e,
            l = (0, b.gU)();
        return t
            ? (0, i.jsx)(W.PZ, {
                  onClick: () => {
                      (0, m.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, i.jsx)(e, { ...t });
                      });
                  },
                  'aria-label': J.intl.string(J.t.cpT0Cg)
              })
            : l > 0
              ? (0, i.jsx)('div', {
                    className: $.familyCenterPendingBadge,
                    children: (0, i.jsx)(p.mAB, { count: l })
                })
              : (0, i.jsx)(T.ZP, {
                    contentTypes: [h.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === h.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, i.jsx)(p.IGR, {
                                  text: J.intl.string(J.t.y2b7CA),
                                  color: v.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    ea = () => (0, D.$Z)('DM_SEARCH');
function es(e) {
    switch (e) {
        case q.Z5c.APPLICATION_LIBRARY:
            return q.ZY5.LIBRARY;
        case q.Z5c.FRIENDS:
            return q.ZY5.FRIENDS_LIST;
        case q.Z5c.COLLECTIBLES_SHOP:
            return q.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(q.Z5c.APPLICATION_STORE) ? (e === q.Z5c.APPLICATION_STORE ? q.ZY5.STORE_DIRECTORY_HOME : e.startsWith(q.Z5c.APPLICATION_STORE) ? q.ZY5.STORE_DIRECTORY_BROWSE : q.ZY5.STORE_LISTING) : q.ZY5.DM_CHANNEL;
}
let eo = l.memo(function (e) {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: l, premiumTabSelected: r, isVisualRefreshEnabled: s, shouldShowNitroTab: o, shouldShowMessageRequestsRow: c, shouldShowFamilyCenterRow: u, shouldShowQuickLauncherRow: h, selectedChannelId: m, path: g } = e;
    return (0, i.jsxs)('nav', {
        className: $.privateChannels,
        'aria-label': J.intl.string(J.t.ZH9aPz),
        children: [
            (0, i.jsx)(M.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: a()($.searchBar, { [$.themedHeaderMobile]: d.tq }),
                    children: s
                        ? (0, i.jsx)(p.zxk, {
                              grow: !0,
                              color: p.zxk.Colors.PRIMARY,
                              size: p.zxk.Sizes.SMALL,
                              fullWidth: !0,
                              onClick: ea,
                              children: J.intl.string(J.t.LzcpeX)
                          })
                        : (0, i.jsx)('button', {
                              type: 'button',
                              className: a()($.searchBarComponent, { [$.themedSearchBarMobile]: d.tq }),
                              onClick: ea,
                              children: J.intl.string(J.t.LzcpeX)
                          })
                })
            }),
            (0, i.jsxs)(Y.Z, {
                ...e,
                version: g,
                selectedChannelId: m,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)(ee, { selected: null != g ? g === q.Z5c.FRIENDS : l === q.Z5c.FRIENDS }, 'friends'),
                    n && t
                        ? (0, i.jsx)(
                              et,
                              {
                                  selected: null == g ? null != l && l.startsWith(q.Z5c.APPLICATION_LIBRARY) : g.startsWith(q.Z5c.APPLICATION_LIBRARY),
                                  hideGameUpdateProgressIndicator: l === q.Z5c.APPLICATION_LIBRARY
                              },
                              'library'
                          )
                        : null,
                    c ? (0, i.jsx)(ei, { selected: null == g ? null != l && l.startsWith(q.Z5c.MESSAGE_REQUESTS) : g === q.Z5c.MESSAGE_REQUESTS }, 'message-requests') : null,
                    o
                        ? (0, i.jsx)(
                              R.g,
                              {
                                  selected: null == g ? r : g.startsWith(q.Z5c.APPLICATION_STORE),
                                  route: q.Z5c.APPLICATION_STORE,
                                  locationState: {
                                      analyticsSource: {
                                          page: es(l),
                                          section: q.jXE.NAVIGATION,
                                          object: q.qAy.NAVIGATION_LINK
                                      }
                                  }
                              },
                              'premium'
                          )
                        : null,
                    (0, i.jsx)(
                        C.i,
                        {
                            selected: g === q.Z5c.COLLECTIBLES_SHOP || (null == l ? void 0 : l.startsWith(q.Z5c.COLLECTIBLES_SHOP)),
                            locationState: {
                                analyticsSource: {
                                    page: es(l),
                                    section: q.jXE.NAVIGATION,
                                    object: q.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'discord-shop'
                    ),
                    u ? (0, i.jsx)(el, { selected: (null != l && l.startsWith(q.Z5c.FAMILY_CENTER)) || (null != g && g.startsWith(q.Z5c.FAMILY_CENTER)) }, 'family-center') : null,
                    s ? (0, i.jsx)(ec, {}, 'section-divider-top') : null,
                    h ? (0, i.jsx)(I.Z, { bottomDivider: s ? (0, i.jsx)(ec, {}) : null }, 'dm-quick-launcher') : null
                ]
            })
        ]
    });
});
function ec() {
    return (0, i.jsx)('div', { className: $.sectionDivider });
}
function ed() {
    let e = (0, u.e7)([H.Z], () => H.Z.getHomeLink()),
        t = (0, u.e7)(
            [V.Z],
            () => {
                if (e === q.Z5c.APPLICATION_STORE) return !0;
                let t = (0, z.ZK)(e);
                if (null != t) {
                    var n, i;
                    return null !== (i = null === (n = V.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
                }
                return !1;
            },
            [e]
        ),
        n = !U.bm.useSetting(),
        { theme: l } = (0, u.cj)([k.Z], () => ({ theme: k.Z.theme })),
        r = (0, u.e7)([G.Z], () => G.Z.hasLibraryApplication()),
        a = (0, u.e7)([B.Z], () => B.Z.getCurrentPath()),
        o = (0, N.Q3)('PrivateChannels'),
        [c, d] = (0, w.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, s.X),
        h = (0, R.i)({ selected: null == d ? t : d.startsWith(q.Z5c.APPLICATION_STORE) }),
        m = (0, Z.a)(),
        p = (function () {
            let e = U.Ex.useSetting(),
                t = (0, x.Z)();
            return !0 === e && !0 === t;
        })(),
        g = (0, I.n)();
    return (0, i.jsx)(eo, {
        theme: l,
        showLibrary: n,
        hasLibraryApplication: r,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        isVisualRefreshEnabled: o,
        shouldShowNitroTab: h,
        shouldShowMessageRequestsRow: m,
        shouldShowFamilyCenterRow: p,
        shouldShowQuickLauncherRow: g,
        selectedChannelId: c,
        path: d
    });
}
