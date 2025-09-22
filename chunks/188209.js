n.d(t, { default: () => Z });
var r = n(951288),
    a = n(647438),
    i = n(442837),
    o = n(693789),
    s = n(82659),
    c = n(481060),
    l = n(484614),
    d = n(110924),
    u = n(448986),
    f = n(475271),
    p = n(63954),
    m = n(246946),
    h = n(572004),
    C = n(617136),
    v = n(509212),
    _ = n(569984),
    w = n(497505),
    g = n(804127),
    y = n(566078),
    j = n(602667),
    x = n(644646),
    b = n(515108),
    P = n(291967),
    O = n(46140),
    q = n(388032),
    T = n(238905);
function I(e) {
    var t;
    let {
            quest: n,
            questContent: a,
            sourceQuestContent: d,
            rewardCode: u,
            rewardPlatform: f,
            sharedQuestFields: p,
            onClose: _,
            transitionState: w,
            impressionRef: g,
        } = e,
        y = (0, i.e7)([m.Z], () => m.Z.hidePersonalInformation),
        j = (0, C.O5)();
    if (null == u) return null;
    let x =
        null !=
        (t = (0, v.C1)({
            quest: n,
            rewardCode: u,
            selectedPlatformType: f,
            sharedQuestFields: p,
        }))
            ? t
            : "";
    return (0, r.jsx)("div", {
        ref: (e) => {
            g.current = e;
        },
        children: (0, r.jsx)(s.Modal, {
            size: "md",
            title: q.intl.string(q.t.NkZ7OT),
            actions: [
                {
                    variant: "primary",
                    text: q.intl.string(q.t.i4jeWV),
                    onClick: _,
                },
            ],
            preview: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: T.claimInstructionsCodeInputTitle,
                        children: q.intl.string(q.t.srzsU1),
                    }),
                    (0, r.jsx)(l.Z, {
                        value: y ? q.intl.string(q.t["0n2u0t"]) : u.code,
                        delay: 1000,
                        buttonColor: o.Tt.BRAND,
                        onCopy: () => {
                            y && (0, h.JG)(u.code),
                                j({
                                    questId: n.id,
                                    questContent: a,
                                    questContentCTA: C.jZ.COPY_REWARD_CODE,
                                    sourceQuestContent: d,
                                });
                        },
                    }),
                ],
            }),
            onClose: _,
            transitionState: w,
            children: (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: T.claimInstructionsText,
                children: x,
            }),
        }),
    });
}
function N(e) {
    let { quest: t, questContent: n, sourceQuestContent: a, impressionRef: i, onClaimInstructions: o } = e;
    return (0, r.jsxs)("div", {
        className: T.contentContainer,
        ref: (e) => {
            i.current = e;
        },
        children: [
            (0, r.jsx)("div", {
                className: T.rewardTileContainer,
                children: (0, r.jsx)(x.Z, {
                    className: T.rewardTileAsset,
                    quest: t,
                    questContent: n,
                    location: O.dr.REWARD_CODE_MODAL,
                    sourceQuestContent: a,
                }),
            }),
            (0, r.jsxs)("div", {
                className: T.copyContainer,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: T.heading,
                        children: q.intl.string(q.t["5j/Zys"]),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        className: T.text,
                        children: q.intl.format(q.t.ESmp29, { onClaimInstructions: o }),
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: T.codeInputContainer }),
        ],
    });
}
function Z(e) {
    let { quest: t, onClose: n, transitionState: o, preview: s, sourceQuestContent: l } = e,
        m = y.r.build(t.config),
        h = m.rewardPlatforms[0],
        C = w.jn.REWARD_MODAL,
        {
            questStoreRewardCode: v,
            isFetchingRewardCode: x,
            isClaimingReward: O,
        } = (0, i.cj)([_.Z], () => ({
            questStoreRewardCode: _.Z.getRewardCode(t.id),
            isFetchingRewardCode: _.Z.isFetchingRewardCode(t.id),
            isClaimingReward: _.Z.isClaimingReward(t.id),
        })),
        q = !0 === s ? (0, p.b)(t) : v,
        { hasError: T, setHasError: Z } = (0, g.u)({
            isClaimingReward: O,
            isFetchingRewardCode: x,
            quest: t,
            questContent: C,
            requiresPlatformSelection: !1,
            rewardCode: q,
            selectedPlatformType: h,
            preview: s,
        });
    !(function (e) {
        let t = (0, u.Z)(e),
            n = f.default.useIsCaptchaModalOpen(),
            r = (0, d.Z)(n),
            i = !!(!n && r);
        a.useEffect(() => {
            i && t();
        }, [i, t]);
    })(() => {
        Z(!0);
    });
    let A = null == q && (x || O),
        E = T && !O && !x;
    return A || E
        ? null
        : (0, r.jsx)(j.A, {
              questOrQuests: t,
              questContent: C,
              sourceQuestContent: l,
              children: (e) =>
                  (0, r.jsx)(b.Z, {
                      onClose: n,
                      transitionState: o,
                      quest: t,
                      rewardContent: (0, r.jsx)(P.Z, {
                          rewardName: m.defaultRewardName,
                          children: (0, r.jsx)(N, {
                              quest: t,
                              questContent: C,
                              sourceQuestContent: l,
                              impressionRef: e,
                              onClaimInstructions: () => {
                                  (0, c.ZDy)(
                                      () =>
                                          Promise.resolve((e) =>
                                              (0, r.jsx)(j.A, {
                                                  questOrQuests: t,
                                                  questContent: C,
                                                  sourceQuestContent: l,
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
                                                                          Object.getOwnPropertySymbols(n).filter(
                                                                              function (e) {
                                                                                  return Object.getOwnPropertyDescriptor(
                                                                                      n,
                                                                                      e,
                                                                                  ).enumerable;
                                                                              },
                                                                          ),
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
                                                                  quest: t,
                                                                  questContent: C,
                                                                  sourceQuestContent: l,
                                                                  rewardCode: q,
                                                                  rewardPlatform: h,
                                                                  sharedQuestFields: m,
                                                                  impressionRef: n,
                                                              }),
                                                          Object.getOwnPropertyDescriptors
                                                              ? Object.defineProperties(
                                                                    a,
                                                                    Object.getOwnPropertyDescriptors(i),
                                                                )
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
                  }),
          });
}
