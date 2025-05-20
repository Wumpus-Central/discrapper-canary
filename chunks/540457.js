n.d(t, { A: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(441012);
function s(e) {
    let { text: t, tooltipText: n, onClick: s } = e;
    return (0, r.jsx)(i.ua7, {
        text: n,
        shouldShow: null != n,
        children: (e) => {
            var n, a;
            return (0, r.jsxs)(
                i.P3F,
                ((n = (function (e) {
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
                        className: l.container,
                        onClick: s,
                        children: [
                            (0, r.jsx)(i.qJs, {
                                size: 'md',
                                color: 'currentColor',
                                className: l.icon
                            }),
                            (0, r.jsx)(i.Text, {
                                color: 'interactive-active',
                                variant: 'text-md/semibold',
                                children: t
                            })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                n)
            );
        }
    });
}
