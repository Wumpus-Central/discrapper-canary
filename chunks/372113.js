n.d(t, { Z: () => k });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(706454),
    f = n(63063),
    _ = n(930153),
    p = n(617136),
    h = n(509212),
    m = n(113434),
    g = n(569984),
    E = n(497505),
    b = n(373370),
    y = n(566078),
    O = n(644646),
    v = n(110560),
    I = n(667105),
    T = n(87894),
    S = n(46140),
    A = n(981631),
    C = n(388032),
    N = n(997267);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = (e, t, n) =>
    (0, T.uq)(e) && !n && "lg" === t
        ? "text-lg/medium"
        : "lg" === t
          ? "text-md/medium"
          : "sm" === t
            ? "text-sm/medium"
            : "text-xs/medium";
function L(e) {
    let { containerSize: t, onClick: n, text: i, tabIndex: a } = e;
    return "xs" === t
        ? (0, r.jsx)(c.P3F, {
              tabIndex: a,
              className: N.learnMoreLink,
              tag: "span",
              onClick: n,
              children: (0, r.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "text-link",
                  children: i,
              }),
          })
        : (0, r.jsx)(c.zxk, {
              fullWidth: !0,
              tabIndex: a,
              variant: "secondary",
              onClick: n,
              text: i,
          });
}
function j(e) {
    var t, n, r, i, a;
    let {
            quest: o,
            locale: s,
            isQuestExpired: l,
            sharedQuestFields: c,
            collectibleQuestRewardDescription: u,
            formattedCompletionDate: d,
        } = e,
        p = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null,
        m = p && (null == (n = o.userStatus) ? void 0 : n.claimedAt) != null,
        g = (0, h.oo)({ quest: o }),
        E = c.defaultRewardNameWithArticle;
    if (m) {
        let e = g
                ? (0, h.o9)({
                      quest: o,
                      idx: null == (r = o.userStatus) ? void 0 : r.claimedTier,
                  })
                : null,
            t = null != (i = null == e ? void 0 : e.messages.nameWithArticle) ? i : null;
        return null != t
            ? C.intl.formatToPlainString(C.t.RrxtPT, {
                  reward: t,
                  date: d,
              })
            : C.intl.formatToPlainString(C.t.zNoqRU, {
                  reward: E,
                  date: d,
              });
    }
    if (p)
        return g
            ? C.intl.formatToPlainString(C.t.l1jCMz, { date: d })
            : C.intl.formatToPlainString(C.t.zNoqRU, {
                  reward: E,
                  date: d,
              });
    let b = g
        ? (0, h.o9)({
              quest: o,
              idx: 0,
          })
        : null;
    return l
        ? C.intl.formatToPlainString(C.t.DT3aub, {
              reward: null != (a = null == b ? void 0 : b.messages.nameWithArticle) ? a : E,
          })
        : null != b && null != b.approximateCount
          ? C.intl.format(C.t["4bMK19"], {
                maxReward: b.messages.nameWithArticle,
                maxRewardCount: (0, _.Bs)(b.approximateCount, s),
                helpCenterLink: f.Z.getArticleURL(A.BhN.QUESTS_LEARN_MORE),
            })
          : u;
}
function M(e) {
    let {
            quest: t,
            progressState: n,
            isCollectibleQuest: i,
            questContent: a,
            questContentPosition: o,
            sourceQuestContent: d,
        } = e,
        f = n >= m.OH.COMPLETED,
        _ = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        p = (0, s.e7)([g.Z], () => g.Z.isEnrolling(t.id)),
        E = (0, h.q8)(t),
        b = (0, h.Vl)(t),
        y = (0, I.Ks)({
            progressState: n,
            quest: t,
            questContent: a,
            isCollectibleQuest: i,
            questContentPosition: o,
            inGiftInventory: !1,
            isVideoQuest: E,
            inGameQuest: b,
            sourceQuestContent: d,
        });
    return (0, r.jsx)(
        c.ua7,
        {
            text: y.tooltipText,
            tooltipContentClassName: N.ctaTooltipText,
            children: (e) => {
                var t, n;
                return f && !_
                    ? (0, r.jsx)(
                          c.gtL,
                          D(P({}, e), {
                              wrapperClassName: N.ctaButtonWrapper,
                              color: l.Tt.BRAND,
                              disabled: null == y.onClick,
                              onClick: null != (t = y.onClick) ? t : void 0,
                              children: y.text,
                          }),
                      )
                    : (0, r.jsx)(
                          c.zxk,
                          D(P({}, e), {
                              fullWidth: !0,
                              variant: "primary",
                              disabled: null == y.onClick,
                              loading: p,
                              onClick: null != (n = y.onClick) ? n : void 0,
                              text: y.text,
                          }),
                      );
            },
        },
        y.tooltipText,
    );
}
let k = (e) => {
    var t;
    let {
            quest: n,
            location: a,
            size: l,
            isFocused: u,
            isQuestExpired: f,
            isExpanded: _,
            isAnimating: I,
            contentPosition: T,
            sourceQuestContent: A,
        } = e,
        R = (0, m._Q)(n),
        w = (0, m.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        k = R >= m.OH.ACCEPTED,
        U = R >= m.OH.COMPLETED,
        G = (0, h.Xv)(n.config),
        B = _ || I,
        Z = (0, m.t5)(n, S.dr.QUESTS_CARD, a, A),
        V = (0, p.O5)(),
        F = i.useMemo(() => y.r.build(n.config), [n.config]),
        H = (0, m.Rf)(n),
        Y = (0, b.DD)({
            quest: n,
            taskDetails: H,
            location: S.dr.QUESTS_CARD,
            questContent: E.jn.QUESTS_EMBED,
            sourceQuestContent: A,
        }),
        W = (0, s.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil, []),
        K = () => {
            (0, v.navigateToQuestHome)({
                fromContent: a,
                questId: n.id,
            }),
                V({
                    questId: n.id,
                    questContent: a,
                    questContentPosition: T,
                    questContentCTA: p.jZ.LEARN_MORE,
                    sourceQuestContent: A,
                });
        },
        z = (0, s.e7)([d.default], () => d.default.locale),
        q = f && !U;
    return (0, r.jsx)("div", {
        className: N.root,
        children: (0, r.jsxs)("div", {
            className: o()(N.outerContainer, {
                [N.outerContainerSm]: "sm" === l,
                [N.outerContainerXs]: "xs" === l,
            }),
            style: { visibility: B ? "inherit" : "hidden" },
            "aria-hidden": !B,
            children: [
                (0, r.jsx)(c.ua7, {
                    text: q ? C.intl.string(C.t["04MTGR"]) : null,
                    tooltipContentClassName: N.rewardTileExpirationTooltip,
                    shouldShow: q,
                    children: (e) =>
                        (0, r.jsxs)(
                            "div",
                            D(P({ className: N.rewardTileWrapper }, e), {
                                children: [
                                    f &&
                                        (0, r.jsx)("div", {
                                            className: N.rewardTileExpired,
                                            children: (0, r.jsx)(c.Mgn, { color: c.TVs.colors.WHITE }),
                                        }),
                                    (0, r.jsx)(O.Z, {
                                        autoplay: u,
                                        className: o()({
                                            [N.questRewardEmbed]: "lg" === l,
                                            [N.questRewardEmbedSm]: "sm" === l,
                                            [N.questRewardEmbedXs]: "xs" === l,
                                        }),
                                        learnMoreStyle: "text",
                                        location: S.dr.QUESTS_CARD,
                                        quest: n,
                                        questContent: a,
                                        questContentPosition: T,
                                        sourceQuestContent: A,
                                    }),
                                ],
                            }),
                        ),
                }),
                (0, r.jsxs)("div", {
                    className: N.taskDetails,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: x(a, l, k),
                            className: N.taskInstructions,
                            children: f
                                ? C.intl.formatToPlainString(C.t["ge+AJi"], { questName: n.config.messages.questName })
                                : Z,
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "lg" === l ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: j({
                                quest: n,
                                locale: z,
                                isQuestExpired: f,
                                sharedQuestFields: F,
                                collectibleQuestRewardDescription: Y,
                                formattedCompletionDate: w,
                            }),
                        }),
                    ],
                }),
                W
                    ? (0, r.jsxs)(c.hE2, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== l,
                          children: [
                              (0, r.jsx)(c.zxk, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: C.intl.string(C.t.V293qq),
                              }),
                              (0, r.jsx)(c.zxk, {
                                  variant: "primary",
                                  onClick: () => (0, v.openQuestMinorEnrollmentBlockModal)(n, a, A),
                                  text: C.intl.string(C.t.vY9GgI),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.hE2, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== l,
                          children: [
                              (0, r.jsx)(L, {
                                  containerSize: l,
                                  onClick: K,
                                  text: C.intl.string(C.t.LLLLPD),
                              }),
                              !q &&
                                  (0, r.jsx)(M, {
                                      quest: n,
                                      progressState: R,
                                      isCollectibleQuest: G,
                                      questContent: a,
                                      sourceQuestContent: A,
                                  }),
                          ],
                      }),
            ],
        }),
    });
};
