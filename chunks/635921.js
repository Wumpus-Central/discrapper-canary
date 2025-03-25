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
    x = n(105759),
    N = n(346497),
    b = n(422034),
    _ = n(206127),
    E = n(710220),
    j = n(318747),
    C = n(409100),
    O = n(474936),
    v = n(388032),
    S = n(370623);
let T = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: i, buttonClassName: s, isMarketingPageV2Enabled: l, isDarkMode: o } = e,
            c = (0, r.jsx)(C.Z, {
                forceInverted: o || !l,
                className: a()(S.button, S.subButton, s, {
                    [S.extendedButton]: t && l,
                    [S.whiteSubButton]: l && !o
                }),
                subscriptionTier: n
            }),
            d =
                t && l
                    ? null
                    : (0, r.jsx)(j.Z, {
                          className: a()(S.button, s),
                          forceWhite: !l
                      });
        return (0, r.jsxs)('div', {
            className: a()(S.buttonContainer, i),
            children: [c, ' ', d]
        });
    },
    I = (e) => {
        let { isFullscreen: t } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.A, { className: t ? S.fullscreenSparkleStar1 : S.settingsSparkleStar1 }), (0, r.jsx)(u.A, { className: t ? S.fullscreenSparkleStar2 : S.settingsSparkleStar2 }), (0, r.jsx)(u.A, { className: t ? S.fullscreenSparkleStar3 : S.settingsSparkleStar3 }), (0, r.jsx)(u.A, { className: t ? S.fullscreenSparkleStar4 : S.settingsSparkleStar4 })]
        });
    };
function y(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isMarketingPageV2Enabled: i } = e,
        s = (0, _.$)();
    return (0, r.jsx)(o.Text, {
        variant: t,
        color: i ? 'header-secondary' : 'always-white',
        className: a()(S.description, {
            [S.descriptionBottomMargin]: n,
            [S.descriptionV2]: i
        }),
        children: v.NW.format(v.t.kt9wxs, { cheapestMonthlyPrice: s })
    });
}
let A = i.forwardRef((e, t) => {
    var n, i;
    let { isFullscreen: s, className: u, buttonClassName: _, subscriptionTier: C, entrypoint: A, isDarkMode: P } = e,
        { analyticsLocations: R } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
        D = (0, p._O)(),
        Z = (0, h.Ng)(),
        w = (0, h.Wp)(Z, O.Si.TIER_2) ? O.Si.TIER_2 : void 0,
        k = (0, f.N)(),
        W = (0, g.Nx)(),
        L = (0, N.Vi)(),
        B = (0, l.e7)([m.Z], () => m.Z.affinities),
        M = (0, x.Z)(),
        U = A === O.EZ.ApplicationStoreHome && null != M,
        V = B.length > 0;
    return (0, r.jsx)(d.Gt, {
        value: R,
        children: (0, r.jsxs)('div', {
            ref: t,
            className: a()(S.container, u, {
                [S.settingsContainer]: !s,
                [S.affinityHeight]: !s && V
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, r.jsxs)('div', {
                    className: s ? S.fullscreenTextContainer : S.settingsTextContainer,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: s ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: v.NW.string(v.t.YCZldH)
                        }),
                        U
                            ? (0, r.jsx)(E.Z, { referrer: M })
                            : V
                              ? (0, r.jsx)('div', {
                                    className: S.affinityDescription,
                                    children: (0, r.jsx)(b.Z, {
                                        textColor: 'always-white',
                                        smallerText: !s
                                    })
                                })
                              : (0, r.jsx)(y, {}),
                        L || D
                            ? (0, r.jsx)('div', {
                                  className: S.buttonContainer,
                                  children: (0, r.jsx)(j.Z, {
                                      className: a()(S.button, _),
                                      forceWhite: !0
                                  })
                              })
                            : (0, r.jsx)(T, {
                                  subscriptionTier: null !== (i = null != C ? C : null == k ? void 0 : null === (n = k.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== i ? i : w,
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
