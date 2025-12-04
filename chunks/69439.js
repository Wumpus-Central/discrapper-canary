n.d(t, { Z: () => w }), n(388685);
var r = n(54381),
    s = n(473749),
    o = n(442837),
    a = n(199849),
    i = n(159691),
    l = n(755721),
    c = n(481060),
    d = n(607070),
    u = n(823379),
    p = n(617136),
    m = n(616022),
    g = n(49436),
    f = n(373370),
    h = n(968843),
    x = n(862657),
    _ = n(254579),
    b = n(283689),
    j = n(659302),
    v = n(110560),
    C = n(324805),
    y = n(388032),
    E = n(924304);
let O = [
    {
        value: C.cd.DESKTOP,
        get label() {
            return y.intl.string(y.t["QXc01+"]);
        },
    },
    {
        value: C.cd.CONSOLE,
        get label() {
            return y.intl.string(y.t["8lAfuB"]);
        },
    },
];
function S(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case C.cd.DESKTOP:
            (n = (0, r.jsx)(c.pzj, {})), (t = y.intl.string(y.t["QXc01+"]));
            break;
        case C.cd.CONSOLE:
            (n = (0, r.jsx)(c.iWm, {})), (t = y.intl.string(y.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)("div", {
        className: E.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function T(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case C.cd.DESKTOP:
            return (0, r.jsxs)("span", {
                className: E.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(c.pzj, {}), y.intl.string(y.t.g6Dr44)],
            });
        case C.cd.CONSOLE:
            return (0, r.jsxs)("span", {
                className: E.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(c.iWm, {}), y.intl.string(y.t.iyNbj5)],
            });
        default:
            return (0, u.vE)(e[0].value);
    }
}
function w(e) {
    var t, n, w, P;
    let {
            quest: N,
            questContent: R,
            onReceiveErrorHints: A,
            contentPosition: B,
            rowIndex: k,
            sourceQuestContent: I,
        } = e,
        D = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        q = (0, j.g2)({ useReducedMotion: D }),
        L = (0, p.O5)(),
        Q = (0, h._s)({ quest: N }),
        V = (0, h.z)(N),
        M = (0, h.B6)(N.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: W,
            isEnrolling: Z,
            isQuestEnrollmentBlocked: H,
        } = (0, o.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(N.id) || m.Z.isFetchingRewardCode(N.id),
            isEnrolling: m.Z.isEnrolling(N.id),
            isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil,
        })),
        U = (null == (t = N.userStatus) ? void 0 : t.enrolledAt) != null,
        z = (null == (n = N.userStatus) ? void 0 : n.completedAt) != null,
        F = z && (null == (w = N.userStatus) ? void 0 : w.claimedAt) == null,
        G = (0, x.iQ)(N),
        K = !(0, x.zi)(N),
        X = (0, h._Q)(N),
        Y = (0, _.PB)(N),
        J = (0, _.HJ)(N),
        $ = (0, _.Vl)(N),
        ee = (0, h.Rf)(N),
        [et, en, er] = (0, h.me)(N, ee),
        es = K && X === h.OH.ACCEPTED,
        eo = es && et === g.LI.SELECT,
        ea = es && !eo && en.length > 1,
        ei = s.useCallback(
            (e) => {
                er(e), e === C.cd.DESKTOP && A([]);
            },
            [er, A],
        ),
        { text: el, onClick: ec } = (0, j.Ks)({
            progressState: X,
            quest: N,
            questContent: R,
            questContentPosition: B,
            questContentRowIndex: k,
            inGiftInventory: !0,
            isVideoQuest: Y,
            inGameQuest: $,
            sourceQuestContent: I,
        }),
        { startingConsoleQuest: ed, startConsoleQuest: eu } = (0, h.GI)({
            questId: N.id,
            beforeRequest: () => {
                q.startAnimation(),
                    L({
                        questId: N.id,
                        questContent: R,
                        questContentCTA: p.jZ.DEFIBRILLATOR,
                        questContentPosition: B,
                        questContentRowIndex: k,
                        sourceQuestContent: I,
                    });
            },
            afterRequest: (e) => {
                q.stopAnimation(), A(e);
            },
        }),
        ep = (null == (P = N.userStatus) ? void 0 : P.claimedAt) != null,
        { launchInGameActivity: em } = (0, h.zB)(N),
        eg = (0, f.CR)({
            quest: N,
            shortText: !0,
        }),
        ef = null;
    return (G && F
        ? (ef = (0, r.jsx)("div", {
              className: E.button,
              children: (0, r.jsx)(i.zxk, {
                  variant: "primary",
                  loading: W,
                  onClick: null != ec ? ec : void 0,
                  text: el,
                  fullWidth: !0,
              }),
          }))
        : z
          ? (ef = Y
                ? (0, r.jsxs)(i.hE2, {
                      direction: "horizontal",
                      fullWidth: !0,
                      children: [
                          (0, r.jsx)(i.zxk, {
                              variant: "secondary",
                              icon: c.Oe7,
                              text: y.intl.string(y.t.YsCuyF),
                              onClick: () => {
                                  (0, v.openVideoQuestModal)({
                                      quest: N,
                                      questContent: R,
                                      sourceQuestContent: I,
                                      sourceQuestContentCTA: p.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(i.zxk, {
                              variant: "primary",
                              onClick: null != ec ? ec : void 0,
                              text: el,
                          }),
                      ],
                  })
                : (0, b.Rt)(N)
                  ? (0, r.jsxs)(i.hE2, {
                        direction: "horizontal",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(i.zxk, {
                                variant: "secondary",
                                icon: N.config.features.includes(C.S7.CLOUD_GAMING_ACTIVITY) ? c.v3n : c.iWm,
                                text: eg,
                                onClick: () => {
                                    em();
                                },
                            }),
                            (0, r.jsx)(i.zxk, {
                                variant: "primary",
                                onClick: null != ec ? ec : void 0,
                                text: el,
                            }),
                        ],
                    })
                  : (0, r.jsx)("div", {
                        className: E.button,
                        children: (0, r.jsx)(i.zxk, {
                            variant: "primary",
                            onClick: null != ec ? ec : void 0,
                            text: el,
                            fullWidth: !0,
                        }),
                    }))
          : K
            ? K && F
                ? (ef = (0, r.jsx)("div", {
                      className: E.button,
                      children: (0, r.jsx)(i.zxk, {
                          variant: "primary",
                          loading: W,
                          onClick: null != ec ? ec : void 0,
                          text: el,
                          fullWidth: !0,
                      }),
                  }))
                : J
                  ? (ef = (0, r.jsx)("div", {
                        className: E.button,
                        children: (0, r.jsx)(i.zxk, {
                            variant: "primary",
                            loading: Z,
                            onClick: null != ec ? ec : void 0,
                            text: el,
                            fullWidth: !0,
                        }),
                    }))
                  : K && U && !ep
                    ? (ef = eo
                          ? (0, r.jsx)(a.B6, {
                                className: E.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: O,
                                placeholder: y.intl.string(y.t.drVw4T),
                                renderOptionLabel: S,
                                renderOptionValue: T,
                                select: ei,
                                serialize: (e) => {
                                    switch (e) {
                                        case C.cd.DESKTOP:
                                            return y.intl.string(y.t["QXc01+"]);
                                        case C.cd.CONSOLE:
                                            return y.intl.string(y.t["8lAfuB"]);
                                        default:
                                            return (0, u.vE)(e);
                                    }
                                },
                                size: "sm",
                            })
                          : (0, _.$J)(N) && !V && et !== g.LI.DESKTOP
                            ? Q
                                ? (0, r.jsx)("div", {
                                      className: E.button,
                                      children: (0, r.jsx)(i.zxk, {
                                          variant: "secondary",
                                          onClick: null != ec ? ec : void 0,
                                          text: el,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, r.jsx)(l.zx, {
                                      "data-migration-pending": !0,
                                      color: l.Tt.PRIMARY,
                                      onClick: eu,
                                      disabled: ed,
                                      className: E.button,
                                      children: (0, r.jsxs)("div", {
                                          className: E.ctaInner,
                                          children: [q.render(), y.intl.string(y.t.nPThNb)],
                                      }),
                                  })
                            : Y
                              ? (0, r.jsx)("div", {
                                    className: E.button,
                                    children: (0, r.jsx)(i.zxk, {
                                        variant: "primary",
                                        onClick: null != ec ? ec : void 0,
                                        text: el,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, b.Rt)(N)
                                ? (0, r.jsx)("div", {
                                      className: E.button,
                                      children: (0, r.jsx)(i.zxk, {
                                          variant: "primary",
                                          icon: (0, v.getPrimaryCtaIcon)(N),
                                          onClick: null != ec ? ec : void 0,
                                          text: el,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, r.jsx)("div", {
                                      className: E.button,
                                      children: (0, r.jsx)(i.zxk, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: y.intl.string(y.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : K &&
                      !U &&
                      (ef = H
                          ? (0, r.jsxs)(i.hE2, {
                                direction: "horizontal",
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(i.zxk, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: y.intl.string(y.t.V293qn),
                                    }),
                                    (0, r.jsx)(i.zxk, {
                                        variant: "primary",
                                        onClick: () => (0, v.openQuestMinorEnrollmentBlockModal)(N, R, I),
                                        text: y.intl.string(y.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, r.jsx)("div", {
                                className: E.button,
                                children: (0, r.jsx)(i.zxk, {
                                    loading: Z,
                                    variant: "primary",
                                    onClick: null != ec ? ec : void 0,
                                    text: el,
                                    icon: (0, v.getPrimaryCtaIcon)(N),
                                    fullWidth: !0,
                                }),
                            }))
            : (ef = (0, r.jsx)("div", {
                  className: E.button,
                  children: (0, r.jsx)(i.zxk, {
                      variant: "secondary",
                      disabled: !0,
                      text: y.intl.format(y.t["14o6QY"], { expiryDate: M }),
                      fullWidth: !0,
                  }),
              })),
    null == ef)
        ? null
        : (0, r.jsxs)("div", {
              className: E.container,
              children: [
                  (0, r.jsx)("div", {
                      className: E.ctaItem,
                      children: ef,
                  }),
                  ea &&
                      (0, r.jsx)("div", {
                          className: E.ctaItem,
                          children: (0, r.jsx)(a.B6, {
                              className: E.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (et) {
                                      case g.LI.DESKTOP:
                                          return e === C.cd.DESKTOP;
                                      case g.LI.CONSOLE:
                                          return e === C.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: O,
                              placeholder: y.intl.string(y.t.drVw4T),
                              renderOptionLabel: S,
                              renderOptionValue: T,
                              select: ei,
                              serialize: (e) => {
                                  switch (e) {
                                      case C.cd.DESKTOP:
                                          return y.intl.string(y.t["QXc01+"]);
                                      case C.cd.CONSOLE:
                                          return y.intl.string(y.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                          }),
                      }),
              ],
          });
}
