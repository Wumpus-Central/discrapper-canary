n.d(t, { default: () => R }), n(704826), n(35282);
var r = n(951288),
    a = n(647438),
    i = n(442837),
    o = n(693789),
    s = n(82659),
    l = n(481060),
    c = n(484614),
    d = n(110924),
    u = n(448986),
    p = n(475271),
    m = n(63954),
    f = n(246946),
    C = n(572004),
    h = n(624138),
    _ = n(617136),
    v = n(509212),
    g = n(569984),
    y = n(497505),
    w = n(804127),
    j = n(566078),
    x = n(602667),
    b = n(644646),
    P = n(515108),
    O = n(291967),
    T = n(46140),
    q = n(388032),
    N = n(644647);
function E(e) {
    let { rewardCode: t, questContent: n, questId: a, sourceQuestContent: o, buttonColor: s, className: l } = e,
        d = (0, i.e7)([f.Z], () => f.Z.hidePersonalInformation),
        u = (0, _.O5)();
    return null == t
        ? null
        : (0, r.jsx)(c.Z, {
              className: l,
              value: d ? q.intl.string(q.t["0n2u0t"]) : t.code,
              buttonColor: s,
              onCopy: () => {
                  d && (0, C.JG)(t.code),
                      u({
                          questId: a,
                          questContent: n,
                          questContentCTA: _.jZ.COPY_REWARD_CODE,
                          sourceQuestContent: o,
                      });
              },
          });
}
function I(e) {
    var t;
    let {
            quest: n,
            questContent: i,
            questContentPosition: c,
            sourceQuestContent: d,
            rewardCode: u,
            rewardPlatform: p,
            sharedQuestFields: m,
            onClose: f,
            transitionState: C,
            impressionRef: _,
        } = e,
        g =
            null !=
            (t = (0, v.C1)({
                quest: n,
                rewardCode: u,
                selectedPlatformType: p,
                sharedQuestFields: m,
            }))
                ? t
                : "",
        y = a.useMemo(() => {
            var e;
            let t =
                null ==
                (e = (0, v.o9)({
                    quest: n,
                    idx: 0,
                }))
                    ? void 0
                    : e.redemptionLink;
            if ((0, h.Ew)(t)) return null;
            let r = null == u ? void 0 : u.code;
            return (0, h.Ew)(r) ? t : t.replace(T.Dp, encodeURIComponent(r));
        }, [n, null == u ? void 0 : u.code]),
        j = (0, w.In)({
            quest: n,
            questContent: i,
            questContentPosition: c,
            redemptionLink: y,
            sourceQuestContent: d,
        });
    return (0, r.jsx)("div", {
        ref: _,
        children: (0, r.jsx)(s.Modal, {
            size: "md",
            title: q.intl.string(q.t.NkZ7OT),
            actions: [
                null != y
                    ? {
                          variant: "primary",
                          text: q.intl.string(q.t["+zx47e"]),
                          onClick: j,
                      }
                    : {
                          variant: "primary",
                          text: q.intl.string(q.t.i4jeWV),
                          onClick: f,
                      },
            ],
            preview: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: N.claimInstructionsCodeInputTitle,
                        children: q.intl.string(q.t.srzsU1),
                    }),
                    (0, r.jsx)(E, {
                        rewardCode: u,
                        questContent: i,
                        questId: n.id,
                        sourceQuestContent: d,
                        buttonColor: o.Tt.BRAND,
                    }),
                ],
            }),
            onClose: f,
            transitionState: C,
            children: (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: N.claimInstructionsText,
                children: g,
            }),
        }),
    });
}
function A(e) {
    let { quest: t, questContent: n, rewardCode: a, sourceQuestContent: i, onClaimInstructions: s } = e;
    return (0, r.jsxs)("div", {
        className: N.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: N.rewardTileContainer,
                children: (0, r.jsx)(b.Z, {
                    className: N.rewardTileAsset,
                    quest: t,
                    questContent: n,
                    location: T.dr.REWARD_CODE_MODAL,
                    sourceQuestContent: i,
                }),
            }),
            (0, r.jsxs)("div", {
                className: N.copyContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: N.heading,
                        children: q.intl.string(q.t["5j/Zys"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: q.intl.format(q.t.ESmp29, { onClaimInstructions: s }),
                    }),
                ],
            }),
            (0, r.jsx)(E, {
                className: N.mainCodeInput,
                rewardCode: a,
                questContent: n,
                questId: t.id,
                sourceQuestContent: i,
                buttonColor: o.Tt.PRIMARY,
            }),
        ],
    });
}
function R(e) {
    let { quest: t, onClose: n, transitionState: o, preview: s, sourceQuestContent: c, questContentPosition: f } = e,
        C = j.r.build(t.config),
        h = C.rewardPlatforms[0],
        _ = y.jn.REWARD_MODAL,
        {
            questStoreRewardCode: v,
            isFetchingRewardCode: b,
            isClaimingReward: T,
        } = (0, i.cj)([g.Z], () => ({
            questStoreRewardCode: g.Z.getRewardCode(t.id),
            isFetchingRewardCode: g.Z.isFetchingRewardCode(t.id),
            isClaimingReward: g.Z.isClaimingReward(t.id),
        })),
        q = !0 === s ? (0, m.b)(t) : v,
        { hasError: N, setHasError: E } = (0, w.uL)({
            isClaimingReward: T,
            isFetchingRewardCode: b,
            quest: t,
            questContent: _,
            requiresPlatformSelection: !1,
            rewardCode: q,
            selectedPlatformType: h,
            preview: s,
        });
    !(function (e) {
        let t = (0, u.Z)(e),
            n = p.default.useIsCaptchaModalOpen(),
            r = (0, d.Z)(n),
            i = !!(!n && r);
        a.useEffect(() => {
            i && t();
        }, [i, t]);
    })(() => {
        E(!0);
    });
    let R = null == q && (b || T),
        D = N && !T && !b;
    return R || D
        ? null
        : (0, r.jsx)(P.Z, {
              onClose: n,
              transitionState: o,
              quest: t,
              sourceQuestContent: c,
              rewardContent: (0, r.jsx)(O.Z, {
                  rewardName: C.defaultRewardName,
                  children: (0, r.jsx)(A, {
                      quest: t,
                      questContent: _,
                      rewardCode: q,
                      sourceQuestContent: c,
                      onClaimInstructions: () => {
                          (0, l.ZDy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, r.jsx)(x.A, {
                                          questOrQuests: t,
                                          questContent: _,
                                          sourceQuestContent: c,
                                          children: (n) => {
                                              var a, i;
                                              return (0, r.jsx)(
                                                  I,
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
                                                          questContent: _,
                                                          sourceQuestContent: c,
                                                          rewardCode: q,
                                                          rewardPlatform: h,
                                                          sharedQuestFields: C,
                                                          questContentPosition: f,
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
