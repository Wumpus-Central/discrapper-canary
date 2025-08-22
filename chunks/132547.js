n.d(t, { Z: () => P }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282);
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
    E = n(626135),
    b = n(47280),
    y = n(560223),
    O = n(347475),
    v = n(342414),
    I = n(391110),
    T = n(71363),
    S = n(781800),
    A = n(981631),
    C = n(388032),
    N = n(677599),
    R = n(865215);
let P = (e) => {
    let { userId: t } = e;
    i.useEffect(() => {
        d.Z.wait(async () => {
            null != t && (await (0, g.Z)(t));
        });
    }, [t]),
        (0, h.z)(p.X);
    let n = i.useRef(null),
        a = i.useRef(null),
        [P, w] = i.useState(!1),
        { analyticsLocations: D } = (0, _.ZP)(f.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [x, L] = i.useState(!1),
        j = (0, s.e7)([m.Z], () => (null != t ? m.Z.getUserProfile(t) : null)),
        M = "true" === new URLSearchParams(window.location.search).get("autoScroll");
    window.history.replaceState({}, "", window.location.pathname);
    let k = (0, b.ZP)({ location: "SubscriberNitroHome" });
    return null == j
        ? (0, r.jsx)("div", {
              className: o()(N.container, N.loading),
              children: (0, r.jsx)(u.$jN, {}),
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.yWw, {
                      className: N.mainPageScroller,
                      ref: n,
                      children: (0, r.jsx)(c.$, {
                          color: "nitro-pink",
                          className: o()(N.container, N.responsiveContainer, { [N.hiddenGradient]: !k }),
                          children: (0, r.jsxs)(_.Gt, {
                              value: D,
                              children: [
                                  (0, r.jsx)(v.Z, {
                                      className: N.heroHeading,
                                      location: I.MQ.HOME,
                                      enablePremiumBrandRefresh: k,
                                  }),
                                  (0, r.jsx)(y.Z, {
                                      variant: I.gM.WHATS_NEW,
                                      className: N.whatsNew,
                                      noBackground: !0,
                                      leftAlignHeaders: !0,
                                      shouldAutoScroll: M,
                                  }),
                                  (0, r.jsx)(y.Z, {
                                      className: N.perksDiscoverability,
                                      variant: I.gM.PERKS_DISCOVERABILITY,
                                      noBackground: !0,
                                      leftAlignHeaders: !0,
                                      showAllPerksButton: (0, r.jsx)(S.Z, {
                                          setIsAllPerksVisible: w,
                                          previousComponent: I.MQ.HOME,
                                      }),
                                  }),
                                  (0, r.jsx)(O.Z, {
                                      className: N.giftNitro,
                                      location: f.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: {
                                          page: A.ZY5.NITRO_HOME,
                                          section: A.jXE.GIFT_BANNER,
                                      },
                                  }),
                                  (0, r.jsx)("div", { className: N.footerSpacing }),
                                  (0, r.jsx)(l.$, {
                                      innerRef: a,
                                      onChange: (e) => {
                                          e &&
                                              !x &&
                                              (E.default.track(A.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: D,
                                              }),
                                              L(!0));
                                      },
                                      children: (0, r.jsx)("div", {
                                          ref: a,
                                          className: N.bottomOfPageVisibilitySensor,
                                      }),
                                  }),
                                  (0, r.jsx)("img", {
                                      src: R,
                                      className: N.bottomIllustration,
                                      width: 112,
                                      height: 85,
                                      alt: C.intl.string(C.t.X4IxWF),
                                  }),
                              ],
                          }),
                      }),
                  }),
                  (0, r.jsx)(T.Z, {
                      isAllPerksVisible: P,
                      setIsAllPerksVisible: w,
                      previousComponent: I.MQ.HOME,
                      enablePremiumBrandRefresh: k,
                  }),
              ],
          });
};
