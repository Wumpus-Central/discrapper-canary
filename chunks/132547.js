n.d(t, { Z: () => j }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282);
var r = n(951288),
    i = n(647438),
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
    b = n(219673),
    y = n(47280),
    O = n(331972),
    v = n(230916),
    I = n(373539),
    T = n(560223),
    S = n(347475),
    A = n(342414),
    C = n(391110),
    N = n(71363),
    R = n(781800),
    P = n(474936),
    w = n(981631),
    D = n(388032),
    x = n(184388),
    L = n(865215);
let j = (e) => {
    let { userId: t } = e;
    i.useEffect(() => {
        u.Z.wait(async () => {
            null != t && (await (0, m.Z)(t));
        });
    }, [t]),
        i.useEffect(() => {
            U(!0);
        }, []),
        (0, p.z)(_.X);
    let n = i.useRef(null),
        a = i.useRef(null),
        j = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        { enabled: M } = b.b.useConfig({ location: "NitroTabButton" }),
        [k, U] = i.useState(!1),
        G = (0, O.$)("subscriber nitro home"),
        B = i.useRef(null),
        [Z, F] = i.useState(!1),
        [V, H] = i.useState(!1),
        Y = M && null != G && null != j && j.status === w.O0b.CANCELED,
        W = (0, v.W7)(P.Xh.PREMIUM_MONTH_TIER_2, G, j),
        K = !V && Y,
        { analyticsLocations: z } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [q, X] = i.useState(!1),
        Q = (0, s.e7)([h.Z], () => (null != t ? h.Z.getUserProfile(t) : null)),
        J = "true" === new URLSearchParams(window.location.search).get("autoScroll");
    window.history.replaceState({}, "", window.location.pathname);
    let $ = (0, y.ZP)({ location: "SubscriberNitroHome" });
    return null == Q
        ? (0, r.jsx)("div", {
              className: o()(x.container, x.loading),
              children: (0, r.jsx)(c.$jN, {}),
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(c.yWw, {
                      className: x.mainPageScroller,
                      ref: n,
                      children: [
                          (0, r.jsx)(c.$1m, {
                              color: "nitro-pink",
                              className: o()(x.container, x.responsiveContainer, { [x.hiddenGradient]: !$ }),
                              children: (0, r.jsxs)(f.Gt, {
                                  value: z,
                                  children: [
                                      (0, r.jsx)(l.$, {
                                          innerRef: B,
                                          onChange: (e) => H(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, r.jsx)(A.Z, {
                                              buttonVisibilityRef: B,
                                              className: x.heroHeading,
                                              enablePremiumBrandRefresh: $,
                                              userDiscountOffer: G,
                                              discountedPrice: W,
                                          }),
                                      }),
                                      (0, r.jsx)(T.Z, {
                                          variant: C.gM.WHATS_NEW,
                                          className: x.whatsNew,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          shouldAutoScroll: J,
                                      }),
                                      (0, r.jsx)(T.Z, {
                                          className: x.perksDiscoverability,
                                          variant: C.gM.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, r.jsx)(R.Z, {
                                              setIsAllPerksVisible: F,
                                              previousComponent: C.MQ.HOME,
                                          }),
                                      }),
                                      (0, r.jsx)(S.Z, {
                                          className: x.giftNitro,
                                          location: d.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: {
                                              page: w.ZY5.NITRO_HOME,
                                              section: w.jXE.GIFT_BANNER,
                                          },
                                      }),
                                      (0, r.jsx)("div", { className: x.footerSpacing }),
                                      (0, r.jsx)(l.$, {
                                          innerRef: a,
                                          onChange: (e) => {
                                              e &&
                                                  !q &&
                                                  (E.default.track(w.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: z,
                                                  }),
                                                  X(!0));
                                          },
                                          children: (0, r.jsx)("div", {
                                              ref: a,
                                              className: x.bottomOfPageVisibilitySensor,
                                          }),
                                      }),
                                      (0, r.jsx)("img", {
                                          src: L,
                                          className: x.bottomIllustration,
                                          width: 112,
                                          height: 85,
                                          alt: D.intl.string(D.t.X4IxWF),
                                      }),
                                  ],
                              }),
                          }),
                          Y &&
                              null != W &&
                              (0, r.jsx)(I.Z, {
                                  isVisible: K && k,
                                  premiumSubscription: j,
                                  churnDiscountOffer: G,
                                  discountedPrice: W,
                              }),
                      ],
                  }),
                  (0, r.jsx)(N.Z, {
                      isAllPerksVisible: Z,
                      setIsAllPerksVisible: F,
                      previousComponent: C.MQ.HOME,
                      enablePremiumBrandRefresh: $,
                  }),
              ],
          });
};
