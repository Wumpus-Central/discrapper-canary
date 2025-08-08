n.d(t, { Z: () => O }), n(388685);
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
    f = n(530691),
    x = n(110560),
    h = n(667105),
    j = n(46140),
    _ = n(388032),
    b = n(142468);
let v = [
    {
        value: j.cd.DESKTOP,
        get label() {
            return _.intl.string(_.t.QXc019);
        },
    },
    {
        value: j.cd.CONSOLE,
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
        case j.cd.DESKTOP:
            (n = (0, r.jsx)(i.pzj, {})), (t = _.intl.string(_.t.QXc019));
            break;
        case j.cd.CONSOLE:
            (n = (0, r.jsx)(i.iWm, {})), (t = _.intl.string(_.t["8lAfuL"]));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)("div", {
        className: b.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function y(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case j.cd.DESKTOP:
            return (0, r.jsxs)("span", {
                className: b.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(i.pzj, {}), _.intl.string(_.t["g6Dr4+"])],
            });
        case j.cd.CONSOLE:
            return (0, r.jsxs)("span", {
                className: b.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(i.iWm, {}), _.intl.string(_.t.iyNbj4)],
            });
        default:
            return (0, c.vE)(e[0].value);
    }
}
function O(e) {
    var t, n, O, E;
    let {
            quest: S,
            questContent: T,
            onReceiveErrorHints: w,
            contentPosition: P,
            rowIndex: N,
            sourceQuestContent: A,
        } = e,
        R = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        B = (0, h.g2)({ useReducedMotion: R }),
        k = (0, u.O5)(),
        I = (0, p._s)({ quest: S }),
        q = (0, p.z)(S),
        D = (0, p.B6)(S.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: Q,
            isEnrolling: V,
            isQuestEnrollmentBlocked: L,
        } = (0, o.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(S.id) || m.Z.isFetchingRewardCode(S.id),
            isEnrolling: m.Z.isEnrolling(S.id),
            isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil,
        })),
        M = (null == (t = S.userStatus) ? void 0 : t.enrolledAt) != null,
        Z = (null == (n = S.userStatus) ? void 0 : n.completedAt) != null,
        W = Z && (null == (O = S.userStatus) ? void 0 : O.claimedAt) == null,
        U = (0, d.iQ)(S),
        H = !(0, d.zi)(S),
        z = (0, p._Q)(S),
        F = (0, d.Xv)(S.config),
        X = (0, d.PB)(S),
        K = (0, d.HJ)(S),
        Y = (0, d.Vl)(S),
        G = (0, p.Rf)(S),
        [J, $, ee] = (0, p.me)(S, G),
        et = H && z === p.OH.ACCEPTED,
        en = et && J === g.LI.SELECT,
        er = et && !en && $.length > 1,
        es = s.useCallback(
            (e) => {
                ee(e), e === j.cd.DESKTOP && w([]);
            },
            [ee, w],
        ),
        { text: eo, onClick: ea } = (0, h.Ks)({
            progressState: z,
            quest: S,
            questContent: T,
            isCollectibleQuest: F,
            questContentPosition: P,
            questContentRowIndex: N,
            inGiftInventory: !0,
            isVideoQuest: X,
            inGameQuest: Y,
            sourceQuestContent: A,
        }),
        { startingConsoleQuest: ei, startConsoleQuest: el } = (0, p.GI)({
            questId: S.id,
            beforeRequest: () => {
                B.startAnimation(),
                    k({
                        questId: S.id,
                        questContent: T,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: P,
                        questContentRowIndex: N,
                        sourceQuestContent: A,
                    });
            },
            afterRequest: (e) => {
                B.stopAnimation(), w(e);
            },
        }),
        ec = (0, f.f)({
            location: j.dr.QUEST_HOME_DESKTOP,
            questFeatures: S.config.features,
        }),
        eu = (null == (E = S.userStatus) ? void 0 : E.claimedAt) != null,
        ed = null;
    return (U && W
        ? (ed = (0, r.jsx)(a.zx, {
              color: a.Tt.BRAND,
              submitting: Q,
              onClick: null != ea ? ea : void 0,
              className: b.button,
              children: eo,
          }))
        : Z
          ? (ed = X
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.zx, {
                              color: a.Tt.PRIMARY,
                              className: b.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, x.openVideoQuestModal)({
                                      quest: S,
                                      questContent: T,
                                      sourceQuestContent: A,
                                      sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                              children: (0, r.jsxs)("div", {
                                  className: b.ctaInner,
                                  children: [
                                      (0, r.jsx)(i.Oe7, { className: b.videoQuestPlayIcon }),
                                      (0, r.jsx)("span", { children: _.intl.string(_.t.YsCuyM) }),
                                  ],
                              }),
                          }),
                          (0, r.jsx)(a.zx, {
                              color: a.Tt.BRAND,
                              className: b.button,
                              onClick: null != ea ? ea : void 0,
                              children: eo,
                          }),
                      ],
                  })
                : (0, r.jsx)(a.zx, {
                      color: a.Tt.BRAND,
                      className: b.button,
                      onClick: null != ea ? ea : void 0,
                      children: eo,
                  }))
          : H
            ? H && W
                ? (ed = (0, r.jsx)(a.zx, {
                      color: a.Tt.BRAND,
                      submitting: Q,
                      onClick: null != ea ? ea : void 0,
                      className: b.button,
                      children: eo,
                  }))
                : K
                  ? (ed = ec
                        ? (0, r.jsx)(a.zx, {
                              color: a.Tt.BRAND,
                              submitting: V,
                              onClick: null != ea ? ea : void 0,
                              className: b.button,
                              children: eo,
                          })
                        : (0, r.jsx)(a.zx, {
                              color: a.Tt.PRIMARY,
                              disabled: !0,
                              className: b.button,
                              children: _.intl.string(_.t.BkZhUF),
                          }))
                  : H && M && !eu
                    ? (ed = en
                          ? (0, r.jsx)(i.PhF, {
                                className: b.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: v,
                                placeholder: _.intl.string(_.t.drVw4e),
                                renderOptionLabel: C,
                                renderOptionValue: y,
                                select: es,
                                serialize: (e) => {
                                    switch (e) {
                                        case j.cd.DESKTOP:
                                            return _.intl.string(_.t.QXc019);
                                        case j.cd.CONSOLE:
                                            return _.intl.string(_.t["8lAfuL"]);
                                        default:
                                            return (0, c.vE)(e);
                                    }
                                },
                            })
                          : (0, d.$J)(S) && !q && J !== g.LI.DESKTOP
                            ? I
                                ? (0, r.jsx)(a.zx, {
                                      color: a.Tt.PRIMARY,
                                      className: b.button,
                                      onClick: null != ea ? ea : void 0,
                                      children: eo,
                                  })
                                : (0, r.jsx)(a.zx, {
                                      color: a.Tt.PRIMARY,
                                      onClick: el,
                                      disabled: ei,
                                      className: b.button,
                                      children: (0, r.jsxs)("div", {
                                          className: b.ctaInner,
                                          children: [B.render(), _.intl.string(_.t.nPThNT)],
                                      }),
                                  })
                            : X || (Y && S.config.features.includes(j.S7.START_QUEST_CTA))
                              ? (0, r.jsx)(a.zx, {
                                    color: a.Tt.BRAND,
                                    onClick: null != ea ? ea : void 0,
                                    className: b.button,
                                    children: eo,
                                })
                              : (0, r.jsx)(a.zx, {
                                    color: a.Tt.PRIMARY,
                                    disabled: !0,
                                    className: b.button,
                                    children: _.intl.string(_.t["9KoPyM"]),
                                }))
                    : H &&
                      !M &&
                      (ed = L
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(a.zx, {
                                        color: a.Tt.PRIMARY,
                                        className: b.button,
                                        disabled: !0,
                                        children: _.intl.string(_.t.V293qq),
                                    }),
                                    (0, r.jsx)(a.zx, {
                                        color: a.Tt.BRAND,
                                        className: b.button,
                                        onClick: () => (0, x.openQuestMinorEnrollmentBlockModal)(S, T, A),
                                        children: _.intl.string(_.t.vY9GgI),
                                    }),
                                ],
                            })
                          : (0, r.jsx)(a.zx, {
                                submitting: V,
                                color: a.Tt.BRAND,
                                onClick: null != ea ? ea : void 0,
                                className: b.button,
                                children: eo,
                            }))
            : (ed = (0, r.jsx)(a.zx, {
                  color: a.Tt.PRIMARY,
                  disabled: !0,
                  className: b.button,
                  children: _.intl.format(_.t["14o6QU"], { expiryDate: D }),
              })),
    null == ed)
        ? null
        : (0, r.jsxs)("div", {
              className: b.container,
              children: [
                  (0, r.jsx)("div", {
                      className: b.ctaItem,
                      children: ed,
                  }),
                  er &&
                      (0, r.jsx)("div", {
                          className: b.ctaItem,
                          children: (0, r.jsx)(i.PhF, {
                              className: b.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (J) {
                                      case g.LI.DESKTOP:
                                          return e === j.cd.DESKTOP;
                                      case g.LI.CONSOLE:
                                          return e === j.cd.CONSOLE;
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
                                      case j.cd.DESKTOP:
                                          return _.intl.string(_.t.QXc019);
                                      case j.cd.CONSOLE:
                                          return _.intl.string(_.t["8lAfuL"]);
                                  }
                              },
                          }),
                      }),
              ],
          });
}
