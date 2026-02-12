n.d(t, { A: () => z }), n(321073), n(323874), n(14289), n(35956);
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
    N = n(170887),
    f = n(131168),
    b = n(482589),
    j = n(511484),
    v = n(322631),
    O = n(570627),
    R = n(568031),
    y = n(518491),
    P = n(965591),
    L = n(495022),
    D = n(157839),
    M = n(382694),
    G = n(60508),
    U = n(821158),
    k = n(235365),
    V = n(994763),
    H = n(788868),
    w = n(652215),
    B = n(985018),
    Y = n(865047),
    F = n(288894);
let z = (e) => {
    let { userId: t } = e,
        n = O.m.useConfig({ location: "PremiumSubscriberHome" }).enabled,
        a = (0, r.zy)();
    s.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, h.Ay)()];
            null != t && e.push((0, T.A)(t)), await Promise.all(e);
        });
    }, [t]),
        s.useEffect(() => {
            ee(!0);
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
        X = (0, E.DK)(p.W.NITRO, "PremiumSubscriberHome"),
        { scrollTargetId: J, glowingPerkId: Q } = s.useMemo(() => {
            let e = new URLSearchParams(a.search),
                t = e.get("perk"),
                n = e.get("section");
            return null != t ? { scrollTargetId: t, glowingPerkId: t } : null != n ? { scrollTargetId: n } : {};
        }, [a.search]);
    (0, V.z)(J ?? "", null != J);
    let [$, ee] = s.useState(!1),
        et = (0, f.p)(),
        en = s.useRef(null),
        [ei, es] = s.useState(!1),
        [ea, el] = s.useState(!1),
        er = null != et && null != K && K.status === w.Dmq.CANCELED,
        eo = (0, j.iU)(H.gD.PREMIUM_MONTH_TIER_2, et, K),
        ec = !ea && er,
        { analyticsLocations: ed } = (0, m.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [eu, e_] = s.useState(!1),
        em = (0, o.bG)([C.A], () => (null != t ? C.A.getUserProfile(t) : null)),
        eA = (0, N.A)({ location: "PremiumSubscriberHome" });
    return null != em && (Z || null != q)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(d.GtU, {
                      className: Y.xW,
                      ref: z,
                      children: [
                          (0, i.jsx)(d.hLv, {
                              color: "nitro-pink",
                              className: l()(Y.kL, Y.Gd, { [Y.fv]: !eA }),
                              children: (0, i.jsxs)(m.f5, {
                                  value: ed,
                                  children: [
                                      (0, i.jsx)(c.L, {
                                          innerRef: en,
                                          onChange: (e) => el(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, i.jsx)(y.A, {
                                              buttonVisibilityRef: en,
                                              className: Y.v1,
                                              enablePremiumBrandRefresh: eA,
                                              userDiscountOffer: et,
                                              discountedPrice: eo,
                                          }),
                                      }),
                                      n && (0, i.jsx)(M.A, { glowingPerkId: Q }),
                                      !n &&
                                          (0, i.jsx)(D.A, {
                                              variant: v.cJ.WHATS_NEW,
                                              className: Y.Iw,
                                              noBackground: !0,
                                              leftAlignHeaders: !0,
                                          }),
                                      null != q &&
                                          X &&
                                          (0, i.jsx)(k.A, { location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                      n && (0, i.jsx)(L.A, { glowingPerkId: Q }),
                                      !n &&
                                          (0, i.jsx)(D.A, {
                                              className: Y.xU,
                                              variant: v.cJ.PERKS_DISCOVERABILITY,
                                              noBackground: !0,
                                              leftAlignHeaders: !0,
                                              showAllPerksButton: (0, i.jsx)(U.A, {
                                                  setIsAllPerksVisible: es,
                                                  previousComponent: v.A2.HOME,
                                              }),
                                          }),
                                      (0, i.jsx)(R.A, {
                                          className: Y.Zy,
                                          location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: { page: w.liQ.NITRO_HOME, section: w.JJy.GIFT_BANNER },
                                      }),
                                      (0, i.jsx)("div", { className: Y.hz }),
                                      (0, i.jsx)(c.L, {
                                          innerRef: W,
                                          onChange: (e) => {
                                              e &&
                                                  !eu &&
                                                  (I.default.track(w.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: ed,
                                                  }),
                                                  e_(!0));
                                          },
                                          children: (0, i.jsx)("div", { ref: W, className: Y._Z }),
                                      }),
                                      (0, i.jsx)("img", {
                                          src: F,
                                          className: Y.Kw,
                                          width: 112,
                                          height: 85,
                                          alt: B.intl.string(B.t.X4IxWL),
                                      }),
                                  ],
                              }),
                          }),
                          er &&
                              null != eo &&
                              (0, i.jsx)(P.A, {
                                  isVisible: ec && $,
                                  premiumSubscription: K,
                                  churnDiscountOffer: et,
                                  discountedPrice: eo,
                              }),
                      ],
                  }),
                  (0, i.jsx)(G.A, {
                      isAllPerksVisible: ei,
                      setIsAllPerksVisible: es,
                      previousComponent: v.A2.HOME,
                      enablePremiumBrandRefresh: eA,
                  }),
              ],
          })
        : (0, i.jsx)("div", { className: l()(Y.kL, Y.Lq), children: (0, i.jsx)(d.y$y, {}) });
};
