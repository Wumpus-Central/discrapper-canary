t.d(n, { Z: () => a });
var o = t(200651);
t(192379);
var r = t(678738),
    c = t(362258);
function a(e) {
    return (0, o.jsx)(
        r.Z,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    o = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    o.forEach(function (n) {
                        var o;
                        (o = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: o,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = o);
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
