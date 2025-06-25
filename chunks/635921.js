n.d(t, {
    PK: () => N,
    ZP: () => P,
    _O: () => A
}),
    n(953529);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(535322),
    m = n(357355),
    g = n(367074),
    p = n(140465),
    h = n(775412),
    f = n(51574),
    b = n(104494),
    _ = n(639119),
    x = n(105759),
    E = n(736519),
    j = n(784238),
    C = n(422034),
    O = n(206127),
    S = n(710220),
    v = n(474936),
    T = n(388032),
    I = n(909176);
let N = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: r, buttonClassName: s, isApplicationHome: a, isDarkMode: c, isEligibleForBogoPromotion: d } = e,
            u = d
                ? (0, i.jsx)(j.Z, {
                      color: c ? o.Ttl.BRAND_INVERTED : void 0,
                      className: l()(I.button, I.subButton, s, {
                          [I.extendedButton]: t && a,
                          [I.whiteSubButton]: a && !c
                      }),
                      shinyButtonClassName: c ? void 0 : I.tier2Gradient,
                      subscriptionTier: n,
                      hasActivePromotion: !0
                  })
                : (0, i.jsx)(j.Z, {
                      color: c || !a ? o.Ttl.BRAND_INVERTED : void 0,
                      className: l()(I.button, I.subButton, s, {
                          [I.extendedButton]: t && a,
                          [I.whiteSubButton]: a && !c
                      }),
                      subscriptionTier: n
                  }),
            m =
                t && a
                    ? null
                    : (0, i.jsx)(E.Z, {
                          className: l()(I.button, s),
                          color: a ? void 0 : o.Ttl.WHITE
                      });
        return (0, i.jsxs)('div', {
            className: l()(I.buttonContainer, r),
            children: [u, ' ', m]
        });
    },
    y = (e) => {
        let { isFullscreen: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.A, { className: t ? I.fullscreenSparkleStar1 : I.settingsSparkleStar1 }), (0, i.jsx)(u.A, { className: t ? I.fullscreenSparkleStar2 : I.settingsSparkleStar2 }), (0, i.jsx)(u.A, { className: t ? I.fullscreenSparkleStar3 : I.settingsSparkleStar3 }), (0, i.jsx)(u.A, { className: t ? I.fullscreenSparkleStar4 : I.settingsSparkleStar4 })]
        });
    };
function A(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isApplicationHome: r } = e,
        s = (0, O.$)();
    return (0, i.jsx)(o.Text, {
        variant: t,
        color: r ? 'header-secondary' : 'always-white',
        className: l()(I.description, {
            [I.descriptionBottomMargin]: n,
            [I.descriptionV2]: r
        }),
        children: T.intl.format(T.t.kt9wxs, { cheapestMonthlyPrice: s })
    });
}
let P = r.forwardRef((e, t) => {
    var n, r;
    let { isFullscreen: s, className: u, buttonClassName: j, subscriptionTier: O, entrypoint: T, isDarkMode: P } = e,
        { analyticsLocations: R } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
        D = (0, h._O)(),
        Z = (0, b.Ng)(),
        w = (0, b.Wp)(Z, v.Si.TIER_2) ? v.Si.TIER_2 : void 0,
        k = (0, _.N)(),
        L = (0, p.Nx)(),
        B = (0, g.Vi)(),
        M = (0, a.e7)([m.Z], () => m.Z.affinities),
        U = (0, x.Z)(),
        V = T === v.EZ.ApplicationStoreHome && null != U,
        G = M.length > 0,
        F = (0, f.ZP)({ location: 'HeroHeading' }),
        H = (0, f.J1)(F);
    return (0, i.jsx)(d.Gt, {
        value: R,
        children: (0, i.jsxs)('div', {
            ref: t,
            className: l()(I.container, u, {
                [I.settingsContainer]: !s,
                [I.affinityHeight]: !s && G
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, i.jsxs)('div', {
                    className: s ? I.fullscreenTextContainer : I.settingsTextContainer,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            variant: s ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: H
                        }),
                        V
                            ? (0, i.jsx)(S.Z, { referrer: U })
                            : G
                              ? (0, i.jsx)('div', {
                                    className: I.affinityDescription,
                                    children: (0, i.jsx)(C.Z, {
                                        textColor: 'always-white',
                                        smallerText: !s
                                    })
                                })
                              : (0, i.jsx)(A, {}),
                        B || D
                            ? (0, i.jsx)('div', {
                                  className: I.buttonContainer,
                                  children: (0, i.jsx)(E.Z, {
                                      className: l()(I.button, j),
                                      color: o.Ttl.WHITE
                                  })
                              })
                            : (0, i.jsx)(N, {
                                  subscriptionTier: null != (r = null != O ? O : null == k || null == (n = k.subscription_trial) ? void 0 : n.sku_id) ? r : w,
                                  inOfferExperience: L,
                                  buttonClassName: j,
                                  isDarkMode: P
                              }),
                        G &&
                            !V &&
                            (0, i.jsx)(A, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !L && (0, i.jsx)(y, { isFullscreen: s })
            ]
        })
    });
});
