n.d(t, { Z: () => N }), n(388685);
var a = n(54381),
    r = n(473749),
    l = n(442837),
    i = n(199849),
    s = n(159691),
    o = n(755721),
    c = n(481060),
    d = n(607070),
    u = n(823379),
    m = n(617136),
    p = n(616022),
    h = n(49436),
    f = n(373370),
    x = n(968843),
    b = n(862657),
    g = n(254579),
    v = n(283689),
    j = n(659302),
    y = n(110560),
    C = n(324805),
    _ = n(388032),
    S = n(489229);
let E = [
    {
        value: C.cd.DESKTOP,
        get label() {
            return _.intl.string(_.t["QXc01+"]);
        },
    },
    {
        value: C.cd.CONSOLE,
        get label() {
            return _.intl.string(_.t["8lAfuB"]);
        },
    },
];
function T(e) {
    let t,
        n,
        { value: r } = e;
    switch (r) {
        case C.cd.DESKTOP:
            (n = (0, a.jsx)(c.pzj, {})), (t = _.intl.string(_.t["QXc01+"]));
            break;
        case C.cd.CONSOLE:
            (n = (0, a.jsx)(c.iWm, {})), (t = _.intl.string(_.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, a.jsxs)("div", {
        className: S.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function O(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case C.cd.DESKTOP:
            return (0, a.jsxs)("span", {
                className: S.platformSelectorPrimaryLabel,
                children: [(0, a.jsx)(c.pzj, {}), _.intl.string(_.t.g6Dr44)],
            });
        case C.cd.CONSOLE:
            return (0, a.jsxs)("span", {
                className: S.platformSelectorPrimaryLabel,
                children: [(0, a.jsx)(c.iWm, {}), _.intl.string(_.t.iyNbj5)],
            });
        default:
            return (0, u.vE)(e[0].value);
    }
}
function N(e) {
    var t, n, N, w;
    let {
            quest: P,
            questContent: I,
            onReceiveErrorHints: k,
            contentPosition: R,
            rowIndex: A,
            sourceQuestContent: Z,
        } = e,
        D = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        L = (0, j.g2)({ useReducedMotion: D }),
        M = (0, m.O5)(),
        U = (0, x._s)({ quest: P }),
        B = (0, x.z)(P),
        F = (0, x.B6)(P.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: G,
            isEnrolling: V,
            isQuestEnrollmentBlocked: H,
        } = (0, l.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(P.id) || p.Z.isFetchingRewardCode(P.id),
            isEnrolling: p.Z.isEnrolling(P.id),
            isQuestEnrollmentBlocked: null != p.Z.questEnrollmentBlockedUntil,
        })),
        z = (null == (t = P.userStatus) ? void 0 : t.enrolledAt) != null,
        W = (null == (n = P.userStatus) ? void 0 : n.completedAt) != null,
        K = W && (null == (N = P.userStatus) ? void 0 : N.claimedAt) == null,
        q = (0, b.iQ)(P),
        Y = !(0, b.zi)(P),
        Q = (0, x._Q)(P),
        X = (0, g.PB)(P),
        J = (0, g.HJ)(P),
        $ = (0, g.Vl)(P),
        ee = (0, x.Rf)(P),
        [et, en, ea] = (0, x.me)(P, ee),
        er = Y && Q === x.OH.ACCEPTED,
        el = er && et === h.LI.SELECT,
        ei = er && !el && en.length > 1,
        es = r.useCallback(
            (e) => {
                ea(e), e === C.cd.DESKTOP && k([]);
            },
            [ea, k],
        ),
        { text: eo, onClick: ec } = (0, j.Ks)({
            progressState: Q,
            quest: P,
            questContent: I,
            questContentPosition: R,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: X,
            inGameQuest: $,
            sourceQuestContent: Z,
        }),
        { startingConsoleQuest: ed, startConsoleQuest: eu } = (0, x.GI)({
            questId: P.id,
            beforeRequest: () => {
                L.startAnimation(),
                    M({
                        questId: P.id,
                        questContent: I,
                        questContentCTA: m.jZ.DEFIBRILLATOR,
                        questContentPosition: R,
                        questContentRowIndex: A,
                        sourceQuestContent: Z,
                    });
            },
            afterRequest: (e) => {
                L.stopAnimation(), k(e);
            },
        }),
        em = (null == (w = P.userStatus) ? void 0 : w.claimedAt) != null,
        { launchInGameActivity: ep } = (0, x.zB)(P),
        eh = (0, f.CR)({
            quest: P,
            shortText: !0,
        }),
        ef = null;
    return (q && K
        ? (ef = (0, a.jsx)("div", {
              className: S.button,
              children: (0, a.jsx)(s.zxk, {
                  variant: "primary",
                  loading: G,
                  onClick: null != ec ? ec : void 0,
                  text: eo,
                  fullWidth: !0,
              }),
          }))
        : W
          ? (ef = X
                ? (0, a.jsxs)(s.hE2, {
                      direction: "horizontal",
                      fullWidth: !0,
                      children: [
                          (0, a.jsx)(s.zxk, {
                              variant: "secondary",
                              icon: c.Oe7,
                              text: _.intl.string(_.t.YsCuyF),
                              onClick: () => {
                                  (0, y.openVideoQuestModal)({
                                      quest: P,
                                      questContent: I,
                                      sourceQuestContent: Z,
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
                : (0, v.Rt)(P)
                  ? (0, a.jsxs)(s.hE2, {
                        direction: "horizontal",
                        fullWidth: !0,
                        children: [
                            (0, a.jsx)(s.zxk, {
                                variant: "secondary",
                                icon: P.config.features.includes(C.S7.CLOUD_GAMING_ACTIVITY) ? c.v3n : c.iWm,
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
          : Y
            ? Y && K
                ? (ef = (0, a.jsx)("div", {
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
                  ? (ef = (0, a.jsx)("div", {
                        className: S.button,
                        children: (0, a.jsx)(s.zxk, {
                            variant: "primary",
                            loading: V,
                            onClick: null != ec ? ec : void 0,
                            text: eo,
                            fullWidth: !0,
                        }),
                    }))
                  : Y && z && !em
                    ? (ef = el
                          ? (0, a.jsx)(i.B6, {
                                className: S.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: E,
                                placeholder: _.intl.string(_.t.drVw4T),
                                renderOptionLabel: T,
                                renderOptionValue: O,
                                select: es,
                                serialize: (e) => {
                                    switch (e) {
                                        case C.cd.DESKTOP:
                                            return _.intl.string(_.t["QXc01+"]);
                                        case C.cd.CONSOLE:
                                            return _.intl.string(_.t["8lAfuB"]);
                                        default:
                                            return (0, u.vE)(e);
                                    }
                                },
                                size: "sm",
                            })
                          : (0, g.$J)(P) && !B && et !== h.LI.DESKTOP
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
                                          children: [L.render(), _.intl.string(_.t.nPThNb)],
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
                              : (0, v.Rt)(P)
                                ? (0, a.jsx)("div", {
                                      className: S.button,
                                      children: (0, a.jsx)(s.zxk, {
                                          variant: "primary",
                                          icon: (0, y.getPrimaryCtaIcon)(P),
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
                                          text: _.intl.string(_.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : Y &&
                      !z &&
                      (ef = H
                          ? (0, a.jsxs)(s.hE2, {
                                direction: "horizontal",
                                fullWidth: !0,
                                children: [
                                    (0, a.jsx)(s.zxk, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: _.intl.string(_.t.V293qn),
                                    }),
                                    (0, a.jsx)(s.zxk, {
                                        variant: "primary",
                                        onClick: () => (0, y.openQuestMinorEnrollmentBlockModal)(P, I, Z),
                                        text: _.intl.string(_.t.vY9GgG),
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
                                    icon: (0, y.getPrimaryCtaIcon)(P),
                                    fullWidth: !0,
                                }),
                            }))
            : (ef = (0, a.jsx)("div", {
                  className: S.button,
                  children: (0, a.jsx)(s.zxk, {
                      variant: "secondary",
                      disabled: !0,
                      text: _.intl.format(_.t["14o6QY"], { expiryDate: F }),
                      fullWidth: !0,
                  }),
              })),
    null == ef)
        ? null
        : (0, a.jsxs)("div", {
              className: S.container,
              children: [
                  (0, a.jsx)("div", {
                      className: S.ctaItem,
                      children: ef,
                  }),
                  ei &&
                      (0, a.jsx)("div", {
                          className: S.ctaItem,
                          children: (0, a.jsx)(i.B6, {
                              className: S.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (et) {
                                      case h.LI.DESKTOP:
                                          return e === C.cd.DESKTOP;
                                      case h.LI.CONSOLE:
                                          return e === C.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: E,
                              placeholder: _.intl.string(_.t.drVw4T),
                              renderOptionLabel: T,
                              renderOptionValue: O,
                              select: es,
                              serialize: (e) => {
                                  switch (e) {
                                      case C.cd.DESKTOP:
                                          return _.intl.string(_.t["QXc01+"]);
                                      case C.cd.CONSOLE:
                                          return _.intl.string(_.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                          }),
                      }),
              ],
          });
}
