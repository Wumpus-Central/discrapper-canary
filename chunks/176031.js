a.r(l), a.d(l, { SectionDivider: () => eV, default: () => ey }), a(321073);
var t = a(627968),
    s = a(64700),
    i = a(503698),
    n = a.n(i),
    c = a(942381),
    h = a(110259),
    r = a(837381),
    o = a(607399),
    d = a(311907),
    v = a(554146),
    g = a(827734),
    p = a(983730),
    m = a(192308),
    f = a(3026),
    w = a(459192),
    x = a(768622),
    u = a(214947),
    A = a(777666),
    I = a(657044),
    M = a(849516),
    Z = a(177953),
    _ = a(789645),
    E = a(821609),
    j = a(308528),
    C = a(711950),
    T = a(701363),
    N = a(828100),
    R = a(509963),
    V = a(775602),
    y = a(924283),
    H = a(139286),
    O = a(213750),
    L = a(771781),
    B = a(932001),
    S = a(379848),
    F = a(335934),
    U = a(957283),
    P = a(411976),
    b = a(430783),
    D = a(945276),
    k = a(834981),
    J = a(912309),
    G = a(851746),
    W = a(70730),
    q = a(894374),
    z = a(275759),
    K = a(717807),
    X = a(385327),
    Q = a(727949),
    Y = a(466336),
    $ = a(615003),
    ee = a(442802),
    el = a(67173),
    ea = a(793322),
    et = a(366811),
    es = a(728321),
    ei = a(544028),
    en = a(253932),
    ec = a(189081),
    eh = a(839067),
    er = a(67480),
    eo = a(619921),
    ed = a(595623),
    ev = a(954571),
    eg = a(541830),
    ep = a(652215),
    em = a(851110),
    ef = a(49999),
    ew = a(788868),
    ex = a(985018),
    eu = a(602339),
    eA = a(925004);
let eI = (e) => {
        let { selected: l, ...a } = e,
            s = (0, F.c)("PrivateChannels.ICYMIButton"),
            i = (0, r.rm)("icymi");
        return s
            ? (0, t.jsx)("div", {
                  className: eA.F2,
                  children: (0, t.jsx)(T.z9, {
                      selected: l,
                      route: ep.BVt.ICYMI,
                      icon: x.g,
                      text: (0, t.jsxs)(t.Fragment, {
                          children: [
                              ex.intl.string(ex.t["jnXV/V"]),
                              (0, t.jsx)("span", { className: eA.HH, children: ex.intl.string(ex.t.Ac2OZA) }),
                          ],
                      }),
                      ...a,
                      ...i,
                  }),
              })
            : null;
    },
    eM = (e) => {
        let { selected: l, ...a } = e,
            i = (0, r.rm)("friends"),
            n = (0, J.kX)(),
            c = (0, d.bG)([z.Ay], () => z.Ay.canShowFriendsTabBadge()),
            o = (0, d.bG)([V.A], () => V.A.useReducedMotion),
            { enabled: g } = W.u.useConfig({ location: "Friends Tab" }),
            [m, f] = (0, B.Wl)(c && g ? v.M.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, { cooldownDurationMs: z.hb }),
            x = m === v.M.GIFTING_INTENT_FRIENDS_TAB_BADGE;
        s.useEffect(() => {
            x &&
                (0, H.x)({
                    name: h.ImpressionNames.GIFT_INTENT_BADGE,
                    type: h.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: ew.np.FRIEND_ANNIVERSARY },
                });
        }, [x]);
        let I = () => {
                let e;
                x
                    ? (ev.default.track(ep.HAw.GIFT_INTENT_BADGE_CLICKED, {
                          gift_intent_type: ew.np.FRIEND_ANNIVERSARY,
                      }),
                      (e = ep.m3P.ALL),
                      C.A.setSection(ep.m3P.ALL),
                      f(ef.i.TAKE_ACTION))
                    : (e = ed.Ay.getState().section),
                    (0, y.A)({ tab_opened: e });
            },
            [M, Z] = s.useState(!1),
            _ = () => {
                Z(!1);
            },
            E = () => {
                Z(!0);
            },
            j = () =>
                (0, t.jsx)(T.z9, {
                    showHoverGradient: !1,
                    onClick: I,
                    interactiveClassName: x ? eA.hc : void 0,
                    selected: l,
                    route: ep.BVt.FRIENDS,
                    icon: u.$,
                    text: ex.intl.string(ex.t.TdEu5X),
                    onMouseEnter: E,
                    onMouseLeave: _,
                    ...a,
                    ...i,
                    children: n > 0 ? (0, t.jsx)(A.hV, { count: n }) : null,
                });
        return (0, t.jsx)("div", {
            className: eA.F2,
            children: x
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(w.u, {
                              title: ex.intl.string(ex.t.Thb5MO),
                              body: ex.intl.string(ex.t.kGvgwS),
                              position: "left",
                              asset: (0, t.jsx)(p.x, { size: 32, alt: ex.intl.string(ex.t["4LohBA"]) }),
                              children: j(),
                          }),
                          !o &&
                              (0, t.jsx)(ee.A, {
                                  className: eA.t_,
                                  wind: 0,
                                  sprites: em.uI,
                                  spriteColors: em._t,
                                  firing: M,
                                  confettiConfig: {
                                      opacity: { type: "static", value: 1 },
                                      dragCoefficient: { type: "static", value: { x: 100, y: 100 } },
                                  },
                              }),
                      ],
                  })
                : j(),
        });
    },
    eZ = (e) => {
        let { selected: l, hideGameUpdateProgressIndicator: a, ...s } = e,
            i = (0, r.rm)("library");
        return (0, t.jsx)(T.z9, {
            selected: l,
            route: ep.BVt.APPLICATION_LIBRARY,
            icon: I._,
            text: ex.intl.string(ex.t.cw57ar),
            ...s,
            ...i,
            children: (0, t.jsx)(R.A, { className: n()(eA.Qw, { [eA.QI]: a }) }),
        });
    },
    e_ = () => {
        let e = (0, P.W)();
        return e > 0 ? (0, t.jsx)(A.hV, { count: e }) : null;
    },
    eE = (e) => {
        let { selected: l } = e,
            a = (0, r.rm)("messageRequests"),
            { channelId: s } = (0, U.N)();
        if (!(0, b.H)()) return null;
        let i = null == s ? void 0 : () => j.A.preload(ep.ME, s);
        return (0, t.jsx)(T.z9, {
            selected: l,
            route: ep.BVt.MESSAGE_REQUESTS,
            icon: M.u,
            text: ex.intl.string(ex.t.e7GWjQ),
            onClick: i,
            ...a,
            children: (0, t.jsx)(e_, {}),
        });
    },
    ej = (e) => {
        let { selected: l } = e,
            a = ex.intl.string(eu.default.Rkdixs),
            i = (0, r.rm)("family-center"),
            [n, c] = s.useState(!0);
        return (0, t.jsx)(T.z9, {
            selected: l,
            route: ep.BVt.FAMILY_CENTER,
            icon: Z.n,
            text: a,
            onMouseEnter: () => {
                c(!0);
            },
            onMouseLeave: () => {
                c(!1);
            },
            interactiveClassName: eA.M1,
            ...i,
            children: (0, t.jsx)(eC, { isParentHovered: n }),
        });
    },
    eC = (e) => {
        let { isParentHovered: l } = e,
            s = (0, k.VT)();
        return l
            ? (0, t.jsx)("div", {
                  className: eA.lL,
                  children: (0, t.jsx)(T.w_, {
                      onClick: () => {
                          (0, m.openModalLazy)(async () => {
                              let { default: e } = await a.e("67195").then(a.bind(a, 371158));
                              return (l) => (0, t.jsx)(e, { ...l });
                          });
                      },
                      "aria-label": ex.intl.string(ex.t.cpT0Cq),
                      icon: _.P,
                  }),
              })
            : s > 0
              ? (0, t.jsx)("div", { className: n()(eA.lL, eA.iL), children: (0, t.jsx)(A.hV, { count: s }) })
              : (0, t.jsx)("div", {
                    className: eA.lL,
                    children: (0, t.jsx)(S.Ay, {
                        contentTypes: [v.M.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: l } = e;
                            return l === v.M.FAMILY_CENTER_NEW_BADGE
                                ? (0, t.jsx)(A.Lp, {
                                      text: ex.intl.string(ex.t.y2b7CA),
                                      color: g.A.colors.BACKGROUND_BRAND.css,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eT = () => (0, ea.WU)("DM_SEARCH");
function eN(e) {
    switch (e) {
        case ep.BVt.APPLICATION_LIBRARY:
            return ep.liQ.LIBRARY;
        case ep.BVt.FRIENDS:
            return ep.liQ.FRIENDS_LIST;
        case ep.BVt.COLLECTIBLES_SHOP:
            return ep.liQ.COLLECTIBLES_SHOP;
    }
    return e.startsWith(ep.BVt.APPLICATION_STORE)
        ? e === ep.BVt.APPLICATION_STORE
            ? ep.liQ.STORE_DIRECTORY_HOME
            : e.startsWith(ep.BVt.APPLICATION_STORE)
              ? ep.liQ.STORE_DIRECTORY_BROWSE
              : ep.liQ.STORE_LISTING
        : ep.liQ.DM_CHANNEL;
}
let eR = s.memo(function (e) {
    let {
            showLibrary: l,
            hasLibraryApplication: a,
            homeLink: i,
            premiumTabSelected: c,
            shouldShowNitroTab: h,
            showReferralProgramPopover: r,
            showRecurring3PPopover: d,
            shouldShowMessageRequestsRow: v,
            shouldShowFamilyCenterRow: g,
            selectedChannelId: p,
            path: m,
        } = e,
        w = s.useRef(null),
        x = s.useRef(null),
        u = s.useRef(null),
        A = s.useRef(null),
        I = (0, F.c)("PrivateChannels"),
        M = null;
    return (
        r ? (M = (0, t.jsx)(Y.V, { targetElementRef: A })) : d && (M = (0, t.jsx)(K.A, { targetElementRef: A })),
        (0, t.jsxs)("nav", {
            className: eA.AB,
            "aria-label": ex.intl.string(ex.t.ZH9aP4),
            children: [
                (0, t.jsx)(es.A, {
                    childRef: w,
                    tutorialId: "direct-messages",
                    position: "right",
                    offsetX: -52,
                    children: (0, t.jsx)("div", {
                        ref: w,
                        className: n()(eA.ON, { [eA.jD]: o.Fr }),
                        children: (0, t.jsx)(E.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "sm",
                            onClick: eT,
                            text: ex.intl.format(ex.t.fH9FBy, {
                                tooltipHook: (e, l) => (0, t.jsx)(f.A, { children: e }, l),
                            }),
                        }),
                    }),
                }),
                (0, t.jsxs)(N.A, {
                    ...e,
                    version: m,
                    selectedChannelId: p,
                    listScrollerRef: u,
                    children: [
                        (0, t.jsx)(
                            eM,
                            { selected: null != m ? m === ep.BVt.FRIENDS : i === ep.BVt.FRIENDS },
                            "friends",
                        ),
                        I
                            ? (0, t.jsx)(eI, { selected: null != m ? m === ep.BVt.ICYMI : i === ep.BVt.ICYMI }, "icymi")
                            : null,
                        a && l
                            ? (0, t.jsx)(
                                  eZ,
                                  {
                                      selected:
                                          null == m
                                              ? null != i && i.startsWith(ep.BVt.APPLICATION_LIBRARY)
                                              : m.startsWith(ep.BVt.APPLICATION_LIBRARY),
                                      hideGameUpdateProgressIndicator: i === ep.BVt.APPLICATION_LIBRARY,
                                  },
                                  "library",
                              )
                            : null,
                        v
                            ? (0, t.jsx)(
                                  eE,
                                  {
                                      selected:
                                          null == m
                                              ? null != i && i.startsWith(ep.BVt.MESSAGE_REQUESTS)
                                              : m === ep.BVt.MESSAGE_REQUESTS,
                                  },
                                  "message-requests",
                              )
                            : null,
                        h
                            ? (0, t.jsxs)(
                                  "div",
                                  {
                                      children: [
                                          (0, t.jsx)($.o, {
                                              nitroTabButtonRef: A,
                                              selected: null == m ? c : m.startsWith(ep.BVt.APPLICATION_STORE),
                                              route: ep.BVt.APPLICATION_STORE,
                                              locationState: {
                                                  analyticsSource: {
                                                      page: eN(i),
                                                      section: ep.JJy.NAVIGATION,
                                                      object: ep.ZSU.NAVIGATION_LINK,
                                                  },
                                              },
                                          }),
                                          M,
                                      ],
                                  },
                                  "nitro-tab-group",
                              )
                            : null,
                        (0, t.jsx)(
                            O.i,
                            {
                                selected: m === ep.BVt.COLLECTIBLES_SHOP || i?.startsWith(ep.BVt.COLLECTIBLES_SHOP),
                                listItemRef: x,
                                locationState: {
                                    analyticsSource: {
                                        page: eN(i),
                                        section: ep.JJy.NAVIGATION,
                                        object: ep.ZSU.NAVIGATION_LINK,
                                    },
                                },
                            },
                            "discord-shop",
                        ),
                        g
                            ? (0, t.jsx)(
                                  ej,
                                  {
                                      selected:
                                          (null != i && i.startsWith(ep.BVt.FAMILY_CENTER)) ||
                                          (null != m && m.startsWith(ep.BVt.FAMILY_CENTER)),
                                  },
                                  "family-center",
                              )
                            : null,
                        (0, t.jsx)(
                            el.A,
                            {
                                selected:
                                    null == m ? null != i && i.startsWith(ep.BVt.QUEST_HOME) : m === ep.BVt.QUEST_HOME,
                            },
                            "quests",
                        ),
                        (0, t.jsx)(eV, {}, "section-divider-top"),
                    ],
                }),
            ],
        })
    );
});
function eV() {
    return (0, t.jsx)("div", { className: eA.ts });
}
function ey() {
    let e,
        l,
        a = (0, d.bG)([eo.A], () => eo.A.getHomeLink()),
        s = (0, d.bG)([er.A], () => {
            if (a === ep.BVt.APPLICATION_STORE) return !0;
            let e = (0, eg.qt)(a);
            return null != e && (er.A.get(e)?.premium ?? !1);
        }, [a]),
        i = !en.l_.useSetting(),
        { theme: n } = (0, d.cf)([ei.A], () => ({ theme: ei.A.theme })),
        h = (0, d.bG)([ec.A], () => ec.A.hasLibraryApplication()),
        r = (0, d.bG)([eh.A], () => eh.A.getCurrentPath()),
        [o, g] = (0, et.A)((e) => {
            let { channelId: l, path: a } = e;
            return [l, a];
        }, c.x),
        p = (0, $.P)({ selected: null == g ? s : g.startsWith(ep.BVt.APPLICATION_STORE) }),
        m = (0, Q.Tp)(),
        f = (0, d.bG)([G.A], () => G.A.getReminderStateId()),
        w = (0, X.c7)(),
        x = [],
        u = (0, q.A)({ location: "Private Channels" });
    (0, L.Tc)() && (m && !u && x.push(v.M.REFERRAL_PROGRAM_POPOVER), w && x.push(v.M.RECURRING_3P_PROMOTION_POPOVER));
    let [A] = (0, B.Cc)(m && u ? v.M.REFERRAL_PROGRAM_POPOVER_V2 : null, f ?? "", void 0, !0),
        [I, M] = (0, B.kn)(x, void 0, !0),
        Z = null == A && I === v.M.RECURRING_3P_PROMOTION_POPOVER,
        _ = u ? A === v.M.REFERRAL_PROGRAM_POPOVER_V2 : I === v.M.REFERRAL_PROGRAM_POPOVER,
        E = (0, b.H)(),
        j = ((e = en.dm.useSetting()), (l = (0, D.A)()), !0 === e && !0 === l);
    return (0, t.jsx)(eR, {
        theme: n,
        showLibrary: i,
        hasLibraryApplication: h,
        storeLink: r,
        homeLink: a,
        premiumTabSelected: s,
        shouldShowNitroTab: p,
        showReferralProgramPopover: _,
        showRecurring3PPopover: Z,
        shouldShowMessageRequestsRow: E,
        shouldShowFamilyCenterRow: j,
        selectedChannelId: o,
        path: g,
    });
}
