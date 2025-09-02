n.d(t, { Z: () => M }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(622535),
    c = n(304789),
    u = n(481060),
    d = n(570140),
    f = n(100527),
    _ = n(906732),
    p = n(433811),
    h = n(214852),
    m = n(621853),
    g = n(484459),
    E = n(78839),
    b = n(626135),
    y = n(219673),
    O = n(47280),
    v = n(331972),
    I = n(230916),
    T = n(373539),
    S = n(560223),
    A = n(347475),
    C = n(342414),
    N = n(391110),
    R = n(71363),
    P = n(781800),
    w = n(474936),
    D = n(981631),
    x = n(388032),
    L = n(677599),
    j = n(865215);
let M = (e) => {
    let { userId: t } = e;
    i.useEffect(() => {
        d.Z.wait(async () => {
            null != t && (await (0, g.Z)(t));
        });
    }, [t]),
        i.useEffect(() => {
            G(!0);
        }, []),
        (0, h.z)(p.X);
    let n = i.useRef(null),
        a = i.useRef(null),
        M = (0, s.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
        { enabled: k } = y.b.useConfig({ location: "NitroTabButton" }),
        [U, G] = i.useState(!1),
        B = (0, v.$)("subscriber nitro home"),
        Z = i.useRef(null),
        [F, V] = i.useState(!1),
        [H, Y] = i.useState(!1),
        W = k && null != B && null != M && M.status === D.O0b.CANCELED,
        K = (0, I.W7)(w.Xh.PREMIUM_MONTH_TIER_2, B, M),
        z = !H && W,
        { analyticsLocations: q } = (0, _.ZP)(f.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [X, Q] = i.useState(!1),
        J = (0, s.e7)([m.Z], () => (null != t ? m.Z.getUserProfile(t) : null)),
        $ = "true" === new URLSearchParams(window.location.search).get("autoScroll");
    window.history.replaceState({}, "", window.location.pathname);
    let ee = (0, O.ZP)({ location: "SubscriberNitroHome" });
    return null == J
        ? (0, r.jsx)("div", {
              className: o()(L.container, L.loading),
              children: (0, r.jsx)(u.$jN, {}),
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(u.yWw, {
                      className: L.mainPageScroller,
                      ref: n,
                      children: [
                          (0, r.jsx)(c.$, {
                              color: "nitro-pink",
                              className: o()(L.container, L.responsiveContainer, { [L.hiddenGradient]: !ee }),
                              children: (0, r.jsxs)(_.Gt, {
                                  value: q,
                                  children: [
                                      (0, r.jsx)(l.$, {
                                          innerRef: Z,
                                          onChange: (e) => Y(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, r.jsx)(C.Z, {
                                              buttonVisibilityRef: Z,
                                              className: L.heroHeading,
                                              location: N.MQ.HOME,
                                              enablePremiumBrandRefresh: ee,
                                              userDiscountOffer: B,
                                              discountedPrice: K,
                                          }),
                                      }),
                                      (0, r.jsx)(S.Z, {
                                          variant: N.gM.WHATS_NEW,
                                          className: L.whatsNew,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          shouldAutoScroll: $,
                                      }),
                                      (0, r.jsx)(S.Z, {
                                          className: L.perksDiscoverability,
                                          variant: N.gM.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, r.jsx)(P.Z, {
                                              setIsAllPerksVisible: V,
                                              previousComponent: N.MQ.HOME,
                                          }),
                                      }),
                                      (0, r.jsx)(A.Z, {
                                          className: L.giftNitro,
                                          location: f.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: {
                                              page: D.ZY5.NITRO_HOME,
                                              section: D.jXE.GIFT_BANNER,
                                          },
                                      }),
                                      (0, r.jsx)("div", { className: L.footerSpacing }),
                                      (0, r.jsx)(l.$, {
                                          innerRef: a,
                                          onChange: (e) => {
                                              e &&
                                                  !X &&
                                                  (b.default.track(D.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: q,
                                                  }),
                                                  Q(!0));
                                          },
                                          children: (0, r.jsx)("div", {
                                              ref: a,
                                              className: L.bottomOfPageVisibilitySensor,
                                          }),
                                      }),
                                      (0, r.jsx)("img", {
                                          src: j,
                                          className: L.bottomIllustration,
                                          width: 112,
                                          height: 85,
                                          alt: x.intl.string(x.t.X4IxWF),
                                      }),
                                  ],
                              }),
                          }),
                          W &&
                              null != K &&
                              (0, r.jsx)(T.Z, {
                                  isVisible: z && U,
                                  premiumSubscription: M,
                                  churnDiscountOffer: B,
                                  discountedPrice: K,
                              }),
                      ],
                  }),
                  (0, r.jsx)(R.Z, {
                      isAllPerksVisible: F,
                      setIsAllPerksVisible: V,
                      previousComponent: N.MQ.HOME,
                      enablePremiumBrandRefresh: ee,
                  }),
              ],
          });
};
