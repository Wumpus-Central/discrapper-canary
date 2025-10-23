n.d(t, {
    Z: () => eA,
    d: () => ex,
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
    y = n(463119),
    v = n(377171),
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
    H = n(138176),
    B = n(457396),
    V = n(108989),
    F = n(937797),
    Y = n(362870),
    z = n(51596),
    W = n(905423),
    q = n(155409),
    K = n(210887),
    Q = n(695346),
    J = n(283595),
    X = n(923834),
    $ = n(55563),
    ee = n(774343),
    et = n(974042),
    en = n(626135),
    er = n(814225),
    ei = n(515753),
    el = n(831218),
    ea = n(339149),
    es = n(981631),
    eo = n(675654),
    ec = n(474936),
    eu = n(46140),
    ed = n(388032),
    ep = n(660886),
    ef = n(686918);
function eh(e) {
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
function em(e, t) {
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
function eg(e, t) {
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
let e_ = (e) => {
        var { selected: t } = e,
            n = eg(e, ["selected"]);
        let i = (0, P.b5)("PrivateChannels.ICYMIButton"),
            l = (0, u.JA)("icymi");
        return i
            ? (0, r.jsx)("div", {
                  className: ef.friendsButtonContainer,
                  children: (0, r.jsx)(
                      ei.Qj,
                      eh(
                          {
                              selected: t,
                              route: es.Z5c.ICYMI,
                              icon: g.qOE,
                              text: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      ed.intl.string(ed.t["jnXV/V"]),
                                      (0, r.jsx)("span", {
                                          className: ef.preAlphaText,
                                          children: ed.intl.string(ed.t.Ac2OZA),
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
    eb = (e) => {
        var { selected: t } = e,
            n = eg(e, ["selected"]);
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
                    properties: { gift_intent_type: ec.hX.FRIEND_ANNIVERSARY },
                });
        }, [f]);
        let [h, m] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: ef.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    ei.Qj,
                    em(
                        eh(
                            {
                                onClick: () => {
                                    let e;
                                    f
                                        ? (en.default.track(es.rMx.GIFT_INTENT_BADGE_CLICKED, {
                                              gift_intent_type: ec.hX.FRIEND_ANNIVERSARY,
                                          }),
                                          (e = es.pJs.ALL),
                                          b.Z.setSection(es.pJs.ALL),
                                          (0, k.Gk)())
                                        : (e = et.ZP.getState().section),
                                        (0, O.Z)({ tab_opened: e });
                                },
                                interactiveClassName: f ? ef.friendsBadge : void 0,
                                selected: t,
                                route: es.Z5c.FRIENDS,
                                icon: g.iFz,
                                text: ed.intl.string(ed.t.TdEu5X),
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
                        className: ef.confetti,
                        wind: 0,
                        sprites: eo.CA,
                        spriteColors: eo.Br,
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
    eE = (e) => {
        var { selected: t } = e,
            n = eg(e, ["selected"]);
        let i = (0, u.JA)("activity");
        return (0, r.jsx)("div", {
            className: ef.friendsButtonContainer,
            children: (0, r.jsx)(
                ei.Qj,
                eh(
                    {
                        selected: t,
                        route: es.Z5c.ME_ACTIVITY,
                        icon: g.g8d,
                        text: ed.intl.string(ed.t.IC5Ann),
                    },
                    n,
                    i,
                ),
            ),
        });
    },
    eO = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = eg(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, u.JA)("library");
        return (0, r.jsx)(
            ei.Qj,
            em(
                eh(
                    {
                        selected: t,
                        route: es.Z5c.APPLICATION_LIBRARY,
                        icon: g.vqy,
                        text: ed.intl.string(ed.t.cw57ar),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(ea.Z, {
                        className: a()(ef.downloadProgressCircle, { [ef.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    eI = () =>
        (0, r.jsx)("li", {
            className: ef.createDMButtonContainer,
            children: (0, r.jsx)(j.l, {
                fullWidth: !0,
                text: ed.intl.string(ed.t["6Urw1t"]),
                icon: g.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    ey = () => {
        let e = (0, A.q)();
        return e > 0 ? (0, r.jsx)(g.mAB, { count: e }) : null;
    },
    ev = (e) => {
        let { selected: t } = e,
            n = (0, u.JA)("messageRequests"),
            { channelId: i } = (0, x._)();
        if (!(0, Z.a)()) return null;
        let l = null == i ? void 0 : () => _.Z.preload(es.ME, i);
        return (0, r.jsx)(
            ei.Qj,
            em(
                eh(
                    {
                        selected: t,
                        route: es.Z5c.MESSAGE_REQUESTS,
                        icon: g._XJ,
                        text: ed.intl.string(ed.t.e7GWjQ),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(ey, {}) },
            ),
        );
    },
    eC = (e) => {
        let { selected: t } = e,
            n = ed.intl.string(ep.default.Rkdixs),
            l = (0, u.JA)("family-center"),
            [a, s] = i.useState(!0);
        return (0, r.jsx)(
            ei.Qj,
            em(
                eh(
                    {
                        selected: t,
                        route: es.Z5c.FAMILY_CENTER,
                        icon: g.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            s(!0);
                        },
                        onMouseLeave: () => {
                            s(!1);
                        },
                        interactiveClassName: ef.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(eS, { isParentHovered: a }) },
            ),
        );
    },
    eS = (e) => {
        let { isParentHovered: t } = e,
            i = (0, L.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: ef.familyCenterButtonContainer,
                  children: (0, r.jsx)(ei.bU, {
                      onClick: () => {
                          (0, h.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, eh({}, t));
                          });
                      },
                      "aria-label": ed.intl.string(ed.t.cpT0Cq),
                      icon: g.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(ef.familyCenterButtonContainer, ef.withPadding),
                    children: (0, r.jsx)(g.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: ef.familyCenterButtonContainer,
                    children: (0, r.jsx)(S.ZP, {
                        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === f.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: ed.intl.string(ed.t.y2b7CA),
                                      color: v.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eT = () =>
        (0, r.jsxs)("div", {
            className: ef.directMessagesHeader,
            children: [
                (0, r.jsx)(g.Text, {
                    variant: "text-md/semibold",
                    children: ed.intl.string(ed.t.YUU0RF),
                }),
                (0, r.jsx)("div", {
                    className: ef.directMessagesButton,
                    children: (0, r.jsx)(j.Z, {
                        tooltip: ed.intl.string(ed.t["6Urw1t"]),
                        location: "DirectMessagesHeader-CreateDMButton",
                    }),
                }),
            ],
        }),
    eN = () => (0, z.$Z)("DM_SEARCH");
function ej(e) {
    switch (e) {
        case es.Z5c.APPLICATION_LIBRARY:
            return es.ZY5.LIBRARY;
        case es.Z5c.FRIENDS:
            return es.ZY5.FRIENDS_LIST;
        case es.Z5c.COLLECTIBLES_SHOP:
            return es.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(es.Z5c.APPLICATION_STORE)
        ? e === es.Z5c.APPLICATION_STORE
            ? es.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(es.Z5c.APPLICATION_STORE)
              ? es.ZY5.STORE_DIRECTORY_BROWSE
              : es.ZY5.STORE_LISTING
        : es.ZY5.DM_CHANNEL;
}
let eP = i.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
            premiumTabSelected: s,
            shouldShowNitroTab: o,
            isReferralProgramPopoverShowable: c,
            shouldShowMessageRequestsRow: u,
            shouldShowFamilyCenterRow: p,
            shouldShowQuestsEntrypointRow: f,
            createDMButtonVariant: h,
            selectedChannelId: g,
            path: _,
            onlyShowDMs: b,
            hideAllDMs: E,
        } = e,
        O = i.useRef(null),
        I = i.useRef(null),
        v = i.useRef(null),
        S = i.useRef(null),
        N = D.o.useConfig({ location: "privatechannels" }).friendsTab,
        j = (0, P.b5)("PrivateChannels");
    return (0, r.jsxs)("nav", {
        className: ef.privateChannels,
        "aria-label": ed.intl.string(ed.t.ZH9aP4),
        children: [
            b
                ? (0, r.jsx)(eT, {})
                : (0, r.jsx)(q.Z, {
                      childRef: O,
                      tutorialId: "direct-messages",
                      position: "right",
                      offsetX: -52,
                      children: (0, r.jsx)("div", {
                          ref: O,
                          className: a()(ef.searchBar, { [ef.themedHeaderMobile]: d.tq }),
                          children: (0, r.jsx)(m.zx, {
                              grow: !0,
                              color: m.zx.Colors.PRIMARY,
                              size: m.zx.Sizes.SMALL,
                              fullWidth: !0,
                              onClick: eN,
                              children: (0, r.jsx)(C.Z, { children: ed.intl.string(ed.t.LzcpeZ) }),
                          }),
                      }),
                  }),
            (0, r.jsxs)(
                el.Z,
                em(eh({}, e), {
                    version: _,
                    selectedChannelId: g,
                    showDMHeader: !E && !b,
                    hideAllDMs: E,
                    listScrollerRef: v,
                    createDMCTAButtonVariant: h,
                    children: [
                        N && !b
                            ? (0, r.jsx)(
                                  eE,
                                  { selected: null != _ ? _ === es.Z5c.ME_ACTIVITY : l === es.Z5c.ME_ACTIVITY },
                                  "activity_experimental",
                              )
                            : null,
                        b
                            ? null
                            : (0, r.jsx)(
                                  eb,
                                  { selected: null != _ ? _ === es.Z5c.FRIENDS : l === es.Z5c.FRIENDS },
                                  "friends",
                              ),
                        !b && j
                            ? (0, r.jsx)(e_, { selected: null != _ ? _ === es.Z5c.ICYMI : l === es.Z5c.ICYMI }, "icymi")
                            : null,
                        n && t && !b
                            ? (0, r.jsx)(
                                  eO,
                                  {
                                      selected:
                                          null == _
                                              ? null != l && l.startsWith(es.Z5c.APPLICATION_LIBRARY)
                                              : _.startsWith(es.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === es.Z5c.APPLICATION_LIBRARY,
                                  },
                                  "library",
                              )
                            : null,
                        u && !b
                            ? (0, r.jsx)(
                                  ev,
                                  {
                                      selected:
                                          null == _
                                              ? null != l && l.startsWith(es.Z5c.MESSAGE_REQUESTS)
                                              : _ === es.Z5c.MESSAGE_REQUESTS,
                                  },
                                  "message-requests",
                              )
                            : null,
                        o && !b
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(
                                          B.g,
                                          {
                                              nitroTabButtonRef: S,
                                              selected: null == _ ? s : _.startsWith(es.Z5c.APPLICATION_STORE),
                                              route: es.Z5c.APPLICATION_STORE,
                                              locationState: {
                                                  analyticsSource: {
                                                      page: ej(l),
                                                      section: es.jXE.NAVIGATION,
                                                      object: es.qAy.NAVIGATION_LINK,
                                                  },
                                              },
                                          },
                                          "premium",
                                      ),
                                      c && (0, r.jsx)(H.F, { targetElementRef: S }),
                                  ],
                              })
                            : null,
                        b
                            ? null
                            : (0, r.jsx)(
                                  y.i,
                                  {
                                      selected:
                                          _ === es.Z5c.COLLECTIBLES_SHOP ||
                                          (null == l ? void 0 : l.startsWith(es.Z5c.COLLECTIBLES_SHOP)),
                                      listItemRef: I,
                                      locationState: {
                                          analyticsSource: {
                                              page: ej(l),
                                              section: es.jXE.NAVIGATION,
                                              object: es.qAy.NAVIGATION_LINK,
                                          },
                                      },
                                  },
                                  "discord-shop",
                              ),
                        p && !b
                            ? (0, r.jsx)(
                                  eC,
                                  {
                                      selected:
                                          (null != l && l.startsWith(es.Z5c.FAMILY_CENTER)) ||
                                          (null != _ && _.startsWith(es.Z5c.FAMILY_CENTER)),
                                  },
                                  "family-center",
                              )
                            : null,
                        f && !b
                            ? (0, r.jsx)(
                                  Y.Z,
                                  {
                                      selected:
                                          null == _
                                              ? null != l && l.startsWith(es.Z5c.QUEST_HOME_V2)
                                              : _ === es.Z5c.QUEST_HOME_V2,
                                  },
                                  "quests",
                              )
                            : null,
                        b || E ? null : (0, r.jsx)(ex, {}, "section-divider-top"),
                        E ? null : (0, r.jsx)(T.Z, {}, "frequent-friends"),
                        "full-width" !== h || E || b ? null : (0, r.jsx)(eI, {}, "create-dm"),
                    ],
                }),
            ),
        ],
    });
});
function ex() {
    return (0, r.jsx)("div", { className: ef.sectionDivider });
}
function eA() {
    let e = (0, p.e7)([ee.Z], () => ee.Z.getHomeLink()),
        t = (0, p.e7)([$.Z], () => {
            if (e === es.Z5c.APPLICATION_STORE) return !0;
            let t = (0, er.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = $.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !Q.bm.useSetting(),
        { theme: i } = (0, p.cj)([K.Z], () => ({ theme: K.Z.theme })),
        l = (0, p.e7)([J.Z], () => J.Z.hasLibraryApplication()),
        a = (0, p.e7)([X.Z], () => X.Z.getCurrentPath()),
        [c, u] = (0, W.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        d = (0, B.i)({ selected: null == u ? t : u.startsWith(es.Z5c.APPLICATION_STORE) }),
        f = (0, G.eW)(),
        h = (0, Z.a)(),
        m = (function () {
            let e = Q.Ex.useSetting(),
                t = (0, w.Z)();
            return !0 === e && !0 === t;
        })(),
        g = (0, N.U)("PrivateChannels", { autoTrackExposure: !0 }),
        { enabled: _ } = F.m8.useConfig({ location: eu.dr.PRIVATE_CHANNELS_LIST }),
        { pathname: b } = (0, s.TH)(),
        E = b.startsWith(es.Z5c.CHANNEL(es.ME)) && b !== es.Z5c.CHANNEL(es.ME) && b !== es.Z5c.ME_ACTIVITY,
        O = D.o.useConfig({ location: "privatechannels" }).dmsTab;
    return (0, r.jsx)(eP, {
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
        shouldShowQuestsEntrypointRow: _,
        createDMButtonVariant: g,
        selectedChannelId: c,
        path: u,
        onlyShowDMs: E && O,
        hideAllDMs: !E && O,
    });
}
