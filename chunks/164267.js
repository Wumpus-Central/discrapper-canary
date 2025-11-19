r.r(t), r.d(t, { default: () => j });
var n = r(54381),
    o = r(473749),
    i = r(120356),
    c = r.n(i),
    s = r(167490),
    u = r(505609),
    a = r(417154);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function l() {
    return (0, n.jsx)("div", { className: a.customPointer });
}
function b() {
    return (0, n.jsx)("div", { className: c()(a.customPointer, a.huePointer) });
}
let O = (0, s.iS)((e) =>
        (0, n.jsxs)("div", {
            className: a.pickerWrapper,
            children: [
                (0, n.jsx)("div", {
                    className: a.saturation,
                    children: (0, n.jsx)(u.Saturation, f(p({}, e), { pointer: l })),
                }),
                (0, n.jsx)("div", {
                    className: a.hue,
                    children: (0, n.jsx)(
                        u.Hue,
                        f(p({}, e), {
                            direction: "horizontal",
                            pointer: b,
                        }),
                    ),
                }),
            ],
        }),
    ),
    j = o.memo(O);
