n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(772848),
    o = n(481060),
    c = n(871499),
    d = n(388032),
    u = n(6762);
function p(e) {
    let { width: t = 24, height: n = 24, isBadged: l = !1 } = e,
        [a] = i.useState(() => (0, s.Z)());
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
                        l &&
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
                children: (0, r.jsx)(o.E0I, {}),
            }),
        ],
    });
}
function h(e) {
    let { className: t, numRequestToSpeak: n } = e,
        i = n > 0;
    return (0, r.jsxs)("div", {
        className: a()(u.raisedHandIcon, t),
        children: [
            (0, r.jsx)(p, { isBadged: i }),
            i
                ? (0, r.jsx)(o.Text, {
                      className: u.raisedHandCount,
                      variant: "text-xs/semibold",
                      children: n > 99 ? "99+" : n,
                  })
                : null,
        ],
    });
}
function f(e) {
    var {
            toggleRequestToSpeakSidebar: t,
            showRequestToSpeakSidebar: n,
            className: l,
            numRequestToSpeak: a,
            onClick: s,
        } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, [
            "toggleRequestToSpeakSidebar",
            "showRequestToSpeakSidebar",
            "className",
            "numRequestToSpeak",
            "onClick",
        ]);
    let u = i.useCallback(() => {
        null == s || s(), t();
    }, [s, t]);
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
                onClick: u,
                label: n ? d.intl.string(d.t.gKGz7A) : d.intl.string(d.t.ImQ4dW),
                className: l,
                iconComponent: () =>
                    (0, r.jsx)(h, {
                        numRequestToSpeak: a,
                        className: l,
                    }),
            },
            o,
        ),
    );
}
