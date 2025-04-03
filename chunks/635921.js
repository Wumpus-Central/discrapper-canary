n.d(t, {
    PK: () => T,
    ZP: () => A,
    _O: () => y
}),
    n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(535322),
    m = n(357355),
    g = n(140465),
    p = n(775412),
    h = n(104494),
    f = n(639119),
    b = n(105759),
    N = n(346497),
    x = n(422034),
    _ = n(206127),
    E = n(710220),
    j = n(318747),
    O = n(409100),
    C = n(474936),
    S = n(388032),
    v = n(909176);
let T = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: i, buttonClassName: s, isMarketingPageV2Enabled: l, isDarkMode: o } = e,
            c = (0, r.jsx)(O.Z, {
                forceInverted: o || !l,
                className: a()(v.button, v.subButton, s, {
                    [v.extendedButton]: t && l,
                    [v.whiteSubButton]: l && !o
                }),
                subscriptionTier: n
            }),
            d =
                t && l
                    ? null
                    : (0, r.jsx)(j.Z, {
                          className: a()(v.button, s),
                          forceWhite: !l
                      });
        return (0, r.jsxs)('div', {
            className: a()(v.buttonContainer, i),
            children: [c, ' ', d]
        });
    },
    I = (e) => {
        let { isFullscreen: t } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.A, { className: t ? v.fullscreenSparkleStar1 : v.settingsSparkleStar1 }), (0, r.jsx)(u.A, { className: t ? v.fullscreenSparkleStar2 : v.settingsSparkleStar2 }), (0, r.jsx)(u.A, { className: t ? v.fullscreenSparkleStar3 : v.settingsSparkleStar3 }), (0, r.jsx)(u.A, { className: t ? v.fullscreenSparkleStar4 : v.settingsSparkleStar4 })]
        });
    };
function y(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isMarketingPageV2Enabled: i } = e,
        s = (0, _.$)();
    return (0, r.jsx)(o.Text, {
        variant: t,
        color: i ? 'header-secondary' : 'always-white',
        className: a()(v.description, {
            [v.descriptionBottomMargin]: n,
            [v.descriptionV2]: i
        }),
        children: S.NW.format(S.t.kt9wxs, { cheapestMonthlyPrice: s })
    });
}
let A = i.forwardRef((e, t) => {
    var n, i;
    let { isFullscreen: s, className: u, buttonClassName: _, subscriptionTier: O, entrypoint: A, isDarkMode: P } = e,
        { analyticsLocations: R } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
        D = (0, p._O)(),
        Z = (0, h.Ng)(),
        w = (0, h.Wp)(Z, C.Si.TIER_2) ? C.Si.TIER_2 : void 0,
        k = (0, f.N)(),
        W = (0, g.Nx)(),
        L = (0, N.Vi)(),
        B = (0, l.e7)([m.Z], () => m.Z.affinities),
        M = (0, b.Z)(),
        U = A === C.EZ.ApplicationStoreHome && null != M,
        V = B.length > 0;
    return (0, r.jsx)(d.Gt, {
        value: R,
        children: (0, r.jsxs)('div', {
            ref: t,
            className: a()(v.container, u, {
                [v.settingsContainer]: !s,
                [v.affinityHeight]: !s && V
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, r.jsxs)('div', {
                    className: s ? v.fullscreenTextContainer : v.settingsTextContainer,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: s ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: S.NW.string(S.t.YCZldH)
                        }),
                        U
                            ? (0, r.jsx)(E.Z, { referrer: M })
                            : V
                              ? (0, r.jsx)('div', {
                                    className: v.affinityDescription,
                                    children: (0, r.jsx)(x.Z, {
                                        textColor: 'always-white',
                                        smallerText: !s
                                    })
                                })
                              : (0, r.jsx)(y, {}),
                        L || D
                            ? (0, r.jsx)('div', {
                                  className: v.buttonContainer,
                                  children: (0, r.jsx)(j.Z, {
                                      className: a()(v.button, _),
                                      forceWhite: !0
                                  })
                              })
                            : (0, r.jsx)(T, {
                                  subscriptionTier: null != (i = null != O ? O : null == k || null == (n = k.subscription_trial) ? void 0 : n.sku_id) ? i : w,
                                  inOfferExperience: W,
                                  buttonClassName: _,
                                  isDarkMode: P
                              }),
                        V &&
                            !U &&
                            (0, r.jsx)(y, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !W && (0, r.jsx)(I, { isFullscreen: s })
            ]
        })
    });
});
