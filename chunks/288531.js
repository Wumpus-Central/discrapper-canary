n.d(t, {
    A: () => L,
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
    p = n(859703),
    _ = n(245853),
    h = n(714510),
    m = n(890687),
    g = n(18437),
    E = n(590202),
    y = n(92246),
    b = n(792620),
    O = n(201805),
    v = n(212614),
    A = n(646764),
    I = n(545986),
    S = n(433745),
    T = n(654487),
    C = n(652215),
    N = n(985018),
    w = n(242243);
let R = (e, t, n) =>
    (0, S.a3)(e) && !n && "lg" === t
        ? "text-lg/medium"
        : "lg" === t
          ? "text-md/medium"
          : "sm" === t
            ? "text-sm/medium"
            : "text-xs/medium";

function P(e) {
    let { containerSize: t, onClick: n, text: i, tabIndex: a } = e;
    return "xs" === t
        ? (0, r.jsx)(c.DUT, {
              tabIndex: a,
              className: w.CU,
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

function D(e) {
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
        h = (0, y.kr)({
            quest: s,
        }),
        m = (0, y.mH)(s.config);
    if (_) {
        let e = h
                ? (0, y.cg)({
                      quest: s,
                      idx: null == (i = s.userStatus) ? void 0 : i.claimedTier,
                  })
                : null,
            t = null != (r = null == e ? void 0 : e.messages.nameWithArticle) ? r : null;
        return null != t
            ? N.intl.formatToPlainString(N.t.RrxtPU, {
                  reward: t,
                  date: u,
              })
            : N.intl.formatToPlainString(N.t.zNoqRe, {
                  reward: m,
                  date: u,
              });
    }
    if (p)
        return h
            ? N.intl.formatToPlainString(N.t["l1jCM/"], {
                  date: u,
              })
            : N.intl.formatToPlainString(N.t.zNoqRe, {
                  reward: m,
                  date: u,
              });
    let g = h
        ? (0, y.cg)({
              quest: s,
              idx: 0,
          })
        : null;
    return l
        ? N.intl.formatToPlainString(N.t.DT3auf, {
              reward: null != (a = null == g ? void 0 : g.messages.nameWithArticle) ? a : m,
          })
        : null != g && null != g.approximateCount
          ? N.intl.format(N.t["4bMK1z"], {
                maxReward: g.messages.nameWithArticle,
                maxRewardCount: (0, f.tg)(g.approximateCount, o),
                helpCenterLink: d.A.getArticleURL(C.MVz.QUESTS_LEARN_MORE),
            })
          : c;
}

function x(e) {
    var t;
    let { quest: n, progressState: i, questContent: a, questContentPosition: s, sourceQuestContent: u } = e,
        d = (0, o.bG)([p.A], () => p.A.isEnrolling(n.id)),
        f = (0, b.vv)(n),
        _ = (0, b.Cr)(n),
        h = (0, O._c)({
            progressState: i,
            quest: n,
            questContent: a,
            questContentPosition: s,
            inGiftInventory: !1,
            isVideoQuest: f,
            inGameQuest: _,
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
let L = (e) => {
    var t;
    let {
            quest: n,
            location: i,
            size: d,
            isFocused: f,
            isQuestExpired: y,
            isExpanded: O,
            isAnimating: S,
            contentPosition: C,
            sourceQuestContent: L,
        } = e,
        j = (0, m.In)(n),
        M = (0, m.S5)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        k = j >= m.F3.ACCEPTED,
        U = j >= m.F3.COMPLETED,
        G = O || S,
        V = (0, h.wT)(n, T.rE.QUESTS_CARD, i, L),
        F = (0, g.Ut)(),
        B = (0, m.fc)(n),
        H = (0, h.mU)({
            quest: n,
            taskDetails: B,
            location: T.rE.QUESTS_CARD,
            questContent: s.u.QUESTS_EMBED,
            sourceQuestContent: L,
        }),
        Y = (0, o.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil, []),
        W = _.t$.useConfig({
            location: T.rE.QUEST_HOME_DESKTOP,
        }).enabled,
        K = () => {
            (0, I.navigateToQuestHome)({
                fromContent: i,
                questId: n.id,
            }),
                F({
                    questId: n.id,
                    questContent: i,
                    questContentPosition: C,
                    questContentCTA: E.Cy.LEARN_MORE,
                    sourceQuestContent: L,
                });
        },
        z = (0, o.bG)([u.default], () => u.default.locale),
        q = y && !U,
        Z = (0, b.vv)(n);
    return (0, r.jsx)("div", {
        className: w.zr,
        children: (0, r.jsxs)("div", {
            className: a()(w.nw, {
                [w.dF]: "sm" === d,
                [w.e5]: "xs" === d,
            }),
            style: {
                visibility: G ? "inherit" : "hidden",
            },
            "aria-hidden": !G,
            children: [
                (0, r.jsx)(l.m_, {
                    text: q ? N.intl.string(N.t["04MTGf"]) : null,
                    shouldShow: q,
                    children: (0, r.jsxs)("div", {
                        className: w.D9,
                        children: [
                            y &&
                                (0, r.jsx)("div", {
                                    className: w.FL,
                                    children: (0, r.jsx)(c.EpV, {
                                        color: c.LU0.colors.WHITE,
                                    }),
                                }),
                            (0, r.jsx)(A.A, {
                                autoplay: f,
                                className: a()({
                                    [w.Lu]: "lg" === d,
                                    [w.je]: "sm" === d,
                                    [w.ks]: "xs" === d,
                                }),
                                learnMoreStyle: "text",
                                quest: n,
                                questContent: i,
                                questContentPosition: C,
                                sourceQuestContent: L,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: w.oW,
                    children: [
                        !Z &&
                            (0, r.jsx)(c.Text, {
                                variant: R(i, d, k),
                                className: w.$p,
                                children: y
                                    ? N.intl.formatToPlainString(N.t["ge+AJp"], {
                                          questName: n.config.messages.questName,
                                      })
                                    : V,
                            }),
                        (0, r.jsx)(c.Text, {
                            variant: "lg" === d ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: D({
                                quest: n,
                                locale: z,
                                isQuestExpired: y,
                                collectibleQuestRewardDescription: H,
                                formattedCompletionDate: M,
                            }),
                        }),
                    ],
                }),
                Y
                    ? (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== d,
                          children: [
                              (0, r.jsx)(c.Button, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: N.intl.string(N.t.V293qn),
                              }),
                              (0, r.jsx)(c.Button, {
                                  variant: "primary",
                                  onClick: () => (0, I.m6)(n, i, L),
                                  text: N.intl.string(N.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== d,
                          children: [
                              (0, r.jsx)(P, {
                                  containerSize: d,
                                  onClick: K,
                                  text: N.intl.string(N.t.LLLLPD),
                              }),
                              !q &&
                                  (W && !k
                                      ? (0, r.jsx)(v.A, {
                                            quest: n,
                                            analyticsCtxQuestContent: i,
                                            analyticsCtxSourceQuestContent: L,
                                            analyticsCtxQuestContentPosition: C,
                                        })
                                      : (0, r.jsx)(x, {
                                            quest: n,
                                            progressState: j,
                                            questContent: i,
                                            sourceQuestContent: L,
                                        })),
                          ],
                      }),
            ],
        }),
    });
};
