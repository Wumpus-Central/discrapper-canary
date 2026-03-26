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
    _ = n(688810),
    g = n(726649),
    x = n(611924),
    A = n(961250),
    h = n(320118),
    p = n(622543),
    f = n(576622),
    T = n(166403),
    S = n(954571),
    E = n(637073),
    b = n(131168),
    C = n(482589),
    v = n(511484),
    N = n(568031),
    I = n(518491),
    j = n(965591),
    y = n(495022),
    O = n(382694),
    R = n(235365),
    L = n(994763),
    P = n(788868),
    D = n(652215),
    G = n(985018),
    M = n(904286),
    k = n(288894);
let U = (e) => {
    let { userId: t } = e,
        n = (0, E.ds)(),
        l = (0, r.zy)();
    s.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, A.Ay)()];
            null != t && e.push((0, f.A)(t)), await Promise.all(e);
        });
    }, [t]),
        s.useEffect(() => {
            Z(!0);
        }, []),
        (0, C.j)(),
        (0, x.P)(g.b);
    let U = s.useRef(null),
        w = s.useRef(null),
        V = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        { isReady: B, programReward: F, isEligible: H } = (0, h.F)({ location: "PremiumSubscriberHome" }),
        {
            scrollTargetId: z,
            glowingPerkId: Y,
            scrollBlock: X,
            scrollInline: K,
        } = s.useMemo(() => {
            let e = new URLSearchParams(l.search),
                t = e.get("perk"),
                n = e.get("section");
            return null != t
                ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                : null != n
                  ? { scrollTargetId: n, scrollBlock: "start" }
                  : {};
        }, [l.search]);
    (0, L.z)(z ?? "", null != z, X, K);
    let [W, Z] = s.useState(!1),
        q = (0, b.p)(),
        Q = s.useRef(null),
        [J, $] = s.useState(!1),
        ee = null != q && null != V && V.status === D.Dmq.CANCELED,
        et = (0, v.iU)(P.gD.PREMIUM_MONTH_TIER_2, q, V),
        en = !J && ee,
        { analyticsLocations: ei } = (0, _.Ay)(m.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [es, el] = s.useState(!1);
    return null != (0, o.bG)([p.A], () => (null != t ? p.A.getUserProfile(t) : null)) && (B || null != F)
        ? (0, i.jsxs)(c.GtU, {
              className: M.xW,
              ref: U,
              children: [
                  (0, i.jsx)(c.hLv, {
                      color: "nitro-pink",
                      className: a()(M.kL, M.Gd),
                      offsetBottom: n ? 0.55 : 0.8,
                      children: (0, i.jsxs)(_.f5, {
                          value: ei,
                          children: [
                              (0, i.jsx)(d.L, {
                                  innerRef: Q,
                                  onChange: (e) => $(e),
                                  threshold: 0.1,
                                  active: !0,
                                  children: (0, i.jsx)(I.A, {
                                      buttonVisibilityRef: Q,
                                      className: M.v1,
                                      enablePremiumBrandRefresh: !0,
                                      userDiscountOffer: q,
                                      discountedPrice: et,
                                  }),
                              }),
                              (0, i.jsx)(O.A, { glowingPerkId: Y }),
                              null != F &&
                                  H &&
                                  (0, i.jsx)(R.A, { location: m.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                              (0, i.jsx)(y.A, { glowingPerkId: Y }),
                              (0, i.jsx)(N.A, {
                                  className: M.Zy,
                                  location: m.A.PREMIUM_MARKETING_GIFT_SECTION,
                                  analyticsLocation: { page: D.liQ.NITRO_HOME, section: D.JJy.GIFT_BANNER },
                              }),
                              (0, i.jsx)("div", { className: M.hz }),
                              (0, i.jsx)(d.L, {
                                  innerRef: w,
                                  onChange: (e) => {
                                      e &&
                                          !es &&
                                          (S.default.track(D.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                              location_stack: ei,
                                          }),
                                          el(!0));
                                  },
                                  children: (0, i.jsx)("div", { ref: w, className: M._Z }),
                              }),
                              (0, i.jsx)("img", {
                                  src: k,
                                  className: M.Kw,
                                  width: 112,
                                  height: 85,
                                  alt: G.intl.string(G.t.X4IxWL),
                              }),
                          ],
                      }),
                  }),
                  ee &&
                      null != et &&
                      (0, i.jsx)(j.A, {
                          isVisible: en && W,
                          premiumSubscription: V,
                          churnDiscountOffer: q,
                          discountedPrice: et,
                      }),
              ],
          })
        : (0, i.jsx)("div", { className: a()(M.kL, M.Lq), children: (0, i.jsx)(c.y$y, {}) });
};
