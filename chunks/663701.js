n.d(t, {
    Z: () => ej,
    d: () => eP,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(843611),
    s = n(574583),
    c = n(990547),
    u = n(91192),
    d = n(873546),
    p = n(442837),
    f = n(704215),
    h = n(952265),
    g = n(755721),
    m = n(481060),
    b = n(493683),
    _ = n(529103),
    E = n(607070),
    O = n(557968),
    v = n(213609),
    y = n(463119),
    I = n(377171),
    C = n(111028),
    S = n(243778),
    N = n(702456),
    T = n(882579),
    P = n(518311),
    j = n(488634),
    x = n(899740),
    A = n(28476),
    Z = n(880257),
    w = n(631885),
    L = n(365113),
    R = n(849862),
    D = n(522558),
    M = n(795448),
    k = n(441623),
    U = n(93237),
    G = n(138176),
    B = n(457396),
    H = n(108989),
    V = n(937797),
    F = n(362870),
    z = n(51596),
    W = n(905423),
    Y = n(155409),
    q = n(210887),
    K = n(695346),
    Q = n(283595),
    X = n(923834),
    J = n(55563),
    $ = n(774343),
    ee = n(974042),
    et = n(626135),
    en = n(814225),
    er = n(515753),
    ei = n(831218),
    el = n(339149),
    ea = n(981631),
    eo = n(675654),
    es = n(474936),
    ec = n(46140),
    eu = n(388032),
    ed = n(345909),
    ep = n(686918);
function ef(e) {
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
function eh(e, t) {
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
let em = (e) => {
        var { selected: t } = e,
            n = eg(e, ["selected"]);
        let l = (0, u.JA)("friends"),
            a = (0, R.If)(),
            o = (0, p.e7)([k.Z], () => k.Z.canShowFriendsTabBadge()),
            s = (0, p.e7)([E.Z], () => E.Z.useReducedMotion),
            { enabled: d } = D.w.useExperiment({ location: "Friends Tab" }, { autoTrackExposure: !1 }),
            f = o && d;
        i.useEffect(() => {
            f &&
                (0, v.h)({
                    name: c.ImpressionNames.GIFT_INTENT_BADGE,
                    type: c.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: es.hX.FRIEND_ANNIVERSARY },
                });
        }, [f]);
        let [h, g] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: ep.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    er.Qj,
                    eh(
                        ef(
                            {
                                onClick: () => {
                                    let e;
                                    f
                                        ? (et.default.track(ea.rMx.GIFT_INTENT_BADGE_CLICKED, {
                                              gift_intent_type: es.hX.FRIEND_ANNIVERSARY,
                                          }),
                                          (e = ea.pJs.ALL),
                                          _.Z.setSection(ea.pJs.ALL),
                                          (0, M.Gk)())
                                        : (e = ee.ZP.getState().section),
                                        (0, O.Z)({ tab_opened: e });
                                },
                                interactiveClassName: f ? ep.friendsBadge : void 0,
                                selected: t,
                                route: ea.Z5c.FRIENDS,
                                icon: m.iFz,
                                text: eu.intl.string(eu.t.TdEu5e),
                                onMouseEnter: () => {
                                    g(!0);
                                },
                                onMouseLeave: () => {
                                    g(!1);
                                },
                            },
                            n,
                            l,
                        ),
                        { children: a > 0 ? (0, r.jsx)(m.mAB, { count: a }) : null },
                    ),
                ),
                f &&
                    !s &&
                    (0, r.jsx)(H.Z, {
                        className: ep.confetti,
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
    eb = (e) => {
        var { selected: t } = e,
            n = eg(e, ["selected"]);
        let i = (0, u.JA)("activity");
        return (0, r.jsx)("div", {
            className: ep.friendsButtonContainer,
            children: (0, r.jsx)(
                er.Qj,
                ef(
                    {
                        selected: t,
                        route: ea.Z5c.ME_ACTIVITY,
                        icon: m.g8d,
                        text: eu.intl.string(eu.t.IC5Anp),
                    },
                    n,
                    i,
                ),
            ),
        });
    },
    e_ = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = eg(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, u.JA)("library");
        return (0, r.jsx)(
            er.Qj,
            eh(
                ef(
                    {
                        selected: t,
                        route: ea.Z5c.APPLICATION_LIBRARY,
                        icon: m.vqy,
                        text: eu.intl.string(eu.t.cw57am),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(el.Z, {
                        className: a()(ep.downloadProgressCircle, { [ep.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    eE = () =>
        (0, r.jsx)("li", {
            className: ep.createDMButtonContainer,
            children: (0, r.jsx)(P.l, {
                fullWidth: !0,
                text: eu.intl.string(eu.t["6Urw1t"]),
                icon: m.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    eO = () => {
        let e = (0, x.q)();
        return e > 0 ? (0, r.jsx)(m.mAB, { count: e }) : null;
    },
    ev = (e) => {
        let { selected: t } = e,
            n = (0, u.JA)("messageRequests"),
            { channelId: i } = (0, j._)();
        if (!(0, A.a)()) return null;
        let l = null == i ? void 0 : () => b.Z.preload(ea.ME, i);
        return (0, r.jsx)(
            er.Qj,
            eh(
                ef(
                    {
                        selected: t,
                        route: ea.Z5c.MESSAGE_REQUESTS,
                        icon: m._XJ,
                        text: eu.intl.string(eu.t.e7GWjY),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(eO, {}) },
            ),
        );
    },
    ey = (e) => {
        let { selected: t } = e,
            n = eu.intl.string(ed.default.Rkdixs),
            l = (0, u.JA)("family-center"),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            er.Qj,
            eh(
                ef(
                    {
                        selected: t,
                        route: ea.Z5c.FAMILY_CENTER,
                        icon: m.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            o(!0);
                        },
                        onMouseLeave: () => {
                            o(!1);
                        },
                        interactiveClassName: ep.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(eI, { isParentHovered: a }) },
            ),
        );
    },
    eI = (e) => {
        let { isParentHovered: t } = e,
            i = (0, w.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: ep.familyCenterButtonContainer,
                  children: (0, r.jsx)(er.bU, {
                      onClick: () => {
                          (0, h.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, ef({}, t));
                          });
                      },
                      "aria-label": eu.intl.string(eu.t.cpT0Cg),
                      icon: m.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(ep.familyCenterButtonContainer, ep.withPadding),
                    children: (0, r.jsx)(m.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: ep.familyCenterButtonContainer,
                    children: (0, r.jsx)(S.ZP, {
                        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === f.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(m.IGR, {
                                      text: eu.intl.string(eu.t.y2b7CA),
                                      color: I.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eC = () =>
        (0, r.jsxs)("div", {
            className: ep.directMessagesHeader,
            children: [
                (0, r.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    children: eu.intl.string(eu.t.YUU0RE),
                }),
                (0, r.jsx)("div", {
                    className: ep.directMessagesButton,
                    children: (0, r.jsx)(P.Z, {
                        tooltip: eu.intl.string(eu.t["6Urw1t"]),
                        location: "DirectMessagesHeader-CreateDMButton",
                    }),
                }),
            ],
        }),
    eS = () => (0, z.$Z)("DM_SEARCH");
function eN(e) {
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
let eT = i.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
            premiumTabSelected: o,
            shouldShowNitroTab: s,
            isReferralProgramPopoverShowable: c,
            shouldShowMessageRequestsRow: u,
            shouldShowFamilyCenterRow: p,
            shouldShowQuestsEntrypointRow: f,
            createDMButtonVariant: h,
            selectedChannelId: m,
            path: b,
            onlyShowDMs: _,
            hideAllDMs: E,
        } = e,
        O = i.useRef(null),
        v = i.useRef(null),
        I = i.useRef(null),
        S = i.useRef(null),
        T = L.o.useConfig({ location: "privatechannels" }).friendsTab;
    return (0, r.jsxs)("nav", {
        className: ep.privateChannels,
        "aria-label": eu.intl.string(eu.t.ZH9aPz),
        children: [
            _
                ? (0, r.jsx)(eC, {})
                : (0, r.jsx)(Y.Z, {
                      childRef: O,
                      tutorialId: "direct-messages",
                      position: "right",
                      offsetX: -52,
                      children: (0, r.jsx)("div", {
                          ref: O,
                          className: a()(ep.searchBar, { [ep.themedHeaderMobile]: d.tq }),
                          children: (0, r.jsx)(g.zx, {
                              grow: !0,
                              color: g.zx.Colors.PRIMARY,
                              size: g.zx.Sizes.SMALL,
                              fullWidth: !0,
                              onClick: eS,
                              children: (0, r.jsx)(C.Z, { children: eu.intl.string(eu.t.LzcpeX) }),
                          }),
                      }),
                  }),
            (0, r.jsxs)(
                ei.Z,
                eh(ef({}, e), {
                    version: b,
                    selectedChannelId: m,
                    showDMHeader: !E && !_,
                    hideAllDMs: E,
                    listScrollerRef: I,
                    createDMCTAButtonVariant: h,
                    children: [
                        T && !_
                            ? (0, r.jsx)(
                                  eb,
                                  { selected: null != b ? b === ea.Z5c.ME_ACTIVITY : l === ea.Z5c.ME_ACTIVITY },
                                  "activity_experimental",
                              )
                            : null,
                        _
                            ? null
                            : (0, r.jsx)(
                                  em,
                                  { selected: null != b ? b === ea.Z5c.FRIENDS : l === ea.Z5c.FRIENDS },
                                  "friends",
                              ),
                        n && t && !_
                            ? (0, r.jsx)(
                                  e_,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(ea.Z5c.APPLICATION_LIBRARY)
                                              : b.startsWith(ea.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === ea.Z5c.APPLICATION_LIBRARY,
                                  },
                                  "library",
                              )
                            : null,
                        u && !_
                            ? (0, r.jsx)(
                                  ev,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(ea.Z5c.MESSAGE_REQUESTS)
                                              : b === ea.Z5c.MESSAGE_REQUESTS,
                                  },
                                  "message-requests",
                              )
                            : null,
                        s && !_
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(
                                          B.g,
                                          {
                                              nitroTabButtonRef: S,
                                              selected: null == b ? o : b.startsWith(ea.Z5c.APPLICATION_STORE),
                                              route: ea.Z5c.APPLICATION_STORE,
                                              locationState: {
                                                  analyticsSource: {
                                                      page: eN(l),
                                                      section: ea.jXE.NAVIGATION,
                                                      object: ea.qAy.NAVIGATION_LINK,
                                                  },
                                              },
                                          },
                                          "premium",
                                      ),
                                      c && (0, r.jsx)(G.F, { targetElementRef: S }),
                                  ],
                              })
                            : null,
                        _
                            ? null
                            : (0, r.jsx)(
                                  y.i,
                                  {
                                      selected:
                                          b === ea.Z5c.COLLECTIBLES_SHOP ||
                                          (null == l ? void 0 : l.startsWith(ea.Z5c.COLLECTIBLES_SHOP)),
                                      listItemRef: v,
                                      locationState: {
                                          analyticsSource: {
                                              page: eN(l),
                                              section: ea.jXE.NAVIGATION,
                                              object: ea.qAy.NAVIGATION_LINK,
                                          },
                                      },
                                  },
                                  "discord-shop",
                              ),
                        p && !_
                            ? (0, r.jsx)(
                                  ey,
                                  {
                                      selected:
                                          (null != l && l.startsWith(ea.Z5c.FAMILY_CENTER)) ||
                                          (null != b && b.startsWith(ea.Z5c.FAMILY_CENTER)),
                                  },
                                  "family-center",
                              )
                            : null,
                        f && !_
                            ? (0, r.jsx)(
                                  F.Z,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(ea.Z5c.QUEST_HOME_V2)
                                              : b === ea.Z5c.QUEST_HOME_V2,
                                  },
                                  "quests",
                              )
                            : null,
                        _ || E ? null : (0, r.jsx)(eP, {}, "section-divider-top"),
                        E ? null : (0, r.jsx)(N.Z, {}, "frequent-friends"),
                        "full-width" !== h || E || _ ? null : (0, r.jsx)(eE, {}, "create-dm"),
                    ],
                }),
            ),
        ],
    });
});
function eP() {
    return (0, r.jsx)("div", { className: ep.sectionDivider });
}
function ej() {
    let e = (0, p.e7)([$.Z], () => $.Z.getHomeLink()),
        t = (0, p.e7)([J.Z], () => {
            if (e === ea.Z5c.APPLICATION_STORE) return !0;
            let t = (0, en.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = J.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !K.bm.useSetting(),
        { theme: i } = (0, p.cj)([q.Z], () => ({ theme: q.Z.theme })),
        l = (0, p.e7)([Q.Z], () => Q.Z.hasLibraryApplication()),
        a = (0, p.e7)([X.Z], () => X.Z.getCurrentPath()),
        [c, u] = (0, W.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, s.X),
        d = (0, B.i)({ selected: null == u ? t : u.startsWith(ea.Z5c.APPLICATION_STORE) }),
        f = (0, U.eW)(),
        h = (0, A.a)(),
        g = (function () {
            let e = K.Ex.useSetting(),
                t = (0, Z.Z)();
            return !0 === e && !0 === t;
        })(),
        m = (0, T.U)("PrivateChannels", { autoTrackExposure: !0 }),
        { enabled: b } = V.m8.useConfig({ location: ec.dr.PRIVATE_CHANNELS_LIST }),
        { pathname: _ } = (0, o.TH)(),
        E = _.startsWith(ea.Z5c.CHANNEL(ea.ME)) && _ !== ea.Z5c.CHANNEL(ea.ME) && _ !== ea.Z5c.ME_ACTIVITY,
        O = L.o.useConfig({ location: "privatechannels" }).dmsTab;
    return (0, r.jsx)(eT, {
        theme: i,
        showLibrary: n,
        hasLibraryApplication: l,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        shouldShowNitroTab: d,
        isReferralProgramPopoverShowable: f,
        shouldShowMessageRequestsRow: h,
        shouldShowFamilyCenterRow: g,
        shouldShowQuestsEntrypointRow: b,
        createDMButtonVariant: m,
        selectedChannelId: c,
        path: u,
        onlyShowDMs: E && O,
        hideAllDMs: !E && O,
    });
}
