n.d(t, { default: () => S }), n(704826), n(35282);
var r = n(951288),
    a = n(647438),
    i = n(793030),
    o = n(442837),
    s = n(693789),
    l = n(481060),
    c = n(484614),
    u = n(110924),
    d = n(448986),
    p = n(475271),
    m = n(63954),
    C = n(454585),
    f = n(246946),
    b = n(572004),
    h = n(624138),
    _ = n(617136),
    g = n(509212),
    y = n(569984),
    j = n(497505),
    x = n(804127),
    v = n(566078),
    w = n(602667),
    O = n(644646),
    T = n(515108),
    N = n(291967),
    P = n(46140),
    E = n(388032),
    I = n(238905);
function A(e) {
    let { rewardCode: t, questContent: n, questId: a, sourceQuestContent: i, className: l, inputClassName: u } = e,
        d = (0, o.e7)([f.Z], () => f.Z.hidePersonalInformation),
        p = (0, _.O5)();
    return null == t
        ? null
        : (0, r.jsx)(c.Z, {
              className: l,
              inputClassName: u,
              value: d ? E.intl.string(E.t["0n2u0k"]) : t.code,
              buttonColor: s.Tt.PRIMARY,
              onCopy: () => {
                  d && (0, b.JG)(t.code),
                      p({
                          questId: a,
                          questContent: n,
                          questContentCTA: _.jZ.COPY_REWARD_CODE,
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
            questContentPosition: s,
            sourceQuestContent: c,
            rewardCode: u,
            rewardPlatform: d,
            sharedQuestFields: p,
            onClose: m,
            transitionState: f,
            impressionRef: b,
        } = e,
        _ =
            null !=
            (t = (0, g.C1)({
                quest: n,
                rewardCode: u,
                selectedPlatformType: d,
                sharedQuestFields: p,
            }))
                ? t
                : "",
        y = a.useMemo(() => {
            var e;
            let t =
                null ==
                (e = (0, g.o9)({
                    quest: n,
                    idx: 0,
                }))
                    ? void 0
                    : e.redemptionLink;
            if ((0, h.Ew)(t)) return null;
            let r = null == u ? void 0 : u.code;
            return (0, h.Ew)(r) ? t : t.replace(P.Dp, encodeURIComponent(r));
        }, [n, null == u ? void 0 : u.code]),
        j = (0, x.In)({
            quest: n,
            questContent: o,
            questContentPosition: s,
            redemptionLink: y,
            sourceQuestContent: c,
        });
    return (0, r.jsx)("div", {
        ref: b,
        children: (0, r.jsx)(i.Modal, {
            size: "md",
            title: E.intl.string(E.t.NkZ7OU),
            actions: [
                null != y
                    ? {
                          variant: "primary",
                          text: E.intl.string(E.t["+zx47d"]),
                          onClick: j,
                      }
                    : {
                          variant: "primary",
                          text: E.intl.string(E.t["/g10LC"]),
                          onClick: m,
                      },
            ],
            preview: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: I.claimInstructionsCodeInputTitle,
                        children: E.intl.string(E.t.srzsU2),
                    }),
                    (0, r.jsx)(A, {
                        rewardCode: u,
                        questContent: o,
                        questId: n.id,
                        sourceQuestContent: c,
                    }),
                ],
            }),
            onClose: m,
            transitionState: f,
            children: (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: I.claimInstructionsText,
                children: C.Z.parse(_, !1, { allowLinks: !0 }),
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
                children: (0, r.jsx)(O.Z, {
                    className: I.rewardTileAsset,
                    quest: t,
                    questContent: n,
                    location: P.dr.REWARD_CODE_MODAL,
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
                        children: E.intl.string(E.t["5j/Zym"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: E.intl.format(E.t["ESmp2+"], { onClaimInstructions: o }),
                    }),
                ],
            }),
            (0, r.jsx)(A, {
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
function S(e) {
    let { quest: t, onClose: n, transitionState: i, preview: s, sourceQuestContent: c, questContentPosition: C } = e,
        f = v.r.build(t.config),
        b = f.rewardPlatforms[0],
        h = j.jn.REWARD_MODAL,
        {
            questStoreRewardCode: _,
            isFetchingRewardCode: g,
            isClaimingReward: O,
        } = (0, o.cj)([y.Z], () => ({
            questStoreRewardCode: y.Z.getRewardCode(t.id),
            isFetchingRewardCode: y.Z.isFetchingRewardCode(t.id),
            isClaimingReward: y.Z.isClaimingReward(t.id),
        })),
        E = !0 === s ? (0, m.b)(t) : _,
        { hasError: I, setHasError: A } = (0, x.uL)({
            isClaimingReward: O,
            isFetchingRewardCode: g,
            quest: t,
            questContent: h,
            requiresPlatformSelection: !1,
            rewardCode: E,
            selectedPlatformType: b,
            preview: s,
        });
    !(function (e) {
        let t = (0, d.Z)(e),
            n = p.default.useIsCaptchaModalOpen(),
            r = (0, u.Z)(n),
            i = !!(!n && r);
        a.useEffect(() => {
            i && t();
        }, [i, t]);
    })(() => {
        A(!0);
    });
    let S = null == E && (g || O),
        R = I && !O && !g;
    return (0, r.jsx)(T.Z, {
        onClose: n,
        transitionState: i,
        quest: t,
        sourceQuestContent: c,
        location: P.dr.REWARD_CODE_MODAL,
        isRewardContentLoading: S,
        rewardContentHasError: R,
        rewardContent: R
            ? null
            : (0, r.jsx)(N.Z, {
                  rewardName: f.defaultRewardName,
                  children: (0, r.jsx)(q, {
                      quest: t,
                      questContent: h,
                      rewardCode: E,
                      sourceQuestContent: c,
                      onClaimInstructions: () => {
                          (0, l.ZDy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, r.jsx)(w.A, {
                                          questOrQuests: t,
                                          questContent: h,
                                          sourceQuestContent: c,
                                          children: (n) => {
                                              var a, i;
                                              return (0, r.jsx)(
                                                  D,
                                                  ((a = (function (e) {
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
                                                  (i = i =
                                                      {
                                                          impressionRef: n,
                                                          quest: t,
                                                          questContent: h,
                                                          sourceQuestContent: c,
                                                          rewardCode: E,
                                                          rewardPlatform: b,
                                                          sharedQuestFields: f,
                                                          questContentPosition: C,
                                                      }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                                                      : (function (e, t) {
                                                            var n = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var r = Object.getOwnPropertySymbols(e);
                                                                n.push.apply(n, r);
                                                            }
                                                            return n;
                                                        })(Object(i)).forEach(function (e) {
                                                            Object.defineProperty(
                                                                a,
                                                                e,
                                                                Object.getOwnPropertyDescriptor(i, e),
                                                            );
                                                        }),
                                                  a),
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
