n.d(t, {
    A: () => k,
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
    h = n(33621),
    x = n(714510),
    g = n(890687),
    f = n(18437),
    b = n(590202),
    v = n(710969),
    j = n(792620),
    _ = n(814793),
    y = n(201805),
    A = n(212614),
    C = n(79545),
    S = n(545986),
    O = n(654487),
    T = n(985018),
    E = n(421193);
let N = [
    {
        value: O.fO.DESKTOP,
        get label() {
            return T.intl.string(T.t["QXc01+"]);
        },
    },
    {
        value: O.fO.CONSOLE,
        get label() {
            return T.intl.string(T.t["8lAfuB"]);
        },
    },
];

function w(e) {
    let t,
        n,
        { value: l } = e;
    switch (l) {
        case O.fO.DESKTOP:
            (n = (0, a.jsx)(c.kN9, {})), (t = T.intl.string(T.t["QXc01+"]));
            break;
        case O.fO.CONSOLE:
            (n = (0, a.jsx)(c._xR, {})), (t = T.intl.string(T.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, a.jsxs)("div", {
        className: E.FL,
        children: [n, t],
    });
}

function I(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case O.fO.DESKTOP:
            return (0, a.jsxs)("span", {
                className: E.FL,
                children: [(0, a.jsx)(c.kN9, {}), T.intl.string(T.t.g6Dr44)],
            });
        case O.fO.CONSOLE:
            return (0, a.jsxs)("span", {
                className: E.FL,
                children: [(0, a.jsx)(c._xR, {}), T.intl.string(T.t.iyNbj5)],
            });
        default:
            return (0, u.xb)(e[0].value);
    }
}

function k(e) {
    var t, n, k, P;
    let {
            quest: R,
            questContent: D,
            onReceiveErrorHints: M,
            contentPosition: L,
            rowIndex: U,
            sourceQuestContent: B,
        } = e,
        G = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        F = (0, y.Xf)({
            useReducedMotion: G,
        }),
        V = (0, f.Ut)(),
        W = (0, g.RR)({
            quest: R,
        }),
        H = (0, g.Vn)(R),
        K = (0, g.S5)(R.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: z,
            isEnrolling: q,
            isQuestEnrollmentBlocked: Q,
        } = (0, r.cf)([m.A], () => ({
            isClaiming: m.A.isClaimingReward(R.id) || m.A.isFetchingRewardCode(R.id),
            isEnrolling: m.A.isEnrolling(R.id),
            isQuestEnrollmentBlocked: null != m.A.questEnrollmentBlockedUntil,
        })),
        Y = (null == (t = R.userStatus) ? void 0 : t.enrolledAt) != null,
        J = (null == (n = R.userStatus) ? void 0 : n.completedAt) != null,
        X = J && (null == (k = R.userStatus) ? void 0 : k.claimedAt) == null,
        $ = (0, v.if)(R),
        Z = !(0, v.Ic)(R),
        ee = (0, g.In)(R),
        et = (0, j.IO)(R),
        en = (0, j.BS)(R),
        ea = (0, j.Cr)(R),
        el = (0, g.fc)(R),
        [er, ei, es] = (0, g.Qo)(R, el),
        eo = Z && ee === g.F3.ACCEPTED,
        ec = eo && er === p.X0.SELECT,
        ed = eo && !ec && ei.length > 1,
        eu = h.t.useConfig({
            location: O.rE.QUEST_HOME_DESKTOP,
        }),
        em = (0, C.P)(R),
        ep = l.useCallback(
            (e) => {
                es(e), e === O.fO.DESKTOP && M([]);
            },
            [es, M],
        ),
        { text: eh, onClick: ex } = (0, y._c)({
            progressState: ee,
            quest: R,
            questContent: D,
            questContentPosition: L,
            questContentRowIndex: U,
            inGiftInventory: !0,
            isVideoQuest: et,
            inGameQuest: ea,
            sourceQuestContent: B,
        }),
        { startingConsoleQuest: eg, startConsoleQuest: ef } = (0, g.Wj)({
            questId: R.id,
            beforeRequest: () => {
                F.startAnimation(),
                    V({
                        questId: R.id,
                        questContent: D,
                        questContentCTA: b.Cy.DEFIBRILLATOR,
                        questContentPosition: L,
                        questContentRowIndex: U,
                        sourceQuestContent: B,
                    });
            },
            afterRequest: (e) => {
                F.stopAnimation(), M(e);
            },
        }),
        eb = (null == (P = R.userStatus) ? void 0 : P.claimedAt) != null,
        { launchInGameActivity: ev } = (0, g.zW)(R),
        ej = (0, x.NA)({
            quest: R,
            shortText: !0,
        }),
        e_ = null;
    return ($ && X
        ? (e_ = (0, a.jsx)("div", {
              className: E.x6,
              children: (0, a.jsx)(s.$nd, {
                  variant: "primary",
                  loading: z,
                  onClick: null != ex ? ex : void 0,
                  text: eh,
                  fullWidth: !0,
              }),
          }))
        : J
          ? (e_ = et
                ? (0, a.jsxs)(s.e2v, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(s.$nd, {
                              variant: "secondary",
                              icon: c.mqY,
                              text: T.intl.string(T.t.YsCuyF),
                              onClick: () => {
                                  (0, S.d5)({
                                      quest: R,
                                      questContent: D,
                                      sourceQuestContent: B,
                                      sourceQuestContentCTA: b.Cy.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                          }),
                          (0, a.jsx)(s.$nd, {
                              variant: "primary",
                              onClick: null != ex ? ex : void 0,
                              text: eh,
                          }),
                      ],
                  })
                : (0, _.vA)(R)
                  ? (0, a.jsxs)(s.e2v, {
                        direction: "horizontal",
                        fullWidth: !0,
                        wrap: !1,
                        children: [
                            (0, a.jsx)(s.$nd, {
                                variant: "secondary",
                                icon: R.config.features.includes(O.Li.CLOUD_GAMING_ACTIVITY) ? c.hpF : c._xR,
                                text: ej,
                                onClick: () => {
                                    ev();
                                },
                            }),
                            (0, a.jsx)(s.$nd, {
                                variant: "primary",
                                onClick: null != ex ? ex : void 0,
                                text: eh,
                            }),
                        ],
                    })
                  : (0, a.jsx)("div", {
                        className: E.x6,
                        children: (0, a.jsx)(s.$nd, {
                            variant: "primary",
                            onClick: null != ex ? ex : void 0,
                            text: eh,
                            fullWidth: !0,
                        }),
                    }))
          : Z
            ? Z && X
                ? (e_ = (0, a.jsx)("div", {
                      className: E.x6,
                      children: (0, a.jsx)(s.$nd, {
                          variant: "primary",
                          loading: z,
                          onClick: null != ex ? ex : void 0,
                          text: eh,
                          fullWidth: !0,
                      }),
                  }))
                : en
                  ? (e_ =
                        eu.enabled && em === C.U.UNENROLLED && eu.enabledQuestStates.has(C.U.UNENROLLED)
                            ? (0, a.jsx)("div", {
                                  className: E.x6,
                                  children: (0, a.jsx)(A.A, {
                                      quest: R,
                                      analyticsCtxQuestContent: D,
                                      analyticsCtxSourceQuestContent: B,
                                      analyticsCtxQuestContentPosition: L,
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: E.x6,
                                  children: (0, a.jsx)(s.$nd, {
                                      variant: "primary",
                                      loading: q,
                                      onClick: null != ex ? ex : void 0,
                                      text: eh,
                                      fullWidth: !0,
                                  }),
                              }))
                  : Z && Y && !eb
                    ? (e_ = ec
                          ? (0, a.jsx)(i.Pw, {
                                className: E.dd,
                                isSelected: () => !1,
                                options: N,
                                placeholder: T.intl.string(T.t.drVw4T),
                                renderOptionLabel: w,
                                renderOptionValue: I,
                                select: ep,
                                serialize: (e) => {
                                    switch (e) {
                                        case O.fO.DESKTOP:
                                            return T.intl.string(T.t["QXc01+"]);
                                        case O.fO.CONSOLE:
                                            return T.intl.string(T.t["8lAfuB"]);
                                        default:
                                            return (0, u.xb)(e);
                                    }
                                },
                                size: "sm",
                                "data-migration-pending": !0,
                            })
                          : (0, j.g5)(R) && !H && er !== p.X0.DESKTOP
                            ? W
                                ? (0, a.jsx)("div", {
                                      className: E.x6,
                                      children: (0, a.jsx)(s.$nd, {
                                          variant: "secondary",
                                          onClick: null != ex ? ex : void 0,
                                          text: eh,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)(o.$n, {
                                      "data-migration-pending": !0,
                                      color: o.XD.PRIMARY,
                                      onClick: ef,
                                      disabled: eg,
                                      className: E.x6,
                                      children: (0, a.jsxs)("div", {
                                          className: E.tn,
                                          children: [F.render(), T.intl.string(T.t.nPThNb)],
                                      }),
                                  })
                            : et
                              ? (0, a.jsx)("div", {
                                    className: E.x6,
                                    children: (0, a.jsx)(s.$nd, {
                                        variant: "primary",
                                        onClick: null != ex ? ex : void 0,
                                        text: eh,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, _.vA)(R)
                                ? (0, a.jsx)("div", {
                                      className: E.x6,
                                      children: (0, a.jsx)(s.$nd, {
                                          variant: "primary",
                                          icon: (0, S.Oz)(R),
                                          onClick: null != ex ? ex : void 0,
                                          text: eh,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)("div", {
                                      className: E.x6,
                                      children: (0, a.jsx)(s.$nd, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: T.intl.string(T.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : Z &&
                      !Y &&
                      (e_ = Q
                          ? (0, a.jsxs)(s.e2v, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    (0, a.jsx)(s.$nd, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: T.intl.string(T.t.V293qn),
                                    }),
                                    (0, a.jsx)(s.$nd, {
                                        variant: "primary",
                                        onClick: () => (0, S.m6)(R, D, B),
                                        text: T.intl.string(T.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, a.jsx)("div", {
                                className: E.x6,
                                children:
                                    eu.enabled && em === C.U.UNENROLLED && eu.enabledQuestStates.has(C.U.UNENROLLED)
                                        ? (0, a.jsx)(A.A, {
                                              quest: R,
                                              analyticsCtxQuestContent: D,
                                              analyticsCtxSourceQuestContent: B,
                                              analyticsCtxQuestContentPosition: L,
                                          })
                                        : (0, a.jsx)(s.$nd, {
                                              loading: q,
                                              variant: "primary",
                                              onClick: null != ex ? ex : void 0,
                                              text: eh,
                                              icon: (0, S.Oz)(R),
                                              fullWidth: !0,
                                          }),
                            }))
            : (e_ = (0, a.jsx)("div", {
                  className: E.x6,
                  children: (0, a.jsx)(s.$nd, {
                      variant: "secondary",
                      disabled: !0,
                      text: T.intl.format(T.t["14o6QY"], {
                          expiryDate: K,
                      }),
                      fullWidth: !0,
                  }),
              })),
    null == e_)
        ? null
        : (0, a.jsxs)("div", {
              className: E.kL,
              children: [
                  (0, a.jsx)("div", {
                      className: E.qz,
                      children: e_,
                  }),
                  ed &&
                      (0, a.jsx)("div", {
                          className: E.qz,
                          children: (0, a.jsx)(i.Pw, {
                              className: E.xZ,
                              isSelected: (e) => {
                                  switch (er) {
                                      case p.X0.DESKTOP:
                                          return e === O.fO.DESKTOP;
                                      case p.X0.CONSOLE:
                                          return e === O.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: N,
                              placeholder: T.intl.string(T.t.drVw4T),
                              renderOptionLabel: w,
                              renderOptionValue: I,
                              select: ep,
                              serialize: (e) => {
                                  switch (e) {
                                      case O.fO.DESKTOP:
                                          return T.intl.string(T.t["QXc01+"]);
                                      case O.fO.CONSOLE:
                                          return T.intl.string(T.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
