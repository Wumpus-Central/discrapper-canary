n.d(t, {
    PK: () => T,
    ZP: () => A,
    _O: () => y
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(535322),
    u = n(357355),
    m = n(140465),
    g = n(775412),
    p = n(650032),
    h = n(104494),
    f = n(639119),
    N = n(105759),
    x = n(346497),
    b = n(422034),
    _ = n(206127),
    E = n(710220),
    j = n(318747),
    C = n(409100),
    O = n(474936),
    v = n(388032),
    S = n(968813);
let T = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: i, buttonClassName: a, isMarketingPageV2Enabled: l, isDarkMode: o } = e,
            c = (0, r.jsx)(C.Z, {
                forceInverted: o || !l,
                className: s()(S.button, S.subButton, a, {
                    [S.extendedButton]: t && l,
                    [S.whiteSubButton]: l && !o
                }),
                subscriptionTier: n
            }),
            d =
                t && l
                    ? null
                    : (0, r.jsx)(j.Z, {
                          className: s()(S.button, a),
                          forceWhite: !l
                      });
        return (0, r.jsxs)('div', {
            className: s()(S.buttonContainer, i),
            children: [c, ' ', d]
        });
    },
    I = (e) => {
        let { isFullscreen: t } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d.A, { className: t ? S.fullscreenSparkleStar1 : S.settingsSparkleStar1 }), (0, r.jsx)(d.A, { className: t ? S.fullscreenSparkleStar2 : S.settingsSparkleStar2 }), (0, r.jsx)(d.A, { className: t ? S.fullscreenSparkleStar3 : S.settingsSparkleStar3 }), (0, r.jsx)(d.A, { className: t ? S.fullscreenSparkleStar4 : S.settingsSparkleStar4 })]
        });
    };
function y(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isMarketingPageV2Enabled: i } = e,
        a = (0, _.$)();
    return (0, r.jsx)(l.Text, {
        variant: t,
        color: i ? 'header-secondary' : 'always-white',
        className: s()(S.description, {
            [S.descriptionBottomMargin]: n,
            [S.descriptionV2]: i
        }),
        children: v.NW.format(v.t.kt9wxs, { cheapestMonthlyPrice: a })
    });
}
let A = (e) => {
    var t, n;
    let { isFullscreen: i, className: d, buttonClassName: _, subscriptionTier: C, entrypoint: A, isDarkMode: P } = e,
        { analyticsLocations: R } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        D = (0, g._O)(),
        Z = (0, h.Ng)(),
        w = (0, h.Wp)(Z, O.Si.TIER_2) ? O.Si.TIER_2 : void 0,
        k = (0, f.N)(),
        W = (0, m.Nx)(),
        L = (0, x.Vi)(),
        B = (0, a.e7)([u.Z], () => u.Z.affinities),
        M = (0, N.Z)(),
        { enabled: U } = p._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
        V = A === O.EZ.ApplicationStoreHome && null != M && U,
        G = B.length > 0;
    return (0, r.jsx)(c.Gt, {
        value: R,
        children: (0, r.jsxs)('div', {
            className: s()(S.container, d, {
                [S.settingsContainer]: !i,
                [S.affinityHeight]: !i && G
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, r.jsxs)('div', {
                    className: i ? S.fullscreenTextContainer : S.settingsTextContainer,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: i ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: v.NW.string(v.t.YCZldH)
                        }),
                        V
                            ? (0, r.jsx)(E.Z, { referrer: M })
                            : G
                              ? (0, r.jsx)('div', {
                                    className: s()(S.affinityDescription),
                                    children: (0, r.jsx)(b.Z, {
                                        textColor: 'always-white',
                                        smallerText: !i
                                    })
                                })
                              : (0, r.jsx)(y, {}),
                        L || D
                            ? (0, r.jsx)('div', {
                                  className: s()(S.buttonContainer),
                                  children: (0, r.jsx)(j.Z, {
                                      className: s()(S.button, _),
                                      forceWhite: !0
                                  })
                              })
                            : (0, r.jsx)(T, {
                                  subscriptionTier: null !== (n = null != C ? C : null == k ? void 0 : null === (t = k.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : w,
                                  inOfferExperience: W,
                                  buttonClassName: _,
                                  isDarkMode: P
                              }),
                        G &&
                            !V &&
                            (0, r.jsx)(y, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !W && (0, r.jsx)(I, { isFullscreen: i })
            ]
        })
    });
};
