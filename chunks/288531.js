n.d(t, {
    A: () => x,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(696292),
    o = n(311907),
    l = n(435371),
    c = n(397927),
    u = n(773669),
    d = n(975571),
    f = n(252424),
    p = n(216456),
    _ = n(859703),
    h = n(245853),
    m = n(714510),
    g = n(890687),
    E = n(92246),
    b = n(792620),
    y = n(201805),
    O = n(212614),
    A = n(646764),
    v = n(545986),
    S = n(433745),
    I = n(654487),
    T = n(652215),
    C = n(985018),
    N = n(242243);
let R = (e, t, n) =>
    (0, S.a3)(e) && !n && "lg" === t
        ? "text-lg/medium"
        : "lg" === t
          ? "text-md/medium"
          : "sm" === t
            ? "text-sm/medium"
            : "text-xs/medium";

function w(e) {
    let { containerSize: t, onClick: n, text: i, tabIndex: a } = e;
    return "xs" === t
        ? (0, r.jsx)(c.DUT, {
              tabIndex: a,
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
              tabIndex: a,
              variant: "secondary",
              onClick: n,
              text: i,
          });
}

function P(e) {
    var t, n, r, i, a;
    let {
            quest: s,
            locale: o,
            isQuestExpired: l,
            collectibleQuestRewardDescription: c,
            formattedCompletionDate: u,
        } = e,
        p = (null == (t = s.userStatus) ? void 0 : t.completedAt) != null,
        _ = p && (null == (n = s.userStatus) ? void 0 : n.claimedAt) != null,
        h = (0, E.kr)({
            quest: s,
        }),
        m = (0, E.mH)(s.config);
    if (_) {
        let e = h
                ? (0, E.cg)({
                      quest: s,
                      idx: null == (i = s.userStatus) ? void 0 : i.claimedTier,
                  })
                : null,
            t = null != (r = null == e ? void 0 : e.messages.nameWithArticle) ? r : null;
        return null != t
            ? C.intl.formatToPlainString(C.t.RrxtPU, {
                  reward: t,
                  date: u,
              })
            : C.intl.formatToPlainString(C.t.zNoqRe, {
                  reward: m,
                  date: u,
              });
    }
    if (p)
        return h
            ? C.intl.formatToPlainString(C.t["l1jCM/"], {
                  date: u,
              })
            : C.intl.formatToPlainString(C.t.zNoqRe, {
                  reward: m,
                  date: u,
              });
    let g = h
        ? (0, E.cg)({
              quest: s,
              idx: 0,
          })
        : null;
    return l
        ? C.intl.formatToPlainString(C.t.DT3auf, {
              reward: null != (a = null == g ? void 0 : g.messages.nameWithArticle) ? a : m,
          })
        : null != g && null != g.approximateCount
          ? C.intl.format(C.t["4bMK1z"], {
                maxReward: g.messages.nameWithArticle,
                maxRewardCount: (0, f.tg)(g.approximateCount, o),
                helpCenterLink: d.A.getArticleURL(T.MVz.QUESTS_LEARN_MORE),
            })
          : c;
}

function D(e) {
    var t;
    let { quest: n, progressState: i, questContent: a, questContentPosition: s, sourceQuestContent: u } = e,
        d = (0, o.bG)([_.A], () => _.A.isEnrolling(n.id)),
        f = (0, b.vv)(n),
        p = (0, b.Cr)(n),
        h = (0, y._c)({
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
let x = (e) => {
    var t;
    let {
            quest: n,
            location: i,
            size: d,
            isFocused: f,
            isQuestExpired: E,
            isExpanded: y,
            isAnimating: S,
            contentPosition: T,
            sourceQuestContent: x,
        } = e,
        L = (0, g.In)(n),
        j = (0, g.S5)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        M = L >= g.F3.ACCEPTED,
        k = L >= g.F3.COMPLETED,
        U = y || S,
        G = (0, m.wT)(n, I.rE.QUESTS_CARD, i, x),
        V = (0, p.Ut)(),
        F = (0, g.fc)(n),
        B = (0, m.mU)({
            quest: n,
            taskDetails: F,
            location: I.rE.QUESTS_CARD,
            questContent: s.u.QUESTS_EMBED,
            sourceQuestContent: x,
        }),
        H = (0, o.bG)([_.A], () => null != _.A.questEnrollmentBlockedUntil, []),
        Y = h.t$.useConfig({
            location: I.rE.QUEST_HOME_DESKTOP,
        }).enabled,
        W = () => {
            (0, v.navigateToQuestHome)({
                fromContent: i,
                questId: n.id,
            }),
                V({
                    questId: n.id,
                    questContent: i,
                    questContentPosition: T,
                    questContentCTA: p.Cy.LEARN_MORE,
                    sourceQuestContent: x,
                });
        },
        K = (0, o.bG)([u.default], () => u.default.locale),
        z = E && !k,
        q = (0, b.vv)(n);
    return (0, r.jsx)("div", {
        className: N.zr,
        children: (0, r.jsxs)("div", {
            className: a()(N.nw, {
                [N.dF]: "sm" === d,
                [N.e5]: "xs" === d,
            }),
            style: {
                visibility: U ? "inherit" : "hidden",
            },
            "aria-hidden": !U,
            children: [
                (0, r.jsx)(l.m_, {
                    text: z ? C.intl.string(C.t["04MTGf"]) : null,
                    shouldShow: z,
                    children: (0, r.jsxs)("div", {
                        className: N.D9,
                        children: [
                            E &&
                                (0, r.jsx)("div", {
                                    className: N.FL,
                                    children: (0, r.jsx)(c.EpV, {
                                        color: c.LU0.colors.WHITE,
                                    }),
                                }),
                            (0, r.jsx)(A.A, {
                                autoplay: f,
                                className: a()({
                                    [N.Lu]: "lg" === d,
                                    [N.je]: "sm" === d,
                                    [N.ks]: "xs" === d,
                                }),
                                learnMoreStyle: "text",
                                quest: n,
                                questContent: i,
                                questContentPosition: T,
                                sourceQuestContent: x,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: N.oW,
                    children: [
                        !q &&
                            (0, r.jsx)(c.Text, {
                                variant: R(i, d, M),
                                className: N.$p,
                                children: E
                                    ? C.intl.formatToPlainString(C.t["ge+AJp"], {
                                          questName: n.config.messages.questName,
                                      })
                                    : G,
                            }),
                        (0, r.jsx)(c.Text, {
                            variant: "lg" === d ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: P({
                                quest: n,
                                locale: K,
                                isQuestExpired: E,
                                collectibleQuestRewardDescription: B,
                                formattedCompletionDate: j,
                            }),
                        }),
                    ],
                }),
                H
                    ? (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== d,
                          children: [
                              (0, r.jsx)(c.Button, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: C.intl.string(C.t.V293qn),
                              }),
                              (0, r.jsx)(c.Button, {
                                  variant: "primary",
                                  onClick: () => (0, v.m6)(n, i, x),
                                  text: C.intl.string(C.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== d,
                          children: [
                              (0, r.jsx)(w, {
                                  containerSize: d,
                                  onClick: W,
                                  text: C.intl.string(C.t.LLLLPD),
                              }),
                              !z &&
                                  (Y && !M
                                      ? (0, r.jsx)(O.A, {
                                            quest: n,
                                            analyticsCtxQuestContent: i,
                                            analyticsCtxSourceQuestContent: x,
                                            analyticsCtxQuestContentPosition: T,
                                        })
                                      : (0, r.jsx)(D, {
                                            quest: n,
                                            progressState: L,
                                            questContent: i,
                                            sourceQuestContent: x,
                                        })),
                          ],
                      }),
            ],
        }),
    });
};
