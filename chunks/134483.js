n.d(t, { Z: () => O }), n(47120);
var s = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(442837),
    o = n(780384),
    d = n(481060),
    u = n(358221),
    c = n(594190),
    m = n(687516),
    x = n(210887),
    h = n(937995),
    g = n(158776),
    C = n(594174),
    p = n(617136),
    j = n(272008),
    T = n(113434),
    v = n(569984),
    E = n(497505),
    f = n(918701),
    N = n(5881),
    S = n(475595),
    q = n(566078),
    A = n(602667),
    R = n(340100),
    _ = n(611855),
    b = n(644646),
    Z = n(670638),
    I = n(667105),
    M = n(860151),
    y = n(341907),
    L = n(46140),
    P = n(981631),
    w = n(354459),
    D = n(388032),
    k = n(289015);
function U(e) {
    var t, n, l, h;
    let { channelId: A, quest: U, previewQuest: O, isParticipatingOverride: B } = e,
        Q = (0, p.O5)(),
        [z, W] = i.useState(!1),
        F = i.useCallback(() => W(!0), []),
        G = i.useCallback(() => W(!1), []),
        H = (0, r.e7)([C.default], () => C.default.getCurrentUser()),
        V = (0, r.e7)([x.Z], () => x.Z.getState().theme),
        X = (0, o.wj)(V) ? P.BRd.DARK : P.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: Y, isQuestInQuestBar: K } = (0, r.cj)(
            [g.Z, u.Z, v.Z],
            () => {
                var e;
                let t = u.Z.getParticipants(A),
                    n =
                        null != U &&
                        null != H &&
                        ((e = g.Z),
                        t.some((t) => {
                            if (t.type !== w.fO.STREAM || t.user.id !== H.id) return !1;
                            let n = (0, m.Um)(t.stream, e);
                            return null != n && (0, f._D)(n, U);
                        })),
                    s = (0, f.PM)(v.Z.quests, v.Z.questToDeliverForPlacement, E.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: n,
                    isQuestInQuestBar: (null == s ? void 0 : s.id) === (null == U ? void 0 : U.id)
                };
            },
            [A, H, U]
        ),
        J = null != U ? q.r.build(U.config) : null,
        $ = null == J ? void 0 : J.application.id,
        ee = (0, r.e7)(
            [c.ZP, g.Z],
            () => {
                let e = c.ZP.getRunningGames().map((e) => e.id);
                if ((0, f.$H)(U) && e.includes($)) return !0;
                let t = null != H ? g.Z.findActivity(H.id, (e) => e.type !== P.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, f.$J)(U) && (0, f._D)(t, U));
            },
            [U, $, H]
        ),
        et = !0 === B || Y || ee,
        en = (0, r.e7)([v.Z], () => null != U && v.Z.isEnrolling(U.id), [U]),
        es = (0, r.e7)([u.Z], () => ((null == H ? void 0 : H.id) == null ? null : u.Z.getParticipant(A, H.id)) != null, [A, H]),
        ei = (0, T.B6)(null == U ? void 0 : U.config.expiresAt),
        el = (0, T.B6)(null == J ? void 0 : J.rewardsExpireAt),
        ea = i.useCallback(() => {
            (0, j.AH)(U.id, {
                questContent: E.jn.QUEST_LIVE_STREAM,
                questContentCTA: p.jZ.ACCEPT_QUEST
            });
        }, [U]),
        er = i.useCallback(() => {
            Q({
                questId: U.id,
                questContent: E.jn.QUEST_LIVE_STREAM,
                questContentCTA: p.jZ.TRACK_PROGRESS
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: E.jn.QUEST_LIVE_STREAM,
                    questId: U.id
                });
        }, [U, Q]),
        eo = i.useCallback(() => {
            Q({
                questId: U.id,
                questContent: E.jn.QUEST_LIVE_STREAM,
                questContentCTA: p.jZ.LEARN_MORE
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: E.jn.QUEST_LIVE_STREAM,
                    questId: U.id
                });
        }, [U, Q]),
        ed = (0, I.hf)({
            quest: U,
            location: E.jn.QUEST_LIVE_STREAM
        }),
        eu = i.useMemo(
            () =>
                (0, N.T)({
                    quest: U,
                    location: L.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [U]
        ),
        ec = (0, T.tP)(U),
        em = (null === (t = U.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        ex = (null === (n = U.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        eh = null != U.userStatus && (0, f.zE)(U.userStatus, E.jn.QUEST_LIVE_STREAM),
        eg = null != U.userStatus && (0, f.zE)(U.userStatus, E.jn.QUEST_BAR),
        eC = K && !eg;
    eu.info({
        isQuestCallHeaderDismissed: eh,
        isQuestExpired: ec,
        isQuestBarShowing: eC,
        isCurrentUserCallParticipant: es
    });
    let ep = null != O && (null === (l = U.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null;
    if ((!ep && (eh || ec || eC)) || (!ep && !es)) return null;
    let ej = (0, f.il)(U),
        eT = (0, s.jsx)(b.Z, {
            className: k.rewardTile,
            autoplay: z,
            quest: U,
            questContent: E.jn.QUEST_LIVE_STREAM,
            location: L.dr.QUEST_CHANNEL_CALL_HEADER
        });
    return (0, s.jsxs)('div', {
        className: a()(k.wrapper, { [k.wrapperAccepted]: em }),
        onFocus: F,
        onMouseEnter: F,
        onBlur: G,
        onMouseLeave: G,
        children: [
            !em &&
                (0, s.jsxs)('div', {
                    className: k.rewardTileWrapper,
                    children: [
                        eT,
                        (0, s.jsx)(_.Z, {
                            bgOpacity: 0.32,
                            className: k.promotedTag
                        })
                    ]
                }),
            (0, s.jsxs)('div', {
                className: k.content,
                children: [
                    (0, s.jsxs)('div', {
                        className: k.heading,
                        children: [
                            em && et
                                ? eT
                                : (0, s.jsx)('img', {
                                      className: k.gameTile,
                                      alt: U.config.messages.gameTitle,
                                      src: (0, S.fh)(U, S.eC.GAME_TILE, X).url
                                  }),
                            (0, s.jsxs)('div', {
                                children: [
                                    (0, s.jsxs)('div', {
                                        className: k.headingWithSubmenu,
                                        children: [
                                            (0, s.jsx)(d.X6q, {
                                                className: k.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: et
                                                    ? (0, f.AV)({
                                                          quest: U,
                                                          taskDetails: ej
                                                      })
                                                    : D.intl.formatToPlainString(D.t.EQa7oq, { questName: U.config.messages.questName })
                                            }),
                                            (0, s.jsx)(Z.r, {
                                                questContent: E.jn.QUEST_LIVE_STREAM,
                                                quest: U,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null === (h = U.userStatus) || void 0 === h ? void 0 : h.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, s.jsx)(d.P3F, {
                                                        ...e,
                                                        className: k.submenuWrapper,
                                                        'aria-label': D.intl.string(D.t.DEoVWV),
                                                        children: (0, s.jsx)(d.xhG, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            className: k.submenuIcon
                                                        })
                                                    })
                                            })
                                        ]
                                    }),
                                    (0, s.jsx)(d.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: ex ? D.intl.formatToPlainString(D.t.APddvL, { expirationDate: el }) : D.intl.formatToPlainString(D.t['pX+fmp'], { expirationDate: ei })
                                    })
                                ]
                            })
                        ]
                    }),
                    em &&
                        !ex &&
                        !et &&
                        (0, s.jsx)(M.Z, {
                            autoplay: z,
                            quest: U,
                            questContent: E.jn.QUEST_LIVE_STREAM,
                            taskDetails: ej,
                            location: L.dr.QUEST_CHANNEL_CALL_HEADER
                        }),
                    (0, s.jsxs)('div', {
                        className: k.ctas,
                        children: [
                            !em &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)(d.zxk, {
                                            className: k.cta,
                                            color: d.zxk.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: d.zxk.Sizes.SMALL,
                                            onClick: eo,
                                            children: D.intl.string(D.t.LLLLPD)
                                        }),
                                        (0, s.jsx)(d.zxk, {
                                            className: k.cta,
                                            color: d.zxk.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: ea,
                                            size: d.zxk.Sizes.SMALL,
                                            submitting: en,
                                            children: D.intl.string(D.t.l7E81t)
                                        })
                                    ]
                                }),
                            em &&
                                !ex &&
                                et &&
                                (0, s.jsx)(R.Z, {
                                    color: d.TVs.colors.BG_BRAND,
                                    quest: U
                                }),
                            em &&
                                !ex &&
                                !et &&
                                (0, s.jsx)(d.zxk, {
                                    className: k.cta,
                                    color: d.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: er,
                                    size: d.zxk.Sizes.SMALL,
                                    children: D.intl.string(D.t.VN1Ajo)
                                }),
                            ex &&
                                (0, s.jsx)(d.zxk, {
                                    className: k.cta,
                                    color: d.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ed,
                                    size: d.zxk.Sizes.SMALL,
                                    children: D.intl.string(D.t.cfY4PD)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
let O = function (e) {
    let t = i.useContext(h.h9),
        n = (0, r.e7)([u.Z, g.Z, v.Z], () => {
            let t = u.Z.getParticipants(e.channelId);
            return null != e.previewQuest
                ? e.previewQuest
                : (function (e, t, n) {
                      for (let a of e) {
                          var s, i, l;
                          if (a.type === w.fO.STREAM) {
                              let e = null !== (i = (0, m.Um)(a.stream, n)) && void 0 !== i ? i : null,
                                  l = (0, f.ZZ)(t, e);
                              if (null != l && (null === (s = l.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null) return l;
                          }
                          for (let s of e)
                              if (!(0, w.I)(s))
                                  for (let e of n.getActivities(s.user.id)) {
                                      let n = (0, f.ZZ)(t, e);
                                      if (null != n && (null === (l = n.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null && ((0, f.Nj)({ quest: n }) || (0, f.$J)(n))) return n;
                                  }
                      }
                      return null;
                  })(t, v.Z.quests, g.Z);
        });
    return null == n
        ? null
        : (0, s.jsx)(A.A, {
              questOrQuests: n,
              overrideVisibility: !t,
              questContent: E.jn.QUEST_LIVE_STREAM,
              children: () =>
                  (0, s.jsx)(U, {
                      ...e,
                      quest: n
                  })
          });
};
