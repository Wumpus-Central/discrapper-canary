n.d(t, {
    A: () => V,
}),
    n(321073),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(960488),
    o = n(311907),
    c = n(230109),
    d = n(397927),
    u = n(73153),
    _ = n(793574),
    p = n(688810),
    m = n(726649),
    g = n(611924),
    A = n(961250),
    f = n(895944),
    h = n(649032),
    b = n(622543),
    E = n(94343),
    x = n(576622),
    O = n(166403),
    C = n(954571),
    I = n(170887),
    T = n(131168),
    S = n(511484),
    j = n(703982),
    v = n(326736),
    N = n(810036),
    y = n(160116),
    P = n(530060),
    R = n(322631),
    D = n(891858),
    w = n(807676),
    L = n(788868),
    M = n(652215),
    U = n(985018),
    G = n(70338),
    k = n(288894);
let V = (e) => {
    let { userId: t } = e,
        n = (0, a.zy)(),
        l = i.useRef(null);
    i.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, A.A)()];
            null != t && e.push((0, x.A)(t)), await Promise.all(e);
        });
    }, [t]),
        i.useEffect(() => {
            K(!0);
        }, []),
        (0, g.P)(m.b);
    let V = i.useRef(null),
        H = i.useRef(null),
        B = (0, o.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        { isReady: F, programReward: Y } = (0, o.cf)([f.A], () => ({
            isReady: f.A.isReady(),
            programReward: f.A.getRewardForProgram(h.W.NITRO),
        })),
        W = i.useMemo(() => !!F && "orbs" === new URLSearchParams(n.search).get("section"), [n.search, F]);
    (0, E.A)(l, W);
    let [z, K] = i.useState(!1),
        Z = (0, T.p)(),
        X = i.useRef(null),
        [q, J] = i.useState(!1),
        [Q, $] = i.useState(!1),
        ee = null != Z && null != B && B.status === M.Dmq.CANCELED,
        et = (0, S.iU)(L.gD.PREMIUM_MONTH_TIER_2, Z, B),
        en = !Q && ee,
        { analyticsLocations: er } = (0, p.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [ei, el] = i.useState(!1),
        es = (0, o.bG)([b.A], () => (null != t ? b.A.getUserProfile(t) : null)),
        ea = (0, I.A)({
            location: "SubscriberNitroHome",
        });
    return null != es && (F || null != Y)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(d.GtU, {
                      className: G.xW,
                      ref: V,
                      children: [
                          (0, r.jsx)(d.hLv, {
                              color: "nitro-pink",
                              className: s()(G.kL, G.Gd, {
                                  [G.fv]: !ea,
                              }),
                              children: (0, r.jsxs)(p.f5, {
                                  value: er,
                                  children: [
                                      (0, r.jsx)(c.L, {
                                          innerRef: X,
                                          onChange: (e) => $(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, r.jsx)(y.A, {
                                              buttonVisibilityRef: X,
                                              className: G.v1,
                                              enablePremiumBrandRefresh: ea,
                                              userDiscountOffer: Z,
                                              discountedPrice: et,
                                          }),
                                      }),
                                      (0, r.jsx)(v.A, {
                                          variant: R.cJ.WHATS_NEW,
                                          className: G.Iw,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                      }),
                                      (0, r.jsx)(v.A, {
                                          className: G.xU,
                                          variant: R.cJ.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, r.jsx)(w.A, {
                                              setIsAllPerksVisible: J,
                                              previousComponent: R.A2.HOME,
                                          }),
                                      }),
                                      null != Y &&
                                          f.A.isInProperTreatments() &&
                                          (0, r.jsx)(P.A, {
                                              location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
                                              sectionRef: l,
                                          }),
                                      (0, r.jsx)(N.A, {
                                          className: G.Zy,
                                          location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: {
                                              page: M.liQ.NITRO_HOME,
                                              section: M.JJy.GIFT_BANNER,
                                          },
                                      }),
                                      (0, r.jsx)("div", {
                                          className: G.hz,
                                      }),
                                      (0, r.jsx)(c.L, {
                                          innerRef: H,
                                          onChange: (e) => {
                                              e &&
                                                  !ei &&
                                                  (C.default.track(M.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: er,
                                                  }),
                                                  el(!0));
                                          },
                                          children: (0, r.jsx)("div", {
                                              ref: H,
                                              className: G._Z,
                                          }),
                                      }),
                                      (0, r.jsx)("img", {
                                          src: k,
                                          className: G.Kw,
                                          width: 112,
                                          height: 85,
                                          alt: U.intl.string(U.t.X4IxWL),
                                      }),
                                  ],
                              }),
                          }),
                          ee &&
                              null != et &&
                              (0, r.jsx)(j.A, {
                                  isVisible: en && z,
                                  premiumSubscription: B,
                                  churnDiscountOffer: Z,
                                  discountedPrice: et,
                              }),
                      ],
                  }),
                  (0, r.jsx)(D.A, {
                      isAllPerksVisible: q,
                      setIsAllPerksVisible: J,
                      previousComponent: R.A2.HOME,
                      enablePremiumBrandRefresh: ea,
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: s()(G.kL, G.Lq),
              children: (0, r.jsx)(d.y$y, {}),
          });
};
