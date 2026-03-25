n.d(t, { A: () => J });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(311907),
    u = n(582754),
    o = n(397927),
    c = n(313961),
    d = n(15285),
    m = n(409626),
    A = n(834757),
    E = n(544028),
    p = n(461782),
    f = n(290863),
    S = n(287809),
    h = n(829219),
    T = n(859703),
    x = n(341915),
    _ = n(55738),
    N = n(33621),
    g = n(714510),
    C = n(890687),
    v = n(579473),
    I = n(18437),
    M = n(590202),
    b = n(851936),
    j = n(651892),
    R = n(710969),
    y = n(639214),
    L = n(792620),
    U = n(814793),
    D = n(73473),
    O = n(270045),
    w = n(201805),
    G = n(212614),
    Q = n(79545),
    P = n(251637),
    F = n(847641),
    k = n(646764),
    V = n(311243),
    q = n(545986),
    B = n(654487),
    H = n(652215),
    z = n(806931),
    W = n(985018),
    K = n(470699);
function Y(e) {
    let { channelId: t, quest: n, previewQuest: i, isParticipatingOverride: p } = e,
        _ = (0, I.Ut)(),
        [D, Y] = s.useState(!1),
        $ = s.useCallback(() => Y(!0), []),
        J = s.useCallback(() => Y(!1), []),
        Z = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        X = (0, r.bG)([E.A], () => E.A.getState().theme),
        ee = (0, u.Mw)(X) ? H.NJ8.DARK : H.NJ8.LIGHT,
        et = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        en = (0, r.bG)(
            [T.A],
            () => (0, R.t6)(T.A.quests, T.A.questToDeliverForPlacement, x.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: el, isQuestInQuestBar: es } = (0, r.cf)([f.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != n &&
                    null != Z &&
                    ((e = f.A),
                    et.some((t) => {
                        if (t.type !== z.lp.STREAM || t.user.id !== Z.id) return !1;
                        let l = (0, A.nr)(t.stream, e);
                        return null != l && (0, y.zS)(l, n);
                    })),
                isQuestInQuestBar: en?.id === n?.id,
            };
        }, [Z, n, et, en]),
        ei = (0, L.pU)(n)?.[0],
        ea = (0, r.bG)([d.Ay, f.A], () => {
            let e = d.Ay.getRunningGames().map((e) => e.id);
            if ((0, L.xZ)(n) && null !== ei && e.includes(ei)) return !0;
            let t = null != Z ? f.A.findActivity(Z.id, (e) => e.type !== H.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, L.g5)(n) && (0, y.zS)(t, n));
        }, [n, Z, ei]),
        er = !0 === p || el || ea,
        eu = (0, r.bG)([T.A], () => null != n && T.A.isEnrolling(n.id), [n]),
        eo = (0, r.bG)([c.A], () => (Z?.id == null ? null : c.A.getParticipant(t, Z.id)) != null, [t, Z]),
        { launchInGameActivity: ec } = (0, C.zW)(n),
        ed = (0, C.S5)(n?.config.expiresAt),
        em = (0, C.S5)(n?.config.rewardsConfig.rewardsExpireAt),
        eA = s.useCallback(() => {
            (0, h.Oy)(n.id, {
                questContent: x.uF.QUEST_LIVE_STREAM,
                questContentCTA: M.Cy.ACCEPT_QUEST,
                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
            }),
                (0, U.vA)(n) && ec();
        }, [n, ec]),
        eE = s.useCallback(() => {
            _({
                questId: n.id,
                questContent: x.uF.QUEST_LIVE_STREAM,
                questContentCTA: M.Cy.TRACK_PROGRESS,
                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
            }),
                (0, q.navigateToQuestHome)({ fromContent: x.uF.QUEST_LIVE_STREAM, questId: n.id });
        }, [n, _]),
        ep = s.useCallback(() => {
            _({
                questId: n.id,
                questContent: x.uF.QUEST_LIVE_STREAM,
                questContentCTA: M.Cy.LEARN_MORE,
                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
            }),
                (0, q.navigateToQuestHome)({ fromContent: x.uF.QUEST_LIVE_STREAM, questId: n.id });
        }, [n, _]),
        ef = (0, w.ix)({ quest: n, questContent: x.uF.QUEST_LIVE_STREAM, sourceQuestContent: x.uF.QUEST_LIVE_STREAM }),
        eS = s.useMemo(() => (0, b.L)({ quest: n, location: B.rE.QUEST_CHANNEL_CALL_HEADER }), [n]),
        eh = (0, g.NA)({ quest: n }),
        eT = (0, U.vA)(n),
        ex = (0, C.LS)(n),
        e_ = n.userStatus?.enrolledAt != null,
        eN = n.userStatus?.completedAt != null,
        eg = null != n.userStatus && (0, R.gO)(n.userStatus, x.uF.QUEST_LIVE_STREAM),
        eC = null != n.userStatus && (0, R.gO)(n.userStatus, x.uF.QUEST_BAR),
        ev = es && !eC,
        eI = N.t.useConfig({ location: B.rE.QUEST_CHANNEL_CALL_HEADER }),
        eM = (0, Q.Pd)(n);
    eS.info({
        isQuestCallHeaderDismissed: eg,
        isQuestExpired: ex,
        isQuestBarShowing: ev,
        isCurrentUserCallParticipant: eo,
    });
    let eb = null != i && n.userStatus?.claimedAt == null;
    if ((!eb && (eg || ex || ev)) || (!eb && !eo)) return null;
    let ej = (0, L.Yh)(n),
        eR = (0, l.jsx)(k.A, {
            className: K.Qq,
            autoplay: D,
            quest: n,
            questContent: x.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: a()(K.iE, { [K.rH]: e_ }),
        onFocus: $,
        onMouseEnter: $,
        onBlur: J,
        onMouseLeave: J,
        children: [
            !e_ &&
                (0, l.jsxs)("div", {
                    className: K.D9,
                    children: [(0, l.jsx)(F.A, { bgOpacity: 0.32, className: K.Pu }), eR],
                }),
            (0, l.jsxs)("div", {
                className: K.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: K.R_,
                        children: [
                            e_ && er
                                ? eR
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
                                            (0, l.jsx)(o.Heading, {
                                                className: K.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: er
                                                    ? (0, j.YT)({ quest: n, taskDetails: ej })
                                                    : W.intl.formatToPlainString(W.t.EQa7os, {
                                                          questName: n.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(O.C, {
                                                questContent: x.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
                                                quest: n,
                                                preventIdle: !0,
                                                shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(o.DUT, {
                                                        ...e,
                                                        className: K.rb,
                                                        "aria-label": W.intl.string(W.t.DEoVWZ),
                                                        children: (0, l.jsx)(o.jNK, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: K.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(o.Text, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eN
                                            ? W.intl.formatToPlainString(W.t.APddvF, { expirationDate: em })
                                            : W.intl.formatToPlainString(W.t["pX+fmn"], { expirationDate: ed }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e_ &&
                        !eN &&
                        !er &&
                        (0, l.jsx)(V.A, {
                            autoplay: D,
                            quest: n,
                            questContent: x.uF.QUEST_LIVE_STREAM,
                            taskDetails: ej,
                            location: B.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: m.Ob.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: K.uz,
                        children: [
                            !e_ &&
                                (0, l.jsxs)(o.BJc, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(o.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: W.intl.string(W.t.LLLLPD),
                                            onClick: ep,
                                            fullWidth: !eT || n.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eI.enabled &&
                                        eM === Q.UA.UNENROLLED &&
                                        eI.enabledQuestStates.has(Q.UA.UNENROLLED) &&
                                        !ex
                                            ? (0, l.jsx)(G.A, {
                                                  quest: n,
                                                  surface: Q.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: x.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: x.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(o.Button, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eh,
                                                  onClick: eA,
                                                  loading: eu,
                                              }),
                                    ],
                                }),
                            e_ && !eN && er && (0, l.jsx)(P.A, { color: o.LU0.colors.BACKGROUND_BRAND, quest: n }),
                            e_ &&
                                !eN &&
                                !er &&
                                (0, l.jsx)(o.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: W.intl.string(W.t.VN1Ajl),
                                    onClick: eE,
                                }),
                            eN &&
                                (0, l.jsx)(o.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: W.intl.string(W.t.cfY4PE),
                                    onClick: ef,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function $(e) {
    let t = s.useContext(p.vG),
        n = (0, r.bG)([T.A], () => null != T.A.questEnrollmentBlockedUntil, []),
        { use_api_call: i } = _.Y.getConfig({ location: "QuestChannelCallHeader" }),
        a = (0, r.bG)([T.A], () => T.A.quests),
        u = (0, C.oH)(Array.from(a.values())),
        o = s.useMemo(() => (0, U.$e)(a, B.Ls), [a]),
        d = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        m = (0, r.bG)(
            [f.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let l of e) {
                              if (l.type === z.lp.STREAM) {
                                  let e = (0, A.nr)(l.stream, n) ?? null,
                                      s = (0, y.nq)(t, e);
                                  if (null != s && s.userStatus?.claimedAt == null) return s;
                              }
                              for (let l of e)
                                  if (!(0, z.PJ)(l))
                                      for (let e of n.getActivities(l.user.id)) {
                                          let n = (0, y.nq)(t, e);
                                          if (null != n && n.userStatus?.claimedAt == null) return n;
                                      }
                          }
                          return null;
                      })(d, o, f.A),
            [d, o, u, e.previewQuest],
        ),
        E = s.useMemo(() => (i ? (m?.id ?? null) : null), [m, i]);
    s.useEffect(() => {
        null == e.previewQuest && null != E && (0, h.yO)([E], x.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [E, e.previewQuest]);
    let S = (0, r.bG)([T.A], () => {
            let e = T.A.earnedQuestForPlacement.get(x.uF.QUEST_LIVE_STREAM);
            if (null == e || null == E) return null;
            let t = e.quests.get(E);
            return (0, R.Oh)(t) ? t.questWithUserStatus : null;
        }, [E]),
        [N, g] = s.useState(null);
    s.useEffect(() => {
        null != S ? g(S) : null === E && g(null);
    }, [S, E]);
    let v = S ?? (null !== E ? N : null),
        I = e.previewQuest ?? (i ? v : m);
    return null == I || n
        ? null
        : (0, l.jsx)(D.R, {
              questOrQuests: I,
              overrideVisibility: !t,
              questContent: x.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(Y, { ...e, quest: I }),
          });
}
let J = function (e) {
    let t = (0, r.bG)([S.default], () => S.default.getCurrentUser());
    return (0, r.bG)([c.A], () => (t?.id == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [
        e.channelId,
        t,
    ]) || null != e.previewQuest
        ? (0, l.jsx)($, { ...e })
        : null;
};
