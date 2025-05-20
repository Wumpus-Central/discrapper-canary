l.d(t, { Z: () => V }), l(388685);
var n = l(255367),
    s = l(73800),
    r = l(120356),
    i = l.n(r),
    u = l(442837),
    o = l(780384),
    a = l(481060),
    c = l(358221),
    d = l(594190),
    E = l(687516),
    m = l(210887),
    S = l(937995),
    p = l(158776),
    A = l(594174),
    j = l(617136),
    T = l(272008),
    f = l(113434),
    x = l(569984),
    C = l(497505),
    _ = l(918701),
    h = l(5881),
    v = l(373370),
    g = l(475595),
    L = l(566078),
    Z = l(602667),
    N = l(340100),
    b = l(611855),
    R = l(644646),
    O = l(670638),
    q = l(667105),
    y = l(860151),
    k = l(341907),
    P = l(46140),
    M = l(981631),
    I = l(354459),
    Q = l(388032),
    U = l(45772);
function D(e) {
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
function z(e) {
    var t, l, r, S;
    let { channelId: Z, quest: z, previewQuest: V, isParticipatingOverride: B } = e,
        H = (0, j.O5)(),
        [W, G] = s.useState(!1),
        F = s.useCallback(() => G(!0), []),
        K = s.useCallback(() => G(!1), []),
        $ = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
        J = (0, u.e7)([m.Z], () => m.Z.getState().theme),
        X = (0, o.wj)(J) ? M.BRd.DARK : M.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: Y, isQuestInQuestBar: ee } = (0, u.cj)(
            [p.Z, c.Z, x.Z],
            () => {
                var e;
                let t = c.Z.getParticipants(Z),
                    l =
                        null != z &&
                        null != $ &&
                        ((e = p.Z),
                        t.some((t) => {
                            if (t.type !== I.fO.STREAM || t.user.id !== $.id) return !1;
                            let l = (0, E.Um)(t.stream, e);
                            return null != l && (0, _._D)(l, z);
                        })),
                    n = (0, _.PM)(x.Z.quests, x.Z.questToDeliverForPlacement, C.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: l,
                    isQuestInQuestBar: (null == n ? void 0 : n.id) === (null == z ? void 0 : z.id)
                };
            },
            [Z, $, z]
        ),
        et = null != z ? L.r.build(z.config) : null,
        el = null == et ? void 0 : et.application.id,
        en = (0, u.e7)(
            [d.ZP, p.Z],
            () => {
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, _.$H)(z) && e.includes(el)) return !0;
                let t = null != $ ? p.Z.findActivity($.id, (e) => e.type !== M.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, _.$J)(z) && (0, _._D)(t, z));
            },
            [z, el, $]
        ),
        es = !0 === B || Y || en,
        er = (0, u.e7)([x.Z], () => null != z && x.Z.isEnrolling(z.id), [z]),
        ei = (0, u.e7)([c.Z], () => ((null == $ ? void 0 : $.id) == null ? null : c.Z.getParticipant(Z, $.id)) != null, [Z, $]),
        eu = (0, f.B6)(null == z ? void 0 : z.config.expiresAt),
        eo = (0, f.B6)(null == et ? void 0 : et.rewardsExpireAt),
        ea = s.useCallback(() => {
            (0, T.AH)(z.id, {
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: j.jZ.ACCEPT_QUEST
            });
        }, [z]),
        ec = s.useCallback(() => {
            H({
                questId: z.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: j.jZ.TRACK_PROGRESS
            }),
                (0, k.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: z.id
                });
        }, [z, H]),
        ed = s.useCallback(() => {
            H({
                questId: z.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: j.jZ.LEARN_MORE
            }),
                (0, k.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: z.id
                });
        }, [z, H]),
        eE = (0, q.hf)({
            quest: z,
            location: C.jn.QUEST_LIVE_STREAM
        }),
        em = (0, v.up)(P.dr.QUEST_CHANNEL_CALL_HEADER),
        eS = s.useMemo(
            () =>
                (0, h.T)({
                    quest: z,
                    location: P.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [z]
        ),
        ep = (0, f.tP)(z),
        eA = (null == (t = z.userStatus) ? void 0 : t.enrolledAt) != null,
        ej = (null == (l = z.userStatus) ? void 0 : l.completedAt) != null,
        eT = null != z.userStatus && (0, _.zE)(z.userStatus, C.jn.QUEST_LIVE_STREAM),
        ef = null != z.userStatus && (0, _.zE)(z.userStatus, C.jn.QUEST_BAR),
        ex = ee && !ef;
    eS.info({
        isQuestCallHeaderDismissed: eT,
        isQuestExpired: ep,
        isQuestBarShowing: ex,
        isCurrentUserCallParticipant: ei
    });
    let eC = null != V && (null == (r = z.userStatus) ? void 0 : r.claimedAt) == null;
    if ((!eC && (eT || ep || ex)) || (!eC && !ei)) return null;
    let e_ = (0, _.il)(z),
        eh = (0, n.jsx)(R.Z, {
            className: U.rewardTile,
            autoplay: W,
            quest: z,
            questContent: C.jn.QUEST_LIVE_STREAM,
            location: P.dr.QUEST_CHANNEL_CALL_HEADER
        });
    return (0, n.jsxs)('div', {
        className: i()(U.wrapper, { [U.wrapperAccepted]: eA }),
        onFocus: F,
        onMouseEnter: F,
        onBlur: K,
        onMouseLeave: K,
        children: [
            !eA &&
                (0, n.jsxs)('div', {
                    className: U.rewardTileWrapper,
                    children: [
                        eh,
                        (0, n.jsx)(b.Z, {
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
                            eA && es
                                ? eh
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
                                            (0, n.jsx)(a.X6q, {
                                                className: U.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: es
                                                    ? (0, _.AV)({
                                                          quest: z,
                                                          taskDetails: e_
                                                      })
                                                    : Q.intl.formatToPlainString(Q.t.EQa7oq, { questName: z.config.messages.questName })
                                            }),
                                            (0, n.jsx)(O.r, {
                                                questContent: C.jn.QUEST_LIVE_STREAM,
                                                quest: z,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null == (S = z.userStatus) ? void 0 : S.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, n.jsx)(
                                                        a.P3F,
                                                        w(D({}, e), {
                                                            className: U.submenuWrapper,
                                                            'aria-label': Q.intl.string(Q.t.DEoVWV),
                                                            children: (0, n.jsx)(a.xhG, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: U.submenuIcon
                                                            })
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(a.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: ej ? Q.intl.formatToPlainString(Q.t.APddvL, { expirationDate: eo }) : Q.intl.formatToPlainString(Q.t['pX+fmp'], { expirationDate: eu })
                                    })
                                ]
                            })
                        ]
                    }),
                    eA &&
                        !ej &&
                        !es &&
                        (0, n.jsx)(y.Z, {
                            autoplay: W,
                            quest: z,
                            questContent: C.jn.QUEST_LIVE_STREAM,
                            taskDetails: e_,
                            location: P.dr.QUEST_CHANNEL_CALL_HEADER
                        }),
                    (0, n.jsxs)('div', {
                        className: U.ctas,
                        children: [
                            !eA &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(a.zxk, {
                                            className: U.cta,
                                            color: a.zxk.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: a.zxk.Sizes.SMALL,
                                            onClick: ed,
                                            children: Q.intl.string(Q.t.LLLLPD)
                                        }),
                                        (0, n.jsx)(a.zxk, {
                                            className: U.cta,
                                            color: a.zxk.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: ea,
                                            size: a.zxk.Sizes.SMALL,
                                            submitting: er,
                                            children: Q.intl.string(Q.t.l7E81t)
                                        })
                                    ]
                                }),
                            eA &&
                                !ej &&
                                es &&
                                (0, n.jsx)(N.Z, {
                                    color: a.TVs.colors.BG_BRAND,
                                    quest: z
                                }),
                            eA &&
                                !ej &&
                                !es &&
                                (0, n.jsx)(a.zxk, {
                                    className: U.cta,
                                    color: a.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ec,
                                    size: a.zxk.Sizes.SMALL,
                                    children: Q.intl.string(Q.t.VN1Ajo)
                                }),
                            ej &&
                                (0, n.jsx)(a.zxk, {
                                    className: U.cta,
                                    color: a.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: eE,
                                    size: a.zxk.Sizes.SMALL,
                                    children: em
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
let V = function (e) {
    let t = s.useContext(S.h9),
        l = (0, u.e7)([x.Z], () => null != x.Z.questEnrollmentBlockedUntil, []),
        r = (0, u.e7)([c.Z, p.Z, x.Z], () => {
            let t = c.Z.getParticipants(e.channelId),
                l = (0, _.MM)(x.Z.quests, P.Lv);
            return null != e.previewQuest
                ? e.previewQuest
                : (function (e, t, l) {
                      for (let i of e) {
                          var n, s, r;
                          if (i.type === I.fO.STREAM) {
                              let e = null != (s = (0, E.Um)(i.stream, l)) ? s : null,
                                  r = (0, _.ZZ)(t, e);
                              if (null != r && (null == (n = r.userStatus) ? void 0 : n.claimedAt) == null) return r;
                          }
                          for (let n of e)
                              if (!(0, I.I)(n))
                                  for (let e of l.getActivities(n.user.id)) {
                                      let l = (0, _.ZZ)(t, e);
                                      if (null != l && (null == (r = l.userStatus) ? void 0 : r.claimedAt) == null && ((0, _.Nj)({ quest: l }) || (0, _.$J)(l))) return l;
                                  }
                      }
                      return null;
                  })(t, l, p.Z);
        });
    return null == r || l
        ? null
        : (0, n.jsx)(Z.A, {
              questOrQuests: r,
              overrideVisibility: !t,
              questContent: C.jn.QUEST_LIVE_STREAM,
              children: () => (0, n.jsx)(z, w(D({}, e), { quest: r }))
          });
};
