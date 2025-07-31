n.d(t, {
    Z: () => b,
    c: () => j
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    a = n(755721),
    c = n(481060),
    d = n(607070),
    u = n(436774),
    f = n(639119),
    m = n(767714),
    h = n(74538),
    p = n(981631),
    x = n(474936),
    g = n(388032),
    _ = n(801268);
function v(e) {
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
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['location']);
    let l = (0, f.N)(),
        o = i.useCallback(() => {
            if (null != l) {
                var e;
                return null != (e = (0, h.fr)(l)) ? e : g.intl.string(g.t.Y2WKTk);
            }
            return g.intl.string(g.t.Y2WKTk);
        }, [l]);
    return (0, r.jsx)(
        m.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })(
            {
                className: s()(_.enhancedCTA, _.ctaGradientBackground),
                iconClassName: _.premiumIcon,
                subscriptionTier: x.Si.TIER_2,
                textOptions: { textOverride: o() },
                size: a.zx.Sizes.TINY,
                premiumModalAnalyticsLocation: t
            },
            n
        )
    );
}
function j() {
    let e = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: s()(_.reverseTrialEducationBannerContainer, { [_.reducedMotion]: e }),
        children: [
            (0, r.jsx)(c.Fmz, {
                className: s()(_.unlockAnimation, { [_.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-xs/medium',
                className: _.reverseTrialEducationText,
                children: g.intl.format(g.t.GimLpa, {})
            })
        ]
    });
}
function b(e) {
    let { message: t, onClose: n, openStreamUpsellModal: i, glow: l = !1 } = e,
        o = {
            section: p.jXE.STREAM_SETTINGS,
            object: p.qAy.PREMIUM_UPSELL_BANNER,
            objectType: p.Qqv.BUY
        };
    return (0, r.jsxs)('div', {
        className: s()(_.upsellBanner, _.enhancedBanner, { [_.gradientGlow]: l }),
        children: [
            (0, r.jsxs)('div', {
                className: _.iconTextContainer,
                children: [
                    (0, r.jsx)(c.SrA, {
                        size: 'md',
                        color: u.JX.PREMIUM_TIER_2
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        className: s()(_.upsellText, _.enhancedUpsellText),
                        children:
                            null != t
                                ? t
                                : g.intl.format(g.t['L/zCtr'], {
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
                className: _.enhancedCTAs,
                children: (0, r.jsx)(v, { location: o })
            })
        ]
    });
}
