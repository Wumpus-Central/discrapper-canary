n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    s = n(473749),
    o = n(442837),
    a = n(159691),
    i = n(755721),
    l = n(481060),
    c = n(607070),
    d = n(823379),
    u = n(617136),
    p = n(313481),
    m = n(616022),
    g = n(49436),
    f = n(509212),
    h = n(373370),
    x = n(659302),
    _ = n(110560),
    b = n(324805),
    j = n(388032),
    v = n(924304);
let C = [
    {
        value: b.cd.DESKTOP,
        get label() {
            return j.intl.string(j.t["QXc01+"]);
        },
    },
    {
        value: b.cd.CONSOLE,
        get label() {
            return j.intl.string(j.t["8lAfuB"]);
        },
    },
];
function y(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case b.cd.DESKTOP:
            (n = (0, r.jsx)(l.pzj, {})), (t = j.intl.string(j.t["QXc01+"]));
            break;
        case b.cd.CONSOLE:
            (n = (0, r.jsx)(l.iWm, {})), (t = j.intl.string(j.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)("div", {
        className: v.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function E(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case b.cd.DESKTOP:
            return (0, r.jsxs)("span", {
                className: v.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(l.pzj, {}), j.intl.string(j.t.g6Dr44)],
            });
        case b.cd.CONSOLE:
            return (0, r.jsxs)("span", {
                className: v.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(l.iWm, {}), j.intl.string(j.t.iyNbj5)],
            });
        default:
            return (0, d.vE)(e[0].value);
    }
}
function O(e) {
    var t, n, O, S;
    let {
            quest: T,
            questContent: w,
            onReceiveErrorHints: P,
            contentPosition: N,
            rowIndex: A,
            sourceQuestContent: R,
        } = e,
        B = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        k = (0, x.g2)({ useReducedMotion: B }),
        I = (0, u.O5)(),
        D = (0, p._s)({ quest: T }),
        q = (0, p.z)(T),
        L = (0, p.B6)(T.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: Q,
            isEnrolling: V,
            isQuestEnrollmentBlocked: M,
        } = (0, o.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(T.id) || m.Z.isFetchingRewardCode(T.id),
            isEnrolling: m.Z.isEnrolling(T.id),
            isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil,
        })),
        Z = (null == (t = T.userStatus) ? void 0 : t.enrolledAt) != null,
        W = (null == (n = T.userStatus) ? void 0 : n.completedAt) != null,
        U = W && (null == (O = T.userStatus) ? void 0 : O.claimedAt) == null,
        H = (0, f.iQ)(T),
        F = !(0, f.zi)(T),
        z = (0, p._Q)(T),
        G = (0, f.Xv)(T.config),
        K = (0, f.PB)(T),
        X = (0, f.HJ)(T),
        Y = (0, f.Vl)(T),
        J = (0, p.Rf)(T),
        [$, ee, et] = (0, p.me)(T, J),
        en = F && z === p.OH.ACCEPTED,
        er = en && $ === g.LI.SELECT,
        es = en && !er && ee.length > 1,
        eo = s.useCallback(
            (e) => {
                et(e), e === b.cd.DESKTOP && P([]);
            },
            [et, P],
        ),
        { text: ea, onClick: ei } = (0, x.Ks)({
            progressState: z,
            quest: T,
            questContent: w,
            isCollectibleQuest: G,
            questContentPosition: N,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: K,
            inGameQuest: Y,
            sourceQuestContent: R,
        }),
        { startingConsoleQuest: el, startConsoleQuest: ec } = (0, p.GI)({
            questId: T.id,
            beforeRequest: () => {
                k.startAnimation(),
                    I({
                        questId: T.id,
                        questContent: w,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: N,
                        questContentRowIndex: A,
                        sourceQuestContent: R,
                    });
            },
            afterRequest: (e) => {
                k.stopAnimation(), P(e);
            },
        }),
        ed = s.useMemo(() => T.config.features.includes(b.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [T.config.features]),
        eu = (null == (S = T.userStatus) ? void 0 : S.claimedAt) != null,
        { launchInGameActivity: ep } = (0, p.zB)(T),
        em = (0, h.CR)({
            quest: T,
            shortText: !0,
        }),
        eg = null;
    return (H && U
        ? (eg = (0, r.jsx)("div", {
              className: v.button,
              children: (0, r.jsx)(a.zxk, {
                  variant: "primary",
                  loading: Q,
                  onClick: null != ei ? ei : void 0,
                  text: ea,
                  fullWidth: !0,
              }),
          }))
        : W
          ? (eg = K
                ? (0, r.jsxs)(a.hE2, {
                      direction: "horizontal",
                      fullWidth: !0,
                      children: [
                          (0, r.jsx)(a.zxk, {
                              variant: "secondary",
                              icon: l.Oe7,
                              text: j.intl.string(j.t.YsCuyF),
                              onClick: () => {
                                  (0, _.openVideoQuestModal)({
                                      quest: T,
                                      questContent: w,
                                      sourceQuestContent: R,
                                      sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(a.zxk, {
                              variant: "primary",
                              onClick: null != ei ? ei : void 0,
                              text: ea,
                          }),
                      ],
                  })
                : (0, f.Rt)(T)
                  ? (0, r.jsxs)(a.hE2, {
                        direction: "horizontal",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(a.zxk, {
                                variant: "secondary",
                                icon: T.config.features.includes(b.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : l.iWm,
                                text: em,
                                onClick: () => {
                                    ep();
                                },
                            }),
                            (0, r.jsx)(a.zxk, {
                                variant: "primary",
                                onClick: null != ei ? ei : void 0,
                                text: ea,
                            }),
                        ],
                    })
                  : (0, r.jsx)("div", {
                        className: v.button,
                        children: (0, r.jsx)(a.zxk, {
                            variant: "primary",
                            onClick: null != ei ? ei : void 0,
                            text: ea,
                            fullWidth: !0,
                        }),
                    }))
          : F
            ? F && U
                ? (eg = (0, r.jsx)("div", {
                      className: v.button,
                      children: (0, r.jsx)(a.zxk, {
                          variant: "primary",
                          loading: Q,
                          onClick: null != ei ? ei : void 0,
                          text: ea,
                          fullWidth: !0,
                      }),
                  }))
                : X
                  ? (eg = ed
                        ? (0, r.jsx)("div", {
                              className: v.button,
                              children: (0, r.jsx)(a.zxk, {
                                  variant: "primary",
                                  loading: V,
                                  onClick: null != ei ? ei : void 0,
                                  text: ea,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: v.button,
                              children: (0, r.jsx)(a.zxk, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: j.intl.string(j.t.BkZhUI),
                                  fullWidth: !0,
                              }),
                          }))
                  : F && Z && !eu
                    ? (eg = er
                          ? (0, r.jsx)(l.PhF, {
                                className: v.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: C,
                                placeholder: j.intl.string(j.t.drVw4T),
                                renderOptionLabel: y,
                                renderOptionValue: E,
                                select: eo,
                                serialize: (e) => {
                                    switch (e) {
                                        case b.cd.DESKTOP:
                                            return j.intl.string(j.t["QXc01+"]);
                                        case b.cd.CONSOLE:
                                            return j.intl.string(j.t["8lAfuB"]);
                                        default:
                                            return (0, d.vE)(e);
                                    }
                                },
                                size: "sm",
                            })
                          : (0, f.$J)(T) && !q && $ !== g.LI.DESKTOP
                            ? D
                                ? (0, r.jsx)("div", {
                                      className: v.button,
                                      children: (0, r.jsx)(a.zxk, {
                                          variant: "secondary",
                                          onClick: null != ei ? ei : void 0,
                                          text: ea,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, r.jsx)(i.zx, {
                                      "data-migration-pending": !0,
                                      color: i.Tt.PRIMARY,
                                      onClick: ec,
                                      disabled: el,
                                      className: v.button,
                                      children: (0, r.jsxs)("div", {
                                          className: v.ctaInner,
                                          children: [k.render(), j.intl.string(j.t.nPThNb)],
                                      }),
                                  })
                            : K
                              ? (0, r.jsx)("div", {
                                    className: v.button,
                                    children: (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: null != ei ? ei : void 0,
                                        text: ea,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, f.Rt)(T)
                                ? (0, r.jsx)("div", {
                                      className: v.button,
                                      children: (0, r.jsx)(a.zxk, {
                                          variant: "primary",
                                          icon: (0, _.getPrimaryCtaIcon)(T),
                                          onClick: null != ei ? ei : void 0,
                                          text: ea,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, r.jsx)("div", {
                                      className: v.button,
                                      children: (0, r.jsx)(a.zxk, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: j.intl.string(j.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : F &&
                      !Z &&
                      (eg = M
                          ? (0, r.jsxs)(a.hE2, {
                                direction: "horizontal",
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(a.zxk, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: j.intl.string(j.t.V293qn),
                                    }),
                                    (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: () => (0, _.openQuestMinorEnrollmentBlockModal)(T, w, R),
                                        text: j.intl.string(j.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, r.jsx)("div", {
                                className: v.button,
                                children: (0, r.jsx)(a.zxk, {
                                    loading: V,
                                    variant: "primary",
                                    onClick: null != ei ? ei : void 0,
                                    text: ea,
                                    icon: (0, _.getPrimaryCtaIcon)(T),
                                    fullWidth: !0,
                                }),
                            }))
            : (eg = (0, r.jsx)("div", {
                  className: v.button,
                  children: (0, r.jsx)(a.zxk, {
                      variant: "secondary",
                      disabled: !0,
                      text: j.intl.format(j.t["14o6QY"], { expiryDate: L }),
                      fullWidth: !0,
                  }),
              })),
    null == eg)
        ? null
        : (0, r.jsxs)("div", {
              className: v.container,
              children: [
                  (0, r.jsx)("div", {
                      className: v.ctaItem,
                      children: eg,
                  }),
                  es &&
                      (0, r.jsx)("div", {
                          className: v.ctaItem,
                          children: (0, r.jsx)(l.PhF, {
                              className: v.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch ($) {
                                      case g.LI.DESKTOP:
                                          return e === b.cd.DESKTOP;
                                      case g.LI.CONSOLE:
                                          return e === b.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: C,
                              placeholder: j.intl.string(j.t.drVw4T),
                              renderOptionLabel: y,
                              renderOptionValue: E,
                              select: eo,
                              serialize: (e) => {
                                  switch (e) {
                                      case b.cd.DESKTOP:
                                          return j.intl.string(j.t["QXc01+"]);
                                      case b.cd.CONSOLE:
                                          return j.intl.string(j.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                          }),
                      }),
              ],
          });
}
