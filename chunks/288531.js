n.d(t, {
    A: () => j,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(696292),
    o = n(311907),
    l = n(435371),
    c = n(397927),
    u = n(409626),
    d = n(773669),
    f = n(975571),
    p = n(252424),
    _ = n(859703),
    h = n(245853),
    m = n(714510),
    g = n(890687),
    E = n(18437),
    y = n(590202),
    b = n(92246),
    O = n(792620),
    v = n(201805),
    A = n(212614),
    I = n(646764),
    S = n(545986),
    T = n(433745),
    C = n(654487),
    N = n(652215),
    w = n(985018),
    R = n(242243);
let P = (e, t, n) =>
    (0, T.a3)(e) && !n && "lg" === t
        ? "text-lg/medium"
        : "lg" === t
          ? "text-md/medium"
          : "sm" === t
            ? "text-sm/medium"
            : "text-xs/medium";

function D(e) {
    let { containerSize: t, onClick: n, text: i, tabIndex: a } = e;
    return "xs" === t
        ? (0, r.jsx)(c.DUT, {
              tabIndex: a,
              className: R.CU,
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
              tabIndex: a,
              variant: "secondary",
              onClick: n,
              text: i,
          });
}

function x(e) {
    var t, n, r, i, a;
    let {
            quest: s,
            locale: o,
            isQuestExpired: l,
            collectibleQuestRewardDescription: c,
            formattedCompletionDate: u,
        } = e,
        d = (null == (t = s.userStatus) ? void 0 : t.completedAt) != null,
        _ = d && (null == (n = s.userStatus) ? void 0 : n.claimedAt) != null,
        h = (0, b.kr)({
            quest: s,
        }),
        m = (0, b.mH)(s.config);
    if (_) {
        let e = h
                ? (0, b.cg)({
                      quest: s,
                      idx: null == (i = s.userStatus) ? void 0 : i.claimedTier,
                  })
                : null,
            t = null != (r = null == e ? void 0 : e.messages.nameWithArticle) ? r : null;
        return null != t
            ? w.intl.formatToPlainString(w.t.RrxtPU, {
                  reward: t,
                  date: u,
              })
            : w.intl.formatToPlainString(w.t.zNoqRe, {
                  reward: m,
                  date: u,
              });
    }
    if (d)
        return h
            ? w.intl.formatToPlainString(w.t["l1jCM/"], {
                  date: u,
              })
            : w.intl.formatToPlainString(w.t.zNoqRe, {
                  reward: m,
                  date: u,
              });
    let g = h
        ? (0, b.cg)({
              quest: s,
              idx: 0,
          })
        : null;
    return l
        ? w.intl.formatToPlainString(w.t.DT3auf, {
              reward: null != (a = null == g ? void 0 : g.messages.nameWithArticle) ? a : m,
          })
        : null != g && null != g.approximateCount
          ? w.intl.format(w.t["4bMK1z"], {
                maxReward: g.messages.nameWithArticle,
                maxRewardCount: (0, p.tg)(g.approximateCount, o),
                helpCenterLink: f.A.getArticleURL(N.MVz.QUESTS_LEARN_MORE),
            })
          : c;
}

function L(e) {
    var t;
    let { quest: n, progressState: i, questContent: a, questContentPosition: s, sourceQuestContent: u } = e,
        d = (0, o.bG)([_.A], () => _.A.isEnrolling(n.id)),
        f = (0, O.vv)(n),
        p = (0, O.Cr)(n),
        h = (0, v._c)({
            progressState: i,
            quest: n,
            questContent: a,
            questContentPosition: s,
            inGiftInventory: !1,
            isVideoQuest: f,
            inGameQuest: p,
            sourceQuestContent: u,
        });
    return (0, r.jsx)(
        l.m_,
        {
            text: h.tooltipText,
            children: (0, r.jsx)(c.Button, {
                fullWidth: !0,
                variant: "primary",
                disabled: null == h.onClick,
                loading: d,
                onClick: null != (t = h.onClick) ? t : void 0,
                text: h.text,
            }),
        },
        h.tooltipText,
    );
}
let j = (e) => {
    var t;
    let {
            quest: n,
            location: i,
            size: f,
            isFocused: p,
            isQuestExpired: b,
            isExpanded: v,
            isAnimating: T,
            contentPosition: N,
            sourceQuestContent: j,
        } = e,
        M = (0, g.In)(n),
        k = (0, g.S5)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        U = M >= g.F3.ACCEPTED,
        G = M >= g.F3.COMPLETED,
        V = v || T,
        F = (0, m.wT)(n, C.rE.QUESTS_CARD, i, j),
        B = (0, E.Ut)(),
        H = (0, g.fc)(n),
        Y = (0, m.mU)({
            quest: n,
            taskDetails: H,
            location: C.rE.QUESTS_CARD,
            questContent: s.u.QUESTS_EMBED,
            sourceQuestContent: j,
            gameProfileSource: u.Ob.QuestEmbed,
        }),
        W = (0, o.bG)([_.A], () => null != _.A.questEnrollmentBlockedUntil, []),
        K = h.t$.useConfig({
            location: C.rE.QUEST_HOME_DESKTOP,
        }).enabled,
        z = () => {
            (0, S.navigateToQuestHome)({
                fromContent: i,
                questId: n.id,
            }),
                B({
                    questId: n.id,
                    questContent: i,
                    questContentPosition: N,
                    questContentCTA: y.Cy.LEARN_MORE,
                    sourceQuestContent: j,
                });
        },
        q = (0, o.bG)([d.default], () => d.default.locale),
        Z = b && !G,
        X = (0, O.vv)(n);
    return (0, r.jsx)("div", {
        className: R.zr,
        children: (0, r.jsxs)("div", {
            className: a()(R.nw, {
                [R.dF]: "sm" === f,
                [R.e5]: "xs" === f,
            }),
            style: {
                visibility: V ? "inherit" : "hidden",
            },
            "aria-hidden": !V,
            children: [
                (0, r.jsx)(l.m_, {
                    text: Z ? w.intl.string(w.t["04MTGf"]) : null,
                    shouldShow: Z,
                    children: (0, r.jsxs)("div", {
                        className: R.D9,
                        children: [
                            b &&
                                (0, r.jsx)("div", {
                                    className: R.FL,
                                    children: (0, r.jsx)(c.EpV, {
                                        color: c.LU0.colors.WHITE,
                                    }),
                                }),
                            (0, r.jsx)(I.A, {
                                autoplay: p,
                                className: a()({
                                    [R.Lu]: "lg" === f,
                                    [R.je]: "sm" === f,
                                    [R.ks]: "xs" === f,
                                }),
                                learnMoreStyle: "text",
                                quest: n,
                                questContent: i,
                                questContentPosition: N,
                                sourceQuestContent: j,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: R.oW,
                    children: [
                        !X &&
                            (0, r.jsx)(c.Text, {
                                variant: P(i, f, U),
                                className: R.$p,
                                children: b
                                    ? w.intl.formatToPlainString(w.t["ge+AJp"], {
                                          questName: n.config.messages.questName,
                                      })
                                    : F,
                            }),
                        (0, r.jsx)(c.Text, {
                            variant: "lg" === f ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: x({
                                quest: n,
                                locale: q,
                                isQuestExpired: b,
                                collectibleQuestRewardDescription: Y,
                                formattedCompletionDate: k,
                            }),
                        }),
                    ],
                }),
                W
                    ? (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== f,
                          children: [
                              (0, r.jsx)(c.Button, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: w.intl.string(w.t.V293qn),
                              }),
                              (0, r.jsx)(c.Button, {
                                  variant: "primary",
                                  onClick: () => (0, S.m6)(n, i, j),
                                  text: w.intl.string(w.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== f,
                          children: [
                              (0, r.jsx)(D, {
                                  containerSize: f,
                                  onClick: z,
                                  text: w.intl.string(w.t.LLLLPD),
                              }),
                              !Z &&
                                  (K && !U
                                      ? (0, r.jsx)(A.A, {
                                            quest: n,
                                            analyticsCtxQuestContent: i,
                                            analyticsCtxSourceQuestContent: j,
                                            analyticsCtxQuestContentPosition: N,
                                        })
                                      : (0, r.jsx)(L, {
                                            quest: n,
                                            progressState: M,
                                            questContent: i,
                                            sourceQuestContent: j,
                                        })),
                          ],
                      }),
            ],
        }),
    });
};
