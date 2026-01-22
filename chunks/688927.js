n.d(t, { A: () => d });
var l = n(627968),
    r = n(64700),
    a = n(397927),
    i = n(46054),
    s = n(861662),
    o = n(985018),
    c = n(888791);
let d = (e) => {
    let {
            node: { header: t, subheader: n, button: d },
            isModeratorReport: u,
            isTidaReport: m = !1,
        } = e,
        b = (null == d ? void 0 : d.type) === "submit",
        p = r.useMemo(() => {
            var e, t;
            return i.A.reactParserFor(
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, i.A.defaultRules)),
                (t = t = { link: s.B }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e),
            );
        }, []);
    return (0, l.jsxs)("div", {
        className: c.N,
        children: [
            null != t && "" !== t
                ? (0, l.jsx)(a.Heading, {
                      variant: "heading-xl/semibold",
                      color: "text-strong",
                      children: t,
                  })
                : null,
            null != n && "" !== t
                ? (0, l.jsx)(a.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: p(n),
                  })
                : null,
            b &&
                !u &&
                !m &&
                (0, l.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: o.intl.format(o.t.Q0tSKT, {}),
                }),
        ],
    });
};
