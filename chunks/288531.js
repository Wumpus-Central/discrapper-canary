n.d(t, { A: () => w });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(696292),
    s = n(311907),
    o = n(435371),
    d = n(397927),
    c = n(409626),
    u = n(773669),
    _ = n(975571),
    m = n(252424),
    h = n(859703),
    p = n(33621),
    g = n(714510),
    A = n(890687),
    x = n(18437),
    f = n(590202),
    C = n(92246),
    I = n(792620),
    E = n(201805),
    b = n(212614),
    v = n(79545),
    T = n(646764),
    y = n(545986),
    S = n(654487),
    N = n(652215),
    j = n(985018),
    L = n(488818);
function R(e) {
    let { containerSize: t, onClick: n, text: r, tabIndex: a } = e;
    return "xs" === t
        ? (0, i.jsx)(d.DUT, {
              tabIndex: a,
              className: L.CU,
              tag: "span",
              onClick: n,
              children: (0, i.jsx)(d.Text, { variant: "text-sm/medium", color: "text-link", children: r }),
          })
        : (0, i.jsx)(d.Button, { fullWidth: !0, tabIndex: a, variant: "secondary", onClick: n, text: r });
}
function P(e) {
    let { quest: t, progressState: n, questContent: r, questContentPosition: a, sourceQuestContent: l } = e,
        c = (0, s.bG)([h.A], () => h.A.isEnrolling(t.id)),
        u = (0, I.vv)(t),
        _ = (0, I.Cr)(t),
        m = (0, E._c)({
            progressState: n,
            quest: t,
            questContent: r,
            questContentPosition: a,
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
let w = (e) => {
    let {
            quest: t,
            location: n,
            size: r,
            isFocused: E,
            isQuestExpired: w,
            isExpanded: M,
            isAnimating: D,
            contentPosition: k,
            sourceQuestContent: O,
        } = e,
        U = (0, A.In)(t),
        B = (0, A.S5)(t.userStatus?.completedAt, { year: "numeric", month: "long", day: "numeric" }),
        G = U >= A.F3.COMPLETED,
        F = M || D,
        H = (0, g.wT)(t, S.rE.QUESTS_CARD, n, O),
        V = (0, x.Ut)(),
        q = (0, A.fc)(t),
        W = (0, g.mU)({
            quest: t,
            taskDetails: q,
            location: S.rE.QUESTS_CARD,
            questContent: l.u.QUESTS_EMBED,
            sourceQuestContent: O,
            gameProfileSource: c.Ob.QuestEmbed,
        }),
        z = (0, s.bG)([h.A], () => null != h.A.questEnrollmentBlockedUntil, []),
        Y = p.t.useConfig({ location: S.rE.QUEST_HOME_DESKTOP }),
        Q = (0, v.Pd)(t),
        K = (0, s.bG)([u.default], () => u.default.locale),
        J = w && !G,
        X = (0, I.vv)(t);
    return (0, i.jsx)("div", {
        className: L.zr,
        children: (0, i.jsxs)("div", {
            className: a()(L.nw, { [L.dF]: "sm" === r, [L.e5]: "xs" === r }),
            style: { visibility: F ? "inherit" : "hidden" },
            "aria-hidden": !F,
            children: [
                (0, i.jsx)(o.m_, {
                    text: J ? j.intl.string(j.t["04MTGf"]) : null,
                    shouldShow: J,
                    children: (0, i.jsxs)("div", {
                        className: L.D9,
                        children: [
                            w &&
                                (0, i.jsx)("div", {
                                    className: L.FL,
                                    children: (0, i.jsx)(d.EpV, { color: d.LU0.colors.WHITE }),
                                }),
                            (0, i.jsx)(T.A, {
                                autoplay: E,
                                className: a()({ [L.Lu]: "lg" === r, [L.je]: "sm" === r, [L.ks]: "xs" === r }),
                                learnMoreStyle: "text",
                                quest: t,
                                questContent: n,
                                questContentPosition: k,
                                sourceQuestContent: O,
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: L.oW,
                    children: [
                        !X &&
                            (0, i.jsx)(d.Text, {
                                variant:
                                    "lg" === r ? "text-md/medium" : "sm" === r ? "text-sm/medium" : "text-xs/medium",
                                className: L.$p,
                                children: w
                                    ? j.intl.formatToPlainString(j.t["ge+AJp"], {
                                          questName: t.config.messages.questName,
                                      })
                                    : H,
                            }),
                        (0, i.jsx)(d.Text, {
                            variant: "lg" === r ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: (function (e) {
                                let {
                                        quest: t,
                                        locale: n,
                                        isQuestExpired: i,
                                        collectibleQuestRewardDescription: r,
                                        formattedCompletionDate: a,
                                    } = e,
                                    l = t.userStatus?.completedAt != null,
                                    s = l && t.userStatus?.claimedAt != null,
                                    o = (0, C.kr)({ quest: t }),
                                    d = (0, C.mH)(t.config);
                                if (s) {
                                    let e = o ? (0, C.cg)({ quest: t, idx: t.userStatus?.claimedTier }) : null,
                                        n = e?.messages.nameWithArticle ?? null;
                                    return null != n
                                        ? j.intl.formatToPlainString(j.t.RrxtPU, { reward: n, date: a })
                                        : j.intl.formatToPlainString(j.t.zNoqRe, { reward: d, date: a });
                                }
                                if (l)
                                    return o
                                        ? j.intl.formatToPlainString(j.t["l1jCM/"], { date: a })
                                        : j.intl.formatToPlainString(j.t.zNoqRe, { reward: d, date: a });
                                let c = o ? (0, C.cg)({ quest: t, idx: 0 }) : null;
                                return i
                                    ? j.intl.formatToPlainString(j.t.DT3auf, {
                                          reward: c?.messages.nameWithArticle ?? d,
                                      })
                                    : null != c && null != c.approximateCount
                                      ? j.intl.format(j.t["4bMK1z"], {
                                            maxReward: c.messages.nameWithArticle,
                                            maxRewardCount: (0, m.tg)(c.approximateCount, n),
                                            helpCenterLink: _.A.getArticleURL(N.MVz.QUESTS_LEARN_MORE),
                                        })
                                      : r;
                            })({
                                quest: t,
                                locale: K,
                                isQuestExpired: w,
                                collectibleQuestRewardDescription: W,
                                formattedCompletionDate: B,
                            }),
                        }),
                    ],
                }),
                z
                    ? (0, i.jsxs)(d.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== r,
                          children: [
                              (0, i.jsx)(d.Button, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: j.intl.string(j.t.V293qn),
                              }),
                              (0, i.jsx)(d.Button, {
                                  variant: "primary",
                                  onClick: () => (0, y.m6)(t, n, O),
                                  text: j.intl.string(j.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(d.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== r,
                          children: [
                              (0, i.jsx)(R, {
                                  containerSize: r,
                                  onClick: () => {
                                      (0, y.navigateToQuestHome)({ fromContent: n, questId: t.id }),
                                          V({
                                              questId: t.id,
                                              questContent: n,
                                              questContentPosition: k,
                                              questContentCTA: f.Cy.LEARN_MORE,
                                              sourceQuestContent: O,
                                          });
                                  },
                                  text: j.intl.string(j.t.LLLLPD),
                              }),
                              !J &&
                                  (Y.enabled &&
                                  (Q === v.UA.UNENROLLED || Q === v.UA.ENROLLED) &&
                                  Y.enabledQuestStates.has(Q)
                                      ? (0, i.jsx)(b.A, {
                                            quest: t,
                                            surface: v.V3.QUEST_EMBED,
                                            analyticsCtxQuestContent: n,
                                            analyticsCtxSourceQuestContent: O,
                                            analyticsCtxQuestContentPosition: k,
                                        })
                                      : (0, i.jsx)(P, {
                                            quest: t,
                                            progressState: U,
                                            questContent: n,
                                            sourceQuestContent: O,
                                        })),
                          ],
                      }),
            ],
        }),
    });
};
