n.d(t, { Z: () => H }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(803948),
    l = n(442837),
    c = n(950104),
    u = n(780384),
    d = n(755721),
    f = n(481060),
    _ = n(70097),
    p = n(703656),
    h = n(358085),
    m = n(617136),
    g = n(915750),
    E = n(509212),
    b = n(272008),
    y = n(113434),
    O = n(569984),
    v = n(497505),
    I = n(865364),
    T = n(373370),
    S = n(475595),
    A = n(566078),
    C = n(340100),
    N = n(611855),
    R = n(644646),
    P = n(78826),
    w = n(670638),
    D = n(667105),
    x = n(46140),
    L = n(981631),
    j = n(701488),
    M = n(388032),
    k = n(70858);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = "1232852290197655573";
function F(e) {
    let { style: t, onClick: n } = e;
    return (0, I.O)({
        location: x.dr.QUESTS_BAR,
        autoTrackExposure: !0,
    })
        ? (0, r.jsx)(d.zx, {
              className: k.cta,
              style: t,
              color: d.zx.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: d.zx.Sizes.NONE,
              children: M.intl.string(M.t.lwQdjI),
          })
        : null;
}
let H = i.forwardRef(function (e, t) {
    var n, a;
    let {
            children: I,
            className: U,
            collapsedHeight: B,
            expansionSpring: H,
            isExpanded: Y,
            isExpansionAnimationComplete: W,
            onCtxMenuOpen: K,
            onCtxMenuClose: z,
            onCtxMenuSelect: q,
            quest: X,
            useReducedMotion: Q,
        } = e,
        J = (0, l.e7)([O.Z], () => O.Z.isEnrolling(X.id), [X]),
        $ = (0, g.aM)(),
        ee = (0, y.B6)(X.config.expiresAt),
        et = A.r.build(X.config),
        en = (0, y.B6)(et.rewardsExpireAt),
        er = i.useMemo(() => (0, S.fh)(X, S.eC.HERO), [X]),
        ei = (0, D.tP)(et.application.id),
        ea = et.features.has(x.S7.START_QUEST_CTA) ? m.jZ.START_QUEST : m.jZ.ACCEPT_QUEST,
        eo = et.features.has(x.S7.START_QUEST_CTA) ? M.intl.string(M.t.E80Bdn) : M.intl.string(M.t.l7E81t),
        es = i.useCallback(() => {
            (0, b.AH)(X.id, {
                questContent: v.jn.QUEST_BAR,
                questContentCTA: ea,
                sourceQuestContent: v.jn.QUEST_BAR,
            }),
                et.features.has(x.S7.START_QUEST_CTA) && (0, p.uL)(L.Z5c.ACTIVITY_DETAILS(j.In), void 0);
        }, [X, ea, et.features]),
        el = (0, D.hf)({
            quest: X,
            questContent: v.jn.QUEST_BAR,
            sourceQuestContent: v.jn.QUEST_BAR,
        }),
        ec = i.useCallback(() => {
            (0, E.nc)(X, {
                content: v.jn.QUEST_BAR,
                ctaContent: m.jZ.OPEN_GAME_LINK,
                impressionId: $,
                sourceQuestContent: v.jn.QUEST_BAR,
            });
        }, [$, X]),
        eu = et.features.has(x.S7.POST_ENROLLMENT_CTA),
        ed = (0, y.Rf)(X),
        ef = (0, y.Jf)(X),
        e_ = null != ef ? ef.progress > 0 : ed.progressSeconds > 0,
        ep = (null == (n = X.userStatus) ? void 0 : n.enrolledAt) != null,
        eh = (null == (a = X.userStatus) ? void 0 : a.completedAt) != null,
        em = i.useMemo(() => (0, E.Xv)(X.config), [X.config]),
        eg = Y && W,
        eE = (0, T.DD)({
            quest: X,
            taskDetails: ed,
            location: x.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ef ? ef : void 0,
            sourceQuestContent: v.jn.QUEST_BAR,
        }),
        eb = (0, h.isWeb)(),
        ey = i.useMemo(() => {
            let e = (0, u.Qg)(X.config.colors.primary, {
                base: "#ffffff",
                contrastRatio: u.S3.Text,
            });
            return {
                "--custom-cta-color": e,
                "--custom-cta-color-hover": (0, c.r5)(e, 0.3),
                "--custom-cta-color-active": (0, c.r5)(e, 0.35),
            };
        }, [X.config.colors.primary]);
    return (0, r.jsxs)(s.animated.div, {
        className: o()(U, k.contentExpanded, { [k.contentInteractable]: eg }),
        style: {
            backgroundColor: X.config.colors.secondary,
            transform: eh
                ? void 0
                : (0, s.to)(
                      [
                          H.to({
                              range: [0, 1],
                              output: [0, -100],
                          }),
                          H.to({
                              range: [0, 1],
                              output: [0, B],
                          }),
                      ],
                      (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
                  ),
        },
        children: [
            I,
            (0, r.jsx)("div", {
                "aria-hidden": !eg,
                children: ep
                    ? (0, r.jsxs)("div", {
                          className: k.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: k.utils,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: k.questAcceptedContentHeading,
                                          children: [
                                              (0, r.jsx)(R.Z, {
                                                  className: k.questProgressRewardTile,
                                                  learnMoreStyle: "icon",
                                                  quest: X,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: x.dr.QUESTS_BAR,
                                                  sourceQuestContent: v.jn.QUEST_BAR,
                                              }),
                                              (0, r.jsxs)("div", {
                                                  children: [
                                                      (0, r.jsx)(f.X6q, {
                                                          color: "always-white",
                                                          variant: "heading-sm/semibold",
                                                          children: (0, E.AV)({
                                                              quest: X,
                                                              taskDetails: ed,
                                                              thirdPartyTaskDetails: null != ef ? ef : void 0,
                                                          }),
                                                      }),
                                                      (0, r.jsx)(f.Text, {
                                                          className: k.questAcceptedContentCopySubheading,
                                                          color: "always-white",
                                                          variant: "text-xxs/normal",
                                                          children: eh
                                                              ? M.intl.formatToPlainString(M.t.APddvL, {
                                                                    expirationDate: en,
                                                                })
                                                              : M.intl.formatToPlainString(M.t["pX+fmp"], {
                                                                    expirationDate: ee,
                                                                }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)(w.r, {
                                          onOpen: K,
                                          onClose: z,
                                          onSelect: q,
                                          questContent: v.jn.QUEST_BAR,
                                          quest: X,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          sourceQuestContent: v.jn.QUEST_BAR,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  f.P3F,
                                                  Z(G({}, e), {
                                                      className: k.submenuWrapper,
                                                      "aria-label": M.intl.string(M.t.DEoVWV),
                                                      children: (0, r.jsx)(f.xhG, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: k.submenuIcon,
                                                      }),
                                                  }),
                                              ),
                                      }),
                                  ],
                              }),
                              eh
                                  ? (0, r.jsx)(d.zx, {
                                        className: o()(k.cta, k.ctaClaimReward),
                                        style: em ? ey : void 0,
                                        color: d.zx.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: el,
                                        size: d.zx.Sizes.NONE,
                                        children: M.intl.string(M.t.cfY4PD),
                                    })
                                  : (0, r.jsx)(f.Text, {
                                        className: k.description,
                                        color: "always-white",
                                        variant: "text-xs/normal",
                                        children: eE,
                                    }),
                              (0, r.jsx)(C.Z, { quest: X }),
                              !eb && !e_ && !ei && eu && (0, r.jsx)(F, { onClick: eg ? ec : void 0 }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsxs)("div", {
                                  className: k.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: k.utils,
                                          children: [
                                              (0, r.jsx)(N.Z, { color: "always-white" }),
                                              (0, r.jsx)(w.r, {
                                                  onOpen: K,
                                                  onClose: z,
                                                  onSelect: q,
                                                  questContent: v.jn.QUEST_BAR,
                                                  quest: X,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  sourceQuestContent: v.jn.QUEST_BAR,
                                                  children: (e) =>
                                                      (0, r.jsx)(
                                                          f.P3F,
                                                          Z(G({}, e), {
                                                              className: k.submenuWrapper,
                                                              "aria-label": M.intl.string(M.t.DEoVWV),
                                                              children: (0, r.jsx)(f.xhG, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: k.submenuIcon,
                                                              }),
                                                          }),
                                                      ),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: k.details,
                                          children: [
                                              (0, r.jsx)(R.Z, {
                                                  className: k.rewardTile,
                                                  learnMoreStyle: "text",
                                                  quest: X,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: x.dr.QUESTS_BAR,
                                                  sourceQuestContent: v.jn.QUEST_BAR,
                                              }),
                                              (0, r.jsx)(f.X6q, {
                                                  className: k.title,
                                                  color: "always-white",
                                                  variant: "heading-md/medium",
                                                  children: M.intl.format(M.t.EQa7oq, {
                                                      questName: X.config.messages.questName,
                                                  }),
                                              }),
                                              (0, r.jsx)(f.Text, {
                                                  className: k.description,
                                                  color: "always-white",
                                                  variant: "text-sm/normal",
                                                  children: eE,
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)(d.zx, {
                                          className: k.cta,
                                          style: X.id !== V ? ey : void 0,
                                          color: d.zx.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: eg ? es : void 0,
                                          size: d.zx.Sizes.NONE,
                                          submitting: J,
                                          children: eo,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: k.heroAssetWrapper,
                                  style: { color: X.config.colors.secondary },
                                  children: er.isAnimated
                                      ? (0, r.jsx)(P.Fl, {
                                            id: "QuestBarContentExpanded_heroAnimated",
                                            children: (e) => {
                                                var t;
                                                return (0, r.jsx)(_.Z, {
                                                    ref: e,
                                                    autoPlay: !Q,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: k.heroAsset,
                                                    controls: !1,
                                                    children: (0, r.jsx)("source", {
                                                        src: er.url,
                                                        type: null != (t = er.mimetype) ? t : void 0,
                                                    }),
                                                });
                                            },
                                        })
                                      : (0, r.jsx)(P.Fl, {
                                            id: "QuestBarContentExpanded_heroStatic",
                                            children: (e) =>
                                                (0, r.jsx)("img", {
                                                    ref: e,
                                                    alt: "",
                                                    className: k.heroAsset,
                                                    src: er.url,
                                                }),
                                        }),
                              }),
                          ],
                      }),
            }),
        ],
    });
});
