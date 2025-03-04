n.d(t, {
    PK: () => S,
    ZP: () => y,
    _O: () => I
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
    p = n(104494),
    h = n(639119),
    f = n(105759),
    b = n(346497),
    N = n(422034),
    x = n(206127),
    _ = n(710220),
    E = n(318747),
    j = n(409100),
    C = n(474936),
    O = n(388032),
    v = n(370623);
let S = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: i, buttonClassName: a, isMarketingPageV2Enabled: l, isDarkMode: o } = e,
            c = (0, r.jsx)(j.Z, {
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
                    : (0, r.jsx)(E.Z, {
                          className: s()(v.button, a),
                          forceWhite: !l
                      });
        return (0, r.jsxs)('div', {
            className: s()(v.buttonContainer, i),
            children: [c, ' ', d]
        });
    },
    T = (e) => {
        let { isFullscreen: t } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d.A, { className: t ? v.fullscreenSparkleStar1 : v.settingsSparkleStar1 }), (0, r.jsx)(d.A, { className: t ? v.fullscreenSparkleStar2 : v.settingsSparkleStar2 }), (0, r.jsx)(d.A, { className: t ? v.fullscreenSparkleStar3 : v.settingsSparkleStar3 }), (0, r.jsx)(d.A, { className: t ? v.fullscreenSparkleStar4 : v.settingsSparkleStar4 })]
        });
    };
function I(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isMarketingPageV2Enabled: i } = e,
        a = (0, x.$)();
    return (0, r.jsx)(l.Text, {
        variant: t,
        color: i ? 'header-secondary' : 'always-white',
        className: s()(v.description, {
            [v.descriptionBottomMargin]: n,
            [v.descriptionV2]: i
        }),
        children: O.NW.format(O.t.kt9wxs, { cheapestMonthlyPrice: a })
    });
}
let y = (e) => {
    var t, n;
    let { isFullscreen: i, className: d, buttonClassName: x, subscriptionTier: j, entrypoint: y, isDarkMode: A } = e,
        { analyticsLocations: P } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        R = (0, g._O)(),
        D = (0, p.Ng)(),
        Z = (0, p.Wp)(D, C.Si.TIER_2) ? C.Si.TIER_2 : void 0,
        w = (0, h.N)(),
        k = (0, m.Nx)(),
        W = (0, b.Vi)(),
        L = (0, a.e7)([u.Z], () => u.Z.affinities),
        B = (0, f.Z)(),
        M = y === C.EZ.ApplicationStoreHome && null != B,
        U = L.length > 0;
    return (0, r.jsx)(c.Gt, {
        value: P,
        children: (0, r.jsxs)('div', {
            className: s()(v.container, d, {
                [v.settingsContainer]: !i,
                [v.affinityHeight]: !i && U
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, r.jsxs)('div', {
                    className: i ? v.fullscreenTextContainer : v.settingsTextContainer,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: i ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: O.NW.string(O.t.YCZldH)
                        }),
                        M
                            ? (0, r.jsx)(_.Z, { referrer: B })
                            : U
                              ? (0, r.jsx)('div', {
                                    className: v.affinityDescription,
                                    children: (0, r.jsx)(N.Z, {
                                        textColor: 'always-white',
                                        smallerText: !i
                                    })
                                })
                              : (0, r.jsx)(I, {}),
                        W || R
                            ? (0, r.jsx)('div', {
                                  className: v.buttonContainer,
                                  children: (0, r.jsx)(E.Z, {
                                      className: s()(v.button, x),
                                      forceWhite: !0
                                  })
                              })
                            : (0, r.jsx)(S, {
                                  subscriptionTier: null !== (n = null != j ? j : null == w ? void 0 : null === (t = w.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : Z,
                                  inOfferExperience: k,
                                  buttonClassName: x,
                                  isDarkMode: A
                              }),
                        U &&
                            !M &&
                            (0, r.jsx)(I, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !k && (0, r.jsx)(T, { isFullscreen: i })
            ]
        })
    });
};
