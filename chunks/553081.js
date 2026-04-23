n.d(t, { Ay: () => W, WU: () => F, x6: () => H }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(873263),
    o = n(17928),
    d = n(230109),
    c = n(289873),
    u = n(689175),
    h = n(315629),
    _ = n(228366),
    A = n(793574),
    g = n(688810),
    m = n(31502),
    p = n(726649),
    f = n(611924),
    E = n(961250),
    C = n(320118),
    x = n(841595),
    I = n(576622),
    b = n(166403),
    S = n(954571),
    N = n(881489),
    T = n(131168),
    v = n(482589),
    y = n(511484),
    R = n(935956),
    j = n(563347),
    L = n(555199),
    O = n(965591),
    G = n(136735),
    M = n(382694),
    D = n(549384),
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
            n = (0, N.ds)(),
            s = (0, m.l)("PremiumSubscriberHome"),
            W = (0, r.zy)();
        l.useEffect(() => {
            _.h.wait(async () => {
                let e = [(0, E.Ay)()];
                null != t && e.push((0, I.A)(t)), await Promise.all(e);
            });
        }, [t]),
            l.useEffect(() => {
                ei(!0);
            }, []),
            (0, v.j)(),
            (0, f.P)(p.b);
        let K = l.useRef(null),
            Y = l.useRef(null),
            z = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
            { isReady: q, programReward: X, isEligible: Q } = (0, C.F)({ location: "PremiumSubscriberHome" }),
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
            el = (0, T.p)(),
            es = l.useRef(null),
            [ea, er] = l.useState(!1),
            eo = null != el && null != z && z.status === w.Dmq.CANCELED,
            ed = (0, y.iU)(P.gD.PREMIUM_MONTH_TIER_2, el, z),
            ec = !ea && eo,
            { analyticsLocations: eu } = (0, g.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [eh, e_] = l.useState(!1);
        return null != (0, o.bG)([x.A], () => (null != t ? x.A.getUserProfile(t) : null)) && (q || null != X)
            ? (0, i.jsxs)(u.Gt, {
                  className: V.xW,
                  ref: K,
                  children: [
                      (0, i.jsx)(h.h, {
                          color: "nitro-pink",
                          className: a()(V.kL, V.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, i.jsxs)(g.f5, {
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
                                  (0, i.jsx)(M.A, { glowingPerkId: $ }),
                                  (0, i.jsx)(R.A, { glowingSectionId: Z }),
                                  null != X &&
                                      Q &&
                                      !s &&
                                      (0, i.jsx)(D.A, { location: A.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                  (0, i.jsx)(G.A, { glowingPerkId: $ }),
                                  (0, i.jsx)(j.A, {
                                      className: V.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: w.liQ.NITRO_HOME, section: w.JJy.GIFT_BANNER },
                                  }),
                                  (0, i.jsx)("div", { className: V.hz }),
                                  (0, i.jsx)(d.L, {
                                      innerRef: Y,
                                      onChange: (e) => {
                                          e &&
                                              !eh &&
                                              (S.default.track(w.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: eu,
                                              }),
                                              e_(!0));
                                      },
                                      children: (0, i.jsx)("div", { ref: Y, className: V._Z }),
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
