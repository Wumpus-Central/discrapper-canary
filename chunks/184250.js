n.d(e, { default: () => s });
var r = n(200651);
n(192379);
var o = n(98278),
    c = n(790527),
    a = n(474936),
    i = n(388032),
    l = n(116909);
function s(t) {
    var { onClose: e, analyticsSource: n, analyticsLocation: s } = t,
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
                artURL: l.Z,
                type: a.cd.APP_ICON_UPSELL,
                title: i.NW.string(i.t.TYFwc3),
                body: i.NW.string(i.t.HDt8io),
                glowUp: i.NW.string(i.t.HDt8io),
                onSecondaryClick: () => {
                    (0, o.$)(e);
                },
                secondaryCTA: i.NW.string(i.t.PcTCBw),
                analyticsSource: n,
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
