n.d(t, { Z: () => N }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282);
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
    g = n(626135),
    E = n(560223),
    b = n(347475),
    y = n(342414),
    O = n(391110),
    v = n(71363),
    I = n(781800),
    T = n(981631),
    S = n(388032),
    A = n(677599),
    C = n(865215);
let N = (e) => {
    let { userId: t } = e;
    i.useEffect(() => {
        u.Z.wait(async () => {
            null != t && (await (0, m.Z)(t));
        });
    }, [t]),
        (0, p.z)(_.X);
    let n = i.useRef(null),
        a = i.useRef(null),
        [N, R] = i.useState(!1),
        { analyticsLocations: P } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [w, D] = i.useState(!1),
        x = (0, s.e7)([h.Z], () => (null != t ? h.Z.getUserProfile(t) : null)),
        L = "true" === new URLSearchParams(window.location.search).get("autoScroll");
    return (window.history.replaceState({}, "", window.location.pathname), null == x)
        ? (0, r.jsx)("div", {
              className: o()(A.container, A.loading),
              children: (0, r.jsx)(c.$jN, {}),
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.yWw, {
                      className: A.mainPageScroller,
                      ref: n,
                      children: (0, r.jsx)("div", {
                          className: o()(A.container, A.responsiveContainer),
                          children: (0, r.jsxs)(f.Gt, {
                              value: P,
                              children: [
                                  (0, r.jsx)(y.Z, {
                                      className: A.heroHeading,
                                      location: O.MQ.HOME,
                                  }),
                                  (0, r.jsx)(E.Z, {
                                      variant: O.gM.WHATS_NEW,
                                      className: A.whatsNew,
                                      noBackground: !0,
                                      leftAlignHeaders: !0,
                                      shouldAutoScroll: L,
                                  }),
                                  (0, r.jsx)(E.Z, {
                                      className: A.perksDiscoverability,
                                      variant: O.gM.PERKS_DISCOVERABILITY,
                                      noBackground: !0,
                                      leftAlignHeaders: !0,
                                      showAllPerksButton: (0, r.jsx)(I.Z, {
                                          setIsAllPerksVisible: R,
                                          previousComponent: O.MQ.HOME,
                                      }),
                                  }),
                                  (0, r.jsx)(b.Z, {
                                      className: A.giftNitro,
                                      location: d.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: {
                                          page: T.ZY5.NITRO_HOME,
                                          section: T.jXE.GIFT_BANNER,
                                      },
                                  }),
                                  (0, r.jsx)("div", { className: A.footerSpacing }),
                                  (0, r.jsx)(l.$, {
                                      innerRef: a,
                                      onChange: (e) => {
                                          e &&
                                              !w &&
                                              (g.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: P,
                                              }),
                                              D(!0));
                                      },
                                      children: (0, r.jsx)("div", {
                                          ref: a,
                                          className: A.bottomOfPageVisibilitySensor,
                                      }),
                                  }),
                                  (0, r.jsx)("img", {
                                      src: C,
                                      className: A.bottomIllustration,
                                      width: 112,
                                      height: 85,
                                      alt: S.intl.string(S.t.X4IxWF),
                                  }),
                              ],
                          }),
                      }),
                  }),
                  (0, r.jsx)(v.Z, {
                      isAllPerksVisible: N,
                      setIsAllPerksVisible: R,
                      previousComponent: O.MQ.HOME,
                  }),
              ],
          });
};
