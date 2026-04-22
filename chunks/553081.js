n.d(t, { Ay: () => W, WU: () => F, x6: () => H }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(873263),
    o = n(311907),
    d = n(230109),
    c = n(289873),
    u = n(599319),
    h = n(315629),
    A = n(73153),
    _ = n(793574),
    m = n(688810),
    g = n(31502),
    p = n(726649),
    f = n(611924),
    E = n(961250),
    x = n(320118),
    I = n(622543),
    C = n(576622),
    b = n(166403),
    N = n(954571),
    S = n(881489),
    v = n(131168),
    T = n(482589),
    y = n(511484),
    R = n(935956),
    j = n(568031),
    L = n(518491),
    O = n(965591),
    G = n(495022),
    D = n(382694),
    M = n(235365),
    U = n(994763),
    P = n(788868),
    w = n(652215),
    k = n(985018),
    V = n(946062),
    B = n(288894);
let H = "section",
    F = "perk",
    W = (e) => {
        let { userId: t } = e,
            n = (0, S.ds)(),
            s = (0, g.l)("PremiumSubscriberHome"),
            W = (0, r.zy)();
        l.useEffect(() => {
            A.h.wait(async () => {
                let e = [(0, E.Ay)()];
                null != t && e.push((0, C.A)(t)), await Promise.all(e);
            });
        }, [t]),
            l.useEffect(() => {
                ei(!0);
            }, []),
            (0, T.j)(),
            (0, f.P)(p.b);
        let Y = l.useRef(null),
            K = l.useRef(null),
            z = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
            { isReady: q, programReward: X, isEligible: Q } = (0, x.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: J,
                glowingSectionId: Z,
                glowingPerkId: $,
                scrollBlock: ee,
                scrollInline: et,
            } = l.useMemo(() => {
                let e = new URLSearchParams(W.search),
                    t = e.get(F),
                    n = e.get(H);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [W.search]);
        (0, U.z)(J ?? "", null != J, ee, et);
        let [en, ei] = l.useState(!1),
            el = (0, v.p)(),
            es = l.useRef(null),
            [ea, er] = l.useState(!1),
            eo = null != el && null != z && z.status === w.Dmq.CANCELED,
            ed = (0, y.iU)(P.gD.PREMIUM_MONTH_TIER_2, el, z),
            ec = !ea && eo,
            { analyticsLocations: eu } = (0, m.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [eh, eA] = l.useState(!1);
        return null != (0, o.bG)([I.A], () => (null != t ? I.A.getUserProfile(t) : null)) && (q || null != X)
            ? (0, i.jsxs)(u.Gt, {
                  className: V.xW,
                  ref: Y,
                  children: [
                      (0, i.jsx)(h.h, {
                          color: "nitro-pink",
                          className: a()(V.kL, V.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, i.jsxs)(m.f5, {
                              value: eu,
                              children: [
                                  (0, i.jsx)(d.L, {
                                      innerRef: es,
                                      onChange: (e) => er(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, i.jsx)(L.A, {
                                          buttonVisibilityRef: es,
                                          className: V.v1,
                                          userDiscountOffer: el,
                                          discountedPrice: ed,
                                      }),
                                  }),
                                  (0, i.jsx)(D.A, { glowingPerkId: $ }),
                                  (0, i.jsx)(R.A, { glowingSectionId: Z }),
                                  null != X &&
                                      Q &&
                                      !s &&
                                      (0, i.jsx)(M.A, { location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                  (0, i.jsx)(G.A, { glowingPerkId: $ }),
                                  (0, i.jsx)(j.A, {
                                      className: V.Zy,
                                      location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: w.liQ.NITRO_HOME, section: w.JJy.GIFT_BANNER },
                                  }),
                                  (0, i.jsx)("div", { className: V.hz }),
                                  (0, i.jsx)(d.L, {
                                      innerRef: K,
                                      onChange: (e) => {
                                          e &&
                                              !eh &&
                                              (N.default.track(w.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: eu,
                                              }),
                                              eA(!0));
                                      },
                                      children: (0, i.jsx)("div", { ref: K, className: V._Z }),
                                  }),
                                  (0, i.jsx)("img", {
                                      src: B,
                                      className: V.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: k.intl.string(k.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      eo &&
                          null != ed &&
                          (0, i.jsx)(O.A, {
                              isVisible: ec && en,
                              premiumSubscription: z,
                              churnDiscountOffer: el,
                              discountedPrice: ed,
                          }),
                  ],
              })
            : (0, i.jsx)("div", { className: a()(V.kL, V.Lq), children: (0, i.jsx)(c.y, {}) });
    };
