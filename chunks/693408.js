n.d(t, { Z: () => i });
var o = n(255367);
n(73800);
var r = n(678738),
    c = n(362258);
function i(e) {
    return (0, o.jsx)(
        r.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    o.forEach(function (t) {
                        var o;
                        (o = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: o,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = o);
                    });
            }
            return e;
        })(
            {
                headingClassName: c.heading,
                headingVariant: 'text-xs/semibold',
                headingColor: 'none'
            },
            e
        )
    );
}
