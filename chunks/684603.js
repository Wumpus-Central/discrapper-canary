"use strict";
n.d(t, { A: () => er });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(323889),
    u = n(17928),
    d = n(366010),
    c = n(534514),
    _ = n(834730),
    h = n(821609),
    f = n(408278),
    E = n(509434),
    p = n(939249),
    m = n(365199),
    g = n(825484),
    A = n(157559),
    I = n(274670),
    T = n(144779),
    S = n(409626),
    N = n(363195),
    C = n(106799),
    y = n(287809),
    v = n(340124),
    R = n(859703),
    O = n(24001),
    b = n(104886),
    L = n(945810),
    D =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.T1_COMPACT = 1)] = "T1_COMPACT"),
        (i[(i.T2_HERO_IMAGE = 2)] = "T2_HERO_IMAGE"),
        i);
let P = (0, L.mj)({
    name: "social-entrypoints-v2-activity-panel-p0-visual-upgrade",
    kind: "user",
    defaultConfig: { variant: 0 },
    variations: { 0: { variant: 0 }, 1: { variant: 1 }, 2: { variant: 2 } },
});
var w = n(112142),
    M = n(3738),
    x = n(347135),
    U = n(46948),
    k = n(18437),
    G = n(590202),
    V = n(971649),
    F = n(651892),
    B = n(710969),
    j = n(801365),
    H = n(814793),
    W = n(73473),
    Y = n(270045),
    K = n(368715),
    $ = n(79545),
    z = n(847641),
    q = n(311243),
    Z = n(617986),
    X = n(795965),
    Q = n(190107),
    J = n(652215),
    ee = n(375708),
    et = n(383218);
function en(e) {
    let { quest: t } = e,
        n = (0, x.S5)(t.config.expiresAt),
        i = (0, x.S5)(t.config.rewardsConfig.rewardsExpireAt),
        s = (0, u.bG)([N.A], () => N.A.getState().theme),
        a = (0, d.M)(s) ? J.NJ8.DARK : J.NJ8.LIGHT,
        o = t.userStatus?.completedAt != null;
    return (0, r.jsxs)("div", {
        className: et.R_,
        children: [
            (0, r.jsx)("img", { className: et.tb, alt: "", src: (0, U.tW)(t, U.fY.GAME_TILE, a).url }),
            (0, r.jsxs)("div", {
                className: et.UD,
                children: [
                    (0, r.jsx)(c.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: o
                            ? ee.intl.string(ee.t.XBboAK)
                            : ee.intl.formatToPlainString(ee.t.EQa7os, { questName: t.config.messages.questName }),
                    }),
                    (0, r.jsx)(_.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: o
                            ? ee.intl.formatToPlainString(ee.t.APddvF, { expirationDate: i })
                            : ee.intl.formatToPlainString(ee.t["pX+fmn"], { expirationDate: n }),
                    }),
                ],
            }),
        ],
    });
}
function ei(e) {
    let { nodeRef: t, quest: n, onQuestDismiss: i, isStaffPreview: a = !1 } = e,
        L = (0, k.Ut)(),
        W = (0, V.go)(),
        ei = (0, u.bG)([R.A], () => R.A.isEnrolling(n.id), [n]),
        [er, es] = s.useState(!1),
        ea = s.useCallback(() => es(!0), []),
        eo = s.useCallback(() => es(!1), []),
        { launchInGameActivity: el } = (0, x.zW)(n),
        eu = w.t.useConfig({ location: Q.rE.ACTIVITY_PANEL }),
        ed = (0, $.Pd)(n),
        ec = s.useCallback((e) => {
            e.stopPropagation();
        }, []),
        e_ = s.useCallback(() => {
            null != n &&
                ((0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_panel_item")
                    ? (0, I.r)({
                          type: T.F.CLICK_INTERNAL,
                          adCreativeType: l.p.QUEST,
                          adCreativeId: n.id,
                          questContentCTA: G.Cy.TRACK_PROGRESS,
                          surfaceId: O.uF.ACTIVITY_PANEL,
                          sourceQuestContent: O.uF.ACTIVITY_PANEL,
                          impressionId: W,
                      })
                    : L({
                          questId: n.id,
                          questContent: O.uF.ACTIVITY_PANEL,
                          questContentCTA: G.Cy.TRACK_PROGRESS,
                          sourceQuestContent: O.uF.ACTIVITY_PANEL,
                      }),
                (0, Z.navigateToQuestHome)({ fromContent: O.uF.ACTIVITY_PANEL, questId: n.id }));
        }, [n, L, W]),
        eh = s.useCallback(() => {
            (0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_panel_item")
                ? (0, I.r)({
                      type: T.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: n.id,
                      questContentCTA: G.Cy.LEARN_MORE,
                      surfaceId: O.uF.ACTIVITY_PANEL,
                      sourceQuestContent: O.uF.ACTIVITY_PANEL,
                      impressionId: W,
                  })
                : L({
                      questId: n.id,
                      questContent: O.uF.ACTIVITY_PANEL,
                      questContentCTA: G.Cy.LEARN_MORE,
                      sourceQuestContent: O.uF.ACTIVITY_PANEL,
                  }),
                (0, Z.navigateToQuestHome)({ fromContent: O.uF.ACTIVITY_PANEL, questId: n.id });
        }, [n.id, L, W]),
        ef = (0, X.D)({
            quest: n,
            questContent: O.uF.ACTIVITY_PANEL,
            sourceQuestContent: O.uF.ACTIVITY_PANEL,
            experimentLocation: Q.rE.ACTIVITY_PANEL,
        }),
        eE = n.userStatus?.enrolledAt != null,
        ep = n.userStatus?.completedAt != null,
        em = (0, x.fc)(n),
        eg = P.useConfig({ location: Q.rE.ACTIVITY_PANEL }).variant,
        eA = eg === D.T1_COMPACT,
        eI = eg === D.T2_HERO_IMAGE,
        eT = eA || eI,
        eS = s.useCallback(async () => {
            if (eT) {
                let { type: e } = await (0, v.Oy)(n.id, {
                    questContent: O.uF.ACTIVITY_PANEL,
                    questContentCTA: G.Cy.ACCEPT_QUEST,
                    sourceQuestContent: O.uF.ACTIVITY_PANEL,
                });
                switch (e) {
                    case v.WM.SUCCESS:
                        (0, v.g5)(n.id, O.uF.ACTIVITY_PANEL),
                            a ? (0, v.L4)(O.uF.ACTIVITY_PANEL, n.id) : i?.(),
                            (0, Z.navigateToQuestHome)({ fromContent: O.uF.ACTIVITY_PANEL, questId: n.id });
                        break;
                    case v.WM.CAPTCHA_FAILED:
                        A.A.show({ title: ee.intl.string(ee.t["/CidxO"]), body: ee.intl.string(ee.t.HQdHg6) });
                        break;
                    case v.WM.UNKNOWN_ERROR:
                        A.A.show({ title: ee.intl.string(ee.t.R0RpRX), body: ee.intl.string(ee.t.OXD41D) });
                    case v.WM.PREVIOUS_IN_FLIGHT_REQUEST:
                }
            } else
                (0, v.Oy)(n.id, {
                    questContent: O.uF.ACTIVITY_PANEL,
                    questContentCTA: G.Cy.ACCEPT_QUEST,
                    sourceQuestContent: O.uF.ACTIVITY_PANEL,
                }),
                    (0, H.vA)(n) && el();
        }, [n, el, eT, a, i]),
        eN = (0, u.bG)([N.A], () => N.A.getState().theme),
        eC = (0, d.M)(eN) ? J.NJ8.DARK : J.NJ8.LIGHT,
        ey = (0, u.bG)([y.default], () => y.default.getCurrentUser()),
        ev = (0, j.ks)(n.config),
        eR = (0, j.wo)(n.config, ey),
        eO = (0, j.mH)(n.config, ey),
        eb = (0, M.mU)({
            quest: n,
            taskDetails: em,
            location: Q.rE.ACTIVITY_PANEL,
            sourceQuestContent: O.uF.ACTIVITY_PANEL,
            gameProfileSource: S.GameProfileSources.QuestActivityPanel,
        }),
        eL = eI ? (0, U.tW)(n, U.fY.HERO_IMAGE)?.url : null,
        eD = (0, U.tW)(n, U.fY.GAME_TILE, eC).url,
        eP = eI && null != eL,
        ew = null != n.config.ctaConfig ? (0, F.Jx)(n.config) : "",
        eM = (0, x.do)({
            quest: n,
            content: O.uF.ACTIVITY_PANEL,
            ctaContent: G.Cy.OPEN_GAME_LINK,
            sourceQuestContent: O.uF.ACTIVITY_PANEL,
        }),
        ex = (0, H.vA)(n),
        eU = (0, M.NA)({ quest: n }),
        ek = ex ? eU : ee.intl.string(ee.t.l7E81v),
        eG =
            eu.enabled && ed === $.UA.UNENROLLED && eu.enabledQuestStates.has($.UA.UNENROLLED) && !(0, B.Ic)(n)
                ? (0, r.jsx)(K.A, {
                      quest: n,
                      surface: $.V3.ACTIVITY_PANEL,
                      size: "md",
                      analyticsCtxQuestContent: O.uF.ACTIVITY_PANEL,
                      analyticsCtxSourceQuestContent: O.uF.ACTIVITY_PANEL,
                  })
                : (0, r.jsx)(h.$, {
                      variant: "primary",
                      size: "sm",
                      text: ek,
                      onClick: eS,
                      loading: ei,
                      icon: (0, Z.Oz)(n),
                  }),
        eV = (0, r.jsx)(h.$, {
            variant: "primary",
            size: "sm",
            fullWidth: !0,
            text: ek,
            onClick: eS,
            loading: ei,
            icon: (0, Z.Oz)(n),
        }),
        eF =
            null != ("" !== ew ? ew : null)
                ? (0, r.jsx)(f.K, {
                      variant: "secondary",
                      size: "sm",
                      icon: E.I,
                      "aria-label": (0, F.wr)(n),
                      onClick: eM,
                  })
                : null,
        eB = (0, r.jsx)(Y.C, {
            quest: n,
            questContent: O.uF.ACTIVITY_PANEL,
            shouldShowDisclosure: n.userStatus?.enrolledAt == null,
            showShareLink: !0,
            sourceQuestContent: O.uF.ACTIVITY_PANEL,
            children: (e) =>
                (0, r.jsx)(p.D, {
                    ...e,
                    "aria-label": ee.intl.string(ee.t.DEoVWZ),
                    children: (0, r.jsx)(m.j, { size: "md", color: "currentColor", className: et.Bx }),
                }),
        }),
        ej = (0, r.jsxs)(r.Fragment, { children: [eE ? (0, r.jsx)(en, { quest: n }) : (0, r.jsx)(z.A, {}), eB] });
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                t.current = e;
            },
            className: o()(et.iE, { [et.tJ]: eE }),
            onClick: ec,
            onKeyPress: ec,
            onFocus: ea,
            onMouseEnter: ea,
            onBlur: eo,
            onMouseLeave: eo,
            children: [
                eP &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { className: et.km, alt: "", src: eL }),
                            (0, r.jsx)("div", { className: et.cA }),
                        ],
                    }),
                (0, r.jsxs)("div", {
                    className: o()(et.CU, { [et.eF]: eP }),
                    children: [
                        !eT && (0, r.jsx)("div", { className: et.Wp, children: ej }),
                        eT && (0, r.jsx)("div", { className: et.FG, children: eB }),
                        eT &&
                            (0, r.jsxs)("div", {
                                className: et.we,
                                children: [
                                    (0, r.jsx)("img", { className: et.Zc, alt: "", src: eD }),
                                    (0, r.jsxs)("div", {
                                        className: et.l3,
                                        children: [
                                            (0, r.jsx)(c.D, {
                                                variant: "heading-sm/semibold",
                                                color: "text-strong",
                                                children: ev
                                                    ? ee.intl.format(ee.t["0IUT4Y"], {
                                                          rewardWithArticleHook: () =>
                                                              (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)(C.A, {
                                                                          shouldUseThemeColor: !0,
                                                                          customSize: 14,
                                                                          className: et.tz,
                                                                      }),
                                                                      ee.intl.format(ee.t["nLXlh+"], {
                                                                          orbAmount: eR ?? 0,
                                                                      }),
                                                                  ],
                                                              }),
                                                      })
                                                    : ee.intl.format(ee.t["0IUT4Y"], {
                                                          rewardWithArticleHook: () => eO,
                                                      }),
                                            }),
                                            (0, r.jsx)(_.E, {
                                                variant: "text-xs/medium",
                                                color: "text-muted",
                                                children: eb,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        !eT &&
                            !eE &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(en, { quest: n }),
                                    (0, r.jsx)(q.A, {
                                        autoplay: er,
                                        className: et.t3,
                                        quest: n,
                                        questContent: O.uF.ACTIVITY_PANEL,
                                        location: Q.rE.ACTIVITY_PANEL,
                                        taskDetails: em,
                                        sourceQuestContent: O.uF.ACTIVITY_PANEL,
                                        gameProfileSource: S.GameProfileSources.QuestActivityPanel,
                                    }),
                                ],
                            }),
                        !eT &&
                            eE &&
                            !ep &&
                            (0, r.jsx)(q.A, {
                                autoplay: er,
                                className: et.t3,
                                quest: n,
                                questContent: O.uF.ACTIVITY_PANEL,
                                location: Q.rE.ACTIVITY_PANEL,
                                taskDetails: em,
                                sourceQuestContent: O.uF.ACTIVITY_PANEL,
                                gameProfileSource: S.GameProfileSources.QuestActivityPanel,
                            }),
                        (0, r.jsxs)("div", {
                            className: et.uz,
                            children: [
                                !eE &&
                                    eT &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [eF, (0, r.jsx)("div", { className: et.E0, children: eV })],
                                    }),
                                !eE &&
                                    !eT &&
                                    (0, r.jsxs)(g.e, {
                                        size: "sm",
                                        direction: ex ? "vertical" : "horizontal",
                                        fullWidth: !0,
                                        children: [
                                            (0, r.jsx)(h.$, {
                                                variant: "secondary",
                                                text: ee.intl.string(ee.t.LLLLPD),
                                                onClick: eh,
                                            }),
                                            eG,
                                        ],
                                    }),
                                eE &&
                                    !ep &&
                                    eT &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            eF,
                                            (0, r.jsx)("div", {
                                                className: et.E0,
                                                children: (0, r.jsx)(h.$, {
                                                    variant: "primary",
                                                    size: "sm",
                                                    fullWidth: !0,
                                                    text: ek,
                                                    onClick: eS,
                                                    loading: ei,
                                                }),
                                            }),
                                        ],
                                    }),
                                eE &&
                                    !ep &&
                                    !eT &&
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        fullWidth: !0,
                                        text: ee.intl.string(ee.t.VN1Ajl),
                                        onClick: e_,
                                    }),
                                ep &&
                                    eT &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            eF,
                                            (0, r.jsx)("div", {
                                                className: et.E0,
                                                children: (0, r.jsx)(h.$, {
                                                    variant: "primary",
                                                    size: "sm",
                                                    fullWidth: !0,
                                                    text: ee.intl.string(ee.t.cfY4PE),
                                                    onClick: ef,
                                                }),
                                            }),
                                        ],
                                    }),
                                ep &&
                                    !eT &&
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        fullWidth: !0,
                                        text: ee.intl.string(ee.t.cfY4PE),
                                        onClick: ef,
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
let er = function (e) {
    return (0, r.jsx)(W.R, {
        questOrQuests: e.quest,
        questContent: O.uF.ACTIVITY_PANEL,
        sourceQuestContent: O.uF.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(ei, { nodeRef: t, ...e }),
    });
};
