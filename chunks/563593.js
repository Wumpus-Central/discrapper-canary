n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(886364),
    l = n(325767);
function a(e) {
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
}
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function s(e) {
    return 'CloudDone-'.concat(e);
}
function c(e) {
    var { width: t = 24, height: n = 24, color: c = 'currentColor', foreground: u, gradientConfig: d } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['width', 'height', 'color', 'foreground', 'gradientConfig']);
    let h = null;
    return (
        null != d &&
            (h = (0, r.jsx)(
                i.Z,
                o(a({}, d), {
                    color: c,
                    id: s(d.id)
                })
            )),
        (0, r.jsxs)(
            'svg',
            o(a({}, (0, l.Z)(p)), {
                width: t,
                height: n,
                viewBox: '0 0 24 24',
                children: [
                    (0, r.jsx)('defs', { children: h }),
                    (0, r.jsx)('path', {
                        d: 'M0 0h24v24H0z',
                        fill: 'none'
                    }),
                    (0, r.jsx)('path', {
                        fill: null != d ? 'url(#'.concat(s(d.id), ')') : c,
                        className: u,
                        d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z'
                    })
                ]
            })
        )
    );
}
