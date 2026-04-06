n.d(t, { A: () => G });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(843282),
    r = n(732955),
    o = n(421380),
    d = n(397927),
    c = n(775602),
    u = n(403362),
    m = n(178540),
    h = n(859703),
    x = n(341915),
    p = n(551456),
    g = n(112142),
    f = n(714510),
    _ = n(890687),
    v = n(18437),
    b = n(590202),
    j = n(971649),
    A = n(651892),
    C = n(710969),
    y = n(901406),
    S = n(792620),
    T = n(814793),
    E = n(201805),
    N = n(212614),
    I = n(79545),
    k = n(545986),
    O = n(654487),
    R = n(985018),
    w = n(376936);
let D = [
    {
        value: O.fO.DESKTOP,
        get label() {
            return R.intl.string(R.t["QXc01+"]);
        },
    },
    {
        value: O.fO.CONSOLE,
        get label() {
            return R.intl.string(R.t["8lAfuB"]);
        },
    },
];
function M(e) {
    let t,
        n,
        { value: i } = e;
    switch (i) {
        case O.fO.DESKTOP:
            (n = (0, a.jsx)(d.kN9, {})), (t = R.intl.string(R.t["QXc01+"]));
            break;
        case O.fO.CONSOLE:
            (n = (0, a.jsx)(d._xR, {})), (t = R.intl.string(R.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, a.jsxs)("div", { className: w.FL, children: [n, t] });
}
function P(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case O.fO.DESKTOP:
            return (0, a.jsxs)("span", {
                className: w.FL,
                children: [(0, a.jsx)(d.kN9, {}), R.intl.string(R.t.g6Dr44)],
            });
        case O.fO.CONSOLE:
            return (0, a.jsxs)("span", {
                className: w.FL,
                children: [(0, a.jsx)(d._xR, {}), R.intl.string(R.t.iyNbj5)],
            });
        default:
            return (0, u.xb)(e[0].value);
    }
}
function L(e) {
    let { quest: t, sourceQuestContent: n } = e,
        a = (0, j.go)();
    return {
        externalLinkCta: (0, A.wr)(t),
        handleOpenExternalLink: i.useCallback(() => {
            (0, y.pu)(t, {
                content: x.uF.QUEST_HOME_DESKTOP,
                ctaContent: b.Cy.OPEN_GAME_LINK,
                impressionId: a,
                sourceQuestContent: n,
            });
        }, [t, n, a]),
    };
}
function U(e) {
    let { quest: t, questContent: n, sourceQuestContent: i, onClick: s, text: l } = e,
        { enabled: o } = p.K.useConfig({ location: O.rE.QUEST_LEARN_MORE_CTA }),
        { externalLinkCta: c, handleOpenExternalLink: u } = L({ quest: t, sourceQuestContent: i });
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
                          (0, k.d5)({
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
function B(e) {
    let { quest: t, sourceQuestContent: n, formattedExpirationDate: i } = e,
        { enabled: s } = p.K.useConfig({ location: O.rE.QUEST_LEARN_MORE_CTA }),
        { externalLinkCta: l, handleOpenExternalLink: o } = L({ quest: t, sourceQuestContent: n }),
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
function G(e) {
    let {
            quest: t,
            questContent: n,
            onReceiveErrorHints: p,
            contentPosition: j,
            rowIndex: y,
            sourceQuestContent: L,
        } = e,
        G = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        F = (0, E.Xf)({ useReducedMotion: G }),
        V = (0, v.Ut)(),
        W = (0, _.RR)({ quest: t }),
        H = (0, _.Vn)(t),
        K = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: z,
            isEnrolling: $,
            isQuestEnrollmentBlocked: q,
        } = (0, s.cf)([h.A], () => ({
            isClaiming: h.A.isClaimingReward(t.id) || h.A.isFetchingRewardCode(t.id),
            isEnrolling: h.A.isEnrolling(t.id),
            isQuestEnrollmentBlocked: null != h.A.questEnrollmentBlockedUntil,
        })),
        Y = t.userStatus?.enrolledAt != null,
        Q = t.userStatus?.completedAt != null,
        J = Q && t.userStatus?.claimedAt == null,
        X = (0, C.if)(t),
        Z = !(0, C.Ic)(t),
        ee = (0, _.In)(t),
        et = (0, S.IO)(t),
        en = (0, S.K$)(t),
        ea = (0, S.Cr)(t),
        ei = (0, _.fc)(t),
        [es, el, er] = (0, _.Qo)(t, ei),
        eo = Z && ee === _.F3.ACCEPTED,
        ed = eo && es === x.X0.SELECT,
        ec = eo && !ed && el.length > 1,
        eu = g.t.useConfig({ location: O.rE.QUEST_HOME_DESKTOP }),
        em = (0, I.Pd)(t),
        eh = (0, m.O)((e) => e.clearErrorHints),
        ex = i.useCallback(
            (e) => {
                er(e), e === O.fO.DESKTOP && (p([]), eh(t.id));
            },
            [er, p, eh, t.id],
        ),
        { text: ep, onClick: eg } = (0, E._c)({
            progressState: ee,
            quest: t,
            questContent: n,
            questContentPosition: j,
            questContentRowIndex: y,
            inGiftInventory: !0,
            isVideoQuest: et,
            inGameQuest: ea,
            sourceQuestContent: L,
        }),
        { startingConsoleQuest: ef, startConsoleQuest: e_ } = (0, _.Wj)({
            questId: t.id,
            beforeRequest: () => {
                F.startAnimation(),
                    V({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: b.Cy.DEFIBRILLATOR,
                        questContentPosition: j,
                        questContentRowIndex: y,
                        sourceQuestContent: L,
                    });
            },
            afterRequest: (e) => {
                F.stopAnimation(), p(e);
            },
        }),
        ev = t.userStatus?.claimedAt != null,
        { launchInGameActivity: eb } = (0, _.zW)(t),
        ej = (0, f.NA)({ quest: t, shortText: !0 }),
        eA = (0, _.do)({ quest: t, content: n, ctaContent: b.Cy.OPEN_GAME_LINK, sourceQuestContent: L }),
        eC = (0, A.wr)(t),
        ey = (0, a.jsx)(r.$nd, { variant: "secondary", text: eC, onClick: eA }),
        eS = null;
    return (X && J
        ? (eS = (0, a.jsx)("div", {
              className: w.x6,
              children: (0, a.jsx)(r.$nd, {
                  variant: "primary",
                  loading: z,
                  onClick: eg ?? void 0,
                  text: ep,
                  fullWidth: !0,
              }),
          }))
        : Q
          ? (eS = et
                ? (0, a.jsx)(U, { quest: t, questContent: n, sourceQuestContent: L, onClick: eg, text: ep })
                : (0, T.vA)(t)
                  ? (0, a.jsxs)(r.e2v, {
                        direction: "horizontal",
                        fullWidth: !0,
                        wrap: !1,
                        children: [
                            (0, a.jsx)(r.$nd, {
                                variant: "secondary",
                                icon: t.config.features.includes(O.Li.CLOUD_GAMING_ACTIVITY) ? d.hpF : d._xR,
                                text: ej,
                                onClick: () => {
                                    eb();
                                },
                            }),
                            (0, a.jsx)(r.$nd, { variant: "primary", onClick: eg ?? void 0, text: ep }),
                        ],
                    })
                  : (0, a.jsx)("div", {
                        className: w.x6,
                        children: (0, a.jsx)(r.$nd, {
                            variant: "primary",
                            onClick: eg ?? void 0,
                            text: ep,
                            fullWidth: !0,
                        }),
                    }))
          : Z
            ? J
                ? (eS = (0, a.jsx)("div", {
                      className: w.x6,
                      children: (0, a.jsx)(r.$nd, {
                          variant: "primary",
                          loading: z,
                          onClick: eg ?? void 0,
                          text: ep,
                          fullWidth: !0,
                      }),
                  }))
                : en
                  ? (eS = (0, a.jsx)("div", {
                        className: w.x6,
                        children:
                            eu.enabled &&
                            (em === I.UA.UNENROLLED || em === I.UA.ENROLLED || em === I.UA.INCOMPLETE) &&
                            eu.enabledQuestStates.has(em)
                                ? (0, a.jsxs)(r.e2v, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          em === I.UA.UNENROLLED ? ey : null,
                                          (0, a.jsx)(N.A, {
                                              quest: t,
                                              surface: I.V3.QUEST_HOME_TILE_FOOTER,
                                              analyticsCtxQuestContent: n,
                                              analyticsCtxSourceQuestContent: L,
                                              analyticsCtxQuestContentPosition: j,
                                          }),
                                      ],
                                  })
                                : (0, a.jsx)(r.e2v, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "primary",
                                          loading: $,
                                          onClick: eg ?? void 0,
                                          text: ep,
                                          fullWidth: !0,
                                      }),
                                  }),
                    }))
                  : Y && !ev
                    ? (eS = ed
                          ? (0, a.jsx)(l.Pw, {
                                className: w.dd,
                                isSelected: () => !1,
                                options: D,
                                placeholder: R.intl.string(R.t.drVw4T),
                                renderOptionLabel: M,
                                renderOptionValue: P,
                                select: ex,
                                serialize: (e) => {
                                    switch (e) {
                                        case O.fO.DESKTOP:
                                            return R.intl.string(R.t["QXc01+"]);
                                        case O.fO.CONSOLE:
                                            return R.intl.string(R.t["8lAfuB"]);
                                        default:
                                            return (0, u.xb)(e);
                                    }
                                },
                                size: "sm",
                                "data-migration-pending": !0,
                            })
                          : eu.enabled &&
                              (em === I.UA.ENROLLED || em === I.UA.INCOMPLETE) &&
                              eu.enabledQuestStates.has(em)
                            ? (0, a.jsx)("div", {
                                  className: w.x6,
                                  children: (0, a.jsx)(N.A, {
                                      quest: t,
                                      surface: I.V3.QUEST_HOME_TILE_FOOTER,
                                      analyticsCtxQuestContent: n,
                                      analyticsCtxSourceQuestContent: L,
                                      analyticsCtxQuestContentPosition: j,
                                  }),
                              })
                            : (0, S.g5)(t) && !H && es !== x.X0.DESKTOP
                              ? W
                                  ? (0, a.jsx)("div", {
                                        className: w.x6,
                                        children: (0, a.jsx)(r.$nd, {
                                            variant: "secondary",
                                            onClick: eg ?? void 0,
                                            text: ep,
                                            fullWidth: !0,
                                        }),
                                    })
                                  : (0, a.jsx)(o.$n, {
                                        "data-migration-pending": !0,
                                        color: o.XD.PRIMARY,
                                        onClick: e_,
                                        disabled: ef,
                                        className: w.x6,
                                        children: (0, a.jsxs)("div", {
                                            className: w.tn,
                                            children: [F.render(), R.intl.string(R.t.nPThNb)],
                                        }),
                                    })
                              : et
                                ? (0, a.jsx)("div", {
                                      className: w.x6,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "primary",
                                          onClick: eg ?? void 0,
                                          text: ep,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, T.vA)(t)
                                  ? (0, a.jsx)("div", {
                                        className: w.x6,
                                        children: (0, a.jsx)(r.$nd, {
                                            variant: "primary",
                                            icon: (0, k.Oz)(t),
                                            onClick: eg ?? void 0,
                                            text: ep,
                                            fullWidth: !0,
                                        }),
                                    })
                                  : (0, a.jsx)("div", {
                                        className: w.x6,
                                        children: (0, a.jsx)(r.$nd, {
                                            variant: "secondary",
                                            disabled: !0,
                                            text: R.intl.string(R.t["9KoPyB"]),
                                            fullWidth: !0,
                                        }),
                                    }))
                    : Y ||
                      (eS = q
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
                                        onClick: () => (0, k.m6)(t, n, L),
                                        text: R.intl.string(R.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, a.jsx)("div", {
                                className: w.x6,
                                children: (0, a.jsxs)(r.e2v, {
                                    direction: "horizontal",
                                    fullWidth: !0,
                                    wrap: !1,
                                    children: [
                                        ey,
                                        eu.enabled &&
                                        em === I.UA.UNENROLLED &&
                                        eu.enabledQuestStates.has(I.UA.UNENROLLED)
                                            ? (0, a.jsx)(N.A, {
                                                  quest: t,
                                                  surface: I.V3.QUEST_HOME_TILE_FOOTER,
                                                  analyticsCtxQuestContent: n,
                                                  analyticsCtxSourceQuestContent: L,
                                                  analyticsCtxQuestContentPosition: j,
                                              })
                                            : (0, a.jsx)(r.$nd, {
                                                  loading: $,
                                                  variant: "primary",
                                                  onClick: eg ?? void 0,
                                                  text: ep,
                                                  icon: (0, k.Oz)(t),
                                                  fullWidth: !0,
                                              }),
                                    ],
                                }),
                            }))
            : (eS = (0, a.jsx)(B, { quest: t, sourceQuestContent: L, formattedExpirationDate: K })),
    null == eS)
        ? null
        : (0, a.jsxs)("div", {
              className: w.kL,
              children: [
                  (0, a.jsx)("div", { className: w.qz, children: eS }),
                  ec &&
                      (0, a.jsx)("div", {
                          className: w.qz,
                          children: (0, a.jsx)(l.Pw, {
                              className: w.xZ,
                              isSelected: (e) => {
                                  switch (es) {
                                      case x.X0.DESKTOP:
                                          return e === O.fO.DESKTOP;
                                      case x.X0.CONSOLE:
                                          return e === O.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: D,
                              placeholder: R.intl.string(R.t.drVw4T),
                              renderOptionLabel: M,
                              renderOptionValue: P,
                              select: ex,
                              serialize: (e) => {
                                  switch (e) {
                                      case O.fO.DESKTOP:
                                          return R.intl.string(R.t["QXc01+"]);
                                      case O.fO.CONSOLE:
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
