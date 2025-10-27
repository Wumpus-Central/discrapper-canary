n.d(t, {
    Z: () => eP,
    d: () => ej,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(843611),
    o = n(574583),
    c = n(990547),
    u = n(91192),
    d = n(873546),
    p = n(442837),
    f = n(704215),
    h = n(952265),
    m = n(755721),
    g = n(481060),
    _ = n(493683),
    b = n(529103),
    E = n(607070),
    O = n(557968),
    I = n(213609),
    v = n(463119),
    y = n(377171),
    C = n(111028),
    S = n(243778),
    T = n(702456),
    N = n(882579),
    j = n(518311),
    P = n(518929),
    x = n(488634),
    A = n(899740),
    Z = n(28476),
    w = n(880257),
    L = n(631885),
    D = n(365113),
    R = n(849862),
    M = n(522558),
    k = n(795448),
    U = n(441623),
    G = n(93237),
    B = n(138176),
    H = n(457396),
    V = n(108989),
    F = n(362870),
    Y = n(51596),
    z = n(905423),
    W = n(155409),
    q = n(210887),
    K = n(695346),
    Q = n(283595),
    J = n(923834),
    X = n(55563),
    $ = n(774343),
    ee = n(974042),
    et = n(626135),
    en = n(814225),
    er = n(515753),
    ei = n(831218),
    el = n(339149),
    ea = n(981631),
    es = n(675654),
    eo = n(474936),
    ec = n(388032),
    eu = n(602698),
    ed = n(686918);
function ep(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function ef(e, t) {
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
function eh(e, t) {
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
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let em = (e) => {
        var { selected: t } = e,
            n = eh(e, ["selected"]);
        let i = (0, P.b5)("PrivateChannels.ICYMIButton"),
            l = (0, u.JA)("icymi");
        return i
            ? (0, r.jsx)("div", {
                  className: ed.friendsButtonContainer,
                  children: (0, r.jsx)(
                      er.Qj,
                      ep(
                          {
                              selected: t,
                              route: ea.Z5c.ICYMI,
                              icon: g.qOE,
                              text: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      ec.intl.string(ec.t["jnXV/V"]),
                                      (0, r.jsx)("span", {
                                          className: ed.preAlphaText,
                                          children: ec.intl.string(ec.t.Ac2OZA),
                                      }),
                                  ],
                              }),
                          },
                          n,
                          l,
                      ),
                  ),
              })
            : null;
    },
    eg = (e) => {
        var { selected: t } = e,
            n = eh(e, ["selected"]);
        let l = (0, u.JA)("friends"),
            a = (0, R.If)(),
            s = (0, p.e7)([U.Z], () => U.Z.canShowFriendsTabBadge()),
            o = (0, p.e7)([E.Z], () => E.Z.useReducedMotion),
            { enabled: d } = M.w.useExperiment({ location: "Friends Tab" }, { autoTrackExposure: !1 }),
            f = s && d;
        i.useEffect(() => {
            f &&
                (0, I.h)({
                    name: c.ImpressionNames.GIFT_INTENT_BADGE,
                    type: c.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: eo.hX.FRIEND_ANNIVERSARY },
                });
        }, [f]);
        let [h, m] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: ed.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    er.Qj,
                    ef(
                        ep(
                            {
                                onClick: () => {
                                    let e;
                                    f
                                        ? (et.default.track(ea.rMx.GIFT_INTENT_BADGE_CLICKED, {
                                              gift_intent_type: eo.hX.FRIEND_ANNIVERSARY,
                                          }),
                                          (e = ea.pJs.ALL),
                                          b.Z.setSection(ea.pJs.ALL),
                                          (0, k.Gk)())
                                        : (e = ee.ZP.getState().section),
                                        (0, O.Z)({ tab_opened: e });
                                },
                                interactiveClassName: f ? ed.friendsBadge : void 0,
                                selected: t,
                                route: ea.Z5c.FRIENDS,
                                icon: g.iFz,
                                text: ec.intl.string(ec.t.TdEu5X),
                                onMouseEnter: () => {
                                    m(!0);
                                },
                                onMouseLeave: () => {
                                    m(!1);
                                },
                            },
                            n,
                            l,
                        ),
                        { children: a > 0 ? (0, r.jsx)(g.mAB, { count: a }) : null },
                    ),
                ),
                f &&
                    !o &&
                    (0, r.jsx)(V.Z, {
                        className: ed.confetti,
                        wind: 0,
                        sprites: es.CA,
                        spriteColors: es.Br,
                        firing: h,
                        confettiConfig: {
                            opacity: {
                                type: "static",
                                value: 1,
                            },
                            dragCoefficient: {
                                type: "static",
                                value: {
                                    x: 100,
                                    y: 100,
                                },
                            },
                        },
                    }),
            ],
        });
    },
    e_ = (e) => {
        var { selected: t } = e,
            n = eh(e, ["selected"]);
        let i = (0, u.JA)("activity");
        return (0, r.jsx)("div", {
            className: ed.friendsButtonContainer,
            children: (0, r.jsx)(
                er.Qj,
                ep(
                    {
                        selected: t,
                        route: ea.Z5c.ME_ACTIVITY,
                        icon: g.g8d,
                        text: ec.intl.string(ec.t.IC5Ann),
                    },
                    n,
                    i,
                ),
            ),
        });
    },
    eb = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = eh(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, u.JA)("library");
        return (0, r.jsx)(
            er.Qj,
            ef(
                ep(
                    {
                        selected: t,
                        route: ea.Z5c.APPLICATION_LIBRARY,
                        icon: g.vqy,
                        text: ec.intl.string(ec.t.cw57ar),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(el.Z, {
                        className: a()(ed.downloadProgressCircle, { [ed.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    eE = () =>
        (0, r.jsx)("li", {
            className: ed.createDMButtonContainer,
            children: (0, r.jsx)(j.l, {
                fullWidth: !0,
                text: ec.intl.string(ec.t["6Urw1t"]),
                icon: g.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    eO = () => {
        let e = (0, A.q)();
        return e > 0 ? (0, r.jsx)(g.mAB, { count: e }) : null;
    },
    eI = (e) => {
        let { selected: t } = e,
            n = (0, u.JA)("messageRequests"),
            { channelId: i } = (0, x._)();
        if (!(0, Z.a)()) return null;
        let l = null == i ? void 0 : () => _.Z.preload(ea.ME, i);
        return (0, r.jsx)(
            er.Qj,
            ef(
                ep(
                    {
                        selected: t,
                        route: ea.Z5c.MESSAGE_REQUESTS,
                        icon: g._XJ,
                        text: ec.intl.string(ec.t.e7GWjQ),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(eO, {}) },
            ),
        );
    },
    ev = (e) => {
        let { selected: t } = e,
            n = ec.intl.string(eu.default.Rkdixs),
            l = (0, u.JA)("family-center"),
            [a, s] = i.useState(!0);
        return (0, r.jsx)(
            er.Qj,
            ef(
                ep(
                    {
                        selected: t,
                        route: ea.Z5c.FAMILY_CENTER,
                        icon: g.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            s(!0);
                        },
                        onMouseLeave: () => {
                            s(!1);
                        },
                        interactiveClassName: ed.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(ey, { isParentHovered: a }) },
            ),
        );
    },
    ey = (e) => {
        let { isParentHovered: t } = e,
            i = (0, L.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: ed.familyCenterButtonContainer,
                  children: (0, r.jsx)(er.bU, {
                      onClick: () => {
                          (0, h.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, ep({}, t));
                          });
                      },
                      "aria-label": ec.intl.string(ec.t.cpT0Cq),
                      icon: g.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(ed.familyCenterButtonContainer, ed.withPadding),
                    children: (0, r.jsx)(g.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: ed.familyCenterButtonContainer,
                    children: (0, r.jsx)(S.ZP, {
                        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === f.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: ec.intl.string(ec.t.y2b7CA),
                                      color: y.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eC = () =>
        (0, r.jsxs)("div", {
            className: ed.directMessagesHeader,
            children: [
                (0, r.jsx)(g.Text, {
                    variant: "text-md/semibold",
                    children: ec.intl.string(ec.t.YUU0RF),
                }),
                (0, r.jsx)("div", {
                    className: ed.directMessagesButton,
                    children: (0, r.jsx)(j.Z, {
                        tooltip: ec.intl.string(ec.t["6Urw1t"]),
                        location: "DirectMessagesHeader-CreateDMButton",
                    }),
                }),
            ],
        }),
    eS = () => (0, Y.$Z)("DM_SEARCH");
function eT(e) {
    switch (e) {
        case ea.Z5c.APPLICATION_LIBRARY:
            return ea.ZY5.LIBRARY;
        case ea.Z5c.FRIENDS:
            return ea.ZY5.FRIENDS_LIST;
        case ea.Z5c.COLLECTIBLES_SHOP:
            return ea.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(ea.Z5c.APPLICATION_STORE)
        ? e === ea.Z5c.APPLICATION_STORE
            ? ea.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(ea.Z5c.APPLICATION_STORE)
              ? ea.ZY5.STORE_DIRECTORY_BROWSE
              : ea.ZY5.STORE_LISTING
        : ea.ZY5.DM_CHANNEL;
}
let eN = i.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
            premiumTabSelected: s,
            shouldShowNitroTab: o,
            isReferralProgramPopoverShowable: c,
            shouldShowMessageRequestsRow: u,
            shouldShowFamilyCenterRow: p,
            createDMButtonVariant: f,
            selectedChannelId: h,
            path: g,
            onlyShowDMs: _,
            hideAllDMs: b,
        } = e,
        E = i.useRef(null),
        O = i.useRef(null),
        I = i.useRef(null),
        y = i.useRef(null),
        S = D.o.useConfig({ location: "privatechannels" }).friendsTab,
        N = (0, P.b5)("PrivateChannels");
    return (0, r.jsxs)("nav", {
        className: ed.privateChannels,
        "aria-label": ec.intl.string(ec.t.ZH9aP4),
        children: [
            _
                ? (0, r.jsx)(eC, {})
                : (0, r.jsx)(W.Z, {
                      childRef: E,
                      tutorialId: "direct-messages",
                      position: "right",
                      offsetX: -52,
                      children: (0, r.jsx)("div", {
                          ref: E,
                          className: a()(ed.searchBar, { [ed.themedHeaderMobile]: d.tq }),
                          children: (0, r.jsx)(m.zx, {
                              grow: !0,
                              color: m.zx.Colors.PRIMARY,
                              size: m.zx.Sizes.SMALL,
                              fullWidth: !0,
                              onClick: eS,
                              children: (0, r.jsx)(C.Z, { children: ec.intl.string(ec.t.LzcpeZ) }),
                          }),
                      }),
                  }),
            (0, r.jsxs)(
                ei.Z,
                ef(ep({}, e), {
                    version: g,
                    selectedChannelId: h,
                    showDMHeader: !b && !_,
                    hideAllDMs: b,
                    listScrollerRef: I,
                    createDMCTAButtonVariant: f,
                    children: [
                        S && !_
                            ? (0, r.jsx)(
                                  e_,
                                  { selected: null != g ? g === ea.Z5c.ME_ACTIVITY : l === ea.Z5c.ME_ACTIVITY },
                                  "activity_experimental",
                              )
                            : null,
                        _
                            ? null
                            : (0, r.jsx)(
                                  eg,
                                  { selected: null != g ? g === ea.Z5c.FRIENDS : l === ea.Z5c.FRIENDS },
                                  "friends",
                              ),
                        !_ && N
                            ? (0, r.jsx)(em, { selected: null != g ? g === ea.Z5c.ICYMI : l === ea.Z5c.ICYMI }, "icymi")
                            : null,
                        n && t && !_
                            ? (0, r.jsx)(
                                  eb,
                                  {
                                      selected:
                                          null == g
                                              ? null != l && l.startsWith(ea.Z5c.APPLICATION_LIBRARY)
                                              : g.startsWith(ea.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === ea.Z5c.APPLICATION_LIBRARY,
                                  },
                                  "library",
                              )
                            : null,
                        u && !_
                            ? (0, r.jsx)(
                                  eI,
                                  {
                                      selected:
                                          null == g
                                              ? null != l && l.startsWith(ea.Z5c.MESSAGE_REQUESTS)
                                              : g === ea.Z5c.MESSAGE_REQUESTS,
                                  },
                                  "message-requests",
                              )
                            : null,
                        o && !_
                            ? (0, r.jsxs)(
                                  i.Fragment,
                                  {
                                      children: [
                                          (0, r.jsx)(H.g, {
                                              nitroTabButtonRef: y,
                                              selected: null == g ? s : g.startsWith(ea.Z5c.APPLICATION_STORE),
                                              route: ea.Z5c.APPLICATION_STORE,
                                              locationState: {
                                                  analyticsSource: {
                                                      page: eT(l),
                                                      section: ea.jXE.NAVIGATION,
                                                      object: ea.qAy.NAVIGATION_LINK,
                                                  },
                                              },
                                          }),
                                          c && (0, r.jsx)(B.F, { targetElementRef: y }),
                                      ],
                                  },
                                  "nitro-tab-group",
                              )
                            : null,
                        _
                            ? null
                            : (0, r.jsx)(
                                  v.i,
                                  {
                                      selected:
                                          g === ea.Z5c.COLLECTIBLES_SHOP ||
                                          (null == l ? void 0 : l.startsWith(ea.Z5c.COLLECTIBLES_SHOP)),
                                      listItemRef: O,
                                      locationState: {
                                          analyticsSource: {
                                              page: eT(l),
                                              section: ea.jXE.NAVIGATION,
                                              object: ea.qAy.NAVIGATION_LINK,
                                          },
                                      },
                                  },
                                  "discord-shop",
                              ),
                        p && !_
                            ? (0, r.jsx)(
                                  ev,
                                  {
                                      selected:
                                          (null != l && l.startsWith(ea.Z5c.FAMILY_CENTER)) ||
                                          (null != g && g.startsWith(ea.Z5c.FAMILY_CENTER)),
                                  },
                                  "family-center",
                              )
                            : null,
                        _
                            ? null
                            : (0, r.jsx)(
                                  F.Z,
                                  {
                                      selected:
                                          null == g
                                              ? null != l && l.startsWith(ea.Z5c.QUEST_HOME_V2)
                                              : g === ea.Z5c.QUEST_HOME_V2,
                                  },
                                  "quests",
                              ),
                        _ || b ? null : (0, r.jsx)(ej, {}, "section-divider-top"),
                        b ? null : (0, r.jsx)(T.Z, {}, "frequent-friends"),
                        "full-width" !== f || b || _ ? null : (0, r.jsx)(eE, {}, "create-dm"),
                    ],
                }),
            ),
        ],
    });
});
function ej() {
    return (0, r.jsx)("div", { className: ed.sectionDivider });
}
function eP() {
    let e = (0, p.e7)([$.Z], () => $.Z.getHomeLink()),
        t = (0, p.e7)([X.Z], () => {
            if (e === ea.Z5c.APPLICATION_STORE) return !0;
            let t = (0, en.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = X.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !K.bm.useSetting(),
        { theme: i } = (0, p.cj)([q.Z], () => ({ theme: q.Z.theme })),
        l = (0, p.e7)([Q.Z], () => Q.Z.hasLibraryApplication()),
        a = (0, p.e7)([J.Z], () => J.Z.getCurrentPath()),
        [c, u] = (0, z.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        d = (0, H.i)({ selected: null == u ? t : u.startsWith(ea.Z5c.APPLICATION_STORE) }),
        f = (0, G.eW)(),
        h = (0, Z.a)(),
        m = (function () {
            let e = K.Ex.useSetting(),
                t = (0, w.Z)();
            return !0 === e && !0 === t;
        })(),
        g = (0, N.U)("PrivateChannels", { autoTrackExposure: !0 }),
        { pathname: _ } = (0, s.TH)(),
        b = _.startsWith(ea.Z5c.CHANNEL(ea.ME)) && _ !== ea.Z5c.CHANNEL(ea.ME) && _ !== ea.Z5c.ME_ACTIVITY,
        E = D.o.useConfig({ location: "privatechannels" }).dmsTab;
    return (0, r.jsx)(eN, {
        theme: i,
        showLibrary: n,
        hasLibraryApplication: l,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        shouldShowNitroTab: d,
        isReferralProgramPopoverShowable: f,
        shouldShowMessageRequestsRow: h,
        shouldShowFamilyCenterRow: m,
        createDMButtonVariant: g,
        selectedChannelId: c,
        path: u,
        onlyShowDMs: b && E,
        hideAllDMs: !b && E,
    });
}
