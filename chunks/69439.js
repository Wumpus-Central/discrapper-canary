n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    s = n(647438),
    a = n(442837),
    o = n(159691),
    i = n(755721),
    l = n(481060),
    c = n(607070),
    d = n(823379),
    u = n(617136),
    p = n(509212),
    m = n(113434),
    g = n(569984),
    f = n(497505),
    h = n(373370),
    x = n(110560),
    _ = n(667105),
    b = n(46140),
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
            rowIndex: R,
            sourceQuestContent: A,
        } = e,
        B = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        k = (0, _.g2)({ useReducedMotion: B }),
        I = (0, u.O5)(),
        D = (0, m._s)({ quest: T }),
        q = (0, m.z)(T),
        L = (0, m.B6)(T.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: Q,
            isEnrolling: V,
            isQuestEnrollmentBlocked: M,
        } = (0, a.cj)([g.Z], () => ({
            isClaiming: g.Z.isClaimingReward(T.id) || g.Z.isFetchingRewardCode(T.id),
            isEnrolling: g.Z.isEnrolling(T.id),
            isQuestEnrollmentBlocked: null != g.Z.questEnrollmentBlockedUntil,
        })),
        Z = (null == (t = T.userStatus) ? void 0 : t.enrolledAt) != null,
        W = (null == (n = T.userStatus) ? void 0 : n.completedAt) != null,
        H = W && (null == (O = T.userStatus) ? void 0 : O.claimedAt) == null,
        U = (0, p.iQ)(T),
        F = !(0, p.zi)(T),
        z = (0, m._Q)(T),
        K = (0, p.Xv)(T.config),
        G = (0, p.PB)(T),
        X = (0, p.HJ)(T),
        Y = (0, p.Vl)(T),
        J = (0, m.Rf)(T),
        [$, ee, et] = (0, m.me)(T, J),
        en = F && z === m.OH.ACCEPTED,
        er = en && $ === f.LI.SELECT,
        es = en && !er && ee.length > 1,
        ea = s.useCallback(
            (e) => {
                et(e), e === b.cd.DESKTOP && P([]);
            },
            [et, P],
        ),
        { text: eo, onClick: ei } = (0, _.Ks)({
            progressState: z,
            quest: T,
            questContent: w,
            isCollectibleQuest: K,
            questContentPosition: N,
            questContentRowIndex: R,
            inGiftInventory: !0,
            isVideoQuest: G,
            inGameQuest: Y,
            sourceQuestContent: A,
        }),
        { startingConsoleQuest: el, startConsoleQuest: ec } = (0, m.GI)({
            questId: T.id,
            beforeRequest: () => {
                k.startAnimation(),
                    I({
                        questId: T.id,
                        questContent: w,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: N,
                        questContentRowIndex: R,
                        sourceQuestContent: A,
                    });
            },
            afterRequest: (e) => {
                k.stopAnimation(), P(e);
            },
        }),
        ed = s.useMemo(() => T.config.features.includes(b.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [T.config.features]),
        eu = (null == (S = T.userStatus) ? void 0 : S.claimedAt) != null,
        { launchInGameActivity: ep } = (0, m.zB)(T),
        em = (0, h.CR)({
            quest: T,
            shortText: !0,
        }),
        eg = null;
    return (U && H
        ? (eg = (0, r.jsx)("div", {
              className: v.button,
              children: (0, r.jsx)(o.zxk, {
                  variant: "primary",
                  loading: Q,
                  onClick: null != ei ? ei : void 0,
                  text: eo,
                  fullWidth: !0,
              }),
          }))
        : W
          ? (eg = G
                ? (0, r.jsxs)(o.hE2, {
                      direction: "horizontal",
                      fullWidth: !0,
                      children: [
                          (0, r.jsx)(o.zxk, {
                              variant: "secondary",
                              icon: l.Oe7,
                              text: j.intl.string(j.t.YsCuyF),
                              onClick: () => {
                                  (0, x.openVideoQuestModal)({
                                      quest: T,
                                      questContent: w,
                                      sourceQuestContent: A,
                                      sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(o.zxk, {
                              variant: "primary",
                              onClick: null != ei ? ei : void 0,
                              text: eo,
                          }),
                      ],
                  })
                : (0, p.Rt)(T)
                  ? (0, r.jsxs)(o.hE2, {
                        direction: "horizontal",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(o.zxk, {
                                variant: "secondary",
                                icon: T.config.features.includes(b.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : l.iWm,
                                text: em,
                                onClick: () => {
                                    ep();
                                },
                            }),
                            (0, r.jsx)(o.zxk, {
                                variant: "primary",
                                onClick: null != ei ? ei : void 0,
                                text: eo,
                            }),
                        ],
                    })
                  : (0, r.jsx)("div", {
                        className: v.button,
                        children: (0, r.jsx)(o.zxk, {
                            variant: "primary",
                            onClick: null != ei ? ei : void 0,
                            text: eo,
                            fullWidth: !0,
                        }),
                    }))
          : F
            ? F && H
                ? (eg = (0, r.jsx)("div", {
                      className: v.button,
                      children: (0, r.jsx)(o.zxk, {
                          variant: "primary",
                          loading: Q,
                          onClick: null != ei ? ei : void 0,
                          text: eo,
                          fullWidth: !0,
                      }),
                  }))
                : X
                  ? (eg = ed
                        ? (0, r.jsx)("div", {
                              className: v.button,
                              children: (0, r.jsx)(o.zxk, {
                                  variant: "primary",
                                  loading: V,
                                  onClick: null != ei ? ei : void 0,
                                  text: eo,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: v.button,
                              children: (0, r.jsx)(o.zxk, {
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
                                select: ea,
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
                          : (0, p.$J)(T) && !q && $ !== f.LI.DESKTOP
                            ? D
                                ? (0, r.jsx)("div", {
                                      className: v.button,
                                      children: (0, r.jsx)(o.zxk, {
                                          variant: "secondary",
                                          onClick: null != ei ? ei : void 0,
                                          text: eo,
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
                            : G
                              ? (0, r.jsx)("div", {
                                    className: v.button,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        onClick: null != ei ? ei : void 0,
                                        text: eo,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, p.Rt)(T)
                                ? (0, r.jsx)("div", {
                                      className: v.button,
                                      children: (0, r.jsx)(o.zxk, {
                                          variant: "primary",
                                          icon: (0, x.getPrimaryCtaIcon)(T),
                                          onClick: null != ei ? ei : void 0,
                                          text: eo,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, r.jsx)("div", {
                                      className: v.button,
                                      children: (0, r.jsx)(o.zxk, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: j.intl.string(j.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : F &&
                      !Z &&
                      (eg = M
                          ? (0, r.jsxs)(o.hE2, {
                                direction: "horizontal",
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(o.zxk, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: j.intl.string(j.t.V293qn),
                                    }),
                                    (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        onClick: () => (0, x.openQuestMinorEnrollmentBlockModal)(T, w, A),
                                        text: j.intl.string(j.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, r.jsx)("div", {
                                className: v.button,
                                children: (0, r.jsx)(o.zxk, {
                                    loading: V,
                                    variant: "primary",
                                    onClick: null != ei ? ei : void 0,
                                    text: eo,
                                    icon: (0, x.getPrimaryCtaIcon)(T),
                                    fullWidth: !0,
                                }),
                            }))
            : (eg = (0, r.jsx)("div", {
                  className: v.button,
                  children: (0, r.jsx)(o.zxk, {
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
                                      case f.LI.DESKTOP:
                                          return e === b.cd.DESKTOP;
                                      case f.LI.CONSOLE:
                                          return e === b.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: C,
                              placeholder: j.intl.string(j.t.drVw4T),
                              renderOptionLabel: y,
                              renderOptionValue: E,
                              select: ea,
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
