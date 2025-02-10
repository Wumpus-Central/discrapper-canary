l.d(n, {
    Z: () => C,
    c: () => j
});
var t = l(200651),
    i = l(192379),
    s = l(120356),
    a = l.n(s),
    r = l(442837),
    o = l(481060),
    u = l(607070),
    c = l(436774),
    d = l(639119),
    m = l(197115),
    x = l(74538),
    h = l(981631),
    g = l(474936),
    Z = l(388032),
    v = l(570772);
function S(e) {
    let { location: n, ...l } = e,
        s = (0, d.N)(),
        r = i.useCallback(() => {
            if (null != s) {
                var e;
                return null !== (e = (0, x.fr)(s)) && void 0 !== e ? e : Z.intl.string(Z.t.Y2WKTk);
            }
            return Z.intl.string(Z.t.Y2WKTk);
        }, [s]);
    return (0, t.jsx)(m.Z, {
        className: a()(v.enhancedCTA, v.ctaGradientBackground),
        iconClassName: v.premiumIcon,
        subscriptionTier: g.Si.TIER_2,
        buttonText: r(),
        size: o.zxk.Sizes.TINY,
        premiumModalAnalyticsLocation: n,
        ...l
    });
}
function j() {
    let e = (0, r.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, t.jsxs)('div', {
        className: a()(v.reverseTrialEducationBannerContainer, { [v.reducedMotion]: e }),
        children: [
            (0, t.jsx)(o.Fmz, {
                className: a()(v.unlockAnimation, { [v.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => l.e('21812').then(l.t.bind(l, 741855, 19))
            }),
            (0, t.jsx)(o.Text, {
                variant: 'text-xs/medium',
                className: v.reverseTrialEducationText,
                children: Z.intl.format(Z.t.GimLpa, {})
            })
        ]
    });
}
function C(e) {
    let { message: n, onClose: l, openStreamUpsellModal: i, glow: s = !1 } = e,
        r = {
            section: h.jXE.STREAM_SETTINGS,
            object: h.qAy.PREMIUM_UPSELL_BANNER,
            objectType: h.Qqv.BUY
        };
    return (0, t.jsxs)('div', {
        className: a()(v.upsellBanner, v.enhancedBanner, { [v.gradientGlow]: s }),
        children: [
            (0, t.jsxs)('div', {
                className: v.iconTextContainer,
                children: [
                    (0, t.jsx)(o.SrA, {
                        size: 'md',
                        color: c.JX.PREMIUM_TIER_2
                    }),
                    (0, t.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: a()(v.upsellText, v.enhancedUpsellText),
                        children:
                            null != n
                                ? n
                                : Z.intl.format(Z.t['L/zCtr'], {
                                      onClick: () =>
                                          i({
                                              analyticsLocation: r,
                                              onClose: l
                                          })
                                  })
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: v.enhancedCTAs,
                children: (0, t.jsx)(S, { location: r })
            })
        ]
    });
}
