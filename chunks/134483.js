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
    m = n(210887),
    T = n(937995),
    A = n(158776),
    f = n(594174),
    p = n(617136),
    j = n(509212),
    _ = n(272008),
    C = n(113434),
    v = n(569984),
    x = n(497505),
    h = n(5881),
    g = n(475595),
    L = n(566078),
    b = n(602667),
    Q = n(340100),
    R = n(611855),
    Z = n(644646),
    I = n(110560),
    M = n(670638),
    N = n(667105),
    U = n(860151),
    q = n(46140),
    O = n(981631),
    y = n(354459),
    P = n(388032),
    D = n(45772);
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
function z(e) {
    var t, n, r, T;
    let { channelId: b, quest: z, previewQuest: k, isParticipatingOverride: B } = e,
        H = (0, p.O5)(),
        [W, G] = s.useState(!1),
        F = s.useCallback(() => G(!0), []),
        K = s.useCallback(() => G(!1), []),
        X = (0, u.e7)([f.default], () => f.default.getCurrentUser()),
        Y = (0, u.e7)([m.Z], () => m.Z.getState().theme),
        $ = (0, o.wj)(Y) ? O.BRd.DARK : O.BRd.LIGHT,
        J = (0, u.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]),
        ee = (0, u.e7)([v.Z], () => (0, j.PM)(v.Z.quests, v.Z.questToDeliverForPlacement, x.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []),
        { isCurrentUserStreamingQuestApplication: et, isQuestInQuestBar: en } = (0, u.cj)(
            [A.Z],
            () => {
                var e;
                return {
                    isCurrentUserStreamingQuestApplication:
                        null != z &&
                        null != X &&
                        ((e = A.Z),
                        J.some((t) => {
                            if (t.type !== y.fO.STREAM || t.user.id !== X.id) return !1;
                            let n = (0, S.Um)(t.stream, e);
                            return null != n && (0, j._D)(n, z);
                        })),
                    isQuestInQuestBar: (null == ee ? void 0 : ee.id) === (null == z ? void 0 : z.id)
                };
            },
            [X, z, J, ee]
        ),
        el = null != z ? L.r.build(z.config) : null,
        es = null == el ? void 0 : el.application.id,
        er = (0, u.e7)(
            [E.ZP, A.Z],
            () => {
                let e = E.ZP.getRunningGames().map((e) => e.id);
                if ((0, j.$H)(z) && e.includes(es)) return !0;
                let t = null != X ? A.Z.findActivity(X.id, (e) => e.type !== O.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, j.$J)(z) && (0, j._D)(t, z));
            },
            [z, es, X]
        ),
        ei = !0 === B || et || er,
        eu = (0, u.e7)([v.Z], () => null != z && v.Z.isEnrolling(z.id), [z]),
        eo = (0, u.e7)([d.Z], () => ((null == X ? void 0 : X.id) == null ? null : d.Z.getParticipant(b, X.id)) != null, [b, X]),
        ea = (0, C.B6)(null == z ? void 0 : z.config.expiresAt),
        ec = (0, C.B6)(null == el ? void 0 : el.rewardsExpireAt),
        ed = s.useCallback(() => {
            (0, _.AH)(z.id, {
                questContent: x.jn.QUEST_LIVE_STREAM,
                questContentCTA: p.jZ.ACCEPT_QUEST,
                sourceQuestContent: x.jn.QUEST_LIVE_STREAM
            });
        }, [z]),
        eE = s.useCallback(() => {
            (H({
                questId: z.id,
                questContent: x.jn.QUEST_LIVE_STREAM,
                questContentCTA: p.jZ.TRACK_PROGRESS,
                sourceQuestContent: x.jn.QUEST_LIVE_STREAM
            }),
                (0, I.navigateToQuestHome)({
                    fromContent: x.jn.QUEST_LIVE_STREAM,
                    questId: z.id
                }));
        }, [z, H]),
        eS = s.useCallback(() => {
            (H({
                questId: z.id,
                questContent: x.jn.QUEST_LIVE_STREAM,
                questContentCTA: p.jZ.LEARN_MORE,
                sourceQuestContent: x.jn.QUEST_LIVE_STREAM
            }),
                (0, I.navigateToQuestHome)({
                    fromContent: x.jn.QUEST_LIVE_STREAM,
                    questId: z.id
                }));
        }, [z, H]),
        em = (0, N.hf)({
            quest: z,
            questContent: x.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: x.jn.QUEST_LIVE_STREAM
        }),
        eT = s.useMemo(
            () =>
                (0, h.T)({
                    quest: z,
                    location: q.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [z]
        ),
        eA = (0, C.tP)(z),
        ef = (null == (t = z.userStatus) ? void 0 : t.enrolledAt) != null,
        ep = (null == (n = z.userStatus) ? void 0 : n.completedAt) != null,
        ej = null != z.userStatus && (0, j.zE)(z.userStatus, x.jn.QUEST_LIVE_STREAM),
        e_ = null != z.userStatus && (0, j.zE)(z.userStatus, x.jn.QUEST_BAR),
        eC = en && !e_;
    eT.info({
        isQuestCallHeaderDismissed: ej,
        isQuestExpired: eA,
        isQuestBarShowing: eC,
        isCurrentUserCallParticipant: eo
    });
    let ev = null != k && (null == (r = z.userStatus) ? void 0 : r.claimedAt) == null;
    if ((!ev && (ej || eA || eC)) || (!ev && !eo)) return null;
    let ex = (0, j.il)(z),
        eh = (0, l.jsx)(Z.Z, {
            className: D.rewardTile,
            autoplay: W,
            quest: z,
            questContent: x.jn.QUEST_LIVE_STREAM,
            location: q.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: x.jn.QUEST_LIVE_STREAM
        });
    return (0, l.jsxs)('div', {
        className: i()(D.wrapper, { [D.wrapperAccepted]: ef }),
        onFocus: F,
        onMouseEnter: F,
        onBlur: K,
        onMouseLeave: K,
        children: [
            !ef &&
                (0, l.jsxs)('div', {
                    className: D.rewardTileWrapper,
                    children: [
                        eh,
                        (0, l.jsx)(R.Z, {
                            bgOpacity: 0.32,
                            className: D.promotedTag
                        })
                    ]
                }),
            (0, l.jsxs)('div', {
                className: D.content,
                children: [
                    (0, l.jsxs)('div', {
                        className: D.heading,
                        children: [
                            ef && ei
                                ? eh
                                : (0, l.jsx)('img', {
                                      className: D.gameTile,
                                      alt: z.config.messages.gameTitle,
                                      src: (0, g.fh)(z, g.eC.GAME_TILE, $).url
                                  }),
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: D.headingWithSubmenu,
                                        children: [
                                            (0, l.jsx)(c.X6q, {
                                                className: D.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: ei
                                                    ? (0, j.AV)({
                                                          quest: z,
                                                          taskDetails: ex
                                                      })
                                                    : P.intl.formatToPlainString(P.t.EQa7oq, { questName: z.config.messages.questName })
                                            }),
                                            (0, l.jsx)(M.r, {
                                                questContent: x.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
                                                quest: z,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null == (T = z.userStatus) ? void 0 : T.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        c.P3F,
                                                        V(w({}, e), {
                                                            className: D.submenuWrapper,
                                                            'aria-label': P.intl.string(P.t.DEoVWV),
                                                            children: (0, l.jsx)(c.xhG, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: D.submenuIcon
                                                            })
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(c.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: ep ? P.intl.formatToPlainString(P.t.APddvL, { expirationDate: ec }) : P.intl.formatToPlainString(P.t['pX+fmp'], { expirationDate: ea })
                                    })
                                ]
                            })
                        ]
                    }),
                    ef &&
                        !ep &&
                        !ei &&
                        (0, l.jsx)(U.Z, {
                            autoplay: W,
                            quest: z,
                            questContent: x.jn.QUEST_LIVE_STREAM,
                            taskDetails: ex,
                            location: q.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: x.jn.QUEST_LIVE_STREAM
                        }),
                    (0, l.jsxs)('div', {
                        className: D.ctas,
                        children: [
                            !ef &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(a.zx, {
                                            className: D.cta,
                                            color: a.zx.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: a.zx.Sizes.SMALL,
                                            onClick: eS,
                                            children: P.intl.string(P.t.LLLLPD)
                                        }),
                                        (0, l.jsx)(a.zx, {
                                            className: D.cta,
                                            color: a.zx.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: ed,
                                            size: a.zx.Sizes.SMALL,
                                            submitting: eu,
                                            children: P.intl.string(P.t.l7E81t)
                                        })
                                    ]
                                }),
                            ef &&
                                !ep &&
                                ei &&
                                (0, l.jsx)(Q.Z, {
                                    color: c.TVs.colors.BG_BRAND,
                                    quest: z
                                }),
                            ef &&
                                !ep &&
                                !ei &&
                                (0, l.jsx)(a.zx, {
                                    className: D.cta,
                                    color: a.zx.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: eE,
                                    size: a.zx.Sizes.SMALL,
                                    children: P.intl.string(P.t.VN1Ajo)
                                }),
                            ep &&
                                (0, l.jsx)(a.zx, {
                                    className: D.cta,
                                    color: a.zx.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: em,
                                    size: a.zx.Sizes.SMALL,
                                    children: P.intl.string(P.t.cfY4PD)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
function k(e) {
    let t = s.useContext(T.h9),
        n = (0, u.e7)([v.Z], () => null != v.Z.questEnrollmentBlockedUntil, []),
        r = (0, u.e7)([v.Z], () => v.Z.quests),
        i = s.useMemo(() => (0, j.MM)(r, q.Lv), [r]),
        o = (0, u.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]),
        a = (0, u.e7)(
            [A.Z],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let i of e) {
                              var l, s, r;
                              if (i.type === y.fO.STREAM) {
                                  let e = null != (s = (0, S.Um)(i.stream, n)) ? s : null,
                                      r = (0, j.ZZ)(t, e);
                                  if (null != r && (null == (l = r.userStatus) ? void 0 : l.claimedAt) == null) return r;
                              }
                              for (let l of e)
                                  if (!(0, y.I)(l))
                                      for (let e of n.getActivities(l.user.id)) {
                                          let n = (0, j.ZZ)(t, e);
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
              questContent: x.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(z, V(w({}, e), { quest: a }))
          });
}
let B = function (e) {
    let t = (0, u.e7)([f.default], () => f.default.getCurrentUser());
    return (0, u.e7)([d.Z], () => ((null == t ? void 0 : t.id) == null ? null : d.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, l.jsx)(k, w({}, e)) : null;
};
