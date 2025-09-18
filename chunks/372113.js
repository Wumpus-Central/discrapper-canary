n.d(t, { Z: () => G });
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
    b = n(979232),
    y = n(373370),
    O = n(566078),
    v = n(644646),
    I = n(110560),
    T = n(667105),
    S = n(87894),
    A = n(46140),
    C = n(981631),
    N = n(388032),
    R = n(997267);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = (e, t, n) =>
    (0, S.uq)(e) && !n && "lg" === t
        ? "text-lg/medium"
        : "lg" === t
          ? "text-md/medium"
          : "sm" === t
            ? "text-sm/medium"
            : "text-xs/medium";
function j(e) {
    let { containerSize: t, onClick: n, text: i, tabIndex: a } = e;
    return "xs" === t
        ? (0, r.jsx)(c.P3F, {
              tabIndex: a,
              className: R.learnMoreLink,
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
function M(e) {
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
            ? N.intl.formatToPlainString(N.t.RrxtPT, {
                  reward: t,
                  date: d,
              })
            : N.intl.formatToPlainString(N.t.zNoqRU, {
                  reward: E,
                  date: d,
              });
    }
    if (p)
        return g
            ? N.intl.formatToPlainString(N.t.l1jCMz, { date: d })
            : N.intl.formatToPlainString(N.t.zNoqRU, {
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
        ? N.intl.formatToPlainString(N.t.DT3aub, {
              reward: null != (a = null == b ? void 0 : b.messages.nameWithArticle) ? a : E,
          })
        : null != b && null != b.approximateCount
          ? N.intl.format(N.t["4bMK19"], {
                maxReward: b.messages.nameWithArticle,
                maxRewardCount: (0, _.Bs)(b.approximateCount, s),
                helpCenterLink: f.Z.getArticleURL(C.BhN.QUESTS_LEARN_MORE),
            })
          : u;
}
function k(e) {
    let {
            quest: t,
            progressState: n,
            isCollectibleQuest: i,
            questContent: a,
            questContentPosition: o,
            sourceQuestContent: l,
        } = e,
        d = n >= m.OH.COMPLETED,
        f = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        _ = (0, s.e7)([g.Z], () => g.Z.isEnrolling(t.id)),
        p = (0, h.q8)(t),
        E = (0, h.Vl)(t),
        b = (0, T.Ks)({
            progressState: n,
            quest: t,
            questContent: a,
            isCollectibleQuest: i,
            questContentPosition: o,
            inGiftInventory: !1,
            isVideoQuest: p,
            inGameQuest: E,
            sourceQuestContent: l,
        }),
        y = d && !f;
    return (0, r.jsx)(
        c.ua7,
        {
            text: b.tooltipText,
            tooltipContentClassName: R.ctaTooltipText,
            children: (e) => {
                var t;
                return y
                    ? (0, r.jsx)(U, {
                          ctaConfig: b,
                          tooltipProps: e,
                      })
                    : (0, r.jsx)(
                          c.zxk,
                          x(w({}, e), {
                              fullWidth: !0,
                              variant: "primary",
                              disabled: null == b.onClick,
                              loading: _,
                              onClick: null != (t = b.onClick) ? t : void 0,
                              text: b.text,
                          }),
                      );
            },
        },
        b.tooltipText,
    );
}
function U(e) {
    var t, n;
    let { ctaConfig: i, tooltipProps: a } = e,
        { shouldUseShinyButton: o } = b.Z.useConfig({ location: "QuestsCardFooter" });
    return o
        ? (0, r.jsx)(
              c.gtL,
              x(w({}, a), {
                  wrapperClassName: R.ctaButtonWrapper,
                  color: l.Tt.BRAND,
                  disabled: null == i.onClick,
                  onClick: null != (t = i.onClick) ? t : void 0,
                  children: i.text,
              }),
          )
        : (0, r.jsx)(
              c.zxk,
              x(w({}, a), {
                  fullWidth: !0,
                  variant: "primary",
                  disabled: null == i.onClick,
                  onClick: null != (n = i.onClick) ? n : void 0,
                  text: i.text,
              }),
          );
}
let G = (e) => {
    var t;
    let {
            quest: n,
            location: a,
            size: l,
            isFocused: u,
            isQuestExpired: f,
            isExpanded: _,
            isAnimating: b,
            contentPosition: T,
            sourceQuestContent: S,
        } = e,
        C = (0, m._Q)(n),
        P = (0, m.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        D = C >= m.OH.ACCEPTED,
        U = C >= m.OH.COMPLETED,
        G = (0, h.Xv)(n.config),
        B = _ || b,
        Z = (0, m.t5)(n, A.dr.QUESTS_CARD, a, S),
        F = (0, p.O5)(),
        V = i.useMemo(() => O.r.build(n.config), [n.config]),
        H = (0, m.Rf)(n),
        Y = (0, y.DD)({
            quest: n,
            taskDetails: H,
            location: A.dr.QUESTS_CARD,
            questContent: E.jn.QUESTS_EMBED,
            sourceQuestContent: S,
        }),
        W = (0, s.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil, []),
        K = () => {
            (0, I.navigateToQuestHome)({
                fromContent: a,
                questId: n.id,
            }),
                F({
                    questId: n.id,
                    questContent: a,
                    questContentPosition: T,
                    questContentCTA: p.jZ.LEARN_MORE,
                    sourceQuestContent: S,
                });
        },
        z = (0, s.e7)([d.default], () => d.default.locale),
        q = f && !U;
    return (0, r.jsx)("div", {
        className: R.root,
        children: (0, r.jsxs)("div", {
            className: o()(R.outerContainer, {
                [R.outerContainerSm]: "sm" === l,
                [R.outerContainerXs]: "xs" === l,
            }),
            style: { visibility: B ? "inherit" : "hidden" },
            "aria-hidden": !B,
            children: [
                (0, r.jsx)(c.ua7, {
                    text: q ? N.intl.string(N.t["04MTGR"]) : null,
                    tooltipContentClassName: R.rewardTileExpirationTooltip,
                    shouldShow: q,
                    children: (e) =>
                        (0, r.jsxs)(
                            "div",
                            x(w({ className: R.rewardTileWrapper }, e), {
                                children: [
                                    f &&
                                        (0, r.jsx)("div", {
                                            className: R.rewardTileExpired,
                                            children: (0, r.jsx)(c.Mgn, { color: c.TVs.colors.WHITE }),
                                        }),
                                    (0, r.jsx)(v.Z, {
                                        autoplay: u,
                                        className: o()({
                                            [R.questRewardEmbed]: "lg" === l,
                                            [R.questRewardEmbedSm]: "sm" === l,
                                            [R.questRewardEmbedXs]: "xs" === l,
                                        }),
                                        learnMoreStyle: "text",
                                        location: A.dr.QUESTS_CARD,
                                        quest: n,
                                        questContent: a,
                                        questContentPosition: T,
                                        sourceQuestContent: S,
                                    }),
                                ],
                            }),
                        ),
                }),
                (0, r.jsxs)("div", {
                    className: R.taskDetails,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: L(a, l, D),
                            className: R.taskInstructions,
                            children: f
                                ? N.intl.formatToPlainString(N.t["ge+AJi"], { questName: n.config.messages.questName })
                                : Z,
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "lg" === l ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: M({
                                quest: n,
                                locale: z,
                                isQuestExpired: f,
                                sharedQuestFields: V,
                                collectibleQuestRewardDescription: Y,
                                formattedCompletionDate: P,
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
                                  text: N.intl.string(N.t.V293qq),
                              }),
                              (0, r.jsx)(c.zxk, {
                                  variant: "primary",
                                  onClick: () => (0, I.openQuestMinorEnrollmentBlockModal)(n, a, S),
                                  text: N.intl.string(N.t.vY9GgI),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.hE2, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== l,
                          children: [
                              (0, r.jsx)(j, {
                                  containerSize: l,
                                  onClick: K,
                                  text: N.intl.string(N.t.LLLLPD),
                              }),
                              !q &&
                                  (0, r.jsx)(k, {
                                      quest: n,
                                      progressState: C,
                                      isCollectibleQuest: G,
                                      questContent: a,
                                      sourceQuestContent: S,
                                  }),
                          ],
                      }),
            ],
        }),
    });
};
