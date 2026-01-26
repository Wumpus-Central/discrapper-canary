n.d(t, {
    A: () => B,
}),
    n(321073),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(960488),
    l = n(311907),
    c = n(230109),
    u = n(397927),
    d = n(73153),
    f = n(793574),
    p = n(688810),
    _ = n(726649),
    h = n(611924),
    m = n(961250),
    g = n(895944),
    E = n(649032),
    y = n(622543),
    b = n(94343),
    O = n(576622),
    v = n(166403),
    A = n(954571),
    I = n(170887),
    S = n(131168),
    T = n(511484),
    C = n(703982),
    N = n(326736),
    w = n(810036),
    R = n(160116),
    P = n(530060),
    D = n(322631),
    x = n(891858),
    L = n(807676),
    j = n(788868),
    M = n(652215),
    k = n(985018),
    U = n(70338),
    G = n(288894);
let V = "section",
    F = "orbs",
    B = (e) => {
        let { userId: t } = e,
            n = (0, o.zy)(),
            a = i.useRef(null);
        i.useEffect(() => {
            d.h.wait(async () => {
                let e = [(0, m.A)()];
                null != t && e.push((0, O.A)(t)), await Promise.all(e);
            });
        }, [t]),
            i.useEffect(() => {
                Z(!0);
            }, []),
            (0, h.P)(_.b);
        let B = i.useRef(null),
            H = i.useRef(null),
            Y = (0, l.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
            { isReady: W, programReward: K } = (0, l.cf)([g.A], () => ({
                isReady: g.A.isReady(),
                programReward: g.A.getRewardForProgram(E.W.NITRO),
            })),
            z = i.useMemo(() => !!W && new URLSearchParams(n.search).get(V) === F, [n.search, W]);
        (0, b.A)(a, z);
        let [q, Z] = i.useState(!1),
            X = (0, S.p)(),
            Q = i.useRef(null),
            [J, $] = i.useState(!1),
            [ee, et] = i.useState(!1),
            en = null != X && null != Y && Y.status === M.Dmq.CANCELED,
            er = (0, T.iU)(j.gD.PREMIUM_MONTH_TIER_2, X, Y),
            ei = !ee && en,
            { analyticsLocations: ea } = (0, p.Ay)(f.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [es, eo] = i.useState(!1),
            el = (0, l.bG)([y.A], () => (null != t ? y.A.getUserProfile(t) : null)),
            ec = (0, I.A)({
                location: "SubscriberNitroHome",
            });
        return null != el && (W || null != K)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(u.GtU, {
                          className: U.xW,
                          ref: B,
                          children: [
                              (0, r.jsx)(u.hLv, {
                                  color: "nitro-pink",
                                  className: s()(U.kL, U.Gd, {
                                      [U.fv]: !ec,
                                  }),
                                  children: (0, r.jsxs)(p.f5, {
                                      value: ea,
                                      children: [
                                          (0, r.jsx)(c.L, {
                                              innerRef: Q,
                                              onChange: (e) => et(e),
                                              threshold: 0.1,
                                              active: !0,
                                              children: (0, r.jsx)(R.A, {
                                                  buttonVisibilityRef: Q,
                                                  className: U.v1,
                                                  enablePremiumBrandRefresh: ec,
                                                  userDiscountOffer: X,
                                                  discountedPrice: er,
                                              }),
                                          }),
                                          (0, r.jsx)(N.A, {
                                              variant: D.cJ.WHATS_NEW,
                                              className: U.Iw,
                                              noBackground: !0,
                                              leftAlignHeaders: !0,
                                          }),
                                          (0, r.jsx)(N.A, {
                                              className: U.xU,
                                              variant: D.cJ.PERKS_DISCOVERABILITY,
                                              noBackground: !0,
                                              leftAlignHeaders: !0,
                                              showAllPerksButton: (0, r.jsx)(L.A, {
                                                  setIsAllPerksVisible: $,
                                                  previousComponent: D.A2.HOME,
                                              }),
                                          }),
                                          null != K &&
                                              g.A.isInProperTreatments() &&
                                              (0, r.jsx)(P.A, {
                                                  location: f.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
                                                  sectionRef: a,
                                              }),
                                          (0, r.jsx)(w.A, {
                                              className: U.Zy,
                                              location: f.A.PREMIUM_MARKETING_GIFT_SECTION,
                                              analyticsLocation: {
                                                  page: M.liQ.NITRO_HOME,
                                                  section: M.JJy.GIFT_BANNER,
                                              },
                                          }),
                                          (0, r.jsx)("div", {
                                              className: U.hz,
                                          }),
                                          (0, r.jsx)(c.L, {
                                              innerRef: H,
                                              onChange: (e) => {
                                                  e &&
                                                      !es &&
                                                      (A.default.track(M.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                          location_stack: ea,
                                                      }),
                                                      eo(!0));
                                              },
                                              children: (0, r.jsx)("div", {
                                                  ref: H,
                                                  className: U._Z,
                                              }),
                                          }),
                                          (0, r.jsx)("img", {
                                              src: G,
                                              className: U.Kw,
                                              width: 112,
                                              height: 85,
                                              alt: k.intl.string(k.t.X4IxWL),
                                          }),
                                      ],
                                  }),
                              }),
                              en &&
                                  null != er &&
                                  (0, r.jsx)(C.A, {
                                      isVisible: ei && q,
                                      premiumSubscription: Y,
                                      churnDiscountOffer: X,
                                      discountedPrice: er,
                                  }),
                          ],
                      }),
                      (0, r.jsx)(x.A, {
                          isAllPerksVisible: J,
                          setIsAllPerksVisible: $,
                          previousComponent: D.A2.HOME,
                          enablePremiumBrandRefresh: ec,
                      }),
                  ],
              })
            : (0, r.jsx)("div", {
                  className: s()(U.kL, U.Lq),
                  children: (0, r.jsx)(u.y$y, {}),
              });
    };
