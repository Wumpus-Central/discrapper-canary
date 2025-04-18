n.d(e, { default: () => f });
var r = n(200651);
n(192379);
var o = n(703656),
    c = n(626135),
    a = n(790527),
    i = n(474936),
    s = n(981631),
    l = n(388032),
    u = n(869436),
    O = n(235810);
function b() {
    return (0, r.jsx)('div', {
        className: u.artContainer,
        children: (0, r.jsx)('img', {
            src: O,
            className: u.artAsset,
            alt: ''
        })
    });
}
function f(t) {
    var { onClose: e, source: n } = t,
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
        })(t, ['onClose', 'source']);
    return (0, r.jsx)(
        a.Z,
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
                artElement: (0, r.jsx)(b, {}),
                type: i.cd.FOR_LATER_MODAL_UPSELL,
                title: l.NW.string(l.t.w4DRbW),
                body: l.NW.string(l.t.F6u3Ex),
                glowUp: l.NW.string(l.t.F6u3Ex),
                secondaryCTA: l.NW.string(l.t.PcTCBw),
                onSecondaryClick: function () {
                    c.default.track(s.rMx.PREMIUM_PROMOTION_OPENED, {
                        location_section: s.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
                        location_object: s.qAy.NAVIGATION_LINK
                    }),
                        e(),
                        (0, o.uL)(s.Z5c.APPLICATION_STORE);
                },
                showEnhancedUpsell: !0,
                analyticsSource: n,
                analyticsLocation: {
                    section: s.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
                    object: s.qAy.BUTTON_CTA
                },
                onClose: e
            },
            u
        )
    );
}
