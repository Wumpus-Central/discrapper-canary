n.d(t, { default: () => q }), n(704826), n(35282);
var r = n(951288),
    a = n(647438),
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
    y = n(617136),
    x = n(509212),
    g = n(569984),
    v = n(497505),
    b = n(804127),
    _ = n(566078),
    w = n(602667),
    O = n(644646),
    N = n(515108),
    P = n(291967),
    T = n(46140),
    E = n(388032),
    I = n(238905);
function D(e) {
    let { rewardCode: t, questContent: n, questId: a, sourceQuestContent: i, className: l, inputClassName: u } = e,
        d = (0, o.e7)([f.Z], () => f.Z.hidePersonalInformation),
        m = (0, y.O5)();
    return null == t
        ? null
        : (0, r.jsx)(c.Z, {
              className: l,
              inputClassName: u,
              value: d ? E.intl.string(E.t["0n2u0t"]) : t.code,
              buttonColor: s.Tt.PRIMARY,
              onCopy: () => {
                  d && (0, h.JG)(t.code),
                      m({
                          questId: a,
                          questContent: n,
                          questContentCTA: y.jZ.COPY_REWARD_CODE,
                          sourceQuestContent: i,
                      });
              },
          });
}
function A(e) {
    var t;
    let {
            quest: n,
            questContent: o,
            questContentPosition: s,
            sourceQuestContent: c,
            rewardCode: u,
            rewardPlatform: d,
            sharedQuestFields: m,
            onClose: p,
            transitionState: f,
            impressionRef: h,
        } = e,
        y =
            null !=
            (t = (0, x.C1)({
                quest: n,
                rewardCode: u,
                selectedPlatformType: d,
                sharedQuestFields: m,
            }))
                ? t
                : "",
        g = a.useMemo(() => {
            var e;
            let t =
                null ==
                (e = (0, x.o9)({
                    quest: n,
                    idx: 0,
                }))
                    ? void 0
                    : e.redemptionLink;
            if ((0, j.Ew)(t)) return null;
            let r = null == u ? void 0 : u.code;
            return (0, j.Ew)(r) ? t : t.replace(T.Dp, encodeURIComponent(r));
        }, [n, null == u ? void 0 : u.code]),
        v = (0, b.In)({
            quest: n,
            questContent: o,
            questContentPosition: s,
            redemptionLink: g,
            sourceQuestContent: c,
        });
    return (0, r.jsx)("div", {
        ref: h,
        children: (0, r.jsx)(i.Modal, {
            size: "md",
            title: E.intl.string(E.t.NkZ7OT),
            actions: [
                null != g
                    ? {
                          variant: "primary",
                          text: E.intl.string(E.t["+zx47e"]),
                          onClick: v,
                      }
                    : {
                          variant: "primary",
                          text: E.intl.string(E.t["/g10LC"]),
                          onClick: p,
                      },
            ],
            preview: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: I.claimInstructionsCodeInputTitle,
                        children: E.intl.string(E.t.srzsU1),
                    }),
                    (0, r.jsx)(D, {
                        rewardCode: u,
                        questContent: o,
                        questId: n.id,
                        sourceQuestContent: c,
                    }),
                ],
            }),
            onClose: p,
            transitionState: f,
            children: (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: I.claimInstructionsText,
                children: C.Z.parse(y, !1, { allowLinks: !0 }),
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
                children: (0, r.jsx)(O.Z, {
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
                        children: E.intl.string(E.t["5j/Zys"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: E.intl.format(E.t.ESmp29, { onClaimInstructions: o }),
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
function q(e) {
    let { quest: t, onClose: n, transitionState: i, preview: s, sourceQuestContent: c, questContentPosition: C } = e,
        f = _.r.build(t.config),
        h = f.rewardPlatforms[0],
        j = v.jn.REWARD_MODAL,
        {
            questStoreRewardCode: y,
            isFetchingRewardCode: x,
            isClaimingReward: O,
        } = (0, o.cj)([g.Z], () => ({
            questStoreRewardCode: g.Z.getRewardCode(t.id),
            isFetchingRewardCode: g.Z.isFetchingRewardCode(t.id),
            isClaimingReward: g.Z.isClaimingReward(t.id),
        })),
        E = !0 === s ? (0, p.b)(t) : y,
        { hasError: I, setHasError: D } = (0, b.uL)({
            isClaimingReward: O,
            isFetchingRewardCode: x,
            quest: t,
            questContent: j,
            requiresPlatformSelection: !1,
            rewardCode: E,
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
        D(!0);
    });
    let q = null == E && (x || O),
        S = I && !O && !x;
    return (0, r.jsx)(N.Z, {
        onClose: n,
        transitionState: i,
        quest: t,
        sourceQuestContent: c,
        location: T.dr.REWARD_CODE_MODAL,
        isRewardContentLoading: q,
        rewardContentHasError: S,
        rewardContent: S
            ? null
            : (0, r.jsx)(P.Z, {
                  rewardName: f.defaultRewardName,
                  children: (0, r.jsx)(R, {
                      quest: t,
                      questContent: j,
                      rewardCode: E,
                      sourceQuestContent: c,
                      onClaimInstructions: () => {
                          (0, l.ZDy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, r.jsx)(w.A, {
                                          questOrQuests: t,
                                          questContent: j,
                                          sourceQuestContent: c,
                                          children: (n) => {
                                              var a, i;
                                              return (0, r.jsx)(
                                                  A,
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
                                                          rewardCode: E,
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
