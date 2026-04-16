n.d(t, { A: () => J });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    a = n(311907),
    o = n(582754),
    u = n(397927),
    c = n(313961),
    d = n(15285),
    A = n(409626),
    m = n(834757),
    E = n(544028),
    f = n(461782),
    _ = n(290863),
    N = n(287809),
    T = n(829219),
    p = n(859703),
    g = n(341915),
    C = n(55738),
    S = n(112142),
    h = n(714510),
    x = n(890687),
    v = n(579473),
    I = n(18437),
    R = n(590202),
    M = n(851936),
    j = n(651892),
    b = n(710969),
    y = n(639214),
    L = n(792620),
    U = n(814793),
    D = n(73473),
    O = n(270045),
    G = n(201805),
    w = n(212614),
    Q = n(79545),
    P = n(251637),
    F = n(847641),
    V = n(646764),
    k = n(311243),
    B = n(545986),
    q = n(654487),
    z = n(652215),
    H = n(806931),
    W = n(985018),
    K = n(347562);
function Y(e) {
    let { channelId: t, quest: n, previewQuest: i, isParticipatingOverride: f } = e,
        C = (0, I.Ut)(),
        [D, Y] = s.useState(!1),
        $ = s.useCallback(() => Y(!0), []),
        J = s.useCallback(() => Y(!1), []),
        X = (0, a.bG)([N.default], () => N.default.getCurrentUser()),
        Z = (0, a.bG)([E.A], () => E.A.getState().theme),
        ee = (0, o.Mw)(Z) ? z.NJ8.DARK : z.NJ8.LIGHT,
        et = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        en = (0, a.bG)(
            [p.A],
            () => (0, b.t6)(p.A.quests, p.A.questToDeliverForPlacement, g.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: el, isQuestInQuestBar: es } = (0, a.cf)([_.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != n &&
                    null != X &&
                    ((e = _.A),
                    et.some((t) => {
                        if (t.type !== H.lp.STREAM || t.user.id !== X.id) return !1;
                        let l = (0, m.nr)(t.stream, e);
                        return null != l && (0, y.zS)(l, n);
                    })),
                isQuestInQuestBar: en?.id === n?.id,
            };
        }, [X, n, et, en]),
        ei = (0, L.pU)(n)?.[0],
        er = (0, a.bG)([d.Ay, _.A], () => {
            let e = d.Ay.getRunningGames().map((e) => e.id);
            if ((0, L.xZ)(n) && null !== ei && e.includes(ei)) return !0;
            let t = null != X ? _.A.findActivity(X.id, (e) => e.type !== z.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, L.g5)(n) && (0, y.zS)(t, n));
        }, [n, X, ei]),
        ea = !0 === f || el || er,
        eo = (0, a.bG)([p.A], () => null != n && p.A.isEnrolling(n.id), [n]),
        eu = (0, a.bG)([c.A], () => (X?.id == null ? null : c.A.getParticipant(t, X.id)) != null, [t, X]),
        { launchInGameActivity: ec } = (0, x.zW)(n),
        ed = (0, x.S5)(n?.config.expiresAt),
        eA = (0, x.S5)(n?.config.rewardsConfig.rewardsExpireAt),
        em = s.useCallback(() => {
            (0, T.Oy)(n.id, {
                questContent: g.uF.QUEST_LIVE_STREAM,
                questContentCTA: R.Cy.ACCEPT_QUEST,
                sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
            }),
                (0, U.vA)(n) && ec();
        }, [n, ec]),
        eE = s.useCallback(() => {
            C({
                questId: n.id,
                questContent: g.uF.QUEST_LIVE_STREAM,
                questContentCTA: R.Cy.TRACK_PROGRESS,
                sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
            }),
                (0, B.navigateToQuestHome)({ fromContent: g.uF.QUEST_LIVE_STREAM, questId: n.id });
        }, [n, C]),
        ef = s.useCallback(() => {
            C({
                questId: n.id,
                questContent: g.uF.QUEST_LIVE_STREAM,
                questContentCTA: R.Cy.LEARN_MORE,
                sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
            }),
                (0, B.navigateToQuestHome)({ fromContent: g.uF.QUEST_LIVE_STREAM, questId: n.id });
        }, [n, C]),
        e_ = (0, G.ix)({ quest: n, questContent: g.uF.QUEST_LIVE_STREAM, sourceQuestContent: g.uF.QUEST_LIVE_STREAM }),
        eN = s.useMemo(() => (0, M.L)({ quest: n, location: q.rE.QUEST_CHANNEL_CALL_HEADER }), [n]),
        eT = (0, h.NA)({ quest: n }),
        ep = (0, U.vA)(n),
        eg = (0, x.LS)(n),
        eC = n.userStatus?.enrolledAt != null,
        eS = n.userStatus?.completedAt != null,
        eh = null != n.userStatus && (0, b.gO)(n.userStatus, g.uF.QUEST_LIVE_STREAM),
        ex = null != n.userStatus && (0, b.gO)(n.userStatus, g.uF.QUEST_BAR),
        ev = es && !ex,
        eI = S.t.useConfig({ location: q.rE.QUEST_CHANNEL_CALL_HEADER }),
        eR = (0, Q.Pd)(n);
    eN.info({
        isQuestCallHeaderDismissed: eh,
        isQuestExpired: eg,
        isQuestBarShowing: ev,
        isCurrentUserCallParticipant: eu,
    });
    let eM = null != i && n.userStatus?.claimedAt == null;
    if ((!eM && (eh || eg || ev)) || (!eM && !eu)) return null;
    let ej = (0, L.Yh)(n),
        eb = (0, l.jsx)(V.A, {
            className: K.Qq,
            autoplay: D,
            quest: n,
            questContent: g.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: r()(K.iE, { [K.rH]: eC }),
        onFocus: $,
        onMouseEnter: $,
        onBlur: J,
        onMouseLeave: J,
        children: [
            !eC &&
                (0, l.jsxs)("div", {
                    className: K.D9,
                    children: [(0, l.jsx)(F.A, { bgOpacity: 0.32, className: K.Pu }), eb],
                }),
            (0, l.jsxs)("div", {
                className: K.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: K.R_,
                        children: [
                            eC && ea
                                ? eb
                                : (0, l.jsx)("img", {
                                      className: K.rC,
                                      alt: n.config.messages.gameTitle,
                                      src: (0, v.tW)(n, v.fY.GAME_TILE, ee).url,
                                  }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: K.Mg,
                                        children: [
                                            (0, l.jsx)(u.Heading, {
                                                className: K.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: ea
                                                    ? (0, j.YT)({ quest: n, taskDetails: ej })
                                                    : W.intl.formatToPlainString(W.t.EQa7os, {
                                                          questName: n.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(O.C, {
                                                questContent: g.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                                                quest: n,
                                                preventIdle: !0,
                                                shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(u.DUT, {
                                                        ...e,
                                                        className: K.rb,
                                                        "aria-label": W.intl.string(W.t.DEoVWZ),
                                                        children: (0, l.jsx)(u.jNK, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: K.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(u.Text, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eS
                                            ? W.intl.formatToPlainString(W.t.APddvF, { expirationDate: eA })
                                            : W.intl.formatToPlainString(W.t["pX+fmn"], { expirationDate: ed }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eC &&
                        !eS &&
                        !ea &&
                        (0, l.jsx)(k.A, {
                            autoplay: D,
                            quest: n,
                            questContent: g.uF.QUEST_LIVE_STREAM,
                            taskDetails: ej,
                            location: q.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: A.Ob.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: K.uz,
                        children: [
                            !eC &&
                                (0, l.jsxs)(u.BJc, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: W.intl.string(W.t.LLLLPD),
                                            onClick: ef,
                                            fullWidth: !ep || n.config.features.includes(q.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eI.enabled &&
                                        eR === Q.UA.UNENROLLED &&
                                        eI.enabledQuestStates.has(Q.UA.UNENROLLED) &&
                                        !eg
                                            ? (0, l.jsx)(w.A, {
                                                  quest: n,
                                                  surface: Q.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: g.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(u.Button, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eT,
                                                  onClick: em,
                                                  loading: eo,
                                              }),
                                    ],
                                }),
                            eC && !eS && ea && (0, l.jsx)(P.A, { color: u.LU0.colors.BACKGROUND_BRAND, quest: n }),
                            eC &&
                                !eS &&
                                !ea &&
                                (0, l.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: W.intl.string(W.t.VN1Ajl),
                                    onClick: eE,
                                }),
                            eS &&
                                (0, l.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: W.intl.string(W.t.cfY4PE),
                                    onClick: e_,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function $(e) {
    let t = s.useContext(f.vG),
        n = (0, a.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil, []),
        { use_api_call: i } = C.Y.getConfig({ location: "QuestChannelCallHeader" }),
        r = (0, a.bG)([p.A], () => p.A.quests),
        o = (0, x.oH)(Array.from(r.values())),
        u = s.useMemo(() => (0, U.$e)(r, q.Ls), [r]),
        d = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        A = (0, a.bG)(
            [_.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let l of e) {
                              if (l.type === H.lp.STREAM) {
                                  let e = (0, m.nr)(l.stream, n) ?? null,
                                      s = (0, y.nq)(t, e);
                                  if (null != s && s.userStatus?.claimedAt == null) return s;
                              }
                              for (let l of e)
                                  if (!(0, H.PJ)(l))
                                      for (let e of n.getActivities(l.user.id)) {
                                          let n = (0, y.nq)(t, e);
                                          if (null != n && n.userStatus?.claimedAt == null) return n;
                                      }
                          }
                          return null;
                      })(d, u, _.A),
            [d, u, o, e.previewQuest],
        ),
        E = s.useMemo(() => (i ? (A?.id ?? null) : null), [A, i]);
    s.useEffect(() => {
        null == e.previewQuest && null != E && (0, T.yO)([E], g.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [E, e.previewQuest]);
    let N = (0, a.bG)([p.A], () => {
            let e = p.A.earnedQuestForPlacement.get(g.uF.QUEST_LIVE_STREAM);
            if (null == e || null == E) return null;
            let t = e.earnedDecisionByQuestId.get(E);
            return (0, b.Oh)(t) && t.shouldDeliver ? p.A.getQuest(E) : null;
        }, [E]),
        [S, h] = s.useState(null);
    s.useEffect(() => {
        null != N ? h(N) : null === E && h(null);
    }, [N, E]);
    let v = N ?? (null !== E ? S : null),
        I = e.previewQuest ?? (i ? v : A);
    return null == I || n
        ? null
        : (0, l.jsx)(D.R, {
              questOrQuests: I,
              overrideVisibility: !t,
              questContent: g.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(Y, { ...e, quest: I }),
          });
}
let J = function (e) {
    let t = (0, a.bG)([N.default], () => N.default.getCurrentUser());
    return (0, a.bG)([c.A], () => (t?.id == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [
        e.channelId,
        t,
    ]) || null != e.previewQuest
        ? (0, l.jsx)($, { ...e })
        : null;
};
