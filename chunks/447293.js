n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(325767);
let s = (e) => {
    var t,
        n,
        { width: s = 24, height: a = 24, color: l = 'currentColor', className: o, foreground: c } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['width', 'height', 'color', 'className', 'foreground']);
    return (0, r.jsx)(
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
        })(
            {
                width: s,
                height: a,
                viewBox: '0 0 24 24',
                className: o
            },
            (0, i.Z)(d)
        )),
        (n = n =
            {
                children: (0, r.jsx)('path', {
                    className: c,
                    fill: l,
                    d: 'M17.836 6.009A4.794 4.794 0 0 1 15.658 2h-3.439l-.005 13.78a2.892 2.892 0 0 1-2.885 2.782 2.893 2.893 0 0 1-2.89-2.89 2.894 2.894 0 0 1 2.89-2.89c.298 0 .583.048.853.133v-3.51a6.308 6.308 0 0 0-.853-.062A6.336 6.336 0 0 0 3 15.672a6.324 6.324 0 0 0 2.702 5.181A6.29 6.29 0 0 0 9.329 22a6.336 6.336 0 0 0 6.329-6.329V8.683c1.348.968 3 1.539 4.784 1.539V6.783c-.96 0-1.855-.285-2.605-.775v.001Z'
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
};
