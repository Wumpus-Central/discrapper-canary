(n.d(t, {
    PK: () => v,
    ZP: () => N,
    _O: () => T
}),
    n(953529));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    m = n(535322),
    p = n(357355),
    g = n(367074),
    h = n(140465),
    f = n(775412),
    b = n(47280),
    x = n(736519),
    _ = n(784238),
    j = n(422034),
    C = n(206127),
    E = n(388032),
    O = n(909176);
let v = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: r, buttonClassName: s, isApplicationHome: l, isDarkMode: c, isEligibleForBogoPromotion: d } = e,
            u = d
                ? (0, i.jsx)(_.Z, {
                      color: c ? o.Tt.BRAND_INVERTED : void 0,
                      className: a()(O.button, O.subButton, s, {
                          [O.extendedButton]: t && l,
                          [O.whiteSubButton]: l && !c
                      }),
                      shinyButtonClassName: c ? void 0 : O.tier2Gradient,
                      subscriptionTier: n,
                      hasActivePromotion: !0
                  })
                : (0, i.jsx)(_.Z, {
                      color: c || !l ? o.Tt.BRAND_INVERTED : void 0,
                      className: a()(O.button, O.subButton, s, {
                          [O.extendedButton]: t && l,
                          [O.whiteSubButton]: l && !c
                      }),
                      subscriptionTier: n
                  }),
            m =
                t && l
                    ? null
                    : (0, i.jsx)(x.Z, {
                          className: a()(O.button, s),
                          color: l ? void 0 : o.Tt.WHITE
                      });
        return (0, i.jsxs)('div', {
            className: a()(O.buttonContainer, r),
            children: [u, ' ', m]
        });
    },
    S = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(m.A, { className: O.settingsSparkleStar1 }), (0, i.jsx)(m.A, { className: O.settingsSparkleStar2 }), (0, i.jsx)(m.A, { className: O.settingsSparkleStar3 }), (0, i.jsx)(m.A, { className: O.settingsSparkleStar4 })]
        });
function T(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isApplicationHome: r } = e,
        s = (0, C.$)();
    return (0, i.jsx)(c.Text, {
        variant: t,
        color: r ? 'text-secondary' : 'always-white',
        className: a()(O.description, {
            [O.descriptionBottomMargin]: n,
            [O.descriptionV2]: r
        }),
        children: E.intl.format(E.t.kt9wxs, { cheapestMonthlyPrice: s })
    });
}
let N = r.forwardRef((e, t) => {
    let { className: n, buttonClassName: r, subscriptionTier: s, isDarkMode: m } = e,
        { analyticsLocations: _ } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
        C = (0, f._O)(),
        N = (0, h.Nx)(),
        I = (0, g.Vi)(),
        y = (0, l.e7)([p.Z], () => p.Z.affinities).length > 0,
        A = (0, b.Z)({ location: 'HeroHeading' }) ? E.intl.string(E.t['EW+VIS']) : E.intl.string(E.t.YCZldH);
    return (0, i.jsx)(u.Gt, {
        value: _,
        children: (0, i.jsxs)('div', {
            ref: t,
            className: a()(O.container, n, {
                [O.settingsContainer]: !N,
                [O.affinityHeight]: !N && y
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, i.jsxs)('div', {
                    className: N ? O.fullscreenTextContainer : O.settingsTextContainer,
                    children: [
                        (0, i.jsx)(c.X6q, {
                            variant: N ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: A
                        }),
                        y
                            ? (0, i.jsx)('div', {
                                  className: O.affinityDescription,
                                  children: (0, i.jsx)(j.Z, {
                                      textColor: 'always-white',
                                      smallerText: !N
                                  })
                              })
                            : (0, i.jsx)(T, {}),
                        I || C
                            ? (0, i.jsx)('div', {
                                  className: O.buttonContainer,
                                  children: (0, i.jsx)(x.Z, {
                                      className: a()(O.button, r),
                                      color: o.Tt.WHITE
                                  })
                              })
                            : (0, i.jsx)(v, {
                                  subscriptionTier: s,
                                  inOfferExperience: N,
                                  buttonClassName: r,
                                  isDarkMode: m
                              }),
                        y &&
                            (0, i.jsx)(T, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !N && (0, i.jsx)(S, {})
            ]
        })
    });
});
