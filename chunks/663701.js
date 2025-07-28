(n.d(t, { Z: () => eg }), n(388685));
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
    O = n(557968),
    E = n(213609),
    y = n(463119),
    v = n(377171),
    I = n(243778),
    C = n(488634),
    S = n(899740),
    N = n(28476),
    T = n(880257),
    P = n(631885),
    j = n(849862),
    A = n(522558),
    x = n(795448),
    Z = n(441623),
    w = n(457396),
    L = n(108989),
    R = n(51596),
    D = n(905423),
    k = n(155409),
    M = n(210887),
    U = n(695346),
    G = n(283595),
    V = n(923834),
    B = n(55563),
    H = n(774343),
    F = n(974042),
    z = n(626135),
    W = n(814225),
    Y = n(515753),
    K = n(831218),
    q = n(339149),
    X = n(981631),
    Q = n(675654),
    J = n(474936),
    $ = n(388032),
    ee = n(916723),
    et = n(416350);
function en(e) {
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
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
let el = (e) => {
        var { selected: t } = e,
            n = ei(e, ['selected']);
        let l = (0, c.JA)('friends'),
            a = (0, j.If)(),
            o = (0, d.e7)([Z.Z], () => Z.Z.canShowFriendsTabBadge()),
            u = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
            { enabled: p } = A.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            h = o && p;
        i.useEffect(() => {
            h &&
                (0, E.h)({
                    name: s.ImpressionNames.GIFT_INTENT_BADGE,
                    type: s.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: J.hX.FRIEND_ANNIVERSARY }
                });
        }, [h]);
        let [f, m] = i.useState(!1);
        return (0, r.jsxs)('div', {
            className: et.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    Y.Qj,
                    er(
                        en(
                            {
                                onClick: () => {
                                    let e;
                                    (h ? (z.default.track(X.rMx.GIFT_INTENT_BADGE_CLICKED, { gift_intent_type: J.hX.FRIEND_ANNIVERSARY }), (e = X.pJs.ALL), b.Z.setSection(X.pJs.ALL), (0, x.Gk)()) : (e = F.ZP.getState().section), (0, O.Z)({ tab_opened: e }));
                                },
                                interactiveClassName: h ? et.friendsBadge : void 0,
                                selected: t,
                                route: X.Z5c.FRIENDS,
                                icon: g.iFz,
                                text: $.intl.string($.t.TdEu5e),
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
                    (0, r.jsx)(L.Z, {
                        className: et.confetti,
                        wind: 0,
                        sprites: Q.CA,
                        spriteColors: Q.Br,
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
                        route: X.Z5c.APPLICATION_LIBRARY,
                        icon: g.vqy,
                        text: $.intl.string($.t.cw57am)
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
        return e > 0 ? (0, r.jsx)(g.mAB, { count: e }) : null;
    },
    es = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)('messageRequests'),
            { channelId: i } = (0, C._)();
        if (!(0, N.a)()) return null;
        let l = null == i ? void 0 : () => m.Z.preload(X.ME, i);
        return (0, r.jsx)(
            Y.Qj,
            er(
                en(
                    {
                        selected: t,
                        route: X.Z5c.MESSAGE_REQUESTS,
                        icon: g._XJ,
                        text: $.intl.string($.t.e7GWjY),
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
            n = $.intl.string(ee.default.Rkdixs),
            l = (0, c.JA)('family-center'),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            Y.Qj,
            er(
                en(
                    {
                        selected: t,
                        route: X.Z5c.FAMILY_CENTER,
                        icon: g.BFJ,
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
            i = (0, P.gU)();
        return t
            ? (0, r.jsx)(Y.PZ, {
                  onClick: () => {
                      (0, h.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, r.jsx)(e, en({}, t));
                      });
                  },
                  'aria-label': $.intl.string($.t.cpT0Cg)
              })
            : i > 0
              ? (0, r.jsx)('div', {
                    className: et.familyCenterPendingBadge,
                    children: (0, r.jsx)(g.mAB, { count: i })
                })
              : (0, r.jsx)(I.ZP, {
                    contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === p.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, r.jsx)(g.IGR, {
                                  text: $.intl.string($.t.y2b7CA),
                                  color: v.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    ed = () => (0, R.$Z)('DM_SEARCH');
function ep(e) {
    switch (e) {
        case X.Z5c.APPLICATION_LIBRARY:
            return X.ZY5.LIBRARY;
        case X.Z5c.FRIENDS:
            return X.ZY5.FRIENDS_LIST;
        case X.Z5c.COLLECTIBLES_SHOP:
            return X.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(X.Z5c.APPLICATION_STORE) ? (e === X.Z5c.APPLICATION_STORE ? X.ZY5.STORE_DIRECTORY_HOME : e.startsWith(X.Z5c.APPLICATION_STORE) ? X.ZY5.STORE_DIRECTORY_BROWSE : X.ZY5.STORE_LISTING) : X.ZY5.DM_CHANNEL;
}
let eh = i.memo(function (e) {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: l, premiumTabSelected: o, shouldShowNitroTab: s, shouldShowMessageRequestsRow: c, shouldShowFamilyCenterRow: d, selectedChannelId: p, path: h } = e,
        g = i.useRef(null),
        m = i.useRef(null),
        b = i.useRef(null);
    return (0, r.jsxs)('nav', {
        className: et.privateChannels,
        'aria-label': $.intl.string($.t.ZH9aPz),
        children: [
            (0, r.jsx)(k.Z, {
                childRef: g,
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, r.jsx)('div', {
                    ref: g,
                    className: a()(et.searchBar, { [et.themedHeaderMobile]: u.tq }),
                    children: (0, r.jsx)(f.zx, {
                        grow: !0,
                        color: f.zx.Colors.PRIMARY,
                        size: f.zx.Sizes.SMALL,
                        fullWidth: !0,
                        onClick: ed,
                        children: $.intl.string($.t.LzcpeX)
                    })
                })
            }),
            (0, r.jsxs)(
                K.Z,
                er(en({}, e), {
                    version: h,
                    selectedChannelId: p,
                    showDMHeader: !0,
                    listScrollerRef: b,
                    children: [
                        (0, r.jsx)(el, { selected: null != h ? h === X.Z5c.FRIENDS : l === X.Z5c.FRIENDS }, 'friends'),
                        n && t
                            ? (0, r.jsx)(
                                  ea,
                                  {
                                      selected: null == h ? null != l && l.startsWith(X.Z5c.APPLICATION_LIBRARY) : h.startsWith(X.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === X.Z5c.APPLICATION_LIBRARY
                                  },
                                  'library'
                              )
                            : null,
                        c ? (0, r.jsx)(es, { selected: null == h ? null != l && l.startsWith(X.Z5c.MESSAGE_REQUESTS) : h === X.Z5c.MESSAGE_REQUESTS }, 'message-requests') : null,
                        s
                            ? (0, r.jsx)(
                                  w.g,
                                  {
                                      selected: null == h ? o : h.startsWith(X.Z5c.APPLICATION_STORE),
                                      route: X.Z5c.APPLICATION_STORE,
                                      locationState: {
                                          analyticsSource: {
                                              page: ep(l),
                                              section: X.jXE.NAVIGATION,
                                              object: X.qAy.NAVIGATION_LINK
                                          }
                                      }
                                  },
                                  'premium'
                              )
                            : null,
                        (0, r.jsx)(
                            y.i,
                            {
                                selected: h === X.Z5c.COLLECTIBLES_SHOP || (null == l ? void 0 : l.startsWith(X.Z5c.COLLECTIBLES_SHOP)),
                                listItemRef: m,
                                listScrollerRef: b,
                                locationState: {
                                    analyticsSource: {
                                        page: ep(l),
                                        section: X.jXE.NAVIGATION,
                                        object: X.qAy.NAVIGATION_LINK
                                    }
                                }
                            },
                            'discord-shop'
                        ),
                        d ? (0, r.jsx)(ec, { selected: (null != l && l.startsWith(X.Z5c.FAMILY_CENTER)) || (null != h && h.startsWith(X.Z5c.FAMILY_CENTER)) }, 'family-center') : null,
                        (0, r.jsx)(ef, {}, 'section-divider-top')
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
                if (e === X.Z5c.APPLICATION_STORE) return !0;
                let t = (0, W.ZK)(e);
                if (null != t) {
                    var n, r;
                    return null != (r = null == (n = B.Z.get(t)) ? void 0 : n.premium) && r;
                }
                return !1;
            },
            [e]
        ),
        n = !U.bm.useSetting(),
        { theme: i } = (0, d.cj)([M.Z], () => ({ theme: M.Z.theme })),
        l = (0, d.e7)([G.Z], () => G.Z.hasLibraryApplication()),
        a = (0, d.e7)([V.Z], () => V.Z.getCurrentPath()),
        [s, c] = (0, D.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        u = (0, w.i)({ selected: null == c ? t : c.startsWith(X.Z5c.APPLICATION_STORE) }),
        p = (0, N.a)(),
        h = (function () {
            let e = U.Ex.useSetting(),
                t = (0, T.Z)();
            return !0 === e && !0 === t;
        })();
    return (0, r.jsx)(eh, {
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
