n.d(t, {
    A: () => J,
}),
    n(896048);
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
    b = n(287809),
    g = n(829219),
    A = n(859703),
    x = n(341915),
    v = n(245853),
    h = n(55738),
    O = n(943849),
    E = n(714510),
    j = n(890687),
    S = n(579473),
    N = n(18437),
    T = n(590202),
    _ = n(651892),
    C = n(710969),
    P = n(639214),
    I = n(792620),
    w = n(814793),
    M = n(73473),
    R = n(270045),
    D = n(201805),
    L = n(212614),
    U = n(251637),
    k = n(847641),
    G = n(646764),
    Q = n(311243),
    F = n(545986),
    H = n(654487),
    q = n(652215),
    V = n(806931),
    B = n(985018),
    z = n(470699);

function K(e) {
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

function W(e, t) {
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

function Y(e) {
    var t, n, i, f, h;
    let { channelId: M, quest: Y, previewQuest: X, isParticipatingOverride: J } = e,
        $ = (0, N.Ut)(),
        [Z, ee] = l.useState(!1),
        et = l.useCallback(() => ee(!0), []),
        en = l.useCallback(() => ee(!1), []),
        er = (0, a.bG)([b.default], () => b.default.getCurrentUser()),
        el = (0, a.bG)([m.A], () => m.A.getState().theme),
        ei = (0, o.Mw)(el) ? q.NJ8.DARK : q.NJ8.LIGHT,
        es = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        ea = (0, a.bG)(
            [A.A],
            () => (0, C.t6)(A.A.quests, A.A.questToDeliverForPlacement, x.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: eo, isQuestInQuestBar: eu } = (0, a.cf)([y.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != Y &&
                    null != er &&
                    ((e = y.A),
                    es.some((t) => {
                        if (t.type !== V.lp.STREAM || t.user.id !== er.id) return !1;
                        let n = (0, p.nr)(t.stream, e);
                        return null != n && (0, P.zS)(n, Y);
                    })),
                isQuestInQuestBar: (null == ea ? void 0 : ea.id) === (null == Y ? void 0 : Y.id),
            };
        }, [er, Y, es, ea]),
        ec = null == (t = (0, I.pU)(Y)) ? void 0 : t[0],
        ed = (0, a.bG)([d.Ay, y.A], () => {
            let e = d.Ay.getRunningGames().map((e) => e.id);
            if ((0, I.xZ)(Y) && null !== ec && e.includes(ec)) return !0;
            let t = null != er ? y.A.findActivity(er.id, (e) => e.type !== q.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, I.g5)(Y) && (0, P.zS)(t, Y));
        }, [Y, er, ec]),
        ep = !0 === J || eo || ed,
        em = (0, a.bG)([A.A], () => null != Y && A.A.isEnrolling(Y.id), [Y]),
        ef = (0, a.bG)(
            [c.A],
            () => ((null == er ? void 0 : er.id) == null ? null : c.A.getParticipant(M, er.id)) != null,
            [M, er],
        ),
        { launchInGameActivity: ey } = (0, j.zW)(Y),
        eb = (0, j.S5)(null == Y ? void 0 : Y.config.expiresAt),
        eg = (0, j.S5)(null == Y ? void 0 : Y.config.rewardsConfig.rewardsExpireAt),
        eA = l.useCallback(() => {
            (0, g.Oy)(Y.id, {
                questContent: x.uF.QUEST_LIVE_STREAM,
                questContentCTA: T.Cy.ACCEPT_QUEST,
                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
            }),
                (0, w.vA)(Y) && ey();
        }, [Y, ey]),
        ex = l.useCallback(() => {
            $({
                questId: Y.id,
                questContent: x.uF.QUEST_LIVE_STREAM,
                questContentCTA: T.Cy.TRACK_PROGRESS,
                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
            }),
                (0, F.navigateToQuestHome)({
                    fromContent: x.uF.QUEST_LIVE_STREAM,
                    questId: Y.id,
                });
        }, [Y, $]),
        ev = l.useCallback(() => {
            $({
                questId: Y.id,
                questContent: x.uF.QUEST_LIVE_STREAM,
                questContentCTA: T.Cy.LEARN_MORE,
                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
            }),
                (0, F.navigateToQuestHome)({
                    fromContent: x.uF.QUEST_LIVE_STREAM,
                    questId: Y.id,
                });
        }, [Y, $]),
        eh = (0, D.ix)({
            quest: Y,
            questContent: x.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
        }),
        eO = l.useMemo(
            () =>
                (0, O.L)({
                    quest: Y,
                    location: H.rE.QUEST_CHANNEL_CALL_HEADER,
                }),
            [Y],
        ),
        eE = (0, E.NA)({
            quest: Y,
        }),
        ej = (0, w.vA)(Y),
        eS = (0, j.LS)(Y),
        eN = (null == (n = Y.userStatus) ? void 0 : n.enrolledAt) != null,
        eT = (null == (i = Y.userStatus) ? void 0 : i.completedAt) != null,
        e_ = null != Y.userStatus && (0, C.gO)(Y.userStatus, x.uF.QUEST_LIVE_STREAM),
        eC = null != Y.userStatus && (0, C.gO)(Y.userStatus, x.uF.QUEST_BAR),
        eP = eu && !eC,
        eI = v.t$.useConfig({
            location: H.rE.QUEST_CHANNEL_CALL_HEADER,
        }).enabled;
    eO.info({
        isQuestCallHeaderDismissed: e_,
        isQuestExpired: eS,
        isQuestBarShowing: eP,
        isCurrentUserCallParticipant: ef,
    });
    let ew = null != X && (null == (f = Y.userStatus) ? void 0 : f.claimedAt) == null;
    if ((!ew && (e_ || eS || eP)) || (!ew && !ef)) return null;
    let eM = (0, I.Yh)(Y),
        eR = (0, r.jsx)(G.A, {
            className: z.Qq,
            autoplay: Z,
            quest: Y,
            questContent: x.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: s()(z.iE, {
            [z.rH]: eN,
        }),
        onFocus: et,
        onMouseEnter: et,
        onBlur: en,
        onMouseLeave: en,
        children: [
            !eN &&
                (0, r.jsxs)("div", {
                    className: z.D9,
                    children: [
                        eR,
                        (0, r.jsx)(k.A, {
                            bgOpacity: 0.32,
                            className: z.Pu,
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: z.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: z.R_,
                        children: [
                            eN && ep
                                ? eR
                                : (0, r.jsx)("img", {
                                      className: z.rC,
                                      alt: Y.config.messages.gameTitle,
                                      src: (0, S.tW)(Y, S.fY.GAME_TILE, ei).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: z.Mg,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: z.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: ep
                                                    ? (0, _.YT)({
                                                          quest: Y,
                                                          taskDetails: eM,
                                                      })
                                                    : B.intl.formatToPlainString(B.t.EQa7os, {
                                                          questName: Y.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(R.C, {
                                                questContent: x.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
                                                quest: Y,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (h = Y.userStatus) ? void 0 : h.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.DUT,
                                                        W(K({}, e), {
                                                            className: z.rb,
                                                            "aria-label": B.intl.string(B.t.DEoVWZ),
                                                            children: (0, r.jsx)(u.jNK, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: z.Bx,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eT
                                            ? B.intl.formatToPlainString(B.t.APddvF, {
                                                  expirationDate: eg,
                                              })
                                            : B.intl.formatToPlainString(B.t["pX+fmn"], {
                                                  expirationDate: eb,
                                              }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eN &&
                        !eT &&
                        !ep &&
                        (0, r.jsx)(Q.A, {
                            autoplay: Z,
                            quest: Y,
                            questContent: x.uF.QUEST_LIVE_STREAM,
                            taskDetails: eM,
                            location: H.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: z.uz,
                        children: [
                            !eN &&
                                (0, r.jsxs)(u.BJc, {
                                    direction: "horizontal",
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: B.intl.string(B.t.LLLLPD),
                                            onClick: ev,
                                            fullWidth: !ej || Y.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eI && !eS
                                            ? (0, r.jsx)(L.A, {
                                                  quest: Y,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: x.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: x.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, r.jsx)(u.Button, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eE,
                                                  onClick: eA,
                                                  loading: em,
                                              }),
                                    ],
                                }),
                            eN &&
                                !eT &&
                                ep &&
                                (0, r.jsx)(U.A, {
                                    color: u.LU0.colors.BACKGROUND_BRAND,
                                    quest: Y,
                                }),
                            eN &&
                                !eT &&
                                !ep &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: B.intl.string(B.t.VN1Ajl),
                                    onClick: ex,
                                }),
                            eT &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: B.intl.string(B.t.cfY4PE),
                                    onClick: eh,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

function X(e) {
    var t;
    let n = l.useContext(f.vG),
        i = (0, a.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []),
        { use_api_call: s } = h.Y.getConfig({
            location: "QuestChannelCallHeader",
        }),
        o = (0, a.bG)([A.A], () => A.A.quests),
        u = (0, j.oH)(Array.from(o.values())),
        d = l.useMemo(() => (0, w.$e)(o, H.Ls), [o]),
        m = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        b = (0, a.bG)(
            [y.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let s of e) {
                              var r, l, i;
                              if (s.type === V.lp.STREAM) {
                                  let e = null != (r = (0, p.nr)(s.stream, n)) ? r : null,
                                      i = (0, P.nq)(t, e);
                                  if (null != i && (null == (l = i.userStatus) ? void 0 : l.claimedAt) == null)
                                      return i;
                              }
                              for (let r of e)
                                  if (!(0, V.PJ)(r))
                                      for (let e of n.getActivities(r.user.id)) {
                                          let n = (0, P.nq)(t, e);
                                          if (null != n && (null == (i = n.userStatus) ? void 0 : i.claimedAt) == null)
                                              return n;
                                      }
                          }
                          return null;
                      })(m, d, y.A),
            [m, d, u, e.previewQuest],
        ),
        v = l.useMemo(() => {
            var e;
            return s && null != (e = null == b ? void 0 : b.id) ? e : null;
        }, [b, s]);
    l.useEffect(() => {
        null == e.previewQuest && null != v && (0, g.yO)([v], x.uF.QUEST_LIVE_STREAM);
    }, [v, e.previewQuest]);
    let O = (0, a.bG)([A.A], () => {
            var e;
            let t = A.A.earnedQuestForPlacement.get(x.uF.QUEST_LIVE_STREAM);
            return null == t || null == v ? null : null != (e = t.quests.get(v)) ? e : null;
        }, [v]),
        [E, S] = l.useState(null);
    l.useEffect(() => {
        null != O ? S(O) : null === v && S(null);
    }, [O, v]);
    let N = null != O ? O : null !== v ? E : null,
        T = null != (t = e.previewQuest) ? t : s ? N : b;
    return null == T || i
        ? null
        : (0, r.jsx)(M.R, {
              questOrQuests: T,
              overrideVisibility: !n,
              questContent: x.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
              children: () =>
                  (0, r.jsx)(
                      Y,
                      W(K({}, e), {
                          quest: T,
                      }),
                  ),
          });
}
let J = function (e) {
    let t = (0, a.bG)([b.default], () => b.default.getCurrentUser());
    return (0, a.bG)(
        [c.A],
        () => ((null == t ? void 0 : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(X, K({}, e))
        : null;
};
