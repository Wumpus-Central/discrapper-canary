n.d(t, { Z: () => ep }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(94171),
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
    E = n(463119),
    O = n(377171),
    y = n(243778),
    I = n(488634),
    v = n(899740),
    C = n(28476),
    S = n(880257),
    N = n(631885),
    T = n(849862),
    P = n(522558),
    j = n(795448),
    A = n(441623),
    Z = n(457396),
    x = n(108989),
    L = n(51596),
    w = n(905423),
    R = n(155409),
    D = n(210887),
    k = n(695346),
    M = n(283595),
    U = n(923834),
    G = n(55563),
    B = n(774343),
    V = n(626135),
    H = n(814225),
    F = n(515753),
    z = n(831218),
    W = n(339149),
    Y = n(981631),
    K = n(675654),
    q = n(474936),
    X = n(388032),
    Q = n(916723),
    J = n(416350);
function $(e) {
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
function ee(e, t) {
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
function et(e, t) {
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
let en = (e) => {
        var { selected: t } = e,
            n = et(e, ['selected']);
        let l = (0, c.JA)('friends'),
            a = (0, T.If)(),
            o = (0, d.e7)([A.Z], () => A.Z.canShowFriendsTabBadge()),
            u = (0, d.e7)([b.Z], () => b.Z.useReducedMotion),
            { enabled: p } = P.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            h = o && p;
        i.useEffect(() => {
            h &&
                (0, _.h)({
                    name: s.ImpressionNames.GIFT_INTENT_BADGE,
                    type: s.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: q.hX.FRIEND_ANNIVERSARY }
                });
        }, [h]);
        let [g, E] = i.useState(!1);
        return (0, r.jsxs)('div', {
            className: J.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    F.Qj,
                    ee(
                        $(
                            {
                                onClick: () => {
                                    h && (V.default.track(Y.rMx.GIFT_INTENT_BADGE_CLICKED, { gift_intent_type: q.hX.FRIEND_ANNIVERSARY }), m.Z.setSection(Y.pJs.ALL), (0, j.Gk)());
                                },
                                interactiveClassName: h ? J.friendsBadge : void 0,
                                selected: t,
                                route: Y.Z5c.FRIENDS,
                                icon: f.iFz,
                                text: X.intl.string(X.t.TdEu5e),
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
                    (0, r.jsx)(x.Z, {
                        className: J.confetti,
                        wind: 0,
                        sprites: K.CA,
                        spriteColors: K.Br,
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
    er = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = et(e, ['selected', 'hideGameUpdateProgressIndicator']);
        let l = (0, c.JA)('library');
        return (0, r.jsx)(
            F.Qj,
            ee(
                $(
                    {
                        selected: t,
                        route: Y.Z5c.APPLICATION_LIBRARY,
                        icon: f.vqy,
                        text: X.intl.string(X.t.cw57am)
                    },
                    i,
                    l
                ),
                { children: (0, r.jsx)(W.Z, { className: a()(J.downloadProgressCircle, { [J.hideGameUpdateProgressIndicator]: n }) }) }
            )
        );
    },
    ei = () => {
        let e = (0, v.q)();
        return e > 0 ? (0, r.jsx)(f.mAB, { count: e }) : null;
    },
    el = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)('messageRequests'),
            { channelId: i } = (0, I._)();
        if (!(0, C.a)()) return null;
        let l = null == i ? void 0 : () => g.Z.preload(Y.ME, i);
        return (0, r.jsx)(
            F.Qj,
            ee(
                $(
                    {
                        selected: t,
                        route: Y.Z5c.MESSAGE_REQUESTS,
                        icon: f._XJ,
                        text: X.intl.string(X.t.e7GWjY),
                        onClick: l
                    },
                    n
                ),
                { children: (0, r.jsx)(ei, {}) }
            )
        );
    },
    ea = (e) => {
        let { selected: t } = e,
            n = X.intl.string(Q.default.Rkdixs),
            l = (0, c.JA)('family-center'),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            F.Qj,
            ee(
                $(
                    {
                        selected: t,
                        route: Y.Z5c.FAMILY_CENTER,
                        icon: f.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            o(!0);
                        },
                        onMouseLeave: () => {
                            o(!1);
                        },
                        interactiveClassName: J.familyCenterLinkButton
                    },
                    l
                ),
                { children: (0, r.jsx)(eo, { isParentHovered: a }) }
            )
        );
    },
    eo = (e) => {
        let { isParentHovered: t } = e,
            i = (0, N.gU)();
        return t
            ? (0, r.jsx)(F.PZ, {
                  onClick: () => {
                      (0, h.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, r.jsx)(e, $({}, t));
                      });
                  },
                  'aria-label': X.intl.string(X.t.cpT0Cg)
              })
            : i > 0
              ? (0, r.jsx)('div', {
                    className: J.familyCenterPendingBadge,
                    children: (0, r.jsx)(f.mAB, { count: i })
                })
              : (0, r.jsx)(y.ZP, {
                    contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === p.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, r.jsx)(f.IGR, {
                                  text: X.intl.string(X.t.y2b7CA),
                                  color: O.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    es = () => (0, L.$Z)('DM_SEARCH');
function ec(e) {
    switch (e) {
        case Y.Z5c.APPLICATION_LIBRARY:
            return Y.ZY5.LIBRARY;
        case Y.Z5c.FRIENDS:
            return Y.ZY5.FRIENDS_LIST;
        case Y.Z5c.COLLECTIBLES_SHOP:
            return Y.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(Y.Z5c.APPLICATION_STORE) ? (e === Y.Z5c.APPLICATION_STORE ? Y.ZY5.STORE_DIRECTORY_HOME : e.startsWith(Y.Z5c.APPLICATION_STORE) ? Y.ZY5.STORE_DIRECTORY_BROWSE : Y.ZY5.STORE_LISTING) : Y.ZY5.DM_CHANNEL;
}
let eu = i.memo(function (e) {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: l, premiumTabSelected: o, shouldShowNitroTab: s, shouldShowMessageRequestsRow: c, shouldShowFamilyCenterRow: d, selectedChannelId: p, path: h } = e,
        g = i.useRef(null),
        m = i.useRef(null),
        b = i.useRef(null);
    return (0, r.jsxs)('nav', {
        className: J.privateChannels,
        'aria-label': X.intl.string(X.t.ZH9aPz),
        children: [
            (0, r.jsx)(R.Z, {
                childRef: g,
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, r.jsx)('div', {
                    ref: g,
                    className: a()(J.searchBar, { [J.themedHeaderMobile]: u.tq }),
                    children: (0, r.jsx)(f.zxk, {
                        grow: !0,
                        color: f.zxk.Colors.PRIMARY,
                        size: f.zxk.Sizes.SMALL,
                        fullWidth: !0,
                        onClick: es,
                        children: X.intl.string(X.t.LzcpeX)
                    })
                })
            }),
            (0, r.jsxs)(
                z.Z,
                ee($({}, e), {
                    version: h,
                    selectedChannelId: p,
                    showDMHeader: !0,
                    listScrollerRef: b,
                    children: [
                        (0, r.jsx)(en, { selected: null != h ? h === Y.Z5c.FRIENDS : l === Y.Z5c.FRIENDS }, 'friends'),
                        n && t
                            ? (0, r.jsx)(
                                  er,
                                  {
                                      selected: null == h ? null != l && l.startsWith(Y.Z5c.APPLICATION_LIBRARY) : h.startsWith(Y.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === Y.Z5c.APPLICATION_LIBRARY
                                  },
                                  'library'
                              )
                            : null,
                        c ? (0, r.jsx)(el, { selected: null == h ? null != l && l.startsWith(Y.Z5c.MESSAGE_REQUESTS) : h === Y.Z5c.MESSAGE_REQUESTS }, 'message-requests') : null,
                        s
                            ? (0, r.jsx)(
                                  Z.g,
                                  {
                                      selected: null == h ? o : h.startsWith(Y.Z5c.APPLICATION_STORE),
                                      route: Y.Z5c.APPLICATION_STORE,
                                      locationState: {
                                          analyticsSource: {
                                              page: ec(l),
                                              section: Y.jXE.NAVIGATION,
                                              object: Y.qAy.NAVIGATION_LINK
                                          }
                                      }
                                  },
                                  'premium'
                              )
                            : null,
                        (0, r.jsx)(
                            E.i,
                            {
                                selected: h === Y.Z5c.COLLECTIBLES_SHOP || (null == l ? void 0 : l.startsWith(Y.Z5c.COLLECTIBLES_SHOP)),
                                listItemRef: m,
                                listScrollerRef: b,
                                locationState: {
                                    analyticsSource: {
                                        page: ec(l),
                                        section: Y.jXE.NAVIGATION,
                                        object: Y.qAy.NAVIGATION_LINK
                                    }
                                }
                            },
                            'discord-shop'
                        ),
                        d ? (0, r.jsx)(ea, { selected: (null != l && l.startsWith(Y.Z5c.FAMILY_CENTER)) || (null != h && h.startsWith(Y.Z5c.FAMILY_CENTER)) }, 'family-center') : null,
                        (0, r.jsx)(ed, {}, 'section-divider-top')
                    ]
                })
            )
        ]
    });
});
function ed() {
    return (0, r.jsx)('div', { className: J.sectionDivider });
}
function ep() {
    let e = (0, d.e7)([B.Z], () => B.Z.getHomeLink()),
        t = (0, d.e7)(
            [G.Z],
            () => {
                if (e === Y.Z5c.APPLICATION_STORE) return !0;
                let t = (0, H.ZK)(e);
                if (null != t) {
                    var n, r;
                    return null != (r = null == (n = G.Z.get(t)) ? void 0 : n.premium) && r;
                }
                return !1;
            },
            [e]
        ),
        n = !k.bm.useSetting(),
        { theme: i } = (0, d.cj)([D.Z], () => ({ theme: D.Z.theme })),
        l = (0, d.e7)([M.Z], () => M.Z.hasLibraryApplication()),
        a = (0, d.e7)([U.Z], () => U.Z.getCurrentPath()),
        [s, c] = (0, w.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        u = (0, Z.i)({ selected: null == c ? t : c.startsWith(Y.Z5c.APPLICATION_STORE) }),
        p = (0, C.a)(),
        h = (function () {
            let e = k.Ex.useSetting(),
                t = (0, S.Z)();
            return !0 === e && !0 === t;
        })();
    return (0, r.jsx)(eu, {
        theme: i,
        showLibrary: n,
        hasLibraryApplication: l,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        shouldShowNitroTab: u,
        shouldShowMessageRequestsRow: p,
        shouldShowFamilyCenterRow: h,
        selectedChannelId: s,
        path: c
    });
}
