n.d(t, {
    O: () => u,
    Z: () => l
});
var r = n(200651),
    s = n(120356),
    o = n.n(s),
    a = n(481060),
    i = n(144931),
    c = n(543856);
function l(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)('div', {
        className: o()(c.toolbar, t),
        children: n
    });
}
function u(e) {
    let { iconSrc: t, title: n, onClick: s } = e;
    return (0, r.jsx)(a.ua7, {
        text: n,
        children: (e) => {
            var o, a;
            return (0, r.jsx)(
                i.Z,
                ((o = (function (e) {
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
                })({}, e)),
                (a = a =
                    {
                        onClick: s,
                        className: c.toolbarButton,
                        children: (0, r.jsx)('img', {
                            className: c.icon,
                            src: t,
                            alt: n
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                o)
            );
        }
    });
}
