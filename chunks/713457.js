n.d(t, { A: () => F });
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
    p = n(245853),
    g = n(33621),
    _ = n(551456),
    f = n(714510),
    v = n(890687),
    b = n(18437),
    j = n(590202),
    A = n(971649),
    C = n(651892),
    y = n(710969),
    T = n(901406),
    S = n(792620),
    E = n(814793),
    N = n(201805),
    I = n(212614),
    k = n(79545),
    R = n(545986),
    O = n(654487),
    w = n(985018),
    D = n(65439);
let M = [
    {
        value: O.fO.DESKTOP,
        get label() {
            return w.intl.string(w.t["QXc01+"]);
        },
    },
    {
        value: O.fO.CONSOLE,
        get label() {
            return w.intl.string(w.t["8lAfuB"]);
        },
    },
];
function P(e) {
    let t,
        n,
        { value: i } = e;
    switch (i) {
        case O.fO.DESKTOP:
            (n = (0, a.jsx)(d.kN9, {})), (t = w.intl.string(w.t["QXc01+"]));
            break;
        case O.fO.CONSOLE:
            (n = (0, a.jsx)(d._xR, {})), (t = w.intl.string(w.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, a.jsxs)("div", { className: D.FL, children: [n, t] });
}
function U(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case O.fO.DESKTOP:
            return (0, a.jsxs)("span", {
                className: D.FL,
                children: [(0, a.jsx)(d.kN9, {}), w.intl.string(w.t.g6Dr44)],
            });
        case O.fO.CONSOLE:
            return (0, a.jsxs)("span", {
                className: D.FL,
                children: [(0, a.jsx)(d._xR, {}), w.intl.string(w.t.iyNbj5)],
            });
        default:
            return (0, u.xb)(e[0].value);
    }
}
function L(e) {
    let { quest: t, sourceQuestContent: n } = e,
        a = (0, A.go)();
    return {
        externalLinkCta: (0, C.wr)(t),
        handleOpenExternalLink: i.useCallback(() => {
            (0, T.pu)(t, {
                content: x.uF.QUEST_HOME_DESKTOP,
                ctaContent: j.Cy.OPEN_GAME_LINK,
                impressionId: a,
                sourceQuestContent: n,
            });
        }, [t, n, a]),
    };
}
function B(e) {
    let { quest: t, questContent: n, sourceQuestContent: i, onClick: s, text: l } = e,
        { enabled: o } = _.K.useConfig({ location: O.rE.QUEST_LEARN_MORE_CTA }),
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
                      text: w.intl.string(w.t.YsCuyF),
                      onClick: () => {
                          (0, R.d5)({
                              quest: t,
                              questContent: n,
                              sourceQuestContent: i,
                              sourceQuestContentCTA: j.Cy.WATCH_VIDEO,
                              skipEnrollmentCheck: !0,
                          });
                      },
                  }),
                  (0, a.jsx)(r.$nd, { variant: "primary", onClick: s ?? void 0, text: l }),
              ],
          });
}
function G(e) {
    let { quest: t, sourceQuestContent: n, formattedExpirationDate: i } = e,
        { enabled: s } = _.K.useConfig({ location: O.rE.QUEST_LEARN_MORE_CTA }),
        { externalLinkCta: l, handleOpenExternalLink: o } = L({ quest: t, sourceQuestContent: n }),
        d = w.intl.format(w.t["14o6QY"], { expiryDate: i });
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
function F(e) {
    let {
            quest: t,
            questContent: n,
            onReceiveErrorHints: _,
            contentPosition: A,
            rowIndex: T,
            sourceQuestContent: L,
        } = e,
        F = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        V = (0, N.Xf)({ useReducedMotion: F }),
        W = (0, b.Ut)(),
        H = (0, v.RR)({ quest: t }),
        K = (0, v.Vn)(t),
        z = (0, v.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: $,
            isEnrolling: q,
            isQuestEnrollmentBlocked: Q,
        } = (0, s.cf)([h.A], () => ({
            isClaiming: h.A.isClaimingReward(t.id) || h.A.isFetchingRewardCode(t.id),
            isEnrolling: h.A.isEnrolling(t.id),
            isQuestEnrollmentBlocked: null != h.A.questEnrollmentBlockedUntil,
        })),
        Y = t.userStatus?.enrolledAt != null,
        J = t.userStatus?.completedAt != null,
        X = J && t.userStatus?.claimedAt == null,
        Z = (0, y.if)(t),
        ee = !(0, y.Ic)(t),
        et = (0, v.In)(t),
        en = (0, S.IO)(t),
        ea = (0, S.K$)(t),
        ei = (0, S.Cr)(t),
        es = (0, v.fc)(t),
        [el, er, eo] = (0, v.Qo)(t, es),
        ed = ee && et === v.F3.ACCEPTED,
        ec = ed && el === x.X0.SELECT,
        eu = ed && !ec && er.length > 1,
        em = g.t.useConfig({ location: O.rE.QUEST_HOME_DESKTOP }),
        eh = (0, k.Pd)(t),
        ex = (0, m.O)((e) => e.clearErrorHints),
        ep = i.useCallback(
            (e) => {
                eo(e), e === O.fO.DESKTOP && (_([]), ex(t.id));
            },
            [eo, _, ex, t.id],
        ),
        { text: eg, onClick: e_ } = (0, N._c)({
            progressState: et,
            quest: t,
            questContent: n,
            questContentPosition: A,
            questContentRowIndex: T,
            inGiftInventory: !0,
            isVideoQuest: en,
            inGameQuest: ei,
            sourceQuestContent: L,
        }),
        { startingConsoleQuest: ef, startConsoleQuest: ev } = (0, v.Wj)({
            questId: t.id,
            beforeRequest: () => {
                V.startAnimation(),
                    W({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: j.Cy.DEFIBRILLATOR,
                        questContentPosition: A,
                        questContentRowIndex: T,
                        sourceQuestContent: L,
                    });
            },
            afterRequest: (e) => {
                V.stopAnimation(), _(e);
            },
        }),
        eb = t.userStatus?.claimedAt != null,
        { launchInGameActivity: ej } = (0, v.zW)(t),
        eA = (0, f.NA)({ quest: t, shortText: !0 }),
        eC = (0, v.do)({
            quest: t,
            content: n,
            ctaContent: j.Cy.CONTEXT_MENU_OPEN_GAME_LINK_EXP_TREATMENT_ONE,
            sourceQuestContent: L,
        }),
        ey = p.wK.useConfig({ location: O.rE.QUESTS_CARD }),
        eT = ey.enabled && ey.variant === p.dF.NEXT_TO_PRIMARY_CTA,
        eS = null;
    if (eT) {
        let e = (0, C.wr)(t);
        eS = (0, a.jsx)(r.$nd, { variant: "secondary", text: e, onClick: eC });
    }
    let eE = null;
    return (Z && X
        ? (eE = (0, a.jsx)("div", {
              className: D.x6,
              children: (0, a.jsx)(r.$nd, {
                  variant: "primary",
                  loading: $,
                  onClick: e_ ?? void 0,
                  text: eg,
                  fullWidth: !0,
              }),
          }))
        : J
          ? (eE = en
                ? (0, a.jsx)(B, { quest: t, questContent: n, sourceQuestContent: L, onClick: e_, text: eg })
                : (0, E.vA)(t)
                  ? (0, a.jsxs)(r.e2v, {
                        direction: "horizontal",
                        fullWidth: !0,
                        wrap: !1,
                        children: [
                            (0, a.jsx)(r.$nd, {
                                variant: "secondary",
                                icon: t.config.features.includes(O.Li.CLOUD_GAMING_ACTIVITY) ? d.hpF : d._xR,
                                text: eA,
                                onClick: () => {
                                    ej();
                                },
                            }),
                            (0, a.jsx)(r.$nd, { variant: "primary", onClick: e_ ?? void 0, text: eg }),
                        ],
                    })
                  : (0, a.jsx)("div", {
                        className: D.x6,
                        children: (0, a.jsx)(r.$nd, {
                            variant: "primary",
                            onClick: e_ ?? void 0,
                            text: eg,
                            fullWidth: !0,
                        }),
                    }))
          : ee
            ? ee && X
                ? (eE = (0, a.jsx)("div", {
                      className: D.x6,
                      children: (0, a.jsx)(r.$nd, {
                          variant: "primary",
                          loading: $,
                          onClick: e_ ?? void 0,
                          text: eg,
                          fullWidth: !0,
                      }),
                  }))
                : ea
                  ? (eE = (0, a.jsx)("div", {
                        className: D.x6,
                        children:
                            em.enabled && eh === k.UA.UNENROLLED && em.enabledQuestStates.has(k.UA.UNENROLLED)
                                ? (0, a.jsxs)(r.e2v, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          eS,
                                          (0, a.jsx)(I.A, {
                                              quest: t,
                                              surface: k.V3.QUEST_HOME_TILE_FOOTER,
                                              analyticsCtxQuestContent: n,
                                              analyticsCtxSourceQuestContent: L,
                                              analyticsCtxQuestContentPosition: A,
                                          }),
                                      ],
                                  })
                                : (0, a.jsx)(r.e2v, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "primary",
                                          loading: q,
                                          onClick: e_ ?? void 0,
                                          text: eg,
                                          fullWidth: !0,
                                      }),
                                  }),
                    }))
                  : ee && Y && !eb
                    ? (eE = ec
                          ? (0, a.jsx)(l.Pw, {
                                className: D.dd,
                                isSelected: () => !1,
                                options: M,
                                placeholder: w.intl.string(w.t.drVw4T),
                                renderOptionLabel: P,
                                renderOptionValue: U,
                                select: ep,
                                serialize: (e) => {
                                    switch (e) {
                                        case O.fO.DESKTOP:
                                            return w.intl.string(w.t["QXc01+"]);
                                        case O.fO.CONSOLE:
                                            return w.intl.string(w.t["8lAfuB"]);
                                        default:
                                            return (0, u.xb)(e);
                                    }
                                },
                                size: "sm",
                                "data-migration-pending": !0,
                            })
                          : (0, S.g5)(t) && !K && el !== x.X0.DESKTOP
                            ? H
                                ? (0, a.jsx)("div", {
                                      className: D.x6,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "secondary",
                                          onClick: e_ ?? void 0,
                                          text: eg,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)(o.$n, {
                                      "data-migration-pending": !0,
                                      color: o.XD.PRIMARY,
                                      onClick: ev,
                                      disabled: ef,
                                      className: D.x6,
                                      children: (0, a.jsxs)("div", {
                                          className: D.tn,
                                          children: [V.render(), w.intl.string(w.t.nPThNb)],
                                      }),
                                  })
                            : en
                              ? (0, a.jsx)("div", {
                                    className: D.x6,
                                    children: (0, a.jsx)(r.$nd, {
                                        variant: "primary",
                                        onClick: e_ ?? void 0,
                                        text: eg,
                                        fullWidth: !0,
                                    }),
                                })
                              : (0, E.vA)(t)
                                ? (0, a.jsx)("div", {
                                      className: D.x6,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "primary",
                                          icon: (0, R.Oz)(t),
                                          onClick: e_ ?? void 0,
                                          text: eg,
                                          fullWidth: !0,
                                      }),
                                  })
                                : (0, a.jsx)("div", {
                                      className: D.x6,
                                      children: (0, a.jsx)(r.$nd, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: w.intl.string(w.t["9KoPyB"]),
                                          fullWidth: !0,
                                      }),
                                  }))
                    : ee &&
                      !Y &&
                      (eE = Q
                          ? (0, a.jsxs)(r.e2v, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    (0, a.jsx)(r.$nd, {
                                        variant: "secondary",
                                        disabled: !0,
                                        text: w.intl.string(w.t.V293qn),
                                    }),
                                    (0, a.jsx)(r.$nd, {
                                        variant: "primary",
                                        onClick: () => (0, R.m6)(t, n, L),
                                        text: w.intl.string(w.t.vY9GgG),
                                    }),
                                ],
                            })
                          : (0, a.jsx)("div", {
                                className: D.x6,
                                children: (0, a.jsxs)(r.e2v, {
                                    direction: "horizontal",
                                    fullWidth: !0,
                                    wrap: !1,
                                    children: [
                                        eS,
                                        em.enabled &&
                                        eh === k.UA.UNENROLLED &&
                                        em.enabledQuestStates.has(k.UA.UNENROLLED)
                                            ? (0, a.jsx)(I.A, {
                                                  quest: t,
                                                  surface: k.V3.QUEST_HOME_TILE_FOOTER,
                                                  analyticsCtxQuestContent: n,
                                                  analyticsCtxSourceQuestContent: L,
                                                  analyticsCtxQuestContentPosition: A,
                                              })
                                            : (0, a.jsx)(r.$nd, {
                                                  loading: q,
                                                  variant: "primary",
                                                  onClick: e_ ?? void 0,
                                                  text: eg,
                                                  icon: (0, R.Oz)(t),
                                                  fullWidth: !0,
                                              }),
                                    ],
                                }),
                            }))
            : (eE = (0, a.jsx)(G, { quest: t, sourceQuestContent: L, formattedExpirationDate: z })),
    null == eE)
        ? null
        : (0, a.jsxs)("div", {
              className: D.kL,
              children: [
                  (0, a.jsx)("div", { className: D.qz, children: eE }),
                  eu &&
                      (0, a.jsx)("div", {
                          className: D.qz,
                          children: (0, a.jsx)(l.Pw, {
                              className: D.xZ,
                              isSelected: (e) => {
                                  switch (el) {
                                      case x.X0.DESKTOP:
                                          return e === O.fO.DESKTOP;
                                      case x.X0.CONSOLE:
                                          return e === O.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: M,
                              placeholder: w.intl.string(w.t.drVw4T),
                              renderOptionLabel: P,
                              renderOptionValue: U,
                              select: ep,
                              serialize: (e) => {
                                  switch (e) {
                                      case O.fO.DESKTOP:
                                          return w.intl.string(w.t["QXc01+"]);
                                      case O.fO.CONSOLE:
                                          return w.intl.string(w.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
