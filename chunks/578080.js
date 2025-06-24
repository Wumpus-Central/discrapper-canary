n.d(t, { Z: () => V }), n(953529);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(524979),
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
    S = n(566078),
    E = n(340100),
    w = n(611855),
    T = n(644646),
    P = n(78826),
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
function L(e) {
    let { style: t, onClick: n } = e;
    return (0, y.O)({
        location: R.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, r.jsx)(d.zxk, {
              className: I.cta,
              style: t,
              color: d.zxk.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: d.zxk.Sizes.NONE,
              children: q.intl.string(q.t.lwQdjI)
          })
        : null;
}
let V = s.forwardRef(function (e, t) {
    var n, o;
    let { children: y, className: V, collapsedHeight: M, expansionSpring: W, isExpanded: Z, isExpansionAnimationComplete: U, onCtxMenuOpen: H, onCtxMenuClose: z, onCtxMenuSelect: F, quest: X, useReducedMotion: K } = e,
        Y = (0, l.e7)([j.Z], () => j.Z.isEnrolling(X.id), [X]),
        G = (0, x.aM)(),
        J = (0, b.B6)(X.config.expiresAt),
        $ = S.r.build(X.config),
        ee = (0, b.B6)($.rewardsExpireAt),
        et = s.useMemo(() => (0, O.fh)(X, O.eC.HERO), [X]),
        en = (0, A.tP)($.application.id),
        er = $.features.has(R.S7.START_QUEST_CTA) ? g.jZ.START_QUEST : g.jZ.ACCEPT_QUEST,
        es = $.features.has(R.S7.START_QUEST_CTA) ? q.intl.string(q.t.E80Bdn) : q.intl.string(q.t.l7E81t),
        eo = s.useCallback(() => {
            (0, h.AH)(X.id, {
                questContent: _.jn.QUEST_BAR,
                questContentCTA: er,
                sourceQuestContent: _.jn.QUEST_BAR
            }),
                $.features.has(R.S7.START_QUEST_CTA) && (0, m.uL)(k.Z5c.ACTIVITY_DETAILS(B.In), void 0);
        }, [X, er, $.features]),
        ea = (0, A.hf)({
            quest: X,
            questContent: _.jn.QUEST_BAR,
            sourceQuestContent: _.jn.QUEST_BAR
        }),
        ei = s.useCallback(() => {
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
        em = (null == (o = X.userStatus) ? void 0 : o.completedAt) != null,
        ef = s.useMemo(() => (0, v.Xv)(X.config), [X.config]),
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
        eb = s.useMemo(() => {
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
        className: a()(V, I.contentExpanded, { [I.contentInteractable]: eg }),
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
                          className: I.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: I.utils,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: I.questAcceptedContentHeading,
                                          children: [
                                              (0, r.jsx)(T.Z, {
                                                  className: I.questProgressRewardTile,
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
                                                      className: I.submenuWrapper,
                                                      'aria-label': q.intl.string(q.t.DEoVWV),
                                                      children: (0, r.jsx)(d.xhG, {
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
                                  ? (0, r.jsx)(d.zxk, {
                                        className: a()(I.cta, I.ctaClaimReward),
                                        style: ef ? eb : void 0,
                                        color: d.zxk.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: ea,
                                        size: d.zxk.Sizes.NONE,
                                        children: q.intl.string(q.t.cfY4PD)
                                    })
                                  : (0, r.jsx)(d.Text, {
                                        className: I.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ex
                                    }),
                              (0, r.jsx)(E.Z, { quest: X }),
                              !eh && !ed && !en && el && (0, r.jsx)(L, { onClick: eg ? ei : void 0 })
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
                                                              className: I.submenuWrapper,
                                                              'aria-label': q.intl.string(q.t.DEoVWV),
                                                              children: (0, r.jsx)(d.xhG, {
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
                                              (0, r.jsx)(T.Z, {
                                                  className: I.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: X,
                                                  questContent: _.jn.QUEST_BAR,
                                                  location: R.dr.QUESTS_BAR,
                                                  sourceQuestContent: _.jn.QUEST_BAR
                                              }),
                                              (0, r.jsx)(d.X6q, {
                                                  className: I.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: q.intl.format(q.t.EQa7oq, { questName: X.config.messages.questName })
                                              }),
                                              (0, r.jsx)(d.Text, {
                                                  className: I.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ex
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(d.zxk, {
                                          className: I.cta,
                                          style: '1232852290197655573' !== X.id ? eb : void 0,
                                          color: d.zxk.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: eg ? eo : void 0,
                                          size: d.zxk.Sizes.NONE,
                                          submitting: Y,
                                          children: es
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: I.heroAssetWrapper,
                                  style: { color: X.config.colors.secondary },
                                  children: et.isAnimated
                                      ? (0, r.jsx)(P.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, r.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !K,
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
                                      : (0, r.jsx)(P.Fl, {
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
