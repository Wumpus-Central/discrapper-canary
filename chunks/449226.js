n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(755721),
    s = n(481060),
    o = n(824804);
function c(e) {
    var t, n;
    let { checked: i, onChange: c, disabled: d, className: u, tooltipProps: m } = e,
        g = (e) => {
            e.stopPropagation(), e.preventDefault();
        };
    return (0, r.jsx)(
        s.P3F,
        ((t = (function (e) {
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
                onClick: g,
                onMouseDown: g,
                onMouseUp: g,
                className: l()(o.switch, u),
            },
            m,
        )),
        (n = n =
            {
                children: (0, r.jsx)(a.T2, {
                    checked: i,
                    onChange: c,
                    disabled: d,
                }),
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
    );
}
