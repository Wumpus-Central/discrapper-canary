n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(325767);
function s(e) {
    var t,
        n,
        { width: s = 24, height: a = 24, color: l = 'currentColor', foreground: o } = e,
        c = (function (e, t) {
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
        })(e, ['width', 'height', 'color', 'foreground']);
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
        })({}, (0, i.Z)(c))),
        (n = n =
            {
                width: s,
                height: a,
                viewBox: '0 0 24 24',
                children: (0, r.jsx)('path', {
                    className: o,
                    fill: l,
                    d: 'M13.5605 11L11.2646 8.706L12.6842 7.294L17.4023 12.009L12.6822 16.708L11.2656 15.292L13.5685 13H2C2.50429 18.045 6.7842 22 11.9744 22C17.5025 22 22 17.513 22 12C22 6.487 17.5025 2 11.9744 2C6.7842 2 2.50429 5.954 2 11H13.5605Z'
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
}
