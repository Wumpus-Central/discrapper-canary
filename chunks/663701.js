n.d(t, {
    Z: () => ew,
    d: () => eZ,
}),
    n(388685),
    n(539854);
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
    S = n(211644),
    T = n(426032),
    N = n(243778),
    j = n(702456),
    P = n(882579),
    x = n(518311),
    A = n(518929),
    Z = n(488634),
    w = n(899740),
    L = n(28476),
    R = n(880257),
    D = n(631885),
    M = n(365113),
    k = n(849862),
    U = n(522558),
    G = n(795448),
    B = n(441623),
    H = n(382834),
    V = n(675957),
    F = n(93237),
    z = n(138176),
    Y = n(457396),
    W = n(108989),
    q = n(362870),
    K = n(51596),
    Q = n(905423),
    J = n(155409),
    X = n(210887),
    $ = n(695346),
    ee = n(283595),
    et = n(923834),
    en = n(55563),
    er = n(774343),
    ei = n(974042),
    el = n(626135),
    ea = n(814225),
    es = n(515753),
    eo = n(831218),
    ec = n(339149),
    eu = n(981631),
    ed = n(675654),
    ep = n(474936),
    ef = n(388032),
    eh = n(602698),
    em = n(686918);
function eg(e) {
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
function e_(e, t) {
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
function eb(e, t) {
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
let eE = (e) => {
        var { selected: t } = e,
            n = eb(e, ["selected"]);
        let i = (0, A.b5)("PrivateChannels.ICYMIButton"),
            l = (0, u.JA)("icymi");
        return i
            ? (0, r.jsx)("div", {
                  className: em.friendsButtonContainer,
                  children: (0, r.jsx)(
                      es.Qj,
                      eg(
                          {
                              selected: t,
                              route: eu.Z5c.ICYMI,
                              icon: g.qOE,
                              text: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      ef.intl.string(ef.t["jnXV/V"]),
                                      (0, r.jsx)("span", {
                                          className: em.preAlphaText,
                                          children: ef.intl.string(ef.t.Ac2OZA),
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
    eO = (e) => {
        var { selected: t } = e,
            n = eb(e, ["selected"]);
        let l = (0, u.JA)("friends"),
            a = (0, k.If)(),
            s = (0, p.e7)([B.Z], () => B.Z.canShowFriendsTabBadge()),
            o = (0, p.e7)([E.Z], () => E.Z.useReducedMotion),
            { enabled: d } = U.w.useExperiment({ location: "Friends Tab" }, { autoTrackExposure: !1 }),
            f = s && d;
        i.useEffect(() => {
            f &&
                (0, I.h)({
                    name: c.ImpressionNames.GIFT_INTENT_BADGE,
                    type: c.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: ep.hX.FRIEND_ANNIVERSARY },
                });
        }, [f]);
        let [h, m] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: em.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    es.Qj,
                    e_(
                        eg(
                            {
                                onClick: () => {
                                    let e;
                                    f
                                        ? (el.default.track(eu.rMx.GIFT_INTENT_BADGE_CLICKED, {
                                              gift_intent_type: ep.hX.FRIEND_ANNIVERSARY,
                                          }),
                                          (e = eu.pJs.ALL),
                                          b.Z.setSection(eu.pJs.ALL),
                                          (0, G.Gk)())
                                        : (e = ei.ZP.getState().section),
                                        (0, O.Z)({ tab_opened: e });
                                },
                                interactiveClassName: f ? em.friendsBadge : void 0,
                                selected: t,
                                route: eu.Z5c.FRIENDS,
                                icon: g.iFz,
                                text: ef.intl.string(ef.t.TdEu5X),
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
                    (0, r.jsx)(W.Z, {
                        className: em.confetti,
                        wind: 0,
                        sprites: ed.CA,
                        spriteColors: ed.Br,
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
    eI = (e) => {
        var { selected: t } = e,
            n = eb(e, ["selected"]);
        let i = (0, u.JA)("activity");
        return (0, r.jsx)("div", {
            className: em.friendsButtonContainer,
            children: (0, r.jsx)(
                es.Qj,
                eg(
                    {
                        selected: t,
                        route: eu.Z5c.ME_ACTIVITY,
                        icon: g.g8d,
                        text: ef.intl.string(ef.t.IC5Ann),
                    },
                    n,
                    i,
                ),
            ),
        });
    },
    ev = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = eb(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, u.JA)("library");
        return (0, r.jsx)(
            es.Qj,
            e_(
                eg(
                    {
                        selected: t,
                        route: eu.Z5c.APPLICATION_LIBRARY,
                        icon: g.vqy,
                        text: ef.intl.string(ef.t.cw57ar),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(ec.Z, {
                        className: a()(em.downloadProgressCircle, { [em.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    ey = () =>
        (0, r.jsx)("li", {
            className: em.createDMButtonContainer,
            children: (0, r.jsx)(x.l, {
                fullWidth: !0,
                text: ef.intl.string(ef.t["6Urw1t"]),
                icon: g.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    eC = () => {
        let e = (0, w.q)();
        return e > 0 ? (0, r.jsx)(g.mAB, { count: e }) : null;
    },
    eS = (e) => {
        let { selected: t } = e,
            n = (0, u.JA)("messageRequests"),
            { channelId: i } = (0, Z._)();
        if (!(0, L.a)()) return null;
        let l = null == i ? void 0 : () => _.Z.preload(eu.ME, i);
        return (0, r.jsx)(
            es.Qj,
            e_(
                eg(
                    {
                        selected: t,
                        route: eu.Z5c.MESSAGE_REQUESTS,
                        icon: g._XJ,
                        text: ef.intl.string(ef.t.e7GWjQ),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(eC, {}) },
            ),
        );
    },
    eT = (e) => {
        let { selected: t } = e,
            n = ef.intl.string(eh.default.Rkdixs),
            l = (0, u.JA)("family-center"),
            [a, s] = i.useState(!0);
        return (0, r.jsx)(
            es.Qj,
            e_(
                eg(
                    {
                        selected: t,
                        route: eu.Z5c.FAMILY_CENTER,
                        icon: g.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            s(!0);
                        },
                        onMouseLeave: () => {
                            s(!1);
                        },
                        interactiveClassName: em.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(eN, { isParentHovered: a }) },
            ),
        );
    },
    eN = (e) => {
        let { isParentHovered: t } = e,
            i = (0, D.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: em.familyCenterButtonContainer,
                  children: (0, r.jsx)(es.bU, {
                      onClick: () => {
                          (0, h.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, eg({}, t));
                          });
                      },
                      "aria-label": ef.intl.string(ef.t.cpT0Cq),
                      icon: g.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(em.familyCenterButtonContainer, em.withPadding),
                    children: (0, r.jsx)(g.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: em.familyCenterButtonContainer,
                    children: (0, r.jsx)(N.ZP, {
                        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === f.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: ef.intl.string(ef.t.y2b7CA),
                                      color: y.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    ej = () =>
        (0, r.jsxs)("div", {
            className: em.directMessagesHeader,
            children: [
                (0, r.jsx)(g.Text, {
                    variant: "text-md/semibold",
                    children: ef.intl.string(ef.t.YUU0RF),
                }),
                (0, r.jsx)("div", {
                    className: em.directMessagesButton,
                    children: (0, r.jsx)(x.Z, {
                        tooltip: ef.intl.string(ef.t["6Urw1t"]),
                        location: "DirectMessagesHeader-CreateDMButton",
                    }),
                }),
            ],
        }),
    eP = () => (0, K.$Z)("DM_SEARCH");
function ex(e) {
    switch (e) {
        case eu.Z5c.APPLICATION_LIBRARY:
            return eu.ZY5.LIBRARY;
        case eu.Z5c.FRIENDS:
            return eu.ZY5.FRIENDS_LIST;
        case eu.Z5c.COLLECTIBLES_SHOP:
            return eu.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(eu.Z5c.APPLICATION_STORE)
        ? e === eu.Z5c.APPLICATION_STORE
            ? eu.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(eu.Z5c.APPLICATION_STORE)
              ? eu.ZY5.STORE_DIRECTORY_BROWSE
              : eu.ZY5.STORE_LISTING
        : eu.ZY5.DM_CHANNEL;
}
let eA = i.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
            premiumTabSelected: s,
            shouldShowNitroTab: o,
            showReferralProgramPopover: c,
            showRecurring3PPopover: u,
            shouldShowMessageRequestsRow: p,
            shouldShowFamilyCenterRow: f,
            createDMButtonVariant: h,
            selectedChannelId: g,
            path: _,
            onlyShowDMs: b,
            hideAllDMs: E,
        } = e,
        O = i.useRef(null),
        I = i.useRef(null),
        y = i.useRef(null),
        S = i.useRef(null),
        T = M.o.useConfig({ location: "privatechannels" }).friendsTab,
        N = (0, A.b5)("PrivateChannels"),
        P = null;
    return (
        c ? (P = (0, r.jsx)(z.F, { targetElementRef: S })) : u && (P = (0, r.jsx)(H.d, { targetElementRef: S })),
        (0, r.jsxs)("nav", {
            className: em.privateChannels,
            "aria-label": ef.intl.string(ef.t.ZH9aP4),
            children: [
                b
                    ? (0, r.jsx)(ej, {})
                    : (0, r.jsx)(J.Z, {
                          childRef: O,
                          tutorialId: "direct-messages",
                          position: "right",
                          offsetX: -52,
                          children: (0, r.jsx)("div", {
                              ref: O,
                              className: a()(em.searchBar, { [em.themedHeaderMobile]: d.tq }),
                              children: (0, r.jsx)(m.zx, {
                                  grow: !0,
                                  color: m.zx.Colors.PRIMARY,
                                  size: m.zx.Sizes.SMALL,
                                  fullWidth: !0,
                                  onClick: eP,
                                  children: (0, r.jsx)(C.Z, { children: ef.intl.string(ef.t.LzcpeZ) }),
                              }),
                          }),
                      }),
                (0, r.jsxs)(
                    eo.Z,
                    e_(eg({}, e), {
                        version: _,
                        selectedChannelId: g,
                        showDMHeader: !E && !b,
                        hideAllDMs: E,
                        listScrollerRef: y,
                        createDMCTAButtonVariant: h,
                        children: [
                            T && !b
                                ? (0, r.jsx)(
                                      eI,
                                      { selected: null != _ ? _ === eu.Z5c.ME_ACTIVITY : l === eu.Z5c.ME_ACTIVITY },
                                      "activity_experimental",
                                  )
                                : null,
                            b
                                ? null
                                : (0, r.jsx)(
                                      eO,
                                      { selected: null != _ ? _ === eu.Z5c.FRIENDS : l === eu.Z5c.FRIENDS },
                                      "friends",
                                  ),
                            !b && N
                                ? (0, r.jsx)(
                                      eE,
                                      { selected: null != _ ? _ === eu.Z5c.ICYMI : l === eu.Z5c.ICYMI },
                                      "icymi",
                                  )
                                : null,
                            n && t && !b
                                ? (0, r.jsx)(
                                      ev,
                                      {
                                          selected:
                                              null == _
                                                  ? null != l && l.startsWith(eu.Z5c.APPLICATION_LIBRARY)
                                                  : _.startsWith(eu.Z5c.APPLICATION_LIBRARY),
                                          hideGameUpdateProgressIndicator: l === eu.Z5c.APPLICATION_LIBRARY,
                                      },
                                      "library",
                                  )
                                : null,
                            p && !b
                                ? (0, r.jsx)(
                                      eS,
                                      {
                                          selected:
                                              null == _
                                                  ? null != l && l.startsWith(eu.Z5c.MESSAGE_REQUESTS)
                                                  : _ === eu.Z5c.MESSAGE_REQUESTS,
                                      },
                                      "message-requests",
                                  )
                                : null,
                            o && !b
                                ? (0, r.jsxs)(
                                      "div",
                                      {
                                          children: [
                                              (0, r.jsx)(Y.g, {
                                                  nitroTabButtonRef: S,
                                                  selected: null == _ ? s : _.startsWith(eu.Z5c.APPLICATION_STORE),
                                                  route: eu.Z5c.APPLICATION_STORE,
                                                  locationState: {
                                                      analyticsSource: {
                                                          page: ex(l),
                                                          section: eu.jXE.NAVIGATION,
                                                          object: eu.qAy.NAVIGATION_LINK,
                                                      },
                                                  },
                                              }),
                                              P,
                                          ],
                                      },
                                      "nitro-tab-group",
                                  )
                                : null,
                            b
                                ? null
                                : (0, r.jsx)(
                                      v.i,
                                      {
                                          selected:
                                              _ === eu.Z5c.COLLECTIBLES_SHOP ||
                                              (null == l ? void 0 : l.startsWith(eu.Z5c.COLLECTIBLES_SHOP)),
                                          listItemRef: I,
                                          locationState: {
                                              analyticsSource: {
                                                  page: ex(l),
                                                  section: eu.jXE.NAVIGATION,
                                                  object: eu.qAy.NAVIGATION_LINK,
                                              },
                                          },
                                      },
                                      "discord-shop",
                                  ),
                            f && !b
                                ? (0, r.jsx)(
                                      eT,
                                      {
                                          selected:
                                              (null != l && l.startsWith(eu.Z5c.FAMILY_CENTER)) ||
                                              (null != _ && _.startsWith(eu.Z5c.FAMILY_CENTER)),
                                      },
                                      "family-center",
                                  )
                                : null,
                            b
                                ? null
                                : (0, r.jsx)(
                                      q.Z,
                                      {
                                          selected:
                                              null == _
                                                  ? null != l && l.startsWith(eu.Z5c.QUEST_HOME_V2)
                                                  : _ === eu.Z5c.QUEST_HOME_V2,
                                      },
                                      "quests",
                                  ),
                            b || E ? null : (0, r.jsx)(eZ, {}, "section-divider-top"),
                            E ? null : (0, r.jsx)(j.Z, {}, "frequent-friends"),
                            "full-width" !== h || E || b ? null : (0, r.jsx)(ey, {}, "create-dm"),
                        ],
                    }),
                ),
            ],
        })
    );
});
function eZ() {
    return (0, r.jsx)("div", { className: em.sectionDivider });
}
function ew() {
    let e = (0, p.e7)([er.Z], () => er.Z.getHomeLink()),
        t = (0, p.e7)([en.Z], () => {
            if (e === eu.Z5c.APPLICATION_STORE) return !0;
            let t = (0, ea.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = en.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !$.bm.useSetting(),
        { theme: i } = (0, p.cj)([X.Z], () => ({ theme: X.Z.theme })),
        l = (0, p.e7)([ee.Z], () => ee.Z.hasLibraryApplication()),
        a = (0, p.e7)([et.Z], () => et.Z.getCurrentPath()),
        [c, u] = (0, Q.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        d = (0, Y.i)({ selected: null == u ? t : u.startsWith(eu.Z5c.APPLICATION_STORE) }),
        h = (0, F.eW)(),
        m = (0, V._h)(),
        g = [];
    (0, S.Kl)() && (h && g.push(f.z.REFERRAL_PROGRAM_POPOVER), m && g.push(f.z.RECURRING_3P_PROMOTION_POPOVER));
    let [_, b] = (0, T.US)(g, void 0, !0),
        E = (0, L.a)(),
        O = (function () {
            let e = $.Ex.useSetting(),
                t = (0, R.Z)();
            return !0 === e && !0 === t;
        })(),
        I = (0, P.U)("PrivateChannels", { autoTrackExposure: !0 }),
        { pathname: v } = (0, s.TH)(),
        y = v.startsWith(eu.Z5c.CHANNEL(eu.ME)) && v !== eu.Z5c.CHANNEL(eu.ME) && v !== eu.Z5c.ME_ACTIVITY,
        C = M.o.useConfig({ location: "privatechannels" }).dmsTab;
    return (0, r.jsx)(eA, {
        theme: i,
        showLibrary: n,
        hasLibraryApplication: l,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        shouldShowNitroTab: d,
        showReferralProgramPopover: _ === f.z.REFERRAL_PROGRAM_POPOVER,
        showRecurring3PPopover: _ === f.z.RECURRING_3P_PROMOTION_POPOVER,
        shouldShowMessageRequestsRow: E,
        shouldShowFamilyCenterRow: O,
        createDMButtonVariant: I,
        selectedChannelId: c,
        path: u,
        onlyShowDMs: y && C,
        hideAllDMs: !y && C,
    });
}
