r.d(e, { Z: () => l });
var n = r(200651);
r(192379);
var i = r(325767);
function l(t) {
    var e,
        r,
        { width: l = 18, height: a = 22, color: o = 'currentColor' } = t,
        s = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                i = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(t);
                    for (n = 0; n < l.length; n++) (r = l[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
                    return i;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(t);
                for (n = 0; n < l.length; n++) (r = l[n]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
            }
            return i;
        })(t, ['width', 'height', 'color']);
    return (0, n.jsx)(
        'svg',
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        })
                    )),
                    n.forEach(function (e) {
                        var n;
                        (n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = n);
                    });
            }
            return t;
        })({}, (0, i.Z)(s))),
        (r = r =
            {
                width: l,
                height: a,
                viewBox: '0 0 18 22',
                xmlns: 'http://www.w3.org/2000/svg',
                children: (0, n.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M2 0H13.414L18 4.586V20C18 21.103 17.103 22 16 22H2C0.897 22 0 21.103 0 20V2C0 0.898 0.897 0 2 0ZM12 1V6H17L12 1ZM11.9444 10.2778L10.6667 9H14V12.3333L12.7222 11.0556L11.1278 12.6611L10.3389 11.8722L11.9444 10.2778ZM5.27778 11.0556L4 12.3333V9H7.33333L6.05556 10.2778L7.66111 11.8722L6.87222 12.6611L5.27778 11.0556ZM6.05556 17.7222L7.33333 19H4V15.6667L5.27778 16.9444L6.87222 15.3389L7.66111 16.1278L6.05556 17.7222ZM12.7222 16.9444L14 15.6667V19H10.6667L11.9444 17.7222L10.3389 16.1278L11.1278 15.3389L12.7222 16.9444Z',
                    fill: o
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e)
    );
}
