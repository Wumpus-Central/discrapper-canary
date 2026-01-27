n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(843282),
    l = n(435371),
    s = n(397927),
    a = n(371509),
    o = n(721267);

function c(e) {
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
}

function d(e) {
    let { title: t, value: n, onChange: l, options: c, isDisabled: d = !1 } = e;
    return (0, r.jsxs)("div", {
        className: o.ar,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: d ? "text-muted" : "text-strong",
                className: o.DD,
                children: t,
            }),
            (0, r.jsx)(i.Te, {
                variant: "text-only",
                className: o.Lt,
                options: c,
                value: n,
                onChange: (e) => l(e),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return (0, r.jsx)(a.A, {
                        option: t,
                    });
                },
                renderOptionLabel: (e) =>
                    (0, r.jsx)(a.A, {
                        option: e,
                    }),
                isDisabled: d,
                "data-migration-pending": !0,
            }),
        ],
    });
}

function u(e) {
    let { tooltipText: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["tooltipText"]);
    return (0, r.jsx)(l.m_, {
        text: t,
        asContainer: !0,
        children: (0, r.jsx)(d, c({}, n)),
    });
}

function _(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, r.jsx)(u, c({}, e)) : (0, r.jsx)(d, c({}, e));
}
