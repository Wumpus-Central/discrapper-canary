(n.d(t, { Z: () => eh }), n(388685));
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
    f = n(755721),
    g = n(481060),
    m = n(493683),
    b = n(529103),
    _ = n(607070),
    E = n(213609),
    O = n(463119),
    y = n(377171),
    I = n(243778),
    v = n(488634),
    C = n(899740),
    S = n(28476),
    N = n(880257),
    T = n(631885),
    P = n(849862),
    j = n(522558),
    A = n(795448),
    Z = n(441623),
    x = n(457396),
    w = n(108989),
    L = n(51596),
    R = n(905423),
    D = n(155409),
    k = n(210887),
    M = n(695346),
    U = n(283595),
    G = n(923834),
    B = n(55563),
    V = n(774343),
    H = n(626135),
    F = n(814225),
    z = n(515753),
    W = n(831218),
    Y = n(339149),
    K = n(981631),
    q = n(675654),
    X = n(474936),
    Q = n(388032),
    J = n(916723),
    $ = n(416350);
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function et(e, t) {
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
function en(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
let er = (e) => {
        var { selected: t } = e,
            n = en(e, ['selected']);
        let l = (0, c.JA)('friends'),
            a = (0, P.If)(),
            o = (0, d.e7)([Z.Z], () => Z.Z.canShowFriendsTabBadge()),
            u = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
            { enabled: p } = j.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            h = o && p;
        i.useEffect(() => {
            h &&
                (0, E.h)({
                    name: s.ImpressionNames.GIFT_INTENT_BADGE,
                    type: s.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: X.hX.FRIEND_ANNIVERSARY }
                });
        }, [h]);
        let [f, m] = i.useState(!1);
        return (0, r.jsxs)('div', {
            className: $.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    z.Qj,
                    et(
                        ee(
                            {
                                onClick: () => {
                                    h && (H.default.track(K.rMx.GIFT_INTENT_BADGE_CLICKED, { gift_intent_type: X.hX.FRIEND_ANNIVERSARY }), b.Z.setSection(K.pJs.ALL), (0, A.Gk)());
                                },
                                interactiveClassName: h ? $.friendsBadge : void 0,
                                selected: t,
                                route: K.Z5c.FRIENDS,
                                icon: g.iFz,
                                text: Q.intl.string(Q.t.TdEu5e),
                                onMouseEnter: () => {
                                    m(!0);
                                },
                                onMouseLeave: () => {
                                    m(!1);
                                }
                            },
                            n,
                            l
                        ),
                        { children: a > 0 ? (0, r.jsx)(g.mAB, { count: a }) : null }
                    )
                ),
                h &&
                    !u &&
                    (0, r.jsx)(w.Z, {
                        className: $.confetti,
                        wind: 0,
                        sprites: q.CA,
                        spriteColors: q.Br,
                        firing: f,
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
    ei = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = en(e, ['selected', 'hideGameUpdateProgressIndicator']);
        let l = (0, c.JA)('library');
        return (0, r.jsx)(
            z.Qj,
            et(
                ee(
                    {
                        selected: t,
                        route: K.Z5c.APPLICATION_LIBRARY,
                        icon: g.vqy,
                        text: Q.intl.string(Q.t.cw57am)
                    },
                    i,
                    l
                ),
                { children: (0, r.jsx)(Y.Z, { className: a()($.downloadProgressCircle, { [$.hideGameUpdateProgressIndicator]: n }) }) }
            )
        );
    },
    el = () => {
        let e = (0, C.q)();
        return e > 0 ? (0, r.jsx)(g.mAB, { count: e }) : null;
    },
    ea = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)('messageRequests'),
            { channelId: i } = (0, v._)();
        if (!(0, S.a)()) return null;
        let l = null == i ? void 0 : () => m.Z.preload(K.ME, i);
        return (0, r.jsx)(
            z.Qj,
            et(
                ee(
                    {
                        selected: t,
                        route: K.Z5c.MESSAGE_REQUESTS,
                        icon: g._XJ,
                        text: Q.intl.string(Q.t.e7GWjY),
                        onClick: l
                    },
                    n
                ),
                { children: (0, r.jsx)(el, {}) }
            )
        );
    },
    eo = (e) => {
        let { selected: t } = e,
            n = Q.intl.string(J.default.Rkdixs),
            l = (0, c.JA)('family-center'),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            z.Qj,
            et(
                ee(
                    {
                        selected: t,
                        route: K.Z5c.FAMILY_CENTER,
                        icon: g.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            o(!0);
                        },
                        onMouseLeave: () => {
                            o(!1);
                        },
                        interactiveClassName: $.familyCenterLinkButton
                    },
                    l
                ),
                { children: (0, r.jsx)(es, { isParentHovered: a }) }
            )
        );
    },
    es = (e) => {
        let { isParentHovered: t } = e,
            i = (0, T.gU)();
        return t
            ? (0, r.jsx)(z.PZ, {
                  onClick: () => {
                      (0, h.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, r.jsx)(e, ee({}, t));
                      });
                  },
                  'aria-label': Q.intl.string(Q.t.cpT0Cg)
              })
            : i > 0
              ? (0, r.jsx)('div', {
                    className: $.familyCenterPendingBadge,
                    children: (0, r.jsx)(g.mAB, { count: i })
                })
              : (0, r.jsx)(I.ZP, {
                    contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === p.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, r.jsx)(g.IGR, {
                                  text: Q.intl.string(Q.t.y2b7CA),
                                  color: y.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    ec = () => (0, L.$Z)('DM_SEARCH');
function eu(e) {
    switch (e) {
        case K.Z5c.APPLICATION_LIBRARY:
            return K.ZY5.LIBRARY;
        case K.Z5c.FRIENDS:
            return K.ZY5.FRIENDS_LIST;
        case K.Z5c.COLLECTIBLES_SHOP:
            return K.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(K.Z5c.APPLICATION_STORE) ? (e === K.Z5c.APPLICATION_STORE ? K.ZY5.STORE_DIRECTORY_HOME : e.startsWith(K.Z5c.APPLICATION_STORE) ? K.ZY5.STORE_DIRECTORY_BROWSE : K.ZY5.STORE_LISTING) : K.ZY5.DM_CHANNEL;
}
let ed = i.memo(function (e) {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: l, premiumTabSelected: o, shouldShowNitroTab: s, shouldShowMessageRequestsRow: c, shouldShowFamilyCenterRow: d, selectedChannelId: p, path: h } = e,
        g = i.useRef(null),
        m = i.useRef(null),
        b = i.useRef(null);
    return (0, r.jsxs)('nav', {
        className: $.privateChannels,
        'aria-label': Q.intl.string(Q.t.ZH9aPz),
        children: [
            (0, r.jsx)(D.Z, {
                childRef: g,
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, r.jsx)('div', {
                    ref: g,
                    className: a()($.searchBar, { [$.themedHeaderMobile]: u.tq }),
                    children: (0, r.jsx)(f.zx, {
                        grow: !0,
                        color: f.zx.Colors.PRIMARY,
                        size: f.zx.Sizes.SMALL,
                        fullWidth: !0,
                        onClick: ec,
                        children: Q.intl.string(Q.t.LzcpeX)
                    })
                })
            }),
            (0, r.jsxs)(
                W.Z,
                et(ee({}, e), {
                    version: h,
                    selectedChannelId: p,
                    showDMHeader: !0,
                    listScrollerRef: b,
                    children: [
                        (0, r.jsx)(er, { selected: null != h ? h === K.Z5c.FRIENDS : l === K.Z5c.FRIENDS }, 'friends'),
                        n && t
                            ? (0, r.jsx)(
                                  ei,
                                  {
                                      selected: null == h ? null != l && l.startsWith(K.Z5c.APPLICATION_LIBRARY) : h.startsWith(K.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === K.Z5c.APPLICATION_LIBRARY
                                  },
                                  'library'
                              )
                            : null,
                        c ? (0, r.jsx)(ea, { selected: null == h ? null != l && l.startsWith(K.Z5c.MESSAGE_REQUESTS) : h === K.Z5c.MESSAGE_REQUESTS }, 'message-requests') : null,
                        s
                            ? (0, r.jsx)(
                                  x.g,
                                  {
                                      selected: null == h ? o : h.startsWith(K.Z5c.APPLICATION_STORE),
                                      route: K.Z5c.APPLICATION_STORE,
                                      locationState: {
                                          analyticsSource: {
                                              page: eu(l),
                                              section: K.jXE.NAVIGATION,
                                              object: K.qAy.NAVIGATION_LINK
                                          }
                                      }
                                  },
                                  'premium'
                              )
                            : null,
                        (0, r.jsx)(
                            O.i,
                            {
                                selected: h === K.Z5c.COLLECTIBLES_SHOP || (null == l ? void 0 : l.startsWith(K.Z5c.COLLECTIBLES_SHOP)),
                                listItemRef: m,
                                listScrollerRef: b,
                                locationState: {
                                    analyticsSource: {
                                        page: eu(l),
                                        section: K.jXE.NAVIGATION,
                                        object: K.qAy.NAVIGATION_LINK
                                    }
                                }
                            },
                            'discord-shop'
                        ),
                        d ? (0, r.jsx)(eo, { selected: (null != l && l.startsWith(K.Z5c.FAMILY_CENTER)) || (null != h && h.startsWith(K.Z5c.FAMILY_CENTER)) }, 'family-center') : null,
                        (0, r.jsx)(ep, {}, 'section-divider-top')
                    ]
                })
            )
        ]
    });
});
function ep() {
    return (0, r.jsx)('div', { className: $.sectionDivider });
}
function eh() {
    let e = (0, d.e7)([V.Z], () => V.Z.getHomeLink()),
        t = (0, d.e7)(
            [B.Z],
            () => {
                if (e === K.Z5c.APPLICATION_STORE) return !0;
                let t = (0, F.ZK)(e);
                if (null != t) {
                    var n, r;
                    return null != (r = null == (n = B.Z.get(t)) ? void 0 : n.premium) && r;
                }
                return !1;
            },
            [e]
        ),
        n = !M.bm.useSetting(),
        { theme: i } = (0, d.cj)([k.Z], () => ({ theme: k.Z.theme })),
        l = (0, d.e7)([U.Z], () => U.Z.hasLibraryApplication()),
        a = (0, d.e7)([G.Z], () => G.Z.getCurrentPath()),
        [s, c] = (0, R.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        u = (0, x.i)({ selected: null == c ? t : c.startsWith(K.Z5c.APPLICATION_STORE) }),
        p = (0, S.a)(),
        h = (function () {
            let e = M.Ex.useSetting(),
                t = (0, N.Z)();
            return !0 === e && !0 === t;
        })();
    return (0, r.jsx)(ed, {
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
