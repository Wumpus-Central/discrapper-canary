n.d(t, { Z: () => L }), n(388685);
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
    p = n(433811),
    _ = n(214852),
    m = n(621853),
    h = n(484459),
    g = n(78839),
    E = n(626135),
    b = n(283066),
    y = n(331972),
    O = n(230916),
    v = n(55058),
    S = n(560223),
    I = n(347475),
    T = n(342414),
    C = n(391110),
    A = n(71363),
    N = n(781800),
    P = n(474936),
    R = n(981631),
    w = n(388032),
    D = n(548768),
    x = n(865215);
let L = (e) => {
    let { userId: t } = e;
    i.useEffect(() => {
        u.Z.wait(async () => {
            null != t && (await (0, h.Z)(t));
        });
    }, [t]),
        i.useEffect(() => {
            M(!0);
        }, []),
        (0, _.z)(p.X);
    let n = i.useRef(null),
        a = i.useRef(null),
        L = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        [j, M] = i.useState(!1),
        k = (0, y.$)(),
        U = i.useRef(null),
        [G, Z] = i.useState(!1),
        [F, B] = i.useState(!1),
        V = null != k && null != L && L.status === R.O0b.CANCELED,
        H = (0, O.W7)(P.Xh.PREMIUM_MONTH_TIER_2, k, L),
        Y = !F && V,
        { analyticsLocations: W } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [K, z] = i.useState(!1),
        q = (0, s.e7)([m.Z], () => (null != t ? m.Z.getUserProfile(t) : null)),
        Q = (0, b.Z)({ location: "SubscriberNitroHome" });
    return null == q
        ? (0, r.jsx)("div", {
              className: o()(D.container, D.loading),
              children: (0, r.jsx)(c.$jN, {}),
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(c.yWw, {
                      className: D.mainPageScroller,
                      ref: n,
                      children: [
                          (0, r.jsx)(c.$1m, {
                              color: "nitro-pink",
                              className: o()(D.container, D.responsiveContainer, { [D.hiddenGradient]: !Q }),
                              children: (0, r.jsxs)(f.Gt, {
                                  value: W,
                                  children: [
                                      (0, r.jsx)(l.$, {
                                          innerRef: U,
                                          onChange: (e) => B(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, r.jsx)(T.Z, {
                                              buttonVisibilityRef: U,
                                              className: D.heroHeading,
                                              enablePremiumBrandRefresh: Q,
                                              userDiscountOffer: k,
                                              discountedPrice: H,
                                          }),
                                      }),
                                      (0, r.jsx)(S.Z, {
                                          variant: C.gM.WHATS_NEW,
                                          className: D.whatsNew,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                      }),
                                      (0, r.jsx)(S.Z, {
                                          className: D.perksDiscoverability,
                                          variant: C.gM.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, r.jsx)(N.Z, {
                                              setIsAllPerksVisible: Z,
                                              previousComponent: C.MQ.HOME,
                                          }),
                                      }),
                                      (0, r.jsx)(I.Z, {
                                          className: D.giftNitro,
                                          location: d.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: {
                                              page: R.ZY5.NITRO_HOME,
                                              section: R.jXE.GIFT_BANNER,
                                          },
                                      }),
                                      (0, r.jsx)("div", { className: D.footerSpacing }),
                                      (0, r.jsx)(l.$, {
                                          innerRef: a,
                                          onChange: (e) => {
                                              e &&
                                                  !K &&
                                                  (E.default.track(R.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: W,
                                                  }),
                                                  z(!0));
                                          },
                                          children: (0, r.jsx)("div", {
                                              ref: a,
                                              className: D.bottomOfPageVisibilitySensor,
                                          }),
                                      }),
                                      (0, r.jsx)("img", {
                                          src: x,
                                          className: D.bottomIllustration,
                                          width: 112,
                                          height: 85,
                                          alt: w.intl.string(w.t.X4IxWL),
                                      }),
                                  ],
                              }),
                          }),
                          V &&
                              null != H &&
                              (0, r.jsx)(v.Z, {
                                  isVisible: Y && j,
                                  premiumSubscription: L,
                                  churnDiscountOffer: k,
                                  discountedPrice: H,
                              }),
                      ],
                  }),
                  (0, r.jsx)(A.Z, {
                      isAllPerksVisible: G,
                      setIsAllPerksVisible: Z,
                      previousComponent: C.MQ.HOME,
                      enablePremiumBrandRefresh: Q,
                  }),
              ],
          });
};
