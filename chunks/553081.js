n.d(t, { A: () => V }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(960488),
    o = n(311907),
    c = n(230109),
    d = n(397927),
    u = n(73153),
    _ = n(793574),
    m = n(688810),
    A = n(726649),
    g = n(611924),
    E = n(961250),
    h = n(895944),
    p = n(649032),
    C = n(26508),
    x = n(622543),
    T = n(576622),
    I = n(166403),
    S = n(954571),
    f = n(170887),
    N = n(131168),
    b = n(482589),
    R = n(511484),
    v = n(322631),
    O = n(568031),
    j = n(518491),
    P = n(965591),
    y = n(157839),
    L = n(60508),
    D = n(821158),
    M = n(235365),
    G = n(994763),
    U = n(788868),
    k = n(652215),
    B = n(985018),
    w = n(520089),
    H = n(288894);
let V = (e) => {
    let { userId: t } = e,
        n = (0, l.zy)(),
        r = s.useRef(null);
    s.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, E.Ay)()];
            null != t && e.push((0, T.A)(t)), await Promise.all(e);
        });
    }, [t]),
        s.useEffect(() => {
            q(!0);
        }, []),
        (0, b.j)(),
        (0, g.P)(A.b);
    let V = s.useRef(null),
        F = s.useRef(null),
        Y = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        { isReady: W, programReward: z } = (0, o.cf)([h.A], () => ({
            isReady: h.A.isReady(),
            programReward: h.A.getRewardForProgram(p.W.NITRO),
        })),
        K = (0, C.Qs)("PremiumSubscriberHome"),
        Z = s.useMemo(
            () => !!W && null != z && !!K && "orbs" === new URLSearchParams(n.search).get("section"),
            [n.search, W, z, K],
        );
    (0, G.A)(r, Z);
    let [X, q] = s.useState(!1),
        J = (0, N.p)(),
        Q = s.useRef(null),
        [$, ee] = s.useState(!1),
        [et, en] = s.useState(!1),
        ei = null != J && null != Y && Y.status === k.Dmq.CANCELED,
        es = (0, R.iU)(U.gD.PREMIUM_MONTH_TIER_2, J, Y),
        er = !et && ei,
        { analyticsLocations: ea } = (0, m.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [el, eo] = s.useState(!1),
        ec = (0, o.bG)([x.A], () => (null != t ? x.A.getUserProfile(t) : null)),
        ed = (0, f.A)({ location: "PremiumSubscriberHome" });
    return null != ec && (W || null != z)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(d.GtU, {
                      className: w.xW,
                      ref: V,
                      children: [
                          (0, i.jsx)(d.hLv, {
                              color: "nitro-pink",
                              className: a()(w.kL, w.Gd, { [w.fv]: !ed }),
                              children: (0, i.jsxs)(m.f5, {
                                  value: ea,
                                  children: [
                                      (0, i.jsx)(c.L, {
                                          innerRef: Q,
                                          onChange: (e) => en(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, i.jsx)(j.A, {
                                              buttonVisibilityRef: Q,
                                              className: w.v1,
                                              enablePremiumBrandRefresh: ed,
                                              userDiscountOffer: J,
                                              discountedPrice: es,
                                          }),
                                      }),
                                      (0, i.jsx)(y.A, {
                                          variant: v.cJ.WHATS_NEW,
                                          className: w.Iw,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                      }),
                                      null != z &&
                                          K &&
                                          (0, i.jsx)(M.A, {
                                              location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
                                              sectionRef: r,
                                          }),
                                      (0, i.jsx)(y.A, {
                                          className: w.xU,
                                          variant: v.cJ.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, i.jsx)(D.A, {
                                              setIsAllPerksVisible: ee,
                                              previousComponent: v.A2.HOME,
                                          }),
                                      }),
                                      (0, i.jsx)(O.A, {
                                          className: w.Zy,
                                          location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: { page: k.liQ.NITRO_HOME, section: k.JJy.GIFT_BANNER },
                                      }),
                                      (0, i.jsx)("div", { className: w.hz }),
                                      (0, i.jsx)(c.L, {
                                          innerRef: F,
                                          onChange: (e) => {
                                              e &&
                                                  !el &&
                                                  (S.default.track(k.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: ea,
                                                  }),
                                                  eo(!0));
                                          },
                                          children: (0, i.jsx)("div", { ref: F, className: w._Z }),
                                      }),
                                      (0, i.jsx)("img", {
                                          src: H,
                                          className: w.Kw,
                                          width: 112,
                                          height: 85,
                                          alt: B.intl.string(B.t.X4IxWL),
                                      }),
                                  ],
                              }),
                          }),
                          ei &&
                              null != es &&
                              (0, i.jsx)(P.A, {
                                  isVisible: er && X,
                                  premiumSubscription: Y,
                                  churnDiscountOffer: J,
                                  discountedPrice: es,
                              }),
                      ],
                  }),
                  (0, i.jsx)(L.A, {
                      isAllPerksVisible: $,
                      setIsAllPerksVisible: ee,
                      previousComponent: v.A2.HOME,
                      enablePremiumBrandRefresh: ed,
                  }),
              ],
          })
        : (0, i.jsx)("div", { className: a()(w.kL, w.Lq), children: (0, i.jsx)(d.y$y, {}) });
};
