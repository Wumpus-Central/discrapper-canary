n.d(t, { Z: () => B }), n(388685);
var r = n(54381),
    l = n(473749),
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
    A = n(373370),
    O = n(475595),
    x = n(602667),
    C = n(340100),
    _ = n(611855),
    w = n(644646),
    Z = n(110560),
    I = n(670638),
    P = n(667105),
    Q = n(860151),
    L = n(46140),
    N = n(981631),
    R = n(354459),
    U = n(388032),
    q = n(825048);
function M(e) {
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
function D(e, t) {
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
function V(e) {
    var t, n, s, m, x;
    let { channelId: V, quest: k, previewQuest: B, isParticipatingOverride: W } = e,
        H = (0, v.O5)(),
        [z, G] = l.useState(!1),
        F = l.useCallback(() => G(!0), []),
        K = l.useCallback(() => G(!1), []),
        X = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        Y = (0, a.e7)([f.Z], () => f.Z.getState().theme),
        $ = (0, o.wj)(Y) ? N.BRd.DARK : N.BRd.LIGHT,
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
                        if (t.type !== R.fO.STREAM || t.user.id !== X.id) return !1;
                        let n = (0, p.Um)(t.stream, e);
                        return null != n && (0, T._D)(n, k);
                    })),
                isQuestInQuestBar: (null == ee ? void 0 : ee.id) === (null == k ? void 0 : k.id),
            };
        }, [X, k, J, ee]),
        er = null == (t = (0, T.vj)(k)) ? void 0 : t[0],
        el = (0, a.e7)([d.ZP, b.Z], () => {
            let e = d.ZP.getRunningGames().map((e) => e.id);
            if ((0, T.$H)(k) && null !== er && e.includes(er)) return !0;
            let t = null != X ? b.Z.findActivity(X.id, (e) => e.type !== N.IIU.CUSTOM_STATUS) : null;
            return !!(null != t && (0, T.$J)(k) && (0, T._D)(t, k));
        }, [k, X, er]),
        es = !0 === W || et || el,
        ei = (0, a.e7)([S.Z], () => null != k && S.Z.isEnrolling(k.id), [k]),
        ea = (0, a.e7)(
            [c.Z],
            () => ((null == X ? void 0 : X.id) == null ? null : c.Z.getParticipant(V, X.id)) != null,
            [V, X],
        ),
        { launchInGameActivity: eo } = (0, g.zB)(k),
        eu = (0, g.B6)(null == k ? void 0 : k.config.expiresAt),
        ec = (0, g.B6)(null == k ? void 0 : k.config.rewardsConfig.rewardsExpireAt),
        ed = l.useCallback(() => {
            (0, j.AH)(k.id, {
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: v.jZ.ACCEPT_QUEST,
                sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
            }),
                (0, T.Rt)(k) && eo();
        }, [k, eo]),
        ep = l.useCallback(() => {
            H({
                questId: k.id,
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: v.jZ.TRACK_PROGRESS,
                sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
            }),
                (0, Z.navigateToQuestHome)({
                    fromContent: h.jn.QUEST_LIVE_STREAM,
                    questId: k.id,
                });
        }, [k, H]),
        ef = l.useCallback(() => {
            H({
                questId: k.id,
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: v.jZ.LEARN_MORE,
                sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
            }),
                (0, Z.navigateToQuestHome)({
                    fromContent: h.jn.QUEST_LIVE_STREAM,
                    questId: k.id,
                });
        }, [k, H]),
        em = (0, P.hf)({
            quest: k,
            questContent: h.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
        }),
        eb = l.useMemo(
            () =>
                (0, y.T)({
                    quest: k,
                    location: L.dr.QUEST_CHANNEL_CALL_HEADER,
                }),
            [k],
        ),
        eE = (0, A.CR)({ quest: k }),
        ej = (0, T.Rt)(k),
        ev = (0, g.tP)(k),
        eT = (null == (n = k.userStatus) ? void 0 : n.enrolledAt) != null,
        eg = (null == (s = k.userStatus) ? void 0 : s.completedAt) != null,
        eS = null != k.userStatus && (0, T.zE)(k.userStatus, h.jn.QUEST_LIVE_STREAM),
        eh = null != k.userStatus && (0, T.zE)(k.userStatus, h.jn.QUEST_BAR),
        ey = en && !eh;
    eb.info({
        isQuestCallHeaderDismissed: eS,
        isQuestExpired: ev,
        isQuestBarShowing: ey,
        isCurrentUserCallParticipant: ea,
    });
    let eA = null != B && (null == (m = k.userStatus) ? void 0 : m.claimedAt) == null;
    if ((!eA && (eS || ev || ey)) || (!eA && !ea)) return null;
    let eO = (0, T.il)(k),
        ex = (0, r.jsx)(w.Z, {
            className: q.rewardTile,
            autoplay: z,
            quest: k,
            questContent: h.jn.QUEST_LIVE_STREAM,
            location: L.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: i()(q.wrapper, { [q.wrapperAccepted]: eT }),
        onFocus: F,
        onMouseEnter: F,
        onBlur: K,
        onMouseLeave: K,
        children: [
            !eT &&
                (0, r.jsxs)("div", {
                    className: q.rewardTileWrapper,
                    children: [
                        ex,
                        (0, r.jsx)(_.Z, {
                            bgOpacity: 0.32,
                            className: q.promotedTag,
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: q.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: q.heading,
                        children: [
                            eT && es
                                ? ex
                                : (0, r.jsx)("img", {
                                      className: q.gameTile,
                                      alt: k.config.messages.gameTitle,
                                      src: (0, O.fh)(k, O.eC.GAME_TILE, $).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: q.headingWithSubmenu,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: q.questTitle,
                                                variant: "heading-md/semibold",
                                                color: "header-primary",
                                                children: es
                                                    ? (0, T.AV)({
                                                          quest: k,
                                                          taskDetails: eO,
                                                      })
                                                    : U.intl.formatToPlainString(U.t.EQa7os, {
                                                          questName: k.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(I.r, {
                                                questContent: h.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
                                                quest: k,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (x = k.userStatus) ? void 0 : x.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.P3F,
                                                        D(M({}, e), {
                                                            className: q.submenuWrapper,
                                                            "aria-label": U.intl.string(U.t.DEoVWZ),
                                                            children: (0, r.jsx)(u.xhG, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: q.submenuIcon,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        color: "header-secondary",
                                        variant: "text-xs/medium",
                                        children: eg
                                            ? U.intl.formatToPlainString(U.t.APddvF, { expirationDate: ec })
                                            : U.intl.formatToPlainString(U.t["pX+fmn"], { expirationDate: eu }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eT &&
                        !eg &&
                        !es &&
                        (0, r.jsx)(Q.Z, {
                            autoplay: z,
                            quest: k,
                            questContent: h.jn.QUEST_LIVE_STREAM,
                            taskDetails: eO,
                            location: L.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: q.ctas,
                        children: [
                            !eT &&
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "horizontal",
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: U.intl.string(U.t.LLLLPD),
                                            onClick: ef,
                                            fullWidth: !ej || k.config.features.includes(L.S7.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "primary",
                                            fullWidth: !0,
                                            text: eE,
                                            onClick: ed,
                                            loading: ei,
                                        }),
                                    ],
                                }),
                            eT &&
                                !eg &&
                                es &&
                                (0, r.jsx)(C.Z, {
                                    color: u.TVs.colors.BG_BRAND,
                                    quest: k,
                                }),
                            eT &&
                                !eg &&
                                !es &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: U.intl.string(U.t.VN1Ajl),
                                    onClick: ep,
                                }),
                            eg &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: U.intl.string(U.t.cfY4PE),
                                    onClick: em,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function k(e) {
    let t = l.useContext(m.h9),
        n = (0, a.e7)([S.Z], () => null != S.Z.questEnrollmentBlockedUntil, []),
        s = (0, a.e7)([S.Z], () => S.Z.quests),
        i = (0, g.Fy)(Array.from(s.values())),
        o = l.useMemo(() => (0, T.NI)(s, L.Lv), [s]),
        u = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        d = (0, a.e7)(
            [b.Z],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let i of e) {
                              var r, l, s;
                              if (i.type === R.fO.STREAM) {
                                  let e = null != (l = (0, p.Um)(i.stream, n)) ? l : null,
                                      s = (0, T.ZZ)(t, e);
                                  if (null != s && (null == (r = s.userStatus) ? void 0 : r.claimedAt) == null)
                                      return s;
                              }
                              for (let r of e)
                                  if (!(0, R.I)(r))
                                      for (let e of n.getActivities(r.user.id)) {
                                          let n = (0, T.ZZ)(t, e);
                                          if (null != n && (null == (s = n.userStatus) ? void 0 : s.claimedAt) == null)
                                              return n;
                                      }
                          }
                          return null;
                      })(u, o, b.Z),
            [u, o, i, e.previewQuest],
        );
    return null == d || n
        ? null
        : (0, r.jsx)(x.A, {
              questOrQuests: d,
              overrideVisibility: !t,
              questContent: h.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(V, D(M({}, e), { quest: d })),
          });
}
let B = function (e) {
    let t = (0, a.e7)([E.default], () => E.default.getCurrentUser());
    return (0, a.e7)(
        [c.Z],
        () => ((null == t ? void 0 : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(k, M({}, e))
        : null;
};
