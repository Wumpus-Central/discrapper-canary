l.d(t, { Z: () => B }), l(388685);
var n = l(255367),
    r = l(73800),
    s = l(120356),
    i = l.n(s),
    a = l(442837),
    o = l(780384),
    u = l(481060),
    c = l(358221),
    d = l(594190),
    m = l(687516),
    E = l(210887),
    p = l(937995),
    A = l(158776),
    S = l(594174),
    f = l(617136),
    j = l(272008),
    T = l(113434),
    x = l(569984),
    C = l(497505),
    _ = l(918701),
    v = l(5881),
    h = l(373370),
    g = l(475595),
    b = l(566078),
    L = l(602667),
    Z = l(340100),
    N = l(611855),
    R = l(644646),
    q = l(670638),
    O = l(667105),
    k = l(860151),
    y = l(341907),
    P = l(46140),
    M = l(981631),
    D = l(354459),
    Q = l(388032),
    U = l(45772);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
function z(e) {
    var t, l, s, p;
    let { channelId: L, quest: z, previewQuest: B, isParticipatingOverride: V } = e,
        H = (0, f.O5)(),
        [W, G] = r.useState(!1),
        F = r.useCallback(() => G(!0), []),
        K = r.useCallback(() => G(!1), []),
        $ = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        J = (0, a.e7)([E.Z], () => E.Z.getState().theme),
        X = (0, o.wj)(J) ? M.BRd.DARK : M.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: Y, isQuestInQuestBar: ee } = (0, a.cj)(
            [A.Z, c.Z, x.Z],
            () => {
                var e;
                let t = c.Z.getParticipants(L),
                    l =
                        null != z &&
                        null != $ &&
                        ((e = A.Z),
                        t.some((t) => {
                            if (t.type !== D.fO.STREAM || t.user.id !== $.id) return !1;
                            let l = (0, m.Um)(t.stream, e);
                            return null != l && (0, _._D)(l, z);
                        })),
                    n = (0, _.PM)(x.Z.quests, x.Z.questToDeliverForPlacement, C.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: l,
                    isQuestInQuestBar: (null == n ? void 0 : n.id) === (null == z ? void 0 : z.id)
                };
            },
            [L, $, z]
        ),
        et = null != z ? b.r.build(z.config) : null,
        el = null == et ? void 0 : et.application.id,
        en = (0, a.e7)(
            [d.ZP, A.Z],
            () => {
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, _.$H)(z) && e.includes(el)) return !0;
                let t = null != $ ? A.Z.findActivity($.id, (e) => e.type !== M.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, _.$J)(z) && (0, _._D)(t, z));
            },
            [z, el, $]
        ),
        er = !0 === V || Y || en,
        es = (0, a.e7)([x.Z], () => null != z && x.Z.isEnrolling(z.id), [z]),
        ei = (0, a.e7)([c.Z], () => ((null == $ ? void 0 : $.id) == null ? null : c.Z.getParticipant(L, $.id)) != null, [L, $]),
        ea = (0, T.B6)(null == z ? void 0 : z.config.expiresAt),
        eo = (0, T.B6)(null == et ? void 0 : et.rewardsExpireAt),
        eu = r.useCallback(() => {
            (0, j.AH)(z.id, {
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: f.jZ.ACCEPT_QUEST
            });
        }, [z]),
        ec = r.useCallback(() => {
            H({
                questId: z.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: f.jZ.TRACK_PROGRESS
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: z.id
                });
        }, [z, H]),
        ed = r.useCallback(() => {
            H({
                questId: z.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: f.jZ.LEARN_MORE
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: z.id
                });
        }, [z, H]),
        em = (0, O.hf)({
            quest: z,
            location: C.jn.QUEST_LIVE_STREAM
        }),
        eE = (0, h.up)(P.dr.QUEST_CHANNEL_CALL_HEADER),
        ep = r.useMemo(
            () =>
                (0, v.T)({
                    quest: z,
                    location: P.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [z]
        ),
        eA = (0, T.tP)(z),
        eS = (null == (t = z.userStatus) ? void 0 : t.enrolledAt) != null,
        ef = (null == (l = z.userStatus) ? void 0 : l.completedAt) != null,
        ej = null != z.userStatus && (0, _.zE)(z.userStatus, C.jn.QUEST_LIVE_STREAM),
        eT = null != z.userStatus && (0, _.zE)(z.userStatus, C.jn.QUEST_BAR),
        ex = ee && !eT;
    ep.info({
        isQuestCallHeaderDismissed: ej,
        isQuestExpired: eA,
        isQuestBarShowing: ex,
        isCurrentUserCallParticipant: ei
    });
    let eC = null != B && (null == (s = z.userStatus) ? void 0 : s.claimedAt) == null;
    if ((!eC && (ej || eA || ex)) || (!eC && !ei)) return null;
    let e_ = (0, _.il)(z),
        ev = (0, n.jsx)(R.Z, {
            className: U.rewardTile,
            autoplay: W,
            quest: z,
            questContent: C.jn.QUEST_LIVE_STREAM,
            location: P.dr.QUEST_CHANNEL_CALL_HEADER
        });
    return (0, n.jsxs)('div', {
        className: i()(U.wrapper, { [U.wrapperAccepted]: eS }),
        onFocus: F,
        onMouseEnter: F,
        onBlur: K,
        onMouseLeave: K,
        children: [
            !eS &&
                (0, n.jsxs)('div', {
                    className: U.rewardTileWrapper,
                    children: [
                        ev,
                        (0, n.jsx)(N.Z, {
                            bgOpacity: 0.32,
                            className: U.promotedTag
                        })
                    ]
                }),
            (0, n.jsxs)('div', {
                className: U.content,
                children: [
                    (0, n.jsxs)('div', {
                        className: U.heading,
                        children: [
                            eS && er
                                ? ev
                                : (0, n.jsx)('img', {
                                      className: U.gameTile,
                                      alt: z.config.messages.gameTitle,
                                      src: (0, g.fh)(z, g.eC.GAME_TILE, X).url
                                  }),
                            (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: U.headingWithSubmenu,
                                        children: [
                                            (0, n.jsx)(u.X6q, {
                                                className: U.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: er
                                                    ? (0, _.AV)({
                                                          quest: z,
                                                          taskDetails: e_
                                                      })
                                                    : Q.intl.formatToPlainString(Q.t.EQa7oq, { questName: z.config.messages.questName })
                                            }),
                                            (0, n.jsx)(q.r, {
                                                questContent: C.jn.QUEST_LIVE_STREAM,
                                                quest: z,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null == (p = z.userStatus) ? void 0 : p.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, n.jsx)(
                                                        u.P3F,
                                                        I(w({}, e), {
                                                            className: U.submenuWrapper,
                                                            'aria-label': Q.intl.string(Q.t.DEoVWV),
                                                            children: (0, n.jsx)(u.xhG, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: U.submenuIcon
                                                            })
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(u.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: ef ? Q.intl.formatToPlainString(Q.t.APddvL, { expirationDate: eo }) : Q.intl.formatToPlainString(Q.t['pX+fmp'], { expirationDate: ea })
                                    })
                                ]
                            })
                        ]
                    }),
                    eS &&
                        !ef &&
                        !er &&
                        (0, n.jsx)(k.Z, {
                            autoplay: W,
                            quest: z,
                            questContent: C.jn.QUEST_LIVE_STREAM,
                            taskDetails: e_,
                            location: P.dr.QUEST_CHANNEL_CALL_HEADER
                        }),
                    (0, n.jsxs)('div', {
                        className: U.ctas,
                        children: [
                            !eS &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(u.zxk, {
                                            className: U.cta,
                                            color: u.zxk.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: u.zxk.Sizes.SMALL,
                                            onClick: ed,
                                            children: Q.intl.string(Q.t.LLLLPD)
                                        }),
                                        (0, n.jsx)(u.zxk, {
                                            className: U.cta,
                                            color: u.zxk.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: eu,
                                            size: u.zxk.Sizes.SMALL,
                                            submitting: es,
                                            children: Q.intl.string(Q.t.l7E81t)
                                        })
                                    ]
                                }),
                            eS &&
                                !ef &&
                                er &&
                                (0, n.jsx)(Z.Z, {
                                    color: u.TVs.colors.BG_BRAND,
                                    quest: z
                                }),
                            eS &&
                                !ef &&
                                !er &&
                                (0, n.jsx)(u.zxk, {
                                    className: U.cta,
                                    color: u.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ec,
                                    size: u.zxk.Sizes.SMALL,
                                    children: Q.intl.string(Q.t.VN1Ajo)
                                }),
                            ef &&
                                (0, n.jsx)(u.zxk, {
                                    className: U.cta,
                                    color: u.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: em,
                                    size: u.zxk.Sizes.SMALL,
                                    children: eE
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
let B = function (e) {
    let t = r.useContext(p.h9),
        l = (0, a.e7)([x.Z], () => null != x.Z.questEnrollmentBlockedUntil, []),
        s = (0, a.e7)([c.Z, A.Z, x.Z], () => {
            let t = c.Z.getParticipants(e.channelId),
                l = (0, _.MM)(x.Z.quests, P.Lv);
            return null != e.previewQuest
                ? e.previewQuest
                : (function (e, t, l) {
                      for (let i of e) {
                          var n, r, s;
                          if (i.type === D.fO.STREAM) {
                              let e = null != (r = (0, m.Um)(i.stream, l)) ? r : null,
                                  s = (0, _.ZZ)(t, e);
                              if (null != s && (null == (n = s.userStatus) ? void 0 : n.claimedAt) == null) return s;
                          }
                          for (let n of e)
                              if (!(0, D.I)(n))
                                  for (let e of l.getActivities(n.user.id)) {
                                      let l = (0, _.ZZ)(t, e);
                                      if (null != l && (null == (s = l.userStatus) ? void 0 : s.claimedAt) == null && ((0, _.Nj)({ quest: l }) || (0, _.$J)(l))) return l;
                                  }
                      }
                      return null;
                  })(t, l, A.Z);
        });
    return null == s || l
        ? null
        : (0, n.jsx)(L.A, {
              questOrQuests: s,
              overrideVisibility: !t,
              questContent: C.jn.QUEST_LIVE_STREAM,
              children: () => (0, n.jsx)(z, I(w({}, e), { quest: s }))
          });
};
