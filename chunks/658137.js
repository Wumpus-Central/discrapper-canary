n.d(t, {
    A: () => y,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(421380),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    p = n(607470),
    m = n(676279),
    g = n(560138),
    A = n(526292),
    f = n(89366),
    h = n(236834),
    b = n(194509),
    E = n(224850),
    x = n(797255),
    O = n(753894),
    C = n(288351),
    I = n(693591),
    T = n(985018),
    S = n(413515),
    j = n(182514),
    v = n(619947),
    N = n(733907);
let y = i.forwardRef((e, t) => {
    let {
            className: n,
            buttonClassName: i,
            subscriptionTier: l,
            isDarkMode: y,
            isEligibleForBogoPromotion: P,
            videoRef: R,
        } = e,
        { analyticsLocations: D } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA),
        w = (0, f.QQ)(),
        L = (0, A.ar)(),
        M = (0, a.bG)([g.A], () => g.A.affinities),
        U = (0, h.A)(),
        G = null != U,
        k = y ? o.XD.WHITE : o.XD.BRAND,
        V = M.length > 0,
        H = T.intl.string(T.t.YCZldK),
        B = (0, m.TM)(),
        F = (0, a.bG)([d.A], () => d.A.useReducedMotion);
    return (0, r.jsx)(_.f5, {
        value: D,
        children: (0, r.jsxs)("div", {
            className: s()(S.kL, S.qY, n),
            ref: t,
            "data-testid": "marketing-page-hero-header",
            children: [
                (0, r.jsx)("div", {
                    className: S.kL,
                    children: (0, r.jsxs)("div", {
                        className: S.s8,
                        children: [
                            L && (0, r.jsx)(C.A, {}),
                            (0, r.jsx)(c.Heading, {
                                className: S.WT,
                                variant: "display-sm",
                                color: "text-strong",
                                children: H,
                            }),
                            G
                                ? (0, r.jsx)(x.A, {
                                      referrer: U,
                                  })
                                : V &&
                                  (0, r.jsx)("div", {
                                      className: S.kb,
                                      children: (0, r.jsx)(E.A, {
                                          textColor: "text-default",
                                          smallerText: !1,
                                          isApplicationHome: !0,
                                      }),
                                  }),
                            w
                                ? (0, r.jsx)("div", {
                                      className: s()(S.UD, S.$F, {
                                          [S.In]: !(V || G),
                                      }),
                                      children: (0, r.jsx)(b.A, {
                                          className: s()(S.x6, i),
                                          color: k,
                                      }),
                                  })
                                : (0, r.jsx)(O.KN, {
                                      subscriptionTier: l,
                                      inOfferExperience: L,
                                      containerClassName: s()(S.$F, {
                                          [S.In]: !(V || G),
                                      }),
                                      buttonClassName: i,
                                      isApplicationHome: !0,
                                      isDarkMode: y,
                                      isEligibleForBogoPromotion: P,
                                  }),
                            (0, r.jsx)(O.U9, {
                                variant: "text-sm/normal",
                                withBottomMargin: !1,
                                isApplicationHome: !0,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: S.TT,
                    children: (0, r.jsx)(p.A, {
                        autoPlay: !F,
                        playsInline: !0,
                        preload: F ? "none" : "auto",
                        poster: v.A,
                        loop: !0,
                        className: S.gm,
                        ref: R,
                        children: (0, r.jsx)("source", {
                            src: B ? j.A : N.A,
                            type: B ? I.a.MP4 : I.a.WEBM,
                        }),
                    }),
                }),
            ],
        }),
    });
});
