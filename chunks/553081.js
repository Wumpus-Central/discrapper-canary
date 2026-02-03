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
    O = n(576622),
    x = n(166403),
    C = n(954571),
    S = n(170887),
    T = n(131168),
    I = n(511484),
    N = n(703982),
    j = n(326736),
    y = n(810036),
    v = n(160116),
    P = n(530060),
    R = n(891858),
    D = n(807676),
    L = n(322631),
    w = n(994763),
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
            null != t && e.push((0, O.A)(t)), await Promise.all(e);
        });
    }, [t]),
        i.useEffect(() => {
            X(!0);
        }, []),
        (0, g.P)(m.b);
    let H = i.useRef(null),
        V = i.useRef(null),
        F = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        { isReady: Y, programReward: W } = (0, o.cf)([f.A], () => ({
            isReady: f.A.isReady(),
            programReward: f.A.getRewardForProgram(b.W.NITRO),
        })),
        K = (0, h.Qs)("PremiumSubscriberHome"),
        z = i.useMemo(
            () => !!Y && null != W && !!K && "orbs" === new URLSearchParams(n.search).get("section"),
            [n.search, Y, W, K],
        );
    (0, w.A)(l, z);
    let [Z, X] = i.useState(!1),
        q = (0, T.p)(),
        J = i.useRef(null),
        [Q, $] = i.useState(!1),
        [ee, et] = i.useState(!1),
        en = null != q && null != F && F.status === G.Dmq.CANCELED,
        er = (0, I.iU)(M.gD.PREMIUM_MONTH_TIER_2, q, F),
        ei = !ee && en,
        { analyticsLocations: el } = (0, p.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [es, ea] = i.useState(!1),
        eo = (0, o.bG)([E.A], () => (null != t ? E.A.getUserProfile(t) : null)),
        ec = (0, S.A)({
            location: "PremiumSubscriberHome",
        });
    return null != eo && (Y || null != W)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(d.GtU, {
                      className: k.xW,
                      ref: H,
                      children: [
                          (0, r.jsx)(d.hLv, {
                              color: "nitro-pink",
                              className: s()(k.kL, k.Gd, {
                                  [k.fv]: !ec,
                              }),
                              children: (0, r.jsxs)(p.f5, {
                                  value: el,
                                  children: [
                                      (0, r.jsx)(c.L, {
                                          innerRef: J,
                                          onChange: (e) => et(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, r.jsx)(v.A, {
                                              buttonVisibilityRef: J,
                                              className: k.v1,
                                              enablePremiumBrandRefresh: ec,
                                              userDiscountOffer: q,
                                              discountedPrice: er,
                                          }),
                                      }),
                                      (0, r.jsx)(j.A, {
                                          variant: L.cJ.WHATS_NEW,
                                          className: k.Iw,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                      }),
                                      null != W &&
                                          K &&
                                          (0, r.jsx)(P.A, {
                                              location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
                                              sectionRef: l,
                                          }),
                                      (0, r.jsx)(j.A, {
                                          className: k.xU,
                                          variant: L.cJ.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, r.jsx)(D.A, {
                                              setIsAllPerksVisible: $,
                                              previousComponent: L.A2.HOME,
                                          }),
                                      }),
                                      (0, r.jsx)(y.A, {
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
                                                  !es &&
                                                  (C.default.track(G.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: el,
                                                  }),
                                                  ea(!0));
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
                          en &&
                              null != er &&
                              (0, r.jsx)(N.A, {
                                  isVisible: ei && Z,
                                  premiumSubscription: F,
                                  churnDiscountOffer: q,
                                  discountedPrice: er,
                              }),
                      ],
                  }),
                  (0, r.jsx)(R.A, {
                      isAllPerksVisible: Q,
                      setIsAllPerksVisible: $,
                      previousComponent: L.A2.HOME,
                      enablePremiumBrandRefresh: ec,
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: s()(k.kL, k.Lq),
              children: (0, r.jsx)(d.y$y, {}),
          });
};
