(n.d(t, { Z: () => N }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(570140),
    u = n(100527),
    m = n(906732),
    p = n(433811),
    g = n(214852),
    h = n(621853),
    f = n(484459),
    b = n(626135),
    x = n(560223),
    _ = n(347475),
    j = n(342414),
    E = n(391110),
    C = n(71363),
    O = n(781800),
    v = n(981631),
    S = n(388032),
    T = n(614729),
    I = n(865215);
let N = (e) => {
    let { userId: t } = e;
    (r.useEffect(() => {
        d.Z.wait(async () => {
            null != t && (await (0, f.Z)(t));
        });
    }, [t]),
        (0, g.z)(p.X));
    let n = r.useRef(null),
        s = r.useRef(null),
        [N, y] = r.useState(!1),
        { analyticsLocations: A } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [P, R] = r.useState(!1),
        D = (0, l.e7)([h.Z], () => (null != t ? h.Z.getUserProfile(t) : null)),
        Z = 'true' === new URLSearchParams(window.location.search).get('autoScroll');
    return (window.history.replaceState({}, '', window.location.pathname), null == D)
        ? (0, i.jsx)('div', {
              className: a()(T.container, T.loading),
              children: (0, i.jsx)(c.$jN, {})
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.yWw, {
                      className: T.mainPageScroller,
                      ref: n,
                      children: (0, i.jsx)('div', {
                          className: T.container,
                          children: (0, i.jsxs)(m.Gt, {
                              value: A,
                              children: [
                                  (0, i.jsx)(j.Z, {
                                      className: T.heroHeading,
                                      location: E.MQ.HOME
                                  }),
                                  (0, i.jsx)(x.Z, {
                                      variant: E.gM.WHATS_NEW,
                                      className: T.whatsNew,
                                      noBackground: !0,
                                      leftAlignHeaders: !0,
                                      shouldAutoScroll: Z
                                  }),
                                  (0, i.jsx)(x.Z, {
                                      className: T.perksDiscoverability,
                                      variant: E.gM.PERKS_DISCOVERABILITY,
                                      noBackground: !0,
                                      leftAlignHeaders: !0,
                                      showAllPerksButton: (0, i.jsx)(O.Z, {
                                          setIsAllPerksVisible: y,
                                          previousComponent: E.MQ.HOME
                                      })
                                  }),
                                  (0, i.jsx)(_.Z, {
                                      className: T.giftNitro,
                                      location: u.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: {
                                          page: v.ZY5.NITRO_HOME,
                                          section: v.jXE.GIFT_BANNER
                                      }
                                  }),
                                  (0, i.jsx)('div', { className: T.footerSpacing }),
                                  (0, i.jsx)(o.$, {
                                      innerRef: s,
                                      onChange: (e) => {
                                          e && !P && (b.default.track(v.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: A }), R(!0));
                                      },
                                      children: (0, i.jsx)('div', {
                                          ref: s,
                                          className: T.bottomOfPageVisibilitySensor
                                      })
                                  }),
                                  (0, i.jsx)('img', {
                                      src: I,
                                      className: T.bottomIllustration,
                                      width: 112,
                                      height: 85,
                                      alt: S.intl.string(S.t.X4IxWF)
                                  })
                              ]
                          })
                      })
                  }),
                  (0, i.jsx)(C.Z, {
                      isAllPerksVisible: N,
                      setIsAllPerksVisible: y,
                      previousComponent: E.MQ.HOME
                  })
              ]
          });
};
