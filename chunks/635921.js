n.d(t, {
    PK: function () {
        return R;
    },
    _O: function () {
        return A;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(535322),
    u = n(357355),
    g = n(140465),
    m = n(775412),
    f = n(650032),
    p = n(104494),
    _ = n(639119),
    h = n(105759),
    x = n(346497),
    E = n(422034),
    b = n(206127),
    C = n(710220),
    v = n(318747),
    T = n(409100),
    N = n(474936),
    I = n(388032),
    S = n(337307);
let R = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: r, buttonClassName: s, isMarketingPageV2Enabled: l, isDarkMode: o } = e,
            c = (0, i.jsx)(T.Z, {
                forceInverted: o || !l,
                className: a()(S.button, s, { [S.extendedButton]: t && l }),
                subscriptionTier: n
            }),
            d =
                t && l
                    ? null
                    : (0, i.jsx)(v.Z, {
                          className: a()(S.button, s),
                          forceWhite: !l
                      });
        return (0, i.jsxs)('div', {
            className: a()(S.buttonContainer, r),
            children: [c, ' ', d]
        });
    },
    j = (e) => {
        let { isFullscreen: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.A, { className: t ? S.fullscreenSparkleStar1 : S.settingsSparkleStar1 }), (0, i.jsx)(d.A, { className: t ? S.fullscreenSparkleStar2 : S.settingsSparkleStar2 }), (0, i.jsx)(d.A, { className: t ? S.fullscreenSparkleStar3 : S.settingsSparkleStar3 }), (0, i.jsx)(d.A, { className: t ? S.fullscreenSparkleStar4 : S.settingsSparkleStar4 })]
        });
    };
function A(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isMarketingPageV2Enabled: r } = e,
        s = (0, b.$)();
    return (0, i.jsx)(l.Text, {
        variant: t,
        color: r ? 'header-secondary' : 'always-white',
        className: a()(S.description, {
            [S.descriptionBottomMargin]: n,
            [S.descriptionV2]: r
        }),
        children: I.intl.format(I.t.kt9wxs, { cheapestMonthlyPrice: s })
    });
}
t.ZP = (e) => {
    var t, n;
    let { isFullscreen: r, className: d, buttonClassName: b, subscriptionTier: T, entrypoint: P, isDarkMode: O } = e,
        { analyticsLocations: Z } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        M = (0, m._O)(),
        B = (0, p.Ng)(),
        y = (0, p.Wp)(B, N.Si.TIER_2) ? N.Si.TIER_2 : void 0,
        w = (0, _.N)(),
        k = (0, g.Nx)(),
        L = (0, x.Vi)(),
        U = (0, s.e7)([u.Z], () => u.Z.affinities),
        D = (0, h.Z)(),
        { enabled: G } = f._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
        H = P === N.EZ.ApplicationStoreHome && null != D && G,
        V = U.length > 0;
    return (0, i.jsx)(c.Gt, {
        value: Z,
        children: (0, i.jsxs)('div', {
            className: a()(S.container, d, {
                [S.settingsContainer]: !r,
                [S.affinityHeight]: !r && V
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, i.jsxs)('div', {
                    className: r ? S.fullscreenTextContainer : S.settingsTextContainer,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: r ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: I.intl.string(I.t.YCZldH)
                        }),
                        H
                            ? (0, i.jsx)(C.Z, { referrer: D })
                            : V
                              ? (0, i.jsx)('div', {
                                    className: a()(S.affinityDescription),
                                    children: (0, i.jsx)(E.Z, {
                                        textColor: 'always-white',
                                        smallerText: !r
                                    })
                                })
                              : (0, i.jsx)(A, {}),
                        L || M
                            ? (0, i.jsx)('div', {
                                  className: a()(S.buttonContainer),
                                  children: (0, i.jsx)(v.Z, {
                                      className: a()(S.button, b),
                                      forceWhite: !0
                                  })
                              })
                            : (0, i.jsx)(R, {
                                  subscriptionTier: null !== (n = null != T ? T : null == w ? void 0 : null === (t = w.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : y,
                                  inOfferExperience: k,
                                  buttonClassName: b,
                                  isDarkMode: O
                              }),
                        V &&
                            !H &&
                            (0, i.jsx)(A, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !k && (0, i.jsx)(j, { isFullscreen: r })
            ]
        })
    });
};
