n.d(t, { A: () => F }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(960488),
    o = n(311907),
    c = n(230109),
    d = n(397927),
    u = n(73153),
    _ = n(793574),
    m = n(688810),
    A = n(726649),
    g = n(611924),
    h = n(961250),
    x = n(895944),
    p = n(649032),
    E = n(26508),
    C = n(622543),
    T = n(576622),
    S = n(166403),
    I = n(954571),
    f = n(170887),
    N = n(131168),
    b = n(482589),
    j = n(511484),
    v = n(322631),
    O = n(570627),
    R = n(568031),
    y = n(518491),
    P = n(965591),
    L = n(157839),
    D = n(382694),
    M = n(60508),
    G = n(821158),
    U = n(235365),
    k = n(994763),
    V = n(788868),
    H = n(652215),
    w = n(985018),
    B = n(520089),
    Y = n(288894);
let F = (e) => {
    let { userId: t } = e,
        n = O.m.useConfig({ location: "PremiumSubscriberHome" }).enabled,
        a = (0, r.zy)(),
        F = s.useRef(null);
    s.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, h.Ay)()];
            null != t && e.push((0, T.A)(t)), await Promise.all(e);
        });
    }, [t]),
        s.useEffect(() => {
            $(!0);
        }, []),
        (0, b.j)(),
        (0, g.P)(A.b);
    let z = s.useRef(null),
        W = s.useRef(null),
        K = (0, o.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        { isReady: Z, programReward: q } = (0, o.cf)([x.A], () => ({
            isReady: x.A.isReady(),
            programReward: x.A.getRewardForProgram(p.W.NITRO),
        })),
        X = (0, E.Qs)("PremiumSubscriberHome"),
        J = s.useMemo(
            () => !!Z && null != q && !!X && "orbs" === new URLSearchParams(a.search).get("section"),
            [a.search, Z, q, X],
        );
    (0, k.A)(F, J);
    let [Q, $] = s.useState(!1),
        ee = (0, N.p)(),
        et = s.useRef(null),
        [en, ei] = s.useState(!1),
        [es, ea] = s.useState(!1),
        el = null != ee && null != K && K.status === H.Dmq.CANCELED,
        er = (0, j.iU)(V.gD.PREMIUM_MONTH_TIER_2, ee, K),
        eo = !es && el,
        { analyticsLocations: ec } = (0, m.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [ed, eu] = s.useState(!1),
        e_ = (0, o.bG)([C.A], () => (null != t ? C.A.getUserProfile(t) : null)),
        em = (0, f.A)({ location: "PremiumSubscriberHome" });
    return null != e_ && (Z || null != q)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(d.GtU, {
                      className: B.xW,
                      ref: z,
                      children: [
                          (0, i.jsx)(d.hLv, {
                              color: "nitro-pink",
                              className: l()(B.kL, B.Gd, { [B.fv]: !em }),
                              children: (0, i.jsxs)(m.f5, {
                                  value: ec,
                                  children: [
                                      (0, i.jsx)(c.L, {
                                          innerRef: et,
                                          onChange: (e) => ea(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, i.jsx)(y.A, {
                                              buttonVisibilityRef: et,
                                              className: B.v1,
                                              enablePremiumBrandRefresh: em,
                                              userDiscountOffer: ee,
                                              discountedPrice: er,
                                          }),
                                      }),
                                      n && (0, i.jsx)(D.A, {}),
                                      !n &&
                                          (0, i.jsx)(L.A, {
                                              variant: v.cJ.WHATS_NEW,
                                              className: B.Iw,
                                              noBackground: !0,
                                              leftAlignHeaders: !0,
                                          }),
                                      null != q &&
                                          X &&
                                          (0, i.jsx)(U.A, {
                                              location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
                                              sectionRef: F,
                                          }),
                                      (0, i.jsx)(L.A, {
                                          className: B.xU,
                                          variant: v.cJ.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, i.jsx)(G.A, {
                                              setIsAllPerksVisible: ei,
                                              previousComponent: v.A2.HOME,
                                          }),
                                      }),
                                      (0, i.jsx)(R.A, {
                                          className: B.Zy,
                                          location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: { page: H.liQ.NITRO_HOME, section: H.JJy.GIFT_BANNER },
                                      }),
                                      (0, i.jsx)("div", { className: B.hz }),
                                      (0, i.jsx)(c.L, {
                                          innerRef: W,
                                          onChange: (e) => {
                                              e &&
                                                  !ed &&
                                                  (I.default.track(H.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: ec,
                                                  }),
                                                  eu(!0));
                                          },
                                          children: (0, i.jsx)("div", { ref: W, className: B._Z }),
                                      }),
                                      (0, i.jsx)("img", {
                                          src: Y,
                                          className: B.Kw,
                                          width: 112,
                                          height: 85,
                                          alt: w.intl.string(w.t.X4IxWL),
                                      }),
                                  ],
                              }),
                          }),
                          el &&
                              null != er &&
                              (0, i.jsx)(P.A, {
                                  isVisible: eo && Q,
                                  premiumSubscription: K,
                                  churnDiscountOffer: ee,
                                  discountedPrice: er,
                              }),
                      ],
                  }),
                  (0, i.jsx)(M.A, {
                      isAllPerksVisible: en,
                      setIsAllPerksVisible: ei,
                      previousComponent: v.A2.HOME,
                      enablePremiumBrandRefresh: em,
                  }),
              ],
          })
        : (0, i.jsx)("div", { className: l()(B.kL, B.Lq), children: (0, i.jsx)(d.y$y, {}) });
};
