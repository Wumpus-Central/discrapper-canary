n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(622535),
    c = n(481060),
    u = n(570140),
    d = n(100527),
    f = n(906732),
    _ = n(433811),
    p = n(214852),
    h = n(621853),
    m = n(484459),
    g = n(78839),
    E = n(626135),
    b = n(283066),
    y = n(331972),
    O = n(230916),
    v = n(55058),
    I = n(560223),
    T = n(347475),
    S = n(342414),
    A = n(391110),
    C = n(71363),
    N = n(781800),
    R = n(474936),
    P = n(981631),
    D = n(388032),
    w = n(677599),
    L = n(865215);
let x = (e) => {
    let { userId: t } = e;
    i.useEffect(() => {
        u.Z.wait(async () => {
            null != t && (await (0, m.Z)(t));
        });
    }, [t]),
        i.useEffect(() => {
            k(!0);
        }, []),
        (0, p.z)(_.X);
    let n = i.useRef(null),
        a = i.useRef(null),
        x = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        [M, k] = i.useState(!1),
        j = (0, y.$)(),
        U = i.useRef(null),
        [G, B] = i.useState(!1),
        [Z, F] = i.useState(!1),
        V = null != j && null != x && x.status === P.O0b.CANCELED,
        H = (0, O.W7)(R.Xh.PREMIUM_MONTH_TIER_2, j, x),
        Y = !Z && V,
        { analyticsLocations: W } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [K, z] = i.useState(!1),
        q = (0, s.e7)([h.Z], () => (null != t ? h.Z.getUserProfile(t) : null)),
        X = (0, b.Z)({ location: "SubscriberNitroHome" });
    return null == q
        ? (0, r.jsx)("div", {
              className: o()(w.container, w.loading),
              children: (0, r.jsx)(c.$jN, {}),
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(c.yWw, {
                      className: w.mainPageScroller,
                      ref: n,
                      children: [
                          (0, r.jsx)(c.$1m, {
                              color: "nitro-pink",
                              className: o()(w.container, w.responsiveContainer, { [w.hiddenGradient]: !X }),
                              children: (0, r.jsxs)(f.Gt, {
                                  value: W,
                                  children: [
                                      (0, r.jsx)(l.$, {
                                          innerRef: U,
                                          onChange: (e) => F(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, r.jsx)(S.Z, {
                                              buttonVisibilityRef: U,
                                              className: w.heroHeading,
                                              enablePremiumBrandRefresh: X,
                                              userDiscountOffer: j,
                                              discountedPrice: H,
                                          }),
                                      }),
                                      (0, r.jsx)(I.Z, {
                                          variant: A.gM.WHATS_NEW,
                                          className: w.whatsNew,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                      }),
                                      (0, r.jsx)(I.Z, {
                                          className: w.perksDiscoverability,
                                          variant: A.gM.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, r.jsx)(N.Z, {
                                              setIsAllPerksVisible: B,
                                              previousComponent: A.MQ.HOME,
                                          }),
                                      }),
                                      (0, r.jsx)(T.Z, {
                                          className: w.giftNitro,
                                          location: d.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: {
                                              page: P.ZY5.NITRO_HOME,
                                              section: P.jXE.GIFT_BANNER,
                                          },
                                      }),
                                      (0, r.jsx)("div", { className: w.footerSpacing }),
                                      (0, r.jsx)(l.$, {
                                          innerRef: a,
                                          onChange: (e) => {
                                              e &&
                                                  !K &&
                                                  (E.default.track(P.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: W,
                                                  }),
                                                  z(!0));
                                          },
                                          children: (0, r.jsx)("div", {
                                              ref: a,
                                              className: w.bottomOfPageVisibilitySensor,
                                          }),
                                      }),
                                      (0, r.jsx)("img", {
                                          src: L,
                                          className: w.bottomIllustration,
                                          width: 112,
                                          height: 85,
                                          alt: D.intl.string(D.t.X4IxWL),
                                      }),
                                  ],
                              }),
                          }),
                          V &&
                              null != H &&
                              (0, r.jsx)(v.Z, {
                                  isVisible: Y && M,
                                  premiumSubscription: x,
                                  churnDiscountOffer: j,
                                  discountedPrice: H,
                              }),
                      ],
                  }),
                  (0, r.jsx)(C.Z, {
                      isAllPerksVisible: G,
                      setIsAllPerksVisible: B,
                      previousComponent: A.MQ.HOME,
                      enablePremiumBrandRefresh: X,
                  }),
              ],
          });
};
