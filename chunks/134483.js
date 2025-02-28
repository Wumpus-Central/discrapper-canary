n.d(t, { Z: () => B }), n(47120);
var r = n(200651),
    s = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(442837),
    a = n(780384),
    c = n(481060),
    u = n(358221),
    d = n(594190),
    m = n(687516),
    p = n(210887),
    x = n(937995),
    g = n(158776),
    f = n(594174),
    h = n(617136),
    j = n(272008),
    v = n(113434),
    b = n(569984),
    C = n(497505),
    N = n(918701),
    E = n(5881),
    T = n(475595),
    y = n(566078),
    S = n(602667),
    O = n(340100),
    q = n(611855),
    P = n(644646),
    w = n(880199),
    A = n(670638),
    R = n(667105),
    _ = n(860151),
    Z = n(341907),
    I = n(46140),
    M = n(981631),
    L = n(354459),
    D = n(388032),
    k = n(883848);
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function U(e, t) {
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
function Q(e) {
    var t, n, i, x;
    let { channelId: S, quest: Q, previewQuest: B, isParticipatingOverride: z } = e,
        F = (0, h.O5)(),
        [G, H] = s.useState(!1),
        V = s.useCallback(() => H(!0), []),
        X = s.useCallback(() => H(!1), []),
        Y = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        K = (0, l.e7)([p.Z], () => p.Z.getState().theme),
        J = (0, a.wj)(K) ? M.BRd.DARK : M.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: $, isQuestInQuestBar: ee } = (0, l.cj)(
            [g.Z, u.Z, b.Z],
            () => {
                var e;
                let t = u.Z.getParticipants(S),
                    n =
                        null != Q &&
                        null != Y &&
                        ((e = g.Z),
                        t.some((t) => {
                            if (t.type !== L.fO.STREAM || t.user.id !== Y.id) return !1;
                            let n = (0, m.Um)(t.stream, e);
                            return null != n && (0, N._D)(n, Q);
                        })),
                    r = (0, N.PM)(b.Z.quests, b.Z.questToDeliverForPlacement, C.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: n,
                    isQuestInQuestBar: (null == r ? void 0 : r.id) === (null == Q ? void 0 : Q.id)
                };
            },
            [S, Y, Q]
        ),
        et = null != Q ? y.r.build(Q.config) : null,
        en = null == et ? void 0 : et.application.id,
        er = (0, l.e7)(
            [d.ZP, g.Z],
            () => {
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, N.$H)(Q) && e.includes(en)) return !0;
                let t = null != Y ? g.Z.findActivity(Y.id, (e) => e.type !== M.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, N.$J)(Q) && (0, N._D)(t, Q));
            },
            [Q, en, Y]
        ),
        es = !0 === z || $ || er,
        ei = (0, l.e7)([b.Z], () => null != Q && b.Z.isEnrolling(Q.id), [Q]),
        eo = (0, l.e7)([u.Z], () => ((null == Y ? void 0 : Y.id) == null ? null : u.Z.getParticipant(S, Y.id)) != null, [S, Y]),
        el = (0, v.B6)(null == Q ? void 0 : Q.config.expiresAt),
        ea = (0, v.B6)(null == et ? void 0 : et.rewardsExpireAt),
        ec = s.useCallback(() => {
            (0, j.AH)(Q.id, {
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: h.jZ.ACCEPT_QUEST
            });
        }, [Q]),
        eu = s.useCallback(() => {
            F({
                questId: Q.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: h.jZ.TRACK_PROGRESS
            }),
                (0, Z.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: Q.id
                });
        }, [Q, F]),
        ed = s.useCallback(() => {
            F({
                questId: Q.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: h.jZ.LEARN_MORE
            }),
                (0, Z.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: Q.id
                });
        }, [Q, F]),
        em = (0, R.hf)({
            quest: Q,
            location: C.jn.QUEST_LIVE_STREAM
        }),
        ep = s.useMemo(
            () =>
                (0, E.T)({
                    quest: Q,
                    location: I.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [Q]
        ),
        ex = (0, v.tP)(Q),
        eg = (null === (t = Q.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        ef = (null === (n = Q.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        eh = null != Q.userStatus && (0, N.zE)(Q.userStatus, C.jn.QUEST_LIVE_STREAM),
        ej = null != Q.userStatus && (0, N.zE)(Q.userStatus, C.jn.QUEST_BAR),
        ev = ee && !ej;
    ep.info({
        isQuestCallHeaderDismissed: eh,
        isQuestExpired: ex,
        isQuestBarShowing: ev,
        isCurrentUserCallParticipant: eo
    });
    let eb = null != B && (null === (i = Q.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null;
    if ((!eb && (eh || ex || ev)) || (!eb && !eo)) return null;
    let eC = (0, N.il)(Q),
        eN = (0, r.jsx)(P.Z, {
            className: k.rewardTile,
            autoplay: G,
            quest: Q,
            questContent: C.jn.QUEST_LIVE_STREAM,
            location: I.dr.QUEST_CHANNEL_CALL_HEADER
        });
    return (0, r.jsxs)('div', {
        className: o()(k.wrapper, { [k.wrapperAccepted]: eg }),
        onFocus: V,
        onMouseEnter: V,
        onBlur: X,
        onMouseLeave: X,
        children: [
            !eg &&
                (0, r.jsxs)('div', {
                    className: k.rewardTileWrapper,
                    children: [
                        eN,
                        (0, r.jsx)(q.Z, {
                            bgOpacity: 0.32,
                            className: k.promotedTag
                        })
                    ]
                }),
            (0, r.jsxs)('div', {
                className: k.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: k.heading,
                        children: [
                            eg && es
                                ? eN
                                : (0, r.jsx)('img', {
                                      className: k.gameTile,
                                      alt: Q.config.messages.gameTitle,
                                      src: (0, T.fh)(Q, T.eC.GAME_TILE, J).url
                                  }),
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: k.headingWithSubmenu,
                                        children: [
                                            (0, r.jsx)(c.X6q, {
                                                className: k.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: es
                                                    ? (0, N.AV)({
                                                          quest: Q,
                                                          taskDetails: eC
                                                      })
                                                    : D.NW.formatToPlainString(D.t.EQa7oq, { questName: Q.config.messages.questName })
                                            }),
                                            (0, r.jsx)(A.r, {
                                                questContent: C.jn.QUEST_LIVE_STREAM,
                                                quest: Q,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null === (x = Q.userStatus) || void 0 === x ? void 0 : x.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        c.P3F,
                                                        U(W({}, e), {
                                                            className: k.submenuWrapper,
                                                            'aria-label': D.NW.string(D.t.DEoVWV),
                                                            children: (0, r.jsx)(c.xhG, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: k.submenuIcon
                                                            })
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: ef ? D.NW.formatToPlainString(D.t.APddvL, { expirationDate: ea }) : D.NW.formatToPlainString(D.t['pX+fmp'], { expirationDate: el })
                                    })
                                ]
                            })
                        ]
                    }),
                    eg &&
                        !ef &&
                        !es &&
                        (0, r.jsx)(_.Z, {
                            autoplay: G,
                            quest: Q,
                            questContent: C.jn.QUEST_LIVE_STREAM,
                            taskDetails: eC,
                            location: I.dr.QUEST_CHANNEL_CALL_HEADER
                        }),
                    (0, r.jsxs)('div', {
                        className: k.ctas,
                        children: [
                            !eg &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(c.zxk, {
                                            className: k.cta,
                                            color: c.zxk.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: c.zxk.Sizes.SMALL,
                                            onClick: ed,
                                            children: D.NW.string(D.t.LLLLPD)
                                        }),
                                        (0, r.jsx)(c.zxk, {
                                            className: k.cta,
                                            color: c.zxk.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: ec,
                                            size: c.zxk.Sizes.SMALL,
                                            submitting: ei,
                                            children: D.NW.string(D.t.l7E81t)
                                        })
                                    ]
                                }),
                            eg &&
                                !ef &&
                                es &&
                                (0, r.jsx)(O.Z, {
                                    color: c.TVs.colors.BG_BRAND,
                                    quest: Q
                                }),
                            eg &&
                                !ef &&
                                !es &&
                                (0, r.jsx)(c.zxk, {
                                    className: k.cta,
                                    color: c.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: eu,
                                    size: c.zxk.Sizes.SMALL,
                                    children: D.NW.string(D.t.VN1Ajo)
                                }),
                            ef &&
                                (0, r.jsx)(c.zxk, {
                                    className: k.cta,
                                    color: c.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: em,
                                    size: c.zxk.Sizes.SMALL,
                                    children: (0, N.xN)(Q.config) ? (0, r.jsx)(w.Z, { orbQuantity: (0, N.LM)(Q.config) }) : D.NW.string(D.t.cfY4PD)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
let B = function (e) {
    let t = s.useContext(x.h9),
        n = (0, l.e7)([u.Z, g.Z, b.Z], () => {
            let t = u.Z.getParticipants(e.channelId);
            return null != e.previewQuest
                ? e.previewQuest
                : (function (e, t, n) {
                      for (let o of e) {
                          var r, s, i;
                          if (o.type === L.fO.STREAM) {
                              let e = null !== (s = (0, m.Um)(o.stream, n)) && void 0 !== s ? s : null,
                                  i = (0, N.ZZ)(t, e);
                              if (null != i && (null === (r = i.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null) return i;
                          }
                          for (let r of e)
                              if (!(0, L.I)(r))
                                  for (let e of n.getActivities(r.user.id)) {
                                      let n = (0, N.ZZ)(t, e);
                                      if (null != n && (null === (i = n.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null && ((0, N.Nj)({ quest: n }) || (0, N.$J)(n))) return n;
                                  }
                      }
                      return null;
                  })(t, b.Z.quests, g.Z);
        });
    return null == n
        ? null
        : (0, r.jsx)(S.A, {
              questOrQuests: n,
              overrideVisibility: !t,
              questContent: C.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(Q, U(W({}, e), { quest: n }))
          });
};
