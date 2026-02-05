n.d(t, { A: () => H }), n(321073), n(323874), n(14289), n(35956);
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
    b = n(511484),
    R = n(322631),
    v = n(568031),
    O = n(518491),
    j = n(965591),
    P = n(157839),
    y = n(60508),
    L = n(821158),
    D = n(235365),
    M = n(994763),
    G = n(788868),
    U = n(652215),
    k = n(985018),
    B = n(520089),
    w = n(288894);
let H = (e) => {
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
            X(!0);
        }, []),
        (0, g.P)(A.b);
    let H = s.useRef(null),
        V = s.useRef(null),
        F = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        { isReady: Y, programReward: W } = (0, o.cf)([h.A], () => ({
            isReady: h.A.isReady(),
            programReward: h.A.getRewardForProgram(p.W.NITRO),
        })),
        z = (0, C.Qs)("PremiumSubscriberHome"),
        K = s.useMemo(
            () => !!Y && null != W && !!z && "orbs" === new URLSearchParams(n.search).get("section"),
            [n.search, Y, W, z],
        );
    (0, M.A)(r, K);
    let [Z, X] = s.useState(!1),
        q = (0, N.p)(),
        J = s.useRef(null),
        [Q, $] = s.useState(!1),
        [ee, et] = s.useState(!1),
        en = null != q && null != F && F.status === U.Dmq.CANCELED,
        ei = (0, b.iU)(G.gD.PREMIUM_MONTH_TIER_2, q, F),
        es = !ee && en,
        { analyticsLocations: er } = (0, m.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [ea, el] = s.useState(!1),
        eo = (0, o.bG)([x.A], () => (null != t ? x.A.getUserProfile(t) : null)),
        ec = (0, f.A)({ location: "PremiumSubscriberHome" });
    return null != eo && (Y || null != W)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(d.GtU, {
                      className: B.xW,
                      ref: H,
                      children: [
                          (0, i.jsx)(d.hLv, {
                              color: "nitro-pink",
                              className: a()(B.kL, B.Gd, { [B.fv]: !ec }),
                              children: (0, i.jsxs)(m.f5, {
                                  value: er,
                                  children: [
                                      (0, i.jsx)(c.L, {
                                          innerRef: J,
                                          onChange: (e) => et(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, i.jsx)(O.A, {
                                              buttonVisibilityRef: J,
                                              className: B.v1,
                                              enablePremiumBrandRefresh: ec,
                                              userDiscountOffer: q,
                                              discountedPrice: ei,
                                          }),
                                      }),
                                      (0, i.jsx)(P.A, {
                                          variant: R.cJ.WHATS_NEW,
                                          className: B.Iw,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                      }),
                                      null != W &&
                                          z &&
                                          (0, i.jsx)(D.A, {
                                              location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
                                              sectionRef: r,
                                          }),
                                      (0, i.jsx)(P.A, {
                                          className: B.xU,
                                          variant: R.cJ.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, i.jsx)(L.A, {
                                              setIsAllPerksVisible: $,
                                              previousComponent: R.A2.HOME,
                                          }),
                                      }),
                                      (0, i.jsx)(v.A, {
                                          className: B.Zy,
                                          location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: { page: U.liQ.NITRO_HOME, section: U.JJy.GIFT_BANNER },
                                      }),
                                      (0, i.jsx)("div", { className: B.hz }),
                                      (0, i.jsx)(c.L, {
                                          innerRef: V,
                                          onChange: (e) => {
                                              e &&
                                                  !ea &&
                                                  (S.default.track(U.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: er,
                                                  }),
                                                  el(!0));
                                          },
                                          children: (0, i.jsx)("div", { ref: V, className: B._Z }),
                                      }),
                                      (0, i.jsx)("img", {
                                          src: w,
                                          className: B.Kw,
                                          width: 112,
                                          height: 85,
                                          alt: k.intl.string(k.t.X4IxWL),
                                      }),
                                  ],
                              }),
                          }),
                          en &&
                              null != ei &&
                              (0, i.jsx)(j.A, {
                                  isVisible: es && Z,
                                  premiumSubscription: F,
                                  churnDiscountOffer: q,
                                  discountedPrice: ei,
                              }),
                      ],
                  }),
                  (0, i.jsx)(y.A, {
                      isAllPerksVisible: Q,
                      setIsAllPerksVisible: $,
                      previousComponent: R.A2.HOME,
                      enablePremiumBrandRefresh: ec,
                  }),
              ],
          })
        : (0, i.jsx)("div", { className: a()(B.kL, B.Lq), children: (0, i.jsx)(d.y$y, {}) });
};
