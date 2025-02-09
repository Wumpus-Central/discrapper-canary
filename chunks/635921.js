n.d(t, {
    PK: () => j,
    ZP: () => P,
    _O: () => A
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
    m = n(140465),
    g = n(775412),
    _ = n(650032),
    p = n(104494),
    f = n(639119),
    h = n(105759),
    x = n(346497),
    E = n(422034),
    C = n(206127),
    b = n(710220),
    v = n(318747),
    T = n(409100),
    N = n(474936),
    I = n(388032),
    R = n(378497);
let j = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: r, buttonClassName: s, isMarketingPageV2Enabled: l, isDarkMode: o } = e,
            c = (0, i.jsx)(T.Z, {
                forceInverted: o || !l,
                className: a()(R.button, R.subButton, s, {
                    [R.extendedButton]: t && l,
                    [R.whiteSubButton]: l && !o
                }),
                subscriptionTier: n
            }),
            d =
                t && l
                    ? null
                    : (0, i.jsx)(v.Z, {
                          className: a()(R.button, s),
                          forceWhite: !l
                      });
        return (0, i.jsxs)('div', {
            className: a()(R.buttonContainer, r),
            children: [c, ' ', d]
        });
    },
    S = (e) => {
        let { isFullscreen: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.A, { className: t ? R.fullscreenSparkleStar1 : R.settingsSparkleStar1 }), (0, i.jsx)(d.A, { className: t ? R.fullscreenSparkleStar2 : R.settingsSparkleStar2 }), (0, i.jsx)(d.A, { className: t ? R.fullscreenSparkleStar3 : R.settingsSparkleStar3 }), (0, i.jsx)(d.A, { className: t ? R.fullscreenSparkleStar4 : R.settingsSparkleStar4 })]
        });
    };
function A(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isMarketingPageV2Enabled: r } = e,
        s = (0, C.$)();
    return (0, i.jsx)(l.Text, {
        variant: t,
        color: r ? 'header-secondary' : 'always-white',
        className: a()(R.description, {
            [R.descriptionBottomMargin]: n,
            [R.descriptionV2]: r
        }),
        children: I.intl.format(I.t.kt9wxs, { cheapestMonthlyPrice: s })
    });
}
let P = (e) => {
    var t, n;
    let { isFullscreen: r, className: d, buttonClassName: C, subscriptionTier: T, entrypoint: P, isDarkMode: Z } = e,
        { analyticsLocations: w } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        M = (0, g._O)(),
        B = (0, p.Ng)(),
        y = (0, p.Wp)(B, N.Si.TIER_2) ? N.Si.TIER_2 : void 0,
        k = (0, f.N)(),
        O = (0, m.Nx)(),
        L = (0, x.Vi)(),
        D = (0, s.e7)([u.Z], () => u.Z.affinities),
        U = (0, h.Z)(),
        { enabled: G } = _._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
        V = P === N.EZ.ApplicationStoreHome && null != U && G,
        H = D.length > 0;
    return (0, i.jsx)(c.Gt, {
        value: w,
        children: (0, i.jsxs)('div', {
            className: a()(R.container, d, {
                [R.settingsContainer]: !r,
                [R.affinityHeight]: !r && H
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, i.jsxs)('div', {
                    className: r ? R.fullscreenTextContainer : R.settingsTextContainer,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            variant: r ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: I.intl.string(I.t.YCZldH)
                        }),
                        V
                            ? (0, i.jsx)(b.Z, { referrer: U })
                            : H
                              ? (0, i.jsx)('div', {
                                    className: a()(R.affinityDescription),
                                    children: (0, i.jsx)(E.Z, {
                                        textColor: 'always-white',
                                        smallerText: !r
                                    })
                                })
                              : (0, i.jsx)(A, {}),
                        L || M
                            ? (0, i.jsx)('div', {
                                  className: a()(R.buttonContainer),
                                  children: (0, i.jsx)(v.Z, {
                                      className: a()(R.button, C),
                                      forceWhite: !0
                                  })
                              })
                            : (0, i.jsx)(j, {
                                  subscriptionTier: null !== (n = null != T ? T : null == k ? void 0 : null === (t = k.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : y,
                                  inOfferExperience: O,
                                  buttonClassName: C,
                                  isDarkMode: Z
                              }),
                        H &&
                            !V &&
                            (0, i.jsx)(A, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !O && (0, i.jsx)(S, { isFullscreen: r })
            ]
        })
    });
};
