var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(666912),
    l = n(442837),
    c = n(950104),
    d = n(780384),
    u = n(481060),
    p = n(70097),
    m = n(703656),
    x = n(358085),
    f = n(617136),
    g = n(915750),
    h = n(272008),
    C = n(113434),
    v = n(569984),
    j = n(497505),
    _ = n(918701),
    b = n(865364),
    E = n(585500),
    N = n(475595),
    B = n(566078),
    T = n(340100),
    S = n(611855),
    y = n(644646),
    A = n(78826),
    R = n(64141),
    w = n(667105),
    I = n(46140),
    k = n(981631),
    q = n(701488),
    P = n(388032),
    M = n(502926);
let O = r.forwardRef(function (e, t) {
    var n, s;
    let { children: b, className: O, collapsedHeight: L, expansionSpring: Z, isExpanded: Q, isExpansionAnimationComplete: D, onCtxMenuOpen: H, onCtxMenuClose: U, onCtxMenuSelect: V, quest: z, useReducedMotion: F } = e,
        G = (0, l.e7)([v.Z], () => v.Z.isEnrolling(z.id), [z]),
        K = (0, g.aM)(),
        Y = (0, C.B6)(z.config.expiresAt),
        X = B.r.build(z.config),
        J = (0, C.B6)(X.rewardsExpireAt),
        $ = r.useMemo(() => (0, N.fh)(z, N.eC.HERO), [z]),
        ee = (0, w.tP)(X.application.id),
        et = X.features.has(I.S7.START_QUEST_CTA) ? f.jZ.START_QUEST : f.jZ.ACCEPT_QUEST,
        en = X.features.has(I.S7.START_QUEST_CTA) ? P.intl.string(P.t.E80Bdn) : P.intl.string(P.t.l7E81t),
        eo = r.useCallback(() => {
            (0, h.AH)(z.id, {
                questContent: j.jn.QUEST_BAR,
                questContentCTA: et
            }),
                X.features.has(I.S7.START_QUEST_CTA) && (0, m.uL)(k.Z5c.ACTIVITY_DETAILS(q.In), void 0);
        }, [z, et, X.features]),
        er = (0, w.hf)({
            quest: z,
            location: j.jn.QUEST_BAR
        }),
        es = r.useCallback(() => {
            (0, _.FE)(z, {
                content: j.jn.QUEST_BAR,
                ctaContent: f.jZ.OPEN_GAME_LINK,
                impressionId: K
            });
        }, [K, z]),
        ea = X.features.has(I.S7.POST_ENROLLMENT_CTA),
        ei = (0, C.Rf)(z),
        el = (0, C.Jf)(z),
        ec = null != el ? el.progress > 0 : ei.progressSeconds > 0,
        ed = (null === (n = z.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        eu = (null === (s = z.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        ep = r.useMemo(() => (0, _.Xv)(z.config), [z.config]),
        em = Q && D,
        ex = (0, E.D)({
            quest: z,
            taskDetails: ei,
            location: I.dr.QUESTS_BAR,
            questContent: j.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != el ? el : void 0
        }),
        ef = (0, x.isWeb)(),
        eg = r.useMemo(() => {
            let e = (0, d.Qg)(z.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: d.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, c.r5)(e, 0.3),
                '--custom-cta-color-active': (0, c.r5)(e, 0.35)
            };
        }, [z.config.colors.primary]);
    return (0, o.jsxs)(i.animated.div, {
        className: a()(O, M.contentExpanded, { [M.contentInteractable]: em }),
        style: {
            backgroundColor: z.config.colors.secondary,
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
                              output: [0, L]
                          })
                      ],
                      (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
                  )
        },
        children: [
            b,
            (0, o.jsx)('div', {
                'aria-hidden': !em,
                children: ed
                    ? (0, o.jsxs)('div', {
                          className: M.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, o.jsxs)('div', {
                                  className: M.utils,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: M.questAcceptedContentHeading,
                                          children: [
                                              (0, o.jsx)(y.Z, {
                                                  className: M.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: z,
                                                  questContent: j.jn.QUEST_BAR,
                                                  location: I.dr.QUESTS_BAR
                                              }),
                                              (0, o.jsxs)('div', {
                                                  children: [
                                                      (0, o.jsx)(u.Heading, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, _.AV)({
                                                              quest: z,
                                                              taskDetails: ei,
                                                              thirdPartyTaskDetails: null != el ? el : void 0
                                                          })
                                                      }),
                                                      (0, o.jsx)(u.Text, {
                                                          className: M.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: eu ? P.intl.formatToPlainString(P.t.APddvL, { expirationDate: J }) : P.intl.formatToPlainString(P.t['pX+fmp'], { expirationDate: Y })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(R.r, {
                                          onOpen: H,
                                          onClose: U,
                                          onSelect: V,
                                          questContent: j.jn.QUEST_BAR,
                                          quest: z,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, o.jsx)(u.Clickable, {
                                                  ...e,
                                                  className: M.submenuWrapper,
                                                  'aria-label': P.intl.string(P.t.DEoVWV),
                                                  children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: M.submenuIcon
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              eu
                                  ? (0, o.jsx)(u.Button, {
                                        className: a()(M.cta, M.ctaClaimReward),
                                        style: ep ? eg : void 0,
                                        color: u.Button.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: er,
                                        size: u.Button.Sizes.NONE,
                                        children: P.intl.string(P.t.cfY4PD)
                                    })
                                  : (0, o.jsx)(u.Text, {
                                        className: M.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ex
                                    }),
                              (0, o.jsx)(T.Z, { quest: z }),
                              !ef && !ec && !ee && ea && (0, o.jsx)(W, { onClick: em ? es : void 0 })
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          children: [
                              (0, o.jsxs)('div', {
                                  className: M.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: M.utils,
                                          children: [
                                              (0, o.jsx)(S.Z, { color: 'always-white' }),
                                              (0, o.jsx)(R.r, {
                                                  onOpen: H,
                                                  onClose: U,
                                                  onSelect: V,
                                                  questContent: j.jn.QUEST_BAR,
                                                  quest: z,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, o.jsx)(u.Clickable, {
                                                          ...e,
                                                          className: M.submenuWrapper,
                                                          'aria-label': P.intl.string(P.t.DEoVWV),
                                                          children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: M.submenuIcon
                                                          })
                                                      })
                                              })
                                          ]
                                      }),
                                      (0, o.jsxs)('div', {
                                          className: M.details,
                                          children: [
                                              (0, o.jsx)(y.Z, {
                                                  className: M.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: z,
                                                  questContent: j.jn.QUEST_BAR,
                                                  location: I.dr.QUESTS_BAR
                                              }),
                                              (0, o.jsx)(u.Heading, {
                                                  className: M.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: P.intl.format(P.t.EQa7oq, { questName: z.config.messages.questName })
                                              }),
                                              (0, o.jsx)(u.Text, {
                                                  className: M.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ex
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(u.Button, {
                                          className: M.cta,
                                          style: '1232852290197655573' !== z.id ? eg : void 0,
                                          color: u.Button.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: em ? eo : void 0,
                                          size: u.Button.Sizes.NONE,
                                          submitting: G,
                                          children: en
                                      })
                                  ]
                              }),
                              (0, o.jsx)('div', {
                                  className: M.heroAssetWrapper,
                                  style: { color: z.config.colors.secondary },
                                  children: $.isAnimated
                                      ? (0, o.jsx)(A.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, o.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !F,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: M.heroAsset,
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
                                                    className: M.heroAsset,
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
function W(e) {
    let { style: t, onClick: n } = e;
    return (0, b.O)({
        location: I.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, o.jsx)(u.Button, {
              className: M.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: P.intl.string(P.t.lwQdjI)
          })
        : null;
}
t.Z = O;
