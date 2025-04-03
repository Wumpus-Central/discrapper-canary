n.d(t, { Z: () => eg }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(788347),
    s = n(990547),
    c = n(91192),
    u = n(873546),
    d = n(442837),
    p = n(704215),
    h = n(952265),
    f = n(481060),
    g = n(493683),
    m = n(529103),
    b = n(607070),
    _ = n(213609),
    E = n(415439),
    O = n(143757),
    N = n(463119),
    y = n(377171),
    I = n(540059),
    v = n(243778),
    C = n(922409),
    S = n(899740),
    T = n(28476),
    P = n(880257),
    j = n(631885),
    A = n(849862),
    Z = n(522558),
    x = n(795448),
    L = n(441623),
    w = n(457396),
    R = n(108989),
    D = n(51596),
    k = n(905423),
    M = n(155409),
    U = n(210887),
    G = n(695346),
    W = n(283595),
    V = n(923834),
    B = n(55563),
    H = n(774343),
    F = n(626135),
    z = n(814225),
    Y = n(515753),
    K = n(831218),
    q = n(339149),
    Q = n(981631),
    X = n(675654),
    J = n(474936),
    $ = n(388032),
    ee = n(332495),
    et = n(416350);
function en(e) {
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
function er(e, t) {
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
function ei(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let el = (e) => {
        var { selected: t } = e,
            n = ei(e, ['selected']);
        let l = (0, c.JA)('friends'),
            a = (0, A.If)(),
            o = (0, d.e7)([L.Z], () => L.Z.canShowFriendsTabBadge()),
            u = (0, d.e7)([b.Z], () => b.Z.useReducedMotion),
            { enabled: p } = Z.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            h = o && p;
        i.useEffect(() => {
            h &&
                (0, _.h)({
                    name: s.ImpressionNames.GIFT_INTENT_BADGE,
                    type: s.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: J.hX.FRIEND_ANNIVERSARY }
                });
        }, [h]);
        let [g, E] = i.useState(!1);
        return (0, r.jsxs)('div', {
            className: et.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    Y.Qj,
                    er(
                        en(
                            {
                                onClick: () => {
                                    h && (F.default.track(Q.rMx.GIFT_INTENT_BADGE_CLICKED, { gift_intent_type: J.hX.FRIEND_ANNIVERSARY }), m.Z.setSection(Q.pJs.ALL), (0, x.Gk)());
                                },
                                interactiveClassName: h ? et.friendsBadge : void 0,
                                selected: t,
                                route: Q.Z5c.FRIENDS,
                                icon: f.iFz,
                                text: $.NW.string($.t.TdEu5e),
                                onMouseEnter: () => {
                                    E(!0);
                                },
                                onMouseLeave: () => {
                                    E(!1);
                                }
                            },
                            n,
                            l
                        ),
                        { children: a > 0 ? (0, r.jsx)(f.mAB, { count: a }) : null }
                    )
                ),
                h &&
                    !u &&
                    (0, r.jsx)(R.Z, {
                        className: et.confetti,
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
    ea = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = ei(e, ['selected', 'hideGameUpdateProgressIndicator']);
        let l = (0, c.JA)('library');
        return (0, r.jsx)(
            Y.Qj,
            er(
                en(
                    {
                        selected: t,
                        route: Q.Z5c.APPLICATION_LIBRARY,
                        icon: f.vqy,
                        text: $.NW.string($.t.cw57am)
                    },
                    i,
                    l
                ),
                { children: (0, r.jsx)(q.Z, { className: a()(et.downloadProgressCircle, { [et.hideGameUpdateProgressIndicator]: n }) }) }
            )
        );
    },
    eo = () => {
        let e = (0, S.q)();
        return e > 0 ? (0, r.jsx)(f.mAB, { count: e }) : null;
    },
    es = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)('messageRequests'),
            { channelId: i } = (0, C._)();
        if (!(0, T.a)()) return null;
        let l = null == i ? void 0 : () => g.Z.preload(Q.ME, i);
        return (0, r.jsx)(
            Y.Qj,
            er(
                en(
                    {
                        selected: t,
                        route: Q.Z5c.MESSAGE_REQUESTS,
                        icon: f._XJ,
                        text: $.NW.string($.t.e7GWjY),
                        onClick: l
                    },
                    n
                ),
                { children: (0, r.jsx)(eo, {}) }
            )
        );
    },
    ec = (e) => {
        let { selected: t } = e,
            n = $.NW.string(ee.Z.Rkdixs),
            l = (0, c.JA)('family-center'),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            Y.Qj,
            er(
                en(
                    {
                        selected: t,
                        route: Q.Z5c.FAMILY_CENTER,
                        icon: f.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            o(!0);
                        },
                        onMouseLeave: () => {
                            o(!1);
                        },
                        interactiveClassName: et.familyCenterLinkButton
                    },
                    l
                ),
                { children: (0, r.jsx)(eu, { isParentHovered: a }) }
            )
        );
    },
    eu = (e) => {
        let { isParentHovered: t } = e,
            i = (0, j.gU)();
        return t
            ? (0, r.jsx)(Y.PZ, {
                  onClick: () => {
                      (0, h.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, r.jsx)(e, en({}, t));
                      });
                  },
                  'aria-label': $.NW.string($.t.cpT0Cg)
              })
            : i > 0
              ? (0, r.jsx)('div', {
                    className: et.familyCenterPendingBadge,
                    children: (0, r.jsx)(f.mAB, { count: i })
                })
              : (0, r.jsx)(v.ZP, {
                    contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === p.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, r.jsx)(f.IGR, {
                                  text: $.NW.string($.t.y2b7CA),
                                  color: y.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    ed = () => (0, D.$Z)('DM_SEARCH');
function ep(e) {
    switch (e) {
        case Q.Z5c.APPLICATION_LIBRARY:
            return Q.ZY5.LIBRARY;
        case Q.Z5c.FRIENDS:
            return Q.ZY5.FRIENDS_LIST;
        case Q.Z5c.COLLECTIBLES_SHOP:
            return Q.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(Q.Z5c.APPLICATION_STORE) ? (e === Q.Z5c.APPLICATION_STORE ? Q.ZY5.STORE_DIRECTORY_HOME : e.startsWith(Q.Z5c.APPLICATION_STORE) ? Q.ZY5.STORE_DIRECTORY_BROWSE : Q.ZY5.STORE_LISTING) : Q.ZY5.DM_CHANNEL;
}
let eh = i.memo(function (e) {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: l, premiumTabSelected: o, isVisualRefreshEnabled: s, shouldShowNitroTab: c, shouldShowMessageRequestsRow: d, shouldShowFamilyCenterRow: p, shouldShowQuickLauncherRow: h, selectedChannelId: g, path: m } = e,
        b = i.useRef(null),
        _ = i.useRef(null),
        E = i.useRef(null);
    return (0, r.jsxs)('nav', {
        className: et.privateChannels,
        'aria-label': $.NW.string($.t.ZH9aPz),
        children: [
            (0, r.jsx)(M.Z, {
                childRef: b,
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, r.jsx)('div', {
                    ref: b,
                    className: a()(et.searchBar, { [et.themedHeaderMobile]: u.tq }),
                    children: s
                        ? (0, r.jsx)(f.zxk, {
                              grow: !0,
                              color: f.zxk.Colors.PRIMARY,
                              size: f.zxk.Sizes.SMALL,
                              fullWidth: !0,
                              onClick: ed,
                              children: $.NW.string($.t.LzcpeX)
                          })
                        : (0, r.jsx)('button', {
                              type: 'button',
                              className: a()(et.searchBarComponent, { [et.themedSearchBarMobile]: u.tq }),
                              onClick: ed,
                              children: $.NW.string($.t.LzcpeX)
                          })
                })
            }),
            (0, r.jsxs)(
                K.Z,
                er(en({}, e), {
                    version: m,
                    selectedChannelId: g,
                    showDMHeader: !0,
                    listScrollerRef: E,
                    children: [
                        (0, r.jsx)(el, { selected: null != m ? m === Q.Z5c.FRIENDS : l === Q.Z5c.FRIENDS }, 'friends'),
                        n && t
                            ? (0, r.jsx)(
                                  ea,
                                  {
                                      selected: null == m ? null != l && l.startsWith(Q.Z5c.APPLICATION_LIBRARY) : m.startsWith(Q.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === Q.Z5c.APPLICATION_LIBRARY
                                  },
                                  'library'
                              )
                            : null,
                        d ? (0, r.jsx)(es, { selected: null == m ? null != l && l.startsWith(Q.Z5c.MESSAGE_REQUESTS) : m === Q.Z5c.MESSAGE_REQUESTS }, 'message-requests') : null,
                        c
                            ? (0, r.jsx)(
                                  w.g,
                                  {
                                      selected: null == m ? o : m.startsWith(Q.Z5c.APPLICATION_STORE),
                                      route: Q.Z5c.APPLICATION_STORE,
                                      locationState: {
                                          analyticsSource: {
                                              page: ep(l),
                                              section: Q.jXE.NAVIGATION,
                                              object: Q.qAy.NAVIGATION_LINK
                                          }
                                      }
                                  },
                                  'premium'
                              )
                            : null,
                        (0, r.jsx)(
                            N.i,
                            {
                                selected: m === Q.Z5c.COLLECTIBLES_SHOP || (null == l ? void 0 : l.startsWith(Q.Z5c.COLLECTIBLES_SHOP)),
                                listItemRef: _,
                                listScrollerRef: E,
                                locationState: {
                                    analyticsSource: {
                                        page: ep(l),
                                        section: Q.jXE.NAVIGATION,
                                        object: Q.qAy.NAVIGATION_LINK
                                    }
                                }
                            },
                            'discord-shop'
                        ),
                        p ? (0, r.jsx)(ec, { selected: (null != l && l.startsWith(Q.Z5c.FAMILY_CENTER)) || (null != m && m.startsWith(Q.Z5c.FAMILY_CENTER)) }, 'family-center') : null,
                        s ? (0, r.jsx)(ef, {}, 'section-divider-top') : null,
                        h ? (0, r.jsx)(O.Z, { bottomDivider: s ? (0, r.jsx)(ef, {}) : null }, 'dm-quick-launcher') : null
                    ]
                })
            )
        ]
    });
});
function ef() {
    return (0, r.jsx)('div', { className: et.sectionDivider });
}
function eg() {
    let e = (0, d.e7)([H.Z], () => H.Z.getHomeLink()),
        t = (0, d.e7)(
            [B.Z],
            () => {
                if (e === Q.Z5c.APPLICATION_STORE) return !0;
                let t = (0, z.ZK)(e);
                if (null != t) {
                    var n, r;
                    return null != (r = null == (n = B.Z.get(t)) ? void 0 : n.premium) && r;
                }
                return !1;
            },
            [e]
        ),
        n = !G.bm.useSetting(),
        { theme: i } = (0, d.cj)([U.Z], () => ({ theme: U.Z.theme })),
        l = (0, d.e7)([W.Z], () => W.Z.hasLibraryApplication()),
        a = (0, d.e7)([V.Z], () => V.Z.getCurrentPath()),
        s = (0, I.Q3)('PrivateChannels'),
        [c, u] = (0, k.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        p = (0, w.i)({ selected: null == u ? t : u.startsWith(Q.Z5c.APPLICATION_STORE) }),
        h = (0, T.a)(),
        f = (function () {
            let e = G.Ex.useSetting(),
                t = (0, P.Z)();
            return !0 === e && !0 === t;
        })(),
        g = (0, E.FW)();
    return (0, r.jsx)(eh, {
        theme: i,
        showLibrary: n,
        hasLibraryApplication: l,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        isVisualRefreshEnabled: s,
        shouldShowNitroTab: p,
        shouldShowMessageRequestsRow: h,
        shouldShowFamilyCenterRow: f,
        shouldShowQuickLauncherRow: g,
        selectedChannelId: c,
        path: u
    });
}
