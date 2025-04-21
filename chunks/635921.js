n.d(t, {
    PK: () => I,
    ZP: () => A,
    _O: () => y
}),
    n(953529);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
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
    _ = n(346497),
    x = n(422034),
    E = n(206127),
    j = n(710220),
    C = n(318747),
    O = n(409100),
    S = n(474936),
    v = n(388032),
    T = n(909176);
let I = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: r, buttonClassName: s, isMarketingPageV2Enabled: a, isDarkMode: o } = e,
            c = (0, i.jsx)(O.Z, {
                forceInverted: o || !a,
                className: l()(T.button, T.subButton, s, {
                    [T.extendedButton]: t && a,
                    [T.whiteSubButton]: a && !o
                }),
                subscriptionTier: n
            }),
            d =
                t && a
                    ? null
                    : (0, i.jsx)(C.Z, {
                          className: l()(T.button, s),
                          forceWhite: !a
                      });
        return (0, i.jsxs)('div', {
            className: l()(T.buttonContainer, r),
            children: [c, ' ', d]
        });
    },
    N = (e) => {
        let { isFullscreen: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.A, { className: t ? T.fullscreenSparkleStar1 : T.settingsSparkleStar1 }), (0, i.jsx)(u.A, { className: t ? T.fullscreenSparkleStar2 : T.settingsSparkleStar2 }), (0, i.jsx)(u.A, { className: t ? T.fullscreenSparkleStar3 : T.settingsSparkleStar3 }), (0, i.jsx)(u.A, { className: t ? T.fullscreenSparkleStar4 : T.settingsSparkleStar4 })]
        });
    };
function y(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isMarketingPageV2Enabled: r } = e,
        s = (0, E.$)();
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
    let { isFullscreen: s, className: u, buttonClassName: E, subscriptionTier: O, entrypoint: A, isDarkMode: P } = e,
        { analyticsLocations: R } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
        D = (0, p._O)(),
        Z = (0, h.Ng)(),
        w = (0, h.Wp)(Z, S.Si.TIER_2) ? S.Si.TIER_2 : void 0,
        k = (0, f.N)(),
        L = (0, g.Nx)(),
        B = (0, _.Vi)(),
        M = (0, a.e7)([m.Z], () => m.Z.affinities),
        U = (0, b.Z)(),
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
                            ? (0, i.jsx)(j.Z, { referrer: U })
                            : G
                              ? (0, i.jsx)('div', {
                                    className: T.affinityDescription,
                                    children: (0, i.jsx)(x.Z, {
                                        textColor: 'always-white',
                                        smallerText: !s
                                    })
                                })
                              : (0, i.jsx)(y, {}),
                        B || D
                            ? (0, i.jsx)('div', {
                                  className: T.buttonContainer,
                                  children: (0, i.jsx)(C.Z, {
                                      className: l()(T.button, E),
                                      forceWhite: !0
                                  })
                              })
                            : (0, i.jsx)(I, {
                                  subscriptionTier: null != (r = null != O ? O : null == k || null == (n = k.subscription_trial) ? void 0 : n.sku_id) ? r : w,
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
