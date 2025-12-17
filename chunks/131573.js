n.d(t, {
    $: () => E,
    R: () => h,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(213305),
    l = n(402453),
    c = n(643836);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var h = (function (e) {
    return (
        (e.WANDERING_CUBES = "wanderingCubes"),
        (e.CHASING_DOTS = "chasingDots"),
        (e.PULSING_ELLIPSIS = "pulsingEllipsis"),
        (e.SPINNING_CIRCLE = "spinningCircle"),
        (e.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple"),
        (e.LOW_MOTION = "lowMotion"),
        e
    );
})({});
function g(e) {
    switch (e) {
        case "wanderingCubes":
        case "chasingDots":
            return "lowMotion";
        default:
            return e;
    }
}
function E(e) {
    var t,
        { type: n = "wanderingCubes", animated: a = !0, className: u, itemClassName: f } = e,
        m = _(e, ["type", "animated", "className", "itemClassName"]);
    let { i18n: h } = (0, l.ZF)(),
        { reducedMotion: E } = i.useContext(s.S),
        b = E.enabled ? g(n) : n,
        y = null != (t = m["aria-label"]) ? t : h.SPINNER_LOADING_LABEL;
    if ("spinningCircle" === b || "spinningCircleSimple" === b)
        return (0, r.jsx)(
            "div",
            p(
                d(
                    {
                        className: o()(c.spinner, c[b], u, { [c.stopAnimation]: !a }),
                        role: "img",
                    },
                    m,
                ),
                {
                    "aria-label": y,
                    children: (0, r.jsx)("div", {
                        className: c.spinningCircleInner,
                        children: (0, r.jsxs)("svg", {
                            className: c.circular,
                            viewBox: "25 25 50 50",
                            children: [
                                "spinningCircle" === b &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("circle", {
                                                className: o()(c.path, c.path3, f),
                                                cx: "50",
                                                cy: "50",
                                                r: "20",
                                            }),
                                            (0, r.jsx)("circle", {
                                                className: o()(c.path, c.path2, f),
                                                cx: "50",
                                                cy: "50",
                                                r: "20",
                                            }),
                                        ],
                                    }),
                                (0, r.jsx)("circle", {
                                    className: o()(c.path, f),
                                    cx: "50",
                                    cy: "50",
                                    r: "20",
                                }),
                            ],
                        }),
                    }),
                },
            ),
        );
    let O = o()(c.item, f);
    return (0, r.jsx)(
        "span",
        p(
            d(
                {
                    className: o()(c.spinner, u, { [c.stopAnimation]: !a }),
                    role: "img",
                    "aria-label": y,
                },
                m,
            ),
            {
                children: (0, r.jsxs)("span", {
                    className: o()(c.inner, c[b]),
                    children: [
                        (0, r.jsx)("span", { className: O }),
                        (0, r.jsx)("span", { className: O }),
                        "pulsingEllipsis" === b || "lowMotion" === b ? (0, r.jsx)("span", { className: O }) : null,
                    ],
                }),
            },
        ),
    );
}
E.Type = h;
