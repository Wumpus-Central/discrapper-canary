n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    i = n(965860);
let c = (e) => {
    let { aspectRatio: t, style: n, className: o, children: c } = e;
    return (0, r.jsx)('div', {
        className: a()(i.outer, o),
        style: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({ paddingTop: ''.concat((1 / t) * 100, '%') }, n),
        children: (0, r.jsx)('div', {
            className: i.inner,
            children: c
        })
    });
};
