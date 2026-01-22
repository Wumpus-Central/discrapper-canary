n.d(t, { A: () => P });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    c = n(397927),
    u = n(775602),
    d = n(793574),
    f = n(688810),
    p = n(607470),
    _ = n(676279),
    h = n(560138),
    m = n(526292),
    g = n(89366),
    E = n(236834),
    b = n(194509),
    y = n(224850),
    O = n(797255),
    A = n(753894),
    v = n(288351),
    S = n(693591),
    I = n(985018),
    T = n(413515),
    C = n(182514),
    N = n(619947),
    R = n(733907);
let w = (e, t) => {
        let {
                className: n,
                buttonClassName: i,
                subscriptionTier: a,
                isDarkMode: w,
                isEligibleForBogoPromotion: P,
                videoRef: D,
            } = e,
            { analyticsLocations: x } = (0, f.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA),
            L = (0, g.QQ)(),
            j = (0, m.ar)(),
            M = (0, o.bG)([h.A], () => h.A.affinities),
            k = (0, E.A)(),
            U = null != k,
            G = w ? l.XD.WHITE : l.XD.BRAND,
            V = M.length > 0,
            F = I.intl.string(I.t.YCZldK),
            B = (0, _.TM)(),
            H = (0, o.bG)([u.A], () => u.A.useReducedMotion);
        return (0, r.jsx)(f.f5, {
            value: x,
            children: (0, r.jsxs)("div", {
                className: s()(T.kL, T.qY, n),
                ref: t,
                "data-testid": "marketing-page-hero-header",
                children: [
                    (0, r.jsx)("div", {
                        className: T.kL,
                        children: (0, r.jsxs)("div", {
                            className: T.s8,
                            children: [
                                j && (0, r.jsx)(v.A, {}),
                                (0, r.jsx)(c.Heading, {
                                    className: T.WT,
                                    variant: "display-sm",
                                    color: "text-strong",
                                    children: F,
                                }),
                                U
                                    ? (0, r.jsx)(O.A, { referrer: k })
                                    : V &&
                                      (0, r.jsx)("div", {
                                          className: T.kb,
                                          children: (0, r.jsx)(y.A, {
                                              textColor: "text-default",
                                              smallerText: !1,
                                              isApplicationHome: !0,
                                          }),
                                      }),
                                L
                                    ? (0, r.jsx)("div", {
                                          className: s()(T.UD, T.$F, { [T.In]: !(V || U) }),
                                          children: (0, r.jsx)(b.A, {
                                              className: s()(T.x6, i),
                                              color: G,
                                          }),
                                      })
                                    : (0, r.jsx)(A.KN, {
                                          subscriptionTier: a,
                                          inOfferExperience: j,
                                          containerClassName: s()(T.$F, { [T.In]: !(V || U) }),
                                          buttonClassName: i,
                                          isApplicationHome: !0,
                                          isDarkMode: w,
                                          isEligibleForBogoPromotion: P,
                                      }),
                                (0, r.jsx)(A.U9, {
                                    variant: "text-sm/normal",
                                    withBottomMargin: !1,
                                    isApplicationHome: !0,
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: T.TT,
                        children: (0, r.jsx)(p.A, {
                            autoPlay: !H,
                            playsInline: !0,
                            preload: H ? "none" : "auto",
                            poster: N.A,
                            loop: !0,
                            className: T.gm,
                            ref: D,
                            children: (0, r.jsx)("source", {
                                src: B ? C.A : R.A,
                                type: B ? S.a.MP4 : S.a.WEBM,
                            }),
                        }),
                    }),
                ],
            }),
        });
    },
    P = i.forwardRef(w);
