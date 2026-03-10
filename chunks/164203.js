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
    m = n(409626),
    A = n(834757),
    p = n(544028),
    f = n(461782),
    h = n(290863),
    E = n(287809),
    x = n(829219),
    N = n(859703),
    g = n(341915),
    T = n(55738),
    v = n(33621),
    S = n(943849),
    _ = n(714510),
    C = n(890687),
    j = n(579473),
    y = n(18437),
    I = n(590202),
    M = n(651892),
    b = n(710969),
    R = n(639214),
    L = n(792620),
    U = n(814793),
    w = n(73473),
    D = n(270045),
    O = n(201805),
    G = n(212614),
    Q = n(79545),
    k = n(251637),
    P = n(847641),
    F = n(646764),
    V = n(311243),
    q = n(545986),
    B = n(654487),
    z = n(652215),
    H = n(806931),
    W = n(985018),
    K = n(470699);
function Y(e) {
    let { channelId: t, quest: n, previewQuest: a, isParticipatingOverride: f } = e,
        T = (0, y.Ut)(),
        [w, Y] = s.useState(!1),
        $ = s.useCallback(() => Y(!0), []),
        J = s.useCallback(() => Y(!1), []),
        Z = (0, r.bG)([E.default], () => E.default.getCurrentUser()),
        X = (0, r.bG)([p.A], () => p.A.getState().theme),
        ee = (0, o.Mw)(X) ? z.NJ8.DARK : z.NJ8.LIGHT,
        et = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        en = (0, r.bG)(
            [N.A],
            () => (0, b.t6)(N.A.quests, N.A.questToDeliverForPlacement, g.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: el, isQuestInQuestBar: es } = (0, r.cf)([h.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != n &&
                    null != Z &&
                    ((e = h.A),
                    et.some((t) => {
                        if (t.type !== H.lp.STREAM || t.user.id !== Z.id) return !1;
                        let l = (0, A.nr)(t.stream, e);
                        return null != l && (0, R.zS)(l, n);
                    })),
                isQuestInQuestBar: en?.id === n?.id,
            };
        }, [Z, n, et, en]),
        ea = (0, L.pU)(n)?.[0],
        ei = (0, r.bG)([d.Ay, h.A], () => {
            let e = d.Ay.getRunningGames().map((e) => e.id);
            if ((0, L.xZ)(n) && null !== ea && e.includes(ea)) return !0;
            let t = null != Z ? h.A.findActivity(Z.id, (e) => e.type !== z.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, L.g5)(n) && (0, R.zS)(t, n));
        }, [n, Z, ea]),
        er = !0 === f || el || ei,
        eo = (0, r.bG)([N.A], () => null != n && N.A.isEnrolling(n.id), [n]),
        eu = (0, r.bG)([c.A], () => (Z?.id == null ? null : c.A.getParticipant(t, Z.id)) != null, [t, Z]),
        { launchInGameActivity: ec } = (0, C.zW)(n),
        ed = (0, C.S5)(n?.config.expiresAt),
        em = (0, C.S5)(n?.config.rewardsConfig.rewardsExpireAt),
        eA = s.useCallback(() => {
            (0, x.Oy)(n.id, {
                questContent: g.uF.QUEST_LIVE_STREAM,
                questContentCTA: I.Cy.ACCEPT_QUEST,
                sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
            }),
                (0, U.vA)(n) && ec();
        }, [n, ec]),
        ep = s.useCallback(() => {
            T({
                questId: n.id,
                questContent: g.uF.QUEST_LIVE_STREAM,
                questContentCTA: I.Cy.TRACK_PROGRESS,
                sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
            }),
                (0, q.navigateToQuestHome)({ fromContent: g.uF.QUEST_LIVE_STREAM, questId: n.id });
        }, [n, T]),
        ef = s.useCallback(() => {
            T({
                questId: n.id,
                questContent: g.uF.QUEST_LIVE_STREAM,
                questContentCTA: I.Cy.LEARN_MORE,
                sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
            }),
                (0, q.navigateToQuestHome)({ fromContent: g.uF.QUEST_LIVE_STREAM, questId: n.id });
        }, [n, T]),
        eh = (0, O.ix)({ quest: n, questContent: g.uF.QUEST_LIVE_STREAM, sourceQuestContent: g.uF.QUEST_LIVE_STREAM }),
        eE = s.useMemo(() => (0, S.L)({ quest: n, location: B.rE.QUEST_CHANNEL_CALL_HEADER }), [n]),
        ex = (0, _.NA)({ quest: n }),
        eN = (0, U.vA)(n),
        eg = (0, C.LS)(n),
        eT = n.userStatus?.enrolledAt != null,
        ev = n.userStatus?.completedAt != null,
        eS = null != n.userStatus && (0, b.gO)(n.userStatus, g.uF.QUEST_LIVE_STREAM),
        e_ = null != n.userStatus && (0, b.gO)(n.userStatus, g.uF.QUEST_BAR),
        eC = es && !e_,
        ej = v.t.useConfig({ location: B.rE.QUEST_CHANNEL_CALL_HEADER }),
        ey = (0, Q.Pd)(n);
    eE.info({
        isQuestCallHeaderDismissed: eS,
        isQuestExpired: eg,
        isQuestBarShowing: eC,
        isCurrentUserCallParticipant: eu,
    });
    let eI = null != a && n.userStatus?.claimedAt == null;
    if ((!eI && (eS || eg || eC)) || (!eI && !eu)) return null;
    let eM = (0, L.Yh)(n),
        eb = (0, l.jsx)(F.A, {
            className: K.Qq,
            autoplay: w,
            quest: n,
            questContent: g.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: i()(K.iE, { [K.rH]: eT }),
        onFocus: $,
        onMouseEnter: $,
        onBlur: J,
        onMouseLeave: J,
        children: [
            !eT &&
                (0, l.jsxs)("div", {
                    className: K.D9,
                    children: [(0, l.jsx)(P.A, { bgOpacity: 0.32, className: K.Pu }), eb],
                }),
            (0, l.jsxs)("div", {
                className: K.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: K.R_,
                        children: [
                            eT && er
                                ? eb
                                : (0, l.jsx)("img", {
                                      className: K.rC,
                                      alt: n.config.messages.gameTitle,
                                      src: (0, j.tW)(n, j.fY.GAME_TILE, ee).url,
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
                                                children: er
                                                    ? (0, M.YT)({ quest: n, taskDetails: eM })
                                                    : W.intl.formatToPlainString(W.t.EQa7os, {
                                                          questName: n.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(D.C, {
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
                                        children: ev
                                            ? W.intl.formatToPlainString(W.t.APddvF, { expirationDate: em })
                                            : W.intl.formatToPlainString(W.t["pX+fmn"], { expirationDate: ed }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eT &&
                        !ev &&
                        !er &&
                        (0, l.jsx)(V.A, {
                            autoplay: w,
                            quest: n,
                            questContent: g.uF.QUEST_LIVE_STREAM,
                            taskDetails: eM,
                            location: B.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: m.Ob.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: K.uz,
                        children: [
                            !eT &&
                                (0, l.jsxs)(u.BJc, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: W.intl.string(W.t.LLLLPD),
                                            onClick: ef,
                                            fullWidth: !eN || n.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        ej.enabled &&
                                        ey === Q.UA.UNENROLLED &&
                                        ej.enabledQuestStates.has(Q.UA.UNENROLLED) &&
                                        !eg
                                            ? (0, l.jsx)(G.A, {
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
                                                  text: ex,
                                                  onClick: eA,
                                                  loading: eo,
                                              }),
                                    ],
                                }),
                            eT && !ev && er && (0, l.jsx)(k.A, { color: u.LU0.colors.BACKGROUND_BRAND, quest: n }),
                            eT &&
                                !ev &&
                                !er &&
                                (0, l.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: W.intl.string(W.t.VN1Ajl),
                                    onClick: ep,
                                }),
                            ev &&
                                (0, l.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: W.intl.string(W.t.cfY4PE),
                                    onClick: eh,
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
        n = (0, r.bG)([N.A], () => null != N.A.questEnrollmentBlockedUntil, []),
        { use_api_call: a } = T.Y.getConfig({ location: "QuestChannelCallHeader" }),
        i = (0, r.bG)([N.A], () => N.A.quests),
        o = (0, C.oH)(Array.from(i.values())),
        u = s.useMemo(() => (0, U.$e)(i, B.Ls), [i]),
        d = (0, r.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
        m = (0, r.bG)(
            [h.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let l of e) {
                              if (l.type === H.lp.STREAM) {
                                  let e = (0, A.nr)(l.stream, n) ?? null,
                                      s = (0, R.nq)(t, e);
                                  if (null != s && s.userStatus?.claimedAt == null) return s;
                              }
                              for (let l of e)
                                  if (!(0, H.PJ)(l))
                                      for (let e of n.getActivities(l.user.id)) {
                                          let n = (0, R.nq)(t, e);
                                          if (null != n && n.userStatus?.claimedAt == null) return n;
                                      }
                          }
                          return null;
                      })(d, u, h.A),
            [d, u, o, e.previewQuest],
        ),
        p = s.useMemo(() => (a ? (m?.id ?? null) : null), [m, a]);
    s.useEffect(() => {
        null == e.previewQuest && null != p && (0, x.yO)([p], g.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [p, e.previewQuest]);
    let E = (0, r.bG)([N.A], () => {
            let e = N.A.earnedQuestForPlacement.get(g.uF.QUEST_LIVE_STREAM);
            if (null == e || null == p) return null;
            let t = e.quests.get(p);
            return (0, b.Oh)(t) ? t.questWithUserStatus : null;
        }, [p]),
        [v, S] = s.useState(null);
    s.useEffect(() => {
        null != E ? S(E) : null === p && S(null);
    }, [E, p]);
    let _ = E ?? (null !== p ? v : null),
        j = e.previewQuest ?? (a ? _ : m);
    return null == j || n
        ? null
        : (0, l.jsx)(w.R, {
              questOrQuests: j,
              overrideVisibility: !t,
              questContent: g.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(Y, { ...e, quest: j }),
          });
}
let J = function (e) {
    let t = (0, r.bG)([E.default], () => E.default.getCurrentUser());
    return (0, r.bG)([c.A], () => (t?.id == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [
        e.channelId,
        t,
    ]) || null != e.previewQuest
        ? (0, l.jsx)($, { ...e })
        : null;
};
