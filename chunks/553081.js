n.d(t, { A: () => z }), n(321073), n(323874), n(14289), n(35956);
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
    L = n(495022),
    D = n(157839),
    G = n(382694),
    M = n(60508),
    U = n(821158),
    k = n(235365),
    V = n(994763),
    w = n(788868),
    H = n(652215),
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
            et(!0);
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
        {
            scrollTargetId: Q,
            glowingPerkId: J,
            scrollBlock: $,
        } = s.useMemo(() => {
            let e = new URLSearchParams(a.search),
                t = e.get("perk"),
                n = e.get("section");
            return null != t
                ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center" }
                : null != n
                  ? { scrollTargetId: n, scrollBlock: "start" }
                  : {};
        }, [a.search]);
    (0, V.z)(Q ?? "", null != Q, $);
    let [ee, et] = s.useState(!1),
        en = (0, N.p)(),
        ei = s.useRef(null),
        [es, ea] = s.useState(!1),
        [el, er] = s.useState(!1),
        eo = null != en && null != K && K.status === H.Dmq.CANCELED,
        ec = (0, j.iU)(w.gD.PREMIUM_MONTH_TIER_2, en, K),
        ed = !el && eo,
        { analyticsLocations: eu } = (0, m.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [e_, em] = s.useState(!1),
        eA = (0, o.bG)([C.A], () => (null != t ? C.A.getUserProfile(t) : null)),
        eg = (0, f.A)({ location: "PremiumSubscriberHome" });
    return null != eA && (Z || null != q)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(d.GtU, {
                      className: l()(Y.xW, { [Y.J4]: n }),
                      ref: z,
                      children: [
                          (0, i.jsx)(d.hLv, {
                              color: "nitro-pink",
                              className: l()(Y.kL, Y.Gd, { [Y.fv]: !eg }),
                              offsetBottom: 0.8 * !!n,
                              children: (0, i.jsxs)(m.f5, {
                                  value: eu,
                                  children: [
                                      (0, i.jsx)(c.L, {
                                          innerRef: ei,
                                          onChange: (e) => er(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, i.jsx)(y.A, {
                                              buttonVisibilityRef: ei,
                                              className: Y.v1,
                                              enablePremiumBrandRefresh: eg,
                                              userDiscountOffer: en,
                                              discountedPrice: ec,
                                          }),
                                      }),
                                      n && (0, i.jsx)(G.A, { glowingPerkId: J }),
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
                                      n && (0, i.jsx)(L.A, { glowingPerkId: J }),
                                      !n &&
                                          (0, i.jsx)(D.A, {
                                              className: Y.xU,
                                              variant: v.cJ.PERKS_DISCOVERABILITY,
                                              noBackground: !0,
                                              leftAlignHeaders: !0,
                                              showAllPerksButton: (0, i.jsx)(U.A, {
                                                  setIsAllPerksVisible: ea,
                                                  previousComponent: v.A2.HOME,
                                              }),
                                          }),
                                      (0, i.jsx)(R.A, {
                                          className: Y.Zy,
                                          location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: { page: H.liQ.NITRO_HOME, section: H.JJy.GIFT_BANNER },
                                      }),
                                      (0, i.jsx)("div", { className: Y.hz }),
                                      (0, i.jsx)(c.L, {
                                          innerRef: W,
                                          onChange: (e) => {
                                              e &&
                                                  !e_ &&
                                                  (I.default.track(H.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: eu,
                                                  }),
                                                  em(!0));
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
                          eo &&
                              null != ec &&
                              (0, i.jsx)(P.A, {
                                  isVisible: ed && ee,
                                  premiumSubscription: K,
                                  churnDiscountOffer: en,
                                  discountedPrice: ec,
                              }),
                      ],
                  }),
                  !n &&
                      (0, i.jsx)(M.A, {
                          isAllPerksVisible: es,
                          setIsAllPerksVisible: ea,
                          previousComponent: v.A2.HOME,
                          enablePremiumBrandRefresh: eg,
                      }),
              ],
          })
        : (0, i.jsx)("div", { className: l()(Y.kL, Y.Lq), children: (0, i.jsx)(d.y$y, {}) });
};
