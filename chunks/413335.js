n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(331595),
    s = n(267843);
function a(e) {
    var t,
        n,
        a,
        l,
        { size: o = 'sm', color: c = '#FF73FA', width: d, height: u } = e,
        m = (function (e, t) {
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
        })(e, ['size', 'color', 'width', 'height']);
    let g = (0, s.m)(o),
        p = null != (a = null == g ? void 0 : g.width) ? a : d,
        h = null != (l = null == g ? void 0 : g.height) ? l : u;
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
        })(
            {
                width: p,
                height: h,
                viewBox: '0 0 10 16',
                fill: 'string' == typeof c ? c : c.css
            },
            (0, i.Z)(m)
        )),
        (n = n =
            {
                xmlns: 'http://www.w3.org/2000/svg',
                children: [(0, r.jsx)('path', { d: 'M5 0.5L0 5.5V10.5L5 15.5L10 10.5V5.5L5 0.5ZM8.75 9.9875L5 13.7375L1.25 9.9875V6.0125L5 2.2625L8.75 6.0125V9.9875Z' }), (0, r.jsx)('path', { d: 'M2.5 6.53751V9.46251L5 11.9625L7.5 9.46251V6.53751L5 4.03751L2.5 6.53751Z' })]
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
