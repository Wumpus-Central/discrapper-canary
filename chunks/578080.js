n.d(t, { Z: () => W }), n(953529);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(524979),
    l = n(442837),
    c = n(950104),
    d = n(780384),
    u = n(481060),
    p = n(70097),
    m = n(703656),
    f = n(358085),
    g = n(617136),
    x = n(915750),
    h = n(272008),
    b = n(113434),
    j = n(569984),
    v = n(497505),
    y = n(918701),
    _ = n(865364),
    C = n(373370),
    O = n(475595),
    w = n(566078),
    S = n(340100),
    P = n(611855),
    E = n(644646),
    T = n(78826),
    N = n(670638),
    A = n(667105),
    R = n(46140),
    k = n(981631),
    B = n(701488),
    q = n(388032),
    I = n(92503);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function M(e, t) {
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
    return (0, _.O)({
        location: R.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, r.jsx)(u.zxk, {
              className: I.cta,
              style: t,
              color: u.zxk.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.zxk.Sizes.NONE,
              children: q.intl.string(q.t.lwQdjI)
          })
        : null;
}
let W = o.forwardRef(function (e, t) {
    var n, s;
    let { children: _, className: W, collapsedHeight: V, expansionSpring: Z, isExpanded: Q, isExpansionAnimationComplete: H, onCtxMenuOpen: U, onCtxMenuClose: z, onCtxMenuSelect: F, quest: K, useReducedMotion: X } = e,
        Y = (0, l.e7)([j.Z], () => j.Z.isEnrolling(K.id), [K]),
        G = (0, x.aM)(),
        J = (0, b.B6)(K.config.expiresAt),
        $ = w.r.build(K.config),
        ee = (0, b.B6)($.rewardsExpireAt),
        et = o.useMemo(() => (0, O.fh)(K, O.eC.HERO), [K]),
        en = (0, A.tP)($.application.id),
        er = $.features.has(R.S7.START_QUEST_CTA) ? g.jZ.START_QUEST : g.jZ.ACCEPT_QUEST,
        eo = $.features.has(R.S7.START_QUEST_CTA) ? q.intl.string(q.t.E80Bdn) : q.intl.string(q.t.l7E81t),
        es = o.useCallback(() => {
            (0, h.AH)(K.id, {
                questContent: v.jn.QUEST_BAR,
                questContentCTA: er
            }),
                $.features.has(R.S7.START_QUEST_CTA) && (0, m.uL)(k.Z5c.ACTIVITY_DETAILS(B.In), void 0);
        }, [K, er, $.features]),
        ea = (0, A.hf)({
            quest: K,
            location: v.jn.QUEST_BAR
        }),
        ei = o.useCallback(() => {
            (0, y.nc)(K, {
                content: v.jn.QUEST_BAR,
                ctaContent: g.jZ.OPEN_GAME_LINK,
                impressionId: G
            });
        }, [G, K]),
        el = $.features.has(R.S7.POST_ENROLLMENT_CTA),
        ec = (0, b.Rf)(K),
        ed = (0, b.Jf)(K),
        eu = null != ed ? ed.progress > 0 : ec.progressSeconds > 0,
        ep = (null == (n = K.userStatus) ? void 0 : n.enrolledAt) != null,
        em = (null == (s = K.userStatus) ? void 0 : s.completedAt) != null,
        ef = o.useMemo(() => (0, y.Xv)(K.config), [K.config]),
        eg = Q && H,
        ex = (0, C.DD)({
            quest: K,
            taskDetails: ec,
            location: R.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ed ? ed : void 0
        }),
        eh = (0, f.isWeb)(),
        eb = o.useMemo(() => {
            let e = (0, d.Qg)(K.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: d.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, c.r5)(e, 0.3),
                '--custom-cta-color-active': (0, c.r5)(e, 0.35)
            };
        }, [K.config.colors.primary]);
    return (0, r.jsxs)(i.animated.div, {
        className: a()(W, I.contentExpanded, { [I.contentInteractable]: eg }),
        style: {
            backgroundColor: K.config.colors.secondary,
            transform: em
                ? void 0
                : (0, i.to)(
                      [
                          Z.to({
                              range: [0, 1],
                              output: [0, -100]
                          }),
                          Z.to({
                              range: [0, 1],
                              output: [0, V]
                          })
                      ],
                      (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
                  )
        },
        children: [
            _,
            (0, r.jsx)('div', {
                'aria-hidden': !eg,
                children: ep
                    ? (0, r.jsxs)('div', {
                          className: I.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: I.utils,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: I.questAcceptedContentHeading,
                                          children: [
                                              (0, r.jsx)(E.Z, {
                                                  className: I.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: K,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: R.dr.QUESTS_BAR
                                              }),
                                              (0, r.jsxs)('div', {
                                                  children: [
                                                      (0, r.jsx)(u.X6q, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, y.AV)({
                                                              quest: K,
                                                              taskDetails: ec,
                                                              thirdPartyTaskDetails: null != ed ? ed : void 0
                                                          })
                                                      }),
                                                      (0, r.jsx)(u.Text, {
                                                          className: I.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: em ? q.intl.formatToPlainString(q.t.APddvL, { expirationDate: ee }) : q.intl.formatToPlainString(q.t['pX+fmp'], { expirationDate: J })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(N.r, {
                                          onOpen: U,
                                          onClose: z,
                                          onSelect: F,
                                          questContent: v.jn.QUEST_BAR,
                                          quest: K,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  u.P3F,
                                                  M(D({}, e), {
                                                      className: I.submenuWrapper,
                                                      'aria-label': q.intl.string(q.t.DEoVWV),
                                                      children: (0, r.jsx)(u.xhG, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: I.submenuIcon
                                                      })
                                                  })
                                              )
                                      })
                                  ]
                              }),
                              em
                                  ? (0, r.jsx)(u.zxk, {
                                        className: a()(I.cta, I.ctaClaimReward),
                                        style: ef ? eb : void 0,
                                        color: u.zxk.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: ea,
                                        size: u.zxk.Sizes.NONE,
                                        children: q.intl.string(q.t.cfY4PD)
                                    })
                                  : (0, r.jsx)(u.Text, {
                                        className: I.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ex
                                    }),
                              (0, r.jsx)(S.Z, { quest: K }),
                              !eh && !eu && !en && el && (0, r.jsx)(L, { onClick: eg ? ei : void 0 })
                          ]
                      })
                    : (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: I.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: I.utils,
                                          children: [
                                              (0, r.jsx)(P.Z, { color: 'always-white' }),
                                              (0, r.jsx)(N.r, {
                                                  onOpen: U,
                                                  onClose: z,
                                                  onSelect: F,
                                                  questContent: v.jn.QUEST_BAR,
                                                  quest: K,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, r.jsx)(
                                                          u.P3F,
                                                          M(D({}, e), {
                                                              className: I.submenuWrapper,
                                                              'aria-label': q.intl.string(q.t.DEoVWV),
                                                              children: (0, r.jsx)(u.xhG, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: I.submenuIcon
                                                              })
                                                          })
                                                      )
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: I.details,
                                          children: [
                                              (0, r.jsx)(E.Z, {
                                                  className: I.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: K,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: R.dr.QUESTS_BAR
                                              }),
                                              (0, r.jsx)(u.X6q, {
                                                  className: I.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: q.intl.format(q.t.EQa7oq, { questName: K.config.messages.questName })
                                              }),
                                              (0, r.jsx)(u.Text, {
                                                  className: I.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ex
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(u.zxk, {
                                          className: I.cta,
                                          style: '1232852290197655573' !== K.id ? eb : void 0,
                                          color: u.zxk.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: eg ? es : void 0,
                                          size: u.zxk.Sizes.NONE,
                                          submitting: Y,
                                          children: eo
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: I.heroAssetWrapper,
                                  style: { color: K.config.colors.secondary },
                                  children: et.isAnimated
                                      ? (0, r.jsx)(T.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, r.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !X,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: I.heroAsset,
                                                    controls: !1,
                                                    children: (0, r.jsx)('source', {
                                                        src: et.url,
                                                        type: null != (t = et.mimetype) ? t : void 0
                                                    })
                                                });
                                            }
                                        })
                                      : (0, r.jsx)(T.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, r.jsx)('img', {
                                                    ref: e,
                                                    alt: '',
                                                    className: I.heroAsset,
                                                    src: et.url
                                                })
                                        })
                              })
                          ]
                      })
            })
        ]
    });
});
