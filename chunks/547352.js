r.d(t, { default: () => i });
var n = r(627968);
r(64700);
var o = r(87719),
    c = r(244975),
    l = r(788868),
    a = r(652215),
    f = r(985018),
    p = r(399703);
function i(e) {
    let { onClose: t, source: r } = e,
        i = (function (e, t) {
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
        })(e, ["onClose", "source"]),
        u = f.intl.format(f.t.WMO9po, {
            onAndMore: function () {
                t(), (0, o.Z)();
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
                artURL: p.A,
                type: l.e.PREMIUM_GUILD_IDENTITY_MODAL,
                title: f.intl.string(f.t.kOEBKP),
                body: u,
                glowUp: u,
                analyticsSource: r,
                analyticsLocation: {
                    section: a.JJy.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL,
                    object: a.ZSU.BUTTON_CTA,
                },
                onClose: t,
            },
            i,
        ),
    );
}
