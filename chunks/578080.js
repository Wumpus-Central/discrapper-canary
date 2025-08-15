n.d(t, { Z: () => L }), n(953529);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(717976),
    l = n(442837),
    c = n(950104),
    u = n(780384),
    d = n(755721),
    p = n(481060),
    m = n(70097),
    g = n(703656),
    f = n(358085),
    x = n(617136),
    h = n(915750),
    j = n(509212),
    b = n(272008),
    _ = n(113434),
    v = n(569984),
    C = n(497505),
    y = n(865364),
    E = n(373370),
    O = n(475595),
    S = n(566078),
    T = n(340100),
    w = n(611855),
    P = n(644646),
    A = n(78826),
    N = n(670638),
    R = n(667105),
    B = n(46140),
    k = n(981631),
    q = n(701488),
    I = n(388032),
    Q = n(70858);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
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
function M(e) {
    let { style: t, onClick: n } = e;
    return (0, y.O)({
        location: B.dr.QUESTS_BAR,
        autoTrackExposure: !0,
    })
        ? (0, r.jsx)(d.zx, {
              className: Q.cta,
              style: t,
              color: d.zx.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: d.zx.Sizes.NONE,
              children: I.intl.string(I.t.lwQdjI),
          })
        : null;
}
let L = s.forwardRef(function (e, t) {
    var n, o;
    let {
            children: y,
            className: L,
            collapsedHeight: Z,
            expansionSpring: W,
            isExpanded: U,
            isExpansionAnimationComplete: H,
            onCtxMenuOpen: F,
            onCtxMenuClose: z,
            onCtxMenuSelect: X,
            quest: K,
            useReducedMotion: Y,
        } = e,
        G = (0, l.e7)([v.Z], () => v.Z.isEnrolling(K.id), [K]),
        J = (0, h.aM)(),
        $ = (0, _.B6)(K.config.expiresAt),
        ee = S.r.build(K.config),
        et = (0, _.B6)(ee.rewardsExpireAt),
        en = s.useMemo(() => (0, O.fh)(K, O.eC.HERO), [K]),
        er = (0, R.tP)(ee.application.id),
        es = ee.features.has(B.S7.START_QUEST_CTA) ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST,
        eo = ee.features.has(B.S7.START_QUEST_CTA) ? I.intl.string(I.t.E80Bdn) : I.intl.string(I.t.l7E81t),
        ea = s.useCallback(() => {
            (0, b.AH)(K.id, {
                questContent: C.jn.QUEST_BAR,
                questContentCTA: es,
                sourceQuestContent: C.jn.QUEST_BAR,
            }),
                ee.features.has(B.S7.START_QUEST_CTA) && (0, g.uL)(k.Z5c.ACTIVITY_DETAILS(q.In), void 0);
        }, [K, es, ee.features]),
        ei = (0, R.hf)({
            quest: K,
            questContent: C.jn.QUEST_BAR,
            sourceQuestContent: C.jn.QUEST_BAR,
        }),
        el = s.useCallback(() => {
            (0, j.nc)(K, {
                content: C.jn.QUEST_BAR,
                ctaContent: x.jZ.OPEN_GAME_LINK,
                impressionId: J,
                sourceQuestContent: C.jn.QUEST_BAR,
            });
        }, [J, K]),
        ec = ee.features.has(B.S7.POST_ENROLLMENT_CTA),
        eu = (0, _.Rf)(K),
        ed = (0, _.Jf)(K),
        ep = null != ed ? ed.progress > 0 : eu.progressSeconds > 0,
        em = (null == (n = K.userStatus) ? void 0 : n.enrolledAt) != null,
        eg = (null == (o = K.userStatus) ? void 0 : o.completedAt) != null,
        ef = s.useMemo(() => (0, j.Xv)(K.config), [K.config]),
        ex = U && H,
        eh = (0, E.DD)({
            quest: K,
            taskDetails: eu,
            location: B.dr.QUESTS_BAR,
            questContent: C.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ed ? ed : void 0,
            sourceQuestContent: C.jn.QUEST_BAR,
        }),
        ej = (0, f.isWeb)(),
        eb = s.useMemo(() => {
            let e = (0, u.Qg)(K.config.colors.primary, {
                base: "#ffffff",
                contrastRatio: u.S3.Text,
            });
            return {
                "--custom-cta-color": e,
                "--custom-cta-color-hover": (0, c.r5)(e, 0.3),
                "--custom-cta-color-active": (0, c.r5)(e, 0.35),
            };
        }, [K.config.colors.primary]);
    return (0, r.jsxs)(i.animated.div, {
        className: a()(L, Q.contentExpanded, { [Q.contentInteractable]: ex }),
        style: {
            backgroundColor: K.config.colors.secondary,
            transform: eg
                ? void 0
                : (0, i.to)(
                      [
                          W.to({
                              range: [0, 1],
                              output: [0, -100],
                          }),
                          W.to({
                              range: [0, 1],
                              output: [0, Z],
                          }),
                      ],
                      (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
                  ),
        },
        children: [
            y,
            (0, r.jsx)("div", {
                "aria-hidden": !ex,
                children: em
                    ? (0, r.jsxs)("div", {
                          className: Q.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: Q.utils,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: Q.questAcceptedContentHeading,
                                          children: [
                                              (0, r.jsx)(P.Z, {
                                                  className: Q.questProgressRewardTile,
                                                  learnMoreStyle: "icon",
                                                  quest: K,
                                                  questContent: C.jn.QUEST_BAR,
                                                  location: B.dr.QUESTS_BAR,
                                                  sourceQuestContent: C.jn.QUEST_BAR,
                                              }),
                                              (0, r.jsxs)("div", {
                                                  children: [
                                                      (0, r.jsx)(p.X6q, {
                                                          color: "always-white",
                                                          variant: "heading-sm/semibold",
                                                          children: (0, j.AV)({
                                                              quest: K,
                                                              taskDetails: eu,
                                                              thirdPartyTaskDetails: null != ed ? ed : void 0,
                                                          }),
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          className: Q.questAcceptedContentCopySubheading,
                                                          color: "always-white",
                                                          variant: "text-xxs/normal",
                                                          children: eg
                                                              ? I.intl.formatToPlainString(I.t.APddvL, {
                                                                    expirationDate: et,
                                                                })
                                                              : I.intl.formatToPlainString(I.t["pX+fmp"], {
                                                                    expirationDate: $,
                                                                }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)(N.r, {
                                          onOpen: F,
                                          onClose: z,
                                          onSelect: X,
                                          questContent: C.jn.QUEST_BAR,
                                          quest: K,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          sourceQuestContent: C.jn.QUEST_BAR,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  p.P3F,
                                                  V(D({}, e), {
                                                      className: Q.submenuWrapper,
                                                      "aria-label": I.intl.string(I.t.DEoVWV),
                                                      children: (0, r.jsx)(p.xhG, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: Q.submenuIcon,
                                                      }),
                                                  }),
                                              ),
                                      }),
                                  ],
                              }),
                              eg
                                  ? (0, r.jsx)(d.zx, {
                                        className: a()(Q.cta, Q.ctaClaimReward),
                                        style: ef ? eb : void 0,
                                        color: d.zx.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: ei,
                                        size: d.zx.Sizes.NONE,
                                        children: I.intl.string(I.t.cfY4PD),
                                    })
                                  : (0, r.jsx)(p.Text, {
                                        className: Q.description,
                                        color: "always-white",
                                        variant: "text-xs/normal",
                                        children: eh,
                                    }),
                              (0, r.jsx)(T.Z, { quest: K }),
                              !ej && !ep && !er && ec && (0, r.jsx)(M, { onClick: ex ? el : void 0 }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsxs)("div", {
                                  className: Q.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: Q.utils,
                                          children: [
                                              (0, r.jsx)(w.Z, { color: "always-white" }),
                                              (0, r.jsx)(N.r, {
                                                  onOpen: F,
                                                  onClose: z,
                                                  onSelect: X,
                                                  questContent: C.jn.QUEST_BAR,
                                                  quest: K,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  sourceQuestContent: C.jn.QUEST_BAR,
                                                  children: (e) =>
                                                      (0, r.jsx)(
                                                          p.P3F,
                                                          V(D({}, e), {
                                                              className: Q.submenuWrapper,
                                                              "aria-label": I.intl.string(I.t.DEoVWV),
                                                              children: (0, r.jsx)(p.xhG, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: Q.submenuIcon,
                                                              }),
                                                          }),
                                                      ),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: Q.details,
                                          children: [
                                              (0, r.jsx)(P.Z, {
                                                  className: Q.rewardTile,
                                                  learnMoreStyle: "text",
                                                  quest: K,
                                                  questContent: C.jn.QUEST_BAR,
                                                  location: B.dr.QUESTS_BAR,
                                                  sourceQuestContent: C.jn.QUEST_BAR,
                                              }),
                                              (0, r.jsx)(p.X6q, {
                                                  className: Q.title,
                                                  color: "always-white",
                                                  variant: "heading-md/medium",
                                                  children: I.intl.format(I.t.EQa7oq, {
                                                      questName: K.config.messages.questName,
                                                  }),
                                              }),
                                              (0, r.jsx)(p.Text, {
                                                  className: Q.description,
                                                  color: "always-white",
                                                  variant: "text-sm/normal",
                                                  children: eh,
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)(d.zx, {
                                          className: Q.cta,
                                          style: "1232852290197655573" !== K.id ? eb : void 0,
                                          color: d.zx.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: ex ? ea : void 0,
                                          size: d.zx.Sizes.NONE,
                                          submitting: G,
                                          children: eo,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: Q.heroAssetWrapper,
                                  style: { color: K.config.colors.secondary },
                                  children: en.isAnimated
                                      ? (0, r.jsx)(A.Fl, {
                                            id: "QuestBarContentExpanded_heroAnimated",
                                            children: (e) => {
                                                var t;
                                                return (0, r.jsx)(m.Z, {
                                                    ref: e,
                                                    autoPlay: !Y,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: Q.heroAsset,
                                                    controls: !1,
                                                    children: (0, r.jsx)("source", {
                                                        src: en.url,
                                                        type: null != (t = en.mimetype) ? t : void 0,
                                                    }),
                                                });
                                            },
                                        })
                                      : (0, r.jsx)(A.Fl, {
                                            id: "QuestBarContentExpanded_heroStatic",
                                            children: (e) =>
                                                (0, r.jsx)("img", {
                                                    ref: e,
                                                    alt: "",
                                                    className: Q.heroAsset,
                                                    src: en.url,
                                                }),
                                        }),
                              }),
                          ],
                      }),
            }),
        ],
    });
});
