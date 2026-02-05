n.d(t, { A: () => O });
var a = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(843282),
    r = n(732955),
    o = n(421380),
    d = n(397927),
    c = n(775602),
    u = n(403362),
    m = n(859703),
    h = n(341915),
    x = n(33621),
    p = n(714510),
    g = n(890687),
    _ = n(18437),
    f = n(590202),
    v = n(710969),
    b = n(792620),
    j = n(814793),
    A = n(201805),
    C = n(212614),
    S = n(79545),
    T = n(545986),
    y = n(654487),
    N = n(985018),
    E = n(421193);
let I = [
    {
        value: y.fO.DESKTOP,
        get label() {
            return N.intl.string(N.t["QXc01+"]);
        },
    },
    {
        value: y.fO.CONSOLE,
        get label() {
            return N.intl.string(N.t["8lAfuB"]);
        },
    },
];
function k(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case y.fO.DESKTOP:
            (n = (0, a.jsx)(d.kN9, {})), (t = N.intl.string(N.t["QXc01+"]));
            break;
        case y.fO.CONSOLE:
            (n = (0, a.jsx)(d._xR, {})), (t = N.intl.string(N.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, a.jsxs)("div", { className: E.FL, children: [n, t] });
}
function R(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case y.fO.DESKTOP:
            return (0, a.jsxs)("span", {
                className: E.FL,
                children: [(0, a.jsx)(d.kN9, {}), N.intl.string(N.t.g6Dr44)],
            });
        case y.fO.CONSOLE:
            return (0, a.jsxs)("span", {
                className: E.FL,
                children: [(0, a.jsx)(d._xR, {}), N.intl.string(N.t.iyNbj5)],
            });
        default:
            return (0, u.xb)(e[0].value);
    }
}
function O(e) {
    let {
            quest: t,
            questContent: n,
            onReceiveErrorHints: O,
            contentPosition: w,
            rowIndex: D,
            sourceQuestContent: M,
        } = e,
        P = (0, i.bG)([c.A], () => c.A.useReducedMotion),
        L = (0, A.Xf)({ useReducedMotion: P }),
        U = (0, _.Ut)(),
        B = (0, g.RR)({ quest: t }),
        G = (0, g.Vn)(t),
        F = (0, g.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: V,
            isEnrolling: W,
            isQuestEnrollmentBlocked: H,
        } = (0, i.cf)([m.A], () => ({
            isClaiming: m.A.isClaimingReward(t.id) || m.A.isFetchingRewardCode(t.id),
            isEnrolling: m.A.isEnrolling(t.id),
            isQuestEnrollmentBlocked: null != m.A.questEnrollmentBlockedUntil,
        })),
        K = t.userStatus?.enrolledAt != null,
        z = t.userStatus?.completedAt != null,
        $ = z && t.userStatus?.claimedAt == null,
        q = (0, v.if)(t),
        Q = !(0, v.Ic)(t),
        Y = (0, g.In)(t),
        J = (0, b.IO)(t),
        X = (0, b.BS)(t),
        Z = (0, b.Cr)(t),
        ee = (0, g.fc)(t),
        [et, en, ea] = (0, g.Qo)(t, ee),
        es = Q && Y === g.F3.ACCEPTED,
        ei = es && et === h.X0.SELECT,
        el = es && !ei && en.length > 1,
        er = x.t.useConfig({ location: y.rE.QUEST_HOME_DESKTOP }),
        eo = (0, S.P)(t),
        ed = s.useCallback(
            (e) => {
                ea(e), e === y.fO.DESKTOP && O([]);
            },
            [ea, O],
        ),
        { text: ec, onClick: eu } = (0, A._c)({
            progressState: Y,
            quest: t,
            questContent: n,
            questContentPosition: w,
            questContentRowIndex: D,
            inGiftInventory: !0,
            isVideoQuest: J,
            inGameQuest: Z,
            sourceQuestContent: M,
        }),
        { startingConsoleQuest: em, startConsoleQuest: eh } = (0, g.Wj)({
            questId: t.id,
            beforeRequest: () => {
                L.startAnimation(),
                    U({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: f.Cy.DEFIBRILLATOR,
                        questContentPosition: w,
                        questContentRowIndex: D,
                        sourceQuestContent: M,
                    });
            },
            afterRequest: (e) => {
                L.stopAnimation(), O(e);
            },
        }),
        ex = t.userStatus?.claimedAt != null,
        { launchInGameActivity: ep } = (0, g.zW)(t),
        eg = (0, p.NA)({ quest: t, shortText: !0 }),
        e_ = null;
    return (q && $
        ? (e_ = (0, a.jsx)("div", {
              className: E.x6,
              children: (0, a.jsx)(r.$nd, {
                  variant: "primary",
                  loading: V,
                  onClick: eu ?? void 0,
                  text: ec,
                  fullWidth: !0,
              }),
          }))
        : z
          ? (e_ = J
                ? (0, a.jsxs)(r.e2v, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(r.$nd, {
                              variant: "secondary",
                              icon: d.mqY,
                              text: N.intl.string(N.t.YsCuyF),
                              onClick: () => {
                                  (0, T.d5)({
                                      quest: t,
                                      questContent: n,
                                      sourceQuestContent: M,
                                      sourceQuestContentCTA: f.Cy.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                          }),
                          (0, a.jsx)(r.$nd, { variant: "primary", onClick: eu ?? void 0, text: ec }),
                      ],
                  })
                : (0, j.vA)(t)
                  ? (0, a.jsxs)(r.e2v, {
                        direction: "horizontal",
                        fullWidth: !0,
                        wrap: !1,
                        children: [
                            (0, a.jsx)(r.$nd, {
                                variant: "secondary",
                                icon: t.config.features.includes(y.Li.CLOUD_GAMING_ACTIVITY) ? d.hpF : d._xR,
                                text: eg,
                                onClick: () => {
                                    ep();
                                },
                            }),
                            (0, a.jsx)(r.$nd, { variant: "primary", onClick: eu ?? void 0, text: ec }),
                        ],
                    })
                  : (0, a.jsx)("div", {
                        className: E.x6,
                        children: (0, a.jsx)(r.$nd, {
                            variant: "primary",
                            onClick: eu ?? void 0,
                            text: ec,
                            fullWidth: !0,
                        }),
                    }))
          : Q
            ? Q && $
                ? (e_ = (0, a.jsx)("div", {
                      className: E.x6,
                      children: (0, a.jsx)(r.$nd, {
                          variant: "primary",
                          loading: V,
                          onClick: eu ?? void 0,
                          text: ec,
                          fullWidth: !0,
                      }),
                  }))
                : X
                  ? (e_ =
                        er.enabled && eo === S.U.UNENROLLED && er.enabledQuestStates.has(S.U.UNENROLLED)
                            ? (0, a.jsx)("div", {
                                  className: E.x6,
                                  children: (0, a.jsx)(C.A, {
                                      quest: t,
                                      analyticsCtxQuestContent: n,
                                      analyticsCtxSourceQuestContent: M,
                                      analyticsCtxQuestContentPosition: w,
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: E.x6,
                                  children: (0, a.jsx)(r.$nd, {
                                      variant: "primary",
                                      loading: W,
                                      onClick: eu ?? void 0,
                                      text: ec,
                                      fullWidth: !0,
                                  }),
                              }))
                  : Q && K && !ex
                    ? (e_ = ei
                          ? (0, a.jsx)(l.Pw, {
                                className: E.dd,
                                isSelected: () => !1,
                                options: I,
                                placeholder: N.intl.string(N.t.drVw4T),
                                renderOptionLabel: k,
                                renderOptionValue: R,
                                select: ed,
                                serialize: (e) => {
                                    switch (e) {
                                        case y.fO.DESKTOP:
                                            return N.intl.string(N.t["QXc01+"]);
                                        case y.fO.CONSOLE:
                                            return N.intl.string(N.t["8lAfuB"]);
                                        default:
                                            return (0, u.xb)(e);
                                    }
                                },
                                size: "sm",
                                "data-migration-pending": !0,
                            })
                          : (0, b.g5)(t) && !G && et !== h.X0.DESKTOP
                            ? B
                                ? (0, a.jsx)("div", {
                                      className: E.x6,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "secondary",
                                          onClick: eu ?? void 0,
                                          text: ec,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)(o.$n, {
                                      "data-migration-pending": !0,
                                      color: o.XD.PRIMARY,
                                      onClick: eh,
                                      disabled: em,
                                      className: E.x6,
                                      children: (0, a.jsxs)("div", {
                                          className: E.tn,
                                          children: [L.render(), N.intl.string(N.t.nPThNb)],
                                      }),
                                  })
                            : J
                              ? (0, a.jsx)("div", {
                                    className: E.x6,
                                    children: (0, a.jsx)(r.$nd, {
                                        variant: "primary",
                                        onClick: eu ?? void 0,
                                        text: ec,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, j.vA)(t)
                                ? (0, a.jsx)("div", {
                                      className: E.x6,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "primary",
                                          icon: (0, T.Oz)(t),
                                          onClick: eu ?? void 0,
                                          text: ec,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)("div", {
                                      className: E.x6,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: N.intl.string(N.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : Q &&
                      !K &&
                      (e_ = H
                          ? (0, a.jsxs)(r.e2v, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    (0, a.jsx)(r.$nd, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: N.intl.string(N.t.V293qn),
                                    }),
                                    (0, a.jsx)(r.$nd, {
                                        variant: "primary",
                                        onClick: () => (0, T.m6)(t, n, M),
                                        text: N.intl.string(N.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, a.jsx)("div", {
                                className: E.x6,
                                children:
                                    er.enabled && eo === S.U.UNENROLLED && er.enabledQuestStates.has(S.U.UNENROLLED)
                                        ? (0, a.jsx)(C.A, {
                                              quest: t,
                                              analyticsCtxQuestContent: n,
                                              analyticsCtxSourceQuestContent: M,
                                              analyticsCtxQuestContentPosition: w,
                                          })
                                        : (0, a.jsx)(r.$nd, {
                                              loading: W,
                                              variant: "primary",
                                              onClick: eu ?? void 0,
                                              text: ec,
                                              icon: (0, T.Oz)(t),
                                              fullWidth: !0,
                                          }),
                            }))
            : (e_ = (0, a.jsx)("div", {
                  className: E.x6,
                  children: (0, a.jsx)(r.$nd, {
                      variant: "secondary",
                      disabled: !0,
                      text: N.intl.format(N.t["14o6QY"], { expiryDate: F }),
                      fullWidth: !0,
                  }),
              })),
    null == e_)
        ? null
        : (0, a.jsxs)("div", {
              className: E.kL,
              children: [
                  (0, a.jsx)("div", { className: E.qz, children: e_ }),
                  el &&
                      (0, a.jsx)("div", {
                          className: E.qz,
                          children: (0, a.jsx)(l.Pw, {
                              className: E.xZ,
                              isSelected: (e) => {
                                  switch (et) {
                                      case h.X0.DESKTOP:
                                          return e === y.fO.DESKTOP;
                                      case h.X0.CONSOLE:
                                          return e === y.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: I,
                              placeholder: N.intl.string(N.t.drVw4T),
                              renderOptionLabel: k,
                              renderOptionValue: R,
                              select: ed,
                              serialize: (e) => {
                                  switch (e) {
                                      case y.fO.DESKTOP:
                                          return N.intl.string(N.t["QXc01+"]);
                                      case y.fO.CONSOLE:
                                          return N.intl.string(N.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
