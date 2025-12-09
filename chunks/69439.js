n.d(t, { Z: () => N }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(199849),
    s = n(159691),
    o = n(755721),
    c = n(481060),
    d = n(607070),
    u = n(823379),
    m = n(617136),
    p = n(616022),
    h = n(49436),
    x = n(373370),
    f = n(968843),
    g = n(862657),
    b = n(254579),
    v = n(283689),
    j = n(659302),
    _ = n(110560),
    y = n(324805),
    C = n(388032),
    S = n(924304);
let E = [
    {
        value: y.cd.DESKTOP,
        get label() {
            return C.intl.string(C.t["QXc01+"]);
        },
    },
    {
        value: y.cd.CONSOLE,
        get label() {
            return C.intl.string(C.t["8lAfuB"]);
        },
    },
];
function O(e) {
    let t,
        n,
        { value: r } = e;
    switch (r) {
        case y.cd.DESKTOP:
            (n = (0, a.jsx)(c.pzj, {})), (t = C.intl.string(C.t["QXc01+"]));
            break;
        case y.cd.CONSOLE:
            (n = (0, a.jsx)(c.iWm, {})), (t = C.intl.string(C.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, a.jsxs)("div", {
        className: S.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function T(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case y.cd.DESKTOP:
            return (0, a.jsxs)("span", {
                className: S.platformSelectorPrimaryLabel,
                children: [(0, a.jsx)(c.pzj, {}), C.intl.string(C.t.g6Dr44)],
            });
        case y.cd.CONSOLE:
            return (0, a.jsxs)("span", {
                className: S.platformSelectorPrimaryLabel,
                children: [(0, a.jsx)(c.iWm, {}), C.intl.string(C.t.iyNbj5)],
            });
        default:
            return (0, u.vE)(e[0].value);
    }
}
function N(e) {
    var t, n, N, P;
    let {
            quest: w,
            questContent: I,
            onReceiveErrorHints: k,
            contentPosition: R,
            rowIndex: A,
            sourceQuestContent: D,
        } = e,
        Z = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        L = (0, j.g2)({ useReducedMotion: Z }),
        M = (0, m.O5)(),
        U = (0, f._s)({ quest: w }),
        B = (0, f.z)(w),
        F = (0, f.B6)(w.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: G,
            isEnrolling: V,
            isQuestEnrollmentBlocked: H,
        } = (0, i.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(w.id) || p.Z.isFetchingRewardCode(w.id),
            isEnrolling: p.Z.isEnrolling(w.id),
            isQuestEnrollmentBlocked: null != p.Z.questEnrollmentBlockedUntil,
        })),
        W = (null == (t = w.userStatus) ? void 0 : t.enrolledAt) != null,
        z = (null == (n = w.userStatus) ? void 0 : n.completedAt) != null,
        K = z && (null == (N = w.userStatus) ? void 0 : N.claimedAt) == null,
        q = (0, g.iQ)(w),
        Q = !(0, g.zi)(w),
        Y = (0, f._Q)(w),
        X = (0, b.PB)(w),
        J = (0, b.HJ)(w),
        $ = (0, b.Vl)(w),
        ee = (0, f.Rf)(w),
        [et, en, ea] = (0, f.me)(w, ee),
        er = Q && Y === f.OH.ACCEPTED,
        ei = er && et === h.LI.SELECT,
        el = er && !ei && en.length > 1,
        es = r.useCallback(
            (e) => {
                ea(e), e === y.cd.DESKTOP && k([]);
            },
            [ea, k],
        ),
        { text: eo, onClick: ec } = (0, j.Ks)({
            progressState: Y,
            quest: w,
            questContent: I,
            questContentPosition: R,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: X,
            inGameQuest: $,
            sourceQuestContent: D,
        }),
        { startingConsoleQuest: ed, startConsoleQuest: eu } = (0, f.GI)({
            questId: w.id,
            beforeRequest: () => {
                L.startAnimation(),
                    M({
                        questId: w.id,
                        questContent: I,
                        questContentCTA: m.jZ.DEFIBRILLATOR,
                        questContentPosition: R,
                        questContentRowIndex: A,
                        sourceQuestContent: D,
                    });
            },
            afterRequest: (e) => {
                L.stopAnimation(), k(e);
            },
        }),
        em = (null == (P = w.userStatus) ? void 0 : P.claimedAt) != null,
        { launchInGameActivity: ep } = (0, f.zB)(w),
        eh = (0, x.CR)({
            quest: w,
            shortText: !0,
        }),
        ex = null;
    return (q && K
        ? (ex = (0, a.jsx)("div", {
              className: S.button,
              children: (0, a.jsx)(s.zxk, {
                  variant: "primary",
                  loading: G,
                  onClick: null != ec ? ec : void 0,
                  text: eo,
                  fullWidth: !0,
              }),
          }))
        : z
          ? (ex = X
                ? (0, a.jsxs)(s.hE2, {
                      direction: "horizontal",
                      fullWidth: !0,
                      children: [
                          (0, a.jsx)(s.zxk, {
                              variant: "secondary",
                              icon: c.Oe7,
                              text: C.intl.string(C.t.YsCuyF),
                              onClick: () => {
                                  (0, _.openVideoQuestModal)({
                                      quest: w,
                                      questContent: I,
                                      sourceQuestContent: D,
                                      sourceQuestContentCTA: m.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                          }),
                          (0, a.jsx)(s.zxk, {
                              variant: "primary",
                              onClick: null != ec ? ec : void 0,
                              text: eo,
                          }),
                      ],
                  })
                : (0, v.Rt)(w)
                  ? (0, a.jsxs)(s.hE2, {
                        direction: "horizontal",
                        fullWidth: !0,
                        children: [
                            (0, a.jsx)(s.zxk, {
                                variant: "secondary",
                                icon: w.config.features.includes(y.S7.CLOUD_GAMING_ACTIVITY) ? c.v3n : c.iWm,
                                text: eh,
                                onClick: () => {
                                    ep();
                                },
                            }),
                            (0, a.jsx)(s.zxk, {
                                variant: "primary",
                                onClick: null != ec ? ec : void 0,
                                text: eo,
                            }),
                        ],
                    })
                  : (0, a.jsx)("div", {
                        className: S.button,
                        children: (0, a.jsx)(s.zxk, {
                            variant: "primary",
                            onClick: null != ec ? ec : void 0,
                            text: eo,
                            fullWidth: !0,
                        }),
                    }))
          : Q
            ? Q && K
                ? (ex = (0, a.jsx)("div", {
                      className: S.button,
                      children: (0, a.jsx)(s.zxk, {
                          variant: "primary",
                          loading: G,
                          onClick: null != ec ? ec : void 0,
                          text: eo,
                          fullWidth: !0,
                      }),
                  }))
                : J
                  ? (ex = (0, a.jsx)("div", {
                        className: S.button,
                        children: (0, a.jsx)(s.zxk, {
                            variant: "primary",
                            loading: V,
                            onClick: null != ec ? ec : void 0,
                            text: eo,
                            fullWidth: !0,
                        }),
                    }))
                  : Q && W && !em
                    ? (ex = ei
                          ? (0, a.jsx)(l.B6, {
                                className: S.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: E,
                                placeholder: C.intl.string(C.t.drVw4T),
                                renderOptionLabel: O,
                                renderOptionValue: T,
                                select: es,
                                serialize: (e) => {
                                    switch (e) {
                                        case y.cd.DESKTOP:
                                            return C.intl.string(C.t["QXc01+"]);
                                        case y.cd.CONSOLE:
                                            return C.intl.string(C.t["8lAfuB"]);
                                        default:
                                            return (0, u.vE)(e);
                                    }
                                },
                                size: "sm",
                            })
                          : (0, b.$J)(w) && !B && et !== h.LI.DESKTOP
                            ? U
                                ? (0, a.jsx)("div", {
                                      className: S.button,
                                      children: (0, a.jsx)(s.zxk, {
                                          variant: "secondary",
                                          onClick: null != ec ? ec : void 0,
                                          text: eo,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)(o.zx, {
                                      "data-migration-pending": !0,
                                      color: o.Tt.PRIMARY,
                                      onClick: eu,
                                      disabled: ed,
                                      className: S.button,
                                      children: (0, a.jsxs)("div", {
                                          className: S.ctaInner,
                                          children: [L.render(), C.intl.string(C.t.nPThNb)],
                                      }),
                                  })
                            : X
                              ? (0, a.jsx)("div", {
                                    className: S.button,
                                    children: (0, a.jsx)(s.zxk, {
                                        variant: "primary",
                                        onClick: null != ec ? ec : void 0,
                                        text: eo,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, v.Rt)(w)
                                ? (0, a.jsx)("div", {
                                      className: S.button,
                                      children: (0, a.jsx)(s.zxk, {
                                          variant: "primary",
                                          icon: (0, _.getPrimaryCtaIcon)(w),
                                          onClick: null != ec ? ec : void 0,
                                          text: eo,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)("div", {
                                      className: S.button,
                                      children: (0, a.jsx)(s.zxk, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: C.intl.string(C.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : Q &&
                      !W &&
                      (ex = H
                          ? (0, a.jsxs)(s.hE2, {
                                direction: "horizontal",
                                fullWidth: !0,
                                children: [
                                    (0, a.jsx)(s.zxk, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: C.intl.string(C.t.V293qn),
                                    }),
                                    (0, a.jsx)(s.zxk, {
                                        variant: "primary",
                                        onClick: () => (0, _.openQuestMinorEnrollmentBlockModal)(w, I, D),
                                        text: C.intl.string(C.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, a.jsx)("div", {
                                className: S.button,
                                children: (0, a.jsx)(s.zxk, {
                                    loading: V,
                                    variant: "primary",
                                    onClick: null != ec ? ec : void 0,
                                    text: eo,
                                    icon: (0, _.getPrimaryCtaIcon)(w),
                                    fullWidth: !0,
                                }),
                            }))
            : (ex = (0, a.jsx)("div", {
                  className: S.button,
                  children: (0, a.jsx)(s.zxk, {
                      variant: "secondary",
                      disabled: !0,
                      text: C.intl.format(C.t["14o6QY"], { expiryDate: F }),
                      fullWidth: !0,
                  }),
              })),
    null == ex)
        ? null
        : (0, a.jsxs)("div", {
              className: S.container,
              children: [
                  (0, a.jsx)("div", {
                      className: S.ctaItem,
                      children: ex,
                  }),
                  el &&
                      (0, a.jsx)("div", {
                          className: S.ctaItem,
                          children: (0, a.jsx)(l.B6, {
                              className: S.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (et) {
                                      case h.LI.DESKTOP:
                                          return e === y.cd.DESKTOP;
                                      case h.LI.CONSOLE:
                                          return e === y.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: E,
                              placeholder: C.intl.string(C.t.drVw4T),
                              renderOptionLabel: O,
                              renderOptionValue: T,
                              select: es,
                              serialize: (e) => {
                                  switch (e) {
                                      case y.cd.DESKTOP:
                                          return C.intl.string(C.t["QXc01+"]);
                                      case y.cd.CONSOLE:
                                          return C.intl.string(C.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                          }),
                      }),
              ],
          });
}
