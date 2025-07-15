(n.d(t, { Z: () => H }), n(388685));
var l = n(255367),
    s = n(73800),
    r = n(120356),
    i = n.n(r),
    u = n(442837),
    o = n(780384),
    a = n(755721),
    c = n(481060),
    d = n(358221),
    E = n(594190),
    S = n(687516),
    m = n(210887),
    T = n(937995),
    A = n(158776),
    p = n(594174),
    f = n(617136),
    j = n(272008),
    _ = n(113434),
    C = n(569984),
    v = n(497505),
    x = n(918701),
    h = n(5881),
    g = n(373370),
    L = n(475595),
    Q = n(566078),
    b = n(602667),
    R = n(340100),
    Z = n(611855),
    I = n(644646),
    M = n(670638),
    N = n(667105),
    U = n(860151),
    q = n(341907),
    O = n(46140),
    y = n(981631),
    P = n(354459),
    D = n(388032),
    w = n(45772);
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function z(e, t) {
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
function k(e) {
    var t, n, r, T;
    let { channelId: b, quest: k, previewQuest: B, isParticipatingOverride: H } = e,
        W = (0, f.O5)(),
        [G, F] = s.useState(!1),
        K = s.useCallback(() => F(!0), []),
        X = s.useCallback(() => F(!1), []),
        $ = (0, u.e7)([p.default], () => p.default.getCurrentUser()),
        J = (0, u.e7)([m.Z], () => m.Z.getState().theme),
        Y = (0, o.wj)(J) ? y.BRd.DARK : y.BRd.LIGHT,
        ee = (0, u.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]),
        et = (0, u.e7)([C.Z], () => (0, x.PM)(C.Z.quests, C.Z.questToDeliverForPlacement, v.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []),
        { isCurrentUserStreamingQuestApplication: en, isQuestInQuestBar: el } = (0, u.cj)(
            [A.Z],
            () => {
                var e;
                return {
                    isCurrentUserStreamingQuestApplication:
                        null != k &&
                        null != $ &&
                        ((e = A.Z),
                        ee.some((t) => {
                            if (t.type !== P.fO.STREAM || t.user.id !== $.id) return !1;
                            let n = (0, S.Um)(t.stream, e);
                            return null != n && (0, x._D)(n, k);
                        })),
                    isQuestInQuestBar: (null == et ? void 0 : et.id) === (null == k ? void 0 : k.id)
                };
            },
            [$, k, ee, et]
        ),
        es = null != k ? Q.r.build(k.config) : null,
        er = null == es ? void 0 : es.application.id,
        ei = (0, u.e7)(
            [E.ZP, A.Z],
            () => {
                let e = E.ZP.getRunningGames().map((e) => e.id);
                if ((0, x.$H)(k) && e.includes(er)) return !0;
                let t = null != $ ? A.Z.findActivity($.id, (e) => e.type !== y.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, x.$J)(k) && (0, x._D)(t, k));
            },
            [k, er, $]
        ),
        eu = !0 === H || en || ei,
        eo = (0, u.e7)([C.Z], () => null != k && C.Z.isEnrolling(k.id), [k]),
        ea = (0, u.e7)([d.Z], () => ((null == $ ? void 0 : $.id) == null ? null : d.Z.getParticipant(b, $.id)) != null, [b, $]),
        ec = (0, _.B6)(null == k ? void 0 : k.config.expiresAt),
        ed = (0, _.B6)(null == es ? void 0 : es.rewardsExpireAt),
        eE = s.useCallback(() => {
            (0, j.AH)(k.id, {
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: f.jZ.ACCEPT_QUEST,
                sourceQuestContent: v.jn.QUEST_LIVE_STREAM
            });
        }, [k]),
        eS = s.useCallback(() => {
            (W({
                questId: k.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: f.jZ.TRACK_PROGRESS,
                sourceQuestContent: v.jn.QUEST_LIVE_STREAM
            }),
                (0, q.navigateToQuestHome)({
                    fromContent: v.jn.QUEST_LIVE_STREAM,
                    questId: k.id
                }));
        }, [k, W]),
        em = s.useCallback(() => {
            (W({
                questId: k.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: f.jZ.LEARN_MORE,
                sourceQuestContent: v.jn.QUEST_LIVE_STREAM
            }),
                (0, q.navigateToQuestHome)({
                    fromContent: v.jn.QUEST_LIVE_STREAM,
                    questId: k.id
                }));
        }, [k, W]),
        eT = (0, N.hf)({
            quest: k,
            questContent: v.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: v.jn.QUEST_LIVE_STREAM
        }),
        eA = (0, g.up)(O.dr.QUEST_CHANNEL_CALL_HEADER),
        ep = s.useMemo(
            () =>
                (0, h.T)({
                    quest: k,
                    location: O.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [k]
        ),
        ef = (0, _.tP)(k),
        ej = (null == (t = k.userStatus) ? void 0 : t.enrolledAt) != null,
        e_ = (null == (n = k.userStatus) ? void 0 : n.completedAt) != null,
        eC = null != k.userStatus && (0, x.zE)(k.userStatus, v.jn.QUEST_LIVE_STREAM),
        ev = null != k.userStatus && (0, x.zE)(k.userStatus, v.jn.QUEST_BAR),
        ex = el && !ev;
    ep.info({
        isQuestCallHeaderDismissed: eC,
        isQuestExpired: ef,
        isQuestBarShowing: ex,
        isCurrentUserCallParticipant: ea
    });
    let eh = null != B && (null == (r = k.userStatus) ? void 0 : r.claimedAt) == null;
    if ((!eh && (eC || ef || ex)) || (!eh && !ea)) return null;
    let eg = (0, x.il)(k),
        eL = (0, l.jsx)(I.Z, {
            className: w.rewardTile,
            autoplay: G,
            quest: k,
            questContent: v.jn.QUEST_LIVE_STREAM,
            location: O.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: v.jn.QUEST_LIVE_STREAM
        });
    return (0, l.jsxs)('div', {
        className: i()(w.wrapper, { [w.wrapperAccepted]: ej }),
        onFocus: K,
        onMouseEnter: K,
        onBlur: X,
        onMouseLeave: X,
        children: [
            !ej &&
                (0, l.jsxs)('div', {
                    className: w.rewardTileWrapper,
                    children: [
                        eL,
                        (0, l.jsx)(Z.Z, {
                            bgOpacity: 0.32,
                            className: w.promotedTag
                        })
                    ]
                }),
            (0, l.jsxs)('div', {
                className: w.content,
                children: [
                    (0, l.jsxs)('div', {
                        className: w.heading,
                        children: [
                            ej && eu
                                ? eL
                                : (0, l.jsx)('img', {
                                      className: w.gameTile,
                                      alt: k.config.messages.gameTitle,
                                      src: (0, L.fh)(k, L.eC.GAME_TILE, Y).url
                                  }),
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: w.headingWithSubmenu,
                                        children: [
                                            (0, l.jsx)(c.X6q, {
                                                className: w.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: eu
                                                    ? (0, x.AV)({
                                                          quest: k,
                                                          taskDetails: eg
                                                      })
                                                    : D.intl.formatToPlainString(D.t.EQa7oq, { questName: k.config.messages.questName })
                                            }),
                                            (0, l.jsx)(M.r, {
                                                questContent: v.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
                                                quest: k,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null == (T = k.userStatus) ? void 0 : T.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        c.P3F,
                                                        z(V({}, e), {
                                                            className: w.submenuWrapper,
                                                            'aria-label': D.intl.string(D.t.DEoVWV),
                                                            children: (0, l.jsx)(c.xhG, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: w.submenuIcon
                                                            })
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(c.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: e_ ? D.intl.formatToPlainString(D.t.APddvL, { expirationDate: ed }) : D.intl.formatToPlainString(D.t['pX+fmp'], { expirationDate: ec })
                                    })
                                ]
                            })
                        ]
                    }),
                    ej &&
                        !e_ &&
                        !eu &&
                        (0, l.jsx)(U.Z, {
                            autoplay: G,
                            quest: k,
                            questContent: v.jn.QUEST_LIVE_STREAM,
                            taskDetails: eg,
                            location: O.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: v.jn.QUEST_LIVE_STREAM
                        }),
                    (0, l.jsxs)('div', {
                        className: w.ctas,
                        children: [
                            !ej &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(a.zx, {
                                            className: w.cta,
                                            color: a.zx.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: a.zx.Sizes.SMALL,
                                            onClick: em,
                                            children: D.intl.string(D.t.LLLLPD)
                                        }),
                                        (0, l.jsx)(a.zx, {
                                            className: w.cta,
                                            color: a.zx.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: eE,
                                            size: a.zx.Sizes.SMALL,
                                            submitting: eo,
                                            children: D.intl.string(D.t.l7E81t)
                                        })
                                    ]
                                }),
                            ej &&
                                !e_ &&
                                eu &&
                                (0, l.jsx)(R.Z, {
                                    color: c.TVs.colors.BG_BRAND,
                                    quest: k
                                }),
                            ej &&
                                !e_ &&
                                !eu &&
                                (0, l.jsx)(a.zx, {
                                    className: w.cta,
                                    color: a.zx.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: eS,
                                    size: a.zx.Sizes.SMALL,
                                    children: D.intl.string(D.t.VN1Ajo)
                                }),
                            e_ &&
                                (0, l.jsx)(a.zx, {
                                    className: w.cta,
                                    color: a.zx.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: eT,
                                    size: a.zx.Sizes.SMALL,
                                    children: eA
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
function B(e) {
    let t = s.useContext(T.h9),
        n = (0, u.e7)([C.Z], () => null != C.Z.questEnrollmentBlockedUntil, []),
        r = (0, u.e7)([C.Z], () => C.Z.quests),
        i = s.useMemo(() => (0, x.MM)(r, O.Lv), [r]),
        o = (0, u.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]),
        a = (0, u.e7)(
            [A.Z],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let i of e) {
                              var l, s, r;
                              if (i.type === P.fO.STREAM) {
                                  let e = null != (s = (0, S.Um)(i.stream, n)) ? s : null,
                                      r = (0, x.ZZ)(t, e);
                                  if (null != r && (null == (l = r.userStatus) ? void 0 : l.claimedAt) == null) return r;
                              }
                              for (let l of e)
                                  if (!(0, P.I)(l))
                                      for (let e of n.getActivities(l.user.id)) {
                                          let n = (0, x.ZZ)(t, e);
                                          if (null != n && (null == (r = n.userStatus) ? void 0 : r.claimedAt) == null) return n;
                                      }
                          }
                          return null;
                      })(o, i, A.Z),
            [o, i, e.previewQuest]
        );
    return null == a || n
        ? null
        : (0, l.jsx)(b.A, {
              questOrQuests: a,
              overrideVisibility: !t,
              questContent: v.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(k, z(V({}, e), { quest: a }))
          });
}
let H = function (e) {
    let t = (0, u.e7)([p.default], () => p.default.getCurrentUser());
    return (0, u.e7)([d.Z], () => ((null == t ? void 0 : t.id) == null ? null : d.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, l.jsx)(B, V({}, e)) : null;
};
