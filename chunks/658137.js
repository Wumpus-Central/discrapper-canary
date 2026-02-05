n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(421380),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(607470),
    A = n(676279),
    g = n(560138),
    E = n(526292),
    h = n(89366),
    p = n(236834),
    C = n(194509),
    x = n(224850),
    T = n(797255),
    I = n(753894),
    S = n(288351),
    f = n(693591),
    N = n(985018),
    b = n(413515),
    R = n(182514),
    v = n(619947),
    O = n(733907);
let j = s.forwardRef((e, t) => {
    let {
            className: n,
            buttonClassName: s,
            subscriptionTier: r,
            isDarkMode: j,
            isEligibleForBogoPromotion: P,
            videoRef: y,
        } = e,
        { analyticsLocations: L } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA),
        D = (0, h.QQ)(),
        M = (0, E.ar)(),
        G = (0, l.bG)([g.A], () => g.A.affinities),
        U = (0, p.A)(),
        k = null != U,
        B = j ? o.XD.WHITE : o.XD.BRAND,
        w = G.length > 0,
        H = N.intl.string(N.t.YCZldK),
        V = (0, A.TM)(),
        F = (0, l.bG)([d.A], () => d.A.useReducedMotion);
    return (0, i.jsx)(_.f5, {
        value: L,
        children: (0, i.jsxs)("div", {
            className: a()(b.kL, b.qY, n),
            ref: t,
            "data-testid": "marketing-page-hero-header",
            children: [
                (0, i.jsx)("div", {
                    className: b.kL,
                    children: (0, i.jsxs)("div", {
                        className: b.s8,
                        children: [
                            M && (0, i.jsx)(S.A, {}),
                            (0, i.jsx)(c.Heading, {
                                className: b.WT,
                                variant: "display-sm",
                                color: "text-strong",
                                children: H,
                            }),
                            k
                                ? (0, i.jsx)(T.A, { referrer: U })
                                : w &&
                                  (0, i.jsx)("div", {
                                      className: b.kb,
                                      children: (0, i.jsx)(x.A, {
                                          textColor: "text-default",
                                          smallerText: !1,
                                          isApplicationHome: !0,
                                      }),
                                  }),
                            D
                                ? (0, i.jsx)("div", {
                                      className: a()(b.UD, b.$F, { [b.In]: !(w || k) }),
                                      children: (0, i.jsx)(C.A, { className: a()(b.x6, s), color: B }),
                                  })
                                : (0, i.jsx)(I.KN, {
                                      subscriptionTier: r,
                                      inOfferExperience: M,
                                      containerClassName: a()(b.$F, { [b.In]: !(w || k) }),
                                      buttonClassName: s,
                                      isApplicationHome: !0,
                                      isDarkMode: j,
                                      isEligibleForBogoPromotion: P,
                                  }),
                            (0, i.jsx)(I.U9, {
                                variant: "text-sm/normal",
                                withBottomMargin: !1,
                                isApplicationHome: !0,
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)("div", {
                    className: b.TT,
                    children: (0, i.jsx)(m.A, {
                        autoPlay: !F,
                        playsInline: !0,
                        preload: F ? "none" : "auto",
                        poster: v.A,
                        loop: !0,
                        className: b.gm,
                        ref: y,
                        children: (0, i.jsx)("source", { src: V ? R.A : O.A, type: V ? f.a.MP4 : f.a.WEBM }),
                    }),
                }),
            ],
        }),
    });
});
