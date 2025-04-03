n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    c = n(481060),
    s = n(296205);
function a(e) {
    var t, n;
    let { checked: i, onChange: a, disabled: l, className: u, tooltipProps: d } = e,
        f = (e) => {
            e.stopPropagation(), e.preventDefault();
        };
    return (0, r.jsx)(
        c.P3F,
        ((t = (function (e) {
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
        })(
            {
                onClick: f,
                onMouseDown: f,
                onMouseUp: f,
                className: o()(s.switch, u)
            },
            d
        )),
        (n = n =
            {
                children: (0, r.jsx)(c.rsf, {
                    checked: i,
                    onChange: a,
                    disabled: l
                })
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
        t)
    );
}
