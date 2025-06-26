n.d(t, { Z: () => z }), n(388685);
var l = n(255367),
    s = n(73800),
    r = n(120356),
    i = n.n(r),
    u = n(442837),
    o = n(780384),
    a = n(481060),
    c = n(358221),
    d = n(594190),
    E = n(687516),
    S = n(210887),
    T = n(937995),
    m = n(158776),
    A = n(594174),
    j = n(617136),
    _ = n(272008),
    f = n(113434),
    p = n(569984),
    C = n(497505),
    x = n(918701),
    v = n(5881),
    L = n(373370),
    g = n(475595),
    h = n(566078),
    b = n(602667),
    Q = n(340100),
    R = n(611855),
    Z = n(644646),
    N = n(670638),
    M = n(667105),
    q = n(860151),
    U = n(341907),
    I = n(46140),
    O = n(981631),
    k = n(354459),
    y = n(388032),
    P = n(45772);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
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
function w(e) {
    var t, n, r, T;
    let { channelId: b, quest: w, previewQuest: z, isParticipatingOverride: B } = e,
        H = (0, j.O5)(),
        [W, G] = s.useState(!1),
        F = s.useCallback(() => G(!0), []),
        K = s.useCallback(() => G(!1), []),
        $ = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
        J = (0, u.e7)([S.Z], () => S.Z.getState().theme),
        X = (0, o.wj)(J) ? O.BRd.DARK : O.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: Y, isQuestInQuestBar: ee } = (0, u.cj)(
            [m.Z, c.Z, p.Z],
            () => {
                var e;
                let t = c.Z.getParticipants(b),
                    n =
                        null != w &&
                        null != $ &&
                        ((e = m.Z),
                        t.some((t) => {
                            if (t.type !== k.fO.STREAM || t.user.id !== $.id) return !1;
                            let n = (0, E.Um)(t.stream, e);
                            return null != n && (0, x._D)(n, w);
                        })),
                    l = (0, x.PM)(p.Z.quests, p.Z.questToDeliverForPlacement, C.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: n,
                    isQuestInQuestBar: (null == l ? void 0 : l.id) === (null == w ? void 0 : w.id)
                };
            },
            [b, $, w]
        ),
        et = null != w ? h.r.build(w.config) : null,
        en = null == et ? void 0 : et.application.id,
        el = (0, u.e7)(
            [d.ZP, m.Z],
            () => {
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, x.$H)(w) && e.includes(en)) return !0;
                let t = null != $ ? m.Z.findActivity($.id, (e) => e.type !== O.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, x.$J)(w) && (0, x._D)(t, w));
            },
            [w, en, $]
        ),
        es = !0 === B || Y || el,
        er = (0, u.e7)([p.Z], () => null != w && p.Z.isEnrolling(w.id), [w]),
        ei = (0, u.e7)([c.Z], () => ((null == $ ? void 0 : $.id) == null ? null : c.Z.getParticipant(b, $.id)) != null, [b, $]),
        eu = (0, f.B6)(null == w ? void 0 : w.config.expiresAt),
        eo = (0, f.B6)(null == et ? void 0 : et.rewardsExpireAt),
        ea = s.useCallback(() => {
            (0, _.AH)(w.id, {
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: j.jZ.ACCEPT_QUEST,
                sourceQuestContent: C.jn.QUEST_LIVE_STREAM
            });
        }, [w]),
        ec = s.useCallback(() => {
            H({
                questId: w.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: j.jZ.TRACK_PROGRESS,
                sourceQuestContent: C.jn.QUEST_LIVE_STREAM
            }),
                (0, U.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: w.id
                });
        }, [w, H]),
        ed = s.useCallback(() => {
            H({
                questId: w.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: j.jZ.LEARN_MORE,
                sourceQuestContent: C.jn.QUEST_LIVE_STREAM
            }),
                (0, U.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: w.id
                });
        }, [w, H]),
        eE = (0, M.hf)({
            quest: w,
            questContent: C.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: C.jn.QUEST_LIVE_STREAM
        }),
        eS = (0, L.up)(I.dr.QUEST_CHANNEL_CALL_HEADER),
        eT = s.useMemo(
            () =>
                (0, v.T)({
                    quest: w,
                    location: I.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [w]
        ),
        em = (0, f.tP)(w),
        eA = (null == (t = w.userStatus) ? void 0 : t.enrolledAt) != null,
        ej = (null == (n = w.userStatus) ? void 0 : n.completedAt) != null,
        e_ = null != w.userStatus && (0, x.zE)(w.userStatus, C.jn.QUEST_LIVE_STREAM),
        ef = null != w.userStatus && (0, x.zE)(w.userStatus, C.jn.QUEST_BAR),
        ep = ee && !ef;
    eT.info({
        isQuestCallHeaderDismissed: e_,
        isQuestExpired: em,
        isQuestBarShowing: ep,
        isCurrentUserCallParticipant: ei
    });
    let eC = null != z && (null == (r = w.userStatus) ? void 0 : r.claimedAt) == null;
    if ((!eC && (e_ || em || ep)) || (!eC && !ei)) return null;
    let ex = (0, x.il)(w),
        ev = (0, l.jsx)(Z.Z, {
            className: P.rewardTile,
            autoplay: W,
            quest: w,
            questContent: C.jn.QUEST_LIVE_STREAM,
            location: I.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: C.jn.QUEST_LIVE_STREAM
        });
    return (0, l.jsxs)('div', {
        className: i()(P.wrapper, { [P.wrapperAccepted]: eA }),
        onFocus: F,
        onMouseEnter: F,
        onBlur: K,
        onMouseLeave: K,
        children: [
            !eA &&
                (0, l.jsxs)('div', {
                    className: P.rewardTileWrapper,
                    children: [
                        ev,
                        (0, l.jsx)(R.Z, {
                            bgOpacity: 0.32,
                            className: P.promotedTag
                        })
                    ]
                }),
            (0, l.jsxs)('div', {
                className: P.content,
                children: [
                    (0, l.jsxs)('div', {
                        className: P.heading,
                        children: [
                            eA && es
                                ? ev
                                : (0, l.jsx)('img', {
                                      className: P.gameTile,
                                      alt: w.config.messages.gameTitle,
                                      src: (0, g.fh)(w, g.eC.GAME_TILE, X).url
                                  }),
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: P.headingWithSubmenu,
                                        children: [
                                            (0, l.jsx)(a.X6q, {
                                                className: P.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: es
                                                    ? (0, x.AV)({
                                                          quest: w,
                                                          taskDetails: ex
                                                      })
                                                    : y.intl.formatToPlainString(y.t.EQa7oq, { questName: w.config.messages.questName })
                                            }),
                                            (0, l.jsx)(N.r, {
                                                questContent: C.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: C.jn.QUEST_LIVE_STREAM,
                                                quest: w,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null == (T = w.userStatus) ? void 0 : T.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        a.P3F,
                                                        V(D({}, e), {
                                                            className: P.submenuWrapper,
                                                            'aria-label': y.intl.string(y.t.DEoVWV),
                                                            children: (0, l.jsx)(a.xhG, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: P.submenuIcon
                                                            })
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(a.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: ej ? y.intl.formatToPlainString(y.t.APddvL, { expirationDate: eo }) : y.intl.formatToPlainString(y.t['pX+fmp'], { expirationDate: eu })
                                    })
                                ]
                            })
                        ]
                    }),
                    eA &&
                        !ej &&
                        !es &&
                        (0, l.jsx)(q.Z, {
                            autoplay: W,
                            quest: w,
                            questContent: C.jn.QUEST_LIVE_STREAM,
                            taskDetails: ex,
                            location: I.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: C.jn.QUEST_LIVE_STREAM
                        }),
                    (0, l.jsxs)('div', {
                        className: P.ctas,
                        children: [
                            !eA &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(a.zxk, {
                                            className: P.cta,
                                            color: a.zxk.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: a.zxk.Sizes.SMALL,
                                            onClick: ed,
                                            children: y.intl.string(y.t.LLLLPD)
                                        }),
                                        (0, l.jsx)(a.zxk, {
                                            className: P.cta,
                                            color: a.zxk.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: ea,
                                            size: a.zxk.Sizes.SMALL,
                                            submitting: er,
                                            children: y.intl.string(y.t.l7E81t)
                                        })
                                    ]
                                }),
                            eA &&
                                !ej &&
                                es &&
                                (0, l.jsx)(Q.Z, {
                                    color: a.TVs.colors.BG_BRAND,
                                    quest: w
                                }),
                            eA &&
                                !ej &&
                                !es &&
                                (0, l.jsx)(a.zxk, {
                                    className: P.cta,
                                    color: a.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ec,
                                    size: a.zxk.Sizes.SMALL,
                                    children: y.intl.string(y.t.VN1Ajo)
                                }),
                            ej &&
                                (0, l.jsx)(a.zxk, {
                                    className: P.cta,
                                    color: a.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: eE,
                                    size: a.zxk.Sizes.SMALL,
                                    children: eS
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
let z = function (e) {
    let t = s.useContext(T.h9),
        n = (0, u.e7)([p.Z], () => null != p.Z.questEnrollmentBlockedUntil, []),
        r = (0, u.e7)([c.Z, m.Z, p.Z], () => {
            let t = c.Z.getParticipants(e.channelId),
                n = (0, x.MM)(p.Z.quests, I.Lv);
            return null != e.previewQuest
                ? e.previewQuest
                : (function (e, t, n) {
                      for (let i of e) {
                          var l, s, r;
                          if (i.type === k.fO.STREAM) {
                              let e = null != (s = (0, E.Um)(i.stream, n)) ? s : null,
                                  r = (0, x.ZZ)(t, e);
                              if (null != r && (null == (l = r.userStatus) ? void 0 : l.claimedAt) == null) return r;
                          }
                          for (let l of e)
                              if (!(0, k.I)(l))
                                  for (let e of n.getActivities(l.user.id)) {
                                      let n = (0, x.ZZ)(t, e);
                                      if (null != n && (null == (r = n.userStatus) ? void 0 : r.claimedAt) == null && ((0, x.Nj)({ quest: n }) || (0, x.$J)(n))) return n;
                                  }
                      }
                      return null;
                  })(t, n, m.Z);
        });
    return null == r || n
        ? null
        : (0, l.jsx)(b.A, {
              questOrQuests: r,
              overrideVisibility: !t,
              questContent: C.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: C.jn.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(w, V(D({}, e), { quest: r }))
          });
};
