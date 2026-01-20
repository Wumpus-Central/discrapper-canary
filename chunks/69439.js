n.d(t, { Z: () => w }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(199849),
    s = n(159691),
    o = n(755721),
    c = n(481060),
    d = n(607070),
    u = n(823379),
    m = n(617136),
    p = n(616022),
    h = n(49436),
    f = n(937797),
    b = n(373370),
    x = n(968843),
    g = n(862657),
    v = n(254579),
    j = n(283689),
    y = n(659302),
    C = n(504411),
    _ = n(110560),
    S = n(324805),
    E = n(388032),
    T = n(489229);
let O = [
    {
        value: S.cd.DESKTOP,
        get label() {
            return E.intl.string(E.t["QXc01+"]);
        },
    },
    {
        value: S.cd.CONSOLE,
        get label() {
            return E.intl.string(E.t["8lAfuB"]);
        },
    },
];
function N(e) {
    let t,
        n,
        { value: r } = e;
    switch (r) {
        case S.cd.DESKTOP:
            (n = (0, a.jsx)(c.pzj, {})), (t = E.intl.string(E.t["QXc01+"]));
            break;
        case S.cd.CONSOLE:
            (n = (0, a.jsx)(c.iWm, {})), (t = E.intl.string(E.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, a.jsxs)("div", {
        className: T.platformSelectorPrimaryLabel,
        children: [n, t],
    });
}
function P(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case S.cd.DESKTOP:
            return (0, a.jsxs)("span", {
                className: T.platformSelectorPrimaryLabel,
                children: [(0, a.jsx)(c.pzj, {}), E.intl.string(E.t.g6Dr44)],
            });
        case S.cd.CONSOLE:
            return (0, a.jsxs)("span", {
                className: T.platformSelectorPrimaryLabel,
                children: [(0, a.jsx)(c.iWm, {}), E.intl.string(E.t.iyNbj5)],
            });
        default:
            return (0, u.vE)(e[0].value);
    }
}
function w(e) {
    var t, n, w, I;
    let {
            quest: k,
            questContent: R,
            onReceiveErrorHints: A,
            contentPosition: Z,
            rowIndex: D,
            sourceQuestContent: M,
        } = e,
        L = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        U = (0, y.g2)({ useReducedMotion: L }),
        B = (0, m.O5)(),
        F = (0, x._s)({ quest: k }),
        G = (0, x.z)(k),
        V = (0, x.B6)(k.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        {
            isClaiming: W,
            isEnrolling: z,
            isQuestEnrollmentBlocked: H,
        } = (0, i.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(k.id) || p.Z.isFetchingRewardCode(k.id),
            isEnrolling: p.Z.isEnrolling(k.id),
            isQuestEnrollmentBlocked: null != p.Z.questEnrollmentBlockedUntil,
        })),
        q = (null == (t = k.userStatus) ? void 0 : t.enrolledAt) != null,
        K = (null == (n = k.userStatus) ? void 0 : n.completedAt) != null,
        Q = K && (null == (w = k.userStatus) ? void 0 : w.claimedAt) == null,
        Y = (0, g.iQ)(k),
        X = !(0, g.zi)(k),
        J = (0, x._Q)(k),
        $ = (0, v.PB)(k),
        ee = (0, v.HJ)(k),
        et = (0, v.Vl)(k),
        en = (0, x.Rf)(k),
        [ea, er, ei] = (0, x.me)(k, en),
        el = X && J === x.OH.ACCEPTED,
        es = el && ea === h.LI.SELECT,
        eo = el && !es && er.length > 1,
        ec = f.Cx.useConfig({ location: S.dr.QUEST_HOME_DESKTOP }).enabled,
        ed = r.useCallback(
            (e) => {
                ei(e), e === S.cd.DESKTOP && A([]);
            },
            [ei, A],
        ),
        { text: eu, onClick: em } = (0, y.Ks)({
            progressState: J,
            quest: k,
            questContent: R,
            questContentPosition: Z,
            questContentRowIndex: D,
            inGiftInventory: !0,
            isVideoQuest: $,
            inGameQuest: et,
            sourceQuestContent: M,
        }),
        { startingConsoleQuest: ep, startConsoleQuest: eh } = (0, x.GI)({
            questId: k.id,
            beforeRequest: () => {
                U.startAnimation(),
                    B({
                        questId: k.id,
                        questContent: R,
                        questContentCTA: m.jZ.DEFIBRILLATOR,
                        questContentPosition: Z,
                        questContentRowIndex: D,
                        sourceQuestContent: M,
                    });
            },
            afterRequest: (e) => {
                U.stopAnimation(), A(e);
            },
        }),
        ef = (null == (I = k.userStatus) ? void 0 : I.claimedAt) != null,
        { launchInGameActivity: eb } = (0, x.zB)(k),
        ex = (0, b.CR)({
            quest: k,
            shortText: !0,
        }),
        eg = null;
    return (Y && Q
        ? (eg = (0, a.jsx)("div", {
              className: T.button,
              children: (0, a.jsx)(s.zxk, {
                  variant: "primary",
                  loading: W,
                  onClick: null != em ? em : void 0,
                  text: eu,
                  fullWidth: !0,
              }),
          }))
        : K
          ? (eg = $
                ? (0, a.jsxs)(s.hE2, {
                      direction: "horizontal",
                      fullWidth: !0,
                      children: [
                          (0, a.jsx)(s.zxk, {
                              variant: "secondary",
                              icon: c.Oe7,
                              text: E.intl.string(E.t.YsCuyF),
                              onClick: () => {
                                  (0, _.openVideoQuestModal)({
                                      quest: k,
                                      questContent: R,
                                      sourceQuestContent: M,
                                      sourceQuestContentCTA: m.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0,
                                  });
                              },
                          }),
                          (0, a.jsx)(s.zxk, {
                              variant: "primary",
                              onClick: null != em ? em : void 0,
                              text: eu,
                          }),
                      ],
                  })
                : (0, j.Rt)(k)
                  ? (0, a.jsxs)(s.hE2, {
                        direction: "horizontal",
                        fullWidth: !0,
                        children: [
                            (0, a.jsx)(s.zxk, {
                                variant: "secondary",
                                icon: k.config.features.includes(S.S7.CLOUD_GAMING_ACTIVITY) ? c.v3n : c.iWm,
                                text: ex,
                                onClick: () => {
                                    eb();
                                },
                            }),
                            (0, a.jsx)(s.zxk, {
                                variant: "primary",
                                onClick: null != em ? em : void 0,
                                text: eu,
                            }),
                        ],
                    })
                  : (0, a.jsx)("div", {
                        className: T.button,
                        children: (0, a.jsx)(s.zxk, {
                            variant: "primary",
                            onClick: null != em ? em : void 0,
                            text: eu,
                            fullWidth: !0,
                        }),
                    }))
          : X
            ? X && Q
                ? (eg = (0, a.jsx)("div", {
                      className: T.button,
                      children: (0, a.jsx)(s.zxk, {
                          variant: "primary",
                          loading: W,
                          onClick: null != em ? em : void 0,
                          text: eu,
                          fullWidth: !0,
                      }),
                  }))
                : ee
                  ? (eg =
                        ec && !q
                            ? (0, a.jsx)("div", {
                                  className: T.button,
                                  children: (0, a.jsx)(C.Z, {
                                      quest: k,
                                      analyticsCtxQuestContent: R,
                                      analyticsCtxSourceQuestContent: M,
                                      analyticsCtxQuestContentPosition: Z,
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: T.button,
                                  children: (0, a.jsx)(s.zxk, {
                                      variant: "primary",
                                      loading: z,
                                      onClick: null != em ? em : void 0,
                                      text: eu,
                                      fullWidth: !0,
                                  }),
                              }))
                  : X && q && !ef
                    ? (eg = es
                          ? (0, a.jsx)(l.B6, {
                                className: T.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: O,
                                placeholder: E.intl.string(E.t.drVw4T),
                                renderOptionLabel: N,
                                renderOptionValue: P,
                                select: ed,
                                serialize: (e) => {
                                    switch (e) {
                                        case S.cd.DESKTOP:
                                            return E.intl.string(E.t["QXc01+"]);
                                        case S.cd.CONSOLE:
                                            return E.intl.string(E.t["8lAfuB"]);
                                        default:
                                            return (0, u.vE)(e);
                                    }
                                },
                                size: "sm",
                                "data-migration-pending": !0,
                            })
                          : (0, v.$J)(k) && !G && ea !== h.LI.DESKTOP
                            ? F
                                ? (0, a.jsx)("div", {
                                      className: T.button,
                                      children: (0, a.jsx)(s.zxk, {
                                          variant: "secondary",
                                          onClick: null != em ? em : void 0,
                                          text: eu,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)(o.zx, {
                                      "data-migration-pending": !0,
                                      color: o.Tt.PRIMARY,
                                      onClick: eh,
                                      disabled: ep,
                                      className: T.button,
                                      children: (0, a.jsxs)("div", {
                                          className: T.ctaInner,
                                          children: [U.render(), E.intl.string(E.t.nPThNb)],
                                      }),
                                  })
                            : $
                              ? (0, a.jsx)("div", {
                                    className: T.button,
                                    children: (0, a.jsx)(s.zxk, {
                                        variant: "primary",
                                        onClick: null != em ? em : void 0,
                                        text: eu,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, j.Rt)(k)
                                ? (0, a.jsx)("div", {
                                      className: T.button,
                                      children: (0, a.jsx)(s.zxk, {
                                          variant: "primary",
                                          icon: (0, _.getPrimaryCtaIcon)(k),
                                          onClick: null != em ? em : void 0,
                                          text: eu,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)("div", {
                                      className: T.button,
                                      children: (0, a.jsx)(s.zxk, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: E.intl.string(E.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : X &&
                      !q &&
                      (eg = H
                          ? (0, a.jsxs)(s.hE2, {
                                direction: "horizontal",
                                fullWidth: !0,
                                children: [
                                    (0, a.jsx)(s.zxk, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: E.intl.string(E.t.V293qn),
                                    }),
                                    (0, a.jsx)(s.zxk, {
                                        variant: "primary",
                                        onClick: () => (0, _.openQuestMinorEnrollmentBlockModal)(k, R, M),
                                        text: E.intl.string(E.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, a.jsx)("div", {
                                className: T.button,
                                children: ec
                                    ? (0, a.jsx)(C.Z, {
                                          quest: k,
                                          analyticsCtxQuestContent: R,
                                          analyticsCtxSourceQuestContent: M,
                                          analyticsCtxQuestContentPosition: Z,
                                      })
                                    : (0, a.jsx)(s.zxk, {
                                          loading: z,
                                          variant: "primary",
                                          onClick: null != em ? em : void 0,
                                          text: eu,
                                          icon: (0, _.getPrimaryCtaIcon)(k),
                                          fullWidth: !0,
                                      }),
                            }))
            : (eg = (0, a.jsx)("div", {
                  className: T.button,
                  children: (0, a.jsx)(s.zxk, {
                      variant: "secondary",
                      disabled: !0,
                      text: E.intl.format(E.t["14o6QY"], { expiryDate: V }),
                      fullWidth: !0,
                  }),
              })),
    null == eg)
        ? null
        : (0, a.jsxs)("div", {
              className: T.container,
              children: [
                  (0, a.jsx)("div", {
                      className: T.ctaItem,
                      children: eg,
                  }),
                  eo &&
                      (0, a.jsx)("div", {
                          className: T.ctaItem,
                          children: (0, a.jsx)(l.B6, {
                              className: T.platformSelectorSecondary,
                              isSelected: (e) => {
                                  switch (ea) {
                                      case h.LI.DESKTOP:
                                          return e === S.cd.DESKTOP;
                                      case h.LI.CONSOLE:
                                          return e === S.cd.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: O,
                              placeholder: E.intl.string(E.t.drVw4T),
                              renderOptionLabel: N,
                              renderOptionValue: P,
                              select: ed,
                              serialize: (e) => {
                                  switch (e) {
                                      case S.cd.DESKTOP:
                                          return E.intl.string(E.t["QXc01+"]);
                                      case S.cd.CONSOLE:
                                          return E.intl.string(E.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
