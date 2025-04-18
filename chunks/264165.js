n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(712796);
let o = (e) => {
    let { aspectRatio: t, style: n, className: i, children: o } = e;
    return (0, r.jsx)('div', {
        className: l()(a.outer, i),
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
            className: a.inner,
            children: o
        })
    });
};
