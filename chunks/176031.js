n.d(t, { A: () => eT, n: () => eN }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(942381),
    o = n(110259),
    d = n(837381),
    c = n(607399),
    u = n(311907),
    A = n(554146),
    h = n(827734),
    _ = n(492917),
    m = n(192308),
    p = n(3026),
    g = n(435371),
    E = n(397927),
    f = n(308528),
    I = n(711950),
    C = n(701363),
    N = n(828100),
    T = n(509963),
    S = n(775602),
    x = n(924283),
    v = n(139286),
    b = n(213750),
    y = n(771781),
    L = n(379848),
    O = n(921318),
    R = n(335934),
    P = n(957283),
    j = n(411976),
    D = n(430783),
    w = n(945276),
    M = n(834981),
    U = n(912309),
    G = n(70730),
    k = n(275759),
    V = n(717807),
    B = n(385327),
    H = n(727949),
    F = n(466336),
    Y = n(615003),
    W = n(442802),
    q = n(67173),
    z = n(793322),
    K = n(366811),
    $ = n(728321),
    Q = n(544028),
    X = n(253932),
    Z = n(189081),
    J = n(839067),
    ee = n(67480),
    et = n(619921),
    en = n(595623),
    ei = n(954571),
    er = n(541830),
    ea = n(652215),
    el = n(851110),
    es = n(49999),
    eo = n(788868),
    ed = n(985018),
    ec = n(842130),
    eu = n(870463);
let eA = (e) => {
        let { selected: t, ...n } = e,
            r = (0, R.c)("PrivateChannels.ICYMIButton"),
            a = (0, d.rm)("icymi");
        return r
            ? (0, i.jsx)("div", {
                  className: eu.F2,
                  children: (0, i.jsx)(C.z9, {
                      selected: t,
                      route: ea.BVt.ICYMI,
                      icon: E.gXB,
                      text: (0, i.jsxs)(i.Fragment, {
                          children: [
                              ed.intl.string(ed.t["jnXV/V"]),
                              (0, i.jsx)("span", { className: eu.HH, children: ed.intl.string(ed.t.Ac2OZA) }),
                          ],
                      }),
                      ...n,
                      ...a,
                  }),
              })
            : null;
    },
    eh = (e) => {
        let { selected: t, ...n } = e,
            a = (0, d.rm)("friends"),
            l = (0, U.kX)(),
            s = (0, u.bG)([k.Ay], () => k.Ay.canShowFriendsTabBadge()),
            c = (0, u.bG)([S.A], () => S.A.useReducedMotion),
            { enabled: h } = G.u.useConfig({ location: "Friends Tab" }),
            [m, p] = (0, L.Wl)(s && h ? A.M.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, { cooldownDurationMs: k.hb }),
            f = m === A.M.GIFTING_INTENT_FRIENDS_TAB_BADGE;
        r.useEffect(() => {
            f &&
                (0, v.x)({
                    name: o.ImpressionNames.GIFT_INTENT_BADGE,
                    type: o.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: eo.np.FRIEND_ANNIVERSARY },
                });
        }, [f]);
        let N = () => {
                let e;
                f
                    ? (ei.default.track(ea.HAw.GIFT_INTENT_BADGE_CLICKED, {
                          gift_intent_type: eo.np.FRIEND_ANNIVERSARY,
                      }),
                      (e = ea.m3P.ALL),
                      I.A.setSection(ea.m3P.ALL),
                      p(es.i.TAKE_ACTION))
                    : (e = en.Ay.getState().section),
                    (0, x.A)({ tab_opened: e });
            },
            [T, b] = r.useState(!1),
            y = () => {
                b(!1);
            },
            O = () => {
                b(!0);
            },
            R = () =>
                (0, i.jsx)(C.z9, {
                    onClick: N,
                    interactiveClassName: f ? eu.hc : void 0,
                    selected: t,
                    route: ea.BVt.FRIENDS,
                    icon: E.$yI,
                    text: ed.intl.string(ed.t.TdEu5X),
                    onMouseEnter: O,
                    onMouseLeave: y,
                    ...n,
                    ...a,
                    children: l > 0 ? (0, i.jsx)(E.hVq, { count: l }) : null,
                });
        return (0, i.jsx)("div", {
            className: eu.F2,
            children: f
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.un, {
                              title: ed.intl.string(ed.t.Thb5MO),
                              body: ed.intl.string(ed.t.kGvgwS),
                              position: "left",
                              asset: (0, i.jsx)(_.xhM, { size: 32, alt: ed.intl.string(ed.t["4LohBA"]) }),
                              children: R(),
                          }),
                          !c &&
                              (0, i.jsx)(W.A, {
                                  className: eu.t_,
                                  wind: 0,
                                  sprites: el.uI,
                                  spriteColors: el._t,
                                  firing: T,
                                  confettiConfig: {
                                      opacity: { type: "static", value: 1 },
                                      dragCoefficient: { type: "static", value: { x: 100, y: 100 } },
                                  },
                              }),
                      ],
                  })
                : R(),
        });
    },
    e_ = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...r } = e,
            a = (0, d.rm)("library");
        return (0, i.jsx)(C.z9, {
            selected: t,
            route: ea.BVt.APPLICATION_LIBRARY,
            icon: E._z,
            text: ed.intl.string(ed.t.cw57ar),
            ...r,
            ...a,
            children: (0, i.jsx)(T.A, { className: l()(eu.Qw, { [eu.QI]: n }) }),
        });
    },
    em = () => {
        let e = (0, j.W)();
        return e > 0 ? (0, i.jsx)(E.hVq, { count: e }) : null;
    },
    ep = (e) => {
        let { selected: t } = e,
            n = (0, d.rm)("messageRequests"),
            { channelId: r } = (0, P.N)();
        if (!(0, D.H)()) return null;
        let a = null == r ? void 0 : () => f.A.preload(ea.ME, r);
        return (0, i.jsx)(C.z9, {
            selected: t,
            route: ea.BVt.MESSAGE_REQUESTS,
            icon: E.u6c,
            text: ed.intl.string(ed.t.e7GWjQ),
            onClick: a,
            ...n,
            children: (0, i.jsx)(em, {}),
        });
    },
    eg = (e) => {
        let { selected: t } = e,
            n = ed.intl.string(ec.default.Rkdixs),
            a = (0, d.rm)("family-center"),
            [l, s] = r.useState(!0);
        return (0, i.jsx)(C.z9, {
            selected: t,
            route: ea.BVt.FAMILY_CENTER,
            icon: E.nFg,
            text: n,
            onMouseEnter: () => {
                s(!0);
            },
            onMouseLeave: () => {
                s(!1);
            },
            interactiveClassName: eu.M1,
            ...a,
            children: (0, i.jsx)(eE, { isParentHovered: l }),
        });
    },
    eE = (e) => {
        let { isParentHovered: t } = e,
            r = (0, M.VT)();
        return t
            ? (0, i.jsx)("div", {
                  className: eu.lL,
                  children: (0, i.jsx)(C.w_, {
                      onClick: () => {
                          (0, m.openModalLazy)(async () => {
                              let { default: e } = await n.e("67195").then(n.bind(n, 371158));
                              return (t) => (0, i.jsx)(e, { ...t });
                          });
                      },
                      "aria-label": ed.intl.string(ed.t.cpT0Cq),
                      icon: E.PGe,
                  }),
              })
            : r > 0
              ? (0, i.jsx)("div", { className: l()(eu.lL, eu.iL), children: (0, i.jsx)(E.hVq, { count: r }) })
              : (0, i.jsx)("div", {
                    className: eu.lL,
                    children: (0, i.jsx)(L.Ay, {
                        contentTypes: [A.M.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === A.M.FAMILY_CENTER_NEW_BADGE
                                ? (0, i.jsx)(E.LpS, {
                                      text: ed.intl.string(ed.t.y2b7CA),
                                      color: h.A.colors.BACKGROUND_BRAND.css,
                                  })
                                : null;
                        },
                    }),
                });
    },
    ef = () => (0, z.WU)("DM_SEARCH");
function eI(e) {
    switch (e) {
        case ea.BVt.APPLICATION_LIBRARY:
            return ea.liQ.LIBRARY;
        case ea.BVt.FRIENDS:
            return ea.liQ.FRIENDS_LIST;
        case ea.BVt.COLLECTIBLES_SHOP:
            return ea.liQ.COLLECTIBLES_SHOP;
    }
    return e.startsWith(ea.BVt.APPLICATION_STORE)
        ? e === ea.BVt.APPLICATION_STORE
            ? ea.liQ.STORE_DIRECTORY_HOME
            : e.startsWith(ea.BVt.APPLICATION_STORE)
              ? ea.liQ.STORE_DIRECTORY_BROWSE
              : ea.liQ.STORE_LISTING
        : ea.liQ.DM_CHANNEL;
}
let eC = r.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: a,
            premiumTabSelected: s,
            shouldShowNitroTab: o,
            showReferralProgramPopover: d,
            showRecurring3PPopover: u,
            shouldShowMessageRequestsRow: A,
            shouldShowFamilyCenterRow: h,
            selectedChannelId: _,
            path: m,
        } = e,
        g = r.useRef(null),
        f = r.useRef(null),
        I = r.useRef(null),
        C = r.useRef(null),
        T = (0, R.c)("PrivateChannels"),
        S = null;
    return (
        d ? (S = (0, i.jsx)(F.V, { targetElementRef: C })) : u && (S = (0, i.jsx)(V.A, { targetElementRef: C })),
        (0, i.jsxs)("nav", {
            className: eu.AB,
            "aria-label": ed.intl.string(ed.t.ZH9aP4),
            children: [
                (0, i.jsx)($.A, {
                    childRef: g,
                    tutorialId: "direct-messages",
                    position: "right",
                    offsetX: -52,
                    children: (0, i.jsx)("div", {
                        ref: g,
                        className: l()(eu.ON, { [eu.jD]: c.Fr }),
                        children: (0, i.jsx)(E.Button, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "sm",
                            onClick: ef,
                            text: ed.intl.format(ed.t.fH9FBy, {
                                tooltipHook: (e, t) => (0, i.jsx)(p.A, { children: e }, t),
                            }),
                        }),
                    }),
                }),
                (0, i.jsxs)(N.A, {
                    ...e,
                    version: m,
                    selectedChannelId: _,
                    listScrollerRef: I,
                    children: [
                        (0, i.jsx)(
                            eh,
                            { selected: null != m ? m === ea.BVt.FRIENDS : a === ea.BVt.FRIENDS },
                            "friends",
                        ),
                        T
                            ? (0, i.jsx)(eA, { selected: null != m ? m === ea.BVt.ICYMI : a === ea.BVt.ICYMI }, "icymi")
                            : null,
                        n && t
                            ? (0, i.jsx)(
                                  e_,
                                  {
                                      selected:
                                          null == m
                                              ? null != a && a.startsWith(ea.BVt.APPLICATION_LIBRARY)
                                              : m.startsWith(ea.BVt.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: a === ea.BVt.APPLICATION_LIBRARY,
                                  },
                                  "library",
                              )
                            : null,
                        A
                            ? (0, i.jsx)(
                                  ep,
                                  {
                                      selected:
                                          null == m
                                              ? null != a && a.startsWith(ea.BVt.MESSAGE_REQUESTS)
                                              : m === ea.BVt.MESSAGE_REQUESTS,
                                  },
                                  "message-requests",
                              )
                            : null,
                        o
                            ? (0, i.jsxs)(
                                  "div",
                                  {
                                      children: [
                                          (0, i.jsx)(Y.o, {
                                              nitroTabButtonRef: C,
                                              selected: null == m ? s : m.startsWith(ea.BVt.APPLICATION_STORE),
                                              route: ea.BVt.APPLICATION_STORE,
                                              locationState: {
                                                  analyticsSource: {
                                                      page: eI(a),
                                                      section: ea.JJy.NAVIGATION,
                                                      object: ea.ZSU.NAVIGATION_LINK,
                                                  },
                                              },
                                          }),
                                          S,
                                      ],
                                  },
                                  "nitro-tab-group",
                              )
                            : null,
                        (0, i.jsx)(
                            b.i,
                            {
                                selected: m === ea.BVt.COLLECTIBLES_SHOP || a?.startsWith(ea.BVt.COLLECTIBLES_SHOP),
                                listItemRef: f,
                                locationState: {
                                    analyticsSource: {
                                        page: eI(a),
                                        section: ea.JJy.NAVIGATION,
                                        object: ea.ZSU.NAVIGATION_LINK,
                                    },
                                },
                            },
                            "discord-shop",
                        ),
                        h
                            ? (0, i.jsx)(
                                  eg,
                                  {
                                      selected:
                                          (null != a && a.startsWith(ea.BVt.FAMILY_CENTER)) ||
                                          (null != m && m.startsWith(ea.BVt.FAMILY_CENTER)),
                                  },
                                  "family-center",
                              )
                            : null,
                        (0, i.jsx)(
                            q.A,
                            {
                                selected:
                                    null == m
                                        ? null != a && a.startsWith(ea.BVt.QUEST_HOME_V2)
                                        : m === ea.BVt.QUEST_HOME_V2,
                            },
                            "quests",
                        ),
                        (0, i.jsx)(eN, {}, "section-divider-top"),
                        (0, i.jsx)(O.A, {}, "frequent-friends"),
                    ],
                }),
            ],
        })
    );
});
function eN() {
    return (0, i.jsx)("div", { className: eu.ts });
}
function eT() {
    let e,
        t,
        n = (0, u.bG)([et.A], () => et.A.getHomeLink()),
        r = (0, u.bG)([ee.A], () => {
            if (n === ea.BVt.APPLICATION_STORE) return !0;
            let e = (0, er.qt)(n);
            return null != e && (ee.A.get(e)?.premium ?? !1);
        }, [n]),
        a = !X.l_.useSetting(),
        { theme: l } = (0, u.cf)([Q.A], () => ({ theme: Q.A.theme })),
        o = (0, u.bG)([Z.A], () => Z.A.hasLibraryApplication()),
        d = (0, u.bG)([J.A], () => J.A.getCurrentPath()),
        [c, h] = (0, K.A)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, s.x),
        _ = (0, Y.P)({ selected: null == h ? r : h.startsWith(ea.BVt.APPLICATION_STORE) }),
        m = (0, H.Tp)(),
        p = (0, B.c7)(),
        g = [];
    (0, y.Tc)() && (m && g.push(A.M.REFERRAL_PROGRAM_POPOVER), p && g.push(A.M.RECURRING_3P_PROMOTION_POPOVER));
    let [E, f] = (0, L.kn)(g, void 0, !0),
        I = (0, D.H)(),
        C = ((e = X.dm.useSetting()), (t = (0, w.A)()), !0 === e && !0 === t);
    return (0, i.jsx)(eC, {
        theme: l,
        showLibrary: a,
        hasLibraryApplication: o,
        storeLink: d,
        homeLink: n,
        premiumTabSelected: r,
        shouldShowNitroTab: _,
        showReferralProgramPopover: E === A.M.REFERRAL_PROGRAM_POPOVER,
        showRecurring3PPopover: E === A.M.RECURRING_3P_PROMOTION_POPOVER,
        shouldShowMessageRequestsRow: I,
        shouldShowFamilyCenterRow: C,
        selectedChannelId: c,
        path: h,
    });
}
