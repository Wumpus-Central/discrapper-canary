n.d(t, {
    A: () => U,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    c = n(397927),
    u = n(73153),
    d = n(793574),
    f = n(688810),
    p = n(726649),
    _ = n(611924),
    h = n(961250),
    m = n(895944),
    g = n(649032),
    E = n(622543),
    b = n(576622),
    y = n(166403),
    O = n(954571),
    A = n(170887),
    v = n(131168),
    S = n(511484),
    I = n(703982),
    T = n(326736),
    C = n(810036),
    N = n(160116),
    R = n(530060),
    w = n(322631),
    P = n(891858),
    D = n(807676),
    x = n(788868),
    L = n(652215),
    j = n(985018),
    M = n(70338),
    k = n(288894);
let U = (e) => {
    let { userId: t } = e;
    i.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, h.A)()];
            null != t && e.push((0, b.A)(t)), await Promise.all(e);
        });
    }, [t]),
        i.useEffect(() => {
            B(!0);
        }, []),
        (0, _.P)(p.b);
    let n = i.useRef(null),
        a = i.useRef(null),
        U = (0, o.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
        { isReady: G, programReward: V } = (0, o.cf)([m.A], () => ({
            isReady: m.A.isReady(),
            programReward: m.A.getRewardForProgram(g.W.NITRO),
        })),
        [F, B] = i.useState(!1),
        H = (0, v.p)(),
        Y = i.useRef(null),
        [W, K] = i.useState(!1),
        [z, q] = i.useState(!1),
        X = null != H && null != U && U.status === L.Dmq.CANCELED,
        Z = (0, S.iU)(x.gD.PREMIUM_MONTH_TIER_2, H, U),
        Q = !z && X,
        { analyticsLocations: $ } = (0, f.Ay)(d.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [J, ee] = i.useState(!1),
        et = (0, o.bG)([E.A], () => (null != t ? E.A.getUserProfile(t) : null)),
        en = (0, A.A)({
            location: "SubscriberNitroHome",
        });
    return null != et && (G || null != V)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(c.GtU, {
                      className: M.xW,
                      ref: n,
                      children: [
                          (0, r.jsx)(c.hLv, {
                              color: "nitro-pink",
                              className: s()(M.kL, M.Gd, {
                                  [M.fv]: !en,
                              }),
                              children: (0, r.jsxs)(f.f5, {
                                  value: $,
                                  children: [
                                      (0, r.jsx)(l.L, {
                                          innerRef: Y,
                                          onChange: (e) => q(e),
                                          threshold: 0.1,
                                          active: !0,
                                          children: (0, r.jsx)(N.A, {
                                              buttonVisibilityRef: Y,
                                              className: M.v1,
                                              enablePremiumBrandRefresh: en,
                                              userDiscountOffer: H,
                                              discountedPrice: Z,
                                          }),
                                      }),
                                      (0, r.jsx)(T.A, {
                                          variant: w.cJ.WHATS_NEW,
                                          className: M.Iw,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                      }),
                                      (0, r.jsx)(T.A, {
                                          className: M.xU,
                                          variant: w.cJ.PERKS_DISCOVERABILITY,
                                          noBackground: !0,
                                          leftAlignHeaders: !0,
                                          showAllPerksButton: (0, r.jsx)(D.A, {
                                              setIsAllPerksVisible: K,
                                              previousComponent: w.A2.HOME,
                                          }),
                                      }),
                                      null != V &&
                                          m.A.isInProperTreatments() &&
                                          (0, r.jsx)(R.A, {
                                              location: d.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
                                          }),
                                      (0, r.jsx)(C.A, {
                                          className: M.Zy,
                                          location: d.A.PREMIUM_MARKETING_GIFT_SECTION,
                                          analyticsLocation: {
                                              page: L.liQ.NITRO_HOME,
                                              section: L.JJy.GIFT_BANNER,
                                          },
                                      }),
                                      (0, r.jsx)("div", {
                                          className: M.hz,
                                      }),
                                      (0, r.jsx)(l.L, {
                                          innerRef: a,
                                          onChange: (e) => {
                                              e &&
                                                  !J &&
                                                  (O.default.track(L.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                      location_stack: $,
                                                  }),
                                                  ee(!0));
                                          },
                                          children: (0, r.jsx)("div", {
                                              ref: a,
                                              className: M._Z,
                                          }),
                                      }),
                                      (0, r.jsx)("img", {
                                          src: k,
                                          className: M.Kw,
                                          width: 112,
                                          height: 85,
                                          alt: j.intl.string(j.t.X4IxWL),
                                      }),
                                  ],
                              }),
                          }),
                          X &&
                              null != Z &&
                              (0, r.jsx)(I.A, {
                                  isVisible: Q && F,
                                  premiumSubscription: U,
                                  churnDiscountOffer: H,
                                  discountedPrice: Z,
                              }),
                      ],
                  }),
                  (0, r.jsx)(P.A, {
                      isAllPerksVisible: W,
                      setIsAllPerksVisible: K,
                      previousComponent: w.A2.HOME,
                      enablePremiumBrandRefresh: en,
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: s()(M.kL, M.Lq),
              children: (0, r.jsx)(c.y$y, {}),
          });
};
