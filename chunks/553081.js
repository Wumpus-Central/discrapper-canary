n.d(t, {
    A: () => H,
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
    b = n(649032),
    h = n(26508),
    E = n(622543),
    O = n(94343),
    x = n(576622),
    C = n(166403),
    S = n(954571),
    T = n(170887),
    I = n(131168),
    N = n(511484),
    j = n(703982),
    y = n(326736),
    v = n(810036),
    P = n(160116),
    R = n(530060),
    D = n(891858),
    L = n(807676),
    w = n(322631),
    M = n(788868),
    G = n(652215),
    U = n(985018),
    k = n(520089),
    B = n(288894);
let H = (e) => {
    let { userId: t } = e,
        n = (0, a.zy)(),
        l = i.useRef(null);
    i.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, A.Ay)()];
            null != t && e.push((0, x.A)(t)), await Promise.all(e);
        });
    }, [t]),
        i.useEffect(() => {
            Z(!0);
        }, []),
        (0, g.P)(m.b);
    let H = i.useRef(null),
        V = i.useRef(null),
        F = (0, o.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        { isReady: Y, programReward: W } = (0, o.cf)([f.A], () => ({
            isReady: f.A.isReady(),
            programReward: f.A.getRewardForProgram(b.W.NITRO),
        })),
        K = i.useMemo(() => !!Y && "orbs" === new URLSearchParams(n.search).get("section"), [n.search, Y]);
    (0, O.A)(l, K);
    let [z, Z] = i.useState(!1),
        X = (0, I.p)(),
        q = i.useRef(null),
        [J, Q] = i.useState(!1),
        [$, ee] = i.useState(!1),
        et = null != X && null != F && F.status === G.Dmq.CANCELED,
        en = (0, N.iU)(M.gD.PREMIUM_MONTH_TIER_2, X, F),
        er = !$ && et,
        { analyticsLocations: ei } = (0, p.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [el, es] = i.useState(!1),
        ea = (0, o.bG)([E.A], () => (null != t ? E.A.getUserProfile(t) : null)),
        eo = (0, T.A)({
            location: "PremiumSubscriberHome",
        });
    return null != ea && (Y || null != W)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(d.GtU, {
                      className: k.xW,
                      ref: H,
                      children: [
                          (0, r.jsx)(d.hLv, {
                              color: "nitro-pink",
                              className: s()(k.kL, k.Gd, {
                                  [k.fv]: !eo,
                              }),
                              children: (0, r.jsxs)(p.f5, {
                                  value: ei,
                                  children: [
                                      (0, r.jsx)(c.L, {
                                          innerRef: q,
                                          onChange: (e) => ee(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, r.jsx)(P.A, {
                                              buttonVisibilityRef: q,
                                              className: k.v1,
                                              enablePremiumBrandRefresh: eo,
                                              userDiscountOffer: X,
                                              discountedPrice: en,
                                          }),
                                      }),
                                      (0, r.jsx)(y.A, {
                                          variant: w.cJ.WHATS_NEW,
                                          className: k.Iw,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                      }),
                                      null != W &&
                                          (0, h.T0)("PremiumSubscriberHome") &&
                                          (0, r.jsx)(R.A, {
                                              location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
                                              sectionRef: l,
                                          }),
                                      (0, r.jsx)(y.A, {
                                          className: k.xU,
                                          variant: w.cJ.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, r.jsx)(L.A, {
                                              setIsAllPerksVisible: Q,
                                              previousComponent: w.A2.HOME,
                                          }),
                                      }),
                                      (0, r.jsx)(v.A, {
                                          className: k.Zy,
                                          location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: {
                                              page: G.liQ.NITRO_HOME,
                                              section: G.JJy.GIFT_BANNER,
                                          },
                                      }),
                                      (0, r.jsx)("div", {
                                          className: k.hz,
                                      }),
                                      (0, r.jsx)(c.L, {
                                          innerRef: V,
                                          onChange: (e) => {
                                              e &&
                                                  !el &&
                                                  (S.default.track(G.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: ei,
                                                  }),
                                                  es(!0));
                                          },
                                          children: (0, r.jsx)("div", {
                                              ref: V,
                                              className: k._Z,
                                          }),
                                      }),
                                      (0, r.jsx)("img", {
                                          src: B,
                                          className: k.Kw,
                                          width: 112,
                                          height: 85,
                                          alt: U.intl.string(U.t.X4IxWL),
                                      }),
                                  ],
                              }),
                          }),
                          et &&
                              null != en &&
                              (0, r.jsx)(j.A, {
                                  isVisible: er && z,
                                  premiumSubscription: F,
                                  churnDiscountOffer: X,
                                  discountedPrice: en,
                              }),
                      ],
                  }),
                  (0, r.jsx)(D.A, {
                      isAllPerksVisible: J,
                      setIsAllPerksVisible: Q,
                      previousComponent: w.A2.HOME,
                      enablePremiumBrandRefresh: eo,
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: s()(k.kL, k.Lq),
              children: (0, r.jsx)(d.y$y, {}),
          });
};
