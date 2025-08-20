n.d(t, { Z: () => R });
var r = n(951288),
    o = n(647438),
    s = n(120356),
    i = n.n(s),
    a = n(442837),
    l = n(755721),
    u = n(481060),
    c = n(607070),
    d = n(706454),
    m = n(63063),
    p = n(930153),
    h = n(617136),
    g = n(509212),
    x = n(113434),
    C = n(569984),
    j = n(497505),
    f = n(373370),
    b = n(566078),
    y = n(644646),
    v = n(110560),
    O = n(667105),
    E = n(87894),
    q = n(46140),
    N = n(981631),
    S = n(388032),
    T = n(997267);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let { containerSize: t, onClick: n, text: o, tabIndex: s } = e;
    return "xs" === t
        ? (0, r.jsx)(u.P3F, {
              tabIndex: s,
              className: T.learnMoreLink,
              tag: "span",
              onClick: n,
              children: (0, r.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  color: "text-link",
                  children: o,
              }),
          })
        : (0, r.jsx)(u.zxk, {
              fullWidth: !0,
              tabIndex: s,
              variant: "secondary",
              onClick: n,
              text: o,
          });
}
function M(e) {
    let {
            quest: t,
            progressState: n,
            isCollectibleQuest: o,
            questContent: s,
            questContentPosition: i,
            sourceQuestContent: d,
        } = e,
        m = n >= x.OH.COMPLETED,
        p = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        h = (0, a.e7)([C.Z], () => C.Z.isEnrolling(t.id)),
        j = (0, g.q8)(t),
        f = (0, g.Vl)(t),
        b = (0, O.Ks)({
            progressState: n,
            quest: t,
            questContent: s,
            isCollectibleQuest: o,
            questContentPosition: i,
            inGiftInventory: !1,
            isVideoQuest: j,
            inGameQuest: f,
            sourceQuestContent: d,
        });
    return (0, r.jsx)(
        u.ua7,
        {
            text: b.tooltipText,
            tooltipContentClassName: T.ctaTooltipText,
            children: (e) => {
                var t, n;
                return m && !p
                    ? (0, r.jsx)(
                          u.gtL,
                          w(P({}, e), {
                              wrapperClassName: T.ctaButtonWrapper,
                              color: l.Tt.BRAND,
                              disabled: null == b.onClick,
                              onClick: null != (t = b.onClick) ? t : void 0,
                              children: b.text,
                          }),
                      )
                    : (0, r.jsx)(
                          u.zxk,
                          w(P({}, e), {
                              fullWidth: !0,
                              variant: "primary",
                              disabled: null == b.onClick,
                              loading: h,
                              onClick: null != (n = b.onClick) ? n : void 0,
                              text: b.text,
                          }),
                      );
            },
        },
        b.tooltipText,
    );
}
let R = (e) => {
    var t;
    let {
            quest: n,
            location: s,
            size: l,
            isFocused: c,
            isQuestExpired: O,
            isExpanded: R,
            isAnimating: k,
            contentPosition: D,
            sourceQuestContent: Q,
        } = e,
        L = (0, x._Q)(n),
        A = (0, x.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        I = L >= x.OH.ACCEPTED,
        Z = L >= x.OH.COMPLETED,
        U = (0, g.Xv)(n.config),
        B = R || k,
        W = (0, x.t5)(n, q.dr.QUESTS_CARD, s, Q),
        G = (0, h.O5)(),
        F = o.useMemo(() => b.r.build(n.config), [n.config]),
        H = (0, x.Rf)(n),
        z = (0, f.DD)({
            quest: n,
            taskDetails: H,
            location: q.dr.QUESTS_CARD,
            questContent: j.jn.QUESTS_EMBED,
            sourceQuestContent: Q,
        }),
        X = (0, a.e7)([C.Z], () => null != C.Z.questEnrollmentBlockedUntil, []),
        V = (0, a.e7)([d.default], () => d.default.locale),
        Y = O && !Z;
    return (0, r.jsx)("div", {
        className: T.root,
        children: (0, r.jsxs)("div", {
            className: i()(T.outerContainer, {
                [T.outerContainerSm]: "sm" === l,
                [T.outerContainerXs]: "xs" === l,
            }),
            style: { visibility: B ? "inherit" : "hidden" },
            "aria-hidden": !B,
            children: [
                (0, r.jsx)(u.ua7, {
                    text: Y ? S.intl.string(S.t["04MTGR"]) : null,
                    tooltipContentClassName: T.rewardTileExpirationTooltip,
                    shouldShow: Y,
                    children: (e) =>
                        (0, r.jsxs)(
                            "div",
                            w(P({ className: T.rewardTileWrapper }, e), {
                                children: [
                                    O &&
                                        (0, r.jsx)("div", {
                                            className: T.rewardTileExpired,
                                            children: (0, r.jsx)(u.Mgn, { color: u.TVs.colors.WHITE }),
                                        }),
                                    (0, r.jsx)(y.Z, {
                                        autoplay: c,
                                        className: i()({
                                            [T.questRewardEmbed]: "lg" === l,
                                            [T.questRewardEmbedSm]: "sm" === l,
                                            [T.questRewardEmbedXs]: "xs" === l,
                                        }),
                                        learnMoreStyle: "text",
                                        location: q.dr.QUESTS_CARD,
                                        quest: n,
                                        questContent: s,
                                        questContentPosition: D,
                                        sourceQuestContent: Q,
                                    }),
                                ],
                            }),
                        ),
                }),
                (0, r.jsxs)("div", {
                    className: T.taskDetails,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant:
                                (0, E.uq)(s) && !I && "lg" === l
                                    ? "text-lg/medium"
                                    : "lg" === l
                                      ? "text-md/medium"
                                      : "sm" === l
                                        ? "text-sm/medium"
                                        : "text-xs/medium",
                            className: T.taskInstructions,
                            children: O
                                ? S.intl.formatToPlainString(S.t["ge+AJi"], { questName: n.config.messages.questName })
                                : W,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "lg" === l ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: (function (e) {
                                var t, n, r, o, s;
                                let {
                                        quest: i,
                                        locale: a,
                                        isQuestExpired: l,
                                        sharedQuestFields: u,
                                        collectibleQuestRewardDescription: c,
                                        formattedCompletionDate: d,
                                    } = e,
                                    h = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null,
                                    x = h && (null == (n = i.userStatus) ? void 0 : n.claimedAt) != null,
                                    C = (0, g.oo)({ quest: i }),
                                    j = u.defaultRewardNameWithArticle;
                                if (x) {
                                    let e = C
                                            ? (0, g.o9)({
                                                  quest: i,
                                                  idx: null == (r = i.userStatus) ? void 0 : r.claimedTier,
                                              })
                                            : null,
                                        t = null != (o = null == e ? void 0 : e.messages.nameWithArticle) ? o : null;
                                    return null != t
                                        ? S.intl.formatToPlainString(S.t.RrxtPT, {
                                              reward: t,
                                              date: d,
                                          })
                                        : S.intl.formatToPlainString(S.t.zNoqRU, {
                                              reward: j,
                                              date: d,
                                          });
                                }
                                if (h)
                                    return C
                                        ? S.intl.formatToPlainString(S.t.l1jCMz, { date: d })
                                        : S.intl.formatToPlainString(S.t.zNoqRU, {
                                              reward: j,
                                              date: d,
                                          });
                                let f = C
                                    ? (0, g.o9)({
                                          quest: i,
                                          idx: 0,
                                      })
                                    : null;
                                return l
                                    ? S.intl.formatToPlainString(S.t.DT3aub, {
                                          reward: null != (s = null == f ? void 0 : f.messages.nameWithArticle) ? s : j,
                                      })
                                    : null != f && null != f.approximateCount
                                      ? S.intl.format(S.t["4bMK19"], {
                                            maxReward: f.messages.nameWithArticle,
                                            maxRewardCount: (0, p.Bs)(f.approximateCount, a),
                                            helpCenterLink: m.Z.getArticleURL(N.BhN.QUESTS_LEARN_MORE),
                                        })
                                      : c;
                            })({
                                quest: n,
                                locale: V,
                                isQuestExpired: O,
                                sharedQuestFields: F,
                                collectibleQuestRewardDescription: z,
                                formattedCompletionDate: A,
                            }),
                        }),
                    ],
                }),
                X
                    ? (0, r.jsxs)(u.hE2, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: !0,
                          className: i()({ [T.removeStackWidth]: "lg" === l }),
                          children: [
                              (0, r.jsx)(u.zxk, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: S.intl.string(S.t.V293qq),
                              }),
                              (0, r.jsx)(u.zxk, {
                                  variant: "primary",
                                  onClick: () => (0, v.openQuestMinorEnrollmentBlockModal)(n, s, Q),
                                  text: S.intl.string(S.t.vY9GgI),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(u.hE2, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: !0,
                          className: i()({ [T.removeStackWidth]: "lg" === l }),
                          children: [
                              (0, r.jsx)(_, {
                                  containerSize: l,
                                  onClick: () => {
                                      (0, v.navigateToQuestHome)({
                                          fromContent: s,
                                          questId: n.id,
                                      }),
                                          G({
                                              questId: n.id,
                                              questContent: s,
                                              questContentPosition: D,
                                              questContentCTA: h.jZ.LEARN_MORE,
                                              sourceQuestContent: Q,
                                          });
                                  },
                                  text: S.intl.string(S.t.LLLLPD),
                              }),
                              !Y &&
                                  (0, r.jsx)(M, {
                                      quest: n,
                                      progressState: L,
                                      isCollectibleQuest: U,
                                      questContent: s,
                                      sourceQuestContent: Q,
                                  }),
                          ],
                      }),
            ],
        }),
    });
};
