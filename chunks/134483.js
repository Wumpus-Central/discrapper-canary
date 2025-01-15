n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(442837),
    a = n(780384),
    u = n(481060),
    c = n(358221),
    d = n(594190),
    m = n(687516),
    x = n(210887),
    h = n(937995),
    C = n(158776),
    p = n(594174),
    g = n(617136),
    E = n(272008),
    j = n(113434),
    T = n(569984),
    f = n(497505),
    v = n(918701),
    S = n(5881),
    N = n(475595),
    q = n(566078),
    A = n(602667),
    _ = n(340100),
    R = n(611855),
    M = n(644646),
    I = n(670638),
    b = n(667105),
    L = n(860151),
    Z = n(341907),
    y = n(46140),
    P = n(981631),
    B = n(354459),
    D = n(388032),
    w = n(433795);
function U(e) {
    var t, n, l, h;
    let { channelId: A, quest: U, previewQuest: O, isParticipatingOverride: Q } = e,
        k = (0, g.O5)(),
        [H, W] = s.useState(!1),
        G = s.useCallback(() => W(!0), []),
        F = s.useCallback(() => W(!1), []),
        z = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        V = (0, o.e7)([x.Z], () => x.Z.getState().theme),
        X = (0, a.wj)(V) ? P.BRd.DARK : P.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: Y, isQuestInQuestBar: K } = (0, o.cj)(
            [C.Z, c.Z, T.Z],
            () => {
                var e, t, n, i;
                let s = c.Z.getParticipants(A);
                let l =
                        null != U &&
                        null != z &&
                        ((e = s),
                        (t = U),
                        (n = z),
                        (i = C.Z),
                        e.some((e) => {
                            if (e.type !== B.fO.STREAM || e.user.id !== n.id) return !1;
                            let s = (0, m.Um)(e.stream, i);
                            return null != s && (0, v._D)(s, t);
                        })),
                    r = (0, v.PM)(T.Z.quests, T.Z.questToDeliverForPlacement, f.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: l,
                    isQuestInQuestBar: (null == r ? void 0 : r.id) === (null == U ? void 0 : U.id)
                };
            },
            [A, z, U]
        ),
        J = null != U ? q.r.build(U.config) : null,
        $ = null == J ? void 0 : J.application.id,
        ee = (0, o.e7)(
            [d.ZP, C.Z],
            () => {
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, v.$H)(U) && e.includes($)) return !0;
                let t = null != z ? C.Z.findActivity(z.id, (e) => e.type !== P.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, v.$J)(U) && (0, v._D)(t, U)) || !1;
            },
            [U, $, z]
        ),
        et = !0 === Q || Y || ee,
        en = (0, o.e7)([T.Z], () => null != U && T.Z.isEnrolling(U.id), [U]),
        ei = (0, o.e7)([c.Z], () => ((null == z ? void 0 : z.id) == null ? null : c.Z.getParticipant(A, z.id)) != null, [A, z]),
        es = (0, j.B6)(null == U ? void 0 : U.config.expiresAt),
        el = (0, j.B6)(null == J ? void 0 : J.rewardsExpireAt),
        er = s.useCallback(() => {
            (0, E.AH)(U.id, {
                questContent: f.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.ACCEPT_QUEST
            });
        }, [U]),
        eo = s.useCallback(() => {
            k({
                questId: U.id,
                questContent: f.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.TRACK_PROGRESS
            }),
                (0, Z.navigateToQuestHome)(y.dr.QUEST_CHANNEL_CALL_HEADER, f.jn.QUEST_LIVE_STREAM, U.id);
        }, [U, k]),
        ea = s.useCallback(() => {
            k({
                questId: U.id,
                questContent: f.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.LEARN_MORE
            }),
                (0, Z.navigateToQuestHome)(y.dr.QUEST_CHANNEL_CALL_HEADER, f.jn.QUEST_LIVE_STREAM, U.id);
        }, [U, k]),
        eu = (0, b.hf)({
            quest: U,
            location: f.jn.QUEST_LIVE_STREAM
        }),
        ec = s.useMemo(
            () =>
                (0, S.T)({
                    quest: U,
                    location: y.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [U]
        ),
        ed = (0, j.tP)(U),
        em = (null === (t = U.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        ex = (null === (n = U.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        eh = null != U.userStatus && (0, v.zE)(U.userStatus, f.jn.QUEST_LIVE_STREAM),
        eC = null != U.userStatus && (0, v.zE)(U.userStatus, f.jn.QUEST_BAR),
        ep = K && !eC;
    ec.info({
        isQuestCallHeaderDismissed: eh,
        isQuestExpired: ed,
        isQuestBarShowing: ep,
        isCurrentUserCallParticipant: ei
    });
    let eg = null != O && (null === (l = U.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null;
    if ((!eg && (eh || ed || ep)) || (!eg && !ei)) return null;
    let eE = (0, v.il)(U),
        ej = (0, i.jsx)(M.Z, {
            className: w.rewardTile,
            autoplay: H,
            quest: U,
            questContent: f.jn.QUEST_LIVE_STREAM,
            location: y.dr.QUEST_CHANNEL_CALL_HEADER
        });
    return (0, i.jsxs)('div', {
        className: r()(w.wrapper, { [w.wrapperAccepted]: em }),
        onFocus: G,
        onMouseEnter: G,
        onBlur: F,
        onMouseLeave: F,
        children: [
            !em &&
                (0, i.jsxs)('div', {
                    className: w.rewardTileWrapper,
                    children: [
                        ej,
                        (0, i.jsx)(R.Z, {
                            bgOpacity: 0.32,
                            className: w.promotedTag
                        })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: w.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: w.heading,
                        children: [
                            em && et
                                ? ej
                                : (0, i.jsx)('img', {
                                      className: w.gameTile,
                                      alt: U.config.messages.gameTitle,
                                      src: (0, N.fh)(U, N.eC.GAME_TILE, X).url
                                  }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: w.headingWithSubmenu,
                                        children: [
                                            (0, i.jsx)(u.Heading, {
                                                className: w.questTitle,
                                                variant: 'heading-md/semibold',
                                                color: 'header-primary',
                                                children: et
                                                    ? (0, v.AV)({
                                                          quest: U,
                                                          taskDetails: eE
                                                      })
                                                    : D.intl.formatToPlainString(D.t.EQa7oq, { questName: U.config.messages.questName })
                                            }),
                                            (0, i.jsx)(I.r, {
                                                questContent: f.jn.QUEST_LIVE_STREAM,
                                                quest: U,
                                                preventIdle: !0,
                                                shouldShowDisclosure: (null === (h = U.userStatus) || void 0 === h ? void 0 : h.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, i.jsx)(u.Clickable, {
                                                        ...e,
                                                        className: w.submenuWrapper,
                                                        'aria-label': D.intl.string(D.t.DEoVWV),
                                                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            className: w.submenuIcon
                                                        })
                                                    })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-xs/medium',
                                        children: ex ? D.intl.formatToPlainString(D.t.APddvL, { expirationDate: el }) : D.intl.formatToPlainString(D.t['pX+fmp'], { expirationDate: es })
                                    })
                                ]
                            })
                        ]
                    }),
                    em &&
                        !ex &&
                        !et &&
                        (0, i.jsx)(L.Z, {
                            autoplay: H,
                            quest: U,
                            questContent: f.jn.QUEST_LIVE_STREAM,
                            taskDetails: eE,
                            location: y.dr.QUEST_CHANNEL_CALL_HEADER
                        }),
                    (0, i.jsxs)('div', {
                        className: w.ctas,
                        children: [
                            !em &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.Button, {
                                            className: w.cta,
                                            color: u.Button.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: u.Button.Sizes.SMALL,
                                            onClick: ea,
                                            children: D.intl.string(D.t.LLLLPD)
                                        }),
                                        (0, i.jsx)(u.Button, {
                                            className: w.cta,
                                            color: u.Button.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: er,
                                            size: u.Button.Sizes.SMALL,
                                            submitting: en,
                                            children: D.intl.string(D.t.l7E81t)
                                        })
                                    ]
                                }),
                            em &&
                                !ex &&
                                et &&
                                (0, i.jsx)(_.Z, {
                                    color: u.tokens.colors.BG_BRAND,
                                    quest: U
                                }),
                            em &&
                                !ex &&
                                !et &&
                                (0, i.jsx)(u.Button, {
                                    className: w.cta,
                                    color: u.Button.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: eo,
                                    size: u.Button.Sizes.SMALL,
                                    children: D.intl.string(D.t.VN1Ajo)
                                }),
                            ex &&
                                (0, i.jsx)(u.Button, {
                                    className: w.cta,
                                    color: u.Button.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: eu,
                                    size: u.Button.Sizes.SMALL,
                                    children: D.intl.string(D.t.cfY4PD)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
t.Z = function (e) {
    let t = s.useContext(h.h9),
        n = (0, o.e7)([c.Z, C.Z, T.Z], () => {
            let t = c.Z.getParticipants(e.channelId);
            return null != e.previewQuest
                ? e.previewQuest
                : (function (e, t, n) {
                      for (let r of e) {
                          var i, s, l;
                          if (r.type === B.fO.STREAM) {
                              let e = null !== (s = (0, m.Um)(r.stream, n)) && void 0 !== s ? s : null,
                                  l = (0, v.ZZ)(t, e);
                              if (null != l && (null === (i = l.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null) return l;
                          }
                          for (let i of e) {
                              if (!(0, B.I)(i))
                                  for (let e of n.getActivities(i.user.id)) {
                                      let n = (0, v.ZZ)(t, e);
                                      if (null != n && (null === (l = n.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null && ((0, v.Nj)({ quest: n }) || (0, v.$J)(n))) return n;
                                  }
                          }
                      }
                      return null;
                  })(t, T.Z.quests, C.Z);
        });
    return null == n
        ? null
        : (0, i.jsx)(A.A, {
              questOrQuests: n,
              overrideVisibility: !t,
              questContent: f.jn.QUEST_LIVE_STREAM,
              children: () =>
                  (0, i.jsx)(U, {
                      ...e,
                      quest: n
                  })
          });
};
