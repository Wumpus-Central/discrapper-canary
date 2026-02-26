n.d(t, { A: () => Y }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(873263),
    o = n(311907),
    c = n(230109),
    d = n(397927),
    u = n(73153),
    _ = n(793574),
    m = n(688810),
    A = n(726649),
    g = n(611924),
    h = n(961250),
    x = n(320118),
    p = n(622543),
    E = n(576622),
    C = n(166403),
    T = n(954571),
    S = n(170887),
    I = n(131168),
    f = n(482589),
    N = n(511484),
    b = n(322631),
    j = n(570627),
    v = n(568031),
    O = n(518491),
    R = n(965591),
    y = n(495022),
    P = n(157839),
    L = n(382694),
    D = n(60508),
    M = n(821158),
    G = n(235365),
    U = n(994763),
    k = n(788868),
    V = n(652215),
    H = n(985018),
    w = n(865047),
    B = n(288894);
let Y = (e) => {
    let { userId: t } = e,
        n = j.m.useConfig({ location: "PremiumSubscriberHome" }).enabled,
        a = (0, r.zy)();
    s.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, h.Ay)()];
            null != t && e.push((0, E.A)(t)), await Promise.all(e);
        });
    }, [t]),
        s.useEffect(() => {
            ee(!0);
        }, []),
        (0, f.j)(),
        (0, g.P)(A.b);
    let Y = s.useRef(null),
        F = s.useRef(null),
        z = (0, o.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        { isReady: W, programReward: K, isEligible: Z } = (0, x.F)({ location: "PremiumSubscriberHome" }),
        {
            scrollTargetId: q,
            glowingPerkId: X,
            scrollBlock: Q,
            scrollInline: J,
        } = s.useMemo(() => {
            let e = new URLSearchParams(a.search),
                t = e.get("perk"),
                n = e.get("section");
            return null != t
                ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                : null != n
                  ? { scrollTargetId: n, scrollBlock: "start" }
                  : {};
        }, [a.search]);
    (0, U.z)(q ?? "", null != q, Q, J);
    let [$, ee] = s.useState(!1),
        et = (0, I.p)(),
        en = s.useRef(null),
        [ei, es] = s.useState(!1),
        [ea, el] = s.useState(!1),
        er = null != et && null != z && z.status === V.Dmq.CANCELED,
        eo = (0, N.iU)(k.gD.PREMIUM_MONTH_TIER_2, et, z),
        ec = !ea && er,
        { analyticsLocations: ed } = (0, m.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [eu, e_] = s.useState(!1),
        em = (0, o.bG)([p.A], () => (null != t ? p.A.getUserProfile(t) : null)),
        eA = (0, S.A)({ location: "PremiumSubscriberHome" });
    return null != em && (W || null != K)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(d.GtU, {
                      className: l()(w.xW, { [w.J4]: n }),
                      ref: Y,
                      children: [
                          (0, i.jsx)(d.hLv, {
                              color: "nitro-pink",
                              className: l()(w.kL, w.Gd, { [w.fv]: !eA }),
                              offsetBottom: 0.8 * !!n,
                              children: (0, i.jsxs)(m.f5, {
                                  value: ed,
                                  children: [
                                      (0, i.jsx)(c.L, {
                                          innerRef: en,
                                          onChange: (e) => el(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, i.jsx)(O.A, {
                                              buttonVisibilityRef: en,
                                              className: w.v1,
                                              enablePremiumBrandRefresh: eA,
                                              userDiscountOffer: et,
                                              discountedPrice: eo,
                                          }),
                                      }),
                                      n && (0, i.jsx)(L.A, { glowingPerkId: X }),
                                      !n &&
                                          (0, i.jsx)(P.A, {
                                              variant: b.cJ.WHATS_NEW,
                                              className: w.Iw,
                                              noBackground: !0,
                                              leftAlignHeaders: !0,
                                          }),
                                      null != K &&
                                          Z &&
                                          (0, i.jsx)(G.A, { location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                      n && (0, i.jsx)(y.A, { glowingPerkId: X }),
                                      !n &&
                                          (0, i.jsx)(P.A, {
                                              className: w.xU,
                                              variant: b.cJ.PERKS_DISCOVERABILITY,
                                              noBackground: !0,
                                              leftAlignHeaders: !0,
                                              showAllPerksButton: (0, i.jsx)(M.A, {
                                                  setIsAllPerksVisible: es,
                                                  previousComponent: b.A2.HOME,
                                              }),
                                          }),
                                      (0, i.jsx)(v.A, {
                                          className: w.Zy,
                                          location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: { page: V.liQ.NITRO_HOME, section: V.JJy.GIFT_BANNER },
                                      }),
                                      (0, i.jsx)("div", { className: w.hz }),
                                      (0, i.jsx)(c.L, {
                                          innerRef: F,
                                          onChange: (e) => {
                                              e &&
                                                  !eu &&
                                                  (T.default.track(V.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: ed,
                                                  }),
                                                  e_(!0));
                                          },
                                          children: (0, i.jsx)("div", { ref: F, className: w._Z }),
                                      }),
                                      (0, i.jsx)("img", {
                                          src: B,
                                          className: w.Kw,
                                          width: 112,
                                          height: 85,
                                          alt: H.intl.string(H.t.X4IxWL),
                                      }),
                                  ],
                              }),
                          }),
                          er &&
                              null != eo &&
                              (0, i.jsx)(R.A, {
                                  isVisible: ec && $,
                                  premiumSubscription: z,
                                  churnDiscountOffer: et,
                                  discountedPrice: eo,
                              }),
                      ],
                  }),
                  !n &&
                      (0, i.jsx)(D.A, {
                          isAllPerksVisible: ei,
                          setIsAllPerksVisible: es,
                          previousComponent: b.A2.HOME,
                          enablePremiumBrandRefresh: eA,
                      }),
              ],
          })
        : (0, i.jsx)("div", { className: l()(w.kL, w.Lq), children: (0, i.jsx)(d.y$y, {}) });
};
