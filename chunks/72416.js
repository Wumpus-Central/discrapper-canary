n.d(t, { Z: () => i });
var r = n(200651);
n(192379);
var l = n(325767);
function i(e) {
    var t,
        n,
        { width: i = 24, height: o = 24, color: a = 'currentColor', foreground: s } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['width', 'height', 'color', 'foreground']);
    return (0, r.jsxs)(
        'svg',
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
        })({}, (0, l.Z)(c))),
        (n = n =
            {
                width: i,
                height: o,
                viewBox: '0 0 24 24',
                children: [
                    (0, r.jsx)('path', {
                        d: 'M7.19999 18C7.19999 17.3364 6.77 16.8 6.24019 16.8H3.3598C2.82999 16.8 2.39999 17.3364 2.39999 18V20.4C2.39999 21.0636 2.82999 21.6 3.3598 21.6H6.23923C6.76904 21.6 7.19903 21.0636 7.19903 20.4V18H7.19999Z',
                        fill: a,
                        className: s
                    }),
                    (0, r.jsx)('path', {
                        d: 'M14.4 10.6909C14.4 10.0876 13.9699 9.6 13.44 9.6H10.56C10.0301 9.6 9.60001 10.0876 9.60001 10.6909V20.5091C9.60001 21.1124 10.0301 21.6 10.56 21.6H13.44C13.9699 21.6 14.4 21.1124 14.4 20.5091V10.6909Z',
                        fill: a,
                        className: s
                    }),
                    (0, r.jsx)('path', {
                        d: 'M21.6 3.46667C21.6 2.8768 21.1699 2.4 20.64 2.4H17.76C17.2301 2.4 16.8 2.8768 16.8 3.46667V20.5333C16.8 21.1232 17.2301 21.6 17.76 21.6H20.64C21.1699 21.6 21.6 21.1232 21.6 20.5333V3.46667Z',
                        fill: a,
                        className: s
                    })
                ]
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
