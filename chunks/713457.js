n.d(t, { A: () => B });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(843282),
    r = n(732955),
    o = n(421380),
    d = n(397927),
    c = n(775602),
    u = n(403362),
    m = n(859703),
    h = n(341915),
    x = n(33621),
    p = n(551456),
    g = n(714510),
    _ = n(890687),
    f = n(18437),
    b = n(590202),
    v = n(971649),
    j = n(651892),
    C = n(710969),
    A = n(901406),
    T = n(792620),
    y = n(814793),
    S = n(201805),
    E = n(212614),
    N = n(79545),
    I = n(545986),
    k = n(654487),
    R = n(985018),
    O = n(421193);
let w = [
    {
        value: k.fO.DESKTOP,
        get label() {
            return R.intl.string(R.t["QXc01+"]);
        },
    },
    {
        value: k.fO.CONSOLE,
        get label() {
            return R.intl.string(R.t["8lAfuB"]);
        },
    },
];
function D(e) {
    let t,
        n,
        { value: i } = e;
    switch (i) {
        case k.fO.DESKTOP:
            (n = (0, a.jsx)(d.kN9, {})), (t = R.intl.string(R.t["QXc01+"]));
            break;
        case k.fO.CONSOLE:
            (n = (0, a.jsx)(d._xR, {})), (t = R.intl.string(R.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, a.jsxs)("div", { className: O.FL, children: [n, t] });
}
function M(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case k.fO.DESKTOP:
            return (0, a.jsxs)("span", {
                className: O.FL,
                children: [(0, a.jsx)(d.kN9, {}), R.intl.string(R.t.g6Dr44)],
            });
        case k.fO.CONSOLE:
            return (0, a.jsxs)("span", {
                className: O.FL,
                children: [(0, a.jsx)(d._xR, {}), R.intl.string(R.t.iyNbj5)],
            });
        default:
            return (0, u.xb)(e[0].value);
    }
}
function P(e) {
    let { quest: t, sourceQuestContent: n } = e,
        a = (0, v.go)();
    return {
        externalLinkCta: (0, j.wr)(t),
        handleOpenExternalLink: i.useCallback(() => {
            (0, A.pu)(t, {
                content: h.uF.QUEST_HOME_DESKTOP,
                ctaContent: b.Cy.OPEN_GAME_LINK,
                impressionId: a,
                sourceQuestContent: n,
            });
        }, [t, n, a]),
    };
}
function L(e) {
    let { quest: t, questContent: n, sourceQuestContent: i, onClick: s, text: l } = e,
        { enabled: o } = p.K.useConfig({ location: k.rE.QUEST_LEARN_MORE_CTA }),
        { externalLinkCta: c, handleOpenExternalLink: u } = P({ quest: t, sourceQuestContent: i });
    return o
        ? (0, a.jsxs)(r.e2v, {
              direction: "horizontal",
              fullWidth: !0,
              wrap: !1,
              children: [
                  (0, a.jsx)(r.$nd, { variant: "secondary", text: c, onClick: u }),
                  (0, a.jsx)(r.$nd, { variant: "primary", onClick: s ?? void 0, text: l }),
              ],
          })
        : (0, a.jsxs)(r.e2v, {
              direction: "horizontal",
              fullWidth: !0,
              wrap: !1,
              children: [
                  (0, a.jsx)(r.$nd, {
                      variant: "secondary",
                      icon: d.mqY,
                      text: R.intl.string(R.t.YsCuyF),
                      onClick: () => {
                          (0, I.d5)({
                              quest: t,
                              questContent: n,
                              sourceQuestContent: i,
                              sourceQuestContentCTA: b.Cy.WATCH_VIDEO,
                              skipEnrollmentCheck: !0,
                          });
                      },
                  }),
                  (0, a.jsx)(r.$nd, { variant: "primary", onClick: s ?? void 0, text: l }),
              ],
          });
}
function U(e) {
    let { quest: t, sourceQuestContent: n, formattedExpirationDate: i } = e,
        { enabled: s } = p.K.useConfig({ location: k.rE.QUEST_LEARN_MORE_CTA }),
        { externalLinkCta: l, handleOpenExternalLink: o } = P({ quest: t, sourceQuestContent: n }),
        d = R.intl.format(R.t["14o6QY"], { expiryDate: i });
    return s
        ? (0, a.jsxs)(r.e2v, {
              direction: "horizontal",
              fullWidth: !0,
              wrap: !1,
              children: [
                  (0, a.jsx)(r.$nd, { variant: "secondary", text: l, onClick: o }),
                  (0, a.jsx)(r.$nd, { variant: "secondary", disabled: !0, text: d, fullWidth: !0 }),
              ],
          })
        : (0, a.jsx)(r.e2v, {
              direction: "horizontal",
              fullWidth: !0,
              wrap: !1,
              children: (0, a.jsx)(r.$nd, { variant: "secondary", disabled: !0, text: d, fullWidth: !0 }),
          });
}
function B(e) {
    let {
            quest: t,
            questContent: n,
            onReceiveErrorHints: p,
            contentPosition: v,
            rowIndex: j,
            sourceQuestContent: A,
        } = e,
        P = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        B = (0, S.Xf)({ useReducedMotion: P }),
        G = (0, f.Ut)(),
        F = (0, _.RR)({ quest: t }),
        V = (0, _.Vn)(t),
        W = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: H,
            isEnrolling: K,
            isQuestEnrollmentBlocked: z,
        } = (0, s.cf)([m.A], () => ({
            isClaiming: m.A.isClaimingReward(t.id) || m.A.isFetchingRewardCode(t.id),
            isEnrolling: m.A.isEnrolling(t.id),
            isQuestEnrollmentBlocked: null != m.A.questEnrollmentBlockedUntil,
        })),
        $ = t.userStatus?.enrolledAt != null,
        q = t.userStatus?.completedAt != null,
        Q = q && t.userStatus?.claimedAt == null,
        Y = (0, C.if)(t),
        J = !(0, C.Ic)(t),
        X = (0, _.In)(t),
        Z = (0, T.IO)(t),
        ee = (0, T.BS)(t),
        et = (0, T.Cr)(t),
        en = (0, _.fc)(t),
        [ea, ei, es] = (0, _.Qo)(t, en),
        el = J && X === _.F3.ACCEPTED,
        er = el && ea === h.X0.SELECT,
        eo = el && !er && ei.length > 1,
        ed = x.t.useConfig({ location: k.rE.QUEST_HOME_DESKTOP }),
        ec = (0, N.Pd)(t),
        eu = i.useCallback(
            (e) => {
                es(e), e === k.fO.DESKTOP && p([]);
            },
            [es, p],
        ),
        { text: em, onClick: eh } = (0, S._c)({
            progressState: X,
            quest: t,
            questContent: n,
            questContentPosition: v,
            questContentRowIndex: j,
            inGiftInventory: !0,
            isVideoQuest: Z,
            inGameQuest: et,
            sourceQuestContent: A,
        }),
        { startingConsoleQuest: ex, startConsoleQuest: ep } = (0, _.Wj)({
            questId: t.id,
            beforeRequest: () => {
                B.startAnimation(),
                    G({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: b.Cy.DEFIBRILLATOR,
                        questContentPosition: v,
                        questContentRowIndex: j,
                        sourceQuestContent: A,
                    });
            },
            afterRequest: (e) => {
                B.stopAnimation(), p(e);
            },
        }),
        eg = t.userStatus?.claimedAt != null,
        { launchInGameActivity: e_ } = (0, _.zW)(t),
        ef = (0, g.NA)({ quest: t, shortText: !0 }),
        eb = null;
    return (Y && Q
        ? (eb = (0, a.jsx)("div", {
              className: O.x6,
              children: (0, a.jsx)(r.$nd, {
                  variant: "primary",
                  loading: H,
                  onClick: eh ?? void 0,
                  text: em,
                  fullWidth: !0,
              }),
          }))
        : q
          ? (eb = Z
                ? (0, a.jsx)(L, { quest: t, questContent: n, sourceQuestContent: A, onClick: eh, text: em })
                : (0, y.vA)(t)
                  ? (0, a.jsxs)(r.e2v, {
                        direction: "horizontal",
                        fullWidth: !0,
                        wrap: !1,
                        children: [
                            (0, a.jsx)(r.$nd, {
                                variant: "secondary",
                                icon: t.config.features.includes(k.Li.CLOUD_GAMING_ACTIVITY) ? d.hpF : d._xR,
                                text: ef,
                                onClick: () => {
                                    e_();
                                },
                            }),
                            (0, a.jsx)(r.$nd, { variant: "primary", onClick: eh ?? void 0, text: em }),
                        ],
                    })
                  : (0, a.jsx)("div", {
                        className: O.x6,
                        children: (0, a.jsx)(r.$nd, {
                            variant: "primary",
                            onClick: eh ?? void 0,
                            text: em,
                            fullWidth: !0,
                        }),
                    }))
          : J
            ? J && Q
                ? (eb = (0, a.jsx)("div", {
                      className: O.x6,
                      children: (0, a.jsx)(r.$nd, {
                          variant: "primary",
                          loading: H,
                          onClick: eh ?? void 0,
                          text: em,
                          fullWidth: !0,
                      }),
                  }))
                : ee
                  ? (eb =
                        ed.enabled && ec === N.UA.UNENROLLED && ed.enabledQuestStates.has(N.UA.UNENROLLED)
                            ? (0, a.jsx)("div", {
                                  className: O.x6,
                                  children: (0, a.jsx)(E.A, {
                                      quest: t,
                                      surface: N.V3.QUEST_HOME_TILE_FOOTER,
                                      analyticsCtxQuestContent: n,
                                      analyticsCtxSourceQuestContent: A,
                                      analyticsCtxQuestContentPosition: v,
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: O.x6,
                                  children: (0, a.jsx)(r.$nd, {
                                      variant: "primary",
                                      loading: K,
                                      onClick: eh ?? void 0,
                                      text: em,
                                      fullWidth: !0,
                                  }),
                              }))
                  : J && $ && !eg
                    ? (eb = er
                          ? (0, a.jsx)(l.Pw, {
                                className: O.dd,
                                isSelected: () => !1,
                                options: w,
                                placeholder: R.intl.string(R.t.drVw4T),
                                renderOptionLabel: D,
                                renderOptionValue: M,
                                select: eu,
                                serialize: (e) => {
                                    switch (e) {
                                        case k.fO.DESKTOP:
                                            return R.intl.string(R.t["QXc01+"]);
                                        case k.fO.CONSOLE:
                                            return R.intl.string(R.t["8lAfuB"]);
                                        default:
                                            return (0, u.xb)(e);
                                    }
                                },
                                size: "sm",
                                "data-migration-pending": !0,
                            })
                          : (0, T.g5)(t) && !V && ea !== h.X0.DESKTOP
                            ? F
                                ? (0, a.jsx)("div", {
                                      className: O.x6,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "secondary",
                                          onClick: eh ?? void 0,
                                          text: em,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)(o.$n, {
                                      "data-migration-pending": !0,
                                      color: o.XD.PRIMARY,
                                      onClick: ep,
                                      disabled: ex,
                                      className: O.x6,
                                      children: (0, a.jsxs)("div", {
                                          className: O.tn,
                                          children: [B.render(), R.intl.string(R.t.nPThNb)],
                                      }),
                                  })
                            : Z
                              ? (0, a.jsx)("div", {
                                    className: O.x6,
                                    children: (0, a.jsx)(r.$nd, {
                                        variant: "primary",
                                        onClick: eh ?? void 0,
                                        text: em,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, y.vA)(t)
                                ? (0, a.jsx)("div", {
                                      className: O.x6,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "primary",
                                          icon: (0, I.Oz)(t),
                                          onClick: eh ?? void 0,
                                          text: em,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)("div", {
                                      className: O.x6,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: R.intl.string(R.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : J &&
                      !$ &&
                      (eb = z
                          ? (0, a.jsxs)(r.e2v, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    (0, a.jsx)(r.$nd, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: R.intl.string(R.t.V293qn),
                                    }),
                                    (0, a.jsx)(r.$nd, {
                                        variant: "primary",
                                        onClick: () => (0, I.m6)(t, n, A),
                                        text: R.intl.string(R.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, a.jsx)("div", {
                                className: O.x6,
                                children:
                                    ed.enabled && ec === N.UA.UNENROLLED && ed.enabledQuestStates.has(N.UA.UNENROLLED)
                                        ? (0, a.jsx)(E.A, {
                                              quest: t,
                                              surface: N.V3.QUEST_HOME_TILE_FOOTER,
                                              analyticsCtxQuestContent: n,
                                              analyticsCtxSourceQuestContent: A,
                                              analyticsCtxQuestContentPosition: v,
                                          })
                                        : (0, a.jsx)(r.$nd, {
                                              loading: K,
                                              variant: "primary",
                                              onClick: eh ?? void 0,
                                              text: em,
                                              icon: (0, I.Oz)(t),
                                              fullWidth: !0,
                                          }),
                            }))
            : (eb = (0, a.jsx)(U, { quest: t, sourceQuestContent: A, formattedExpirationDate: W })),
    null == eb)
        ? null
        : (0, a.jsxs)("div", {
              className: O.kL,
              children: [
                  (0, a.jsx)("div", { className: O.qz, children: eb }),
                  eo &&
                      (0, a.jsx)("div", {
                          className: O.qz,
                          children: (0, a.jsx)(l.Pw, {
                              className: O.xZ,
                              isSelected: (e) => {
                                  switch (ea) {
                                      case h.X0.DESKTOP:
                                          return e === k.fO.DESKTOP;
                                      case h.X0.CONSOLE:
                                          return e === k.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: w,
                              placeholder: R.intl.string(R.t.drVw4T),
                              renderOptionLabel: D,
                              renderOptionValue: M,
                              select: eu,
                              serialize: (e) => {
                                  switch (e) {
                                      case k.fO.DESKTOP:
                                          return R.intl.string(R.t["QXc01+"]);
                                      case k.fO.CONSOLE:
                                          return R.intl.string(R.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
