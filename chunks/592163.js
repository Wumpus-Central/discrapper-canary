n.d(t, { default: () => f });
var r = n(54381);
n(473749);
var o = n(98278),
    c = n(790527),
    a = n(474936),
    i = n(981631),
    l = n(388032),
    u = n(452059),
    s = n(105111);
function f(e) {
    var { onClose: t, analyticsSource: n, onLearnMore: f } = e,
        b = (function (e, t) {
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
                for (r = 0; r < c.length; r++)
                    (n = c[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["onClose", "analyticsSource", "onLearnMore"]);
    let p = a.Si.TIER_2,
        d = l.intl.format(l.t.hDMlqD, {
            onLearnMore: function () {
                null == f || f(), t(), (0, o.z)();
            },
        });
    return (0, r.jsx)(
        c.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                artURL: s.Z,
                artContainerClassName: u.videoBackgroundArt,
                type: a.cd.VIDEO_BACKGROUNDS_MODAL,
                title: l.intl.string(l.t.fHqiDW),
                body: d,
                glowUp: d,
                analyticsSource: n,
                analyticsLocation: {
                    page: i.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                    object: i.qAy.BUTTON_CTA,
                },
                onClose: t,
                subscriptionTier: p,
            },
            b,
        ),
    );
}
