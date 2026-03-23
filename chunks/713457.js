n.d(t, { A: () => F });
var a = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(843282),
    r = n(732955),
    o = n(421380),
    d = n(397927),
    c = n(775602),
    u = n(403362),
    m = n(178540),
    h = n(859703),
    p = n(341915),
    x = n(12251),
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
    O = n(545986),
    R = n(654487),
    w = n(985018),
    D = n(421193);
let M = [
    {
        value: R.fO.DESKTOP,
        get label() {
            return w.intl.string(w.t["QXc01+"]);
        },
    },
    {
        value: R.fO.CONSOLE,
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
        case R.fO.DESKTOP:
            (n = (0, a.jsx)(d.kN9, {})), (t = w.intl.string(w.t["QXc01+"]));
            break;
        case R.fO.CONSOLE:
            (n = (0, a.jsx)(d._xR, {})), (t = w.intl.string(w.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, a.jsxs)("div", { className: D.FL, children: [n, t] });
}
function L(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case R.fO.DESKTOP:
            return (0, a.jsxs)("span", {
                className: D.FL,
                children: [(0, a.jsx)(d.kN9, {}), w.intl.string(w.t.g6Dr44)],
            });
        case R.fO.CONSOLE:
            return (0, a.jsxs)("span", {
                className: D.FL,
                children: [(0, a.jsx)(d._xR, {}), w.intl.string(w.t.iyNbj5)],
            });
        default:
            return (0, u.xb)(e[0].value);
    }
}
function U(e) {
    let { quest: t, sourceQuestContent: n } = e,
        a = (0, A.go)();
    return {
        externalLinkCta: (0, C.wr)(t),
        handleOpenExternalLink: i.useCallback(() => {
            (0, T.pu)(t, {
                content: p.uF.QUEST_HOME_DESKTOP,
                ctaContent: j.Cy.OPEN_GAME_LINK,
                impressionId: a,
                sourceQuestContent: n,
            });
        }, [t, n, a]),
    };
}
function B(e) {
    let { quest: t, questContent: n, sourceQuestContent: i, onClick: l, text: s } = e,
        { enabled: o } = _.K.useConfig({ location: R.rE.QUEST_LEARN_MORE_CTA }),
        { externalLinkCta: c, handleOpenExternalLink: u } = U({ quest: t, sourceQuestContent: i });
    return o
        ? (0, a.jsxs)(r.e2v, {
              direction: "horizontal",
              fullWidth: !0,
              wrap: !1,
              children: [
                  (0, a.jsx)(r.$nd, { variant: "secondary", text: c, onClick: u }),
                  (0, a.jsx)(r.$nd, { variant: "primary", onClick: l ?? void 0, text: s }),
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
                          (0, O.d5)({
                              quest: t,
                              questContent: n,
                              sourceQuestContent: i,
                              sourceQuestContentCTA: j.Cy.WATCH_VIDEO,
                              skipEnrollmentCheck: !0,
                          });
                      },
                  }),
                  (0, a.jsx)(r.$nd, { variant: "primary", onClick: l ?? void 0, text: s }),
              ],
          });
}
function G(e) {
    let { quest: t, sourceQuestContent: n, formattedExpirationDate: i } = e,
        { enabled: l } = _.K.useConfig({ location: R.rE.QUEST_LEARN_MORE_CTA }),
        { externalLinkCta: s, handleOpenExternalLink: o } = U({ quest: t, sourceQuestContent: n }),
        d = w.intl.format(w.t["14o6QY"], { expiryDate: i });
    return l
        ? (0, a.jsxs)(r.e2v, {
              direction: "horizontal",
              fullWidth: !0,
              wrap: !1,
              children: [
                  (0, a.jsx)(r.$nd, { variant: "secondary", text: s, onClick: o }),
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
            sourceQuestContent: U,
        } = e,
        F = (0, l.bG)([c.A], () => c.A.useReducedMotion),
        V = (0, N.Xf)({ useReducedMotion: F }),
        W = (0, b.Ut)(),
        H = (0, v.RR)({ quest: t }),
        K = (0, v.Vn)(t),
        z = (0, v.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: $,
            isEnrolling: q,
            isQuestEnrollmentBlocked: Q,
        } = (0, l.cf)([h.A], () => ({
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
        el = (0, v.fc)(t),
        [es, er, eo] = (0, v.Qo)(t, el),
        ed = ee && et === v.F3.ACCEPTED,
        ec = ed && es === p.X0.SELECT,
        eu = ed && !ec && er.length > 1,
        em = g.t.useConfig({ location: R.rE.QUEST_HOME_DESKTOP }),
        eh = (0, k.Pd)(t),
        ep = (0, m.O)((e) => e.clearErrorHints),
        ex = i.useCallback(
            (e) => {
                eo(e), e === R.fO.DESKTOP && (_([]), ep(t.id));
            },
            [eo, _, ep, t.id],
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
            sourceQuestContent: U,
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
                        sourceQuestContent: U,
                    });
            },
            afterRequest: (e) => {
                V.stopAnimation(), _(e);
            },
        }),
        eb = t.userStatus?.claimedAt != null,
        { launchInGameActivity: ej } = (0, v.zW)(t),
        eA = (0, f.NA)({ quest: t, shortText: !0 }),
        eC = x.s5.useConfig({ location: R.rE.QUESTS_CARD }),
        ey =
            eC.enabled &&
            (eC.variant === x.tL.LEARN_MORE_CTA_ONLY ||
                eC.variant === x.tL.COMBINE_LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON),
        eT = (0, v.do)({
            quest: t,
            content: n,
            ctaContent:
                eC.variant === x.tL.LEARN_MORE_CTA_ONLY
                    ? j.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_TWO_OPEN_GAME_LINK
                    : j.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_THREE_OPEN_GAME_LINK,
            sourceQuestContent: U,
        }),
        eS = null;
    if (ey) {
        let e = (0, C.wr)(t);
        eS = (0, a.jsx)(r.$nd, { variant: "secondary", text: e, onClick: eT });
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
                ? (0, a.jsx)(B, { quest: t, questContent: n, sourceQuestContent: U, onClick: e_, text: eg })
                : (0, E.vA)(t)
                  ? (0, a.jsxs)(r.e2v, {
                        direction: "horizontal",
                        fullWidth: !0,
                        wrap: !1,
                        children: [
                            (0, a.jsx)(r.$nd, {
                                variant: "secondary",
                                icon: t.config.features.includes(R.Li.CLOUD_GAMING_ACTIVITY) ? d.hpF : d._xR,
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
            ? X
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
                            em.enabled &&
                            (eh === k.UA.UNENROLLED || eh === k.UA.ENROLLED) &&
                            em.enabledQuestStates.has(eh)
                                ? (0, a.jsxs)(r.e2v, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          eh === k.UA.UNENROLLED ? eS : null,
                                          (0, a.jsx)(I.A, {
                                              quest: t,
                                              surface: k.V3.QUEST_HOME_TILE_FOOTER,
                                              analyticsCtxQuestContent: n,
                                              analyticsCtxSourceQuestContent: U,
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
                  : Y && !eb
                    ? (eE = ec
                          ? (0, a.jsx)(s.Pw, {
                                className: D.dd,
                                isSelected: () => !1,
                                options: M,
                                placeholder: w.intl.string(w.t.drVw4T),
                                renderOptionLabel: P,
                                renderOptionValue: L,
                                select: ex,
                                serialize: (e) => {
                                    switch (e) {
                                        case R.fO.DESKTOP:
                                            return w.intl.string(w.t["QXc01+"]);
                                        case R.fO.CONSOLE:
                                            return w.intl.string(w.t["8lAfuB"]);
                                        default:
                                            return (0, u.xb)(e);
                                    }
                                },
                                size: "sm",
                                "data-migration-pending": !0,
                            })
                          : em.enabled && eh === k.UA.ENROLLED && em.enabledQuestStates.has(k.UA.ENROLLED)
                            ? (0, a.jsx)("div", {
                                  className: D.x6,
                                  children: (0, a.jsx)(I.A, {
                                      quest: t,
                                      surface: k.V3.QUEST_HOME_TILE_FOOTER,
                                      analyticsCtxQuestContent: n,
                                      analyticsCtxSourceQuestContent: U,
                                      analyticsCtxQuestContentPosition: A,
                                  }),
                              })
                            : (0, S.g5)(t) && !K && es !== p.X0.DESKTOP
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
                                            icon: (0, O.Oz)(t),
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
                    : Y ||
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
                                        onClick: () => (0, O.m6)(t, n, U),
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
                                                  analyticsCtxSourceQuestContent: U,
                                                  analyticsCtxQuestContentPosition: A,
                                              })
                                            : (0, a.jsx)(r.$nd, {
                                                  loading: q,
                                                  variant: "primary",
                                                  onClick: e_ ?? void 0,
                                                  text: eg,
                                                  icon: (0, O.Oz)(t),
                                                  fullWidth: !0,
                                              }),
                                    ],
                                }),
                            }))
            : (eE = (0, a.jsx)(G, { quest: t, sourceQuestContent: U, formattedExpirationDate: z })),
    null == eE)
        ? null
        : (0, a.jsxs)("div", {
              className: D.kL,
              children: [
                  (0, a.jsx)("div", { className: D.qz, children: eE }),
                  eu &&
                      (0, a.jsx)("div", {
                          className: D.qz,
                          children: (0, a.jsx)(s.Pw, {
                              className: D.xZ,
                              isSelected: (e) => {
                                  switch (es) {
                                      case p.X0.DESKTOP:
                                          return e === R.fO.DESKTOP;
                                      case p.X0.CONSOLE:
                                          return e === R.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: M,
                              placeholder: w.intl.string(w.t.drVw4T),
                              renderOptionLabel: P,
                              renderOptionValue: L,
                              select: ex,
                              serialize: (e) => {
                                  switch (e) {
                                      case R.fO.DESKTOP:
                                          return w.intl.string(w.t["QXc01+"]);
                                      case R.fO.CONSOLE:
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
