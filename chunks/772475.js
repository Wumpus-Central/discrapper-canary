r.d(t, {
    A: () => d,
});
var n = r(627968);
r(64700);
var l = r(503698),
    s = r.n(l),
    a = r(397927),
    i = r(709562),
    o = r(985018),
    c = r(380519);

function u(e) {
    let { className: t, count: r } = e;
    return (0, n.jsxs)("div", {
        className: s()(c.zr, c.Yd, t),
        children: [
            (0, n.jsx)(a.nFg, {
                size: "md",
                color: "currentColor",
                className: c.Kk,
            }),
            null != r &&
                (0, n.jsx)(a.Text, {
                    color: "none",
                    className: c.U9,
                    variant: "text-md/normal",
                    children: r,
                }),
        ],
    });
}

function d(e) {
    let { count: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                return s;
            }
            if (
                ((s = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        s = Object.getOwnPropertyNames(e);
                    for (n = 0; n < s.length; n++)
                        (r = s[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            return s;
        })(e, ["count"]);
    return (0, n.jsx)(
        i.A,
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
                label: o.intl.string(o.t["jNqDh/"]),
                iconComponent: (e) => {
                    let { className: r } = e;
                    return (0, n.jsx)(u, {
                        className: r,
                        count: t,
                    });
                },
                tooltipPosition: "bottom",
            },
            r,
        ),
    );
}
