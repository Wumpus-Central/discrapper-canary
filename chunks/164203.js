n.d(t, { A: () => el });
var l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    i = n(311907),
    o = n(462887),
    u = n(534514),
    d = n(939249),
    c = n(365199),
    p = n(834730),
    m = n(331322),
    f = n(821609),
    A = n(827734),
    v = n(313961),
    h = n(15285),
    E = n(409626),
    g = n(834757),
    x = n(544028),
    S = n(461782),
    T = n(290863),
    _ = n(287809),
    b = n(829219),
    C = n(859703),
    N = n(341915),
    D = n(55738),
    j = n(112142),
    L = n(714510),
    O = n(890687),
    M = n(579473),
    R = n(18437),
    I = n(590202),
    w = n(851936),
    y = n(651892),
    U = n(710969),
    Q = n(639214),
    G = n(792620),
    F = n(814793),
    k = n(73473),
    V = n(270045),
    P = n(201805),
    q = n(212614),
    B = n(79545),
    z = n(251637),
    H = n(847641),
    W = n(646764),
    $ = n(311243),
    Z = n(545986),
    K = n(654487),
    Y = n(652215),
    J = n(806931),
    X = n(985018),
    ee = n(347562);
function et(e) {
    let { channelId: t, quest: n, previewQuest: a, isParticipatingOverride: S } = e,
        D = (0, R.Ut)(),
        [k, et] = s.useState(!1),
        en = s.useCallback(() => et(!0), []),
        el = s.useCallback(() => et(!1), []),
        es = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
        ea = (0, i.bG)([x.A], () => x.A.getState().theme),
        er = (0, o.M)(ea) ? Y.NJ8.DARK : Y.NJ8.LIGHT,
        ei = (0, i.bG)([v.A], () => v.A.getParticipants(e.channelId), [e.channelId]),
        eo = (0, i.bG)(
            [C.A],
            () => (0, U.t6)(C.A.quests, C.A.questToDeliverForPlacement, N.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: eu, isQuestInQuestBar: ed } = (0, i.cf)([T.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != n &&
                    null != es &&
                    ((e = T.A),
                    ei.some((t) => {
                        if (t.type !== J.lp.STREAM || t.user.id !== es.id) return !1;
                        let l = (0, g.nr)(t.stream, e);
                        return null != l && (0, Q.zS)(l, n);
                    })),
                isQuestInQuestBar: eo?.id === n?.id,
            };
        }, [es, n, ei, eo]),
        ec = (0, G.pU)(n)?.[0],
        ep = (0, i.bG)([h.Ay, T.A], () => {
            let e = h.Ay.getRunningGames().map((e) => e.id);
            if ((0, G.xZ)(n) && null !== ec && e.includes(ec)) return !0;
            let t = null != es ? T.A.findActivity(es.id, (e) => e.type !== Y.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, G.g5)(n) && (0, Q.zS)(t, n));
        }, [n, es, ec]),
        em = !0 === S || eu || ep,
        ef = (0, i.bG)([C.A], () => null != n && C.A.isEnrolling(n.id), [n]),
        eA = (0, i.bG)([v.A], () => (es?.id == null ? null : v.A.getParticipant(t, es.id)) != null, [t, es]),
        { launchInGameActivity: ev } = (0, O.zW)(n),
        eh = (0, O.S5)(n?.config.expiresAt),
        eE = (0, O.S5)(n?.config.rewardsConfig.rewardsExpireAt),
        eg = s.useCallback(() => {
            (0, b.Oy)(n.id, {
                questContent: N.uF.QUEST_LIVE_STREAM,
                questContentCTA: I.Cy.ACCEPT_QUEST,
                sourceQuestContent: N.uF.QUEST_LIVE_STREAM,
            }),
                (0, F.vA)(n) && ev();
        }, [n, ev]),
        ex = s.useCallback(() => {
            D({
                questId: n.id,
                questContent: N.uF.QUEST_LIVE_STREAM,
                questContentCTA: I.Cy.TRACK_PROGRESS,
                sourceQuestContent: N.uF.QUEST_LIVE_STREAM,
            }),
                (0, Z.navigateToQuestHome)({ fromContent: N.uF.QUEST_LIVE_STREAM, questId: n.id });
        }, [n, D]),
        eS = s.useCallback(() => {
            D({
                questId: n.id,
                questContent: N.uF.QUEST_LIVE_STREAM,
                questContentCTA: I.Cy.LEARN_MORE,
                sourceQuestContent: N.uF.QUEST_LIVE_STREAM,
            }),
                (0, Z.navigateToQuestHome)({ fromContent: N.uF.QUEST_LIVE_STREAM, questId: n.id });
        }, [n, D]),
        eT = (0, P.ix)({ quest: n, questContent: N.uF.QUEST_LIVE_STREAM, sourceQuestContent: N.uF.QUEST_LIVE_STREAM }),
        e_ = s.useMemo(() => (0, w.L)({ quest: n, location: K.rE.QUEST_CHANNEL_CALL_HEADER }), [n]),
        eb = (0, L.NA)({ quest: n }),
        eC = (0, F.vA)(n),
        eN = (0, O.LS)(n),
        eD = n.userStatus?.enrolledAt != null,
        ej = n.userStatus?.completedAt != null,
        eL = null != n.userStatus && (0, U.gO)(n.userStatus, N.uF.QUEST_LIVE_STREAM),
        eO = null != n.userStatus && (0, U.gO)(n.userStatus, N.uF.QUEST_BAR),
        eM = ed && !eO,
        eR = j.t.useConfig({ location: K.rE.QUEST_CHANNEL_CALL_HEADER }),
        eI = (0, B.Pd)(n);
    e_.info({
        isQuestCallHeaderDismissed: eL,
        isQuestExpired: eN,
        isQuestBarShowing: eM,
        isCurrentUserCallParticipant: eA,
    });
    let ew = null != a && n.userStatus?.claimedAt == null;
    if ((!ew && (eL || eN || eM)) || (!ew && !eA)) return null;
    let ey = (0, G.Yh)(n),
        eU = (0, l.jsx)(W.A, {
            className: ee.Qq,
            autoplay: k,
            quest: n,
            questContent: N.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: N.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: r()(ee.iE, { [ee.rH]: eD }),
        onFocus: en,
        onMouseEnter: en,
        onBlur: el,
        onMouseLeave: el,
        children: [
            !eD &&
                (0, l.jsxs)("div", {
                    className: ee.D9,
                    children: [(0, l.jsx)(H.A, { bgOpacity: 0.32, className: ee.Pu }), eU],
                }),
            (0, l.jsxs)("div", {
                className: ee.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: ee.R_,
                        children: [
                            eD && em
                                ? eU
                                : (0, l.jsx)("img", {
                                      className: ee.rC,
                                      alt: n.config.messages.gameTitle,
                                      src: (0, M.tW)(n, M.fY.GAME_TILE, er).url,
                                  }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ee.Mg,
                                        children: [
                                            (0, l.jsx)(u.D, {
                                                className: ee.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: em
                                                    ? (0, y.YT)({ quest: n, taskDetails: ey })
                                                    : X.intl.formatToPlainString(X.t.EQa7os, {
                                                          questName: n.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(V.C, {
                                                questContent: N.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: N.uF.QUEST_LIVE_STREAM,
                                                quest: n,
                                                preventIdle: !0,
                                                shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(d.D, {
                                                        ...e,
                                                        className: ee.rb,
                                                        "aria-label": X.intl.string(X.t.DEoVWZ),
                                                        children: (0, l.jsx)(c.j, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: ee.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(p.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: ej
                                            ? X.intl.formatToPlainString(X.t.APddvF, { expirationDate: eE })
                                            : X.intl.formatToPlainString(X.t["pX+fmn"], { expirationDate: eh }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eD &&
                        !ej &&
                        !em &&
                        (0, l.jsx)($.A, {
                            autoplay: k,
                            quest: n,
                            questContent: N.uF.QUEST_LIVE_STREAM,
                            taskDetails: ey,
                            location: K.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: N.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: E.Ob.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: ee.uz,
                        children: [
                            !eD &&
                                (0, l.jsxs)(m.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(f.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: X.intl.string(X.t.LLLLPD),
                                            onClick: eS,
                                            fullWidth: !eC || n.config.features.includes(K.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eR.enabled &&
                                        eI === B.UA.UNENROLLED &&
                                        eR.enabledQuestStates.has(B.UA.UNENROLLED) &&
                                        !eN
                                            ? (0, l.jsx)(q.A, {
                                                  quest: n,
                                                  surface: B.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: N.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: N.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(f.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eb,
                                                  onClick: eg,
                                                  loading: ef,
                                              }),
                                    ],
                                }),
                            eD && !ej && em && (0, l.jsx)(z.A, { color: A.A.colors.BACKGROUND_BRAND, quest: n }),
                            eD &&
                                !ej &&
                                !em &&
                                (0, l.jsx)(f.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: X.intl.string(X.t.VN1Ajl),
                                    onClick: ex,
                                }),
                            ej &&
                                (0, l.jsx)(f.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: X.intl.string(X.t.cfY4PE),
                                    onClick: eT,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function en(e) {
    let t = s.useContext(S.vG),
        n = (0, i.bG)([C.A], () => null != C.A.questEnrollmentBlockedUntil, []),
        { use_api_call: a } = D.Y.getConfig({ location: "QuestChannelCallHeader" }),
        r = (0, i.bG)([C.A], () => C.A.quests),
        o = (0, O.oH)(Array.from(r.values())),
        u = s.useMemo(() => (0, F.$e)(r, K.Ls), [r]),
        d = (0, i.bG)([v.A], () => v.A.getParticipants(e.channelId), [e.channelId]),
        c = (0, i.bG)(
            [T.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let l of e) {
                              if (l.type === J.lp.STREAM) {
                                  let e = (0, g.nr)(l.stream, n) ?? null,
                                      s = (0, Q.nq)(t, e);
                                  if (null != s && s.userStatus?.claimedAt == null) return s;
                              }
                              for (let l of e)
                                  if (!(0, J.PJ)(l))
                                      for (let e of n.getActivities(l.user.id)) {
                                          let n = (0, Q.nq)(t, e);
                                          if (null != n && n.userStatus?.claimedAt == null) return n;
                                      }
                          }
                          return null;
                      })(d, u, T.A),
            [d, u, o, e.previewQuest],
        ),
        p = s.useMemo(() => (a ? (c?.id ?? null) : null), [c, a]);
    s.useEffect(() => {
        null == e.previewQuest && null != p && (0, b.yO)([p], N.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [p, e.previewQuest]);
    let m = (0, i.bG)([C.A], () => {
            let e = C.A.earnedQuestForPlacement.get(N.uF.QUEST_LIVE_STREAM);
            if (null == e || null == p) return null;
            let t = e.earnedDecisionByQuestId.get(p);
            return (0, U.Oh)(t) && t.shouldDeliver ? C.A.getQuest(p) : null;
        }, [p]),
        [f, A] = s.useState(null);
    s.useEffect(() => {
        null != m ? A(m) : null === p && A(null);
    }, [m, p]);
    let h = m ?? (null !== p ? f : null),
        E = e.previewQuest ?? (a ? h : c);
    return null == E || n
        ? null
        : (0, l.jsx)(k.R, {
              questOrQuests: E,
              overrideVisibility: !t,
              questContent: N.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: N.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(et, { ...e, quest: E }),
          });
}
let el = function (e) {
    let t = (0, i.bG)([_.default], () => _.default.getCurrentUser());
    return (0, i.bG)([v.A], () => (t?.id == null ? null : v.A.getParticipant(e.channelId, t.id)) != null, [
        e.channelId,
        t,
    ]) || null != e.previewQuest
        ? (0, l.jsx)(en, { ...e })
        : null;
};
