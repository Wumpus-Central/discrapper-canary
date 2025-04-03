n.d(t, { Z: () => d });
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(454585),
    o = n(273744),
    s = n(388032),
    c = n(21330);
let d = (e) => {
    var t, n;
    let {
            node: { header: d, subheader: u, button: m }
        } = e,
        x = (null == m ? void 0 : m.type) === 'submit',
        p = l.useRef(
            a.Z.reactParserFor(
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
                })({}, a.Z.defaultRules)),
                (n = n = { link: o.s }),
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
            )
        );
    return (0, r.jsxs)('div', {
        className: c.headerContainer,
        children: [
            null != d && '' !== d
                ? (0, r.jsx)(i.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      children: d
                  })
                : null,
            null != u && '' !== d
                ? (0, r.jsx)(i.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: p.current(u)
                  })
                : null,
            x &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    children: s.NW.format(s.t.Q0tSKS, {})
                })
        ]
    });
};
