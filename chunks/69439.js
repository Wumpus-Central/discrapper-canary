n.d(t, { Z: () => y }), n(388685);
var r = n(255367),
    s = n(73800),
    o = n(442837),
    a = n(755721),
    i = n(481060),
    l = n(607070),
    c = n(823379),
    u = n(617136),
    d = n(509212),
    p = n(113434),
    m = n(569984),
    g = n(497505),
    f = n(110560),
    x = n(667105),
    h = n(46140),
    j = n(388032),
    _ = n(142468);
let b = [
    {
        value: h.cd.DESKTOP,
        get label() {
            return j.intl.string(j.t.QXc019);
        },
    },
    {
        value: h.cd.CONSOLE,
        get label() {
            return j.intl.string(j.t["8lAfuL"]);
        },
    },
];
function v(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case h.cd.DESKTOP:
            (n = (0, r.jsx)(i.pzj, {})), (t = j.intl.string(j.t.QXc019));
            break;
        case h.cd.CONSOLE:
            (n = (0, r.jsx)(i.iWm, {})), (t = j.intl.string(j.t["8lAfuL"]));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)("div", {
        className: _.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function C(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case h.cd.DESKTOP:
            return (0, r.jsxs)("span", {
                className: _.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(i.pzj, {}), j.intl.string(j.t["g6Dr4+"])],
            });
        case h.cd.CONSOLE:
            return (0, r.jsxs)("span", {
                className: _.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(i.iWm, {}), j.intl.string(j.t.iyNbj4)],
            });
        default:
            return (0, c.vE)(e[0].value);
    }
}
function y(e) {
    var t, n, y, O;
    let {
            quest: E,
            questContent: S,
            onReceiveErrorHints: T,
            contentPosition: w,
            rowIndex: P,
            sourceQuestContent: N,
        } = e,
        A = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        R = (0, x.g2)({ useReducedMotion: A }),
        B = (0, u.O5)(),
        k = (0, p._s)({ quest: E }),
        I = (0, p.z)(E),
        q = (0, p.B6)(E.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: Q,
            isEnrolling: D,
            isQuestEnrollmentBlocked: V,
        } = (0, o.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(E.id) || m.Z.isFetchingRewardCode(E.id),
            isEnrolling: m.Z.isEnrolling(E.id),
            isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil,
        })),
        L = (null == (t = E.userStatus) ? void 0 : t.enrolledAt) != null,
        M = (null == (n = E.userStatus) ? void 0 : n.completedAt) != null,
        Z = M && (null == (y = E.userStatus) ? void 0 : y.claimedAt) == null,
        W = (0, d.iQ)(E),
        U = !(0, d.zi)(E),
        H = (0, p._Q)(E),
        z = (0, d.Xv)(E.config),
        F = (0, d.PB)(E),
        X = (0, d.HJ)(E),
        K = (0, d.Vl)(E),
        Y = (0, p.Rf)(E),
        [G, J, $] = (0, p.me)(E, Y),
        ee = U && H === p.OH.ACCEPTED,
        et = ee && G === g.LI.SELECT,
        en = ee && !et && J.length > 1,
        er = s.useCallback(
            (e) => {
                $(e), e === h.cd.DESKTOP && T([]);
            },
            [$, T],
        ),
        { text: es, onClick: eo } = (0, x.Ks)({
            progressState: H,
            quest: E,
            questContent: S,
            isCollectibleQuest: z,
            questContentPosition: w,
            questContentRowIndex: P,
            inGiftInventory: !0,
            isVideoQuest: F,
            inGameQuest: K,
            sourceQuestContent: N,
        }),
        { startingConsoleQuest: ea, startConsoleQuest: ei } = (0, p.GI)({
            questId: E.id,
            beforeRequest: () => {
                R.startAnimation(),
                    B({
                        questId: E.id,
                        questContent: S,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: w,
                        questContentRowIndex: P,
                        sourceQuestContent: N,
                    });
            },
            afterRequest: (e) => {
                R.stopAnimation(), T(e);
            },
        }),
        el = (null == (O = E.userStatus) ? void 0 : O.claimedAt) != null,
        ec = null;
    return (W && Z
        ? (ec = (0, r.jsx)(a.zx, {
              color: a.Tt.BRAND,
              submitting: Q,
              onClick: null != eo ? eo : void 0,
              className: _.button,
              children: es,
          }))
        : M
          ? (ec = F
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.zx, {
                              color: a.Tt.PRIMARY,
                              className: _.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, f.openVideoQuestModal)({
                                      quest: E,
                                      questContent: S,
                                      sourceQuestContent: N,
                                      sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                              children: (0, r.jsxs)("div", {
                                  className: _.ctaInner,
                                  children: [
                                      (0, r.jsx)(i.Oe7, { className: _.videoQuestPlayIcon }),
                                      (0, r.jsx)("span", { children: j.intl.string(j.t.YsCuyM) }),
                                  ],
                              }),
                          }),
                          (0, r.jsx)(a.zx, {
                              color: a.Tt.BRAND,
                              className: _.button,
                              onClick: null != eo ? eo : void 0,
                              children: es,
                          }),
                      ],
                  })
                : (0, r.jsx)(a.zx, {
                      color: a.Tt.BRAND,
                      className: _.button,
                      onClick: null != eo ? eo : void 0,
                      children: es,
                  }))
          : U
            ? U && Z
                ? (ec = (0, r.jsx)(a.zx, {
                      color: a.Tt.BRAND,
                      submitting: Q,
                      onClick: null != eo ? eo : void 0,
                      className: _.button,
                      children: es,
                  }))
                : X
                  ? (ec = (0, r.jsx)(a.zx, {
                        color: a.Tt.PRIMARY,
                        disabled: !0,
                        className: _.button,
                        children: j.intl.string(j.t.BkZhUF),
                    }))
                  : U && L && !el
                    ? (ec = et
                          ? (0, r.jsx)(i.PhF, {
                                className: _.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: b,
                                placeholder: j.intl.string(j.t.drVw4e),
                                renderOptionLabel: v,
                                renderOptionValue: C,
                                select: er,
                                serialize: (e) => {
                                    switch (e) {
                                        case h.cd.DESKTOP:
                                            return j.intl.string(j.t.QXc019);
                                        case h.cd.CONSOLE:
                                            return j.intl.string(j.t["8lAfuL"]);
                                        default:
                                            return (0, c.vE)(e);
                                    }
                                },
                            })
                          : (0, d.$J)(E) && !I && G !== g.LI.DESKTOP
                            ? k
                                ? (0, r.jsx)(a.zx, {
                                      color: a.Tt.PRIMARY,
                                      className: _.button,
                                      onClick: null != eo ? eo : void 0,
                                      children: es,
                                  })
                                : (0, r.jsx)(a.zx, {
                                      color: a.Tt.PRIMARY,
                                      onClick: ei,
                                      disabled: ea,
                                      className: _.button,
                                      children: (0, r.jsxs)("div", {
                                          className: _.ctaInner,
                                          children: [R.render(), j.intl.string(j.t.nPThNT)],
                                      }),
                                  })
                            : F || (K && E.config.features.includes(h.S7.START_QUEST_CTA))
                              ? (0, r.jsx)(a.zx, {
                                    color: a.Tt.BRAND,
                                    onClick: null != eo ? eo : void 0,
                                    className: _.button,
                                    children: es,
                                })
                              : (0, r.jsx)(a.zx, {
                                    color: a.Tt.PRIMARY,
                                    disabled: !0,
                                    className: _.button,
                                    children: j.intl.string(j.t["9KoPyM"]),
                                }))
                    : U &&
                      !L &&
                      (ec = V
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(a.zx, {
                                        color: a.Tt.PRIMARY,
                                        className: _.button,
                                        disabled: !0,
                                        children: j.intl.string(j.t.V293qq),
                                    }),
                                    (0, r.jsx)(a.zx, {
                                        color: a.Tt.BRAND,
                                        className: _.button,
                                        onClick: () => (0, f.openQuestMinorEnrollmentBlockModal)(E, S, N),
                                        children: j.intl.string(j.t.vY9GgI),
                                    }),
                                ],
                            })
                          : (0, r.jsx)(a.zx, {
                                submitting: D,
                                color: a.Tt.BRAND,
                                onClick: null != eo ? eo : void 0,
                                className: _.button,
                                children: es,
                            }))
            : (ec = (0, r.jsx)(a.zx, {
                  color: a.Tt.PRIMARY,
                  disabled: !0,
                  className: _.button,
                  children: j.intl.format(j.t["14o6QU"], { expiryDate: q }),
              })),
    null == ec)
        ? null
        : (0, r.jsxs)("div", {
              className: _.container,
              children: [
                  (0, r.jsx)("div", {
                      className: _.ctaItem,
                      children: ec,
                  }),
                  en &&
                      (0, r.jsx)("div", {
                          className: _.ctaItem,
                          children: (0, r.jsx)(i.PhF, {
                              className: _.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (G) {
                                      case g.LI.DESKTOP:
                                          return e === h.cd.DESKTOP;
                                      case g.LI.CONSOLE:
                                          return e === h.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: b,
                              placeholder: j.intl.string(j.t.drVw4e),
                              renderOptionLabel: v,
                              renderOptionValue: C,
                              select: er,
                              serialize: (e) => {
                                  switch (e) {
                                      case h.cd.DESKTOP:
                                          return j.intl.string(j.t.QXc019);
                                      case h.cd.CONSOLE:
                                          return j.intl.string(j.t["8lAfuL"]);
                                  }
                              },
                          }),
                      }),
              ],
          });
}
