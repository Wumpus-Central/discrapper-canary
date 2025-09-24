n.d(t, { default: () => I });
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
    f = n(63954),
    m = n(246946),
    C = n(572004),
    h = n(617136),
    _ = n(509212),
    g = n(569984),
    v = n(497505),
    y = n(804127),
    j = n(566078),
    w = n(602667),
    b = n(644646),
    x = n(515108),
    P = n(291967),
    O = n(46140),
    T = n(388032),
    q = n(238905);
function N(e) {
    let { rewardCode: t, questContent: n, questId: a, sourceQuestContent: o, buttonColor: s, className: l } = e,
        d = (0, i.e7)([m.Z], () => m.Z.hidePersonalInformation),
        u = (0, h.O5)();
    return null == t
        ? null
        : (0, r.jsx)(c.Z, {
              className: l,
              value: d ? T.intl.string(T.t["0n2u0t"]) : t.code,
              buttonColor: s,
              onCopy: () => {
                  d && (0, C.JG)(t.code),
                      u({
                          questId: a,
                          questContent: n,
                          questContentCTA: h.jZ.COPY_REWARD_CODE,
                          sourceQuestContent: o,
                      });
              },
          });
}
function A(e) {
    var t;
    let {
            quest: n,
            questContent: a,
            sourceQuestContent: i,
            rewardCode: c,
            rewardPlatform: d,
            sharedQuestFields: u,
            onClose: p,
            transitionState: f,
        } = e,
        m =
            null !=
            (t = (0, _.C1)({
                quest: n,
                rewardCode: c,
                selectedPlatformType: d,
                sharedQuestFields: u,
            }))
                ? t
                : "";
    return (0, r.jsx)(w.A, {
        questOrQuests: n,
        questContent: a,
        sourceQuestContent: i,
        children: (e) =>
            (0, r.jsx)("div", {
                ref: e,
                children: (0, r.jsx)(s.Modal, {
                    size: "md",
                    title: T.intl.string(T.t.NkZ7OT),
                    actions: [
                        {
                            variant: "primary",
                            text: T.intl.string(T.t.i4jeWV),
                            onClick: p,
                        },
                    ],
                    preview: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: "eyebrow",
                                color: "interactive-normal",
                                className: q.claimInstructionsCodeInputTitle,
                                children: T.intl.string(T.t.srzsU1),
                            }),
                            (0, r.jsx)(N, {
                                rewardCode: c,
                                questContent: a,
                                questId: n.id,
                                sourceQuestContent: i,
                                buttonColor: o.Tt.BRAND,
                            }),
                        ],
                    }),
                    onClose: p,
                    transitionState: f,
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: q.claimInstructionsText,
                        children: m,
                    }),
                }),
            }),
    });
}
function E(e) {
    let { quest: t, questContent: n, rewardCode: a, sourceQuestContent: i, onClaimInstructions: s } = e;
    return (0, r.jsxs)("div", {
        className: q.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: q.rewardTileContainer,
                children: (0, r.jsx)(b.Z, {
                    className: q.rewardTileAsset,
                    quest: t,
                    questContent: n,
                    location: O.dr.REWARD_CODE_MODAL,
                    sourceQuestContent: i,
                }),
            }),
            (0, r.jsxs)("div", {
                className: q.copyContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: q.heading,
                        children: T.intl.string(T.t["5j/Zys"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: T.intl.format(T.t.ESmp29, { onClaimInstructions: s }),
                    }),
                ],
            }),
            (0, r.jsx)(N, {
                className: q.mainCodeInput,
                rewardCode: a,
                questContent: n,
                questId: t.id,
                sourceQuestContent: i,
                buttonColor: o.Tt.PRIMARY,
            }),
        ],
    });
}
function I(e) {
    let { quest: t, onClose: n, transitionState: o, preview: s, sourceQuestContent: c } = e,
        m = j.r.build(t.config),
        C = m.rewardPlatforms[0],
        h = v.jn.REWARD_MODAL,
        {
            questStoreRewardCode: _,
            isFetchingRewardCode: w,
            isClaimingReward: b,
        } = (0, i.cj)([g.Z], () => ({
            questStoreRewardCode: g.Z.getRewardCode(t.id),
            isFetchingRewardCode: g.Z.isFetchingRewardCode(t.id),
            isClaimingReward: g.Z.isClaimingReward(t.id),
        })),
        O = !0 === s ? (0, f.b)(t) : _,
        { hasError: T, setHasError: q } = (0, y.u)({
            isClaimingReward: b,
            isFetchingRewardCode: w,
            quest: t,
            questContent: h,
            requiresPlatformSelection: !1,
            rewardCode: O,
            selectedPlatformType: C,
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
        q(!0);
    });
    let N = null == O && (w || b),
        I = T && !b && !w;
    return N || I
        ? null
        : (0, r.jsx)(x.Z, {
              onClose: n,
              transitionState: o,
              quest: t,
              sourceQuestContent: c,
              rewardContent: (0, r.jsx)(P.Z, {
                  rewardName: m.defaultRewardName,
                  children: (0, r.jsx)(E, {
                      quest: t,
                      questContent: h,
                      rewardCode: O,
                      sourceQuestContent: c,
                      onClaimInstructions: () => {
                          (0, l.ZDy)(
                              () =>
                                  Promise.resolve((e) => {
                                      var n, a;
                                      return (0, r.jsx)(
                                          A,
                                          ((n = (function (e) {
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
                                          })({}, e)),
                                          (a = a =
                                              {
                                                  quest: t,
                                                  questContent: h,
                                                  sourceQuestContent: c,
                                                  rewardCode: O,
                                                  rewardPlatform: C,
                                                  sharedQuestFields: m,
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
                                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                                                }),
                                          n),
                                      );
                                  }),
                              { stackingBehavior: "replace" },
                          );
                      },
                  }),
              }),
          });
}
