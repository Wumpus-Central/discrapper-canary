n.d(t, { A: () => w }), n(321073), n(323874), n(14289), n(35956);
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
    A = n(611924),
    x = n(961250),
    h = n(320118),
    p = n(622543),
    f = n(576622),
    T = n(166403),
    S = n(954571),
    E = n(637073),
    b = n(131168),
    C = n(482589),
    v = n(511484),
    N = n(935956),
    I = n(568031),
    j = n(518491),
    y = n(965591),
    O = n(495022),
    R = n(382694),
    L = n(235365),
    P = n(994763),
    D = n(788868),
    G = n(652215),
    M = n(985018),
    U = n(904286),
    k = n(288894);
let w = (e) => {
    let { userId: t } = e,
        n = (0, E.ds)(),
        l = (0, r.zy)();
    s.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, x.Ay)()];
            null != t && e.push((0, f.A)(t)), await Promise.all(e);
        });
    }, [t]),
        s.useEffect(() => {
            q(!0);
        }, []),
        (0, C.j)(),
        (0, A.P)(g.b);
    let w = s.useRef(null),
        V = s.useRef(null),
        B = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        { isReady: F, programReward: H, isEligible: z } = (0, h.F)({ location: "PremiumSubscriberHome" }),
        {
            scrollTargetId: Y,
            glowingPerkId: X,
            scrollBlock: K,
            scrollInline: W,
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
    (0, P.z)(Y ?? "", null != Y, K, W);
    let [Z, q] = s.useState(!1),
        Q = (0, b.p)(),
        J = s.useRef(null),
        [$, ee] = s.useState(!1),
        et = null != Q && null != B && B.status === G.Dmq.CANCELED,
        en = (0, v.iU)(D.gD.PREMIUM_MONTH_TIER_2, Q, B),
        ei = !$ && et,
        { analyticsLocations: es } = (0, _.Ay)(m.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [el, ea] = s.useState(!1);
    return null != (0, o.bG)([p.A], () => (null != t ? p.A.getUserProfile(t) : null)) && (F || null != H)
        ? (0, i.jsxs)(c.GtU, {
              className: U.xW,
              ref: w,
              children: [
                  (0, i.jsx)(c.hLv, {
                      color: "nitro-pink",
                      className: a()(U.kL, U.Gd),
                      offsetBottom: n ? 0.55 : 0.8,
                      children: (0, i.jsxs)(_.f5, {
                          value: es,
                          children: [
                              (0, i.jsx)(d.L, {
                                  innerRef: J,
                                  onChange: (e) => ee(e),
                                  threshold: 0.1,
                                  active: !0,
                                  children: (0, i.jsx)(j.A, {
                                      buttonVisibilityRef: J,
                                      className: U.v1,
                                      enablePremiumBrandRefresh: !0,
                                      userDiscountOffer: Q,
                                      discountedPrice: en,
                                  }),
                              }),
                              (0, i.jsx)(R.A, { glowingPerkId: X }),
                              (0, i.jsx)(N.A, {}),
                              null != H &&
                                  z &&
                                  (0, i.jsx)(L.A, { location: m.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                              (0, i.jsx)(O.A, { glowingPerkId: X }),
                              (0, i.jsx)(I.A, {
                                  className: U.Zy,
                                  location: m.A.PREMIUM_MARKETING_GIFT_SECTION,
                                  analyticsLocation: { page: G.liQ.NITRO_HOME, section: G.JJy.GIFT_BANNER },
                              }),
                              (0, i.jsx)("div", { className: U.hz }),
                              (0, i.jsx)(d.L, {
                                  innerRef: V,
                                  onChange: (e) => {
                                      e &&
                                          !el &&
                                          (S.default.track(G.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                              location_stack: es,
                                          }),
                                          ea(!0));
                                  },
                                  children: (0, i.jsx)("div", { ref: V, className: U._Z }),
                              }),
                              (0, i.jsx)("img", {
                                  src: k,
                                  className: U.Kw,
                                  width: 112,
                                  height: 85,
                                  alt: M.intl.string(M.t.X4IxWL),
                              }),
                          ],
                      }),
                  }),
                  et &&
                      null != en &&
                      (0, i.jsx)(y.A, {
                          isVisible: ei && Z,
                          premiumSubscription: B,
                          churnDiscountOffer: Q,
                          discountedPrice: en,
                      }),
              ],
          })
        : (0, i.jsx)("div", { className: a()(U.kL, U.Lq), children: (0, i.jsx)(c.y$y, {}) });
};
