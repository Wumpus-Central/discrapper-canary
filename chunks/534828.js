t.r(r), t.d(r, { default: () => u });
var n = t(54381),
    o = t(473749),
    c = t(167490),
    i = t(505609),
    a = t(858606);
function s(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (r) {
                var n;
                (n = t[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[r] = n);
            });
    }
    return e;
}
let p = (0, c.iS)((e) => {
        var r, t;
        return (0, n.jsxs)("div", {
            className: a.wrapper,
            children: [
                (0, n.jsx)("div", {
                    className: a.saturation,
                    children: (0, n.jsx)(i.Saturation, s({}, e)),
                }),
                (0, n.jsx)("div", {
                    className: a.hue,
                    children: (0, n.jsx)(
                        i.Hue,
                        ((r = s({}, e)),
                        (t = t = { direction: "horizontal" }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
                            : (function (e, r) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, n);
                                  }
                                  return t;
                              })(Object(t)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                              }),
                        r),
                    ),
                }),
            ],
        });
    }),
    u = o.memo(p);
