n.d(t, { Z: () => ey }), n(388685);
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
    C = n(882579),
    S = n(518311),
    N = n(488634),
    T = n(899740),
    P = n(28476),
    j = n(880257),
    x = n(631885),
    A = n(849862),
    Z = n(522558),
    w = n(870041),
    L = n(795448),
    R = n(441623),
    D = n(93237),
    k = n(138176),
    M = n(457396),
    U = n(108989),
    G = n(51596),
    B = n(905423),
    V = n(155409),
    H = n(210887),
    F = n(695346),
    z = n(283595),
    W = n(923834),
    Y = n(55563),
    K = n(774343),
    q = n(974042),
    X = n(626135),
    Q = n(814225),
    J = n(515753),
    $ = n(831218),
    ee = n(339149),
    et = n(981631),
    en = n(675654),
    er = n(474936),
    ei = n(388032),
    el = n(345909),
    ea = n(686918);
function eo(e) {
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
function es(e, t) {
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
function ec(e, t) {
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
let eu = (e) => {
        var { selected: t } = e,
            n = ec(e, ["selected"]);
        let l = (0, c.JA)("friends"),
            a = (0, A.If)(),
            o = (0, d.e7)([R.Z], () => R.Z.canShowFriendsTabBadge()),
            u = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
            { enabled: p } = Z.w.useExperiment({ location: "Friends Tab" }, { autoTrackExposure: !1 }),
            f = o && p;
        i.useEffect(() => {
            f &&
                (0, E.h)({
                    name: s.ImpressionNames.GIFT_INTENT_BADGE,
                    type: s.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: er.hX.FRIEND_ANNIVERSARY },
                });
        }, [f]);
        let [h, m] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: ea.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    J.Qj,
                    es(
                        eo(
                            {
                                onClick: () => {
                                    let e;
                                    f
                                        ? (X.default.track(et.rMx.GIFT_INTENT_BADGE_CLICKED, {
                                              gift_intent_type: er.hX.FRIEND_ANNIVERSARY,
                                          }),
                                          (e = et.pJs.ALL),
                                          b.Z.setSection(et.pJs.ALL),
                                          (0, L.Gk)())
                                        : (e = q.ZP.getState().section),
                                        (0, O.Z)({ tab_opened: e });
                                },
                                interactiveClassName: f ? ea.friendsBadge : void 0,
                                selected: t,
                                route: et.Z5c.FRIENDS,
                                icon: g.iFz,
                                text: ei.intl.string(ei.t.TdEu5e),
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
                        className: ea.confetti,
                        wind: 0,
                        sprites: en.CA,
                        spriteColors: en.Br,
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
    ed = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = ec(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, c.JA)("library");
        return (0, r.jsx)(
            J.Qj,
            es(
                eo(
                    {
                        selected: t,
                        route: et.Z5c.APPLICATION_LIBRARY,
                        icon: g.vqy,
                        text: ei.intl.string(ei.t.cw57am),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(ee.Z, {
                        className: a()(ea.downloadProgressCircle, { [ea.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    ep = () =>
        (0, r.jsx)("li", {
            className: ea.createDMButtonContainer,
            children: (0, r.jsx)(S.l, {
                fullWidth: !0,
                text: ei.intl.string(ei.t["6Urw1t"]),
                icon: g.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    ef = () => {
        let e = (0, T.q)();
        return e > 0 ? (0, r.jsx)(g.mAB, { count: e }) : null;
    },
    eh = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)("messageRequests"),
            { channelId: i } = (0, N._)();
        if (!(0, P.a)()) return null;
        let l = null == i ? void 0 : () => m.Z.preload(et.ME, i);
        return (0, r.jsx)(
            J.Qj,
            es(
                eo(
                    {
                        selected: t,
                        route: et.Z5c.MESSAGE_REQUESTS,
                        icon: g._XJ,
                        text: ei.intl.string(ei.t.e7GWjY),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(ef, {}) },
            ),
        );
    },
    eg = (e) => {
        let { selected: t } = e,
            n = ei.intl.string(el.default.Rkdixs),
            l = (0, c.JA)("family-center"),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            J.Qj,
            es(
                eo(
                    {
                        selected: t,
                        route: et.Z5c.FAMILY_CENTER,
                        icon: g.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            o(!0);
                        },
                        onMouseLeave: () => {
                            o(!1);
                        },
                        interactiveClassName: ea.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(em, { isParentHovered: a }) },
            ),
        );
    },
    em = (e) => {
        let { isParentHovered: t } = e,
            i = (0, x.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: ea.familyCenterButtonContainer,
                  children: (0, r.jsx)(J.bU, {
                      onClick: () => {
                          (0, f.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, eo({}, t));
                          });
                      },
                      "aria-label": ei.intl.string(ei.t.cpT0Cg),
                      icon: g.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(ea.familyCenterButtonContainer, ea.withPadding),
                    children: (0, r.jsx)(g.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: ea.familyCenterButtonContainer,
                    children: (0, r.jsx)(I.ZP, {
                        contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === p.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: ei.intl.string(ei.t.y2b7CA),
                                      color: v.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eb = () => (0, G.$Z)("DM_SEARCH");
function e_(e) {
    switch (e) {
        case et.Z5c.APPLICATION_LIBRARY:
            return et.ZY5.LIBRARY;
        case et.Z5c.FRIENDS:
            return et.ZY5.FRIENDS_LIST;
        case et.Z5c.COLLECTIBLES_SHOP:
            return et.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(et.Z5c.APPLICATION_STORE)
        ? e === et.Z5c.APPLICATION_STORE
            ? et.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(et.Z5c.APPLICATION_STORE)
              ? et.ZY5.STORE_DIRECTORY_BROWSE
              : et.ZY5.STORE_LISTING
        : et.ZY5.DM_CHANNEL;
}
let eO = i.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
            premiumTabSelected: o,
            shouldShowNitroTab: s,
            isReferralProgramPopoverShowable: c,
            shouldShowMessageRequestsRow: d,
            shouldShowFamilyCenterRow: p,
            createDMButtonVariant: f,
            selectedChannelId: g,
            path: m,
        } = e,
        b = i.useRef(null),
        _ = i.useRef(null),
        O = i.useRef(null),
        E = i.useRef(null),
        v = w.ZP.useExperiment({ location: "NitroTabButton" });
    return (0, r.jsxs)("nav", {
        className: ea.privateChannels,
        "aria-label": ei.intl.string(ei.t.ZH9aPz),
        children: [
            (0, r.jsx)(V.Z, {
                childRef: b,
                tutorialId: "direct-messages",
                position: "right",
                offsetX: -52,
                children: (0, r.jsx)("div", {
                    ref: b,
                    className: a()(ea.searchBar, { [ea.themedHeaderMobile]: u.tq }),
                    children: (0, r.jsx)(h.zx, {
                        grow: !0,
                        color: h.zx.Colors.PRIMARY,
                        size: h.zx.Sizes.SMALL,
                        fullWidth: !0,
                        onClick: eb,
                        children: ei.intl.string(ei.t.LzcpeX),
                    }),
                }),
            }),
            (0, r.jsxs)(
                $.Z,
                es(eo({}, e), {
                    version: m,
                    selectedChannelId: g,
                    showDMHeader: !0,
                    listScrollerRef: O,
                    createDMCTAButtonVariant: f,
                    children: [
                        (0, r.jsx)(
                            eu,
                            { selected: null != m ? m === et.Z5c.FRIENDS : l === et.Z5c.FRIENDS },
                            "friends",
                        ),
                        n && t
                            ? (0, r.jsx)(
                                  ed,
                                  {
                                      selected:
                                          null == m
                                              ? null != l && l.startsWith(et.Z5c.APPLICATION_LIBRARY)
                                              : m.startsWith(et.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === et.Z5c.APPLICATION_LIBRARY,
                                  },
                                  "library",
                              )
                            : null,
                        d
                            ? (0, r.jsx)(
                                  eh,
                                  {
                                      selected:
                                          null == m
                                              ? null != l && l.startsWith(et.Z5c.MESSAGE_REQUESTS)
                                              : m === et.Z5c.MESSAGE_REQUESTS,
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
                                              nitroTabButtonRef: E,
                                              selected: null == m ? o : m.startsWith(et.Z5c.APPLICATION_STORE),
                                              route: et.Z5c.APPLICATION_STORE,
                                              locationState: {
                                                  analyticsSource: {
                                                      page: e_(l),
                                                      section: et.jXE.NAVIGATION,
                                                      object: et.qAy.NAVIGATION_LINK,
                                                  },
                                              },
                                          },
                                          "premium",
                                      ),
                                      c && v.cohort === w.xI.Interactive && (0, r.jsx)(k.F, { targetElementRef: E }),
                                  ],
                              })
                            : null,
                        (0, r.jsx)(
                            y.i,
                            {
                                selected:
                                    m === et.Z5c.COLLECTIBLES_SHOP ||
                                    (null == l ? void 0 : l.startsWith(et.Z5c.COLLECTIBLES_SHOP)),
                                listItemRef: _,
                                listScrollerRef: O,
                                locationState: {
                                    analyticsSource: {
                                        page: e_(l),
                                        section: et.jXE.NAVIGATION,
                                        object: et.qAy.NAVIGATION_LINK,
                                    },
                                },
                            },
                            "discord-shop",
                        ),
                        p
                            ? (0, r.jsx)(
                                  eg,
                                  {
                                      selected:
                                          (null != l && l.startsWith(et.Z5c.FAMILY_CENTER)) ||
                                          (null != m && m.startsWith(et.Z5c.FAMILY_CENTER)),
                                  },
                                  "family-center",
                              )
                            : null,
                        (0, r.jsx)(eE, {}, "section-divider-top"),
                        "full-width" === f && (0, r.jsx)(ep, {}, "create-dm"),
                    ],
                }),
            ),
        ],
    });
});
function eE() {
    return (0, r.jsx)("div", { className: ea.sectionDivider });
}
function ey() {
    let e = (0, d.e7)([K.Z], () => K.Z.getHomeLink()),
        t = (0, d.e7)([Y.Z], () => {
            if (e === et.Z5c.APPLICATION_STORE) return !0;
            let t = (0, Q.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = Y.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !F.bm.useSetting(),
        { theme: i } = (0, d.cj)([H.Z], () => ({ theme: H.Z.theme })),
        l = (0, d.e7)([z.Z], () => z.Z.hasLibraryApplication()),
        a = (0, d.e7)([W.Z], () => W.Z.getCurrentPath()),
        [s, c] = (0, B.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        u = (0, M.i)({ selected: null == c ? t : c.startsWith(et.Z5c.APPLICATION_STORE) }),
        p = (0, D.eW)(),
        f = (0, P.a)(),
        h = (function () {
            let e = F.Ex.useSetting(),
                t = (0, j.Z)();
            return !0 === e && !0 === t;
        })(),
        g = (0, C.U)("PrivateChannels", { autoTrackExposure: !0 });
    return (0, r.jsx)(eO, {
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
        createDMButtonVariant: g,
        selectedChannelId: s,
        path: c,
    });
}
