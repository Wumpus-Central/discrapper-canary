(n.d(t, { Z: () => M }), n(953529));
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(108542),
    l = n(442837),
    c = n(950104),
    u = n(780384),
    d = n(755721),
    p = n(481060),
    m = n(70097),
    f = n(703656),
    g = n(358085),
    x = n(617136),
    h = n(915750),
    b = n(272008),
    j = n(113434),
    _ = n(569984),
    v = n(497505),
    y = n(918701),
    C = n(865364),
    O = n(373370),
    E = n(475595),
    S = n(566078),
    w = n(340100),
    P = n(611855),
    T = n(644646),
    N = n(78826),
    A = n(670638),
    R = n(667105),
    B = n(46140),
    k = n(981631),
    q = n(701488),
    I = n(388032),
    D = n(92503);
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
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
function L(e) {
    let { style: t, onClick: n } = e;
    return (0, C.O)({
        location: B.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, r.jsx)(d.zx, {
              className: D.cta,
              style: t,
              color: d.zx.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: d.zx.Sizes.NONE,
              children: I.intl.string(I.t.lwQdjI)
          })
        : null;
}
let M = s.forwardRef(function (e, t) {
    var n, o;
    let { children: C, className: M, collapsedHeight: W, expansionSpring: Z, isExpanded: U, isExpansionAnimationComplete: H, onCtxMenuOpen: z, onCtxMenuClose: F, onCtxMenuSelect: X, quest: K, useReducedMotion: Y } = e,
        G = (0, l.e7)([_.Z], () => _.Z.isEnrolling(K.id), [K]),
        J = (0, h.aM)(),
        $ = (0, j.B6)(K.config.expiresAt),
        ee = S.r.build(K.config),
        et = (0, j.B6)(ee.rewardsExpireAt),
        en = s.useMemo(() => (0, E.fh)(K, E.eC.HERO), [K]),
        er = (0, R.tP)(ee.application.id),
        es = ee.features.has(B.S7.START_QUEST_CTA) ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST,
        eo = ee.features.has(B.S7.START_QUEST_CTA) ? I.intl.string(I.t.E80Bdn) : I.intl.string(I.t.l7E81t),
        ea = s.useCallback(() => {
            ((0, b.AH)(K.id, {
                questContent: v.jn.QUEST_BAR,
                questContentCTA: es,
                sourceQuestContent: v.jn.QUEST_BAR
            }),
                ee.features.has(B.S7.START_QUEST_CTA) && (0, f.uL)(k.Z5c.ACTIVITY_DETAILS(q.In), void 0));
        }, [K, es, ee.features]),
        ei = (0, R.hf)({
            quest: K,
            questContent: v.jn.QUEST_BAR,
            sourceQuestContent: v.jn.QUEST_BAR
        }),
        el = s.useCallback(() => {
            (0, y.nc)(K, {
                content: v.jn.QUEST_BAR,
                ctaContent: x.jZ.OPEN_GAME_LINK,
                impressionId: J,
                sourceQuestContent: v.jn.QUEST_BAR
            });
        }, [J, K]),
        ec = ee.features.has(B.S7.POST_ENROLLMENT_CTA),
        eu = (0, j.Rf)(K),
        ed = (0, j.Jf)(K),
        ep = null != ed ? ed.progress > 0 : eu.progressSeconds > 0,
        em = (null == (n = K.userStatus) ? void 0 : n.enrolledAt) != null,
        ef = (null == (o = K.userStatus) ? void 0 : o.completedAt) != null,
        eg = s.useMemo(() => (0, y.Xv)(K.config), [K.config]),
        ex = U && H,
        eh = (0, O.DD)({
            quest: K,
            taskDetails: eu,
            location: B.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ed ? ed : void 0,
            sourceQuestContent: v.jn.QUEST_BAR
        }),
        eb = (0, g.isWeb)(),
        ej = s.useMemo(() => {
            let e = (0, u.Qg)(K.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: u.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, c.r5)(e, 0.3),
                '--custom-cta-color-active': (0, c.r5)(e, 0.35)
            };
        }, [K.config.colors.primary]);
    return (0, r.jsxs)(i.animated.div, {
        className: a()(M, D.contentExpanded, { [D.contentInteractable]: ex }),
        style: {
            backgroundColor: K.config.colors.secondary,
            transform: ef
                ? void 0
                : (0, i.to)(
                      [
                          Z.to({
                              range: [0, 1],
                              output: [0, -100]
                          }),
                          Z.to({
                              range: [0, 1],
                              output: [0, W]
                          })
                      ],
                      (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
                  )
        },
        children: [
            C,
            (0, r.jsx)('div', {
                'aria-hidden': !ex,
                children: em
                    ? (0, r.jsxs)('div', {
                          className: D.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: D.utils,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: D.questAcceptedContentHeading,
                                          children: [
                                              (0, r.jsx)(T.Z, {
                                                  className: D.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: K,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: B.dr.QUESTS_BAR,
                                                  sourceQuestContent: v.jn.QUEST_BAR
                                              }),
                                              (0, r.jsxs)('div', {
                                                  children: [
                                                      (0, r.jsx)(p.X6q, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, y.AV)({
                                                              quest: K,
                                                              taskDetails: eu,
                                                              thirdPartyTaskDetails: null != ed ? ed : void 0
                                                          })
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          className: D.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: ef ? I.intl.formatToPlainString(I.t.APddvL, { expirationDate: et }) : I.intl.formatToPlainString(I.t['pX+fmp'], { expirationDate: $ })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(A.r, {
                                          onOpen: z,
                                          onClose: F,
                                          onSelect: X,
                                          questContent: v.jn.QUEST_BAR,
                                          quest: K,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          sourceQuestContent: v.jn.QUEST_BAR,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  p.P3F,
                                                  V(Q({}, e), {
                                                      className: D.submenuWrapper,
                                                      'aria-label': I.intl.string(I.t.DEoVWV),
                                                      children: (0, r.jsx)(p.xhG, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: D.submenuIcon
                                                      })
                                                  })
                                              )
                                      })
                                  ]
                              }),
                              ef
                                  ? (0, r.jsx)(d.zx, {
                                        className: a()(D.cta, D.ctaClaimReward),
                                        style: eg ? ej : void 0,
                                        color: d.zx.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: ei,
                                        size: d.zx.Sizes.NONE,
                                        children: I.intl.string(I.t.cfY4PD)
                                    })
                                  : (0, r.jsx)(p.Text, {
                                        className: D.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: eh
                                    }),
                              (0, r.jsx)(w.Z, { quest: K }),
                              !eb && !ep && !er && ec && (0, r.jsx)(L, { onClick: ex ? el : void 0 })
                          ]
                      })
                    : (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: D.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: D.utils,
                                          children: [
                                              (0, r.jsx)(P.Z, { color: 'always-white' }),
                                              (0, r.jsx)(A.r, {
                                                  onOpen: z,
                                                  onClose: F,
                                                  onSelect: X,
                                                  questContent: v.jn.QUEST_BAR,
                                                  quest: K,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  sourceQuestContent: v.jn.QUEST_BAR,
                                                  children: (e) =>
                                                      (0, r.jsx)(
                                                          p.P3F,
                                                          V(Q({}, e), {
                                                              className: D.submenuWrapper,
                                                              'aria-label': I.intl.string(I.t.DEoVWV),
                                                              children: (0, r.jsx)(p.xhG, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: D.submenuIcon
                                                              })
                                                          })
                                                      )
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: D.details,
                                          children: [
                                              (0, r.jsx)(T.Z, {
                                                  className: D.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: K,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: B.dr.QUESTS_BAR,
                                                  sourceQuestContent: v.jn.QUEST_BAR
                                              }),
                                              (0, r.jsx)(p.X6q, {
                                                  className: D.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: I.intl.format(I.t.EQa7oq, { questName: K.config.messages.questName })
                                              }),
                                              (0, r.jsx)(p.Text, {
                                                  className: D.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: eh
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(d.zx, {
                                          className: D.cta,
                                          style: '1232852290197655573' !== K.id ? ej : void 0,
                                          color: d.zx.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: ex ? ea : void 0,
                                          size: d.zx.Sizes.NONE,
                                          submitting: G,
                                          children: eo
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: D.heroAssetWrapper,
                                  style: { color: K.config.colors.secondary },
                                  children: en.isAnimated
                                      ? (0, r.jsx)(N.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, r.jsx)(m.Z, {
                                                    ref: e,
                                                    autoPlay: !Y,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: D.heroAsset,
                                                    controls: !1,
                                                    children: (0, r.jsx)('source', {
                                                        src: en.url,
                                                        type: null != (t = en.mimetype) ? t : void 0
                                                    })
                                                });
                                            }
                                        })
                                      : (0, r.jsx)(N.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, r.jsx)('img', {
                                                    ref: e,
                                                    alt: '',
                                                    className: D.heroAsset,
                                                    src: en.url
                                                })
                                        })
                              })
                          ]
                      })
            })
        ]
    });
});
