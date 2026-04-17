n.d(t, { Ay: () => V, WU: () => B, x6: () => w }), n(321073), n(323874), n(14289), n(35956);
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
    _ = n(726649),
    m = n(611924),
    p = n(961250),
    g = n(320118),
    f = n(622543),
    E = n(576622),
    x = n(166403),
    I = n(954571),
    C = n(881489),
    N = n(131168),
    T = n(482589),
    S = n(511484),
    b = n(935956),
    y = n(568031),
    v = n(518491),
    R = n(965591),
    j = n(495022),
    O = n(382694),
    L = n(235365),
    M = n(994763),
    D = n(788868),
    U = n(652215),
    G = n(985018),
    P = n(946062),
    k = n(288894);
let w = "section",
    B = "perk",
    V = (e) => {
        let { userId: t } = e,
            n = (0, C.ds)(),
            s = (0, r.zy)();
        l.useEffect(() => {
            u.h.wait(async () => {
                let e = [(0, p.Ay)()];
                null != t && e.push((0, E.A)(t)), await Promise.all(e);
            });
        }, [t]),
            l.useEffect(() => {
                Z(!0);
            }, []),
            (0, T.j)(),
            (0, m.P)(_.b);
        let V = l.useRef(null),
            H = l.useRef(null),
            F = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
            { isReady: W, programReward: K, isEligible: Y } = (0, g.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: z,
                glowingSectionId: q,
                glowingPerkId: X,
                scrollBlock: $,
                scrollInline: J,
            } = l.useMemo(() => {
                let e = new URLSearchParams(s.search),
                    t = e.get(B),
                    n = e.get(w);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [s.search]);
        (0, M.z)(z ?? "", null != z, $, J);
        let [Q, Z] = l.useState(!1),
            ee = (0, N.p)(),
            et = l.useRef(null),
            [en, ei] = l.useState(!1),
            el = null != ee && null != F && F.status === U.Dmq.CANCELED,
            es = (0, S.iU)(D.gD.PREMIUM_MONTH_TIER_2, ee, F),
            ea = !en && el,
            { analyticsLocations: er } = (0, A.Ay)(h.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [eo, ed] = l.useState(!1);
        return null != (0, o.bG)([f.A], () => (null != t ? f.A.getUserProfile(t) : null)) && (W || null != K)
            ? (0, i.jsxs)(c.GtU, {
                  className: P.xW,
                  ref: V,
                  children: [
                      (0, i.jsx)(c.hLv, {
                          color: "nitro-pink",
                          className: a()(P.kL, P.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, i.jsxs)(A.f5, {
                              value: er,
                              children: [
                                  (0, i.jsx)(d.L, {
                                      innerRef: et,
                                      onChange: (e) => ei(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, i.jsx)(v.A, {
                                          buttonVisibilityRef: et,
                                          className: P.v1,
                                          userDiscountOffer: ee,
                                          discountedPrice: es,
                                      }),
                                  }),
                                  (0, i.jsx)(O.A, { glowingPerkId: X }),
                                  (0, i.jsx)(b.A, { glowingSectionId: q }),
                                  null != K &&
                                      Y &&
                                      (0, i.jsx)(L.A, { location: h.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                  (0, i.jsx)(j.A, { glowingPerkId: X }),
                                  (0, i.jsx)(y.A, {
                                      className: P.Zy,
                                      location: h.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: U.liQ.NITRO_HOME, section: U.JJy.GIFT_BANNER },
                                  }),
                                  (0, i.jsx)("div", { className: P.hz }),
                                  (0, i.jsx)(d.L, {
                                      innerRef: H,
                                      onChange: (e) => {
                                          e &&
                                              !eo &&
                                              (I.default.track(U.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: er,
                                              }),
                                              ed(!0));
                                      },
                                      children: (0, i.jsx)("div", { ref: H, className: P._Z }),
                                  }),
                                  (0, i.jsx)("img", {
                                      src: k,
                                      className: P.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: G.intl.string(G.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      el &&
                          null != es &&
                          (0, i.jsx)(R.A, {
                              isVisible: ea && Q,
                              premiumSubscription: F,
                              churnDiscountOffer: ee,
                              discountedPrice: es,
                          }),
                  ],
              })
            : (0, i.jsx)("div", { className: a()(P.kL, P.Lq), children: (0, i.jsx)(c.y$y, {}) });
    };
