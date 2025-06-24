n.d(t, { Z: () => z }), n(388685);
var l = n(255367),
    s = n(73800),
    r = n(120356),
    i = n.n(r),
    o = n(442837),
    u = n(780384),
    a = n(481060),
    c = n(358221),
    d = n(594190),
    E = n(687516),
    S = n(210887),
    m = n(937995),
    T = n(158776),
    A = n(594174),
    j = n(617136),
    _ = n(272008),
    p = n(113434),
    f = n(569984),
    C = n(497505),
    x = n(918701),
    v = n(5881),
    L = n(373370),
    h = n(475595),
    g = n(566078),
    b = n(602667),
    R = n(340100),
    Q = n(611855),
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
function w(e, t) {
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
function V(e) {
    var t, n, r, m;
    let { channelId: b, quest: V, previewQuest: z, isParticipatingOverride: B } = e,
        H = (0, j.O5)(),
        [W, G] = s.useState(!1),
        F = s.useCallback(() => G(!0), []),
        K = s.useCallback(() => G(!1), []),
        $ = (0, o.e7)([A.default], () => A.default.getCurrentUser()),
        J = (0, o.e7)([S.Z], () => S.Z.getState().theme),
        X = (0, u.wj)(J) ? O.BRd.DARK : O.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: Y, isQuestInQuestBar: ee } = (0, o.cj)(
            [T.Z, c.Z, f.Z],
            () => {
                var e;
                let t = c.Z.getParticipants(b),
                    n =
                        null != V &&
                        null != $ &&
                        ((e = T.Z),
                        t.some((t) => {
                            if (t.type !== k.fO.STREAM || t.user.id !== $.id) return !1;
                            let n = (0, E.Um)(t.stream, e);
                            return null != n && (0, x._D)(n, V);
                        })),
                    l = (0, x.PM)(f.Z.quests, f.Z.questToDeliverForPlacement, C.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: n,
                    isQuestInQuestBar: (null == l ? void 0 : l.id) === (null == V ? void 0 : V.id)
                };
            },
            [b, $, V]
        ),
        et = null != V ? g.r.build(V.config) : null,
        en = null == et ? void 0 : et.application.id,
        el = (0, o.e7)(
            [d.ZP, T.Z],
            () => {
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, x.$H)(V) && e.includes(en)) return !0;
                let t = null != $ ? T.Z.findActivity($.id, (e) => e.type !== O.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, x.$J)(V) && (0, x._D)(t, V));
            },
            [V, en, $]
        ),
        es = !0 === B || Y || el,
        er = (0, o.e7)([f.Z], () => null != V && f.Z.isEnrolling(V.id), [V]),
        ei = (0, o.e7)([c.Z], () => ((null == $ ? void 0 : $.id) == null ? null : c.Z.getParticipant(b, $.id)) != null, [b, $]),
        eo = (0, p.B6)(null == V ? void 0 : V.config.expiresAt),
        eu = (0, p.B6)(null == et ? void 0 : et.rewardsExpireAt),
        ea = s.useCallback(() => {
            (0, _.AH)(V.id, {
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: j.jZ.ACCEPT_QUEST,
                sourceQuestContent: C.jn.QUEST_LIVE_STREAM
            });
        }, [V]),
        ec = s.useCallback(() => {
            H({
                questId: V.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: j.jZ.TRACK_PROGRESS,
                sourceQuestContent: C.jn.QUEST_LIVE_STREAM
            }),
                (0, U.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: V.id
                });
        }, [V, H]),
        ed = s.useCallback(() => {
            H({
                questId: V.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: j.jZ.LEARN_MORE,
                sourceQuestContent: C.jn.QUEST_LIVE_STREAM
            }),
                (0, U.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: V.id
                });
        }, [V, H]),
        eE = (0, M.hf)({
            quest: V,
            questContent: C.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: C.jn.QUEST_LIVE_STREAM
        }),
        eS = (0, L.up)(I.dr.QUEST_CHANNEL_CALL_HEADER),
        em = s.useMemo(
            () =>
                (0, v.T)({
                    quest: V,
                    location: I.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [V]
        ),
        eT = (0, p.tP)(V),
        eA = (null == (t = V.userStatus) ? void 0 : t.enrolledAt) != null,
        ej = (null == (n = V.userStatus) ? void 0 : n.completedAt) != null,
        e_ = null != V.userStatus && (0, x.zE)(V.userStatus, C.jn.QUEST_LIVE_STREAM),
        ep = null != V.userStatus && (0, x.zE)(V.userStatus, C.jn.QUEST_BAR),
        ef = ee && !ep;
    em.info({
        isQuestCallHeaderDismissed: e_,
        isQuestExpired: eT,
        isQuestBarShowing: ef,
        isCurrentUserCallParticipant: ei
    });
    let eC = null != z && (null == (r = V.userStatus) ? void 0 : r.claimedAt) == null;
    if ((!eC && (e_ || eT || ef)) || (!eC && !ei)) return null;
    let ex = (0, x.il)(V),
        ev = (0, l.jsx)(Z.Z, {
            className: P.rewardTile,
            autoplay: W,
            quest: V,
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
                        (0, l.jsx)(Q.Z, {
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
                                      alt: V.config.messages.gameTitle,
                                      src: (0, h.fh)(V, h.eC.GAME_TILE, X).url
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
                                                          quest: V,
                                                          taskDetails: ex
                                                      })
                                                    : y.intl.formatToPlainString(y.t.EQa7oq, { questName: V.config.messages.questName })
                                            }),
                                            (0, l.jsx)(N.r, {
                                                questContent: C.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: C.jn.QUEST_LIVE_STREAM,
                                                quest: V,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null == (m = V.userStatus) ? void 0 : m.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        a.P3F,
                                                        w(D({}, e), {
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
                                        children: ej ? y.intl.formatToPlainString(y.t.APddvL, { expirationDate: eu }) : y.intl.formatToPlainString(y.t['pX+fmp'], { expirationDate: eo })
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
                            quest: V,
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
                                (0, l.jsx)(R.Z, {
                                    color: a.TVs.colors.BG_BRAND,
                                    quest: V
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
    let t = s.useContext(m.h9),
        n = (0, o.e7)([f.Z], () => null != f.Z.questEnrollmentBlockedUntil, []),
        r = (0, o.e7)([c.Z, T.Z, f.Z], () => {
            let t = c.Z.getParticipants(e.channelId),
                n = (0, x.MM)(f.Z.quests, I.Lv);
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
                  })(t, n, T.Z);
        });
    return null == r || n
        ? null
        : (0, l.jsx)(b.A, {
              questOrQuests: r,
              overrideVisibility: !t,
              questContent: C.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: C.jn.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(V, w(D({}, e), { quest: r }))
          });
};
