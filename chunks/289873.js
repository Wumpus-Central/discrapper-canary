n.d(t, {
    t: () => m,
    y: () => E,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(844222),
    l = n(460890),
    c = n(423161);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var m = (function (e) {
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
    var t;
    let { type: n = "wanderingCubes", animated: a = !0, className: u, itemClassName: f } = e,
        h = _(e, ["type", "animated", "className", "itemClassName"]),
        { i18n: m } = (0, l.G9)(),
        { reducedMotion: E } = i.useContext(o.C),
        b = E.enabled ? g(n) : n,
        y = null != (t = h["aria-label"]) ? t : m.SPINNER_LOADING_LABEL;
    if ("spinningCircle" === b || "spinningCircleSimple" === b)
        return (0, r.jsx)(
            "div",
            p(
                d(
                    {
                        className: s()(c.spinner, c[b], u, { [c.stopAnimation]: !a }),
                        role: "img",
                    },
                    h,
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
                                                className: s()(c.path, c.path3, f),
                                                cx: "50",
                                                cy: "50",
                                                r: "20",
                                            }),
                                            (0, r.jsx)("circle", {
                                                className: s()(c.path, c.path2, f),
                                                cx: "50",
                                                cy: "50",
                                                r: "20",
                                            }),
                                        ],
                                    }),
                                (0, r.jsx)("circle", {
                                    className: s()(c.path, f),
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
    let O = s()(c.item, f);
    return (0, r.jsx)(
        "span",
        p(
            d(
                {
                    className: s()(c.spinner, u, { [c.stopAnimation]: !a }),
                    role: "img",
                    "aria-label": y,
                },
                h,
            ),
            {
                children: (0, r.jsxs)("span", {
                    className: s()(c.inner, c[b]),
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
E.Type = m;
