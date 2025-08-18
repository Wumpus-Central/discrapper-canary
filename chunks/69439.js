n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    s = n(647438),
    o = n(442837),
    a = n(755721),
    i = n(481060),
    l = n(607070),
    c = n(823379),
    d = n(617136),
    u = n(509212),
    p = n(113434),
    m = n(569984),
    f = n(497505),
    g = n(530691),
    x = n(110560),
    h = n(667105),
    b = n(46140),
    _ = n(388032),
    j = n(924304);
let v = [
    {
        value: b.cd.DESKTOP,
        get label() {
            return _.intl.string(_.t.QXc019);
        },
    },
    {
        value: b.cd.CONSOLE,
        get label() {
            return _.intl.string(_.t["8lAfuL"]);
        },
    },
];
function C(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case b.cd.DESKTOP:
            (n = (0, r.jsx)(i.pzj, {})), (t = _.intl.string(_.t.QXc019));
            break;
        case b.cd.CONSOLE:
            (n = (0, r.jsx)(i.iWm, {})), (t = _.intl.string(_.t["8lAfuL"]));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)("div", {
        className: j.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function y(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case b.cd.DESKTOP:
            return (0, r.jsxs)("span", {
                className: j.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(i.pzj, {}), _.intl.string(_.t["g6Dr4+"])],
            });
        case b.cd.CONSOLE:
            return (0, r.jsxs)("span", {
                className: j.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(i.iWm, {}), _.intl.string(_.t.iyNbj4)],
            });
        default:
            return (0, c.vE)(e[0].value);
    }
}
function E(e) {
    var t, n, E, O;
    let {
            quest: S,
            questContent: T,
            onReceiveErrorHints: w,
            contentPosition: P,
            rowIndex: A,
            sourceQuestContent: N,
        } = e,
        R = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        B = (0, h.g2)({ useReducedMotion: R }),
        k = (0, d.O5)(),
        q = (0, p._s)({ quest: S }),
        I = (0, p.z)(S),
        Q = (0, p.B6)(S.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: D,
            isEnrolling: V,
            isQuestEnrollmentBlocked: M,
        } = (0, o.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(S.id) || m.Z.isFetchingRewardCode(S.id),
            isEnrolling: m.Z.isEnrolling(S.id),
            isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil,
        })),
        L = (null == (t = S.userStatus) ? void 0 : t.enrolledAt) != null,
        W = (null == (n = S.userStatus) ? void 0 : n.completedAt) != null,
        Z = W && (null == (E = S.userStatus) ? void 0 : E.claimedAt) == null,
        U = (0, u.iQ)(S),
        H = !(0, u.zi)(S),
        F = (0, p._Q)(S),
        z = (0, u.Xv)(S.config),
        X = (0, u.PB)(S),
        K = (0, u.HJ)(S),
        Y = (0, u.Vl)(S),
        G = (0, p.Rf)(S),
        [J, $, ee] = (0, p.me)(S, G),
        et = H && F === p.OH.ACCEPTED,
        en = et && J === f.LI.SELECT,
        er = et && !en && $.length > 1,
        es = s.useCallback(
            (e) => {
                ee(e), e === b.cd.DESKTOP && w([]);
            },
            [ee, w],
        ),
        { text: eo, onClick: ea } = (0, h.Ks)({
            progressState: F,
            quest: S,
            questContent: T,
            isCollectibleQuest: z,
            questContentPosition: P,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: X,
            inGameQuest: Y,
            sourceQuestContent: N,
        }),
        { startingConsoleQuest: ei, startConsoleQuest: el } = (0, p.GI)({
            questId: S.id,
            beforeRequest: () => {
                B.startAnimation(),
                    k({
                        questId: S.id,
                        questContent: T,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: P,
                        questContentRowIndex: A,
                        sourceQuestContent: N,
                    });
            },
            afterRequest: (e) => {
                B.stopAnimation(), w(e);
            },
        }),
        ec = (0, g.f)({
            location: b.dr.QUEST_HOME_DESKTOP,
            questFeatures: S.config.features,
        }),
        ed = (null == (O = S.userStatus) ? void 0 : O.claimedAt) != null,
        eu = null;
    return (U && Z
        ? (eu = (0, r.jsx)(a.zx, {
              color: a.Tt.BRAND,
              submitting: D,
              onClick: null != ea ? ea : void 0,
              className: j.button,
              children: eo,
          }))
        : W
          ? (eu = X
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.zx, {
                              color: a.Tt.PRIMARY,
                              className: j.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, x.openVideoQuestModal)({
                                      quest: S,
                                      questContent: T,
                                      sourceQuestContent: N,
                                      sourceQuestContentCTA: d.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                              children: (0, r.jsxs)("div", {
                                  className: j.ctaInner,
                                  children: [
                                      (0, r.jsx)(i.Oe7, { className: j.videoQuestPlayIcon }),
                                      (0, r.jsx)("span", { children: _.intl.string(_.t.YsCuyM) }),
                                  ],
                              }),
                          }),
                          (0, r.jsx)(a.zx, {
                              color: a.Tt.BRAND,
                              className: j.button,
                              onClick: null != ea ? ea : void 0,
                              children: eo,
                          }),
                      ],
                  })
                : (0, r.jsx)(a.zx, {
                      color: a.Tt.BRAND,
                      className: j.button,
                      onClick: null != ea ? ea : void 0,
                      children: eo,
                  }))
          : H
            ? H && Z
                ? (eu = (0, r.jsx)(a.zx, {
                      color: a.Tt.BRAND,
                      submitting: D,
                      onClick: null != ea ? ea : void 0,
                      className: j.button,
                      children: eo,
                  }))
                : K
                  ? (eu = ec
                        ? (0, r.jsx)(a.zx, {
                              color: a.Tt.BRAND,
                              submitting: V,
                              onClick: null != ea ? ea : void 0,
                              className: j.button,
                              children: eo,
                          })
                        : (0, r.jsx)(a.zx, {
                              color: a.Tt.PRIMARY,
                              disabled: !0,
                              className: j.button,
                              children: _.intl.string(_.t.BkZhUF),
                          }))
                  : H && L && !ed
                    ? (eu = en
                          ? (0, r.jsx)(i.PhF, {
                                className: j.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: v,
                                placeholder: _.intl.string(_.t.drVw4e),
                                renderOptionLabel: C,
                                renderOptionValue: y,
                                select: es,
                                serialize: (e) => {
                                    switch (e) {
                                        case b.cd.DESKTOP:
                                            return _.intl.string(_.t.QXc019);
                                        case b.cd.CONSOLE:
                                            return _.intl.string(_.t["8lAfuL"]);
                                        default:
                                            return (0, c.vE)(e);
                                    }
                                },
                            })
                          : (0, u.$J)(S) && !I && J !== f.LI.DESKTOP
                            ? q
                                ? (0, r.jsx)(a.zx, {
                                      color: a.Tt.PRIMARY,
                                      className: j.button,
                                      onClick: null != ea ? ea : void 0,
                                      children: eo,
                                  })
                                : (0, r.jsx)(a.zx, {
                                      color: a.Tt.PRIMARY,
                                      onClick: el,
                                      disabled: ei,
                                      className: j.button,
                                      children: (0, r.jsxs)("div", {
                                          className: j.ctaInner,
                                          children: [B.render(), _.intl.string(_.t.nPThNT)],
                                      }),
                                  })
                            : X || (Y && S.config.features.includes(b.S7.START_QUEST_CTA))
                              ? (0, r.jsx)(a.zx, {
                                    color: a.Tt.BRAND,
                                    onClick: null != ea ? ea : void 0,
                                    className: j.button,
                                    children: eo,
                                })
                              : (0, r.jsx)(a.zx, {
                                    color: a.Tt.PRIMARY,
                                    disabled: !0,
                                    className: j.button,
                                    children: _.intl.string(_.t["9KoPyM"]),
                                }))
                    : H &&
                      !L &&
                      (eu = M
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(a.zx, {
                                        color: a.Tt.PRIMARY,
                                        className: j.button,
                                        disabled: !0,
                                        children: _.intl.string(_.t.V293qq),
                                    }),
                                    (0, r.jsx)(a.zx, {
                                        color: a.Tt.BRAND,
                                        className: j.button,
                                        onClick: () => (0, x.openQuestMinorEnrollmentBlockModal)(S, T, N),
                                        children: _.intl.string(_.t.vY9GgI),
                                    }),
                                ],
                            })
                          : (0, r.jsx)(a.zx, {
                                submitting: V,
                                color: a.Tt.BRAND,
                                onClick: null != ea ? ea : void 0,
                                className: j.button,
                                children: eo,
                            }))
            : (eu = (0, r.jsx)(a.zx, {
                  color: a.Tt.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: _.intl.format(_.t["14o6QU"], { expiryDate: Q }),
              })),
    null == eu)
        ? null
        : (0, r.jsxs)("div", {
              className: j.container,
              children: [
                  (0, r.jsx)("div", {
                      className: j.ctaItem,
                      children: eu,
                  }),
                  er &&
                      (0, r.jsx)("div", {
                          className: j.ctaItem,
                          children: (0, r.jsx)(i.PhF, {
                              className: j.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (J) {
                                      case f.LI.DESKTOP:
                                          return e === b.cd.DESKTOP;
                                      case f.LI.CONSOLE:
                                          return e === b.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: v,
                              placeholder: _.intl.string(_.t.drVw4e),
                              renderOptionLabel: C,
                              renderOptionValue: y,
                              select: es,
                              serialize: (e) => {
                                  switch (e) {
                                      case b.cd.DESKTOP:
                                          return _.intl.string(_.t.QXc019);
                                      case b.cd.CONSOLE:
                                          return _.intl.string(_.t["8lAfuL"]);
                                  }
                              },
                          }),
                      }),
              ],
          });
}
