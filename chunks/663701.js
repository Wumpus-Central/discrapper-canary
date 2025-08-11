n.d(t, { Z: () => e_ }), n(388685);
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
    x = n(522558),
    A = n(870041),
    Z = n(795448),
    w = n(441623),
    L = n(93237),
    R = n(138176),
    D = n(457396),
    k = n(108989),
    M = n(51596),
    U = n(905423),
    G = n(155409),
    V = n(210887),
    H = n(695346),
    B = n(283595),
    F = n(923834),
    z = n(55563),
    W = n(774343),
    Y = n(974042),
    K = n(626135),
    q = n(814225),
    X = n(515753),
    Q = n(831218),
    J = n(339149),
    $ = n(981631),
    ee = n(675654),
    et = n(474936),
    en = n(388032),
    er = n(916723),
    ei = n(416350);
function el(e) {
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
function ea(e, t) {
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
function eo(e, t) {
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
let es = (e) => {
        var { selected: t } = e,
            n = eo(e, ["selected"]);
        let l = (0, c.JA)("friends"),
            a = (0, j.If)(),
            o = (0, d.e7)([w.Z], () => w.Z.canShowFriendsTabBadge()),
            u = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
            { enabled: p } = x.w.useExperiment({ location: "Friends Tab" }, { autoTrackExposure: !1 }),
            h = o && p;
        i.useEffect(() => {
            h &&
                (0, E.h)({
                    name: s.ImpressionNames.GIFT_INTENT_BADGE,
                    type: s.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: et.hX.FRIEND_ANNIVERSARY },
                });
        }, [h]);
        let [f, m] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: ei.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    X.Qj,
                    ea(
                        el(
                            {
                                onClick: () => {
                                    let e;
                                    h
                                        ? (K.default.track($.rMx.GIFT_INTENT_BADGE_CLICKED, {
                                              gift_intent_type: et.hX.FRIEND_ANNIVERSARY,
                                          }),
                                          (e = $.pJs.ALL),
                                          b.Z.setSection($.pJs.ALL),
                                          (0, Z.Gk)())
                                        : (e = Y.ZP.getState().section),
                                        (0, O.Z)({ tab_opened: e });
                                },
                                interactiveClassName: h ? ei.friendsBadge : void 0,
                                selected: t,
                                route: $.Z5c.FRIENDS,
                                icon: g.iFz,
                                text: en.intl.string(en.t.TdEu5e),
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
                h &&
                    !u &&
                    (0, r.jsx)(k.Z, {
                        className: ei.confetti,
                        wind: 0,
                        sprites: ee.CA,
                        spriteColors: ee.Br,
                        firing: f,
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
    ec = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = eo(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, c.JA)("library");
        return (0, r.jsx)(
            X.Qj,
            ea(
                el(
                    {
                        selected: t,
                        route: $.Z5c.APPLICATION_LIBRARY,
                        icon: g.vqy,
                        text: en.intl.string(en.t.cw57am),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(J.Z, {
                        className: a()(ei.downloadProgressCircle, { [ei.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    eu = () => {
        let e = (0, S.q)();
        return e > 0 ? (0, r.jsx)(g.mAB, { count: e }) : null;
    },
    ed = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)("messageRequests"),
            { channelId: i } = (0, C._)();
        if (!(0, N.a)()) return null;
        let l = null == i ? void 0 : () => m.Z.preload($.ME, i);
        return (0, r.jsx)(
            X.Qj,
            ea(
                el(
                    {
                        selected: t,
                        route: $.Z5c.MESSAGE_REQUESTS,
                        icon: g._XJ,
                        text: en.intl.string(en.t.e7GWjY),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(eu, {}) },
            ),
        );
    },
    ep = (e) => {
        let { selected: t } = e,
            n = en.intl.string(er.default.Rkdixs),
            l = (0, c.JA)("family-center"),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            X.Qj,
            ea(
                el(
                    {
                        selected: t,
                        route: $.Z5c.FAMILY_CENTER,
                        icon: g.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            o(!0);
                        },
                        onMouseLeave: () => {
                            o(!1);
                        },
                        interactiveClassName: ei.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(eh, { isParentHovered: a }) },
            ),
        );
    },
    eh = (e) => {
        let { isParentHovered: t } = e,
            i = (0, P.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: ei.familyCenterButtonContainer,
                  children: (0, r.jsx)(X.bU, {
                      onClick: () => {
                          (0, h.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, el({}, t));
                          });
                      },
                      "aria-label": en.intl.string(en.t.cpT0Cg),
                      icon: g.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(ei.familyCenterButtonContainer, ei.withPadding),
                    children: (0, r.jsx)(g.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: ei.familyCenterButtonContainer,
                    children: (0, r.jsx)(I.ZP, {
                        contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === p.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: en.intl.string(en.t.y2b7CA),
                                      color: v.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    ef = () => (0, M.$Z)("DM_SEARCH");
function eg(e) {
    switch (e) {
        case $.Z5c.APPLICATION_LIBRARY:
            return $.ZY5.LIBRARY;
        case $.Z5c.FRIENDS:
            return $.ZY5.FRIENDS_LIST;
        case $.Z5c.COLLECTIBLES_SHOP:
            return $.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith($.Z5c.APPLICATION_STORE)
        ? e === $.Z5c.APPLICATION_STORE
            ? $.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith($.Z5c.APPLICATION_STORE)
              ? $.ZY5.STORE_DIRECTORY_BROWSE
              : $.ZY5.STORE_LISTING
        : $.ZY5.DM_CHANNEL;
}
let em = i.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
            premiumTabSelected: o,
            shouldShowNitroTab: s,
            isReferralProgramPopoverShowable: c,
            shouldShowMessageRequestsRow: d,
            shouldShowFamilyCenterRow: p,
            selectedChannelId: h,
            path: g,
        } = e,
        m = i.useRef(null),
        b = i.useRef(null),
        _ = i.useRef(null),
        O = i.useRef(null),
        E = A.ZP.useExperiment({ location: "NitroTabButton" });
    return (0, r.jsxs)("nav", {
        className: ei.privateChannels,
        "aria-label": en.intl.string(en.t.ZH9aPz),
        children: [
            (0, r.jsx)(G.Z, {
                childRef: m,
                tutorialId: "direct-messages",
                position: "right",
                offsetX: -52,
                children: (0, r.jsx)("div", {
                    ref: m,
                    className: a()(ei.searchBar, { [ei.themedHeaderMobile]: u.tq }),
                    children: (0, r.jsx)(f.zx, {
                        grow: !0,
                        color: f.zx.Colors.PRIMARY,
                        size: f.zx.Sizes.SMALL,
                        fullWidth: !0,
                        onClick: ef,
                        children: en.intl.string(en.t.LzcpeX),
                    }),
                }),
            }),
            (0, r.jsxs)(
                Q.Z,
                ea(el({}, e), {
                    version: g,
                    selectedChannelId: h,
                    showDMHeader: !0,
                    listScrollerRef: _,
                    children: [
                        (0, r.jsx)(es, { selected: null != g ? g === $.Z5c.FRIENDS : l === $.Z5c.FRIENDS }, "friends"),
                        n && t
                            ? (0, r.jsx)(
                                  ec,
                                  {
                                      selected:
                                          null == g
                                              ? null != l && l.startsWith($.Z5c.APPLICATION_LIBRARY)
                                              : g.startsWith($.Z5c.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === $.Z5c.APPLICATION_LIBRARY,
                                  },
                                  "library",
                              )
                            : null,
                        d
                            ? (0, r.jsx)(
                                  ed,
                                  {
                                      selected:
                                          null == g
                                              ? null != l && l.startsWith($.Z5c.MESSAGE_REQUESTS)
                                              : g === $.Z5c.MESSAGE_REQUESTS,
                                  },
                                  "message-requests",
                              )
                            : null,
                        s
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(
                                          D.g,
                                          {
                                              nitroTabButtonRef: O,
                                              selected: null == g ? o : g.startsWith($.Z5c.APPLICATION_STORE),
                                              route: $.Z5c.APPLICATION_STORE,
                                              locationState: {
                                                  analyticsSource: {
                                                      page: eg(l),
                                                      section: $.jXE.NAVIGATION,
                                                      object: $.qAy.NAVIGATION_LINK,
                                                  },
                                              },
                                          },
                                          "premium",
                                      ),
                                      c && E.cohort === A.xI.Interactive && (0, r.jsx)(R.F, { targetElementRef: O }),
                                  ],
                              })
                            : null,
                        (0, r.jsx)(
                            y.i,
                            {
                                selected:
                                    g === $.Z5c.COLLECTIBLES_SHOP ||
                                    (null == l ? void 0 : l.startsWith($.Z5c.COLLECTIBLES_SHOP)),
                                listItemRef: b,
                                listScrollerRef: _,
                                locationState: {
                                    analyticsSource: {
                                        page: eg(l),
                                        section: $.jXE.NAVIGATION,
                                        object: $.qAy.NAVIGATION_LINK,
                                    },
                                },
                            },
                            "discord-shop",
                        ),
                        p
                            ? (0, r.jsx)(
                                  ep,
                                  {
                                      selected:
                                          (null != l && l.startsWith($.Z5c.FAMILY_CENTER)) ||
                                          (null != g && g.startsWith($.Z5c.FAMILY_CENTER)),
                                  },
                                  "family-center",
                              )
                            : null,
                        (0, r.jsx)(eb, {}, "section-divider-top"),
                    ],
                }),
            ),
        ],
    });
});
function eb() {
    return (0, r.jsx)("div", { className: ei.sectionDivider });
}
function e_() {
    let e = (0, d.e7)([W.Z], () => W.Z.getHomeLink()),
        t = (0, d.e7)([z.Z], () => {
            if (e === $.Z5c.APPLICATION_STORE) return !0;
            let t = (0, q.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = z.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !H.bm.useSetting(),
        { theme: i } = (0, d.cj)([V.Z], () => ({ theme: V.Z.theme })),
        l = (0, d.e7)([B.Z], () => B.Z.hasLibraryApplication()),
        a = (0, d.e7)([F.Z], () => F.Z.getCurrentPath()),
        [s, c] = (0, U.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        u = (0, D.i)({ selected: null == c ? t : c.startsWith($.Z5c.APPLICATION_STORE) }),
        p = (0, L.eW)(),
        h = (0, N.a)(),
        f = (function () {
            let e = H.Ex.useSetting(),
                t = (0, T.Z)();
            return !0 === e && !0 === t;
        })();
    return (0, r.jsx)(em, {
        theme: i,
        showLibrary: n,
        hasLibraryApplication: l,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        shouldShowNitroTab: u,
        isReferralProgramPopoverShowable: p,
        shouldShowMessageRequestsRow: h,
        shouldShowFamilyCenterRow: f,
        selectedChannelId: s,
        path: c,
    });
}
