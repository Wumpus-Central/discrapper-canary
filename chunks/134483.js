l.d(t, { Z: () => z }), l(47120);
var n = l(200651),
    s = l(192379),
    r = l(120356),
    i = l.n(r),
    u = l(442837),
    a = l(780384),
    o = l(481060),
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
    h = l(497505),
    C = l(918701),
    v = l(5881),
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
    D = l(45772);
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
        K = (0, u.e7)([p.default], () => p.default.getCurrentUser()),
        $ = (0, u.e7)([E.Z], () => E.Z.getState().theme),
        J = (0, a.wj)($) ? k.BRd.DARK : k.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: X, isQuestInQuestBar: Y } = (0, u.cj)(
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
                            return null != l && (0, C._D)(l, U);
                        })),
                    n = (0, C.PM)(x.Z.quests, x.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: l,
                    isQuestInQuestBar: (null == n ? void 0 : n.id) === (null == U ? void 0 : U.id)
                };
            },
            [N, K, U]
        ),
        ee = null != U ? g.r.build(U.config) : null,
        et = null == ee ? void 0 : ee.application.id,
        el = (0, u.e7)(
            [d.ZP, j.Z],
            () => {
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, C.$H)(U) && e.includes(et)) return !0;
                let t = null != K ? j.Z.findActivity(K.id, (e) => e.type !== k.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, C.$J)(U) && (0, C._D)(t, U));
            },
            [U, et, K]
        ),
        en = !0 === V || X || el,
        es = (0, u.e7)([x.Z], () => null != U && x.Z.isEnrolling(U.id), [U]),
        er = (0, u.e7)([c.Z], () => ((null == K ? void 0 : K.id) == null ? null : c.Z.getParticipant(N, K.id)) != null, [N, K]),
        ei = (0, T.B6)(null == U ? void 0 : U.config.expiresAt),
        eu = (0, T.B6)(null == ee ? void 0 : ee.rewardsExpireAt),
        ea = s.useCallback(() => {
            (0, f.AH)(U.id, {
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: A.jZ.ACCEPT_QUEST
            });
        }, [U]),
        eo = s.useCallback(() => {
            W({
                questId: U.id,
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: A.jZ.TRACK_PROGRESS
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: h.jn.QUEST_LIVE_STREAM,
                    questId: U.id
                });
        }, [U, W]),
        ec = s.useCallback(() => {
            W({
                questId: U.id,
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: A.jZ.LEARN_MORE
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: h.jn.QUEST_LIVE_STREAM,
                    questId: U.id
                });
        }, [U, W]),
        ed = (0, O.hf)({
            quest: U,
            location: h.jn.QUEST_LIVE_STREAM
        }),
        em = s.useMemo(
            () =>
                (0, v.T)({
                    quest: U,
                    location: P.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [U]
        ),
        eE = (0, T.tP)(U),
        eS = (null == (t = U.userStatus) ? void 0 : t.enrolledAt) != null,
        ej = (null == (l = U.userStatus) ? void 0 : l.completedAt) != null,
        ep = null != U.userStatus && (0, C.zE)(U.userStatus, h.jn.QUEST_LIVE_STREAM),
        eA = null != U.userStatus && (0, C.zE)(U.userStatus, h.jn.QUEST_BAR),
        ef = Y && !eA;
    em.info({
        isQuestCallHeaderDismissed: ep,
        isQuestExpired: eE,
        isQuestBarShowing: ef,
        isCurrentUserCallParticipant: er
    });
    let eT = null != z && (null == (r = U.userStatus) ? void 0 : r.claimedAt) == null;
    if ((!eT && (ep || eE || ef)) || (!eT && !er)) return null;
    let ex = (0, C.il)(U),
        eh = (0, n.jsx)(b.Z, {
            className: D.rewardTile,
            autoplay: B,
            quest: U,
            questContent: h.jn.QUEST_LIVE_STREAM,
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
                        eh,
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
                                ? eh
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
                                            (0, n.jsx)(o.X6q, {
                                                className: D.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: en
                                                    ? (0, C.AV)({
                                                          quest: U,
                                                          taskDetails: ex
                                                      })
                                                    : M.NW.formatToPlainString(M.t.EQa7oq, { questName: U.config.messages.questName })
                                            }),
                                            (0, n.jsx)(R.r, {
                                                questContent: h.jn.QUEST_LIVE_STREAM,
                                                quest: U,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null == (S = U.userStatus) ? void 0 : S.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, n.jsx)(
                                                        o.P3F,
                                                        w(Q({}, e), {
                                                            className: D.submenuWrapper,
                                                            'aria-label': M.NW.string(M.t.DEoVWV),
                                                            children: (0, n.jsx)(o.xhG, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: D.submenuIcon
                                                            })
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: ej ? M.NW.formatToPlainString(M.t.APddvL, { expirationDate: eu }) : M.NW.formatToPlainString(M.t['pX+fmp'], { expirationDate: ei })
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
                            questContent: h.jn.QUEST_LIVE_STREAM,
                            taskDetails: ex,
                            location: P.dr.QUEST_CHANNEL_CALL_HEADER
                        }),
                    (0, n.jsxs)('div', {
                        className: D.ctas,
                        children: [
                            !eS &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(o.zxk, {
                                            className: D.cta,
                                            color: o.zxk.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: o.zxk.Sizes.SMALL,
                                            onClick: ec,
                                            children: M.NW.string(M.t.LLLLPD)
                                        }),
                                        (0, n.jsx)(o.zxk, {
                                            className: D.cta,
                                            color: o.zxk.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: ea,
                                            size: o.zxk.Sizes.SMALL,
                                            submitting: es,
                                            children: M.NW.string(M.t.l7E81t)
                                        })
                                    ]
                                }),
                            eS &&
                                !ej &&
                                en &&
                                (0, n.jsx)(L.Z, {
                                    color: o.TVs.colors.BG_BRAND,
                                    quest: U
                                }),
                            eS &&
                                !ej &&
                                !en &&
                                (0, n.jsx)(o.zxk, {
                                    className: D.cta,
                                    color: o.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: eo,
                                    size: o.zxk.Sizes.SMALL,
                                    children: M.NW.string(M.t.VN1Ajo)
                                }),
                            ej &&
                                (0, n.jsx)(o.zxk, {
                                    className: D.cta,
                                    color: o.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ed,
                                    size: o.zxk.Sizes.SMALL,
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
        l = (0, u.e7)([c.Z, j.Z, x.Z], () => {
            let t = c.Z.getParticipants(e.channelId);
            return null != e.previewQuest
                ? e.previewQuest
                : (function (e, t, l) {
                      for (let i of e) {
                          var n, s, r;
                          if (i.type === I.fO.STREAM) {
                              let e = null != (s = (0, m.Um)(i.stream, l)) ? s : null,
                                  r = (0, C.ZZ)(t, e);
                              if (null != r && (null == (n = r.userStatus) ? void 0 : n.claimedAt) == null) return r;
                          }
                          for (let n of e)
                              if (!(0, I.I)(n))
                                  for (let e of l.getActivities(n.user.id)) {
                                      let l = (0, C.ZZ)(t, e);
                                      if (null != l && (null == (r = l.userStatus) ? void 0 : r.claimedAt) == null && ((0, C.Nj)({ quest: l }) || (0, C.$J)(l))) return l;
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
              questContent: h.jn.QUEST_LIVE_STREAM,
              children: () => (0, n.jsx)(U, w(Q({}, e), { quest: l }))
          });
};
