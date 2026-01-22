n.d(t, {
    A: () => eC,
    n: () => eS,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(942381),
    o = n(110259),
    c = n(837381),
    u = n(607399),
    d = n(311907),
    p = n(554146),
    f = n(827734),
    h = n(492917),
    A = n(192308),
    g = n(3026),
    m = n(435371),
    b = n(397927),
    _ = n(308528),
    E = n(711950),
    O = n(701363),
    y = n(828100),
    I = n(509963),
    v = n(775602),
    S = n(924283),
    C = n(139286),
    N = n(213750),
    T = n(771781),
    j = n(379848),
    x = n(921318),
    P = n(335934),
    w = n(957283),
    L = n(411976),
    R = n(430783),
    D = n(945276),
    M = n(834981),
    k = n(912309),
    U = n(70730),
    G = n(275759),
    V = n(717807),
    B = n(385327),
    H = n(727949),
    F = n(466336),
    Y = n(615003),
    K = n(442802),
    z = n(67173),
    W = n(793322),
    q = n(366811),
    Q = n(728321),
    X = n(544028),
    Z = n(253932),
    J = n(189081),
    $ = n(839067),
    ee = n(67480),
    et = n(619921),
    en = n(595623),
    er = n(954571),
    ei = n(541830),
    el = n(652215),
    ea = n(851110),
    es = n(49999),
    eo = n(788868),
    ec = n(985018),
    eu = n(842130),
    ed = n(870463);

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
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++)
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}
let eA = (e) => {
        let { selected: t } = e,
            n = eh(e, ["selected"]),
            i = (0, P.c)("PrivateChannels.ICYMIButton"),
            l = (0, c.rm)("icymi");
        return i
            ? (0, r.jsx)("div", {
                  className: ed.F2,
                  children: (0, r.jsx)(
                      O.z9,
                      ep(
                          {
                              selected: t,
                              route: el.BVt.ICYMI,
                              icon: b.gXB,
                              text: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      ec.intl.string(ec.t["jnXV/V"]),
                                      (0, r.jsx)("span", {
                                          className: ed.HH,
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
        let { selected: t } = e,
            n = eh(e, ["selected"]),
            l = (0, c.rm)("friends"),
            a = (0, k.kX)(),
            s = (0, d.bG)([G.Ay], () => G.Ay.canShowFriendsTabBadge()),
            u = (0, d.bG)([v.A], () => v.A.useReducedMotion),
            { enabled: f } = U.u.useConfig({
                location: "Friends Tab",
            }),
            [A, g] = (0, j.Wl)(s && f ? p.M.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, {
                cooldownDurationMs: G.hb,
            }),
            _ = A === p.M.GIFTING_INTENT_FRIENDS_TAB_BADGE;
        i.useEffect(() => {
            _ &&
                (0, C.x)({
                    name: o.ImpressionNames.GIFT_INTENT_BADGE,
                    type: o.ImpressionTypes.VIEW,
                    properties: {
                        gift_intent_type: eo.np.FRIEND_ANNIVERSARY,
                    },
                });
        }, [_]);
        let y = () => {
                let e;
                _
                    ? (er.default.track(el.HAw.GIFT_INTENT_BADGE_CLICKED, {
                          gift_intent_type: eo.np.FRIEND_ANNIVERSARY,
                      }),
                      (e = el.m3P.ALL),
                      E.A.setSection(el.m3P.ALL),
                      g(es.i.TAKE_ACTION))
                    : (e = en.Ay.getState().section),
                    (0, S.A)({
                        tab_opened: e,
                    });
            },
            [I, N] = i.useState(!1),
            T = () => {
                N(!1);
            },
            x = () => {
                N(!0);
            },
            P = () =>
                (0, r.jsx)(
                    O.z9,
                    ef(
                        ep(
                            {
                                onClick: y,
                                interactiveClassName: _ ? ed.hc : void 0,
                                selected: t,
                                route: el.BVt.FRIENDS,
                                icon: b.$yI,
                                text: ec.intl.string(ec.t.TdEu5X),
                                onMouseEnter: x,
                                onMouseLeave: T,
                            },
                            n,
                            l,
                        ),
                        {
                            children:
                                a > 0
                                    ? (0, r.jsx)(b.hVq, {
                                          count: a,
                                      })
                                    : null,
                        },
                    ),
                );
        return (0, r.jsx)("div", {
            className: ed.F2,
            children: _
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(m.un, {
                              title: ec.intl.string(ec.t.Thb5MO),
                              body: ec.intl.string(ec.t.kGvgwS),
                              position: "left",
                              asset: (0, r.jsx)(h.xhM, {
                                  size: 32,
                                  alt: ec.intl.string(ec.t["4LohBA"]),
                              }),
                              children: P(),
                          }),
                          !u &&
                              (0, r.jsx)(K.A, {
                                  className: ed.t_,
                                  wind: 0,
                                  sprites: ea.uI,
                                  spriteColors: ea._t,
                                  firing: I,
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
                  })
                : P(),
        });
    },
    em = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = eh(e, ["selected", "hideGameUpdateProgressIndicator"]),
            l = (0, c.rm)("library");
        return (0, r.jsx)(
            O.z9,
            ef(
                ep(
                    {
                        selected: t,
                        route: el.BVt.APPLICATION_LIBRARY,
                        icon: b._z,
                        text: ec.intl.string(ec.t.cw57ar),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(I.A, {
                        className: a()(ed.Qw, {
                            [ed.QI]: n,
                        }),
                    }),
                },
            ),
        );
    },
    eb = () => {
        let e = (0, L.W)();
        return e > 0
            ? (0, r.jsx)(b.hVq, {
                  count: e,
              })
            : null;
    },
    e_ = (e) => {
        let { selected: t } = e,
            n = (0, c.rm)("messageRequests"),
            { channelId: i } = (0, w.N)();
        if (!(0, R.H)()) return null;
        let l = null == i ? void 0 : () => _.A.preload(el.ME, i);
        return (0, r.jsx)(
            O.z9,
            ef(
                ep(
                    {
                        selected: t,
                        route: el.BVt.MESSAGE_REQUESTS,
                        icon: b.u6c,
                        text: ec.intl.string(ec.t.e7GWjQ),
                        onClick: l,
                    },
                    n,
                ),
                {
                    children: (0, r.jsx)(eb, {}),
                },
            ),
        );
    },
    eE = (e) => {
        let { selected: t } = e,
            n = ec.intl.string(eu.default.Rkdixs),
            l = (0, c.rm)("family-center"),
            [a, s] = i.useState(!0);
        return (0, r.jsx)(
            O.z9,
            ef(
                ep(
                    {
                        selected: t,
                        route: el.BVt.FAMILY_CENTER,
                        icon: b.nFg,
                        text: n,
                        onMouseEnter: () => {
                            s(!0);
                        },
                        onMouseLeave: () => {
                            s(!1);
                        },
                        interactiveClassName: ed.M1,
                    },
                    l,
                ),
                {
                    children: (0, r.jsx)(eO, {
                        isParentHovered: a,
                    }),
                },
            ),
        );
    },
    eO = (e) => {
        let { isParentHovered: t } = e,
            i = (0, M.VT)();
        return t
            ? (0, r.jsx)("div", {
                  className: ed.lL,
                  children: (0, r.jsx)(O.w_, {
                      onClick: () => {
                          (0, A.openModalLazy)(async () => {
                              let { default: e } = await n.e("67195").then(n.bind(n, 371158));
                              return (t) => (0, r.jsx)(e, ep({}, t));
                          });
                      },
                      "aria-label": ec.intl.string(ec.t.cpT0Cq),
                      icon: b.PGe,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(ed.lL, ed.iL),
                    children: (0, r.jsx)(b.hVq, {
                        count: i,
                    }),
                })
              : (0, r.jsx)("div", {
                    className: ed.lL,
                    children: (0, r.jsx)(j.Ay, {
                        contentTypes: [p.M.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === p.M.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(b.LpS, {
                                      text: ec.intl.string(ec.t.y2b7CA),
                                      color: f.A.colors.BACKGROUND_BRAND.css,
                                  })
                                : null;
                        },
                    }),
                });
    },
    ey = () => (0, W.WU)("DM_SEARCH");

function eI(e) {
    switch (e) {
        case el.BVt.APPLICATION_LIBRARY:
            return el.liQ.LIBRARY;
        case el.BVt.FRIENDS:
            return el.liQ.FRIENDS_LIST;
        case el.BVt.COLLECTIBLES_SHOP:
            return el.liQ.COLLECTIBLES_SHOP;
    }
    return e.startsWith(el.BVt.APPLICATION_STORE)
        ? e === el.BVt.APPLICATION_STORE
            ? el.liQ.STORE_DIRECTORY_HOME
            : e.startsWith(el.BVt.APPLICATION_STORE)
              ? el.liQ.STORE_DIRECTORY_BROWSE
              : el.liQ.STORE_LISTING
        : el.liQ.DM_CHANNEL;
}
let ev = i.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
            premiumTabSelected: s,
            shouldShowNitroTab: o,
            showReferralProgramPopover: c,
            showRecurring3PPopover: d,
            shouldShowMessageRequestsRow: p,
            shouldShowFamilyCenterRow: f,
            selectedChannelId: h,
            path: A,
        } = e,
        m = i.useRef(null),
        _ = i.useRef(null),
        E = i.useRef(null),
        O = i.useRef(null),
        I = (0, P.c)("PrivateChannels"),
        v = null;
    return (
        c
            ? (v = (0, r.jsx)(F.V, {
                  targetElementRef: O,
              }))
            : d &&
              (v = (0, r.jsx)(V.A, {
                  targetElementRef: O,
              })),
        (0, r.jsxs)("nav", {
            className: ed.AB,
            "aria-label": ec.intl.string(ec.t.ZH9aP4),
            children: [
                (0, r.jsx)(Q.A, {
                    childRef: m,
                    tutorialId: "direct-messages",
                    position: "right",
                    offsetX: -52,
                    children: (0, r.jsx)("div", {
                        ref: m,
                        className: a()(ed.ON, {
                            [ed.jD]: u.Fr,
                        }),
                        children: (0, r.jsx)(b.Button, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "sm",
                            onClick: ey,
                            text: ec.intl.format(ec.t.fH9FBy, {
                                tooltipHook: (e, t) =>
                                    (0, r.jsx)(
                                        g.A,
                                        {
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                    }),
                }),
                (0, r.jsxs)(
                    y.A,
                    ef(ep({}, e), {
                        version: A,
                        selectedChannelId: h,
                        listScrollerRef: E,
                        children: [
                            (0, r.jsx)(
                                eg,
                                {
                                    selected: null != A ? A === el.BVt.FRIENDS : l === el.BVt.FRIENDS,
                                },
                                "friends",
                            ),
                            I
                                ? (0, r.jsx)(
                                      eA,
                                      {
                                          selected: null != A ? A === el.BVt.ICYMI : l === el.BVt.ICYMI,
                                      },
                                      "icymi",
                                  )
                                : null,
                            n && t
                                ? (0, r.jsx)(
                                      em,
                                      {
                                          selected:
                                              null == A
                                                  ? null != l && l.startsWith(el.BVt.APPLICATION_LIBRARY)
                                                  : A.startsWith(el.BVt.APPLICATION_LIBRARY),
                                          hideGameUpdateProgressIndicator: l === el.BVt.APPLICATION_LIBRARY,
                                      },
                                      "library",
                                  )
                                : null,
                            p
                                ? (0, r.jsx)(
                                      e_,
                                      {
                                          selected:
                                              null == A
                                                  ? null != l && l.startsWith(el.BVt.MESSAGE_REQUESTS)
                                                  : A === el.BVt.MESSAGE_REQUESTS,
                                      },
                                      "message-requests",
                                  )
                                : null,
                            o
                                ? (0, r.jsxs)(
                                      "div",
                                      {
                                          children: [
                                              (0, r.jsx)(Y.o, {
                                                  nitroTabButtonRef: O,
                                                  selected: null == A ? s : A.startsWith(el.BVt.APPLICATION_STORE),
                                                  route: el.BVt.APPLICATION_STORE,
                                                  locationState: {
                                                      analyticsSource: {
                                                          page: eI(l),
                                                          section: el.JJy.NAVIGATION,
                                                          object: el.ZSU.NAVIGATION_LINK,
                                                      },
                                                  },
                                              }),
                                              v,
                                          ],
                                      },
                                      "nitro-tab-group",
                                  )
                                : null,
                            (0, r.jsx)(
                                N.i,
                                {
                                    selected:
                                        A === el.BVt.COLLECTIBLES_SHOP ||
                                        (null == l ? void 0 : l.startsWith(el.BVt.COLLECTIBLES_SHOP)),
                                    listItemRef: _,
                                    locationState: {
                                        analyticsSource: {
                                            page: eI(l),
                                            section: el.JJy.NAVIGATION,
                                            object: el.ZSU.NAVIGATION_LINK,
                                        },
                                    },
                                },
                                "discord-shop",
                            ),
                            f
                                ? (0, r.jsx)(
                                      eE,
                                      {
                                          selected:
                                              (null != l && l.startsWith(el.BVt.FAMILY_CENTER)) ||
                                              (null != A && A.startsWith(el.BVt.FAMILY_CENTER)),
                                      },
                                      "family-center",
                                  )
                                : null,
                            (0, r.jsx)(
                                z.A,
                                {
                                    selected:
                                        null == A
                                            ? null != l && l.startsWith(el.BVt.QUEST_HOME_V2)
                                            : A === el.BVt.QUEST_HOME_V2,
                                },
                                "quests",
                            ),
                            (0, r.jsx)(eS, {}, "section-divider-top"),
                            (0, r.jsx)(x.A, {}, "frequent-friends"),
                        ],
                    }),
                ),
            ],
        })
    );
});

function eS() {
    return (0, r.jsx)("div", {
        className: ed.ts,
    });
}

function eC() {
    let e,
        t,
        n = (0, d.bG)([et.A], () => et.A.getHomeLink()),
        i = (0, d.bG)([ee.A], () => {
            if (n === el.BVt.APPLICATION_STORE) return !0;
            let e = (0, ei.qt)(n);
            if (null != e) {
                var t, r;
                return null != (t = null == (r = ee.A.get(e)) ? void 0 : r.premium) && t;
            }
            return !1;
        }, [n]),
        l = !Z.l_.useSetting(),
        { theme: a } = (0, d.cf)([X.A], () => ({
            theme: X.A.theme,
        })),
        o = (0, d.bG)([J.A], () => J.A.hasLibraryApplication()),
        c = (0, d.bG)([$.A], () => $.A.getCurrentPath()),
        [u, f] = (0, q.A)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, s.x),
        h = (0, Y.P)({
            selected: null == f ? i : f.startsWith(el.BVt.APPLICATION_STORE),
        }),
        A = (0, H.Tp)(),
        g = (0, B.c7)(),
        m = [];
    (0, T.Tc)() && (A && m.push(p.M.REFERRAL_PROGRAM_POPOVER), g && m.push(p.M.RECURRING_3P_PROMOTION_POPOVER));
    let [b, _] = (0, j.kn)(m, void 0, !0),
        E = (0, R.H)(),
        O = ((e = Z.dm.useSetting()), (t = (0, D.A)()), !0 === e && !0 === t);
    return (0, r.jsx)(ev, {
        theme: a,
        showLibrary: l,
        hasLibraryApplication: o,
        storeLink: c,
        homeLink: n,
        premiumTabSelected: i,
        shouldShowNitroTab: h,
        showReferralProgramPopover: b === p.M.REFERRAL_PROGRAM_POPOVER,
        showRecurring3PPopover: b === p.M.RECURRING_3P_PROMOTION_POPOVER,
        shouldShowMessageRequestsRow: E,
        shouldShowFamilyCenterRow: O,
        selectedChannelId: u,
        path: f,
    });
}
