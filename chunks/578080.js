n.d(t, { Z: () => W });
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(642128),
    l = n(442837),
    c = n(950104),
    d = n(780384),
    u = n(481060),
    p = n(70097),
    m = n(703656),
    x = n(358085),
    h = n(617136),
    g = n(915750),
    f = n(272008),
    _ = n(113434),
    C = n(569984),
    v = n(497505),
    j = n(918701),
    b = n(865364),
    T = n(373370),
    E = n(475595),
    N = n(566078),
    S = n(340100),
    y = n(611855),
    A = n(644646),
    B = n(78826),
    R = n(670638),
    w = n(667105),
    q = n(46140),
    k = n(981631),
    P = n(701488),
    I = n(388032),
    M = n(913222);
function O(e) {
    let { style: t, onClick: n } = e;
    return (0, b.O)({
        location: q.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, r.jsx)(u.zxk, {
              className: M.cta,
              style: t,
              color: u.zxk.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.zxk.Sizes.NONE,
              children: I.intl.string(I.t.lwQdjI)
          })
        : null;
}
let W = o.forwardRef(function (e, t) {
    var n, s;
    let { children: b, className: W, collapsedHeight: L, expansionSpring: D, isExpanded: Q, isExpansionAnimationComplete: Z, onCtxMenuOpen: U, onCtxMenuClose: V, onCtxMenuSelect: H, quest: z, useReducedMotion: F } = e,
        G = (0, l.e7)([C.Z], () => C.Z.isEnrolling(z.id), [z]),
        K = (0, g.aM)(),
        Y = (0, _.B6)(z.config.expiresAt),
        X = N.r.build(z.config),
        J = (0, _.B6)(X.rewardsExpireAt),
        $ = o.useMemo(() => (0, E.fh)(z, E.eC.HERO), [z]),
        ee = (0, w.tP)(X.application.id),
        et = X.features.has(q.S7.START_QUEST_CTA) ? h.jZ.START_QUEST : h.jZ.ACCEPT_QUEST,
        en = X.features.has(q.S7.START_QUEST_CTA) ? I.intl.string(I.t.E80Bdn) : I.intl.string(I.t.l7E81t),
        er = o.useCallback(() => {
            (0, f.AH)(z.id, {
                questContent: v.jn.QUEST_BAR,
                questContentCTA: et
            }),
                X.features.has(q.S7.START_QUEST_CTA) && (0, m.uL)(k.Z5c.ACTIVITY_DETAILS(P.In), void 0);
        }, [z, et, X.features]),
        eo = (0, w.hf)({
            quest: z,
            location: v.jn.QUEST_BAR
        }),
        es = o.useCallback(() => {
            (0, j.FE)(z, {
                content: v.jn.QUEST_BAR,
                ctaContent: h.jZ.OPEN_GAME_LINK,
                impressionId: K
            });
        }, [K, z]),
        ea = X.features.has(q.S7.POST_ENROLLMENT_CTA),
        ei = (0, _.Rf)(z),
        el = (0, _.Jf)(z),
        ec = null != el ? el.progress > 0 : ei.progressSeconds > 0,
        ed = (null === (n = z.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        eu = (null === (s = z.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        ep = o.useMemo(() => (0, j.Xv)(z.config), [z.config]),
        em = Q && Z,
        ex = (0, T.DD)({
            quest: z,
            taskDetails: ei,
            location: q.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != el ? el : void 0
        }),
        eh = (0, x.isWeb)(),
        eg = o.useMemo(() => {
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
    return (0, r.jsxs)(i.animated.div, {
        className: a()(W, M.contentExpanded, { [M.contentInteractable]: em }),
        style: {
            backgroundColor: z.config.colors.secondary,
            transform: eu
                ? void 0
                : (0, i.to)(
                      [
                          D.to({
                              range: [0, 1],
                              output: [0, -100]
                          }),
                          D.to({
                              range: [0, 1],
                              output: [0, L]
                          })
                      ],
                      (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
                  )
        },
        children: [
            b,
            (0, r.jsx)('div', {
                'aria-hidden': !em,
                children: ed
                    ? (0, r.jsxs)('div', {
                          className: M.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: M.utils,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: M.questAcceptedContentHeading,
                                          children: [
                                              (0, r.jsx)(A.Z, {
                                                  className: M.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: z,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: q.dr.QUESTS_BAR
                                              }),
                                              (0, r.jsxs)('div', {
                                                  children: [
                                                      (0, r.jsx)(u.X6q, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, j.AV)({
                                                              quest: z,
                                                              taskDetails: ei,
                                                              thirdPartyTaskDetails: null != el ? el : void 0
                                                          })
                                                      }),
                                                      (0, r.jsx)(u.Text, {
                                                          className: M.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: eu ? I.intl.formatToPlainString(I.t.APddvL, { expirationDate: J }) : I.intl.formatToPlainString(I.t['pX+fmp'], { expirationDate: Y })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(R.r, {
                                          onOpen: U,
                                          onClose: V,
                                          onSelect: H,
                                          questContent: v.jn.QUEST_BAR,
                                          quest: z,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, r.jsx)(u.P3F, {
                                                  ...e,
                                                  className: M.submenuWrapper,
                                                  'aria-label': I.intl.string(I.t.DEoVWV),
                                                  children: (0, r.jsx)(u.xhG, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: M.submenuIcon
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              eu
                                  ? (0, r.jsx)(u.zxk, {
                                        className: a()(M.cta, M.ctaClaimReward),
                                        style: ep ? eg : void 0,
                                        color: u.zxk.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: eo,
                                        size: u.zxk.Sizes.NONE,
                                        children: I.intl.string(I.t.cfY4PD)
                                    })
                                  : (0, r.jsx)(u.Text, {
                                        className: M.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ex
                                    }),
                              (0, r.jsx)(S.Z, { quest: z }),
                              !eh && !ec && !ee && ea && (0, r.jsx)(O, { onClick: em ? es : void 0 })
                          ]
                      })
                    : (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: M.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: M.utils,
                                          children: [
                                              (0, r.jsx)(y.Z, { color: 'always-white' }),
                                              (0, r.jsx)(R.r, {
                                                  onOpen: U,
                                                  onClose: V,
                                                  onSelect: H,
                                                  questContent: v.jn.QUEST_BAR,
                                                  quest: z,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, r.jsx)(u.P3F, {
                                                          ...e,
                                                          className: M.submenuWrapper,
                                                          'aria-label': I.intl.string(I.t.DEoVWV),
                                                          children: (0, r.jsx)(u.xhG, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: M.submenuIcon
                                                          })
                                                      })
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: M.details,
                                          children: [
                                              (0, r.jsx)(A.Z, {
                                                  className: M.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: z,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: q.dr.QUESTS_BAR
                                              }),
                                              (0, r.jsx)(u.X6q, {
                                                  className: M.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: I.intl.format(I.t.EQa7oq, { questName: z.config.messages.questName })
                                              }),
                                              (0, r.jsx)(u.Text, {
                                                  className: M.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ex
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(u.zxk, {
                                          className: M.cta,
                                          style: '1232852290197655573' !== z.id ? eg : void 0,
                                          color: u.zxk.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: em ? er : void 0,
                                          size: u.zxk.Sizes.NONE,
                                          submitting: G,
                                          children: en
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: M.heroAssetWrapper,
                                  style: { color: z.config.colors.secondary },
                                  children: $.isAnimated
                                      ? (0, r.jsx)(B.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, r.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !F,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: M.heroAsset,
                                                    controls: !1,
                                                    children: (0, r.jsx)('source', {
                                                        src: $.url,
                                                        type: null !== (t = $.mimetype) && void 0 !== t ? t : void 0
                                                    })
                                                });
                                            }
                                        })
                                      : (0, r.jsx)(B.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, r.jsx)('img', {
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
