n.d(t, { Z: () => s });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    o = n(325767),
    a = n(58482);
function s(e) {
    var t,
        n,
        { width: r = 16, height: s = 16, color: c = 'currentColor', foreground: d, className: u } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) ((n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) ((n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['width', 'height', 'color', 'foreground', 'className']);
    return (0, i.jsx)(
        'svg',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        ((i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i));
                    }));
            }
            return e;
        })({ className: l()(a.updateAvailable, u) }, (0, o.Z)(p))),
        (n = n =
            {
                width: r,
                height: s,
                viewBox: '0 0 24 24',
                children: (0, i.jsxs)('g', {
                    fill: 'none',
                    fillRule: 'evenodd',
                    children: [
                        (0, i.jsx)('path', {
                            fill: c,
                            className: d,
                            fillRule: 'nonzero',
                            d: 'M5,8 L9,12 L6,12 C6,15.31 8.69,18 12,18 C13.01,18 13.97,17.75 14.8,17.3 L16.26,18.76 C15.03,19.54 13.57,20 12,20 C7.58,20 4,16.42 4,12 L1,12 L5,8 Z M18,12 C18,8.69 15.31,6 12,6 C10.99,6 10.03,6.25 9.2,6.7 L7.74,5.24 C8.97,4.46 10.43,4 12,4 C16.42,4 20,7.58 20,12 L23,12 L19,16 L15,12 L18,12 Z'
                        }),
                        (0, i.jsx)('polygon', { points: '24 0 0 0 0 24 24 24' })
                    ]
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
