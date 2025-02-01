n.d(t, { Z: () => D });
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
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
    v = n(113434),
    _ = n(569984),
    C = n(497505),
    j = n(918701),
    b = n(865364),
    T = n(373370),
    E = n(475595),
    S = n(566078),
    N = n(340100),
    y = n(611855),
    w = n(644646),
    A = n(78826),
    B = n(64141),
    R = n(667105),
    P = n(46140),
    k = n(981631),
    q = n(701488),
    I = n(388032),
    O = n(502926);
function M(e) {
    let { style: t, onClick: n } = e;
    return (0, b.O)({
        location: P.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, s.jsx)(u.zxk, {
              className: O.cta,
              style: t,
              color: u.zxk.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.zxk.Sizes.NONE,
              children: I.intl.string(I.t.lwQdjI)
          })
        : null;
}
let D = r.forwardRef(function (e, t) {
    var n, a;
    let { children: b, className: D, collapsedHeight: L, expansionSpring: Z, isExpanded: W, isExpansionAnimationComplete: V, onCtxMenuOpen: Q, onCtxMenuClose: U, onCtxMenuSelect: H, quest: z, useReducedMotion: F } = e,
        X = (0, l.e7)([_.Z], () => _.Z.isEnrolling(z.id), [z]),
        K = (0, g.aM)(),
        Y = (0, v.B6)(z.config.expiresAt),
        G = S.r.build(z.config),
        J = (0, v.B6)(G.rewardsExpireAt),
        $ = r.useMemo(() => (0, E.fh)(z, E.eC.HERO), [z]),
        ee = (0, R.tP)(G.application.id),
        et = G.features.has(P.S7.START_QUEST_CTA) ? h.jZ.START_QUEST : h.jZ.ACCEPT_QUEST,
        en = G.features.has(P.S7.START_QUEST_CTA) ? I.intl.string(I.t.E80Bdn) : I.intl.string(I.t.l7E81t),
        es = r.useCallback(() => {
            (0, f.AH)(z.id, {
                questContent: C.jn.QUEST_BAR,
                questContentCTA: et
            }),
                G.features.has(P.S7.START_QUEST_CTA) && (0, m.uL)(k.Z5c.ACTIVITY_DETAILS(q.In), void 0);
        }, [z, et, G.features]),
        er = (0, R.hf)({
            quest: z,
            location: C.jn.QUEST_BAR
        }),
        ea = r.useCallback(() => {
            (0, j.FE)(z, {
                content: C.jn.QUEST_BAR,
                ctaContent: h.jZ.OPEN_GAME_LINK,
                impressionId: K
            });
        }, [K, z]),
        eo = G.features.has(P.S7.POST_ENROLLMENT_CTA),
        ei = (0, v.Rf)(z),
        el = (0, v.Jf)(z),
        ec = null != el ? el.progress > 0 : ei.progressSeconds > 0,
        ed = (null === (n = z.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        eu = (null === (a = z.userStatus) || void 0 === a ? void 0 : a.completedAt) != null,
        ep = r.useMemo(() => (0, j.Xv)(z.config), [z.config]),
        em = W && V,
        ex = (0, T.DD)({
            quest: z,
            taskDetails: ei,
            location: P.dr.QUESTS_BAR,
            questContent: C.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != el ? el : void 0
        }),
        eh = (0, x.isWeb)(),
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
    return (0, s.jsxs)(i.animated.div, {
        className: o()(D, O.contentExpanded, { [O.contentInteractable]: em }),
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
            (0, s.jsx)('div', {
                'aria-hidden': !em,
                children: ed
                    ? (0, s.jsxs)('div', {
                          className: O.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, s.jsxs)('div', {
                                  className: O.utils,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          className: O.questAcceptedContentHeading,
                                          children: [
                                              (0, s.jsx)(w.Z, {
                                                  className: O.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: z,
                                                  questContent: C.jn.QUEST_BAR,
                                                  location: P.dr.QUESTS_BAR
                                              }),
                                              (0, s.jsxs)('div', {
                                                  children: [
                                                      (0, s.jsx)(u.X6q, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, j.AV)({
                                                              quest: z,
                                                              taskDetails: ei,
                                                              thirdPartyTaskDetails: null != el ? el : void 0
                                                          })
                                                      }),
                                                      (0, s.jsx)(u.Text, {
                                                          className: O.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: eu ? I.intl.formatToPlainString(I.t.APddvL, { expirationDate: J }) : I.intl.formatToPlainString(I.t['pX+fmp'], { expirationDate: Y })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(B.r, {
                                          onOpen: Q,
                                          onClose: U,
                                          onSelect: H,
                                          questContent: C.jn.QUEST_BAR,
                                          quest: z,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, s.jsx)(u.P3F, {
                                                  ...e,
                                                  className: O.submenuWrapper,
                                                  'aria-label': I.intl.string(I.t.DEoVWV),
                                                  children: (0, s.jsx)(u.xhG, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: O.submenuIcon
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              eu
                                  ? (0, s.jsx)(u.zxk, {
                                        className: o()(O.cta, O.ctaClaimReward),
                                        style: ep ? eg : void 0,
                                        color: u.zxk.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: er,
                                        size: u.zxk.Sizes.NONE,
                                        children: I.intl.string(I.t.cfY4PD)
                                    })
                                  : (0, s.jsx)(u.Text, {
                                        className: O.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ex
                                    }),
                              (0, s.jsx)(N.Z, { quest: z }),
                              !eh && !ec && !ee && eo && (0, s.jsx)(M, { onClick: em ? ea : void 0 })
                          ]
                      })
                    : (0, s.jsxs)('div', {
                          children: [
                              (0, s.jsxs)('div', {
                                  className: O.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          className: O.utils,
                                          children: [
                                              (0, s.jsx)(y.Z, { color: 'always-white' }),
                                              (0, s.jsx)(B.r, {
                                                  onOpen: Q,
                                                  onClose: U,
                                                  onSelect: H,
                                                  questContent: C.jn.QUEST_BAR,
                                                  quest: z,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, s.jsx)(u.P3F, {
                                                          ...e,
                                                          className: O.submenuWrapper,
                                                          'aria-label': I.intl.string(I.t.DEoVWV),
                                                          children: (0, s.jsx)(u.xhG, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: O.submenuIcon
                                                          })
                                                      })
                                              })
                                          ]
                                      }),
                                      (0, s.jsxs)('div', {
                                          className: O.details,
                                          children: [
                                              (0, s.jsx)(w.Z, {
                                                  className: O.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: z,
                                                  questContent: C.jn.QUEST_BAR,
                                                  location: P.dr.QUESTS_BAR
                                              }),
                                              (0, s.jsx)(u.X6q, {
                                                  className: O.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: I.intl.format(I.t.EQa7oq, { questName: z.config.messages.questName })
                                              }),
                                              (0, s.jsx)(u.Text, {
                                                  className: O.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ex
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(u.zxk, {
                                          className: O.cta,
                                          style: '1232852290197655573' !== z.id ? eg : void 0,
                                          color: u.zxk.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: em ? es : void 0,
                                          size: u.zxk.Sizes.NONE,
                                          submitting: X,
                                          children: en
                                      })
                                  ]
                              }),
                              (0, s.jsx)('div', {
                                  className: O.heroAssetWrapper,
                                  style: { color: z.config.colors.secondary },
                                  children: $.isAnimated
                                      ? (0, s.jsx)(A.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, s.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !F,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: O.heroAsset,
                                                    controls: !1,
                                                    children: (0, s.jsx)('source', {
                                                        src: $.url,
                                                        type: null !== (t = $.mimetype) && void 0 !== t ? t : void 0
                                                    })
                                                });
                                            }
                                        })
                                      : (0, s.jsx)(A.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, s.jsx)('img', {
                                                    ref: e,
                                                    alt: '',
                                                    className: O.heroAsset,
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
