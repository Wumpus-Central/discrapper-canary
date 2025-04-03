n.d(t, { Z: () => L }), n(266796);
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
    N = n(644646),
    E = n(78826),
    T = n(670638),
    A = n(667105),
    B = n(46140),
    R = n(981631),
    k = n(701488),
    q = n(388032),
    D = n(92503);
function I(e) {
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
function W(e, t) {
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
function M(e) {
    let { style: t, onClick: n } = e;
    return (0, _.O)({
        location: B.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, r.jsx)(u.zxk, {
              className: D.cta,
              style: t,
              color: u.zxk.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.zxk.Sizes.NONE,
              children: q.NW.string(q.t.lwQdjI)
          })
        : null;
}
let L = o.forwardRef(function (e, t) {
    var n, s;
    let { children: _, className: L, collapsedHeight: Z, expansionSpring: V, isExpanded: Q, isExpansionAnimationComplete: U, onCtxMenuOpen: H, onCtxMenuClose: z, onCtxMenuSelect: F, quest: X, useReducedMotion: K } = e,
        Y = (0, l.e7)([j.Z], () => j.Z.isEnrolling(X.id), [X]),
        G = (0, x.aM)(),
        J = (0, b.B6)(X.config.expiresAt),
        $ = w.r.build(X.config),
        ee = (0, b.B6)($.rewardsExpireAt),
        et = o.useMemo(() => (0, O.fh)(X, O.eC.HERO), [X]),
        en = (0, A.tP)($.application.id),
        er = $.features.has(B.S7.START_QUEST_CTA) ? g.jZ.START_QUEST : g.jZ.ACCEPT_QUEST,
        eo = $.features.has(B.S7.START_QUEST_CTA) ? q.NW.string(q.t.E80Bdn) : q.NW.string(q.t.l7E81t),
        es = o.useCallback(() => {
            (0, h.AH)(X.id, {
                questContent: v.jn.QUEST_BAR,
                questContentCTA: er
            }),
                $.features.has(B.S7.START_QUEST_CTA) && (0, m.uL)(R.Z5c.ACTIVITY_DETAILS(k.In), void 0);
        }, [X, er, $.features]),
        ea = (0, A.hf)({
            quest: X,
            location: v.jn.QUEST_BAR
        }),
        ei = o.useCallback(() => {
            (0, y.FE)(X, {
                content: v.jn.QUEST_BAR,
                ctaContent: g.jZ.OPEN_GAME_LINK,
                impressionId: G
            });
        }, [G, X]),
        el = $.features.has(B.S7.POST_ENROLLMENT_CTA),
        ec = (0, b.Rf)(X),
        ed = (0, b.Jf)(X),
        eu = null != ed ? ed.progress > 0 : ec.progressSeconds > 0,
        ep = (null == (n = X.userStatus) ? void 0 : n.enrolledAt) != null,
        em = (null == (s = X.userStatus) ? void 0 : s.completedAt) != null,
        ef = o.useMemo(() => (0, y.Xv)(X.config), [X.config]),
        eg = Q && U,
        ex = (0, C.DD)({
            quest: X,
            taskDetails: ec,
            location: B.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ed ? ed : void 0
        }),
        eh = (0, f.isWeb)(),
        eb = o.useMemo(() => {
            let e = (0, d.Qg)(X.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: d.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, c.r5)(e, 0.3),
                '--custom-cta-color-active': (0, c.r5)(e, 0.35)
            };
        }, [X.config.colors.primary]);
    return (0, r.jsxs)(i.animated.div, {
        className: a()(L, D.contentExpanded, { [D.contentInteractable]: eg }),
        style: {
            backgroundColor: X.config.colors.secondary,
            transform: em
                ? void 0
                : (0, i.to)(
                      [
                          V.to({
                              range: [0, 1],
                              output: [0, -100]
                          }),
                          V.to({
                              range: [0, 1],
                              output: [0, Z]
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
                          className: D.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: D.utils,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: D.questAcceptedContentHeading,
                                          children: [
                                              (0, r.jsx)(N.Z, {
                                                  className: D.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: X,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: B.dr.QUESTS_BAR
                                              }),
                                              (0, r.jsxs)('div', {
                                                  children: [
                                                      (0, r.jsx)(u.X6q, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, y.AV)({
                                                              quest: X,
                                                              taskDetails: ec,
                                                              thirdPartyTaskDetails: null != ed ? ed : void 0
                                                          })
                                                      }),
                                                      (0, r.jsx)(u.Text, {
                                                          className: D.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: em ? q.NW.formatToPlainString(q.t.APddvL, { expirationDate: ee }) : q.NW.formatToPlainString(q.t['pX+fmp'], { expirationDate: J })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(T.r, {
                                          onOpen: H,
                                          onClose: z,
                                          onSelect: F,
                                          questContent: v.jn.QUEST_BAR,
                                          quest: X,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  u.P3F,
                                                  W(I({}, e), {
                                                      className: D.submenuWrapper,
                                                      'aria-label': q.NW.string(q.t.DEoVWV),
                                                      children: (0, r.jsx)(u.xhG, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: D.submenuIcon
                                                      })
                                                  })
                                              )
                                      })
                                  ]
                              }),
                              em
                                  ? (0, r.jsx)(u.zxk, {
                                        className: a()(D.cta, D.ctaClaimReward),
                                        style: ef ? eb : void 0,
                                        color: u.zxk.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: ea,
                                        size: u.zxk.Sizes.NONE,
                                        children: q.NW.string(q.t.cfY4PD)
                                    })
                                  : (0, r.jsx)(u.Text, {
                                        className: D.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ex
                                    }),
                              (0, r.jsx)(S.Z, { quest: X }),
                              !eh && !eu && !en && el && (0, r.jsx)(M, { onClick: eg ? ei : void 0 })
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
                                              (0, r.jsx)(T.r, {
                                                  onOpen: H,
                                                  onClose: z,
                                                  onSelect: F,
                                                  questContent: v.jn.QUEST_BAR,
                                                  quest: X,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, r.jsx)(
                                                          u.P3F,
                                                          W(I({}, e), {
                                                              className: D.submenuWrapper,
                                                              'aria-label': q.NW.string(q.t.DEoVWV),
                                                              children: (0, r.jsx)(u.xhG, {
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
                                              (0, r.jsx)(N.Z, {
                                                  className: D.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: X,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: B.dr.QUESTS_BAR
                                              }),
                                              (0, r.jsx)(u.X6q, {
                                                  className: D.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: q.NW.format(q.t.EQa7oq, { questName: X.config.messages.questName })
                                              }),
                                              (0, r.jsx)(u.Text, {
                                                  className: D.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ex
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(u.zxk, {
                                          className: D.cta,
                                          style: '1232852290197655573' !== X.id ? eb : void 0,
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
                                  className: D.heroAssetWrapper,
                                  style: { color: X.config.colors.secondary },
                                  children: et.isAnimated
                                      ? (0, r.jsx)(E.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, r.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !K,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: D.heroAsset,
                                                    controls: !1,
                                                    children: (0, r.jsx)('source', {
                                                        src: et.url,
                                                        type: null != (t = et.mimetype) ? t : void 0
                                                    })
                                                });
                                            }
                                        })
                                      : (0, r.jsx)(E.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, r.jsx)('img', {
                                                    ref: e,
                                                    alt: '',
                                                    className: D.heroAsset,
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
