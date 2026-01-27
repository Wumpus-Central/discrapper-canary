n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(397927),
    s = n(6976);

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

function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
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
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}

function E(e) {
    var t, n;
    let { alt: l } = e,
        o = u(e, ["alt"]),
        [E, d] = i.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            E &&
                (0, r.jsx)(a.y$y, {
                    type: a.y$y.Type.LOW_MOTION,
                    className: s.wG,
                }),
            (0, r.jsx)(
                "img",
                ((t = c({}, o)),
                (n = n =
                    {
                        alt: l,
                        onLoad: () => d(!1),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            ),
        ],
    });
}

function d(e) {
    let { src: t, backgroundSrc: n, alt: i, aspectRatio: l, className: a, imageChildClassName: d } = e,
        _ = u(e, ["src", "backgroundSrc", "alt", "aspectRatio", "className", "imageChildClassName"]);
    return (0, r.jsxs)("div", {
        className: o()(s.kL, a),
        children: [
            (0, r.jsx)("img", {
                src: n,
                alt: i,
                className: s.iL,
            }),
            (0, r.jsx)("div", {
                className: s.CC,
            }),
            (0, r.jsx)("div", {
                style: {
                    aspectRatio: l,
                },
                className: s.ZS,
                children: (0, r.jsx)(
                    E,
                    c(
                        {
                            src: t,
                            alt: i,
                            className: o()(s.Sl, d),
                        },
                        _,
                    ),
                ),
            }),
        ],
    });
}
