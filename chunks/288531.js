n.d(t, { A: () => B });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(696292),
    r = n(311907),
    o = n(990078),
    d = n(939249),
    c = n(834730),
    u = n(821609),
    m = n(695366),
    _ = n(827734),
    h = n(825484),
    p = n(409626),
    g = n(773669),
    A = n(975571),
    f = n(252424),
    x = n(859703),
    C = n(112142),
    E = n(714510),
    I = n(890687),
    v = n(18437),
    b = n(590202),
    T = n(92246),
    S = n(792620),
    y = n(895253),
    N = n(201805),
    j = n(442734),
    L = n(212614),
    R = n(79545),
    P = n(646764),
    w = n(545986),
    D = n(654487),
    k = n(652215),
    O = n(985018),
    M = n(251266);
function U(e) {
    let { containerSize: t, onClick: n, text: l, tabIndex: a } = e;
    return "xs" === t
        ? (0, i.jsx)(d.D, {
              tabIndex: a,
              className: M.CU,
              tag: "span",
              onClick: n,
              children: (0, i.jsx)(c.E, { variant: "text-sm/medium", color: "text-link", children: l }),
          })
        : (0, i.jsx)(u.$, { fullWidth: !0, tabIndex: a, variant: "secondary", onClick: n, text: l });
}
function G(e) {
    let { quest: t, progressState: n, questContent: l, questContentPosition: a, sourceQuestContent: s } = e,
        d = (0, r.bG)([x.A], () => x.A.isEnrolling(t.id)),
        c = (0, S.vv)(t),
        m = (0, S.Cr)(t),
        _ = (0, N._c)({
            progressState: n,
            quest: t,
            questContent: l,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: c,
            inGameQuest: m,
            sourceQuestContent: s,
        });
    return (0, i.jsx)(
        o.m,
        {
            text: _.tooltipText,
            children: (0, i.jsx)(u.$, {
                fullWidth: !0,
                variant: "primary",
                disabled: null == _.onClick,
                loading: d,
                onClick: _.onClick ?? void 0,
                text: _.text,
            }),
        },
        _.tooltipText,
    );
}
let B = (e) => {
    let {
            quest: t,
            location: n,
            size: l,
            isFocused: d,
            isQuestExpired: N,
            isExpanded: B,
            isAnimating: F,
            contentPosition: H,
            sourceQuestContent: V,
        } = e,
        q = (0, I.In)(t),
        W = (0, I.S5)(t.userStatus?.completedAt, { year: "numeric", month: "long", day: "numeric" }),
        z = q >= I.F3.COMPLETED,
        Y = B || F,
        Q = (0, E.wT)(t, D.rE.QUESTS_CARD, n, V),
        K = (0, v.Ut)(),
        Z = (0, I.fc)(t),
        J = (0, E.mU)({
            quest: t,
            taskDetails: Z,
            location: D.rE.QUESTS_CARD,
            questContent: s.u.QUESTS_EMBED,
            sourceQuestContent: V,
            gameProfileSource: p.Ob.QuestEmbed,
        }),
        X = (0, r.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []),
        $ = C.t.useConfig({ location: D.rE.QUEST_HOME_DESKTOP }),
        ee = (0, R.Pd)(t),
        et = (0, r.bG)([g.default], () => g.default.locale),
        en = (0, I.Oq)(),
        ei = (0, I.SD)(t),
        el = en && ei,
        ea = N && !z,
        es = (0, S.vv)(t);
    return (0, i.jsx)("div", {
        className: M.zr,
        children: (0, i.jsx)("div", {
            style: { visibility: Y ? "inherit" : "hidden" },
            "aria-hidden": !Y,
            children: (0, i.jsxs)("div", {
                className: a()(M.nw, { [M.dF]: "sm" === l, [M.e5]: "xs" === l }),
                children: [
                    (0, i.jsx)(y.A, { visible: el, glow: !0 }),
                    (0, i.jsx)(o.m, {
                        text: ea ? O.intl.string(O.t["04MTGf"]) : null,
                        shouldShow: ea,
                        children: (0, i.jsxs)("div", {
                            className: M.D9,
                            children: [
                                N &&
                                    (0, i.jsx)("div", {
                                        className: M.FL,
                                        children: (0, i.jsx)(m.E, { color: _.A.colors.WHITE }),
                                    }),
                                (0, i.jsx)(P.A, {
                                    autoplay: d,
                                    className: a()({ [M.Lu]: "lg" === l, [M.je]: "sm" === l, [M.ks]: "xs" === l }),
                                    learnMoreStyle: "text",
                                    quest: t,
                                    questContent: n,
                                    questContentPosition: H,
                                    sourceQuestContent: V,
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: M.oW,
                        children: [
                            !es &&
                                (0, i.jsxs)("div", {
                                    className: M.KI,
                                    children: [
                                        (0, i.jsx)(c.E, {
                                            variant:
                                                "lg" === l
                                                    ? "text-md/medium"
                                                    : "sm" === l
                                                      ? "text-sm/medium"
                                                      : "text-xs/medium",
                                            className: M.$p,
                                            children: N
                                                ? O.intl.formatToPlainString(O.t["ge+AJp"], {
                                                      questName: t.config.messages.questName,
                                                  })
                                                : Q,
                                        }),
                                        ei && (0, i.jsx)(j.e, { questId: t.id, canUseQuestOrbMultiplier: en }),
                                    ],
                                }),
                            (0, i.jsxs)("div", {
                                className: M.KI,
                                children: [
                                    (0, i.jsx)(c.E, {
                                        variant: "lg" === l ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: (function (e) {
                                            let {
                                                    quest: t,
                                                    locale: n,
                                                    isQuestExpired: i,
                                                    collectibleQuestRewardDescription: l,
                                                    formattedCompletionDate: a,
                                                } = e,
                                                s = t.userStatus?.completedAt != null,
                                                r = s && t.userStatus?.claimedAt != null,
                                                o = (0, T.kr)({ quest: t }),
                                                d = (0, T.mH)(t.config);
                                            if (r) {
                                                let e = o
                                                        ? (0, T.cg)({ quest: t, idx: t.userStatus?.claimedTier })
                                                        : null,
                                                    n = e?.messages.nameWithArticle ?? null;
                                                return null != n
                                                    ? O.intl.formatToPlainString(O.t.RrxtPU, { reward: n, date: a })
                                                    : O.intl.formatToPlainString(O.t.zNoqRe, { reward: d, date: a });
                                            }
                                            if (s)
                                                return o
                                                    ? O.intl.formatToPlainString(O.t["l1jCM/"], { date: a })
                                                    : O.intl.formatToPlainString(O.t.zNoqRe, { reward: d, date: a });
                                            let c = o ? (0, T.cg)({ quest: t, idx: 0 }) : null;
                                            return i
                                                ? O.intl.formatToPlainString(O.t.DT3auf, {
                                                      reward: c?.messages.nameWithArticle ?? d,
                                                  })
                                                : null != c && null != c.approximateCount
                                                  ? O.intl.format(O.t["4bMK1z"], {
                                                        maxReward: c.messages.nameWithArticle,
                                                        maxRewardCount: (0, f.tg)(c.approximateCount, n),
                                                        helpCenterLink: A.A.getArticleURL(k.MVz.QUESTS_LEARN_MORE),
                                                    })
                                                  : l;
                                        })({
                                            quest: t,
                                            locale: et,
                                            isQuestExpired: N,
                                            collectibleQuestRewardDescription: J,
                                            formattedCompletionDate: W,
                                        }),
                                    }),
                                    es && ei && (0, i.jsx)(j.e, { questId: t.id, canUseQuestOrbMultiplier: en }),
                                ],
                            }),
                        ],
                    }),
                    X
                        ? (0, i.jsxs)(h.e, {
                              direction: "horizontal",
                              align: "center",
                              fullWidth: "lg" !== l,
                              children: [
                                  (0, i.jsx)(u.$, {
                                      variant: "secondary",
                                      disabled: !0,
                                      text: O.intl.string(O.t.V293qn),
                                  }),
                                  (0, i.jsx)(u.$, {
                                      variant: "primary",
                                      onClick: () => (0, w.m6)(t, n, V),
                                      text: O.intl.string(O.t.vY9GgG),
                                  }),
                              ],
                          })
                        : (0, i.jsxs)(h.e, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              fullWidth: "lg" !== l,
                              children: [
                                  (0, i.jsx)(U, {
                                      containerSize: l,
                                      onClick: () => {
                                          (0, w.navigateToQuestHome)({ fromContent: n, questId: t.id }),
                                              K({
                                                  questId: t.id,
                                                  questContent: n,
                                                  questContentPosition: H,
                                                  questContentCTA: b.Cy.LEARN_MORE,
                                                  sourceQuestContent: V,
                                              });
                                      },
                                      text: O.intl.string(O.t.LLLLPD),
                                  }),
                                  !ea &&
                                      ($.enabled && $.enabledQuestStates.has(ee)
                                          ? (0, i.jsx)(L.A, {
                                                quest: t,
                                                surface: R.V3.QUEST_EMBED,
                                                analyticsCtxQuestContent: n,
                                                analyticsCtxSourceQuestContent: V,
                                                analyticsCtxQuestContentPosition: H,
                                            })
                                          : (0, i.jsx)(G, {
                                                quest: t,
                                                progressState: q,
                                                questContent: n,
                                                sourceQuestContent: V,
                                            })),
                              ],
                          }),
                ],
            }),
        }),
    });
};
