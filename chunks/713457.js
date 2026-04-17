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
    p = n(364497),
    g = n(112142),
    f = n(714510),
    v = n(890687),
    _ = n(18437),
    b = n(590202),
    j = n(971649),
    A = n(651892),
    C = n(710969),
    y = n(901406),
    S = n(792620),
    E = n(814793),
    T = n(201805),
    N = n(212614),
    I = n(79545),
    k = n(545986),
    O = n(654487),
    R = n(985018),
    w = n(562296);
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
    let { quest: t, sourceQuestContent: n, onClick: i, text: s, primaryCtaButton: l } = e,
        { externalLinkCta: o, handleOpenExternalLink: d } = L({ quest: t, sourceQuestContent: n });
    return (0, a.jsxs)(r.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, a.jsx)(r.$nd, { variant: "secondary", text: o, onClick: d }),
            l ?? (0, a.jsx)(r.$nd, { variant: "primary", onClick: i ?? void 0, text: s }),
        ],
    });
}
function B(e) {
    let { quest: t, sourceQuestContent: n, formattedExpirationDate: i, primaryCtaButton: s } = e,
        { externalLinkCta: l, handleOpenExternalLink: o } = L({ quest: t, sourceQuestContent: n }),
        d = R.intl.format(R.t["14o6QY"], { expiryDate: i });
    return (0, a.jsxs)(r.e2v, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, a.jsx)(r.$nd, { variant: "secondary", text: l, onClick: o }),
            s ?? (0, a.jsx)(r.$nd, { variant: "secondary", disabled: !0, text: d, fullWidth: !0 }),
        ],
    });
}
function G(e) {
    let {
            quest: t,
            questContent: n,
            onReceiveErrorHints: j,
            contentPosition: y,
            rowIndex: G,
            sourceQuestContent: F,
        } = e,
        V = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        W = (0, T.Xf)({ useReducedMotion: V }),
        H = (0, _.Ut)(),
        K = (0, v.RR)({ quest: t }),
        z = (0, v.Vn)(t),
        $ = (0, v.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
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
        ee = (0, C.if)(t),
        et = !(0, C.Ic)(t),
        en = (0, v.In)(t),
        ea = (0, S.IO)(t),
        ei = (0, S.K$)(t),
        es = (0, S.Cr)(t),
        el = (0, v.fc)(t),
        [er, eo, ed] = (0, v.Qo)(t, el),
        ec = et && en === v.F3.ACCEPTED,
        eu = ec && er === x.X0.SELECT,
        em = ec && !eu && eo.length > 1,
        eh = g.t.useConfig({ location: O.rE.QUEST_HOME_DESKTOP }),
        ex = (0, I.Pd)(t),
        ep = (0, m.O)((e) => e.clearErrorHints),
        eg = i.useCallback(
            (e) => {
                ed(e), e === O.fO.DESKTOP && (j([]), ep(t.id));
            },
            [ed, j, ep, t.id],
        ),
        { text: ef, onClick: ev } = (0, T._c)({
            progressState: en,
            quest: t,
            questContent: n,
            questContentPosition: y,
            questContentRowIndex: G,
            inGiftInventory: !0,
            isVideoQuest: ea,
            inGameQuest: es,
            sourceQuestContent: F,
        }),
        { startingConsoleQuest: e_, startConsoleQuest: eb } = (0, v.Wj)({
            questId: t.id,
            beforeRequest: () => {
                W.startAnimation(),
                    H({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: b.Cy.DEFIBRILLATOR,
                        questContentPosition: y,
                        questContentRowIndex: G,
                        sourceQuestContent: F,
                    });
            },
            afterRequest: (e) => {
                W.stopAnimation(), j(e);
            },
        }),
        ej = t.userStatus?.claimedAt != null,
        { launchInGameActivity: eA } = (0, v.zW)(t),
        eC = (0, f.NA)({ quest: t, shortText: !0 }),
        ey = (0, v.do)({ quest: t, content: n, ctaContent: b.Cy.OPEN_GAME_LINK, sourceQuestContent: F }),
        eS = (0, A.wr)(t),
        { handleOpenExternalLink: eE } = L({ quest: t, sourceQuestContent: F }),
        eT = (0, p.W)(t, O.rE.QUEST_HOME_DESKTOP),
        eN = eT ? eE : ey,
        eI = (0, a.jsx)(r.$nd, { variant: "secondary", text: eS, onClick: eN }),
        ek = (0, a.jsx)(r.$nd, { variant: "secondary", text: eS, onClick: eN, fullWidth: !0 }),
        eO = (0, a.jsx)(r.$nd, { variant: "secondary", text: eS, onClick: ey }),
        eR = null;
    return (eh.enabled && ex === I.UA.EXPIRED_CLAIMABLE && eh.enabledQuestStates.has(ex)
        ? (eR = (0, a.jsx)("div", {
              className: w.x6,
              children: (0, a.jsx)(N.A, {
                  quest: t,
                  surface: I.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: n,
                  analyticsCtxSourceQuestContent: F,
                  analyticsCtxQuestContentPosition: y,
                  analyticsCtxQuestContentRowIndex: G,
              }),
          }))
        : ee && Z
          ? (eR = (0, a.jsx)("div", {
                className: w.x6,
                children: (0, a.jsx)(r.$nd, {
                    variant: "primary",
                    loading: q,
                    onClick: ev ?? void 0,
                    text: ef,
                    fullWidth: !0,
                }),
            }))
          : eh.enabled && (ex === I.UA.COMPLETED || ex === I.UA.CLAIMED) && eh.enabledQuestStates.has(ex)
            ? (eR = ea
                  ? (0, a.jsx)(U, {
                        quest: t,
                        sourceQuestContent: F,
                        onClick: ev,
                        text: ef,
                        primaryCtaButton: (0, a.jsx)(N.A, {
                            quest: t,
                            surface: I.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: n,
                            analyticsCtxSourceQuestContent: F,
                            analyticsCtxQuestContentPosition: y,
                            analyticsCtxQuestContentRowIndex: G,
                        }),
                    })
                  : (0, E.vA)(t)
                    ? (0, a.jsxs)(r.e2v, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, a.jsx)(r.$nd, {
                                  variant: "secondary",
                                  icon: t.config.features.includes(O.Li.CLOUD_GAMING_ACTIVITY) ? d.hpF : d._xR,
                                  text: eC,
                                  onClick: () => {
                                      eA();
                                  },
                              }),
                              (0, a.jsx)(N.A, {
                                  quest: t,
                                  surface: I.V3.QUEST_HOME_TILE_FOOTER,
                                  analyticsCtxQuestContent: n,
                                  analyticsCtxSourceQuestContent: F,
                                  analyticsCtxQuestContentPosition: y,
                                  analyticsCtxQuestContentRowIndex: G,
                              }),
                          ],
                      })
                    : (0, a.jsx)("div", {
                          className: w.x6,
                          children: (0, a.jsx)(N.A, {
                              quest: t,
                              surface: I.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: n,
                              analyticsCtxSourceQuestContent: F,
                              analyticsCtxQuestContentPosition: y,
                              analyticsCtxQuestContentRowIndex: G,
                          }),
                      }))
            : X
              ? (eR = ea
                    ? (0, a.jsx)(U, { quest: t, sourceQuestContent: F, onClick: ev, text: ef })
                    : (0, E.vA)(t)
                      ? (0, a.jsxs)(r.e2v, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, a.jsx)(r.$nd, {
                                    variant: "secondary",
                                    icon: t.config.features.includes(O.Li.CLOUD_GAMING_ACTIVITY) ? d.hpF : d._xR,
                                    text: eC,
                                    onClick: () => {
                                        eA();
                                    },
                                }),
                                (0, a.jsx)(r.$nd, { variant: "primary", onClick: ev ?? void 0, text: ef }),
                            ],
                        })
                      : (0, a.jsx)("div", {
                            className: w.x6,
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
                          className: w.x6,
                          children:
                              eh.enabled &&
                              (ex === I.UA.UNENROLLED || ex === I.UA.ENROLLED || ex === I.UA.INCOMPLETE) &&
                              eh.enabledQuestStates.has(ex)
                                  ? (0, a.jsxs)(r.e2v, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            ex === I.UA.UNENROLLED ? eO : eT ? eI : null,
                                            (0, a.jsx)(N.A, {
                                                quest: t,
                                                surface: I.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: n,
                                                analyticsCtxSourceQuestContent: F,
                                                analyticsCtxQuestContentPosition: y,
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
                                  className: w.dd,
                                  isSelected: () => !1,
                                  options: D,
                                  placeholder: R.intl.string(R.t.drVw4T),
                                  renderOptionLabel: M,
                                  renderOptionValue: P,
                                  select: eg,
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
                            : eh.enabled &&
                                (ex === I.UA.ENROLLED || ex === I.UA.INCOMPLETE) &&
                                eh.enabledQuestStates.has(ex)
                              ? eT && (0, S.t)({ quest: t }) && !(0, S.g5)(t)
                                  ? (0, a.jsx)("div", { className: w.x6, children: ek })
                                  : (0, a.jsx)("div", {
                                        className: w.x6,
                                        children: (0, a.jsxs)(r.e2v, {
                                            direction: "horizontal",
                                            fullWidth: !0,
                                            wrap: !1,
                                            children: [
                                                eT && (ea || (0, E.vA)(t)) ? eI : null,
                                                (0, a.jsx)(N.A, {
                                                    quest: t,
                                                    surface: I.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: n,
                                                    analyticsCtxSourceQuestContent: F,
                                                    analyticsCtxQuestContentPosition: y,
                                                }),
                                            ],
                                        }),
                                    })
                              : (0, S.g5)(t) && !z && er !== x.X0.DESKTOP
                                ? K
                                    ? (0, a.jsx)("div", {
                                          className: w.x6,
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
                                          className: w.x6,
                                          children: (0, a.jsxs)("div", {
                                              className: w.tn,
                                              children: [W.render(), R.intl.string(R.t.nPThNb)],
                                          }),
                                      })
                                : ea
                                  ? eT
                                      ? (0, a.jsx)("div", {
                                            className: w.x6,
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
                                            className: w.x6,
                                            children: (0, a.jsx)(r.$nd, {
                                                variant: "primary",
                                                onClick: ev ?? void 0,
                                                text: ef,
                                                fullWidth: !0,
                                            }),
                                        })
                                  : (0, E.vA)(t)
                                    ? eT
                                        ? (0, a.jsx)("div", {
                                              className: w.x6,
                                              children: (0, a.jsxs)(r.e2v, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      eI,
                                                      (0, a.jsx)(r.$nd, {
                                                          variant: "primary",
                                                          icon: (0, k.Oz)(t),
                                                          onClick: ev ?? void 0,
                                                          text: ef,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: w.x6,
                                              children: (0, a.jsx)(r.$nd, {
                                                  variant: "primary",
                                                  icon: (0, k.Oz)(t),
                                                  onClick: ev ?? void 0,
                                                  text: ef,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, a.jsx)("div", {
                                          className: w.x6,
                                          children: eT
                                              ? ek
                                              : (0, a.jsx)(r.$nd, {
                                                    variant: "secondary",
                                                    disabled: !0,
                                                    text: R.intl.string(R.t["9KoPyB"]),
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
                                          text: R.intl.string(R.t.V293qn),
                                      }),
                                      (0, a.jsx)(r.$nd, {
                                          variant: "primary",
                                          onClick: () => (0, k.m6)(t, n, F),
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
                                          eO,
                                          eh.enabled &&
                                          ex === I.UA.UNENROLLED &&
                                          eh.enabledQuestStates.has(I.UA.UNENROLLED)
                                              ? (0, a.jsx)(N.A, {
                                                    quest: t,
                                                    surface: I.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: n,
                                                    analyticsCtxSourceQuestContent: F,
                                                    analyticsCtxQuestContentPosition: y,
                                                })
                                              : (0, a.jsx)(r.$nd, {
                                                    loading: Q,
                                                    variant: "primary",
                                                    onClick: ev ?? void 0,
                                                    text: ef,
                                                    icon: (0, k.Oz)(t),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (eR =
                      eh.enabled && ex === I.UA.EXPIRED && eh.enabledQuestStates.has(ex)
                          ? (0, a.jsx)(B, {
                                quest: t,
                                sourceQuestContent: F,
                                formattedExpirationDate: $,
                                primaryCtaButton: (0, a.jsx)(N.A, {
                                    quest: t,
                                    surface: I.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: n,
                                    analyticsCtxSourceQuestContent: F,
                                    analyticsCtxQuestContentPosition: y,
                                    analyticsCtxQuestContentRowIndex: G,
                                }),
                            })
                          : (0, a.jsx)(B, { quest: t, sourceQuestContent: F, formattedExpirationDate: $ })),
    null == eR)
        ? null
        : (0, a.jsxs)("div", {
              className: w.kL,
              children: [
                  (0, a.jsx)("div", { className: w.qz, children: eR }),
                  em &&
                      (0, a.jsx)("div", {
                          className: w.qz,
                          children: (0, a.jsx)(l.Pw, {
                              className: w.xZ,
                              isSelected: (e) => {
                                  switch (er) {
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
                              select: eg,
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
