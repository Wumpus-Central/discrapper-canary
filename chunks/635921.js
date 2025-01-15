n.d(t, {
    PK: function () {
        return A;
    },
    _O: function () {
        return O;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(535322),
    u = n(357355),
    m = n(140465),
    g = n(775412),
    h = n(650032),
    p = n(104494),
    x = n(639119),
    f = n(105759),
    _ = n(346497),
    E = n(422034),
    C = n(206127),
    T = n(710220),
    S = n(318747),
    b = n(409100),
    I = n(474936),
    N = n(388032),
    v = n(618001);
let A = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: r, buttonClassName: a, isMarketingPageV2Enabled: l, isDarkMode: o } = e,
            c = (0, i.jsx)(b.Z, {
                forceInverted: o || !l,
                className: s()(v.button, v.subButton, a, {
                    [v.extendedButton]: t && l,
                    [v.whiteSubButton]: l && !o
                }),
                subscriptionTier: n
            }),
            d =
                t && l
                    ? null
                    : (0, i.jsx)(S.Z, {
                          className: s()(v.button, a),
                          forceWhite: !l
                      });
        return (0, i.jsxs)('div', {
            className: s()(v.buttonContainer, r),
            children: [c, ' ', d]
        });
    },
    j = (e) => {
        let { isFullscreen: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.A, { className: t ? v.fullscreenSparkleStar1 : v.settingsSparkleStar1 }), (0, i.jsx)(d.A, { className: t ? v.fullscreenSparkleStar2 : v.settingsSparkleStar2 }), (0, i.jsx)(d.A, { className: t ? v.fullscreenSparkleStar3 : v.settingsSparkleStar3 }), (0, i.jsx)(d.A, { className: t ? v.fullscreenSparkleStar4 : v.settingsSparkleStar4 })]
        });
    };
function O(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isMarketingPageV2Enabled: r } = e,
        a = (0, C.$)();
    return (0, i.jsx)(l.Text, {
        variant: t,
        color: r ? 'header-secondary' : 'always-white',
        className: s()(v.description, {
            [v.descriptionBottomMargin]: n,
            [v.descriptionV2]: r
        }),
        children: N.intl.format(N.t.kt9wxs, { cheapestMonthlyPrice: a })
    });
}
t.ZP = (e) => {
    var t, n;
    let { isFullscreen: r, className: d, buttonClassName: C, subscriptionTier: b, entrypoint: R, isDarkMode: P } = e,
        { analyticsLocations: y } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        B = (0, g._O)(),
        D = (0, p.Ng)(),
        Z = (0, p.Wp)(D, I.Si.TIER_2) ? I.Si.TIER_2 : void 0,
        L = (0, x.N)(),
        M = (0, m.Nx)(),
        k = (0, _.Vi)(),
        w = (0, a.e7)([u.Z], () => u.Z.affinities),
        U = (0, f.Z)(),
        { enabled: F } = h._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
        V = R === I.EZ.ApplicationStoreHome && null != U && F,
        G = w.length > 0;
    return (0, i.jsx)(c.Gt, {
        value: y,
        children: (0, i.jsxs)('div', {
            className: s()(v.container, d, {
                [v.settingsContainer]: !r,
                [v.affinityHeight]: !r && G
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, i.jsxs)('div', {
                    className: r ? v.fullscreenTextContainer : v.settingsTextContainer,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: r ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: N.intl.string(N.t.YCZldH)
                        }),
                        V
                            ? (0, i.jsx)(T.Z, { referrer: U })
                            : G
                              ? (0, i.jsx)('div', {
                                    className: s()(v.affinityDescription),
                                    children: (0, i.jsx)(E.Z, {
                                        textColor: 'always-white',
                                        smallerText: !r
                                    })
                                })
                              : (0, i.jsx)(O, {}),
                        k || B
                            ? (0, i.jsx)('div', {
                                  className: s()(v.buttonContainer),
                                  children: (0, i.jsx)(S.Z, {
                                      className: s()(v.button, C),
                                      forceWhite: !0
                                  })
                              })
                            : (0, i.jsx)(A, {
                                  subscriptionTier: null !== (n = null != b ? b : null == L ? void 0 : null === (t = L.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : Z,
                                  inOfferExperience: M,
                                  buttonClassName: C,
                                  isDarkMode: P
                              }),
                        G &&
                            !V &&
                            (0, i.jsx)(O, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !M && (0, i.jsx)(j, { isFullscreen: r })
            ]
        })
    });
};
