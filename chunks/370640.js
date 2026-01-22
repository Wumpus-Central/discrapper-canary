t.r(r), t.d(r, { default: () => p });
var c = t(627968),
    n = t(64700),
    o = t(868062),
    i = t(247366),
    s = t(132091);
function a(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            c = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            c.forEach(function (r) {
                var c;
                (c = t[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[r] = c);
            });
    }
    return e;
}
let b = (0, o.kl)((e) => {
        var r, t;
        return (0, c.jsxs)("div", {
            className: s.iE,
            children: [
                (0, c.jsx)("div", {
                    className: s.Lr,
                    children: (0, c.jsx)(i.Saturation, a({}, e)),
                }),
                (0, c.jsx)("div", {
                    className: s.lG,
                    children: (0, c.jsx)(
                        i.Hue,
                        ((r = a({}, e)),
                        (t = t = { direction: "horizontal" }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
                            : (function (e, r) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var c = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, c);
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
    p = n.memo(b);
