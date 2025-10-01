n.d(t, {
    Z: () => eS,
    d: () => eI,
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
    I = n(243778),
    S = n(702456),
    C = n(882579),
    T = n(518311),
    N = n(488634),
    j = n(899740),
    P = n(28476),
    x = n(880257),
    A = n(631885),
    Z = n(849862),
    w = n(522558),
    L = n(795448),
    R = n(441623),
    D = n(93237),
    k = n(138176),
    M = n(457396),
    U = n(108989),
    G = n(937797),
    B = n(362870),
    V = n(51596),
    H = n(905423),
    F = n(155409),
    z = n(210887),
    W = n(695346),
    q = n(283595),
    Y = n(923834),
    K = n(55563),
    Q = n(774343),
    X = n(974042),
    J = n(626135),
    $ = n(814225),
    ee = n(515753),
    et = n(831218),
    en = n(339149),
    er = n(981631),
    ei = n(675654),
    el = n(474936),
    ea = n(46140),
    eo = n(388032),
    es = n(345909),
    ec = n(686918);
function eu(e) {
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
function ed(e, t) {
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
function ep(e, t) {
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
let ef = (e) => {
        var { selected: t } = e,
            n = ep(e, ["selected"]);
        let l = (0, c.JA)("friends"),
            a = (0, Z.If)(),
            o = (0, d.e7)([R.Z], () => R.Z.canShowFriendsTabBadge()),
            u = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
            { enabled: p } = w.w.useExperiment({ location: "Friends Tab" }, { autoTrackExposure: !1 }),
            f = o && p;
        i.useEffect(() => {
            f &&
                (0, E.h)({
                    name: s.ImpressionNames.GIFT_INTENT_BADGE,
                    type: s.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: el.hX.FRIEND_ANNIVERSARY },
                });
        }, [f]);
        let [h, m] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: ec.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    ee.Qj,
                    ed(
                        eu(
                            {
                                onClick: () => {
                                    let e;
                                    f
                                        ? (J.default.track(er.rMx.GIFT_INTENT_BADGE_CLICKED, {
                                              gift_intent_type: el.hX.FRIEND_ANNIVERSARY,
                                          }),
                                          (e = er.pJs.ALL),
                                          b.Z.setSection(er.pJs.ALL),
                                          (0, L.Gk)())
                                        : (e = X.ZP.getState().section),
                                        (0, O.Z)({ tab_opened: e });
                                },
                                interactiveClassName: f ? ec.friendsBadge : void 0,
                                selected: t,
                                route: er.Z5c.FRIENDS,
                                icon: g.iFz,
                                text: eo.intl.string(eo.t.TdEu5e),
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
                    (0, r.jsx)(U.Z, {
                        className: ec.confetti,
                        wind: 0,
                        sprites: ei.CA,
                        spriteColors: ei.Br,
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
    eh = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = ep(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, c.JA)("library");
        return (0, r.jsx)(
            ee.Qj,
            ed(
                eu(
                    {
                        selected: t,
                        route: er.Z5c.APPLICATION_LIBRARY,
                        icon: g.vqy,
                        text: eo.intl.string(eo.t.cw57am),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(en.Z, {
                        className: a()(ec.downloadProgressCircle, { [ec.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    eg = () =>
        (0, r.jsx)("li", {
            className: ec.createDMButtonContainer,
            children: (0, r.jsx)(T.l, {
                fullWidth: !0,
                text: eo.intl.string(eo.t["6Urw1t"]),
                icon: g.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    em = () => {
        let e = (0, j.q)();
        return e > 0 ? (0, r.jsx)(g.mAB, { count: e }) : null;
    },
    eb = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)("messageRequests"),
            { channelId: i } = (0, N._)();
        if (!(0, P.a)()) return null;
        let l = null == i ? void 0 : () => m.Z.preload(er.ME, i);
        return (0, r.jsx)(
            ee.Qj,
            ed(
                eu(
                    {
                        selected: t,
                        route: er.Z5c.MESSAGE_REQUESTS,
                        icon: g._XJ,
                        text: eo.intl.string(eo.t.e7GWjY),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(em, {}) },
            ),
        );
    },
    e_ = (e) => {
        let { selected: t } = e,
            n = eo.intl.string(es.default.Rkdixs),
            l = (0, c.JA)("family-center"),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            ee.Qj,
            ed(
                eu(
                    {
                        selected: t,
                        route: er.Z5c.FAMILY_CENTER,
                        icon: g.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            o(!0);
                        },
                        onMouseLeave: () => {
                            o(!1);
                        },
                        interactiveClassName: ec.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(eO, { isParentHovered: a }) },
            ),
        );
    },
    eO = (e) => {
        let { isParentHovered: t } = e,
            i = (0, A.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: ec.familyCenterButtonContainer,
                  children: (0, r.jsx)(ee.bU, {
                      onClick: () => {
                          (0, f.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, eu({}, t));
                          });
                      },
                      "aria-label": eo.intl.string(eo.t.cpT0Cg),
                      icon: g.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(ec.familyCenterButtonContainer, ec.withPadding),
                    children: (0, r.jsx)(g.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: ec.familyCenterButtonContainer,
                    children: (0, r.jsx)(I.ZP, {
                        contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === p.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: eo.intl.string(eo.t.y2b7CA),
                                      color: v.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eE = () => (0, V.$Z)("DM_SEARCH");
function ey(e) {
    switch (e) {
        case er.Z5c.APPLICATION_LIBRARY:
            return er.ZY5.LIBRARY;
        case er.Z5c.FRIENDS:
            return er.ZY5.FRIENDS_LIST;
        case er.Z5c.COLLECTIBLES_SHOP:
            return er.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(er.Z5c.APPLICATION_STORE)
        ? e === er.Z5c.APPLICATION_STORE
            ? er.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(er.Z5c.APPLICATION_STORE)
              ? er.ZY5.STORE_DIRECTORY_BROWSE
              : er.ZY5.STORE_LISTING
        : er.ZY5.DM_CHANNEL;
}
let ev = i.memo(function (e) {
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
        className: ec.privateChannels,
        "aria-label": eo.intl.string(eo.t.ZH9aPz),
        children: [
            (0, r.jsx)(F.Z, {
                childRef: _,
                tutorialId: "direct-messages",
                position: "right",
                offsetX: -52,
                children: (0, r.jsx)("div", {
                    ref: _,
                    className: a()(ec.searchBar, { [ec.themedHeaderMobile]: u.tq }),
                    children: (0, r.jsx)(h.zx, {
                        grow: !0,
                        color: h.zx.Colors.PRIMARY,
                        size: h.zx.Sizes.SMALL,
                        fullWidth: !0,
                        onClick: eE,
                        children: eo.intl.string(eo.t.LzcpeX),
                    }),
                }),
            }),
            (0, r.jsxs)(
                et.Z,
                ed(eu({}, e), {
                    version: b,
                    selectedChannelId: m,
                    showDMHeader: !0,
                    listScrollerRef: E,
                    createDMCTAButtonVariant: g,
                    children: [
                        (0, r.jsx)(
                            ef,
                            { selected: null != b ? b === er.Z5c.FRIENDS : l === er.Z5c.FRIENDS },
                            "friends",
                        ),
                        n && t
                            ? (0, r.jsx)(
                                  eh,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(er.Z5c.APPLICATION_LIBRARY)
                                              : b.startsWith(er.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === er.Z5c.APPLICATION_LIBRARY,
                                  },
                                  "library",
                              )
                            : null,
                        d
                            ? (0, r.jsx)(
                                  eb,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(er.Z5c.MESSAGE_REQUESTS)
                                              : b === er.Z5c.MESSAGE_REQUESTS,
                                  },
                                  "message-requests",
                              )
                            : null,
                        s
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(
                                          M.g,
                                          {
                                              nitroTabButtonRef: v,
                                              selected: null == b ? o : b.startsWith(er.Z5c.APPLICATION_STORE),
                                              route: er.Z5c.APPLICATION_STORE,
                                              locationState: {
                                                  analyticsSource: {
                                                      page: ey(l),
                                                      section: er.jXE.NAVIGATION,
                                                      object: er.qAy.NAVIGATION_LINK,
                                                  },
                                              },
                                          },
                                          "premium",
                                      ),
                                      c && (0, r.jsx)(k.F, { targetElementRef: v }),
                                  ],
                              })
                            : null,
                        (0, r.jsx)(
                            y.i,
                            {
                                selected:
                                    b === er.Z5c.COLLECTIBLES_SHOP ||
                                    (null == l ? void 0 : l.startsWith(er.Z5c.COLLECTIBLES_SHOP)),
                                listItemRef: O,
                                locationState: {
                                    analyticsSource: {
                                        page: ey(l),
                                        section: er.jXE.NAVIGATION,
                                        object: er.qAy.NAVIGATION_LINK,
                                    },
                                },
                            },
                            "discord-shop",
                        ),
                        p
                            ? (0, r.jsx)(
                                  e_,
                                  {
                                      selected:
                                          (null != l && l.startsWith(er.Z5c.FAMILY_CENTER)) ||
                                          (null != b && b.startsWith(er.Z5c.FAMILY_CENTER)),
                                  },
                                  "family-center",
                              )
                            : null,
                        f
                            ? (0, r.jsx)(
                                  B.Z,
                                  {
                                      selected:
                                          null == b
                                              ? null != l && l.startsWith(er.Z5c.QUEST_HOME_V2)
                                              : b === er.Z5c.QUEST_HOME_V2,
                                  },
                                  "quests",
                              )
                            : null,
                        (0, r.jsx)(eI, {}, "section-divider-top"),
                        (0, r.jsx)(S.Z, {}, "frequent-friends"),
                        "full-width" === g && (0, r.jsx)(eg, {}, "create-dm"),
                    ],
                }),
            ),
        ],
    });
});
function eI() {
    return (0, r.jsx)("div", { className: ec.sectionDivider });
}
function eS() {
    let e = (0, d.e7)([Q.Z], () => Q.Z.getHomeLink()),
        t = (0, d.e7)([K.Z], () => {
            if (e === er.Z5c.APPLICATION_STORE) return !0;
            let t = (0, $.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = K.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !W.bm.useSetting(),
        { theme: i } = (0, d.cj)([z.Z], () => ({ theme: z.Z.theme })),
        l = (0, d.e7)([q.Z], () => q.Z.hasLibraryApplication()),
        a = (0, d.e7)([Y.Z], () => Y.Z.getCurrentPath()),
        [s, c] = (0, H.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        u = (0, M.i)({ selected: null == c ? t : c.startsWith(er.Z5c.APPLICATION_STORE) }),
        p = (0, D.eW)(),
        f = (0, P.a)(),
        h = (function () {
            let e = W.Ex.useSetting(),
                t = (0, x.Z)();
            return !0 === e && !0 === t;
        })(),
        g = (0, C.U)("PrivateChannels", { autoTrackExposure: !0 }),
        { enabled: m } = G.m8.useConfig({ location: ea.dr.PRIVATE_CHANNELS_LIST });
    return (0, r.jsx)(ev, {
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
