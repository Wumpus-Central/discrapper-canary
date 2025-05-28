n.d(t, { Z: () => u });
var r = n(255367),
    s = n(73800),
    o = n(866442),
    a = n(481060),
    i = n(409667);
function l(e) {
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
function c(e, t) {
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
let u = function (e) {
    let { colorKey: t, value: n, onChange: u, title: d } = e,
        p = s.useRef(null);
    return (0, r.jsxs)(a.xJW, {
        children: [
            (0, r.jsx)(a.vwX, {
                tag: a.RB0.H5,
                children: d
            }),
            (0, r.jsx)(a.yRy, {
                targetElementRef: p,
                renderPopout: (e) =>
                    (0, r.jsx)(
                        a.Z$W,
                        c(l({}, e), {
                            value: n,
                            onChange: (e) => u(t, (0, o.Rf)(e))
                        })
                    ),
                children: (e) =>
                    (0, r.jsx)(
                        a.P3F,
                        c(l({}, e), {
                            innerRef: p,
                            tag: 'span',
                            'aria-label': 'Select a color',
                            className: i.swatchContainer,
                            style: { backgroundColor: n },
                            children: (0, r.jsx)(a.ilE, {
                                size: 'xs',
                                color: 'currentColor',
                                className: i.swatchIcon
                            })
                        })
                    )
            })
        ]
    });
};
