n.d(t, { default: () => q }), n(704826), n(35282);
var r = n(951288),
    a = n(647438),
    i = n(442837),
    o = n(693789),
    s = n(82659),
    l = n(481060),
    c = n(484614),
    u = n(110924),
    d = n(448986),
    m = n(475271),
    p = n(63954),
    C = n(246946),
    f = n(572004),
    h = n(624138),
    j = n(617136),
    y = n(509212),
    v = n(569984),
    x = n(497505),
    g = n(804127),
    b = n(566078),
    _ = n(602667),
    w = n(644646),
    O = n(515108),
    P = n(291967),
    N = n(46140),
    E = n(388032),
    T = n(644647);
function A(e) {
    let { rewardCode: t, questContent: n, questId: a, sourceQuestContent: o, buttonColor: s, className: l } = e,
        u = (0, i.e7)([C.Z], () => C.Z.hidePersonalInformation),
        d = (0, j.O5)();
    return null == t
        ? null
        : (0, r.jsx)(c.Z, {
              className: l,
              value: u ? E.intl.string(E.t["0n2u0t"]) : t.code,
              buttonColor: s,
              onCopy: () => {
                  u && (0, f.JG)(t.code),
                      d({
                          questId: a,
                          questContent: n,
                          questContentCTA: j.jZ.COPY_REWARD_CODE,
                          sourceQuestContent: o,
                      });
              },
          });
}
function D(e) {
    var t;
    let {
            quest: n,
            questContent: i,
            questContentPosition: c,
            sourceQuestContent: u,
            rewardCode: d,
            rewardPlatform: m,
            sharedQuestFields: p,
            onClose: C,
            transitionState: f,
            impressionRef: j,
        } = e,
        v =
            null !=
            (t = (0, y.C1)({
                quest: n,
                rewardCode: d,
                selectedPlatformType: m,
                sharedQuestFields: p,
            }))
                ? t
                : "",
        x = a.useMemo(() => {
            var e;
            let t =
                null ==
                (e = (0, y.o9)({
                    quest: n,
                    idx: 0,
                }))
                    ? void 0
                    : e.redemptionLink;
            if ((0, h.Ew)(t)) return null;
            let r = null == d ? void 0 : d.code;
            return (0, h.Ew)(r) ? t : t.replace(N.Dp, encodeURIComponent(r));
        }, [n, null == d ? void 0 : d.code]),
        b = (0, g.In)({
            quest: n,
            questContent: i,
            questContentPosition: c,
            redemptionLink: x,
            sourceQuestContent: u,
        });
    return (0, r.jsx)("div", {
        ref: j,
        children: (0, r.jsx)(s.Modal, {
            size: "md",
            title: E.intl.string(E.t.NkZ7OT),
            actions: [
                null != x
                    ? {
                          variant: "primary",
                          text: E.intl.string(E.t["+zx47e"]),
                          onClick: b,
                      }
                    : {
                          variant: "primary",
                          text: E.intl.string(E.t.i4jeWV),
                          onClick: C,
                      },
            ],
            preview: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: T.claimInstructionsCodeInputTitle,
                        children: E.intl.string(E.t.srzsU1),
                    }),
                    (0, r.jsx)(A, {
                        rewardCode: d,
                        questContent: i,
                        questId: n.id,
                        sourceQuestContent: u,
                        buttonColor: o.Tt.BRAND,
                    }),
                ],
            }),
            onClose: C,
            transitionState: f,
            children: (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: T.claimInstructionsText,
                children: v,
            }),
        }),
    });
}
function I(e) {
    let { quest: t, questContent: n, rewardCode: a, sourceQuestContent: i, onClaimInstructions: s } = e;
    return (0, r.jsxs)("div", {
        className: T.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: T.rewardTileContainer,
                children: (0, r.jsx)(w.Z, {
                    className: T.rewardTileAsset,
                    quest: t,
                    questContent: n,
                    location: N.dr.REWARD_CODE_MODAL,
                    sourceQuestContent: i,
                }),
            }),
            (0, r.jsxs)("div", {
                className: T.copyContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: T.heading,
                        children: E.intl.string(E.t["5j/Zys"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: E.intl.format(E.t.ESmp29, { onClaimInstructions: s }),
                    }),
                ],
            }),
            (0, r.jsx)(A, {
                className: T.mainCodeInput,
                rewardCode: a,
                questContent: n,
                questId: t.id,
                sourceQuestContent: i,
                buttonColor: o.Tt.PRIMARY,
            }),
        ],
    });
}
function q(e) {
    let { quest: t, onClose: n, transitionState: o, preview: s, sourceQuestContent: c, questContentPosition: C } = e,
        f = b.r.build(t.config),
        h = f.rewardPlatforms[0],
        j = x.jn.REWARD_MODAL,
        {
            questStoreRewardCode: y,
            isFetchingRewardCode: w,
            isClaimingReward: E,
        } = (0, i.cj)([v.Z], () => ({
            questStoreRewardCode: v.Z.getRewardCode(t.id),
            isFetchingRewardCode: v.Z.isFetchingRewardCode(t.id),
            isClaimingReward: v.Z.isClaimingReward(t.id),
        })),
        T = !0 === s ? (0, p.b)(t) : y,
        { hasError: A, setHasError: q } = (0, g.uL)({
            isClaimingReward: E,
            isFetchingRewardCode: w,
            quest: t,
            questContent: j,
            requiresPlatformSelection: !1,
            rewardCode: T,
            selectedPlatformType: h,
            preview: s,
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
        q(!0);
    });
    let R = null == T && (w || E),
        S = A && !E && !w;
    return (0, r.jsx)(O.Z, {
        onClose: n,
        transitionState: o,
        quest: t,
        sourceQuestContent: c,
        location: N.dr.REWARD_CODE_MODAL,
        isRewardContentLoading: R,
        rewardContentHasError: S,
        rewardContent: S
            ? null
            : (0, r.jsx)(P.Z, {
                  rewardName: f.defaultRewardName,
                  children: (0, r.jsx)(I, {
                      quest: t,
                      questContent: j,
                      rewardCode: T,
                      sourceQuestContent: c,
                      onClaimInstructions: () => {
                          (0, l.ZDy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, r.jsx)(_.A, {
                                          questOrQuests: t,
                                          questContent: j,
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
                                                          questContent: j,
                                                          sourceQuestContent: c,
                                                          rewardCode: T,
                                                          rewardPlatform: h,
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
