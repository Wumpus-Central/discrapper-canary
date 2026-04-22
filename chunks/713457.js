s.d(t, { A: () => W });
var n = s(627968),
    i = s(64700),
    a = s(311907),
    l = s(843282),
    r = s(825484),
    o = s(821609),
    c = s(862482),
    u = s(31300),
    d = s(687966),
    x = s(414499),
    m = s(775602),
    h = s(403362),
    C = s(178540),
    j = s(859703),
    E = s(341915),
    f = s(364497),
    v = s(112142),
    N = s(714510),
    g = s(890687),
    A = s(18437),
    O = s(590202),
    p = s(971649),
    y = s(651892),
    S = s(710969),
    T = s(901406),
    I = s(792620),
    _ = s(814793),
    w = s(201805),
    Q = s(212614),
    q = s(79545),
    L = s(545986),
    b = s(654487),
    k = s(985018),
    R = s(562296);
let D = [
    {
        value: b.fO.DESKTOP,
        get label() {
            return k.intl.string(k.t["QXc01+"]);
        },
    },
    {
        value: b.fO.CONSOLE,
        get label() {
            return k.intl.string(k.t["8lAfuB"]);
        },
    },
];
function M(e) {
    let t,
        s,
        { value: i } = e;
    switch (i) {
        case b.fO.DESKTOP:
            (s = (0, n.jsx)(u.k, {})), (t = k.intl.string(k.t["QXc01+"]));
            break;
        case b.fO.CONSOLE:
            (s = (0, n.jsx)(d._, {})), (t = k.intl.string(k.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("div", { className: R.FL, children: [s, t] });
}
function z(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case b.fO.DESKTOP:
            return (0, n.jsxs)("span", { className: R.FL, children: [(0, n.jsx)(u.k, {}), k.intl.string(k.t.g6Dr44)] });
        case b.fO.CONSOLE:
            return (0, n.jsxs)("span", { className: R.FL, children: [(0, n.jsx)(d._, {}), k.intl.string(k.t.iyNbj5)] });
        default:
            return (0, h.xb)(e[0].value);
    }
}
function P(e) {
    let { quest: t, sourceQuestContent: s } = e,
        n = (0, p.go)();
    return {
        externalLinkCta: (0, y.wr)(t),
        handleOpenExternalLink: i.useCallback(() => {
            (0, T.pu)(t, {
                content: E.uF.QUEST_HOME_DESKTOP,
                ctaContent: O.Cy.OPEN_GAME_LINK,
                impressionId: n,
                sourceQuestContent: s,
            });
        }, [t, s, n]),
    };
}
function U(e) {
    let { quest: t, sourceQuestContent: s, onClick: i, text: a, primaryCtaButton: l } = e,
        { externalLinkCta: c, handleOpenExternalLink: u } = P({ quest: t, sourceQuestContent: s });
    return (0, n.jsxs)(r.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(o.$, { variant: "secondary", text: c, onClick: u }),
            l ?? (0, n.jsx)(o.$, { variant: "primary", onClick: i ?? void 0, text: a }),
        ],
    });
}
function H(e) {
    let { quest: t, sourceQuestContent: s, formattedExpirationDate: i, primaryCtaButton: a } = e,
        { externalLinkCta: l, handleOpenExternalLink: c } = P({ quest: t, sourceQuestContent: s }),
        u = k.intl.format(k.t["6p8BZx"], { expiryDate: i });
    return (0, n.jsxs)(r.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(o.$, { variant: "secondary", text: l, onClick: c }),
            a ?? (0, n.jsx)(o.$, { variant: "secondary", disabled: !0, text: u, fullWidth: !0 }),
        ],
    });
}
function W(e) {
    let {
            quest: t,
            questContent: s,
            onReceiveErrorHints: u,
            contentPosition: p,
            rowIndex: T,
            sourceQuestContent: W,
        } = e,
        F = (0, a.bG)([m.A], () => m.A.useReducedMotion),
        V = (0, w.Xf)({ useReducedMotion: F }),
        K = (0, A.Ut)(),
        $ = (0, g.RR)({ quest: t }),
        B = (0, g.Vn)(t),
        G = (0, g.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: X,
            isEnrolling: Y,
            isQuestEnrollmentBlocked: J,
        } = (0, a.cf)([j.A], () => ({
            isClaiming: j.A.isClaimingReward(t.id) || j.A.isFetchingRewardCode(t.id),
            isEnrolling: j.A.isEnrolling(t.id),
            isQuestEnrollmentBlocked: null != j.A.questEnrollmentBlockedUntil,
        })),
        Z = t.userStatus?.enrolledAt != null,
        ee = t.userStatus?.completedAt != null,
        et = ee && t.userStatus?.claimedAt == null,
        es = (0, S.if)(t),
        en = !(0, S.Ic)(t),
        ei = (0, g.In)(t),
        ea = (0, I.IO)(t),
        el = (0, I.K$)(t),
        er = (0, I.Cr)(t),
        eo = (0, g.fc)(t),
        [ec, eu, ed] = (0, g.Qo)(t, eo),
        ex = en && ei === g.F3.ACCEPTED,
        em = ex && ec === E.X0.SELECT,
        eh = ex && !em && eu.length > 1,
        eC = v.t.useConfig({ location: b.rE.QUEST_HOME_DESKTOP }),
        ej = (0, q.Pd)(t),
        eE = (0, C.O)((e) => e.clearErrorHints),
        ef = i.useCallback(
            (e) => {
                ed(e), e === b.fO.DESKTOP && (u([]), eE(t.id));
            },
            [ed, u, eE, t.id],
        ),
        { text: ev, onClick: eN } = (0, w._c)({
            progressState: ei,
            quest: t,
            questContent: s,
            questContentPosition: p,
            questContentRowIndex: T,
            inGiftInventory: !0,
            isVideoQuest: ea,
            inGameQuest: er,
            sourceQuestContent: W,
        }),
        { startingConsoleQuest: eg, startConsoleQuest: eA } = (0, g.Wj)({
            questId: t.id,
            beforeRequest: () => {
                V.startAnimation(),
                    K({
                        questId: t.id,
                        questContent: s,
                        questContentCTA: O.Cy.DEFIBRILLATOR,
                        questContentPosition: p,
                        questContentRowIndex: T,
                        sourceQuestContent: W,
                    });
            },
            afterRequest: (e) => {
                V.stopAnimation(), u(e);
            },
        }),
        eO = t.userStatus?.claimedAt != null,
        { launchInGameActivity: ep } = (0, g.zW)(t),
        ey = (0, N.NA)({ quest: t, shortText: !0 }),
        eS = (0, g.do)({ quest: t, content: s, ctaContent: O.Cy.OPEN_GAME_LINK, sourceQuestContent: W }),
        eT = (0, y.wr)(t),
        { handleOpenExternalLink: eI } = P({ quest: t, sourceQuestContent: W }),
        e_ = (0, f.W)(t, b.rE.QUEST_HOME_DESKTOP),
        ew = e_ ? eI : eS,
        eQ = (0, n.jsx)(o.$, { variant: "secondary", text: eT, onClick: ew }),
        eq = (0, n.jsx)(o.$, { variant: "secondary", text: eT, onClick: ew, fullWidth: !0 }),
        eL = (0, n.jsx)(o.$, { variant: "secondary", text: eT, onClick: eS }),
        eb = null;
    return (eC.enabled && ej === q.UA.EXPIRED_CLAIMABLE && eC.enabledQuestStates.has(ej)
        ? (eb = (0, n.jsx)("div", {
              className: R.x6,
              children: (0, n.jsx)(Q.A, {
                  quest: t,
                  surface: q.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: s,
                  analyticsCtxSourceQuestContent: W,
                  analyticsCtxQuestContentPosition: p,
                  analyticsCtxQuestContentRowIndex: T,
              }),
          }))
        : es && et
          ? (eb = (0, n.jsx)("div", {
                className: R.x6,
                children: (0, n.jsx)(o.$, {
                    variant: "primary",
                    loading: X,
                    onClick: eN ?? void 0,
                    text: ev,
                    fullWidth: !0,
                }),
            }))
          : eC.enabled && (ej === q.UA.COMPLETED || ej === q.UA.CLAIMED) && eC.enabledQuestStates.has(ej)
            ? (eb = ea
                  ? (0, n.jsx)(U, {
                        quest: t,
                        sourceQuestContent: W,
                        onClick: eN,
                        text: ev,
                        primaryCtaButton: (0, n.jsx)(Q.A, {
                            quest: t,
                            surface: q.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: s,
                            analyticsCtxSourceQuestContent: W,
                            analyticsCtxQuestContentPosition: p,
                            analyticsCtxQuestContentRowIndex: T,
                        }),
                    })
                  : (0, _.vA)(t)
                    ? (0, n.jsxs)(r.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(o.$, {
                                  variant: "secondary",
                                  icon: t.config.features.includes(b.Li.CLOUD_GAMING_ACTIVITY) ? x.h : d._,
                                  text: ey,
                                  onClick: () => {
                                      ep();
                                  },
                              }),
                              (0, n.jsx)(Q.A, {
                                  quest: t,
                                  surface: q.V3.QUEST_HOME_TILE_FOOTER,
                                  analyticsCtxQuestContent: s,
                                  analyticsCtxSourceQuestContent: W,
                                  analyticsCtxQuestContentPosition: p,
                                  analyticsCtxQuestContentRowIndex: T,
                              }),
                          ],
                      })
                    : (0, n.jsx)("div", {
                          className: R.x6,
                          children: (0, n.jsx)(Q.A, {
                              quest: t,
                              surface: q.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: s,
                              analyticsCtxSourceQuestContent: W,
                              analyticsCtxQuestContentPosition: p,
                              analyticsCtxQuestContentRowIndex: T,
                          }),
                      }))
            : ee
              ? (eb = ea
                    ? (0, n.jsx)(U, { quest: t, sourceQuestContent: W, onClick: eN, text: ev })
                    : (0, _.vA)(t)
                      ? (0, n.jsxs)(r.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, n.jsx)(o.$, {
                                    variant: "secondary",
                                    icon: t.config.features.includes(b.Li.CLOUD_GAMING_ACTIVITY) ? x.h : d._,
                                    text: ey,
                                    onClick: () => {
                                        ep();
                                    },
                                }),
                                (0, n.jsx)(o.$, { variant: "primary", onClick: eN ?? void 0, text: ev }),
                            ],
                        })
                      : (0, n.jsx)("div", {
                            className: R.x6,
                            children: (0, n.jsx)(o.$, {
                                variant: "primary",
                                onClick: eN ?? void 0,
                                text: ev,
                                fullWidth: !0,
                            }),
                        }))
              : en
                ? el
                    ? (eb = (0, n.jsx)("div", {
                          className: R.x6,
                          children:
                              eC.enabled &&
                              (ej === q.UA.UNENROLLED || ej === q.UA.ENROLLED || ej === q.UA.INCOMPLETE) &&
                              eC.enabledQuestStates.has(ej)
                                  ? (0, n.jsxs)(r.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            ej === q.UA.UNENROLLED ? eL : e_ ? eQ : null,
                                            (0, n.jsx)(Q.A, {
                                                quest: t,
                                                surface: q.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: s,
                                                analyticsCtxSourceQuestContent: W,
                                                analyticsCtxQuestContentPosition: p,
                                            }),
                                        ],
                                    })
                                  : (0, n.jsx)(r.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: (0, n.jsx)(o.$, {
                                            variant: "primary",
                                            loading: Y,
                                            onClick: eN ?? void 0,
                                            text: ev,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : Z && !eO
                      ? (eb = em
                            ? (0, n.jsx)(l.Pw, {
                                  className: R.dd,
                                  isSelected: () => !1,
                                  options: D,
                                  placeholder: k.intl.string(k.t.drVw4T),
                                  renderOptionLabel: M,
                                  renderOptionValue: z,
                                  select: ef,
                                  serialize: (e) => {
                                      switch (e) {
                                          case b.fO.DESKTOP:
                                              return k.intl.string(k.t["QXc01+"]);
                                          case b.fO.CONSOLE:
                                              return k.intl.string(k.t["8lAfuB"]);
                                          default:
                                              return (0, h.xb)(e);
                                      }
                                  },
                                  size: "sm",
                                  "data-migration-pending": !0,
                              })
                            : eC.enabled &&
                                (ej === q.UA.ENROLLED || ej === q.UA.INCOMPLETE) &&
                                eC.enabledQuestStates.has(ej)
                              ? e_ && (0, I.t)({ quest: t }) && !(0, I.g5)(t)
                                  ? (0, n.jsx)("div", { className: R.x6, children: eq })
                                  : (0, n.jsx)("div", {
                                        className: R.x6,
                                        children: (0, n.jsxs)(r.e, {
                                            direction: "horizontal",
                                            fullWidth: !0,
                                            wrap: !1,
                                            children: [
                                                e_ && (ea || (0, _.vA)(t)) ? eQ : null,
                                                (0, n.jsx)(Q.A, {
                                                    quest: t,
                                                    surface: q.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: s,
                                                    analyticsCtxSourceQuestContent: W,
                                                    analyticsCtxQuestContentPosition: p,
                                                }),
                                            ],
                                        }),
                                    })
                              : (0, I.g5)(t) && !B && ec !== E.X0.DESKTOP
                                ? $
                                    ? (0, n.jsx)("div", {
                                          className: R.x6,
                                          children: (0, n.jsx)(o.$, {
                                              variant: "secondary",
                                              onClick: eN ?? void 0,
                                              text: ev,
                                              fullWidth: !0,
                                          }),
                                      })
                                    : (0, n.jsx)(c.$n, {
                                          "data-migration-pending": !0,
                                          color: c.XD.PRIMARY,
                                          onClick: eA,
                                          disabled: eg,
                                          className: R.x6,
                                          children: (0, n.jsxs)("div", {
                                              className: R.tn,
                                              children: [V.render(), k.intl.string(k.t.nPThNb)],
                                          }),
                                      })
                                : ea
                                  ? e_
                                      ? (0, n.jsx)("div", {
                                            className: R.x6,
                                            children: (0, n.jsxs)(r.e, {
                                                direction: "horizontal",
                                                fullWidth: !0,
                                                wrap: !1,
                                                children: [
                                                    eQ,
                                                    (0, n.jsx)(o.$, {
                                                        variant: "primary",
                                                        onClick: eN ?? void 0,
                                                        text: ev,
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, n.jsx)("div", {
                                            className: R.x6,
                                            children: (0, n.jsx)(o.$, {
                                                variant: "primary",
                                                onClick: eN ?? void 0,
                                                text: ev,
                                                fullWidth: !0,
                                            }),
                                        })
                                  : (0, _.vA)(t)
                                    ? e_
                                        ? (0, n.jsx)("div", {
                                              className: R.x6,
                                              children: (0, n.jsxs)(r.e, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      eQ,
                                                      (0, n.jsx)(o.$, {
                                                          variant: "primary",
                                                          icon: (0, L.Oz)(t),
                                                          onClick: eN ?? void 0,
                                                          text: ev,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: R.x6,
                                              children: (0, n.jsx)(o.$, {
                                                  variant: "primary",
                                                  icon: (0, L.Oz)(t),
                                                  onClick: eN ?? void 0,
                                                  text: ev,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, n.jsx)("div", {
                                          className: R.x6,
                                          children: e_
                                              ? eq
                                              : (0, n.jsx)(o.$, {
                                                    variant: "secondary",
                                                    disabled: !0,
                                                    text: k.intl.string(k.t["9KoPyB"]),
                                                    fullWidth: !0,
                                                }),
                                      }))
                      : Z ||
                        (eb = J
                            ? (0, n.jsxs)(r.e, {
                                  direction: "horizontal",
                                  fullWidth: !0,
                                  wrap: !1,
                                  children: [
                                      (0, n.jsx)(o.$, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: k.intl.string(k.t.V293qn),
                                      }),
                                      (0, n.jsx)(o.$, {
                                          variant: "primary",
                                          onClick: () => (0, L.m6)(t, s, W),
                                          text: k.intl.string(k.t.vY9GgG),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)("div", {
                                  className: R.x6,
                                  children: (0, n.jsxs)(r.e, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          eL,
                                          eC.enabled &&
                                          ej === q.UA.UNENROLLED &&
                                          eC.enabledQuestStates.has(q.UA.UNENROLLED)
                                              ? (0, n.jsx)(Q.A, {
                                                    quest: t,
                                                    surface: q.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: s,
                                                    analyticsCtxSourceQuestContent: W,
                                                    analyticsCtxQuestContentPosition: p,
                                                })
                                              : (0, n.jsx)(o.$, {
                                                    loading: Y,
                                                    variant: "primary",
                                                    onClick: eN ?? void 0,
                                                    text: ev,
                                                    icon: (0, L.Oz)(t),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (eb =
                      eC.enabled && ej === q.UA.EXPIRED && eC.enabledQuestStates.has(ej)
                          ? (0, n.jsx)(H, {
                                quest: t,
                                sourceQuestContent: W,
                                formattedExpirationDate: G,
                                primaryCtaButton: (0, n.jsx)(Q.A, {
                                    quest: t,
                                    surface: q.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: s,
                                    analyticsCtxSourceQuestContent: W,
                                    analyticsCtxQuestContentPosition: p,
                                    analyticsCtxQuestContentRowIndex: T,
                                }),
                            })
                          : (0, n.jsx)(H, { quest: t, sourceQuestContent: W, formattedExpirationDate: G })),
    null == eb)
        ? null
        : (0, n.jsxs)("div", {
              className: R.kL,
              children: [
                  (0, n.jsx)("div", { className: R.qz, children: eb }),
                  eh &&
                      (0, n.jsx)("div", {
                          className: R.qz,
                          children: (0, n.jsx)(l.Pw, {
                              className: R.xZ,
                              isSelected: (e) => {
                                  switch (ec) {
                                      case E.X0.DESKTOP:
                                          return e === b.fO.DESKTOP;
                                      case E.X0.CONSOLE:
                                          return e === b.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: D,
                              placeholder: k.intl.string(k.t.drVw4T),
                              renderOptionLabel: M,
                              renderOptionValue: z,
                              select: ef,
                              serialize: (e) => {
                                  switch (e) {
                                      case b.fO.DESKTOP:
                                          return k.intl.string(k.t["QXc01+"]);
                                      case b.fO.CONSOLE:
                                          return k.intl.string(k.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
