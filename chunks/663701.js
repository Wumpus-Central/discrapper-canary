n.d(t, {
    Z: () => eC,
    d: () => eS,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(524825),
    s = n(990547),
    c = n(91192),
    u = n(873546),
    d = n(442837),
    p = n(704215),
    f = n(952265),
    h = n(755721),
    g = n(481060),
    m = n(493683),
    b = n(529103),
    _ = n(607070),
    O = n(557968),
    E = n(213609),
    y = n(463119),
    v = n(377171),
    I = n(111028),
    S = n(243778),
    C = n(702456),
    T = n(882579),
    N = n(518311),
    j = n(488634),
    P = n(899740),
    x = n(28476),
    A = n(880257),
    Z = n(631885),
    w = n(849862),
    L = n(522558),
    R = n(795448),
    D = n(441623),
    k = n(93237),
    M = n(138176),
    U = n(457396),
    G = n(108989),
    B = n(937797),
    H = n(362870),
    V = n(51596),
    F = n(905423),
    z = n(155409),
    W = n(210887),
    q = n(695346),
    Y = n(283595),
    K = n(923834),
    Q = n(55563),
    X = n(774343),
    J = n(974042),
    $ = n(626135),
    ee = n(814225),
    et = n(515753),
    en = n(831218),
    er = n(339149),
    ei = n(981631),
    el = n(675654),
    ea = n(474936),
    eo = n(46140),
    es = n(388032),
    ec = n(345909),
    eu = n(686918);
function ed(e) {
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
function ep(e, t) {
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
function ef(e, t) {
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
let eh = (e) => {
        var { selected: t } = e,
            n = ef(e, ["selected"]);
        let l = (0, c.JA)("friends"),
            a = (0, w.If)(),
            o = (0, d.e7)([D.Z], () => D.Z.canShowFriendsTabBadge()),
            u = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
            { enabled: p } = L.w.useExperiment({ location: "Friends Tab" }, { autoTrackExposure: !1 }),
            f = o && p;
        i.useEffect(() => {
            f &&
                (0, E.h)({
                    name: s.ImpressionNames.GIFT_INTENT_BADGE,
                    type: s.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: ea.hX.FRIEND_ANNIVERSARY },
                });
        }, [f]);
        let [h, m] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: eu.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    et.Qj,
                    ep(
                        ed(
                            {
                                onClick: () => {
                                    let e;
                                    f
                                        ? ($.default.track(ei.rMx.GIFT_INTENT_BADGE_CLICKED, {
                                              gift_intent_type: ea.hX.FRIEND_ANNIVERSARY,
                                          }),
                                          (e = ei.pJs.ALL),
                                          b.Z.setSection(ei.pJs.ALL),
                                          (0, R.Gk)())
                                        : (e = J.ZP.getState().section),
                                        (0, O.Z)({ tab_opened: e });
                                },
                                interactiveClassName: f ? eu.friendsBadge : void 0,
                                selected: t,
                                route: ei.Z5c.FRIENDS,
                                icon: g.iFz,
                                text: es.intl.string(es.t.TdEu5e),
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
                    !u &&
                    (0, r.jsx)(G.Z, {
                        className: eu.confetti,
                        wind: 0,
                        sprites: el.CA,
                        spriteColors: el.Br,
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
    eg = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = ef(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, c.JA)("library");
        return (0, r.jsx)(
            et.Qj,
            ep(
                ed(
                    {
                        selected: t,
                        route: ei.Z5c.APPLICATION_LIBRARY,
                        icon: g.vqy,
                        text: es.intl.string(es.t.cw57am),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(er.Z, {
                        className: a()(eu.downloadProgressCircle, { [eu.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    em = () =>
        (0, r.jsx)("li", {
            className: eu.createDMButtonContainer,
            children: (0, r.jsx)(N.l, {
                fullWidth: !0,
                text: es.intl.string(es.t["6Urw1t"]),
                icon: g.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    eb = () => {
        let e = (0, P.q)();
        return e > 0 ? (0, r.jsx)(g.mAB, { count: e }) : null;
    },
    e_ = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)("messageRequests"),
            { channelId: i } = (0, j._)();
        if (!(0, x.a)()) return null;
        let l = null == i ? void 0 : () => m.Z.preload(ei.ME, i);
        return (0, r.jsx)(
            et.Qj,
            ep(
                ed(
                    {
                        selected: t,
                        route: ei.Z5c.MESSAGE_REQUESTS,
                        icon: g._XJ,
                        text: es.intl.string(es.t.e7GWjY),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(eb, {}) },
            ),
        );
    },
    eO = (e) => {
        let { selected: t } = e,
            n = es.intl.string(ec.default.Rkdixs),
            l = (0, c.JA)("family-center"),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            et.Qj,
            ep(
                ed(
                    {
                        selected: t,
                        route: ei.Z5c.FAMILY_CENTER,
                        icon: g.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            o(!0);
                        },
                        onMouseLeave: () => {
                            o(!1);
                        },
                        interactiveClassName: eu.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(eE, { isParentHovered: a }) },
            ),
        );
    },
    eE = (e) => {
        let { isParentHovered: t } = e,
            i = (0, Z.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: eu.familyCenterButtonContainer,
                  children: (0, r.jsx)(et.bU, {
                      onClick: () => {
                          (0, f.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, ed({}, t));
                          });
                      },
                      "aria-label": es.intl.string(es.t.cpT0Cg),
                      icon: g.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(eu.familyCenterButtonContainer, eu.withPadding),
                    children: (0, r.jsx)(g.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: eu.familyCenterButtonContainer,
                    children: (0, r.jsx)(S.ZP, {
                        contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === p.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: es.intl.string(es.t.y2b7CA),
                                      color: v.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    ey = () => (0, V.$Z)("DM_SEARCH");
function ev(e) {
    switch (e) {
        case ei.Z5c.APPLICATION_LIBRARY:
            return ei.ZY5.LIBRARY;
        case ei.Z5c.FRIENDS:
            return ei.ZY5.FRIENDS_LIST;
        case ei.Z5c.COLLECTIBLES_SHOP:
            return ei.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(ei.Z5c.APPLICATION_STORE)
        ? e === ei.Z5c.APPLICATION_STORE
            ? ei.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(ei.Z5c.APPLICATION_STORE)
              ? ei.ZY5.STORE_DIRECTORY_BROWSE
              : ei.ZY5.STORE_LISTING
        : ei.ZY5.DM_CHANNEL;
}
let eI = i.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
            premiumTabSelected: o,
            shouldShowNitroTab: s,
            isReferralProgramPopoverShowable: c,
            shouldShowMessageRequestsRow: d,
            shouldShowFamilyCenterRow: p,
            shouldShowQuestsEntrypointRow: f,
            createDMButtonVariant: g,
            selectedChannelId: m,
            path: b,
        } = e,
        _ = i.useRef(null),
        O = i.useRef(null),
        E = i.useRef(null),
        v = i.useRef(null);
    return (0, r.jsxs)("nav", {
        className: eu.privateChannels,
        "aria-label": es.intl.string(es.t.ZH9aPz),
        children: [
            (0, r.jsx)(z.Z, {
                childRef: _,
                tutorialId: "direct-messages",
                position: "right",
                offsetX: -52,
                children: (0, r.jsx)("div", {
                    ref: _,
                    className: a()(eu.searchBar, { [eu.themedHeaderMobile]: u.tq }),
                    children: (0, r.jsx)(h.zx, {
                        grow: !0,
                        color: h.zx.Colors.PRIMARY,
                        size: h.zx.Sizes.SMALL,
                        fullWidth: !0,
                        onClick: ey,
                        children: (0, r.jsx)(I.Z, { children: es.intl.string(es.t.LzcpeX) }),
                    }),
                }),
            }),
            (0, r.jsxs)(
                en.Z,
                ep(ed({}, e), {
                    version: b,
                    selectedChannelId: m,
                    showDMHeader: !0,
                    listScrollerRef: E,
                    createDMCTAButtonVariant: g,
                    children: [
                        (0, r.jsx)(
                            eh,
                            { selected: null != b ? b === ei.Z5c.FRIENDS : l === ei.Z5c.FRIENDS },
                            "friends",
                        ),
                        n && t
                            ? (0, r.jsx)(
                                  eg,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(ei.Z5c.APPLICATION_LIBRARY)
                                              : b.startsWith(ei.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === ei.Z5c.APPLICATION_LIBRARY,
                                  },
                                  "library",
                              )
                            : null,
                        d
                            ? (0, r.jsx)(
                                  e_,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(ei.Z5c.MESSAGE_REQUESTS)
                                              : b === ei.Z5c.MESSAGE_REQUESTS,
                                  },
                                  "message-requests",
                              )
                            : null,
                        s
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(
                                          U.g,
                                          {
                                              nitroTabButtonRef: v,
                                              selected: null == b ? o : b.startsWith(ei.Z5c.APPLICATION_STORE),
                                              route: ei.Z5c.APPLICATION_STORE,
                                              locationState: {
                                                  analyticsSource: {
                                                      page: ev(l),
                                                      section: ei.jXE.NAVIGATION,
                                                      object: ei.qAy.NAVIGATION_LINK,
                                                  },
                                              },
                                          },
                                          "premium",
                                      ),
                                      c && (0, r.jsx)(M.F, { targetElementRef: v }),
                                  ],
                              })
                            : null,
                        (0, r.jsx)(
                            y.i,
                            {
                                selected:
                                    b === ei.Z5c.COLLECTIBLES_SHOP ||
                                    (null == l ? void 0 : l.startsWith(ei.Z5c.COLLECTIBLES_SHOP)),
                                listItemRef: O,
                                locationState: {
                                    analyticsSource: {
                                        page: ev(l),
                                        section: ei.jXE.NAVIGATION,
                                        object: ei.qAy.NAVIGATION_LINK,
                                    },
                                },
                            },
                            "discord-shop",
                        ),
                        p
                            ? (0, r.jsx)(
                                  eO,
                                  {
                                      selected:
                                          (null != l && l.startsWith(ei.Z5c.FAMILY_CENTER)) ||
                                          (null != b && b.startsWith(ei.Z5c.FAMILY_CENTER)),
                                  },
                                  "family-center",
                              )
                            : null,
                        f
                            ? (0, r.jsx)(
                                  H.Z,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(ei.Z5c.QUEST_HOME_V2)
                                              : b === ei.Z5c.QUEST_HOME_V2,
                                  },
                                  "quests",
                              )
                            : null,
                        (0, r.jsx)(eS, {}, "section-divider-top"),
                        (0, r.jsx)(C.Z, {}, "frequent-friends"),
                        "full-width" === g && (0, r.jsx)(em, {}, "create-dm"),
                    ],
                }),
            ),
        ],
    });
});
function eS() {
    return (0, r.jsx)("div", { className: eu.sectionDivider });
}
function eC() {
    let e = (0, d.e7)([X.Z], () => X.Z.getHomeLink()),
        t = (0, d.e7)([Q.Z], () => {
            if (e === ei.Z5c.APPLICATION_STORE) return !0;
            let t = (0, ee.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = Q.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !q.bm.useSetting(),
        { theme: i } = (0, d.cj)([W.Z], () => ({ theme: W.Z.theme })),
        l = (0, d.e7)([Y.Z], () => Y.Z.hasLibraryApplication()),
        a = (0, d.e7)([K.Z], () => K.Z.getCurrentPath()),
        [s, c] = (0, F.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        u = (0, U.i)({ selected: null == c ? t : c.startsWith(ei.Z5c.APPLICATION_STORE) }),
        p = (0, k.eW)(),
        f = (0, x.a)(),
        h = (function () {
            let e = q.Ex.useSetting(),
                t = (0, A.Z)();
            return !0 === e && !0 === t;
        })(),
        g = (0, T.U)("PrivateChannels", { autoTrackExposure: !0 }),
        { enabled: m } = B.m8.useConfig({ location: eo.dr.PRIVATE_CHANNELS_LIST });
    return (0, r.jsx)(eI, {
        theme: i,
        showLibrary: n,
        hasLibraryApplication: l,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        shouldShowNitroTab: u,
        isReferralProgramPopoverShowable: p,
        shouldShowMessageRequestsRow: f,
        shouldShowFamilyCenterRow: h,
        shouldShowQuestsEntrypointRow: m,
        createDMButtonVariant: g,
        selectedChannelId: s,
        path: c,
    });
}
