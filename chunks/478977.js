n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var o = n(866442),
    s = n(481060),
    a = n(409667);
function i(e) {
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
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = function (e) {
    let { colorKey: t, value: n, onChange: c, title: d } = e;
    return (0, r.jsxs)(s.xJW, {
        children: [
            (0, r.jsx)(s.vwX, {
                tag: s.RB0.H5,
                children: d
            }),
            (0, r.jsx)(s.yRy, {
                renderPopout: (e) =>
                    (0, r.jsx)(
                        s.Z$W,
                        l(i({}, e), {
                            value: n,
                            onChange: (e) => c(t, (0, o.Rf)(e))
                        })
                    ),
                children: (e) =>
                    (0, r.jsx)(
                        s.P3F,
                        l(i({}, e), {
                            tag: 'span',
                            'aria-label': 'Select a color',
                            className: a.swatchContainer,
                            style: { backgroundColor: n },
                            children: (0, r.jsx)(s.ilE, {
                                size: 'xs',
                                color: 'currentColor',
                                className: a.swatchIcon
                            })
                        })
                    )
            })
        ]
    });
};
