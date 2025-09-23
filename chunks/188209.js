n.d(t, { default: () => E });
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
    w = n(644646),
    b = n(515108),
    x = n(291967),
    P = n(46140),
    O = n(388032),
    T = n(644647);
function N(e) {
    var t;
    let {
            quest: n,
            questContent: a,
            sourceQuestContent: d,
            rewardCode: u,
            rewardPlatform: p,
            sharedQuestFields: f,
            onClose: g,
            transitionState: v,
        } = e,
        y = (0, i.e7)([m.Z], () => m.Z.hidePersonalInformation),
        j = (0, h.O5)();
    if (null == u) return null;
    let w =
        null !=
        (t = (0, _.C1)({
            quest: n,
            rewardCode: u,
            selectedPlatformType: p,
            sharedQuestFields: f,
        }))
            ? t
            : "";
    return (0, r.jsx)(s.Modal, {
        size: "md",
        title: O.intl.string(O.t.NkZ7OT),
        actions: [
            {
                variant: "primary",
                text: O.intl.string(O.t.i4jeWV),
                onClick: g,
            },
        ],
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "eyebrow",
                    color: "interactive-normal",
                    className: T.claimInstructionsCodeInputTitle,
                    children: O.intl.string(O.t.srzsU1),
                }),
                (0, r.jsx)(c.Z, {
                    value: y ? O.intl.string(O.t["0n2u0t"]) : u.code,
                    delay: 1000,
                    buttonColor: o.Tt.BRAND,
                    onCopy: () => {
                        y && (0, C.JG)(u.code),
                            j({
                                questId: n.id,
                                questContent: a,
                                questContentCTA: h.jZ.COPY_REWARD_CODE,
                                sourceQuestContent: d,
                            });
                    },
                }),
            ],
        }),
        onClose: g,
        transitionState: v,
        children: (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            className: T.claimInstructionsText,
            children: w,
        }),
    });
}
function q(e) {
    let { quest: t, questContent: n, sourceQuestContent: a, onClaimInstructions: i } = e;
    return (0, r.jsxs)("div", {
        className: T.contentContainer,
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
                        children: O.intl.string(O.t["5j/Zys"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: O.intl.format(O.t.ESmp29, { onClaimInstructions: i }),
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: T.codeInputContainer }),
        ],
    });
}
function E(e) {
    let { quest: t, onClose: n, transitionState: o, preview: s, sourceQuestContent: c } = e,
        m = j.r.build(t.config),
        C = m.rewardPlatforms[0],
        h = v.jn.REWARD_MODAL,
        {
            questStoreRewardCode: _,
            isFetchingRewardCode: w,
            isClaimingReward: P,
        } = (0, i.cj)([g.Z], () => ({
            questStoreRewardCode: g.Z.getRewardCode(t.id),
            isFetchingRewardCode: g.Z.isFetchingRewardCode(t.id),
            isClaimingReward: g.Z.isClaimingReward(t.id),
        })),
        O = !0 === s ? (0, f.b)(t) : _,
        { hasError: T, setHasError: E } = (0, y.u)({
            isClaimingReward: P,
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
        E(!0);
    });
    let A = null == O && (w || P),
        I = T && !P && !w;
    return A || I
        ? null
        : (0, r.jsx)(b.Z, {
              onClose: n,
              transitionState: o,
              quest: t,
              sourceQuestContent: c,
              rewardContent: (0, r.jsx)(x.Z, {
                  rewardName: m.defaultRewardName,
                  children: (0, r.jsx)(q, {
                      quest: t,
                      questContent: h,
                      sourceQuestContent: c,
                      onClaimInstructions: () => {
                          (0, l.ZDy)(
                              () =>
                                  Promise.resolve((e) => {
                                      var n, a;
                                      return (0, r.jsx)(
                                          N,
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
