t.d(n, {
    Z: () => E,
    c: () => T
});
var l = t(200651),
    i = t(192379),
    s = t(120356),
    a = t.n(s),
    r = t(848246),
    o = t(442837),
    u = t(481060),
    c = t(607070),
    d = t(436774),
    m = t(933843),
    x = t(1163),
    g = t(846401),
    h = t(639119),
    v = t(197115),
    Z = t(74538),
    S = t(981631),
    j = t(474936),
    C = t(388032),
    f = t(468888);
function p(e) {
    let { location: n, ...t } = e,
        s = (0, h.N)(),
        r = i.useCallback(() => {
            if (null != s) {
                var e;
                return null !== (e = (0, Z.fr)(s)) && void 0 !== e ? e : C.intl.string(C.t.Y2WKTk);
            }
            return C.intl.string(C.t.Y2WKTk);
        }, [s]);
    return (0, l.jsx)(v.Z, {
        className: a()(f.enhancedCTA, f.ctaGradientBackground),
        iconClassName: f.premiumIcon,
        subscriptionTier: j.Si.TIER_2,
        buttonText: r(),
        size: u.zxk.Sizes.TINY,
        premiumModalAnalyticsLocation: n,
        ...t
    });
}
function N() {
    let e = (0, g.Z)();
    return (0, l.jsxs)('div', {
        className: f.extendedDemoContainer,
        children: [
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        className: f.extendedDemoContainer,
                        children: [
                            (0, l.jsx)(u.Text, {
                                variant: 'text-xs/bold',
                                color: 'status-warning',
                                className: f.extendedDemoDurationText,
                                children: e.toUpperCase()
                            }),
                            (0, l.jsx)(u.Text, {
                                variant: 'text-xs/bold',
                                children: C.intl.string(C.t.bbRRNT).toUpperCase()
                            })
                        ]
                    }),
                    (0, l.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        children: C.intl.string(C.t['1swibW'])
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: f.extendedDemoButton,
                children: (0, l.jsx)(p, { size: u.zxk.Sizes.SMALL })
            })
        ]
    });
}
function T() {
    let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, l.jsxs)('div', {
        className: a()(f.reverseTrialEducationBannerContainer, { [f.reducedMotion]: e }),
        children: [
            (0, l.jsx)(u.Fmz, {
                className: a()(f.unlockAnimation, { [f.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => t.e('21812').then(t.t.bind(t, 741855, 19))
            }),
            (0, l.jsx)(u.Text, {
                variant: 'text-xs/medium',
                className: f.reverseTrialEducationText,
                children: C.intl.format(C.t.GimLpa, {})
            })
        ]
    });
}
function E(e) {
    let { message: n, onClose: t, openStreamUpsellModal: i, glow: s = !1 } = e,
        o = {
            section: S.jXE.STREAM_SETTINGS,
            object: S.qAy.PREMIUM_UPSELL_BANNER,
            objectType: S.Qqv.BUY
        },
        c = (0, m.So)(r.q.STREAM_HIGH_QUALITY),
        g = x.Z.useExperiment({ location: 'StreamSettingsUpsellBanner' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, l.jsx)('div', {
        className: a()(f.upsellBanner, f.enhancedBanner, { [f.gradientGlow]: s }),
        children:
            c && g
                ? (0, l.jsx)(N, {})
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: f.iconTextContainer,
                              children: [
                                  (0, l.jsx)(u.SrA, {
                                      size: 'md',
                                      color: d.JX.PREMIUM_TIER_2
                                  }),
                                  (0, l.jsx)(u.Text, {
                                      variant: 'text-sm/medium',
                                      className: a()(f.upsellText, f.enhancedUpsellText),
                                      children:
                                          null != n
                                              ? n
                                              : c
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          C.intl.string(C.t.zuZ2ws),
                                                          ' ',
                                                          C.intl.format(C.t.fjSvsL, {
                                                              onClick: () =>
                                                                  i({
                                                                      analyticsLocation: o,
                                                                      onClose: t
                                                                  })
                                                          })
                                                      ]
                                                  })
                                                : C.intl.format(C.t['L/zCtr'], {
                                                      onClick: () =>
                                                          i({
                                                              analyticsLocation: o,
                                                              onClose: t
                                                          })
                                                  })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: f.enhancedCTAs,
                              children: (0, l.jsx)(p, { location: o })
                          })
                      ]
                  })
    });
}
