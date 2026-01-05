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
    f = n(246946),
    C = n(572004),
    h = n(624138),
    x = n(617136),
    j = n(616022),
    g = n(49436),
    y = n(373370),
    b = n(968843),
    v = n(804127),
    w = n(115179),
    O = n(602667),
    _ = n(644646),
    N = n(187546),
    P = n(285910),
    A = n(324805),
    E = n(388032),
    I = n(465480);
function T(e) {
    let { rewardCode: t, questContent: n, questId: a, sourceQuestContent: i, className: l, inputClassName: d } = e,
        u = (0, o.e7)([f.Z], () => f.Z.hidePersonalInformation),
        m = (0, x.O5)();
    return null == t
        ? null
        : (0, r.jsx)(c.Z, {
              className: l,
              inputClassName: d,
              value: u ? E.intl.string(E.t["0n2u0k"]) : t.code,
              buttonColor: s.Tt.PRIMARY,
              onCopy: () => {
                  u && (0, C.JG)(t.code),
                      m({
                          questId: a,
                          questContent: n,
                          questContentCTA: x.jZ.COPY_REWARD_CODE,
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
        f =
            null !=
            (t = (0, y.C1)({
                quest: n,
                rewardCode: c,
            }))
                ? t
                : "",
        C = a.useMemo(() => {
            var e;
            let t =
                null ==
                (e = (0, w.o9)({
                    quest: n,
                    idx: 0,
                }))
                    ? void 0
                    : e.redemptionLink;
            if ((0, h.Ew)(t)) return null;
            let r = null == c ? void 0 : c.code;
            return (0, h.Ew)(r) ? t : t.replace(A.Dp, encodeURIComponent(r));
        }, [n, null == c ? void 0 : c.code]),
        x = (0, v.In)({
            quest: n,
            questContent: o,
            redemptionLink: C,
            sourceQuestContent: s,
        });
    return (0, r.jsx)("div", {
        ref: m,
        children: (0, r.jsx)(i.Modal, {
            size: "md",
            title: E.intl.string(E.t.NkZ7OU),
            actions: [
                null != C
                    ? {
                          variant: "primary",
                          text: E.intl.string(E.t["+zx47d"]),
                          onClick: x,
                      }
                    : {
                          variant: "primary",
                          text: E.intl.string(E.t["/g10LC"]),
                          onClick: d,
                      },
            ],
            preview: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: I.claimInstructionsCodeInputTitle,
                        children: E.intl.string(E.t.srzsU2),
                    }),
                    (0, r.jsx)(T, {
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
                className: I.claimInstructionsText,
                children: p.Z.parse(f, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function R(e) {
    let { quest: t, questContent: n, rewardCode: a, sourceQuestContent: i, onClaimInstructions: o } = e;
    return (0, r.jsxs)("div", {
        className: I.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: I.rewardTileContainer,
                children: (0, r.jsx)(_.Z, {
                    className: I.rewardTileAsset,
                    quest: t,
                    questContent: n,
                    sourceQuestContent: i,
                }),
            }),
            (0, r.jsxs)("div", {
                className: I.copyContainer,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: I.heading,
                        children: E.intl.string(E.t["5j/Zym"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: E.intl.format(E.t["ESmp2+"], { onClaimInstructions: o }),
                    }),
                ],
            }),
            (0, r.jsx)(T, {
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
    let { initialQuest: n, onClose: i, transitionState: s, sourceQuestContent: c } = e,
        p = null != (t = (0, b.B4)(n.id)) ? t : n,
        f = g.jn.REWARD_MODAL,
        {
            rewardCode: C,
            isFetchingRewardCode: h,
            isClaimingReward: x,
        } = (0, o.cj)([j.Z], () => ({
            rewardCode: j.Z.getRewardCode(p.id),
            isFetchingRewardCode: j.Z.isFetchingRewardCode(p.id),
            isClaimingReward: j.Z.isClaimingReward(p.id),
        })),
        { hasError: y, setHasError: _ } = (0, v.uL)({
            isClaimingReward: x,
            isFetchingRewardCode: h,
            quest: p,
            questContent: f,
            rewardCode: C,
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
        _(!0);
    });
    let E = null == C && (h || x),
        I = y && !x && !h;
    return (0, r.jsx)(P.Z, {
        onClose: i,
        transitionState: s,
        quest: p,
        sourceQuestContent: c,
        location: A.dr.REWARD_CODE_MODAL,
        isRewardContentLoading: E,
        rewardContentHasError: I,
        rewardContent: I
            ? null
            : (0, r.jsx)(N.Z, {
                  rewardName: (0, w.w8)(p.config),
                  children: (0, r.jsx)(R, {
                      quest: p,
                      questContent: f,
                      rewardCode: C,
                      sourceQuestContent: c,
                      onClaimInstructions: () => {
                          (0, l.ZDy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, r.jsx)(O.A, {
                                          questOrQuests: p,
                                          questContent: f,
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
                                                          questContent: f,
                                                          sourceQuestContent: c,
                                                          rewardCode: C,
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
