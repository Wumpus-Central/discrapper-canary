n.d(t, {
    PK: () => I,
    ZP: () => A,
    _O: () => y
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
    f = n(104494),
    b = n(639119),
    _ = n(105759),
    x = n(736519),
    E = n(784238),
    j = n(422034),
    C = n(206127),
    O = n(710220),
    S = n(474936),
    v = n(388032),
    T = n(909176);
let I = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: r, buttonClassName: s, isApplicationHome: a, isDarkMode: c } = e,
            d = (0, i.jsx)(E.Z, {
                color: c || !a ? o.Ttl.BRAND_INVERTED : void 0,
                className: l()(T.button, T.subButton, s, {
                    [T.extendedButton]: t && a,
                    [T.whiteSubButton]: a && !c
                }),
                subscriptionTier: n
            }),
            u =
                t && a
                    ? null
                    : (0, i.jsx)(x.Z, {
                          className: l()(T.button, s),
                          color: a ? void 0 : o.Ttl.WHITE
                      });
        return (0, i.jsxs)('div', {
            className: l()(T.buttonContainer, r),
            children: [d, ' ', u]
        });
    },
    N = (e) => {
        let { isFullscreen: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.A, { className: t ? T.fullscreenSparkleStar1 : T.settingsSparkleStar1 }), (0, i.jsx)(u.A, { className: t ? T.fullscreenSparkleStar2 : T.settingsSparkleStar2 }), (0, i.jsx)(u.A, { className: t ? T.fullscreenSparkleStar3 : T.settingsSparkleStar3 }), (0, i.jsx)(u.A, { className: t ? T.fullscreenSparkleStar4 : T.settingsSparkleStar4 })]
        });
    };
function y(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isApplicationHome: r } = e,
        s = (0, C.$)();
    return (0, i.jsx)(o.Text, {
        variant: t,
        color: r ? 'header-secondary' : 'always-white',
        className: l()(T.description, {
            [T.descriptionBottomMargin]: n,
            [T.descriptionV2]: r
        }),
        children: v.intl.format(v.t.kt9wxs, { cheapestMonthlyPrice: s })
    });
}
let A = r.forwardRef((e, t) => {
    var n, r;
    let { isFullscreen: s, className: u, buttonClassName: E, subscriptionTier: C, entrypoint: A, isDarkMode: P } = e,
        { analyticsLocations: R } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
        D = (0, h._O)(),
        Z = (0, f.Ng)(),
        w = (0, f.Wp)(Z, S.Si.TIER_2) ? S.Si.TIER_2 : void 0,
        k = (0, b.N)(),
        L = (0, p.Nx)(),
        B = (0, g.Vi)(),
        M = (0, a.e7)([m.Z], () => m.Z.affinities),
        U = (0, _.Z)(),
        V = A === S.EZ.ApplicationStoreHome && null != U,
        G = M.length > 0;
    return (0, i.jsx)(d.Gt, {
        value: R,
        children: (0, i.jsxs)('div', {
            ref: t,
            className: l()(T.container, u, {
                [T.settingsContainer]: !s,
                [T.affinityHeight]: !s && G
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, i.jsxs)('div', {
                    className: s ? T.fullscreenTextContainer : T.settingsTextContainer,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            variant: s ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: v.intl.string(v.t.YCZldH)
                        }),
                        V
                            ? (0, i.jsx)(O.Z, { referrer: U })
                            : G
                              ? (0, i.jsx)('div', {
                                    className: T.affinityDescription,
                                    children: (0, i.jsx)(j.Z, {
                                        textColor: 'always-white',
                                        smallerText: !s
                                    })
                                })
                              : (0, i.jsx)(y, {}),
                        B || D
                            ? (0, i.jsx)('div', {
                                  className: T.buttonContainer,
                                  children: (0, i.jsx)(x.Z, {
                                      className: l()(T.button, E),
                                      color: o.Ttl.WHITE
                                  })
                              })
                            : (0, i.jsx)(I, {
                                  subscriptionTier: null != (r = null != C ? C : null == k || null == (n = k.subscription_trial) ? void 0 : n.sku_id) ? r : w,
                                  inOfferExperience: L,
                                  buttonClassName: E,
                                  isDarkMode: P
                              }),
                        G &&
                            !V &&
                            (0, i.jsx)(y, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !L && (0, i.jsx)(N, { isFullscreen: s })
            ]
        })
    });
});
