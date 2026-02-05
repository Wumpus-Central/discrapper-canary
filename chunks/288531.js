n.d(t, { A: () => D });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(696292),
    s = n(311907),
    o = n(435371),
    d = n(397927),
    c = n(409626),
    u = n(773669),
    m = n(975571),
    _ = n(252424),
    h = n(859703),
    p = n(33621),
    g = n(714510),
    A = n(890687),
    f = n(18437),
    x = n(590202),
    E = n(92246),
    C = n(792620),
    I = n(201805),
    T = n(212614),
    v = n(79545),
    N = n(646764),
    S = n(545986),
    b = n(433745),
    y = n(654487),
    j = n(652215),
    R = n(985018),
    L = n(242243);
function M(e) {
    let { containerSize: t, onClick: n, text: l, tabIndex: a } = e;
    return "xs" === t
        ? (0, i.jsx)(d.DUT, {
              tabIndex: a,
              className: L.CU,
              tag: "span",
              onClick: n,
              children: (0, i.jsx)(d.Text, { variant: "text-sm/medium", color: "text-link", children: l }),
          })
        : (0, i.jsx)(d.Button, { fullWidth: !0, tabIndex: a, variant: "secondary", onClick: n, text: l });
}
function O(e) {
    let { quest: t, progressState: n, questContent: l, questContentPosition: a, sourceQuestContent: r } = e,
        c = (0, s.bG)([h.A], () => h.A.isEnrolling(t.id)),
        u = (0, C.vv)(t),
        m = (0, C.Cr)(t),
        _ = (0, I._c)({
            progressState: n,
            quest: t,
            questContent: l,
            questContentPosition: a,
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
let D = (e) => {
    let {
            quest: t,
            location: n,
            size: l,
            isFocused: I,
            isQuestExpired: D,
            isExpanded: P,
            isAnimating: k,
            contentPosition: U,
            sourceQuestContent: w,
        } = e,
        G = (0, A.In)(t),
        B = (0, A.S5)(t.userStatus?.completedAt, { year: "numeric", month: "long", day: "numeric" }),
        F = G >= A.F3.ACCEPTED,
        H = G >= A.F3.COMPLETED,
        V = P || k,
        z = (0, g.wT)(t, y.rE.QUESTS_CARD, n, w),
        W = (0, f.Ut)(),
        Y = (0, A.fc)(t),
        q = (0, g.mU)({
            quest: t,
            taskDetails: Y,
            location: y.rE.QUESTS_CARD,
            questContent: r.u.QUESTS_EMBED,
            sourceQuestContent: w,
            gameProfileSource: c.Ob.QuestEmbed,
        }),
        K = (0, s.bG)([h.A], () => null != h.A.questEnrollmentBlockedUntil, []),
        Q = p.t.useConfig({ location: y.rE.QUEST_HOME_DESKTOP }),
        J = (0, v.Pd)(t),
        X = (0, s.bG)([u.default], () => u.default.locale),
        Z = D && !H,
        $ = (0, C.vv)(t);
    return (0, i.jsx)("div", {
        className: L.zr,
        children: (0, i.jsxs)("div", {
            className: a()(L.nw, { [L.dF]: "sm" === l, [L.e5]: "xs" === l }),
            style: { visibility: V ? "inherit" : "hidden" },
            "aria-hidden": !V,
            children: [
                (0, i.jsx)(o.m_, {
                    text: Z ? R.intl.string(R.t["04MTGf"]) : null,
                    shouldShow: Z,
                    children: (0, i.jsxs)("div", {
                        className: L.D9,
                        children: [
                            D &&
                                (0, i.jsx)("div", {
                                    className: L.FL,
                                    children: (0, i.jsx)(d.EpV, { color: d.LU0.colors.WHITE }),
                                }),
                            (0, i.jsx)(N.A, {
                                autoplay: I,
                                className: a()({ [L.Lu]: "lg" === l, [L.je]: "sm" === l, [L.ks]: "xs" === l }),
                                learnMoreStyle: "text",
                                quest: t,
                                questContent: n,
                                questContentPosition: U,
                                sourceQuestContent: w,
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: L.oW,
                    children: [
                        !$ &&
                            (0, i.jsx)(d.Text, {
                                variant:
                                    (0, b.a3)(n) && !F && "lg" === l
                                        ? "text-lg/medium"
                                        : "lg" === l
                                          ? "text-md/medium"
                                          : "sm" === l
                                            ? "text-sm/medium"
                                            : "text-xs/medium",
                                className: L.$p,
                                children: D
                                    ? R.intl.formatToPlainString(R.t["ge+AJp"], {
                                          questName: t.config.messages.questName,
                                      })
                                    : z,
                            }),
                        (0, i.jsx)(d.Text, {
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
                                    r = t.userStatus?.completedAt != null,
                                    s = r && t.userStatus?.claimedAt != null,
                                    o = (0, E.kr)({ quest: t }),
                                    d = (0, E.mH)(t.config);
                                if (s) {
                                    let e = o ? (0, E.cg)({ quest: t, idx: t.userStatus?.claimedTier }) : null,
                                        n = e?.messages.nameWithArticle ?? null;
                                    return null != n
                                        ? R.intl.formatToPlainString(R.t.RrxtPU, { reward: n, date: a })
                                        : R.intl.formatToPlainString(R.t.zNoqRe, { reward: d, date: a });
                                }
                                if (r)
                                    return o
                                        ? R.intl.formatToPlainString(R.t["l1jCM/"], { date: a })
                                        : R.intl.formatToPlainString(R.t.zNoqRe, { reward: d, date: a });
                                let c = o ? (0, E.cg)({ quest: t, idx: 0 }) : null;
                                return i
                                    ? R.intl.formatToPlainString(R.t.DT3auf, {
                                          reward: c?.messages.nameWithArticle ?? d,
                                      })
                                    : null != c && null != c.approximateCount
                                      ? R.intl.format(R.t["4bMK1z"], {
                                            maxReward: c.messages.nameWithArticle,
                                            maxRewardCount: (0, _.tg)(c.approximateCount, n),
                                            helpCenterLink: m.A.getArticleURL(j.MVz.QUESTS_LEARN_MORE),
                                        })
                                      : l;
                            })({
                                quest: t,
                                locale: X,
                                isQuestExpired: D,
                                collectibleQuestRewardDescription: q,
                                formattedCompletionDate: B,
                            }),
                        }),
                    ],
                }),
                K
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
                                  onClick: () => (0, S.m6)(t, n, w),
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
                              (0, i.jsx)(M, {
                                  containerSize: l,
                                  onClick: () => {
                                      (0, S.navigateToQuestHome)({ fromContent: n, questId: t.id }),
                                          W({
                                              questId: t.id,
                                              questContent: n,
                                              questContentPosition: U,
                                              questContentCTA: x.Cy.LEARN_MORE,
                                              sourceQuestContent: w,
                                          });
                                  },
                                  text: R.intl.string(R.t.LLLLPD),
                              }),
                              !Z &&
                                  (Q.enabled && J === v.UA.UNENROLLED && Q.enabledQuestStates.has(v.UA.UNENROLLED)
                                      ? (0, i.jsx)(T.A, {
                                            quest: t,
                                            surface: v.V3.QUEST_EMBED,
                                            analyticsCtxQuestContent: n,
                                            analyticsCtxSourceQuestContent: w,
                                            analyticsCtxQuestContentPosition: U,
                                        })
                                      : (0, i.jsx)(O, {
                                            quest: t,
                                            progressState: G,
                                            questContent: n,
                                            sourceQuestContent: w,
                                        })),
                          ],
                      }),
            ],
        }),
    });
};
