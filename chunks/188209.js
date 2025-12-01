n.d(t, { default: () => Z }), n(704826), n(35282);
var r = n(54381),
    a = n(473749),
    i = n(793030),
    o = n(442837),
    s = n(693789),
    l = n(481060),
    c = n(484614),
    u = n(110924),
    d = n(448986),
    m = n(475271),
    p = n(63954),
    C = n(454585),
    f = n(246946),
    h = n(572004),
    j = n(624138),
    x = n(617136),
    y = n(313481),
    g = n(616022),
    v = n(49436),
    b = n(373370),
    _ = n(804127),
    w = n(115179),
    O = n(602667),
    N = n(644646),
    P = n(515108),
    E = n(291967),
    T = n(324805),
    A = n(388032),
    I = n(238905);
function D(e) {
    let { rewardCode: t, questContent: n, questId: a, sourceQuestContent: i, className: l, inputClassName: u } = e,
        d = (0, o.e7)([f.Z], () => f.Z.hidePersonalInformation),
        m = (0, x.O5)();
    return null == t
        ? null
        : (0, r.jsx)(c.Z, {
              className: l,
              inputClassName: u,
              value: d ? A.intl.string(A.t["0n2u0k"]) : t.code,
              buttonColor: s.Tt.PRIMARY,
              onCopy: () => {
                  d && (0, h.JG)(t.code),
                      m({
                          questId: a,
                          questContent: n,
                          questContentCTA: x.jZ.COPY_REWARD_CODE,
                          sourceQuestContent: i,
                      });
              },
          });
}
function R(e) {
    var t;
    let {
            quest: n,
            questContent: o,
            questContentPosition: s,
            sourceQuestContent: c,
            rewardCode: u,
            rewardPlatform: d,
            onClose: m,
            transitionState: p,
            impressionRef: f,
        } = e,
        h =
            null !=
            (t = (0, b.C1)({
                quest: n,
                rewardCode: u,
                selectedPlatformType: d,
            }))
                ? t
                : "",
        x = a.useMemo(() => {
            var e;
            let t =
                null ==
                (e = (0, w.o9)({
                    quest: n,
                    idx: 0,
                }))
                    ? void 0
                    : e.redemptionLink;
            if ((0, j.Ew)(t)) return null;
            let r = null == u ? void 0 : u.code;
            return (0, j.Ew)(r) ? t : t.replace(T.Dp, encodeURIComponent(r));
        }, [n, null == u ? void 0 : u.code]),
        y = (0, _.In)({
            quest: n,
            questContent: o,
            questContentPosition: s,
            redemptionLink: x,
            sourceQuestContent: c,
        });
    return (0, r.jsx)("div", {
        ref: f,
        children: (0, r.jsx)(i.Modal, {
            size: "md",
            title: A.intl.string(A.t.NkZ7OU),
            actions: [
                null != x
                    ? {
                          variant: "primary",
                          text: A.intl.string(A.t["+zx47d"]),
                          onClick: y,
                      }
                    : {
                          variant: "primary",
                          text: A.intl.string(A.t["/g10LC"]),
                          onClick: m,
                      },
            ],
            preview: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: I.claimInstructionsCodeInputTitle,
                        children: A.intl.string(A.t.srzsU2),
                    }),
                    (0, r.jsx)(D, {
                        rewardCode: u,
                        questContent: o,
                        questId: n.id,
                        sourceQuestContent: c,
                    }),
                ],
            }),
            onClose: m,
            transitionState: p,
            children: (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: I.claimInstructionsText,
                children: C.Z.parse(h, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function q(e) {
    let { quest: t, questContent: n, rewardCode: a, sourceQuestContent: i, onClaimInstructions: o } = e;
    return (0, r.jsxs)("div", {
        className: I.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: I.rewardTileContainer,
                children: (0, r.jsx)(N.Z, {
                    className: I.rewardTileAsset,
                    quest: t,
                    questContent: n,
                    location: T.dr.REWARD_CODE_MODAL,
                    sourceQuestContent: i,
                }),
            }),
            (0, r.jsxs)("div", {
                className: I.copyContainer,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: I.heading,
                        children: A.intl.string(A.t["5j/Zym"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: A.intl.format(A.t["ESmp2+"], { onClaimInstructions: o }),
                    }),
                ],
            }),
            (0, r.jsx)(D, {
                className: I.mainCodeInput,
                rewardCode: a,
                questContent: n,
                questId: t.id,
                sourceQuestContent: i,
                inputClassName: I.codeClaimInputSmallFont,
            }),
        ],
    });
}
function Z(e) {
    var t;
    let {
            initialQuest: n,
            onClose: i,
            transitionState: s,
            preview: c,
            sourceQuestContent: C,
            questContentPosition: f,
        } = e,
        h = null != (t = (0, y.B4)(n.id)) ? t : n,
        j = (0, w.zG)(h.config),
        x = v.jn.REWARD_MODAL,
        {
            questStoreRewardCode: b,
            isFetchingRewardCode: N,
            isClaimingReward: A,
        } = (0, o.cj)([g.Z], () => ({
            questStoreRewardCode: g.Z.getRewardCode(h.id),
            isFetchingRewardCode: g.Z.isFetchingRewardCode(h.id),
            isClaimingReward: g.Z.isClaimingReward(h.id),
        })),
        I = !0 === c ? (0, p.b)(h) : b,
        { hasError: D, setHasError: Z } = (0, _.uL)({
            isClaimingReward: A,
            isFetchingRewardCode: N,
            quest: h,
            questContent: x,
            requiresPlatformSelection: !1,
            rewardCode: I,
            selectedPlatformType: j,
            preview: c,
        });
    !(function (e) {
        let t = (0, d.Z)(e),
            n = m.default.useIsCaptchaModalOpen(),
            r = (0, u.Z)(n),
            i = !!(!n && r);
        a.useEffect(() => {
            i && t();
        }, [i, t]);
    })(() => {
        Z(!0);
    });
    let S = null == I && (N || A),
        k = D && !A && !N;
    return (0, r.jsx)(P.Z, {
        onClose: i,
        transitionState: s,
        quest: h,
        sourceQuestContent: C,
        location: T.dr.REWARD_CODE_MODAL,
        isRewardContentLoading: S,
        rewardContentHasError: k,
        rewardContent: k
            ? null
            : (0, r.jsx)(E.Z, {
                  rewardName: (0, w.w8)(h.config),
                  children: (0, r.jsx)(q, {
                      quest: h,
                      questContent: x,
                      rewardCode: I,
                      sourceQuestContent: C,
                      onClaimInstructions: () => {
                          (0, l.ZDy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, r.jsx)(O.A, {
                                          questOrQuests: h,
                                          questContent: x,
                                          sourceQuestContent: C,
                                          children: (t) => {
                                              var n, a;
                                              return (0, r.jsx)(
                                                  R,
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
                                                          quest: h,
                                                          questContent: x,
                                                          sourceQuestContent: C,
                                                          rewardCode: I,
                                                          rewardPlatform: j,
                                                          questContentPosition: f,
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
