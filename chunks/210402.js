r.d(t, {
    default: () => u,
});
var n = r(627968);
r(64700);
var o = r(87719),
    c = r(244975),
    a = r(788868),
    l = r(652215),
    i = r(985018),
    p = r(451067),
    s = r(196436);

function u(e) {
    let { onClose: t, analyticsSource: r, onLearnMore: u } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                c = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
                return c;
            }
            if (
                ((c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.getOwnPropertyNames(e);
                    for (n = 0; n < c.length; n++)
                        (r = c[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            return c;
        })(e, ["onClose", "analyticsSource", "onLearnMore"]),
        b = a.pe.TIER_2,
        y = i.intl.format(i.t.hDMlqD, {
            onLearnMore: function () {
                null == u || u(), t(), (0, o.Z)();
            },
        });
    return (0, n.jsx)(
        c.A,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                artURL: s.A,
                artContainerClassName: p.z,
                type: a.e.VIDEO_BACKGROUNDS_MODAL,
                title: i.intl.string(i.t.fHqiDW),
                body: y,
                glowUp: y,
                analyticsSource: r,
                analyticsLocation: {
                    page: l.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                    object: l.ZSU.BUTTON_CTA,
                },
                onClose: t,
                subscriptionTier: b,
            },
            f,
        ),
    );
}
