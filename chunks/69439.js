n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    s = n(473749),
    o = n(442837),
    a = n(159691),
    i = n(755721),
    l = n(481060),
    c = n(607070),
    d = n(823379),
    u = n(617136),
    p = n(616022),
    m = n(49436),
    g = n(373370),
    f = n(968843),
    h = n(862657),
    x = n(254579),
    _ = n(283689),
    b = n(659302),
    j = n(110560),
    v = n(324805),
    C = n(388032),
    y = n(924304);
let E = [
    {
        value: v.cd.DESKTOP,
        get label() {
            return C.intl.string(C.t["QXc01+"]);
        },
    },
    {
        value: v.cd.CONSOLE,
        get label() {
            return C.intl.string(C.t["8lAfuB"]);
        },
    },
];
function O(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case v.cd.DESKTOP:
            (n = (0, r.jsx)(l.pzj, {})), (t = C.intl.string(C.t["QXc01+"]));
            break;
        case v.cd.CONSOLE:
            (n = (0, r.jsx)(l.iWm, {})), (t = C.intl.string(C.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)("div", {
        className: y.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function S(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case v.cd.DESKTOP:
            return (0, r.jsxs)("span", {
                className: y.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(l.pzj, {}), C.intl.string(C.t.g6Dr44)],
            });
        case v.cd.CONSOLE:
            return (0, r.jsxs)("span", {
                className: y.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(l.iWm, {}), C.intl.string(C.t.iyNbj5)],
            });
        default:
            return (0, d.vE)(e[0].value);
    }
}
function T(e) {
    var t, n, T, w;
    let {
            quest: P,
            questContent: N,
            onReceiveErrorHints: R,
            contentPosition: A,
            rowIndex: B,
            sourceQuestContent: k,
        } = e,
        I = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        D = (0, b.g2)({ useReducedMotion: I }),
        q = (0, u.O5)(),
        L = (0, f._s)({ quest: P }),
        Q = (0, f.z)(P),
        V = (0, f.B6)(P.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: M,
            isEnrolling: Z,
            isQuestEnrollmentBlocked: W,
        } = (0, o.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(P.id) || p.Z.isFetchingRewardCode(P.id),
            isEnrolling: p.Z.isEnrolling(P.id),
            isQuestEnrollmentBlocked: null != p.Z.questEnrollmentBlockedUntil,
        })),
        H = (null == (t = P.userStatus) ? void 0 : t.enrolledAt) != null,
        U = (null == (n = P.userStatus) ? void 0 : n.completedAt) != null,
        F = U && (null == (T = P.userStatus) ? void 0 : T.claimedAt) == null,
        z = (0, h.iQ)(P),
        G = !(0, h.zi)(P),
        K = (0, f._Q)(P),
        X = (0, x.PB)(P),
        Y = (0, x.HJ)(P),
        J = (0, x.Vl)(P),
        $ = (0, f.Rf)(P),
        [ee, et, en] = (0, f.me)(P, $),
        er = G && K === f.OH.ACCEPTED,
        es = er && ee === m.LI.SELECT,
        eo = er && !es && et.length > 1,
        ea = s.useCallback(
            (e) => {
                en(e), e === v.cd.DESKTOP && R([]);
            },
            [en, R],
        ),
        { text: ei, onClick: el } = (0, b.Ks)({
            progressState: K,
            quest: P,
            questContent: N,
            questContentPosition: A,
            questContentRowIndex: B,
            inGiftInventory: !0,
            isVideoQuest: X,
            inGameQuest: J,
            sourceQuestContent: k,
        }),
        { startingConsoleQuest: ec, startConsoleQuest: ed } = (0, f.GI)({
            questId: P.id,
            beforeRequest: () => {
                D.startAnimation(),
                    q({
                        questId: P.id,
                        questContent: N,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: A,
                        questContentRowIndex: B,
                        sourceQuestContent: k,
                    });
            },
            afterRequest: (e) => {
                D.stopAnimation(), R(e);
            },
        }),
        eu = s.useMemo(() => P.config.features.includes(v.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [P.config.features]),
        ep = (null == (w = P.userStatus) ? void 0 : w.claimedAt) != null,
        { launchInGameActivity: em } = (0, f.zB)(P),
        eg = (0, g.CR)({
            quest: P,
            shortText: !0,
        }),
        ef = null;
    return (z && F
        ? (ef = (0, r.jsx)("div", {
              className: y.button,
              children: (0, r.jsx)(a.zxk, {
                  variant: "primary",
                  loading: M,
                  onClick: null != el ? el : void 0,
                  text: ei,
                  fullWidth: !0,
              }),
          }))
        : U
          ? (ef = X
                ? (0, r.jsxs)(a.hE2, {
                      direction: "horizontal",
                      fullWidth: !0,
                      children: [
                          (0, r.jsx)(a.zxk, {
                              variant: "secondary",
                              icon: l.Oe7,
                              text: C.intl.string(C.t.YsCuyF),
                              onClick: () => {
                                  (0, j.openVideoQuestModal)({
                                      quest: P,
                                      questContent: N,
                                      sourceQuestContent: k,
                                      sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(a.zxk, {
                              variant: "primary",
                              onClick: null != el ? el : void 0,
                              text: ei,
                          }),
                      ],
                  })
                : (0, _.Rt)(P)
                  ? (0, r.jsxs)(a.hE2, {
                        direction: "horizontal",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(a.zxk, {
                                variant: "secondary",
                                icon: P.config.features.includes(v.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : l.iWm,
                                text: eg,
                                onClick: () => {
                                    em();
                                },
                            }),
                            (0, r.jsx)(a.zxk, {
                                variant: "primary",
                                onClick: null != el ? el : void 0,
                                text: ei,
                            }),
                        ],
                    })
                  : (0, r.jsx)("div", {
                        className: y.button,
                        children: (0, r.jsx)(a.zxk, {
                            variant: "primary",
                            onClick: null != el ? el : void 0,
                            text: ei,
                            fullWidth: !0,
                        }),
                    }))
          : G
            ? G && F
                ? (ef = (0, r.jsx)("div", {
                      className: y.button,
                      children: (0, r.jsx)(a.zxk, {
                          variant: "primary",
                          loading: M,
                          onClick: null != el ? el : void 0,
                          text: ei,
                          fullWidth: !0,
                      }),
                  }))
                : Y
                  ? (ef = eu
                        ? (0, r.jsx)("div", {
                              className: y.button,
                              children: (0, r.jsx)(a.zxk, {
                                  variant: "primary",
                                  loading: Z,
                                  onClick: null != el ? el : void 0,
                                  text: ei,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: y.button,
                              children: (0, r.jsx)(a.zxk, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: C.intl.string(C.t.BkZhUI),
                                  fullWidth: !0,
                              }),
                          }))
                  : G && H && !ep
                    ? (ef = es
                          ? (0, r.jsx)(l.PhF, {
                                className: y.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: E,
                                placeholder: C.intl.string(C.t.drVw4T),
                                renderOptionLabel: O,
                                renderOptionValue: S,
                                select: ea,
                                serialize: (e) => {
                                    switch (e) {
                                        case v.cd.DESKTOP:
                                            return C.intl.string(C.t["QXc01+"]);
                                        case v.cd.CONSOLE:
                                            return C.intl.string(C.t["8lAfuB"]);
                                        default:
                                            return (0, d.vE)(e);
                                    }
                                },
                                size: "sm",
                            })
                          : (0, x.$J)(P) && !Q && ee !== m.LI.DESKTOP
                            ? L
                                ? (0, r.jsx)("div", {
                                      className: y.button,
                                      children: (0, r.jsx)(a.zxk, {
                                          variant: "secondary",
                                          onClick: null != el ? el : void 0,
                                          text: ei,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, r.jsx)(i.zx, {
                                      "data-migration-pending": !0,
                                      color: i.Tt.PRIMARY,
                                      onClick: ed,
                                      disabled: ec,
                                      className: y.button,
                                      children: (0, r.jsxs)("div", {
                                          className: y.ctaInner,
                                          children: [D.render(), C.intl.string(C.t.nPThNb)],
                                      }),
                                  })
                            : X
                              ? (0, r.jsx)("div", {
                                    className: y.button,
                                    children: (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: null != el ? el : void 0,
                                        text: ei,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, _.Rt)(P)
                                ? (0, r.jsx)("div", {
                                      className: y.button,
                                      children: (0, r.jsx)(a.zxk, {
                                          variant: "primary",
                                          icon: (0, j.getPrimaryCtaIcon)(P),
                                          onClick: null != el ? el : void 0,
                                          text: ei,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, r.jsx)("div", {
                                      className: y.button,
                                      children: (0, r.jsx)(a.zxk, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: C.intl.string(C.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : G &&
                      !H &&
                      (ef = W
                          ? (0, r.jsxs)(a.hE2, {
                                direction: "horizontal",
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(a.zxk, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: C.intl.string(C.t.V293qn),
                                    }),
                                    (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: () => (0, j.openQuestMinorEnrollmentBlockModal)(P, N, k),
                                        text: C.intl.string(C.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, r.jsx)("div", {
                                className: y.button,
                                children: (0, r.jsx)(a.zxk, {
                                    loading: Z,
                                    variant: "primary",
                                    onClick: null != el ? el : void 0,
                                    text: ei,
                                    icon: (0, j.getPrimaryCtaIcon)(P),
                                    fullWidth: !0,
                                }),
                            }))
            : (ef = (0, r.jsx)("div", {
                  className: y.button,
                  children: (0, r.jsx)(a.zxk, {
                      variant: "secondary",
                      disabled: !0,
                      text: C.intl.format(C.t["14o6QY"], { expiryDate: V }),
                      fullWidth: !0,
                  }),
              })),
    null == ef)
        ? null
        : (0, r.jsxs)("div", {
              className: y.container,
              children: [
                  (0, r.jsx)("div", {
                      className: y.ctaItem,
                      children: ef,
                  }),
                  eo &&
                      (0, r.jsx)("div", {
                          className: y.ctaItem,
                          children: (0, r.jsx)(l.PhF, {
                              className: y.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (ee) {
                                      case m.LI.DESKTOP:
                                          return e === v.cd.DESKTOP;
                                      case m.LI.CONSOLE:
                                          return e === v.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: E,
                              placeholder: C.intl.string(C.t.drVw4T),
                              renderOptionLabel: O,
                              renderOptionValue: S,
                              select: ea,
                              serialize: (e) => {
                                  switch (e) {
                                      case v.cd.DESKTOP:
                                          return C.intl.string(C.t["QXc01+"]);
                                      case v.cd.CONSOLE:
                                          return C.intl.string(C.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                          }),
                      }),
              ],
          });
}
