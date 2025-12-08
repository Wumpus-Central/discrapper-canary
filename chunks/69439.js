n.d(t, { Z: () => w }), n(388685);
var r = n(54381),
    s = n(473749),
    o = n(442837),
    a = n(199849),
    i = n(159691),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(823379),
    p = n(617136),
    m = n(616022),
    f = n(49436),
    g = n(373370),
    x = n(968843),
    h = n(862657),
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
            return (0, d.vE)(e[0].value);
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
        D = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        q = (0, j.g2)({ useReducedMotion: D }),
        Q = (0, p.O5)(),
        L = (0, x._s)({ quest: N }),
        V = (0, x.z)(N),
        M = (0, x.B6)(N.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: W,
            isEnrolling: Z,
            isQuestEnrollmentBlocked: U,
        } = (0, o.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(N.id) || m.Z.isFetchingRewardCode(N.id),
            isEnrolling: m.Z.isEnrolling(N.id),
            isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil,
        })),
        H = (null == (t = N.userStatus) ? void 0 : t.enrolledAt) != null,
        z = (null == (n = N.userStatus) ? void 0 : n.completedAt) != null,
        G = z && (null == (w = N.userStatus) ? void 0 : w.claimedAt) == null,
        F = (0, h.iQ)(N),
        K = !(0, h.zi)(N),
        X = (0, x._Q)(N),
        Y = (0, _.PB)(N),
        J = (0, _.HJ)(N),
        $ = (0, _.Vl)(N),
        ee = (0, x.Rf)(N),
        [et, en, er] = (0, x.me)(N, ee),
        es = K && X === x.OH.ACCEPTED,
        eo = es && et === f.LI.SELECT,
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
        { startingConsoleQuest: eu, startConsoleQuest: ed } = (0, x.GI)({
            questId: N.id,
            beforeRequest: () => {
                q.startAnimation(),
                    Q({
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
        { launchInGameActivity: em } = (0, x.zB)(N),
        ef = (0, g.CR)({
            quest: N,
            shortText: !0,
        }),
        eg = null;
    return (F && G
        ? (eg = (0, r.jsx)("div", {
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
          ? (eg = Y
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
                                text: ef,
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
            ? K && G
                ? (eg = (0, r.jsx)("div", {
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
                  ? (eg = (0, r.jsx)("div", {
                        className: E.button,
                        children: (0, r.jsx)(i.zxk, {
                            variant: "primary",
                            loading: Z,
                            onClick: null != ec ? ec : void 0,
                            text: el,
                            fullWidth: !0,
                        }),
                    }))
                  : K && H && !ep
                    ? (eg = eo
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
                                            return (0, d.vE)(e);
                                    }
                                },
                                size: "sm",
                            })
                          : (0, _.$J)(N) && !V && et !== f.LI.DESKTOP
                            ? L
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
                                      onClick: ed,
                                      disabled: eu,
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
                      !H &&
                      (eg = U
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
            : (eg = (0, r.jsx)("div", {
                  className: E.button,
                  children: (0, r.jsx)(i.zxk, {
                      variant: "secondary",
                      disabled: !0,
                      text: y.intl.format(y.t["14o6QY"], { expiryDate: M }),
                      fullWidth: !0,
                  }),
              })),
    null == eg)
        ? null
        : (0, r.jsxs)("div", {
              className: E.container,
              children: [
                  (0, r.jsx)("div", {
                      className: E.ctaItem,
                      children: eg,
                  }),
                  ea &&
                      (0, r.jsx)("div", {
                          className: E.ctaItem,
                          children: (0, r.jsx)(a.B6, {
                              className: E.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (et) {
                                      case f.LI.DESKTOP:
                                          return e === C.cd.DESKTOP;
                                      case f.LI.CONSOLE:
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
