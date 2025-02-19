n.d(t, { Z: () => s });
var l = n(200651);
n(192379);
var r = n(325767);
function s(e) {
    var t,
        n,
        { width: s = 24, height: i = 24, color: o = 'currentColor' } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        s = Object.keys(e);
                    for (l = 0; l < s.length; l++) (n = s[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (l = 0; l < s.length; l++) (n = s[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['width', 'height', 'color']);
    return (0, l.jsxs)(
        'svg',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    l.forEach(function (t) {
                        var l;
                        (l = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = l);
                    });
            }
            return e;
        })({}, (0, r.Z)(a))),
        (n = n =
            {
                width: s,
                height: i,
                viewBox: '0 0 16 16',
                children: [
                    (0, l.jsx)('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z',
                        fill: o
                    }),
                    (0, l.jsx)('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z',
                        fill: o
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
