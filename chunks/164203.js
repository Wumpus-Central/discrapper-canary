n.d(t, { A: () => J });
var l = n(627968),
    s = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(311907),
    o = n(582754),
    u = n(397927),
    c = n(313961),
    d = n(15285),
    _ = n(409626),
    m = n(834757),
    p = n(544028),
    b = n(461782),
    A = n(290863),
    f = n(287809),
    x = n(829219),
    S = n(859703),
    E = n(341915),
    T = n(55738),
    g = n(33621),
    h = n(943849),
    C = n(714510),
    N = n(890687),
    v = n(579473),
    I = n(18437),
    j = n(590202),
    M = n(651892),
    y = n(710969),
    R = n(639214),
    L = n(792620),
    U = n(814793),
    Q = n(73473),
    D = n(270045),
    G = n(201805),
    w = n(212614),
    O = n(79545),
    B = n(251637),
    P = n(847641),
    k = n(646764),
    F = n(311243),
    H = n(545986),
    q = n(654487),
    W = n(652215),
    V = n(806931),
    z = n(985018),
    Y = n(470699);
function $(e) {
    let { channelId: t, quest: n, previewQuest: a, isParticipatingOverride: b } = e,
        T = (0, I.Ut)(),
        [Q, $] = s.useState(!1),
        K = s.useCallback(() => $(!0), []),
        J = s.useCallback(() => $(!1), []),
        X = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        Z = (0, r.bG)([p.A], () => p.A.getState().theme),
        ee = (0, o.Mw)(Z) ? W.NJ8.DARK : W.NJ8.LIGHT,
        et = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        en = (0, r.bG)(
            [S.A],
            () => (0, y.t6)(S.A.quests, S.A.questToDeliverForPlacement, E.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: el, isQuestInQuestBar: es } = (0, r.cf)([A.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != n &&
                    null != X &&
                    ((e = A.A),
                    et.some((t) => {
                        if (t.type !== V.lp.STREAM || t.user.id !== X.id) return !1;
                        let l = (0, m.nr)(t.stream, e);
                        return null != l && (0, R.zS)(l, n);
                    })),
                isQuestInQuestBar: en?.id === n?.id,
            };
        }, [X, n, et, en]),
        ea = (0, L.pU)(n)?.[0],
        ei = (0, r.bG)([d.Ay, A.A], () => {
            let e = d.Ay.getRunningGames().map((e) => e.id);
            if ((0, L.xZ)(n) && null !== ea && e.includes(ea)) return !0;
            let t = null != X ? A.A.findActivity(X.id, (e) => e.type !== W.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, L.g5)(n) && (0, R.zS)(t, n));
        }, [n, X, ea]),
        er = !0 === b || el || ei,
        eo = (0, r.bG)([S.A], () => null != n && S.A.isEnrolling(n.id), [n]),
        eu = (0, r.bG)([c.A], () => (X?.id == null ? null : c.A.getParticipant(t, X.id)) != null, [t, X]),
        { launchInGameActivity: ec } = (0, N.zW)(n),
        ed = (0, N.S5)(n?.config.expiresAt),
        e_ = (0, N.S5)(n?.config.rewardsConfig.rewardsExpireAt),
        em = s.useCallback(() => {
            (0, x.Oy)(n.id, {
                questContent: E.uF.QUEST_LIVE_STREAM,
                questContentCTA: j.Cy.ACCEPT_QUEST,
                sourceQuestContent: E.uF.QUEST_LIVE_STREAM,
            }),
                (0, U.vA)(n) && ec();
        }, [n, ec]),
        ep = s.useCallback(() => {
            T({
                questId: n.id,
                questContent: E.uF.QUEST_LIVE_STREAM,
                questContentCTA: j.Cy.TRACK_PROGRESS,
                sourceQuestContent: E.uF.QUEST_LIVE_STREAM,
            }),
                (0, H.navigateToQuestHome)({ fromContent: E.uF.QUEST_LIVE_STREAM, questId: n.id });
        }, [n, T]),
        eb = s.useCallback(() => {
            T({
                questId: n.id,
                questContent: E.uF.QUEST_LIVE_STREAM,
                questContentCTA: j.Cy.LEARN_MORE,
                sourceQuestContent: E.uF.QUEST_LIVE_STREAM,
            }),
                (0, H.navigateToQuestHome)({ fromContent: E.uF.QUEST_LIVE_STREAM, questId: n.id });
        }, [n, T]),
        eA = (0, G.ix)({ quest: n, questContent: E.uF.QUEST_LIVE_STREAM, sourceQuestContent: E.uF.QUEST_LIVE_STREAM }),
        ef = s.useMemo(() => (0, h.L)({ quest: n, location: q.rE.QUEST_CHANNEL_CALL_HEADER }), [n]),
        ex = (0, C.NA)({ quest: n }),
        eS = (0, U.vA)(n),
        eE = (0, N.LS)(n),
        eT = n.userStatus?.enrolledAt != null,
        eg = n.userStatus?.completedAt != null,
        eh = null != n.userStatus && (0, y.gO)(n.userStatus, E.uF.QUEST_LIVE_STREAM),
        eC = null != n.userStatus && (0, y.gO)(n.userStatus, E.uF.QUEST_BAR),
        eN = es && !eC,
        ev = g.t.useConfig({ location: q.rE.QUEST_CHANNEL_CALL_HEADER }),
        eI = (0, O.P)(n);
    ef.info({
        isQuestCallHeaderDismissed: eh,
        isQuestExpired: eE,
        isQuestBarShowing: eN,
        isCurrentUserCallParticipant: eu,
    });
    let ej = null != a && n.userStatus?.claimedAt == null;
    if ((!ej && (eh || eE || eN)) || (!ej && !eu)) return null;
    let eM = (0, L.Yh)(n),
        ey = (0, l.jsx)(k.A, {
            className: Y.Qq,
            autoplay: Q,
            quest: n,
            questContent: E.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: E.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: i()(Y.iE, { [Y.rH]: eT }),
        onFocus: K,
        onMouseEnter: K,
        onBlur: J,
        onMouseLeave: J,
        children: [
            !eT &&
                (0, l.jsxs)("div", {
                    className: Y.D9,
                    children: [(0, l.jsx)(P.A, { bgOpacity: 0.32, className: Y.Pu }), ey],
                }),
            (0, l.jsxs)("div", {
                className: Y.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: Y.R_,
                        children: [
                            eT && er
                                ? ey
                                : (0, l.jsx)("img", {
                                      className: Y.rC,
                                      alt: n.config.messages.gameTitle,
                                      src: (0, v.tW)(n, v.fY.GAME_TILE, ee).url,
                                  }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: Y.Mg,
                                        children: [
                                            (0, l.jsx)(u.Heading, {
                                                className: Y.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: er
                                                    ? (0, M.YT)({ quest: n, taskDetails: eM })
                                                    : z.intl.formatToPlainString(z.t.EQa7os, {
                                                          questName: n.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(D.C, {
                                                questContent: E.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: E.uF.QUEST_LIVE_STREAM,
                                                quest: n,
                                                preventIdle: !0,
                                                shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(u.DUT, {
                                                        ...e,
                                                        className: Y.rb,
                                                        "aria-label": z.intl.string(z.t.DEoVWZ),
                                                        children: (0, l.jsx)(u.jNK, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: Y.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(u.Text, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eg
                                            ? z.intl.formatToPlainString(z.t.APddvF, { expirationDate: e_ })
                                            : z.intl.formatToPlainString(z.t["pX+fmn"], { expirationDate: ed }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eT &&
                        !eg &&
                        !er &&
                        (0, l.jsx)(F.A, {
                            autoplay: Q,
                            quest: n,
                            questContent: E.uF.QUEST_LIVE_STREAM,
                            taskDetails: eM,
                            location: q.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: E.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: _.Ob.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: Y.uz,
                        children: [
                            !eT &&
                                (0, l.jsxs)(u.BJc, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: z.intl.string(z.t.LLLLPD),
                                            onClick: eb,
                                            fullWidth: !eS || n.config.features.includes(q.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        ev.enabled &&
                                        eI === O.U.UNENROLLED &&
                                        ev.enabledQuestStates.has(O.U.UNENROLLED) &&
                                        !eE
                                            ? (0, l.jsx)(w.A, {
                                                  quest: n,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: E.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: E.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(u.Button, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: ex,
                                                  onClick: em,
                                                  loading: eo,
                                              }),
                                    ],
                                }),
                            eT && !eg && er && (0, l.jsx)(B.A, { color: u.LU0.colors.BACKGROUND_BRAND, quest: n }),
                            eT &&
                                !eg &&
                                !er &&
                                (0, l.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: z.intl.string(z.t.VN1Ajl),
                                    onClick: ep,
                                }),
                            eg &&
                                (0, l.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: z.intl.string(z.t.cfY4PE),
                                    onClick: eA,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
    let t = s.useContext(b.vG),
        n = (0, r.bG)([S.A], () => null != S.A.questEnrollmentBlockedUntil, []),
        { use_api_call: a } = T.Y.getConfig({ location: "QuestChannelCallHeader" }),
        i = (0, r.bG)([S.A], () => S.A.quests),
        o = (0, N.oH)(Array.from(i.values())),
        u = s.useMemo(() => (0, U.$e)(i, q.Ls), [i]),
        d = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        _ = (0, r.bG)(
            [A.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let l of e) {
                              if (l.type === V.lp.STREAM) {
                                  let e = (0, m.nr)(l.stream, n) ?? null,
                                      s = (0, R.nq)(t, e);
                                  if (null != s && s.userStatus?.claimedAt == null) return s;
                              }
                              for (let l of e)
                                  if (!(0, V.PJ)(l))
                                      for (let e of n.getActivities(l.user.id)) {
                                          let n = (0, R.nq)(t, e);
                                          if (null != n && n.userStatus?.claimedAt == null) return n;
                                      }
                          }
                          return null;
                      })(d, u, A.A),
            [d, u, o, e.previewQuest],
        ),
        p = s.useMemo(() => (a ? (_?.id ?? null) : null), [_, a]);
    s.useEffect(() => {
        null == e.previewQuest && null != p && (0, x.yO)([p], E.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [p, e.previewQuest]);
    let f = (0, r.bG)([S.A], () => {
            let e = S.A.earnedQuestForPlacement.get(E.uF.QUEST_LIVE_STREAM);
            return null == e || null == p ? null : (e.quests.get(p) ?? null);
        }, [p]),
        [g, h] = s.useState(null);
    s.useEffect(() => {
        null != f ? h(f) : null === p && h(null);
    }, [f, p]);
    let C = f ?? (null !== p ? g : null),
        v = e.previewQuest ?? (a ? C : _);
    return null == v || n
        ? null
        : (0, l.jsx)(Q.R, {
              questOrQuests: v,
              overrideVisibility: !t,
              questContent: E.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: E.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)($, { ...e, quest: v }),
          });
}
let J = function (e) {
    let t = (0, r.bG)([f.default], () => f.default.getCurrentUser());
    return (0, r.bG)([c.A], () => (t?.id == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [
        e.channelId,
        t,
    ]) || null != e.previewQuest
        ? (0, l.jsx)(K, { ...e })
        : null;
};
