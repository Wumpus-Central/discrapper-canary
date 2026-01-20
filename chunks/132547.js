n.d(t, { Z: () => U }), n(539854), n(388685);
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
    h = n(588956),
    m = n(468208),
    g = n(165299),
    E = n(621853),
    b = n(484459),
    y = n(78839),
    O = n(626135),
    v = n(283066),
    S = n(331972),
    I = n(230916),
    T = n(55058),
    C = n(560223),
    A = n(347475),
    N = n(342414),
    P = n(874577),
    w = n(391110),
    R = n(71363),
    D = n(781800),
    x = n(474936),
    L = n(981631),
    j = n(388032),
    M = n(548768),
    k = n(865215);
let U = (e) => {
    let { userId: t } = e;
    i.useEffect(() => {
        u.Z.wait(async () => {
            let e = [(0, h.Z)()];
            null != t && e.push((0, b.Z)(t)), await Promise.all(e);
        });
    }, [t]),
        i.useEffect(() => {
            B(!0);
        }, []),
        (0, _.z)(p.X);
    let n = i.useRef(null),
        a = i.useRef(null),
        U = (0, s.e7)([y.Z], () => y.Z.getPremiumTypeSubscription()),
        { isReady: G, programReward: Z } = (0, s.cj)([m.Z], () => ({
            isReady: m.Z.isReady(),
            programReward: m.Z.getRewardForProgram(g.f.NITRO),
        })),
        [F, B] = i.useState(!1),
        V = (0, S.$)(),
        H = i.useRef(null),
        [Y, W] = i.useState(!1),
        [K, z] = i.useState(!1),
        q = null != V && null != U && U.status === L.O0b.CANCELED,
        Q = (0, I.W7)(x.Xh.PREMIUM_MONTH_TIER_2, V, U),
        X = !K && q,
        { analyticsLocations: J } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [$, ee] = i.useState(!1),
        et = (0, s.e7)([E.Z], () => (null != t ? E.Z.getUserProfile(t) : null)),
        en = (0, v.Z)({ location: "SubscriberNitroHome" });
    return null != et && (G || null != Z)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(c.yWw, {
                      className: M.mainPageScroller,
                      ref: n,
                      children: [
                          (0, r.jsx)(c.$1m, {
                              color: "nitro-pink",
                              className: o()(M.container, M.responsiveContainer, { [M.hiddenGradient]: !en }),
                              children: (0, r.jsxs)(f.Gt, {
                                  value: J,
                                  children: [
                                      (0, r.jsx)(l.$, {
                                          innerRef: H,
                                          onChange: (e) => z(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, r.jsx)(N.Z, {
                                              buttonVisibilityRef: H,
                                              className: M.heroHeading,
                                              enablePremiumBrandRefresh: en,
                                              userDiscountOffer: V,
                                              discountedPrice: Q,
                                          }),
                                      }),
                                      (0, r.jsx)(C.Z, {
                                          variant: w.gM.WHATS_NEW,
                                          className: M.whatsNew,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                      }),
                                      (0, r.jsx)(C.Z, {
                                          className: M.perksDiscoverability,
                                          variant: w.gM.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, r.jsx)(D.Z, {
                                              setIsAllPerksVisible: W,
                                              previousComponent: w.MQ.HOME,
                                          }),
                                      }),
                                      null != Z &&
                                          m.Z.isInProperTreatments() &&
                                          (0, r.jsx)(P.Z, { location: d.Z.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                      (0, r.jsx)(A.Z, {
                                          className: M.giftNitro,
                                          location: d.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: {
                                              page: L.ZY5.NITRO_HOME,
                                              section: L.jXE.GIFT_BANNER,
                                          },
                                      }),
                                      (0, r.jsx)("div", { className: M.footerSpacing }),
                                      (0, r.jsx)(l.$, {
                                          innerRef: a,
                                          onChange: (e) => {
                                              e &&
                                                  !$ &&
                                                  (O.default.track(L.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: J,
                                                  }),
                                                  ee(!0));
                                          },
                                          children: (0, r.jsx)("div", {
                                              ref: a,
                                              className: M.bottomOfPageVisibilitySensor,
                                          }),
                                      }),
                                      (0, r.jsx)("img", {
                                          src: k,
                                          className: M.bottomIllustration,
                                          width: 112,
                                          height: 85,
                                          alt: j.intl.string(j.t.X4IxWL),
                                      }),
                                  ],
                              }),
                          }),
                          q &&
                              null != Q &&
                              (0, r.jsx)(T.Z, {
                                  isVisible: X && F,
                                  premiumSubscription: U,
                                  churnDiscountOffer: V,
                                  discountedPrice: Q,
                              }),
                      ],
                  }),
                  (0, r.jsx)(R.Z, {
                      isAllPerksVisible: Y,
                      setIsAllPerksVisible: W,
                      previousComponent: w.MQ.HOME,
                      enablePremiumBrandRefresh: en,
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: o()(M.container, M.loading),
              children: (0, r.jsx)(c.$jN, {}),
          });
};
