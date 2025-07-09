a.d(t, { Z: () => l });
var n = a(255367);
a(73800);
var r = a(325767);
function l(e) {
    var t,
        a,
        { width: l = 12, height: i = 12, color: s = 'currentColor', foreground: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var a,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var a,
                        n,
                        r = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) ((a = l[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++) ((a = l[n]), !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
            }
            return r;
        })(e, ['width', 'height', 'color', 'foreground']);
    return (0, n.jsx)(
        'svg',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(a);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(a).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(a, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = a[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })({}, (0, r.Z)(c))),
        (a = a =
            {
                width: l,
                height: i,
                viewBox: '0 0 12 12',
                children: (0, n.jsx)('path', {
                    stroke: s,
                    className: o,
                    fill: 'none',
                    d: 'M8.5,3.5 L6,6 L3.5,3.5 L6,6 L3.5,8.5 L6,6 L8.5,8.5 L6,6 L8.5,3.5 Z'
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(a)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
              }),
        t)
    );
}
