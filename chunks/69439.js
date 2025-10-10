n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    s = n(647438),
    o = n(442837),
    a = n(159691),
    i = n(755721),
    l = n(481060),
    c = n(607070),
    d = n(823379),
    u = n(617136),
    p = n(509212),
    m = n(113434),
    g = n(569984),
    f = n(497505),
    h = n(530691),
    x = n(373370),
    _ = n(110560),
    b = n(667105),
    j = n(46140),
    v = n(388032),
    C = n(924304);
let y = [
    {
        value: j.cd.DESKTOP,
        get label() {
            return v.intl.string(v.t.QXc019);
        },
    },
    {
        value: j.cd.CONSOLE,
        get label() {
            return v.intl.string(v.t["8lAfuL"]);
        },
    },
];
function E(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case j.cd.DESKTOP:
            (n = (0, r.jsx)(l.pzj, {})), (t = v.intl.string(v.t.QXc019));
            break;
        case j.cd.CONSOLE:
            (n = (0, r.jsx)(l.iWm, {})), (t = v.intl.string(v.t["8lAfuL"]));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)("div", {
        className: C.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function O(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case j.cd.DESKTOP:
            return (0, r.jsxs)("span", {
                className: C.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(l.pzj, {}), v.intl.string(v.t["g6Dr4+"])],
            });
        case j.cd.CONSOLE:
            return (0, r.jsxs)("span", {
                className: C.platformSelectorPrimaryLabel,
                children: [(0, r.jsx)(l.iWm, {}), v.intl.string(v.t.iyNbj4)],
            });
        default:
            return (0, d.vE)(e[0].value);
    }
}
function S(e) {
    var t, n, S, T;
    let {
            quest: w,
            questContent: P,
            onReceiveErrorHints: N,
            contentPosition: R,
            rowIndex: A,
            sourceQuestContent: B,
        } = e,
        k = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        q = (0, b.g2)({ useReducedMotion: k }),
        I = (0, u.O5)(),
        D = (0, m._s)({ quest: w }),
        L = (0, m.z)(w),
        V = (0, m.B6)(w.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: Q,
            isEnrolling: M,
            isQuestEnrollmentBlocked: Z,
        } = (0, o.cj)([g.Z], () => ({
            isClaiming: g.Z.isClaimingReward(w.id) || g.Z.isFetchingRewardCode(w.id),
            isEnrolling: g.Z.isEnrolling(w.id),
            isQuestEnrollmentBlocked: null != g.Z.questEnrollmentBlockedUntil,
        })),
        W = (null == (t = w.userStatus) ? void 0 : t.enrolledAt) != null,
        U = (null == (n = w.userStatus) ? void 0 : n.completedAt) != null,
        H = U && (null == (S = w.userStatus) ? void 0 : S.claimedAt) == null,
        F = (0, p.iQ)(w),
        z = !(0, p.zi)(w),
        X = (0, m._Q)(w),
        K = (0, p.Xv)(w.config),
        G = (0, p.PB)(w),
        Y = (0, p.HJ)(w),
        J = (0, p.Vl)(w),
        $ = (0, m.Rf)(w),
        [ee, et, en] = (0, m.me)(w, $),
        er = z && X === m.OH.ACCEPTED,
        es = er && ee === f.LI.SELECT,
        eo = er && !es && et.length > 1,
        ea = s.useCallback(
            (e) => {
                en(e), e === j.cd.DESKTOP && N([]);
            },
            [en, N],
        ),
        { text: ei, onClick: el } = (0, b.Ks)({
            progressState: X,
            quest: w,
            questContent: P,
            isCollectibleQuest: K,
            questContentPosition: R,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: G,
            inGameQuest: J,
            sourceQuestContent: B,
        }),
        { startingConsoleQuest: ec, startConsoleQuest: ed } = (0, m.GI)({
            questId: w.id,
            beforeRequest: () => {
                q.startAnimation(),
                    I({
                        questId: w.id,
                        questContent: P,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: R,
                        questContentRowIndex: A,
                        sourceQuestContent: B,
                    });
            },
            afterRequest: (e) => {
                q.stopAnimation(), N(e);
            },
        }),
        eu = (0, h.f)({
            location: j.dr.QUEST_HOME_DESKTOP,
            questFeatures: w.config.features,
        }),
        ep = (null == (T = w.userStatus) ? void 0 : T.claimedAt) != null,
        { launchInGameActivity: em } = (0, m.zB)(w),
        eg = (0, x.CR)({
            quest: w,
            shortText: !0,
        }),
        ef = null;
    return (F && H
        ? (ef = (0, r.jsx)("div", {
              className: C.button,
              children: (0, r.jsx)(a.zxk, {
                  variant: "primary",
                  loading: Q,
                  onClick: null != el ? el : void 0,
                  text: ei,
                  fullWidth: !0,
              }),
          }))
        : U
          ? (ef = G
                ? (0, r.jsxs)(a.hE2, {
                      direction: "horizontal",
                      fullWidth: !0,
                      children: [
                          (0, r.jsx)(a.zxk, {
                              variant: "secondary",
                              icon: l.Oe7,
                              text: v.intl.string(v.t.YsCuyM),
                              onClick: () => {
                                  (0, _.openVideoQuestModal)({
                                      quest: w,
                                      questContent: P,
                                      sourceQuestContent: B,
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
                : (0, p.Rt)(w)
                  ? (0, r.jsxs)(a.hE2, {
                        direction: "horizontal",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(a.zxk, {
                                variant: "secondary",
                                icon: w.config.features.includes(j.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : l.iWm,
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
                        className: C.button,
                        children: (0, r.jsx)(a.zxk, {
                            variant: "primary",
                            onClick: null != el ? el : void 0,
                            text: ei,
                            fullWidth: !0,
                        }),
                    }))
          : z
            ? z && H
                ? (ef = (0, r.jsx)("div", {
                      className: C.button,
                      children: (0, r.jsx)(a.zxk, {
                          variant: "primary",
                          loading: Q,
                          onClick: null != el ? el : void 0,
                          text: ei,
                          fullWidth: !0,
                      }),
                  }))
                : Y
                  ? (ef = eu
                        ? (0, r.jsx)("div", {
                              className: C.button,
                              children: (0, r.jsx)(a.zxk, {
                                  variant: "primary",
                                  loading: M,
                                  onClick: null != el ? el : void 0,
                                  text: ei,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: C.button,
                              children: (0, r.jsx)(a.zxk, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: v.intl.string(v.t.BkZhUF),
                                  fullWidth: !0,
                              }),
                          }))
                  : z && W && !ep
                    ? (ef = es
                          ? (0, r.jsx)(l.PhF, {
                                className: C.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: y,
                                placeholder: v.intl.string(v.t.drVw4e),
                                renderOptionLabel: E,
                                renderOptionValue: O,
                                select: ea,
                                serialize: (e) => {
                                    switch (e) {
                                        case j.cd.DESKTOP:
                                            return v.intl.string(v.t.QXc019);
                                        case j.cd.CONSOLE:
                                            return v.intl.string(v.t["8lAfuL"]);
                                        default:
                                            return (0, d.vE)(e);
                                    }
                                },
                                size: "sm",
                            })
                          : (0, p.$J)(w) && !L && ee !== f.LI.DESKTOP
                            ? D
                                ? (0, r.jsx)("div", {
                                      className: C.button,
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
                                      className: C.button,
                                      children: (0, r.jsxs)("div", {
                                          className: C.ctaInner,
                                          children: [q.render(), v.intl.string(v.t.nPThNT)],
                                      }),
                                  })
                            : G
                              ? (0, r.jsx)("div", {
                                    className: C.button,
                                    children: (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: null != el ? el : void 0,
                                        text: ei,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, p.Rt)(w)
                                ? (0, r.jsx)("div", {
                                      className: C.button,
                                      children: (0, r.jsx)(a.zxk, {
                                          variant: "primary",
                                          icon: (0, b.gF)(w),
                                          onClick: null != el ? el : void 0,
                                          text: ei,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, r.jsx)("div", {
                                      className: C.button,
                                      children: (0, r.jsx)(a.zxk, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: v.intl.string(v.t["9KoPyM"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : z &&
                      !W &&
                      (ef = Z
                          ? (0, r.jsxs)(a.hE2, {
                                direction: "horizontal",
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(a.zxk, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: v.intl.string(v.t.V293qq),
                                    }),
                                    (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: () => (0, _.openQuestMinorEnrollmentBlockModal)(w, P, B),
                                        text: v.intl.string(v.t.vY9GgI),
                                    }),
                                ],
                            })
                          : (0, r.jsx)("div", {
                                className: C.button,
                                children: (0, r.jsx)(a.zxk, {
                                    loading: M,
                                    variant: "primary",
                                    onClick: null != el ? el : void 0,
                                    text: ei,
                                    icon: (0, b.gF)(w),
                                    fullWidth: !0,
                                }),
                            }))
            : (ef = (0, r.jsx)("div", {
                  className: C.button,
                  children: (0, r.jsx)(a.zxk, {
                      variant: "secondary",
                      disabled: !0,
                      text: v.intl.format(v.t["14o6QU"], { expiryDate: V }),
                      fullWidth: !0,
                  }),
              })),
    null == ef)
        ? null
        : (0, r.jsxs)("div", {
              className: C.container,
              children: [
                  (0, r.jsx)("div", {
                      className: C.ctaItem,
                      children: ef,
                  }),
                  eo &&
                      (0, r.jsx)("div", {
                          className: C.ctaItem,
                          children: (0, r.jsx)(l.PhF, {
                              className: C.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (ee) {
                                      case f.LI.DESKTOP:
                                          return e === j.cd.DESKTOP;
                                      case f.LI.CONSOLE:
                                          return e === j.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: y,
                              placeholder: v.intl.string(v.t.drVw4e),
                              renderOptionLabel: E,
                              renderOptionValue: O,
                              select: ea,
                              serialize: (e) => {
                                  switch (e) {
                                      case j.cd.DESKTOP:
                                          return v.intl.string(v.t.QXc019);
                                      case j.cd.CONSOLE:
                                          return v.intl.string(v.t["8lAfuL"]);
                                  }
                              },
                              size: "sm",
                          }),
                      }),
              ],
          });
}
