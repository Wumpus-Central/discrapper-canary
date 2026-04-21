n.d(t, { Ay: () => H, WU: () => V, x6: () => B }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(873263),
    o = n(311907),
    d = n(230109),
    c = n(397927),
    u = n(73153),
    h = n(793574),
    A = n(688810),
    _ = n(31502),
    m = n(726649),
    p = n(611924),
    g = n(961250),
    f = n(320118),
    E = n(622543),
    x = n(576622),
    I = n(166403),
    C = n(954571),
    N = n(881489),
    T = n(131168),
    S = n(482589),
    b = n(511484),
    y = n(935956),
    v = n(568031),
    R = n(518491),
    j = n(965591),
    O = n(495022),
    L = n(382694),
    M = n(235365),
    D = n(994763),
    U = n(788868),
    G = n(652215),
    P = n(985018),
    k = n(946062),
    w = n(288894);
let B = "section",
    V = "perk",
    H = (e) => {
        let { userId: t } = e,
            n = (0, N.ds)(),
            s = (0, _.l)("PremiumSubscriberHome"),
            H = (0, r.zy)();
        l.useEffect(() => {
            u.h.wait(async () => {
                let e = [(0, g.Ay)()];
                null != t && e.push((0, x.A)(t)), await Promise.all(e);
            });
        }, [t]),
            l.useEffect(() => {
                et(!0);
            }, []),
            (0, S.j)(),
            (0, p.P)(m.b);
        let F = l.useRef(null),
            W = l.useRef(null),
            K = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
            { isReady: Y, programReward: z, isEligible: q } = (0, f.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: X,
                glowingSectionId: $,
                glowingPerkId: J,
                scrollBlock: Q,
                scrollInline: Z,
            } = l.useMemo(() => {
                let e = new URLSearchParams(H.search),
                    t = e.get(V),
                    n = e.get(B);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [H.search]);
        (0, D.z)(X ?? "", null != X, Q, Z);
        let [ee, et] = l.useState(!1),
            en = (0, T.p)(),
            ei = l.useRef(null),
            [el, es] = l.useState(!1),
            ea = null != en && null != K && K.status === G.Dmq.CANCELED,
            er = (0, b.iU)(U.gD.PREMIUM_MONTH_TIER_2, en, K),
            eo = !el && ea,
            { analyticsLocations: ed } = (0, A.Ay)(h.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ec, eu] = l.useState(!1);
        return null != (0, o.bG)([E.A], () => (null != t ? E.A.getUserProfile(t) : null)) && (Y || null != z)
            ? (0, i.jsxs)(c.GtU, {
                  className: k.xW,
                  ref: F,
                  children: [
                      (0, i.jsx)(c.hLv, {
                          color: "nitro-pink",
                          className: a()(k.kL, k.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, i.jsxs)(A.f5, {
                              value: ed,
                              children: [
                                  (0, i.jsx)(d.L, {
                                      innerRef: ei,
                                      onChange: (e) => es(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, i.jsx)(R.A, {
                                          buttonVisibilityRef: ei,
                                          className: k.v1,
                                          userDiscountOffer: en,
                                          discountedPrice: er,
                                      }),
                                  }),
                                  (0, i.jsx)(L.A, { glowingPerkId: J }),
                                  (0, i.jsx)(y.A, { glowingSectionId: $ }),
                                  null != z &&
                                      q &&
                                      !s &&
                                      (0, i.jsx)(M.A, { location: h.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                  (0, i.jsx)(O.A, { glowingPerkId: J }),
                                  (0, i.jsx)(v.A, {
                                      className: k.Zy,
                                      location: h.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: G.liQ.NITRO_HOME, section: G.JJy.GIFT_BANNER },
                                  }),
                                  (0, i.jsx)("div", { className: k.hz }),
                                  (0, i.jsx)(d.L, {
                                      innerRef: W,
                                      onChange: (e) => {
                                          e &&
                                              !ec &&
                                              (C.default.track(G.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ed,
                                              }),
                                              eu(!0));
                                      },
                                      children: (0, i.jsx)("div", { ref: W, className: k._Z }),
                                  }),
                                  (0, i.jsx)("img", {
                                      src: w,
                                      className: k.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: P.intl.string(P.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      ea &&
                          null != er &&
                          (0, i.jsx)(j.A, {
                              isVisible: eo && ee,
                              premiumSubscription: K,
                              churnDiscountOffer: en,
                              discountedPrice: er,
                          }),
                  ],
              })
            : (0, i.jsx)("div", { className: a()(k.kL, k.Lq), children: (0, i.jsx)(c.y$y, {}) });
    };
