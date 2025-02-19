n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(960259),
    s = n(672917),
    a = n(325767);
let l = (0, i.hN)(
    function (e) {
        var t,
            n,
            { width: i = 24, height: s = 24, color: l = 'currentColor', foreground: o } = e,
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
            })({}, (0, a.Z)(c))),
            (n = n =
                {
                    width: i,
                    height: s,
                    viewBox: '0 0 32 32',
                    children: (0, r.jsx)('path', {
                        fill: l,
                        className: o,
                        d: 'M16 1L7 10V22L16 31L25 22V10L16 1ZM20.62 11.27L16.5 7.16V2.91L23.62 10.03L20.62 11.27ZM12 19.93V12.07L16 8.07L20 12.07V19.93L16 23.93L12 19.93ZM15.5 7.16L11.38 11.28L8.38 10.04L15.5 2.91V7.16ZM11 12.2V19.8L8 21.04V10.96L11 12.2ZM11.38 20.73L15.5 24.85V29.09L8.38 21.97L11.38 20.73ZM16.5 24.84L20.62 20.72L23.62 21.96L16.5 29.09V24.84ZM21 19.8V12.2L24 10.96V21.05L21 19.8Z'
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
    },
    s.X,
    void 0,
    { size: 24 }
);
