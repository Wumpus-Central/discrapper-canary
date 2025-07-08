(n.d(t, { Z: () => L }), n(953529));
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(264738),
    l = n(442837),
    c = n(950104),
    u = n(780384),
    d = n(481060),
    p = n(70097),
    m = n(703656),
    f = n(358085),
    g = n(617136),
    x = n(915750),
    h = n(272008),
    b = n(113434),
    j = n(569984),
    _ = n(497505),
    v = n(918701),
    y = n(865364),
    C = n(373370),
    O = n(475595),
    E = n(566078),
    S = n(340100),
    w = n(611855),
    P = n(644646),
    T = n(78826),
    N = n(670638),
    A = n(667105),
    R = n(46140),
    k = n(981631),
    B = n(701488),
    I = n(388032),
    q = n(92503);
function D(e) {
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
function Q(e, t) {
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
function V(e) {
    let { style: t, onClick: n } = e;
    return (0, y.O)({
        location: R.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, r.jsx)(d.zxk, {
              className: q.cta,
              style: t,
              color: d.zxk.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: d.zxk.Sizes.NONE,
              children: I.intl.string(I.t.lwQdjI)
          })
        : null;
}
let L = o.forwardRef(function (e, t) {
    var n, s;
    let { children: y, className: L, collapsedHeight: M, expansionSpring: W, isExpanded: Z, isExpansionAnimationComplete: U, onCtxMenuOpen: H, onCtxMenuClose: z, onCtxMenuSelect: F, quest: X, useReducedMotion: K } = e,
        Y = (0, l.e7)([j.Z], () => j.Z.isEnrolling(X.id), [X]),
        G = (0, x.aM)(),
        J = (0, b.B6)(X.config.expiresAt),
        $ = E.r.build(X.config),
        ee = (0, b.B6)($.rewardsExpireAt),
        et = o.useMemo(() => (0, O.fh)(X, O.eC.HERO), [X]),
        en = (0, A.tP)($.application.id),
        er = $.features.has(R.S7.START_QUEST_CTA) ? g.jZ.START_QUEST : g.jZ.ACCEPT_QUEST,
        eo = $.features.has(R.S7.START_QUEST_CTA) ? I.intl.string(I.t.E80Bdn) : I.intl.string(I.t.l7E81t),
        es = o.useCallback(() => {
            ((0, h.AH)(X.id, {
                questContent: _.jn.QUEST_BAR,
                questContentCTA: er,
                sourceQuestContent: _.jn.QUEST_BAR
            }),
                $.features.has(R.S7.START_QUEST_CTA) && (0, m.uL)(k.Z5c.ACTIVITY_DETAILS(B.In), void 0));
        }, [X, er, $.features]),
        ea = (0, A.hf)({
            quest: X,
            questContent: _.jn.QUEST_BAR,
            sourceQuestContent: _.jn.QUEST_BAR
        }),
        ei = o.useCallback(() => {
            (0, v.nc)(X, {
                content: _.jn.QUEST_BAR,
                ctaContent: g.jZ.OPEN_GAME_LINK,
                impressionId: G,
                sourceQuestContent: _.jn.QUEST_BAR
            });
        }, [G, X]),
        el = $.features.has(R.S7.POST_ENROLLMENT_CTA),
        ec = (0, b.Rf)(X),
        eu = (0, b.Jf)(X),
        ed = null != eu ? eu.progress > 0 : ec.progressSeconds > 0,
        ep = (null == (n = X.userStatus) ? void 0 : n.enrolledAt) != null,
        em = (null == (s = X.userStatus) ? void 0 : s.completedAt) != null,
        ef = o.useMemo(() => (0, v.Xv)(X.config), [X.config]),
        eg = Z && U,
        ex = (0, C.DD)({
            quest: X,
            taskDetails: ec,
            location: R.dr.QUESTS_BAR,
            questContent: _.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != eu ? eu : void 0,
            sourceQuestContent: _.jn.QUEST_BAR
        }),
        eh = (0, f.isWeb)(),
        eb = o.useMemo(() => {
            let e = (0, u.Qg)(X.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: u.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, c.r5)(e, 0.3),
                '--custom-cta-color-active': (0, c.r5)(e, 0.35)
            };
        }, [X.config.colors.primary]);
    return (0, r.jsxs)(i.animated.div, {
        className: a()(L, q.contentExpanded, { [q.contentInteractable]: eg }),
        style: {
            backgroundColor: X.config.colors.secondary,
            transform: em
                ? void 0
                : (0, i.to)(
                      [
                          W.to({
                              range: [0, 1],
                              output: [0, -100]
                          }),
                          W.to({
                              range: [0, 1],
                              output: [0, M]
                          })
                      ],
                      (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
                  )
        },
        children: [
            y,
            (0, r.jsx)('div', {
                'aria-hidden': !eg,
                children: ep
                    ? (0, r.jsxs)('div', {
                          className: q.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: q.utils,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: q.questAcceptedContentHeading,
                                          children: [
                                              (0, r.jsx)(P.Z, {
                                                  className: q.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: X,
                                                  questContent: _.jn.QUEST_BAR,
                                                  location: R.dr.QUESTS_BAR,
                                                  sourceQuestContent: _.jn.QUEST_BAR
                                              }),
                                              (0, r.jsxs)('div', {
                                                  children: [
                                                      (0, r.jsx)(d.X6q, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, v.AV)({
                                                              quest: X,
                                                              taskDetails: ec,
                                                              thirdPartyTaskDetails: null != eu ? eu : void 0
                                                          })
                                                      }),
                                                      (0, r.jsx)(d.Text, {
                                                          className: q.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: em ? I.intl.formatToPlainString(I.t.APddvL, { expirationDate: ee }) : I.intl.formatToPlainString(I.t['pX+fmp'], { expirationDate: J })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(N.r, {
                                          onOpen: H,
                                          onClose: z,
                                          onSelect: F,
                                          questContent: _.jn.QUEST_BAR,
                                          quest: X,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          sourceQuestContent: _.jn.QUEST_BAR,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  d.P3F,
                                                  Q(D({}, e), {
                                                      className: q.submenuWrapper,
                                                      'aria-label': I.intl.string(I.t.DEoVWV),
                                                      children: (0, r.jsx)(d.xhG, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: q.submenuIcon
                                                      })
                                                  })
                                              )
                                      })
                                  ]
                              }),
                              em
                                  ? (0, r.jsx)(d.zxk, {
                                        className: a()(q.cta, q.ctaClaimReward),
                                        style: ef ? eb : void 0,
                                        color: d.zxk.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: ea,
                                        size: d.zxk.Sizes.NONE,
                                        children: I.intl.string(I.t.cfY4PD)
                                    })
                                  : (0, r.jsx)(d.Text, {
                                        className: q.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ex
                                    }),
                              (0, r.jsx)(S.Z, { quest: X }),
                              !eh && !ed && !en && el && (0, r.jsx)(V, { onClick: eg ? ei : void 0 })
                          ]
                      })
                    : (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: q.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: q.utils,
                                          children: [
                                              (0, r.jsx)(w.Z, { color: 'always-white' }),
                                              (0, r.jsx)(N.r, {
                                                  onOpen: H,
                                                  onClose: z,
                                                  onSelect: F,
                                                  questContent: _.jn.QUEST_BAR,
                                                  quest: X,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  sourceQuestContent: _.jn.QUEST_BAR,
                                                  children: (e) =>
                                                      (0, r.jsx)(
                                                          d.P3F,
                                                          Q(D({}, e), {
                                                              className: q.submenuWrapper,
                                                              'aria-label': I.intl.string(I.t.DEoVWV),
                                                              children: (0, r.jsx)(d.xhG, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: q.submenuIcon
                                                              })
                                                          })
                                                      )
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: q.details,
                                          children: [
                                              (0, r.jsx)(P.Z, {
                                                  className: q.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: X,
                                                  questContent: _.jn.QUEST_BAR,
                                                  location: R.dr.QUESTS_BAR,
                                                  sourceQuestContent: _.jn.QUEST_BAR
                                              }),
                                              (0, r.jsx)(d.X6q, {
                                                  className: q.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: I.intl.format(I.t.EQa7oq, { questName: X.config.messages.questName })
                                              }),
                                              (0, r.jsx)(d.Text, {
                                                  className: q.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ex
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(d.zxk, {
                                          className: q.cta,
                                          style: '1232852290197655573' !== X.id ? eb : void 0,
                                          color: d.zxk.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: eg ? es : void 0,
                                          size: d.zxk.Sizes.NONE,
                                          submitting: Y,
                                          children: eo
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: q.heroAssetWrapper,
                                  style: { color: X.config.colors.secondary },
                                  children: et.isAnimated
                                      ? (0, r.jsx)(T.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, r.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !K,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: q.heroAsset,
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
                                                    className: q.heroAsset,
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
