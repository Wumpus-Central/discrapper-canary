t.r(r), t.d(r, { default: () => d });
var n = t(627968),
    c = t(64700),
    o = t(503698),
    i = t.n(o),
    s = t(868062),
    a = t(247366),
    l = t(464198);
function p(e) {
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
function u(e, r) {
    return (
        (r = null != r ? r : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (e, r) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e
    );
}
function b() {
    return (0, n.jsx)("div", { className: l.HM });
}
function f() {
    return (0, n.jsx)("div", { className: i()(l.HM, l.Cj) });
}
let j = (0, s.kl)((e) =>
        (0, n.jsxs)("div", {
            className: l.og,
            children: [
                (0, n.jsx)("div", {
                    className: l.Lr,
                    children: (0, n.jsx)(a.Saturation, u(p({}, e), { pointer: b })),
                }),
                (0, n.jsx)("div", {
                    className: l.lG,
                    children: (0, n.jsx)(
                        a.Hue,
                        u(p({}, e), {
                            direction: "horizontal",
                            pointer: f,
                        }),
                    ),
                }),
            ],
        }),
    ),
    d = c.memo(j);
