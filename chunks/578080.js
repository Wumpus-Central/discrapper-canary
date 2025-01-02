var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(752877),
    l = n(442837),
    c = n(950104),
    d = n(780384),
    u = n(481060),
    p = n(70097),
    m = n(703656),
    x = n(358085),
    g = n(617136),
    f = n(272008),
    h = n(113434),
    C = n(569984),
    v = n(497505),
    j = n(918701),
    _ = n(865364),
    b = n(585500),
    N = n(475595),
    E = n(566078),
    B = n(340100),
    T = n(611855),
    S = n(644646),
    A = n(78826),
    y = n(64141),
    R = n(667105),
    w = n(46140),
    I = n(981631),
    k = n(701488),
    q = n(388032),
    P = n(502926);
let M = r.forwardRef(function (e, t) {
    var n, s;
    let { children: _, className: M, collapsedHeight: W, expansionSpring: L, isExpanded: Z, isExpansionAnimationComplete: Q, onCtxMenuOpen: D, onCtxMenuClose: H, onCtxMenuSelect: V, quest: U, useReducedMotion: z } = e,
        F = (0, l.e7)([C.Z], () => C.Z.isEnrolling(U.id), [U]),
        G = (0, h.B6)(U.config.expiresAt),
        Y = E.r.build(U.config),
        K = (0, h.B6)(Y.rewardsExpireAt),
        X = r.useMemo(() => (0, N.fh)(U, N.eC.HERO), [U]),
        J = (0, R.tP)(Y.application.id),
        $ = Y.features.has(w.S7.START_QUEST_CTA) ? g.jZ.START_QUEST : g.jZ.ACCEPT_QUEST,
        ee = Y.features.has(w.S7.START_QUEST_CTA) ? q.intl.string(q.t.E80Bdn) : q.intl.string(q.t.l7E81t),
        et = r.useCallback(() => {
            (0, f.AH)(U.id, {
                questContent: v.jn.QUEST_BAR,
                questContentCTA: $
            }),
                Y.features.has(w.S7.START_QUEST_CTA) && (0, m.uL)(I.Z5c.ACTIVITY_DETAILS(k.In), void 0);
        }, [U, $, Y.features]),
        en = (0, R.hf)({
            quest: U,
            location: v.jn.QUEST_BAR
        }),
        eo = r.useCallback(() => {
            (0, j.FE)(U, {
                content: v.jn.QUEST_BAR,
                ctaContent: g.jZ.OPEN_GAME_LINK
            });
        }, [U]),
        er = Y.features.has(w.S7.POST_ENROLLMENT_CTA),
        es = (0, h.Rf)(U),
        ea = (0, h.Jf)(U),
        ei = null != ea ? ea.progress > 0 : es.progressSeconds > 0,
        el = (null === (n = U.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        ec = (null === (s = U.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        ed = r.useMemo(() => (0, j.Xv)(U.config), [U.config]),
        eu = Z && Q,
        ep = (0, b.D)({
            quest: U,
            taskDetails: es,
            location: w.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ea ? ea : void 0
        }),
        em = (0, x.isWeb)(),
        ex = r.useMemo(() => {
            let e = (0, d.Qg)(U.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: d.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, c.r5)(e, 0.3),
                '--custom-cta-color-active': (0, c.r5)(e, 0.35)
            };
        }, [U.config.colors.primary]);
    return (0, o.jsxs)(i.animated.div, {
        className: a()(M, P.contentExpanded, { [P.contentInteractable]: eu }),
        style: {
            backgroundColor: U.config.colors.secondary,
            transform: ec
                ? void 0
                : (0, i.to)(
                      [
                          L.to({
                              range: [0, 1],
                              output: [0, -100]
                          }),
                          L.to({
                              range: [0, 1],
                              output: [0, W]
                          })
                      ],
                      (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
                  )
        },
        children: [
            _,
            (0, o.jsx)('div', {
                'aria-hidden': !eu,
                children: el
                    ? (0, o.jsxs)('div', {
                          className: P.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, o.jsxs)('div', {
                                  className: P.utils,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: P.questAcceptedContentHeading,
                                          children: [
                                              (0, o.jsx)(S.Z, {
                                                  className: P.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: U,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: w.dr.QUESTS_BAR
                                              }),
                                              (0, o.jsxs)('div', {
                                                  children: [
                                                      (0, o.jsx)(u.Heading, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, j.AV)({
                                                              quest: U,
                                                              taskDetails: es,
                                                              thirdPartyTaskDetails: null != ea ? ea : void 0
                                                          })
                                                      }),
                                                      (0, o.jsx)(u.Text, {
                                                          className: P.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: ec ? q.intl.formatToPlainString(q.t.APddvL, { expirationDate: K }) : q.intl.formatToPlainString(q.t['pX+fmp'], { expirationDate: G })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(y.r, {
                                          onOpen: D,
                                          onClose: H,
                                          onSelect: V,
                                          questContent: v.jn.QUEST_BAR,
                                          quest: U,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, o.jsx)(u.Clickable, {
                                                  ...e,
                                                  className: P.submenuWrapper,
                                                  'aria-label': q.intl.string(q.t.DEoVWV),
                                                  children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: P.submenuIcon
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              ec
                                  ? (0, o.jsx)(u.Button, {
                                        className: a()(P.cta, P.ctaClaimReward),
                                        style: ed ? ex : void 0,
                                        color: u.Button.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: en,
                                        size: u.Button.Sizes.NONE,
                                        children: q.intl.string(q.t.cfY4PD)
                                    })
                                  : (0, o.jsx)(u.Text, {
                                        className: P.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ep
                                    }),
                              (0, o.jsx)(B.Z, { quest: U }),
                              !em && !ei && !J && er && (0, o.jsx)(O, { onClick: eu ? eo : void 0 })
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          children: [
                              (0, o.jsxs)('div', {
                                  className: P.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: P.utils,
                                          children: [
                                              (0, o.jsx)(T.Z, { color: 'always-white' }),
                                              (0, o.jsx)(y.r, {
                                                  onOpen: D,
                                                  onClose: H,
                                                  onSelect: V,
                                                  questContent: v.jn.QUEST_BAR,
                                                  quest: U,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, o.jsx)(u.Clickable, {
                                                          ...e,
                                                          className: P.submenuWrapper,
                                                          'aria-label': q.intl.string(q.t.DEoVWV),
                                                          children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: P.submenuIcon
                                                          })
                                                      })
                                              })
                                          ]
                                      }),
                                      (0, o.jsxs)('div', {
                                          className: P.details,
                                          children: [
                                              (0, o.jsx)(S.Z, {
                                                  className: P.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: U,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: w.dr.QUESTS_BAR
                                              }),
                                              (0, o.jsx)(u.Heading, {
                                                  className: P.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: q.intl.format(q.t.EQa7oq, { questName: U.config.messages.questName })
                                              }),
                                              (0, o.jsx)(u.Text, {
                                                  className: P.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ep
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(u.Button, {
                                          className: P.cta,
                                          style: '1232852290197655573' !== U.id ? ex : void 0,
                                          color: u.Button.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: eu ? et : void 0,
                                          size: u.Button.Sizes.NONE,
                                          submitting: F,
                                          children: ee
                                      })
                                  ]
                              }),
                              (0, o.jsx)('div', {
                                  className: P.heroAssetWrapper,
                                  style: { color: U.config.colors.secondary },
                                  children: X.isAnimated
                                      ? (0, o.jsx)(A.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, o.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !z,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: P.heroAsset,
                                                    controls: !1,
                                                    children: (0, o.jsx)('source', {
                                                        src: X.url,
                                                        type: null !== (t = X.mimetype) && void 0 !== t ? t : void 0
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
                                                    className: P.heroAsset,
                                                    src: X.url
                                                })
                                        })
                              })
                          ]
                      })
            })
        ]
    });
});
function O(e) {
    let { style: t, onClick: n } = e;
    return (0, _.O)({
        location: w.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, o.jsx)(u.Button, {
              className: P.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: q.intl.string(q.t.lwQdjI)
          })
        : null;
}
t.Z = M;
