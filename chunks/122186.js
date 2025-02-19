t.d(n, {
    Z: () => N,
    c: () => Z
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    s = t.n(r),
    a = t(442837),
    o = t(481060),
    c = t(607070),
    u = t(436774),
    d = t(639119),
    m = t(197115),
    g = t(74538),
    h = t(981631),
    x = t(474936),
    v = t(388032),
    f = t(929475);
function j(e) {
    var { location: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                i = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        i = {},
                        r = Object.keys(e);
                    for (l = 0; l < r.length; l++) (t = r[l]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (l = 0; l < r.length; l++) (t = r[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ['location']);
    let r = (0, d.N)(),
        a = i.useCallback(() => {
            if (null != r) {
                var e;
                return null !== (e = (0, g.fr)(r)) && void 0 !== e ? e : v.NW.string(v.t.Y2WKTk);
            }
            return v.NW.string(v.t.Y2WKTk);
        }, [r]);
    return (0, l.jsx)(
        m.Z,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    l = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    l.forEach(function (n) {
                        var l;
                        (l = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = l);
                    });
            }
            return e;
        })(
            {
                className: s()(f.enhancedCTA, f.ctaGradientBackground),
                iconClassName: f.premiumIcon,
                subscriptionTier: x.Si.TIER_2,
                buttonText: a(),
                size: o.zxk.Sizes.TINY,
                premiumModalAnalyticsLocation: n
            },
            t
        )
    );
}
function Z() {
    let e = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, l.jsxs)('div', {
        className: s()(f.reverseTrialEducationBannerContainer, { [f.reducedMotion]: e }),
        children: [
            (0, l.jsx)(o.Fmz, {
                className: s()(f.unlockAnimation, { [f.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => t.e('21812').then(t.t.bind(t, 741855, 19))
            }),
            (0, l.jsx)(o.Text, {
                variant: 'text-xs/medium',
                className: f.reverseTrialEducationText,
                children: v.NW.format(v.t.GimLpa, {})
            })
        ]
    });
}
function N(e) {
    let { message: n, onClose: t, openStreamUpsellModal: i, glow: r = !1 } = e,
        a = {
            section: h.jXE.STREAM_SETTINGS,
            object: h.qAy.PREMIUM_UPSELL_BANNER,
            objectType: h.Qqv.BUY
        };
    return (0, l.jsxs)('div', {
        className: s()(f.upsellBanner, f.enhancedBanner, { [f.gradientGlow]: r }),
        children: [
            (0, l.jsxs)('div', {
                className: f.iconTextContainer,
                children: [
                    (0, l.jsx)(o.SrA, {
                        size: 'md',
                        color: u.JX.PREMIUM_TIER_2
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: s()(f.upsellText, f.enhancedUpsellText),
                        children:
                            null != n
                                ? n
                                : v.NW.format(v.t['L/zCtr'], {
                                      onClick: () =>
                                          i({
                                              analyticsLocation: a,
                                              onClose: t
                                          })
                                  })
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: f.enhancedCTAs,
                children: (0, l.jsx)(j, { location: a })
            })
        ]
    });
}
