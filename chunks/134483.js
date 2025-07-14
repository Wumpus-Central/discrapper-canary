(n.d(t, { Z: () => B }), n(388685));
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
    T = n(210887),
    m = n(937995),
    A = n(158776),
    j = n(594174),
    _ = n(617136),
    f = n(272008),
    p = n(113434),
    C = n(569984),
    x = n(497505),
    v = n(918701),
    L = n(5881),
    g = n(373370),
    h = n(475595),
    b = n(566078),
    Q = n(602667),
    R = n(340100),
    Z = n(611855),
    N = n(644646),
    M = n(670638),
    q = n(667105),
    U = n(860151),
    I = n(341907),
    O = n(46140),
    y = n(981631),
    P = n(354459),
    D = n(388032),
    V = n(45772);
function w(e) {
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
    var t, n, r, m;
    let { channelId: Q, quest: k, previewQuest: B, isParticipatingOverride: H } = e,
        W = (0, _.O5)(),
        [G, F] = s.useState(!1),
        K = s.useCallback(() => F(!0), []),
        X = s.useCallback(() => F(!1), []),
        $ = (0, u.e7)([j.default], () => j.default.getCurrentUser()),
        J = (0, u.e7)([T.Z], () => T.Z.getState().theme),
        Y = (0, o.wj)(J) ? y.BRd.DARK : y.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: ee, isQuestInQuestBar: et } = (0, u.cj)(
            [A.Z, d.Z, C.Z],
            () => {
                var e;
                let t = d.Z.getParticipants(Q),
                    n =
                        null != k &&
                        null != $ &&
                        ((e = A.Z),
                        t.some((t) => {
                            if (t.type !== P.fO.STREAM || t.user.id !== $.id) return !1;
                            let n = (0, S.Um)(t.stream, e);
                            return null != n && (0, v._D)(n, k);
                        })),
                    l = (0, v.PM)(C.Z.quests, C.Z.questToDeliverForPlacement, x.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: n,
                    isQuestInQuestBar: (null == l ? void 0 : l.id) === (null == k ? void 0 : k.id)
                };
            },
            [Q, $, k]
        ),
        en = null != k ? b.r.build(k.config) : null,
        el = null == en ? void 0 : en.application.id,
        es = (0, u.e7)(
            [E.ZP, A.Z],
            () => {
                let e = E.ZP.getRunningGames().map((e) => e.id);
                if ((0, v.$H)(k) && e.includes(el)) return !0;
                let t = null != $ ? A.Z.findActivity($.id, (e) => e.type !== y.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, v.$J)(k) && (0, v._D)(t, k));
            },
            [k, el, $]
        ),
        er = !0 === H || ee || es,
        ei = (0, u.e7)([C.Z], () => null != k && C.Z.isEnrolling(k.id), [k]),
        eu = (0, u.e7)([d.Z], () => ((null == $ ? void 0 : $.id) == null ? null : d.Z.getParticipant(Q, $.id)) != null, [Q, $]),
        eo = (0, p.B6)(null == k ? void 0 : k.config.expiresAt),
        ea = (0, p.B6)(null == en ? void 0 : en.rewardsExpireAt),
        ec = s.useCallback(() => {
            (0, f.AH)(k.id, {
                questContent: x.jn.QUEST_LIVE_STREAM,
                questContentCTA: _.jZ.ACCEPT_QUEST,
                sourceQuestContent: x.jn.QUEST_LIVE_STREAM
            });
        }, [k]),
        ed = s.useCallback(() => {
            (W({
                questId: k.id,
                questContent: x.jn.QUEST_LIVE_STREAM,
                questContentCTA: _.jZ.TRACK_PROGRESS,
                sourceQuestContent: x.jn.QUEST_LIVE_STREAM
            }),
                (0, I.navigateToQuestHome)({
                    fromContent: x.jn.QUEST_LIVE_STREAM,
                    questId: k.id
                }));
        }, [k, W]),
        eE = s.useCallback(() => {
            (W({
                questId: k.id,
                questContent: x.jn.QUEST_LIVE_STREAM,
                questContentCTA: _.jZ.LEARN_MORE,
                sourceQuestContent: x.jn.QUEST_LIVE_STREAM
            }),
                (0, I.navigateToQuestHome)({
                    fromContent: x.jn.QUEST_LIVE_STREAM,
                    questId: k.id
                }));
        }, [k, W]),
        eS = (0, q.hf)({
            quest: k,
            questContent: x.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: x.jn.QUEST_LIVE_STREAM
        }),
        eT = (0, g.up)(O.dr.QUEST_CHANNEL_CALL_HEADER),
        em = s.useMemo(
            () =>
                (0, L.T)({
                    quest: k,
                    location: O.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [k]
        ),
        eA = (0, p.tP)(k),
        ej = (null == (t = k.userStatus) ? void 0 : t.enrolledAt) != null,
        e_ = (null == (n = k.userStatus) ? void 0 : n.completedAt) != null,
        ef = null != k.userStatus && (0, v.zE)(k.userStatus, x.jn.QUEST_LIVE_STREAM),
        ep = null != k.userStatus && (0, v.zE)(k.userStatus, x.jn.QUEST_BAR),
        eC = et && !ep;
    em.info({
        isQuestCallHeaderDismissed: ef,
        isQuestExpired: eA,
        isQuestBarShowing: eC,
        isCurrentUserCallParticipant: eu
    });
    let ex = null != B && (null == (r = k.userStatus) ? void 0 : r.claimedAt) == null;
    if ((!ex && (ef || eA || eC)) || (!ex && !eu)) return null;
    let ev = (0, v.il)(k),
        eL = (0, l.jsx)(N.Z, {
            className: V.rewardTile,
            autoplay: G,
            quest: k,
            questContent: x.jn.QUEST_LIVE_STREAM,
            location: O.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: x.jn.QUEST_LIVE_STREAM
        });
    return (0, l.jsxs)('div', {
        className: i()(V.wrapper, { [V.wrapperAccepted]: ej }),
        onFocus: K,
        onMouseEnter: K,
        onBlur: X,
        onMouseLeave: X,
        children: [
            !ej &&
                (0, l.jsxs)('div', {
                    className: V.rewardTileWrapper,
                    children: [
                        eL,
                        (0, l.jsx)(Z.Z, {
                            bgOpacity: 0.32,
                            className: V.promotedTag
                        })
                    ]
                }),
            (0, l.jsxs)('div', {
                className: V.content,
                children: [
                    (0, l.jsxs)('div', {
                        className: V.heading,
                        children: [
                            ej && er
                                ? eL
                                : (0, l.jsx)('img', {
                                      className: V.gameTile,
                                      alt: k.config.messages.gameTitle,
                                      src: (0, h.fh)(k, h.eC.GAME_TILE, Y).url
                                  }),
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: V.headingWithSubmenu,
                                        children: [
                                            (0, l.jsx)(c.X6q, {
                                                className: V.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: er
                                                    ? (0, v.AV)({
                                                          quest: k,
                                                          taskDetails: ev
                                                      })
                                                    : D.intl.formatToPlainString(D.t.EQa7oq, { questName: k.config.messages.questName })
                                            }),
                                            (0, l.jsx)(M.r, {
                                                questContent: x.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
                                                quest: k,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null == (m = k.userStatus) ? void 0 : m.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        c.P3F,
                                                        z(w({}, e), {
                                                            className: V.submenuWrapper,
                                                            'aria-label': D.intl.string(D.t.DEoVWV),
                                                            children: (0, l.jsx)(c.xhG, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: V.submenuIcon
                                                            })
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(c.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: e_ ? D.intl.formatToPlainString(D.t.APddvL, { expirationDate: ea }) : D.intl.formatToPlainString(D.t['pX+fmp'], { expirationDate: eo })
                                    })
                                ]
                            })
                        ]
                    }),
                    ej &&
                        !e_ &&
                        !er &&
                        (0, l.jsx)(U.Z, {
                            autoplay: G,
                            quest: k,
                            questContent: x.jn.QUEST_LIVE_STREAM,
                            taskDetails: ev,
                            location: O.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: x.jn.QUEST_LIVE_STREAM
                        }),
                    (0, l.jsxs)('div', {
                        className: V.ctas,
                        children: [
                            !ej &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(a.zx, {
                                            className: V.cta,
                                            color: a.zx.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: a.zx.Sizes.SMALL,
                                            onClick: eE,
                                            children: D.intl.string(D.t.LLLLPD)
                                        }),
                                        (0, l.jsx)(a.zx, {
                                            className: V.cta,
                                            color: a.zx.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: ec,
                                            size: a.zx.Sizes.SMALL,
                                            submitting: ei,
                                            children: D.intl.string(D.t.l7E81t)
                                        })
                                    ]
                                }),
                            ej &&
                                !e_ &&
                                er &&
                                (0, l.jsx)(R.Z, {
                                    color: c.TVs.colors.BG_BRAND,
                                    quest: k
                                }),
                            ej &&
                                !e_ &&
                                !er &&
                                (0, l.jsx)(a.zx, {
                                    className: V.cta,
                                    color: a.zx.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ed,
                                    size: a.zx.Sizes.SMALL,
                                    children: D.intl.string(D.t.VN1Ajo)
                                }),
                            e_ &&
                                (0, l.jsx)(a.zx, {
                                    className: V.cta,
                                    color: a.zx.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: eS,
                                    size: a.zx.Sizes.SMALL,
                                    children: eT
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
let B = function (e) {
    let t = s.useContext(m.h9),
        n = (0, u.e7)([C.Z], () => null != C.Z.questEnrollmentBlockedUntil, []),
        r = (0, u.e7)([d.Z, A.Z, C.Z], () => {
            let t = d.Z.getParticipants(e.channelId),
                n = (0, v.MM)(C.Z.quests, O.Lv);
            return null != e.previewQuest
                ? e.previewQuest
                : (function (e, t, n) {
                      for (let i of e) {
                          var l, s, r;
                          if (i.type === P.fO.STREAM) {
                              let e = null != (s = (0, S.Um)(i.stream, n)) ? s : null,
                                  r = (0, v.ZZ)(t, e);
                              if (null != r && (null == (l = r.userStatus) ? void 0 : l.claimedAt) == null) return r;
                          }
                          for (let l of e)
                              if (!(0, P.I)(l))
                                  for (let e of n.getActivities(l.user.id)) {
                                      let n = (0, v.ZZ)(t, e);
                                      if (null != n && (null == (r = n.userStatus) ? void 0 : r.claimedAt) == null) return n;
                                  }
                      }
                      return null;
                  })(t, n, A.Z);
        });
    return null == r || n
        ? null
        : (0, l.jsx)(Q.A, {
              questOrQuests: r,
              overrideVisibility: !t,
              questContent: x.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(k, z(w({}, e), { quest: r }))
          });
};
