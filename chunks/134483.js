n.d(t, { Z: () => W }), n(388685);
var r = n(951288),
    l = n(647438),
    s = n(120356),
    i = n.n(s),
    a = n(442837),
    o = n(780384),
    u = n(481060),
    c = n(358221),
    d = n(594190),
    p = n(687516),
    f = n(210887),
    m = n(937995),
    b = n(158776),
    E = n(594174),
    j = n(22095),
    v = n(617136),
    T = n(509212),
    g = n(113434),
    S = n(569984),
    h = n(497505),
    y = n(5881),
    O = n(373370),
    x = n(475595),
    A = n(566078),
    C = n(602667),
    _ = n(340100),
    w = n(611855),
    Z = n(644646),
    I = n(110560),
    P = n(670638),
    Q = n(667105),
    L = n(860151),
    N = n(46140),
    R = n(981631),
    U = n(354459),
    q = n(388032),
    M = n(435413);
function D(e) {
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
function V(e, t) {
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
function k(e) {
    var t, n, s, m;
    let { channelId: C, quest: k, previewQuest: B, isParticipatingOverride: W } = e,
        H = (0, v.O5)(),
        [z, G] = l.useState(!1),
        F = l.useCallback(() => G(!0), []),
        K = l.useCallback(() => G(!1), []),
        X = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        Y = (0, a.e7)([f.Z], () => f.Z.getState().theme),
        $ = (0, o.wj)(Y) ? R.BRd.DARK : R.BRd.LIGHT,
        J = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        ee = (0, a.e7)(
            [S.Z],
            () => (0, T.PM)(S.Z.quests, S.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: et, isQuestInQuestBar: en } = (0, a.cj)([b.Z], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != k &&
                    null != X &&
                    ((e = b.Z),
                    J.some((t) => {
                        if (t.type !== U.fO.STREAM || t.user.id !== X.id) return !1;
                        let n = (0, p.Um)(t.stream, e);
                        return null != n && (0, T._D)(n, k);
                    })),
                isQuestInQuestBar: (null == ee ? void 0 : ee.id) === (null == k ? void 0 : k.id),
            };
        }, [X, k, J, ee]),
        er = null != k ? A.r.build(k.config) : null,
        el = null == er ? void 0 : er.application.id,
        es = (0, a.e7)([d.ZP, b.Z], () => {
            let e = d.ZP.getRunningGames().map((e) => e.id);
            if ((0, T.$H)(k) && e.includes(el)) return !0;
            let t = null != X ? b.Z.findActivity(X.id, (e) => e.type !== R.IIU.CUSTOM_STATUS) : null;
            return !!(null != t && (0, T.$J)(k) && (0, T._D)(t, k));
        }, [k, el, X]),
        ei = !0 === W || et || es,
        ea = (0, a.e7)([S.Z], () => null != k && S.Z.isEnrolling(k.id), [k]),
        eo = (0, a.e7)(
            [c.Z],
            () => ((null == X ? void 0 : X.id) == null ? null : c.Z.getParticipant(C, X.id)) != null,
            [C, X],
        ),
        { launchInGameActivity: eu } = (0, g.zB)(k),
        ec = (0, g.B6)(null == k ? void 0 : k.config.expiresAt),
        ed = (0, g.B6)(null == er ? void 0 : er.rewardsExpireAt),
        ep = l.useCallback(() => {
            (0, j.AH)(k.id, {
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: v.jZ.ACCEPT_QUEST,
                sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
            }),
                (0, T.Rt)(k) && eu();
        }, [k, eu]),
        ef = l.useCallback(() => {
            H({
                questId: k.id,
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: v.jZ.TRACK_PROGRESS,
                sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
            }),
                (0, I.navigateToQuestHome)({
                    fromContent: h.jn.QUEST_LIVE_STREAM,
                    questId: k.id,
                });
        }, [k, H]),
        em = l.useCallback(() => {
            H({
                questId: k.id,
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: v.jZ.LEARN_MORE,
                sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
            }),
                (0, I.navigateToQuestHome)({
                    fromContent: h.jn.QUEST_LIVE_STREAM,
                    questId: k.id,
                });
        }, [k, H]),
        eb = (0, Q.hf)({
            quest: k,
            questContent: h.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
        }),
        eE = l.useMemo(
            () =>
                (0, y.T)({
                    quest: k,
                    location: N.dr.QUEST_CHANNEL_CALL_HEADER,
                }),
            [k],
        ),
        ej = (0, O.CR)({ quest: k }),
        ev = (0, T.Rt)(k),
        eT = (0, g.tP)(k),
        eg = (null == (t = k.userStatus) ? void 0 : t.enrolledAt) != null,
        eS = (null == (n = k.userStatus) ? void 0 : n.completedAt) != null,
        eh = null != k.userStatus && (0, T.zE)(k.userStatus, h.jn.QUEST_LIVE_STREAM),
        ey = null != k.userStatus && (0, T.zE)(k.userStatus, h.jn.QUEST_BAR),
        eO = en && !ey;
    eE.info({
        isQuestCallHeaderDismissed: eh,
        isQuestExpired: eT,
        isQuestBarShowing: eO,
        isCurrentUserCallParticipant: eo,
    });
    let ex = null != B && (null == (s = k.userStatus) ? void 0 : s.claimedAt) == null;
    if ((!ex && (eh || eT || eO)) || (!ex && !eo)) return null;
    let eA = (0, T.il)(k),
        eC = (0, r.jsx)(Z.Z, {
            className: M.rewardTile,
            autoplay: z,
            quest: k,
            questContent: h.jn.QUEST_LIVE_STREAM,
            location: N.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: i()(M.wrapper, { [M.wrapperAccepted]: eg }),
        onFocus: F,
        onMouseEnter: F,
        onBlur: K,
        onMouseLeave: K,
        children: [
            !eg &&
                (0, r.jsxs)("div", {
                    className: M.rewardTileWrapper,
                    children: [
                        eC,
                        (0, r.jsx)(w.Z, {
                            bgOpacity: 0.32,
                            className: M.promotedTag,
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: M.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: M.heading,
                        children: [
                            eg && ei
                                ? eC
                                : (0, r.jsx)("img", {
                                      className: M.gameTile,
                                      alt: k.config.messages.gameTitle,
                                      src: (0, x.fh)(k, x.eC.GAME_TILE, $).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: M.headingWithSubmenu,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: M.questTitle,
                                                variant: "heading-md/semibold",
                                                color: "header-primary",
                                                children: ei
                                                    ? (0, T.AV)({
                                                          quest: k,
                                                          taskDetails: eA,
                                                      })
                                                    : q.intl.formatToPlainString(q.t.EQa7os, {
                                                          questName: k.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(P.r, {
                                                questContent: h.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
                                                quest: k,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (m = k.userStatus) ? void 0 : m.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.P3F,
                                                        V(D({}, e), {
                                                            className: M.submenuWrapper,
                                                            "aria-label": q.intl.string(q.t.DEoVWZ),
                                                            children: (0, r.jsx)(u.xhG, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: M.submenuIcon,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        color: "header-secondary",
                                        variant: "text-xs/medium",
                                        children: eS
                                            ? q.intl.formatToPlainString(q.t.APddvF, { expirationDate: ed })
                                            : q.intl.formatToPlainString(q.t["pX+fmn"], { expirationDate: ec }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eg &&
                        !eS &&
                        !ei &&
                        (0, r.jsx)(L.Z, {
                            autoplay: z,
                            quest: k,
                            questContent: h.jn.QUEST_LIVE_STREAM,
                            taskDetails: eA,
                            location: N.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: M.ctas,
                        children: [
                            !eg &&
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "horizontal",
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: q.intl.string(q.t.LLLLPD),
                                            onClick: em,
                                            fullWidth: !ev || k.config.features.includes(N.S7.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "primary",
                                            fullWidth: !0,
                                            text: ej,
                                            onClick: ep,
                                            loading: ea,
                                        }),
                                    ],
                                }),
                            eg &&
                                !eS &&
                                ei &&
                                (0, r.jsx)(_.Z, {
                                    color: u.TVs.colors.BG_BRAND,
                                    quest: k,
                                }),
                            eg &&
                                !eS &&
                                !ei &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: q.intl.string(q.t.VN1Ajl),
                                    onClick: ef,
                                }),
                            eS &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: q.intl.string(q.t.cfY4PE),
                                    onClick: eb,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function B(e) {
    let t = l.useContext(m.h9),
        n = (0, a.e7)([S.Z], () => null != S.Z.questEnrollmentBlockedUntil, []),
        s = (0, a.e7)([S.Z], () => S.Z.quests),
        i = l.useMemo(() => (0, T.NI)(s, N.Lv), [s]),
        o = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        u = (0, a.e7)(
            [b.Z],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let i of e) {
                              var r, l, s;
                              if (i.type === U.fO.STREAM) {
                                  let e = null != (l = (0, p.Um)(i.stream, n)) ? l : null,
                                      s = (0, T.ZZ)(t, e);
                                  if (null != s && (null == (r = s.userStatus) ? void 0 : r.claimedAt) == null)
                                      return s;
                              }
                              for (let r of e)
                                  if (!(0, U.I)(r))
                                      for (let e of n.getActivities(r.user.id)) {
                                          let n = (0, T.ZZ)(t, e);
                                          if (null != n && (null == (s = n.userStatus) ? void 0 : s.claimedAt) == null)
                                              return n;
                                      }
                          }
                          return null;
                      })(o, i, b.Z),
            [o, i, e.previewQuest],
        );
    return null == u || n
        ? null
        : (0, r.jsx)(C.A, {
              questOrQuests: u,
              overrideVisibility: !t,
              questContent: h.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(k, V(D({}, e), { quest: u })),
          });
}
let W = function (e) {
    let t = (0, a.e7)([E.default], () => E.default.getCurrentUser());
    return (0, a.e7)(
        [c.Z],
        () => ((null == t ? void 0 : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(B, D({}, e))
        : null;
};
