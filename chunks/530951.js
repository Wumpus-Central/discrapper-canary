n.d(t, { default: () => f });
var r = n(627968);
n(64700);
var o = n(976860),
    c = n(954571),
    l = n(244975),
    i = n(788868),
    a = n(652215),
    s = n(985018),
    u = n(774911),
    p = n(936037);
function O() {
    return (0, r.jsx)("div", {
        className: u.J,
        children: (0, r.jsx)("img", {
            src: p,
            className: u.s,
            alt: "",
        }),
    });
}
function f(e) {
    let { onClose: t, source: n } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o,
                c = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++)
                    (r = n[o]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
                return c;
            }
            if (
                ((c = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.getOwnPropertyNames(e);
                    for (r = 0; r < c.length; r++)
                        (n = c[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    (r = n[o]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
            return c;
        })(e, ["onClose", "source"]);
    return (0, r.jsx)(
        l.A,
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
                artElement: (0, r.jsx)(O, {}),
                type: i.e.FOR_LATER_MODAL_UPSELL,
                title: s.intl.string(s.t.w4DRbZ),
                body: s.intl.string(s.t.F6u3E3),
                glowUp: s.intl.string(s.t.F6u3E3),
                secondaryCTA: s.intl.string(s.t.PcTCB7),
                onSecondaryClick: function () {
                    c.default.track(a.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: a.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
                        location_object: a.ZSU.NAVIGATION_LINK,
                    }),
                        t(),
                        (0, o.pX)(a.BVt.APPLICATION_STORE);
                },
                showEnhancedUpsell: !0,
                analyticsSource: n,
                analyticsLocation: {
                    section: a.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
                    object: a.ZSU.BUTTON_CTA,
                },
                onClose: t,
            },
            u,
        ),
    );
}
