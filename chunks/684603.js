s.r(e), s.d(e, { default: () => ti });
var n,
    i = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    o = s(323889),
    u = s(17928),
    c = s(366010),
    A = s(534514),
    C = s(834730),
    T = s(821609),
    d = s(408278),
    I = s(509434),
    E = s(939249),
    m = s(365199),
    N = s(825484),
    _ = s(157559),
    x = s(274670),
    L = s(144779),
    P = s(409626),
    g = s(363195),
    h = s(106799),
    f = s(287809),
    j = s(340124),
    v = s(859703),
    F = s(24001),
    Y = s(104886),
    V = s(945810),
    p =
        (((n = {})[(n.CONTROL = 0)] = "CONTROL"),
        (n[(n.T1_COMPACT = 1)] = "T1_COMPACT"),
        (n[(n.T2_HERO_IMAGE = 2)] = "T2_HERO_IMAGE"),
        n);
let S = (0, V.mj)({
    name: "social-entrypoints-v2-activity-panel-p0-visual-upgrade",
    kind: "user",
    defaultConfig: { variant: 0 },
    variations: { 0: { variant: 0 }, 1: { variant: 1 }, 2: { variant: 2 } },
});
var y = s(112142),
    R = s(3738),
    q = s(347135),
    k = s(46948),
    O = s(18437),
    Q = s(590202),
    b = s(971649),
    D = s(651892),
    G = s(710969),
    M = s(801365),
    U = s(814793),
    W = s(73473),
    z = s(270045),
    w = s(368715),
    H = s(79545),
    K = s(847641),
    $ = s(311243),
    J = s(617986),
    X = s(795965),
    B = s(190107),
    Z = s(652215),
    tt = s(375708),
    te = s(383218);
function ts(t) {
    let { quest: e } = t,
        s = (0, q.S5)(e.config.expiresAt),
        n = (0, q.S5)(e.config.rewardsConfig.rewardsExpireAt),
        a = (0, u.bG)([g.A], () => g.A.getState().theme),
        r = (0, c.M)(a) ? Z.NJ8.DARK : Z.NJ8.LIGHT,
        l = e.userStatus?.completedAt != null;
    return (0, i.jsxs)("div", {
        className: te.R_,
        children: [
            (0, i.jsx)("img", { className: te.tb, alt: "", src: (0, k.tW)(e, k.fY.GAME_TILE, r).url }),
            (0, i.jsxs)("div", {
                className: te.UD,
                children: [
                    (0, i.jsx)(A.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: l
                            ? tt.intl.string(tt.t.XBboAK)
                            : tt.intl.formatToPlainString(tt.t.EQa7os, { questName: e.config.messages.questName }),
                    }),
                    (0, i.jsx)(C.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: l
                            ? tt.intl.formatToPlainString(tt.t.APddvF, { expirationDate: n })
                            : tt.intl.formatToPlainString(tt.t["pX+fmn"], { expirationDate: s }),
                    }),
                ],
            }),
        ],
    });
}
function tn(t) {
    let { nodeRef: e, quest: s, onQuestDismiss: n, isStaffPreview: r = !1 } = t,
        V = (0, O.Ut)(),
        W = (0, b.go)(),
        tn = (0, u.bG)([v.A], () => v.A.isEnrolling(s.id), [s]),
        [ti, ta] = a.useState(!1),
        tr = a.useCallback(() => ta(!0), []),
        tl = a.useCallback(() => ta(!1), []),
        { launchInGameActivity: to } = (0, q.zW)(s),
        tu = y.t.useConfig({ location: B.rE.ACTIVITY_PANEL }),
        tc = (0, H.Pd)(s),
        tA = a.useCallback((t) => {
            t.stopPropagation();
        }, []),
        tC = a.useCallback(() => {
            null != s &&
                ((0, Y.E5)(Y.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_panel_item")
                    ? (0, x.r)({
                          type: L.F.CLICK_INTERNAL,
                          adCreativeType: o.p.QUEST,
                          adCreativeId: s.id,
                          questContentCTA: Q.Cy.TRACK_PROGRESS,
                          surfaceId: F.uF.ACTIVITY_PANEL,
                          sourceQuestContent: F.uF.ACTIVITY_PANEL,
                          impressionId: W,
                      })
                    : V({
                          questId: s.id,
                          questContent: F.uF.ACTIVITY_PANEL,
                          questContentCTA: Q.Cy.TRACK_PROGRESS,
                          sourceQuestContent: F.uF.ACTIVITY_PANEL,
                      }),
                (0, J.mA)({ fromContent: F.uF.ACTIVITY_PANEL, questId: s.id }));
        }, [s, V, W]),
        tT = a.useCallback(() => {
            (0, Y.E5)(Y.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_panel_item")
                ? (0, x.r)({
                      type: L.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: Q.Cy.LEARN_MORE,
                      surfaceId: F.uF.ACTIVITY_PANEL,
                      sourceQuestContent: F.uF.ACTIVITY_PANEL,
                      impressionId: W,
                  })
                : V({
                      questId: s.id,
                      questContent: F.uF.ACTIVITY_PANEL,
                      questContentCTA: Q.Cy.LEARN_MORE,
                      sourceQuestContent: F.uF.ACTIVITY_PANEL,
                  }),
                (0, J.mA)({ fromContent: F.uF.ACTIVITY_PANEL, questId: s.id });
        }, [s.id, V, W]),
        td = (0, X.D)({
            quest: s,
            questContent: F.uF.ACTIVITY_PANEL,
            sourceQuestContent: F.uF.ACTIVITY_PANEL,
            experimentLocation: B.rE.ACTIVITY_PANEL,
        }),
        tI = s.userStatus?.enrolledAt != null,
        tE = s.userStatus?.completedAt != null,
        tm = (0, q.fc)(s),
        tN = S.useConfig({ location: B.rE.ACTIVITY_PANEL }).variant,
        t_ = tN === p.T1_COMPACT,
        tx = tN === p.T2_HERO_IMAGE,
        tL = t_ || tx,
        tP = a.useCallback(async () => {
            if (tL) {
                let { type: t } = await (0, j.Oy)(s.id, {
                    questContent: F.uF.ACTIVITY_PANEL,
                    questContentCTA: Q.Cy.ACCEPT_QUEST,
                    sourceQuestContent: F.uF.ACTIVITY_PANEL,
                });
                switch (t) {
                    case j.WM.SUCCESS:
                        (0, j.g5)(s.id, F.uF.ACTIVITY_PANEL),
                            r ? (0, j.L4)(F.uF.ACTIVITY_PANEL, s.id) : n?.(),
                            (0, J.mA)({ fromContent: F.uF.ACTIVITY_PANEL, questId: s.id });
                        break;
                    case j.WM.CAPTCHA_FAILED:
                        _.A.show({ title: tt.intl.string(tt.t["/CidxO"]), body: tt.intl.string(tt.t.HQdHg6) });
                        break;
                    case j.WM.UNKNOWN_ERROR:
                        _.A.show({ title: tt.intl.string(tt.t.R0RpRX), body: tt.intl.string(tt.t.OXD41D) });
                    case j.WM.PREVIOUS_IN_FLIGHT_REQUEST:
                }
            } else
                (0, j.Oy)(s.id, {
                    questContent: F.uF.ACTIVITY_PANEL,
                    questContentCTA: Q.Cy.ACCEPT_QUEST,
                    sourceQuestContent: F.uF.ACTIVITY_PANEL,
                }),
                    (0, U.vA)(s) && to();
        }, [s, to, tL, r, n]),
        tg = (0, u.bG)([g.A], () => g.A.getState().theme),
        th = (0, c.M)(tg) ? Z.NJ8.DARK : Z.NJ8.LIGHT,
        tf = (0, u.bG)([f.default], () => f.default.getCurrentUser()),
        tj = (0, M.ks)(s.config),
        tv = (0, M.wo)(s.config, tf),
        tF = (0, M.mH)(s.config, tf),
        tY = (0, R.mU)({
            quest: s,
            taskDetails: tm,
            location: B.rE.ACTIVITY_PANEL,
            sourceQuestContent: F.uF.ACTIVITY_PANEL,
            gameProfileSource: P.GameProfileSources.QuestActivityPanel,
        }),
        tV = tx ? (0, k.tW)(s, k.fY.HERO_IMAGE)?.url : null,
        tp = (0, k.tW)(s, k.fY.GAME_TILE, th).url,
        tS = tx && null != tV,
        ty = null != s.config.ctaConfig ? (0, D.Jx)(s.config) : "",
        tR = (0, q.do)({
            quest: s,
            content: F.uF.ACTIVITY_PANEL,
            ctaContent: Q.Cy.OPEN_GAME_LINK,
            sourceQuestContent: F.uF.ACTIVITY_PANEL,
        }),
        tq = (0, U.vA)(s),
        tk = (0, R.NA)({ quest: s }),
        tO = tq ? tk : tt.intl.string(tt.t.l7E81v),
        tQ =
            tu.enabled && tc === H.UA.UNENROLLED && tu.enabledQuestStates.has(H.UA.UNENROLLED) && !(0, G.Ic)(s)
                ? (0, i.jsx)(w.A, {
                      quest: s,
                      surface: H.V3.ACTIVITY_PANEL,
                      size: "md",
                      analyticsCtxQuestContent: F.uF.ACTIVITY_PANEL,
                      analyticsCtxSourceQuestContent: F.uF.ACTIVITY_PANEL,
                  })
                : (0, i.jsx)(T.$, {
                      variant: "primary",
                      size: "sm",
                      text: tO,
                      onClick: tP,
                      loading: tn,
                      icon: (0, J.Oz)(s),
                  }),
        tb = (0, i.jsx)(T.$, {
            variant: "primary",
            size: "sm",
            fullWidth: !0,
            text: tO,
            onClick: tP,
            loading: tn,
            icon: (0, J.Oz)(s),
        }),
        tD =
            null != ("" !== ty ? ty : null)
                ? (0, i.jsx)(d.K, {
                      variant: "secondary",
                      size: "sm",
                      icon: I.I,
                      "aria-label": (0, D.wr)(s),
                      onClick: tR,
                  })
                : null,
        tG = (0, i.jsx)(z.C, {
            quest: s,
            questContent: F.uF.ACTIVITY_PANEL,
            shouldShowDisclosure: s.userStatus?.enrolledAt == null,
            showShareLink: !0,
            sourceQuestContent: F.uF.ACTIVITY_PANEL,
            children: (t) =>
                (0, i.jsx)(E.D, {
                    ...t,
                    "aria-label": tt.intl.string(tt.t.DEoVWZ),
                    children: (0, i.jsx)(m.j, { size: "md", color: "currentColor", className: te.Bx }),
                }),
        }),
        tM = (0, i.jsxs)(i.Fragment, { children: [tI ? (0, i.jsx)(ts, { quest: s }) : (0, i.jsx)(K.A, {}), tG] });
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)("div", {
            ref: (t) => {
                e.current = t;
            },
            className: l()(te.iE, { [te.tJ]: tI }),
            onClick: tA,
            onKeyPress: tA,
            onFocus: tr,
            onMouseEnter: tr,
            onBlur: tl,
            onMouseLeave: tl,
            children: [
                tS &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("img", { className: te.km, alt: "", src: tV }),
                            (0, i.jsx)("div", { className: te.cA }),
                        ],
                    }),
                (0, i.jsxs)("div", {
                    className: l()(te.CU, { [te.eF]: tS }),
                    children: [
                        !tL && (0, i.jsx)("div", { className: te.Wp, children: tM }),
                        tL && (0, i.jsx)("div", { className: te.FG, children: tG }),
                        tL &&
                            (0, i.jsxs)("div", {
                                className: te.we,
                                children: [
                                    (0, i.jsx)("img", { className: te.Zc, alt: "", src: tp }),
                                    (0, i.jsxs)("div", {
                                        className: te.l3,
                                        children: [
                                            (0, i.jsx)(A.D, {
                                                variant: "heading-sm/semibold",
                                                color: "text-strong",
                                                children: tj
                                                    ? tt.intl.format(tt.t["0IUT4Y"], {
                                                          rewardWithArticleHook: () =>
                                                              (0, i.jsxs)(i.Fragment, {
                                                                  children: [
                                                                      (0, i.jsx)(h.A, {
                                                                          shouldUseThemeColor: !0,
                                                                          customSize: 14,
                                                                          className: te.tz,
                                                                      }),
                                                                      tt.intl.format(tt.t["nLXlh+"], {
                                                                          orbAmount: tv ?? 0,
                                                                      }),
                                                                  ],
                                                              }),
                                                      })
                                                    : tt.intl.format(tt.t["0IUT4Y"], {
                                                          rewardWithArticleHook: () => tF,
                                                      }),
                                            }),
                                            (0, i.jsx)(C.E, {
                                                variant: "text-xs/medium",
                                                color: "text-muted",
                                                children: tY,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        !tL &&
                            !tI &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ts, { quest: s }),
                                    (0, i.jsx)($.A, {
                                        autoplay: ti,
                                        className: te.t3,
                                        quest: s,
                                        questContent: F.uF.ACTIVITY_PANEL,
                                        location: B.rE.ACTIVITY_PANEL,
                                        taskDetails: tm,
                                        sourceQuestContent: F.uF.ACTIVITY_PANEL,
                                        gameProfileSource: P.GameProfileSources.QuestActivityPanel,
                                    }),
                                ],
                            }),
                        !tL &&
                            tI &&
                            !tE &&
                            (0, i.jsx)($.A, {
                                autoplay: ti,
                                className: te.t3,
                                quest: s,
                                questContent: F.uF.ACTIVITY_PANEL,
                                location: B.rE.ACTIVITY_PANEL,
                                taskDetails: tm,
                                sourceQuestContent: F.uF.ACTIVITY_PANEL,
                                gameProfileSource: P.GameProfileSources.QuestActivityPanel,
                            }),
                        (0, i.jsxs)("div", {
                            className: te.uz,
                            children: [
                                !tI &&
                                    tL &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [tD, (0, i.jsx)("div", { className: te.E0, children: tb })],
                                    }),
                                !tI &&
                                    !tL &&
                                    (0, i.jsxs)(N.e, {
                                        size: "sm",
                                        direction: tq ? "vertical" : "horizontal",
                                        fullWidth: !0,
                                        children: [
                                            (0, i.jsx)(T.$, {
                                                variant: "secondary",
                                                text: tt.intl.string(tt.t.LLLLPD),
                                                onClick: tT,
                                            }),
                                            tQ,
                                        ],
                                    }),
                                tI &&
                                    !tE &&
                                    tL &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            tD,
                                            (0, i.jsx)("div", {
                                                className: te.E0,
                                                children: (0, i.jsx)(T.$, {
                                                    variant: "primary",
                                                    size: "sm",
                                                    fullWidth: !0,
                                                    text: tO,
                                                    onClick: tP,
                                                    loading: tn,
                                                }),
                                            }),
                                        ],
                                    }),
                                tI &&
                                    !tE &&
                                    !tL &&
                                    (0, i.jsx)(T.$, {
                                        variant: "primary",
                                        size: "sm",
                                        fullWidth: !0,
                                        text: tt.intl.string(tt.t.VN1Ajl),
                                        onClick: tC,
                                    }),
                                tE &&
                                    tL &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            tD,
                                            (0, i.jsx)("div", {
                                                className: te.E0,
                                                children: (0, i.jsx)(T.$, {
                                                    variant: "primary",
                                                    size: "sm",
                                                    fullWidth: !0,
                                                    text: tt.intl.string(tt.t.cfY4PE),
                                                    onClick: td,
                                                }),
                                            }),
                                        ],
                                    }),
                                tE &&
                                    !tL &&
                                    (0, i.jsx)(T.$, {
                                        variant: "primary",
                                        size: "sm",
                                        fullWidth: !0,
                                        text: tt.intl.string(tt.t.cfY4PE),
                                        onClick: td,
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
let ti = function (t) {
    return (0, i.jsx)(W.R, {
        questOrQuests: t.quest,
        questContent: F.uF.ACTIVITY_PANEL,
        sourceQuestContent: F.uF.ACTIVITY_PANEL,
        children: (e) => (0, i.jsx)(tn, { nodeRef: e, ...t }),
    });
};
