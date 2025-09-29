n.d(t, { Z: () => eI }), n(388685);
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
    I = n(243778),
    S = n(882579),
    C = n(518311),
    T = n(488634),
    N = n(899740),
    P = n(28476),
    j = n(880257),
    x = n(631885),
    A = n(849862),
    Z = n(522558),
    w = n(795448),
    L = n(441623),
    R = n(93237),
    D = n(138176),
    k = n(457396),
    M = n(108989),
    U = n(937797),
    G = n(362870),
    B = n(51596),
    V = n(905423),
    H = n(155409),
    F = n(210887),
    z = n(695346),
    W = n(283595),
    Y = n(923834),
    K = n(55563),
    q = n(774343),
    Q = n(974042),
    X = n(626135),
    J = n(814225),
    $ = n(515753),
    ee = n(831218),
    et = n(339149),
    en = n(981631),
    er = n(675654),
    ei = n(474936),
    el = n(46140),
    ea = n(388032),
    eo = n(412297),
    es = n(734306);
function ec(e) {
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
function eu(e, t) {
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
function ed(e, t) {
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
let ep = (e) => {
        var { selected: t } = e,
            n = ed(e, ["selected"]);
        let l = (0, c.JA)("friends"),
            a = (0, A.If)(),
            o = (0, d.e7)([L.Z], () => L.Z.canShowFriendsTabBadge()),
            u = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
            { enabled: p } = Z.w.useExperiment({ location: "Friends Tab" }, { autoTrackExposure: !1 }),
            f = o && p;
        i.useEffect(() => {
            f &&
                (0, E.h)({
                    name: s.ImpressionNames.GIFT_INTENT_BADGE,
                    type: s.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: ei.hX.FRIEND_ANNIVERSARY },
                });
        }, [f]);
        let [h, m] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: es.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    $.Qj,
                    eu(
                        ec(
                            {
                                onClick: () => {
                                    let e;
                                    f
                                        ? (X.default.track(en.rMx.GIFT_INTENT_BADGE_CLICKED, {
                                              gift_intent_type: ei.hX.FRIEND_ANNIVERSARY,
                                          }),
                                          (e = en.pJs.ALL),
                                          b.Z.setSection(en.pJs.ALL),
                                          (0, w.Gk)())
                                        : (e = Q.ZP.getState().section),
                                        (0, O.Z)({ tab_opened: e });
                                },
                                interactiveClassName: f ? es.friendsBadge : void 0,
                                selected: t,
                                route: en.Z5c.FRIENDS,
                                icon: g.iFz,
                                text: ea.intl.string(ea.t.TdEu5e),
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
                    (0, r.jsx)(M.Z, {
                        className: es.confetti,
                        wind: 0,
                        sprites: er.CA,
                        spriteColors: er.Br,
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
    ef = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = ed(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, c.JA)("library");
        return (0, r.jsx)(
            $.Qj,
            eu(
                ec(
                    {
                        selected: t,
                        route: en.Z5c.APPLICATION_LIBRARY,
                        icon: g.vqy,
                        text: ea.intl.string(ea.t.cw57am),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(et.Z, {
                        className: a()(es.downloadProgressCircle, { [es.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    eh = () =>
        (0, r.jsx)("li", {
            className: es.createDMButtonContainer,
            children: (0, r.jsx)(C.l, {
                fullWidth: !0,
                text: ea.intl.string(ea.t["6Urw1t"]),
                icon: g.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    eg = () => {
        let e = (0, N.q)();
        return e > 0 ? (0, r.jsx)(g.mAB, { count: e }) : null;
    },
    em = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)("messageRequests"),
            { channelId: i } = (0, T._)();
        if (!(0, P.a)()) return null;
        let l = null == i ? void 0 : () => m.Z.preload(en.ME, i);
        return (0, r.jsx)(
            $.Qj,
            eu(
                ec(
                    {
                        selected: t,
                        route: en.Z5c.MESSAGE_REQUESTS,
                        icon: g._XJ,
                        text: ea.intl.string(ea.t.e7GWjY),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(eg, {}) },
            ),
        );
    },
    eb = (e) => {
        let { selected: t } = e,
            n = ea.intl.string(eo.default.Rkdixs),
            l = (0, c.JA)("family-center"),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            $.Qj,
            eu(
                ec(
                    {
                        selected: t,
                        route: en.Z5c.FAMILY_CENTER,
                        icon: g.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            o(!0);
                        },
                        onMouseLeave: () => {
                            o(!1);
                        },
                        interactiveClassName: es.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(e_, { isParentHovered: a }) },
            ),
        );
    },
    e_ = (e) => {
        let { isParentHovered: t } = e,
            i = (0, x.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: es.familyCenterButtonContainer,
                  children: (0, r.jsx)($.bU, {
                      onClick: () => {
                          (0, f.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, ec({}, t));
                          });
                      },
                      "aria-label": ea.intl.string(ea.t.cpT0Cg),
                      icon: g.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(es.familyCenterButtonContainer, es.withPadding),
                    children: (0, r.jsx)(g.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: es.familyCenterButtonContainer,
                    children: (0, r.jsx)(I.ZP, {
                        contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === p.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: ea.intl.string(ea.t.y2b7CA),
                                      color: v.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eO = () => (0, B.$Z)("DM_SEARCH");
function eE(e) {
    switch (e) {
        case en.Z5c.APPLICATION_LIBRARY:
            return en.ZY5.LIBRARY;
        case en.Z5c.FRIENDS:
            return en.ZY5.FRIENDS_LIST;
        case en.Z5c.COLLECTIBLES_SHOP:
            return en.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(en.Z5c.APPLICATION_STORE)
        ? e === en.Z5c.APPLICATION_STORE
            ? en.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(en.Z5c.APPLICATION_STORE)
              ? en.ZY5.STORE_DIRECTORY_BROWSE
              : en.ZY5.STORE_LISTING
        : en.ZY5.DM_CHANNEL;
}
let ey = i.memo(function (e) {
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
        className: es.privateChannels,
        "aria-label": ea.intl.string(ea.t.ZH9aPz),
        children: [
            (0, r.jsx)(H.Z, {
                childRef: _,
                tutorialId: "direct-messages",
                position: "right",
                offsetX: -52,
                children: (0, r.jsx)("div", {
                    ref: _,
                    className: a()(es.searchBar, { [es.themedHeaderMobile]: u.tq }),
                    children: (0, r.jsx)(h.zx, {
                        grow: !0,
                        color: h.zx.Colors.PRIMARY,
                        size: h.zx.Sizes.SMALL,
                        fullWidth: !0,
                        onClick: eO,
                        children: ea.intl.string(ea.t.LzcpeX),
                    }),
                }),
            }),
            (0, r.jsxs)(
                ee.Z,
                eu(ec({}, e), {
                    version: b,
                    selectedChannelId: m,
                    showDMHeader: !0,
                    listScrollerRef: E,
                    createDMCTAButtonVariant: g,
                    children: [
                        (0, r.jsx)(
                            ep,
                            { selected: null != b ? b === en.Z5c.FRIENDS : l === en.Z5c.FRIENDS },
                            "friends",
                        ),
                        n && t
                            ? (0, r.jsx)(
                                  ef,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(en.Z5c.APPLICATION_LIBRARY)
                                              : b.startsWith(en.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === en.Z5c.APPLICATION_LIBRARY,
                                  },
                                  "library",
                              )
                            : null,
                        d
                            ? (0, r.jsx)(
                                  em,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(en.Z5c.MESSAGE_REQUESTS)
                                              : b === en.Z5c.MESSAGE_REQUESTS,
                                  },
                                  "message-requests",
                              )
                            : null,
                        s
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(
                                          k.g,
                                          {
                                              nitroTabButtonRef: v,
                                              selected: null == b ? o : b.startsWith(en.Z5c.APPLICATION_STORE),
                                              route: en.Z5c.APPLICATION_STORE,
                                              locationState: {
                                                  analyticsSource: {
                                                      page: eE(l),
                                                      section: en.jXE.NAVIGATION,
                                                      object: en.qAy.NAVIGATION_LINK,
                                                  },
                                              },
                                          },
                                          "premium",
                                      ),
                                      c && (0, r.jsx)(D.F, { targetElementRef: v }),
                                  ],
                              })
                            : null,
                        (0, r.jsx)(
                            y.i,
                            {
                                selected:
                                    b === en.Z5c.COLLECTIBLES_SHOP ||
                                    (null == l ? void 0 : l.startsWith(en.Z5c.COLLECTIBLES_SHOP)),
                                listItemRef: O,
                                locationState: {
                                    analyticsSource: {
                                        page: eE(l),
                                        section: en.jXE.NAVIGATION,
                                        object: en.qAy.NAVIGATION_LINK,
                                    },
                                },
                            },
                            "discord-shop",
                        ),
                        p
                            ? (0, r.jsx)(
                                  eb,
                                  {
                                      selected:
                                          (null != l && l.startsWith(en.Z5c.FAMILY_CENTER)) ||
                                          (null != b && b.startsWith(en.Z5c.FAMILY_CENTER)),
                                  },
                                  "family-center",
                              )
                            : null,
                        f
                            ? (0, r.jsx)(
                                  G.Z,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(en.Z5c.QUEST_HOME_V2)
                                              : b === en.Z5c.QUEST_HOME_V2,
                                  },
                                  "quests",
                              )
                            : null,
                        (0, r.jsx)(ev, {}, "section-divider-top"),
                        "full-width" === g && (0, r.jsx)(eh, {}, "create-dm"),
                    ],
                }),
            ),
        ],
    });
});
function ev() {
    return (0, r.jsx)("div", { className: es.sectionDivider });
}
function eI() {
    let e = (0, d.e7)([q.Z], () => q.Z.getHomeLink()),
        t = (0, d.e7)([K.Z], () => {
            if (e === en.Z5c.APPLICATION_STORE) return !0;
            let t = (0, J.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = K.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !z.bm.useSetting(),
        { theme: i } = (0, d.cj)([F.Z], () => ({ theme: F.Z.theme })),
        l = (0, d.e7)([W.Z], () => W.Z.hasLibraryApplication()),
        a = (0, d.e7)([Y.Z], () => Y.Z.getCurrentPath()),
        [s, c] = (0, V.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        u = (0, k.i)({ selected: null == c ? t : c.startsWith(en.Z5c.APPLICATION_STORE) }),
        p = (0, R.eW)(),
        f = (0, P.a)(),
        h = (function () {
            let e = z.Ex.useSetting(),
                t = (0, j.Z)();
            return !0 === e && !0 === t;
        })(),
        g = (0, S.U)("PrivateChannels", { autoTrackExposure: !0 }),
        { enabled: m } = U.m8.useConfig({ location: el.dr.PRIVATE_CHANNELS_LIST });
    return (0, r.jsx)(ey, {
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
