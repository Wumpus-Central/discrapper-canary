n.d(t, { A: () => w, W: () => G }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(873263),
    o = n(311907),
    c = n(230109),
    d = n(397927),
    u = n(73153),
    _ = n(793574),
    m = n(688810),
    p = n(726649),
    g = n(611924),
    A = n(961250),
    f = n(320118),
    h = n(622543),
    b = n(576622),
    x = n(166403),
    C = n(954571),
    N = n(881489),
    R = n(131168),
    v = n(482589),
    E = n(511484),
    I = n(935956),
    T = n(568031),
    j = n(518491),
    S = n(965591),
    M = n(495022),
    P = n(382694),
    y = n(235365),
    O = n(994763),
    D = n(788868),
    L = n(652215),
    U = n(985018),
    k = n(904286),
    B = n(288894);
let G = "perk",
    w = (e) => {
        let { userId: t } = e,
            n = (0, N.ds)(),
            a = (0, l.zy)();
        r.useEffect(() => {
            u.h.wait(async () => {
                let e = [(0, A.Ay)()];
                null != t && e.push((0, b.A)(t)), await Promise.all(e);
            });
        }, [t]),
            r.useEffect(() => {
                Q(!0);
            }, []),
            (0, v.j)(),
            (0, g.P)(p.b);
        let w = r.useRef(null),
            V = r.useRef(null),
            H = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
            { isReady: W, programReward: F, isEligible: Y } = (0, f.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: z,
                glowingSectionId: X,
                glowingPerkId: K,
                scrollBlock: q,
                scrollInline: Z,
            } = r.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get(G),
                    n = e.get("section");
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        (0, O.z)(z ?? "", null != z, q, Z);
        let [$, Q] = r.useState(!1),
            J = (0, R.p)(),
            ee = r.useRef(null),
            [et, en] = r.useState(!1),
            ei = null != J && null != H && H.status === L.Dmq.CANCELED,
            er = (0, E.iU)(D.gD.PREMIUM_MONTH_TIER_2, J, H),
            ea = !et && ei,
            { analyticsLocations: es } = (0, m.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [el, eo] = r.useState(!1);
        return null != (0, o.bG)([h.A], () => (null != t ? h.A.getUserProfile(t) : null)) && (W || null != F)
            ? (0, i.jsxs)(d.GtU, {
                  className: k.xW,
                  ref: w,
                  children: [
                      (0, i.jsx)(d.hLv, {
                          color: "nitro-pink",
                          className: s()(k.kL, k.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, i.jsxs)(m.f5, {
                              value: es,
                              children: [
                                  (0, i.jsx)(c.L, {
                                      innerRef: ee,
                                      onChange: (e) => en(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, i.jsx)(j.A, {
                                          buttonVisibilityRef: ee,
                                          className: k.v1,
                                          userDiscountOffer: J,
                                          discountedPrice: er,
                                      }),
                                  }),
                                  (0, i.jsx)(P.A, { glowingPerkId: K }),
                                  (0, i.jsx)(I.A, { glowingSectionId: X }),
                                  null != F &&
                                      Y &&
                                      (0, i.jsx)(y.A, { location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                  (0, i.jsx)(M.A, { glowingPerkId: K }),
                                  (0, i.jsx)(T.A, {
                                      className: k.Zy,
                                      location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: L.liQ.NITRO_HOME, section: L.JJy.GIFT_BANNER },
                                  }),
                                  (0, i.jsx)("div", { className: k.hz }),
                                  (0, i.jsx)(c.L, {
                                      innerRef: V,
                                      onChange: (e) => {
                                          e &&
                                              !el &&
                                              (C.default.track(L.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: es,
                                              }),
                                              eo(!0));
                                      },
                                      children: (0, i.jsx)("div", { ref: V, className: k._Z }),
                                  }),
                                  (0, i.jsx)("img", {
                                      src: B,
                                      className: k.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: U.intl.string(U.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      ei &&
                          null != er &&
                          (0, i.jsx)(S.A, {
                              isVisible: ea && $,
                              premiumSubscription: H,
                              churnDiscountOffer: J,
                              discountedPrice: er,
                          }),
                  ],
              })
            : (0, i.jsx)("div", { className: s()(k.kL, k.Lq), children: (0, i.jsx)(d.y$y, {}) });
    };
