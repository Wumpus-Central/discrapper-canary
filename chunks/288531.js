n.d(t, {
    A: () => R,
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
    g = n(245853),
    h = n(714510),
    _ = n(890687),
    b = n(18437),
    A = n(590202),
    y = n(92246),
    v = n(792620),
    x = n(201805),
    O = n(212614),
    E = n(646764),
    j = n(545986),
    C = n(433745),
    I = n(654487),
    S = n(652215),
    T = n(985018),
    N = n(242243);

function P(e) {
    let { containerSize: t, onClick: n, text: i, tabIndex: l } = e;
    return "xs" === t
        ? (0, r.jsx)(c.DUT, {
              tabIndex: l,
              className: N.CU,
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

function w(e) {
    var t;
    let { quest: n, progressState: i, questContent: l, questContentPosition: a, sourceQuestContent: u } = e,
        d = (0, s.bG)([f.A], () => f.A.isEnrolling(n.id)),
        p = (0, v.vv)(n),
        m = (0, v.Cr)(n),
        g = (0, x._c)({
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
let R = (e) => {
    var t;
    let {
            quest: n,
            location: i,
            size: x,
            isFocused: R,
            isQuestExpired: D,
            isExpanded: L,
            isAnimating: M,
            contentPosition: k,
            sourceQuestContent: U,
        } = e,
        G = (0, _.In)(n),
        B = (0, _.S5)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        F = G >= _.F3.ACCEPTED,
        H = G >= _.F3.COMPLETED,
        V = L || M,
        z = (0, h.wT)(n, I.rE.QUESTS_CARD, i, U),
        W = (0, b.Ut)(),
        K = (0, _.fc)(n),
        Y = (0, h.mU)({
            quest: n,
            taskDetails: K,
            location: I.rE.QUESTS_CARD,
            questContent: a.u.QUESTS_EMBED,
            sourceQuestContent: U,
            gameProfileSource: u.Ob.QuestEmbed,
        }),
        q = (0, s.bG)([f.A], () => null != f.A.questEnrollmentBlockedUntil, []),
        J = g.t$.useConfig({
            location: I.rE.QUEST_HOME_DESKTOP,
        }).enabled,
        Q = (0, s.bG)([d.default], () => d.default.locale),
        Z = D && !H,
        X = (0, v.vv)(n);
    return (0, r.jsx)("div", {
        className: N.zr,
        children: (0, r.jsxs)("div", {
            className: l()(N.nw, {
                [N.dF]: "sm" === x,
                [N.e5]: "xs" === x,
            }),
            style: {
                visibility: V ? "inherit" : "hidden",
            },
            "aria-hidden": !V,
            children: [
                (0, r.jsx)(o.m_, {
                    text: Z ? T.intl.string(T.t["04MTGf"]) : null,
                    shouldShow: Z,
                    children: (0, r.jsxs)("div", {
                        className: N.D9,
                        children: [
                            D &&
                                (0, r.jsx)("div", {
                                    className: N.FL,
                                    children: (0, r.jsx)(c.EpV, {
                                        color: c.LU0.colors.WHITE,
                                    }),
                                }),
                            (0, r.jsx)(E.A, {
                                autoplay: R,
                                className: l()({
                                    [N.Lu]: "lg" === x,
                                    [N.je]: "sm" === x,
                                    [N.ks]: "xs" === x,
                                }),
                                learnMoreStyle: "text",
                                quest: n,
                                questContent: i,
                                questContentPosition: k,
                                sourceQuestContent: U,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: N.oW,
                    children: [
                        !X &&
                            (0, r.jsx)(c.Text, {
                                variant:
                                    (0, C.a3)(i) && !F && "lg" === x
                                        ? "text-lg/medium"
                                        : "lg" === x
                                          ? "text-md/medium"
                                          : "sm" === x
                                            ? "text-sm/medium"
                                            : "text-xs/medium",
                                className: N.$p,
                                children: D
                                    ? T.intl.formatToPlainString(T.t["ge+AJp"], {
                                          questName: n.config.messages.questName,
                                      })
                                    : z,
                            }),
                        (0, r.jsx)(c.Text, {
                            variant: "lg" === x ? "text-sm/medium" : "text-xs/medium",
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
                                    g = (0, y.kr)({
                                        quest: a,
                                    }),
                                    h = (0, y.mH)(a.config);
                                if (f) {
                                    let e = g
                                            ? (0, y.cg)({
                                                  quest: a,
                                                  idx: null == (i = a.userStatus) ? void 0 : i.claimedTier,
                                              })
                                            : null,
                                        t = null != (r = null == e ? void 0 : e.messages.nameWithArticle) ? r : null;
                                    return null != t
                                        ? T.intl.formatToPlainString(T.t.RrxtPU, {
                                              reward: t,
                                              date: u,
                                          })
                                        : T.intl.formatToPlainString(T.t.zNoqRe, {
                                              reward: h,
                                              date: u,
                                          });
                                }
                                if (d)
                                    return g
                                        ? T.intl.formatToPlainString(T.t["l1jCM/"], {
                                              date: u,
                                          })
                                        : T.intl.formatToPlainString(T.t.zNoqRe, {
                                              reward: h,
                                              date: u,
                                          });
                                let _ = g
                                    ? (0, y.cg)({
                                          quest: a,
                                          idx: 0,
                                      })
                                    : null;
                                return o
                                    ? T.intl.formatToPlainString(T.t.DT3auf, {
                                          reward: null != (l = null == _ ? void 0 : _.messages.nameWithArticle) ? l : h,
                                      })
                                    : null != _ && null != _.approximateCount
                                      ? T.intl.format(T.t["4bMK1z"], {
                                            maxReward: _.messages.nameWithArticle,
                                            maxRewardCount: (0, m.tg)(_.approximateCount, s),
                                            helpCenterLink: p.A.getArticleURL(S.MVz.QUESTS_LEARN_MORE),
                                        })
                                      : c;
                            })({
                                quest: n,
                                locale: Q,
                                isQuestExpired: D,
                                collectibleQuestRewardDescription: Y,
                                formattedCompletionDate: B,
                            }),
                        }),
                    ],
                }),
                q
                    ? (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== x,
                          children: [
                              (0, r.jsx)(c.Button, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: T.intl.string(T.t.V293qn),
                              }),
                              (0, r.jsx)(c.Button, {
                                  variant: "primary",
                                  onClick: () => (0, j.m6)(n, i, U),
                                  text: T.intl.string(T.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== x,
                          children: [
                              (0, r.jsx)(P, {
                                  containerSize: x,
                                  onClick: () => {
                                      (0, j.navigateToQuestHome)({
                                          fromContent: i,
                                          questId: n.id,
                                      }),
                                          W({
                                              questId: n.id,
                                              questContent: i,
                                              questContentPosition: k,
                                              questContentCTA: A.Cy.LEARN_MORE,
                                              sourceQuestContent: U,
                                          });
                                  },
                                  text: T.intl.string(T.t.LLLLPD),
                              }),
                              !Z &&
                                  (J && !F
                                      ? (0, r.jsx)(O.A, {
                                            quest: n,
                                            analyticsCtxQuestContent: i,
                                            analyticsCtxSourceQuestContent: U,
                                            analyticsCtxQuestContentPosition: k,
                                        })
                                      : (0, r.jsx)(w, {
                                            quest: n,
                                            progressState: G,
                                            questContent: i,
                                            sourceQuestContent: U,
                                        })),
                          ],
                      }),
            ],
        }),
    });
};
