l.d(t, { Z: () => z }), l(388685);
var n = l(255367),
    s = l(73800),
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
    p = l(158776),
    j = l(594174),
    A = l(617136),
    f = l(272008),
    T = l(113434),
    x = l(569984),
    h = l(497505),
    v = l(918701),
    C = l(5881),
    _ = l(475595),
    g = l(566078),
    L = l(602667),
    Z = l(340100),
    b = l(611855),
    N = l(644646),
    R = l(670638),
    O = l(667105),
    q = l(860151),
    y = l(341907),
    P = l(46140),
    k = l(981631),
    M = l(354459),
    I = l(388032),
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
function U(e, t) {
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
function w(e) {
    var t, l, r, S;
    let { channelId: L, quest: w, previewQuest: z, isParticipatingOverride: V } = e,
        B = (0, A.O5)(),
        [H, W] = s.useState(!1),
        G = s.useCallback(() => W(!0), []),
        F = s.useCallback(() => W(!1), []),
        K = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
        $ = (0, o.e7)([E.Z], () => E.Z.getState().theme),
        J = (0, u.wj)($) ? k.BRd.DARK : k.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: X, isQuestInQuestBar: Y } = (0, o.cj)(
            [p.Z, c.Z, x.Z],
            () => {
                var e;
                let t = c.Z.getParticipants(L),
                    l =
                        null != w &&
                        null != K &&
                        ((e = p.Z),
                        t.some((t) => {
                            if (t.type !== M.fO.STREAM || t.user.id !== K.id) return !1;
                            let l = (0, m.Um)(t.stream, e);
                            return null != l && (0, v._D)(l, w);
                        })),
                    n = (0, v.PM)(x.Z.quests, x.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: l,
                    isQuestInQuestBar: (null == n ? void 0 : n.id) === (null == w ? void 0 : w.id)
                };
            },
            [L, K, w]
        ),
        ee = null != w ? g.r.build(w.config) : null,
        et = null == ee ? void 0 : ee.application.id,
        el = (0, o.e7)(
            [d.ZP, p.Z],
            () => {
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, v.$H)(w) && e.includes(et)) return !0;
                let t = null != K ? p.Z.findActivity(K.id, (e) => e.type !== k.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, v.$J)(w) && (0, v._D)(t, w));
            },
            [w, et, K]
        ),
        en = !0 === V || X || el,
        es = (0, o.e7)([x.Z], () => null != w && x.Z.isEnrolling(w.id), [w]),
        er = (0, o.e7)([c.Z], () => ((null == K ? void 0 : K.id) == null ? null : c.Z.getParticipant(L, K.id)) != null, [L, K]),
        ei = (0, T.B6)(null == w ? void 0 : w.config.expiresAt),
        eo = (0, T.B6)(null == ee ? void 0 : ee.rewardsExpireAt),
        eu = s.useCallback(() => {
            (0, f.AH)(w.id, {
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: A.jZ.ACCEPT_QUEST
            });
        }, [w]),
        ea = s.useCallback(() => {
            B({
                questId: w.id,
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: A.jZ.TRACK_PROGRESS
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: h.jn.QUEST_LIVE_STREAM,
                    questId: w.id
                });
        }, [w, B]),
        ec = s.useCallback(() => {
            B({
                questId: w.id,
                questContent: h.jn.QUEST_LIVE_STREAM,
                questContentCTA: A.jZ.LEARN_MORE
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: h.jn.QUEST_LIVE_STREAM,
                    questId: w.id
                });
        }, [w, B]),
        ed = (0, O.hf)({
            quest: w,
            location: h.jn.QUEST_LIVE_STREAM
        }),
        em = s.useMemo(
            () =>
                (0, C.T)({
                    quest: w,
                    location: P.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [w]
        ),
        eE = (0, T.tP)(w),
        eS = (null == (t = w.userStatus) ? void 0 : t.enrolledAt) != null,
        ep = (null == (l = w.userStatus) ? void 0 : l.completedAt) != null,
        ej = null != w.userStatus && (0, v.zE)(w.userStatus, h.jn.QUEST_LIVE_STREAM),
        eA = null != w.userStatus && (0, v.zE)(w.userStatus, h.jn.QUEST_BAR),
        ef = Y && !eA;
    em.info({
        isQuestCallHeaderDismissed: ej,
        isQuestExpired: eE,
        isQuestBarShowing: ef,
        isCurrentUserCallParticipant: er
    });
    let eT = null != z && (null == (r = w.userStatus) ? void 0 : r.claimedAt) == null;
    if ((!eT && (ej || eE || ef)) || (!eT && !er)) return null;
    let ex = (0, v.il)(w),
        eh = (0, n.jsx)(N.Z, {
            className: D.rewardTile,
            autoplay: H,
            quest: w,
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
                        (0, n.jsx)(b.Z, {
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
                                      alt: w.config.messages.gameTitle,
                                      src: (0, _.fh)(w, _.eC.GAME_TILE, J).url
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
                                                    ? (0, v.AV)({
                                                          quest: w,
                                                          taskDetails: ex
                                                      })
                                                    : I.intl.formatToPlainString(I.t.EQa7oq, { questName: w.config.messages.questName })
                                            }),
                                            (0, n.jsx)(R.r, {
                                                questContent: h.jn.QUEST_LIVE_STREAM,
                                                quest: w,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null == (S = w.userStatus) ? void 0 : S.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, n.jsx)(
                                                        a.P3F,
                                                        U(Q({}, e), {
                                                            className: D.submenuWrapper,
                                                            'aria-label': I.intl.string(I.t.DEoVWV),
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
                                        children: ep ? I.intl.formatToPlainString(I.t.APddvL, { expirationDate: eo }) : I.intl.formatToPlainString(I.t['pX+fmp'], { expirationDate: ei })
                                    })
                                ]
                            })
                        ]
                    }),
                    eS &&
                        !ep &&
                        !en &&
                        (0, n.jsx)(q.Z, {
                            autoplay: H,
                            quest: w,
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
                                        (0, n.jsx)(a.zxk, {
                                            className: D.cta,
                                            color: a.zxk.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: a.zxk.Sizes.SMALL,
                                            onClick: ec,
                                            children: I.intl.string(I.t.LLLLPD)
                                        }),
                                        (0, n.jsx)(a.zxk, {
                                            className: D.cta,
                                            color: a.zxk.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: eu,
                                            size: a.zxk.Sizes.SMALL,
                                            submitting: es,
                                            children: I.intl.string(I.t.l7E81t)
                                        })
                                    ]
                                }),
                            eS &&
                                !ep &&
                                en &&
                                (0, n.jsx)(Z.Z, {
                                    color: a.TVs.colors.BG_BRAND,
                                    quest: w
                                }),
                            eS &&
                                !ep &&
                                !en &&
                                (0, n.jsx)(a.zxk, {
                                    className: D.cta,
                                    color: a.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ea,
                                    size: a.zxk.Sizes.SMALL,
                                    children: I.intl.string(I.t.VN1Ajo)
                                }),
                            ep &&
                                (0, n.jsx)(a.zxk, {
                                    className: D.cta,
                                    color: a.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ed,
                                    size: a.zxk.Sizes.SMALL,
                                    children: I.intl.string(I.t.cfY4PD)
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
        l = (0, o.e7)([x.Z], () => null != x.Z.questEnrollmentBlockedUntil, []),
        r = (0, o.e7)([c.Z, p.Z, x.Z], () => {
            let t = c.Z.getParticipants(e.channelId),
                l = (0, v.MM)(x.Z.quests, P.Lv);
            return null != e.previewQuest
                ? e.previewQuest
                : (function (e, t, l) {
                      for (let i of e) {
                          var n, s, r;
                          if (i.type === M.fO.STREAM) {
                              let e = null != (s = (0, m.Um)(i.stream, l)) ? s : null,
                                  r = (0, v.ZZ)(t, e);
                              if (null != r && (null == (n = r.userStatus) ? void 0 : n.claimedAt) == null) return r;
                          }
                          for (let n of e)
                              if (!(0, M.I)(n))
                                  for (let e of l.getActivities(n.user.id)) {
                                      let l = (0, v.ZZ)(t, e);
                                      if (null != l && (null == (r = l.userStatus) ? void 0 : r.claimedAt) == null && ((0, v.Nj)({ quest: l }) || (0, v.$J)(l))) return l;
                                  }
                      }
                      return null;
                  })(t, l, p.Z);
        });
    return null == r || l
        ? null
        : (0, n.jsx)(L.A, {
              questOrQuests: r,
              overrideVisibility: !t,
              questContent: h.jn.QUEST_LIVE_STREAM,
              children: () => (0, n.jsx)(w, U(Q({}, e), { quest: r }))
          });
};
