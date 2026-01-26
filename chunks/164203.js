n.d(t, {
    A: () => $,
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
    p = n(409626),
    m = n(834757),
    f = n(544028),
    y = n(461782),
    b = n(290863),
    g = n(287809),
    A = n(829219),
    x = n(859703),
    v = n(341915),
    h = n(245853),
    O = n(55738),
    E = n(943849),
    j = n(714510),
    S = n(890687),
    N = n(579473),
    T = n(18437),
    _ = n(590202),
    C = n(651892),
    P = n(710969),
    I = n(639214),
    w = n(792620),
    M = n(814793),
    R = n(73473),
    D = n(270045),
    L = n(201805),
    U = n(212614),
    k = n(251637),
    G = n(847641),
    Q = n(646764),
    F = n(311243),
    H = n(545986),
    q = n(654487),
    V = n(652215),
    B = n(806931),
    z = n(985018),
    K = n(470699);

function W(e) {
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

function Y(e, t) {
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

function X(e) {
    var t, n, i, y, O;
    let { channelId: R, quest: X, previewQuest: J, isParticipatingOverride: $ } = e,
        Z = (0, T.Ut)(),
        [ee, et] = l.useState(!1),
        en = l.useCallback(() => et(!0), []),
        er = l.useCallback(() => et(!1), []),
        el = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        ei = (0, a.bG)([f.A], () => f.A.getState().theme),
        es = (0, o.Mw)(ei) ? V.NJ8.DARK : V.NJ8.LIGHT,
        ea = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        eo = (0, a.bG)(
            [x.A],
            () => (0, P.t6)(x.A.quests, x.A.questToDeliverForPlacement, v.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: eu, isQuestInQuestBar: ec } = (0, a.cf)([b.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != X &&
                    null != el &&
                    ((e = b.A),
                    ea.some((t) => {
                        if (t.type !== B.lp.STREAM || t.user.id !== el.id) return !1;
                        let n = (0, m.nr)(t.stream, e);
                        return null != n && (0, I.zS)(n, X);
                    })),
                isQuestInQuestBar: (null == eo ? void 0 : eo.id) === (null == X ? void 0 : X.id),
            };
        }, [el, X, ea, eo]),
        ed = null == (t = (0, w.pU)(X)) ? void 0 : t[0],
        ep = (0, a.bG)([d.Ay, b.A], () => {
            let e = d.Ay.getRunningGames().map((e) => e.id);
            if ((0, w.xZ)(X) && null !== ed && e.includes(ed)) return !0;
            let t = null != el ? b.A.findActivity(el.id, (e) => e.type !== V.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, w.g5)(X) && (0, I.zS)(t, X));
        }, [X, el, ed]),
        em = !0 === $ || eu || ep,
        ef = (0, a.bG)([x.A], () => null != X && x.A.isEnrolling(X.id), [X]),
        ey = (0, a.bG)(
            [c.A],
            () => ((null == el ? void 0 : el.id) == null ? null : c.A.getParticipant(R, el.id)) != null,
            [R, el],
        ),
        { launchInGameActivity: eb } = (0, S.zW)(X),
        eg = (0, S.S5)(null == X ? void 0 : X.config.expiresAt),
        eA = (0, S.S5)(null == X ? void 0 : X.config.rewardsConfig.rewardsExpireAt),
        ex = l.useCallback(() => {
            (0, A.Oy)(X.id, {
                questContent: v.uF.QUEST_LIVE_STREAM,
                questContentCTA: _.Cy.ACCEPT_QUEST,
                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
            }),
                (0, M.vA)(X) && eb();
        }, [X, eb]),
        ev = l.useCallback(() => {
            Z({
                questId: X.id,
                questContent: v.uF.QUEST_LIVE_STREAM,
                questContentCTA: _.Cy.TRACK_PROGRESS,
                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
            }),
                (0, H.navigateToQuestHome)({
                    fromContent: v.uF.QUEST_LIVE_STREAM,
                    questId: X.id,
                });
        }, [X, Z]),
        eh = l.useCallback(() => {
            Z({
                questId: X.id,
                questContent: v.uF.QUEST_LIVE_STREAM,
                questContentCTA: _.Cy.LEARN_MORE,
                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
            }),
                (0, H.navigateToQuestHome)({
                    fromContent: v.uF.QUEST_LIVE_STREAM,
                    questId: X.id,
                });
        }, [X, Z]),
        eO = (0, L.ix)({
            quest: X,
            questContent: v.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
        }),
        eE = l.useMemo(
            () =>
                (0, E.L)({
                    quest: X,
                    location: q.rE.QUEST_CHANNEL_CALL_HEADER,
                }),
            [X],
        ),
        ej = (0, j.NA)({
            quest: X,
        }),
        eS = (0, M.vA)(X),
        eN = (0, S.LS)(X),
        eT = (null == (n = X.userStatus) ? void 0 : n.enrolledAt) != null,
        e_ = (null == (i = X.userStatus) ? void 0 : i.completedAt) != null,
        eC = null != X.userStatus && (0, P.gO)(X.userStatus, v.uF.QUEST_LIVE_STREAM),
        eP = null != X.userStatus && (0, P.gO)(X.userStatus, v.uF.QUEST_BAR),
        eI = ec && !eP,
        ew = h.t$.useConfig({
            location: q.rE.QUEST_CHANNEL_CALL_HEADER,
        }).enabled;
    eE.info({
        isQuestCallHeaderDismissed: eC,
        isQuestExpired: eN,
        isQuestBarShowing: eI,
        isCurrentUserCallParticipant: ey,
    });
    let eM = null != J && (null == (y = X.userStatus) ? void 0 : y.claimedAt) == null;
    if ((!eM && (eC || eN || eI)) || (!eM && !ey)) return null;
    let eR = (0, w.Yh)(X),
        eD = (0, r.jsx)(Q.A, {
            className: K.Qq,
            autoplay: ee,
            quest: X,
            questContent: v.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: s()(K.iE, {
            [K.rH]: eT,
        }),
        onFocus: en,
        onMouseEnter: en,
        onBlur: er,
        onMouseLeave: er,
        children: [
            !eT &&
                (0, r.jsxs)("div", {
                    className: K.D9,
                    children: [
                        eD,
                        (0, r.jsx)(G.A, {
                            bgOpacity: 0.32,
                            className: K.Pu,
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: K.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: K.R_,
                        children: [
                            eT && em
                                ? eD
                                : (0, r.jsx)("img", {
                                      className: K.rC,
                                      alt: X.config.messages.gameTitle,
                                      src: (0, N.tW)(X, N.fY.GAME_TILE, es).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: K.Mg,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: K.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: em
                                                    ? (0, C.YT)({
                                                          quest: X,
                                                          taskDetails: eR,
                                                      })
                                                    : z.intl.formatToPlainString(z.t.EQa7os, {
                                                          questName: X.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(D.C, {
                                                questContent: v.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
                                                quest: X,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (O = X.userStatus) ? void 0 : O.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.DUT,
                                                        Y(W({}, e), {
                                                            className: K.rb,
                                                            "aria-label": z.intl.string(z.t.DEoVWZ),
                                                            children: (0, r.jsx)(u.jNK, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: K.Bx,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: e_
                                            ? z.intl.formatToPlainString(z.t.APddvF, {
                                                  expirationDate: eA,
                                              })
                                            : z.intl.formatToPlainString(z.t["pX+fmn"], {
                                                  expirationDate: eg,
                                              }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eT &&
                        !e_ &&
                        !em &&
                        (0, r.jsx)(F.A, {
                            autoplay: ee,
                            quest: X,
                            questContent: v.uF.QUEST_LIVE_STREAM,
                            taskDetails: eR,
                            location: q.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: p.Ob.QuestLiveStream,
                        }),
                    (0, r.jsxs)("div", {
                        className: K.uz,
                        children: [
                            !eT &&
                                (0, r.jsxs)(u.BJc, {
                                    direction: "horizontal",
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: z.intl.string(z.t.LLLLPD),
                                            onClick: eh,
                                            fullWidth: !eS || X.config.features.includes(q.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        ew && !eN
                                            ? (0, r.jsx)(U.A, {
                                                  quest: X,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: v.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: v.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, r.jsx)(u.Button, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: ej,
                                                  onClick: ex,
                                                  loading: ef,
                                              }),
                                    ],
                                }),
                            eT &&
                                !e_ &&
                                em &&
                                (0, r.jsx)(k.A, {
                                    color: u.LU0.colors.BACKGROUND_BRAND,
                                    quest: X,
                                }),
                            eT &&
                                !e_ &&
                                !em &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: z.intl.string(z.t.VN1Ajl),
                                    onClick: ev,
                                }),
                            e_ &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: z.intl.string(z.t.cfY4PE),
                                    onClick: eO,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

function J(e) {
    var t;
    let n = l.useContext(y.vG),
        i = (0, a.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []),
        { use_api_call: s } = O.Y.getConfig({
            location: "QuestChannelCallHeader",
        }),
        o = (0, a.bG)([x.A], () => x.A.quests),
        u = (0, S.oH)(Array.from(o.values())),
        d = l.useMemo(() => (0, M.$e)(o, q.Ls), [o]),
        p = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        f = (0, a.bG)(
            [b.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let s of e) {
                              var r, l, i;
                              if (s.type === B.lp.STREAM) {
                                  let e = null != (r = (0, m.nr)(s.stream, n)) ? r : null,
                                      i = (0, I.nq)(t, e);
                                  if (null != i && (null == (l = i.userStatus) ? void 0 : l.claimedAt) == null)
                                      return i;
                              }
                              for (let r of e)
                                  if (!(0, B.PJ)(r))
                                      for (let e of n.getActivities(r.user.id)) {
                                          let n = (0, I.nq)(t, e);
                                          if (null != n && (null == (i = n.userStatus) ? void 0 : i.claimedAt) == null)
                                              return n;
                                      }
                          }
                          return null;
                      })(p, d, b.A),
            [p, d, u, e.previewQuest],
        ),
        g = l.useMemo(() => {
            var e;
            return s && null != (e = null == f ? void 0 : f.id) ? e : null;
        }, [f, s]);
    l.useEffect(() => {
        null == e.previewQuest && null != g && (0, A.yO)([g], v.uF.QUEST_LIVE_STREAM, "quest_channel_call_header");
    }, [g, e.previewQuest]);
    let h = (0, a.bG)([x.A], () => {
            var e;
            let t = x.A.earnedQuestForPlacement.get(v.uF.QUEST_LIVE_STREAM);
            return null == t || null == g ? null : null != (e = t.quests.get(g)) ? e : null;
        }, [g]),
        [E, j] = l.useState(null);
    l.useEffect(() => {
        null != h ? j(h) : null === g && j(null);
    }, [h, g]);
    let N = null != h ? h : null !== g ? E : null,
        T = null != (t = e.previewQuest) ? t : s ? N : f;
    return null == T || i
        ? null
        : (0, r.jsx)(R.R, {
              questOrQuests: T,
              overrideVisibility: !n,
              questContent: v.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
              children: () =>
                  (0, r.jsx)(
                      X,
                      Y(W({}, e), {
                          quest: T,
                      }),
                  ),
          });
}
let $ = function (e) {
    let t = (0, a.bG)([g.default], () => g.default.getCurrentUser());
    return (0, a.bG)(
        [c.A],
        () => ((null == t ? void 0 : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(J, W({}, e))
        : null;
};
