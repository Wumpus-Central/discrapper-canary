n.d(t, { Z: () => Q }), n(47120);
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
    h = n(594174),
    f = n(617136),
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
    w = n(670638),
    A = n(667105),
    R = n(860151),
    _ = n(341907),
    Z = n(46140),
    I = n(981631),
    M = n(354459),
    L = n(388032),
    D = n(327658);
function k(e) {
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
function W(e, t) {
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
function U(e) {
    var t, n, i, x;
    let { channelId: S, quest: U, previewQuest: Q, isParticipatingOverride: B } = e,
        z = (0, f.O5)(),
        [F, G] = s.useState(!1),
        H = s.useCallback(() => G(!0), []),
        V = s.useCallback(() => G(!1), []),
        X = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        Y = (0, l.e7)([p.Z], () => p.Z.getState().theme),
        K = (0, a.wj)(Y) ? I.BRd.DARK : I.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: J, isQuestInQuestBar: $ } = (0, l.cj)(
            [g.Z, u.Z, b.Z],
            () => {
                var e;
                let t = u.Z.getParticipants(S),
                    n =
                        null != U &&
                        null != X &&
                        ((e = g.Z),
                        t.some((t) => {
                            if (t.type !== M.fO.STREAM || t.user.id !== X.id) return !1;
                            let n = (0, m.Um)(t.stream, e);
                            return null != n && (0, N._D)(n, U);
                        })),
                    r = (0, N.PM)(b.Z.quests, b.Z.questToDeliverForPlacement, C.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: n,
                    isQuestInQuestBar: (null == r ? void 0 : r.id) === (null == U ? void 0 : U.id)
                };
            },
            [S, X, U]
        ),
        ee = null != U ? y.r.build(U.config) : null,
        et = null == ee ? void 0 : ee.application.id,
        en = (0, l.e7)(
            [d.ZP, g.Z],
            () => {
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, N.$H)(U) && e.includes(et)) return !0;
                let t = null != X ? g.Z.findActivity(X.id, (e) => e.type !== I.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, N.$J)(U) && (0, N._D)(t, U));
            },
            [U, et, X]
        ),
        er = !0 === B || J || en,
        es = (0, l.e7)([b.Z], () => null != U && b.Z.isEnrolling(U.id), [U]),
        ei = (0, l.e7)([u.Z], () => ((null == X ? void 0 : X.id) == null ? null : u.Z.getParticipant(S, X.id)) != null, [S, X]),
        eo = (0, v.B6)(null == U ? void 0 : U.config.expiresAt),
        el = (0, v.B6)(null == ee ? void 0 : ee.rewardsExpireAt),
        ea = s.useCallback(() => {
            (0, j.AH)(U.id, {
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: f.jZ.ACCEPT_QUEST
            });
        }, [U]),
        ec = s.useCallback(() => {
            z({
                questId: U.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: f.jZ.TRACK_PROGRESS
            }),
                (0, _.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: U.id
                });
        }, [U, z]),
        eu = s.useCallback(() => {
            z({
                questId: U.id,
                questContent: C.jn.QUEST_LIVE_STREAM,
                questContentCTA: f.jZ.LEARN_MORE
            }),
                (0, _.navigateToQuestHome)({
                    fromContent: C.jn.QUEST_LIVE_STREAM,
                    questId: U.id
                });
        }, [U, z]),
        ed = (0, A.hf)({
            quest: U,
            location: C.jn.QUEST_LIVE_STREAM
        }),
        em = s.useMemo(
            () =>
                (0, E.T)({
                    quest: U,
                    location: Z.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [U]
        ),
        ep = (0, v.tP)(U),
        ex = (null === (t = U.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        eg = (null === (n = U.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        eh = null != U.userStatus && (0, N.zE)(U.userStatus, C.jn.QUEST_LIVE_STREAM),
        ef = null != U.userStatus && (0, N.zE)(U.userStatus, C.jn.QUEST_BAR),
        ej = $ && !ef;
    em.info({
        isQuestCallHeaderDismissed: eh,
        isQuestExpired: ep,
        isQuestBarShowing: ej,
        isCurrentUserCallParticipant: ei
    });
    let ev = null != Q && (null === (i = U.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null;
    if ((!ev && (eh || ep || ej)) || (!ev && !ei)) return null;
    let eb = (0, N.il)(U),
        eC = (0, r.jsx)(P.Z, {
            className: D.rewardTile,
            autoplay: F,
            quest: U,
            questContent: C.jn.QUEST_LIVE_STREAM,
            location: Z.dr.QUEST_CHANNEL_CALL_HEADER
        });
    return (0, r.jsxs)('div', {
        className: o()(D.wrapper, { [D.wrapperAccepted]: ex }),
        onFocus: H,
        onMouseEnter: H,
        onBlur: V,
        onMouseLeave: V,
        children: [
            !ex &&
                (0, r.jsxs)('div', {
                    className: D.rewardTileWrapper,
                    children: [
                        eC,
                        (0, r.jsx)(q.Z, {
                            bgOpacity: 0.32,
                            className: D.promotedTag
                        })
                    ]
                }),
            (0, r.jsxs)('div', {
                className: D.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.heading,
                        children: [
                            ex && er
                                ? eC
                                : (0, r.jsx)('img', {
                                      className: D.gameTile,
                                      alt: U.config.messages.gameTitle,
                                      src: (0, T.fh)(U, T.eC.GAME_TILE, K).url
                                  }),
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: D.headingWithSubmenu,
                                        children: [
                                            (0, r.jsx)(c.X6q, {
                                                className: D.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: er
                                                    ? (0, N.AV)({
                                                          quest: U,
                                                          taskDetails: eb
                                                      })
                                                    : L.NW.formatToPlainString(L.t.EQa7oq, { questName: U.config.messages.questName })
                                            }),
                                            (0, r.jsx)(w.r, {
                                                questContent: C.jn.QUEST_LIVE_STREAM,
                                                quest: U,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null === (x = U.userStatus) || void 0 === x ? void 0 : x.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        c.P3F,
                                                        W(k({}, e), {
                                                            className: D.submenuWrapper,
                                                            'aria-label': L.NW.string(L.t.DEoVWV),
                                                            children: (0, r.jsx)(c.xhG, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: D.submenuIcon
                                                            })
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: eg ? L.NW.formatToPlainString(L.t.APddvL, { expirationDate: el }) : L.NW.formatToPlainString(L.t['pX+fmp'], { expirationDate: eo })
                                    })
                                ]
                            })
                        ]
                    }),
                    ex &&
                        !eg &&
                        !er &&
                        (0, r.jsx)(R.Z, {
                            autoplay: F,
                            quest: U,
                            questContent: C.jn.QUEST_LIVE_STREAM,
                            taskDetails: eb,
                            location: Z.dr.QUEST_CHANNEL_CALL_HEADER
                        }),
                    (0, r.jsxs)('div', {
                        className: D.ctas,
                        children: [
                            !ex &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(c.zxk, {
                                            className: D.cta,
                                            color: c.zxk.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: c.zxk.Sizes.SMALL,
                                            onClick: eu,
                                            children: L.NW.string(L.t.LLLLPD)
                                        }),
                                        (0, r.jsx)(c.zxk, {
                                            className: D.cta,
                                            color: c.zxk.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: ea,
                                            size: c.zxk.Sizes.SMALL,
                                            submitting: es,
                                            children: L.NW.string(L.t.l7E81t)
                                        })
                                    ]
                                }),
                            ex &&
                                !eg &&
                                er &&
                                (0, r.jsx)(O.Z, {
                                    color: c.TVs.colors.BG_BRAND,
                                    quest: U
                                }),
                            ex &&
                                !eg &&
                                !er &&
                                (0, r.jsx)(c.zxk, {
                                    className: D.cta,
                                    color: c.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ec,
                                    size: c.zxk.Sizes.SMALL,
                                    children: L.NW.string(L.t.VN1Ajo)
                                }),
                            eg &&
                                (0, r.jsx)(c.zxk, {
                                    className: D.cta,
                                    color: c.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ed,
                                    size: c.zxk.Sizes.SMALL,
                                    children: L.NW.string(L.t.cfY4PD)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
let Q = function (e) {
    let t = s.useContext(x.h9),
        n = (0, l.e7)([u.Z, g.Z, b.Z], () => {
            let t = u.Z.getParticipants(e.channelId);
            return null != e.previewQuest
                ? e.previewQuest
                : (function (e, t, n) {
                      for (let o of e) {
                          var r, s, i;
                          if (o.type === M.fO.STREAM) {
                              let e = null !== (s = (0, m.Um)(o.stream, n)) && void 0 !== s ? s : null,
                                  i = (0, N.ZZ)(t, e);
                              if (null != i && (null === (r = i.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null) return i;
                          }
                          for (let r of e)
                              if (!(0, M.I)(r))
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
              children: () => (0, r.jsx)(U, W(k({}, e), { quest: n }))
          });
};
