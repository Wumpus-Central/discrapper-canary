n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(569803);
let s = (e) => {
    let { aspectRatio: t, style: n, className: i, children: s } = e;
    return (0, r.jsx)("div", {
        className: l()(a.A, i),
        style: (function (e) {
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
                paddingTop: "".concat((1 / t) * 100, "%"),
            },
            n,
        ),
        children: (0, r.jsx)("div", {
            className: a.v,
            children: s,
        }),
    });
};
