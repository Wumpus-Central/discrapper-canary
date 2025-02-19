n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(960259),
    s = n(410319),
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
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M29 2C29 2.55 28.55 3 28 3C27.45 3 27 2.55 27 2V1C27 0.45 27.45 0 28 0C28.55 0 29 0.45 29 1V2ZM2.94 25.94L4 24L5.06 25.94L7 27L5.06 28.06L4 30L2.94 28.06L1 27L2.94 25.94ZM28 5C27.45 5 27 5.45 27 6V7C27 7.55 27.45 8 28 8C28.55 8 29 7.55 29 7V6C29 5.45 28.56 5 28 5ZM30 3H31C31.56 3 32 3.45 32 4C32 4.55 31.55 5 31 5H30C29.45 5 29 4.55 29 4C29 3.45 29.45 3 30 3ZM26 3H25C24.45 3 24 3.45 24 4C24 4.55 24.45 5 25 5H26C26.55 5 27 4.55 27 4C27 3.45 26.56 3 26 3ZM15.6201 1.46002V7.12002L11.5001 11.23L7.50012 9.58002L15.6201 1.46002ZM24.7401 9.58002L16.6201 1.46002V7.12002L20.7401 11.23L24.7401 9.58002ZM7.12012 10.5L11.1201 12.16V19.76L7.12012 21.42V10.5ZM16.6201 24.8V30.46L24.7401 22.34L20.7401 20.68L16.6201 24.8ZM15.6201 30.46L7.50012 22.34L11.5001 20.68L15.6201 24.8V30.46ZM21.1201 19.76L25.1201 21.42V10.5L21.1201 12.16V19.76ZM19.7301 11.64L20.1201 12.03V19.89L16.1201 23.89L12.1201 19.89V19.38L19.7301 11.64ZM12.1201 17.95L19.0201 10.93L18.2401 10.15L12.1201 16.38V17.95ZM17.5301 9.44002L12.1201 14.95V12.03L16.1201 8.03002L17.5301 9.44002Z'
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
    s.i,
    void 0,
    { size: 24 }
);
