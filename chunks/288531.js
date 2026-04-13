n.d(t, { A: () => w });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(696292),
    a = n(311907),
    o = n(435371),
    d = n(397927),
    c = n(409626),
    u = n(773669),
    m = n(975571),
    _ = n(252424),
    h = n(859703),
    p = n(112142),
    g = n(714510),
    A = n(890687),
    x = n(18437),
    f = n(590202),
    C = n(92246),
    E = n(792620),
    I = n(895253),
    v = n(201805),
    b = n(442734),
    T = n(212614),
    y = n(79545),
    N = n(646764),
    S = n(545986),
    j = n(654487),
    L = n(652215),
    R = n(985018),
    P = n(488818);
function D(e) {
    let { containerSize: t, onClick: n, text: l, tabIndex: s } = e;
    return "xs" === t
        ? (0, i.jsx)(d.DUT, {
              tabIndex: s,
              className: P.CU,
              tag: "span",
              onClick: n,
              children: (0, i.jsx)(d.Text, { variant: "text-sm/medium", color: "text-link", children: l }),
          })
        : (0, i.jsx)(d.Button, { fullWidth: !0, tabIndex: s, variant: "secondary", onClick: n, text: l });
}
function M(e) {
    let { quest: t, progressState: n, questContent: l, questContentPosition: s, sourceQuestContent: r } = e,
        c = (0, a.bG)([h.A], () => h.A.isEnrolling(t.id)),
        u = (0, E.vv)(t),
        m = (0, E.Cr)(t),
        _ = (0, v._c)({
            progressState: n,
            quest: t,
            questContent: l,
            questContentPosition: s,
            inGiftInventory: !1,
            isVideoQuest: u,
            inGameQuest: m,
            sourceQuestContent: r,
        });
    return (0, i.jsx)(
        o.m_,
        {
            text: _.tooltipText,
            children: (0, i.jsx)(d.Button, {
                fullWidth: !0,
                variant: "primary",
                disabled: null == _.onClick,
                loading: c,
                onClick: _.onClick ?? void 0,
                text: _.text,
            }),
        },
        _.tooltipText,
    );
}
let w = (e) => {
    let {
            quest: t,
            location: n,
            size: l,
            isFocused: v,
            isQuestExpired: w,
            isExpanded: O,
            isAnimating: k,
            contentPosition: U,
            sourceQuestContent: B,
        } = e,
        G = (0, A.In)(t),
        F = (0, A.S5)(t.userStatus?.completedAt, { year: "numeric", month: "long", day: "numeric" }),
        H = G >= A.F3.COMPLETED,
        V = O || k,
        q = (0, g.wT)(t, j.rE.QUESTS_CARD, n, B),
        W = (0, x.Ut)(),
        Y = (0, A.fc)(t),
        z = (0, g.mU)({
            quest: t,
            taskDetails: Y,
            location: j.rE.QUESTS_CARD,
            questContent: r.u.QUESTS_EMBED,
            sourceQuestContent: B,
            gameProfileSource: c.Ob.QuestEmbed,
        }),
        Q = (0, a.bG)([h.A], () => null != h.A.questEnrollmentBlockedUntil, []),
        K = p.t.useConfig({ location: j.rE.QUEST_HOME_DESKTOP }),
        J = (0, y.Pd)(t),
        X = (0, a.bG)([u.default], () => u.default.locale),
        Z = (0, A.Oq)(),
        $ = (0, A.SD)(t),
        ee = Z && $,
        et = w && !H,
        en = (0, E.vv)(t);
    return (0, i.jsx)("div", {
        className: P.zr,
        children: (0, i.jsx)("div", {
            style: { visibility: V ? "inherit" : "hidden" },
            "aria-hidden": !V,
            children: (0, i.jsxs)("div", {
                className: s()(P.nw, { [P.dF]: "sm" === l, [P.e5]: "xs" === l }),
                children: [
                    (0, i.jsx)(I.A, { visible: ee, glow: !0 }),
                    (0, i.jsx)(o.m_, {
                        text: et ? R.intl.string(R.t["04MTGf"]) : null,
                        shouldShow: et,
                        children: (0, i.jsxs)("div", {
                            className: P.D9,
                            children: [
                                w &&
                                    (0, i.jsx)("div", {
                                        className: P.FL,
                                        children: (0, i.jsx)(d.EpV, { color: d.LU0.colors.WHITE }),
                                    }),
                                (0, i.jsx)(N.A, {
                                    autoplay: v,
                                    className: s()({ [P.Lu]: "lg" === l, [P.je]: "sm" === l, [P.ks]: "xs" === l }),
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
                                                "lg" === l
                                                    ? "text-md/medium"
                                                    : "sm" === l
                                                      ? "text-sm/medium"
                                                      : "text-xs/medium",
                                            className: P.$p,
                                            children: w
                                                ? R.intl.formatToPlainString(R.t["ge+AJp"], {
                                                      questName: t.config.messages.questName,
                                                  })
                                                : q,
                                        }),
                                        $ && (0, i.jsx)(b.e, { questId: t.id, canUseQuestOrbMultiplier: Z }),
                                    ],
                                }),
                            (0, i.jsxs)("div", {
                                className: P.KI,
                                children: [
                                    (0, i.jsx)(d.Text, {
                                        variant: "lg" === l ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: (function (e) {
                                            let {
                                                    quest: t,
                                                    locale: n,
                                                    isQuestExpired: i,
                                                    collectibleQuestRewardDescription: l,
                                                    formattedCompletionDate: s,
                                                } = e,
                                                r = t.userStatus?.completedAt != null,
                                                a = r && t.userStatus?.claimedAt != null,
                                                o = (0, C.kr)({ quest: t }),
                                                d = (0, C.mH)(t.config);
                                            if (a) {
                                                let e = o
                                                        ? (0, C.cg)({ quest: t, idx: t.userStatus?.claimedTier })
                                                        : null,
                                                    n = e?.messages.nameWithArticle ?? null;
                                                return null != n
                                                    ? R.intl.formatToPlainString(R.t.RrxtPU, { reward: n, date: s })
                                                    : R.intl.formatToPlainString(R.t.zNoqRe, { reward: d, date: s });
                                            }
                                            if (r)
                                                return o
                                                    ? R.intl.formatToPlainString(R.t["l1jCM/"], { date: s })
                                                    : R.intl.formatToPlainString(R.t.zNoqRe, { reward: d, date: s });
                                            let c = o ? (0, C.cg)({ quest: t, idx: 0 }) : null;
                                            return i
                                                ? R.intl.formatToPlainString(R.t.DT3auf, {
                                                      reward: c?.messages.nameWithArticle ?? d,
                                                  })
                                                : null != c && null != c.approximateCount
                                                  ? R.intl.format(R.t["4bMK1z"], {
                                                        maxReward: c.messages.nameWithArticle,
                                                        maxRewardCount: (0, _.tg)(c.approximateCount, n),
                                                        helpCenterLink: m.A.getArticleURL(L.MVz.QUESTS_LEARN_MORE),
                                                    })
                                                  : l;
                                        })({
                                            quest: t,
                                            locale: X,
                                            isQuestExpired: w,
                                            collectibleQuestRewardDescription: z,
                                            formattedCompletionDate: F,
                                        }),
                                    }),
                                    en && $ && (0, i.jsx)(b.e, { questId: t.id, canUseQuestOrbMultiplier: Z }),
                                ],
                            }),
                        ],
                    }),
                    Q
                        ? (0, i.jsxs)(d.ButtonGroup, {
                              direction: "horizontal",
                              align: "center",
                              fullWidth: "lg" !== l,
                              children: [
                                  (0, i.jsx)(d.Button, {
                                      variant: "secondary",
                                      disabled: !0,
                                      text: R.intl.string(R.t.V293qn),
                                  }),
                                  (0, i.jsx)(d.Button, {
                                      variant: "primary",
                                      onClick: () => (0, S.m6)(t, n, B),
                                      text: R.intl.string(R.t.vY9GgG),
                                  }),
                              ],
                          })
                        : (0, i.jsxs)(d.ButtonGroup, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              fullWidth: "lg" !== l,
                              children: [
                                  (0, i.jsx)(D, {
                                      containerSize: l,
                                      onClick: () => {
                                          (0, S.navigateToQuestHome)({ fromContent: n, questId: t.id }),
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
                                      (K.enabled && K.enabledQuestStates.has(J)
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
