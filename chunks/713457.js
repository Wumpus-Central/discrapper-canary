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
    p = n(364497),
    g = n(551456),
    f = n(112142),
    v = n(714510),
    _ = n(890687),
    b = n(18437),
    j = n(590202),
    A = n(971649),
    C = n(651892),
    y = n(710969),
    S = n(901406),
    E = n(792620),
    T = n(814793),
    N = n(201805),
    I = n(212614),
    k = n(79545),
    O = n(545986),
    R = n(654487),
    w = n(985018),
    D = n(376936);
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
            (0, S.pu)(t, {
                content: x.uF.QUEST_HOME_DESKTOP,
                ctaContent: j.Cy.OPEN_GAME_LINK,
                impressionId: a,
                sourceQuestContent: n,
            });
        }, [t, n, a]),
    };
}
function B(e) {
    let { quest: t, questContent: n, sourceQuestContent: i, onClick: s, text: l, primaryCtaButton: o } = e,
        { enabled: c } = g.K.useConfig({ location: R.rE.QUEST_LEARN_MORE_CTA }),
        { externalLinkCta: u, handleOpenExternalLink: m } = U({ quest: t, sourceQuestContent: i });
    return c
        ? (0, a.jsxs)(r.e2v, {
              direction: "horizontal",
              fullWidth: !0,
              wrap: !1,
              children: [
                  (0, a.jsx)(r.$nd, { variant: "secondary", text: u, onClick: m }),
                  o ?? (0, a.jsx)(r.$nd, { variant: "primary", onClick: s ?? void 0, text: l }),
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
                  o ?? (0, a.jsx)(r.$nd, { variant: "primary", onClick: s ?? void 0, text: l }),
              ],
          });
}
function G(e) {
    let { quest: t, sourceQuestContent: n, formattedExpirationDate: i } = e,
        { enabled: s } = g.K.useConfig({ location: R.rE.QUEST_LEARN_MORE_CTA }),
        { externalLinkCta: l, handleOpenExternalLink: o } = U({ quest: t, sourceQuestContent: n }),
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
            onReceiveErrorHints: g,
            contentPosition: A,
            rowIndex: S,
            sourceQuestContent: F,
        } = e,
        V = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        W = (0, N.Xf)({ useReducedMotion: V }),
        H = (0, b.Ut)(),
        K = (0, _.RR)({ quest: t }),
        z = (0, _.Vn)(t),
        $ = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: q,
            isEnrolling: Q,
            isQuestEnrollmentBlocked: Y,
        } = (0, s.cf)([h.A], () => ({
            isClaiming: h.A.isClaimingReward(t.id) || h.A.isFetchingRewardCode(t.id),
            isEnrolling: h.A.isEnrolling(t.id),
            isQuestEnrollmentBlocked: null != h.A.questEnrollmentBlockedUntil,
        })),
        J = t.userStatus?.enrolledAt != null,
        X = t.userStatus?.completedAt != null,
        Z = X && t.userStatus?.claimedAt == null,
        ee = (0, y.if)(t),
        et = !(0, y.Ic)(t),
        en = (0, _.In)(t),
        ea = (0, E.IO)(t),
        ei = (0, E.K$)(t),
        es = (0, E.Cr)(t),
        el = (0, _.fc)(t),
        [er, eo, ed] = (0, _.Qo)(t, el),
        ec = et && en === _.F3.ACCEPTED,
        eu = ec && er === x.X0.SELECT,
        em = ec && !eu && eo.length > 1,
        eh = f.t.useConfig({ location: R.rE.QUEST_HOME_DESKTOP }),
        ex = (0, k.Pd)(t),
        ep = (0, m.O)((e) => e.clearErrorHints),
        eg = i.useCallback(
            (e) => {
                ed(e), e === R.fO.DESKTOP && (g([]), ep(t.id));
            },
            [ed, g, ep, t.id],
        ),
        { text: ef, onClick: ev } = (0, N._c)({
            progressState: en,
            quest: t,
            questContent: n,
            questContentPosition: A,
            questContentRowIndex: S,
            inGiftInventory: !0,
            isVideoQuest: ea,
            inGameQuest: es,
            sourceQuestContent: F,
        }),
        { startingConsoleQuest: e_, startConsoleQuest: eb } = (0, _.Wj)({
            questId: t.id,
            beforeRequest: () => {
                W.startAnimation(),
                    H({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: j.Cy.DEFIBRILLATOR,
                        questContentPosition: A,
                        questContentRowIndex: S,
                        sourceQuestContent: F,
                    });
            },
            afterRequest: (e) => {
                W.stopAnimation(), g(e);
            },
        }),
        ej = t.userStatus?.claimedAt != null,
        { launchInGameActivity: eA } = (0, _.zW)(t),
        eC = (0, v.NA)({ quest: t, shortText: !0 }),
        ey = (0, _.do)({ quest: t, content: n, ctaContent: j.Cy.OPEN_GAME_LINK, sourceQuestContent: F }),
        eS = (0, C.wr)(t),
        { handleOpenExternalLink: eE } = U({ quest: t, sourceQuestContent: F }),
        eT = (0, p.W)(t, R.rE.QUEST_HOME_DESKTOP),
        eN = eT ? eE : ey,
        eI = (0, a.jsx)(r.$nd, { variant: "secondary", text: eS, onClick: eN }),
        ek = (0, a.jsx)(r.$nd, { variant: "secondary", text: eS, onClick: eN, fullWidth: !0 }),
        eO = (0, a.jsx)(r.$nd, { variant: "secondary", text: eS, onClick: ey }),
        eR = null;
    return (eh.enabled && ex === k.UA.EXPIRED_CLAIMABLE && eh.enabledQuestStates.has(ex)
        ? (eR = (0, a.jsx)("div", {
              className: D.x6,
              children: (0, a.jsx)(I.A, {
                  quest: t,
                  surface: k.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: n,
                  analyticsCtxSourceQuestContent: F,
                  analyticsCtxQuestContentPosition: A,
                  analyticsCtxQuestContentRowIndex: S,
              }),
          }))
        : ee && Z
          ? (eR = (0, a.jsx)("div", {
                className: D.x6,
                children: (0, a.jsx)(r.$nd, {
                    variant: "primary",
                    loading: q,
                    onClick: ev ?? void 0,
                    text: ef,
                    fullWidth: !0,
                }),
            }))
          : eh.enabled && (ex === k.UA.COMPLETED || ex === k.UA.CLAIMED) && eh.enabledQuestStates.has(ex)
            ? (eR = ea
                  ? (0, a.jsx)(B, {
                        quest: t,
                        questContent: n,
                        sourceQuestContent: F,
                        onClick: ev,
                        text: ef,
                        primaryCtaButton: (0, a.jsx)(I.A, {
                            quest: t,
                            surface: k.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: n,
                            analyticsCtxSourceQuestContent: F,
                            analyticsCtxQuestContentPosition: A,
                            analyticsCtxQuestContentRowIndex: S,
                        }),
                    })
                  : (0, T.vA)(t)
                    ? (0, a.jsxs)(r.e2v, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, a.jsx)(r.$nd, {
                                  variant: "secondary",
                                  icon: t.config.features.includes(R.Li.CLOUD_GAMING_ACTIVITY) ? d.hpF : d._xR,
                                  text: eC,
                                  onClick: () => {
                                      eA();
                                  },
                              }),
                              (0, a.jsx)(I.A, {
                                  quest: t,
                                  surface: k.V3.QUEST_HOME_TILE_FOOTER,
                                  analyticsCtxQuestContent: n,
                                  analyticsCtxSourceQuestContent: F,
                                  analyticsCtxQuestContentPosition: A,
                                  analyticsCtxQuestContentRowIndex: S,
                              }),
                          ],
                      })
                    : (0, a.jsx)("div", {
                          className: D.x6,
                          children: (0, a.jsx)(I.A, {
                              quest: t,
                              surface: k.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: n,
                              analyticsCtxSourceQuestContent: F,
                              analyticsCtxQuestContentPosition: A,
                              analyticsCtxQuestContentRowIndex: S,
                          }),
                      }))
            : X
              ? (eR = ea
                    ? (0, a.jsx)(B, { quest: t, questContent: n, sourceQuestContent: F, onClick: ev, text: ef })
                    : (0, T.vA)(t)
                      ? (0, a.jsxs)(r.e2v, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, a.jsx)(r.$nd, {
                                    variant: "secondary",
                                    icon: t.config.features.includes(R.Li.CLOUD_GAMING_ACTIVITY) ? d.hpF : d._xR,
                                    text: eC,
                                    onClick: () => {
                                        eA();
                                    },
                                }),
                                (0, a.jsx)(r.$nd, { variant: "primary", onClick: ev ?? void 0, text: ef }),
                            ],
                        })
                      : (0, a.jsx)("div", {
                            className: D.x6,
                            children: (0, a.jsx)(r.$nd, {
                                variant: "primary",
                                onClick: ev ?? void 0,
                                text: ef,
                                fullWidth: !0,
                            }),
                        }))
              : et
                ? ei
                    ? (eR = (0, a.jsx)("div", {
                          className: D.x6,
                          children:
                              eh.enabled &&
                              (ex === k.UA.UNENROLLED || ex === k.UA.ENROLLED || ex === k.UA.INCOMPLETE) &&
                              eh.enabledQuestStates.has(ex)
                                  ? (0, a.jsxs)(r.e2v, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            ex === k.UA.UNENROLLED ? eO : eT ? eI : null,
                                            (0, a.jsx)(I.A, {
                                                quest: t,
                                                surface: k.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: n,
                                                analyticsCtxSourceQuestContent: F,
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
                                            loading: Q,
                                            onClick: ev ?? void 0,
                                            text: ef,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : J && !ej
                      ? (eR = eu
                            ? (0, a.jsx)(l.Pw, {
                                  className: D.dd,
                                  isSelected: () => !1,
                                  options: M,
                                  placeholder: w.intl.string(w.t.drVw4T),
                                  renderOptionLabel: P,
                                  renderOptionValue: L,
                                  select: eg,
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
                            : eh.enabled &&
                                (ex === k.UA.ENROLLED || ex === k.UA.INCOMPLETE) &&
                                eh.enabledQuestStates.has(ex)
                              ? eT && (0, E.t)({ quest: t }) && !(0, E.g5)(t)
                                  ? (0, a.jsx)("div", { className: D.x6, children: ek })
                                  : (0, a.jsx)("div", {
                                        className: D.x6,
                                        children: (0, a.jsxs)(r.e2v, {
                                            direction: "horizontal",
                                            fullWidth: !0,
                                            wrap: !1,
                                            children: [
                                                ea && !(0, E.g5)(t) && eT ? eI : null,
                                                (0, a.jsx)(I.A, {
                                                    quest: t,
                                                    surface: k.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: n,
                                                    analyticsCtxSourceQuestContent: F,
                                                    analyticsCtxQuestContentPosition: A,
                                                }),
                                            ],
                                        }),
                                    })
                              : (0, E.g5)(t) && !z && er !== x.X0.DESKTOP
                                ? K
                                    ? (0, a.jsx)("div", {
                                          className: D.x6,
                                          children: (0, a.jsx)(r.$nd, {
                                              variant: "secondary",
                                              onClick: ev ?? void 0,
                                              text: ef,
                                              fullWidth: !0,
                                          }),
                                      })
                                    : (0, a.jsx)(o.$n, {
                                          "data-migration-pending": !0,
                                          color: o.XD.PRIMARY,
                                          onClick: eb,
                                          disabled: e_,
                                          className: D.x6,
                                          children: (0, a.jsxs)("div", {
                                              className: D.tn,
                                              children: [W.render(), w.intl.string(w.t.nPThNb)],
                                          }),
                                      })
                                : ea
                                  ? eT
                                      ? (0, a.jsx)("div", {
                                            className: D.x6,
                                            children: (0, a.jsxs)(r.e2v, {
                                                direction: "horizontal",
                                                fullWidth: !0,
                                                wrap: !1,
                                                children: [
                                                    eI,
                                                    (0, a.jsx)(r.$nd, {
                                                        variant: "primary",
                                                        onClick: ev ?? void 0,
                                                        text: ef,
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, a.jsx)("div", {
                                            className: D.x6,
                                            children: (0, a.jsx)(r.$nd, {
                                                variant: "primary",
                                                onClick: ev ?? void 0,
                                                text: ef,
                                                fullWidth: !0,
                                            }),
                                        })
                                  : (0, T.vA)(t)
                                    ? eT
                                        ? (0, a.jsx)("div", {
                                              className: D.x6,
                                              children: (0, a.jsxs)(r.e2v, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      eI,
                                                      (0, a.jsx)(r.$nd, {
                                                          variant: "primary",
                                                          icon: (0, O.Oz)(t),
                                                          onClick: ev ?? void 0,
                                                          text: ef,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: D.x6,
                                              children: (0, a.jsx)(r.$nd, {
                                                  variant: "primary",
                                                  icon: (0, O.Oz)(t),
                                                  onClick: ev ?? void 0,
                                                  text: ef,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, a.jsx)("div", {
                                          className: D.x6,
                                          children: eT
                                              ? ek
                                              : (0, a.jsx)(r.$nd, {
                                                    variant: "secondary",
                                                    disabled: !0,
                                                    text: w.intl.string(w.t["9KoPyB"]),
                                                    fullWidth: !0,
                                                }),
                                      }))
                      : J ||
                        (eR = Y
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
                                          onClick: () => (0, O.m6)(t, n, F),
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
                                          eO,
                                          eh.enabled &&
                                          ex === k.UA.UNENROLLED &&
                                          eh.enabledQuestStates.has(k.UA.UNENROLLED)
                                              ? (0, a.jsx)(I.A, {
                                                    quest: t,
                                                    surface: k.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: n,
                                                    analyticsCtxSourceQuestContent: F,
                                                    analyticsCtxQuestContentPosition: A,
                                                })
                                              : (0, a.jsx)(r.$nd, {
                                                    loading: Q,
                                                    variant: "primary",
                                                    onClick: ev ?? void 0,
                                                    text: ef,
                                                    icon: (0, O.Oz)(t),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (eR =
                      eh.enabled && ex === k.UA.EXPIRED && eh.enabledQuestStates.has(ex)
                          ? (0, a.jsx)("div", {
                                className: D.x6,
                                children: (0, a.jsx)(I.A, {
                                    quest: t,
                                    surface: k.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: n,
                                    analyticsCtxSourceQuestContent: F,
                                    analyticsCtxQuestContentPosition: A,
                                    analyticsCtxQuestContentRowIndex: S,
                                }),
                            })
                          : (0, a.jsx)(G, { quest: t, sourceQuestContent: F, formattedExpirationDate: $ })),
    null == eR)
        ? null
        : (0, a.jsxs)("div", {
              className: D.kL,
              children: [
                  (0, a.jsx)("div", { className: D.qz, children: eR }),
                  em &&
                      (0, a.jsx)("div", {
                          className: D.qz,
                          children: (0, a.jsx)(l.Pw, {
                              className: D.xZ,
                              isSelected: (e) => {
                                  switch (er) {
                                      case x.X0.DESKTOP:
                                          return e === R.fO.DESKTOP;
                                      case x.X0.CONSOLE:
                                          return e === R.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: M,
                              placeholder: w.intl.string(w.t.drVw4T),
                              renderOptionLabel: P,
                              renderOptionValue: L,
                              select: eg,
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
