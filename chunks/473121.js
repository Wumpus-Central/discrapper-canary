n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(454585),
    s = n(273744),
    o = n(388032),
    c = n(775148);
let d = (e) => {
    var t, n;
    let {
            node: { header: d, subheader: u, button: m },
            isModeratorReport: p,
        } = e,
        g = (null == m ? void 0 : m.type) === "submit",
        _ = i.useRef(
            a.Z.reactParserFor(
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, a.Z.defaultRules)),
                (n = n = { link: s.s }),
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
                t),
            ),
        );
    return (0, r.jsxs)("div", {
        className: c.headerContainer,
        children: [
            null != d && "" !== d
                ? (0, r.jsx)(l.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: d,
                  })
                : null,
            null != u && "" !== d
                ? (0, r.jsx)(l.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: _.current(u),
                  })
                : null,
            g &&
                !p &&
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: o.intl.format(o.t.Q0tSKT, {}),
                }),
        ],
    });
};
