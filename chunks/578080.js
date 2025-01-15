var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(476183),
    l = n(442837),
    c = n(950104),
    d = n(780384),
    u = n(481060),
    p = n(70097),
    m = n(703656),
    x = n(358085),
    g = n(617136),
    h = n(915750),
    f = n(272008),
    v = n(113434),
    C = n(569984),
    j = n(497505),
    _ = n(918701),
    T = n(865364),
    E = n(585500),
    S = n(475595),
    b = n(566078),
    N = n(340100),
    B = n(611855),
    y = n(644646),
    A = n(78826),
    w = n(64141),
    R = n(667105),
    I = n(46140),
    P = n(981631),
    k = n(701488),
    O = n(388032),
    q = n(502926);
let M = r.forwardRef(function (e, t) {
    var n, s;
    let { children: T, className: M, collapsedHeight: D, expansionSpring: Z, isExpanded: V, isExpansionAnimationComplete: W, onCtxMenuOpen: H, onCtxMenuClose: Q, onCtxMenuSelect: U, quest: F, useReducedMotion: K } = e,
        z = (0, l.e7)([C.Z], () => C.Z.isEnrolling(F.id), [F]),
        Y = (0, h.aM)(),
        G = (0, v.B6)(F.config.expiresAt),
        X = b.r.build(F.config),
        J = (0, v.B6)(X.rewardsExpireAt),
        $ = r.useMemo(() => (0, S.fh)(F, S.eC.HERO), [F]),
        ee = (0, R.tP)(X.application.id),
        et = X.features.has(I.S7.START_QUEST_CTA) ? g.jZ.START_QUEST : g.jZ.ACCEPT_QUEST,
        en = X.features.has(I.S7.START_QUEST_CTA) ? O.intl.string(O.t.E80Bdn) : O.intl.string(O.t.l7E81t),
        eo = r.useCallback(() => {
            (0, f.AH)(F.id, {
                questContent: j.jn.QUEST_BAR,
                questContentCTA: et
            }),
                X.features.has(I.S7.START_QUEST_CTA) && (0, m.uL)(P.Z5c.ACTIVITY_DETAILS(k.In), void 0);
        }, [F, et, X.features]),
        er = (0, R.hf)({
            quest: F,
            location: j.jn.QUEST_BAR
        }),
        es = r.useCallback(() => {
            (0, _.FE)(F, {
                content: j.jn.QUEST_BAR,
                ctaContent: g.jZ.OPEN_GAME_LINK,
                impressionId: Y
            });
        }, [Y, F]),
        ea = X.features.has(I.S7.POST_ENROLLMENT_CTA),
        ei = (0, v.Rf)(F),
        el = (0, v.Jf)(F),
        ec = null != el ? el.progress > 0 : ei.progressSeconds > 0,
        ed = (null === (n = F.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        eu = (null === (s = F.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        ep = r.useMemo(() => (0, _.Xv)(F.config), [F.config]),
        em = V && W,
        ex = (0, E.D)({
            quest: F,
            taskDetails: ei,
            location: I.dr.QUESTS_BAR,
            questContent: j.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != el ? el : void 0
        }),
        eg = (0, x.isWeb)(),
        eh = r.useMemo(() => {
            let e = (0, d.Qg)(F.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: d.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, c.r5)(e, 0.3),
                '--custom-cta-color-active': (0, c.r5)(e, 0.35)
            };
        }, [F.config.colors.primary]);
    return (0, o.jsxs)(i.animated.div, {
        className: a()(M, q.contentExpanded, { [q.contentInteractable]: em }),
        style: {
            backgroundColor: F.config.colors.secondary,
            transform: eu
                ? void 0
                : (0, i.to)(
                      [
                          Z.to({
                              range: [0, 1],
                              output: [0, -100]
                          }),
                          Z.to({
                              range: [0, 1],
                              output: [0, D]
                          })
                      ],
                      (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
                  )
        },
        children: [
            T,
            (0, o.jsx)('div', {
                'aria-hidden': !em,
                children: ed
                    ? (0, o.jsxs)('div', {
                          className: q.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, o.jsxs)('div', {
                                  className: q.utils,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: q.questAcceptedContentHeading,
                                          children: [
                                              (0, o.jsx)(y.Z, {
                                                  className: q.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: F,
                                                  questContent: j.jn.QUEST_BAR,
                                                  location: I.dr.QUESTS_BAR
                                              }),
                                              (0, o.jsxs)('div', {
                                                  children: [
                                                      (0, o.jsx)(u.Heading, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, _.AV)({
                                                              quest: F,
                                                              taskDetails: ei,
                                                              thirdPartyTaskDetails: null != el ? el : void 0
                                                          })
                                                      }),
                                                      (0, o.jsx)(u.Text, {
                                                          className: q.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: eu ? O.intl.formatToPlainString(O.t.APddvL, { expirationDate: J }) : O.intl.formatToPlainString(O.t['pX+fmp'], { expirationDate: G })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(w.r, {
                                          onOpen: H,
                                          onClose: Q,
                                          onSelect: U,
                                          questContent: j.jn.QUEST_BAR,
                                          quest: F,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, o.jsx)(u.Clickable, {
                                                  ...e,
                                                  className: q.submenuWrapper,
                                                  'aria-label': O.intl.string(O.t.DEoVWV),
                                                  children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: q.submenuIcon
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              eu
                                  ? (0, o.jsx)(u.Button, {
                                        className: a()(q.cta, q.ctaClaimReward),
                                        style: ep ? eh : void 0,
                                        color: u.Button.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: er,
                                        size: u.Button.Sizes.NONE,
                                        children: O.intl.string(O.t.cfY4PD)
                                    })
                                  : (0, o.jsx)(u.Text, {
                                        className: q.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ex
                                    }),
                              (0, o.jsx)(N.Z, { quest: F }),
                              !eg && !ec && !ee && ea && (0, o.jsx)(L, { onClick: em ? es : void 0 })
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          children: [
                              (0, o.jsxs)('div', {
                                  className: q.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: q.utils,
                                          children: [
                                              (0, o.jsx)(B.Z, { color: 'always-white' }),
                                              (0, o.jsx)(w.r, {
                                                  onOpen: H,
                                                  onClose: Q,
                                                  onSelect: U,
                                                  questContent: j.jn.QUEST_BAR,
                                                  quest: F,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, o.jsx)(u.Clickable, {
                                                          ...e,
                                                          className: q.submenuWrapper,
                                                          'aria-label': O.intl.string(O.t.DEoVWV),
                                                          children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: q.submenuIcon
                                                          })
                                                      })
                                              })
                                          ]
                                      }),
                                      (0, o.jsxs)('div', {
                                          className: q.details,
                                          children: [
                                              (0, o.jsx)(y.Z, {
                                                  className: q.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: F,
                                                  questContent: j.jn.QUEST_BAR,
                                                  location: I.dr.QUESTS_BAR
                                              }),
                                              (0, o.jsx)(u.Heading, {
                                                  className: q.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: O.intl.format(O.t.EQa7oq, { questName: F.config.messages.questName })
                                              }),
                                              (0, o.jsx)(u.Text, {
                                                  className: q.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ex
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(u.Button, {
                                          className: q.cta,
                                          style: '1232852290197655573' !== F.id ? eh : void 0,
                                          color: u.Button.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: em ? eo : void 0,
                                          size: u.Button.Sizes.NONE,
                                          submitting: z,
                                          children: en
                                      })
                                  ]
                              }),
                              (0, o.jsx)('div', {
                                  className: q.heroAssetWrapper,
                                  style: { color: F.config.colors.secondary },
                                  children: $.isAnimated
                                      ? (0, o.jsx)(A.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, o.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !K,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: q.heroAsset,
                                                    controls: !1,
                                                    children: (0, o.jsx)('source', {
                                                        src: $.url,
                                                        type: null !== (t = $.mimetype) && void 0 !== t ? t : void 0
                                                    })
                                                });
                                            }
                                        })
                                      : (0, o.jsx)(A.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, o.jsx)('img', {
                                                    ref: e,
                                                    alt: '',
                                                    className: q.heroAsset,
                                                    src: $.url
                                                })
                                        })
                              })
                          ]
                      })
            })
        ]
    });
});
function L(e) {
    let { style: t, onClick: n } = e;
    return (0, T.O)({
        location: I.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, o.jsx)(u.Button, {
              className: q.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: O.intl.string(O.t.lwQdjI)
          })
        : null;
}
t.Z = M;
