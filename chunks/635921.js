n.d(t, {
    PK: () => j,
    ZP: () => R,
    _O: () => O
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(535322),
    u = n(357355),
    m = n(140465),
    h = n(775412),
    g = n(650032),
    _ = n(104494),
    x = n(639119),
    p = n(105759),
    E = n(346497),
    C = n(422034),
    f = n(206127),
    T = n(710220),
    N = n(318747),
    I = n(409100),
    S = n(474936),
    b = n(388032),
    v = n(337307);
let j = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: s, buttonClassName: l, isMarketingPageV2Enabled: a, isDarkMode: o } = e,
            c = (0, i.jsx)(I.Z, {
                forceInverted: o || !a,
                className: r()(v.button, v.subButton, l, {
                    [v.extendedButton]: t && a,
                    [v.whiteSubButton]: a && !o
                }),
                subscriptionTier: n
            }),
            d =
                t && a
                    ? null
                    : (0, i.jsx)(N.Z, {
                          className: r()(v.button, l),
                          forceWhite: !a
                      });
        return (0, i.jsxs)('div', {
            className: r()(v.buttonContainer, s),
            children: [c, ' ', d]
        });
    },
    A = (e) => {
        let { isFullscreen: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.A, { className: t ? v.fullscreenSparkleStar1 : v.settingsSparkleStar1 }), (0, i.jsx)(d.A, { className: t ? v.fullscreenSparkleStar2 : v.settingsSparkleStar2 }), (0, i.jsx)(d.A, { className: t ? v.fullscreenSparkleStar3 : v.settingsSparkleStar3 }), (0, i.jsx)(d.A, { className: t ? v.fullscreenSparkleStar4 : v.settingsSparkleStar4 })]
        });
    };
function O(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isMarketingPageV2Enabled: s } = e,
        l = (0, f.$)();
    return (0, i.jsx)(a.Text, {
        variant: t,
        color: s ? 'header-secondary' : 'always-white',
        className: r()(v.description, {
            [v.descriptionBottomMargin]: n,
            [v.descriptionV2]: s
        }),
        children: b.intl.format(b.t.kt9wxs, { cheapestMonthlyPrice: l })
    });
}
let R = (e) => {
    var t, n;
    let { isFullscreen: s, className: d, buttonClassName: f, subscriptionTier: I, entrypoint: R, isDarkMode: P } = e,
        { analyticsLocations: D } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        y = (0, h._O)(),
        Z = (0, _.Ng)(),
        k = (0, _.Wp)(Z, S.Si.TIER_2) ? S.Si.TIER_2 : void 0,
        L = (0, x.N)(),
        B = (0, m.Nx)(),
        M = (0, E.Vi)(),
        w = (0, l.e7)([u.Z], () => u.Z.affinities),
        V = (0, p.Z)(),
        { enabled: U } = g._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
        G = R === S.EZ.ApplicationStoreHome && null != V && U,
        F = w.length > 0;
    return (0, i.jsx)(c.Gt, {
        value: D,
        children: (0, i.jsxs)('div', {
            className: r()(v.container, d, {
                [v.settingsContainer]: !s,
                [v.affinityHeight]: !s && F
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, i.jsxs)('div', {
                    className: s ? v.fullscreenTextContainer : v.settingsTextContainer,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            variant: s ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: b.intl.string(b.t.YCZldH)
                        }),
                        G
                            ? (0, i.jsx)(T.Z, { referrer: V })
                            : F
                              ? (0, i.jsx)('div', {
                                    className: r()(v.affinityDescription),
                                    children: (0, i.jsx)(C.Z, {
                                        textColor: 'always-white',
                                        smallerText: !s
                                    })
                                })
                              : (0, i.jsx)(O, {}),
                        M || y
                            ? (0, i.jsx)('div', {
                                  className: r()(v.buttonContainer),
                                  children: (0, i.jsx)(N.Z, {
                                      className: r()(v.button, f),
                                      forceWhite: !0
                                  })
                              })
                            : (0, i.jsx)(j, {
                                  subscriptionTier: null !== (n = null != I ? I : null == L ? void 0 : null === (t = L.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : k,
                                  inOfferExperience: B,
                                  buttonClassName: f,
                                  isDarkMode: P
                              }),
                        F &&
                            !G &&
                            (0, i.jsx)(O, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !B && (0, i.jsx)(A, { isFullscreen: s })
            ]
        })
    });
};
