n.d(t, { Z: () => B });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(28664),
    c = n(755721),
    u = n(481060),
    d = n(607070),
    f = n(706454),
    _ = n(63063),
    p = n(930153),
    h = n(617136),
    m = n(509212),
    g = n(113434),
    E = n(569984),
    b = n(497505),
    y = n(979232),
    O = n(373370),
    v = n(566078),
    I = n(644646),
    T = n(110560),
    S = n(667105),
    A = n(87894),
    C = n(46140),
    N = n(981631),
    R = n(388032),
    P = n(997267);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = (e, t, n) =>
    (0, A.uq)(e) && !n && "lg" === t
        ? "text-lg/medium"
        : "lg" === t
          ? "text-md/medium"
          : "sm" === t
            ? "text-sm/medium"
            : "text-xs/medium";
function j(e) {
    let { containerSize: t, onClick: n, text: i, tabIndex: a } = e;
    return "xs" === t
        ? (0, r.jsx)(u.P3F, {
              tabIndex: a,
              className: P.learnMoreLink,
              tag: "span",
              onClick: n,
              children: (0, r.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  color: "text-link",
                  children: i,
              }),
          })
        : (0, r.jsx)(u.Button, {
              fullWidth: !0,
              tabIndex: a,
              variant: "secondary",
              onClick: n,
              text: i,
          });
}
function k(e) {
    var t, n, r, i, a;
    let {
            quest: o,
            locale: s,
            isQuestExpired: l,
            sharedQuestFields: c,
            collectibleQuestRewardDescription: u,
            formattedCompletionDate: d,
        } = e,
        f = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null,
        h = f && (null == (n = o.userStatus) ? void 0 : n.claimedAt) != null,
        g = (0, m.oo)({ quest: o }),
        E = c.defaultRewardNameWithArticle;
    if (h) {
        let e = g
                ? (0, m.o9)({
                      quest: o,
                      idx: null == (r = o.userStatus) ? void 0 : r.claimedTier,
                  })
                : null,
            t = null != (i = null == e ? void 0 : e.messages.nameWithArticle) ? i : null;
        return null != t
            ? R.intl.formatToPlainString(R.t.RrxtPU, {
                  reward: t,
                  date: d,
              })
            : R.intl.formatToPlainString(R.t.zNoqRe, {
                  reward: E,
                  date: d,
              });
    }
    if (f)
        return g
            ? R.intl.formatToPlainString(R.t["l1jCM/"], { date: d })
            : R.intl.formatToPlainString(R.t.zNoqRe, {
                  reward: E,
                  date: d,
              });
    let b = g
        ? (0, m.o9)({
              quest: o,
              idx: 0,
          })
        : null;
    return l
        ? R.intl.formatToPlainString(R.t.DT3auf, {
              reward: null != (a = null == b ? void 0 : b.messages.nameWithArticle) ? a : E,
          })
        : null != b && null != b.approximateCount
          ? R.intl.format(R.t["4bMK1z"], {
                maxReward: b.messages.nameWithArticle,
                maxRewardCount: (0, p.Bs)(b.approximateCount, s),
                helpCenterLink: _.Z.getArticleURL(N.BhN.QUESTS_LEARN_MORE),
            })
          : u;
}
function U(e) {
    let {
            quest: t,
            progressState: n,
            isCollectibleQuest: i,
            questContent: a,
            questContentPosition: o,
            sourceQuestContent: l,
        } = e,
        c = n >= g.OH.COMPLETED,
        f = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        _ = (0, s.e7)([E.Z], () => E.Z.isEnrolling(t.id)),
        p = (0, m.q8)(t),
        h = (0, m.Vl)(t),
        b = (0, S.Ks)({
            progressState: n,
            quest: t,
            questContent: a,
            isCollectibleQuest: i,
            questContentPosition: o,
            inGiftInventory: !1,
            isVideoQuest: p,
            inGameQuest: h,
            sourceQuestContent: l,
        }),
        y = c && !f;
    return (0, r.jsx)(
        u.aML,
        {
            text: b.tooltipText,
            tooltipContentClassName: P.ctaTooltipText,
            children: (e) => {
                var t;
                return y
                    ? (0, r.jsx)(G, {
                          ctaConfig: b,
                          tooltipProps: e,
                      })
                    : (0, r.jsx)(
                          u.Button,
                          L(D({}, e), {
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
function G(e) {
    var t, n;
    let { ctaConfig: i, tooltipProps: a } = e,
        { shouldUseShinyButton: s } = y.Z.useConfig({ location: "QuestsCardFooter" }),
        l = (0, u.MgI)(),
        d = !!(null == l ? void 0 : l.fullWidth);
    return s
        ? (0, r.jsx)("div", {
              className: o()({ [P.fullWidthShinyCtaButtonWrapper]: d }),
              children: (0, r.jsx)(
                  u.gtL,
                  L(D({}, a), {
                      "data-migration-pending": !0,
                      fullWidth: !0,
                      wrapperClassName: P.ctaButtonWrapper,
                      color: c.Tt.BRAND,
                      disabled: null == i.onClick,
                      onClick: null != (t = i.onClick) ? t : void 0,
                      children: i.text,
                  }),
              ),
          })
        : (0, r.jsx)(
              u.Button,
              L(D({}, a), {
                  fullWidth: !0,
                  variant: "primary",
                  disabled: null == i.onClick,
                  onClick: null != (n = i.onClick) ? n : void 0,
                  text: i.text,
              }),
          );
}
let B = (e) => {
    var t;
    let {
            quest: n,
            location: a,
            size: c,
            isFocused: d,
            isQuestExpired: _,
            isExpanded: p,
            isAnimating: y,
            contentPosition: S,
            sourceQuestContent: A,
        } = e,
        N = (0, g._Q)(n),
        w = (0, g.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        D = N >= g.OH.ACCEPTED,
        x = N >= g.OH.COMPLETED,
        L = (0, m.Xv)(n.config),
        G = p || y,
        B = (0, g.t5)(n, C.dr.QUESTS_CARD, a, A),
        Z = (0, h.O5)(),
        F = i.useMemo(() => v.r.build(n.config), [n.config]),
        V = (0, g.Rf)(n),
        H = (0, O.DD)({
            quest: n,
            taskDetails: V,
            location: C.dr.QUESTS_CARD,
            questContent: b.jn.QUESTS_EMBED,
            sourceQuestContent: A,
        }),
        Y = (0, s.e7)([E.Z], () => null != E.Z.questEnrollmentBlockedUntil, []),
        W = () => {
            (0, T.navigateToQuestHome)({
                fromContent: a,
                questId: n.id,
            }),
                Z({
                    questId: n.id,
                    questContent: a,
                    questContentPosition: S,
                    questContentCTA: h.jZ.LEARN_MORE,
                    sourceQuestContent: A,
                });
        },
        K = (0, s.e7)([f.default], () => f.default.locale),
        z = _ && !x;
    return (0, r.jsx)("div", {
        className: P.root,
        children: (0, r.jsxs)("div", {
            className: o()(P.outerContainer, {
                [P.outerContainerSm]: "sm" === c,
                [P.outerContainerXs]: "xs" === c,
            }),
            style: { visibility: G ? "inherit" : "hidden" },
            "aria-hidden": !G,
            children: [
                (0, r.jsx)(l.u, {
                    text: z ? R.intl.string(R.t["04MTGf"]) : null,
                    shouldShow: z,
                    children: (0, r.jsxs)("div", {
                        className: P.rewardTileWrapper,
                        children: [
                            _ &&
                                (0, r.jsx)("div", {
                                    className: P.rewardTileExpired,
                                    children: (0, r.jsx)(u.Mgn, { color: u.TVs.colors.WHITE }),
                                }),
                            (0, r.jsx)(I.Z, {
                                autoplay: d,
                                className: o()({
                                    [P.questRewardEmbed]: "lg" === c,
                                    [P.questRewardEmbedSm]: "sm" === c,
                                    [P.questRewardEmbedXs]: "xs" === c,
                                }),
                                learnMoreStyle: "text",
                                location: C.dr.QUESTS_CARD,
                                quest: n,
                                questContent: a,
                                questContentPosition: S,
                                sourceQuestContent: A,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: P.taskDetails,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: M(a, c, D),
                            className: P.taskInstructions,
                            children: _
                                ? R.intl.formatToPlainString(R.t["ge+AJp"], { questName: n.config.messages.questName })
                                : B,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "lg" === c ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: k({
                                quest: n,
                                locale: K,
                                isQuestExpired: _,
                                sharedQuestFields: F,
                                collectibleQuestRewardDescription: H,
                                formattedCompletionDate: w,
                            }),
                        }),
                    ],
                }),
                Y
                    ? (0, r.jsxs)(u.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== c,
                          children: [
                              (0, r.jsx)(u.Button, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: R.intl.string(R.t.V293qn),
                              }),
                              (0, r.jsx)(u.Button, {
                                  variant: "primary",
                                  onClick: () => (0, T.openQuestMinorEnrollmentBlockModal)(n, a, A),
                                  text: R.intl.string(R.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(u.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== c,
                          children: [
                              (0, r.jsx)(j, {
                                  containerSize: c,
                                  onClick: W,
                                  text: R.intl.string(R.t.LLLLPD),
                              }),
                              !z &&
                                  (0, r.jsx)(U, {
                                      quest: n,
                                      progressState: N,
                                      isCollectibleQuest: L,
                                      questContent: a,
                                      sourceQuestContent: A,
                                  }),
                          ],
                      }),
            ],
        }),
    });
};
