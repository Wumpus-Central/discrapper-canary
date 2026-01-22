n.d(t, { A: () => X }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(582754),
    u = n(397927),
    c = n(313961),
    d = n(15285),
    p = n(834757),
    m = n(544028),
    f = n(461782),
    y = n(290863),
    g = n(287809),
    b = n(829219),
    A = n(216456),
    x = n(859703),
    v = n(341915),
    h = n(245853),
    E = n(55738),
    O = n(943849),
    j = n(714510),
    S = n(890687),
    N = n(579473),
    T = n(651892),
    _ = n(710969),
    C = n(639214),
    P = n(792620),
    I = n(814793),
    w = n(73473),
    M = n(270045),
    R = n(201805),
    D = n(212614),
    L = n(251637),
    U = n(847641),
    k = n(646764),
    G = n(311243),
    Q = n(545986),
    F = n(654487),
    H = n(652215),
    q = n(806931),
    V = n(985018),
    B = n(470699);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e) {
    var t, n, i, f, E;
    let { channelId: w, quest: W, previewQuest: Y, isParticipatingOverride: X } = e,
        J = (0, A.Ut)(),
        [$, Z] = l.useState(!1),
        ee = l.useCallback(() => Z(!0), []),
        et = l.useCallback(() => Z(!1), []),
        en = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        er = (0, a.bG)([m.A], () => m.A.getState().theme),
        el = (0, o.Mw)(er) ? H.NJ8.DARK : H.NJ8.LIGHT,
        ei = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        es = (0, a.bG)(
            [x.A],
            () => (0, _.t6)(x.A.quests, x.A.questToDeliverForPlacement, v.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: ea, isQuestInQuestBar: eo } = (0, a.cf)([y.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != W &&
                    null != en &&
                    ((e = y.A),
                    ei.some((t) => {
                        if (t.type !== q.lp.STREAM || t.user.id !== en.id) return !1;
                        let n = (0, p.nr)(t.stream, e);
                        return null != n && (0, C.zS)(n, W);
                    })),
                isQuestInQuestBar: (null == es ? void 0 : es.id) === (null == W ? void 0 : W.id),
            };
        }, [en, W, ei, es]),
        eu = null == (t = (0, P.pU)(W)) ? void 0 : t[0],
        ec = (0, a.bG)([d.Ay, y.A], () => {
            let e = d.Ay.getRunningGames().map((e) => e.id);
            if ((0, P.xZ)(W) && null !== eu && e.includes(eu)) return !0;
            let t = null != en ? y.A.findActivity(en.id, (e) => e.type !== H.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, P.g5)(W) && (0, C.zS)(t, W));
        }, [W, en, eu]),
        ed = !0 === X || ea || ec,
        ep = (0, a.bG)([x.A], () => null != W && x.A.isEnrolling(W.id), [W]),
        em = (0, a.bG)(
            [c.A],
            () => ((null == en ? void 0 : en.id) == null ? null : c.A.getParticipant(w, en.id)) != null,
            [w, en],
        ),
        { launchInGameActivity: ef } = (0, S.zW)(W),
        ey = (0, S.S5)(null == W ? void 0 : W.config.expiresAt),
        eg = (0, S.S5)(null == W ? void 0 : W.config.rewardsConfig.rewardsExpireAt),
        eb = l.useCallback(() => {
            (0, b.Oy)(W.id, {
                questContent: v.uF.QUEST_LIVE_STREAM,
                questContentCTA: A.Cy.ACCEPT_QUEST,
                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
            }),
                (0, I.vA)(W) && ef();
        }, [W, ef]),
        eA = l.useCallback(() => {
            J({
                questId: W.id,
                questContent: v.uF.QUEST_LIVE_STREAM,
                questContentCTA: A.Cy.TRACK_PROGRESS,
                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
            }),
                (0, Q.navigateToQuestHome)({
                    fromContent: v.uF.QUEST_LIVE_STREAM,
                    questId: W.id,
                });
        }, [W, J]),
        ex = l.useCallback(() => {
            J({
                questId: W.id,
                questContent: v.uF.QUEST_LIVE_STREAM,
                questContentCTA: A.Cy.LEARN_MORE,
                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
            }),
                (0, Q.navigateToQuestHome)({
                    fromContent: v.uF.QUEST_LIVE_STREAM,
                    questId: W.id,
                });
        }, [W, J]),
        ev = (0, R.ix)({
            quest: W,
            questContent: v.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
        }),
        eh = l.useMemo(
            () =>
                (0, O.L)({
                    quest: W,
                    location: F.rE.QUEST_CHANNEL_CALL_HEADER,
                }),
            [W],
        ),
        eE = (0, j.NA)({ quest: W }),
        eO = (0, I.vA)(W),
        ej = (0, S.LS)(W),
        eS = (null == (n = W.userStatus) ? void 0 : n.enrolledAt) != null,
        eN = (null == (i = W.userStatus) ? void 0 : i.completedAt) != null,
        eT = null != W.userStatus && (0, _.gO)(W.userStatus, v.uF.QUEST_LIVE_STREAM),
        e_ = null != W.userStatus && (0, _.gO)(W.userStatus, v.uF.QUEST_BAR),
        eC = eo && !e_,
        eP = h.t$.useConfig({ location: F.rE.QUEST_CHANNEL_CALL_HEADER }).enabled;
    eh.info({
        isQuestCallHeaderDismissed: eT,
        isQuestExpired: ej,
        isQuestBarShowing: eC,
        isCurrentUserCallParticipant: em,
    });
    let eI = null != Y && (null == (f = W.userStatus) ? void 0 : f.claimedAt) == null;
    if ((!eI && (eT || ej || eC)) || (!eI && !em)) return null;
    let ew = (0, P.Yh)(W),
        eM = (0, r.jsx)(k.A, {
            className: B.Qq,
            autoplay: $,
            quest: W,
            questContent: v.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: s()(B.iE, { [B.rH]: eS }),
        onFocus: ee,
        onMouseEnter: ee,
        onBlur: et,
        onMouseLeave: et,
        children: [
            !eS &&
                (0, r.jsxs)("div", {
                    className: B.D9,
                    children: [
                        eM,
                        (0, r.jsx)(U.A, {
                            bgOpacity: 0.32,
                            className: B.Pu,
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: B.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: B.R_,
                        children: [
                            eS && ed
                                ? eM
                                : (0, r.jsx)("img", {
                                      className: B.rC,
                                      alt: W.config.messages.gameTitle,
                                      src: (0, N.tW)(W, N.fY.GAME_TILE, el).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: B.Mg,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: B.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: ed
                                                    ? (0, T.YT)({
                                                          quest: W,
                                                          taskDetails: ew,
                                                      })
                                                    : V.intl.formatToPlainString(V.t.EQa7os, {
                                                          questName: W.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(M.C, {
                                                questContent: v.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
                                                quest: W,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (E = W.userStatus) ? void 0 : E.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.DUT,
                                                        K(z({}, e), {
                                                            className: B.rb,
                                                            "aria-label": V.intl.string(V.t.DEoVWZ),
                                                            children: (0, r.jsx)(u.jNK, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: B.Bx,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eN
                                            ? V.intl.formatToPlainString(V.t.APddvF, { expirationDate: eg })
                                            : V.intl.formatToPlainString(V.t["pX+fmn"], { expirationDate: ey }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eS &&
                        !eN &&
                        !ed &&
                        (0, r.jsx)(G.A, {
                            autoplay: $,
                            quest: W,
                            questContent: v.uF.QUEST_LIVE_STREAM,
                            taskDetails: ew,
                            location: F.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: B.uz,
                        children: [
                            !eS &&
                                (0, r.jsxs)(u.BJc, {
                                    direction: "horizontal",
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: V.intl.string(V.t.LLLLPD),
                                            onClick: ex,
                                            fullWidth: !eO || W.config.features.includes(F.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eP && !ej
                                            ? (0, r.jsx)(D.A, {
                                                  quest: W,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: v.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: v.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, r.jsx)(u.Button, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eE,
                                                  onClick: eb,
                                                  loading: ep,
                                              }),
                                    ],
                                }),
                            eS &&
                                !eN &&
                                ed &&
                                (0, r.jsx)(L.A, {
                                    color: u.LU0.colors.BACKGROUND_BRAND,
                                    quest: W,
                                }),
                            eS &&
                                !eN &&
                                !ed &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: V.intl.string(V.t.VN1Ajl),
                                    onClick: eA,
                                }),
                            eN &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: V.intl.string(V.t.cfY4PE),
                                    onClick: ev,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Y(e) {
    var t;
    let n = l.useContext(f.vG),
        i = (0, a.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []),
        { use_api_call: s } = E.Y.getConfig({ location: "QuestChannelCallHeader" }),
        o = (0, a.bG)([x.A], () => x.A.quests),
        u = (0, S.oH)(Array.from(o.values())),
        d = l.useMemo(() => (0, I.$e)(o, F.Ls), [o]),
        m = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        g = (0, a.bG)(
            [y.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let s of e) {
                              var r, l, i;
                              if (s.type === q.lp.STREAM) {
                                  let e = null != (r = (0, p.nr)(s.stream, n)) ? r : null,
                                      i = (0, C.nq)(t, e);
                                  if (null != i && (null == (l = i.userStatus) ? void 0 : l.claimedAt) == null)
                                      return i;
                              }
                              for (let r of e)
                                  if (!(0, q.PJ)(r))
                                      for (let e of n.getActivities(r.user.id)) {
                                          let n = (0, C.nq)(t, e);
                                          if (null != n && (null == (i = n.userStatus) ? void 0 : i.claimedAt) == null)
                                              return n;
                                      }
                          }
                          return null;
                      })(m, d, y.A),
            [m, d, u, e.previewQuest],
        ),
        A = l.useMemo(() => {
            var e;
            return s && null != (e = null == g ? void 0 : g.id) ? e : null;
        }, [g, s]);
    l.useEffect(() => {
        null == e.previewQuest && null != A && (0, b.yO)([A], v.uF.QUEST_LIVE_STREAM);
    }, [A, e.previewQuest]);
    let h = (0, a.bG)([x.A], () => {
            var e;
            let t = x.A.earnedQuestForPlacement.get(v.uF.QUEST_LIVE_STREAM);
            return null == t || null == A ? null : null != (e = t.quests.get(A)) ? e : null;
        }, [A]),
        [O, j] = l.useState(null);
    l.useEffect(() => {
        null != h ? j(h) : null === A && j(null);
    }, [h, A]);
    let N = null != h ? h : null !== A ? O : null,
        T = null != (t = e.previewQuest) ? t : s ? N : g;
    return null == T || i
        ? null
        : (0, r.jsx)(w.R, {
              questOrQuests: T,
              overrideVisibility: !n,
              questContent: v.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(W, K(z({}, e), { quest: T })),
          });
}
let X = function (e) {
    let t = (0, a.bG)([g.default], () => g.default.getCurrentUser());
    return (0, a.bG)(
        [c.A],
        () => ((null == t ? void 0 : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(Y, z({}, e))
        : null;
};
