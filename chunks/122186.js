n.d(t, {
    Z: () => j,
    c: () => v
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    a = n(481060),
    c = n(607070),
    d = n(436774),
    u = n(639119),
    f = n(767714),
    m = n(74538),
    h = n(981631),
    p = n(474936),
    x = n(388032),
    g = n(801268);
function _(e) {
    var { location: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['location']);
    let l = (0, u.N)(),
        o = i.useCallback(() => {
            if (null != l) {
                var e;
                return null != (e = (0, m.fr)(l)) ? e : x.intl.string(x.t.Y2WKTk);
            }
            return x.intl.string(x.t.Y2WKTk);
        }, [l]);
    return (0, r.jsx)(
        f.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                className: s()(g.enhancedCTA, g.ctaGradientBackground),
                iconClassName: g.premiumIcon,
                subscriptionTier: p.Si.TIER_2,
                textOptions: { textOverride: o() },
                size: a.zxk.Sizes.TINY,
                premiumModalAnalyticsLocation: t
            },
            n
        )
    );
}
function v() {
    let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: s()(g.reverseTrialEducationBannerContainer, { [g.reducedMotion]: e }),
        children: [
            (0, r.jsx)(a.Fmz, {
                className: s()(g.unlockAnimation, { [g.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-xs/medium',
                className: g.reverseTrialEducationText,
                children: x.intl.format(x.t.GimLpa, {})
            })
        ]
    });
}
function j(e) {
    let { message: t, onClose: n, openStreamUpsellModal: i, glow: l = !1 } = e,
        o = {
            section: h.jXE.STREAM_SETTINGS,
            object: h.qAy.PREMIUM_UPSELL_BANNER,
            objectType: h.Qqv.BUY
        };
    return (0, r.jsxs)('div', {
        className: s()(g.upsellBanner, g.enhancedBanner, { [g.gradientGlow]: l }),
        children: [
            (0, r.jsxs)('div', {
                className: g.iconTextContainer,
                children: [
                    (0, r.jsx)(a.SrA, {
                        size: 'md',
                        color: d.JX.PREMIUM_TIER_2
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        className: s()(g.upsellText, g.enhancedUpsellText),
                        children:
                            null != t
                                ? t
                                : x.intl.format(x.t['L/zCtr'], {
                                      onClick: () =>
                                          i({
                                              analyticsLocation: o,
                                              onClose: n
                                          })
                                  })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: g.enhancedCTAs,
                children: (0, r.jsx)(_, { location: o })
            })
        ]
    });
}
