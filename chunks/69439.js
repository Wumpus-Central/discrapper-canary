n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(159691),
    s = n(755721),
    l = n(481060),
    c = n(607070),
    u = n(823379),
    d = n(617136),
    f = n(509212),
    _ = n(113434),
    p = n(569984),
    h = n(497505),
    m = n(530691),
    g = n(110560),
    E = n(667105),
    b = n(46140),
    y = n(388032),
    O = n(179844);
let v = [
    {
        value: b.cd.DESKTOP,
        get label() {
            return y.intl.string(y.t.QXc019);
        },
    },
    {
        value: b.cd.CONSOLE,
        get label() {
            return y.intl.string(y.t["8lAfuL"]);
        },
    },
];
function I(e) {
    let t,
        n,
        { value: i } = e;
    switch (i) {
        case b.cd.DESKTOP:
            (n = (0, r.jsx)(l.pzj, {})), (t = y.intl.string(y.t.QXc019));
            break;
        case b.cd.CONSOLE:
            (n = (0, r.jsx)(l.iWm, {})), (t = y.intl.string(y.t["8lAfuL"]));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)("div", {
        className: O.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function T(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case b.cd.DESKTOP:
            return (0, r.jsxs)("span", {
                className: O.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(l.pzj, {}), y.intl.string(y.t["g6Dr4+"])],
            });
        case b.cd.CONSOLE:
            return (0, r.jsxs)("span", {
                className: O.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(l.iWm, {}), y.intl.string(y.t.iyNbj4)],
            });
        default:
            return (0, u.vE)(e[0].value);
    }
}
function S(e) {
    var t, n, S, A;
    let {
            quest: C,
            questContent: N,
            onReceiveErrorHints: R,
            contentPosition: P,
            rowIndex: w,
            sourceQuestContent: D,
        } = e,
        x = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        L = (0, E.g2)({ useReducedMotion: x }),
        j = (0, d.O5)(),
        M = (0, _._s)({ quest: C }),
        k = (0, _.z)(C),
        U = (0, _.B6)(C.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: G,
            isEnrolling: B,
            isQuestEnrollmentBlocked: Z,
        } = (0, a.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(C.id) || p.Z.isFetchingRewardCode(C.id),
            isEnrolling: p.Z.isEnrolling(C.id),
            isQuestEnrollmentBlocked: null != p.Z.questEnrollmentBlockedUntil,
        })),
        F = (null == (t = C.userStatus) ? void 0 : t.enrolledAt) != null,
        V = (null == (n = C.userStatus) ? void 0 : n.completedAt) != null,
        H = V && (null == (S = C.userStatus) ? void 0 : S.claimedAt) == null,
        Y = (0, f.iQ)(C),
        W = !(0, f.zi)(C),
        K = (0, _._Q)(C),
        z = (0, f.Xv)(C.config),
        q = (0, f.PB)(C),
        X = (0, f.HJ)(C),
        Q = (0, f.Vl)(C),
        J = (0, _.Rf)(C),
        [$, ee, et] = (0, _.me)(C, J),
        en = W && K === _.OH.ACCEPTED,
        er = en && $ === h.LI.SELECT,
        ei = en && !er && ee.length > 1,
        ea = i.useCallback(
            (e) => {
                et(e), e === b.cd.DESKTOP && R([]);
            },
            [et, R],
        ),
        { text: eo, onClick: es } = (0, E.Ks)({
            progressState: K,
            quest: C,
            questContent: N,
            isCollectibleQuest: z,
            questContentPosition: P,
            questContentRowIndex: w,
            inGiftInventory: !0,
            isVideoQuest: q,
            inGameQuest: Q,
            sourceQuestContent: D,
        }),
        { startingConsoleQuest: el, startConsoleQuest: ec } = (0, _.GI)({
            questId: C.id,
            beforeRequest: () => {
                L.startAnimation(),
                    j({
                        questId: C.id,
                        questContent: N,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: P,
                        questContentRowIndex: w,
                        sourceQuestContent: D,
                    });
            },
            afterRequest: (e) => {
                L.stopAnimation(), R(e);
            },
        }),
        eu = (0, m.f)({
            location: b.dr.QUEST_HOME_DESKTOP,
            questFeatures: C.config.features,
        }),
        ed = (null == (A = C.userStatus) ? void 0 : A.claimedAt) != null,
        ef = F && !ed,
        e_ = null;
    return (Y && H
        ? (e_ = (0, r.jsx)("div", {
              className: O.button,
              children: (0, r.jsx)(o.zxk, {
                  variant: "primary",
                  loading: G,
                  onClick: null != es ? es : void 0,
                  text: eo,
                  fullWidth: !0,
              }),
          }))
        : V
          ? (e_ = q
                ? (0, r.jsxs)(o.hE2, {
                      direction: "horizontal",
                      fullWidth: !0,
                      children: [
                          (0, r.jsx)(o.zxk, {
                              variant: "secondary",
                              icon: l.Oe7,
                              text: y.intl.string(y.t.YsCuyM),
                              onClick: () => {
                                  (0, g.openVideoQuestModal)({
                                      quest: C,
                                      questContent: N,
                                      sourceQuestContent: D,
                                      sourceQuestContentCTA: d.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(o.zxk, {
                              variant: "primary",
                              onClick: null != es ? es : void 0,
                              text: eo,
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: O.button,
                      children: (0, r.jsx)(o.zxk, {
                          variant: "primary",
                          onClick: null != es ? es : void 0,
                          text: eo,
                          fullWidth: !0,
                      }),
                  }))
          : W
            ? W && H
                ? (e_ = (0, r.jsx)("div", {
                      className: O.button,
                      children: (0, r.jsx)(o.zxk, {
                          variant: "primary",
                          loading: G,
                          onClick: null != es ? es : void 0,
                          text: eo,
                          fullWidth: !0,
                      }),
                  }))
                : X
                  ? (e_ = eu
                        ? (0, r.jsx)("div", {
                              className: O.button,
                              children: (0, r.jsx)(o.zxk, {
                                  variant: "primary",
                                  loading: B,
                                  onClick: null != es ? es : void 0,
                                  text: eo,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: O.button,
                              children: (0, r.jsx)(o.zxk, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: y.intl.string(y.t.BkZhUF),
                                  fullWidth: !0,
                              }),
                          }))
                  : W && ef
                    ? (e_ = er
                          ? (0, r.jsx)(l.PhF, {
                                className: O.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: v,
                                placeholder: y.intl.string(y.t.drVw4e),
                                renderOptionLabel: I,
                                renderOptionValue: T,
                                select: ea,
                                serialize: (e) => {
                                    switch (e) {
                                        case b.cd.DESKTOP:
                                            return y.intl.string(y.t.QXc019);
                                        case b.cd.CONSOLE:
                                            return y.intl.string(y.t["8lAfuL"]);
                                        default:
                                            return (0, u.vE)(e);
                                    }
                                },
                                size: "sm",
                            })
                          : (0, f.$J)(C) && !k && $ !== h.LI.DESKTOP
                            ? M
                                ? (0, r.jsx)("div", {
                                      className: O.button,
                                      children: (0, r.jsx)(o.zxk, {
                                          variant: "secondary",
                                          onClick: null != es ? es : void 0,
                                          text: eo,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, r.jsx)(s.zx, {
                                      "data-migration-pending": !0,
                                      color: s.Tt.PRIMARY,
                                      onClick: ec,
                                      disabled: el,
                                      className: O.button,
                                      children: (0, r.jsxs)("div", {
                                          className: O.ctaInner,
                                          children: [L.render(), y.intl.string(y.t.nPThNT)],
                                      }),
                                  })
                            : q || (Q && C.config.features.includes(b.S7.START_QUEST_CTA))
                              ? (0, r.jsx)("div", {
                                    className: O.button,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        onClick: null != es ? es : void 0,
                                        text: eo,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, r.jsx)("div", {
                                    className: O.button,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: y.intl.string(y.t["9KoPyM"]),
                                        fullWidth: !0,
                                    }),
                                }))
                    : W &&
                      !F &&
                      (e_ = Z
                          ? (0, r.jsxs)(o.hE2, {
                                direction: "horizontal",
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(o.zxk, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: y.intl.string(y.t.V293qq),
                                    }),
                                    (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        onClick: () => (0, g.openQuestMinorEnrollmentBlockModal)(C, N, D),
                                        text: y.intl.string(y.t.vY9GgI),
                                    }),
                                ],
                            })
                          : (0, r.jsx)("div", {
                                className: O.button,
                                children: (0, r.jsx)(o.zxk, {
                                    loading: B,
                                    variant: "primary",
                                    onClick: null != es ? es : void 0,
                                    text: eo,
                                    icon: C.config.features.includes(b.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : void 0,
                                    fullWidth: !0,
                                }),
                            }))
            : (e_ = (0, r.jsx)("div", {
                  className: O.button,
                  children: (0, r.jsx)(o.zxk, {
                      variant: "secondary",
                      disabled: !0,
                      text: y.intl.format(y.t["14o6QU"], { expiryDate: U }),
                      fullWidth: !0,
                  }),
              })),
    null == e_)
        ? null
        : (0, r.jsxs)("div", {
              className: O.container,
              children: [
                  (0, r.jsx)("div", {
                      className: O.ctaItem,
                      children: e_,
                  }),
                  ei &&
                      (0, r.jsx)("div", {
                          className: O.ctaItem,
                          children: (0, r.jsx)(l.PhF, {
                              className: O.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch ($) {
                                      case h.LI.DESKTOP:
                                          return e === b.cd.DESKTOP;
                                      case h.LI.CONSOLE:
                                          return e === b.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: v,
                              placeholder: y.intl.string(y.t.drVw4e),
                              renderOptionLabel: I,
                              renderOptionValue: T,
                              select: ea,
                              serialize: (e) => {
                                  switch (e) {
                                      case b.cd.DESKTOP:
                                          return y.intl.string(y.t.QXc019);
                                      case b.cd.CONSOLE:
                                          return y.intl.string(y.t["8lAfuL"]);
                                  }
                              },
                              size: "sm",
                          }),
                      }),
              ],
          });
}
