n.d(t, { Ay: () => K, WU: () => H, x6: () => B }), n(321073), n(323874), n(14289), n(35956);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(873263),
    o = n(17928),
    u = n(230109),
    d = n(289873),
    c = n(689175),
    h = n(315629),
    A = n(228366),
    m = n(793574),
    g = n(688810),
    p = n(31502),
    f = n(726649),
    E = n(611924),
    _ = n(961250),
    I = n(320118),
    C = n(841595),
    S = n(576622),
    x = n(166403),
    N = n(954571),
    T = n(881489),
    R = n(131168),
    y = n(482589),
    b = n(511484),
    v = n(935956),
    j = n(563347),
    O = n(555199),
    M = n(965591),
    L = n(136735),
    D = n(382694),
    G = n(549384),
    P = n(994763),
    w = n(788868),
    U = n(652215),
    k = n(985018),
    V = n(946062),
    F = n(288894);
let B = "section",
    H = "perk",
    K = (e) => {
        let { userId: t } = e,
            n = (0, T.ds)(),
            s = (0, p.l)("PremiumSubscriberHome"),
            K = (0, a.zy)();
        i.useEffect(() => {
            A.h.wait(async () => {
                let e = [(0, _.Ay)()];
                null != t && e.push((0, S.A)(t)), await Promise.all(e);
            });
        }, [t]),
            i.useEffect(() => {
                el(!0);
            }, []),
            (0, y.j)(),
            (0, E.P)(f.b);
        let W = i.useRef(null),
            Y = i.useRef(null),
            z = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
            { isReady: q, programReward: Q, isEligible: J } = (0, I.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: X,
                glowingSectionId: $,
                glowingPerkId: Z,
                scrollBlock: ee,
                scrollInline: et,
            } = i.useMemo(() => {
                let e = new URLSearchParams(K.search),
                    t = e.get(H),
                    n = e.get(B);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [K.search]);
        (0, P.z)(X ?? "", null != X, ee, et);
        let [en, el] = i.useState(!1),
            ei = (0, R.p)(),
            es = i.useRef(null),
            [er, ea] = i.useState(!1),
            eo = null != ei && null != z && z.status === U.Dmq.CANCELED,
            eu = (0, b.iU)(w.gD.PREMIUM_MONTH_TIER_2, ei, z),
            ed = !er && eo,
            { analyticsLocations: ec } = (0, g.Ay)(m.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [eh, eA] = i.useState(!1);
        return null != (0, o.bG)([C.A], () => (null != t ? C.A.getUserProfile(t) : null)) && (q || null != Q)
            ? (0, l.jsxs)(c.Gt, {
                  className: V.xW,
                  ref: W,
                  children: [
                      (0, l.jsx)(h.h, {
                          color: "nitro-pink",
                          className: r()(V.kL, V.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, l.jsxs)(g.f5, {
                              value: ec,
                              children: [
                                  (0, l.jsx)(u.L, {
                                      innerRef: es,
                                      onChange: (e) => ea(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, l.jsx)(O.A, {
                                          buttonVisibilityRef: es,
                                          className: V.v1,
                                          userDiscountOffer: ei,
                                          discountedPrice: eu,
                                      }),
                                  }),
                                  (0, l.jsx)(v.A, { glowingSectionId: $ }),
                                  (0, l.jsx)(D.A, { glowingPerkId: Z }),
                                  null != Q &&
                                      J &&
                                      !s &&
                                      (0, l.jsx)(G.A, { location: m.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                  (0, l.jsx)(L.A, { glowingPerkId: Z }),
                                  (0, l.jsx)(j.A, {
                                      className: V.Zy,
                                      location: m.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: U.liQ.NITRO_HOME, section: U.JJy.GIFT_BANNER },
                                  }),
                                  (0, l.jsx)("div", { className: V.hz }),
                                  (0, l.jsx)(u.L, {
                                      innerRef: Y,
                                      onChange: (e) => {
                                          e &&
                                              !eh &&
                                              (N.default.track(U.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ec,
                                              }),
                                              eA(!0));
                                      },
                                      children: (0, l.jsx)("div", { ref: Y, className: V._Z }),
                                  }),
                                  (0, l.jsx)("img", {
                                      src: F,
                                      className: V.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: k.intl.string(k.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      eo &&
                          null != eu &&
                          (0, l.jsx)(M.A, {
                              isVisible: ed && en,
                              premiumSubscription: z,
                              churnDiscountOffer: ei,
                              discountedPrice: eu,
                          }),
                  ],
              })
            : (0, l.jsx)("div", { className: r()(V.kL, V.Lq), children: (0, l.jsx)(d.y, {}) });
    };
