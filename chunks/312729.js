n.d(t, { o: () => a });
var r = n(200651);
n(192379);
var l = n(692547),
    o = n(390507),
    i = n(325767);
let a = (e) => {
    var t,
        n,
        a,
        s,
        { size: c = 'md', width: u, height: d, color: m = l.Z.colors.INTERACTIVE_NORMAL } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['size', 'width', 'height', 'color']);
    let f = (0, o.m)(c),
        v = null != (a = null == f ? void 0 : f.width) ? a : u,
        g = null != (s = null == f ? void 0 : f.height) ? s : d;
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
        })({}, (0, i.Z)(p))),
        (n = n =
            {
                xmlns: 'http://www.w3.org/2000/svg',
                width: v,
                height: g,
                fill: 'none',
                viewBox: '0 0 32 32',
                children: [
                    (0, r.jsx)('path', {
                        d: 'M169.545 229.312v7.919l14.838-10.253v46.348h7.669v-55.434h-6.169l-16.338 11.42ZM225.979 274.576c13.087 0 21.34-11.003 21.34-28.842 0-17.756-8.253-29.093-21.34-29.093-13.004 0-21.173 11.254-21.173 29.009 0 17.923 8.169 28.926 21.173 28.926Zm0-7.335c-8.419 0-13.004-8.336-13.004-21.591 0-13.087 4.585-21.673 13.004-21.673 8.503 0 13.171 8.669 13.171 21.757 0 13.171-4.668 21.507-13.171 21.507Z',
                        style: {
                            fill: 'string' == typeof m ? m : m.css,
                            fillRule: 'nonzero'
                        },
                        transform: 'translate(-24.102 -30.774) scale(.19361)'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M137.108 31.459a160.22 160.22 0 0 0-30.316-2.894c-88.439 0-160.24 71.801-160.24 160.241 0 88.439 71.801 160.24 160.24 160.24 88.499 0 160.241-71.742 160.241-160.24h-31.365c0 71.176-57.699 128.876-128.876 128.876-71.128 0-128.876-57.748-128.876-128.876 0-71.129 57.748-128.877 128.876-128.877 8.183 0 16.347.78 24.382 2.328l5.934-30.798Z',
                        style: { fill: 'string' == typeof m ? m : m.css },
                        transform: 'matrix(.0886 .03775 -.03775 .0886 14.284 -4.317)'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z',
                        style: { fill: 'string' == typeof m ? m : m.css },
                        transform: 'matrix(.0222 .01458 -.04451 .06777 28.52 -8.53)'
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
};
