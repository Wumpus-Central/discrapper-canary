n.d(e, { default: () => u });
var r = n(200651);
n(192379);
var o = n(98278),
    c = n(790527),
    a = n(474936),
    i = n(485696),
    l = n(388032),
    s = n(551105);
function u(t) {
    var { onClose: e, analyticsSource: n, analyticsLocation: u, onSecondaryClick: f } = t,
        p = (function (t, e) {
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
        })(t, ['onClose', 'analyticsSource', 'analyticsLocation', 'onSecondaryClick']);
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
                artURL: s.Z,
                type: a.cd.RECENT_AVATARS_ROADBLOCK_UPSELL,
                title: l.intl.string(l.t.O8YHNT),
                body: l.intl.format(l.t.MW3mAg, { recentAvatarsLimit: i.zW }),
                glowUp: l.intl.format(l.t.MW3mAg, { recentAvatarsLimit: i.zW }),
                onSecondaryClick: () => {
                    null == f || f(), (0, o.$)(e);
                },
                secondaryCTA: l.intl.string(l.t.PcTCBw),
                onClose: e,
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
