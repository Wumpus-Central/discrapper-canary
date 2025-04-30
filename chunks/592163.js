n.d(e, { default: () => f });
var r = n(200651);
n(192379);
var o = n(98278),
    c = n(790527),
    a = n(474936),
    i = n(981631),
    l = n(388032),
    u = n(881782),
    s = n(954696);
function f(t) {
    var { onClose: e, analyticsSource: n, onLearnMore: f } = t,
        b = (function (t, e) {
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
        })(t, ['onClose', 'analyticsSource', 'onLearnMore']);
    let p = a.Si.TIER_2,
        d = l.intl.format(l.t.hDMlqK, {
            onLearnMore: function () {
                null == f || f(), e(), (0, o.z)();
            }
        });
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
                artContainerClassName: u.videoBackgroundArt,
                type: a.cd.VIDEO_BACKGROUNDS_MODAL,
                title: l.intl.string(l.t.fHqiDQ),
                body: d,
                glowUp: d,
                analyticsSource: n,
                analyticsLocation: {
                    page: i.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                    object: i.qAy.BUTTON_CTA
                },
                onClose: e,
                subscriptionTier: p
            },
            b
        )
    );
}
