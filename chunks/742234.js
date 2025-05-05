n.d(e, { default: () => l });
var r = n(255367);
n(73800);
var o = n(98278),
    c = n(790527),
    i = n(474936),
    a = n(388032);
function l(t) {
    var { onClose: e, analyticsSource: l, analyticsLocation: s } = t,
        u = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(t);
                    for (r = 0; r < c.length; r++) (n = c[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(t);
                for (r = 0; r < c.length; r++) (n = c[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ['onClose', 'analyticsSource', 'analyticsLocation']);
    return (0, r.jsx)(
        c.Z,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    r.forEach(function (e) {
                        var r;
                        (r = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = r);
                    });
            }
            return t;
        })(
            {
                artURL: n(677531),
                type: i.cd.CLIENT_THEMES_UPSELL,
                title: a.intl.string(a.t.GI7t09),
                body: a.intl.string(a.t.MRrvSE),
                glowUp: a.intl.string(a.t.MRrvSE),
                onSecondaryClick: () => {
                    (0, o.$)(e);
                },
                secondaryCTA: a.intl.string(a.t.PcTCBw),
                analyticsSource: l,
                analyticsLocation: s,
                onClose: e,
                enableArtBoxShadow: !1,
                hideBackButton: !0,
                showEnhancedUpsell: !0
            },
            u
        )
    );
}
