r.d(t, { default: () => f });
var n = r(200651);
r(192379);
var o = r(98278),
    c = r(790527),
    a = r(474936),
    i = r(981631),
    u = r(388032),
    l = r(881782),
    s = r(954696);
function f(e) {
    var { onClose: t, analyticsSource: r, onLearnMore: f } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['onClose', 'analyticsSource', 'onLearnMore']);
    let p = a.Si.TIER_2,
        d = u.NW.format(u.t.hDMlqK, {
            onLearnMore: function () {
                null == f || f(), t(), (0, o.z)();
            }
        });
    return (0, n.jsx)(
        c.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                artURL: s.Z,
                artContainerClassName: l.videoBackgroundArt,
                type: a.cd.VIDEO_BACKGROUNDS_MODAL,
                title: u.NW.string(u.t.fHqiDQ),
                body: d,
                glowUp: d,
                analyticsSource: r,
                analyticsLocation: {
                    page: i.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                    object: i.qAy.BUTTON_CTA
                },
                onClose: t,
                subscriptionTier: p
            },
            b
        )
    );
}
