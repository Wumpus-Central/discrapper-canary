t.d(n, {
    Z: function () {
        return T;
    },
    c: function () {
        return N;
    }
});
var l = t(200651),
    i = t(192379),
    s = t(120356),
    r = t.n(s),
    a = t(848246),
    o = t(442837),
    u = t(481060),
    c = t(607070),
    d = t(436774),
    m = t(933843),
    g = t(1163),
    h = t(846401),
    x = t(639119),
    S = t(197115),
    v = t(74538),
    Z = t(981631),
    C = t(474936),
    f = t(388032),
    j = t(468888);
function p(e) {
    let { location: n, ...t } = e,
        s = (0, x.N)(),
        a = i.useCallback(() => {
            if (null != s) {
                var e;
                return null !== (e = (0, v.fr)(s)) && void 0 !== e ? e : f.intl.string(f.t.Y2WKTk);
            }
            return f.intl.string(f.t.Y2WKTk);
        }, [s]);
    return (0, l.jsx)(S.Z, {
        className: r()(j.enhancedCTA, j.ctaGradientBackground),
        iconClassName: j.premiumIcon,
        subscriptionTier: C.Si.TIER_2,
        buttonText: a(),
        size: u.Button.Sizes.TINY,
        premiumModalAnalyticsLocation: n,
        ...t
    });
}
function I() {
    let e = (0, h.Z)();
    return (0, l.jsxs)('div', {
        className: j.extendedDemoContainer,
        children: [
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        className: j.extendedDemoContainer,
                        children: [
                            (0, l.jsx)(u.Text, {
                                variant: 'text-xs/bold',
                                color: 'status-warning',
                                className: j.extendedDemoDurationText,
                                children: e.toUpperCase()
                            }),
                            (0, l.jsx)(u.Text, {
                                variant: 'text-xs/bold',
                                children: f.intl.string(f.t.bbRRNT).toUpperCase()
                            })
                        ]
                    }),
                    (0, l.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        children: f.intl.string(f.t['1swibW'])
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: j.extendedDemoButton,
                children: (0, l.jsx)(p, { size: u.Button.Sizes.SMALL })
            })
        ]
    });
}
function N() {
    let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, l.jsxs)('div', {
        className: r()(j.reverseTrialEducationBannerContainer, { [j.reducedMotion]: e }),
        children: [
            (0, l.jsx)(u.LottieAnimation, {
                className: r()(j.unlockAnimation, { [j.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => t.e('21812').then(t.t.bind(t, 741855, 19))
            }),
            (0, l.jsx)(u.Text, {
                variant: 'text-xs/medium',
                className: j.reverseTrialEducationText,
                children: f.intl.format(f.t.GimLpa, {})
            })
        ]
    });
}
function T(e) {
    let { message: n, onClose: t, openStreamUpsellModal: i, glow: s = !1 } = e,
        o = {
            section: Z.jXE.STREAM_SETTINGS,
            object: Z.qAy.PREMIUM_UPSELL_BANNER,
            objectType: Z.Qqv.BUY
        },
        c = (0, m.So)(a.q.STREAM_HIGH_QUALITY),
        h = g.Z.useExperiment({ location: 'StreamSettingsUpsellBanner' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, l.jsx)('div', {
        className: r()(j.upsellBanner, j.enhancedBanner, { [j.gradientGlow]: s }),
        children:
            c && h
                ? (0, l.jsx)(I, {})
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: j.iconTextContainer,
                              children: [
                                  (0, l.jsx)(u.NitroWheelIcon, {
                                      size: 'md',
                                      color: d.JX.PREMIUM_TIER_2
                                  }),
                                  (0, l.jsx)(u.Text, {
                                      variant: 'text-sm/medium',
                                      className: r()(j.upsellText, j.enhancedUpsellText),
                                      children:
                                          null != n
                                              ? n
                                              : c
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          f.intl.string(f.t.zuZ2ws),
                                                          ' ',
                                                          f.intl.format(f.t.fjSvsL, {
                                                              onClick: () =>
                                                                  i({
                                                                      analyticsLocation: o,
                                                                      onClose: t
                                                                  })
                                                          })
                                                      ]
                                                  })
                                                : f.intl.format(f.t['L/zCtr'], {
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
                              className: j.enhancedCTAs,
                              children: (0, l.jsx)(p, { location: o })
                          })
                      ]
                  })
    });
}
