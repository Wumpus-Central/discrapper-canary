l.d(t, { Z: () => z }), l(47120);
var n = l(200651),
    s = l(192379),
    r = l(120356),
    i = l.n(r),
    o = l(442837),
    u = l(780384),
    a = l(481060),
    c = l(358221),
    d = l(594190),
    m = l(687516),
    E = l(210887),
    S = l(937995),
    j = l(158776),
    p = l(594174),
    A = l(617136),
    f = l(272008),
    T = l(113434),
    x = l(569984),
    v = l(497505),
    h = l(918701),
    C = l(5881),
    _ = l(475595),
    g = l(566078),
    N = l(602667),
    L = l(340100),
    Z = l(611855),
    b = l(644646),
    R = l(670638),
    O = l(667105),
    q = l(860151),
    y = l(341907),
    P = l(46140),
    k = l(981631),
    I = l(354459),
    M = l(388032),
    D = l(883848);
function Q(e) {
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
function w(e, t) {
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
function U(e) {
    var t, l, r, S;
    let { channelId: N, quest: U, previewQuest: z, isParticipatingOverride: V } = e,
        W = (0, A.O5)(),
        [B, H] = s.useState(!1),
        G = s.useCallback(() => H(!0), []),
        F = s.useCallback(() => H(!1), []),
        K = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        $ = (0, o.e7)([E.Z], () => E.Z.getState().theme),
        J = (0, u.wj)($) ? k.BRd.DARK : k.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: X, isQuestInQuestBar: Y } = (0, o.cj)(
            [j.Z, c.Z, x.Z],
            () => {
                var e;
                let t = c.Z.getParticipants(N),
                    l =
                        null != U &&
                        null != K &&
                        ((e = j.Z),
                        t.some((t) => {
                            if (t.type !== I.fO.STREAM || t.user.id !== K.id) return !1;
                            let l = (0, m.Um)(t.stream, e);
                            return null != l && (0, h._D)(l, U);
                        })),
                    n = (0, h.PM)(x.Z.quests, x.Z.questToDeliverForPlacement, v.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: l,
                    isQuestInQuestBar: (null == n ? void 0 : n.id) === (null == U ? void 0 : U.id)
                };
            },
            [N, K, U]
        ),
        ee = null != U ? g.r.build(U.config) : null,
        et = null == ee ? void 0 : ee.application.id,
        el = (0, o.e7)(
            [d.ZP, j.Z],
            () => {
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, h.$H)(U) && e.includes(et)) return !0;
                let t = null != K ? j.Z.findActivity(K.id, (e) => e.type !== k.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, h.$J)(U) && (0, h._D)(t, U));
            },
            [U, et, K]
        ),
        en = !0 === V || X || el,
        es = (0, o.e7)([x.Z], () => null != U && x.Z.isEnrolling(U.id), [U]),
        er = (0, o.e7)([c.Z], () => ((null == K ? void 0 : K.id) == null ? null : c.Z.getParticipant(N, K.id)) != null, [N, K]),
        ei = (0, T.B6)(null == U ? void 0 : U.config.expiresAt),
        eo = (0, T.B6)(null == ee ? void 0 : ee.rewardsExpireAt),
        eu = s.useCallback(() => {
            (0, f.AH)(U.id, {
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: A.jZ.ACCEPT_QUEST
            });
        }, [U]),
        ea = s.useCallback(() => {
            W({
                questId: U.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: A.jZ.TRACK_PROGRESS
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: v.jn.QUEST_LIVE_STREAM,
                    questId: U.id
                });
        }, [U, W]),
        ec = s.useCallback(() => {
            W({
                questId: U.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: A.jZ.LEARN_MORE
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: v.jn.QUEST_LIVE_STREAM,
                    questId: U.id
                });
        }, [U, W]),
        ed = (0, O.hf)({
            quest: U,
            location: v.jn.QUEST_LIVE_STREAM
        }),
        em = s.useMemo(
            () =>
                (0, C.T)({
                    quest: U,
                    location: P.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [U]
        ),
        eE = (0, T.tP)(U),
        eS = (null === (t = U.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        ej = (null === (l = U.userStatus) || void 0 === l ? void 0 : l.completedAt) != null,
        ep = null != U.userStatus && (0, h.zE)(U.userStatus, v.jn.QUEST_LIVE_STREAM),
        eA = null != U.userStatus && (0, h.zE)(U.userStatus, v.jn.QUEST_BAR),
        ef = Y && !eA;
    em.info({
        isQuestCallHeaderDismissed: ep,
        isQuestExpired: eE,
        isQuestBarShowing: ef,
        isCurrentUserCallParticipant: er
    });
    let eT = null != z && (null === (r = U.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null;
    if ((!eT && (ep || eE || ef)) || (!eT && !er)) return null;
    let ex = (0, h.il)(U),
        ev = (0, n.jsx)(b.Z, {
            className: D.rewardTile,
            autoplay: B,
            quest: U,
            questContent: v.jn.QUEST_LIVE_STREAM,
            location: P.dr.QUEST_CHANNEL_CALL_HEADER
        });
    return (0, n.jsxs)('div', {
        className: i()(D.wrapper, { [D.wrapperAccepted]: eS }),
        onFocus: G,
        onMouseEnter: G,
        onBlur: F,
        onMouseLeave: F,
        children: [
            !eS &&
                (0, n.jsxs)('div', {
                    className: D.rewardTileWrapper,
                    children: [
                        ev,
                        (0, n.jsx)(Z.Z, {
                            bgOpacity: 0.32,
                            className: D.promotedTag
                        })
                    ]
                }),
            (0, n.jsxs)('div', {
                className: D.content,
                children: [
                    (0, n.jsxs)('div', {
                        className: D.heading,
                        children: [
                            eS && en
                                ? ev
                                : (0, n.jsx)('img', {
                                      className: D.gameTile,
                                      alt: U.config.messages.gameTitle,
                                      src: (0, _.fh)(U, _.eC.GAME_TILE, J).url
                                  }),
                            (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: D.headingWithSubmenu,
                                        children: [
                                            (0, n.jsx)(a.X6q, {
                                                className: D.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: en
                                                    ? (0, h.AV)({
                                                          quest: U,
                                                          taskDetails: ex
                                                      })
                                                    : M.NW.formatToPlainString(M.t.EQa7oq, { questName: U.config.messages.questName })
                                            }),
                                            (0, n.jsx)(R.r, {
                                                questContent: v.jn.QUEST_LIVE_STREAM,
                                                quest: U,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null === (S = U.userStatus) || void 0 === S ? void 0 : S.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, n.jsx)(
                                                        a.P3F,
                                                        w(Q({}, e), {
                                                            className: D.submenuWrapper,
                                                            'aria-label': M.NW.string(M.t.DEoVWV),
                                                            children: (0, n.jsx)(a.xhG, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: D.submenuIcon
                                                            })
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(a.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: ej ? M.NW.formatToPlainString(M.t.APddvL, { expirationDate: eo }) : M.NW.formatToPlainString(M.t['pX+fmp'], { expirationDate: ei })
                                    })
                                ]
                            })
                        ]
                    }),
                    eS &&
                        !ej &&
                        !en &&
                        (0, n.jsx)(q.Z, {
                            autoplay: B,
                            quest: U,
                            questContent: v.jn.QUEST_LIVE_STREAM,
                            taskDetails: ex,
                            location: P.dr.QUEST_CHANNEL_CALL_HEADER
                        }),
                    (0, n.jsxs)('div', {
                        className: D.ctas,
                        children: [
                            !eS &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(a.zxk, {
                                            className: D.cta,
                                            color: a.zxk.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: a.zxk.Sizes.SMALL,
                                            onClick: ec,
                                            children: M.NW.string(M.t.LLLLPD)
                                        }),
                                        (0, n.jsx)(a.zxk, {
                                            className: D.cta,
                                            color: a.zxk.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: eu,
                                            size: a.zxk.Sizes.SMALL,
                                            submitting: es,
                                            children: M.NW.string(M.t.l7E81t)
                                        })
                                    ]
                                }),
                            eS &&
                                !ej &&
                                en &&
                                (0, n.jsx)(L.Z, {
                                    color: a.TVs.colors.BG_BRAND,
                                    quest: U
                                }),
                            eS &&
                                !ej &&
                                !en &&
                                (0, n.jsx)(a.zxk, {
                                    className: D.cta,
                                    color: a.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ea,
                                    size: a.zxk.Sizes.SMALL,
                                    children: M.NW.string(M.t.VN1Ajo)
                                }),
                            ej &&
                                (0, n.jsx)(a.zxk, {
                                    className: D.cta,
                                    color: a.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ed,
                                    size: a.zxk.Sizes.SMALL,
                                    children: M.NW.string(M.t.cfY4PD)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
let z = function (e) {
    let t = s.useContext(S.h9),
        l = (0, o.e7)([c.Z, j.Z, x.Z], () => {
            let t = c.Z.getParticipants(e.channelId);
            return null != e.previewQuest
                ? e.previewQuest
                : (function (e, t, l) {
                      for (let i of e) {
                          var n, s, r;
                          if (i.type === I.fO.STREAM) {
                              let e = null !== (s = (0, m.Um)(i.stream, l)) && void 0 !== s ? s : null,
                                  r = (0, h.ZZ)(t, e);
                              if (null != r && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null) return r;
                          }
                          for (let n of e)
                              if (!(0, I.I)(n))
                                  for (let e of l.getActivities(n.user.id)) {
                                      let l = (0, h.ZZ)(t, e);
                                      if (null != l && (null === (r = l.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null && ((0, h.Nj)({ quest: l }) || (0, h.$J)(l))) return l;
                                  }
                      }
                      return null;
                  })(t, x.Z.quests, j.Z);
        });
    return null == l
        ? null
        : (0, n.jsx)(N.A, {
              questOrQuests: l,
              overrideVisibility: !t,
              questContent: v.jn.QUEST_LIVE_STREAM,
              children: () => (0, n.jsx)(U, w(Q({}, e), { quest: l }))
          });
};
