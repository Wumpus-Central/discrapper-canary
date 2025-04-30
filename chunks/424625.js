l.d(t, { Z: () => s });
var n = l(200651);
l(192379);
var r = l(325767);
function s(e) {
    var t,
        l,
        { width: s = 24, height: i = 24, color: o = 'currentColor' } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var l,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var l,
                        n,
                        r = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (l = s[n]), t.indexOf(l) >= 0 || (r[l] = e[l]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (l = s[n]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
            }
            return r;
        })(e, ['width', 'height', 'color']);
    return (0, n.jsxs)(
        'svg',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(l);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(l).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(l, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = l[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, (0, r.Z)(a))),
        (l = l =
            {
                width: s,
                height: i,
                viewBox: '0 0 16 16',
                children: [
                    (0, n.jsx)('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z',
                        fill: o
                    }),
                    (0, n.jsx)('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z',
                        fill: o
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(l)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
              }),
        t)
    );
}
