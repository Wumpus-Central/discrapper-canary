n.d(t, {
    A: () => I,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(311907),
    i = n(843282),
    s = n(732955),
    o = n(421380),
    c = n(397927),
    d = n(775602),
    u = n(403362),
    m = n(859703),
    p = n(341915),
    h = n(245853),
    x = n(714510),
    g = n(890687),
    f = n(18437),
    b = n(590202),
    v = n(710969),
    j = n(792620),
    _ = n(814793),
    y = n(201805),
    A = n(212614),
    C = n(545986),
    S = n(654487),
    O = n(985018),
    T = n(421193);
let E = [
    {
        value: S.fO.DESKTOP,
        get label() {
            return O.intl.string(O.t["QXc01+"]);
        },
    },
    {
        value: S.fO.CONSOLE,
        get label() {
            return O.intl.string(O.t["8lAfuB"]);
        },
    },
];

function N(e) {
    let t,
        n,
        { value: l } = e;
    switch (l) {
        case S.fO.DESKTOP:
            (n = (0, a.jsx)(c.kN9, {})), (t = O.intl.string(O.t["QXc01+"]));
            break;
        case S.fO.CONSOLE:
            (n = (0, a.jsx)(c._xR, {})), (t = O.intl.string(O.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, a.jsxs)("div", {
        className: T.FL,
        children: [n, t],
    });
}

function w(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case S.fO.DESKTOP:
            return (0, a.jsxs)("span", {
                className: T.FL,
                children: [(0, a.jsx)(c.kN9, {}), O.intl.string(O.t.g6Dr44)],
            });
        case S.fO.CONSOLE:
            return (0, a.jsxs)("span", {
                className: T.FL,
                children: [(0, a.jsx)(c._xR, {}), O.intl.string(O.t.iyNbj5)],
            });
        default:
            return (0, u.xb)(e[0].value);
    }
}

function I(e) {
    var t, n, I, k;
    let {
            quest: P,
            questContent: R,
            onReceiveErrorHints: D,
            contentPosition: M,
            rowIndex: L,
            sourceQuestContent: U,
        } = e,
        B = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        G = (0, y.Xf)({
            useReducedMotion: B,
        }),
        F = (0, f.Ut)(),
        V = (0, g.RR)({
            quest: P,
        }),
        W = (0, g.Vn)(P),
        H = (0, g.S5)(P.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: K,
            isEnrolling: z,
            isQuestEnrollmentBlocked: q,
        } = (0, r.cf)([m.A], () => ({
            isClaiming: m.A.isClaimingReward(P.id) || m.A.isFetchingRewardCode(P.id),
            isEnrolling: m.A.isEnrolling(P.id),
            isQuestEnrollmentBlocked: null != m.A.questEnrollmentBlockedUntil,
        })),
        Q = (null == (t = P.userStatus) ? void 0 : t.enrolledAt) != null,
        Y = (null == (n = P.userStatus) ? void 0 : n.completedAt) != null,
        J = Y && (null == (I = P.userStatus) ? void 0 : I.claimedAt) == null,
        X = (0, v.if)(P),
        $ = !(0, v.Ic)(P),
        Z = (0, g.In)(P),
        ee = (0, j.IO)(P),
        et = (0, j.BS)(P),
        en = (0, j.Cr)(P),
        ea = (0, g.fc)(P),
        [el, er, ei] = (0, g.Qo)(P, ea),
        es = $ && Z === g.F3.ACCEPTED,
        eo = es && el === p.X0.SELECT,
        ec = es && !eo && er.length > 1,
        ed = h.t$.useConfig({
            location: S.rE.QUEST_HOME_DESKTOP,
        }).enabled,
        eu = l.useCallback(
            (e) => {
                ei(e), e === S.fO.DESKTOP && D([]);
            },
            [ei, D],
        ),
        { text: em, onClick: ep } = (0, y._c)({
            progressState: Z,
            quest: P,
            questContent: R,
            questContentPosition: M,
            questContentRowIndex: L,
            inGiftInventory: !0,
            isVideoQuest: ee,
            inGameQuest: en,
            sourceQuestContent: U,
        }),
        { startingConsoleQuest: eh, startConsoleQuest: ex } = (0, g.Wj)({
            questId: P.id,
            beforeRequest: () => {
                G.startAnimation(),
                    F({
                        questId: P.id,
                        questContent: R,
                        questContentCTA: b.Cy.DEFIBRILLATOR,
                        questContentPosition: M,
                        questContentRowIndex: L,
                        sourceQuestContent: U,
                    });
            },
            afterRequest: (e) => {
                G.stopAnimation(), D(e);
            },
        }),
        eg = (null == (k = P.userStatus) ? void 0 : k.claimedAt) != null,
        { launchInGameActivity: ef } = (0, g.zW)(P),
        eb = (0, x.NA)({
            quest: P,
            shortText: !0,
        }),
        ev = null;
    return (X && J
        ? (ev = (0, a.jsx)("div", {
              className: T.x6,
              children: (0, a.jsx)(s.$nd, {
                  variant: "primary",
                  loading: K,
                  onClick: null != ep ? ep : void 0,
                  text: em,
                  fullWidth: !0,
              }),
          }))
        : Y
          ? (ev = ee
                ? (0, a.jsxs)(s.e2v, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(s.$nd, {
                              variant: "secondary",
                              icon: c.mqY,
                              text: O.intl.string(O.t.YsCuyF),
                              onClick: () => {
                                  (0, C.d5)({
                                      quest: P,
                                      questContent: R,
                                      sourceQuestContent: U,
                                      sourceQuestContentCTA: b.Cy.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                          }),
                          (0, a.jsx)(s.$nd, {
                              variant: "primary",
                              onClick: null != ep ? ep : void 0,
                              text: em,
                          }),
                      ],
                  })
                : (0, _.vA)(P)
                  ? (0, a.jsxs)(s.e2v, {
                        direction: "horizontal",
                        fullWidth: !0,
                        wrap: !1,
                        children: [
                            (0, a.jsx)(s.$nd, {
                                variant: "secondary",
                                icon: P.config.features.includes(S.Li.CLOUD_GAMING_ACTIVITY) ? c.hpF : c._xR,
                                text: eb,
                                onClick: () => {
                                    ef();
                                },
                            }),
                            (0, a.jsx)(s.$nd, {
                                variant: "primary",
                                onClick: null != ep ? ep : void 0,
                                text: em,
                            }),
                        ],
                    })
                  : (0, a.jsx)("div", {
                        className: T.x6,
                        children: (0, a.jsx)(s.$nd, {
                            variant: "primary",
                            onClick: null != ep ? ep : void 0,
                            text: em,
                            fullWidth: !0,
                        }),
                    }))
          : $
            ? $ && J
                ? (ev = (0, a.jsx)("div", {
                      className: T.x6,
                      children: (0, a.jsx)(s.$nd, {
                          variant: "primary",
                          loading: K,
                          onClick: null != ep ? ep : void 0,
                          text: em,
                          fullWidth: !0,
                      }),
                  }))
                : et
                  ? (ev =
                        ed && !Q
                            ? (0, a.jsx)("div", {
                                  className: T.x6,
                                  children: (0, a.jsx)(A.A, {
                                      quest: P,
                                      analyticsCtxQuestContent: R,
                                      analyticsCtxSourceQuestContent: U,
                                      analyticsCtxQuestContentPosition: M,
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: T.x6,
                                  children: (0, a.jsx)(s.$nd, {
                                      variant: "primary",
                                      loading: z,
                                      onClick: null != ep ? ep : void 0,
                                      text: em,
                                      fullWidth: !0,
                                  }),
                              }))
                  : $ && Q && !eg
                    ? (ev = eo
                          ? (0, a.jsx)(i.Pw, {
                                className: T.dd,
                                isSelected: () => !1,
                                options: E,
                                placeholder: O.intl.string(O.t.drVw4T),
                                renderOptionLabel: N,
                                renderOptionValue: w,
                                select: eu,
                                serialize: (e) => {
                                    switch (e) {
                                        case S.fO.DESKTOP:
                                            return O.intl.string(O.t["QXc01+"]);
                                        case S.fO.CONSOLE:
                                            return O.intl.string(O.t["8lAfuB"]);
                                        default:
                                            return (0, u.xb)(e);
                                    }
                                },
                                size: "sm",
                                "data-migration-pending": !0,
                            })
                          : (0, j.g5)(P) && !W && el !== p.X0.DESKTOP
                            ? V
                                ? (0, a.jsx)("div", {
                                      className: T.x6,
                                      children: (0, a.jsx)(s.$nd, {
                                          variant: "secondary",
                                          onClick: null != ep ? ep : void 0,
                                          text: em,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)(o.$n, {
                                      "data-migration-pending": !0,
                                      color: o.XD.PRIMARY,
                                      onClick: ex,
                                      disabled: eh,
                                      className: T.x6,
                                      children: (0, a.jsxs)("div", {
                                          className: T.tn,
                                          children: [G.render(), O.intl.string(O.t.nPThNb)],
                                      }),
                                  })
                            : ee
                              ? (0, a.jsx)("div", {
                                    className: T.x6,
                                    children: (0, a.jsx)(s.$nd, {
                                        variant: "primary",
                                        onClick: null != ep ? ep : void 0,
                                        text: em,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, _.vA)(P)
                                ? (0, a.jsx)("div", {
                                      className: T.x6,
                                      children: (0, a.jsx)(s.$nd, {
                                          variant: "primary",
                                          icon: (0, C.Oz)(P),
                                          onClick: null != ep ? ep : void 0,
                                          text: em,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)("div", {
                                      className: T.x6,
                                      children: (0, a.jsx)(s.$nd, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: O.intl.string(O.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : $ &&
                      !Q &&
                      (ev = q
                          ? (0, a.jsxs)(s.e2v, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    (0, a.jsx)(s.$nd, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: O.intl.string(O.t.V293qn),
                                    }),
                                    (0, a.jsx)(s.$nd, {
                                        variant: "primary",
                                        onClick: () => (0, C.m6)(P, R, U),
                                        text: O.intl.string(O.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, a.jsx)("div", {
                                className: T.x6,
                                children: ed
                                    ? (0, a.jsx)(A.A, {
                                          quest: P,
                                          analyticsCtxQuestContent: R,
                                          analyticsCtxSourceQuestContent: U,
                                          analyticsCtxQuestContentPosition: M,
                                      })
                                    : (0, a.jsx)(s.$nd, {
                                          loading: z,
                                          variant: "primary",
                                          onClick: null != ep ? ep : void 0,
                                          text: em,
                                          icon: (0, C.Oz)(P),
                                          fullWidth: !0,
                                      }),
                            }))
            : (ev = (0, a.jsx)("div", {
                  className: T.x6,
                  children: (0, a.jsx)(s.$nd, {
                      variant: "secondary",
                      disabled: !0,
                      text: O.intl.format(O.t["14o6QY"], {
                          expiryDate: H,
                      }),
                      fullWidth: !0,
                  }),
              })),
    null == ev)
        ? null
        : (0, a.jsxs)("div", {
              className: T.kL,
              children: [
                  (0, a.jsx)("div", {
                      className: T.qz,
                      children: ev,
                  }),
                  ec &&
                      (0, a.jsx)("div", {
                          className: T.qz,
                          children: (0, a.jsx)(i.Pw, {
                              className: T.xZ,
                              isSelected: (e) => {
                                  switch (el) {
                                      case p.X0.DESKTOP:
                                          return e === S.fO.DESKTOP;
                                      case p.X0.CONSOLE:
                                          return e === S.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: E,
                              placeholder: O.intl.string(O.t.drVw4T),
                              renderOptionLabel: N,
                              renderOptionValue: w,
                              select: eu,
                              serialize: (e) => {
                                  switch (e) {
                                      case S.fO.DESKTOP:
                                          return O.intl.string(O.t["QXc01+"]);
                                      case S.fO.CONSOLE:
                                          return O.intl.string(O.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
