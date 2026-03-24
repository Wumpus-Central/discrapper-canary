n.d(t, { A: () => U }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(873263),
    o = n(311907),
    d = n(230109),
    c = n(397927),
    u = n(73153),
    m = n(793574),
    g = n(688810),
    _ = n(726649),
    x = n(611924),
    A = n(961250),
    h = n(320118),
    p = n(622543),
    f = n(576622),
    T = n(166403),
    E = n(954571),
    S = n(131168),
    b = n(482589),
    C = n(511484),
    N = n(568031),
    v = n(518491),
    I = n(965591),
    j = n(495022),
    y = n(382694),
    O = n(235365),
    R = n(994763),
    L = n(788868),
    P = n(652215),
    D = n(985018),
    G = n(520089),
    M = n(288894);
let U = (e) => {
    let { userId: t } = e,
        n = (0, r.zy)();
    s.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, A.Ay)()];
            null != t && e.push((0, f.A)(t)), await Promise.all(e);
        });
    }, [t]),
        s.useEffect(() => {
            K(!0);
        }, []),
        (0, b.j)(),
        (0, x.P)(_.b);
    let l = s.useRef(null),
        U = s.useRef(null),
        k = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        { isReady: w, programReward: V, isEligible: B } = (0, h.F)({ location: "PremiumSubscriberHome" }),
        {
            scrollTargetId: F,
            glowingPerkId: H,
            scrollBlock: z,
            scrollInline: Y,
        } = s.useMemo(() => {
            let e = new URLSearchParams(n.search),
                t = e.get("perk"),
                i = e.get("section");
            return null != t
                ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                : null != i
                  ? { scrollTargetId: i, scrollBlock: "start" }
                  : {};
        }, [n.search]);
    (0, R.z)(F ?? "", null != F, z, Y);
    let [X, K] = s.useState(!1),
        W = (0, S.p)(),
        Z = s.useRef(null),
        [q, Q] = s.useState(!1),
        J = null != W && null != k && k.status === P.Dmq.CANCELED,
        $ = (0, C.iU)(L.gD.PREMIUM_MONTH_TIER_2, W, k),
        ee = !q && J,
        { analyticsLocations: et } = (0, g.Ay)(m.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [en, ei] = s.useState(!1);
    return null != (0, o.bG)([p.A], () => (null != t ? p.A.getUserProfile(t) : null)) && (w || null != V)
        ? (0, i.jsxs)(c.GtU, {
              className: G.xW,
              ref: l,
              children: [
                  (0, i.jsx)(c.hLv, {
                      color: "nitro-pink",
                      className: a()(G.kL, G.Gd),
                      offsetBottom: 0.8,
                      children: (0, i.jsxs)(g.f5, {
                          value: et,
                          children: [
                              (0, i.jsx)(d.L, {
                                  innerRef: Z,
                                  onChange: (e) => Q(e),
                                  threshold: 0.1,
                                  active: !0,
                                  children: (0, i.jsx)(v.A, {
                                      buttonVisibilityRef: Z,
                                      className: G.v1,
                                      enablePremiumBrandRefresh: !0,
                                      userDiscountOffer: W,
                                      discountedPrice: $,
                                  }),
                              }),
                              (0, i.jsx)(y.A, { glowingPerkId: H }),
                              null != V &&
                                  B &&
                                  (0, i.jsx)(O.A, { location: m.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                              (0, i.jsx)(j.A, { glowingPerkId: H }),
                              (0, i.jsx)(N.A, {
                                  className: G.Zy,
                                  location: m.A.PREMIUM_MARKETING_GIFT_SECTION,
                                  analyticsLocation: { page: P.liQ.NITRO_HOME, section: P.JJy.GIFT_BANNER },
                              }),
                              (0, i.jsx)("div", { className: G.hz }),
                              (0, i.jsx)(d.L, {
                                  innerRef: U,
                                  onChange: (e) => {
                                      e &&
                                          !en &&
                                          (E.default.track(P.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                              location_stack: et,
                                          }),
                                          ei(!0));
                                  },
                                  children: (0, i.jsx)("div", { ref: U, className: G._Z }),
                              }),
                              (0, i.jsx)("img", {
                                  src: M,
                                  className: G.Kw,
                                  width: 112,
                                  height: 85,
                                  alt: D.intl.string(D.t.X4IxWL),
                              }),
                          ],
                      }),
                  }),
                  J &&
                      null != $ &&
                      (0, i.jsx)(I.A, {
                          isVisible: ee && X,
                          premiumSubscription: k,
                          churnDiscountOffer: W,
                          discountedPrice: $,
                      }),
              ],
          })
        : (0, i.jsx)("div", { className: a()(G.kL, G.Lq), children: (0, i.jsx)(c.y$y, {}) });
};
