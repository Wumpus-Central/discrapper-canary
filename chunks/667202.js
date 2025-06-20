n.d(t, { I: () => o });
var i = n(255367);
n(73800);
var r = n(257465),
    s = n(369585),
    l = n(530392),
    a = n(37148);
function o(e) {
    var t,
        n,
        { gradientColor: o = 'purple', image: c, title: d, headerBody: u, actions: m, children: g } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['gradientColor', 'image', 'title', 'headerBody', 'actions', 'children']);
    return (0, i.jsxs)(
        r.IX,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({}, p)),
        (n = n =
            {
                size: 'md',
                paddingSize: 'lg',
                children: [
                    (0, i.jsx)(a.x, {
                        gradientColor: o,
                        image: c,
                        title: d,
                        titleTextVariant: 'heading-xl/semibold',
                        body: u,
                        alignCenter: !0
                    }),
                    (0, i.jsx)(l.h, { children: g }),
                    (0, i.jsx)(s.G, {
                        actions: m,
                        actionsFullWidth: !0
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
