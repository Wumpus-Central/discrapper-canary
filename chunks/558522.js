t.d(n, { Z: () => i });
var o = t(200651),
    r = t(192379),
    a = t(325767);
let i = r.forwardRef(function (e, n) {
    var t,
        r,
        { width: i = 24, height: c = 24, color: l = 'currentColor', foreground: s } = e,
        d = (function (e, n) {
            if (null == e) return {};
            var t,
                o,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        o,
                        r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) (t = a[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++) (t = a[o]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['width', 'height', 'color', 'foreground']);
    return (0, o.jsx)(
        'svg',
        ((t = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    o = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    o.forEach(function (n) {
                        var o;
                        (o = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: o,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = o);
                    });
            }
            return e;
        })({}, (0, a.Z)(d))),
        (r = r =
            {
                ref: n,
                width: i,
                height: c,
                viewBox: '0 0 24 24',
                children: (0, o.jsx)('path', {
                    className: s,
                    fill: l,
                    d: 'M21 5V11.59L18 8.59L14 12.59L10 8.59L6 12.59L3 9.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5ZM18 11.42L21 14.42V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12.42L6 15.42L10 11.42L14 15.42L18 11.42Z'
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, o);
                  }
                  return t;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
});
