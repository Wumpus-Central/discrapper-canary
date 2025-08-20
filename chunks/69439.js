n.d(t, { Z: () => A }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(680018),
    s = n(374415),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(823379),
    f = n(617136),
    _ = n(509212),
    p = n(113434),
    h = n(569984),
    m = n(497505),
    g = n(530691),
    E = n(110560),
    b = n(667105),
    y = n(46140),
    O = n(388032),
    v = n(924304);
let I = [
    {
        value: y.cd.DESKTOP,
        get label() {
            return O.intl.string(O.t.QXc019);
        },
    },
    {
        value: y.cd.CONSOLE,
        get label() {
            return O.intl.string(O.t["8lAfuL"]);
        },
    },
];
function T(e) {
    let t,
        n,
        { value: i } = e;
    switch (i) {
        case y.cd.DESKTOP:
            (n = (0, r.jsx)(c.pzj, {})), (t = O.intl.string(O.t.QXc019));
            break;
        case y.cd.CONSOLE:
            (n = (0, r.jsx)(c.iWm, {})), (t = O.intl.string(O.t["8lAfuL"]));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)("div", {
        className: v.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function S(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case y.cd.DESKTOP:
            return (0, r.jsxs)("span", {
                className: v.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(c.pzj, {}), O.intl.string(O.t["g6Dr4+"])],
            });
        case y.cd.CONSOLE:
            return (0, r.jsxs)("span", {
                className: v.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(c.iWm, {}), O.intl.string(O.t.iyNbj4)],
            });
        default:
            return (0, d.vE)(e[0].value);
    }
}
function A(e) {
    var t, n, A, C;
    let {
            quest: N,
            questContent: R,
            onReceiveErrorHints: P,
            contentPosition: w,
            rowIndex: D,
            sourceQuestContent: x,
        } = e,
        L = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        j = (0, b.g2)({ useReducedMotion: L }),
        M = (0, f.O5)(),
        k = (0, p._s)({ quest: N }),
        U = (0, p.z)(N),
        G = (0, p.B6)(N.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: B,
            isEnrolling: Z,
            isQuestEnrollmentBlocked: V,
        } = (0, a.cj)([h.Z], () => ({
            isClaiming: h.Z.isClaimingReward(N.id) || h.Z.isFetchingRewardCode(N.id),
            isEnrolling: h.Z.isEnrolling(N.id),
            isQuestEnrollmentBlocked: null != h.Z.questEnrollmentBlockedUntil,
        })),
        F = (null == (t = N.userStatus) ? void 0 : t.enrolledAt) != null,
        H = (null == (n = N.userStatus) ? void 0 : n.completedAt) != null,
        Y = H && (null == (A = N.userStatus) ? void 0 : A.claimedAt) == null,
        W = (0, _.iQ)(N),
        K = !(0, _.zi)(N),
        z = (0, p._Q)(N),
        q = (0, _.Xv)(N.config),
        X = (0, _.PB)(N),
        Q = (0, _.HJ)(N),
        J = (0, _.Vl)(N),
        $ = (0, p.Rf)(N),
        [ee, et, en] = (0, p.me)(N, $),
        er = K && z === p.OH.ACCEPTED,
        ei = er && ee === m.LI.SELECT,
        ea = er && !ei && et.length > 1,
        eo = i.useCallback(
            (e) => {
                en(e), e === y.cd.DESKTOP && P([]);
            },
            [en, P],
        ),
        { text: es, onClick: el } = (0, b.Ks)({
            progressState: z,
            quest: N,
            questContent: R,
            isCollectibleQuest: q,
            questContentPosition: w,
            questContentRowIndex: D,
            inGiftInventory: !0,
            isVideoQuest: X,
            inGameQuest: J,
            sourceQuestContent: x,
        }),
        { startingConsoleQuest: ec, startConsoleQuest: eu } = (0, p.GI)({
            questId: N.id,
            beforeRequest: () => {
                j.startAnimation(),
                    M({
                        questId: N.id,
                        questContent: R,
                        questContentCTA: f.jZ.DEFIBRILLATOR,
                        questContentPosition: w,
                        questContentRowIndex: D,
                        sourceQuestContent: x,
                    });
            },
            afterRequest: (e) => {
                j.stopAnimation(), P(e);
            },
        }),
        ed = (0, g.f)({
            location: y.dr.QUEST_HOME_DESKTOP,
            questFeatures: N.config.features,
        }),
        ef = (null == (C = N.userStatus) ? void 0 : C.claimedAt) != null,
        e_ = F && !ef,
        ep = null;
    return (W && Y
        ? (ep = (0, r.jsx)("div", {
              className: v.button,
              children: (0, r.jsx)(o.z, {
                  variant: "primary",
                  loading: B,
                  onClick: null != el ? el : void 0,
                  text: es,
                  fullWidth: !0,
              }),
          }))
        : H
          ? (ep = X
                ? (0, r.jsxs)(s.h, {
                      direction: "horizontal",
                      fullWidth: !0,
                      children: [
                          (0, r.jsx)(o.z, {
                              variant: "secondary",
                              icon: c.Oe7,
                              text: O.intl.string(O.t.YsCuyM),
                              onClick: () => {
                                  (0, E.openVideoQuestModal)({
                                      quest: N,
                                      questContent: R,
                                      sourceQuestContent: x,
                                      sourceQuestContentCTA: f.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(o.z, {
                              variant: "primary",
                              onClick: null != el ? el : void 0,
                              text: es,
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: v.button,
                      children: (0, r.jsx)(o.z, {
                          variant: "primary",
                          onClick: null != el ? el : void 0,
                          text: es,
                          fullWidth: !0,
                      }),
                  }))
          : K
            ? K && Y
                ? (ep = (0, r.jsx)("div", {
                      className: v.button,
                      children: (0, r.jsx)(o.z, {
                          variant: "primary",
                          loading: B,
                          onClick: null != el ? el : void 0,
                          text: es,
                          fullWidth: !0,
                      }),
                  }))
                : Q
                  ? (ep = ed
                        ? (0, r.jsx)("div", {
                              className: v.button,
                              children: (0, r.jsx)(o.z, {
                                  variant: "primary",
                                  loading: Z,
                                  onClick: null != el ? el : void 0,
                                  text: es,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: v.button,
                              children: (0, r.jsx)(o.z, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: O.intl.string(O.t.BkZhUF),
                                  fullWidth: !0,
                              }),
                          }))
                  : K && e_
                    ? (ep = ei
                          ? (0, r.jsx)(c.PhF, {
                                className: v.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: I,
                                placeholder: O.intl.string(O.t.drVw4e),
                                renderOptionLabel: T,
                                renderOptionValue: S,
                                select: eo,
                                serialize: (e) => {
                                    switch (e) {
                                        case y.cd.DESKTOP:
                                            return O.intl.string(O.t.QXc019);
                                        case y.cd.CONSOLE:
                                            return O.intl.string(O.t["8lAfuL"]);
                                        default:
                                            return (0, d.vE)(e);
                                    }
                                },
                            })
                          : (0, _.$J)(N) && !U && ee !== m.LI.DESKTOP
                            ? k
                                ? (0, r.jsx)("div", {
                                      className: v.button,
                                      children: (0, r.jsx)(o.z, {
                                          variant: "secondary",
                                          onClick: null != el ? el : void 0,
                                          text: es,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, r.jsx)(l.zx, {
                                      "data-migration-pending": !0,
                                      color: l.Tt.PRIMARY,
                                      onClick: eu,
                                      disabled: ec,
                                      className: v.button,
                                      children: (0, r.jsxs)("div", {
                                          className: v.ctaInner,
                                          children: [j.render(), O.intl.string(O.t.nPThNT)],
                                      }),
                                  })
                            : X || (J && N.config.features.includes(y.S7.START_QUEST_CTA))
                              ? (0, r.jsx)("div", {
                                    className: v.button,
                                    children: (0, r.jsx)(o.z, {
                                        variant: "primary",
                                        onClick: null != el ? el : void 0,
                                        text: es,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, r.jsx)("div", {
                                    className: v.button,
                                    children: (0, r.jsx)(o.z, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: O.intl.string(O.t["9KoPyM"]),
                                        fullWidth: !0,
                                    }),
                                }))
                    : K &&
                      !F &&
                      (ep = V
                          ? (0, r.jsxs)(s.h, {
                                direction: "horizontal",
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(o.z, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: O.intl.string(O.t.V293qq),
                                    }),
                                    (0, r.jsx)(o.z, {
                                        variant: "primary",
                                        onClick: () => (0, E.openQuestMinorEnrollmentBlockModal)(N, R, x),
                                        text: O.intl.string(O.t.vY9GgI),
                                    }),
                                ],
                            })
                          : (0, r.jsx)("div", {
                                className: v.button,
                                children: (0, r.jsx)(o.z, {
                                    loading: Z,
                                    variant: "primary",
                                    onClick: null != el ? el : void 0,
                                    text: es,
                                    fullWidth: !0,
                                }),
                            }))
            : (ep = (0, r.jsx)("div", {
                  className: v.button,
                  children: (0, r.jsx)(o.z, {
                      variant: "secondary",
                      disabled: !0,
                      text: O.intl.format(O.t["14o6QU"], { expiryDate: G }),
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
                  ea &&
                      (0, r.jsx)("div", {
                          className: v.ctaItem,
                          children: (0, r.jsx)(c.PhF, {
                              className: v.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (ee) {
                                      case m.LI.DESKTOP:
                                          return e === y.cd.DESKTOP;
                                      case m.LI.CONSOLE:
                                          return e === y.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: I,
                              placeholder: O.intl.string(O.t.drVw4e),
                              renderOptionLabel: T,
                              renderOptionValue: S,
                              select: eo,
                              serialize: (e) => {
                                  switch (e) {
                                      case y.cd.DESKTOP:
                                          return O.intl.string(O.t.QXc019);
                                      case y.cd.CONSOLE:
                                          return O.intl.string(O.t["8lAfuL"]);
                                  }
                              },
                          }),
                      }),
              ],
          });
}
