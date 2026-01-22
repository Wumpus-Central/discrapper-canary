a.d(t, {
    A: () => i,
});
var c = a(627968);
a(64700);
var n = a(397927),
    l = a(688810),
    d = a(384059),
    r = a(709562),
    o = a(985018);

function i(e) {
    let { onClick: t } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var a,
                c,
                n,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (n = 0, a = Reflect.ownKeys(e); n < a.length; n++)
                    (c = a[n]),
                        !(t.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (l[c] = e[c]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var a,
                        c,
                        n = {},
                        l = Object.getOwnPropertyNames(e);
                    for (c = 0; c < l.length; c++)
                        (a = l[c]),
                            !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
                    return n;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
                    (c = a[n]),
                        !(t.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (l[c] = e[c]);
            return l;
        })(e, ["onClick"]),
        { parentAnalyticsLocation: i } = (0, l.Ay)();
    return (0, c.jsx)(
        r.A,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {},
                    c = Object.keys(a);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (c = c.concat(
                        Object.getOwnPropertySymbols(a).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(a, e).enumerable;
                        }),
                    )),
                    c.forEach(function (t) {
                        var c;
                        (c = a[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: c,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = c);
                    });
            }
            return e;
        })(
            {
                label: o.intl.string(o.t["UKOtz+"]),
                iconComponent: n.jNK,
                tooltipPosition: "bottom",
                onClick: (e) => {
                    (0, d.X)(i, d.O.MORE), t(e);
                },
            },
            a,
        ),
    );
}
