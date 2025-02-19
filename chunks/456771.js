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
        })({}, (0, i.Z)(c))),
        (n = n =
            {
                width: s,
                height: a,
                viewBox: '0 0 24 24',
                children: [
                    (0, r.jsx)('path', {
                        d: 'M2.36002 2.35999V7.39991H7.39994V2.35999H2.36002ZM5.96009 5.96006H3.80009V3.80006H5.96009V5.96006Z',
                        fill: l,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        className: o
                    }),
                    (0, r.jsx)('path', {
                        d: 'M2.36002 14.5999V19.6401H7.39994V14.5999H2.36002ZM5.96009 18.2002H3.80009V16.0402H5.96009V18.2002Z',
                        fill: l,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        className: o
                    }),
                    (0, r.jsx)('path', {
                        d: 'M14.6001 2.35999V7.39991H19.64V2.35999H14.6001ZM18.2 5.96006H16.04V3.80006H18.2V5.96006Z',
                        fill: l,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        className: o
                    }),
                    (0, r.jsx)('path', {
                        d: 'M18.2 8.84003V13.16H14.6001V14.5999H19.64V8.84003H18.2Z',
                        fill: l,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        className: o
                    }),
                    (0, r.jsx)('path', {
                        d: 'M14.6001 16.0402V19.64H16.04V17.48H18.2V19.64H19.64V16.0402H14.6001Z',
                        fill: l,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        className: o
                    }),
                    (0, r.jsx)('path', {
                        d: 'M8.84006 2.35999V3.80006H11.72V7.39991H13.1601V2.35999H8.84006Z',
                        fill: l,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        className: o
                    }),
                    (0, r.jsx)('path', {
                        d: 'M11.72 8.84003V11.7202H8.84006V16.0402H11.72V19.64H13.1601V14.5999H10.2801V13.16H13.1601V10.2801H14.6001V11.7202H16.04V8.84003H11.72Z',
                        fill: l,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        className: o
                    }),
                    (0, r.jsx)('path', {
                        d: 'M10.2801 17.48H8.84006V19.64H10.2801V17.48Z',
                        fill: l,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        className: o
                    }),
                    (0, r.jsx)('path', {
                        d: 'M7.39999 11.7202H5.23999V13.1601H7.39999V11.7202Z',
                        fill: l,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        className: o
                    }),
                    (0, r.jsx)('path', {
                        d: 'M8.84001 5.23999V8.84006H2.36002V13.1601H3.80009V10.2801H10.2801V5.23999H8.84001Z',
                        fill: l,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        className: o
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
