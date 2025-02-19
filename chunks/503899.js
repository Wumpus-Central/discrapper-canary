n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(325767);
function s(e) {
    var t,
        n,
        { width: s = 18, height: a = 18, color: l = 'currentColor' } = e,
        o = (function (e, t) {
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
        })(e, ['width', 'height', 'color']);
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
        })({}, (0, i.Z)(o))),
        (n = n =
            {
                width: s,
                height: a,
                viewBox: '0 0 18 18',
                children: [
                    (0, r.jsx)('path', {
                        fill: l,
                        d: 'M1.8 1.8V6H6V1.8H1.8Zm3 3H3V3h1.8v1.8ZM1.8 12v4.2H6V12H1.8Zm3 3H3v-1.8h1.8V15ZM12 1.8V6h4.2V1.8H12Zm3 3h-1.8V3H15v1.8ZM7.2 1.8V3h2.4v3h1.2V1.8H7.2ZM6 9.6H4.2v1.2H6V9.6Z'
                    }),
                    (0, r.jsx)('path', {
                        fill: l,
                        d: 'M7.2 4.2v3H1.8v3.6H3V8.4h5.4V4.2H7.2ZM12.417 10.75c-.92 0-1.667.748-1.667 1.667 0 .92.748 1.666 1.667 1.666s1.666-.747 1.666-1.666c0-.92-.747-1.667-1.666-1.667Z'
                    }),
                    (0, r.jsx)('path', {
                        fill: l,
                        d: 'M15.75 9.5h-.804a.834.834 0 0 1-.694-.37l-.338-.509a.834.834 0 0 0-.693-.371h-1.608a.835.835 0 0 0-.694.37l-.338.51a.833.833 0 0 1-.694.37h-.804a.833.833 0 0 0-.833.833v4.584c0 .46.373.833.833.833h6.667c.46 0 .833-.373.833-.833v-4.584a.834.834 0 0 0-.833-.833Zm-3.333 5.417a2.503 2.503 0 0 1-2.5-2.5c0-1.379 1.12-2.5 2.5-2.5 1.378 0 2.5 1.121 2.5 2.5s-1.122 2.5-2.5 2.5Z'
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
