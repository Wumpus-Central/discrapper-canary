n.d(t, { default: () => A });
var r = n(951288),
    a = n(647438),
    i = n(442837),
    o = n(693789),
    s = n(82659),
    l = n(481060),
    c = n(484614),
    u = n(110924),
    d = n(448986),
    f = n(475271),
    m = n(246946),
    p = n(572004),
    C = n(617136),
    h = n(509212),
    v = n(569984),
    j = n(497505),
    y = n(804127),
    x = n(566078),
    g = n(602667),
    b = n(652380),
    w = n(644646),
    _ = n(515108),
    O = n(291967),
    P = n(46140),
    q = n(388032),
    T = n(238905);
function N(e) {
    var t;
    let {
            quest: n,
            questContent: a,
            sourceQuestContent: u,
            rewardCode: d,
            rewardPlatform: f,
            sharedQuestFields: v,
            onClose: j,
            transitionState: y,
            impressionRef: x,
        } = e,
        g = (0, i.e7)([m.Z], () => m.Z.hidePersonalInformation),
        b = (0, C.O5)();
    if (null == d) return null;
    let w =
        null !=
        (t = (0, h.C1)({
            quest: n,
            rewardCode: d,
            selectedPlatformType: f,
            sharedQuestFields: v,
        }))
            ? t
            : "";
    return (0, r.jsx)("div", {
        ref: (e) => {
            x.current = e;
        },
        children: (0, r.jsx)(s.Modal, {
            size: "md",
            title: q.intl.string(q.t.NkZ7OT),
            actions: [
                {
                    variant: "primary",
                    text: q.intl.string(q.t.i4jeWV),
                    onClick: j,
                },
            ],
            preview: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: T.claimInstructionsCodeInputTitle,
                        children: q.intl.string(q.t.srzsU1),
                    }),
                    (0, r.jsx)(c.Z, {
                        value: g ? q.intl.string(q.t["0n2u0t"]) : d.code,
                        delay: 1000,
                        buttonColor: o.Tt.BRAND,
                        onCopy: () => {
                            g && (0, p.JG)(d.code),
                                b({
                                    questId: n.id,
                                    questContent: a,
                                    questContentCTA: C.jZ.COPY_REWARD_CODE,
                                    sourceQuestContent: u,
                                });
                        },
                    }),
                ],
            }),
            onClose: j,
            transitionState: y,
            children: (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: T.claimInstructionsText,
                children: w,
            }),
        }),
    });
}
function Z(e) {
    let { quest: t, questContent: n, sourceQuestContent: a, impressionRef: i, onClaimInstructions: o } = e;
    return (0, r.jsxs)("div", {
        className: T.contentContainer,
        ref: (e) => {
            i.current = e;
        },
        children: [
            (0, r.jsx)("div", {
                className: T.rewardTileContainer,
                children: (0, r.jsx)(w.Z, {
                    className: T.rewardTileAsset,
                    quest: t,
                    questContent: n,
                    location: P.dr.REWARD_CODE_MODAL,
                    sourceQuestContent: a,
                }),
            }),
            (0, r.jsxs)("div", {
                className: T.copyContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: T.heading,
                        children: q.intl.string(q.t["5j/Zys"]),
                    }),
                    (0, r.jsx)(l.Text, {
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
function A(e) {
    let { quest: t, onClose: n, transitionState: o, preview: s, sourceQuestContent: c } = e,
        m = x.r.build(t.config),
        p = m.rewardPlatforms[0],
        C = j.jn.REWARD_MODAL,
        {
            questStoreRewardCode: h,
            isFetchingRewardCode: w,
            isClaimingReward: P,
        } = (0, i.cj)([v.Z], () => ({
            questStoreRewardCode: v.Z.getRewardCode(t.id),
            isFetchingRewardCode: v.Z.isFetchingRewardCode(t.id),
            isClaimingReward: v.Z.isClaimingReward(t.id),
        })),
        q = !0 === s ? (0, b.b)(t) : h,
        { hasError: T, setHasError: A } = (0, y.u)({
            isClaimingReward: P,
            isFetchingRewardCode: w,
            quest: t,
            questContent: C,
            requiresPlatformSelection: !1,
            rewardCode: q,
            selectedPlatformType: p,
            preview: s,
        });
    !(function (e) {
        let t = (0, d.Z)(e),
            n = f.default.useIsCaptchaModalOpen(),
            r = (0, u.Z)(n),
            i = !!(!n && r);
        a.useEffect(() => {
            i && t();
        }, [i, t]);
    })(() => {
        A(!0);
    });
    let E = null == q && (w || P),
        I = T && !P && !w;
    return E || I
        ? null
        : (0, r.jsx)(g.A, {
              questOrQuests: t,
              questContent: C,
              sourceQuestContent: c,
              children: (e) =>
                  (0, r.jsx)(_.Z, {
                      onClose: n,
                      transitionState: o,
                      quest: t,
                      rewardContent: (0, r.jsx)(O.Z, {
                          rewardName: m.defaultRewardName,
                          children: (0, r.jsx)(Z, {
                              quest: t,
                              questContent: C,
                              sourceQuestContent: c,
                              impressionRef: e,
                              onClaimInstructions: () => {
                                  (0, l.ZDy)(
                                      () =>
                                          Promise.resolve((e) =>
                                              (0, r.jsx)(g.A, {
                                                  questOrQuests: t,
                                                  questContent: C,
                                                  sourceQuestContent: c,
                                                  children: (n) => {
                                                      var a, i;
                                                      return (0, r.jsx)(
                                                          N,
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
                                                                  sourceQuestContent: c,
                                                                  rewardCode: q,
                                                                  rewardPlatform: p,
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
