n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var l = n(325767);
function a(e) {
    var t,
        n,
        { width: a = 16, height: s = 16, color: i = 'currentColor', foreground: o } = e,
        E = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
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
        })({}, (0, l.Z)(E))),
        (n = n =
            {
                width: a,
                height: s,
                viewBox: '0 0 16 16',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                    (0, r.jsx)('path', {
                        d: 'M8 6.66659C9.47275 6.66659 10.6667 5.47268 10.6667 3.99992C10.6667 2.52716 9.47275 1.33325 8 1.33325C6.52724 1.33325 5.33333 2.52716 5.33333 3.99992C5.33333 5.47268 6.52724 6.66659 8 6.66659Z',
                        className: null != o ? o : void 0,
                        fill: i
                    }),
                    (0, r.jsx)('path', {
                        d: 'M7.67717 7.33325C4.16709 7.33325 1.32161 10.1787 1.32161 13.6888C1.32161 14.2288 1.75938 14.6666 2.29939 14.6666H2.44652C2.60638 14.6666 2.74261 14.5527 2.78231 14.3979C2.97253 13.656 3.34264 12.9517 3.66169 12.4585C3.75185 12.3191 3.94872 12.3955 3.9322 12.5607L3.75826 14.3001C3.73864 14.4963 3.89273 14.6666 4.08994 14.6666H10.1602C9.75 13.8828 9.74609 12.9922 9.71094 12.7266V12.0664C9.71094 11.8086 9.84375 11.2539 10.2109 10.9648C10.4926 10.7431 10.9084 10.4775 11.1914 10.2969C11.0898 10.3555 11.3419 10.2008 11.1914 10.2969C11.3906 10.168 11.8047 9.91016 12.0234 9.78516C12.4023 9.58594 12.5625 9.5 13.082 9.5C12.2578 8.48047 10.4879 7.33325 8.29939 7.33325H7.67717Z',
                        className: null != o ? o : void 0,
                        fill: i
                    }),
                    (0, r.jsx)('path', {
                        'fill-rule': 'evenodd',
                        'clip-rule': 'evenodd',
                        d: 'M11.0366 11.5588C10.8379 11.6803 10.7166 11.8965 10.7166 12.1294V12.7063C10.7166 14.1173 11.5476 15.396 12.8371 15.9691C12.9294 16.0102 13.0348 16.0102 13.1271 15.9691C14.4166 15.396 15.2476 14.1173 15.2476 12.7063V12.1294C15.2476 11.8965 15.1263 11.6803 14.9275 11.5588L13.3759 10.6106C13.1341 10.4628 12.8301 10.4628 12.5883 10.6106L11.0366 11.5588ZM11.4718 12.1779L12.9821 11.2549V13.2647H11.5276C11.4909 13.0831 11.4718 12.8962 11.4718 12.7063V12.1779ZM12.9821 15.201L12.9821 13.2647H14.4366C14.2698 14.0894 13.7393 14.805 12.9821 15.201Z',
                        className: null != o ? o : void 0,
                        fill: i
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
