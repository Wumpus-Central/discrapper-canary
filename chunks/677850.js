n.d(t, { B: () => u });
var r = n(951288),
    i = n(931989),
    a = n(396704);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function u(e) {
    var { src: t, dynamicDataBinding: n } = e,
        o = l(e, ["src", "dynamicDataBinding"]);
    let { status: c, buffer: u } = (0, a.VG)(t);
    return c === a.Jt.Loading
        ? null
        : (0, r.jsx)(
              i.v,
              s(
                  {
                      buffer: u,
                      artboardProperties: {},
                      dynamicDataBinding: n,
                  },
                  o,
              ),
              t,
          );
}
