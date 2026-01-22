n.d(t, {
    B: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(855036),
    l = n.n(o),
    c = n(927556);

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
let m = i.forwardRef(function (e, t) {
        let [n, ...i] = [e, t],
            {
                as: a = "div",
                gap: o = 8,
                direction: l = "vertical",
                align: u = "stretch",
                justify: f = "start",
                wrap: h = !1,
                padding: m = 0,
                fullWidth: b = !0,
                style: y,
                className: O,
                children: A,
            } = n,
            v = _(n, [
                "as",
                "gap",
                "direction",
                "align",
                "justify",
                "wrap",
                "padding",
                "fullWidth",
                "style",
                "className",
                "children",
            ]),
            [S] = i;
        return (0, r.jsx)(
            a,
            p(
                d(
                    {
                        ref: S,
                        "data-align": u,
                        "data-justify": f,
                        "data-direction": l,
                        "data-wrap": h,
                        "data-full-width": b,
                        className: s()(c.t, O),
                        style: d(
                            p(d({}, y), {
                                gap: g(o),
                            }),
                            E(m),
                        ),
                    },
                    v,
                ),
                {
                    children: A,
                },
            ),
        );
    }),
    g = (e) => "var(--space-".concat(e, ")"),
    E = (e) =>
        "number" == typeof e || "string" == typeof e
            ? {
                  padding: g(e),
              }
            : Object.entries(e).reduce((e, t) => {
                  let [n, r] = t;
                  return (e["padding".concat(l()(n))] = g(r)), e;
              }, {});
