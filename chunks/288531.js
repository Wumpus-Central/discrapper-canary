n.d(t, { A: () => D });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(696292),
    s = n(311907),
    o = n(435371),
    d = n(397927),
    c = n(409626),
    u = n(773669),
    _ = n(975571),
    m = n(252424),
    h = n(859703),
    p = n(112142),
    g = n(714510),
    A = n(890687),
    x = n(18437),
    f = n(590202),
    C = n(92246),
    I = n(792620),
    E = n(895253),
    b = n(201805),
    v = n(442734),
    T = n(212614),
    y = n(79545),
    S = n(646764),
    N = n(545986),
    j = n(654487),
    L = n(652215),
    R = n(985018),
    P = n(488818);
function w(e) {
    let { containerSize: t, onClick: n, text: a, tabIndex: r } = e;
    return "xs" === t
        ? (0, i.jsx)(d.DUT, {
              tabIndex: r,
              className: P.CU,
              tag: "span",
              onClick: n,
              children: (0, i.jsx)(d.Text, { variant: "text-sm/medium", color: "text-link", children: a }),
          })
        : (0, i.jsx)(d.Button, { fullWidth: !0, tabIndex: r, variant: "secondary", onClick: n, text: a });
}
function M(e) {
    let { quest: t, progressState: n, questContent: a, questContentPosition: r, sourceQuestContent: l } = e,
        c = (0, s.bG)([h.A], () => h.A.isEnrolling(t.id)),
        u = (0, I.vv)(t),
        _ = (0, I.Cr)(t),
        m = (0, b._c)({
            progressState: n,
            quest: t,
            questContent: a,
            questContentPosition: r,
            inGiftInventory: !1,
            isVideoQuest: u,
            inGameQuest: _,
            sourceQuestContent: l,
        });
    return (0, i.jsx)(
        o.m_,
        {
            text: m.tooltipText,
            children: (0, i.jsx)(d.Button, {
                fullWidth: !0,
                variant: "primary",
                disabled: null == m.onClick,
                loading: c,
                onClick: m.onClick ?? void 0,
                text: m.text,
            }),
        },
        m.tooltipText,
    );
}
let D = (e) => {
    let {
            quest: t,
            location: n,
            size: a,
            isFocused: b,
            isQuestExpired: D,
            isExpanded: k,
            isAnimating: O,
            contentPosition: U,
            sourceQuestContent: B,
        } = e,
        G = (0, A.In)(t),
        F = (0, A.S5)(t.userStatus?.completedAt, { year: "numeric", month: "long", day: "numeric" }),
        H = G >= A.F3.COMPLETED,
        V = k || O,
        q = (0, g.wT)(t, j.rE.QUESTS_CARD, n, B),
        W = (0, x.Ut)(),
        z = (0, A.fc)(t),
        Y = (0, g.mU)({
            quest: t,
            taskDetails: z,
            location: j.rE.QUESTS_CARD,
            questContent: l.u.QUESTS_EMBED,
            sourceQuestContent: B,
            gameProfileSource: c.Ob.QuestEmbed,
        }),
        Q = (0, s.bG)([h.A], () => null != h.A.questEnrollmentBlockedUntil, []),
        K = p.t.useConfig({ location: j.rE.QUEST_HOME_DESKTOP }),
        J = (0, y.Pd)(t),
        X = (0, s.bG)([u.default], () => u.default.locale),
        Z = (0, A.Oq)(),
        $ = (0, A.SD)(t),
        ee = Z && $,
        et = D && !H,
        en = (0, I.vv)(t);
    return (0, i.jsx)("div", {
        className: P.zr,
        children: (0, i.jsx)("div", {
            style: { visibility: V ? "inherit" : "hidden" },
            "aria-hidden": !V,
            children: (0, i.jsxs)("div", {
                className: r()(P.nw, { [P.dF]: "sm" === a, [P.e5]: "xs" === a }),
                children: [
                    (0, i.jsx)(E.A, { visible: ee, glow: !0 }),
                    (0, i.jsx)(o.m_, {
                        text: et ? R.intl.string(R.t["04MTGf"]) : null,
                        shouldShow: et,
                        children: (0, i.jsxs)("div", {
                            className: P.D9,
                            children: [
                                D &&
                                    (0, i.jsx)("div", {
                                        className: P.FL,
                                        children: (0, i.jsx)(d.EpV, { color: d.LU0.colors.WHITE }),
                                    }),
                                (0, i.jsx)(S.A, {
                                    autoplay: b,
                                    className: r()({ [P.Lu]: "lg" === a, [P.je]: "sm" === a, [P.ks]: "xs" === a }),
                                    learnMoreStyle: "text",
                                    quest: t,
                                    questContent: n,
                                    questContentPosition: U,
                                    sourceQuestContent: B,
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: P.oW,
                        children: [
                            !en &&
                                (0, i.jsxs)("div", {
                                    className: P.KI,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant:
                                                "lg" === a
                                                    ? "text-md/medium"
                                                    : "sm" === a
                                                      ? "text-sm/medium"
                                                      : "text-xs/medium",
                                            className: P.$p,
                                            children: D
                                                ? R.intl.formatToPlainString(R.t["ge+AJp"], {
                                                      questName: t.config.messages.questName,
                                                  })
                                                : q,
                                        }),
                                        $ && (0, i.jsx)(v.e, { questId: t.id, canUseQuestOrbMultiplier: Z }),
                                    ],
                                }),
                            (0, i.jsxs)("div", {
                                className: P.KI,
                                children: [
                                    (0, i.jsx)(d.Text, {
                                        variant: "lg" === a ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: (function (e) {
                                            let {
                                                    quest: t,
                                                    locale: n,
                                                    isQuestExpired: i,
                                                    collectibleQuestRewardDescription: a,
                                                    formattedCompletionDate: r,
                                                } = e,
                                                l = t.userStatus?.completedAt != null,
                                                s = l && t.userStatus?.claimedAt != null,
                                                o = (0, C.kr)({ quest: t }),
                                                d = (0, C.mH)(t.config);
                                            if (s) {
                                                let e = o
                                                        ? (0, C.cg)({ quest: t, idx: t.userStatus?.claimedTier })
                                                        : null,
                                                    n = e?.messages.nameWithArticle ?? null;
                                                return null != n
                                                    ? R.intl.formatToPlainString(R.t.RrxtPU, { reward: n, date: r })
                                                    : R.intl.formatToPlainString(R.t.zNoqRe, { reward: d, date: r });
                                            }
                                            if (l)
                                                return o
                                                    ? R.intl.formatToPlainString(R.t["l1jCM/"], { date: r })
                                                    : R.intl.formatToPlainString(R.t.zNoqRe, { reward: d, date: r });
                                            let c = o ? (0, C.cg)({ quest: t, idx: 0 }) : null;
                                            return i
                                                ? R.intl.formatToPlainString(R.t.DT3auf, {
                                                      reward: c?.messages.nameWithArticle ?? d,
                                                  })
                                                : null != c && null != c.approximateCount
                                                  ? R.intl.format(R.t["4bMK1z"], {
                                                        maxReward: c.messages.nameWithArticle,
                                                        maxRewardCount: (0, m.tg)(c.approximateCount, n),
                                                        helpCenterLink: _.A.getArticleURL(L.MVz.QUESTS_LEARN_MORE),
                                                    })
                                                  : a;
                                        })({
                                            quest: t,
                                            locale: X,
                                            isQuestExpired: D,
                                            collectibleQuestRewardDescription: Y,
                                            formattedCompletionDate: F,
                                        }),
                                    }),
                                    en && $ && (0, i.jsx)(v.e, { questId: t.id, canUseQuestOrbMultiplier: Z }),
                                ],
                            }),
                        ],
                    }),
                    Q
                        ? (0, i.jsxs)(d.ButtonGroup, {
                              direction: "horizontal",
                              align: "center",
                              fullWidth: "lg" !== a,
                              children: [
                                  (0, i.jsx)(d.Button, {
                                      variant: "secondary",
                                      disabled: !0,
                                      text: R.intl.string(R.t.V293qn),
                                  }),
                                  (0, i.jsx)(d.Button, {
                                      variant: "primary",
                                      onClick: () => (0, N.m6)(t, n, B),
                                      text: R.intl.string(R.t.vY9GgG),
                                  }),
                              ],
                          })
                        : (0, i.jsxs)(d.ButtonGroup, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              fullWidth: "lg" !== a,
                              children: [
                                  (0, i.jsx)(w, {
                                      containerSize: a,
                                      onClick: () => {
                                          (0, N.navigateToQuestHome)({ fromContent: n, questId: t.id }),
                                              W({
                                                  questId: t.id,
                                                  questContent: n,
                                                  questContentPosition: U,
                                                  questContentCTA: f.Cy.LEARN_MORE,
                                                  sourceQuestContent: B,
                                              });
                                      },
                                      text: R.intl.string(R.t.LLLLPD),
                                  }),
                                  !et &&
                                      (K.enabled &&
                                      (J === y.UA.UNENROLLED || J === y.UA.ENROLLED) &&
                                      K.enabledQuestStates.has(J)
                                          ? (0, i.jsx)(T.A, {
                                                quest: t,
                                                surface: y.V3.QUEST_EMBED,
                                                analyticsCtxQuestContent: n,
                                                analyticsCtxSourceQuestContent: B,
                                                analyticsCtxQuestContentPosition: U,
                                            })
                                          : (0, i.jsx)(M, {
                                                quest: t,
                                                progressState: G,
                                                questContent: n,
                                                sourceQuestContent: B,
                                            })),
                              ],
                          }),
                ],
            }),
        }),
    });
};
