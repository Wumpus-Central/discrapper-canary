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
    _ = n(602667),
    A = n(340100),
    R = n(611855),
    b = n(644646),
    I = n(64141),
    M = n(667105),
    L = n(860151),
    Z = n(341907),
    y = n(46140),
    P = n(981631),
    B = n(354459),
    D = n(388032),
    w = n(815405);
t.Z = function (e) {
    var t, n, l;
    let { channelId: U, previewQuest: O, isParticipatingOverride: Q } = e,
        [k, H] = s.useState(!1),
        W = s.useCallback(() => H(!0), []),
        G = s.useCallback(() => H(!1), []),
        F = s.useContext(h.h9),
        z = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        V = (0, o.e7)([x.Z], () => x.Z.getState().theme),
        X = (0, a.wj)(V) ? P.BRd.DARK : P.BRd.LIGHT,
        {
            isCurrentUserStreamingQuestApplication: Y,
            quest: K,
            isQuestInQuestBar: J
        } = (0, o.cj)(
            [C.Z, c.Z, T.Z],
            () => {
                var e, t, n, i;
                let s = c.Z.getParticipants(U),
                    l =
                        null != O
                            ? O
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
                              })(s, T.Z.quests, C.Z);
                let r =
                        null != l &&
                        null != z &&
                        ((e = s),
                        (t = l),
                        (n = z),
                        (i = C.Z),
                        e.some((e) => {
                            if (e.type !== B.fO.STREAM || e.user.id !== n.id) return !1;
                            let s = (0, m.Um)(e.stream, i);
                            return null != s && (0, v._D)(s, t);
                        })),
                    o = (0, v.PM)(T.Z.quests, T.Z.questToDeliverForPlacement, f.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
                return {
                    isCurrentUserStreamingQuestApplication: r,
                    quest: l,
                    isQuestInQuestBar: (null == o ? void 0 : o.id) === (null == l ? void 0 : l.id)
                };
            },
            [U, z, O]
        ),
        $ = null != K ? q.r.build(K.config) : null,
        ee = null == $ ? void 0 : $.application.id,
        et = (0, o.e7)(
            [d.ZP, C.Z],
            () => {
                if (null == K) return !1;
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, v.$H)(K) && e.includes(ee)) return !0;
                let t = null != z ? C.Z.findActivity(z.id, (e) => e.type !== P.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, v.$J)(K) && (0, v._D)(t, K)) || !1;
            },
            [K, ee, z]
        ),
        en = !0 === Q || Y || et,
        ei = (0, o.e7)([T.Z], () => null != K && T.Z.isEnrolling(K.id), [K]),
        es = (0, o.e7)([c.Z], () => ((null == z ? void 0 : z.id) == null ? null : c.Z.getParticipant(U, z.id)) != null, [U, z]),
        el = (0, j.B6)(null == K ? void 0 : K.config.expiresAt),
        er = (0, j.B6)(null == $ ? void 0 : $.rewardsExpireAt),
        eo = s.useCallback(() => {
            null != K &&
                (0, E.AH)(K.id, {
                    questContent: f.jn.QUEST_LIVE_STREAM,
                    questContentCTA: g.jZ.ACCEPT_QUEST
                });
        }, [K]),
        ea = s.useCallback(() => {
            null != K &&
                ((0, g._3)({
                    questId: K.id,
                    questContent: f.jn.QUEST_LIVE_STREAM,
                    questContentCTA: g.jZ.TRACK_PROGRESS
                }),
                (0, Z.navigateToQuestHome)(y.dr.QUEST_CHANNEL_CALL_HEADER, f.jn.QUEST_LIVE_STREAM, K.id));
        }, [K]),
        eu = s.useCallback(() => {
            null != K &&
                ((0, g._3)({
                    questId: K.id,
                    questContent: f.jn.QUEST_LIVE_STREAM,
                    questContentCTA: g.jZ.LEARN_MORE
                }),
                (0, Z.navigateToQuestHome)(y.dr.QUEST_CHANNEL_CALL_HEADER, f.jn.QUEST_LIVE_STREAM, K.id));
        }, [K]),
        ec = (0, M.hf)({
            quest: K,
            location: f.jn.QUEST_LIVE_STREAM
        }),
        ed = s.useMemo(
            () =>
                (0, S.T)({
                    quest: K,
                    location: y.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [K]
        ),
        em = (0, j.tP)(K);
    if (null == K) return null;
    let ex = (null === (t = K.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        eh = (null === (n = K.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        eC = null != K.userStatus && (0, v.zE)(K.userStatus, f.jn.QUEST_LIVE_STREAM),
        ep = null != K.userStatus && (0, v.zE)(K.userStatus, f.jn.QUEST_BAR),
        eg = J && !ep;
    ed.info({
        isQuestCallHeaderDismissed: eC,
        isQuestExpired: em,
        isQuestBarShowing: eg,
        isCurrentUserCallParticipant: es
    });
    let eE = null != O && (null === (l = K.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null;
    if ((!eE && (eC || em || eg)) || (!eE && !es)) return null;
    let ej = (0, v.il)(K),
        eT = (0, i.jsx)(b.Z, {
            className: w.rewardTile,
            autoplay: k,
            quest: K,
            questContent: f.jn.QUEST_LIVE_STREAM,
            location: y.dr.QUEST_CHANNEL_CALL_HEADER
        });
    return (0, i.jsx)(_.A, {
        questOrQuests: K,
        overrideVisibility: !F,
        questContent: f.jn.QUEST_LIVE_STREAM,
        children: () => {
            var e;
            return (0, i.jsxs)('div', {
                className: r()(w.wrapper, { [w.wrapperAccepted]: ex }),
                onFocus: W,
                onMouseEnter: W,
                onBlur: G,
                onMouseLeave: G,
                children: [
                    !ex &&
                        (0, i.jsxs)('div', {
                            className: w.rewardTileWrapper,
                            children: [
                                eT,
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
                                    ex && en
                                        ? eT
                                        : (0, i.jsx)('img', {
                                              className: w.gameTile,
                                              alt: K.config.messages.gameTitle,
                                              src: (0, N.fh)(K, N.eC.GAME_TILE, X).url
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
                                                        children: en
                                                            ? (0, v.AV)({
                                                                  quest: K,
                                                                  taskDetails: ej
                                                              })
                                                            : D.intl.formatToPlainString(D.t.EQa7oq, { questName: K.config.messages.questName })
                                                    }),
                                                    (0, i.jsx)(I.r, {
                                                        questContent: f.jn.QUEST_LIVE_STREAM,
                                                        quest: K,
                                                        preventIdle: !0,
                                                        shouldShowDisclosure: (null === (e = K.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
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
                                                children: eh ? D.intl.formatToPlainString(D.t.APddvL, { expirationDate: er }) : D.intl.formatToPlainString(D.t['pX+fmp'], { expirationDate: el })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            ex &&
                                !eh &&
                                !en &&
                                (0, i.jsx)(L.Z, {
                                    autoplay: k,
                                    quest: K,
                                    questContent: f.jn.QUEST_LIVE_STREAM,
                                    taskDetails: ej,
                                    location: y.dr.QUEST_CHANNEL_CALL_HEADER
                                }),
                            (0, i.jsxs)('div', {
                                className: w.ctas,
                                children: [
                                    !ex &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(u.Button, {
                                                    className: w.cta,
                                                    color: u.Button.Colors.PRIMARY,
                                                    fullWidth: !0,
                                                    size: u.Button.Sizes.SMALL,
                                                    onClick: eu,
                                                    children: D.intl.string(D.t.LLLLPD)
                                                }),
                                                (0, i.jsx)(u.Button, {
                                                    className: w.cta,
                                                    color: u.Button.Colors.BRAND,
                                                    fullWidth: !0,
                                                    onClick: eo,
                                                    size: u.Button.Sizes.SMALL,
                                                    submitting: ei,
                                                    children: D.intl.string(D.t.l7E81t)
                                                })
                                            ]
                                        }),
                                    ex &&
                                        !eh &&
                                        en &&
                                        (0, i.jsx)(A.Z, {
                                            color: u.tokens.colors.BG_BRAND,
                                            quest: K
                                        }),
                                    ex &&
                                        !eh &&
                                        !en &&
                                        (0, i.jsx)(u.Button, {
                                            className: w.cta,
                                            color: u.Button.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: ea,
                                            size: u.Button.Sizes.SMALL,
                                            children: D.intl.string(D.t.VN1Ajo)
                                        }),
                                    eh &&
                                        (0, i.jsx)(u.Button, {
                                            className: w.cta,
                                            color: u.Button.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: ec,
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
    });
};
