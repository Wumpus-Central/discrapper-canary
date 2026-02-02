n.d(t, {
    A: () => X,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    o = n(503698),
    i = n.n(o),
    a = n(311907),
    s = n(582754),
    u = n(397927),
    c = n(313961),
    d = n(15285),
    _ = n(409626),
    p = n(834757),
    b = n(544028),
    m = n(461782),
    f = n(290863),
    g = n(287809),
    y = n(829219),
    S = n(859703),
    x = n(341915),
    A = n(245853),
    h = n(55738),
    v = n(943849),
    O = n(714510),
    E = n(890687),
    j = n(579473),
    T = n(18437),
    C = n(590202),
    N = n(651892),
    w = n(710969),
    I = n(639214),
    P = n(792620),
    M = n(814793),
    R = n(73473),
    D = n(270045),
    L = n(201805),
    U = n(212614),
    Q = n(251637),
    G = n(847641),
    k = n(646764),
    B = n(311243),
    F = n(545986),
    H = n(654487),
    q = n(652215),
    W = n(806931),
    V = n(985018),
    z = n(470699);

function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
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
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function $(e) {
    var t, n, o, m, h;
    let { channelId: R, quest: $, previewQuest: J, isParticipatingOverride: X } = e,
        Z = (0, T.Ut)(),
        [ee, et] = r.useState(!1),
        en = r.useCallback(() => et(!0), []),
        el = r.useCallback(() => et(!1), []),
        er = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        eo = (0, a.bG)([b.A], () => b.A.getState().theme),
        ei = (0, s.Mw)(eo) ? q.NJ8.DARK : q.NJ8.LIGHT,
        ea = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        es = (0, a.bG)(
            [S.A],
            () => (0, w.t6)(S.A.quests, S.A.questToDeliverForPlacement, x.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: eu, isQuestInQuestBar: ec } = (0, a.cf)([f.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != $ &&
                    null != er &&
                    ((e = f.A),
                    ea.some((t) => {
                        if (t.type !== W.lp.STREAM || t.user.id !== er.id) return !1;
                        let n = (0, p.nr)(t.stream, e);
                        return null != n && (0, I.zS)(n, $);
                    })),
                isQuestInQuestBar: (null == es ? void 0 : es.id) === (null == $ ? void 0 : $.id),
            };
        }, [er, $, ea, es]),
        ed = null == (t = (0, P.pU)($)) ? void 0 : t[0],
        e_ = (0, a.bG)([d.Ay, f.A], () => {
            let e = d.Ay.getRunningGames().map((e) => e.id);
            if ((0, P.xZ)($) && null !== ed && e.includes(ed)) return !0;
            let t = null != er ? f.A.findActivity(er.id, (e) => e.type !== q.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, P.g5)($) && (0, I.zS)(t, $));
        }, [$, er, ed]),
        ep = !0 === X || eu || e_,
        eb = (0, a.bG)([S.A], () => null != $ && S.A.isEnrolling($.id), [$]),
        em = (0, a.bG)(
            [c.A],
            () => ((null == er ? void 0 : er.id) == null ? null : c.A.getParticipant(R, er.id)) != null,
            [R, er],
        ),
        { launchInGameActivity: ef } = (0, E.zW)($),
        eg = (0, E.S5)(null == $ ? void 0 : $.config.expiresAt),
        ey = (0, E.S5)(null == $ ? void 0 : $.config.rewardsConfig.rewardsExpireAt),
        eS = r.useCallback(() => {
            (0, y.Oy)($.id, {
                questContent: x.uF.QUEST_LIVE_STREAM,
                questContentCTA: C.Cy.ACCEPT_QUEST,
                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
            }),
                (0, M.vA)($) && ef();
        }, [$, ef]),
        ex = r.useCallback(() => {
            Z({
                questId: $.id,
                questContent: x.uF.QUEST_LIVE_STREAM,
                questContentCTA: C.Cy.TRACK_PROGRESS,
                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
            }),
                (0, F.navigateToQuestHome)({
                    fromContent: x.uF.QUEST_LIVE_STREAM,
                    questId: $.id,
                });
        }, [$, Z]),
        eA = r.useCallback(() => {
            Z({
                questId: $.id,
                questContent: x.uF.QUEST_LIVE_STREAM,
                questContentCTA: C.Cy.LEARN_MORE,
                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
            }),
                (0, F.navigateToQuestHome)({
                    fromContent: x.uF.QUEST_LIVE_STREAM,
                    questId: $.id,
                });
        }, [$, Z]),
        eh = (0, L.ix)({
            quest: $,
            questContent: x.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
        }),
        ev = r.useMemo(
            () =>
                (0, v.L)({
                    quest: $,
                    location: H.rE.QUEST_CHANNEL_CALL_HEADER,
                }),
            [$],
        ),
        eO = (0, O.NA)({
            quest: $,
        }),
        eE = (0, M.vA)($),
        ej = (0, E.LS)($),
        eT = (null == (n = $.userStatus) ? void 0 : n.enrolledAt) != null,
        eC = (null == (o = $.userStatus) ? void 0 : o.completedAt) != null,
        eN = null != $.userStatus && (0, w.gO)($.userStatus, x.uF.QUEST_LIVE_STREAM),
        ew = null != $.userStatus && (0, w.gO)($.userStatus, x.uF.QUEST_BAR),
        eI = ec && !ew,
        eP = A.t$.useConfig({
            location: H.rE.QUEST_CHANNEL_CALL_HEADER,
        }).enabled;
    ev.info({
        isQuestCallHeaderDismissed: eN,
        isQuestExpired: ej,
        isQuestBarShowing: eI,
        isCurrentUserCallParticipant: em,
    });
    let eM = null != J && (null == (m = $.userStatus) ? void 0 : m.claimedAt) == null;
    if ((!eM && (eN || ej || eI)) || (!eM && !em)) return null;
    let eR = (0, P.Yh)($),
        eD = (0, l.jsx)(k.A, {
            className: z.Qq,
            autoplay: ee,
            quest: $,
            questContent: x.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: i()(z.iE, {
            [z.rH]: eT,
        }),
        onFocus: en,
        onMouseEnter: en,
        onBlur: el,
        onMouseLeave: el,
        children: [
            !eT &&
                (0, l.jsxs)("div", {
                    className: z.D9,
                    children: [
                        (0, l.jsx)(G.A, {
                            bgOpacity: 0.32,
                            className: z.Pu,
                        }),
                        eD,
                    ],
                }),
            (0, l.jsxs)("div", {
                className: z.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: z.R_,
                        children: [
                            eT && ep
                                ? eD
                                : (0, l.jsx)("img", {
                                      className: z.rC,
                                      alt: $.config.messages.gameTitle,
                                      src: (0, j.tW)($, j.fY.GAME_TILE, ei).url,
                                  }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: z.Mg,
                                        children: [
                                            (0, l.jsx)(u.Heading, {
                                                className: z.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: ep
                                                    ? (0, N.YT)({
                                                          quest: $,
                                                          taskDetails: eR,
                                                      })
                                                    : V.intl.formatToPlainString(V.t.EQa7os, {
                                                          questName: $.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(D.C, {
                                                questContent: x.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
                                                quest: $,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (h = $.userStatus) ? void 0 : h.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        u.DUT,
                                                        Y(K({}, e), {
                                                            className: z.rb,
                                                            "aria-label": V.intl.string(V.t.DEoVWZ),
                                                            children: (0, l.jsx)(u.jNK, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: z.Bx,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(u.Text, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eC
                                            ? V.intl.formatToPlainString(V.t.APddvF, {
                                                  expirationDate: ey,
                                              })
                                            : V.intl.formatToPlainString(V.t["pX+fmn"], {
                                                  expirationDate: eg,
                                              }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eT &&
                        !eC &&
                        !ep &&
                        (0, l.jsx)(B.A, {
                            autoplay: ee,
                            quest: $,
                            questContent: x.uF.QUEST_LIVE_STREAM,
                            taskDetails: eR,
                            location: H.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: _.Ob.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: z.uz,
                        children: [
                            !eT &&
                                (0, l.jsxs)(u.BJc, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: V.intl.string(V.t.LLLLPD),
                                            onClick: eA,
                                            fullWidth: !eE || $.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eP && !ej
                                            ? (0, l.jsx)(U.A, {
                                                  quest: $,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: x.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: x.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(u.Button, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eO,
                                                  onClick: eS,
                                                  loading: eb,
                                              }),
                                    ],
                                }),
                            eT &&
                                !eC &&
                                ep &&
                                (0, l.jsx)(Q.A, {
                                    color: u.LU0.colors.BACKGROUND_BRAND,
                                    quest: $,
                                }),
                            eT &&
                                !eC &&
                                !ep &&
                                (0, l.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: V.intl.string(V.t.VN1Ajl),
                                    onClick: ex,
                                }),
                            eC &&
                                (0, l.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: V.intl.string(V.t.cfY4PE),
                                    onClick: eh,
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
    let n = r.useContext(m.vG),
        o = (0, a.bG)([S.A], () => null != S.A.questEnrollmentBlockedUntil, []),
        { use_api_call: i } = h.Y.getConfig({
            location: "QuestChannelCallHeader",
        }),
        s = (0, a.bG)([S.A], () => S.A.quests),
        u = (0, E.oH)(Array.from(s.values())),
        d = r.useMemo(() => (0, M.$e)(s, H.Ls), [s]),
        _ = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        b = (0, a.bG)(
            [f.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let i of e) {
                              var l, r, o;
                              if (i.type === W.lp.STREAM) {
                                  let e = null != (l = (0, p.nr)(i.stream, n)) ? l : null,
                                      o = (0, I.nq)(t, e);
                                  if (null != o && (null == (r = o.userStatus) ? void 0 : r.claimedAt) == null)
                                      return o;
                              }
                              for (let l of e)
                                  if (!(0, W.PJ)(l))
                                      for (let e of n.getActivities(l.user.id)) {
                                          let n = (0, I.nq)(t, e);
                                          if (null != n && (null == (o = n.userStatus) ? void 0 : o.claimedAt) == null)
                                              return n;
                                      }
                          }
                          return null;
                      })(_, d, f.A),
            [_, d, u, e.previewQuest],
        ),
        g = r.useMemo(() => {
            var e;
            return i && null != (e = null == b ? void 0 : b.id) ? e : null;
        }, [b, i]);
    r.useEffect(() => {
        null == e.previewQuest && null != g && (0, y.yO)([g], x.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [g, e.previewQuest]);
    let A = (0, a.bG)([S.A], () => {
            var e;
            let t = S.A.earnedQuestForPlacement.get(x.uF.QUEST_LIVE_STREAM);
            return null == t || null == g ? null : null != (e = t.quests.get(g)) ? e : null;
        }, [g]),
        [v, O] = r.useState(null);
    r.useEffect(() => {
        null != A ? O(A) : null === g && O(null);
    }, [A, g]);
    let j = null != A ? A : null !== g ? v : null,
        T = null != (t = e.previewQuest) ? t : i ? j : b;
    return null == T || o
        ? null
        : (0, l.jsx)(R.R, {
              questOrQuests: T,
              overrideVisibility: !n,
              questContent: x.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
              children: () =>
                  (0, l.jsx)(
                      $,
                      Y(K({}, e), {
                          quest: T,
                      }),
                  ),
          });
}
let X = function (e) {
    let t = (0, a.bG)([g.default], () => g.default.getCurrentUser());
    return (0, a.bG)(
        [c.A],
        () => ((null == t ? void 0 : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, l.jsx)(J, K({}, e))
        : null;
};
