n.d(t, { A: () => h }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(835245),
    o = n(397927),
    c = n(709562),
    u = n(985018),
    d = n(529414);
function f(e) {
    let { width: t = 24, height: n = 24, isBadged: i = !1 } = e,
        [a] = l.useState(() => (0, s.A)());
    return (0, r.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, r.jsx)("rect", {
                            fill: "white",
                            width: "100%",
                            height: "100%",
                        }),
                        i &&
                            (0, r.jsx)("circle", {
                                cx: "20",
                                cy: "19",
                                r: "10",
                                fill: "black",
                            }),
                    ],
                }),
            }),
            (0, r.jsx)("g", {
                mask: "url(#".concat(a, ")"),
                children: (0, r.jsx)(o.cJi, {}),
            }),
        ],
    });
}
function p(e) {
    let { className: t, numRequestToSpeak: n } = e,
        l = n > 0;
    return (0, r.jsxs)("div", {
        className: a()(d.v, t),
        children: [
            (0, r.jsx)(f, { isBadged: l }),
            l
                ? (0, r.jsx)(o.Text, {
                      className: d.F,
                      variant: "text-xs/semibold",
                      children: n > 99 ? "99+" : n,
                  })
                : null,
        ],
    });
}
function h(e) {
    let {
            toggleRequestToSpeakSidebar: t,
            showRequestToSpeakSidebar: n,
            className: i,
            numRequestToSpeak: a,
            onClick: s,
        } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, [
            "toggleRequestToSpeakSidebar",
            "showRequestToSpeakSidebar",
            "className",
            "numRequestToSpeak",
            "onClick",
        ]),
        d = l.useCallback(() => {
            null == s || s(), t();
        }, [s, t]);
    return (0, r.jsx)(
        c.A,
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
                onClick: d,
                label: n ? u.intl.string(u.t.gKGz7A) : u.intl.string(u.t.ImQ4dW),
                className: i,
                iconComponent: () =>
                    (0, r.jsx)(p, {
                        numRequestToSpeak: a,
                        className: i,
                    }),
            },
            o,
        ),
    );
}
