t.d(n, {
    Z: () => N,
    c: () => Z,
});
var l = t(54381),
    r = t(473749),
    i = t(120356),
    s = t.n(i),
    a = t(442837),
    c = t(755721),
    o = t(481060),
    u = t(607070),
    d = t(436774),
    m = t(639119),
    g = t(767714),
    x = t(74538),
    h = t(981631),
    j = t(474936),
    v = t(388032),
    p = t(476215);
function f(e) {
    var { location: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) (t = i[l]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++)
                    (t = i[l]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ["location"]);
    let i = (0, m.N)(),
        a = r.useCallback(() => {
            if (null != i) {
                var e;
                return null != (e = (0, x.fr)(i, j.Si.TIER_2)) ? e : v.intl.string(v.t.Y2WKTl);
            }
            return v.intl.string(v.t.Y2WKTl);
        }, [i]);
    return (0, l.jsx)(
        g.Z,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    l = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    l.forEach(function (n) {
                        var l;
                        (l = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = l);
                    });
            }
            return e;
        })(
            {
                className: s()(p.enhancedCTA, p.ctaGradientBackground),
                iconClassName: p.premiumIcon,
                subscriptionTier: j.Si.TIER_2,
                textOptions: { textOverride: a() },
                size: c.zx.Sizes.TINY,
                premiumModalAnalyticsLocation: n,
            },
            t,
        ),
    );
}
function Z() {
    let e = (0, a.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, l.jsxs)("div", {
        className: s()(p.reverseTrialEducationBannerContainer, { [p.reducedMotion]: e }),
        children: [
            (0, l.jsx)(o.Fmz, {
                className: s()(p.unlockAnimation, { [p.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => t.e("21812").then(t.t.bind(t, 741855, 19)),
            }),
            (0, l.jsx)(o.Text, {
                variant: "text-xs/medium",
                className: p.reverseTrialEducationText,
                children: v.intl.format(v.t.GimLpS, {}),
            }),
        ],
    });
}
function N(e) {
    let { message: n, onClose: t, openStreamUpsellModal: r, glow: i = !1 } = e,
        a = {
            section: h.jXE.STREAM_SETTINGS,
            object: h.qAy.PREMIUM_UPSELL_BANNER,
            objectType: h.AnalyticsObjectTypes.BUY,
        };
    return (0, l.jsxs)("div", {
        className: s()(p.upsellBanner, p.enhancedBanner, { [p.gradientGlow]: i }),
        children: [
            (0, l.jsxs)("div", {
                className: p.iconTextContainer,
                children: [
                    (0, l.jsx)(o.SrA, {
                        size: "md",
                        color: d.JX.PREMIUM_TIER_2,
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        className: s()(p.upsellText, p.enhancedUpsellText),
                        children:
                            null != n
                                ? n
                                : v.intl.format(v.t["L/zCto"], {
                                      onClick: () =>
                                          r({
                                              analyticsLocation: a,
                                              onClose: t,
                                          }),
                                  }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: p.enhancedCTAs,
                children: (0, l.jsx)(f, { location: a }),
            }),
        ],
    });
}
