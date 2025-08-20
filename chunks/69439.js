n.d(t, { Z: () => T }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(607070),
    c = n(823379),
    u = n(617136),
    d = n(509212),
    f = n(113434),
    _ = n(569984),
    p = n(497505),
    h = n(530691),
    m = n(110560),
    g = n(667105),
    E = n(46140),
    b = n(388032),
    y = n(924304);
let O = [
    {
        value: E.cd.DESKTOP,
        get label() {
            return b.intl.string(b.t.QXc019);
        },
    },
    {
        value: E.cd.CONSOLE,
        get label() {
            return b.intl.string(b.t["8lAfuL"]);
        },
    },
];
function v(e) {
    let t,
        n,
        { value: i } = e;
    switch (i) {
        case E.cd.DESKTOP:
            (n = (0, r.jsx)(s.pzj, {})), (t = b.intl.string(b.t.QXc019));
            break;
        case E.cd.CONSOLE:
            (n = (0, r.jsx)(s.iWm, {})), (t = b.intl.string(b.t["8lAfuL"]));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)("div", {
        className: y.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function I(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case E.cd.DESKTOP:
            return (0, r.jsxs)("span", {
                className: y.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(s.pzj, {}), b.intl.string(b.t["g6Dr4+"])],
            });
        case E.cd.CONSOLE:
            return (0, r.jsxs)("span", {
                className: y.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(s.iWm, {}), b.intl.string(b.t.iyNbj4)],
            });
        default:
            return (0, c.vE)(e[0].value);
    }
}
function T(e) {
    var t, n, T, S;
    let {
            quest: A,
            questContent: C,
            onReceiveErrorHints: N,
            contentPosition: R,
            rowIndex: P,
            sourceQuestContent: w,
        } = e,
        D = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        x = (0, g.g2)({ useReducedMotion: D }),
        L = (0, u.O5)(),
        j = (0, f._s)({ quest: A }),
        M = (0, f.z)(A),
        k = (0, f.B6)(A.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: U,
            isEnrolling: G,
            isQuestEnrollmentBlocked: B,
        } = (0, a.cj)([_.Z], () => ({
            isClaiming: _.Z.isClaimingReward(A.id) || _.Z.isFetchingRewardCode(A.id),
            isEnrolling: _.Z.isEnrolling(A.id),
            isQuestEnrollmentBlocked: null != _.Z.questEnrollmentBlockedUntil,
        })),
        Z = (null == (t = A.userStatus) ? void 0 : t.enrolledAt) != null,
        V = (null == (n = A.userStatus) ? void 0 : n.completedAt) != null,
        F = V && (null == (T = A.userStatus) ? void 0 : T.claimedAt) == null,
        H = (0, d.iQ)(A),
        Y = !(0, d.zi)(A),
        W = (0, f._Q)(A),
        K = (0, d.Xv)(A.config),
        z = (0, d.PB)(A),
        q = (0, d.HJ)(A),
        X = (0, d.Vl)(A),
        Q = (0, f.Rf)(A),
        [J, $, ee] = (0, f.me)(A, Q),
        et = Y && W === f.OH.ACCEPTED,
        en = et && J === p.LI.SELECT,
        er = et && !en && $.length > 1,
        ei = i.useCallback(
            (e) => {
                ee(e), e === E.cd.DESKTOP && N([]);
            },
            [ee, N],
        ),
        { text: ea, onClick: eo } = (0, g.Ks)({
            progressState: W,
            quest: A,
            questContent: C,
            isCollectibleQuest: K,
            questContentPosition: R,
            questContentRowIndex: P,
            inGiftInventory: !0,
            isVideoQuest: z,
            inGameQuest: X,
            sourceQuestContent: w,
        }),
        { startingConsoleQuest: es, startConsoleQuest: el } = (0, f.GI)({
            questId: A.id,
            beforeRequest: () => {
                x.startAnimation(),
                    L({
                        questId: A.id,
                        questContent: C,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: R,
                        questContentRowIndex: P,
                        sourceQuestContent: w,
                    });
            },
            afterRequest: (e) => {
                x.stopAnimation(), N(e);
            },
        }),
        ec = (0, h.f)({
            location: E.dr.QUEST_HOME_DESKTOP,
            questFeatures: A.config.features,
        }),
        eu = (null == (S = A.userStatus) ? void 0 : S.claimedAt) != null,
        ed = Z && !eu,
        ef = null;
    return (H && F
        ? (ef = (0, r.jsx)(o.zx, {
              color: o.Tt.BRAND,
              submitting: U,
              onClick: null != eo ? eo : void 0,
              className: y.button,
              children: ea,
          }))
        : V
          ? (ef = z
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.zx, {
                              color: o.Tt.PRIMARY,
                              className: y.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, m.openVideoQuestModal)({
                                      quest: A,
                                      questContent: C,
                                      sourceQuestContent: w,
                                      sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                              children: (0, r.jsxs)("div", {
                                  className: y.ctaInner,
                                  children: [
                                      (0, r.jsx)(s.Oe7, { className: y.videoQuestPlayIcon }),
                                      (0, r.jsx)("span", { children: b.intl.string(b.t.YsCuyM) }),
                                  ],
                              }),
                          }),
                          (0, r.jsx)(o.zx, {
                              color: o.Tt.BRAND,
                              className: y.button,
                              onClick: null != eo ? eo : void 0,
                              children: ea,
                          }),
                      ],
                  })
                : (0, r.jsx)(o.zx, {
                      color: o.Tt.BRAND,
                      className: y.button,
                      onClick: null != eo ? eo : void 0,
                      children: ea,
                  }))
          : Y
            ? Y && F
                ? (ef = (0, r.jsx)(o.zx, {
                      color: o.Tt.BRAND,
                      submitting: U,
                      onClick: null != eo ? eo : void 0,
                      className: y.button,
                      children: ea,
                  }))
                : q
                  ? (ef = ec
                        ? (0, r.jsx)(o.zx, {
                              color: o.Tt.BRAND,
                              submitting: G,
                              onClick: null != eo ? eo : void 0,
                              className: y.button,
                              children: ea,
                          })
                        : (0, r.jsx)(o.zx, {
                              color: o.Tt.PRIMARY,
                              disabled: !0,
                              className: y.button,
                              children: b.intl.string(b.t.BkZhUF),
                          }))
                  : Y && ed
                    ? (ef = en
                          ? (0, r.jsx)(s.PhF, {
                                className: y.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: O,
                                placeholder: b.intl.string(b.t.drVw4e),
                                renderOptionLabel: v,
                                renderOptionValue: I,
                                select: ei,
                                serialize: (e) => {
                                    switch (e) {
                                        case E.cd.DESKTOP:
                                            return b.intl.string(b.t.QXc019);
                                        case E.cd.CONSOLE:
                                            return b.intl.string(b.t["8lAfuL"]);
                                        default:
                                            return (0, c.vE)(e);
                                    }
                                },
                            })
                          : (0, d.$J)(A) && !M && J !== p.LI.DESKTOP
                            ? j
                                ? (0, r.jsx)(o.zx, {
                                      color: o.Tt.PRIMARY,
                                      className: y.button,
                                      onClick: null != eo ? eo : void 0,
                                      children: ea,
                                  })
                                : (0, r.jsx)(o.zx, {
                                      color: o.Tt.PRIMARY,
                                      onClick: el,
                                      disabled: es,
                                      className: y.button,
                                      children: (0, r.jsxs)("div", {
                                          className: y.ctaInner,
                                          children: [x.render(), b.intl.string(b.t.nPThNT)],
                                      }),
                                  })
                            : z || (X && A.config.features.includes(E.S7.START_QUEST_CTA))
                              ? (0, r.jsx)(o.zx, {
                                    color: o.Tt.BRAND,
                                    onClick: null != eo ? eo : void 0,
                                    className: y.button,
                                    children: ea,
                                })
                              : (0, r.jsx)(o.zx, {
                                    color: o.Tt.PRIMARY,
                                    disabled: !0,
                                    className: y.button,
                                    children: b.intl.string(b.t["9KoPyM"]),
                                }))
                    : Y &&
                      !Z &&
                      (ef = B
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(o.zx, {
                                        color: o.Tt.PRIMARY,
                                        className: y.button,
                                        disabled: !0,
                                        children: b.intl.string(b.t.V293qq),
                                    }),
                                    (0, r.jsx)(o.zx, {
                                        color: o.Tt.BRAND,
                                        className: y.button,
                                        onClick: () => (0, m.openQuestMinorEnrollmentBlockModal)(A, C, w),
                                        children: b.intl.string(b.t.vY9GgI),
                                    }),
                                ],
                            })
                          : (0, r.jsx)(o.zx, {
                                submitting: G,
                                color: o.Tt.BRAND,
                                onClick: null != eo ? eo : void 0,
                                className: y.button,
                                children: ea,
                            }))
            : (ef = (0, r.jsx)(o.zx, {
                  color: o.Tt.PRIMARY,
                  disabled: !0,
                  className: y.button,
                  children: b.intl.format(b.t["14o6QU"], { expiryDate: k }),
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
                  er &&
                      (0, r.jsx)("div", {
                          className: y.ctaItem,
                          children: (0, r.jsx)(s.PhF, {
                              className: y.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (J) {
                                      case p.LI.DESKTOP:
                                          return e === E.cd.DESKTOP;
                                      case p.LI.CONSOLE:
                                          return e === E.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: O,
                              placeholder: b.intl.string(b.t.drVw4e),
                              renderOptionLabel: v,
                              renderOptionValue: I,
                              select: ei,
                              serialize: (e) => {
                                  switch (e) {
                                      case E.cd.DESKTOP:
                                          return b.intl.string(b.t.QXc019);
                                      case E.cd.CONSOLE:
                                          return b.intl.string(b.t["8lAfuL"]);
                                  }
                              },
                          }),
                      }),
              ],
          });
}
