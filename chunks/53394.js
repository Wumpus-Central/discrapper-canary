n.d(t, { default: () => u });
var r = n(200651);
n(192379);
var o = n(98278),
    c = n(790527),
    a = n(474936),
    i = n(485696),
    l = n(388032),
    s = n(551105);
function u(e) {
    var { onClose: t, analyticsSource: n, analyticsLocation: u, onSecondaryClick: f } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++) (n = c[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['onClose', 'analyticsSource', 'analyticsLocation', 'onSecondaryClick']);
    return (0, r.jsx)(
        c.Z,
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
                artURL: s.Z,
                type: a.cd.RECENT_AVATARS_ROADBLOCK_UPSELL,
                title: l.NW.string(l.t.O8YHNT),
                body: l.NW.format(l.t.MW3mAg, { recentAvatarsLimit: i.zW }),
                glowUp: l.NW.format(l.t.MW3mAg, { recentAvatarsLimit: i.zW }),
                onSecondaryClick: () => {
                    null == f || f(), (0, o.$)(t);
                },
                secondaryCTA: l.NW.string(l.t.PcTCBw),
                onClose: t,
                enableArtBoxShadow: !1,
                analyticsSource: n,
                analyticsLocation: u,
                hideBackButton: !0,
                showEnhancedUpsell: !0,
                hidePremiumOfferUpsell: !1
            },
            p
        )
    );
}
