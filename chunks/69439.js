n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    s = n(647438),
    o = n(442837),
    a = n(159691),
    i = n(755721),
    l = n(481060),
    c = n(607070),
    d = n(823379),
    u = n(617136),
    p = n(509212),
    m = n(113434),
    g = n(569984),
    f = n(497505),
    h = n(530691),
    x = n(110560),
    _ = n(667105),
    b = n(46140),
    j = n(388032),
    v = n(179844);
let C = [
    {
        value: b.cd.DESKTOP,
        get label() {
            return j.intl.string(j.t.QXc019);
        },
    },
    {
        value: b.cd.CONSOLE,
        get label() {
            return j.intl.string(j.t["8lAfuL"]);
        },
    },
];
function y(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case b.cd.DESKTOP:
            (n = (0, r.jsx)(l.pzj, {})), (t = j.intl.string(j.t.QXc019));
            break;
        case b.cd.CONSOLE:
            (n = (0, r.jsx)(l.iWm, {})), (t = j.intl.string(j.t["8lAfuL"]));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)("div", {
        className: v.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function O(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case b.cd.DESKTOP:
            return (0, r.jsxs)("span", {
                className: v.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(l.pzj, {}), j.intl.string(j.t["g6Dr4+"])],
            });
        case b.cd.CONSOLE:
            return (0, r.jsxs)("span", {
                className: v.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(l.iWm, {}), j.intl.string(j.t.iyNbj4)],
            });
        default:
            return (0, d.vE)(e[0].value);
    }
}
function E(e) {
    var t, n, E, S;
    let {
            quest: T,
            questContent: w,
            onReceiveErrorHints: P,
            contentPosition: N,
            rowIndex: A,
            sourceQuestContent: R,
        } = e,
        B = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        k = (0, _.g2)({ useReducedMotion: B }),
        I = (0, u.O5)(),
        q = (0, m._s)({ quest: T }),
        D = (0, m.z)(T),
        L = (0, m.B6)(T.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: V,
            isEnrolling: Q,
            isQuestEnrollmentBlocked: M,
        } = (0, o.cj)([g.Z], () => ({
            isClaiming: g.Z.isClaimingReward(T.id) || g.Z.isFetchingRewardCode(T.id),
            isEnrolling: g.Z.isEnrolling(T.id),
            isQuestEnrollmentBlocked: null != g.Z.questEnrollmentBlockedUntil,
        })),
        W = (null == (t = T.userStatus) ? void 0 : t.enrolledAt) != null,
        Z = (null == (n = T.userStatus) ? void 0 : n.completedAt) != null,
        U = Z && (null == (E = T.userStatus) ? void 0 : E.claimedAt) == null,
        H = (0, p.iQ)(T),
        F = !(0, p.zi)(T),
        X = (0, m._Q)(T),
        z = (0, p.Xv)(T.config),
        G = (0, p.PB)(T),
        K = (0, p.HJ)(T),
        Y = (0, p.Vl)(T),
        J = (0, m.Rf)(T),
        [$, ee, et] = (0, m.me)(T, J),
        en = F && X === m.OH.ACCEPTED,
        er = en && $ === f.LI.SELECT,
        es = en && !er && ee.length > 1,
        eo = s.useCallback(
            (e) => {
                et(e), e === b.cd.DESKTOP && P([]);
            },
            [et, P],
        ),
        { text: ea, onClick: ei } = (0, _.Ks)({
            progressState: X,
            quest: T,
            questContent: w,
            isCollectibleQuest: z,
            questContentPosition: N,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: G,
            inGameQuest: Y,
            sourceQuestContent: R,
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
                        questContentRowIndex: A,
                        sourceQuestContent: R,
                    });
            },
            afterRequest: (e) => {
                k.stopAnimation(), P(e);
            },
        }),
        ed = (0, h.f)({
            location: b.dr.QUEST_HOME_DESKTOP,
            questFeatures: T.config.features,
        }),
        eu = (null == (S = T.userStatus) ? void 0 : S.claimedAt) != null,
        ep = null;
    return (H && U
        ? (ep = (0, r.jsx)("div", {
              className: v.button,
              children: (0, r.jsx)(a.zxk, {
                  variant: "primary",
                  loading: V,
                  onClick: null != ei ? ei : void 0,
                  text: ea,
                  fullWidth: !0,
              }),
          }))
        : Z
          ? (ep = G
                ? (0, r.jsxs)(a.hE2, {
                      direction: "horizontal",
                      fullWidth: !0,
                      children: [
                          (0, r.jsx)(a.zxk, {
                              variant: "secondary",
                              icon: l.Oe7,
                              text: j.intl.string(j.t.YsCuyM),
                              onClick: () => {
                                  (0, x.openVideoQuestModal)({
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
                ? (ep = (0, r.jsx)("div", {
                      className: v.button,
                      children: (0, r.jsx)(a.zxk, {
                          variant: "primary",
                          loading: V,
                          onClick: null != ei ? ei : void 0,
                          text: ea,
                          fullWidth: !0,
                      }),
                  }))
                : K
                  ? (ep = ed
                        ? (0, r.jsx)("div", {
                              className: v.button,
                              children: (0, r.jsx)(a.zxk, {
                                  variant: "primary",
                                  loading: Q,
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
                                  text: j.intl.string(j.t.BkZhUF),
                                  fullWidth: !0,
                              }),
                          }))
                  : F && W && !eu
                    ? (ep = er
                          ? (0, r.jsx)(l.PhF, {
                                className: v.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: C,
                                placeholder: j.intl.string(j.t.drVw4e),
                                renderOptionLabel: y,
                                renderOptionValue: O,
                                select: eo,
                                serialize: (e) => {
                                    switch (e) {
                                        case b.cd.DESKTOP:
                                            return j.intl.string(j.t.QXc019);
                                        case b.cd.CONSOLE:
                                            return j.intl.string(j.t["8lAfuL"]);
                                        default:
                                            return (0, d.vE)(e);
                                    }
                                },
                                size: "sm",
                            })
                          : (0, p.$J)(T) && !D && $ !== f.LI.DESKTOP
                            ? q
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
                                          children: [k.render(), j.intl.string(j.t.nPThNT)],
                                      }),
                                  })
                            : G
                              ? (0, r.jsx)("div", {
                                    className: v.button,
                                    children: (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: null != ei ? ei : void 0,
                                        text: ea,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, p.Rt)(T)
                                ? (0, r.jsx)("div", {
                                      className: v.button,
                                      children: (0, r.jsx)(a.zxk, {
                                          variant: "primary",
                                          icon: T.config.features.includes(b.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : void 0,
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
                                          text: j.intl.string(j.t["9KoPyM"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : F &&
                      !W &&
                      (ep = M
                          ? (0, r.jsxs)(a.hE2, {
                                direction: "horizontal",
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(a.zxk, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: j.intl.string(j.t.V293qq),
                                    }),
                                    (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: () => (0, x.openQuestMinorEnrollmentBlockModal)(T, w, R),
                                        text: j.intl.string(j.t.vY9GgI),
                                    }),
                                ],
                            })
                          : (0, r.jsx)("div", {
                                className: v.button,
                                children: (0, r.jsx)(a.zxk, {
                                    loading: Q,
                                    variant: "primary",
                                    onClick: null != ei ? ei : void 0,
                                    text: ea,
                                    icon: T.config.features.includes(b.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : void 0,
                                    fullWidth: !0,
                                }),
                            }))
            : (ep = (0, r.jsx)("div", {
                  className: v.button,
                  children: (0, r.jsx)(a.zxk, {
                      variant: "secondary",
                      disabled: !0,
                      text: j.intl.format(j.t["14o6QU"], { expiryDate: L }),
                      fullWidth: !0,
                  }),
              })),
    null == ep)
        ? null
        : (0, r.jsxs)("div", {
              className: v.container,
              children: [
                  (0, r.jsx)("div", {
                      className: v.ctaItem,
                      children: ep,
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
                              placeholder: j.intl.string(j.t.drVw4e),
                              renderOptionLabel: y,
                              renderOptionValue: O,
                              select: eo,
                              serialize: (e) => {
                                  switch (e) {
                                      case b.cd.DESKTOP:
                                          return j.intl.string(j.t.QXc019);
                                      case b.cd.CONSOLE:
                                          return j.intl.string(j.t["8lAfuL"]);
                                  }
                              },
                              size: "sm",
                          }),
                      }),
              ],
          });
}
