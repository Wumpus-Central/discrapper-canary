n.d(t, { A: () => ev, n: () => ex }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
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
    I = n(308528),
    f = n(711950),
    C = n(701363),
    T = n(828100),
    N = n(509963),
    S = n(775602),
    x = n(924283),
    v = n(139286),
    y = n(213750),
    b = n(771781),
    O = n(932001),
    L = n(379848),
    R = n(921318),
    P = n(335934),
    j = n(957283),
    D = n(411976),
    M = n(430783),
    w = n(945276),
    U = n(834981),
    G = n(912309),
    k = n(851746),
    V = n(70730),
    B = n(894374),
    H = n(275759),
    F = n(717807),
    Y = n(385327),
    q = n(727949),
    W = n(466336),
    K = n(615003),
    z = n(442802),
    $ = n(67173),
    Q = n(793322),
    X = n(366811),
    Z = n(728321),
    J = n(544028),
    ee = n(253932),
    et = n(189081),
    en = n(839067),
    ei = n(67480),
    er = n(619921),
    el = n(595623),
    ea = n(954571),
    es = n(541830),
    eo = n(652215),
    ed = n(851110),
    ec = n(49999),
    eu = n(788868),
    eA = n(985018),
    eh = n(870236),
    e_ = n(101265);
let em = (e) => {
        let { selected: t, ...n } = e,
            r = (0, P.c)("PrivateChannels.ICYMIButton"),
            l = (0, d.rm)("icymi");
        return r
            ? (0, i.jsx)("div", {
                  className: e_.F2,
                  children: (0, i.jsx)(C.z9, {
                      selected: t,
                      route: eo.BVt.ICYMI,
                      icon: E.gXB,
                      text: (0, i.jsxs)(i.Fragment, {
                          children: [
                              eA.intl.string(eA.t["jnXV/V"]),
                              (0, i.jsx)("span", { className: e_.HH, children: eA.intl.string(eA.t.Ac2OZA) }),
                          ],
                      }),
                      ...n,
                      ...l,
                  }),
              })
            : null;
    },
    ep = (e) => {
        let { selected: t, ...n } = e,
            l = (0, d.rm)("friends"),
            a = (0, G.kX)(),
            s = (0, u.bG)([H.Ay], () => H.Ay.canShowFriendsTabBadge()),
            c = (0, u.bG)([S.A], () => S.A.useReducedMotion),
            { enabled: h } = V.u.useConfig({ location: "Friends Tab" }),
            [m, p] = (0, O.Wl)(s && h ? A.M.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, { cooldownDurationMs: H.hb }),
            I = m === A.M.GIFTING_INTENT_FRIENDS_TAB_BADGE;
        r.useEffect(() => {
            I &&
                (0, v.x)({
                    name: o.ImpressionNames.GIFT_INTENT_BADGE,
                    type: o.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: eu.np.FRIEND_ANNIVERSARY },
                });
        }, [I]);
        let T = () => {
                let e;
                I
                    ? (ea.default.track(eo.HAw.GIFT_INTENT_BADGE_CLICKED, {
                          gift_intent_type: eu.np.FRIEND_ANNIVERSARY,
                      }),
                      (e = eo.m3P.ALL),
                      f.A.setSection(eo.m3P.ALL),
                      p(ec.i.TAKE_ACTION))
                    : (e = el.Ay.getState().section),
                    (0, x.A)({ tab_opened: e });
            },
            [N, y] = r.useState(!1),
            b = () => {
                y(!1);
            },
            L = () => {
                y(!0);
            },
            R = () =>
                (0, i.jsx)(C.z9, {
                    onClick: T,
                    interactiveClassName: I ? e_.hc : void 0,
                    selected: t,
                    route: eo.BVt.FRIENDS,
                    icon: E.$yI,
                    text: eA.intl.string(eA.t.TdEu5X),
                    onMouseEnter: L,
                    onMouseLeave: b,
                    ...n,
                    ...l,
                    children: a > 0 ? (0, i.jsx)(E.hVq, { count: a }) : null,
                });
        return (0, i.jsx)("div", {
            className: e_.F2,
            children: I
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.un, {
                              title: eA.intl.string(eA.t.Thb5MO),
                              body: eA.intl.string(eA.t.kGvgwS),
                              position: "left",
                              asset: (0, i.jsx)(_.xhM, { size: 32, alt: eA.intl.string(eA.t["4LohBA"]) }),
                              children: R(),
                          }),
                          !c &&
                              (0, i.jsx)(z.A, {
                                  className: e_.t_,
                                  wind: 0,
                                  sprites: ed.uI,
                                  spriteColors: ed._t,
                                  firing: N,
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
    eg = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...r } = e,
            l = (0, d.rm)("library");
        return (0, i.jsx)(C.z9, {
            selected: t,
            route: eo.BVt.APPLICATION_LIBRARY,
            icon: E._z,
            text: eA.intl.string(eA.t.cw57ar),
            ...r,
            ...l,
            children: (0, i.jsx)(N.A, { className: a()(e_.Qw, { [e_.QI]: n }) }),
        });
    },
    eE = () => {
        let e = (0, D.W)();
        return e > 0 ? (0, i.jsx)(E.hVq, { count: e }) : null;
    },
    eI = (e) => {
        let { selected: t } = e,
            n = (0, d.rm)("messageRequests"),
            { channelId: r } = (0, j.N)();
        if (!(0, M.H)()) return null;
        let l = null == r ? void 0 : () => I.A.preload(eo.ME, r);
        return (0, i.jsx)(C.z9, {
            selected: t,
            route: eo.BVt.MESSAGE_REQUESTS,
            icon: E.u6c,
            text: eA.intl.string(eA.t.e7GWjQ),
            onClick: l,
            ...n,
            children: (0, i.jsx)(eE, {}),
        });
    },
    ef = (e) => {
        let { selected: t } = e,
            n = eA.intl.string(eh.default.Rkdixs),
            l = (0, d.rm)("family-center"),
            [a, s] = r.useState(!0);
        return (0, i.jsx)(C.z9, {
            selected: t,
            route: eo.BVt.FAMILY_CENTER,
            icon: E.nFg,
            text: n,
            onMouseEnter: () => {
                s(!0);
            },
            onMouseLeave: () => {
                s(!1);
            },
            interactiveClassName: e_.M1,
            ...l,
            children: (0, i.jsx)(eC, { isParentHovered: a }),
        });
    },
    eC = (e) => {
        let { isParentHovered: t } = e,
            r = (0, U.VT)();
        return t
            ? (0, i.jsx)("div", {
                  className: e_.lL,
                  children: (0, i.jsx)(C.w_, {
                      onClick: () => {
                          (0, m.openModalLazy)(async () => {
                              let { default: e } = await n.e("67195").then(n.bind(n, 371158));
                              return (t) => (0, i.jsx)(e, { ...t });
                          });
                      },
                      "aria-label": eA.intl.string(eA.t.cpT0Cq),
                      icon: E.PGe,
                  }),
              })
            : r > 0
              ? (0, i.jsx)("div", { className: a()(e_.lL, e_.iL), children: (0, i.jsx)(E.hVq, { count: r }) })
              : (0, i.jsx)("div", {
                    className: e_.lL,
                    children: (0, i.jsx)(L.Ay, {
                        contentTypes: [A.M.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === A.M.FAMILY_CENTER_NEW_BADGE
                                ? (0, i.jsx)(E.LpS, {
                                      text: eA.intl.string(eA.t.y2b7CA),
                                      color: h.A.colors.BACKGROUND_BRAND.css,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eT = () => (0, Q.WU)("DM_SEARCH");
function eN(e) {
    switch (e) {
        case eo.BVt.APPLICATION_LIBRARY:
            return eo.liQ.LIBRARY;
        case eo.BVt.FRIENDS:
            return eo.liQ.FRIENDS_LIST;
        case eo.BVt.COLLECTIBLES_SHOP:
            return eo.liQ.COLLECTIBLES_SHOP;
    }
    return e.startsWith(eo.BVt.APPLICATION_STORE)
        ? e === eo.BVt.APPLICATION_STORE
            ? eo.liQ.STORE_DIRECTORY_HOME
            : e.startsWith(eo.BVt.APPLICATION_STORE)
              ? eo.liQ.STORE_DIRECTORY_BROWSE
              : eo.liQ.STORE_LISTING
        : eo.liQ.DM_CHANNEL;
}
let eS = r.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
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
        I = r.useRef(null),
        f = r.useRef(null),
        C = r.useRef(null),
        N = (0, P.c)("PrivateChannels"),
        S = null;
    return (
        d ? (S = (0, i.jsx)(W.V, { targetElementRef: C })) : u && (S = (0, i.jsx)(F.A, { targetElementRef: C })),
        (0, i.jsxs)("nav", {
            className: e_.AB,
            "aria-label": eA.intl.string(eA.t.ZH9aP4),
            children: [
                (0, i.jsx)(Z.A, {
                    childRef: g,
                    tutorialId: "direct-messages",
                    position: "right",
                    offsetX: -52,
                    children: (0, i.jsx)("div", {
                        ref: g,
                        className: a()(e_.ON, { [e_.jD]: c.Fr }),
                        children: (0, i.jsx)(E.Button, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "sm",
                            onClick: eT,
                            text: eA.intl.format(eA.t.fH9FBy, {
                                tooltipHook: (e, t) => (0, i.jsx)(p.A, { children: e }, t),
                            }),
                        }),
                    }),
                }),
                (0, i.jsxs)(T.A, {
                    ...e,
                    version: m,
                    selectedChannelId: _,
                    listScrollerRef: f,
                    children: [
                        (0, i.jsx)(
                            ep,
                            { selected: null != m ? m === eo.BVt.FRIENDS : l === eo.BVt.FRIENDS },
                            "friends",
                        ),
                        N
                            ? (0, i.jsx)(em, { selected: null != m ? m === eo.BVt.ICYMI : l === eo.BVt.ICYMI }, "icymi")
                            : null,
                        n && t
                            ? (0, i.jsx)(
                                  eg,
                                  {
                                      selected:
                                          null == m
                                              ? null != l && l.startsWith(eo.BVt.APPLICATION_LIBRARY)
                                              : m.startsWith(eo.BVt.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: l === eo.BVt.APPLICATION_LIBRARY,
                                  },
                                  "library",
                              )
                            : null,
                        A
                            ? (0, i.jsx)(
                                  eI,
                                  {
                                      selected:
                                          null == m
                                              ? null != l && l.startsWith(eo.BVt.MESSAGE_REQUESTS)
                                              : m === eo.BVt.MESSAGE_REQUESTS,
                                  },
                                  "message-requests",
                              )
                            : null,
                        o
                            ? (0, i.jsxs)(
                                  "div",
                                  {
                                      children: [
                                          (0, i.jsx)(K.o, {
                                              nitroTabButtonRef: C,
                                              selected: null == m ? s : m.startsWith(eo.BVt.APPLICATION_STORE),
                                              route: eo.BVt.APPLICATION_STORE,
                                              locationState: {
                                                  analyticsSource: {
                                                      page: eN(l),
                                                      section: eo.JJy.NAVIGATION,
                                                      object: eo.ZSU.NAVIGATION_LINK,
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
                            y.i,
                            {
                                selected: m === eo.BVt.COLLECTIBLES_SHOP || l?.startsWith(eo.BVt.COLLECTIBLES_SHOP),
                                listItemRef: I,
                                locationState: {
                                    analyticsSource: {
                                        page: eN(l),
                                        section: eo.JJy.NAVIGATION,
                                        object: eo.ZSU.NAVIGATION_LINK,
                                    },
                                },
                            },
                            "discord-shop",
                        ),
                        h
                            ? (0, i.jsx)(
                                  ef,
                                  {
                                      selected:
                                          (null != l && l.startsWith(eo.BVt.FAMILY_CENTER)) ||
                                          (null != m && m.startsWith(eo.BVt.FAMILY_CENTER)),
                                  },
                                  "family-center",
                              )
                            : null,
                        (0, i.jsx)(
                            $.A,
                            {
                                selected:
                                    null == m
                                        ? null != l && l.startsWith(eo.BVt.QUEST_HOME_V2)
                                        : m === eo.BVt.QUEST_HOME_V2,
                            },
                            "quests",
                        ),
                        (0, i.jsx)(ex, {}, "section-divider-top"),
                        (0, i.jsx)(R.A, {}, "frequent-friends"),
                    ],
                }),
            ],
        })
    );
});
function ex() {
    return (0, i.jsx)("div", { className: e_.ts });
}
function ev() {
    let e,
        t,
        n = (0, u.bG)([er.A], () => er.A.getHomeLink()),
        r = (0, u.bG)([ei.A], () => {
            if (n === eo.BVt.APPLICATION_STORE) return !0;
            let e = (0, es.qt)(n);
            return null != e && (ei.A.get(e)?.premium ?? !1);
        }, [n]),
        l = !ee.l_.useSetting(),
        { theme: a } = (0, u.cf)([J.A], () => ({ theme: J.A.theme })),
        o = (0, u.bG)([et.A], () => et.A.hasLibraryApplication()),
        d = (0, u.bG)([en.A], () => en.A.getCurrentPath()),
        [c, h] = (0, X.A)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, s.x),
        _ = (0, K.P)({ selected: null == h ? r : h.startsWith(eo.BVt.APPLICATION_STORE) }),
        m = (0, q.Tp)(),
        p = (0, u.bG)([k.A], () => k.A.getReminderStateId()),
        g = (0, Y.c7)(),
        E = [],
        I = (0, B.A)({ location: "Private Channels" });
    (0, b.Tc)() && (m && !I && E.push(A.M.REFERRAL_PROGRAM_POPOVER), g && E.push(A.M.RECURRING_3P_PROMOTION_POPOVER));
    let [f] = (0, O.Cc)(m && I ? A.M.REFERRAL_PROGRAM_POPOVER_V2 : null, p ?? "", void 0, !0),
        [C, T] = (0, O.kn)(E, void 0, !0),
        N = null == f && C === A.M.RECURRING_3P_PROMOTION_POPOVER,
        S = I ? f === A.M.REFERRAL_PROGRAM_POPOVER_V2 : C === A.M.REFERRAL_PROGRAM_POPOVER,
        x = (0, M.H)(),
        v = ((e = ee.dm.useSetting()), (t = (0, w.A)()), !0 === e && !0 === t);
    return (0, i.jsx)(eS, {
        theme: a,
        showLibrary: l,
        hasLibraryApplication: o,
        storeLink: d,
        homeLink: n,
        premiumTabSelected: r,
        shouldShowNitroTab: _,
        showReferralProgramPopover: S,
        showRecurring3PPopover: N,
        shouldShowMessageRequestsRow: x,
        shouldShowFamilyCenterRow: v,
        selectedChannelId: c,
        path: h,
    });
}
