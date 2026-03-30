n.d(t, { A: () => V, W: () => w }), n(321073), n(323874), n(14289), n(35956);
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
    T = n(576622),
    f = n(166403),
    S = n(954571),
    E = n(881489),
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
    k = n(904286),
    U = n(288894);
let w = "perk",
    V = (e) => {
        let { userId: t } = e,
            n = (0, E.ds)(),
            l = (0, r.zy)();
        s.useEffect(() => {
            u.h.wait(async () => {
                let e = [(0, A.Ay)()];
                null != t && e.push((0, T.A)(t)), await Promise.all(e);
            });
        }, [t]),
            s.useEffect(() => {
                Q(!0);
            }, []),
            (0, C.j)(),
            (0, x.P)(g.b);
        let V = s.useRef(null),
            B = s.useRef(null),
            F = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
            { isReady: H, programReward: z, isEligible: Y } = (0, h.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: X,
                glowingPerkId: K,
                scrollBlock: W,
                scrollInline: Z,
            } = s.useMemo(() => {
                let e = new URLSearchParams(l.search),
                    t = e.get(w),
                    n = e.get("section");
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, scrollBlock: "start" }
                      : {};
            }, [l.search]);
        (0, P.z)(X ?? "", null != X, W, Z);
        let [q, Q] = s.useState(!1),
            J = (0, b.p)(),
            $ = s.useRef(null),
            [ee, et] = s.useState(!1),
            en = null != J && null != F && F.status === G.Dmq.CANCELED,
            ei = (0, v.iU)(D.gD.PREMIUM_MONTH_TIER_2, J, F),
            es = !ee && en,
            { analyticsLocations: el } = (0, _.Ay)(m.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ea, er] = s.useState(!1);
        return null != (0, o.bG)([p.A], () => (null != t ? p.A.getUserProfile(t) : null)) && (H || null != z)
            ? (0, i.jsxs)(c.GtU, {
                  className: k.xW,
                  ref: V,
                  children: [
                      (0, i.jsx)(c.hLv, {
                          color: "nitro-pink",
                          className: a()(k.kL, k.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, i.jsxs)(_.f5, {
                              value: el,
                              children: [
                                  (0, i.jsx)(d.L, {
                                      innerRef: $,
                                      onChange: (e) => et(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, i.jsx)(j.A, {
                                          buttonVisibilityRef: $,
                                          className: k.v1,
                                          enablePremiumBrandRefresh: !0,
                                          userDiscountOffer: J,
                                          discountedPrice: ei,
                                      }),
                                  }),
                                  (0, i.jsx)(R.A, { glowingPerkId: K }),
                                  (0, i.jsx)(N.A, {}),
                                  null != z &&
                                      Y &&
                                      (0, i.jsx)(L.A, { location: m.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                  (0, i.jsx)(O.A, { glowingPerkId: K }),
                                  (0, i.jsx)(I.A, {
                                      className: k.Zy,
                                      location: m.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: G.liQ.NITRO_HOME, section: G.JJy.GIFT_BANNER },
                                  }),
                                  (0, i.jsx)("div", { className: k.hz }),
                                  (0, i.jsx)(d.L, {
                                      innerRef: B,
                                      onChange: (e) => {
                                          e &&
                                              !ea &&
                                              (S.default.track(G.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: el,
                                              }),
                                              er(!0));
                                      },
                                      children: (0, i.jsx)("div", { ref: B, className: k._Z }),
                                  }),
                                  (0, i.jsx)("img", {
                                      src: U,
                                      className: k.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: M.intl.string(M.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      en &&
                          null != ei &&
                          (0, i.jsx)(y.A, {
                              isVisible: es && q,
                              premiumSubscription: F,
                              churnDiscountOffer: J,
                              discountedPrice: ei,
                          }),
                  ],
              })
            : (0, i.jsx)("div", { className: a()(k.kL, k.Lq), children: (0, i.jsx)(c.y$y, {}) });
    };
