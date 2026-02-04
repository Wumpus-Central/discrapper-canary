n.d(t, {
    A: () => D,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(696292),
    s = n(311907),
    o = n(435371),
    c = n(397927),
    u = n(409626),
    d = n(773669),
    p = n(975571),
    m = n(252424),
    f = n(859703),
    g = n(33621),
    _ = n(714510),
    h = n(890687),
    b = n(18437),
    y = n(590202),
    A = n(92246),
    v = n(792620),
    O = n(201805),
    x = n(212614),
    E = n(79545),
    j = n(646764),
    C = n(545986),
    I = n(433745),
    S = n(654487),
    T = n(652215),
    N = n(985018),
    P = n(242243);

function w(e) {
    let { containerSize: t, onClick: n, text: i, tabIndex: l } = e;
    return "xs" === t
        ? (0, r.jsx)(c.DUT, {
              tabIndex: l,
              className: P.CU,
              tag: "span",
              onClick: n,
              children: (0, r.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "text-link",
                  children: i,
              }),
          })
        : (0, r.jsx)(c.Button, {
              fullWidth: !0,
              tabIndex: l,
              variant: "secondary",
              onClick: n,
              text: i,
          });
}

function R(e) {
    var t;
    let { quest: n, progressState: i, questContent: l, questContentPosition: a, sourceQuestContent: u } = e,
        d = (0, s.bG)([f.A], () => f.A.isEnrolling(n.id)),
        p = (0, v.vv)(n),
        m = (0, v.Cr)(n),
        g = (0, O._c)({
            progressState: i,
            quest: n,
            questContent: l,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: p,
            inGameQuest: m,
            sourceQuestContent: u,
        });
    return (0, r.jsx)(
        o.m_,
        {
            text: g.tooltipText,
            children: (0, r.jsx)(c.Button, {
                fullWidth: !0,
                variant: "primary",
                disabled: null == g.onClick,
                loading: d,
                onClick: null != (t = g.onClick) ? t : void 0,
                text: g.text,
            }),
        },
        g.tooltipText,
    );
}
let D = (e) => {
    var t;
    let {
            quest: n,
            location: i,
            size: O,
            isFocused: D,
            isQuestExpired: L,
            isExpanded: M,
            isAnimating: k,
            contentPosition: U,
            sourceQuestContent: G,
        } = e,
        B = (0, h.In)(n),
        F = (0, h.S5)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        H = B >= h.F3.ACCEPTED,
        V = B >= h.F3.COMPLETED,
        z = M || k,
        W = (0, _.wT)(n, S.rE.QUESTS_CARD, i, G),
        K = (0, b.Ut)(),
        Y = (0, h.fc)(n),
        q = (0, _.mU)({
            quest: n,
            taskDetails: Y,
            location: S.rE.QUESTS_CARD,
            questContent: a.u.QUESTS_EMBED,
            sourceQuestContent: G,
            gameProfileSource: u.Ob.QuestEmbed,
        }),
        Q = (0, s.bG)([f.A], () => null != f.A.questEnrollmentBlockedUntil, []),
        J = g.t.useConfig({
            location: S.rE.QUEST_HOME_DESKTOP,
        }),
        X = (0, E.P)(n),
        Z = (0, s.bG)([d.default], () => d.default.locale),
        $ = L && !V,
        ee = (0, v.vv)(n);
    return (0, r.jsx)("div", {
        className: P.zr,
        children: (0, r.jsxs)("div", {
            className: l()(P.nw, {
                [P.dF]: "sm" === O,
                [P.e5]: "xs" === O,
            }),
            style: {
                visibility: z ? "inherit" : "hidden",
            },
            "aria-hidden": !z,
            children: [
                (0, r.jsx)(o.m_, {
                    text: $ ? N.intl.string(N.t["04MTGf"]) : null,
                    shouldShow: $,
                    children: (0, r.jsxs)("div", {
                        className: P.D9,
                        children: [
                            L &&
                                (0, r.jsx)("div", {
                                    className: P.FL,
                                    children: (0, r.jsx)(c.EpV, {
                                        color: c.LU0.colors.WHITE,
                                    }),
                                }),
                            (0, r.jsx)(j.A, {
                                autoplay: D,
                                className: l()({
                                    [P.Lu]: "lg" === O,
                                    [P.je]: "sm" === O,
                                    [P.ks]: "xs" === O,
                                }),
                                learnMoreStyle: "text",
                                quest: n,
                                questContent: i,
                                questContentPosition: U,
                                sourceQuestContent: G,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: P.oW,
                    children: [
                        !ee &&
                            (0, r.jsx)(c.Text, {
                                variant:
                                    (0, I.a3)(i) && !H && "lg" === O
                                        ? "text-lg/medium"
                                        : "lg" === O
                                          ? "text-md/medium"
                                          : "sm" === O
                                            ? "text-sm/medium"
                                            : "text-xs/medium",
                                className: P.$p,
                                children: L
                                    ? N.intl.formatToPlainString(N.t["ge+AJp"], {
                                          questName: n.config.messages.questName,
                                      })
                                    : W,
                            }),
                        (0, r.jsx)(c.Text, {
                            variant: "lg" === O ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: (function (e) {
                                var t, n, r, i, l;
                                let {
                                        quest: a,
                                        locale: s,
                                        isQuestExpired: o,
                                        collectibleQuestRewardDescription: c,
                                        formattedCompletionDate: u,
                                    } = e,
                                    d = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null,
                                    f = d && (null == (n = a.userStatus) ? void 0 : n.claimedAt) != null,
                                    g = (0, A.kr)({
                                        quest: a,
                                    }),
                                    _ = (0, A.mH)(a.config);
                                if (f) {
                                    let e = g
                                            ? (0, A.cg)({
                                                  quest: a,
                                                  idx: null == (i = a.userStatus) ? void 0 : i.claimedTier,
                                              })
                                            : null,
                                        t = null != (r = null == e ? void 0 : e.messages.nameWithArticle) ? r : null;
                                    return null != t
                                        ? N.intl.formatToPlainString(N.t.RrxtPU, {
                                              reward: t,
                                              date: u,
                                          })
                                        : N.intl.formatToPlainString(N.t.zNoqRe, {
                                              reward: _,
                                              date: u,
                                          });
                                }
                                if (d)
                                    return g
                                        ? N.intl.formatToPlainString(N.t["l1jCM/"], {
                                              date: u,
                                          })
                                        : N.intl.formatToPlainString(N.t.zNoqRe, {
                                              reward: _,
                                              date: u,
                                          });
                                let h = g
                                    ? (0, A.cg)({
                                          quest: a,
                                          idx: 0,
                                      })
                                    : null;
                                return o
                                    ? N.intl.formatToPlainString(N.t.DT3auf, {
                                          reward: null != (l = null == h ? void 0 : h.messages.nameWithArticle) ? l : _,
                                      })
                                    : null != h && null != h.approximateCount
                                      ? N.intl.format(N.t["4bMK1z"], {
                                            maxReward: h.messages.nameWithArticle,
                                            maxRewardCount: (0, m.tg)(h.approximateCount, s),
                                            helpCenterLink: p.A.getArticleURL(T.MVz.QUESTS_LEARN_MORE),
                                        })
                                      : c;
                            })({
                                quest: n,
                                locale: Z,
                                isQuestExpired: L,
                                collectibleQuestRewardDescription: q,
                                formattedCompletionDate: F,
                            }),
                        }),
                    ],
                }),
                Q
                    ? (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== O,
                          children: [
                              (0, r.jsx)(c.Button, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: N.intl.string(N.t.V293qn),
                              }),
                              (0, r.jsx)(c.Button, {
                                  variant: "primary",
                                  onClick: () => (0, C.m6)(n, i, G),
                                  text: N.intl.string(N.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== O,
                          children: [
                              (0, r.jsx)(w, {
                                  containerSize: O,
                                  onClick: () => {
                                      (0, C.navigateToQuestHome)({
                                          fromContent: i,
                                          questId: n.id,
                                      }),
                                          K({
                                              questId: n.id,
                                              questContent: i,
                                              questContentPosition: U,
                                              questContentCTA: y.Cy.LEARN_MORE,
                                              sourceQuestContent: G,
                                          });
                                  },
                                  text: N.intl.string(N.t.LLLLPD),
                              }),
                              !$ &&
                                  (J.enabled && X === E.U.UNENROLLED && J.enabledQuestStates.has(E.U.UNENROLLED)
                                      ? (0, r.jsx)(x.A, {
                                            quest: n,
                                            analyticsCtxQuestContent: i,
                                            analyticsCtxSourceQuestContent: G,
                                            analyticsCtxQuestContentPosition: U,
                                        })
                                      : (0, r.jsx)(R, {
                                            quest: n,
                                            progressState: B,
                                            questContent: i,
                                            sourceQuestContent: G,
                                        })),
                          ],
                      }),
            ],
        }),
    });
};
