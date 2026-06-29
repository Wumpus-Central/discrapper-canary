"use strict";
n.d(t, { A: () => es });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(340287),
    u = n(323889),
    c = n(17928),
    d = n(366010),
    _ = n(534514),
    h = n(834730),
    f = n(821609),
    p = n(408278),
    E = n(509434),
    m = n(939249),
    g = n(365199),
    A = n(577473),
    I = n(825484),
    T = n(157559),
    S = n(274670),
    y = n(144779),
    C = n(409626),
    N = n(363195),
    v = n(106799),
    R = n(287809),
    O = n(340124),
    b = n(859703),
    D = n(24001),
    L = n(104886),
    w = n(945810),
    M =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.T1_COMPACT = 1)] = "T1_COMPACT"),
        (i[(i.T2_HERO_IMAGE = 2)] = "T2_HERO_IMAGE"),
        i);
let P = (0, w.mj)({
    name: "social-entrypoints-v2-activity-panel-p0-visual-upgrade",
    kind: "user",
    defaultConfig: { variant: 0 },
    variations: { 0: { variant: 0 }, 1: { variant: 1 }, 2: { variant: 2 } },
});
var x = n(112142),
    k = n(3738),
    U = n(347135),
    G = n(46948),
    F = n(18437),
    V = n(590202),
    B = n(971649),
    j = n(710969),
    H = n(801365),
    Y = n(814793),
    W = n(73473),
    K = n(270045),
    $ = n(368715),
    z = n(79545),
    q = n(847641),
    Z = n(311243),
    X = n(617986),
    Q = n(795965),
    J = n(190107),
    ee = n(652215),
    et = n(375708),
    en = n(383218);
function ei(e) {
    let { quest: t } = e,
        n = (0, U.S5)(t.config.expiresAt),
        i = (0, U.S5)(t.config.rewardsConfig.rewardsExpireAt),
        s = (0, c.bG)([N.A], () => N.A.getState().theme),
        a = (0, d.M)(s) ? ee.NJ8.DARK : ee.NJ8.LIGHT,
        o = t.userStatus?.completedAt != null;
    return (0, r.jsxs)("div", {
        className: en.R_,
        children: [
            (0, r.jsx)("img", { className: en.tb, alt: "", src: (0, G.tW)(t, G.fY.GAME_TILE, a).url }),
            (0, r.jsxs)("div", {
                className: en.UD,
                children: [
                    (0, r.jsx)(_.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: o
                            ? et.intl.string(et.t.XBboAK)
                            : et.intl.formatToPlainString(et.t.EQa7os, { questName: t.config.messages.questName }),
                    }),
                    (0, r.jsx)(h.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: o
                            ? et.intl.formatToPlainString(et.t.APddvF, { expirationDate: i })
                            : et.intl.formatToPlainString(et.t["pX+fmn"], { expirationDate: n }),
                    }),
                ],
            }),
        ],
    });
}
function er(e) {
    let { nodeRef: t, quest: n, onQuestDismiss: i, isStaffPreview: a = !1 } = e,
        w = (0, F.Ut)(),
        W = (0, B.go)(),
        er = (0, c.bG)([b.A], () => b.A.isEnrolling(n.id), [n]),
        [es, ea] = s.useState(!1),
        eo = s.useCallback(() => ea(!0), []),
        el = s.useCallback(() => ea(!1), []),
        { launchInGameActivity: eu } = (0, U.zW)(n),
        ec = x.t.useConfig({ location: J.rE.ACTIVITY_PANEL }),
        ed = (0, z.Pd)(n),
        e_ = s.useCallback((e) => {
            e.stopPropagation();
        }, []),
        eh = s.useCallback(() => {
            null != n &&
                ((0, L.E5)(L.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_panel_item")
                    ? (0, S.r)({
                          type: y.F.CLICK_INTERNAL,
                          adCreativeType: u.p.QUEST,
                          adCreativeId: n.id,
                          questContentCTA: V.Cy.TRACK_PROGRESS,
                          surfaceId: D.uF.ACTIVITY_PANEL,
                          sourceQuestContent: D.uF.ACTIVITY_PANEL,
                          impressionId: W,
                      })
                    : w({
                          questId: n.id,
                          questContent: D.uF.ACTIVITY_PANEL,
                          questContentCTA: V.Cy.TRACK_PROGRESS,
                          sourceQuestContent: D.uF.ACTIVITY_PANEL,
                      }),
                (0, X.navigateToQuestHome)({ fromContent: D.uF.ACTIVITY_PANEL, questId: n.id }));
        }, [n, w, W]),
        ef = s.useCallback(() => {
            (0, L.E5)(L.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_panel_item")
                ? (0, S.r)({
                      type: y.F.CLICK_INTERNAL,
                      adCreativeType: u.p.QUEST,
                      adCreativeId: n.id,
                      questContentCTA: V.Cy.LEARN_MORE,
                      surfaceId: D.uF.ACTIVITY_PANEL,
                      sourceQuestContent: D.uF.ACTIVITY_PANEL,
                      impressionId: W,
                  })
                : w({
                      questId: n.id,
                      questContent: D.uF.ACTIVITY_PANEL,
                      questContentCTA: V.Cy.LEARN_MORE,
                      sourceQuestContent: D.uF.ACTIVITY_PANEL,
                  }),
                (0, X.navigateToQuestHome)({ fromContent: D.uF.ACTIVITY_PANEL, questId: n.id });
        }, [n.id, w, W]),
        ep = (0, Q.D)({
            quest: n,
            questContent: D.uF.ACTIVITY_PANEL,
            sourceQuestContent: D.uF.ACTIVITY_PANEL,
            experimentLocation: J.rE.ACTIVITY_PANEL,
        }),
        eE = n.userStatus?.enrolledAt != null,
        em = n.userStatus?.completedAt != null,
        eg = (0, U.fc)(n),
        eA = P.useConfig({ location: J.rE.ACTIVITY_PANEL }).variant,
        eI = eA === M.T1_COMPACT,
        eT = eA === M.T2_HERO_IMAGE,
        eS = eI || eT,
        [ey, eC] = s.useState(!1),
        [eN, ev] = s.useState(!1),
        eR = s.useRef(null),
        eO = s.useRef(!1);
    s.useEffect(() => {
        eC(!1), ev(!1), (eO.current = !1), null != eR.current && (clearTimeout(eR.current), (eR.current = null));
    }, [n.id]),
        s.useEffect(
            () => () => {
                null != eR.current && clearTimeout(eR.current);
            },
            [],
        ),
        s.useLayoutEffect(() => {
            eN &&
                !eO.current &&
                ((eO.current = !0),
                a ? (0, O.L4)(D.uF.ACTIVITY_PANEL, n.id) : ((0, O.g5)(n.id, D.uF.ACTIVITY_PANEL), i?.()));
        }, [eN, a, n.id, i]);
    let eb = s.useCallback(async () => {
            if (eS) {
                let { type: e } = await (0, O.Oy)(n.id, {
                    questContent: D.uF.ACTIVITY_PANEL,
                    questContentCTA: V.Cy.ACCEPT_QUEST,
                    sourceQuestContent: D.uF.ACTIVITY_PANEL,
                });
                switch (e) {
                    case O.WM.SUCCESS:
                        eC(!0),
                            (0, O.g5)(n.id, D.uF.ACTIVITY_PANEL),
                            (eR.current = setTimeout(() => ev(!0), 5e3)),
                            (0, Y.vA)(n) && eu();
                        break;
                    case O.WM.CAPTCHA_FAILED:
                        T.A.show({ title: et.intl.string(et.t["/CidxO"]), body: et.intl.string(et.t.HQdHg6) });
                        break;
                    case O.WM.UNKNOWN_ERROR:
                        T.A.show({ title: et.intl.string(et.t.R0RpRX), body: et.intl.string(et.t.OXD41D) });
                    case O.WM.PREVIOUS_IN_FLIGHT_REQUEST:
                }
            } else
                (0, O.Oy)(n.id, {
                    questContent: D.uF.ACTIVITY_PANEL,
                    questContentCTA: V.Cy.ACCEPT_QUEST,
                    sourceQuestContent: D.uF.ACTIVITY_PANEL,
                }),
                    (0, Y.vA)(n) && eu();
        }, [n, eu, eS]),
        eD = s.useCallback(() => {
            (0, X.navigateToQuestHome)({ fromContent: D.uF.ACTIVITY_PANEL, questId: n.id });
        }, [n.id]),
        eL = (0, c.bG)([N.A], () => N.A.getState().theme),
        ew = (0, d.M)(eL) ? ee.NJ8.DARK : ee.NJ8.LIGHT,
        eM = (0, c.bG)([R.default], () => R.default.getCurrentUser()),
        eP = (0, H.ks)(n.config),
        ex = (0, H.wo)(n.config, eM),
        ek = (0, H.mH)(n.config, eM),
        eU = (0, k.mU)({
            quest: n,
            taskDetails: eg,
            location: J.rE.ACTIVITY_PANEL,
            sourceQuestContent: D.uF.ACTIVITY_PANEL,
            gameProfileSource: C.Ob.QuestActivityPanel,
        }),
        eG = eT ? (0, G.tW)(n, G.fY.HERO_IMAGE)?.url : null,
        eF = (0, G.tW)(n, G.fY.GAME_TILE, ew).url,
        eV = eT && null != eG,
        eB = (0, Y.vA)(n),
        ej = (0, k.NA)({ quest: n }),
        eH = eB ? ej : et.intl.string(et.t.l7E81v),
        eY =
            ec.enabled && ed === z.UA.UNENROLLED && ec.enabledQuestStates.has(z.UA.UNENROLLED) && !(0, j.Ic)(n)
                ? (0, r.jsx)($.A, {
                      quest: n,
                      surface: z.V3.ACTIVITY_PANEL,
                      size: "md",
                      analyticsCtxQuestContent: D.uF.ACTIVITY_PANEL,
                      analyticsCtxSourceQuestContent: D.uF.ACTIVITY_PANEL,
                  })
                : (0, r.jsx)(f.$, {
                      variant: "primary",
                      size: "sm",
                      text: eH,
                      onClick: eb,
                      loading: er,
                      icon: (0, X.Oz)(n),
                  }),
        eW = (0, r.jsx)(f.$, {
            variant: "primary",
            size: "sm",
            fullWidth: !0,
            text: eH,
            onClick: eb,
            loading: er,
            icon: (0, X.Oz)(n),
        }),
        eK = (0, r.jsx)(p.K, {
            variant: "secondary",
            size: "sm",
            icon: E.I,
            "aria-label": et.intl.string(et.t.LLLLPD),
            onClick: ef,
        }),
        e$ = (0, r.jsx)(K.C, {
            quest: n,
            questContent: D.uF.ACTIVITY_PANEL,
            shouldShowDisclosure: n.userStatus?.enrolledAt == null,
            showShareLink: !0,
            sourceQuestContent: D.uF.ACTIVITY_PANEL,
            children: (e) =>
                (0, r.jsx)(m.D, {
                    ...e,
                    "aria-label": et.intl.string(et.t.DEoVWZ),
                    children: (0, r.jsx)(g.j, { size: "md", color: "currentColor", className: en.Bx }),
                }),
        }),
        ez = (0, r.jsxs)(r.Fragment, { children: [eE ? (0, r.jsx)(ei, { quest: n }) : (0, r.jsx)(q.A, {}), e$] });
    return eS && eN
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  eS &&
                      ey &&
                      (0, l.createPortal)(
                          (0, r.jsx)("div", {
                              className: en.o7,
                              children: (0, r.jsxs)("div", {
                                  className: en.iW,
                                  children: [
                                      (0, r.jsx)(A.r, { size: "md", color: "currentColor", className: en.Rx }),
                                      (0, r.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          className: en.V9,
                                          children: et.intl.string(et.t.KEupiH),
                                      }),
                                      (0, r.jsx)(f.$, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: et.intl.string(et.t["th2+0j"]),
                                          onClick: eD,
                                      }),
                                  ],
                              }),
                          }),
                          document.body,
                      ),
                  (0, r.jsxs)("div", {
                      ref: (e) => {
                          t.current = e;
                      },
                      className: o()(en.iE, { [en.tJ]: eE }),
                      onClick: e_,
                      onKeyPress: e_,
                      onFocus: eo,
                      onMouseEnter: eo,
                      onBlur: el,
                      onMouseLeave: el,
                      children: [
                          eV &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("img", { className: en.km, alt: "", src: eG }),
                                      (0, r.jsx)("div", { className: en.cA }),
                                  ],
                              }),
                          (0, r.jsxs)("div", {
                              className: o()(en.CU, { [en.eF]: eV }),
                              children: [
                                  !eS && (0, r.jsx)("div", { className: en.Wp, children: ez }),
                                  eS && (0, r.jsx)("div", { className: en.FG, children: e$ }),
                                  eS &&
                                      (0, r.jsxs)("div", {
                                          className: en.we,
                                          children: [
                                              (0, r.jsx)("img", { className: en.Zc, alt: "", src: eF }),
                                              (0, r.jsxs)("div", {
                                                  className: en.l3,
                                                  children: [
                                                      (0, r.jsx)(_.D, {
                                                          variant: "heading-sm/semibold",
                                                          color: "text-strong",
                                                          children: eP
                                                              ? et.intl.format(et.t["0IUT4Y"], {
                                                                    rewardWithArticleHook: () =>
                                                                        (0, r.jsxs)(r.Fragment, {
                                                                            children: [
                                                                                (0, r.jsx)(v.A, {
                                                                                    shouldUseThemeColor: !0,
                                                                                    customSize: 14,
                                                                                    className: en.tz,
                                                                                }),
                                                                                et.intl.format(et.t["nLXlh+"], {
                                                                                    orbAmount: ex ?? 0,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                })
                                                              : et.intl.format(et.t["0IUT4Y"], {
                                                                    rewardWithArticleHook: () => ek,
                                                                }),
                                                      }),
                                                      (0, r.jsx)(h.E, {
                                                          variant: "text-xs/medium",
                                                          color: "text-muted",
                                                          children: eU,
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  !eS &&
                                      !eE &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(ei, { quest: n }),
                                              (0, r.jsx)(Z.A, {
                                                  autoplay: es,
                                                  className: en.t3,
                                                  quest: n,
                                                  questContent: D.uF.ACTIVITY_PANEL,
                                                  location: J.rE.ACTIVITY_PANEL,
                                                  taskDetails: eg,
                                                  sourceQuestContent: D.uF.ACTIVITY_PANEL,
                                                  gameProfileSource: C.Ob.QuestActivityPanel,
                                              }),
                                          ],
                                      }),
                                  !eS &&
                                      eE &&
                                      !em &&
                                      (0, r.jsx)(Z.A, {
                                          autoplay: es,
                                          className: en.t3,
                                          quest: n,
                                          questContent: D.uF.ACTIVITY_PANEL,
                                          location: J.rE.ACTIVITY_PANEL,
                                          taskDetails: eg,
                                          sourceQuestContent: D.uF.ACTIVITY_PANEL,
                                          gameProfileSource: C.Ob.QuestActivityPanel,
                                      }),
                                  (0, r.jsxs)("div", {
                                      className: o()(en.uz, { [en.ad]: eS && ey }),
                                      children: [
                                          !eE &&
                                              eS &&
                                              (0, r.jsxs)(r.Fragment, {
                                                  children: [eK, (0, r.jsx)("div", { className: en.E0, children: eW })],
                                              }),
                                          !eE &&
                                              !eS &&
                                              (0, r.jsxs)(I.e, {
                                                  size: "sm",
                                                  direction: eB ? "vertical" : "horizontal",
                                                  fullWidth: !0,
                                                  children: [
                                                      (0, r.jsx)(f.$, {
                                                          variant: "secondary",
                                                          text: et.intl.string(et.t.LLLLPD),
                                                          onClick: ef,
                                                      }),
                                                      eY,
                                                  ],
                                              }),
                                          eE &&
                                              !em &&
                                              eS &&
                                              (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      eK,
                                                      (0, r.jsx)("div", {
                                                          className: en.E0,
                                                          children: (0, r.jsx)(f.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              fullWidth: !0,
                                                              text: eH,
                                                              onClick: eb,
                                                              loading: er,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          eE &&
                                              !em &&
                                              !eS &&
                                              (0, r.jsx)(f.$, {
                                                  variant: "primary",
                                                  size: "sm",
                                                  fullWidth: !0,
                                                  text: et.intl.string(et.t.VN1Ajl),
                                                  onClick: eh,
                                              }),
                                          em &&
                                              eS &&
                                              (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      eK,
                                                      (0, r.jsx)("div", {
                                                          className: en.E0,
                                                          children: (0, r.jsx)(f.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              fullWidth: !0,
                                                              text: et.intl.string(et.t.cfY4PE),
                                                              onClick: ep,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          em &&
                                              !eS &&
                                              (0, r.jsx)(f.$, {
                                                  variant: "primary",
                                                  size: "sm",
                                                  fullWidth: !0,
                                                  text: et.intl.string(et.t.cfY4PE),
                                                  onClick: ep,
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let es = function (e) {
    return (0, r.jsx)(W.R, {
        questOrQuests: e.quest,
        questContent: D.uF.ACTIVITY_PANEL,
        sourceQuestContent: D.uF.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(er, { nodeRef: t, ...e }),
    });
};
