n.d(t, { default: () => Z }), n(704826), n(35282);
var r = n(54381),
    a = n(473749),
    i = n(793030),
    o = n(442837),
    s = n(693789),
    l = n(481060),
    c = n(484614),
    d = n(110924),
    u = n(448986),
    m = n(475271),
    p = n(454585),
    C = n(246946),
    b = n(572004),
    f = n(624138),
    h = n(617136),
    x = n(616022),
    j = n(49436),
    g = n(373370),
    y = n(968843),
    v = n(804127),
    w = n(115179),
    O = n(602667),
    N = n(644646),
    _ = n(515108),
    P = n(291967),
    E = n(324805),
    T = n(388032),
    A = n(284645);
function I(e) {
    let { rewardCode: t, questContent: n, questId: a, sourceQuestContent: i, className: l, inputClassName: d } = e,
        u = (0, o.e7)([C.Z], () => C.Z.hidePersonalInformation),
        m = (0, h.O5)();
    return null == t
        ? null
        : (0, r.jsx)(c.Z, {
              className: l,
              inputClassName: d,
              value: u ? T.intl.string(T.t["0n2u0k"]) : t.code,
              buttonColor: s.Tt.PRIMARY,
              onCopy: () => {
                  u && (0, b.JG)(t.code),
                      m({
                          questId: a,
                          questContent: n,
                          questContentCTA: h.jZ.COPY_REWARD_CODE,
                          sourceQuestContent: i,
                      });
              },
          });
}
function D(e) {
    var t;
    let {
            quest: n,
            questContent: o,
            sourceQuestContent: s,
            rewardCode: c,
            onClose: d,
            transitionState: u,
            impressionRef: m,
        } = e,
        C =
            null !=
            (t = (0, g.C1)({
                quest: n,
                rewardCode: c,
            }))
                ? t
                : "",
        b = a.useMemo(() => {
            var e;
            let t =
                null ==
                (e = (0, w.o9)({
                    quest: n,
                    idx: 0,
                }))
                    ? void 0
                    : e.redemptionLink;
            if ((0, f.Ew)(t)) return null;
            let r = null == c ? void 0 : c.code;
            return (0, f.Ew)(r) ? t : t.replace(E.Dp, encodeURIComponent(r));
        }, [n, null == c ? void 0 : c.code]),
        h = (0, v.In)({
            quest: n,
            questContent: o,
            redemptionLink: b,
            sourceQuestContent: s,
        });
    return (0, r.jsx)("div", {
        ref: m,
        children: (0, r.jsx)(i.Modal, {
            size: "md",
            title: T.intl.string(T.t.NkZ7OU),
            actions: [
                null != b
                    ? {
                          variant: "primary",
                          text: T.intl.string(T.t["+zx47d"]),
                          onClick: h,
                      }
                    : {
                          variant: "primary",
                          text: T.intl.string(T.t["/g10LC"]),
                          onClick: d,
                      },
            ],
            preview: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: A.claimInstructionsCodeInputTitle,
                        children: T.intl.string(T.t.srzsU2),
                    }),
                    (0, r.jsx)(I, {
                        rewardCode: c,
                        questContent: o,
                        questId: n.id,
                        sourceQuestContent: s,
                    }),
                ],
            }),
            onClose: d,
            transitionState: u,
            children: (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: A.claimInstructionsText,
                children: p.Z.parse(C, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function R(e) {
    let { quest: t, questContent: n, rewardCode: a, sourceQuestContent: i, onClaimInstructions: o } = e;
    return (0, r.jsxs)("div", {
        className: A.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: A.rewardTileContainer,
                children: (0, r.jsx)(N.Z, {
                    className: A.rewardTileAsset,
                    quest: t,
                    questContent: n,
                    location: E.dr.REWARD_CODE_MODAL,
                    sourceQuestContent: i,
                }),
            }),
            (0, r.jsxs)("div", {
                className: A.copyContainer,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: A.heading,
                        children: T.intl.string(T.t["5j/Zym"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: T.intl.format(T.t["ESmp2+"], { onClaimInstructions: o }),
                    }),
                ],
            }),
            (0, r.jsx)(I, {
                className: A.mainCodeInput,
                rewardCode: a,
                questContent: n,
                questId: t.id,
                sourceQuestContent: i,
                inputClassName: A.codeClaimInputSmallFont,
            }),
        ],
    });
}
function Z(e) {
    var t;
    let { initialQuest: n, onClose: i, transitionState: s, sourceQuestContent: c } = e,
        p = null != (t = (0, y.B4)(n.id)) ? t : n,
        C = j.jn.REWARD_MODAL,
        {
            rewardCode: b,
            isFetchingRewardCode: f,
            isClaimingReward: h,
        } = (0, o.cj)([x.Z], () => ({
            rewardCode: x.Z.getRewardCode(p.id),
            isFetchingRewardCode: x.Z.isFetchingRewardCode(p.id),
            isClaimingReward: x.Z.isClaimingReward(p.id),
        })),
        { hasError: g, setHasError: N } = (0, v.uL)({
            isClaimingReward: h,
            isFetchingRewardCode: f,
            quest: p,
            questContent: C,
            rewardCode: b,
        });
    !(function (e) {
        let t = (0, u.Z)(e),
            n = m.default.useIsCaptchaModalOpen(),
            r = (0, d.Z)(n),
            i = !!(!n && r);
        a.useEffect(() => {
            i && t();
        }, [i, t]);
    })(() => {
        N(!0);
    });
    let T = null == b && (f || h),
        A = g && !h && !f;
    return (0, r.jsx)(_.Z, {
        onClose: i,
        transitionState: s,
        quest: p,
        sourceQuestContent: c,
        location: E.dr.REWARD_CODE_MODAL,
        isRewardContentLoading: T,
        rewardContentHasError: A,
        rewardContent: A
            ? null
            : (0, r.jsx)(P.Z, {
                  rewardName: (0, w.w8)(p.config),
                  children: (0, r.jsx)(R, {
                      quest: p,
                      questContent: C,
                      rewardCode: b,
                      sourceQuestContent: c,
                      onClaimInstructions: () => {
                          (0, l.ZDy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, r.jsx)(O.A, {
                                          questOrQuests: p,
                                          questContent: C,
                                          sourceQuestContent: c,
                                          children: (t) => {
                                              var n, a;
                                              return (0, r.jsx)(
                                                  D,
                                                  ((n = (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                              r = Object.keys(n);
                                                          "function" == typeof Object.getOwnPropertySymbols &&
                                                              (r = r.concat(
                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(n, e)
                                                                          .enumerable;
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
                                                  })({}, e)),
                                                  (a = a =
                                                      {
                                                          impressionRef: t,
                                                          quest: p,
                                                          questContent: C,
                                                          sourceQuestContent: c,
                                                          rewardCode: b,
                                                      }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                                      : (function (e, t) {
                                                            var n = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var r = Object.getOwnPropertySymbols(e);
                                                                n.push.apply(n, r);
                                                            }
                                                            return n;
                                                        })(Object(a)).forEach(function (e) {
                                                            Object.defineProperty(
                                                                n,
                                                                e,
                                                                Object.getOwnPropertyDescriptor(a, e),
                                                            );
                                                        }),
                                                  n),
                                              );
                                          },
                                      }),
                                  ),
                              { stackingBehavior: "replace" },
                          );
                      },
                  }),
              }),
    });
}
